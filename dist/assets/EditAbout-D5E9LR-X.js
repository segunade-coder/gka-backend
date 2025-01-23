import{r as i,j as e,t as r}from"./index-DEH36pcL.js";import{a as C,Q as N}from"./QueryLoader-CVBped6H.js";import{a as E}from"./EditCard-D1_JYAlf.js";import{E as S}from"./EditTitle-BvwRChZ9.js";import{D as w,a as F,b as L,c as T,d as Q,e as B,f as I,g as O}from"./dialog-R4cDrBuJ.js";import{B as n,a as R}from"./index-CWGIsgzA.js";import{L as h}from"./label-D6GU2Pjp.js";import{I as d}from"./input-D7LdL6lt.js";import{b as P}from"./mutation-DNa0qWcx.js";import{Q as U}from"./QueryError-CHq91Vbd.js";import{F as k}from"./index-DZ2Ay0wn.js";import"./api-xF4wnrL7.js";import"./index-CSKmL4vs.js";import"./index-Bpfs0WL0.js";import"./alert-dialog-CoAocl7z.js";import"./createLucideIcon-DMPyUX53.js";import"./x-DAGorDsp.js";import"./index-Bn__U2Ng.js";import"./utils-CRrKglZt.js";const re=()=>{const{data:t,isLoading:f,isError:j,refetch:b}=C(),[l,c]=i.useState(""),[o,m]=i.useState(""),[a,u]=i.useState(),[y,p]=i.useState(!1),A=P(),[g,x]=i.useState(!1);if(f)return e.jsx(N,{});if(j)return e.jsx(U,{refetch:b});const v=async()=>{if(l!==""&&o!==""&&a){const s=new FormData;s.append("title",l),s.append("sub",o),s.append("image",a[0]),r.loading("loading...",{id:"loading-add-about"}),x(!0);try{await A.mutateAsync(s),p(!1),r.dismiss("loading-add-about"),r.success("Success",{description:"About added successfully"}),D()}finally{x(!1)}}else r.warning("Warning",{description:"Please, fill in all necessary fields"})},D=()=>{c(""),m(""),u(null)};return e.jsxs("div",{className:"px-5",children:[e.jsx(S,{text:"Edit About page"}),e.jsxs(w,{open:y,onOpenChange:p,children:[e.jsx(F,{asChild:!0,children:e.jsxs(n,{size:"sm",className:"bg-primary hover:bg-primary/80 text-sm flex gap-2 py-2 px-4 text-white items-center rounded-md ml-auto md:mr-10",children:["Add ",e.jsx(R,{})]})}),e.jsxs(L,{children:[e.jsxs(T,{children:[e.jsx(Q,{children:"Add About Card"}),e.jsx(B,{children:"Add an about card to the website."})]}),e.jsxs("div",{children:[e.jsx(h,{htmlFor:"title",children:"Title"}),e.jsx(d,{id:"title",placeholder:"Enter About title",className:"ring-2 ring-slate-400 py-6 my-2",value:l,onChange:s=>c(s.target.value)}),e.jsx(h,{htmlFor:"sub",className:"",children:"Sub Text"}),e.jsx(d,{id:"sub",placeholder:"Enter Sub Text",className:"ring-2 ring-slate-400 py-6 my-2",value:o,onChange:s=>m(s.target.value)}),e.jsx(d,{type:"file",className:"ring-1 ring-slate-300 my-4",id:"image",onChange:s=>u(s.target.files),accept:"image/*"}),a&&(a==null?void 0:a.length)>0?e.jsx("div",{className:"w-full h-full max-h-[30vh] overflow-clip",children:e.jsx("img",{src:URL.createObjectURL(a[0]),alt:"",className:"w-full object-contain object-top h-full max-h-[30vh]"})}):""]}),e.jsxs(I,{children:[e.jsxs(n,{type:"submit",className:"",onClick:()=>v(),disabled:g,children:["Add ",g?e.jsx(k,{className:"animate-spin"}):""]}),e.jsx(O,{asChild:!0,children:e.jsx(n,{variant:"destructive",children:"Discard"})})]})]})]}),e.jsx("div",{className:"flex gap-5 flex-wrap my-5 justify-center md:justify-start",children:t&&(t==null?void 0:t.length)>0?t==null?void 0:t.map(s=>e.jsx(E,{about:s},s.id)):e.jsx("div",{children:"Nothing here"})})]})};export{re as default};
