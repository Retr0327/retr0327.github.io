(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{4954:function(e,o,t){"use strict";t.d(o,{z:function(){return H}});var r=t(959),n=t(9225),i=t(8356),a=t(5034),l=(0,a.k)((e,{orientation:o,buttonBorderWidth:t})=>({root:{display:"flex",flexDirection:"vertical"===o?"column":"row","& [data-button]":{"&:first-of-type":{borderBottomRightRadius:0,["vertical"===o?"borderBottomLeftRadius":"borderTopRightRadius"]:0,["vertical"===o?"borderBottomWidth":"borderRightWidth"]:t/2},"&:last-of-type":{borderTopLeftRadius:0,["vertical"===o?"borderTopRightRadius":"borderBottomLeftRadius"]:0,["vertical"===o?"borderTopWidth":"borderLeftWidth"]:t/2},"&:not(:first-of-type):not(:last-of-type)":{borderRadius:0,["vertical"===o?"borderTopWidth":"borderLeftWidth"]:t/2,["vertical"===o?"borderBottomWidth":"borderRightWidth"]:t/2},"& + [data-button]":{["vertical"===o?"marginTop":"marginLeft"]:-t,"@media (min-resolution: 192dpi)":{["vertical"===o?"marginTop":"marginLeft"]:0}}}}})),c=t(1185),s=Object.defineProperty,d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,g=(e,o,t)=>o in e?s(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,f=(e,o)=>{for(var t in o||(o={}))h.call(o,t)&&g(e,t,o[t]);if(d)for(var t of d(o))p.call(o,t)&&g(e,t,o[t]);return e},u=(e,o)=>{var t={};for(var r in e)h.call(e,r)&&0>o.indexOf(r)&&(t[r]=e[r]);if(null!=e&&d)for(var r of d(e))0>o.indexOf(r)&&p.call(e,r)&&(t[r]=e[r]);return t};let b={orientation:"horizontal",buttonBorderWidth:1},m=(0,r.forwardRef)((e,o)=>{let t=(0,n.N4)("ButtonGroup",b,e),{className:i,orientation:a,buttonBorderWidth:s,unstyled:d}=t,h=u(t,["className","orientation","buttonBorderWidth","unstyled"]),{classes:p,cx:g}=l({orientation:a,buttonBorderWidth:s},{name:"ButtonGroup",unstyled:d});return r.createElement(c.x,f({className:g(p.root,i),ref:o},h))});m.displayName="@mantine/core/ButtonGroup";var k=t(3730),y=Object.defineProperty,v=Object.defineProperties,x=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,R=(e,o,t)=>o in e?y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,O=(e,o)=>{for(var t in o||(o={}))j.call(o,t)&&R(e,t,o[t]);if(w)for(var t of w(o))S.call(o,t)&&R(e,t,o[t]);return e},z=(e,o)=>v(e,x(o));let C={xs:{height:k.J.xs,paddingLeft:14,paddingRight:14},sm:{height:k.J.sm,paddingLeft:18,paddingRight:18},md:{height:k.J.md,paddingLeft:22,paddingRight:22},lg:{height:k.J.lg,paddingLeft:26,paddingRight:26},xl:{height:k.J.xl,paddingLeft:32,paddingRight:32},"compact-xs":{height:22,paddingLeft:7,paddingRight:7},"compact-sm":{height:26,paddingLeft:8,paddingRight:8},"compact-md":{height:30,paddingLeft:10,paddingRight:10},"compact-lg":{height:34,paddingLeft:12,paddingRight:12},"compact-xl":{height:40,paddingLeft:14,paddingRight:14}},L=e=>({display:e?"block":"inline-block",width:e?"100%":"auto"});var N=(0,a.k)((e,{color:o,size:t,radius:r,fullWidth:n,compact:i,gradient:a,variant:l,withLeftIcon:c,withRightIcon:s})=>({root:z(O(z(O(O(O(O({},function({compact:e,size:o,withLeftIcon:t,withRightIcon:r}){if(e)return C[`compact-${o}`];let n=C[o];return z(O({},n),{paddingLeft:t?n.paddingLeft/1.5:n.paddingLeft,paddingRight:r?n.paddingRight/1.5:n.paddingRight})}({compact:i,size:t,withLeftIcon:c,withRightIcon:s})),e.fn.fontStyles()),e.fn.focusStyles()),L(n)),{borderRadius:e.fn.radius(r),fontWeight:600,position:"relative",lineHeight:1,fontSize:e.fn.size({size:t,sizes:e.fontSizes}),userSelect:"none",cursor:"pointer"}),function({variant:e,theme:o,color:t,gradient:r}){let n=o.fn.variant({color:t,variant:e,gradient:r});return"gradient"===e?{border:0,backgroundImage:n.background,color:n.color,"&:hover":o.fn.hover({backgroundSize:"200%"})}:O({border:`1px solid ${n.border}`,backgroundColor:n.background,color:n.color},o.fn.hover({backgroundColor:n.hover}))}({variant:l,theme:e,color:o,gradient:a})),{"&:active":e.activeStyles,"&:disabled, &[data-disabled]":{borderColor:"transparent",backgroundColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2],color:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[5],cursor:"not-allowed",backgroundImage:"none",pointerEvents:"none","&:active":{transform:"none"}},"&[data-loading]":{pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.colors.dark[7],.5):"rgba(255, 255, 255, .5)",borderRadius:e.fn.radius(r),cursor:"not-allowed"}}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},centerLoader:{position:"absolute",left:"50%",transform:"translateX(-50%)",opacity:.5},inner:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"}})),T=t(7325),I=t(4267),Z=Object.defineProperty,_=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,W=(e,o,t)=>o in e?Z(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,B=(e,o)=>{for(var t in o||(o={}))E.call(o,t)&&W(e,t,o[t]);if(_)for(var t of _(o))P.call(o,t)&&W(e,t,o[t]);return e},G=(e,o)=>{var t={};for(var r in e)E.call(e,r)&&0>o.indexOf(r)&&(t[r]=e[r]);if(null!=e&&_)for(var r of _(e))0>o.indexOf(r)&&P.call(e,r)&&(t[r]=e[r]);return t};let A={size:"sm",type:"button",variant:"filled",loaderPosition:"left"},D=(0,r.forwardRef)((e,o)=>{let t=(0,n.N4)("Button",A,e),{className:i,size:a,color:l,type:c,disabled:s,children:d,leftIcon:h,rightIcon:p,fullWidth:g,variant:f,radius:u,uppercase:b,compact:m,loading:k,loaderPosition:y,loaderProps:v,gradient:x,classNames:w,styles:j,unstyled:S}=t,R=G(t,["className","size","color","type","disabled","children","leftIcon","rightIcon","fullWidth","variant","radius","uppercase","compact","loading","loaderPosition","loaderProps","gradient","classNames","styles","unstyled"]),{classes:O,cx:z,theme:L}=N({radius:u,color:l,size:a,fullWidth:g,compact:m,gradient:x,variant:f,withLeftIcon:!!h,withRightIcon:!!p},{name:"Button",unstyled:S,classNames:w,styles:j}),Z=L.fn.variant({color:l,variant:f}),_=r.createElement(T.a,B({color:Z.color,size:L.fn.size({size:a,sizes:C}).height/2},v));return r.createElement(I.k,B({className:z(O.root,i),type:c,disabled:s,"data-button":!0,"data-disabled":s||void 0,"data-loading":k||void 0,ref:o,unstyled:S},R),r.createElement("div",{className:O.inner},(h||k&&"left"===y)&&r.createElement("span",{className:z(O.icon,O.leftIcon)},k&&"left"===y?_:h),k&&"center"===y&&r.createElement("span",{className:O.centerLoader},_),r.createElement("span",{className:O.label,style:{textTransform:b?"uppercase":void 0}},d),(p||k&&"right"===y)&&r.createElement("span",{className:z(O.icon,O.rightIcon)},k&&"right"===y?_:p)))});D.displayName="@mantine/core/Button",D.Group=m;let H=(0,i.F)(D)},3730:function(e,o,t){"use strict";t.d(o,{J:function(){return g}});var r=t(5034),n=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,o,t)=>o in e?n(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,h=(e,o)=>{for(var t in o||(o={}))c.call(o,t)&&d(e,t,o[t]);if(l)for(var t of l(o))s.call(o,t)&&d(e,t,o[t]);return e},p=(e,o)=>i(e,a(o));let g={xs:30,sm:36,md:42,lg:50,xl:60};var f=(0,r.k)((e,{size:o,multiline:t,radius:r,variant:n,invalid:i,rightSectionWidth:a,withRightSection:l,iconWidth:c,offsetBottom:s,offsetTop:d,pointer:f})=>{let u=e.fn.variant({variant:"filled",color:"red"}).background,b="default"===n||"filled"===n?{minHeight:e.fn.size({size:o,sizes:g}),paddingLeft:e.fn.size({size:o,sizes:g})/3,paddingRight:l?a:e.fn.size({size:o,sizes:g})/3,borderRadius:e.fn.radius(r)}:null;return{wrapper:{position:"relative",marginTop:d?`calc(${e.spacing.xs}px / 2)`:void 0,marginBottom:s?`calc(${e.spacing.xs}px / 2)`:void 0},input:h(p(h(p(h({},e.fn.fontStyles()),{height:t?"unstyled"===n?void 0:"auto":e.fn.size({size:o,sizes:g}),WebkitTapHighlightColor:"transparent",lineHeight:t?e.lineHeight:`${e.fn.size({size:o,sizes:g})-2}px`,appearance:"none",resize:"none",boxSizing:"border-box",fontSize:e.fn.size({size:o,sizes:e.fontSizes}),width:"100%",color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,display:"block",textAlign:"left",cursor:f?"pointer":void 0}),b),{"&:disabled":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[1],color:e.colors.dark[2],opacity:.6,cursor:"not-allowed","&::placeholder":{color:e.colors.dark[2]}},"&::placeholder":p(h({},e.fn.placeholderStyles()),{opacity:1}),"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),function({theme:e,variant:o}){return"default"===o?{border:`1px solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]}`,backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white,transition:"border-color 100ms ease","&:focus, &:focus-within":e.focusRingStyles.inputStyles(e)}:"filled"===o?{border:"1px solid transparent",backgroundColor:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[1],"&:focus, &:focus-within":e.focusRingStyles.inputStyles(e)}:{borderWidth:0,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,backgroundColor:"transparent",minHeight:28,outline:0,"&:focus, &:focus-within":{outline:"none",borderColor:"transparent"},"&:disabled":{backgroundColor:"transparent","&:focus, &:focus-within":{outline:"none",borderColor:"transparent"}}}}({theme:e,variant:n})),withIcon:{paddingLeft:"number"==typeof c?c:e.fn.size({size:o,sizes:g})},invalid:{color:u,borderColor:u,"&::placeholder":{opacity:1,color:u}},disabled:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[1],color:e.colors.dark[2],opacity:.6,cursor:"not-allowed","&::placeholder":{color:e.colors.dark[2]}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",width:"number"==typeof c?c:e.fn.size({size:o,sizes:g}),color:i?e.colors.red["dark"===e.colorScheme?6:7]:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[5]},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",width:a}}});o.Z=f},7250:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t(32)}])},8070:function(e,o,t){"use strict";t.d(o,{Z:function(){return z}});var r=t(1527),n=t(3988),i=t.n(n),a=t(959),l=t(5947),c=t(1088),s=t(823),d=t(5192),h=t(1941),p=t(2710),g=(0,a.memo)(function(){let{colorScheme:e,toggleColorScheme:o}=(0,h.X)(),t="dark"===e,n=(0,a.useMemo)(()=>t?(0,r.jsx)(d.TzX,{style:{width:18,height:18}}):(0,r.jsx)(d.C9B,{style:{width:18,height:18}}),[t]);return(0,r.jsx)(p.A,{variant:"outline",color:t?"yellow":"blue",onClick:()=>o(),sx:e=>({[e.fn.largerThan("sm")]:{display:"none"},marginRight:e.spacing.md}),children:n})}),f=t(5034);let u=(0,f.k)(e=>({link:{display:"block",lineHeight:1,padding:"8px 12px",borderRadius:e.radius.lg,textDecoration:"none",color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[7],fontSize:e.fontSizes.md,fontWeight:600,"&:hover":{color:"dark"===e.colorScheme?"#ffff":"black"}},linkActive:{"&, &:hover":{backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.colors[e.primaryColor][9],.25):e.colors[e.primaryColor][0],color:e.colors[e.primaryColor]["dark"===e.colorScheme?3:7]}},linkLabel:{marginRight:5}}));var b=(0,a.memo)(function(e){let{classes:o}=u(),{links:t}=e;return(0,r.jsx)(r.Fragment,{children:t.map(e=>(0,r.jsx)(i(),{href:e.link,className:o.link,children:(0,r.jsx)(s.x,{children:e.label})},e.label))})}),m=t(3271),k=t.n(m),y=t(8226),v=t(229);let x=k()(()=>t.e(889).then(t.bind(t,1889)).then(e=>e.Github),{loadableGenerated:{webpack:()=>[1889]}}),w=k()(()=>t.e(889).then(t.bind(t,1889)).then(e=>e.LinkedIn),{loadableGenerated:{webpack:()=>[1889]}}),j=k()(()=>t.e(889).then(t.bind(t,1889)).then(e=>e.Facebook),{loadableGenerated:{webpack:()=>[1889]}}),S=k()(()=>t.e(889).then(t.bind(t,1889)).then(e=>e.ColorScheme),{loadableGenerated:{webpack:()=>[1889]}});var R=(0,a.memo)(function(){return(0,r.jsx)(v.u.Group,{openDelay:600,closeDelay:100,children:(0,r.jsxs)(c.Z,{spacing:"xs",pr:"md",sx:e=>({[e.fn.smallerThan("sm")]:{display:"none"}}),children:[(0,r.jsx)(w,{link:y.Z.linkedin.link}),(0,r.jsx)(j,{link:y.Z.facebook.link}),(0,r.jsx)(x,{link:y.Z.github.lixing,tooltip:"Github"}),(0,r.jsx)(S,{})]})})});let O=(0,f.k)(e=>({header:{paddingLeft:e.spacing.md,paddingRight:"var(--removed-scroll-width, 0px)",borderBottom:"1px solid ".concat("dark"===e.colorScheme?e.colors.gray[8]:e.colors.gray[3]),top:0,left:0,right:0,height:y.Z.header.height,display:"flex",alignItems:"center",justifyContent:"space-between",position:"fixed"},logo:{paddingRight:35,paddingLeft:e.spacing.md,height:y.Z.header.height,paddingTop:6,color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.dark[9],textDecoration:"none",display:"flex",alignItems:"center","&:hover":{color:"dark"===e.colorScheme?"#ffff":"black"}},logoWrapper:{display:"flex",alignItems:"center",pointerEvents:"all"},links:{[e.fn.smallerThan("sm")]:{display:"none"}},version:{...e.fn.focusStyles(),fontWeight:700,textDecoration:"none",marginTop:5,[e.fn.smallerThan(860)]:{display:"none"}}}));var z=(0,a.memo)(function(e){let{links:o,children:t,searchControl:n}=e,{classes:a}=O();return(0,r.jsxs)(l.h,{height:60,className:a.header,children:[t,(0,r.jsx)(c.Z,{children:(0,r.jsx)("div",{className:a.logoWrapper,children:(0,r.jsx)(i(),{href:"/",className:a.logo,children:(0,r.jsx)(s.x,{mb:5,children:" Lixing Yang "})})})}),(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(c.Z,{spacing:5,className:a.links,children:(0,r.jsx)(b,{links:o})}),void 0!==n?n:null,(0,r.jsx)(R,{}),(0,r.jsx)(g,{})]})]})})},4634:function(e,o,t){"use strict";var r=t(1527),n=t(3988),i=t.n(n),a=t(959),l=t(8002),c=t(7233);o.Z=function(){return(0,a.useMemo)(()=>c.zk.map((e,o)=>(0,r.jsx)(l.v.Item,{component:i(),href:e.link,icon:(0,r.jsx)(e.icon,{size:14,stroke:1.5}),children:e.label},"".concat(e.label,"-").concat(o))),[c.zk])}},9229:function(e,o,t){"use strict";t.d(o,{Z:function(){return d}});var r=t(1527),n=t(4736),i=t(959),a=t(8002),l=t(7242),c=t(5034);let s=(0,c.k)(e=>({burger:{marginRight:e.spacing.md,[e.fn.largerThan("sm")]:{display:"none"}},item:{"&[data-hovered]":{backgroundColor:"dark"===e.colorScheme?"rgba(24, 100, 171, 0.45)":"#e7f5ff",color:"dark"===e.colorScheme?e.white:"#1971c2"}}}));var d=(0,i.memo)(function(e){let{menuItems:o}=e,{classes:t}=s(),{toggle:c}=(0,n.q)(!1)[1],[d,h]=(0,i.useState)(!1);return(0,r.jsxs)(a.v,{shadow:"md",position:"bottom",width:"100%",offset:15,onOpen:()=>h(!0),onClose:()=>h(!1),classNames:t,children:[(0,r.jsx)(a.v.Target,{children:(0,r.jsx)(l.O,{opened:d,onClick:c,className:t.burger,size:"sm"})}),(0,r.jsx)(a.v.Dropdown,{children:o})]})})},874:function(e,o,t){"use strict";var r=t(1527),n=t(959),i=t(7233),a=t(9229),l=t(8070),c=t(4634),s=t(8312);o.Z=(0,n.memo)(function(e){let{children:o}=e,t=(0,c.Z)(),{classes:n}=(0,s.Z)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{links:i.Gb,children:(0,r.jsx)(a.Z,{menuItems:t})}),(0,r.jsx)("main",{className:n.main,children:(0,r.jsx)("div",{className:n.content,children:o})})]})})},8312:function(e,o,t){"use strict";var r=t(8226),n=t(5034);let i=(0,n.k)(e=>({"@global":{"#nprogress":{zIndex:1e5}},withNavbar:{paddingLeft:r.Z.navbar.width,["@media (max-width: ".concat(r.Z.navbar.breakpoint,"px)")]:{paddingLeft:0}},main:{scrollMarginTop:r.Z.header.height,flex:1,paddingTop:r.Z.header.height-e.spacing.xl-2,["@media (max-width: ".concat(r.Z.navbar.breakpoint,"px)")]:{paddingLeft:0,paddingRight:0}},content:{minHeight:"calc(100vh - 280px)"}}));o.Z=i},8226:function(e,o){"use strict";o.Z={avatar:"https://scontent.fkhh1-2.fna.fbcdn.net/v/t1.6435-9/90348802_2879430425476831_5109053951542558720_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=soyfcAOpwxYAX_Gmt-4&_nc_ht=scontent.fkhh1-2.fna&oh=00_AfCuvvtDME6K7RQX33SrhEWClPrrBA_IPdJeFe-Uac9SZw&oe=63F1D1FA",cv:"https://docs.google.com/document/d/1hiYT_QK5draFMMogwfwf5H2coHcJDveS/edit?usp=share_link&ouid=115833122300012543204&rtpof=true&sd=true",linkedin:{color:"#0A66C2",link:"https://www.linkedin.com/in/lixing-yang-1a2037230/"},facebook:{color:"#1778F2",link:"https://www.facebook.com/retr0327/"},github:{lixing:"https://github.com/Retr0327",organization:{lopen:"https://github.com/lopentu",ioltw:"https://github.com/Taiwan-Olympiad-in-Linguistics",socialMedia:"https://github.com/Taiwan-Social-Media-Corpus"}},mdx:{breakpoint:1080,contentWidth:820,tableOfContentsWidth:260,tabHeight:46,tabHeightMobile:38},header:{height:60},navbar:{width:260,breakpoint:760},footer:{height:400,heightTablet:460,heightMobile:320}}},7233:function(e,o,t){"use strict";t.d(o,{DO:function(){return s},Gb:function(){return l},zk:function(){return c}});var r=t(5192);let n={home:"/",blog:"/blog",tags:"/tags",archives:"/archives",categories:"/categories"},i={label:"Home",link:n.home},a={label:"Blog",link:"".concat(n.blog,"/1")},l=[i,a],c=[{...i,icon:r.A2c},{...a,icon:r.ksN}];function s(e){let o=new Map;return e.forEach(e=>{e.frontMatter.category.forEach(e=>{o.set(e,(o.get(e)||0)+1)})}),[{label:"Tags",link:n.tags,icon:r.Aho,count:o.size},{label:"Category",link:n.categories,icon:r.lTk,count:o.size},{label:"Archives",link:n.archives,icon:r.fO3,count:e.length}]}o.ZP=n},32:function(e,o,t){"use strict";t.r(o);var r=t(1527),n=t(3988),i=t.n(n),a=t(959),l=t(7233),c=t(3271),s=t.n(c),d=t(4954),h=t(874);let p=s()(()=>t.e(638).then(t.bind(t,8638)),{loadableGenerated:{webpack:()=>[8638]}}),g=()=>(0,r.jsx)(h.Z,{children:(0,r.jsx)(p,{code:404,title:"You have found a secret place.",description:"Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL.",button:(0,r.jsx)(d.z,{variant:"outline",component:i(),href:l.ZP.home,size:"md",children:"Take me back to home page"})})});o.default=(0,a.memo)(g)}},function(e){e.O(0,[731,469,774,888,179],function(){return e(e.s=7250)}),_N_E=e.O()}]);