"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[991],{991:function(e,l,t){t.r(l),t.d(l,{diagram:function(){return f}});var a=t(3074),n=t(9599),i=t(6003),o=t(579),s=t(8337),r=t(2332),d=t(4694);t(3582),t(4637),t(6873),t(3243),t(5804);let c=e=>o.d.sanitizeText(e,(0,o.g)()),g={dividerMargin:10,padding:5,textHeight:10,curve:void 0},b=function(e,l,t,a){let n=Object.keys(e);o.l.info("keys:",n),o.l.info(e),n.forEach(function(t){var n,i;let s=e[t],r="";s.cssClasses.length>0&&(r=r+" "+s.cssClasses.join(" "));let d={labelStyle:"",style:""},g=s.label??s.id,b={labelStyle:d.labelStyle,shape:"class_box",labelText:c(g),classData:s,rx:0,ry:0,class:r,style:d.style,id:s.id,domId:s.domId,tooltip:a.db.getTooltip(s.id)||"",haveCallback:s.haveCallback,link:s.link,width:"group"===s.type?500:void 0,type:s.type,padding:(null==(n=(0,o.g)().flowchart)?void 0:n.padding)??(null==(i=(0,o.g)().class)?void 0:i.padding)};l.setNode(s.id,b),o.l.info("setNode",b)})},p=function(e,l,t,a){o.l.info(e),e.forEach(function(e,i){var s,d;let b={labelStyle:"",style:""},p=e.text,y={labelStyle:b.labelStyle,shape:"note",labelText:c(p),noteData:e,rx:0,ry:0,class:"",style:b.style,id:e.id,domId:e.id,tooltip:"",type:"note",padding:(null==(s=(0,o.g)().flowchart)?void 0:s.padding)??(null==(d=(0,o.g)().class)?void 0:d.padding)};if(l.setNode(e.id,y),o.l.info("setNode",y),!e.class||!(e.class in a))return;let u=t+i,f={id:`edgeNote${u}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,r.n)(g.curve,n.c_6)};l.setEdge(e.id,e.class,f,u)})},y=function(e,l){let t=(0,o.g)().flowchart,a=0;e.forEach(function(e){var i;a++;let s={classes:"relation",pattern:1==e.relation.lineType?"dashed":"solid",id:"id"+a,arrowhead:"arrow_open"===e.type?"none":"normal",startLabelRight:"none"===e.relationTitle1?"":e.relationTitle1,endLabelLeft:"none"===e.relationTitle2?"":e.relationTitle2,arrowTypeStart:u(e.relation.type1),arrowTypeEnd:u(e.relation.type2),style:"fill:none",labelStyle:"",curve:(0,r.n)(null==t?void 0:t.curve,n.c_6)};if(o.l.info(s,e),void 0!==e.style){let l=(0,r.m)(e.style);s.style=l.style,s.labelStyle=l.labelStyle}e.text=e.title,void 0===e.text?void 0!==e.style&&(s.arrowheadStyle="fill: #333"):(s.arrowheadStyle="fill: #333",s.labelpos="c",(null==(i=(0,o.g)().flowchart)?void 0:i.htmlLabels)??(0,o.g)().htmlLabels?(s.labelType="html",s.label='<span class="edgeLabel">'+e.text+"</span>"):(s.labelType="text",s.label=e.text.replace(o.d.lineBreakRegex,"\n"),void 0===e.style&&(s.style=s.style||"stroke: #333; stroke-width: 1.5px;fill:none"),s.labelStyle=s.labelStyle.replace("color:","fill:"))),l.setEdge(e.id1,e.id2,s,a)})};function u(e){let l;switch(e){case 0:l="aggregation";break;case 1:l="extension";break;case 2:l="composition";break;case 3:l="dependency";break;case 4:l="lollipop";break;default:l="none"}return l}let f={parser:a.p,db:a.d,renderer:{setConf:function(e){g={...g,...e}},draw:function(e,l,t,a){let c;o.l.info("Drawing class - ",l);let g=(0,o.g)().flowchart??(0,o.g)().class,u=(0,o.g)().securityLevel;o.l.info("config:",g);let f=(null==g?void 0:g.nodeSpacing)??50,h=(null==g?void 0:g.rankSpacing)??50,v=new i.k({multigraph:!0,compound:!0}).setGraph({rankdir:a.db.getDirection(),nodesep:f,ranksep:h,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),w=a.db.getClasses(),x=a.db.getRelations(),k=a.db.getNotes();o.l.info(x),b(w,v,l,a),y(x,v),p(k,v,x.length+1,w),"sandbox"===u&&(c=(0,n.Ys)("#i"+l));let m="sandbox"===u?(0,n.Ys)(c.nodes()[0].contentDocument.body):(0,n.Ys)("body"),S=m.select(`[id="${l}"]`),T=m.select("#"+l+" g");if((0,s.r)(T,v,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",l),r.u.insertTitle(S,"classTitleText",(null==g?void 0:g.titleTopMargin)??5,a.db.getDiagramTitle()),(0,d.s)(v,S,null==g?void 0:g.diagramPadding,null==g?void 0:g.useMaxWidth),!(null==g?void 0:g.htmlLabels)){let e="sandbox"===u?c.nodes()[0].contentDocument:document,t=e.querySelectorAll('[id="'+l+'"] .edgeLabel .label');for(let l of t){let t=l.getBBox(),a=e.createElementNS("http://www.w3.org/2000/svg","rect");a.setAttribute("rx",0),a.setAttribute("ry",0),a.setAttribute("width",t.width),a.setAttribute("height",t.height),l.insertBefore(a,l.firstChild)}}}},styles:a.s,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,a.d.clear()}}}}]);