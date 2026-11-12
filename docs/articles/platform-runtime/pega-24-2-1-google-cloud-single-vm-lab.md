---
layout: default
title: "Pega Platform 24.2.1 on Google Cloud: A Verified Single-VM Lab, from PostgreSQL Import to Dev Studio"
description: "A real deployment and failure-recovery walkthrough of Pega 24.2.1 on Ubuntu, Tomcat, PostgreSQL and Kafka, with reproducible checks and security boundaries."
category: platform-runtime
topic_id: LAB-001
verification: lab-verified
lab_date: 2026-11-12
---

# Pega Platform 24.2.1 on Google Cloud: from a blank Ubuntu VM to Dev Studio

**Evidence status:** Observed in a real, single-node development lab on **12 November 2026**. Commands and log excerpts below reflect the observed deployment; some code blocks are generalised for safe reuse. **Scope:** Platform installation and first administrator/Dev Studio access. **Not yet completed:** CDH import, functional CDH testing, production hardening or load testing.

This case study documents the architecture and the actual failures encountered, rather than presenting a clean-room install that never goes wrong. The pivotal incident was a healthy Tomcat container serving **HTTP 503** because Pega's stream service had no Kafka broker URL. After configuring a local Kafka service, the PegaRULES engine reported a successful start, the endpoint returned **HTTP 307**, and the Pega login and Dev Studio screens were opened successfully through an SSH tunnel.

> **Safety:** This is a disposable, isolated development lab, **not a recommended production topology**. Do not paste real passwords, private keys, cloud console links, session-bearing Pega URLs or unredacted logs into a public repository. The instance name, public IP address, project ID, private credentials and browser session identifiers are intentionally omitted here.

## 1. The architectural question

What is the smallest understandable, reproducible Pega 24.2.1 deployment that lets an architect exercise the product, and how do we prove each subsystem is actually healthy?

A running Linux service is not equivalent to a functioning Pega application. There are at least five independent checks:

1. PostgreSQL accepts connections and has the Pega rules/data schemas.
2. The Pega installer imports its rulebase and exits with success.
3. Tomcat can establish its JNDI datasource and deploy the bootstrap WAR.
4. The PegaRULES engine initialises its stream-dependent services.
5. A browser can authenticate and load Dev Studio.

## 2. Observed environment

| Component | Observed version / setup |
|---|---|
| Cloud | Google Compute Engine, Europe West region |
| VM | Ubuntu 22.04.5 LTS, 4 vCPU, 16 GiB class memory, 80 GB persistent disk |
| Java | OpenJDK 17.0.21 |
| Database | PostgreSQL 16.15, localhost:5432 |
| Pega release | Platform 24.2.1; engine log identified PRPC-8.24.51-236 |
| Servlet container | Apache Tomcat 9.0.123 |
| Kafka | Apache Kafka 3.8.1, one KRaft broker/controller |
| Browser access | Windows Edge through a PuTTY SSH local-forwarding tunnel |
| Node roles observed | WebUser, BackgroundProcessing, Search |
| Result | Login screen and Dev Studio displayed successfully |

**Compatibility qualification:** These exact versions worked sufficiently to establish a development login. This is *not* a certification of vendor support, HA, performance, upgrade path, Kafka interoperability under load, or production suitability. Consult the official Pega Platform 24.2 deployment and support documentation before using the pattern elsewhere.

### System topology

![Single-VM Pega 24.2.1 deployment topology: Windows Edge through SSH tunnel to Tomcat, PostgreSQL, and Kafka on a Google Cloud Ubuntu VM]({{ '/assets/diagrams/pega-24-2-1-single-vm-lab.svg' | relative_url }})

*Conceptual topology, reconstructed from the configured services; not a packet capture.*

## 3. Prepare PostgreSQL, schemas and the installer

The lab used a dedicated PostgreSQL database and login with separate schemas:

- Database: **pega2421_lab**
- Application user: **pega2421_lab**
- Rules schema: **pegarules**
- Data schema: **pegadata**
- PostgreSQL JDBC driver: **/usr/share/java/postgresql.jar**

The installation media was staged under **/opt/pega/media/platform-24.2.1**, including **scripts/install.sh**, **scripts/setupDatabase.properties**, and **archives/prweb.war**. The installer properties included the JDBC driver class **org.postgresql.Driver**, a local PostgreSQL URL, the two schema names, database type **postgres**, and a separately chosen first-login administrator password. Protect **setupDatabase.properties** with restrictive permissions; it contains secrets.

Representative, **redacted** property values:

~~~properties
pega.jdbc.driver.jar=/usr/share/java/postgresql.jar
pega.jdbc.driver.class=org.postgresql.Driver
pega.database.type=postgres
pega.jdbc.url=jdbc:postgresql://127.0.0.1:5432/pega2421_lab
pega.jdbc.username=pega2421_lab
pega.jdbc.password=<SET_SECURELY_DO_NOT_COMMIT>
pega.admin.password=<SET_SECURELY_DO_NOT_COMMIT>
rules.schema.name=pegarules
data.schema.name=pegadata
bypass.pega.schema=false
bypass.udf.generation=true
system.name=pega
production.level=2
~~~

The rulebase installer was launched as the unprivileged **pega** service account in a detached systemd unit, so it could continue independently of a browser SSH session.

~~~bash
sudo systemd-run --unit=pega-db-install \
  --uid=pega --gid=pega \
  --property="WorkingDirectory=/opt/pega/media/platform-24.2.1/scripts" \
  --setenv="JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64" \
  /bin/bash ./install.sh
~~~

**Do not rerun the installer against a populated database.** The initial installation was allowed to complete once. During import, the console showed **76,100 / 81,515 (93.36%)** for one import phase, with **0 errors**; this was *phase progress*, not the overall installation percentage.

Checks used:

~~~bash
sudo systemctl show pega-db-install.service \
  -p ActiveState -p SubState -p Result -p ExecMainStatus

sudo -u postgres psql -d pega2421_lab -tAc \
"SELECT table_schema, COUNT(*)
 FROM information_schema.tables
 WHERE table_schema IN ('pegarules','pegadata')
 GROUP BY table_schema;"
~~~

At one intermediate point the information schema showed **92 rules-schema tables** and **326 data-schema tables**; this was only a snapshot while installation was still progressing. The definitive completion evidence was the installer log text **“Pega Infinity database load complete.”** with **Result=success**, **ExecMainStatus=0**, and the transient unit no longer running.

**Operational lesson:** systemd can show **Result=success** while a unit is still **active/running**; do not mistake an interim process status for final installer success.

## 4. Install Tomcat and configure its database resource

Tomcat ran as the unprivileged **pega** account, with Java 17 and a lab heap configuration of **-Xms1024m -Xmx4096m**. The standard Tomcat example and management webapps were removed from deployment. Its HTTP connector was bound to **127.0.0.1:8080**, not a public interface.

The PostgreSQL JDBC driver had to be copied into Tomcat's shared library directory:

~~~bash
sudo install -o pega -g pega -m 644 \
  /usr/share/java/postgresql.jar \
  /opt/pega/tomcat/lib/postgresql.jar
~~~

Pega's WAR declared a container resource named **jdbc/PegaRULES**. A single-database-user lab was configured with a Tomcat Resource of that name and the standard JDBC driver. The two schema mappings were set as Tomcat Environment entries:

~~~xml
<!-- Illustrative fragments; password deliberately omitted -->
<Resource name="jdbc/PegaRULES"
          auth="Container"
          type="javax.sql.DataSource"
          driverClassName="org.postgresql.Driver"
          url="jdbc:postgresql://127.0.0.1:5432/pega2421_lab"
          username="pega2421_lab"
          password="SET_SECURELY"
          maxTotal="20" maxIdle="10"
          maxWaitMillis="10000"
          validationQuery="SELECT 1"
          testOnBorrow="true" />

<Environment name="prconfig/database/databases/PegaRULES/defaultSchema"
             value="pegarules" type="java.lang.String" />
<Environment name="prconfig/database/databases/PegaDATA/defaultSchema"
             value="pegadata" type="java.lang.String" />
~~~

**Never commit the real context.xml.** In a production design use controlled secrets distribution and least-privilege database roles. The WAR also declares additional container resource references; the example only records the working base datasource arrangement for this single-user lab.

The deployed archive was small (roughly **380 KB** on disk): Pega's **prweb.war** is a bootstrap archive, so size alone did not indicate a corrupt package.

~~~bash
sudo systemctl stop pega-tomcat
sudo install -o pega -g pega -m 640 \
  /opt/pega/media/platform-24.2.1/archives/prweb.war \
  /opt/pega/tomcat/webapps/prweb.war
sudo systemctl start pega-tomcat

curl -I --max-time 15 http://127.0.0.1:8080/
~~~

The empty Tomcat ROOT context returned **HTTP 404** before Pega deployment, confirming the connector worked. A previous immediate **connection refused** after service start had only shown that the HTTP connector was not yet listening; later checks confirmed an active listener. Verify the port and application separately.

## 5. Actual failure: Tomcat was healthy but Pega returned HTTP 503

After the WAR expanded, the first web request timed out during startup. Once Tomcat completed deploying the app, requests returned **HTTP 503**.

Key failure sequence, **sanitised from the actual startup logs**:

~~~text
Now starting the PegaRULES Engine...
Initializing DSM services...
ERROR - Unable to create DSM service DATA-DECISION-SERVICE-DATAFLOW DEFAULT
Caused by: com.pega.platform.stream.StreamServiceException:
  Failed to configure StreamAPI provider
Caused by: com.pega.platform.stream.StreamServiceException:
  'services/stream/broker/url' isn't provided.
ERROR - PegaRULES initialization failed.
ERROR - Enterprise tier failed to initialize properly, PegaRULES not available
~~~

This pinpointed a missing **stream broker URL**, not a PostgreSQL installer failure. The shutdown also logged Hazelcast cleanup; that was *a consequence of the engine abort*, not evidence that Hazelcast caused it.

The VM initially had **no Kafka installation** and no listener on **9092**.

### What distinguished symptoms from the cause

| Signal | Interpretation |
|---|---|
| Tomcat service active | Servlet container alive, not proof the Pega engine is healthy |
| WAR expanded | Deployment archive discovered, not proof startup succeeded |
| HTTP 503 | Deployed app could not serve requests |
| Engine shutdown / Hazelcast shutdown | Downstream effect, not automatically root cause |
| Missing services/stream/broker/url | Actionable cause for this incident |
| HTTP timeout | Startup still in progress, blocked, or overloaded; inspect logs |

## 6. Add a local Kafka broker (lab only)

We installed **Kafka 3.8.1** and used its **KRaft** single-node mode. The archive was downloaded from Apache and its SHA-512 digest compared with the published checksum. A browser SSH session dropped during download; the partial archive was retained, tested with **tar -tzf**, and reused successfully. Avoid using **set -e** in an interactive troubleshooting shell if you want the shell to remain open after a command failure.

The Kafka service ran as its own **kafka** Unix user. The essential local configuration was:

~~~properties
process.roles=broker,controller
node.id=1
controller.quorum.voters=1@127.0.0.1:9093
listeners=PLAINTEXT://127.0.0.1:9092,CONTROLLER://127.0.0.1:9093
advertised.listeners=PLAINTEXT://127.0.0.1:9092
listener.security.protocol.map=PLAINTEXT:PLAINTEXT,CONTROLLER:PLAINTEXT
inter.broker.listener.name=PLAINTEXT
controller.listener.names=CONTROLLER
log.dirs=/var/lib/kafka/data
num.partitions=3
default.replication.factor=1
offsets.topic.replication.factor=1
transaction.state.log.replication.factor=1
transaction.state.log.min.isr=1
auto.create.topics.enable=true
~~~

The broker storage was formatted **once**, guarded by checking for **meta.properties**. The **pega-kafka** systemd service was configured with a modest **512 MB initial / 1024 MB maximum heap**.

Connectivity evidence:

~~~bash
sudo systemctl is-active pega-kafka
sudo ss -lntp | grep -E ':9092|:9093'
/opt/kafka/bin/kafka-broker-api-versions.sh \
  --bootstrap-server 127.0.0.1:9092
~~~

Observed: the service was **active**, both listeners were bound to **127.0.0.1**, and the broker API query responded with broker **id 1**.

This plaintext, single-replica arrangement is acceptable only behind the deliberately isolated loopback boundary of this lab. Do **not** expose Kafka publicly or reuse its settings as a production baseline.

## 7. Configure Pega's stream service and recover startup

The local lab used the expanded webapp's **WEB-INF/classes/prconfig.xml** to set the Kafka provider and broker URL:

~~~xml
<env name="services/stream/provider" value="ExternalKafka"/>
<env name="services/stream/broker/url" value="127.0.0.1:9092"/>
<env name="services/stream/external/replication/factor" value="1"/>
<env name="services/stream/encryption/security/protocol" value="plaintext"/>
~~~

The XML was backed up and parsed before Tomcat was restarted. Editing the *expanded WAR directory* is **not a persistent deployment strategy**: redeploying may overwrite those changes. A follow-up hardening task is to move settings to an externalised, supported configuration mechanism.

After Kafka became available, the next boot logged:

~~~text
INFO - Initializing DSM services...
INFO - Successfully started service [DataFlow.Default]
INFO - DSM services initialized successfully
INFO - PegaRULES engine successfully started.
INFO - Health Check Service initialized
~~~

The logs also showed **“Could not find service [DataFlow.WebUser]”** during queue-processor startup; these errors remained an open operational follow-up, not a blocker for the observed interactive login.

A subsequent request returned **HTTP 307** in approximately **0.005 seconds**, redirecting from **/prweb/** to **/prweb/app/default/**. That is an observed *single local HTTP response time*, **not a throughput benchmark** or end-user page load measurement.

~~~bash
curl -sSI --max-time 15 http://127.0.0.1:8080/prweb/
# HTTP/1.1 307
# Location: http://127.0.0.1:8080/prweb/app/default/
~~~

## 8. Browser access without a public Tomcat port

The server listened only on **127.0.0.1:8080**. The Windows workstation used a **PuTTY SSH local tunnel**:

| PuTTY setting | Value |
|---|---|
| Source port | 8080 |
| Destination | 127.0.0.1:8080 |
| Forwarding type | Local |

The browser opened **http://localhost:8080/prweb/app/default/**. This reached the Pega Infinity sign-in page. Authentication was performed with the initial **administrator@pega.com** operator using the password configured at install time, following the first-login experience. An authenticated session then displayed the **Pega Dev Studio** interface with the **Pega Platform** application selected.

**Proof of outcome (observed UI, not recreated screenshots):**
- Browser screenshot: Pega Infinity username/password sign-in page rendered at localhost.
- Browser screenshot: Pega application creation landing page after login.
- Browser screenshot: Dev Studio home with the Pega Platform application and rule explorer visible.

The original screenshots were reviewed during the lab session but are **not included as downloadable image assets in this repository article**. This distinction matters: the written observations are authentic, but no screenshot files are claimed to have been committed.

## 9. Operational validation matrix

| Validation | Observed outcome | What it proves / does not prove |
|---|---|---|
| Postgres service and DB authentication | Passed | Basic DB connectivity, not application correctness |
| Installer exit + completion log | Passed | Rulebase load completed |
| Tomcat localhost HTTP connector | Passed | Web server reachable |
| WAR expansion | Passed | Bootstrap archive deployed |
| First Pega engine startup | Failed, HTTP 503 | Missing stream configuration prevented engine init |
| Kafka broker API query | Passed | Broker accessible on local port |
| DSM services after Kafka configuration | Passed | Prior stream config blocker resolved |
| PegaRULES engine startup log | Passed | Engine initialised |
| HTTP redirect | 307 | Application responds and redirects |
| Windows browser sign-in page | Passed | SSH forwarding and UI endpoint work |
| Authenticated Dev Studio UI | Passed | Initial interactive administration works |
| CDH installed / usable | **Not tested** | Separate future task |
| Load/HA/security/upgrade tests | **Not tested** | No production readiness claim |

### Remaining risks and follow-ups

- Confirm version compatibility and support policies for Pega, Tomcat, PostgreSQL, Kafka and Java before any non-lab use.
- Investigate the observed **DataFlow.WebUser** queue-processor errors; do not assume background processing is fully healthy because Dev Studio loads.
- Verify search, job schedulers, queue processors, and any required external search services before implementing workloads.
- Externalise **prconfig.xml** and database credentials; protect filesystem backups and avoid committing logs or secrets.
- Add restart ordering, service health checks, backups, disk growth alarms and patch management.
- Single Kafka broker, single PostgreSQL instance and single Tomcat process are **single points of failure**.
- Keep the SSH tunnel private. Do not open Tomcat, Kafka or database ports on the public cloud firewall merely to make the UI easy to reach.
- Assess capacity from measured workload: Pega heap, Kafka heap, PostgreSQL buffer/cache, native memory and OS cache compete for the same 16 GB budget.
- Install and validate Pega Customer Decision Hub separately; **this article does not claim CDH is installed**.

## 10. Key architectural lessons

1. **Inspect the first nested “Caused by”**, not the final “Enterprise tier failed” error. The actual fault was the missing stream broker URL.
2. **Treat service health by layer.** Active systemd services, open ports, a 307 redirect, an authenticated UI and working asynchronous data flows answer different questions.
3. **Do not misdiagnose shutdown messages.** Hazelcast shutdown followed the DSM failure and was not itself the proven cause.
4. **Protect the bootstrap boundary.** A small Pega WAR is normal in this deployment; rules and runtime bootstrap rely on database and external services.
5. **Isolate lab infrastructure.** Localhost bindings plus SSH forwarding are safer than publishing an unaudited admin console.
6. **Distinguish an observed success from production readiness.** The lab reached Dev Studio, but no CDH functionality, availability or performance target was certified.

## References and evidence provenance

- [Pega Platform technical documentation](https://docs.pega.com/)
- [Pega Academy — Stream service](https://academy.pega.com/topic/stream-service/v3)
- [Apache Kafka 3.8 documentation](https://kafka.apache.org/38/documentation/)
- [Apache Tomcat 9 documentation](https://tomcat.apache.org/tomcat-9.0-doc/)
- [PostgreSQL documentation](https://www.postgresql.org/docs/)
- Primary evidence: terminal logs, exit codes, HTTP responses and browser screenshots supplied during the **12 November 2026** lab session; sensitive identifiers and credentials withheld.

*Independent technical documentation, not affiliated with Pegasystems. No client-specific data, synthetic screenshots or invented performance results are presented.*
