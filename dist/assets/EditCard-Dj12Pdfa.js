import{r as i,j as e,t as l}from"./index-Carh3Eq0.js";import{f as D}from"./index-D_6R6otQ.js";import{f as E}from"./index-B5Qgkzu8.js";import{q as J,r as K,I as w,s as Q,t as V,v as X,w as Y,x as Z,y as ee}from"./mutation-DVVLyiH_.js";import{A,a as T,b as L,c as F,d as k,e as O,f as I,h as R,g as M}from"./alert-dialog-DSsYe-rG.js";import{D as U,a as G,b as B,c as z,d as P,e as W,f as H,g as $}from"./dialog-CasIuZOI.js";import{B as m}from"./index-CDXIzpC9.js";import{L as j}from"./label-B9Iqg--o.js";import{I as u}from"./input-CZDahHuA.js";import{f as se}from"./utils-CRrKglZt.js";const me=({slider:s})=>{const r=J(),[n,b]=i.useState(s.sliderText),[c,y]=i.useState(s.sliderSubText),[a,v]=i.useState(),[p,x]=i.useState(!1),[f,o]=i.useState(!1),g=K(),N=async t=>{l.loading("Loading...",{id:"loading-delete-slider"}),x(!0);try{await r.mutateAsync(t),l.dismiss("loading-delete-slider"),l.success("Success",{description:"Slider deleted successfully"})}finally{x(!1)}},S=async t=>{if(n!==""&&c!==""){const d=new FormData;d.append("title",n),d.append("sub",c),d.append("image",a&&a.length>0?a[0]:""),l.loading("Loading...",{id:"loading-edit-slider"}),x(!0);try{await g.mutateAsync({id:t,data:d}),o(!1),l.dismiss("loading-edit-slider"),l.success("Success",{description:"Modified Successfully"})}finally{x(!1)}}else l.warning("Warning",{description:"Please, fill in all necessary fields"})};return e.jsxs("div",{className:"card shadow-md shadow-black/30 w-[90%] md:w-full md:max-w-[260px] rounded-lg relative",children:[e.jsx("img",{src:`${w}${s.image}`,alt:"",className:"object-cover w-full h-[120px] rounded-tl-lg rounded-tr-lg",referrerPolicy:"no-referrer"}),e.jsxs(U,{open:f,onOpenChange:o,children:[e.jsx(G,{asChild:!0,children:e.jsx(m,{size:"icon",className:"bg-white absolute top-0 -right-1 p-2 rounded-br-xl rounded-tl-xl hover:bg-white",children:e.jsx(D,{className:"w-8 h-8 text-primary cursor-pointer"})})}),e.jsxs(B,{className:"max-h-screen overflow-auto",children:[e.jsxs(z,{children:[e.jsxs(P,{children:["Edit Slider ' ",s.sliderText.slice(0,30)," ",s.sliderText.length>30?"...":""," '"]}),e.jsx(W,{children:"Edit slider image and text."})]}),e.jsxs("div",{children:[e.jsx(j,{htmlFor:"title",children:"Main Text"}),e.jsx(u,{id:"title",placeholder:"Enter main text",className:"ring-2 ring-slate-400 py-6 my-2",value:n,onChange:t=>b(t.target.value)}),e.jsx(j,{htmlFor:"sub",className:"",children:"Sub Text"}),e.jsx(u,{id:"sub",placeholder:"Enter sub text",className:"ring-2 ring-slate-400 py-6 my-2",value:c,onChange:t=>y(t.target.value)}),e.jsx(j,{htmlFor:"image",children:"Change slider image"}),e.jsx(u,{type:"file",className:"py-6",id:"image",onChange:t=>v(t.target.files),accept:"image/*"}),!a&&s.image?e.jsx("div",{className:"w-full h-full max-h-[30vh] overflow-clip",children:e.jsx("img",{src:w+s.image,alt:"",className:"my-3 object-contain w-full h-full object-top"})}):a&&a.length>0?e.jsx("div",{className:"w-full h-full max-h-[30vh] overflow-clip",children:e.jsx("img",{src:URL.createObjectURL(a[0]),alt:"",className:"my-3 object-contain w-full h-full object-top"})}):""]}),e.jsxs(H,{children:[e.jsx(m,{type:"submit",variant:"secondary",onClick:()=>S(s.id),disabled:p,children:"Save"}),e.jsx($,{asChild:!0,children:e.jsx(m,{variant:"destructive",children:"Discard"})})]})]})]}),e.jsxs("div",{className:" h-auto w-full flex p-5 items-end text-slate-700",children:[e.jsxs("h2",{className:"pr-2 w-full text-sm min-h-[38px] ",children:[s.sliderText.slice(0,50),s.sliderText.length>50?"...":""]}),e.jsxs(A,{children:[e.jsx(T,{asChild:!0,children:e.jsx("div",{className:"flex w-fit justify-end text-red-500 bg-transparent",children:e.jsx(E,{className:"text-lg cursor-pointer"})})}),e.jsxs(L,{children:[e.jsxs(F,{children:[e.jsx(k,{children:"Are you absolutely sure?"}),e.jsx(O,{children:"This action cannot be undone. This will permanently delete this record and remove the data from the database"})]}),e.jsxs(I,{children:[e.jsx(R,{children:"Cancel"}),e.jsx(M,{onClick:()=>N(s.id),className:"bg-red-500",disabled:p,children:"Continue"})]})]})]})]})]})},ue=({about:s})=>{const r=Q(),[n,b]=i.useState(s.title),[c,y]=i.useState(s.subTitle),[a,v]=i.useState(),[p,x]=i.useState(!1),f=V(),[o,g]=i.useState(!1),N=async t=>{l.loading("Loading...",{id:"loading-delete-about"}),g(!0);try{await r.mutateAsync(t),l.dismiss("loading-delete-about"),l.success("Success",{description:"About deleted successfully"})}finally{g(!1)}},S=async t=>{if(n!==""&&c!==""){const d=new FormData;d.append("title",n),d.append("sub",c),d.append("image",a&&a.length>0?a[0]:""),l.loading("Loading...",{id:"loading-edit-about"}),g(!0);try{await f.mutateAsync({id:t,data:d}),x(!1),l.dismiss("loading-edit-about")}finally{g(!1)}l.success("Success",{description:"Modified Successfully"})}else l.warning("Warning",{description:"Please, fill in all necessary fields"})};return e.jsxs("div",{className:"card shadow-md shadow-black/30 w-[90%] md:w-full md:max-w-[260px] rounded-lg relative",children:[e.jsx("img",{src:w+s.image,alt:"",className:"object-cover w-full h-[150px] rounded-tl-lg rounded-tr-lg"}),e.jsxs(U,{open:p,onOpenChange:x,children:[e.jsx(G,{asChild:!0,children:e.jsx(m,{size:"icon",className:"bg-white absolute top-0 -right-1 p-2 rounded-br-xl rounded-tl-xl hover:bg-white",children:e.jsx(D,{className:"w-8 h-8 text-primary cursor-pointer"})})}),e.jsxs(B,{className:"max-h-screen overflow-auto",children:[e.jsxs(z,{children:[e.jsxs(P,{children:["Edit About ' ",s.title," ' "]}),e.jsx(W,{children:"Edit about image and text."})]}),e.jsxs("div",{children:[e.jsx(j,{htmlFor:"title",children:"Main Text"}),e.jsx(u,{id:"title",placeholder:"Enter main text",className:"ring-2 ring-slate-400 py-6 my-2",value:n,onChange:t=>b(t.target.value)}),e.jsx(j,{htmlFor:"sub",className:"",children:"Sub Text"}),e.jsx(u,{id:"sub",placeholder:"Enter sub text",className:"ring-2 ring-slate-400 py-6 my-2",value:c,onChange:t=>y(t.target.value)}),e.jsx(j,{htmlFor:"image",children:"Change slider image"}),e.jsx(u,{type:"file",className:"py-6",id:"image",onChange:t=>v(t.target.files),accept:"image/*"}),!a&&s.image?e.jsx("div",{className:"w-full h-full max-h-[30vh] overflow-clip",children:e.jsx("img",{src:w+s.image,alt:"",className:"my-3 object-contain w-full h-full object-top"})}):a&&a.length>0?e.jsx("div",{className:"w-full h-full max-h-[30vh] overflow-clip",children:e.jsx("img",{src:URL.createObjectURL(a[0]),alt:"",className:"my-3 object-contain w-full h-full object-top"})}):""]}),e.jsxs(H,{children:[e.jsx(m,{type:"submit",variant:"secondary",onClick:()=>S(s.id),disabled:o,children:"Save"}),e.jsx($,{asChild:!0,children:e.jsx(m,{variant:"destructive",children:"Discard"})})]})]})]}),e.jsxs("div",{className:" h-auto w-full min-h-[128px] flex p-4 items-e text-slate-700",children:[e.jsxs("h2",{className:"text-sm font-semibold w-full ",children:[s.title,e.jsx("p",{className:"text-xs font-normal pt-3",children:s.subTitle})]}),e.jsx("div",{className:"w-fit text-red-500 -mt-6 bg-transparent flex items-end",children:e.jsxs(A,{children:[e.jsx(T,{asChild:!0,children:e.jsx("div",{className:"flex w-fit justify-end text-red-500 bg-transparent",children:e.jsx(E,{className:"text-lg cursor-pointer"})})}),e.jsxs(L,{children:[e.jsxs(F,{children:[e.jsx(k,{children:"Are you absolutely sure?"}),e.jsx(O,{children:"This action cannot be undone. This will permanently delete this record and remove the data from the database"})]}),e.jsxs(I,{children:[e.jsx(R,{children:"Cancel"}),e.jsx(M,{onClick:()=>N(s.id),className:"bg-red-500",disabled:o,children:"Continue"})]})]})]})})]})]})},xe=({event:s})=>{const r=X(),[n,b]=i.useState(s.title),[c,y]=i.useState(se(s.date)),[a,v]=i.useState(s.body),[p,x]=i.useState(s.location),[f,o]=i.useState(),[g,N]=i.useState(!1),S=Y(),[t,d]=i.useState(!1),q=async h=>{l.loading("Loading...",{id:"loading-delete-event"}),d(!0);try{await r.mutateAsync(h),l.dismiss("loading-delete-event"),l.success("Success",{description:"Event deleted successfully"})}finally{d(!1)}},_=async h=>{if(n!==""&&a!==""&&c!==""){const C=new FormData;C.append("title",n),C.append("body",a),C.append("location",p),C.append("date",c),C.append("image",f&&f.length>0?f[0]:""),l.loading("Loading...",{id:"loading-edit-event"}),d(!0);try{await S.mutateAsync({id:h,data:C}),N(!1),l.dismiss("loading-edit-event")}finally{d(!1)}l.success("Success",{description:"Modified Successfully"})}else l.warning("Warning",{description:"Please, fill in all necessary fields"})};return e.jsxs("div",{className:"card shadow-md shadow-black/30 w-[90%] h-fit md:w-full md:max-w-[260px] rounded-lg relative",children:[e.jsx("img",{src:w+s.image,alt:"",className:"object-cover w-full h-[100px] rounded-tl-lg rounded-tr-lg"}),e.jsxs(U,{open:g,onOpenChange:N,children:[e.jsx(G,{asChild:!0,children:e.jsx(m,{size:"icon",className:"bg-white absolute top-0 -right-1 p-2 rounded-br-xl rounded-tl-xl hover:bg-white",children:e.jsx(D,{className:"w-8 h-8 text-primary cursor-pointer"})})}),e.jsxs(B,{className:"max-h-screen overflow-auto",children:[e.jsxs(z,{children:[e.jsxs(P,{children:["Edit About ' ",s.title," ' "]}),e.jsx(W,{children:"Edit about image and text."})]}),e.jsxs("div",{children:[e.jsx(j,{htmlFor:"title",children:"Title"}),e.jsx(u,{id:"title",placeholder:"Edit Title",className:"ring-1 ring-slate-400 py-6 my-2",value:n,onChange:h=>b(h.target.value)}),e.jsx(j,{htmlFor:"location",children:"Main Text"}),e.jsx(u,{id:"location",placeholder:"Edit Location",className:"ring-1 ring-slate-400 py-6 my-2",value:p,onChange:h=>x(h.target.value)}),e.jsx(j,{htmlFor:"date",className:"",children:"Date"}),e.jsx(u,{id:"date",placeholder:"Edit Body",className:"ring-1 ring-slate-400 py-6 my-2",type:"datetime-local",value:c,onChange:h=>y(h.target.value)}),e.jsx(j,{htmlFor:"body",className:"",children:"Body"}),e.jsx(u,{id:"body",placeholder:"Edit Body",className:"ring-1 ring-slate-400 py-6 my-2",value:a,onChange:h=>v(h.target.value)}),e.jsx(j,{htmlFor:"image",children:"Change slider image"}),e.jsx(u,{type:"file",className:"py-6",id:"image",onChange:h=>o(h.target.files),accept:"image/*"})]}),e.jsxs(H,{children:[e.jsx(m,{type:"submit",variant:"secondary",onClick:()=>_(s.id),disabled:t,children:"Save"}),e.jsx($,{asChild:!0,children:e.jsx(m,{variant:"destructive",children:"Discard"})})]})]})]}),e.jsxs("div",{className:" h-auto w-full flex px-4 py-4  min-h-[120px] text-slate-700",children:[e.jsxs("h2",{className:"text-sm font-semibold w-full ",children:[s.title,e.jsxs("div",{className:"flex justify-between items-end py-3",children:[e.jsx("p",{className:"text-xs font-normal",children:s.body.slice(0,40)}),e.jsx("span",{className:"font-light text-slate-400 text-xs pr-2",children:new Date(s.date)>new Date?new Date(s.date).toDateString():"expired"})]})]}),e.jsx("div",{className:"w-fit text-red-500 -mt-6 bg-transparent flex items-end",children:e.jsxs(A,{children:[e.jsx(T,{asChild:!0,children:e.jsx("div",{className:"flex w-fit justify-end text-red-500 bg-transparent",children:e.jsx(E,{className:"text-lg cursor-pointer"})})}),e.jsxs(L,{children:[e.jsxs(F,{children:[e.jsx(k,{children:"Are you absolutely sure?"}),e.jsx(O,{children:"This action cannot be undone. This will permanently delete this record and remove the data from the database"})]}),e.jsxs(I,{children:[e.jsx(R,{children:"Cancel"}),e.jsx(M,{onClick:()=>q(s.id),className:"bg-red-500",disabled:t,children:"Continue"})]})]})]})})]})]})},ge=({gallery:s})=>{const[r,n]=i.useState(),b=Z(),c=ee(),[y,a]=i.useState(!1),[v,p]=i.useState(!1),x=async o=>{l.loading("Loading...",{id:"loading-delete-gallery"}),a(!1);try{await c.mutateAsync(o),l.dismiss("loading-delete-gallery"),l.success("Success",{description:"Image deleted successfully"})}finally{a(!1)}},f=async o=>{if(r){const g=new FormData;g.append("image",r[0]),l.loading("Loading...",{id:"loading-edit-gallery"}),a(!0);try{await b.mutateAsync({id:o,data:g}),p(!1),l.dismiss("loading-edit-gallery"),l.success("Success",{description:"Modified successfully"}),n(null)}finally{a(!1)}}else l.info("Info",{description:"No changes were made"})};return e.jsxs("div",{className:"card shadow-md shadow-black/30 h-[150px]  w-[150px] md:h-[180px] my-5 md:w-[180px] rounded-full relative group",children:[e.jsx("img",{src:w+s.image,alt:"",className:"object-cover object-top w-full h-full rounded-full"}),e.jsxs("div",{className:"absolute inset-0 top-0 group-hover:opacity-100 flex opacity-0  left-0  bg-black/20 backdrop-blur-sm justify-center items-center gap-3 rounded-full",style:{transition:"all .1s ease-in-out"},children:[e.jsxs(U,{open:v,onOpenChange:p,children:[e.jsx(G,{asChild:!0,children:e.jsx(m,{className:"flex p-[0.7rem] rounded-full shadow-md cursor-pointer bg-slate-300 text-black hover:bg-slate-300",size:"icon",children:e.jsx(D,{})})}),e.jsxs(B,{className:"max-h-screen overflow-auto",children:[e.jsxs(z,{children:[e.jsx(P,{children:"Edit Gallery"}),e.jsx(W,{children:"Edit gallery image."})]}),e.jsxs("div",{children:[e.jsx(u,{type:"file",className:"py-2",id:"image",onChange:o=>n(o.target.files),accept:"image/*"}),!r&&s.image?e.jsx("div",{className:"w-full h-full max-h-[45vh] overflow-clip",children:e.jsx("img",{src:w+s.image,alt:"",className:"my-3 object-contain w-full h-full"})}):r&&r.length>0?e.jsx("div",{className:"w-full h-full max-h-[35vh] overflow-clip",children:e.jsx("img",{src:URL.createObjectURL(r[0]),alt:"",className:"my-3 object-cover w-100 h-100 object-top",onClick:()=>window.location.href=URL.createObjectURL(r[0])})}):""]}),e.jsxs(H,{children:[e.jsx(m,{type:"submit",variant:"secondary",onClick:()=>f(s.id),disabled:y,children:"Save"}),e.jsx($,{asChild:!0,children:e.jsx(m,{variant:"destructive",children:"Discard"})})]})]})]}),e.jsxs(A,{children:[e.jsx(T,{asChild:!0,children:e.jsx("div",{className:"",children:e.jsx(m,{variant:"destructive",size:"icon",className:"text-xs rounded-full p-[0.7rem] shadow-md",asChild:!0,children:e.jsx(E,{className:"cursor-pointer"})})})}),e.jsxs(L,{children:[e.jsxs(F,{children:[e.jsx(k,{children:"Are you absolutely sure?"}),e.jsx(O,{children:"This action cannot be undone. This will permanently delete this record and remove the data from the database"})]}),e.jsxs(I,{children:[e.jsx(R,{children:"Cancel"}),e.jsx(M,{onClick:()=>x(s.id),className:"bg-red-500",disabled:y,children:"Continue"})]})]})]})]})]})};export{ue as E,ge as a,xe as b,me as c};
