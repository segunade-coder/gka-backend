import{r as o,j as p,c as w}from"./index-ByHRS0xJ.js";import{u as g}from"./createLucideIcon-D8ENqwiY.js";function V(e,n,{checkForDefaultPrevented:t=!0}={}){return function(r){if(e==null||e(r),t===!1||!r.defaultPrevented)return n==null?void 0:n(r)}}function A(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function R(...e){return n=>{let t=!1;const i=e.map(r=>{const s=A(r,n);return!t&&typeof s=="function"&&(t=!0),s});if(t)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():A(e[r],null)}}}}function C(...e){return o.useCallback(R(...e),e)}var E=o.forwardRef((e,n)=>{const{children:t,...i}=e,r=o.Children.toArray(t),s=r.find(M);if(s){const c=s.props.children,l=r.map(u=>u===s?o.Children.count(c)>1?o.Children.only(null):o.isValidElement(c)?c.props.children:null:u);return p.jsx(y,{...i,ref:n,children:o.isValidElement(c)?o.cloneElement(c,void 0,l):null})}return p.jsx(y,{...i,ref:n,children:t})});E.displayName="Slot";var y=o.forwardRef((e,n)=>{const{children:t,...i}=e;if(o.isValidElement(t)){const r=b(t);return o.cloneElement(t,{...T(i,t.props),ref:n?R(n,r):r})}return o.Children.count(t)>1?o.Children.only(null):null});y.displayName="SlotClone";var S=({children:e})=>p.jsx(p.Fragment,{children:e});function M(e){return o.isValidElement(e)&&e.type===S}function T(e,n){const t={...n};for(const i in n){const r=e[i],s=n[i];/^on[A-Z]/.test(i)?r&&s?t[i]=(...l)=>{s(...l),r(...l)}:r&&(t[i]=r):i==="style"?t[i]={...r,...s}:i==="className"&&(t[i]=[r,s].filter(Boolean).join(" "))}return{...e,...t}}function b(e){var i,r;let n=(i=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:i.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}var x=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],F=x.reduce((e,n)=>{const t=o.forwardRef((i,r)=>{const{asChild:s,...c}=i,l=s?E:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),p.jsx(l,{...c,ref:r})});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function _(e,n){e&&w.flushSync(()=>e.dispatchEvent(n))}function j(e,n){return o.useReducer((t,i)=>n[t][i]??t,e)}var D=e=>{const{present:n,children:t}=e,i=I(n),r=typeof t=="function"?t({present:i.isPresent}):o.Children.only(t),s=C(i.ref,U(r));return typeof t=="function"||i.isPresent?o.cloneElement(r,{ref:s}):null};D.displayName="Presence";function I(e){const[n,t]=o.useState(),i=o.useRef({}),r=o.useRef(e),s=o.useRef("none"),c=e?"mounted":"unmounted",[l,u]=j(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.useEffect(()=>{const a=h(i.current);s.current=l==="mounted"?a:"none"},[l]),g(()=>{const a=i.current,m=r.current;if(m!==e){const N=s.current,f=h(a);e?u("MOUNT"):f==="none"||(a==null?void 0:a.display)==="none"?u("UNMOUNT"):u(m&&N!==f?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,u]),g(()=>{if(n){let a;const m=n.ownerDocument.defaultView??window,d=f=>{const P=h(i.current).includes(f.animationName);if(f.target===n&&P&&(u("ANIMATION_END"),!r.current)){const v=n.style.animationFillMode;n.style.animationFillMode="forwards",a=m.setTimeout(()=>{n.style.animationFillMode==="forwards"&&(n.style.animationFillMode=v)})}},N=f=>{f.target===n&&(s.current=h(i.current))};return n.addEventListener("animationstart",N),n.addEventListener("animationcancel",d),n.addEventListener("animationend",d),()=>{m.clearTimeout(a),n.removeEventListener("animationstart",N),n.removeEventListener("animationcancel",d),n.removeEventListener("animationend",d)}}else u("ANIMATION_END")},[n,u]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:o.useCallback(a=>{a&&(i.current=getComputedStyle(a)),t(a)},[])}}function h(e){return(e==null?void 0:e.animationName)||"none"}function U(e){var i,r;let n=(i=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:i.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}export{F as P,E as S,D as a,V as c,_ as d,C as u};
