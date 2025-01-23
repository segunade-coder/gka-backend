import{r as s,j as w,w as g}from"./index-B3RiOCrZ.js";function M(e,t){const n=s.createContext(t),o=r=>{const{children:u,...a}=r,i=s.useMemo(()=>a,Object.values(a));return w.jsx(n.Provider,{value:i,children:u})};o.displayName=e+"Provider";function c(r){const u=s.useContext(n);if(u)return u;if(t!==void 0)return t;throw new Error(`\`${r}\` must be used within \`${e}\``)}return[o,c]}function A(e,t=[]){let n=[];function o(r,u){const a=s.createContext(u),i=n.length;n=[...n,u];const l=f=>{var h;const{scope:d,children:C,...v}=f,m=((h=d==null?void 0:d[e])==null?void 0:h[i])||a,b=s.useMemo(()=>v,Object.values(v));return w.jsx(m.Provider,{value:b,children:C})};l.displayName=r+"Provider";function x(f,d){var m;const C=((m=d==null?void 0:d[e])==null?void 0:m[i])||a,v=s.useContext(C);if(v)return v;if(u!==void 0)return u;throw new Error(`\`${f}\` must be used within \`${r}\``)}return[l,x]}const c=()=>{const r=n.map(u=>s.createContext(u));return function(a){const i=(a==null?void 0:a[e])||r;return s.useMemo(()=>({[`__scope${e}`]:{...a,[e]:i}}),[a,i])}};return c.scopeName=e,[o,$(c,...t)]}function $(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(r){const u=o.reduce((a,{useScope:i,scopeName:l})=>{const f=i(r)[`__scope${l}`];return{...a,...f}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}var E=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},P=g.useId||(()=>{}),j=0;function B(e){const[t,n]=s.useState(P());return E(()=>{e||n(o=>o??String(j++))},[e]),e||(t?`radix-${t}`:"")}function p(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...n)=>{var o;return(o=t.current)==null?void 0:o.call(t,...n)},[])}function I({prop:e,defaultProp:t,onChange:n=()=>{}}){const[o,c]=y({defaultProp:t,onChange:n}),r=e!==void 0,u=r?e:o,a=p(n),i=s.useCallback(l=>{if(r){const f=typeof l=="function"?l(e):l;f!==e&&a(f)}else c(l)},[r,e,c,a]);return[u,i]}function y({defaultProp:e,onChange:t}){const n=s.useState(e),[o]=n,c=s.useRef(o),r=p(t);return s.useEffect(()=>{c.current!==o&&(r(o),c.current=o)},[o,c,r]),n}/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),S=(...e)=>e.filter((t,n,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=s.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:c="",children:r,iconNode:u,...a},i)=>s.createElement("svg",{ref:i,...k,width:t,height:t,stroke:e,strokeWidth:o?Number(n)*24/Number(t):n,className:S("lucide",c),...a},[...u.map(([l,x])=>s.createElement(l,x)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=(e,t)=>{const n=s.forwardRef(({className:o,...c},r)=>s.createElement(L,{ref:r,iconNode:t,className:S(`lucide-${R(e)}`,o),...c}));return n.displayName=`${e}`,n};export{A as a,p as b,N as c,I as d,B as e,M as f,E as u};
