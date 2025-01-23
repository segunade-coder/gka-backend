import{r as s,j as e,t as c}from"./index-Carh3Eq0.js";import{E as S}from"./EditTitle-BjrhZQUD.js";import{D as L,a as T,b as A,c as B,d as I,e as k,f as Q}from"./dialog-CasIuZOI.js";import{B as m,a as O}from"./index-CDXIzpC9.js";import{L as i,I as r}from"./input-CZDahHuA.js";import{T as z}from"./textarea-CKI0N5kf.js";import{f as H,Q as P,a as R}from"./QueryError-CYKMtzpB.js";import{g as W}from"./mutation-DVVLyiH_.js";import{F as q}from"./index-B04UzMNR.js";import{D as G}from"./createLucideIcon-C-oAn_j_.js";import{b as J}from"./EditCard-Dj12Pdfa.js";import"./utils-CRrKglZt.js";import"./x-JdizwwtO.js";import"./index-D_6R6otQ.js";import"./index-B5Qgkzu8.js";import"./alert-dialog-DSsYe-rG.js";import"./label-B9Iqg--o.js";const le=()=>{const{data:a,isLoading:v,isError:E,refetch:D}=H(),[o,p]=s.useState(""),[l,h]=s.useState(""),[g,C]=s.useState(""),[n,u]=s.useState(),[x,f]=s.useState(!1),[d,j]=s.useState(""),[b,y]=s.useState(!1),N=W();if(v)return e.jsx(P,{});if(E)return e.jsx(R,{refetch:D});const F=async()=>{if(o!==""&&l!==""&&d!==""){const t=new FormData;t.append("title",o),t.append("body",l),t.append("date",d),t.append("location",g),t.append("image",n&&n.length>0?n[0]:""),c.loading("loading...",{id:"loading-add-event"}),f(!0);try{await N.mutateAsync(t),y(!1),c.success("Success",{description:"Event added successfully"}),w()}finally{f(!1)}}else c.warning("Warning",{description:"Fill in all necessary fields"})},w=()=>{p(""),h(""),j(""),u(null)};return e.jsxs("div",{className:"px-5",children:[e.jsx(S,{text:"Edit Events"}),e.jsxs(L,{open:b,onOpenChange:y,children:[e.jsx(T,{asChild:!0,children:e.jsxs(m,{size:"sm",className:"bg-primary hover:bg-primary/80 text-sm flex gap-2 py-2 px-4 text-white items-center rounded-md ml-auto md:mr-10",children:["Add ",e.jsx(O,{})]})}),e.jsxs(A,{className:"min-h-screen sm:min-h-fit max-h-screen overflow-auto",children:[e.jsxs(B,{children:[e.jsx(I,{children:"Add an Event"}),e.jsx(k,{children:"Add an event that will occur in the future"})]}),e.jsxs("div",{children:[e.jsx(i,{htmlFor:"title",children:"Title"}),e.jsx(r,{id:"title",placeholder:"Enter the title of the event",className:"ring-1 ring-slate-400 py-6 my-2",value:o,onChange:t=>p(t.target.value)}),e.jsx(i,{htmlFor:"location",children:"Location"}),e.jsx(r,{id:"location",placeholder:"Enter the location of the event",className:"ring-1 ring-slate-400 py-6 my-2",value:g,onChange:t=>C(t.target.value)}),e.jsx(i,{htmlFor:"date",className:"block",children:"Date"}),e.jsx(r,{id:"date",placeholder:"Enter the date of the event",className:"ring-1 ring-slate-400 py-6 my-2",value:d,onChange:t=>j(t.target.value),type:"datetime-local"}),e.jsx(i,{htmlFor:"body",className:"block",children:"Body"}),e.jsx(z,{id:"body",placeholder:"Enter the body of the news",className:"ring-1 ring-slate-400 py-2 my-2",value:l,onChange:t=>h(t.target.value),rows:2}),e.jsxs(i,{htmlFor:"image",children:[n?"Change":"Choose"," News Image"]}),e.jsx(r,{type:"file",className:"ring-1",id:"image",onChange:t=>u(t.target.files),accept:"image/*"})]}),e.jsxs(Q,{children:[e.jsxs(m,{type:"submit",onClick:()=>F(),disabled:x,children:["Save ",x?e.jsx(q,{className:"animate-spin"}):""]}),e.jsx(G,{asChild:!0,children:e.jsx(m,{variant:"destructive",children:"Cancel"})})]})]})]}),e.jsx("div",{className:"flex gap-5 flex-wrap my-5 justify-center md:justify-start",children:a&&(a==null?void 0:a.length)>0?a==null?void 0:a.map(t=>e.jsx(J,{event:t},t.id)):e.jsx("div",{children:"Nothing here"})})]})};export{le as default};
