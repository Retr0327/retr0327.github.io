(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[989],{8275:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[page]",function(){return o(3829)}])},349:function(e,r,o){"use strict";var t=o(1527),a=o(959),n=o(7233),i=o(942),c=o(2970),l=o(2853);r.Z=(0,a.memo)(function(e){let{total:r}=e,o=(0,i.useRouter)(),a=function(){let e=(0,c.a)("(max-width: 400px)"),r=(0,c.a)("(max-width: 485px)");return e?"xs":r?"sm":"md"}();return(0,t.jsx)(l.t,{total:r,initialPage:1,withEdges:!0,size:a,onChange:e=>{let r="".concat(n.ZP.blog,"/").concat(e);if(o.asPath!==r)return o.push(r)}})})},8402:function(e,r,o){"use strict";o.d(r,{Z:function(){return z}});var t=o(1527),a=o(3988),n=o.n(a),i=o(959),c=o(5192),l=o(2056),s=o(897),d=o(9229),m=o(7233),p=o(1714),h=o(4267),g=o(8172),u=o(5034);let f=(0,u.k)(e=>({mainLink:{display:"flex",alignItems:"center",width:"100%",fontSize:e.fontSizes.xs,padding:"8px ".concat(e.spacing.xs,"px"),borderRadius:e.radius.sm,fontWeight:500,color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[7],"&:hover":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0],color:"dark"===e.colorScheme?e.white:e.black}},mainLinkInner:{display:"flex",alignItems:"center",flex:1},mainLinkIcon:{marginRight:e.spacing.sm,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]},mainLinkBadge:{padding:0,width:20,height:20,pointerEvents:"none"}}));var x=function(e){let{classes:r}=f(),{links:o}=e;return(0,t.jsx)(t.Fragment,{children:o.map(e=>(0,t.jsxs)(h.k,{className:r.mainLink,component:n(),href:e.link,children:[(0,t.jsxs)("div",{className:r.mainLinkInner,children:[(0,t.jsx)(e.icon,{size:20,className:r.mainLinkIcon,stroke:1.5}),(0,t.jsx)("span",{children:e.label})]}),e.count&&(0,t.jsx)(g.C,{size:"sm",variant:"filled",className:r.mainLinkBadge,children:e.count})]},e.label))})},b=o(1088),k=o(823);let y=(0,u.k)(e=>({root:{height:34,paddingLeft:e.spacing.sm,paddingRight:5,borderRadius:e.radius.md,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[5],backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white,border:"1px solid ".concat("dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]),"&:hover":{backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.colors.dark[5],.85):e.fn.rgba(e.colors.gray[0],.35)},[e.fn.smallerThan("sm")]:{display:"none"}},shortcut:{fontSize:11,lineHeight:1,padding:"4px 7px",borderRadius:e.radius.sm,color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[7],border:"1px solid ".concat("dark"===e.colorScheme?e.colors.dark[7]:e.colors.gray[2]),backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.colors.gray[0]}}));var j=(0,i.memo)(function(e){let{className:r,...o}=e,{classes:a,cx:n}=y();return(0,t.jsx)(h.k,{...o,className:n(a.root,r),children:(0,t.jsxs)(b.Z,{spacing:"xs",children:[(0,t.jsx)(c.jVj,{size:14,stroke:1.5}),(0,t.jsx)(k.x,{size:"sm",color:"dimmed",pr:80,children:"Search"})]})})}),v=o(8226);let w=(0,u.k)(e=>({navbar:{boxSizing:"border-box",height:"100vh",borderRight:"1px solid ".concat("dark"===e.colorScheme?e.colors.dark[7]:e.colors.gray[2]),backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.white,position:"fixed",zIndex:5,top:0,bottom:0,left:0,width:v.Z.navbar.width,["@media (max-width: ".concat(v.Z.navbar.breakpoint,"px)")]:{display:"none"}},section:{paddingRight:e.spacing.md,paddingBottom:2*e.spacing.xs,paddingLeft:e.spacing.md,paddingTop:v.Z.header.height+e.spacing.md,borderBottom:"1px solid ".concat("dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]),["@media (max-width: ".concat(v.Z.navbar.breakpoint,"px)")]:{paddingBottom:120}}}));var C=(0,i.memo)(function(e){let{classes:r}=w(),o=(0,s.Q)(),{posts:a}=e,n=(0,m.DO)(a);return(0,t.jsx)(p.w,{className:r.navbar,children:(0,t.jsxs)(p.w.Section,{className:r.section,children:[(0,t.jsx)(j,{onClick:o.openSpotlight,sx:{width:"100%"},mb:20}),(0,t.jsx)(x,{links:[{label:"Home",link:m.ZP.home,icon:c.A2c},...n]})]})})}),S=o(8070),O=o(4634),N=o(2710),P=o(8002),Z=o(1185);let E=(0,u.k)(e=>({wrapper:{paddingLeft:v.Z.navbar.width,["@media (max-width: ".concat(v.Z.navbar.breakpoint,"px)")]:{paddingLeft:0}},content:{minHeight:"calc(100vh - 350px)",position:"relative",zIndex:1,backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.white,boxShadow:"dark"===e.colorScheme?"none":e.shadows.sm,paddingBottom:80},mainLinkBadge:{padding:0,width:20,height:20,pointerEvents:"none"}}));var L=o(8312),z=(0,i.memo)(function(e){let{posts:r,children:o}=e,{classes:a}=E(),i=(0,O.Z)(),p=(0,s.Q)(),{classes:h}=(0,L.Z)(),u=(0,m.DO)(r);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(S.Z,{links:m.Gb,searchControl:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(j,{onClick:p.openSpotlight}),(0,t.jsx)(N.A,{sx:e=>({[e.fn.largerThan("sm")]:{display:"none"}}),onClick:p.openSpotlight,children:(0,t.jsx)(c.jVj,{size:14,stroke:1.5})})]}),children:(0,t.jsx)(d.Z,{menuItems:[...i,...u.map((e,r)=>(0,t.jsx)(P.v.Item,{component:n(),href:e.link,icon:(0,t.jsx)(e.icon,{size:14,stroke:1.5}),rightSection:(0,t.jsx)(g.C,{size:"sm",variant:"filled",className:a.mainLinkBadge,children:e.count}),children:e.label},"".concat(e.label,"-").concat(r)))]})}),(0,t.jsx)(C,{posts:r}),(0,t.jsx)("main",{className:h.main,children:(0,t.jsxs)("div",{className:h.content,children:[(0,t.jsx)(Z.x,{className:a.wrapper,children:(0,t.jsx)(Z.x,{className:a.content,children:o})}),(0,t.jsx)(l.Z,{withNavbar:!0})]})})]})})},8412:function(e,r,o){"use strict";var t=o(1527),a=o(959),n=o(5192),i=o(2970),c=o(942),l=o(8362);r.Z=(0,a.memo)(function(e){let{posts:r,children:o}=e,a=(0,c.useRouter)(),s=r.map(e=>{let{frontMatter:r}=e;return{title:r.title,description:"發表於 ".concat(r.createdAt).concat(void 0!==r.updatedAt?" | 更新於 ".concat(r.updatedAt):""," • 標籤：").concat(r.category.join("、")),keywords:r.category,onTrigger:()=>a.push(r.slug)}}),d=(0,i.a)("(max-width: 485px)");return(0,t.jsx)(l.F,{actions:s,searchIcon:(0,t.jsx)(n.jVj,{size:18}),searchPlaceholder:"Search posts",shortcut:["mod + K"],highlightQuery:!0,transition:{in:{transform:"translateY(0)",opacity:1},out:{transform:"translateY(-20px)",opacity:0},transitionProperty:"transform, opacity"},limit:5,nothingFoundMessage:"Nothing found...",maxWidth:d?350:600,children:o})})},3829:function(e,r,o){"use strict";o.r(r),o.d(r,{__N_SSG:function(){return ew},default:function(){return eC}});var t=o(1527),a=o(8402),n=o(8412),i=o(959),c=o(9979),l=o(349),s=o(9225),d=o(8356),m=o(4090);let p=(0,i.createContext)({padding:0}),h=p.Provider,g=()=>(0,i.useContext)(p).padding;var u=o(5034),f=(0,u.k)((e,{padding:r,withBorder:o,inheritPadding:t})=>{let a=e.fn.size({size:r,sizes:e.spacing}),n=-1*a,i="dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3];return{cardSection:{display:"block",marginLeft:n,marginRight:n,paddingLeft:t?a:void 0,paddingRight:t?a:void 0,borderTop:o&&`1px solid ${i}`,borderBottom:o&&`1px solid ${i}`,"& + &":{borderTop:0},"&[data-first]":{marginTop:n,borderTop:0,borderBottom:o&&`1px solid ${i}`},"&[data-last]":{marginBottom:n,borderBottom:0}}}}),x=o(1185),b=Object.defineProperty,k=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,v=(e,r,o)=>r in e?b(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,w=(e,r)=>{for(var o in r||(r={}))y.call(r,o)&&v(e,o,r[o]);if(k)for(var o of k(r))j.call(r,o)&&v(e,o,r[o]);return e},C=(e,r)=>{var o={};for(var t in e)y.call(e,t)&&0>r.indexOf(t)&&(o[t]=e[t]);if(null!=e&&k)for(var t of k(e))0>r.indexOf(t)&&j.call(e,t)&&(o[t]=e[t]);return o};let S={withBorder:!1,inheritPadding:!1},O=(0,i.forwardRef)((e,r)=>{let o=(0,s.N4)("CardSection",S,e),{className:t,withBorder:a,inheritPadding:n,unstyled:c}=o,l=C(o,["className","withBorder","inheritPadding","unstyled"]),{classes:d,cx:m}=f({padding:g(),withBorder:a,inheritPadding:n},{name:"Card",unstyled:c});return i.createElement(x.x,w({className:m(d.cardSection,t),ref:r},l))});O.displayName="@mantine/core/CardSection";let N=(0,d.F)(O);var P=(0,u.k)(e=>({root:{position:"relative",overflow:"hidden",backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white}})),Z=Object.defineProperty,E=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,I=(e,r,o)=>r in e?Z(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,R=(e,r)=>{for(var o in r||(r={}))L.call(r,o)&&I(e,o,r[o]);if(E)for(var o of E(r))z.call(r,o)&&I(e,o,r[o]);return e},B=(e,r)=>{var o={};for(var t in e)L.call(e,t)&&0>r.indexOf(t)&&(o[t]=e[t]);if(null!=e&&E)for(var t of E(e))0>r.indexOf(t)&&z.call(e,t)&&(o[t]=e[t]);return o};let _={p:"md"},T=(0,i.forwardRef)((e,r)=>{let o=(0,s.N4)("Card",_,e),{className:t,p:a,radius:n,children:c,unstyled:l}=o,d=B(o,["className","p","radius","children","unstyled"]),{classes:p,cx:g}=P(null,{name:"Card",unstyled:l}),u=i.Children.toArray(c),f=u.map((e,r)=>"object"==typeof e&&e&&"type"in e&&e.type===N?(0,i.cloneElement)(e,{padding:a,"data-first":0===r||void 0,"data-last":r===u.length-1||void 0}):e);return i.createElement(h,{value:{padding:a}},i.createElement(m.X,R({className:g(p.root,t),radius:n,p:a,ref:r},d),f))});T.Section=N,T.displayName="@mantine/core/Card";let A=(0,d.F)(T);var V=o(1565),F=Object.defineProperty,H=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,D=(e,r,o)=>r in e?F(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,K=(e,r)=>{for(var o in r||(r={}))M.call(r,o)&&D(e,o,r[o]);if(H)for(var o of H(r))W.call(r,o)&&D(e,o,r[o]);return e};function Q(e){return i.createElement("svg",K({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),i.createElement("path",{d:"M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var X=Object.defineProperty,$=Object.defineProperties,G=Object.getOwnPropertyDescriptors,Y=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,U=(e,r,o)=>r in e?X(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,ee=(e,r)=>{for(var o in r||(r={}))q.call(r,o)&&U(e,o,r[o]);if(Y)for(var o of Y(r))J.call(r,o)&&U(e,o,r[o]);return e},er=(e,r)=>$(e,G(r)),eo=(0,u.k)((e,{radius:r})=>({root:{},imageWrapper:{position:"relative"},figure:{margin:0},image:er(ee({},e.fn.fontStyles()),{display:"block",width:"100%",height:"100%",border:0,borderRadius:e.fn.size({size:r,sizes:e.radius})}),caption:{color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[7],marginTop:e.spacing.xs},placeholder:er(ee({},e.fn.cover()),{display:"flex",alignItems:"center",justifyContent:"center",color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6],backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[0],borderRadius:e.fn.size({size:r,sizes:e.radius})})})),et=o(823),ea=Object.defineProperty,en=Object.getOwnPropertySymbols,ei=Object.prototype.hasOwnProperty,ec=Object.prototype.propertyIsEnumerable,el=(e,r,o)=>r in e?ea(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,es=(e,r)=>{for(var o in r||(r={}))ei.call(r,o)&&el(e,o,r[o]);if(en)for(var o of en(r))ec.call(r,o)&&el(e,o,r[o]);return e},ed=(e,r)=>{var o={};for(var t in e)ei.call(e,t)&&0>r.indexOf(t)&&(o[t]=e[t]);if(null!=e&&en)for(var t of en(e))0>r.indexOf(t)&&ec.call(e,t)&&(o[t]=e[t]);return o};let em={fit:"cover",width:"100%",height:"auto",radius:0},ep=(0,i.forwardRef)((e,r)=>{let o=(0,s.N4)("Image",em,e),{className:t,alt:a,src:n,fit:c,width:l,height:d,radius:m,imageProps:p,withPlaceholder:h,placeholder:g,imageRef:u,classNames:f,styles:b,caption:k,unstyled:y,style:j}=o,v=ed(o,["className","alt","src","fit","width","height","radius","imageProps","withPlaceholder","placeholder","imageRef","classNames","styles","caption","unstyled","style"]),{classes:w,cx:C}=eo({radius:m},{classNames:f,styles:b,unstyled:y,name:"Image"}),[S,O]=(0,i.useState)(!n);return(0,V.l)(()=>{O(!n)},[n]),i.createElement(x.x,es({className:C(w.root,t),ref:r,style:es({width:l},j)},v),i.createElement("figure",{className:w.figure},i.createElement("div",{className:w.imageWrapper},i.createElement("img",es({className:w.image,src:n,alt:a,style:{objectFit:c,width:l,height:d},ref:u,onError:e=>{O(!0),"function"==typeof(null==p?void 0:p.onError)&&p.onError(e)}},p)),h&&S&&i.createElement("div",{className:w.placeholder,title:a},g||i.createElement("div",null,i.createElement(Q,{style:{width:40,height:40}})))),!!k&&i.createElement(et.x,{component:"figcaption",size:"sm",align:"center",className:w.caption},k)))});ep.displayName="@mantine/core/Image";var eh=o(1088),eg=o(8172),eu=o(3988),ef=o.n(eu);let ex=(0,u.k)(e=>({card:{position:"relative",width:"80%",backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,"@media (max-width: 420px)":{width:"90%"}},title:{display:"block",marginTop:e.spacing.md,marginBottom:e.spacing.xs/2},footer:{marginTop:e.spacing.md}}));var eb=(0,i.memo)(function(e){let{posts:r}=e,{classes:o}=ex(),a=r.map((e,r)=>{let{frontMatter:a}=e;return(0,t.jsxs)(A,{withBorder:!0,radius:"md",className:o.card,children:[(0,t.jsx)(A.Section,{children:(0,t.jsx)(ef(),{href:a.slug,children:(0,t.jsx)(ep,{src:a.coverImage,height:300})})}),(0,t.jsx)(et.x,{className:o.title,weight:500,component:ef(),href:a.slug,children:a.title}),(0,t.jsx)(et.x,{size:"sm",color:"dimmed",lineClamp:4,children:a.excerpt}),(0,t.jsxs)(eh.Z,{position:"apart",className:o.footer,children:[(0,t.jsxs)(et.x,{size:"sm",color:"dimmed",children:["發表於 ",a.createdAt,void 0!==a.updatedAt?" | 更新於 ".concat(a.updatedAt):null]}),(0,t.jsx)(eh.Z,{spacing:8,mr:0,children:a.category.map((e,r)=>(0,t.jsx)(eg.C,{variant:"gradient",gradient:{from:"indigo",to:"cyan"},children:e},"".concat(e,"-").concat(r)))})]})]},"".concat(a.title,"-").concat(r))});return(0,t.jsx)(c.K,{align:"center",sx:{width:"100%"},spacing:50,children:a})}),ek=o(8226);let ey=(0,u.k)(()=>({container:{paddingTop:80,width:"100%",maxWidth:ek.Z.mdx.contentWidth+ek.Z.mdx.tableOfContentsWidth,marginLeft:"auto",marginRight:"auto",["@media (max-width: ".concat(ek.Z.mdx.breakpoint,"px)")]:{width:"100%",paddingRight:0}}}));var ej=(0,i.memo)(function(e){let{posts:r,totalPages:o}=e,{classes:a}=ey();return(0,t.jsx)("div",{className:a.container,children:(0,t.jsxs)(c.K,{align:"center",spacing:60,children:[(0,t.jsx)(eb,{posts:r}),(0,t.jsx)(l.Z,{total:o})]})})});let ev=e=>(0,t.jsx)(ej,{posts:e.posts,totalPages:e.totalPages});var ew=!0,eC=ev;ev.getLayout=function(e){return(0,t.jsx)(n.Z,{posts:e.props.allPosts,children:(0,t.jsx)(a.Z,{posts:e.props.allPosts,children:e})})}}},function(e){e.O(0,[731,469,53,649,81,774,888,179],function(){return e(e.s=8275)}),_N_E=e.O()}]);