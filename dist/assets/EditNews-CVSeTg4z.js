import{r,j as e,t as l}from"./index-Carh3Eq0.js";import{E}from"./EditTitle-BjrhZQUD.js";import{D as C,a as F,b as I,c as L,d as S,e as T,f as A}from"./dialog-CasIuZOI.js";import{B as m,a as B}from"./index-CDXIzpC9.js";import{L as c,I as j}from"./input-CZDahHuA.js";import{T as R}from"./textarea-CKI0N5kf.js";import{d as k,Q as O,a as P}from"./QueryError-CYKMtzpB.js";import{E as Q}from"./NewsCard-DrDvAIJO.js";import{d as U,I as M}from"./mutation-DVVLyiH_.js";import{F as z}from"./index-B04UzMNR.js";import{g as G}from"./utils-CRrKglZt.js";import"./createLucideIcon-C-oAn_j_.js";import"./x-JdizwwtO.js";import"./alert-dialog-DSsYe-rG.js";import"./index-D_6R6otQ.js";const ie=()=>{const{data:i,isLoading:y,isError:b,refetch:N}=k(),[o,p]=r.useState(""),[n,g]=r.useState(""),[a,h]=r.useState(),[d,u]=r.useState(!1),[v,x]=r.useState(!1),w=U();if(y)return e.jsx(O,{});if(b)return e.jsx(P,{refetch:N});const f=async s=>{if(o!==""&&n!==""){const t=new FormData;t.append("title",o),t.append("body",n),t.append("publish",s+""),t.append("image",a&&a.length>0?a[0]:""),l.loading("loading...",{id:"loading-add-news"}),u(!0);try{await w.mutateAsync(t),x(!1),l.dismiss("loading-add-news"),l.success("Success",{description:"News published successfully"}),D()}finally{u(!1)}}else l.warning("Warning",{description:"Fill in all necessary fields"})},D=()=>{p(""),g(""),h(null)};return e.jsxs("div",{className:"px-5",children:[e.jsx(E,{text:"Edit News"}),e.jsxs(C,{open:v,onOpenChange:x,children:[e.jsx(F,{asChild:!0,children:e.jsxs(m,{variant:"outline",size:"sm",className:"text-sm hover:bg-primary hover:text-white text-primary flex gap-2 py-2 px-4 items-center rounded-md ml-auto md:mr-10",children:["Add ",e.jsx(B,{})]})}),e.jsxs(I,{className:"max-h-screen overflow-auto w-full",children:[e.jsxs(L,{children:[e.jsx(S,{children:"Post a News"}),e.jsx(T,{children:"Make a post about events"})]}),e.jsxs("div",{children:[e.jsx(c,{htmlFor:"title",children:"Title"}),e.jsx(j,{id:"title",placeholder:"Enter the title of the news",className:"ring-2 ring-slate-400 py-6 my-2",value:o,onChange:s=>p(s.target.value)}),e.jsx(c,{htmlFor:"body",className:"",children:"Body"}),e.jsx(R,{id:"body",placeholder:"Enter the body of the news",className:"ring-2 ring-slate-400 py-2 my-2",value:n,onChange:s=>g(s.target.value),rows:5}),e.jsxs(c,{htmlFor:"image",children:[a?"Change":"Choose"," News Image"]}),e.jsx(j,{type:"file",className:"ring-1",id:"image",onChange:s=>h(s.target.files),accept:"image/*"}),a&&(a==null?void 0:a.length)>0?e.jsx("div",{className:"w-[150px] h-[150px] overflow-clip rounded-full border-2 border-slate-200",children:e.jsx("img",{src:URL.createObjectURL(a[0]),alt:"",className:"my-3 object-cover w-full h-full object-top rounded-full"})}):""]}),e.jsxs(A,{children:[e.jsxs(m,{type:"submit",onClick:()=>f(!0),disabled:d,children:["Publish ",d?e.jsx(z,{className:"animate-spin"}):""]}),e.jsx(m,{variant:"outline",onClick:()=>f(!1),disabled:d,children:"Save as Draft"})]})]})]}),e.jsx("div",{className:"flex gap-5 flex-wrap my-4",children:i&&i.length>0?i==null?void 0:i.map((s,t)=>e.jsx(Q,{title:s.title,date:s.createdAt,body:s.body,id:s.id,image:s.image?M+s.image:G(t),newsImage:s.image,publish:s.publish},s.id)):e.jsx("div",{children:"Nothing here"})})]})};export{ie as default};
