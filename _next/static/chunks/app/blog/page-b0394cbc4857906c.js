(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{59741:function(e,t,n){Promise.resolve().then(n.bind(n,74823))},74823:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return G}});var a=n(3411),r=n(76538),o=n(76199),i=n(79193),c=n(18184),s=n(77279),d=n(99628),l=n(7332),u=n(81532),m=n(96603),g=n(32605),p=n.n(g),f=n(24033),h=n(17242),b=n(44487),v=n(31730),x=n(437),w=n(73228);let[_,j]=(0,n(97182).R)("Card component was not found in tree");var y=n(50639),C={root:"m_e615b15f",section:"m_599a2148"};let B={},E=(0,x.b)((e,t)=>{let{classNames:n,className:a,style:o,styles:i,vars:c,withBorder:s,inheritPadding:d,mod:l,...u}=(0,b.w)("CardSection",B,e),m=j();return r.createElement(y.Box,{ref:t,mod:[{"with-border":s,"inherit-padding":d},l],...m.getStyles("section",{className:a,style:o,styles:i,classNames:n}),...u})});E.classes=C,E.displayName="@mantine/core/CardSection";let N={},k=(0,h.Z)((e,t)=>{let{padding:n}=t;return{root:{"--card-padding":(0,f.bG)(n)}}}),A=(0,x.b)((e,t)=>{let n=(0,b.w)("Card",N,e),{classNames:a,className:o,style:i,styles:c,unstyled:s,vars:d,children:l,padding:u,...m}=n,g=(0,v.y)({name:"Card",props:n,classes:C,className:o,style:i,classNames:a,styles:c,unstyled:s,vars:d,varsResolver:k}),p=r.Children.toArray(l),f=p.map((e,t)=>"object"==typeof e&&e&&"type"in e&&e.type===E?(0,r.cloneElement)(e,{"data-first-section":0===t||void 0,"data-last-section":t===p.length-1||void 0}):e);return r.createElement(_,{value:{getStyles:g}},r.createElement(w.X,{ref:t,unstyled:s,...g("root"),...m},f))});A.classes=C,A.displayName="@mantine/core/Card",A.Section=E;var M=n(55207),P=n(17487),S=n(18014),Z=n(77736),I=n(17527),T=n(2995),z=n.n(T),H=function(e){let{metadata:t}=e,n=t.map((e,t)=>(0,a.jsxs)(A,{withBorder:!0,radius:"md",className:z().card,children:[(0,a.jsx)(A.Section,{children:(0,a.jsx)(Z.default,{href:"".concat(c.AW.BlogPost,"/").concat(e.slug),children:(0,a.jsx)(M.Image,{src:e.coverImage,height:300})})}),(0,a.jsx)(P.Text,{className:z().title,w:500,component:Z.default,href:"".concat(c.AW.BlogPost,"/").concat(e.slug),children:e.title}),(0,a.jsx)(P.Text,{size:"sm",c:"dimmed",lineClamp:4,children:e.excerpt}),(0,a.jsxs)(S.Group,{justify:"space-between",className:z().footer,children:[(0,a.jsxs)(P.Text,{size:"sm",c:"dimmed",children:["發表於 ",e.createdAt,void 0!==e.updatedAt?" | 更新於 ".concat(e.updatedAt):null]}),(0,a.jsx)(I.Z,{badges:e.category})]})]},"".concat(e.title,"-").concat(t)));return(0,a.jsx)(l.K,{align:"center",style:{width:"100%"},gap:50,children:n})},F=function(){let e=Number((0,i.useSearchParams)().get("page")||1),t=(0,s.useMdxMetadata)(),{selectedMetadata:n,totalPages:r}=(0,d.Q)(t,e,c.DB,c.AW.Blog);return(0,a.jsx)("div",{className:p().container,children:(0,a.jsxs)(l.K,{align:"center",gap:60,children:[(0,a.jsx)(u.Container,{children:(0,a.jsx)(H,{metadata:n})}),(0,a.jsx)(m.Z,{total:r,defaultValue:e})]})})},G=function(){return(0,a.jsx)(r.Suspense,{fallback:(0,a.jsx)(o.a,{}),children:(0,a.jsx)(F,{})})}},17527:function(e,t,n){"use strict";var a=n(3411),r=n(77736),o=n(18184),i=n(16878),c=n(18014);t.Z=function(e){let t=e.badges.map((e,t)=>(0,a.jsx)(i.C,{variant:"gradient",component:r.default,href:"".concat(o.AW.Tags,"?tag=").concat(encodeURI(e),"&page=1"),gradient:{from:"indigo",to:"cyan"},style:{cursor:"pointer"},children:e},"".concat(e,"-").concat(t)));return(0,a.jsx)(c.Group,{gap:8,mr:0,children:t})}},96603:function(e,t,n){"use strict";var a=n(3411),r=n(79193),o=n(58854);t.Z=function(e){let{total:t,defaultValue:n=1,onChange:i}=e,c=(0,r.useRouter)(),s=(0,r.usePathname)(),d=void 0!==i?i:e=>{let t="".concat(s,"?page=").concat(n),a="".concat(s,"?page=").concat(e);if(t!==a)return c.push(a)};return(0,a.jsx)(o.t,{total:t,defaultValue:n,withEdges:!0,size:"md",onChange:d})}},18184:function(e,t,n){"use strict";n.d(t,{AW:function(){return s},DB:function(){return r},m3:function(){return o},zO:function(){return d}});var a=n(40439);let r=6,o=10,i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.Z)("/",...t)},c=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i("blog",...t)},s={Home:i(),Blog:c(),BlogPost:c("p"),Tags:c("tags"),Archives:c("archives"),NotFound:i("404")},d={Avatar:"https://i.imgur.com/6Dve09Q.jpg",CV:"https://docs.google.com/document/d/1hiYT_QK5draFMMogwfwf5H2coHcJDveS/edit?usp=share_link&ouid=115833122300012543204&rtpof=true&sd=true",Linkedin:"https://www.linkedin.com/in/lixing-yang-1a2037230/",Facebook:"https://www.facebook.com/retr0327/",Github:{Lixing:"https://github.com/Retr0327",Organization:{Lopen:"https://github.com/lopentu",Ioltw:"https://github.com/Taiwan-Olympiad-in-Linguistics",SocialMedia:"https://github.com/Taiwan-Social-Media-Corpus"}}}},77279:function(e,t,n){"use strict";n.r(t),n.d(t,{MdxMetadataProvider:function(){return c},useMdxMetadata:function(){return i}});var a=n(3411),r=n(76538);let o=(0,r.createContext)([]),i=()=>(0,r.useContext)(o);function c(e){let{children:t,metadata:n}=e;return(0,a.jsx)(o.Provider,{value:n,children:t})}},99628:function(e,t,n){"use strict";n.d(t,{Q:function(){return r}});var a=n(79193);function r(e,t,n,r){let o=t-1,i=Math.ceil(e.length/n),c=e.slice(o*n,(o+1)*n);return 0===c.length&&(0,a.redirect)("".concat(r,"?page=1")),{selectedMetadata:c,totalPages:i}}},32605:function(e){e.exports={container:"BlogGallery_container__52Nwv"}},2995:function(e){e.exports={card:"Card_card__Lk0_a",title:"Card_title__jiJ5F",footer:"Card_footer__YowpF"}},16878:function(e,t,n){"use strict";n.d(t,{C:function(){return p}});var a=n(76538),r=n(24033),o=n(17242),i=n(9255),c=n(44487),s=n(31730),d=n(50639),l=n(437),u={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let m={},g=(0,o.Z)((e,t)=>{let{radius:n,color:a,gradient:o,variant:c,size:s,autoContrast:d}=t,l=e.variantColorResolver({color:a||e.primaryColor,theme:e,gradient:o,variant:c||"filled",autoContrast:d});return{root:{"--badge-height":(0,r.ap)(s,"badge-height"),"--badge-padding-x":(0,r.ap)(s,"badge-padding-x"),"--badge-fz":(0,r.ap)(s,"badge-fz"),"--badge-radius":void 0===n?void 0:(0,r.H5)(n),"--badge-bg":a||c?l.background:void 0,"--badge-color":a||c?l.color:void 0,"--badge-bd":a||c?l.border:void 0,"--badge-dot-color":"dot"===c?(0,i.p)(a,e):void 0}}}),p=(0,l.b)((e,t)=>{let n=(0,c.w)("Badge",m,e),{classNames:r,className:o,style:i,styles:l,unstyled:p,vars:f,radius:h,color:b,gradient:v,leftSection:x,rightSection:w,children:_,variant:j,fullWidth:y,autoContrast:C,circle:B,mod:E,...N}=n,k=(0,s.y)({name:"Badge",props:n,classes:u,className:o,style:i,classNames:r,styles:l,unstyled:p,vars:f,varsResolver:g});return a.createElement(d.Box,{variant:j,mod:[{block:y,circle:B},E],...k("root",{variant:j}),ref:t,...N},x&&a.createElement("span",{...k("section"),"data-position":"left"},x),a.createElement("span",{...k("label")},_),w&&a.createElement("span",{...k("section"),"data-position":"right"},w))});p.classes=u,p.displayName="@mantine/core/Badge"},55207:function(e,t,n){"use strict";n.r(t),n.d(t,{Image:function(){return g}});var a=n(76538),r=n(24033),o=n(17242),i=n(44487),c=n(31730),s=n(50639),d=n(437),l={root:"m_9e117634"};let u={},m=(0,o.Z)((e,t)=>{let{radius:n,fit:a}=t;return{root:{"--image-radius":void 0===n?void 0:(0,r.H5)(n),"--image-object-fit":a}}}),g=(0,d.b)((e,t)=>{let n=(0,i.w)("Image",u,e),{classNames:r,className:o,style:d,styles:g,unstyled:p,vars:f,onError:h,src:b,radius:v,fit:x,fallbackSrc:w,mod:_,...j}=n,[y,C]=(0,a.useState)(!b);(0,a.useEffect)(()=>C(!b),[b]);let B=(0,c.y)({name:"Image",classes:l,props:n,className:o,style:d,classNames:r,styles:g,unstyled:p,vars:f,varsResolver:m});return y&&w?a.createElement(s.Box,{component:"img",ref:t,src:w,...B("root"),onError:h,mod:["fallback",_],...j}):a.createElement(s.Box,{component:"img",ref:t,...B("root"),src:b,onError:e=>{null==h||h(e),C(!0)},mod:_,...j})});g.classes=l,g.displayName="@mantine/core/Image"},73228:function(e,t,n){"use strict";n.d(t,{X:function(){return g}});var a=n(76538),r=n(24033),o=n(17242),i=n(44487),c=n(31730),s=n(50639),d=n(437),l={root:"m_1b7284a3"};let u={},m=(0,o.Z)((e,t)=>{let{radius:n,shadow:a}=t;return{root:{"--paper-radius":void 0===n?void 0:(0,r.H5)(n),"--paper-shadow":(0,r.Xj)(a)}}}),g=(0,d.b)((e,t)=>{let n=(0,i.w)("Paper",u,e),{classNames:r,className:o,style:d,styles:g,unstyled:p,withBorder:f,vars:h,radius:b,shadow:v,variant:x,mod:w,..._}=n,j=(0,c.y)({name:"Paper",props:n,classes:l,className:o,style:d,classNames:r,styles:g,unstyled:p,vars:h,varsResolver:m});return a.createElement(s.Box,{ref:t,mod:[{"data-with-border":f},w],...j("root"),variant:x,..._})});g.classes=l,g.displayName="@mantine/core/Paper"}},function(e){e.O(0,[72,821,783,581,744],function(){return e(e.s=59741)}),_N_E=e.O()}]);