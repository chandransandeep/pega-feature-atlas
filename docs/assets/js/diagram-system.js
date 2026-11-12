/* Pega Feature Atlas: common diagram renderer */
(() => {
'use strict';
const NS='http://www.w3.org/2000/svg';
const el=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;};
function linearFlow(source){
 const lines=source.replace(/\r/g,'').split('\n').map(x=>x.trim()).filter(x=>x&&!x.startsWith('%%'));
 if(!/^(flowchart|graph)\s+(LR|TB|TD|RL|BT)$/i.test(lines.shift()||''))return null;
 const labels=new Map(),edges=[];
 for(const line of lines){
  const n=line.match(/^([a-z][\w-]*)\s*\[\s*"([^"]+)"\s*\]\s*;?$/i);
  const e=line.match(/^([a-z][\w-]*)\s*-->\s*([a-z][\w-]*)\s*;?$/i);
  if(n){if(labels.has(n[1]))return null;labels.set(n[1],n[2].replace(/\\n/g,'\n'));}
  else if(e)edges.push([e[1],e[2]]);else return null;
 }
 if(labels.size<2||edges.length!==labels.size-1)return null;
 const deg=new Map([...labels.keys()].map(k=>[k,0])),next=new Map();
 for(const [a,b] of edges){if(!labels.has(a)||!labels.has(b)||next.has(a))return null;next.set(a,b);deg.set(b,deg.get(b)+1);if(deg.get(b)>1)return null;}
 const starts=[...deg].filter(x=>x[1]===0);if(starts.length!==1)return null;
 const order=[];let k=starts[0][0];while(k!==undefined&&!order.includes(k)){order.push(k);k=next.get(k);}
 return order.length===labels.size?order.map(k=>labels.get(k)):null;
}
function frame(title){
 const figure=el('figure','pfa-diagram'),bar=el('div','pfa-diagram__bar'),name=el('figcaption','pfa-diagram__heading',title),actions=el('div','pfa-diagram__actions');
 const toggle=el('button','pfa-diagram__button','Expand');toggle.type='button';
 toggle.addEventListener('click',()=>{const on=figure.classList.toggle('pfa-diagram--expanded');document.body.classList.toggle('pfa-diagram-open',on);toggle.textContent=on?'Close expanded view':'Expand';figure.dispatchEvent(new Event('pfa-diagram-resize'));});
 actions.append(toggle);bar.append(name,actions);figure.append(bar);return {figure,actions};
}
const sv=(tag,attrs)=>{const e=document.createElementNS(NS,tag);for(const k in attrs)e.setAttribute(k,String(attrs[k]));return e;};
let counter=0;
function renderLinear(pre,labels){
 const {figure}=frame('System design · process flow'),grid=el('div','pfa-diagram__steps'),cols=Math.min(3,labels.length),id=++counter;
 grid.style.setProperty('--diagram-cols',String(cols));
 const nodes=labels.map((label,i)=>{const n=el('div','pfa-diagram__step'),row=Math.floor(i/cols),col=row%2===0?i%cols:cols-1-i%cols;
 n.style.gridRow=String(row+1);n.style.gridColumn=String(col+1);n.append(el('span','pfa-diagram__number',String(i+1).padStart(2,'0')),el('span','pfa-diagram__label',label));grid.append(n);return n;});
 const svg=sv('svg',{'class':'pfa-diagram__links','aria-hidden':'true'});grid.prepend(svg);figure.append(grid,el('div','pfa-diagram__note','Follow the numbered steps. Conceptual design, not a runtime trace.'));pre.replaceWith(figure);
 function draw(){const root=grid.getBoundingClientRect();if(!root.width||!root.height)return;svg.setAttribute('viewBox','0 0 '+root.width+' '+root.height);svg.setAttribute('width',root.width);svg.setAttribute('height',root.height);svg.replaceChildren();
 const mid='pfa-arrow-'+id,marker=sv('marker',{id:mid,markerWidth:8,markerHeight:8,refX:7,refY:4,orient:'auto'}),defs=sv('defs',{});marker.append(sv('path',{d:'M0 0 L8 4 L0 8Z',fill:'#3478a6'}));defs.append(marker);svg.append(defs);
 for(let i=0;i<nodes.length-1;i++){const a=nodes[i].getBoundingClientRect(),b=nodes[i+1].getBoundingClientRect(),same=Math.abs(a.top-b.top)<15;let x1,y1,x2,y2,d;
 if(same){const forward=b.left>a.left;x1=(forward?a.right:a.left)-root.left;x2=(forward?b.left:b.right)-root.left;y1=a.top+a.height/2-root.top;y2=b.top+b.height/2-root.top;const dx=(x2-x1)/2;d='M '+x1+' '+y1+' C '+(x1+dx)+' '+y1+', '+(x2-dx)+' '+y2+', '+x2+' '+y2;}
 else{x1=a.left+a.width/2-root.left;x2=b.left+b.width/2-root.left;y1=a.bottom-root.top;y2=b.top-root.top;const dy=(y2-y1)/2;d='M '+x1+' '+y1+' C '+x1+' '+(y1+dy)+', '+x2+' '+(y2-dy)+', '+x2+' '+y2;}
 svg.append(sv('path',{d,stroke:'#3478a6','stroke-width':3,fill:'none','marker-end':'url(#'+mid+')'}));}
 }
 if(typeof ResizeObserver!=='undefined')new ResizeObserver(draw).observe(grid);
 window.addEventListener('resize',draw,{passive:true});figure.addEventListener('pfa-diagram-resize',()=>requestAnimationFrame(draw));requestAnimationFrame(draw);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(draw);
}
async function renderMermaid(items){
 if(!items.length)return;let mermaid;
 try{({default:mermaid}=await import('https://cdn.jsdelivr.net/npm/mermaid@10.9.3/dist/mermaid.esm.min.mjs'));
 mermaid.initialize({startOnLoad:false,securityLevel:'strict',theme:'base',themeVariables:{fontFamily:'Arial,Helvetica,sans-serif',fontSize:'17px',primaryColor:'#ffffff',primaryTextColor:'#173c59',primaryBorderColor:'#bfd1e0',lineColor:'#3478a6',secondaryColor:'#e7f1f8',tertiaryColor:'#f4f8fc',background:'#f4f8fc',noteBkgColor:'#edf5fb',noteTextColor:'#173c59',actorBkg:'#ffffff',actorBorder:'#bfd1e0',actorTextColor:'#173c59',signalColor:'#3478a6',signalTextColor:'#173c59'},flowchart:{useMaxWidth:true,htmlLabels:false,nodeSpacing:30,rankSpacing:45},sequence:{useMaxWidth:true,wrap:true,diagramMarginX:12,diagramMarginY:12}});
 }catch(error){console.warn('Mermaid unavailable: source retained',error);return;}
 for(const {pre,source} of items){
 const {figure,actions}=frame(/^\s*sequenceDiagram\b/im.test(source)?'System design · interaction sequence':'System design · architecture'),view=el('div','pfa-diagram__visual mermaid',source);figure.append(view);pre.insertAdjacentElement('beforebegin',figure);
 try{await mermaid.run({nodes:[view]});const svg=view.querySelector('svg');if(!svg)throw Error('No SVG');svg.style.maxWidth='100%';svg.style.height='auto';
 const toggle=el('button','pfa-diagram__button','Actual size');toggle.type='button';toggle.addEventListener('click',()=>{const on=view.classList.toggle('pfa-diagram__visual--natural');toggle.textContent=on?'Fit to page':'Actual size';});actions.prepend(toggle);pre.remove();}
 catch(error){figure.remove();console.warn('Mermaid failed: source retained',error);}
 }
}
function wrapSVGs(){
 document.querySelectorAll('main img[src*="/assets/diagrams/"]').forEach(img=>{
 if(img.closest('.pfa-diagram'))return;const p=img.closest('p');if(!p||p.querySelectorAll('img').length!==1||p.textContent.trim())return;
 const {figure}=frame('System design · architecture'),view=el('div','pfa-diagram__visual pfa-diagram__visual--image');view.append(img);figure.append(view,el('div','pfa-diagram__note',img.alt||'Architecture diagram'));p.replaceWith(figure);
 });
}
async function run(){
 const complex=[];
 document.querySelectorAll('main pre > code.language-mermaid, main pre > code.lang-mermaid').forEach(code=>{const pre=code.parentElement,source=code.textContent||'',linear=linearFlow(source);if(linear)renderLinear(pre,linear);else complex.push({pre,source});});
 wrapSVGs();await renderMermaid(complex);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
})();