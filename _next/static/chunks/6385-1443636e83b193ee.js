(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6385],{4049:function(e,r,t){"use strict";var n=t(6257);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,r,t,o,a,u){if(u!==n){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t}},507:function(e,r,t){e.exports=t(4049)()},6257:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2475:function(e,r,t){var n;e=t.nmd(e),n=function(){var e=null,r={};u("monochrome",null,[[0,0],[100,0]]),u("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),u("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),u("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),u("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),u("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),u("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),u("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);var t=[],n=function(u){if(void 0!==(u=u||{}).seed&&null!==u.seed&&u.seed===parseInt(u.seed,10))e=u.seed;else if("string"==typeof u.seed)e=function(e){for(var r=0,t=0;t!==e.length&&!(r>=Number.MAX_SAFE_INTEGER);t++)r+=e.charCodeAt(t);return r}(u.seed);else if(void 0!==u.seed&&null!==u.seed)throw TypeError("The seed value must be an integer or string");else e=null;if(null!==u.count&&void 0!==u.count){for(var s,l,p,d=u.count,h=[],v=0;v<u.count;v++)t.push(!1);for(u.count=null;d>h.length;){var y=n(u);null!==e&&(u.seed=e),h.push(y)}return u.count=d,h}return l=function(e,r){if("monochrome"===r.hue)return 0;if("random"===r.luminosity)return a([0,100]);var t=o(e).saturationRange,n=t[0],u=t[1];switch(r.luminosity){case"bright":n=55;break;case"dark":n=u-10;break;case"light":u=55}return a([n,u])}(s=function(e){if(t.length>0){var n=function(e){if(isNaN(e)){if("string"==typeof e){if(r[e]){var t=r[e];if(t.hueRange)return t.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i))return o(c(e)[0]).hueRange}}else{var n=parseInt(e);if(n<360&&n>0)return o(e).hueRange}return[0,360]}(e.hue),u=a(n),i=(n[1]-n[0])/t.length,f=parseInt((u-n[0])/i);!0===t[f]?f=(f+2)%t.length:t[f]=!0;var s=(n[0]+f*i)%359,l=(n[0]+(f+1)*i)%359;return(u=a(n=[s,l]))<0&&(u=360+u),u}var n=function(e){if("number"==typeof parseInt(e)){var t=parseInt(e);if(t<360&&t>0)return[t,t]}if("string"==typeof e){if(r[e]){var n=r[e];if(n.hueRange)return n.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var o=c(e)[0];return[o,o]}}return[0,360]}(e.hue);return(u=a(n))<0&&(u=360+u),u}(u),u),p=function(e,r,t){var n=function(e,r){for(var t=o(e).lowerBounds,n=0;n<t.length-1;n++){var a=t[n][0],u=t[n][1],i=t[n+1][0],c=t[n+1][1];if(r>=a&&r<=i){var f=(c-u)/(i-a),s=u-f*a;return f*r+s}}return 0}(e,r),u=100;switch(t.luminosity){case"dark":u=n+20;break;case"light":n=(u+n)/2;break;case"random":n=0,u=100}return a([n,u])}(s,l,u),function(e,r){switch(r.format){case"hsvArray":return e;case"hslArray":return f(e);case"hsl":var t=f(e);return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)";case"hsla":var n=f(e),o=r.alpha||Math.random();return"hsla("+n[0]+", "+n[1]+"%, "+n[2]+"%, "+o+")";case"rgbArray":return i(e);case"rgb":return"rgb("+i(e).join(", ")+")";case"rgba":var a=i(e),o=r.alpha||Math.random();return"rgba("+a.join(", ")+", "+o+")";default:return function(e){var r=i(e);function t(e){var r=e.toString(16);return 1==r.length?"0"+r:r}return"#"+t(r[0])+t(r[1])+t(r[2])}(e)}}([s,l,p],u)};function o(e){for(var t in e>=334&&e<=360&&(e-=360),r){var n=r[t];if(n.hueRange&&e>=n.hueRange[0]&&e<=n.hueRange[1])return r[t]}return"Color not found"}function a(r){if(null===e){var t=Math.random();return t+=.618033988749895,t%=1,Math.floor(r[0]+t*(r[1]+1-r[0]))}var n=r[1]||1,o=r[0]||0;return Math.floor(o+(e=(9301*e+49297)%233280)/233280*(n-o))}function u(e,t,n){var o=n[0][0],a=n[n.length-1][0],u=n[n.length-1][1],i=n[0][1];r[e]={hueRange:t,lowerBounds:n,saturationRange:[o,a],brightnessRange:[u,i]}}function i(e){var r=e[0];0===r&&(r=1),360===r&&(r=359),r/=360;var t=e[1]/100,n=e[2]/100,o=Math.floor(6*r),a=6*r-o,u=n*(1-t),i=n*(1-a*t),c=n*(1-(1-a)*t),f=256,s=256,l=256;switch(o){case 0:f=n,s=c,l=u;break;case 1:f=i,s=n,l=u;break;case 2:f=u,s=n,l=c;break;case 3:f=u,s=i,l=n;break;case 4:f=c,s=u,l=n;break;case 5:f=n,s=u,l=i}return[Math.floor(255*f),Math.floor(255*s),Math.floor(255*l)]}function c(e){var r=parseInt((e=3===(e=e.replace(/^#/,"")).length?e.replace(/(.)/g,"$1$1"):e).substr(0,2),16)/255,t=parseInt(e.substr(2,2),16)/255,n=parseInt(e.substr(4,2),16)/255,o=Math.max(r,t,n),a=o-Math.min(r,t,n),u=o?a/o:0;switch(o){case r:return[60*((t-n)/a%6)||0,u,o];case t:return[60*((n-r)/a+2)||0,u,o];case n:return[60*((r-t)/a+4)||0,u,o]}}function f(e){var r=e[0],t=e[1]/100,n=e[2]/100,o=(2-t)*n;return[r,Math.round(t*n/(o<1?o:2-o)*1e4)/100,o/2*100]}return n}(),e&&e.exports&&(r=e.exports=n),r.randomColor=n},2598:function(e,r,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.TagCloud=x;var o=p(t(507)),a=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=l(r);if(t&&t.has(e))return t.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(o,u,i):o[u]=e[u]}return o.default=e,t&&t.set(e,o),o}(t(959)),u=p(t(6275)),i=p(t(2475)),c=p(t(8116)),f=t(3011),s=t(2240);function l(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(l=function(e){return e?t:r})(e)}function p(e){return e&&e.__esModule?e:{default:e}}function d(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||h(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,r){if(e){if("string"==typeof e)return v(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,r)}}function v(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}var b=["onClick","onDoubleClick","onMouseMove","onMouseOver","onMouseOut","onPress","onPressIn","onPressOut"],m=["tags","shuffle","renderer","maxSize","minSize","colorOptions","disableRandomColor","randomSeed","randomNumberGenerator","containerComponent"];function g(e){return e.key+e.value+e.count}function x(e){var r,t,n,o,f,l,p,v=function(e){if(Array.isArray(e))return e}(r=(0,a.useState)([]))||function(e,r){var t,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],u=!0,i=!1;try{for(o=o.call(e);!(u=(t=o.next()).done)&&(a.push(t.value),!r||a.length!==r);u=!0);}catch(e){i=!0,n=e}finally{try{u||null==o.return||o.return()}finally{if(i)throw n}}return a}}(r,2)||h(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),x=v[0],O=v[1],w=e.tags.map(g).join(":");(0,a.useEffect)(function(){var r,t,n,o,a,f;O((r=e.tags,t=e.shuffle,n=e.randomSeed,o=e.randomNumberGenerator,a=n?(0,c.default)(n):o,f=r.slice(),(t?(0,u.default)(f,{rng:a}):f).map(function(r){var t,n,o;return{tag:r,color:(t=e.disableRandomColor,n=e.colorOptions,o=e.randomSeed,r.color?r.color:t?void 0:(0,i.default)(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach(function(r){var n,o;n=e,o=t[r],r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({seed:o&&"".concat(o,":").concat(g(r))},n)))}})))},[e.colorOptions,e.randomSeed,e.shuffle,e.disableRandomColor,w]);var j=(0,s.omit)(e,[].concat(m,b)),k=e.containerComponent;return a.default.createElement(k,j,(t=e.minSize,n=e.maxSize,o=x.map(function(e){return e.tag.count}),f=Math.min.apply(Math,d(o)),l=Math.max.apply(Math,d(o)),p=(0,s.pick)(e,b),x.map(function(r){var o,u,i,c=r.tag,d=r.color,h=(0,s.fontSizeConverter)(c.count,f,l,t,n);return o=e.renderer(c,h,d),u=(0,s.pick)(o.props,b),i=(0,s.keys)(p).reduce(function(e,r){return(p[r]||u[r])&&(e[r]=function(e){p[r]&&p[r](c,e),u[r]&&u(e)}),e},{}),a.default.cloneElement(o,i)})))}x.propTypes={tags:o.default.array.isRequired,maxSize:o.default.number.isRequired,minSize:o.default.number.isRequired,shuffle:o.default.bool,colorOptions:o.default.object,disableRandomColor:o.default.bool,renderer:o.default.func,className:o.default.string,randomSeed:o.default.any,randomNumberGenerator:o.default.func,containerComponent:o.default.elementType},x.defaultProps={renderer:f.defaultRenderer,shuffle:!0,className:"tag-cloud",colorOptions:{},containerComponent:"div"}},3011:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.defaultRenderer=void 0;var n,o=(n=t(959))&&n.__esModule?n:{default:n},a=["className","style"];function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach(function(r){var n,o;n=e,o=t[r],r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}r.defaultRenderer=function(e,r,t){var n=e.props||{},i=n.className,s=n.style,l=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(n,a),p=e.key||e.value,d=c(c({},f),{},{color:t,fontSize:r+"px"},s),h="tag-cloud-tag";return i&&(h+=" "+i),o.default.createElement("span",u({className:h,style:d,key:p},l),e.value)};var f={margin:"0px 3px",verticalAlign:"middle",display:"inline-block"}},2240:function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.fontSizeConverter=void 0,r.keys=function(e){return Object.keys(e)},r.omit=void 0,r.pick=function(e,r){return r.reduce(function(r,t){return r[t]=e[t],r},{})},r.fontSizeConverter=function(e,r,t,n,o){return t-r==0?Math.round((n+o)/2):Math.round((e-r)*(o-n)/(t-r)+n)},r.omit=function(e,r){return Object.keys(e).reduce(function(t,n){return~r.indexOf(n)||(t[n]=e[n]),t},{})}},6385:function(e,r,t){"use strict";Object.defineProperty(r,"J",{enumerable:!0,get:function(){return n.TagCloud}});var n=t(2598)},8116:function(e,r,t){var n=t(5082),o=t(7557),a=t(2262),u=t(2095),i=t(431),c=t(7131),f=t(7701);f.alea=n,f.xor128=o,f.xorwow=a,f.xorshift7=u,f.xor4096=i,f.tychei=c,e.exports=f},5082:function(e,r,t){var n;!function(e,o,a){function u(e){var r,t=this,n=(r=4022871197,function(e){e=String(e);for(var t=0;t<e.length;t++){var n=.02519603282416938*(r+=e.charCodeAt(t));r=n>>>0,n-=r,n*=r,r=n>>>0,n-=r,r+=4294967296*n}return(r>>>0)*23283064365386963e-26});t.next=function(){var e=2091639*t.s0+23283064365386963e-26*t.c;return t.s0=t.s1,t.s1=t.s2,t.s2=e-(t.c=0|e)},t.c=1,t.s0=n(" "),t.s1=n(" "),t.s2=n(" "),t.s0-=n(e),t.s0<0&&(t.s0+=1),t.s1-=n(e),t.s1<0&&(t.s1+=1),t.s2-=n(e),t.s2<0&&(t.s2+=1),n=null}function i(e,r){return r.c=e.c,r.s0=e.s0,r.s1=e.s1,r.s2=e.s2,r}function c(e,r){var t=new u(e),n=r&&r.state,o=t.next;return o.int32=function(){return 4294967296*t.next()|0},o.double=function(){return o()+(2097152*o()|0)*11102230246251565e-32},o.quick=o,n&&("object"==typeof n&&i(n,t),o.state=function(){return i(t,{})}),o}o&&o.exports?o.exports=c:t.amdD&&t.amdO?void 0!==(n=(function(){return c}).call(r,t,r,o))&&(o.exports=n):this.alea=c}(0,e=t.nmd(e),t.amdD)},7131:function(e,r,t){var n;!function(e,o,a){function u(e){var r=this,t="";r.next=function(){var e=r.b,t=r.c,n=r.d,o=r.a;return e=e<<25^e>>>7^t,t=t-n|0,n=n<<24^n>>>8^o,o=o-e|0,r.b=e=e<<20^e>>>12^t,r.c=t=t-n|0,r.d=n<<16^t>>>16^o,r.a=o-e|0},r.a=0,r.b=0,r.c=-1640531527,r.d=1367130551,e===Math.floor(e)?(r.a=e/4294967296|0,r.b=0|e):t+=e;for(var n=0;n<t.length+20;n++)r.b^=0|t.charCodeAt(n),r.next()}function i(e,r){return r.a=e.a,r.b=e.b,r.c=e.c,r.d=e.d,r}function c(e,r){var t=new u(e),n=r&&r.state,o=function(){return(t.next()>>>0)/4294967296};return o.double=function(){do var e=((t.next()>>>11)+(t.next()>>>0)/4294967296)/2097152;while(0===e);return e},o.int32=t.next,o.quick=o,n&&("object"==typeof n&&i(n,t),o.state=function(){return i(t,{})}),o}o&&o.exports?o.exports=c:t.amdD&&t.amdO?void 0!==(n=(function(){return c}).call(r,t,r,o))&&(o.exports=n):this.tychei=c}(0,e=t.nmd(e),t.amdD)},7557:function(e,r,t){var n;!function(e,o,a){function u(e){var r=this,t="";r.x=0,r.y=0,r.z=0,r.w=0,r.next=function(){var e=r.x^r.x<<11;return r.x=r.y,r.y=r.z,r.z=r.w,r.w^=r.w>>>19^e^e>>>8},e===(0|e)?r.x=e:t+=e;for(var n=0;n<t.length+64;n++)r.x^=0|t.charCodeAt(n),r.next()}function i(e,r){return r.x=e.x,r.y=e.y,r.z=e.z,r.w=e.w,r}function c(e,r){var t=new u(e),n=r&&r.state,o=function(){return(t.next()>>>0)/4294967296};return o.double=function(){do var e=((t.next()>>>11)+(t.next()>>>0)/4294967296)/2097152;while(0===e);return e},o.int32=t.next,o.quick=o,n&&("object"==typeof n&&i(n,t),o.state=function(){return i(t,{})}),o}o&&o.exports?o.exports=c:t.amdD&&t.amdO?void 0!==(n=(function(){return c}).call(r,t,r,o))&&(o.exports=n):this.xor128=c}(0,e=t.nmd(e),t.amdD)},431:function(e,r,t){var n;!function(e,o,a){function u(e){var r=this;r.next=function(){var e,t,n=r.w,o=r.X,a=r.i;return r.w=n=n+1640531527|0,t=o[a+34&127],e=o[a=a+1&127],t^=t<<13,e^=e<<17,t^=t>>>15,e^=e>>>12,t=o[a]=t^e,r.i=a,t+(n^n>>>16)|0},function(e,r){var t,n,o,a,u,i=[],c=128;for(r===(0|r)?(n=r,r=null):(r+="\x00",n=0,c=Math.max(c,r.length)),o=0,a=-32;a<c;++a)r&&(n^=r.charCodeAt((a+32)%r.length)),0===a&&(u=n),n^=n<<10,n^=n>>>15,n^=n<<4,n^=n>>>13,a>=0&&(u=u+1640531527|0,o=0==(t=i[127&a]^=n+u)?o+1:0);for(o>=128&&(i[127&(r&&r.length||0)]=-1),o=127,a=512;a>0;--a)n=i[o+34&127],t=i[o=o+1&127],n^=n<<13,t^=t<<17,n^=n>>>15,t^=t>>>12,i[o]=n^t;e.w=u,e.X=i,e.i=o}(r,e)}function i(e,r){return r.i=e.i,r.w=e.w,r.X=e.X.slice(),r}function c(e,r){null==e&&(e=+new Date);var t=new u(e),n=r&&r.state,o=function(){return(t.next()>>>0)/4294967296};return o.double=function(){do var e=((t.next()>>>11)+(t.next()>>>0)/4294967296)/2097152;while(0===e);return e},o.int32=t.next,o.quick=o,n&&(n.X&&i(n,t),o.state=function(){return i(t,{})}),o}o&&o.exports?o.exports=c:t.amdD&&t.amdO?void 0!==(n=(function(){return c}).call(r,t,r,o))&&(o.exports=n):this.xor4096=c}(0,e=t.nmd(e),t.amdD)},2095:function(e,r,t){var n;!function(e,o,a){function u(e){var r=this;r.next=function(){var e,t,n=r.x,o=r.i;return e=n[o],e^=e>>>7,t=e^e<<24,e=n[o+1&7],t^=e^e>>>10,e=n[o+3&7],t^=e^e>>>3,e=n[o+4&7],t^=e^e<<7,e=n[o+7&7],e^=e<<13,t^=e^e<<9,n[o]=t,r.i=o+1&7,t},function(e,r){var t,n=[];if(r===(0|r))n[0]=r;else for(t=0,r=""+r;t<r.length;++t)n[7&t]=n[7&t]<<15^r.charCodeAt(t)+n[t+1&7]<<13;for(;n.length<8;)n.push(0);for(t=0;t<8&&0===n[t];++t);for(8==t?n[7]=-1:n[t],e.x=n,e.i=0,t=256;t>0;--t)e.next()}(r,e)}function i(e,r){return r.x=e.x.slice(),r.i=e.i,r}function c(e,r){null==e&&(e=+new Date);var t=new u(e),n=r&&r.state,o=function(){return(t.next()>>>0)/4294967296};return o.double=function(){do var e=((t.next()>>>11)+(t.next()>>>0)/4294967296)/2097152;while(0===e);return e},o.int32=t.next,o.quick=o,n&&(n.x&&i(n,t),o.state=function(){return i(t,{})}),o}o&&o.exports?o.exports=c:t.amdD&&t.amdO?void 0!==(n=(function(){return c}).call(r,t,r,o))&&(o.exports=n):this.xorshift7=c}(0,e=t.nmd(e),t.amdD)},2262:function(e,r,t){var n;!function(e,o,a){function u(e){var r=this,t="";r.next=function(){var e=r.x^r.x>>>2;return r.x=r.y,r.y=r.z,r.z=r.w,r.w=r.v,(r.d=r.d+362437|0)+(r.v=r.v^r.v<<4^(e^e<<1))|0},r.x=0,r.y=0,r.z=0,r.w=0,r.v=0,e===(0|e)?r.x=e:t+=e;for(var n=0;n<t.length+64;n++)r.x^=0|t.charCodeAt(n),n==t.length&&(r.d=r.x<<10^r.x>>>4),r.next()}function i(e,r){return r.x=e.x,r.y=e.y,r.z=e.z,r.w=e.w,r.v=e.v,r.d=e.d,r}function c(e,r){var t=new u(e),n=r&&r.state,o=function(){return(t.next()>>>0)/4294967296};return o.double=function(){do var e=((t.next()>>>11)+(t.next()>>>0)/4294967296)/2097152;while(0===e);return e},o.int32=t.next,o.quick=o,n&&("object"==typeof n&&i(n,t),o.state=function(){return i(t,{})}),o}o&&o.exports?o.exports=c:t.amdD&&t.amdO?void 0!==(n=(function(){return c}).call(r,t,r,o))&&(o.exports=n):this.xorwow=c}(0,e=t.nmd(e),t.amdD)},7701:function(e,r,t){var n;!function(o,a,u){var i,c=u.pow(256,6),f=u.pow(2,52),s=2*f;function l(e,r,t){var n=[],l=h(function e(r,t){var n,o=[],a=typeof r;if(t&&"object"==a)for(n in r)try{o.push(e(r[n],t-1))}catch(e){}return o.length?o:"string"==a?r:r+"\x00"}((r=!0==r?{entropy:!0}:r||{}).entropy?[e,v(a)]:null==e?function(){try{var e;return i&&(e=i.randomBytes)?e=e(256):(e=new Uint8Array(256),(o.crypto||o.msCrypto).getRandomValues(e)),v(e)}catch(e){var r=o.navigator,t=r&&r.plugins;return[+new Date,o,t,o.screen,v(a)]}}():e,3),n),y=new p(n),b=function(){for(var e=y.g(6),r=c,t=0;e<f;)e=(e+t)*256,r*=256,t=y.g(1);for(;e>=s;)e/=2,r/=2,t>>>=1;return(e+t)/r};return b.int32=function(){return 0|y.g(4)},b.quick=function(){return y.g(4)/4294967296},b.double=b,h(v(y.S),a),(r.pass||t||function(e,r,t,n){return(n&&(n.S&&d(n,y),e.state=function(){return d(y,{})}),t)?(u.random=e,r):e})(b,l,"global"in r?r.global:this==u,r.state)}function p(e){var r,t=e.length,n=this,o=0,a=n.i=n.j=0,u=n.S=[];for(t||(e=[t++]);o<256;)u[o]=o++;for(o=0;o<256;o++)u[o]=u[a=255&a+e[o%t]+(r=u[o])],u[a]=r;(n.g=function(e){for(var r,t=0,o=n.i,a=n.j,u=n.S;e--;)r=u[o=255&o+1],t=256*t+u[255&(u[o]=u[a=255&a+r])+(u[a]=r)];return n.i=o,n.j=a,t})(256)}function d(e,r){return r.i=e.i,r.j=e.j,r.S=e.S.slice(),r}function h(e,r){for(var t,n=e+"",o=0;o<n.length;)r[255&o]=255&(t^=19*r[255&o])+n.charCodeAt(o++);return v(r)}function v(e){return String.fromCharCode.apply(0,e)}if(h(u.random(),a),e.exports){e.exports=l;try{i=t(1440)}catch(e){}}else void 0!==(n=(function(){return l}).call(r,t,r,e))&&(e.exports=n)}("undefined"!=typeof self?self:this,[],Math)},6275:function(e){"use strict";function r(e,r){if(!Array.isArray(e))throw Error("shuffle expect an array as parameter.");r=r||{};var t,n,o=e,a=e.length,u=r.rng||Math.random;for(!0===r.copy&&(o=e.slice());a;)t=Math.floor(u()*a),a-=1,n=o[a],o[a]=o[t],o[t]=n;return o}r.pick=function(e,r){if(!Array.isArray(e))throw Error("shuffle.pick() expect an array as parameter.");var t=(r=r||{}).rng||Math.random,n=r.picks||1;if("number"==typeof n&&1!==n){for(var o,a=e.length,u=e.slice(),i=[];n&&a;)i.push(u[o=Math.floor(t()*a)]),u.splice(o,1),a-=1,n-=1;return i}return e[Math.floor(t()*e.length)]},e.exports=r}}]);