import{r as o,j as e}from"./index-Carh3Eq0.js";import{F as h}from"./Footer-DjlTK8eS.js";import{H as j}from"./Header-DV9qLs6n.js";import{b as f,Q as b,a as N}from"./QueryError-CYKMtzpB.js";import{I as i}from"./mutation-DVVLyiH_.js";import{D as v,b as w,c as y,d as C,e as D}from"./dialog-CasIuZOI.js";import{A as E,C as I,a as G,b as A,c as H,d as L}from"./embla-carousel-autoplay.esm-Cusq34ah.js";import"./react-B8-VDvk0.js";import"./index-D_6R6otQ.js";import"./index-CDXIzpC9.js";import"./utils-CRrKglZt.js";import"./createLucideIcon-C-oAn_j_.js";import"./tabs-Dp8bdfHz.js";import"./index-Bxkqnqds.js";import"./input-CZDahHuA.js";import"./label-B9Iqg--o.js";import"./textarea-CKI0N5kf.js";import"./sheet-BLecABCS.js";import"./x-JdizwwtO.js";import"./index-B5Qgkzu8.js";const Z=()=>{const{data:s,isLoading:n,isError:m,refetch:c}=f(),[d,p]=o.useState([]),[x,l]=o.useState(!1),u=o.useRef(E({delay:5e3,stopOnInteraction:!1,stopOnMouseEnter:!0}));if(n)return e.jsx(b,{});if(m)return e.jsx(N,{refetch:c});const g=r=>{if(l(!0),s){const a=s==null?void 0:s.slice(0,r),t=s==null?void 0:s.slice(r);p(t==null?void 0:t.concat(a))}};return e.jsxs("div",{children:[e.jsx(v,{open:x,onOpenChange:l,children:e.jsxs(w,{className:"w-screen h-[90%] max-h-screen overflow-auto",children:[e.jsxs(y,{children:[e.jsx(C,{children:"Gallery"}),e.jsx(D,{children:"Memorable moments"})]}),e.jsxs(I,{className:"block w-full h-full md:h-[70%]",plugins:[u.current],opts:{align:"start",loop:!0},children:[e.jsx(G,{className:"",children:d.map(r=>e.jsx(A,{className:"",children:e.jsx("img",{src:i+r.image,alt:"",className:"w-full h-full max-h-[505px] md:h-[100%] object-cover object-top"})},r.id))}),e.jsx(H,{className:"text-4xl border-none bg-transparent bg-slate-300 md:bg-white  text-primary p-1 ring-1 md:ring-0 ring-slate-300 rounded-full absolute top-[50%] left-1 md:-left-11"}),e.jsx(L,{className:"text-4xl border-none bg-transparent bg-slate-300 md:bg-white text-primary p-1 ring-1 md:ring-0 ring-slate-300 rounded-full absolute top[50%] right-1 md:-right-11"})]})]})}),e.jsx(j,{active:"#gallery"}),e.jsxs("div",{className:"p-5 w-full ",children:[e.jsx("h2",{className:"text-3xl font-bold",children:"News Feed"}),e.jsx("p",{className:"text-primary",children:"// Latest News and Events."}),e.jsxs("div",{className:"bg-gray-50 py-5",children:[e.jsxs("nav",{className:"container mx-auto px-2 mb-4 text-sm text-gray-600",children:[e.jsx("a",{href:"/#gallery",className:"hover:underline",children:"Home"})," ",">",e.jsxs("a",{href:"",className:"hover:underline font-semibold",children:[" ","Gallery"]})]}),e.jsx("div",{className:"imgs flex gap-5 md:gap-3 flex-wrap justify-center",children:s&&s.length>0?s.map((r,a)=>e.jsx("img",{src:i+r.image,alt:"",onClick:()=>g(a),className:"w-[100%] md:w-[45%] md:h-[25rem] h-[25rem]  lg:w-[30%] lg:h-[25rem] object-cover rounded-xl object-top cursor-pointer",loading:"lazy"},r.id)):e.jsx("div",{children:"No Gallery Image"})})]})]}),e.jsx(h,{})]})};export{Z as default};
