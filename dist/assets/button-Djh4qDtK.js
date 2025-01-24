import{r as i,j as f,c as E}from"./index-CX7QPJWi.js";import{c as N}from"./utils-CRrKglZt.js";function V(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function k(...e){return t=>e.forEach(r=>V(r,t))}function F(...e){return i.useCallback(k(...e),e)}var h=i.forwardRef((e,t)=>{const{children:r,...n}=e,s=i.Children.toArray(r),a=s.find(P);if(a){const o=a.props.children,d=s.map(m=>m===a?i.Children.count(o)>1?i.Children.only(null):i.isValidElement(o)?o.props.children:null:m);return f.jsx(g,{...n,ref:t,children:i.isValidElement(o)?i.cloneElement(o,void 0,d):null})}return f.jsx(g,{...n,ref:t,children:r})});h.displayName="Slot";var g=i.forwardRef((e,t)=>{const{children:r,...n}=e;if(i.isValidElement(r)){const s=O(r);return i.cloneElement(r,{...S(n,r.props),ref:t?k(t,s):s})}return i.Children.count(r)>1?i.Children.only(null):null});g.displayName="SlotClone";var R=({children:e})=>f.jsx(f.Fragment,{children:e});function P(e){return i.isValidElement(e)&&e.type===R}function S(e,t){const r={...t};for(const n in t){const s=e[n],a=t[n];/^on[A-Z]/.test(n)?s&&a?r[n]=(...d)=>{a(...d),s(...d)}:s&&(r[n]=s):n==="style"?r[n]={...s,...a}:n==="className"&&(r[n]=[s,a].filter(Boolean).join(" "))}return{...e,...r}}function O(e){var n,s;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var A=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],K=A.reduce((e,t)=>{const r=i.forwardRef((n,s)=>{const{asChild:a,...o}=n,d=a?h:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),f.jsx(d,{...o,ref:s})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function T(e,t){e&&E.flushSync(()=>e.dispatchEvent(t))}function C(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=C(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function W(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=C(e))&&(n&&(n+=" "),n+=t);return n}const y=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,x=W,D=(e,t)=>r=>{var n;if((t==null?void 0:t.variants)==null)return x(e,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:s,defaultVariants:a}=t,o=Object.keys(s).map(l=>{const u=r==null?void 0:r[l],v=a==null?void 0:a[l];if(u===null)return null;const c=y(u)||y(v);return s[l][c]}),d=r&&Object.entries(r).reduce((l,u)=>{let[v,c]=u;return c===void 0||(l[v]=c),l},{}),m=t==null||(n=t.compoundVariants)===null||n===void 0?void 0:n.reduce((l,u)=>{let{class:v,className:c,...j}=u;return Object.entries(j).every(w=>{let[p,b]=w;return Array.isArray(b)?b.includes({...a,...d}[p]):{...a,...d}[p]===b})?[...l,v,c]:l},[]);return x(e,o,m,r==null?void 0:r.class,r==null?void 0:r.className)},B=D("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",{variants:{variant:{default:"bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",destructive:"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",outline:"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",link:"text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),z=i.forwardRef(({className:e,variant:t,size:r,asChild:n=!1,...s},a)=>{const o=n?h:"button";return f.jsx(o,{className:N(B({variant:t,size:r,className:e})),ref:a,...s})});z.displayName="Button";export{z as B,K as P,R as S,h as a,B as b,D as c,T as d,F as u};
