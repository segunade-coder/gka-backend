var ot=e=>{throw TypeError(e)};var Z=(e,t,r)=>t.has(e)||ot("Cannot "+r);var s=(e,t,r)=>(Z(e,t,"read from private field"),r?r.call(e):t.get(e)),y=(e,t,r)=>t.has(e)?ot("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),u=(e,t,r,i)=>(Z(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r),l=(e,t,r)=>(Z(e,t,"access private method"),r);import{S as bt,d as C,s as K,e as q,n as vt,i as ht,f as ut,g as Rt,h as It,k as Ct,l as ct,m as yt,r as w,o as xt,j as O,I as St}from"./index-BEiodwaa.js";import{z as wt,A as Et,B as Dt,C as Ot,D as Ft,E as Mt,F as Qt,G as jt,H as Lt,J as Pt,K as Nt,L as Tt}from"./mutation-Cq-v7KJh.js";import{B as Ut}from"./button-iEVa7Psr.js";import{h as At}from"./index-CgImGZY3.js";var m,n,A,p,F,j,I,z,L,P,M,Q,E,N,a,U,J,W,Y,_,X,$,tt,pt,ft,zt=(ft=class extends bt{constructor(t,r){super();y(this,a);y(this,m);y(this,n);y(this,A);y(this,p);y(this,F);y(this,j);y(this,I);y(this,z);y(this,L);y(this,P);y(this,M);y(this,Q);y(this,E);y(this,N,new Set);this.options=r,u(this,m,t),u(this,I,null),this.bindMethods(),this.setOptions(r)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(s(this,n).addObserver(this),lt(s(this,n),this.options)?l(this,a,U).call(this):this.updateResult(),l(this,a,_).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return et(s(this,n),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return et(s(this,n),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,l(this,a,X).call(this),l(this,a,$).call(this),s(this,n).removeObserver(this)}setOptions(t,r){const i=this.options,f=s(this,n);if(this.options=s(this,m).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof C(this.options.enabled,s(this,n))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");l(this,a,tt).call(this),s(this,n).setOptions(this.options),i._defaulted&&!K(this.options,i)&&s(this,m).getQueryCache().notify({type:"observerOptionsUpdated",query:s(this,n),observer:this});const c=this.hasListeners();c&&dt(s(this,n),f,this.options,i)&&l(this,a,U).call(this),this.updateResult(r),c&&(s(this,n)!==f||C(this.options.enabled,s(this,n))!==C(i.enabled,s(this,n))||q(this.options.staleTime,s(this,n))!==q(i.staleTime,s(this,n)))&&l(this,a,J).call(this);const o=l(this,a,W).call(this);c&&(s(this,n)!==f||C(this.options.enabled,s(this,n))!==C(i.enabled,s(this,n))||o!==s(this,E))&&l(this,a,Y).call(this,o)}getOptimisticResult(t){const r=s(this,m).getQueryCache().build(s(this,m),t),i=this.createResult(r,t);return qt(this,i)&&(u(this,p,i),u(this,j,this.options),u(this,F,s(this,n).state)),i}getCurrentResult(){return s(this,p)}trackResult(t,r){const i={};return Object.keys(t).forEach(f=>{Object.defineProperty(i,f,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(f),r==null||r(f),t[f])})}),i}trackProp(t){s(this,N).add(t)}getCurrentQuery(){return s(this,n)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const r=s(this,m).defaultQueryOptions(t),i=s(this,m).getQueryCache().build(s(this,m),r);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,r))}fetch(t){return l(this,a,U).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),s(this,p)))}createResult(t,r){var at;const i=s(this,n),f=this.options,c=s(this,p),o=s(this,F),d=s(this,j),x=t!==i?t.state:s(this,A),{state:S}=t;let h={...S},T=!1,g;if(r._optimisticResults){const b=this.hasListeners(),V=!b&&lt(t,r),gt=b&&dt(t,i,r,f);(V||gt)&&(h={...h,...Ct(S.data,t.options)}),r._optimisticResults==="isRestoring"&&(h.fetchStatus="idle")}let{error:G,errorUpdatedAt:rt,status:D}=h;if(r.select&&h.data!==void 0)if(c&&h.data===(o==null?void 0:o.data)&&r.select===s(this,z))g=s(this,L);else try{u(this,z,r.select),g=r.select(h.data),g=ct(c==null?void 0:c.data,g,r),u(this,L,g),u(this,I,null)}catch(b){u(this,I,b)}else g=h.data;if(r.placeholderData!==void 0&&g===void 0&&D==="pending"){let b;if(c!=null&&c.isPlaceholderData&&r.placeholderData===(d==null?void 0:d.placeholderData))b=c.data;else if(b=typeof r.placeholderData=="function"?r.placeholderData((at=s(this,P))==null?void 0:at.state.data,s(this,P)):r.placeholderData,r.select&&b!==void 0)try{b=r.select(b),u(this,I,null)}catch(V){u(this,I,V)}b!==void 0&&(D="success",g=ct(c==null?void 0:c.data,b,r),T=!0)}s(this,I)&&(G=s(this,I),g=s(this,L),rt=Date.now(),D="error");const B=h.fetchStatus==="fetching",k=D==="pending",H=D==="error",it=k&&B,nt=g!==void 0;return{status:D,fetchStatus:h.fetchStatus,isPending:k,isSuccess:D==="success",isError:H,isInitialLoading:it,isLoading:it,data:g,dataUpdatedAt:h.dataUpdatedAt,error:G,errorUpdatedAt:rt,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>x.dataUpdateCount||h.errorUpdateCount>x.errorUpdateCount,isFetching:B,isRefetching:B&&!k,isLoadingError:H&&!nt,isPaused:h.fetchStatus==="paused",isPlaceholderData:T,isRefetchError:H&&nt,isStale:st(t,r),refetch:this.refetch}}updateResult(t){const r=s(this,p),i=this.createResult(s(this,n),this.options);if(u(this,F,s(this,n).state),u(this,j,this.options),s(this,F).data!==void 0&&u(this,P,s(this,n)),K(i,r))return;u(this,p,i);const f={},c=()=>{if(!r)return!0;const{notifyOnChangeProps:o}=this.options,d=typeof o=="function"?o():o;if(d==="all"||!d&&!s(this,N).size)return!0;const R=new Set(d??s(this,N));return this.options.throwOnError&&R.add("error"),Object.keys(s(this,p)).some(x=>{const S=x;return s(this,p)[S]!==r[S]&&R.has(S)})};(t==null?void 0:t.listeners)!==!1&&c()&&(f.listeners=!0),l(this,a,pt).call(this,{...f,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&l(this,a,_).call(this)}},m=new WeakMap,n=new WeakMap,A=new WeakMap,p=new WeakMap,F=new WeakMap,j=new WeakMap,I=new WeakMap,z=new WeakMap,L=new WeakMap,P=new WeakMap,M=new WeakMap,Q=new WeakMap,E=new WeakMap,N=new WeakMap,a=new WeakSet,U=function(t){l(this,a,tt).call(this);let r=s(this,n).fetch(this.options,t);return t!=null&&t.throwOnError||(r=r.catch(vt)),r},J=function(){l(this,a,X).call(this);const t=q(this.options.staleTime,s(this,n));if(ht||s(this,p).isStale||!ut(t))return;const i=Rt(s(this,p).dataUpdatedAt,t)+1;u(this,M,setTimeout(()=>{s(this,p).isStale||this.updateResult()},i))},W=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(s(this,n)):this.options.refetchInterval)??!1},Y=function(t){l(this,a,$).call(this),u(this,E,t),!(ht||C(this.options.enabled,s(this,n))===!1||!ut(s(this,E))||s(this,E)===0)&&u(this,Q,setInterval(()=>{(this.options.refetchIntervalInBackground||It.isFocused())&&l(this,a,U).call(this)},s(this,E)))},_=function(){l(this,a,J).call(this),l(this,a,Y).call(this,l(this,a,W).call(this))},X=function(){s(this,M)&&(clearTimeout(s(this,M)),u(this,M,void 0))},$=function(){s(this,Q)&&(clearInterval(s(this,Q)),u(this,Q,void 0))},tt=function(){const t=s(this,m).getQueryCache().build(s(this,m),this.options);if(t===s(this,n))return;const r=s(this,n);u(this,n,t),u(this,A,t.state),this.hasListeners()&&(r==null||r.removeObserver(this),t.addObserver(this))},pt=function(t){yt.batch(()=>{t.listeners&&this.listeners.forEach(r=>{r(s(this,p))}),s(this,m).getQueryCache().notify({query:s(this,n),type:"observerResultsUpdated"})})},ft);function Gt(e,t){return C(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function lt(e,t){return Gt(e,t)||e.state.data!==void 0&&et(e,t,t.refetchOnMount)}function et(e,t,r){if(C(t.enabled,e)!==!1){const i=typeof r=="function"?r(e):r;return i==="always"||i!==!1&&st(e,t)}return!1}function dt(e,t,r,i){return(e!==t||C(i.enabled,e)===!1)&&(!r.suspense||e.state.status!=="error")&&st(e,r)}function st(e,t){return C(t.enabled,e)!==!1&&e.isStaleByTime(q(t.staleTime,e))}function qt(e,t){return!K(e.getCurrentResult(),t)}var mt=w.createContext(!1),Bt=()=>w.useContext(mt);mt.Provider;function kt(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var Ht=w.createContext(kt()),Vt=()=>w.useContext(Ht),Zt=(e,t)=>{(e.suspense||e.throwOnError)&&(t.isReset()||(e.retryOnMount=!1))},Kt=e=>{w.useEffect(()=>{e.clearReset()},[e])},Jt=({result:e,errorResetBoundary:t,throwOnError:r,query:i})=>e.isError&&!t.isReset()&&!e.isFetching&&i&&wt(r,[e.error,i]),Wt=e=>{e.suspense&&(typeof e.staleTime!="number"&&(e.staleTime=1e3),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3)))},Yt=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,_t=(e,t,r)=>t.fetchOptimistic(e).catch(()=>{r.clearReset()});function Xt(e,t,r){var x,S,h,T;const i=xt(),f=Bt(),c=Vt(),o=i.defaultQueryOptions(e);(S=(x=i.getDefaultOptions().queries)==null?void 0:x._experimental_beforeQuery)==null||S.call(x,o),o._optimisticResults=f?"isRestoring":"optimistic",Wt(o),Zt(o,c),Kt(c);const[d]=w.useState(()=>new t(i,o)),R=d.getOptimisticResult(o);if(w.useSyncExternalStore(w.useCallback(g=>{const G=f?()=>{}:d.subscribe(yt.batchCalls(g));return d.updateResult(),G},[d,f]),()=>d.getCurrentResult(),()=>d.getCurrentResult()),w.useEffect(()=>{d.setOptions(o,{listeners:!1})},[o,d]),Yt(o,R))throw _t(o,d,c);if(Jt({result:R,errorResetBoundary:c,throwOnError:o.throwOnError,query:i.getQueryCache().get(o.queryHash)}))throw R.error;return(T=(h=i.getDefaultOptions().queries)==null?void 0:h._experimental_afterQuery)==null||T.call(h,o,R),o.notifyOnChangeProps?R:d.trackResult(R)}function v(e,t){return Xt(e,zt)}const ae=()=>v({queryKey:["initial"],queryFn:()=>Et()}),oe=()=>v({queryKey:["slider"],queryFn:()=>Dt()}),he=()=>v({queryKey:["about"],queryFn:()=>Ot()}),ue=()=>v({queryKey:["history"],queryFn:()=>Ft()}),ce=()=>v({queryKey:["gallery"],queryFn:()=>Mt()}),le=()=>v({queryKey:["news"],queryFn:()=>Qt()}),de=e=>v({queryKey:["news",{id:e}],queryFn:()=>jt(e),enabled:!!e}),fe=()=>v({queryKey:["reviews"],queryFn:()=>Lt()}),ye=()=>v({queryKey:["account-status"],queryFn:()=>Pt(),retry:0,refetchInterval:1e3*60*20}),pe=()=>v({queryKey:["events"],queryFn:()=>Nt()}),me=()=>v({queryKey:["messages"],queryFn:()=>Tt()}),ge=()=>O.jsx("div",{className:"w-full h-[80vh] flex items-center justify-center",children:O.jsx(St,{className:"animate-spin text-4xl text-primary"})}),$t="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgaGVpZ2h0PSIzMiIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7ZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMiIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxnIGlkPSJFcnJvcl8xXyI+PGcgaWQ9IkVycm9yIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiBpZD0iQkciIHI9IjE2IiBzdHlsZT0iZmlsbDojRDcyODI4OyIvPjxwYXRoIGQ9Ik0xNC41LDI1aDN2LTNoLTNWMjV6IE0xNC41LDZ2MTNoM1Y2SDE0LjV6IiBpZD0iRXhjbGFtYXRvcnlfeDVGX1NpZ24iIHN0eWxlPSJmaWxsOiNFNkU2RTY7Ii8+PC9nPjwvZz48L2c+PC9zdmc+",be=({refetch:e})=>O.jsxs("div",{className:"w-full h-[70vh] flex items-center justify-center flex-col",children:[O.jsx("img",{src:$t,className:"w-[100px] h-[100px] object-contain"}),O.jsx("p",{className:"py-4 text-gray-500 text-lg",children:"An Error occurred while fetching data"}),O.jsxs(Ut,{size:"sm",className:"bg-primary text-white hover:bg-primary/80",onClick:()=>e(),children:["Reload ",O.jsx(At,{})]})]});export{ge as Q,be as a,ce as b,ue as c,le as d,de as e,pe as f,me as g,fe as h,ae as i,ye as j,oe as k,he as u};
