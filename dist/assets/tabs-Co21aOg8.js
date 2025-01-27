import{R as E,j as i,r as s}from"./index-BBSTRate.js";import{u as M,S as K,P as S,c as x,a as ve}from"./index-C2YV11Xc.js";import{a as j,u as V,h as pe,b as $}from"./createLucideIcon-CI2fB3hB.js";import{c as D}from"./utils-rgcHhr6V.js";function be(e){const t=e+"CollectionProvider",[n,o]=j(t),[f,m]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=C=>{const{scope:r,children:g}=C,R=E.useRef(null),u=E.useRef(new Map).current;return i.jsx(f,{scope:r,itemMap:u,collectionRef:R,children:g})};a.displayName=t;const p=e+"CollectionSlot",b=E.forwardRef((C,r)=>{const{scope:g,children:R}=C,u=m(p,g),v=M(r,u.collectionRef);return i.jsx(K,{ref:v,children:R})});b.displayName=p;const c=e+"CollectionItemSlot",d="data-radix-collection-item",l=E.forwardRef((C,r)=>{const{scope:g,children:R,...u}=C,v=E.useRef(null),F=M(r,v),y=m(c,g);return E.useEffect(()=>(y.itemMap.set(v,{ref:v,...u}),()=>void y.itemMap.delete(v))),i.jsx(K,{[d]:"",ref:F,children:R})});l.displayName=c;function I(C){const r=m(e+"CollectionConsumer",C);return E.useCallback(()=>{const R=r.collectionRef.current;if(!R)return[];const u=Array.from(R.querySelectorAll(`[${d}]`));return Array.from(r.itemMap.values()).sort((y,h)=>u.indexOf(y.ref.current)-u.indexOf(h.ref.current))},[r.collectionRef,r.itemMap])}return[{Provider:a,Slot:b,ItemSlot:l},I,o]}var ge=s.createContext(void 0);function U(e){const t=s.useContext(ge);return e||t||"ltr"}var _="rovingFocusGroup.onEntryFocus",Ie={bubbles:!1,cancelable:!0},A="RovingFocusGroup",[P,B,Te]=be(A),[Ce,Y]=j(A,[Te]),[Re,xe]=Ce(A),q=s.forwardRef((e,t)=>i.jsx(P.Provider,{scope:e.__scopeRovingFocusGroup,children:i.jsx(P.Slot,{scope:e.__scopeRovingFocusGroup,children:i.jsx(we,{...e,ref:t})})}));q.displayName=A;var we=s.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:o,loop:f=!1,dir:m,currentTabStopId:a,defaultCurrentTabStopId:p,onCurrentTabStopIdChange:b,onEntryFocus:c,preventScrollOnEntryFocus:d=!1,...l}=e,I=s.useRef(null),C=M(t,I),r=U(m),[g=null,R]=V({prop:a,defaultProp:p,onChange:b}),[u,v]=s.useState(!1),F=pe(c),y=B(n),h=s.useRef(!1),[le,G]=s.useState(0);return s.useEffect(()=>{const T=I.current;if(T)return T.addEventListener(_,F),()=>T.removeEventListener(_,F)},[F]),i.jsx(Re,{scope:n,orientation:o,dir:r,loop:f,currentTabStopId:g,onItemFocus:s.useCallback(T=>R(T),[R]),onItemShiftTab:s.useCallback(()=>v(!0),[]),onFocusableItemAdd:s.useCallback(()=>G(T=>T+1),[]),onFocusableItemRemove:s.useCallback(()=>G(T=>T-1),[]),children:i.jsx(S.div,{tabIndex:u||le===0?-1:0,"data-orientation":o,...l,ref:C,style:{outline:"none",...e.style},onMouseDown:x(e.onMouseDown,()=>{h.current=!0}),onFocus:x(e.onFocus,T=>{const ue=!h.current;if(T.target===T.currentTarget&&ue&&!u){const L=new CustomEvent(_,Ie);if(T.currentTarget.dispatchEvent(L),!L.defaultPrevented){const N=y().filter(w=>w.focusable),de=N.find(w=>w.active),fe=N.find(w=>w.id===g),me=[de,fe,...N].filter(Boolean).map(w=>w.ref.current);J(me,d)}}h.current=!1}),onBlur:x(e.onBlur,()=>v(!1))})})}),z="RovingFocusGroupItem",H=s.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:o=!0,active:f=!1,tabStopId:m,...a}=e,p=$(),b=m||p,c=xe(z,n),d=c.currentTabStopId===b,l=B(n),{onFocusableItemAdd:I,onFocusableItemRemove:C}=c;return s.useEffect(()=>{if(o)return I(),()=>C()},[o,I,C]),i.jsx(P.ItemSlot,{scope:n,id:b,focusable:o,active:f,children:i.jsx(S.span,{tabIndex:d?0:-1,"data-orientation":c.orientation,...a,ref:t,onMouseDown:x(e.onMouseDown,r=>{o?c.onItemFocus(b):r.preventDefault()}),onFocus:x(e.onFocus,()=>c.onItemFocus(b)),onKeyDown:x(e.onKeyDown,r=>{if(r.key==="Tab"&&r.shiftKey){c.onItemShiftTab();return}if(r.target!==r.currentTarget)return;const g=ye(r,c.orientation,c.dir);if(g!==void 0){if(r.metaKey||r.ctrlKey||r.altKey||r.shiftKey)return;r.preventDefault();let u=l().filter(v=>v.focusable).map(v=>v.ref.current);if(g==="last")u.reverse();else if(g==="prev"||g==="next"){g==="prev"&&u.reverse();const v=u.indexOf(r.currentTarget);u=c.loop?Se(u,v+1):u.slice(v+1)}setTimeout(()=>J(u))}})})})});H.displayName=z;var Ee={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Fe(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function ye(e,t,n){const o=Fe(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return Ee[o]}function J(e,t=!1){const n=document.activeElement;for(const o of e)if(o===n||(o.focus({preventScroll:t}),document.activeElement!==n))return}function Se(e,t){return e.map((n,o)=>e[(t+o)%e.length])}var he=q,Ae=H,k="Tabs",[Ne,Ve]=j(k,[Y]),Q=Y(),[_e,O]=Ne(k),W=s.forwardRef((e,t)=>{const{__scopeTabs:n,value:o,onValueChange:f,defaultValue:m,orientation:a="horizontal",dir:p,activationMode:b="automatic",...c}=e,d=U(p),[l,I]=V({prop:o,onChange:f,defaultProp:m});return i.jsx(_e,{scope:n,baseId:$(),value:l,onValueChange:I,orientation:a,dir:d,activationMode:b,children:i.jsx(S.div,{dir:d,"data-orientation":a,...c,ref:t})})});W.displayName=k;var X="TabsList",Z=s.forwardRef((e,t)=>{const{__scopeTabs:n,loop:o=!0,...f}=e,m=O(X,n),a=Q(n);return i.jsx(he,{asChild:!0,...a,orientation:m.orientation,dir:m.dir,loop:o,children:i.jsx(S.div,{role:"tablist","aria-orientation":m.orientation,...f,ref:t})})});Z.displayName=X;var ee="TabsTrigger",te=s.forwardRef((e,t)=>{const{__scopeTabs:n,value:o,disabled:f=!1,...m}=e,a=O(ee,n),p=Q(n),b=re(a.baseId,o),c=se(a.baseId,o),d=o===a.value;return i.jsx(Ae,{asChild:!0,...p,focusable:!f,active:d,children:i.jsx(S.button,{type:"button",role:"tab","aria-selected":d,"aria-controls":c,"data-state":d?"active":"inactive","data-disabled":f?"":void 0,disabled:f,id:b,...m,ref:t,onMouseDown:x(e.onMouseDown,l=>{!f&&l.button===0&&l.ctrlKey===!1?a.onValueChange(o):l.preventDefault()}),onKeyDown:x(e.onKeyDown,l=>{[" ","Enter"].includes(l.key)&&a.onValueChange(o)}),onFocus:x(e.onFocus,()=>{const l=a.activationMode!=="manual";!d&&!f&&l&&a.onValueChange(o)})})})});te.displayName=ee;var oe="TabsContent",ne=s.forwardRef((e,t)=>{const{__scopeTabs:n,value:o,forceMount:f,children:m,...a}=e,p=O(oe,n),b=re(p.baseId,o),c=se(p.baseId,o),d=o===p.value,l=s.useRef(d);return s.useEffect(()=>{const I=requestAnimationFrame(()=>l.current=!1);return()=>cancelAnimationFrame(I)},[]),i.jsx(ve,{present:f||d,children:({present:I})=>i.jsx(S.div,{"data-state":d?"active":"inactive","data-orientation":p.orientation,role:"tabpanel","aria-labelledby":b,hidden:!I,id:c,tabIndex:0,...a,ref:t,style:{...e.style,animationDuration:l.current?"0s":void 0},children:I&&m})})});ne.displayName=oe;function re(e,t){return`${e}-trigger-${t}`}function se(e,t){return`${e}-content-${t}`}var Me=W,ae=Z,ie=te,ce=ne;const $e=Me,Pe=s.forwardRef(({className:e,...t},n)=>i.jsx(ae,{ref:n,className:D("inline-flex h-10 items-center justify-center rounded-md bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400",e),...t}));Pe.displayName=ae.displayName;const je=s.forwardRef(({className:e,...t},n)=>i.jsx(ie,{ref:n,className:D("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50",e),...t}));je.displayName=ie.displayName;const De=s.forwardRef(({className:e,...t},n)=>i.jsx(ce,{ref:n,className:D("mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",e),...t}));De.displayName=ce.displayName;export{$e as T,Pe as a,je as b,De as c,be as d,U as u};
