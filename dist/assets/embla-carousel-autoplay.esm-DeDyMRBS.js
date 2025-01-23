import{r as P,j as Q}from"./index-DEH36pcL.js";import{c as gt}from"./utils-CRrKglZt.js";import{B as Kt}from"./index-CWGIsgzA.js";import{c as Qt}from"./createLucideIcon-DMPyUX53.js";/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=Qt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=Qt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);function ln(t){return Object.prototype.toString.call(t)==="[object Object]"}function Gt(t){return ln(t)||Array.isArray(t)}function fn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Nt(t,n){const e=Object.keys(t),r=Object.keys(n);if(e.length!==r.length)return!1;const i=JSON.stringify(Object.keys(t.breakpoints||{})),s=JSON.stringify(Object.keys(n.breakpoints||{}));return i!==s?!1:e.every(o=>{const a=t[o],u=n[o];return typeof a=="function"?`${a}`==`${u}`:!Gt(a)||!Gt(u)?a===u:Nt(a,u)})}function Ut(t){return t.concat().sort((n,e)=>n.name>e.name?1:-1).map(n=>n.options)}function dn(t,n){if(t.length!==n.length)return!1;const e=Ut(t),r=Ut(n);return e.every((i,s)=>{const o=r[s];return Nt(i,o)})}function Tt(t){return typeof t=="number"}function Ct(t){return typeof t=="string"}function xt(t){return typeof t=="boolean"}function qt(t){return Object.prototype.toString.call(t)==="[object Object]"}function M(t){return Math.abs(t)}function At(t){return Math.sign(t)}function ft(t,n){return M(t-n)}function pn(t,n){if(t===0||n===0||M(t)<=M(n))return 0;const e=ft(M(t),M(n));return M(e/t)}function dt(t){return pt(t).map(Number)}function J(t){return t[ht(t)]}function ht(t){return Math.max(0,t.length-1)}function Pt(t,n){return n===ht(t)}function $t(t,n=0){return Array.from(Array(t),(e,r)=>n+r)}function pt(t){return Object.keys(t)}function Jt(t,n){return[t,n].reduce((e,r)=>(pt(r).forEach(i=>{const s=e[i],o=r[i],a=qt(s)&&qt(o);e[i]=a?Jt(s,o):o}),e),{})}function Dt(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function mn(t,n){const e={start:r,center:i,end:s};function r(){return 0}function i(u){return s(u)/2}function s(u){return n-u}function o(u,c){return Ct(t)?e[t](u):t(n,u,c)}return{measure:o}}function mt(){let t=[];function n(i,s,o,a={passive:!0}){let u;if("addEventListener"in i)i.addEventListener(s,o,a),u=()=>i.removeEventListener(s,o,a);else{const c=i;c.addListener(o),u=()=>c.removeListener(o)}return t.push(u),r}function e(){t=t.filter(i=>i())}const r={add:n,clear:e};return r}function gn(t,n,e,r){const i=mt(),s=1e3/60;let o=null,a=0,u=0;function c(){i.add(t,"visibilitychange",()=>{t.hidden&&l()})}function y(){b(),i.clear()}function d(m){if(!u)return;o||(o=m);const f=m-o;for(o=m,a+=f;a>=s;)e(s),a-=s;const g=a/s;r(g),u&&n.requestAnimationFrame(d)}function h(){u||(u=n.requestAnimationFrame(d))}function b(){n.cancelAnimationFrame(u),o=null,a=0,u=0}function l(){o=null,a=0}return{init:c,destroy:y,start:h,stop:b,update:()=>e(s),render:r}}function hn(t,n){const e=n==="rtl",r=t==="y",i=r?"y":"x",s=r?"x":"y",o=!r&&e?-1:1,a=y(),u=d();function c(l){const{height:p,width:m}=l;return r?p:m}function y(){return r?"top":e?"right":"left"}function d(){return r?"bottom":e?"left":"right"}function h(l){return l*o}return{scroll:i,cross:s,startEdge:a,endEdge:u,measureSize:c,direction:h}}function it(t=0,n=0){const e=M(t-n);function r(c){return c<t}function i(c){return c>n}function s(c){return r(c)||i(c)}function o(c){return s(c)?r(c)?t:n:c}function a(c){return e?c-e*Math.ceil((c-n)/e):c}return{length:e,max:n,min:t,constrain:o,reachedAny:s,reachedMax:i,reachedMin:r,removeOffset:a}}function Xt(t,n,e){const{constrain:r}=it(0,t),i=t+1;let s=o(n);function o(h){return e?M((i+h)%i):r(h)}function a(){return s}function u(h){return s=o(h),d}function c(h){return y().set(a()+h)}function y(){return Xt(t,a(),e)}const d={get:a,set:u,add:c,clone:y};return d}function yn(t,n,e,r,i,s,o,a,u,c,y,d,h,b,l,p,m,f,g){const{cross:x,direction:I}=t,C=["INPUT","SELECT","TEXTAREA"],O={passive:!1},E=mt(),v=mt(),w=it(50,225).constrain(b.measure(20)),T={mouse:300,touch:400},L={mouse:500,touch:600},F=l?43:25;let q=!1,D=0,j=0,V=!1,H=!1,$=!1,K=!1;function X(S){if(!g)return;function N(B){(xt(g)||g(S,B))&&ut(B)}const k=n;E.add(k,"dragstart",B=>B.preventDefault(),O).add(k,"touchmove",()=>{},O).add(k,"touchend",()=>{}).add(k,"touchstart",N).add(k,"mousedown",N).add(k,"touchcancel",z).add(k,"contextmenu",z).add(k,"click",tt,!0)}function G(){E.clear(),v.clear()}function _(){const S=K?e:n;v.add(S,"touchmove",R,O).add(S,"touchend",z).add(S,"mousemove",R,O).add(S,"mouseup",z)}function Z(S){const N=S.nodeName||"";return C.includes(N)}function W(){return(l?L:T)[K?"mouse":"touch"]}function ct(S,N){const k=d.add(At(S)*-1),B=y.byDistance(S,!l).distance;return l||M(S)<w?B:m&&N?B*.5:y.byIndex(k.get(),0).distance}function ut(S){const N=Dt(S,r);K=N,$=l&&N&&!S.buttons&&q,q=ft(i.get(),o.get())>=2,!(N&&S.button!==0)&&(Z(S.target)||(V=!0,s.pointerDown(S),c.useFriction(0).useDuration(0),i.set(o),_(),D=s.readPoint(S),j=s.readPoint(S,x),h.emit("pointerDown")))}function R(S){if(!Dt(S,r)&&S.touches.length>=2)return z(S);const k=s.readPoint(S),B=s.readPoint(S,x),Y=ft(k,D),nt=ft(B,j);if(!H&&!K&&(!S.cancelable||(H=Y>nt,!H)))return z(S);const et=s.pointerMove(S);Y>p&&($=!0),c.useFriction(.3).useDuration(.75),a.start(),i.add(I(et)),S.preventDefault()}function z(S){const k=y.byDistance(0,!1).index!==d.get(),B=s.pointerUp(S)*W(),Y=ct(I(B),k),nt=pn(B,Y),et=F-10*nt,ot=f+nt/50;H=!1,V=!1,v.clear(),c.useDuration(et).useFriction(ot),u.distance(Y,!l),K=!1,h.emit("pointerUp")}function tt(S){$&&(S.stopPropagation(),S.preventDefault(),$=!1)}function U(){return V}return{init:X,destroy:G,pointerDown:U}}function Sn(t,n){let r,i;function s(d){return d.timeStamp}function o(d,h){const l=`client${(h||t.scroll)==="x"?"X":"Y"}`;return(Dt(d,n)?d:d.touches[0])[l]}function a(d){return r=d,i=d,o(d)}function u(d){const h=o(d)-o(i),b=s(d)-s(r)>170;return i=d,b&&(r=d),h}function c(d){if(!r||!i)return 0;const h=o(i)-o(r),b=s(d)-s(r),l=s(d)-s(i)>170,p=h/b;return b&&!l&&M(p)>.1?p:0}return{pointerDown:a,pointerMove:u,pointerUp:c,readPoint:o}}function xn(){function t(e){const{offsetTop:r,offsetLeft:i,offsetWidth:s,offsetHeight:o}=e;return{top:r,right:i+s,bottom:r+o,left:i,width:s,height:o}}return{measure:t}}function bn(t){function n(r){return t*(r/100)}return{measure:n}}function En(t,n,e,r,i,s,o){const a=[t].concat(r);let u,c,y=[],d=!1;function h(m){return i.measureSize(o.measure(m))}function b(m){if(!s)return;c=h(t),y=r.map(h);function f(g){for(const x of g){if(d)return;const I=x.target===t,C=r.indexOf(x.target),O=I?c:y[C],E=h(I?t:r[C]);if(M(E-O)>=.5){m.reInit(),n.emit("resize");break}}}u=new ResizeObserver(g=>{(xt(s)||s(m,g))&&f(g)}),e.requestAnimationFrame(()=>{a.forEach(g=>u.observe(g))})}function l(){d=!0,u&&u.disconnect()}return{init:b,destroy:l}}function vn(t,n,e,r,i,s){let o=0,a=0,u=i,c=s,y=t.get(),d=0;function h(O){const E=O/1e3,v=u*E,w=r.get()-t.get(),T=!u;let L=0;return T?(o=0,e.set(r),t.set(r),L=w):(e.set(t),o+=w/v,o*=c,y+=o,t.add(o*E),L=y-d),a=At(L),d=y,C}function b(){const O=r.get()-n.get();return M(O)<.001}function l(){return u}function p(){return a}function m(){return o}function f(){return x(i)}function g(){return I(s)}function x(O){return u=O,C}function I(O){return c=O,C}const C={direction:p,duration:l,velocity:m,seek:h,settled:b,useBaseFriction:g,useBaseDuration:f,useFriction:I,useDuration:x};return C}function wn(t,n,e,r,i){const s=i.measure(10),o=i.measure(50),a=it(.1,.99);let u=!1;function c(){return!(u||!t.reachedAny(e.get())||!t.reachedAny(n.get()))}function y(b){if(!c())return;const l=t.reachedMin(n.get())?"min":"max",p=M(t[l]-n.get()),m=e.get()-n.get(),f=a.constrain(p/o);e.subtract(m*f),!b&&M(m)<s&&(e.set(t.constrain(e.get())),r.useDuration(25).useBaseFriction())}function d(b){u=!b}return{shouldConstrain:c,constrain:y,toggleActive:d}}function In(t,n,e,r,i){const s=it(-n+t,0),o=d(),a=y(),u=h();function c(l,p){return ft(l,p)<1}function y(){const l=o[0],p=J(o),m=o.lastIndexOf(l),f=o.indexOf(p)+1;return it(m,f)}function d(){return e.map((l,p)=>{const{min:m,max:f}=s,g=s.constrain(l),x=!p,I=Pt(e,p);return x?f:I||c(m,g)?m:c(f,g)?f:g}).map(l=>parseFloat(l.toFixed(3)))}function h(){if(n<=t+i)return[s.max];if(r==="keepSnaps")return o;const{min:l,max:p}=a;return o.slice(l,p)}return{snapsContained:u,scrollContainLimit:a}}function Ln(t,n,e){const r=n[0],i=e?r-t:J(n);return{limit:it(i,r)}}function On(t,n,e,r){const s=n.min+.1,o=n.max+.1,{reachedMin:a,reachedMax:u}=it(s,o);function c(h){return h===1?u(e.get()):h===-1?a(e.get()):!1}function y(h){if(!c(h))return;const b=t*(h*-1);r.forEach(l=>l.add(b))}return{loop:y}}function Cn(t){const{max:n,length:e}=t;function r(s){const o=s-n;return e?o/-e:0}return{get:r}}function Dn(t,n,e,r,i){const{startEdge:s,endEdge:o}=t,{groupSlides:a}=i,u=d().map(n.measure),c=h(),y=b();function d(){return a(r).map(p=>J(p)[o]-p[0][s]).map(M)}function h(){return r.map(p=>e[s]-p[s]).map(p=>-M(p))}function b(){return a(c).map(p=>p[0]).map((p,m)=>p+u[m])}return{snaps:c,snapsAligned:y}}function Nn(t,n,e,r,i,s){const{groupSlides:o}=i,{min:a,max:u}=r,c=y();function y(){const h=o(s),b=!t||n==="keepSnaps";return e.length===1?[s]:b?h:h.slice(a,u).map((l,p,m)=>{const f=!p,g=Pt(m,p);if(f){const x=J(m[0])+1;return $t(x)}if(g){const x=ht(s)-J(m)[0]+1;return $t(x,J(m)[0])}return l})}return{slideRegistry:c}}function Tn(t,n,e,r,i){const{reachedAny:s,removeOffset:o,constrain:a}=r;function u(l){return l.concat().sort((p,m)=>M(p)-M(m))[0]}function c(l){const p=t?o(l):a(l),m=n.map((g,x)=>({diff:y(g-p,0),index:x})).sort((g,x)=>M(g.diff)-M(x.diff)),{index:f}=m[0];return{index:f,distance:p}}function y(l,p){const m=[l,l+e,l-e];if(!t)return l;if(!p)return u(m);const f=m.filter(g=>At(g)===p);return f.length?u(f):J(m)-e}function d(l,p){const m=n[l]-i.get(),f=y(m,p);return{index:l,distance:f}}function h(l,p){const m=i.get()+l,{index:f,distance:g}=c(m),x=!t&&s(m);if(!p||x)return{index:f,distance:l};const I=n[f]-g,C=l+y(I,0);return{index:f,distance:C}}return{byDistance:h,byIndex:d,shortcut:y}}function An(t,n,e,r,i,s,o){function a(d){const h=d.distance,b=d.index!==n.get();s.add(h),h&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),b&&(e.set(n.get()),n.set(d.index),o.emit("select"))}function u(d,h){const b=i.byDistance(d,h);a(b)}function c(d,h){const b=n.clone().set(d),l=i.byIndex(b.get(),h);a(l)}return{distance:u,index:c}}function Pn(t,n,e,r,i,s,o,a){const u={passive:!0,capture:!0};let c=0;function y(b){if(!a)return;function l(p){if(new Date().getTime()-c>10)return;o.emit("slideFocusStart"),t.scrollLeft=0;const g=e.findIndex(x=>x.includes(p));Tt(g)&&(i.useDuration(0),r.index(g,0),o.emit("slideFocus"))}s.add(document,"keydown",d,!1),n.forEach((p,m)=>{s.add(p,"focus",f=>{(xt(a)||a(b,f))&&l(m)},u)})}function d(b){b.code==="Tab"&&(c=new Date().getTime())}return{init:y}}function lt(t){let n=t;function e(){return n}function r(u){n=o(u)}function i(u){n+=o(u)}function s(u){n-=o(u)}function o(u){return Tt(u)?u:u.get()}return{get:e,set:r,add:i,subtract:s}}function Yt(t,n){const e=t.scroll==="x"?s:o,r=n.style;let i=!1;function s(d){return`translate3d(${d}px,0px,0px)`}function o(d){return`translate3d(0px,${d}px,0px)`}function a(d){i||(r.transform=e(t.direction(d)))}function u(d){i=!d}function c(){i||(r.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:c,to:a,toggleActive:u}}function Mn(t,n,e,r,i,s,o,a,u){const y=dt(i),d=dt(i).reverse(),h=f().concat(g());function b(E,v){return E.reduce((w,T)=>w-i[T],v)}function l(E,v){return E.reduce((w,T)=>b(w,v)>0?w.concat([T]):w,[])}function p(E){return s.map((v,w)=>({start:v-r[w]+.5+E,end:v+n-.5+E}))}function m(E,v,w){const T=p(v);return E.map(L=>{const F=w?0:-e,q=w?e:0,D=w?"end":"start",j=T[L][D];return{index:L,loopPoint:j,slideLocation:lt(-1),translate:Yt(t,u[L]),target:()=>a.get()>j?F:q}})}function f(){const E=o[0],v=l(d,E);return m(v,e,!1)}function g(){const E=n-o[0]-1,v=l(y,E);return m(v,-e,!0)}function x(){return h.every(({index:E})=>{const v=y.filter(w=>w!==E);return b(v,n)<=.1})}function I(){h.forEach(E=>{const{target:v,translate:w,slideLocation:T}=E,L=v();L!==T.get()&&(w.to(L),T.set(L))})}function C(){h.forEach(E=>E.translate.clear())}return{canLoop:x,clear:C,loop:I,loopPoints:h}}function kn(t,n,e){let r,i=!1;function s(u){if(!e)return;function c(y){for(const d of y)if(d.type==="childList"){u.reInit(),n.emit("slidesChanged");break}}r=new MutationObserver(y=>{i||(xt(e)||e(u,y))&&c(y)}),r.observe(t,{childList:!0})}function o(){r&&r.disconnect(),i=!0}return{init:s,destroy:o}}function Fn(t,n,e,r){const i={};let s=null,o=null,a,u=!1;function c(){a=new IntersectionObserver(l=>{u||(l.forEach(p=>{const m=n.indexOf(p.target);i[m]=p}),s=null,o=null,e.emit("slidesInView"))},{root:t.parentElement,threshold:r}),n.forEach(l=>a.observe(l))}function y(){a&&a.disconnect(),u=!0}function d(l){return pt(i).reduce((p,m)=>{const f=parseInt(m),{isIntersecting:g}=i[f];return(l&&g||!l&&!g)&&p.push(f),p},[])}function h(l=!0){if(l&&s)return s;if(!l&&o)return o;const p=d(l);return l&&(s=p),l||(o=p),p}return{init:c,destroy:y,get:h}}function jn(t,n,e,r,i,s){const{measureSize:o,startEdge:a,endEdge:u}=t,c=e[0]&&i,y=l(),d=p(),h=e.map(o),b=m();function l(){if(!c)return 0;const g=e[0];return M(n[a]-g[a])}function p(){if(!c)return 0;const g=s.getComputedStyle(J(r));return parseFloat(g.getPropertyValue(`margin-${u}`))}function m(){return e.map((g,x,I)=>{const C=!x,O=Pt(I,x);return C?h[x]+y:O?h[x]+d:I[x+1][a]-g[a]}).map(M)}return{slideSizes:h,slideSizesWithGaps:b,startGap:y,endGap:d}}function zn(t,n,e,r,i,s,o,a,u){const{startEdge:c,endEdge:y,direction:d}=t,h=Tt(e);function b(f,g){return dt(f).filter(x=>x%g===0).map(x=>f.slice(x,x+g))}function l(f){return f.length?dt(f).reduce((g,x,I)=>{const C=J(g)||0,O=C===0,E=x===ht(f),v=i[c]-s[C][c],w=i[c]-s[x][y],T=!r&&O?d(o):0,L=!r&&E?d(a):0,F=M(w-L-(v+T));return I&&F>n+u&&g.push(x),E&&g.push(f.length),g},[]).map((g,x,I)=>{const C=Math.max(I[x-1]||0);return f.slice(C,g)}):[]}function p(f){return h?b(f,e):l(f)}return{groupSlides:p}}function Bn(t,n,e,r,i,s,o){const{align:a,axis:u,direction:c,startIndex:y,loop:d,duration:h,dragFree:b,dragThreshold:l,inViewThreshold:p,slidesToScroll:m,skipSnaps:f,containScroll:g,watchResize:x,watchSlides:I,watchDrag:C,watchFocus:O}=s,E=2,v=xn(),w=v.measure(n),T=e.map(v.measure),L=hn(u,c),F=L.measureSize(w),q=bn(F),D=mn(a,F),j=!d&&!!g,V=d||!!g,{slideSizes:H,slideSizesWithGaps:$,startGap:K,endGap:X}=jn(L,w,T,e,V,i),G=zn(L,F,m,d,w,T,K,X,E),{snaps:_,snapsAligned:Z}=Dn(L,D,w,T,G),W=-J(_)+J($),{snapsContained:ct,scrollContainLimit:ut}=In(F,W,Z,g,E),R=j?ct:Z,{limit:z}=Ln(W,R,d),tt=Xt(ht(R),y,d),U=tt.clone(),A=dt(e),S=({dragHandler:rt,scrollBody:It,scrollBounds:Lt,options:{loop:yt}},Ot)=>{yt||Lt.constrain(rt.pointerDown()),It.seek(Ot)},N=({scrollBody:rt,translate:It,location:Lt,offsetLocation:yt,scrollLooper:Ot,slideLooper:nn,dragHandler:en,animation:on,eventHandler:zt,scrollBounds:rn,options:{loop:Bt}},Rt)=>{const Vt=rt.settled(),sn=!rn.shouldConstrain(),Ht=Bt?Vt:Vt&&sn;Ht&&!en.pointerDown()&&(on.stop(),zt.emit("settle")),Ht||zt.emit("scroll");const cn=Lt.get()*Rt+et.get()*(1-Rt);yt.set(cn),Bt&&(Ot.loop(rt.direction()),nn.loop()),It.to(yt.get())},k=gn(r,i,rt=>S(wt,rt),rt=>N(wt,rt)),B=.68,Y=R[tt.get()],nt=lt(Y),et=lt(Y),ot=lt(Y),st=lt(Y),at=vn(nt,ot,et,st,h,B),Et=Tn(d,R,W,z,st),vt=An(k,tt,U,at,Et,st,o),kt=Cn(z),Ft=mt(),Wt=Fn(n,e,o,p),{slideRegistry:jt}=Nn(j,g,R,ut,G,A),tn=Pn(t,e,jt,vt,at,Ft,o,O),wt={ownerDocument:r,ownerWindow:i,eventHandler:o,containerRect:w,slideRects:T,animation:k,axis:L,dragHandler:yn(L,t,r,i,st,Sn(L,i),nt,k,vt,at,Et,tt,o,q,b,l,f,B,C),eventStore:Ft,percentOfView:q,index:tt,indexPrevious:U,limit:z,location:nt,offsetLocation:ot,previousLocation:et,options:s,resizeHandler:En(n,o,i,e,L,x,v),scrollBody:at,scrollBounds:wn(z,ot,st,at,q),scrollLooper:On(W,z,ot,[nt,ot,et,st]),scrollProgress:kt,scrollSnapList:R.map(kt.get),scrollSnaps:R,scrollTarget:Et,scrollTo:vt,slideLooper:Mn(L,F,W,H,$,_,R,ot,e),slideFocus:tn,slidesHandler:kn(n,o,I),slidesInView:Wt,slideIndexes:A,slideRegistry:jt,slidesToScroll:G,target:st,translate:Yt(L,n)};return wt}function Rn(){let t={},n;function e(c){n=c}function r(c){return t[c]||[]}function i(c){return r(c).forEach(y=>y(n,c)),u}function s(c,y){return t[c]=r(c).concat([y]),u}function o(c,y){return t[c]=r(c).filter(d=>d!==y),u}function a(){t={}}const u={init:e,emit:i,off:o,on:s,clear:a};return u}const Vn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function Hn(t){function n(s,o){return Jt(s,o||{})}function e(s){const o=s.breakpoints||{},a=pt(o).filter(u=>t.matchMedia(u).matches).map(u=>o[u]).reduce((u,c)=>n(u,c),{});return n(s,a)}function r(s){return s.map(o=>pt(o.breakpoints||{})).reduce((o,a)=>o.concat(a),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:e,optionsMediaQueries:r}}function Gn(t){let n=[];function e(s,o){return n=o.filter(({options:a})=>t.optionsAtMedia(a).active!==!1),n.forEach(a=>a.init(s,t)),o.reduce((a,u)=>Object.assign(a,{[u.name]:u}),{})}function r(){n=n.filter(s=>s.destroy())}return{init:e,destroy:r}}function St(t,n,e){const r=t.ownerDocument,i=r.defaultView,s=Hn(i),o=Gn(s),a=mt(),u=Rn(),{mergeOptions:c,optionsAtMedia:y,optionsMediaQueries:d}=s,{on:h,off:b,emit:l}=u,p=L;let m=!1,f,g=c(Vn,St.globalOptions),x=c(g),I=[],C,O,E;function v(){const{container:A,slides:S}=x;O=(Ct(A)?t.querySelector(A):A)||t.children[0];const k=Ct(S)?O.querySelectorAll(S):S;E=[].slice.call(k||O.children)}function w(A){const S=Bn(t,O,E,r,i,A,u);if(A.loop&&!S.slideLooper.canLoop()){const N=Object.assign({},A,{loop:!1});return w(N)}return S}function T(A,S){m||(g=c(g,A),x=y(g),I=S||I,v(),f=w(x),d([g,...I.map(({options:N})=>N)]).forEach(N=>a.add(N,"change",L)),x.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(U),f.eventHandler.init(U),f.resizeHandler.init(U),f.slidesHandler.init(U),f.options.loop&&f.slideLooper.loop(),O.offsetParent&&E.length&&f.dragHandler.init(U),C=o.init(U,I)))}function L(A,S){const N=G();F(),T(c({startIndex:N},A),S),u.emit("reInit")}function F(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),o.destroy(),a.clear()}function q(){m||(m=!0,a.clear(),F(),u.emit("destroy"),u.clear())}function D(A,S,N){!x.active||m||(f.scrollBody.useBaseFriction().useDuration(S===!0?0:x.duration),f.scrollTo.index(A,N||0))}function j(A){const S=f.index.add(1).get();D(S,A,-1)}function V(A){const S=f.index.add(-1).get();D(S,A,1)}function H(){return f.index.add(1).get()!==G()}function $(){return f.index.add(-1).get()!==G()}function K(){return f.scrollSnapList}function X(){return f.scrollProgress.get(f.location.get())}function G(){return f.index.get()}function _(){return f.indexPrevious.get()}function Z(){return f.slidesInView.get()}function W(){return f.slidesInView.get(!1)}function ct(){return C}function ut(){return f}function R(){return t}function z(){return O}function tt(){return E}const U={canScrollNext:H,canScrollPrev:$,containerNode:z,internalEngine:ut,destroy:q,off:b,on:h,emit:l,plugins:ct,previousScrollSnap:_,reInit:p,rootNode:R,scrollNext:j,scrollPrev:V,scrollProgress:X,scrollSnapList:K,scrollTo:D,selectedScrollSnap:G,slideNodes:tt,slidesInView:Z,slidesNotInView:W};return T(n,e),setTimeout(()=>u.emit("init"),0),U}St.globalOptions=void 0;function Mt(t={},n=[]){const e=P.useRef(t),r=P.useRef(n),[i,s]=P.useState(),[o,a]=P.useState(),u=P.useCallback(()=>{i&&i.reInit(e.current,r.current)},[i]);return P.useEffect(()=>{Nt(e.current,t)||(e.current=t,u())},[t,u]),P.useEffect(()=>{dn(r.current,n)||(r.current=n,u())},[n,u]),P.useEffect(()=>{if(fn()&&o){St.globalOptions=Mt.globalOptions;const c=St(o,e.current,r.current);return s(c),()=>c.destroy()}else s(void 0)},[o,s]),[a,i]}Mt.globalOptions=void 0;const _t=P.createContext(null);function bt(){const t=P.useContext(_t);if(!t)throw new Error("useCarousel must be used within a <Carousel />");return t}const Un=P.forwardRef(({orientation:t="horizontal",opts:n,setApi:e,plugins:r,className:i,children:s,...o},a)=>{const[u,c]=Mt({...n,axis:t==="horizontal"?"x":"y"},r),[y,d]=P.useState(!1),[h,b]=P.useState(!1),l=P.useCallback(g=>{g&&(d(g.canScrollPrev()),b(g.canScrollNext()))},[]),p=P.useCallback(()=>{c==null||c.scrollPrev()},[c]),m=P.useCallback(()=>{c==null||c.scrollNext()},[c]),f=P.useCallback(g=>{g.key==="ArrowLeft"?(g.preventDefault(),p()):g.key==="ArrowRight"&&(g.preventDefault(),m())},[p,m]);return P.useEffect(()=>{!c||!e||e(c)},[c,e]),P.useEffect(()=>{if(c)return l(c),c.on("reInit",l),c.on("select",l),()=>{c==null||c.off("select",l)}},[c,l]),Q.jsx(_t.Provider,{value:{carouselRef:u,api:c,opts:n,orientation:t||((n==null?void 0:n.axis)==="y"?"vertical":"horizontal"),scrollPrev:p,scrollNext:m,canScrollPrev:y,canScrollNext:h},children:Q.jsx("div",{ref:a,onKeyDownCapture:f,className:gt("relative",i),role:"region","aria-roledescription":"carousel",...o,children:s})})});Un.displayName="Carousel";const qn=P.forwardRef(({className:t,...n},e)=>{const{carouselRef:r,orientation:i}=bt();return Q.jsx("div",{ref:r,className:"overflow-hidden",children:Q.jsx("div",{ref:e,className:gt("flex",i==="horizontal"?"-ml-4":"-mt-4 flex-col",t),...n})})});qn.displayName="CarouselContent";const $n=P.forwardRef(({className:t,...n},e)=>{const{orientation:r}=bt();return Q.jsx("div",{ref:e,role:"group","aria-roledescription":"slide",className:gt("min-w-0 shrink-0 grow-0 basis-full",r==="horizontal"?"pl-4":"pt-4",t),...n})});$n.displayName="CarouselItem";const Kn=P.forwardRef(({className:t,variant:n="outline",size:e="icon",...r},i)=>{const{orientation:s,scrollPrev:o,canScrollPrev:a}=bt();return Q.jsxs(Kt,{ref:i,variant:n,size:e,className:gt("absolute  h-8 w-8 rounded-full",s==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!a,onClick:o,...r,children:[Q.jsx(un,{className:"h-4 w-4"}),Q.jsx("span",{className:"sr-only",children:"Previous slide"})]})});Kn.displayName="CarouselPrevious";const Qn=P.forwardRef(({className:t,variant:n="outline",size:e="icon",...r},i)=>{const{orientation:s,scrollNext:o,canScrollNext:a}=bt();return Q.jsxs(Kt,{ref:i,variant:n,size:e,className:gt("absolute h-8 w-8 rounded-full",s==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!a,onClick:o,...r,children:[Q.jsx(an,{className:"h-4 w-4"}),Q.jsx("span",{className:"sr-only",children:"Next slide"})]})});Qn.displayName="CarouselNext";const Jn={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function Xn(t,n){const e=t.scrollSnapList();return typeof n=="number"?e.map(()=>n):n(e,t)}function Yn(t,n){const e=t.rootNode();return n&&n(e)||e}function Zt(t={}){let n,e,r,i,s=null,o=0,a=!1,u=!1,c=!1,y=!1;function d(D,j){e=D;const{mergeOptions:V,optionsAtMedia:H}=j,$=V(Jn,Zt.globalOptions),K=V($,t);if(n=H(K),e.scrollSnapList().length<=1)return;y=n.jump,r=!1,i=Xn(e,n.delay);const{eventStore:X,ownerDocument:G}=e.internalEngine(),_=!!e.internalEngine().options.watchDrag,Z=Yn(e,n.rootNode);X.add(G,"visibilitychange",f),_&&e.on("pointerDown",x),_&&!n.stopOnInteraction&&e.on("pointerUp",I),n.stopOnMouseEnter&&X.add(Z,"mouseenter",C),n.stopOnMouseEnter&&!n.stopOnInteraction&&X.add(Z,"mouseleave",O),n.stopOnFocusIn&&e.on("slideFocusStart",m),n.stopOnFocusIn&&!n.stopOnInteraction&&X.add(e.containerNode(),"focusout",p),n.playOnInit&&!g()&&p()}function h(){e.off("pointerDown",x).off("pointerUp",I).off("slideFocusStart",m),m(),r=!0,a=!1}function b(){const{ownerWindow:D}=e.internalEngine();D.clearTimeout(o),o=D.setTimeout(L,i[e.selectedScrollSnap()]),s=new Date().getTime(),e.emit("autoplay:timerset")}function l(){const{ownerWindow:D}=e.internalEngine();D.clearTimeout(o),o=0,s=null,e.emit("autoplay:timerstopped")}function p(){r||(a||e.emit("autoplay:play"),b(),a=!0)}function m(){r||(a&&e.emit("autoplay:stop"),l(),a=!1)}function f(){if(g())return c=a,m();c&&p()}function g(){const{ownerDocument:D}=e.internalEngine();return D.visibilityState==="hidden"}function x(){u||m()}function I(){u||p()}function C(){u=!0,m()}function O(){u=!1,p()}function E(D){typeof D<"u"&&(y=D),p()}function v(){a&&m()}function w(){a&&p()}function T(){return a}function L(){const{index:D}=e.internalEngine(),j=D.clone().add(1).get(),V=e.scrollSnapList().length-1,H=n.stopOnLastSnap&&j===V;if(e.canScrollNext()?e.scrollNext(y):e.scrollTo(0,y),e.emit("autoplay:select"),H)return m();p()}function F(){if(!s)return null;const D=i[e.selectedScrollSnap()],j=new Date().getTime()-s;return D-j}return{name:"autoplay",options:t,init:d,destroy:h,play:E,stop:v,reset:w,isPlaying:T,timeUntilNext:F}}Zt.globalOptions=void 0;export{Zt as A,Un as C,qn as a,$n as b,Kn as c,Qn as d,an as e};
