(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{488:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/archives/[page]",function(){return o(2417)}])},349:function(e,t,o){"use strict";var r=o(1527),a=o(959),i=o(7233),n=o(942),l=o(2970),c=o(2853);t.Z=(0,a.memo)(function(e){let{total:t}=e,o=(0,n.useRouter)(),a=function(){let e=(0,l.a)("(max-width: 400px)"),t=(0,l.a)("(max-width: 485px)");return e?"xs":t?"sm":"md"}();return(0,r.jsx)(c.t,{total:t,initialPage:1,withEdges:!0,size:a,onChange:e=>{let t="".concat(i.ZP.blog,"/").concat(e);if(o.asPath!==t)return o.push(t)}})})},8402:function(e,t,o){"use strict";o.d(t,{Z:function(){return P}});var r=o(1527),a=o(3988),i=o.n(a),n=o(959),l=o(5192),c=o(2056),s=o(897),d=o(9229),m=o(1714),h=o(7233),p=o(4267),g=o(8172),u=o(5034);let x=(0,u.k)(e=>({mainLink:{display:"flex",alignItems:"center",width:"100%",fontSize:e.fontSizes.xs,padding:"8px ".concat(e.spacing.xs,"px"),borderRadius:e.radius.sm,fontWeight:500,color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[7],"&:hover":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0],color:"dark"===e.colorScheme?e.white:e.black}},mainLinkInner:{display:"flex",alignItems:"center",flex:1},mainLinkIcon:{marginRight:e.spacing.sm,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]},mainLinkBadge:{padding:0,width:20,height:20,pointerEvents:"none"}}));var f=function(e){let{classes:t}=x(),{links:o}=e;return(0,r.jsx)(r.Fragment,{children:o.map(e=>(0,r.jsxs)(p.k,{className:t.mainLink,component:i(),href:e.link,children:[(0,r.jsxs)("div",{className:t.mainLinkInner,children:[(0,r.jsx)(e.icon,{size:20,className:t.mainLinkIcon,stroke:1.5}),(0,r.jsx)("span",{children:e.label})]}),e.count&&(0,r.jsx)(g.C,{size:"sm",variant:"filled",className:t.mainLinkBadge,children:e.count})]},e.label))})},b=o(1088),k=o(823);let v=(0,u.k)(e=>({root:{height:34,paddingLeft:e.spacing.sm,paddingRight:5,borderRadius:e.radius.md,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[5],backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white,border:"1px solid ".concat("dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]),"&:hover":{backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.colors.dark[5],.85):e.fn.rgba(e.colors.gray[0],.35)},[e.fn.smallerThan("sm")]:{display:"none"}},shortcut:{fontSize:11,lineHeight:1,padding:"4px 7px",borderRadius:e.radius.sm,color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[7],border:"1px solid ".concat("dark"===e.colorScheme?e.colors.dark[7]:e.colors.gray[2]),backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.colors.gray[0]}}));var j=(0,n.memo)(function(e){let{className:t,...o}=e,{classes:a,cx:i}=v();return(0,r.jsx)(p.k,{...o,className:i(a.root,t),children:(0,r.jsxs)(b.Z,{spacing:"xs",children:[(0,r.jsx)(l.jVj,{size:14,stroke:1.5}),(0,r.jsx)(k.x,{size:"sm",color:"dimmed",pr:80,children:"Search"})]})})}),y=o(8226);let w=(0,u.k)(e=>({navbar:{boxSizing:"border-box",height:"100vh",borderRight:"1px solid ".concat("dark"===e.colorScheme?e.colors.dark[7]:e.colors.gray[2]),backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.white,position:"fixed",zIndex:5,top:0,bottom:0,left:0,width:y.Z.navbar.width,["@media (max-width: ".concat(y.Z.navbar.breakpoint,"px)")]:{display:"none"}},section:{paddingRight:e.spacing.md,paddingBottom:2*e.spacing.xs,paddingLeft:e.spacing.md,paddingTop:y.Z.header.height+e.spacing.md,borderBottom:"1px solid ".concat("dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]),["@media (max-width: ".concat(y.Z.navbar.breakpoint,"px)")]:{paddingBottom:120}}}));var S=(0,n.memo)(function(e){let{classes:t}=w(),o=(0,s.Q)(),{posts:a}=e,i=(0,h.DO)(a);return(0,r.jsx)(m.w,{className:t.navbar,children:(0,r.jsxs)(m.w.Section,{className:t.section,children:[(0,r.jsx)(j,{onClick:o.openSpotlight,sx:{width:"100%"},mb:20}),(0,r.jsx)(f,{links:[...h.zk,...i]})]})})}),N=o(8070),z=o(4634),C=o(2710),O=o(8002),Z=o(1185);let L=(0,u.k)(e=>({wrapper:{paddingLeft:y.Z.navbar.width,["@media (max-width: ".concat(y.Z.navbar.breakpoint,"px)")]:{paddingLeft:0}},content:{minHeight:"calc(100vh - 350px)",position:"relative",zIndex:1,backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.white,boxShadow:"dark"===e.colorScheme?"none":e.shadows.sm,paddingBottom:80},mainLinkBadge:{padding:0,width:20,height:20,pointerEvents:"none"}}));var I=o(8312),P=(0,n.memo)(function(e){let{posts:t,children:o}=e,{classes:a}=L(),n=(0,z.Z)(),m=(0,s.Q)(),{classes:p}=(0,I.Z)(),u=(0,h.DO)(t);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(N.Z,{links:h.Gb,searchControl:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{onClick:m.openSpotlight}),(0,r.jsx)(C.A,{sx:e=>({[e.fn.largerThan("sm")]:{display:"none"}}),onClick:m.openSpotlight,children:(0,r.jsx)(l.jVj,{size:14,stroke:1.5})})]}),children:(0,r.jsx)(d.Z,{menuItems:[...n,...u.map((e,t)=>(0,r.jsx)(O.v.Item,{component:i(),href:e.link,icon:(0,r.jsx)(e.icon,{size:14,stroke:1.5}),rightSection:(0,r.jsx)(g.C,{size:"sm",variant:"filled",className:a.mainLinkBadge,children:e.count}),children:e.label},"".concat(e.label,"-").concat(t)))]})}),(0,r.jsx)(S,{posts:t}),(0,r.jsx)("main",{className:p.main,children:(0,r.jsxs)("div",{className:p.content,children:[(0,r.jsx)(Z.x,{className:a.wrapper,children:(0,r.jsx)(Z.x,{className:a.content,children:o})}),(0,r.jsx)(c.Z,{withNavbar:!0})]})})]})})},8412:function(e,t,o){"use strict";var r=o(1527),a=o(959),i=o(5192),n=o(2970),l=o(942),c=o(8362);t.Z=(0,a.memo)(function(e){let{posts:t,children:o}=e,a=(0,l.useRouter)(),s=t.map(e=>{let{frontMatter:t}=e;return{title:t.title,description:"發表於 ".concat(t.createdAt).concat(void 0!==t.updatedAt?" | 更新於 ".concat(t.updatedAt):""," • 標籤：").concat(t.category.join("、")),keywords:t.category,onTrigger:()=>a.push(t.slug)}}),d=(0,n.a)("(max-width: 485px)");return(0,r.jsx)(c.F,{actions:s,searchIcon:(0,r.jsx)(i.jVj,{size:18}),searchPlaceholder:"Search posts",shortcut:["mod + K"],highlightQuery:!0,transition:{in:{transform:"translateY(0)",opacity:1},out:{transform:"translateY(-20px)",opacity:0},transitionProperty:"transform, opacity"},limit:5,nothingFoundMessage:"Nothing found...",maxWidth:d?350:600,children:o})})},2417:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSG:function(){return F},default:function(){return V}});var r=o(1527),a=o(8402),i=o(8412),n=o(3988),l=o.n(n),c=o(959),s=o(349),d=o(9225),m=o(4704),h=o(5034),p=(0,h.k)((e,{bulletSize:t,color:o,radius:r,align:a,lineVariant:i,lineWidth:n})=>{let l=e.fn.variant({variant:"filled",color:o});return{itemBody:{},itemContent:{},itemBullet:{boxSizing:"border-box",width:t,height:t,borderRadius:e.fn.size({size:r,sizes:e.radius}),border:`${n}px solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]}`,backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,position:"absolute",top:0,left:"left"===a?-t/2-n/2:"auto",right:"right"===a?-t/2-n/2:"auto",display:"flex",alignItems:"center",justifyContent:"center",color:e.white,"&[data-with-child]":{borderWidth:1,backgroundColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3],color:"dark"===e.colorScheme?e.colors.dark[0]:e.black},"&[data-active]":{borderColor:l.background,backgroundColor:e.white,"&[data-with-child]":{backgroundColor:l.background,color:e.white}}},item:{position:"relative",boxSizing:"border-box",color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,paddingLeft:"left"===a?e.spacing.xl:0,paddingRight:"right"===a?e.spacing.xl:0,textAlign:a,"&:not(:last-of-type)::before":{display:"block"},"&:not(:first-of-type)":{marginTop:e.spacing.xl},"&::before":{boxSizing:"border-box",position:"absolute",top:0,left:"left"===a?-n:"auto",right:"right"===a?-n:"auto",bottom:-e.spacing.xl,borderLeft:`${n}px ${i} ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]}`,content:'""',display:"none"},"&[data-line-active]":{"&::before":{borderLeftColor:l.background}}},itemTitle:{fontWeight:500,lineHeight:1,marginBottom:`calc(${e.spacing.xs}px / 2)`,textAlign:a}}}),g=o(1185),u=o(823),x=Object.defineProperty,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,t,o)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,j=(e,t)=>{for(var o in t||(t={}))b.call(t,o)&&v(e,o,t[o]);if(f)for(var o of f(t))k.call(t,o)&&v(e,o,t[o]);return e},y=(e,t)=>{var o={};for(var r in e)b.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&f)for(var r of f(e))0>t.indexOf(r)&&k.call(e,r)&&(o[r]=e[r]);return o};let w={bulletSize:20,radius:"xl",lineWidth:4,lineVariant:"solid"},S=(0,c.forwardRef)((e,t)=>{let o=(0,d.N4)("TimelineItem",w,e),{className:r,bullet:a,title:i,bulletSize:n,radius:l,lineWidth:s,active:m,lineActive:h,classNames:x,styles:f,children:b,color:k,align:v,lineVariant:S,unstyled:N}=o,z=y(o,["className","bullet","title","bulletSize","radius","lineWidth","active","lineActive","classNames","styles","children","color","align","lineVariant","unstyled"]),{classes:C,cx:O}=p({bulletSize:n,color:k,radius:l,align:v,lineVariant:S,lineWidth:s},{classNames:x,styles:f,unstyled:N,name:"Timeline"});return c.createElement(g.x,j({className:O(C.item,r),"data-line-active":h||void 0,"data-active":m||void 0,ref:t},z),c.createElement("div",{className:C.itemBullet,"data-with-child":!!a||void 0,"data-active":m||void 0},a),c.createElement("div",{className:C.itemBody},i&&c.createElement(u.x,{className:C.itemTitle},i),c.createElement("div",{className:C.itemContent},b)))});S.displayName="@mantine/core/TimelineItem";var N=Object.defineProperty,z=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,Z=(e,t,o)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,L=(e,t)=>{for(var o in t||(t={}))C.call(t,o)&&Z(e,o,t[o]);if(z)for(var o of z(t))O.call(t,o)&&Z(e,o,t[o]);return e},I=(e,t)=>{var o={};for(var r in e)C.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&z)for(var r of z(e))0>t.indexOf(r)&&O.call(e,r)&&(o[r]=e[r]);return o};let P={active:-1,radius:"xl",bulletSize:20,align:"left",lineWidth:4,reverseActive:!1},E=(0,c.forwardRef)((e,t)=>{let o=(0,d.N4)("Timeline",P,e),{children:r,active:a,color:i,radius:n,bulletSize:l,align:s,lineWidth:h,classNames:p,styles:u,sx:x,reverseActive:f,unstyled:b}=o,k=I(o,["children","active","color","radius","bulletSize","align","lineWidth","classNames","styles","sx","reverseActive","unstyled"]),v=c.Children.toArray(r),j=v.map((e,t)=>c.cloneElement(e,{classNames:p,styles:u,align:s,lineWidth:h,radius:e.props.radius||n,color:e.props.color||i,bulletSize:e.props.bulletSize||l,unstyled:b,active:e.props.active||(f?a>=v.length-t-1:a>=t),lineActive:e.props.lineActive||(f?a>=v.length-t-1:a-1>=t)}));return c.createElement(g.x,L({ref:t,sx:["left"===s?{paddingLeft:l/2+h/2}:{paddingRight:l/2+h/2},...(0,m.R)(x)]},k),j)});E.Item=S,E.displayName="@mantine/core/Timeline";var R=o(9979),T=o(2874),_=function(e){let t=e.reduce((e,t)=>{let o=e,{frontMatter:r}=t,{createdAt:a,title:i,slug:n}=r,l=a.substring(0,4),c=a.substring(5);return o[l]||(o[l]=[]),o[l].push({date:c,title:i,slug:n}),o},{});return Object.entries(t).map(e=>{let[t,o]=e;return[t,o.sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime())]}).sort((e,t)=>t[0]-e[0])},B=o(8226);let A=(0,h.k)(()=>({container:{paddingTop:80,width:"100%",paddingLeft:20,maxWidth:B.Z.mdx.contentWidth+B.Z.mdx.tableOfContentsWidth,marginLeft:"auto",marginRight:"auto",["@media (max-width: ".concat(B.Z.mdx.breakpoint,"px)")]:{width:"100%",paddingRight:0}}}));var W=(0,c.memo)(function(e){let{classes:t}=A(),o=_(e.posts),a=(0,c.useMemo)(()=>o.map(e=>e.map((e,t)=>"string"==typeof e?(0,r.jsx)(E.Item,{title:(0,r.jsx)(u.x,{size:"lg",children:e})},"".concat(e,"-").concat(t)):e.map((e,t)=>(0,r.jsx)(E.Item,{bulletSize:15,title:(0,r.jsxs)(u.x,{component:l(),href:e.slug,size:"sm",children:[e.date," ",(0,r.jsx)(u.x,{component:"span",size:"md",ml:15,children:e.title})]})},"".concat(e.title,"-").concat(t))))),[o]);return(0,r.jsx)("div",{className:t.container,children:(0,r.jsxs)(R.K,{spacing:60,children:[(0,r.jsx)(E,{active:-1,lineWidth:2,p:10,children:a}),(0,r.jsx)(T.M,{children:(0,r.jsx)(s.Z,{total:e.totalPages})})]})})});let $=e=>(0,r.jsx)(W,{totalPages:e.totalPages,posts:e.posts});var F=!0,V=$;$.getLayout=function(e){return(0,r.jsx)(i.Z,{posts:e.props.allPosts,children:(0,r.jsx)(a.Z,{posts:e.props.allPosts,children:e})})}}},function(e){e.O(0,[731,469,53,649,81,774,888,179],function(){return e(e.s=488)}),_N_E=e.O()}]);