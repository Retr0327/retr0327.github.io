"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4017],{4017:function(e,t,r){r.r(t),r.d(t,{diagram:function(){return i}});var l=r(3557),o=r(6805),a=r(579);r(9599),r(5804),r(3582),r(6003),r(6873),r(3243),r(4637);let i={parser:l.p,db:l.f,renderer:o.f,styles:o.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,(0,a.f)({flowchart:{arrowMarkerAbsolute:e.arrowMarkerAbsolute}}),o.f.setConf(e.flowchart),l.f.clear(),l.f.setGen("gen-2")}}},6805:function(e,t,r){r.d(t,{a:function(){return g},f:function(){return w}});var l=r(6003),o=r(9599),a=r(3557),i=r(579),n=r(2332),s=r(8337),d=r(6936),c=r(4694);let p={},b=function(e,t,r,l,o,a){let s=l.select(`[id="${r}"]`),c=Object.keys(e);c.forEach(function(r){let l;let c=e[r],p="default";c.classes.length>0&&(p=c.classes.join(" "));let b=(0,n.m)(c.styles),f=void 0!==c.text?c.text:c.id;if((0,i.j)((0,i.g)().flowchart.htmlLabels)){let e={label:f.replace(/fa[blrs]?:fa-[\w-]+/g,e=>`<i class='${e.replace(":"," ")}'></i>`)};(l=(0,d.a)(s,e).node()).parentNode.removeChild(l)}else{let e=o.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",b.labelStyle.replace("color:","fill:"));let t=f.split(i.d.lineBreakRegex);for(let r of t){let t=o.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=r,e.appendChild(t)}l=e}let w=0,u="";switch(c.type){case"round":w=5,u="rect";break;case"square":case"group":default:u="rect";break;case"diamond":u="question";break;case"hexagon":u="hexagon";break;case"odd":case"odd_right":u="rect_left_inv_arrow";break;case"lean_right":u="lean_right";break;case"lean_left":u="lean_left";break;case"trapezoid":u="trapezoid";break;case"inv_trapezoid":u="inv_trapezoid";break;case"circle":u="circle";break;case"ellipse":u="ellipse";break;case"stadium":u="stadium";break;case"subroutine":u="subroutine";break;case"cylinder":u="cylinder";break;case"doublecircle":u="doublecircle"}t.setNode(c.id,{labelStyle:b.labelStyle,shape:u,labelText:f,rx:w,ry:w,class:p,style:b.style,id:c.id,link:c.link,linkTarget:c.linkTarget,tooltip:a.db.getTooltip(c.id)||"",domId:a.db.lookUpDomId(c.id),haveCallback:c.haveCallback,width:"group"===c.type?500:void 0,dir:c.dir,type:c.type,props:c.props,padding:(0,i.g)().flowchart.padding}),i.l.info("setNode",{labelStyle:b.labelStyle,shape:u,labelText:f,rx:w,ry:w,class:p,style:b.style,id:c.id,domId:a.db.lookUpDomId(c.id),width:"group"===c.type?500:void 0,type:c.type,dir:c.dir,props:c.props,padding:(0,i.g)().flowchart.padding})})},f=function(e,t,r){let l,a;i.l.info("abc78 edges = ",e);let s=0,d={};if(void 0!==e.defaultStyle){let t=(0,n.m)(e.defaultStyle);l=t.style,a=t.labelStyle}e.forEach(function(r){s++;var c="L-"+r.start+"-"+r.end;void 0===d[c]?(d[c]=0,i.l.info("abc78 new entry",c,d[c])):(d[c]++,i.l.info("abc78 new entry",c,d[c]));let b=c+"-"+d[c];i.l.info("abc78 new link id to be used is",c,b,d[c]);var f="LS-"+r.start,w="LE-"+r.end;let u={style:"",labelStyle:""};switch(u.minlen=r.length||1,"arrow_open"===r.type?u.arrowhead="none":u.arrowhead="normal",u.arrowTypeStart="arrow_open",u.arrowTypeEnd="arrow_open",r.type){case"double_arrow_cross":u.arrowTypeStart="arrow_cross";case"arrow_cross":u.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":u.arrowTypeStart="arrow_point";case"arrow_point":u.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":u.arrowTypeStart="arrow_circle";case"arrow_circle":u.arrowTypeEnd="arrow_circle"}let g="",h="";switch(r.stroke){case"normal":g="fill:none;",void 0!==l&&(g=l),void 0!==a&&(h=a),u.thickness="normal",u.pattern="solid";break;case"dotted":u.thickness="normal",u.pattern="dotted",u.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":u.thickness="thick",u.pattern="solid",u.style="stroke-width: 3.5px;fill:none;";break;case"invisible":u.thickness="invisible",u.pattern="solid",u.style="stroke-width: 0;fill:none;"}if(void 0!==r.style){let e=(0,n.m)(r.style);g=e.style,h=e.labelStyle}u.style=u.style+=g,u.labelStyle=u.labelStyle+=h,void 0!==r.interpolate?u.curve=(0,n.n)(r.interpolate,o.c_6):void 0!==e.defaultInterpolate?u.curve=(0,n.n)(e.defaultInterpolate,o.c_6):u.curve=(0,n.n)(p.curve,o.c_6),void 0===r.text?void 0!==r.style&&(u.arrowheadStyle="fill: #333"):(u.arrowheadStyle="fill: #333",u.labelpos="c"),u.labelType="text",u.label=r.text.replace(i.d.lineBreakRegex,"\n"),void 0===r.style&&(u.style=u.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),u.labelStyle=u.labelStyle.replace("color:","fill:"),u.id=b,u.classes="flowchart-link "+f+" "+w,t.setEdge(r.start,r.end,u,s)})},w={setConf:function(e){let t=Object.keys(e);for(let r of t)p[r]=e[r]},addVertices:b,addEdges:f,getClasses:function(e,t){i.l.info("Extracting classes"),t.db.clear();try{return t.parse(e),t.db.getClasses()}catch(e){return}},draw:function(e,t,r,d){let p,w;i.l.info("Drawing flowchart"),d.db.clear(),a.f.setGen("gen-2"),d.parser.parse(e);let u=d.db.getDirection();void 0===u&&(u="TD");let{securityLevel:g,flowchart:h}=(0,i.g)(),k=h.nodeSpacing||50,y=h.rankSpacing||50;"sandbox"===g&&(p=(0,o.Ys)("#i"+t));let x="sandbox"===g?(0,o.Ys)(p.nodes()[0].contentDocument.body):(0,o.Ys)("body"),m="sandbox"===g?p.nodes()[0].contentDocument:document,v=new l.k({multigraph:!0,compound:!0}).setGraph({rankdir:u,nodesep:k,ranksep:y,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),S=d.db.getSubGraphs();i.l.info("Subgraphs - ",S);for(let e=S.length-1;e>=0;e--)w=S[e],i.l.info("Subgraph - ",w),d.db.addVertex(w.id,w.title,"group",void 0,w.classes,w.dir);let _=d.db.getVertices(),C=d.db.getEdges();i.l.info("Edges",C);let T=0;for(T=S.length-1;T>=0;T--){w=S[T],(0,o.td_)("cluster").append("text");for(let e=0;e<w.nodes.length;e++)i.l.info("Setting up subgraphs",w.nodes[e],w.id),v.setParent(w.nodes[e],w.id)}b(_,v,t,x,m,d),f(C,v);let $=x.select(`[id="${t}"]`),E=x.select("#"+t+" g");if((0,s.r)(E,v,["point","circle","cross"],"flowchart",t),n.u.insertTitle($,"flowchartTitleText",h.titleTopMargin,d.db.getDiagramTitle()),(0,c.s)(v,$,h.diagramPadding,h.useMaxWidth),d.db.indexNodes("subGraph"+T),!h.htmlLabels){let e=m.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(let t of e){let e=t.getBBox(),r=m.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("rx",0),r.setAttribute("ry",0),r.setAttribute("width",e.width),r.setAttribute("height",e.height),t.insertBefore(r,t.firstChild)}}let A=Object.keys(_);A.forEach(function(e){let r=_[e];if(r.link){let l=(0,o.Ys)("#"+t+' [id="'+e+'"]');if(l){let e=m.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",r.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",r.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===g?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):r.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",r.linkTarget);let t=l.insert(function(){return e},":first-child"),o=l.select(".label-container");o&&t.append(function(){return o.node()});let a=l.select(".label");a&&t.append(function(){return a.node()})}}})}},u=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span {
    color: ${e.titleColor};
  }

  .label text,span {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`,g=u}}]);