import{r as c,j as y,e as tt}from"./index-TnTDpqy4.js";import{u as I,p as nt}from"./index-ye2DFzoX.js";import{b as j,u as ae,a as rt,f as ot,d as at,e as q,c as it}from"./createLucideIcon-Dx379Zb9.js";import{P as A,d as ct}from"./index-B_X_e_ga.js";function x(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function st(e,t=globalThis==null?void 0:globalThis.document){const n=j(e);c.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var ut="DismissableLayer",ie="dismissableLayer.update",lt="dismissableLayer.pointerDownOutside",dt="dismissableLayer.focusOutside",fe,Pe=c.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Re=c.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:a,onInteractOutside:s,onDismiss:i,...v}=e,l=c.useContext(Pe),[d,f]=c.useState(null),h=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=c.useState({}),P=I(t,E=>f(E)),u=Array.from(l.layers),[m]=[...l.layersWithOutsidePointerEventsDisabled].slice(-1),g=u.indexOf(m),S=d?u.indexOf(d):-1,b=l.layersWithOutsidePointerEventsDisabled.size>0,C=S>=g,w=mt(E=>{const O=E.target,W=[...l.branches].some(Z=>Z.contains(O));!C||W||(o==null||o(E),s==null||s(E),E.defaultPrevented||i==null||i())},h),D=ht(E=>{const O=E.target;[...l.branches].some(Z=>Z.contains(O))||(a==null||a(E),s==null||s(E),E.defaultPrevented||i==null||i())},h);return st(E=>{S===l.layers.size-1&&(r==null||r(E),!E.defaultPrevented&&i&&(E.preventDefault(),i()))},h),c.useEffect(()=>{if(d)return n&&(l.layersWithOutsidePointerEventsDisabled.size===0&&(fe=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),l.layersWithOutsidePointerEventsDisabled.add(d)),l.layers.add(d),ve(),()=>{n&&l.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=fe)}},[d,h,n,l]),c.useEffect(()=>()=>{d&&(l.layers.delete(d),l.layersWithOutsidePointerEventsDisabled.delete(d),ve())},[d,l]),c.useEffect(()=>{const E=()=>p({});return document.addEventListener(ie,E),()=>document.removeEventListener(ie,E)},[]),y.jsx(A.div,{...v,ref:P,style:{pointerEvents:b?C?"auto":"none":void 0,...e.style},onFocusCapture:x(e.onFocusCapture,D.onFocusCapture),onBlurCapture:x(e.onBlurCapture,D.onBlurCapture),onPointerDownCapture:x(e.onPointerDownCapture,w.onPointerDownCapture)})});Re.displayName=ut;var ft="DismissableLayerBranch",vt=c.forwardRef((e,t)=>{const n=c.useContext(Pe),r=c.useRef(null),o=I(t,r);return c.useEffect(()=>{const a=r.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),y.jsx(A.div,{...e,ref:o})});vt.displayName=ft;function mt(e,t=globalThis==null?void 0:globalThis.document){const n=j(e),r=c.useRef(!1),o=c.useRef(()=>{});return c.useEffect(()=>{const a=i=>{if(i.target&&!r.current){let v=function(){Ne(lt,n,l,{discrete:!0})};const l={originalEvent:i};i.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=v,t.addEventListener("click",o.current,{once:!0})):v()}else t.removeEventListener("click",o.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",a),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function ht(e,t=globalThis==null?void 0:globalThis.document){const n=j(e),r=c.useRef(!1);return c.useEffect(()=>{const o=a=>{a.target&&!r.current&&Ne(dt,n,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function ve(){const e=new CustomEvent(ie);document.dispatchEvent(e)}function Ne(e,t,n,{discrete:r}){const o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?ct(o,a):o.dispatchEvent(a)}var Q="focusScope.autoFocusOnMount",J="focusScope.autoFocusOnUnmount",me={bubbles:!1,cancelable:!0},pt="FocusScope",De=c.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...s}=e,[i,v]=c.useState(null),l=j(o),d=j(a),f=c.useRef(null),h=I(t,u=>v(u)),p=c.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;c.useEffect(()=>{if(r){let u=function(b){if(p.paused||!i)return;const C=b.target;i.contains(C)?f.current=C:T(f.current,{select:!0})},m=function(b){if(p.paused||!i)return;const C=b.relatedTarget;C!==null&&(i.contains(C)||T(f.current,{select:!0}))},g=function(b){if(document.activeElement===document.body)for(const w of b)w.removedNodes.length>0&&T(i)};document.addEventListener("focusin",u),document.addEventListener("focusout",m);const S=new MutationObserver(g);return i&&S.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",u),document.removeEventListener("focusout",m),S.disconnect()}}},[r,i,p.paused]),c.useEffect(()=>{if(i){pe.add(p);const u=document.activeElement;if(!i.contains(u)){const g=new CustomEvent(Q,me);i.addEventListener(Q,l),i.dispatchEvent(g),g.defaultPrevented||(gt(wt(Oe(i)),{select:!0}),document.activeElement===u&&T(i))}return()=>{i.removeEventListener(Q,l),setTimeout(()=>{const g=new CustomEvent(J,me);i.addEventListener(J,d),i.dispatchEvent(g),g.defaultPrevented||T(u??document.body,{select:!0}),i.removeEventListener(J,d),pe.remove(p)},0)}}},[i,l,d,p]);const P=c.useCallback(u=>{if(!n&&!r||p.paused)return;const m=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,g=document.activeElement;if(m&&g){const S=u.currentTarget,[b,C]=yt(S);b&&C?!u.shiftKey&&g===C?(u.preventDefault(),n&&T(b,{select:!0})):u.shiftKey&&g===b&&(u.preventDefault(),n&&T(C,{select:!0})):g===S&&u.preventDefault()}},[n,r,p.paused]);return y.jsx(A.div,{tabIndex:-1,...s,ref:h,onKeyDown:P})});De.displayName=pt;function gt(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(T(r,{select:t}),document.activeElement!==n)return}function yt(e){const t=Oe(e),n=he(t,e),r=he(t.reverse(),e);return[n,r]}function Oe(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function he(e,t){for(const n of e)if(!Et(n,{upTo:t}))return n}function Et(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function bt(e){return e instanceof HTMLInputElement&&"select"in e}function T(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&bt(e)&&t&&e.select()}}var pe=Ct();function Ct(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=ge(e,t),e.unshift(t)},remove(t){var n;e=ge(e,t),(n=e[0])==null||n.resume()}}}function ge(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function wt(e){return e.filter(t=>t.tagName!=="A")}var St="Portal",Ae=c.forwardRef((e,t)=>{var i;const{container:n,...r}=e,[o,a]=c.useState(!1);ae(()=>a(!0),[]);const s=n||o&&((i=globalThis==null?void 0:globalThis.document)==null?void 0:i.body);return s?tt.createPortal(y.jsx(A.div,{...r,ref:t}),s):null});Ae.displayName=St;function Pt(e,t){return c.useReducer((n,r)=>t[n][r]??n,e)}var $=e=>{const{present:t,children:n}=e,r=Rt(t),o=typeof n=="function"?n({present:r.isPresent}):c.Children.only(n),a=I(r.ref,Nt(o));return typeof n=="function"||r.isPresent?c.cloneElement(o,{ref:a}):null};$.displayName="Presence";function Rt(e){const[t,n]=c.useState(),r=c.useRef({}),o=c.useRef(e),a=c.useRef("none"),s=e?"mounted":"unmounted",[i,v]=Pt(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return c.useEffect(()=>{const l=B(r.current);a.current=i==="mounted"?l:"none"},[i]),ae(()=>{const l=r.current,d=o.current;if(d!==e){const h=a.current,p=B(l);e?v("MOUNT"):p==="none"||(l==null?void 0:l.display)==="none"?v("UNMOUNT"):v(d&&h!==p?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,v]),ae(()=>{if(t){let l;const d=t.ownerDocument.defaultView??window,f=p=>{const u=B(r.current).includes(p.animationName);if(p.target===t&&u&&(v("ANIMATION_END"),!o.current)){const m=t.style.animationFillMode;t.style.animationFillMode="forwards",l=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=m)})}},h=p=>{p.target===t&&(a.current=B(r.current))};return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(l),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else v("ANIMATION_END")},[t,v]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:c.useCallback(l=>{l&&(r.current=getComputedStyle(l)),n(l)},[])}}function B(e){return(e==null?void 0:e.animationName)||"none"}function Nt(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var ee=0;function Dt(){c.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??ye()),document.body.insertAdjacentElement("beforeend",e[1]??ye()),ee++,()=>{ee===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),ee--}},[])}function ye(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var N=function(){return N=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},N.apply(this,arguments)};function Te(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function Ot(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var G="right-scroll-bar-position",Y="width-before-scroll-bar",At="with-scroll-bars-hidden",Tt="--removed-body-scroll-bar-size";function te(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function xt(e,t){var n=c.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var Mt=typeof window<"u"?c.useLayoutEffect:c.useEffect,Ee=new WeakMap;function It(e,t){var n=xt(null,function(r){return e.forEach(function(o){return te(o,r)})});return Mt(function(){var r=Ee.get(n);if(r){var o=new Set(r),a=new Set(e),s=n.current;o.forEach(function(i){a.has(i)||te(i,null)}),a.forEach(function(i){o.has(i)||te(i,s)})}Ee.set(n,e)},[e]),n}function Lt(e){return e}function _t(e,t){t===void 0&&(t=Lt);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var s=t(a,r);return n.push(s),function(){n=n.filter(function(i){return i!==s})}},assignSyncMedium:function(a){for(r=!0;n.length;){var s=n;n=[],s.forEach(a)}n={push:function(i){return a(i)},filter:function(){return n}}},assignMedium:function(a){r=!0;var s=[];if(n.length){var i=n;n=[],i.forEach(a),s=n}var v=function(){var d=s;s=[],d.forEach(a)},l=function(){return Promise.resolve().then(v)};l(),n={push:function(d){s.push(d),l()},filter:function(d){return s=s.filter(d),n}}}};return o}function Ft(e){e===void 0&&(e={});var t=_t(null);return t.options=N({async:!0,ssr:!1},e),t}var xe=function(e){var t=e.sideCar,n=Te(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return c.createElement(r,N({},n))};xe.isSideCarExport=!0;function kt(e,t){return e.useMedium(t),xe}var Me=Ft(),ne=function(){},H=c.forwardRef(function(e,t){var n=c.useRef(null),r=c.useState({onScrollCapture:ne,onWheelCapture:ne,onTouchMoveCapture:ne}),o=r[0],a=r[1],s=e.forwardProps,i=e.children,v=e.className,l=e.removeScrollBar,d=e.enabled,f=e.shards,h=e.sideCar,p=e.noIsolation,P=e.inert,u=e.allowPinchZoom,m=e.as,g=m===void 0?"div":m,S=e.gapMode,b=Te(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),C=h,w=It([n,t]),D=N(N({},b),o);return c.createElement(c.Fragment,null,d&&c.createElement(C,{sideCar:Me,removeScrollBar:l,shards:f,noIsolation:p,inert:P,setCallbacks:a,allowPinchZoom:!!u,lockRef:n,gapMode:S}),s?c.cloneElement(c.Children.only(i),N(N({},D),{ref:w})):c.createElement(g,N({},D,{className:v,ref:w}),i))});H.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};H.classNames={fullWidth:Y,zeroRight:G};var Wt=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function jt(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Wt();return t&&e.setAttribute("nonce",t),e}function Bt(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Ut(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Kt=function(){var e=0,t=null;return{add:function(n){e==0&&(t=jt())&&(Bt(t,n),Ut(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Vt=function(){var e=Kt();return function(t,n){c.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Ie=function(){var e=Vt(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},Xt={left:0,top:0,right:0,gap:0},re=function(e){return parseInt(e||"",10)||0},Gt=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[re(n),re(r),re(o)]},Yt=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Xt;var t=Gt(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},zt=Ie(),k="data-scroll-locked",$t=function(e,t,n,r){var o=e.left,a=e.top,s=e.right,i=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(At,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(i,"px ").concat(r,`;
  }
  body[`).concat(k,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(G,` {
    right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(Y,` {
    margin-right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(G," .").concat(G,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Y," .").concat(Y,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(k,`] {
    `).concat(Tt,": ").concat(i,`px;
  }
`)},be=function(){var e=parseInt(document.body.getAttribute(k)||"0",10);return isFinite(e)?e:0},Ht=function(){c.useEffect(function(){return document.body.setAttribute(k,(be()+1).toString()),function(){var e=be()-1;e<=0?document.body.removeAttribute(k):document.body.setAttribute(k,e.toString())}},[])},Zt=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;Ht();var a=c.useMemo(function(){return Yt(o)},[o]);return c.createElement(zt,{styles:$t(a,!t,o,n?"":"!important")})},ce=!1;if(typeof window<"u")try{var U=Object.defineProperty({},"passive",{get:function(){return ce=!0,!0}});window.addEventListener("test",U,U),window.removeEventListener("test",U,U)}catch{ce=!1}var L=ce?{passive:!1}:!1,qt=function(e){return e.tagName==="TEXTAREA"},Le=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!qt(e)&&n[t]==="visible")},Qt=function(e){return Le(e,"overflowY")},Jt=function(e){return Le(e,"overflowX")},Ce=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=_e(e,r);if(o){var a=Fe(e,r),s=a[1],i=a[2];if(s>i)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},en=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},tn=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},_e=function(e,t){return e==="v"?Qt(t):Jt(t)},Fe=function(e,t){return e==="v"?en(t):tn(t)},nn=function(e,t){return e==="h"&&t==="rtl"?-1:1},rn=function(e,t,n,r,o){var a=nn(e,window.getComputedStyle(t).direction),s=a*r,i=n.target,v=t.contains(i),l=!1,d=s>0,f=0,h=0;do{var p=Fe(e,i),P=p[0],u=p[1],m=p[2],g=u-m-a*P;(P||g)&&_e(e,i)&&(f+=g,h+=P),i instanceof ShadowRoot?i=i.host:i=i.parentNode}while(!v&&i!==document.body||v&&(t.contains(i)||t===i));return(d&&(Math.abs(f)<1||!o)||!d&&(Math.abs(h)<1||!o))&&(l=!0),l},K=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},we=function(e){return[e.deltaX,e.deltaY]},Se=function(e){return e&&"current"in e?e.current:e},on=function(e,t){return e[0]===t[0]&&e[1]===t[1]},an=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},cn=0,_=[];function sn(e){var t=c.useRef([]),n=c.useRef([0,0]),r=c.useRef(),o=c.useState(cn++)[0],a=c.useState(Ie)[0],s=c.useRef(e);c.useEffect(function(){s.current=e},[e]),c.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var u=Ot([e.lockRef.current],(e.shards||[]).map(Se),!0).filter(Boolean);return u.forEach(function(m){return m.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),u.forEach(function(m){return m.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var i=c.useCallback(function(u,m){if("touches"in u&&u.touches.length===2||u.type==="wheel"&&u.ctrlKey)return!s.current.allowPinchZoom;var g=K(u),S=n.current,b="deltaX"in u?u.deltaX:S[0]-g[0],C="deltaY"in u?u.deltaY:S[1]-g[1],w,D=u.target,E=Math.abs(b)>Math.abs(C)?"h":"v";if("touches"in u&&E==="h"&&D.type==="range")return!1;var O=Ce(E,D);if(!O)return!0;if(O?w=E:(w=E==="v"?"h":"v",O=Ce(E,D)),!O)return!1;if(!r.current&&"changedTouches"in u&&(b||C)&&(r.current=w),!w)return!0;var W=r.current||w;return rn(W,m,u,W==="h"?b:C,!0)},[]),v=c.useCallback(function(u){var m=u;if(!(!_.length||_[_.length-1]!==a)){var g="deltaY"in m?we(m):K(m),S=t.current.filter(function(w){return w.name===m.type&&(w.target===m.target||m.target===w.shadowParent)&&on(w.delta,g)})[0];if(S&&S.should){m.cancelable&&m.preventDefault();return}if(!S){var b=(s.current.shards||[]).map(Se).filter(Boolean).filter(function(w){return w.contains(m.target)}),C=b.length>0?i(m,b[0]):!s.current.noIsolation;C&&m.cancelable&&m.preventDefault()}}},[]),l=c.useCallback(function(u,m,g,S){var b={name:u,delta:m,target:g,should:S,shadowParent:un(g)};t.current.push(b),setTimeout(function(){t.current=t.current.filter(function(C){return C!==b})},1)},[]),d=c.useCallback(function(u){n.current=K(u),r.current=void 0},[]),f=c.useCallback(function(u){l(u.type,we(u),u.target,i(u,e.lockRef.current))},[]),h=c.useCallback(function(u){l(u.type,K(u),u.target,i(u,e.lockRef.current))},[]);c.useEffect(function(){return _.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:h}),document.addEventListener("wheel",v,L),document.addEventListener("touchmove",v,L),document.addEventListener("touchstart",d,L),function(){_=_.filter(function(u){return u!==a}),document.removeEventListener("wheel",v,L),document.removeEventListener("touchmove",v,L),document.removeEventListener("touchstart",d,L)}},[]);var p=e.removeScrollBar,P=e.inert;return c.createElement(c.Fragment,null,P?c.createElement(a,{styles:an(o)}):null,p?c.createElement(Zt,{gapMode:e.gapMode}):null)}function un(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const ln=kt(Me,sn);var ke=c.forwardRef(function(e,t){return c.createElement(H,N({},e,{ref:t,sideCar:ln}))});ke.classNames=H.classNames;var dn=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},F=new WeakMap,V=new WeakMap,X={},oe=0,We=function(e){return e&&(e.host||We(e.parentNode))},fn=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=We(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},vn=function(e,t,n,r){var o=fn(t,Array.isArray(e)?e:[e]);X[n]||(X[n]=new WeakMap);var a=X[n],s=[],i=new Set,v=new Set(o),l=function(f){!f||i.has(f)||(i.add(f),l(f.parentNode))};o.forEach(l);var d=function(f){!f||v.has(f)||Array.prototype.forEach.call(f.children,function(h){if(i.has(h))d(h);else try{var p=h.getAttribute(r),P=p!==null&&p!=="false",u=(F.get(h)||0)+1,m=(a.get(h)||0)+1;F.set(h,u),a.set(h,m),s.push(h),u===1&&P&&V.set(h,!0),m===1&&h.setAttribute(n,"true"),P||h.setAttribute(r,"true")}catch(g){console.error("aria-hidden: cannot operate on ",h,g)}})};return d(t),i.clear(),oe++,function(){s.forEach(function(f){var h=F.get(f)-1,p=a.get(f)-1;F.set(f,h),a.set(f,p),h||(V.has(f)||f.removeAttribute(r),V.delete(f)),p||f.removeAttribute(n)}),oe--,oe||(F=new WeakMap,F=new WeakMap,V=new WeakMap,X={})}},mn=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=dn(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),vn(r,o,n,"aria-hidden")):function(){return null}},se="Dialog",[je,Dn]=rt(se),[hn,R]=je(se),Be=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:s=!0}=e,i=c.useRef(null),v=c.useRef(null),[l=!1,d]=at({prop:r,defaultProp:o,onChange:a});return y.jsx(hn,{scope:t,triggerRef:i,contentRef:v,contentId:q(),titleId:q(),descriptionId:q(),open:l,onOpenChange:d,onOpenToggle:c.useCallback(()=>d(f=>!f),[d]),modal:s,children:n})};Be.displayName=se;var Ue="DialogTrigger",Ke=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=R(Ue,n),a=I(t,o.triggerRef);return y.jsx(A.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":de(o.open),...r,ref:a,onClick:x(e.onClick,o.onOpenToggle)})});Ke.displayName=Ue;var ue="DialogPortal",[pn,Ve]=je(ue,{forceMount:void 0}),Xe=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=R(ue,t);return y.jsx(pn,{scope:t,forceMount:n,children:c.Children.map(r,s=>y.jsx($,{present:n||a.open,children:y.jsx(Ae,{asChild:!0,container:o,children:s})}))})};Xe.displayName=ue;var z="DialogOverlay",Ge=c.forwardRef((e,t)=>{const n=Ve(z,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=R(z,e.__scopeDialog);return a.modal?y.jsx($,{present:r||a.open,children:y.jsx(gn,{...o,ref:t})}):null});Ge.displayName=z;var gn=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=R(z,n);return y.jsx(ke,{as:nt,allowPinchZoom:!0,shards:[o.contentRef],children:y.jsx(A.div,{"data-state":de(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),M="DialogContent",Ye=c.forwardRef((e,t)=>{const n=Ve(M,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=R(M,e.__scopeDialog);return y.jsx($,{present:r||a.open,children:a.modal?y.jsx(yn,{...o,ref:t}):y.jsx(En,{...o,ref:t})})});Ye.displayName=M;var yn=c.forwardRef((e,t)=>{const n=R(M,e.__scopeDialog),r=c.useRef(null),o=I(t,n.contentRef,r);return c.useEffect(()=>{const a=r.current;if(a)return mn(a)},[]),y.jsx(ze,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:x(e.onCloseAutoFocus,a=>{var s;a.preventDefault(),(s=n.triggerRef.current)==null||s.focus()}),onPointerDownOutside:x(e.onPointerDownOutside,a=>{const s=a.detail.originalEvent,i=s.button===0&&s.ctrlKey===!0;(s.button===2||i)&&a.preventDefault()}),onFocusOutside:x(e.onFocusOutside,a=>a.preventDefault())})}),En=c.forwardRef((e,t)=>{const n=R(M,e.__scopeDialog),r=c.useRef(!1),o=c.useRef(!1);return y.jsx(ze,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var s,i;(s=e.onCloseAutoFocus)==null||s.call(e,a),a.defaultPrevented||(r.current||(i=n.triggerRef.current)==null||i.focus(),a.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:a=>{var v,l;(v=e.onInteractOutside)==null||v.call(e,a),a.defaultPrevented||(r.current=!0,a.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const s=a.target;((l=n.triggerRef.current)==null?void 0:l.contains(s))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&o.current&&a.preventDefault()}})}),ze=c.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...s}=e,i=R(M,n),v=c.useRef(null),l=I(t,v);return Dt(),y.jsxs(y.Fragment,{children:[y.jsx(De,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:y.jsx(Re,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":de(i.open),...s,ref:l,onDismiss:()=>i.onOpenChange(!1)})}),y.jsxs(y.Fragment,{children:[y.jsx(bn,{titleId:i.titleId}),y.jsx(wn,{contentRef:v,descriptionId:i.descriptionId})]})]})}),le="DialogTitle",$e=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=R(le,n);return y.jsx(A.h2,{id:o.titleId,...r,ref:t})});$e.displayName=le;var He="DialogDescription",Ze=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=R(He,n);return y.jsx(A.p,{id:o.descriptionId,...r,ref:t})});Ze.displayName=He;var qe="DialogClose",Qe=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=R(qe,n);return y.jsx(A.button,{type:"button",...r,ref:t,onClick:x(e.onClick,()=>o.onOpenChange(!1))})});Qe.displayName=qe;function de(e){return e?"open":"closed"}var Je="DialogTitleWarning",[On,et]=ot(Je,{contentName:M,titleName:le,docsSlug:"dialog"}),bn=({titleId:e})=>{const t=et(Je),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return c.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},Cn="DialogDescriptionWarning",wn=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${et(Cn).contentName}}.`;return c.useEffect(()=>{var a;const o=(a=e.current)==null?void 0:a.getAttribute("aria-describedby");t&&o&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},An=Be,Tn=Ke,xn=Xe,Mn=Ge,In=Ye,Ln=$e,_n=Ze,Fn=Qe;/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=it("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);export{In as C,Qe as D,Mn as O,xn as P,An as R,Tn as T,On as W,kn as X,Fn as a,Ln as b,_n as c,Dn as d,x as e,st as u};
