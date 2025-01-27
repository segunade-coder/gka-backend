import{r as i,j as e,t as r}from"./index-BSQJIQ47.js";import{u as D,Q as C,a as E}from"./QueryError-CXeM0dY-.js";import{E as w}from"./EditCard-CJDjOUeN.js";import{E as S}from"./EditTitle-BkYFe19e.js";import{D as F,a as L,b as T,c as B,d as I,e as O,f as Q,g as R}from"./dialog-DxFT7a94.js";import{B as n}from"./button-BXngzSI0.js";import{B as P}from"./index-D140erx_.js";import{L as h}from"./label-BwvlVhlW.js";import{I as d}from"./input-BCgiNauy.js";import{a as U}from"./mutation-rRyMcTog.js";import{F as k}from"./index-DyrEEZFl.js";import"./index-Cae1juWO.js";import"./index-D7K4wMDE.js";import"./alert-dialog-Boy9cJYn.js";import"./createLucideIcon-CRLaoM1m.js";import"./utils-CRrKglZt.js";import"./x-DatpkHFH.js";const te=()=>{const{data:a,isLoading:f,isError:j,refetch:b}=D(),[l,c]=i.useState(""),[o,m]=i.useState(""),[t,u]=i.useState(),[y,p]=i.useState(!1),v=U(),[g,x]=i.useState(!1);if(f)return e.jsx(C,{});if(j)return e.jsx(E,{refetch:b});const A=async()=>{if(l!==""&&o!==""&&t){const s=new FormData;s.append("title",l),s.append("sub",o),s.append("image",t[0]),r.loading("loading...",{id:"loading-add-about"}),x(!0);try{await v.mutateAsync(s),p(!1),r.dismiss("loading-add-about"),r.success("Success",{description:"About added successfully"}),N()}finally{x(!1)}}else r.warning("Warning",{description:"Please, fill in all necessary fields"})},N=()=>{c(""),m(""),u(null)};return e.jsxs("div",{className:"px-5",children:[e.jsx(S,{text:"Edit About page"}),e.jsxs(F,{open:y,onOpenChange:p,children:[e.jsx(L,{asChild:!0,children:e.jsxs(n,{size:"sm",className:"bg-primary hover:bg-primary/80 text-sm flex gap-2 py-2 px-4 text-white items-center rounded-md ml-auto md:mr-10",children:["Add ",e.jsx(P,{})]})}),e.jsxs(T,{className:"max-h-screen overflow-auto",children:[e.jsxs(B,{children:[e.jsx(I,{children:"Add About Card"}),e.jsx(O,{children:"Add an about card to the website."})]}),e.jsxs("div",{className:"",children:[e.jsx(h,{htmlFor:"title",children:"Title"}),e.jsx(d,{id:"title",placeholder:"Enter About title",className:"ring-2 ring-slate-400 py-6 my-2",value:l,onChange:s=>c(s.target.value)}),e.jsx(h,{htmlFor:"sub",className:"",children:"Sub Text"}),e.jsx(d,{id:"sub",placeholder:"Enter Sub Text",className:"ring-2 ring-slate-400 py-6 my-2",value:o,onChange:s=>m(s.target.value)}),e.jsx(d,{type:"file",className:"ring-1 ring-slate-300 my-4",id:"image",onChange:s=>u(s.target.files),accept:"image/*"}),t&&(t==null?void 0:t.length)>0?e.jsx("div",{className:"w-full h-full max-h-[30vh] overflow-clip",children:e.jsx("img",{src:URL.createObjectURL(t[0]),alt:"",className:"w-full object-contain object-top h-full max-h-[30vh]"})}):""]}),e.jsxs(Q,{className:"gap-2",children:[e.jsxs(n,{type:"submit",className:"",onClick:()=>A(),disabled:g,children:["Add ",g?e.jsx(k,{className:"animate-spin"}):""]}),e.jsx(R,{asChild:!0,children:e.jsx(n,{variant:"destructive",children:"Discard"})})]})]})]}),e.jsx("div",{className:"flex gap-3 flex-wrap my-5 justify-center sm:justify-start",children:a&&(a==null?void 0:a.length)>0?a==null?void 0:a.map(s=>e.jsx(w,{about:s},s.id)):e.jsx("div",{children:"Nothing here"})})]})};export{te as default};
