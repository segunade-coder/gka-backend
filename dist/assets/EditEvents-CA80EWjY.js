import{r as s,j as e,t as c}from"./index-CX7QPJWi.js";import{E as S}from"./EditTitle-BVGnTME3.js";import{D as L,a as T,b as B,c as A,d as I,e as k,f as Q}from"./dialog-DrKEgrJ3.js";import{B as m}from"./button-Djh4qDtK.js";import{B as O}from"./index-CnUwcH3o.js";import{L as i,I as n}from"./input-ClgkosYZ.js";import{T as z}from"./textarea-BHd6XDA1.js";import{f as H,Q as P,a as R}from"./QueryError-D6izbPnr.js";import{g as W}from"./mutation-CFAGO9ym.js";import{F as q}from"./index-q-5cq2_Z.js";import{D as G}from"./createLucideIcon-nSWrYmZ4.js";import{b as J}from"./EditCard-zPBbxTqV.js";import"./utils-CRrKglZt.js";import"./x-C7Na-r05.js";import"./index-CewGFZMT.js";import"./index-epaJ6MaG.js";import"./alert-dialog-DeAQp8BO.js";import"./label-CsoZxuQ2.js";const de=()=>{const{data:a,isLoading:v,isError:E,refetch:D}=H(),[o,p]=s.useState(""),[l,h]=s.useState(""),[g,C]=s.useState(""),[r,u]=s.useState(),[x,f]=s.useState(!1),[d,j]=s.useState(""),[b,y]=s.useState(!1),N=W();if(v)return e.jsx(P,{});if(E)return e.jsx(R,{refetch:D});const F=async()=>{if(o!==""&&l!==""&&d!==""){const t=new FormData;t.append("title",o),t.append("body",l),t.append("date",d),t.append("location",g),t.append("image",r&&r.length>0?r[0]:""),c.loading("loading...",{id:"loading-add-event"}),f(!0);try{await N.mutateAsync(t),y(!1),c.success("Success",{description:"Event added successfully"}),w()}finally{f(!1)}}else c.warning("Warning",{description:"Fill in all necessary fields"})},w=()=>{p(""),h(""),j(""),u(null)};return e.jsxs("div",{className:"px-5",children:[e.jsx(S,{text:"Edit Events"}),e.jsxs(L,{open:b,onOpenChange:y,children:[e.jsx(T,{asChild:!0,children:e.jsxs(m,{size:"sm",className:"bg-primary hover:bg-primary/80 text-sm flex gap-2 py-2 px-4 text-white items-center rounded-md ml-auto md:mr-10",children:["Add ",e.jsx(O,{})]})}),e.jsxs(B,{className:"min-h-screen sm:min-h-fit max-h-screen overflow-auto",children:[e.jsxs(A,{children:[e.jsx(I,{children:"Add an Event"}),e.jsx(k,{children:"Add an event that will occur in the future"})]}),e.jsxs("div",{children:[e.jsx(i,{htmlFor:"title",children:"Title"}),e.jsx(n,{id:"title",placeholder:"Enter the title of the event",className:"ring-1 ring-slate-400 py-6 my-2",value:o,onChange:t=>p(t.target.value)}),e.jsx(i,{htmlFor:"location",children:"Location"}),e.jsx(n,{id:"location",placeholder:"Enter the location of the event",className:"ring-1 ring-slate-400 py-6 my-2",value:g,onChange:t=>C(t.target.value)}),e.jsx(i,{htmlFor:"date",className:"block",children:"Date"}),e.jsx(n,{id:"date",placeholder:"Enter the date of the event",className:"ring-1 ring-slate-400 py-6 my-2",value:d,onChange:t=>j(t.target.value),type:"datetime-local"}),e.jsx(i,{htmlFor:"body",className:"block",children:"Body"}),e.jsx(z,{id:"body",placeholder:"Enter the body of the news",className:"ring-1 ring-slate-400 py-2 my-2",value:l,onChange:t=>h(t.target.value),rows:2}),e.jsxs(i,{htmlFor:"image",children:[r?"Change":"Choose"," News Image"]}),e.jsx(n,{type:"file",className:"ring-1",id:"image",onChange:t=>u(t.target.files),accept:"image/*"})]}),e.jsxs(Q,{children:[e.jsxs(m,{type:"submit",onClick:()=>F(),disabled:x,children:["Save ",x?e.jsx(q,{className:"animate-spin"}):""]}),e.jsx(G,{asChild:!0,children:e.jsx(m,{variant:"destructive",children:"Cancel"})})]})]})]}),e.jsx("div",{className:"flex gap-5 flex-wrap my-5 justify-center sm:justify-start",children:a&&(a==null?void 0:a.length)>0?a==null?void 0:a.map(t=>e.jsx(J,{event:t},t.id)):e.jsx("div",{children:"Nothing here"})})]})};export{de as default};
