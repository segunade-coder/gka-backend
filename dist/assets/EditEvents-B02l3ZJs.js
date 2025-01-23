import{r as s,j as e,t as r}from"./index-Do3v1RCK.js";import{E as w}from"./EditTitle-D1bJ3hDb.js";import{D as L,a as T,b as A,c as B,d as I,e as k,f as Q}from"./dialog-CFm03rvj.js";import{B as m,a as O}from"./index-D2jhA7BB.js";import{L as i,I as o}from"./input-BXHdkGfH.js";import{T as z}from"./textarea-Wcunlpea.js";import{f as H,Q as P,a as R}from"./QueryError-Be1VpnAP.js";import{g as W}from"./mutation-BQvNkXJi.js";import{F as q}from"./index-J80k2M7W.js";import{D as G}from"./x-B9PJrrXP.js";import{b as J}from"./EditCard-CXSp5V-g.js";import"./utils-CRrKglZt.js";import"./index-B3yQjhpz.js";import"./api-BEGC1kzT.js";import"./createLucideIcon-DPBd83TP.js";import"./index-0yK40Eid.js";import"./index-DKaOkt3o.js";import"./alert-dialog-BnHdpnfh.js";import"./label-BP-jydZw.js";const ce=()=>{const{data:a,isLoading:v,isError:E,refetch:D}=H(),[l,p]=s.useState(""),[d,h]=s.useState(""),[g,C]=s.useState(""),[n,u]=s.useState(),[x,f]=s.useState(!1),[c,j]=s.useState(""),[b,y]=s.useState(!1),N=W();if(v)return e.jsx(P,{});if(E)return e.jsx(R,{refetch:D});const F=async()=>{if(l!==""&&d!==""&&c!==""){const t=new FormData;t.append("title",l),t.append("body",d),t.append("date",c),t.append("location",g),t.append("image",n&&n.length>0?n[0]:""),r.loading("loading...",{id:"loading-add-event"}),f(!0);try{await N.mutateAsync(t),y(!1),r.success("Success",{description:"Event added successfully"}),S()}finally{r.dismiss("loading-add-event"),f(!1)}}else r.warning("Warning",{description:"Fill in all necessary fields"})},S=()=>{p(""),h(""),j(""),u(null)};return e.jsxs("div",{className:"px-5",children:[e.jsx(w,{text:"Edit Events"}),e.jsxs(L,{open:b,onOpenChange:y,children:[e.jsx(T,{asChild:!0,children:e.jsxs(m,{size:"sm",className:"bg-primary hover:bg-primary/80 text-sm flex gap-2 py-2 px-4 text-white items-center rounded-md ml-auto md:mr-10",children:["Add ",e.jsx(O,{})]})}),e.jsxs(A,{className:"min-h-screen sm:min-h-fit",children:[e.jsxs(B,{children:[e.jsx(I,{children:"Add an Event"}),e.jsx(k,{children:"Add an event that will occur in the future"})]}),e.jsxs("div",{children:[e.jsx(i,{htmlFor:"title",children:"Title"}),e.jsx(o,{id:"title",placeholder:"Enter the title of the event",className:"ring-1 ring-slate-400 py-6 my-2",value:l,onChange:t=>p(t.target.value)}),e.jsx(i,{htmlFor:"location",children:"Location"}),e.jsx(o,{id:"location",placeholder:"Enter the location of the event",className:"ring-1 ring-slate-400 py-6 my-2",value:g,onChange:t=>C(t.target.value)}),e.jsx(i,{htmlFor:"date",className:"block",children:"Date"}),e.jsx(o,{id:"date",placeholder:"Enter the date of the event",className:"ring-1 ring-slate-400 py-6 my-2",value:c,onChange:t=>j(t.target.value),type:"datetime-local"}),e.jsx(i,{htmlFor:"body",className:"block",children:"Body"}),e.jsx(z,{id:"body",placeholder:"Enter the body of the news",className:"ring-1 ring-slate-400 py-2 my-2",value:d,onChange:t=>h(t.target.value),rows:2}),e.jsxs(i,{htmlFor:"image",children:[n?"Change":"Choose"," News Image"]}),e.jsx(o,{type:"file",className:"ring-1",id:"image",onChange:t=>u(t.target.files),accept:"image/*"})]}),e.jsxs(Q,{children:[e.jsxs(m,{type:"submit",onClick:()=>F(),disabled:x,children:["Save ",x?e.jsx(q,{className:"animate-spin"}):""]}),e.jsx(G,{asChild:!0,children:e.jsx(m,{variant:"destructive",children:"Cancel"})})]})]})]}),e.jsx("div",{className:"flex gap-5 flex-wrap my-5 justify-center md:justify-start",children:a&&(a==null?void 0:a.length)>0?a==null?void 0:a.map(t=>e.jsx(J,{event:t},t.id)):e.jsx("div",{children:"Nothing here"})})]})};export{ce as default};
