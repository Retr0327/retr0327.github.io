(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[165],{370:function(o,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags",function(){return r(3933)}])},8906:function(o,e,r){"use strict";r.d(e,{Z:function(){return E}});var n=r(1527),a=r(5623),t=r.n(a),c=r(959),i=r(5192),s=r(7844),l=r(4527),d=r(9611),h=r(5193),m=r(6780),p=r(3963),g=r(9542),u=r(7775),k=r(7457),x=r(9280);let f=(0,x.k)((o,e,r)=>{let n=r("icon");return{link:{display:"flex",alignItems:"center",width:"100%",fontSize:o.fontSizes.xs,padding:"8px ".concat(o.spacing.xs,"px"),borderRadius:o.radius.sm,fontWeight:500,color:"dark"===o.colorScheme?o.colors.dark[0]:o.colors.gray[7],"&:hover":{backgroundColor:"dark"===o.colorScheme?o.colors.dark[6]:o.colors.gray[0],color:"dark"===o.colorScheme?o.white:o.black,["& .".concat(n)]:{color:"dark"===o.colorScheme?o.white:o.black}}},linkActive:{"&, &:hover":{backgroundColor:"dark"===o.colorScheme?o.colors.dark[6]:o.colors.gray[0],color:"dark"===o.colorScheme?o.white:o.black,["& .".concat(n)]:{color:"dark"===o.colorScheme?o.white:o.black}}},linkInner:{display:"flex",alignItems:"center",flex:1},linkIcon:{ref:n,marginRight:o.spacing.sm,color:"dark"===o.colorScheme?o.colors.dark[2]:o.colors.gray[6]},badge:{padding:0,width:20,height:20,pointerEvents:"none"}}});var b=function(o){let{classes:e,cx:r}=f(),{links:a}=o,{pathname:i}=(0,p.useRouter)(),s=(0,g.DI)(i),[l,d]=(0,c.useState)(s);return(0,n.jsx)(n.Fragment,{children:a.map(o=>(0,n.jsxs)(u.k,{className:r(e.link,{[e.linkActive]:(0,g.DI)(o.link)===l}),component:t(),href:o.link,onClick:()=>d((0,g.DI)(o.link)),children:[(0,n.jsxs)("div",{className:e.linkInner,children:[(0,n.jsx)(o.icon,{size:20,className:e.linkIcon,stroke:1.5}),(0,n.jsx)("span",{children:o.label})]}),o.count&&(0,n.jsx)(k.C,{size:"sm",variant:"filled",className:e.badge,children:o.count})]},o.label))})},j=r(4381),v=r(1904);let S=(0,x.k)(o=>({root:{height:34,paddingLeft:o.spacing.sm,paddingRight:5,borderRadius:o.radius.md,color:"dark"===o.colorScheme?o.colors.dark[2]:o.colors.gray[5],backgroundColor:"dark"===o.colorScheme?o.colors.dark[6]:o.white,border:"1px solid ".concat("dark"===o.colorScheme?o.colors.dark[4]:o.colors.gray[3]),"&:hover":{backgroundColor:"dark"===o.colorScheme?o.fn.rgba(o.colors.dark[5],.85):o.fn.rgba(o.colors.gray[0],.35)},[o.fn.smallerThan("sm")]:{display:"none"}},shortcut:{fontSize:11,lineHeight:1,padding:"4px 7px",borderRadius:o.radius.sm,color:"dark"===o.colorScheme?o.colors.dark[0]:o.colors.gray[7],border:"1px solid ".concat("dark"===o.colorScheme?o.colors.dark[7]:o.colors.gray[2]),backgroundColor:"dark"===o.colorScheme?o.colors.dark[7]:o.colors.gray[0]}}));var w=(0,c.memo)(function(o){let{className:e,...r}=o,{classes:a,cx:t}=S();return(0,n.jsx)(u.k,{...r,className:t(a.root,e),children:(0,n.jsxs)(j.Z,{spacing:"xs",children:[(0,n.jsx)(i.jVj,{size:14,stroke:1.5}),(0,n.jsx)(v.x,{size:"sm",color:"dimmed",pr:80,children:"Search"})]})})}),y=r(1387);let N=(0,x.k)(o=>({navbar:{boxSizing:"border-box",height:"100vh",borderRight:"1px solid ".concat("dark"===o.colorScheme?o.colors.dark[7]:o.colors.gray[2]),backgroundColor:"dark"===o.colorScheme?o.colors.dark[8]:o.white,position:"fixed",zIndex:5,top:0,bottom:0,left:0,width:y.Z.navbar.width,["@media (max-width: ".concat(y.Z.navbar.breakpoint,"px)")]:{display:"none"}},section:{paddingRight:o.spacing.md,paddingBottom:2*o.spacing.xs,paddingLeft:o.spacing.md,paddingTop:y.Z.header.height+o.spacing.md,borderBottom:"1px solid ".concat("dark"===o.colorScheme?o.colors.dark[4]:o.colors.gray[3]),["@media (max-width: ".concat(y.Z.navbar.breakpoint,"px)")]:{paddingBottom:120}}}));var Z=(0,c.memo)(function(o){let{classes:e}=N(),r=(0,l.Q)(),{posts:a}=o,t=(0,m.DO)(a);return(0,n.jsx)(h.w,{className:e.navbar,children:(0,n.jsxs)(h.w.Section,{className:e.section,children:[(0,n.jsx)(w,{onClick:r.openSpotlight,sx:{width:"100%"},mb:20}),(0,n.jsx)(b,{links:[...m.zk,...t]})]})})}),z=r(3272),C=r(8216),I=r(7345),_=r(5469),R=r(5343);let L=(0,x.k)(o=>({wrapper:{paddingLeft:y.Z.navbar.width,["@media (max-width: ".concat(y.Z.navbar.breakpoint,"px)")]:{paddingLeft:0}},content:{minHeight:"calc(100vh - 350px)",position:"relative",zIndex:1,backgroundColor:"dark"===o.colorScheme?o.colors.dark[8]:o.white,boxShadow:"dark"===o.colorScheme?"none":o.shadows.sm,paddingBottom:80},mainLinkBadge:{padding:0,width:20,height:20,pointerEvents:"none"}}));var D=r(8995),E=(0,c.memo)(function(o){let{posts:e,children:r}=o,{classes:a}=L(),c=(0,C.Z)(),h=(0,l.Q)(),{classes:p}=(0,D.Z)(),g=(0,m.DO)(e);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(z.Z,{links:m.Gb,searchControl:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(w,{onClick:h.openSpotlight}),(0,n.jsx)(I.A,{sx:o=>({[o.fn.largerThan("sm")]:{display:"none"}}),onClick:h.openSpotlight,children:(0,n.jsx)(i.jVj,{size:14,stroke:1.5})})]}),children:(0,n.jsx)(d.Z,{menuItems:[...c,...g.map((o,e)=>(0,n.jsx)(_.v.Item,{component:t(),href:o.link,icon:(0,n.jsx)(o.icon,{size:14,stroke:1.5}),rightSection:(0,n.jsx)(k.C,{size:"sm",variant:"filled",className:a.mainLinkBadge,children:o.count}),children:o.label},"".concat(o.label,"-").concat(e)))]})}),(0,n.jsx)(Z,{posts:e}),(0,n.jsx)("main",{className:p.main,children:(0,n.jsxs)("div",{className:p.content,children:[(0,n.jsx)(R.x,{className:a.wrapper,children:(0,n.jsx)(R.x,{className:a.content,children:r})}),(0,n.jsx)(s.Z,{withNavbar:!0})]})})]})})},6442:function(o,e,r){"use strict";var n=r(1527),a=r(959),t=r(5192),c=r(8776),i=r(3963),s=r(1399);e.Z=(0,a.memo)(function(o){let{posts:e,children:r}=o,l=(0,i.useRouter)(),d=(0,c.a)("(max-width: 485px)"),h=(0,a.useMemo)(()=>e.map(o=>{let{frontMatter:e}=o;return{title:e.title,description:"發表於 ".concat(e.createdAt).concat(void 0!==e.updatedAt?" | 更新於 ".concat(e.updatedAt):""," • 標籤：").concat(e.category.join("、")),keywords:e.category,onTrigger:()=>l.push(e.slug)}}),[e,l,l.pathname]);return(0,n.jsx)(s.F,{actions:h,searchIcon:(0,n.jsx)(t.jVj,{size:18}),searchPlaceholder:"Search posts",shortcut:["mod + K"],highlightQuery:!0,transition:{in:{transform:"translateY(0)",opacity:1},out:{transform:"translateY(-20px)",opacity:0},transitionProperty:"transform, opacity"},limit:5,nothingFoundMessage:"Nothing found...",maxWidth:d?350:600,children:r})})},3933:function(o,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return j},default:function(){return v}});var n=r(1527),a=r(959),t=r(4693),c=r(5623),i=r.n(c),s=r(6780),l=r(1904),d=r(6385);let h=(o,e)=>(0,n.jsx)(l.x,{component:i(),href:"".concat(s.ZP.tags,"/tag?id=").concat(encodeURI(o.value)).concat(encodeURI("&"),"page=1"),p:3,size:e,sx:e=>({color:"dark"===e.colorScheme?e.colors.gray[o.rank]:e.colors.dark[9-o.rank],"&:hover":{textDecoration:"underline"}}),children:o.value},o.value);var m=(0,a.memo)(function(o){let{data:e}=o,r=(0,a.useMemo)(()=>Object.entries(e).sort((o,e)=>e[1]-o[1]).reduce((o,e,r)=>{let[n,a]=e,t=o[o.length-1],c=t&&t.count===a?t.rank:r+1;return o.push({value:n,count:a,rank:c}),o},[]),[e]);return(0,n.jsx)(d.J,{minSize:12,maxSize:35,tags:r,renderer:h})}),p=r(1387),g=r(9280);let u=(0,g.k)(()=>({container:{paddingTop:80,width:"100%",paddingLeft:20,maxWidth:p.Z.mdx.contentWidth+p.Z.mdx.tableOfContentsWidth,marginLeft:"auto",marginRight:"auto",["@media (max-width: ".concat(p.Z.mdx.breakpoint,"px)")]:{width:"100%",paddingRight:0}}}));var k=(0,a.memo)(function(o){let{posts:e}=o,{classes:r}=u(),a=(0,t.q)(e);return(0,n.jsx)("div",{className:r.container,children:(0,n.jsx)(m,{data:a})})}),x=r(8906),f=r(6442);let b=o=>(0,n.jsx)(k,{posts:o.posts});b.getLayout=function(o){return(0,n.jsx)(f.Z,{posts:o.props.posts,children:(0,n.jsx)(x.Z,{posts:o.props.posts,children:o})})};var j=!0,v=b},9542:function(o,e,r){"use strict";function n(o){return o.replace(/^\/([^/]*).*$/,"$1")}r.d(e,{DI:function(){return n}})},1440:function(){}},function(o){o.O(0,[731,819,856,385,850,774,888,179],function(){return o(o.s=370)}),_N_E=o.O()}]);