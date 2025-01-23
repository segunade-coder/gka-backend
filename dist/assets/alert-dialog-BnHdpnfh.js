import{r as s,j as o}from"./index-Do3v1RCK.js";import{a as L}from"./createLucideIcon-DPBd83TP.js";import{u,S as G,n as A}from"./index-D2jhA7BB.js";import{d as D,T as H,O as W,W as V,C as Y,e as q,b as B,c as J,a as v,R as K,P as Q}from"./x-B9PJrrXP.js";import{c as n}from"./utils-CRrKglZt.js";var x="AlertDialog",[U,ye]=L(x,[D]),i=D(),N=e=>{const{__scopeAlertDialog:a,...t}=e,r=i(a);return o.jsx(K,{...r,...t,modal:!0})};N.displayName=x;var X="AlertDialogTrigger",y=s.forwardRef((e,a)=>{const{__scopeAlertDialog:t,...r}=e,l=i(t);return o.jsx(H,{...l,...r,ref:a})});y.displayName=X;var Z="AlertDialogPortal",R=e=>{const{__scopeAlertDialog:a,...t}=e,r=i(a);return o.jsx(Q,{...r,...t})};R.displayName=Z;var ee="AlertDialogOverlay",_=s.forwardRef((e,a)=>{const{__scopeAlertDialog:t,...r}=e,l=i(t);return o.jsx(W,{...l,...r,ref:a})});_.displayName=ee;var c="AlertDialogContent",[ae,te]=U(c),j=s.forwardRef((e,a)=>{const{__scopeAlertDialog:t,children:r,...l}=e,g=i(t),p=s.useRef(null),z=u(a,p),m=s.useRef(null);return o.jsx(V,{contentName:c,titleName:b,docsSlug:"alert-dialog",children:o.jsx(ae,{scope:t,cancelRef:m,children:o.jsxs(Y,{role:"alertdialog",...g,...l,ref:z,onOpenAutoFocus:q(l.onOpenAutoFocus,d=>{var f;d.preventDefault(),(f=m.current)==null||f.focus({preventScroll:!0})}),onPointerDownOutside:d=>d.preventDefault(),onInteractOutside:d=>d.preventDefault(),children:[o.jsx(G,{children:r}),o.jsx(re,{contentRef:p})]})})})});j.displayName=c;var b="AlertDialogTitle",h=s.forwardRef((e,a)=>{const{__scopeAlertDialog:t,...r}=e,l=i(t);return o.jsx(B,{...l,...r,ref:a})});h.displayName=b;var w="AlertDialogDescription",C=s.forwardRef((e,a)=>{const{__scopeAlertDialog:t,...r}=e,l=i(t);return o.jsx(J,{...l,...r,ref:a})});C.displayName=w;var oe="AlertDialogAction",E=s.forwardRef((e,a)=>{const{__scopeAlertDialog:t,...r}=e,l=i(t);return o.jsx(v,{...l,...r,ref:a})});E.displayName=oe;var P="AlertDialogCancel",S=s.forwardRef((e,a)=>{const{__scopeAlertDialog:t,...r}=e,{cancelRef:l}=te(P,t),g=i(t),p=u(a,l);return o.jsx(v,{...g,...r,ref:p})});S.displayName=P;var re=({contentRef:e})=>{const a=`\`${c}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${c}\` by passing a \`${w}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${c}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return s.useEffect(()=>{var r;document.getElementById((r=e.current)==null?void 0:r.getAttribute("aria-describedby"))||console.warn(a)},[a,e]),null},se=N,le=y,ie=R,T=_,O=j,$=E,M=S,I=h,F=C;const Re=se,_e=le,ne=ie,k=s.forwardRef(({className:e,...a},t)=>o.jsx(T,{className:n("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...a,ref:t}));k.displayName=T.displayName;const ce=s.forwardRef(({className:e,...a},t)=>o.jsxs(ne,{children:[o.jsx(k,{}),o.jsx(O,{ref:t,className:n("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",e),...a})]}));ce.displayName=O.displayName;const de=({className:e,...a})=>o.jsx("div",{className:n("flex flex-col space-y-2 text-center sm:text-left",e),...a});de.displayName="AlertDialogHeader";const pe=({className:e,...a})=>o.jsx("div",{className:n("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...a});pe.displayName="AlertDialogFooter";const ge=s.forwardRef(({className:e,...a},t)=>o.jsx(I,{ref:t,className:n("text-lg font-semibold",e),...a}));ge.displayName=I.displayName;const me=s.forwardRef(({className:e,...a},t)=>o.jsx(F,{ref:t,className:n("text-sm text-slate-500 dark:text-slate-400",e),...a}));me.displayName=F.displayName;const fe=s.forwardRef(({className:e,...a},t)=>o.jsx($,{ref:t,className:n(A(),e),...a}));fe.displayName=$.displayName;const ue=s.forwardRef(({className:e,...a},t)=>o.jsx(M,{ref:t,className:n(A({variant:"outline"}),"mt-2 sm:mt-0",e),...a}));ue.displayName=M.displayName;export{Re as A,_e as a,ce as b,de as c,ge as d,me as e,pe as f,fe as g,ue as h};
