var Q=s=>{throw TypeError(s)};var w=(s,e,t)=>e.has(s)||Q("Cannot "+t);var n=(s,e,t)=>(w(s,e,"read from private field"),t?t.call(s):e.get(s)),p=(s,e,t)=>e.has(s)?Q("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),f=(s,e,t,r)=>(w(s,e,"write to private field"),r?r.call(s,t):e.set(s,t),t),b=(s,e,t)=>(w(s,e,"access private method"),t);import{a as o}from"./utils-CRrKglZt.js";import{n as R,s as k,d as D,a as G,e as N,b as L,c as U,f as j,g as T,h as H,i as V,j as I,k as P,m as z,o as B,p as J,v as W,q as X,r as Y,t as Z,u as $,w as ee,x as te}from"./api-BEGC1kzT.js";import{S as se,s as re,h as A,g as ie,n as x,d,r as E,t as i}from"./index-C-fJmuxi.js";var h,m,u,l,c,M,K,O,ne=(O=class extends se{constructor(e,t){super();p(this,c);p(this,h);p(this,m);p(this,u);p(this,l);f(this,h,e),this.setOptions(t),this.bindMethods(),b(this,c,M).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var r;const t=this.options;this.options=n(this,h).defaultMutationOptions(e),re(this.options,t)||n(this,h).getMutationCache().notify({type:"observerOptionsUpdated",mutation:n(this,u),observer:this}),t!=null&&t.mutationKey&&this.options.mutationKey&&A(t.mutationKey)!==A(this.options.mutationKey)?this.reset():((r=n(this,u))==null?void 0:r.state.status)==="pending"&&n(this,u).setOptions(this.options)}onUnsubscribe(){var e;this.hasListeners()||(e=n(this,u))==null||e.removeObserver(this)}onMutationUpdate(e){b(this,c,M).call(this),b(this,c,K).call(this,e)}getCurrentResult(){return n(this,m)}reset(){var e;(e=n(this,u))==null||e.removeObserver(this),f(this,u,void 0),b(this,c,M).call(this),b(this,c,K).call(this)}mutate(e,t){var r;return f(this,l,t),(r=n(this,u))==null||r.removeObserver(this),f(this,u,n(this,h).getMutationCache().build(n(this,h),this.options)),n(this,u).addObserver(this),n(this,u).execute(e)}},h=new WeakMap,m=new WeakMap,u=new WeakMap,l=new WeakMap,c=new WeakSet,M=function(){var t;const e=((t=n(this,u))==null?void 0:t.state)??ie();f(this,m,{...e,isPending:e.status==="pending",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset})},K=function(e){x.batch(()=>{var t,r,y,q,g,S,F,_;if(n(this,l)&&this.hasListeners()){const v=n(this,m).variables,C=n(this,m).context;(e==null?void 0:e.type)==="success"?((r=(t=n(this,l)).onSuccess)==null||r.call(t,e.data,v,C),(q=(y=n(this,l)).onSettled)==null||q.call(y,e.data,null,v,C)):(e==null?void 0:e.type)==="error"&&((S=(g=n(this,l)).onError)==null||S.call(g,e.error,v,C),(_=(F=n(this,l)).onSettled)==null||_.call(F,void 0,e.error,v,C))}this.listeners.forEach(v=>{v(n(this,m))})})},O);function a(s,e){const t=d(),[r]=E.useState(()=>new ne(t,s));E.useEffect(()=>{r.setOptions(s)},[r,s]);const y=E.useSyncExternalStore(E.useCallback(g=>r.subscribe(x.batchCalls(g)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),q=E.useCallback((g,S)=>{r.mutate(g,S).catch(R)},[r]);if(y.error&&k(r.options.throwOnError,[y.error]))throw y.error;return{...y,mutate:q,mutateAsync:y.mutate}}const le=()=>{const s=d();return a({mutationFn:e=>D(e),onSettled:async(e,t)=>{if(!t)s.invalidateQueries({queryKey:["slider"]});else{i.dismiss("loading-delete-slider");const r=o(t);i.error("Error",{description:r})}}})},ce=()=>{const s=d();return a({mutationFn:e=>G(e),onSettled:async(e,t)=>{if(!t)s.invalidateQueries({queryKey:["slider"]});else{i.dismiss("loading-add-slider");const r=o(t);i.error("Error",{description:r})}}})},ye=()=>{const s=d();return a({mutationFn:({id:e,data:t})=>N(e,t),onSettled:async(e,t)=>{if(!t)s.invalidateQueries({queryKey:["slider"]});else{i.dismiss("loading-edit-slider");const r=o(t);i.error("Error",{description:r})}}})},he=()=>{const s=d();return a({mutationFn:e=>L(e),onSettled:async(e,t)=>{if(!t)s.invalidateQueries({queryKey:["about"]});else{i.dismiss("loading-add-about");const r=o(t);i.error("Error",{description:r})}}})},me=()=>{const s=d();return a({mutationFn:e=>U(e),onSettled:async(e,t)=>{if(!t)s.invalidateQueries({queryKey:["about"]});else{i.dismiss("loading-delete-about");const r=o(t);i.error("Error",{description:r})}}})},ge=()=>{const s=d();return a({mutationFn:({id:e,data:t})=>j(e,t),onSettled:async(e,t)=>{if(!t)s.invalidateQueries({queryKey:["about"]});else{i.dismiss("loading-edit-about");const r=o(t);i.error("Error",{description:r})}}})},ve=()=>{const s=d();return a({mutationFn:({id:e,data:t})=>T(e,t),onSettled:async(e,t)=>{if(!t)s.invalidateQueries({queryKey:["events"]});else{i.dismiss("loading-edit-event");const r=o(t);i.error("Error",{description:r})}}})},pe=()=>{const s=d();return a({mutationFn:e=>H(e),onSettled:async(e,t)=>{if(!t)s.invalidateQueries({queryKey:["history"]});else{i.dismiss("loading-edit-history");const r=o(t);i.error("Error",{description:r})}}})},fe=()=>{const s=d();return a({mutationFn:e=>V(e),onSettled:async(e,t)=>{if(!t)s.invalidateQueries({queryKey:["gallery"]});else{i.dismiss("loading-add-gallery");const r=o(t);i.error("Error",{description:r})}}})},be=()=>{const s=d();return a({mutationFn:({id:e,data:t})=>I(e,t),onSettled:async(e,t)=>{if(!t)s.invalidateQueries({queryKey:["gallery"]});else{i.dismiss("loading-edit-gallery");const r=o(t);i.error("Error",{description:r})}}})},Ee=()=>{const s=d();return a({mutationFn:e=>P(e),onSettled:async(e,t)=>{if(!t)s.invalidateQueries({queryKey:["gallery"]});else{i.dismiss("loading-delete-gallery");const r=o(t);i.error("Error",{description:r})}}})},qe=()=>{const s=d();return a({mutationFn:e=>z(e),onSettled:async(e,t)=>{if(!t)s.invalidateQueries({queryKey:["events"]});else{i.dismiss("loading-delete-event");const r=o(t);i.error("Error",{description:r})}}})},Se=()=>{const s=d();return a({mutationFn:e=>B(e),onSettled:async(e,t)=>{if(!t)s.invalidateQueries({queryKey:["news"]});else{i.dismiss("loading-add-news");const r=o(t);i.error("Error",{description:r})}}})},Ce=()=>{const s=d();return a({mutationFn:e=>J(e),onSettled:async(e,t)=>{if(!t)s.invalidateQueries({queryKey:["events"]});else{i.dismiss("loading-add-event");const r=o(t);i.error("Error",{description:r})}}})},Me=()=>a({mutationFn:s=>W(s),onSettled:async(s,e)=>{if(e){i.dismiss("loading-login");const t=o(e);i.error("Error",{description:t})}}}),we=()=>{const s=d();return a({mutationFn:({id:e,data:t})=>X(e,t),onSettled:async(e,t)=>{if(!t)s.invalidateQueries({queryKey:["news"]});else{i.dismiss("loading-edit-news");const r=o(t);i.error("Error",{description:r})}}})},Ke=()=>{const s=d();return a({mutationFn:e=>Y(e),onSettled:async(e,t)=>{if(!t)s.invalidateQueries({queryKey:["news"]});else{i.dismiss("loading-delete-news");const r=o(t);i.error("Error",{description:r})}}})},Fe=()=>a({mutationFn:s=>Z(s)}),_e=()=>{const s=d();return a({mutationFn:({id:e,value:t})=>$(e,t),onSettled:async(e,t,{id:r})=>{t||s.invalidateQueries({queryKey:["news",{id:r}]})}})},Qe=()=>a({mutationFn:({name:s,email:e,message:t})=>ee(s,e,t),onSettled:async(s,e)=>{if(e){i.dismiss("loading-contact-us");const t=o(e);i.error("Error",{description:t})}}}),Ae=()=>a({mutationFn:({name:s,message:e,rank:t})=>te(s,e,t),onSettled:async(s,e)=>{if(e){i.dismiss("loading-add-review");const t=o(e);i.error("Error",{description:t})}}});export{he as a,fe as b,pe as c,Se as d,Fe as e,_e as f,Ce as g,Ke as h,we as i,Qe as j,Ae as k,ce as l,le as m,ye as n,me as o,ge as p,qe as q,ve as r,be as s,Ee as t,Me as u};
