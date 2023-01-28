"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[617],{8455:function(e,o,r){var t=r(1527),a=r(959),i=r(3963),n=r(9542),l=r(8776),c=r(2755);o.Z=(0,a.memo)(function(e){let{total:o,onChange:r}=e,a=(0,i.useRouter)(),s=function(){let e=(0,l.a)("(max-width: 400px)"),o=(0,l.a)("(max-width: 485px)");return e?"xs":o?"sm":"md"}();return(0,t.jsx)(c.t,{total:o,initialPage:1,withEdges:!0,size:s,onChange:void 0!==r?r:e=>{let o=(0,n.DI)(a.pathname),r="/".concat(o,"/").concat(e);if(a.asPath!==r)return a.push(r)}})})},4326:function(e,o,r){r.d(o,{Z:function(){return Z}});var t=r(1527),a=r(5623),i=r.n(a),n=r(959),l=r(6240),c=r(8915),s=(0,r(9280).k)((e,{bulletSize:o,color:r,radius:t,align:a,lineVariant:i,lineWidth:n})=>{let l=e.fn.variant({variant:"filled",color:r});return{itemBody:{},itemContent:{},itemBullet:{boxSizing:"border-box",width:o,height:o,borderRadius:e.fn.size({size:t,sizes:e.radius}),border:`${n}px solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]}`,backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,position:"absolute",top:0,left:"left"===a?-o/2-n/2:"auto",right:"right"===a?-o/2-n/2:"auto",display:"flex",alignItems:"center",justifyContent:"center",color:e.white,"&[data-with-child]":{borderWidth:1,backgroundColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3],color:"dark"===e.colorScheme?e.colors.dark[0]:e.black},"&[data-active]":{borderColor:l.background,backgroundColor:e.white,"&[data-with-child]":{backgroundColor:l.background,color:e.white}}},item:{position:"relative",boxSizing:"border-box",color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,paddingLeft:"left"===a?e.spacing.xl:0,paddingRight:"right"===a?e.spacing.xl:0,textAlign:a,"&:not(:last-of-type)::before":{display:"block"},"&:not(:first-of-type)":{marginTop:e.spacing.xl},"&::before":{boxSizing:"border-box",position:"absolute",top:0,left:"left"===a?-n:"auto",right:"right"===a?-n:"auto",bottom:-e.spacing.xl,borderLeft:`${n}px ${i} ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]}`,content:'""',display:"none"},"&[data-line-active]":{"&::before":{borderLeftColor:l.background}}},itemTitle:{fontWeight:500,lineHeight:1,marginBottom:`calc(${e.spacing.xs}px / 2)`,textAlign:a}}}),d=r(5343),m=r(1904),h=Object.defineProperty,p=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,x=(e,o,r)=>o in e?h(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,k=(e,o)=>{for(var r in o||(o={}))g.call(o,r)&&x(e,r,o[r]);if(p)for(var r of p(o))u.call(o,r)&&x(e,r,o[r]);return e},b=(e,o)=>{var r={};for(var t in e)g.call(e,t)&&0>o.indexOf(t)&&(r[t]=e[t]);if(null!=e&&p)for(var t of p(e))0>o.indexOf(t)&&u.call(e,t)&&(r[t]=e[t]);return r};let f={bulletSize:20,radius:"xl",lineWidth:4,lineVariant:"solid"},v=(0,n.forwardRef)((e,o)=>{let r=(0,l.N4)("TimelineItem",f,e),{className:t,bullet:a,title:i,bulletSize:c,radius:h,lineWidth:p,active:g,lineActive:u,classNames:x,styles:v,children:y,color:j,align:S,lineVariant:w,unstyled:z}=r,N=b(r,["className","bullet","title","bulletSize","radius","lineWidth","active","lineActive","classNames","styles","children","color","align","lineVariant","unstyled"]),{classes:C,cx:I}=s({bulletSize:c,color:j,radius:h,align:S,lineVariant:w,lineWidth:p},{classNames:x,styles:v,unstyled:z,name:"Timeline"});return n.createElement(d.x,k({className:I(C.item,t),"data-line-active":u||void 0,"data-active":g||void 0,ref:o},N),n.createElement("div",{className:C.itemBullet,"data-with-child":!!a||void 0,"data-active":g||void 0},a),n.createElement("div",{className:C.itemBody},i&&n.createElement(m.x,{className:C.itemTitle},i),n.createElement("div",{className:C.itemContent},y)))});v.displayName="@mantine/core/TimelineItem";var y=Object.defineProperty,j=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,z=(e,o,r)=>o in e?y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,N=(e,o)=>{for(var r in o||(o={}))S.call(o,r)&&z(e,r,o[r]);if(j)for(var r of j(o))w.call(o,r)&&z(e,r,o[r]);return e},C=(e,o)=>{var r={};for(var t in e)S.call(e,t)&&0>o.indexOf(t)&&(r[t]=e[t]);if(null!=e&&j)for(var t of j(e))0>o.indexOf(t)&&w.call(e,t)&&(r[t]=e[t]);return r};let I={active:-1,radius:"xl",bulletSize:20,align:"left",lineWidth:4,reverseActive:!1},O=(0,n.forwardRef)((e,o)=>{let r=(0,l.N4)("Timeline",I,e),{children:t,active:a,color:i,radius:s,bulletSize:m,align:h,lineWidth:p,classNames:g,styles:u,sx:x,reverseActive:k,unstyled:b}=r,f=C(r,["children","active","color","radius","bulletSize","align","lineWidth","classNames","styles","sx","reverseActive","unstyled"]),v=n.Children.toArray(t),y=v.map((e,o)=>n.cloneElement(e,{classNames:g,styles:u,align:h,lineWidth:p,radius:e.props.radius||s,color:e.props.color||i,bulletSize:e.props.bulletSize||m,unstyled:b,active:e.props.active||(k?a>=v.length-o-1:a>=o),lineActive:e.props.lineActive||(k?a>=v.length-o-1:a-1>=o)}));return n.createElement(d.x,N({ref:o,sx:["left"===h?{paddingLeft:m/2+p/2}:{paddingRight:m/2+p/2},...(0,c.R)(x)]},f),y)});O.Item=v,O.displayName="@mantine/core/Timeline";var R=function(e){let o=e.reduce((e,o)=>{let r=e,{frontMatter:t}=o,{createdAt:a,title:i,slug:n}=t,l=a.substring(0,4),c=a.substring(5);return r[l]||(r[l]=[]),r[l].push({date:c,title:i,slug:n}),r},{});return Object.entries(o).map(e=>{let[o,r]=e;return[o,r.sort((e,o)=>new Date(o.date).getTime()-new Date(e.date).getTime())]}).sort((e,o)=>o[0]-e[0])},Z=(0,n.memo)(function(e){let o=R(e.posts),r=(0,n.useMemo)(()=>o.map(e=>e.map((e,o)=>"string"==typeof e?(0,t.jsx)(O.Item,{title:(0,t.jsx)(m.x,{size:"lg",children:e})},"".concat(e,"-").concat(o)):e.map((e,o)=>(0,t.jsx)(O.Item,{bulletSize:15,title:(0,t.jsxs)(m.x,{component:i(),href:e.slug,size:"sm",children:[e.date," ",(0,t.jsx)(m.x,{component:"span",size:"md",ml:15,sx:{"&:hover":{textDecoration:"underline"}},children:e.title})]})},"".concat(e.title,"-").concat(o))))),[o]);return(0,t.jsx)(O,{active:-1,lineWidth:2,p:10,children:r})})},8906:function(e,o,r){r.d(o,{Z:function(){return T}});var t=r(1527),a=r(5623),i=r.n(a),n=r(959),l=r(5192),c=r(7844),s=r(4527),d=r(9611),m=r(5193),h=r(6780),p=r(3963),g=r(9542),u=r(7775),x=r(7457),k=r(9280);let b=(0,k.k)((e,o,r)=>{let t=r("icon");return{link:{display:"flex",alignItems:"center",width:"100%",fontSize:e.fontSizes.xs,padding:"8px ".concat(e.spacing.xs,"px"),borderRadius:e.radius.sm,fontWeight:500,color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[7],"&:hover":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0],color:"dark"===e.colorScheme?e.white:e.black,["& .".concat(t)]:{color:"dark"===e.colorScheme?e.white:e.black}}},linkActive:{"&, &:hover":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0],color:"dark"===e.colorScheme?e.white:e.black,["& .".concat(t)]:{color:"dark"===e.colorScheme?e.white:e.black}}},linkInner:{display:"flex",alignItems:"center",flex:1},linkIcon:{ref:t,marginRight:e.spacing.sm,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]},badge:{padding:0,width:20,height:20,pointerEvents:"none"}}});var f=function(e){let{classes:o,cx:r}=b(),{links:a}=e,{pathname:l}=(0,p.useRouter)(),c=(0,g.DI)(l),[s,d]=(0,n.useState)(c);return(0,t.jsx)(t.Fragment,{children:a.map(e=>(0,t.jsxs)(u.k,{className:r(o.link,{[o.linkActive]:(0,g.DI)(e.link)===s}),component:i(),href:e.link,onClick:()=>d((0,g.DI)(e.link)),children:[(0,t.jsxs)("div",{className:o.linkInner,children:[(0,t.jsx)(e.icon,{size:20,className:o.linkIcon,stroke:1.5}),(0,t.jsx)("span",{children:e.label})]}),e.count&&(0,t.jsx)(x.C,{size:"sm",variant:"filled",className:o.badge,children:e.count})]},e.label))})},v=r(4381),y=r(1904);let j=(0,k.k)(e=>({root:{height:34,paddingLeft:e.spacing.sm,paddingRight:5,borderRadius:e.radius.md,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[5],backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white,border:"1px solid ".concat("dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]),"&:hover":{backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.colors.dark[5],.85):e.fn.rgba(e.colors.gray[0],.35)},[e.fn.smallerThan("sm")]:{display:"none"}},shortcut:{fontSize:11,lineHeight:1,padding:"4px 7px",borderRadius:e.radius.sm,color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[7],border:"1px solid ".concat("dark"===e.colorScheme?e.colors.dark[7]:e.colors.gray[2]),backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.colors.gray[0]}}));var S=(0,n.memo)(function(e){let{className:o,...r}=e,{classes:a,cx:i}=j();return(0,t.jsx)(u.k,{...r,className:i(a.root,o),children:(0,t.jsxs)(v.Z,{spacing:"xs",children:[(0,t.jsx)(l.jVj,{size:14,stroke:1.5}),(0,t.jsx)(y.x,{size:"sm",color:"dimmed",pr:80,children:"Search"})]})})}),w=r(1387);let z=(0,k.k)(e=>({navbar:{boxSizing:"border-box",height:"100vh",borderRight:"1px solid ".concat("dark"===e.colorScheme?e.colors.dark[7]:e.colors.gray[2]),backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.white,position:"fixed",zIndex:5,top:0,bottom:0,left:0,width:w.Z.navbar.width,["@media (max-width: ".concat(w.Z.navbar.breakpoint,"px)")]:{display:"none"}},section:{paddingRight:e.spacing.md,paddingBottom:2*e.spacing.xs,paddingLeft:e.spacing.md,paddingTop:w.Z.header.height+e.spacing.md,borderBottom:"1px solid ".concat("dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]),["@media (max-width: ".concat(w.Z.navbar.breakpoint,"px)")]:{paddingBottom:120}}}));var N=(0,n.memo)(function(e){let{classes:o}=z(),r=(0,s.Q)(),{posts:a}=e,i=(0,h.DO)(a);return(0,t.jsx)(m.w,{className:o.navbar,children:(0,t.jsxs)(m.w.Section,{className:o.section,children:[(0,t.jsx)(S,{onClick:r.openSpotlight,sx:{width:"100%"},mb:20}),(0,t.jsx)(f,{links:[...h.zk,...i]})]})})}),C=r(3272),I=r(8216),O=r(7345),R=r(5469),Z=r(5343);let A=(0,k.k)(e=>({wrapper:{paddingLeft:w.Z.navbar.width,["@media (max-width: ".concat(w.Z.navbar.breakpoint,"px)")]:{paddingLeft:0}},content:{minHeight:"calc(100vh - 350px)",position:"relative",zIndex:1,backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.white,boxShadow:"dark"===e.colorScheme?"none":e.shadows.sm,paddingBottom:80},mainLinkBadge:{padding:0,width:20,height:20,pointerEvents:"none"}}));var E=r(8995),T=(0,n.memo)(function(e){let{posts:o,children:r}=e,{classes:a}=A(),n=(0,I.Z)(),m=(0,s.Q)(),{classes:p}=(0,E.Z)(),g=(0,h.DO)(o);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C.Z,{links:h.Gb,searchControl:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(S,{onClick:m.openSpotlight}),(0,t.jsx)(O.A,{sx:e=>({[e.fn.largerThan("sm")]:{display:"none"}}),onClick:m.openSpotlight,children:(0,t.jsx)(l.jVj,{size:14,stroke:1.5})})]}),children:(0,t.jsx)(d.Z,{menuItems:[...n,...g.map((e,o)=>(0,t.jsx)(R.v.Item,{component:i(),href:e.link,icon:(0,t.jsx)(e.icon,{size:14,stroke:1.5}),rightSection:(0,t.jsx)(x.C,{size:"sm",variant:"filled",className:a.mainLinkBadge,children:e.count}),children:e.label},"".concat(e.label,"-").concat(o)))]})}),(0,t.jsx)(N,{posts:o}),(0,t.jsx)("main",{className:p.main,children:(0,t.jsxs)("div",{className:p.content,children:[(0,t.jsx)(Z.x,{className:a.wrapper,children:(0,t.jsx)(Z.x,{className:a.content,children:r})}),(0,t.jsx)(c.Z,{withNavbar:!0})]})})]})})},6442:function(e,o,r){var t=r(1527),a=r(959),i=r(5192),n=r(8776),l=r(3963),c=r(1399);o.Z=(0,a.memo)(function(e){let{posts:o,children:r}=e,s=(0,l.useRouter)(),d=(0,n.a)("(max-width: 485px)"),m=(0,a.useMemo)(()=>o.map(e=>{let{frontMatter:o}=e;return{title:o.title,description:"發表於 ".concat(o.createdAt).concat(void 0!==o.updatedAt?" | 更新於 ".concat(o.updatedAt):""," • 標籤：").concat(o.category.join("、")),keywords:o.category,onTrigger:()=>s.push(o.slug)}}),[o,s,s.pathname]);return(0,t.jsx)(c.F,{actions:m,searchIcon:(0,t.jsx)(i.jVj,{size:18}),searchPlaceholder:"Search posts",shortcut:["mod + K"],highlightQuery:!0,transition:{in:{transform:"translateY(0)",opacity:1},out:{transform:"translateY(-20px)",opacity:0},transitionProperty:"transform, opacity"},limit:5,nothingFoundMessage:"Nothing found...",maxWidth:d?350:600,children:r})})},9542:function(e,o,r){r.d(o,{DI:function(){return t}});function t(e){return e.replace(/^\/([^/]*).*$/,"$1")}}}]);