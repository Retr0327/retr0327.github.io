(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[318],{1879:(e,t,l)=>{"use strict";l.d(t,{$:()=>c,MdxDataProvider:()=>a});var s=l(65628),i=l(23824),r=l(16458);let n=(0,i.createContext)(null);function a(e){let{children:t,mdxMetadata:l}=e,a=(0,i.useMemo)(()=>(0,r.v)(()=>({mdx:{categories:l.reduce((e,t)=>(t.category.forEach(t=>{e.push(t)}),e),[]),metadata:l},pick:(e,t,l)=>{let s=t-1,i=Math.ceil(e.length/l),r=e.slice(s*l,(s+1)*l);return 0===r.length?null:{selectedMetadata:r,totalPages:i}},getSiblingsBySlug:(e,t)=>{let l=e.findIndex(e=>e.slug===t);return{prev:e[l-1],next:e[l+1]}}})),[])();return(0,s.jsx)(n.Provider,{value:a,children:t})}let c=()=>{let e=(0,i.useContext)(n);if(!e)throw Error("Invalid context");return e}},9318:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>_});var s=l(65628),i=l(8741),r=l(63087),n=l(2571),a=l(41055),c=l(82155),d=l(1879),o=l(6966),u=(0,o.A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]]),x=(0,o.A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]]),g=l(13679),h=l.n(g);let _=function(e){let{mdx:t,getSiblingsBySlug:l}=(0,d.$)(),{prev:o,next:g}=l(t.metadata,e.slug);return(0,s.jsxs)("div",{className:h().root,children:[o&&(0,s.jsxs)(i.default,{href:o.slug,className:(0,r.A)(h().link,n.FOCUS_CLASS_NAMES.auto),children:[(0,s.jsx)(u,{stroke:1.5,className:h().icon}),(0,s.jsxs)(a.Box,{mod:"prev",className:h().body,children:[(0,s.jsx)(c.Text,{className:h().title,children:"Previous"}),(0,s.jsx)(c.Text,{c:"dimmed",className:h().description,children:o.title})]})]}),g&&(0,s.jsxs)(i.default,{href:g.slug,className:(0,r.A)(h().link,n.FOCUS_CLASS_NAMES.auto),children:[(0,s.jsxs)(a.Box,{mod:"next",className:h().body,children:[(0,s.jsx)(c.Text,{className:h().title,children:"Next"}),(0,s.jsx)(c.Text,{c:"dimmed",className:h().description,children:g.title})]}),(0,s.jsx)(x,{stroke:1.5,className:h().icon})]})]})}},13679:e=>{e.exports={root:"MdxSiblings_root__32nth",link:"MdxSiblings_link__YpTNw",body:"MdxSiblings_body__pXFU6",title:"MdxSiblings_title__58dgN",description:"MdxSiblings_description__hAeJ8",icon:"MdxSiblings_icon__R8mM4"}},16458:(e,t,l)=>{"use strict";l.d(t,{v:()=>c});var s=l(23824);let i=e=>{let t;let l=new Set,s=(e,s)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=s?s:"object"!=typeof i||null===i)?i:Object.assign({},t,i),l.forEach(l=>l(t,e))}},i=()=>t,r={setState:s,getState:i,getInitialState:()=>n,subscribe:e=>(l.add(e),()=>l.delete(e))},n=t=e(s,i,r);return r},r=e=>e?i(e):i,n=e=>e,a=e=>{let t=r(e),l=e=>(function(e,t=n){let l=s.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return s.useDebugValue(l),l})(t,e);return Object.assign(l,t),l},c=e=>e?a(e):a}}]);