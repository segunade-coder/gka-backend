import{r as s,j as e,t as r}from"./index-TnTDpqy4.js";import{E as S}from"./EditTitle-oV89VDYS.js";import{D as L,a as T,b as A,c as B,d as I,e as Q,f as k}from"./dialog-C39Y4eo2.js";import{B as m,a as O}from"./index-ye2DFzoX.js";import{L as i,I as o}from"./input-IbiUdbIM.js";import{T as H}from"./textarea-CZIzAeAe.js";import{Q as P}from"./QueryError-DYvvzKg8.js";import{f as R,Q as W}from"./QueryLoader-DhoxU_H3.js";import{h as q}from"./mutation-DY6GVtB-.js";import{F as z}from"./index-eFnFOOut.js";import{D as G}from"./x-CwLCEG6Y.js";import{c as J}from"./EditCard-BDojTNlG.js";import"./utils-CRrKglZt.js";import"./index-B_X_e_ga.js";import"./api-xF4wnrL7.js";import"./createLucideIcon-Dx379Zb9.js";import"./index-D7mV-95d.js";import"./index-DbGGZBjq.js";import"./alert-dialog-BkM1-_Cf.js";import"./label-DBLE-kze.js";const me=()=>{const{data:a,isLoading:y,isError:E,refetch:D}=R(),[l,p]=s.useState(""),[d,h]=s.useState(""),[g,C]=s.useState(""),[n,x]=s.useState(),[u,f]=s.useState(!1),[c,j]=s.useState(""),[N,v]=s.useState(!1),b=q();if(y)return e.jsx(W,{});if(E)return e.jsx(P,{refetch:D});const F=async()=>{if(l!==""&&d!==""&&c!==""){const t=new FormData;t.append("title",l),t.append("body",d),t.append("date",c),t.append("location",g),t.append("image",n&&n.length>0?n[0]:""),r.loading("loading...",{id:"loading-add-event"}),f(!0);try{await b.mutateAsync(t),v(!1),r.success("Success",{description:"Event added successfully"}),w()}finally{r.dismiss("loading-add-event"),f(!1)}}else r.warning("Warning",{description:"Fill in all necessary fields"})},w=()=>{p(""),h(""),j(""),x(null)};return e.jsxs("div",{className:"px-5",children:[e.jsx(S,{text:"Edit Events"}),e.jsxs(L,{open:N,onOpenChange:v,children:[e.jsx(T,{asChild:!0,children:e.jsxs(m,{variant:"default",className:"text-sm hover:bg-primary bg-primary hover:text-white text-white flex gap-2 py-2 px-4 items-center rounded-md ml-auto mr-5 md:mr-10",children:["Add Event",e.jsx(O,{})]})}),e.jsxs(A,{className:"min-h-screen sm:min-h-fit",children:[e.jsxs(B,{children:[e.jsx(I,{children:"Add an Event"}),e.jsx(Q,{children:"Add an event that will occur in the future"})]}),e.jsxs("div",{children:[e.jsx(i,{htmlFor:"title",children:"Title"}),e.jsx(o,{id:"title",placeholder:"Enter the title of the event",className:"ring-1 ring-slate-400 py-6 my-2",value:l,onChange:t=>p(t.target.value)}),e.jsx(i,{htmlFor:"location",children:"Location"}),e.jsx(o,{id:"location",placeholder:"Enter the location of the event",className:"ring-1 ring-slate-400 py-6 my-2",value:g,onChange:t=>C(t.target.value)}),e.jsx(i,{htmlFor:"date",className:"block",children:"Date"}),e.jsx(o,{id:"date",placeholder:"Enter the date of the event",className:"ring-1 ring-slate-400 py-6 my-2",value:c,onChange:t=>j(t.target.value),type:"datetime-local"}),e.jsx(i,{htmlFor:"body",className:"block",children:"Body"}),e.jsx(H,{id:"body",placeholder:"Enter the body of the news",className:"ring-1 ring-slate-400 py-2 my-2",value:d,onChange:t=>h(t.target.value),rows:2}),e.jsxs(i,{htmlFor:"image",children:[n?"Change":"Choose"," News Image"]}),e.jsx(o,{type:"file",className:"ring-1",id:"image",onChange:t=>x(t.target.files),accept:"image/*"})]}),e.jsxs(k,{children:[e.jsxs(m,{type:"submit",onClick:()=>F(),disabled:u,children:["Save ",u?e.jsx(z,{className:"animate-spin"}):""]}),e.jsx(G,{asChild:!0,children:e.jsx(m,{variant:"destructive",children:"Cancel"})})]})]})]}),e.jsx("div",{className:"flex gap-5 flex-wrap my-4",children:a&&(a==null?void 0:a.length)>0?a==null?void 0:a.map(t=>e.jsx(J,{event:t},t.id)):e.jsx("div",{children:"Nothing here"})})]})};export{me as default};
