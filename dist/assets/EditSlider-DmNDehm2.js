import{r as i,j as e,t as r}from"./index-TnTDpqy4.js";import{u as D,Q as E}from"./QueryLoader-DhoxU_H3.js";import{E as N}from"./EditTitle-oV89VDYS.js";import{E as w}from"./EditCard-BDojTNlG.js";import{D as F,a as A,b as L,c as T,d as I,e as Q,f as B,g as O}from"./dialog-C39Y4eo2.js";import{B as o,a as R}from"./index-ye2DFzoX.js";import{L as d}from"./label-DBLE-kze.js";import{I as m}from"./input-IbiUdbIM.js";import{a as k}from"./mutation-DY6GVtB-.js";import{Q as U}from"./QueryError-DYvvzKg8.js";import{F as z}from"./index-eFnFOOut.js";import"./api-xF4wnrL7.js";import"./index-D7mV-95d.js";import"./index-DbGGZBjq.js";import"./alert-dialog-BkM1-_Cf.js";import"./createLucideIcon-Dx379Zb9.js";import"./x-CwLCEG6Y.js";import"./index-B_X_e_ga.js";import"./utils-CRrKglZt.js";const re=()=>{const{data:t,isLoading:j,isError:y,refetch:S}=D(),[l,c]=i.useState(""),[n,p]=i.useState(""),[a,g]=i.useState(),[u,x]=i.useState(!1),[b,h]=i.useState(!1),v=k();if(j)return e.jsx(E,{});if(y)return e.jsx(U,{refetch:S});const C=async()=>{if(l!==""&&n!==""&&a){const s=new FormData;s.append("title",l),s.append("sub",n),s.append("image",a[0]),r.loading("loading...",{id:"loading-add-slider"}),x(!0);try{await v.mutateAsync(s),h(!1),r.dismiss("loading-add-slider"),r.success("Success",{description:"Slider added successfully"}),f()}finally{x(!1)}}else r.warning("Warning",{description:"Fill in all necessary fields"})},f=()=>{c(""),p(""),g(null)};return e.jsxs("div",{className:"px-5",children:[e.jsx(N,{text:"Edit Slider"}),e.jsxs(F,{open:b,onOpenChange:h,children:[e.jsx(A,{asChild:!0,children:e.jsxs(o,{size:"sm",className:"bg-primary text-sm flex hover:bg-primary/80 gap-2 py-2 px-4 text-white items-center rounded-md ml-auto md:mr-10",children:["Add ",e.jsx(R,{})]})}),e.jsxs(L,{children:[e.jsxs(T,{children:[e.jsx(I,{children:"Add Slider Image"}),e.jsx(Q,{children:"Add slider image to the website."})]}),e.jsxs("div",{children:[e.jsx(d,{htmlFor:"title",children:"Main Text"}),e.jsx(m,{id:"title",placeholder:"Enter main text",className:"ring-2 ring-slate-400 py-6 my-2",value:l,onChange:s=>c(s.target.value)}),e.jsx(d,{htmlFor:"sub",className:"",children:"Sub Text"}),e.jsx(m,{id:"sub",placeholder:"Enter sub text",className:"ring-2 ring-slate-400 py-6 my-2",value:n,onChange:s=>p(s.target.value)}),e.jsxs(d,{htmlFor:"image",children:[a?"Change":"Choose"," Slider Image"]}),e.jsx(m,{type:"file",className:"ring-1",id:"image",onChange:s=>g(s.target.files),accept:"image/*"}),a&&(a==null?void 0:a.length)>0?e.jsx("div",{className:"w-full h-full max-h-[30vh] overflow-clip",children:e.jsx("img",{src:URL.createObjectURL(a[0]),alt:"",className:"my-3 object-contain w-full h-full object-top"})}):""]}),e.jsxs(B,{children:[e.jsxs(o,{type:"submit",className:"",onClick:()=>C(),disabled:u,children:["Add ",u?e.jsx(z,{className:"animate-spin"}):""]}),e.jsx(O,{asChild:!0,children:e.jsx(o,{variant:"destructive",onClick:()=>f(),children:"Discard"})})]})]})]}),e.jsx("div",{className:"flex gap-5 flex-wrap my-5 justify-center md:justify-start",children:t&&t.length>0?t==null?void 0:t.map(s=>e.jsx(w,{slider:s},s.id)):e.jsx("div",{children:"Nothing here"})})]})};export{re as default};
