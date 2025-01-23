import{R as r,r as F,j as a,t as ee,L as Mt}from"./index-TnTDpqy4.js";import{l as kt}from"./react-B8-VDvk0.js";import{c as Lt,d as It,e as Bt,f as Ht}from"./index-D7mV-95d.js";import{B as pe,e as _t,f as Ft,g as Ut}from"./index-ye2DFzoX.js";import{O as zt,C as Wt,T as Yt,a as Vt,b as qt,c as Xt,R as Kt,P as Gt}from"./x-CwLCEG6Y.js";import{c as le}from"./utils-CRrKglZt.js";import{T as Jt,a as Qt,b as Ge,c as Je}from"./tabs-drsRNf5L.js";import{I as be}from"./input-IbiUdbIM.js";import{L as ie}from"./label-DBLE-kze.js";import{T as Qe}from"./textarea-CZIzAeAe.js";import{s as Zt,t as en}from"./mutation-DY6GVtB-.js";function tn(e){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",n.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}const rt=r.createContext({drawerRef:{current:null},overlayRef:{current:null},onPress:()=>{},onRelease:()=>{},onDrag:()=>{},onNestedDrag:()=>{},onNestedOpenChange:()=>{},onNestedRelease:()=>{},openProp:void 0,dismissible:!1,isOpen:!1,isDragging:!1,keyboardIsOpen:{current:!1},snapPointsOffset:null,snapPoints:null,handleOnly:!1,modal:!1,shouldFade:!1,activeSnapPoint:null,onOpenChange:()=>{},setActiveSnapPoint:()=>{},closeDrawer:()=>{},direction:"bottom",shouldAnimate:{current:!0},shouldScaleBackground:!1,setBackgroundColorOnScale:!0,noBodyStyles:!1,container:null,autoFocus:!1}),ue=()=>{const e=r.useContext(rt);if(!e)throw new Error("useDrawerContext must be used within a Drawer.Root");return e};tn(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);function nn(){const e=navigator.userAgent;return typeof window<"u"&&(/Firefox/.test(e)&&/Mobile/.test(e)||/FxiOS/.test(e))}function an(){return He(/^Mac/)}function rn(){return He(/^iPhone/)}function Ze(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}function on(){return He(/^iPad/)||an()&&navigator.maxTouchPoints>1}function ot(){return rn()||on()}function He(e){return typeof window<"u"&&window.navigator!=null?e.test(window.navigator.platform):void 0}const sn=24,ln=typeof window<"u"?F.useLayoutEffect:F.useEffect;function et(...e){return(...n)=>{for(let t of e)typeof t=="function"&&t(...n)}}const Ce=typeof document<"u"&&window.visualViewport;function tt(e){let n=window.getComputedStyle(e);return/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY)}function st(e){for(tt(e)&&(e=e.parentElement);e&&!tt(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}const un=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let Se=0,Oe;function cn(e={}){let{isDisabled:n}=e;ln(()=>{if(!n)return Se++,Se===1&&ot()&&(Oe=dn()),()=>{Se--,Se===0&&(Oe==null||Oe())}},[n])}function dn(){let e,n=0,t=d=>{e=st(d.target),!(e===document.documentElement&&e===document.body)&&(n=d.changedTouches[0].pageY)},o=d=>{if(!e||e===document.documentElement||e===document.body){d.preventDefault();return}let f=d.changedTouches[0].pageY,P=e.scrollTop,M=e.scrollHeight-e.clientHeight;M!==0&&((P<=0&&f>n||P>=M&&f<n)&&d.preventDefault(),n=f)},i=d=>{let f=d.target;Pe(f)&&f!==document.activeElement&&(d.preventDefault(),f.style.transform="translateY(-2000px)",f.focus(),requestAnimationFrame(()=>{f.style.transform=""}))},s=d=>{let f=d.target;Pe(f)&&(f.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{f.style.transform="",Ce&&(Ce.height<window.innerHeight?requestAnimationFrame(()=>{nt(f)}):Ce.addEventListener("resize",()=>nt(f),{once:!0}))}))},w=()=>{window.scrollTo(0,0)},c=window.pageXOffset,x=window.pageYOffset,N=et(fn(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`));window.scrollTo(0,0);let v=et(ge(document,"touchstart",t,{passive:!1,capture:!0}),ge(document,"touchmove",o,{passive:!1,capture:!0}),ge(document,"touchend",i,{passive:!1,capture:!0}),ge(document,"focus",s,!0),ge(window,"scroll",w));return()=>{N(),v(),window.scrollTo(c,x)}}function fn(e,n,t){let o=e.style[n];return e.style[n]=t,()=>{e.style[n]=o}}function ge(e,n,t,o){return e.addEventListener(n,t,o),()=>{e.removeEventListener(n,t,o)}}function nt(e){let n=document.scrollingElement||document.documentElement;for(;e&&e!==n;){let t=st(e);if(t!==document.documentElement&&t!==document.body&&t!==e){let o=t.getBoundingClientRect().top,i=e.getBoundingClientRect().top,s=e.getBoundingClientRect().bottom;const w=t.getBoundingClientRect().bottom+sn;s>w&&(t.scrollTop+=i-o)}e=t.parentElement}}function Pe(e){return e instanceof HTMLInputElement&&!un.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}function mn(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function hn(...e){return n=>e.forEach(t=>mn(t,n))}function it(...e){return F.useCallback(hn(...e),e)}const lt=new WeakMap;function $(e,n,t=!1){if(!e||!(e instanceof HTMLElement))return;let o={};Object.entries(n).forEach(([i,s])=>{if(i.startsWith("--")){e.style.setProperty(i,s);return}o[i]=e.style[i],e.style[i]=s}),!t&&lt.set(e,o)}function pn(e,n){if(!e||!(e instanceof HTMLElement))return;let t=lt.get(e);t&&(e.style[n]=t[n])}const O=e=>{switch(e){case"top":case"bottom":return!0;case"left":case"right":return!1;default:return e}};function Re(e,n){if(!e)return null;const t=window.getComputedStyle(e),o=t.transform||t.webkitTransform||t.mozTransform;let i=o.match(/^matrix3d\((.+)\)$/);return i?parseFloat(i[1].split(", ")[O(n)?13:12]):(i=o.match(/^matrix\((.+)\)$/),i?parseFloat(i[1].split(", ")[O(n)?5:4]):null)}function gn(e){return 8*(Math.log(e+1)-2)}function $e(e,n){if(!e)return()=>{};const t=e.style.cssText;return Object.assign(e.style,n),()=>{e.style.cssText=t}}function wn(...e){return(...n)=>{for(const t of e)typeof t=="function"&&t(...n)}}const j={DURATION:.5,EASE:[.32,.72,0,1]},ut=.4,vn=.25,xn=100,ct=8,ae=16,Me=26,Ae="vaul-dragging";function dt(e){const n=r.useRef(e);return r.useEffect(()=>{n.current=e}),r.useMemo(()=>(...t)=>n.current==null?void 0:n.current.call(n,...t),[])}function yn({defaultProp:e,onChange:n}){const t=r.useState(e),[o]=t,i=r.useRef(o),s=dt(n);return r.useEffect(()=>{i.current!==o&&(s(o),i.current=o)},[o,i,s]),t}function ft({prop:e,defaultProp:n,onChange:t=()=>{}}){const[o,i]=yn({defaultProp:n,onChange:t}),s=e!==void 0,w=s?e:o,c=dt(t),x=r.useCallback(N=>{if(s){const d=typeof N=="function"?N(e):N;d!==e&&c(d)}else i(N)},[s,e,i,c]);return[w,x]}function bn({activeSnapPointProp:e,setActiveSnapPointProp:n,snapPoints:t,drawerRef:o,overlayRef:i,fadeFromIndex:s,onSnapPointChange:w,direction:c="bottom",container:x,snapToSequentialPoint:N}){const[v,d]=ft({prop:e,defaultProp:t==null?void 0:t[0],onChange:n}),[f,P]=r.useState(typeof window<"u"?{innerWidth:window.innerWidth,innerHeight:window.innerHeight}:void 0);r.useEffect(()=>{function m(){P({innerWidth:window.innerWidth,innerHeight:window.innerHeight})}return window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]);const M=r.useMemo(()=>v===(t==null?void 0:t[t.length-1])||null,[t,v]),E=r.useMemo(()=>{var m;return(m=t==null?void 0:t.findIndex(S=>S===v))!=null?m:null},[t,v]),I=t&&t.length>0&&(s||s===0)&&!Number.isNaN(s)&&t[s]===v||!t,g=r.useMemo(()=>{const m=x?{width:x.getBoundingClientRect().width,height:x.getBoundingClientRect().height}:typeof window<"u"?{width:window.innerWidth,height:window.innerHeight}:{width:0,height:0};var S;return(S=t==null?void 0:t.map(b=>{const B=typeof b=="string";let k=0;if(B&&(k=parseInt(b,10)),O(c)){const u=B?k:f?b*m.height:0;return f?c==="bottom"?m.height-u:-m.height+u:u}const W=B?k:f?b*m.width:0;return f?c==="right"?m.width-W:-m.width+W:W}))!=null?S:[]},[t,f,x]),T=r.useMemo(()=>E!==null?g==null?void 0:g[E]:null,[g,E]),A=r.useCallback(m=>{var S;const b=(S=g==null?void 0:g.findIndex(B=>B===m))!=null?S:null;w(b),$(o.current,{transition:`transform ${j.DURATION}s cubic-bezier(${j.EASE.join(",")})`,transform:O(c)?`translate3d(0, ${m}px, 0)`:`translate3d(${m}px, 0, 0)`}),g&&b!==g.length-1&&s!==void 0&&b!==s&&b<s?$(i.current,{transition:`opacity ${j.DURATION}s cubic-bezier(${j.EASE.join(",")})`,opacity:"0"}):$(i.current,{transition:`opacity ${j.DURATION}s cubic-bezier(${j.EASE.join(",")})`,opacity:"1"}),d(t==null?void 0:t[Math.max(b,0)])},[o.current,t,g,s,i,d]);r.useEffect(()=>{if(v||e){var m;const S=(m=t==null?void 0:t.findIndex(b=>b===e||b===v))!=null?m:-1;g&&S!==-1&&typeof g[S]=="number"&&A(g[S])}},[v,e,t,g,A]);function h({draggedDistance:m,closeDrawer:S,velocity:b,dismissible:B}){if(s===void 0)return;const k=c==="bottom"||c==="right"?(T??0)-m:(T??0)+m,W=E===s-1,u=E===0,z=m>0;if(W&&$(i.current,{transition:`opacity ${j.DURATION}s cubic-bezier(${j.EASE.join(",")})`}),!N&&b>2&&!z){B?S():A(g[0]);return}if(!N&&b>2&&z&&g&&t){A(g[t.length-1]);return}const H=g==null?void 0:g.reduce((L,G)=>typeof L!="number"||typeof G!="number"?L:Math.abs(G-k)<Math.abs(L-k)?G:L),Y=O(c)?window.innerHeight:window.innerWidth;if(b>ut&&Math.abs(m)<Y*.4){const L=z?1:-1;if(L>0&&M&&t){A(g[t.length-1]);return}if(u&&L<0&&B&&S(),E===null)return;A(g[E+L]);return}A(H)}function X({draggedDistance:m}){if(T===null)return;const S=c==="bottom"||c==="right"?T-m:T+m;(c==="bottom"||c==="right")&&S<g[g.length-1]||(c==="top"||c==="left")&&S>g[g.length-1]||$(o.current,{transform:O(c)?`translate3d(0, ${S}px, 0)`:`translate3d(${S}px, 0, 0)`})}function te(m,S){if(!t||typeof E!="number"||!g||s===void 0)return null;const b=E===s-1;if(E>=s&&S)return 0;if(b&&!S)return 1;if(!I&&!b)return null;const k=b?E+1:E-1,W=b?g[k]-g[k-1]:g[k+1]-g[k],u=m/Math.abs(W);return b?1-u:u}return{isLastSnapPoint:M,activeSnapPoint:v,shouldFade:I,getPercentageDragged:te,setActiveSnapPoint:d,activeSnapPointIndex:E,onRelease:h,onDrag:X,snapPointsOffset:g}}const Sn=()=>()=>{};function Rn(){const{direction:e,isOpen:n,shouldScaleBackground:t,setBackgroundColorOnScale:o,noBodyStyles:i}=ue(),s=r.useRef(null),w=F.useMemo(()=>document.body.style.backgroundColor,[]);function c(){return(window.innerWidth-Me)/window.innerWidth}r.useEffect(()=>{if(n&&t){s.current&&clearTimeout(s.current);const x=document.querySelector("[data-vaul-drawer-wrapper]")||document.querySelector("[vaul-drawer-wrapper]");if(!x)return;wn(o&&!i?$e(document.body,{background:"black"}):Sn,$e(x,{transformOrigin:O(e)?"top":"left",transitionProperty:"transform, border-radius",transitionDuration:`${j.DURATION}s`,transitionTimingFunction:`cubic-bezier(${j.EASE.join(",")})`}));const N=$e(x,{borderRadius:`${ct}px`,overflow:"hidden",...O(e)?{transform:`scale(${c()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`}:{transform:`scale(${c()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`}});return()=>{N(),s.current=window.setTimeout(()=>{w?document.body.style.background=w:document.body.style.removeProperty("background")},j.DURATION*1e3)}}},[n,t,w])}let we=null;function Tn({isOpen:e,modal:n,nested:t,hasBeenOpened:o,preventScrollRestoration:i,noBodyStyles:s}){const[w,c]=r.useState(()=>typeof window<"u"?window.location.href:""),x=r.useRef(0),N=r.useCallback(()=>{if(Ze()&&we===null&&e&&!s){we={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left,height:document.body.style.height,right:"unset"};const{scrollX:d,innerHeight:f}=window;document.body.style.setProperty("position","fixed","important"),Object.assign(document.body.style,{top:`${-x.current}px`,left:`${-d}px`,right:"0px",height:"auto"}),window.setTimeout(()=>window.requestAnimationFrame(()=>{const P=f-window.innerHeight;P&&x.current>=f&&(document.body.style.top=`${-(x.current+P)}px`)}),300)}},[e]),v=r.useCallback(()=>{if(Ze()&&we!==null&&!s){const d=-parseInt(document.body.style.top,10),f=-parseInt(document.body.style.left,10);Object.assign(document.body.style,we),window.requestAnimationFrame(()=>{if(i&&w!==window.location.href){c(window.location.href);return}window.scrollTo(f,d)}),we=null}},[w]);return r.useEffect(()=>{function d(){x.current=window.scrollY}return d(),window.addEventListener("scroll",d),()=>{window.removeEventListener("scroll",d)}},[]),r.useEffect(()=>{if(n)return()=>{typeof document>"u"||document.querySelector("[data-vaul-drawer]")||v()}},[n,v]),r.useEffect(()=>{t||!o||(e?(!window.matchMedia("(display-mode: standalone)").matches&&N(),n||window.setTimeout(()=>{v()},500)):v())},[e,o,w,n,t,N,v]),{restorePositionSetting:v}}function mt({open:e,onOpenChange:n,children:t,onDrag:o,onRelease:i,snapPoints:s,shouldScaleBackground:w=!1,setBackgroundColorOnScale:c=!0,closeThreshold:x=vn,scrollLockTimeout:N=xn,dismissible:v=!0,handleOnly:d=!1,fadeFromIndex:f=s&&s.length-1,activeSnapPoint:P,setActiveSnapPoint:M,fixed:E,modal:I=!0,onClose:g,nested:T,noBodyStyles:A=!1,direction:h="bottom",defaultOpen:X=!1,disablePreventScroll:te=!0,snapToSequentialPoint:m=!1,preventScrollRestoration:S=!1,repositionInputs:b=!0,onAnimationEnd:B,container:k,autoFocus:W=!1}){var u,z;const[H=!1,Y]=ft({defaultProp:X,prop:e,onChange:l=>{n==null||n(l),!l&&!T&&Dt(),setTimeout(()=>{B==null||B(l)},j.DURATION*1e3),l&&!I&&typeof window<"u"&&window.requestAnimationFrame(()=>{document.body.style.pointerEvents="auto"}),l||(document.body.style.pointerEvents="auto")}}),[L,G]=r.useState(!1),[J,ce]=r.useState(!1),[yt,_e]=r.useState(!1),re=r.useRef(null),ve=r.useRef(null),Te=r.useRef(null),Ne=r.useRef(null),de=r.useRef(null),fe=r.useRef(!1),De=r.useRef(null),Ee=r.useRef(0),oe=r.useRef(!1),Fe=r.useRef(!X),Ue=r.useRef(0),p=r.useRef(null),ze=r.useRef(((u=p.current)==null?void 0:u.getBoundingClientRect().height)||0),We=r.useRef(((z=p.current)==null?void 0:z.getBoundingClientRect().width)||0),je=r.useRef(0),bt=r.useCallback(l=>{s&&l===me.length-1&&(ve.current=new Date)},[]),{activeSnapPoint:St,activeSnapPointIndex:se,setActiveSnapPoint:Ye,onRelease:Rt,snapPointsOffset:me,onDrag:Tt,shouldFade:Ve,getPercentageDragged:Nt}=bn({snapPoints:s,activeSnapPointProp:P,setActiveSnapPointProp:M,drawerRef:p,fadeFromIndex:f,overlayRef:re,onSnapPointChange:bt,direction:h,container:k,snapToSequentialPoint:m});cn({isDisabled:!H||J||!I||yt||!L||!b||!te});const{restorePositionSetting:Dt}=Tn({isOpen:H,modal:I,nested:T??!1,hasBeenOpened:L,preventScrollRestoration:S,noBodyStyles:A});function xe(){return(window.innerWidth-Me)/window.innerWidth}function Et(l){var R,D;!v&&!s||p.current&&!p.current.contains(l.target)||(ze.current=((R=p.current)==null?void 0:R.getBoundingClientRect().height)||0,We.current=((D=p.current)==null?void 0:D.getBoundingClientRect().width)||0,ce(!0),Te.current=new Date,ot()&&window.addEventListener("touchend",()=>fe.current=!1,{once:!0}),l.target.setPointerCapture(l.pointerId),Ee.current=O(h)?l.pageY:l.pageX)}function qe(l,R){var D;let y=l;const C=(D=window.getSelection())==null?void 0:D.toString(),U=p.current?Re(p.current,h):null,_=new Date;if(y.tagName==="SELECT"||y.hasAttribute("data-vaul-no-drag")||y.closest("[data-vaul-no-drag]"))return!1;if(h==="right"||h==="left")return!0;if(ve.current&&_.getTime()-ve.current.getTime()<500)return!1;if(U!==null&&(h==="bottom"?U>0:U<0))return!0;if(C&&C.length>0)return!1;if(de.current&&_.getTime()-de.current.getTime()<N&&U===0||R)return de.current=_,!1;for(;y;){if(y.scrollHeight>y.clientHeight){if(y.scrollTop!==0)return de.current=new Date,!1;if(y.getAttribute("role")==="dialog")return!0}y=y.parentNode}return!0}function jt(l){if(p.current&&J){const R=h==="bottom"||h==="right"?1:-1,D=(Ee.current-(O(h)?l.pageY:l.pageX))*R,y=D>0,C=s&&!v&&!y;if(C&&se===0)return;const U=Math.abs(D),_=document.querySelector("[data-vaul-drawer-wrapper]"),Q=h==="bottom"||h==="top"?ze.current:We.current;let V=U/Q;const ne=Nt(U,y);if(ne!==null&&(V=ne),C&&V>=1||!fe.current&&!qe(l.target,y))return;if(p.current.classList.add(Ae),fe.current=!0,$(p.current,{transition:"none"}),$(re.current,{transition:"none"}),s&&Tt({draggedDistance:D}),y&&!s){const K=gn(D),ye=Math.min(K*-1,0)*R;$(p.current,{transform:O(h)?`translate3d(0, ${ye}px, 0)`:`translate3d(${ye}px, 0, 0)`});return}const Z=1-V;if((Ve||f&&se===f-1)&&(o==null||o(l,V),$(re.current,{opacity:`${Z}`,transition:"none"},!0)),_&&re.current&&w){const K=Math.min(xe()+V*(1-xe()),1),ye=8-V*8,Ke=Math.max(0,14-V*14);$(_,{borderRadius:`${ye}px`,transform:O(h)?`scale(${K}) translate3d(0, ${Ke}px, 0)`:`scale(${K}) translate3d(${Ke}px, 0, 0)`,transition:"none"},!0)}if(!s){const K=U*R;$(p.current,{transform:O(h)?`translate3d(0, ${K}px, 0)`:`translate3d(${K}px, 0, 0)`})}}}r.useEffect(()=>{window.requestAnimationFrame(()=>{Fe.current=!0})},[]),r.useEffect(()=>{var l;function R(){if(!p.current||!b)return;const D=document.activeElement;if(Pe(D)||oe.current){var y;const C=((y=window.visualViewport)==null?void 0:y.height)||0,U=window.innerHeight;let _=U-C;const Q=p.current.getBoundingClientRect().height||0,V=Q>U*.8;je.current||(je.current=Q);const ne=p.current.getBoundingClientRect().top;if(Math.abs(Ue.current-_)>60&&(oe.current=!oe.current),s&&s.length>0&&me&&se){const Z=me[se]||0;_+=Z}if(Ue.current=_,Q>C||oe.current){const Z=p.current.getBoundingClientRect().height;let K=Z;Z>C&&(K=C-(V?ne:Me)),E?p.current.style.height=`${Z-Math.max(_,0)}px`:p.current.style.height=`${Math.max(K,C-ne)}px`}else nn()||(p.current.style.height=`${je.current}px`);s&&s.length>0&&!oe.current?p.current.style.bottom="0px":p.current.style.bottom=`${Math.max(_,0)}px`}}return(l=window.visualViewport)==null||l.addEventListener("resize",R),()=>{var D;return(D=window.visualViewport)==null?void 0:D.removeEventListener("resize",R)}},[se,s,me]);function he(l){Ct(),g==null||g(),l||Y(!1),setTimeout(()=>{s&&Ye(s[0])},j.DURATION*1e3)}function Xe(){if(!p.current)return;const l=document.querySelector("[data-vaul-drawer-wrapper]"),R=Re(p.current,h);$(p.current,{transform:"translate3d(0, 0, 0)",transition:`transform ${j.DURATION}s cubic-bezier(${j.EASE.join(",")})`}),$(re.current,{transition:`opacity ${j.DURATION}s cubic-bezier(${j.EASE.join(",")})`,opacity:"1"}),w&&R&&R>0&&H&&$(l,{borderRadius:`${ct}px`,overflow:"hidden",...O(h)?{transform:`scale(${xe()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top"}:{transform:`scale(${xe()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,transformOrigin:"left"},transitionProperty:"transform, border-radius",transitionDuration:`${j.DURATION}s`,transitionTimingFunction:`cubic-bezier(${j.EASE.join(",")})`},!0)}function Ct(){!J||!p.current||(p.current.classList.remove(Ae),fe.current=!1,ce(!1),Ne.current=new Date)}function Ot(l){if(!J||!p.current)return;p.current.classList.remove(Ae),fe.current=!1,ce(!1),Ne.current=new Date;const R=Re(p.current,h);if(!l||!qe(l.target,!1)||!R||Number.isNaN(R)||Te.current===null)return;const D=Ne.current.getTime()-Te.current.getTime(),y=Ee.current-(O(h)?l.pageY:l.pageX),C=Math.abs(y)/D;if(C>.05&&(_e(!0),setTimeout(()=>{_e(!1)},200)),s){Rt({draggedDistance:y*(h==="bottom"||h==="right"?1:-1),closeDrawer:he,velocity:C,dismissible:v}),i==null||i(l,!0);return}if(h==="bottom"||h==="right"?y>0:y<0){Xe(),i==null||i(l,!0);return}if(C>ut){he(),i==null||i(l,!1);return}var U;const _=Math.min((U=p.current.getBoundingClientRect().height)!=null?U:0,window.innerHeight);var Q;const V=Math.min((Q=p.current.getBoundingClientRect().width)!=null?Q:0,window.innerWidth),ne=h==="left"||h==="right";if(Math.abs(R)>=(ne?V:_)*x){he(),i==null||i(l,!1);return}i==null||i(l,!0),Xe()}r.useEffect(()=>(H&&($(document.documentElement,{scrollBehavior:"auto"}),ve.current=new Date),()=>{pn(document.documentElement,"scrollBehavior")}),[H]);function $t(l){const R=l?(window.innerWidth-ae)/window.innerWidth:1,D=l?-ae:0;De.current&&window.clearTimeout(De.current),$(p.current,{transition:`transform ${j.DURATION}s cubic-bezier(${j.EASE.join(",")})`,transform:O(h)?`scale(${R}) translate3d(0, ${D}px, 0)`:`scale(${R}) translate3d(${D}px, 0, 0)`}),!l&&p.current&&(De.current=setTimeout(()=>{const y=Re(p.current,h);$(p.current,{transition:"none",transform:O(h)?`translate3d(0, ${y}px, 0)`:`translate3d(${y}px, 0, 0)`})},500))}function At(l,R){if(R<0)return;const D=(window.innerWidth-ae)/window.innerWidth,y=D+R*(1-D),C=-ae+R*ae;$(p.current,{transform:O(h)?`scale(${y}) translate3d(0, ${C}px, 0)`:`scale(${y}) translate3d(${C}px, 0, 0)`,transition:"none"})}function Pt(l,R){const D=O(h)?window.innerHeight:window.innerWidth,y=R?(D-ae)/D:1,C=R?-ae:0;R&&$(p.current,{transition:`transform ${j.DURATION}s cubic-bezier(${j.EASE.join(",")})`,transform:O(h)?`scale(${y}) translate3d(0, ${C}px, 0)`:`scale(${y}) translate3d(${C}px, 0, 0)`})}return r.useEffect(()=>{I||window.requestAnimationFrame(()=>{document.body.style.pointerEvents="auto"})},[I]),r.createElement(Kt,{defaultOpen:X,onOpenChange:l=>{!v&&!l||(l?G(!0):he(!0),Y(l))},open:H},r.createElement(rt.Provider,{value:{activeSnapPoint:St,snapPoints:s,setActiveSnapPoint:Ye,drawerRef:p,overlayRef:re,onOpenChange:n,onPress:Et,onRelease:Ot,onDrag:jt,dismissible:v,shouldAnimate:Fe,handleOnly:d,isOpen:H,isDragging:J,shouldFade:Ve,closeDrawer:he,onNestedDrag:At,onNestedOpenChange:$t,onNestedRelease:Pt,keyboardIsOpen:oe,modal:I,snapPointsOffset:me,activeSnapPointIndex:se,direction:h,shouldScaleBackground:w,setBackgroundColorOnScale:c,noBodyStyles:A,container:k,autoFocus:W}},t))}const ht=r.forwardRef(function({...e},n){const{overlayRef:t,snapPoints:o,onRelease:i,shouldFade:s,isOpen:w,modal:c,shouldAnimate:x}=ue(),N=it(n,t),v=o&&o.length>0;if(!c)return null;const d=r.useCallback(f=>i(f),[i]);return r.createElement(zt,{onMouseUp:d,ref:N,"data-vaul-overlay":"","data-vaul-snap-points":w&&v?"true":"false","data-vaul-snap-points-overlay":w&&s?"true":"false","data-vaul-animate":x!=null&&x.current?"true":"false",...e})});ht.displayName="Drawer.Overlay";const pt=r.forwardRef(function({onPointerDownOutside:e,style:n,onOpenAutoFocus:t,...o},i){const{drawerRef:s,onPress:w,onRelease:c,onDrag:x,keyboardIsOpen:N,snapPointsOffset:v,activeSnapPointIndex:d,modal:f,isOpen:P,direction:M,snapPoints:E,container:I,handleOnly:g,shouldAnimate:T,autoFocus:A}=ue(),[h,X]=r.useState(!1),te=it(i,s),m=r.useRef(null),S=r.useRef(null),b=r.useRef(!1),B=E&&E.length>0;Rn();const k=(u,z,H=0)=>{if(b.current)return!0;const Y=Math.abs(u.y),L=Math.abs(u.x),G=L>Y,J=["bottom","right"].includes(z)?1:-1;if(z==="left"||z==="right"){if(!(u.x*J<0)&&L>=0&&L<=H)return G}else if(!(u.y*J<0)&&Y>=0&&Y<=H)return!G;return b.current=!0,!0};r.useEffect(()=>{B&&window.requestAnimationFrame(()=>{X(!0)})},[]);function W(u){m.current=null,b.current=!1,c(u)}return r.createElement(Wt,{"data-vaul-drawer-direction":M,"data-vaul-drawer":"","data-vaul-delayed-snap-points":h?"true":"false","data-vaul-snap-points":P&&B?"true":"false","data-vaul-custom-container":I?"true":"false","data-vaul-animate":T!=null&&T.current?"true":"false",...o,ref:te,style:v&&v.length>0?{"--snap-point-height":`${v[d??0]}px`,...n}:n,onPointerDown:u=>{g||(o.onPointerDown==null||o.onPointerDown.call(o,u),m.current={x:u.pageX,y:u.pageY},w(u))},onOpenAutoFocus:u=>{t==null||t(u),A||u.preventDefault()},onPointerDownOutside:u=>{if(e==null||e(u),!f||u.defaultPrevented){u.preventDefault();return}N.current&&(N.current=!1)},onFocusOutside:u=>{if(!f){u.preventDefault();return}},onPointerMove:u=>{if(S.current=u,g||(o.onPointerMove==null||o.onPointerMove.call(o,u),!m.current))return;const z=u.pageY-m.current.y,H=u.pageX-m.current.x,Y=u.pointerType==="touch"?10:2;k({x:H,y:z},M,Y)?x(u):(Math.abs(H)>Y||Math.abs(z)>Y)&&(m.current=null)},onPointerUp:u=>{o.onPointerUp==null||o.onPointerUp.call(o,u),m.current=null,b.current=!1,c(u)},onPointerOut:u=>{o.onPointerOut==null||o.onPointerOut.call(o,u),W(S.current)},onContextMenu:u=>{o.onContextMenu==null||o.onContextMenu.call(o,u),S.current&&W(S.current)}})});pt.displayName="Drawer.Content";const Nn=250,Dn=120,gt=r.forwardRef(function({preventCycle:e=!1,children:n,...t},o){const{closeDrawer:i,isDragging:s,snapPoints:w,activeSnapPoint:c,setActiveSnapPoint:x,dismissible:N,handleOnly:v,isOpen:d,onPress:f,onDrag:P}=ue(),M=r.useRef(null),E=r.useRef(!1);function I(){if(E.current){A();return}window.setTimeout(()=>{g()},Dn)}function g(){if(s||e||E.current){A();return}if(A(),!w||w.length===0){N||i();return}if(c===w[w.length-1]&&N){i();return}const X=w.findIndex(m=>m===c);if(X===-1)return;const te=w[X+1];x(te)}function T(){M.current=window.setTimeout(()=>{E.current=!0},Nn)}function A(){M.current&&window.clearTimeout(M.current),E.current=!1}return r.createElement("div",{onClick:I,onPointerCancel:A,onPointerDown:h=>{v&&f(h),T()},onPointerMove:h=>{v&&P(h)},ref:o,"data-vaul-drawer-visible":d?"true":"false","data-vaul-handle":"","aria-hidden":"true",...t},r.createElement("span",{"data-vaul-handle-hitarea":"","aria-hidden":"true"},n))});gt.displayName="Drawer.Handle";function En({onDrag:e,onOpenChange:n,open:t,...o}){const{onNestedDrag:i,onNestedOpenChange:s,onNestedRelease:w}=ue();if(!i)throw new Error("Drawer.NestedRoot must be placed in another drawer");return r.createElement(mt,{nested:!0,open:t,onClose:()=>{s(!1)},onDrag:(c,x)=>{i(c,x),e==null||e(c,x)},onOpenChange:c=>{c&&s(c),n==null||n(c)},onRelease:w,...o})}function jn(e){const n=ue(),{container:t=n.container,...o}=e;return r.createElement(Gt,{container:t,...o})}const q={Root:mt,NestedRoot:En,Content:pt,Overlay:ht,Trigger:Yt,Portal:jn,Handle:gt,Close:Vt,Title:qt,Description:Xt},wt=({shouldScaleBackground:e=!0,...n})=>a.jsx(q.Root,{shouldScaleBackground:e,...n});wt.displayName="Drawer";const Cn=q.Trigger,On=q.Portal,at=q.Close,vt=F.forwardRef(({className:e,...n},t)=>a.jsx(q.Overlay,{ref:t,className:le("fixed inset-0 z-50 bg-black/80",e),...n}));vt.displayName=q.Overlay.displayName;const xt=F.forwardRef(({className:e,children:n,...t},o)=>a.jsxs(On,{children:[a.jsx(vt,{}),a.jsxs(q.Content,{ref:o,className:le("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950",e),...t,children:[a.jsx("div",{className:"mx-auto mt-4 h-2 w-[100px] rounded-full bg-slate-100 dark:bg-slate-800"}),n]})]}));xt.displayName="DrawerContent";const ke=({className:e,...n})=>a.jsx("div",{className:le("grid gap-1.5 p-4 text-center sm:text-left",e),...n});ke.displayName="DrawerHeader";const Le=({className:e,...n})=>a.jsx("div",{className:le("mt-auto flex flex-col gap-2 p-4",e),...n});Le.displayName="DrawerFooter";const Ie=F.forwardRef(({className:e,...n},t)=>a.jsx(q.Title,{ref:t,className:le("text-lg font-semibold leading-none tracking-tight",e),...n}));Ie.displayName=q.Title.displayName;const Be=F.forwardRef(({className:e,...n},t)=>a.jsx(q.Description,{ref:t,className:le("text-sm text-slate-500 dark:text-slate-400",e),...n}));Be.displayName=q.Description.displayName;const $n=()=>{const[e,n]=F.useState(""),[t,o]=F.useState(""),[i,s]=F.useState(""),[w,c]=F.useState(""),[x,N]=F.useState(""),[v,d]=F.useState(!1),[f,P]=F.useState(""),M=Zt(),E=en(),I=async()=>{if(e===""||t===""||i==="")return ee.warning("Please fill in all fields");ee.loading("Loading...",{id:"loading-contact-us"}),d(!0),await M.mutateAsync({name:t,email:e,message:i}),d(!1),ee.dismiss("loading-contact-us"),ee.success("Your message has been sent successfully."),s(""),o(""),n("")},g=async()=>{if(f===""||w===""||x==="")return ee.warning("Please fill in all fields");ee.loading("Loading...",{id:"loading-add-review"}),d(!0),await E.mutateAsync({name:w,message:x,rank:f}),d(!1),ee.dismiss("loading-add-review"),ee.success("Your message has been sent successfully."),N(""),c(""),P("")};return a.jsxs(wt,{children:[a.jsx(Cn,{asChild:!0,children:a.jsx(pe,{className:"w-full bg-primary p-7 rounded-lg text-white ",variant:"link",children:"Talk to a Representative"})}),a.jsx(xt,{className:"",children:a.jsx("div",{className:"mx-auto w-full md:max-w-md max-w-sm px-7",children:a.jsxs(Jt,{defaultValue:"contact",className:"lg:w-[400px]",children:[a.jsxs(Qt,{className:"grid w-full grid-cols-2 bg-slate-500",children:[a.jsx(Ge,{value:"contact",className:"text-white",children:"Contact us"}),a.jsx(Ge,{value:"review",className:"text-white",children:"Leave a review"})]}),a.jsxs(Je,{value:"contact",children:[a.jsxs(ke,{children:[a.jsx(Ie,{children:"Contact Us"}),a.jsx(Be,{children:"Please fill out the form below to get in touch with us."})]}),a.jsxs("form",{className:"flex flex-col gap-4 mt-4",children:[a.jsxs(ie,{className:"flex flex-col gap-1",children:["Name",a.jsx(be,{type:"text",className:"ring-1 ring-slate-400 py-6",placeholder:"Your Name",value:t,onChange:T=>o(T.target.value)})]}),a.jsxs(ie,{className:"flex flex-col gap-1",children:["Email",a.jsx(be,{type:"email",className:"ring-1 ring-slate-400 py-6",placeholder:"Your Email",value:e,onChange:T=>n(T.target.value)})]}),a.jsxs(ie,{className:"flex flex-col gap-1",children:["Message",a.jsx(Qe,{className:"ring-1 ring-slate-400 py-6 resize-none",placeholder:"Your Message",rows:4,value:i,onChange:T=>s(T.target.value)})]})]}),a.jsxs(Le,{children:[a.jsx(pe,{onClick:()=>I(),disabled:v,children:"Submit"}),a.jsx(at,{asChild:!0,children:a.jsx(pe,{variant:"outline",children:"Cancel"})})]})]}),a.jsxs(Je,{value:"review",children:[a.jsxs(ke,{children:[a.jsx(Ie,{children:"Leave a review"}),a.jsx(Be,{children:"Please fill out the form below to leave a review about the school."})]}),a.jsxs("form",{className:"flex flex-col gap-4 mt-4",children:[a.jsxs(ie,{className:"flex flex-col gap-1",children:["Name",a.jsx(be,{type:"text",className:"ring-1 ring-slate-400 py-6",placeholder:"Your Name",value:w,onChange:T=>c(T.target.value)})]}),a.jsxs(ie,{className:"flex flex-col gap-1",children:["Rank",a.jsx(be,{type:"text",className:"ring-1 ring-slate-400 py-6",placeholder:"Your Rank, eg. Head of BUA, Sokoto",value:f,onChange:T=>P(T.target.value)})]}),a.jsxs(ie,{className:"flex flex-col gap-1",children:["Review",a.jsx(Qe,{className:"ring-1 ring-slate-400 py-6 resize-none",placeholder:"Your Review",rows:4,value:x,onChange:T=>N(T.target.value)})]})]}),a.jsxs(Le,{children:[a.jsx(pe,{onClick:()=>g(),disabled:v,children:"Submit"}),a.jsx(at,{asChild:!0,children:a.jsx(pe,{variant:"outline",children:"Cancel"})})]})]})]})})})]})},zn=({content:e})=>a.jsx("footer",{className:"w-full flex flex-col gap-2",children:a.jsxs("div",{className:"others h-[100%] bg-gray-600  w-full md:px-10 px-2 text-white",children:[a.jsxs("div",{className:"w-full flex flex-col gap-4 md:gap-0 md:flex-row py-8 lg:justify-start lg:items-center",children:[a.jsxs("div",{className:"socials px-5 md:w-[40%] lg:w-[20%] w-full",children:[a.jsx("img",{src:kt,alt:"",className:"mx-auto my-0"}),a.jsx("p",{className:"py-3 text-sm text-center",children:"To be the best."}),a.jsxs("div",{className:"flex md:gap-3 justify-around md:justify-start px-5 sm:px-2  w-full items-center py-3",children:[a.jsx("a",{href:"#",rel:"noopener noreferrer",className:"hover:scale-125 transition-transform border p-2 border-white rounded-full",children:a.jsx(Lt,{})}),a.jsx("a",{href:"#",rel:"noopener noreferrer",className:"hover:scale-125 transition-transform border p-2 border-white rounded-full",children:a.jsx(It,{})}),a.jsx("a",{href:"#",rel:"noopener noreferrer",className:"hover:scale-125 transition-transform border p-2 border-white rounded-full",children:a.jsx(Bt,{})}),a.jsx("a",{href:"#",rel:"noopener noreferrer",className:"hover:scale-125 transition-transform border p-2 border-white rounded-full",children:a.jsx(Ht,{})})]})]}),a.jsxs("div",{className:"flex-1 lg:px-5 flex-col lg:flex-row justify-around px-6 flex pb-2 w-full gap-5",id:"contact",children:[a.jsxs("div",{className:"pages flex flex-col gap-3 text-slate-200 text-xs",children:[a.jsx("h3",{className:"font-bold text-lg",children:"Contact Us"}),a.jsxs("h3",{className:"flex gap-2 text-sm",children:[a.jsx(_t,{className:"text-xl"}),a.jsxs("span",{className:"w-48",children:["Address",a.jsx("address",{className:"mt-2 text-xs",children:"Arkilla layout, behing emir's palace, kalambaina, sokoto"})]})]}),a.jsxs("h3",{className:"flex gap-2 text-sm mt-2",children:[a.jsx(Ft,{className:"text-xl fill-white"}),a.jsxs("span",{className:"w-48",children:["Email",a.jsx("div",{className:"mt-2 text-xs",children:a.jsx("a",{href:"mailto:support@globalkidsacademy.com",children:"support@globalkidsacademy.com"})})]})]}),a.jsxs("h3",{className:"flex gap-2 text-sm mt-2",children:[a.jsx(Ut,{className:"text-xl text-white"}),a.jsxs("span",{className:"w-48",children:["Phone",a.jsx("div",{className:"mt-2 text-xs",children:a.jsx("a",{href:"tel:09078785538",children:"09078785538"})})]})]})]}),a.jsx("div",{className:"pages flex flex-col gap-3 text-slate-200 text-xs justify-end",children:a.jsx($n,{})}),e&&e.length>0?a.jsxs("div",{className:"pages flex flex-col gap-3 text-slate-200 text-xs",children:[a.jsx("h3",{className:"font-bold text-lg",children:"News"}),e.map(n=>a.jsx(a.Fragment,{children:a.jsx("a",{href:`/news/${n.id}`,className:"capitalize hover:underline",children:n.title.toLowerCase()})},n.id))]}):""]})]}),a.jsx("hr",{className:"border-slate-500 lg:w-[80%] my-0 mx-auto"}),a.jsxs("p",{className:"text-slate-300 py-3 text-xs flex justify-center gap-5 lg:px-20",children:[a.jsxs("span",{children:["Copyright © ",new Date().getFullYear()]}),a.jsx(Mt,{to:"/privacy-policy",className:"hover:underline",children:"Privacy Policy"})]})]})});export{zn as F};
