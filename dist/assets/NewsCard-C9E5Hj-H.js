import{j as e,r as o,t as a}from"./index-vqBwwr_3.js";import{d as z,B as l}from"./index-BTBAqzxt.js";import{D as _,a as $,b as q,c as J,d as K,e as Q,f as V}from"./dialog-BuvkcQoM.js";import{L as b,I as C}from"./input-CyDQ3qk1.js";import{T as X}from"./textarea-Uh4W44PN.js";import{D as Z}from"./createLucideIcon-DFaUqJse.js";import{h as ee,i as se,I as te}from"./mutation-CQJyS7Wi.js";import{A,a as E,b as S,c as T,d as F,e as k,f as L,g as I,h as B}from"./alert-dialog-D7ejkILJ.js";import{a as R}from"./index-C_cT71-S.js";import{n as p}from"./utils-CRrKglZt.js";const ge=({image:f,title:d,body:i,date:u,id:x,views:h,likes:N,edited:w})=>{const r=new Date(u);let m=new Intl.DateTimeFormat(void 0,{month:"short"});return e.jsxs("div",{className:"relative card w-[100%] sm:w-[320px] rounded-lg shadow-lg lg:shadow-md",children:[e.jsxs("div",{className:"absolute top-0 bg-primary w-fit min-w-[47px] h-fit right-10 rounded-bl-lg rounded-br-lg flex flex-col items-center text-xs text-white p-3 z-[1]",children:[e.jsx("span",{children:(r.getDay()+1).toLocaleString().padStart(2,"0")}),e.jsx("span",{children:m.format(r)})]}),e.jsx("img",{src:f,alt:"",className:"h-56 lg:h-44 w-full object-cover rounded-tl-lg rounded-tr-lg"}),e.jsx("div",{className:"absolute inset-0 bg-black/30 h-56 lg:h-44 rounded-lg"}),e.jsxs("div",{className:"p-4 py-10 lg:py-5",children:[e.jsx("h3",{className:"text-lg font-semibold pb-3 ",children:d}),e.jsxs("p",{className:"text-xs min-h-[64px]",children:[i.slice(0,150)," ",i.length>150?"...":""]}),e.jsxs("div",{className:"flex pt-3 mt-4 items-center justify-between",children:[e.jsx("a",{href:`news/${x}`,className:"py-3 px-4 rounded-md hover:underline w-fit gap-3 text-primary text-sm",children:"Read More"}),e.jsxs("div",{className:"interactions flex gap-3",children:[e.jsxs("div",{className:"info flex gap-1 text-xs items-center text-slate-500",children:[e.jsx(R,{className:""}),e.jsx("span",{children:p.format(h||0)})]}),e.jsxs("div",{className:"info flex gap-1 text-xs items-center text-slate-500",children:[e.jsx(z,{className:""}),e.jsx("span",{children:p.format(N||0)})]}),e.jsx("div",{className:"info flex gap-1 text-xs items-center text-slate-500",children:e.jsx("span",{children:w?"edited":""})})]})]})]})]})},je=({image:f,title:d,body:i,date:u,id:x,newsImage:h,views:N,likes:w,publish:r})=>{const m=new Date(u);let O=new Intl.DateTimeFormat(void 0,{month:"short"});const[y,U]=o.useState(d),[g,H]=o.useState(i),[t,M]=o.useState(),[j,c]=o.useState(!1),[G,D]=o.useState(!1),P=ee(),W=se(),Y=async s=>{a.loading("Loading...",{id:"loading-delete-slider"}),c(!0);try{await P.mutateAsync(s),a.dismiss("loading-delete-slider"),a.success("Success",{description:"Slider deleted successfully"})}catch{c(!1)}},v=async s=>{if(g!==""&&g!==""){const n=new FormData;n.append("title",y),n.append("body",g),n.append("publish",s+""),n.append("image",t&&t.length>0?t[0]:""),a.loading("loading...",{id:"loading-edit-news"}),c(!0);try{await W.mutateAsync({id:x,data:n}),D(!1),a.dismiss("loading-edit-news"),a.success("Success",{description:"News modified successfully"}),c(!1)}catch{c(!1)}}else a.warning("Warning",{description:"Fill in all necessary fields"})};return e.jsxs("div",{className:"relative card w-[100%] sm:w-[300px] rounded-lg shadow-lg lg:shadow-md",children:[e.jsxs("div",{className:"absolute top-0 bg-primary w-fit min-w-[40px] h-fit right-10 rounded-bl-lg rounded-br-lg flex flex-col items-center text-xs text-white p-3 z-[1]",children:[e.jsx("span",{children:(m.getDay()+1).toLocaleString().padStart(2,"0")}),e.jsx("span",{children:O.format(m)})]}),e.jsx("img",{src:f,alt:"",className:"h-56 lg:h-44 w-full object-cover rounded-tl-lg rounded-tr-lg"}),e.jsx("div",{className:"absolute inset-0 bg-black/30 h-56 lg:h-44 rounded-lg"}),e.jsxs("div",{className:"p-4 py-10 lg:py-5",children:[e.jsxs("h3",{className:"font-semibold pb-3 ",children:[d.slice(0,50),d.length>50?e.jsx("span",{className:"text-xl",children:"..."}):""]}),e.jsxs("p",{className:"text-xs min-h-[32px] first-letter:capitalize",children:[i.slice(0,75),i.length>75?"...":""]}),e.jsxs("div",{className:"flex pt-3 mt-2 justify-between",children:[e.jsxs("div",{className:"interactions flex gap-3",children:[e.jsxs("div",{className:"info flex gap-1 text-xs items-center text-slate-500",children:[e.jsx(R,{className:""}),e.jsx("span",{children:p.format(N||0)})]}),e.jsxs("div",{className:"info flex gap-1 text-xs items-center text-slate-500",children:[e.jsx(z,{className:""}),e.jsx("span",{children:p.format(w||0)})]}),e.jsx("div",{className:"info flex gap-1 text-xs items-center text-orange-500",children:e.jsx("span",{children:r?"":"draft"})})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsxs(_,{open:G,onOpenChange:D,children:[e.jsx($,{asChild:!0,children:e.jsx(l,{size:"sm",variant:"ghost",className:"text-xs",children:"Edit"})}),e.jsxs(q,{className:"max-h-screen overflow-auto",children:[e.jsxs(J,{children:[e.jsxs(K,{children:["Edit News - ",r?"":"Draft"]}),e.jsx(Q,{children:"Edit a post/news."})]}),e.jsxs("div",{children:[e.jsx(b,{htmlFor:"title",children:"Title"}),e.jsx(C,{id:"title",placeholder:"Enter the title of the news",className:"ring-2 ring-slate-400 py-6 my-2",value:y,onChange:s=>U(s.target.value)}),e.jsx(b,{htmlFor:"body",className:"",children:"Body"}),e.jsx(X,{id:"body",placeholder:"Enter the body of the news",className:"ring-2 ring-slate-400 py-2 my-2",value:g,onChange:s=>H(s.target.value),rows:5}),e.jsxs(b,{htmlFor:"image",children:[t?"Change":"Choose"," News Image"]}),e.jsx(C,{type:"file",className:"ring-1",id:"image",onChange:s=>M(s.target.files),accept:"image/*"}),!t&&h?e.jsx("div",{className:"w-full h-full max-h-[25vh] overflow-clip",children:e.jsx("img",{src:te+h,alt:"",className:"my-3 object-contain w-full h-full object-top"})}):t&&t.length>0?e.jsx("div",{className:"w-full h-full max-h-[25vh] overflow-clip",children:e.jsx("img",{src:URL.createObjectURL(t[0]),alt:"",className:"my-3 object-contain w-full h-full object-top"})}):e.jsx("div",{className:"text-xs p-1",children:"No image detected"})]}),e.jsxs(V,{children:[r?e.jsx(l,{type:"submit",onClick:()=>v(!0),variant:"link",disabled:j,children:"Save"}):e.jsxs(A,{children:[e.jsx(E,{asChild:!0,children:e.jsx(l,{variant:"link",children:"Save"})}),e.jsxs(S,{children:[e.jsxs(T,{children:[e.jsx(F,{children:"Publish post?"}),e.jsx(k,{children:"This post is saved as draft. Do you want to publish it?"})]}),e.jsxs(L,{children:[e.jsx(I,{asChild:!0,children:e.jsx(l,{variant:"link",onClick:()=>v(!0),disabled:j,children:"Yes"})}),e.jsx(B,{asChild:!0,children:e.jsx(l,{onClick:()=>v(!1),variant:"outline",disabled:j,children:"No"})})]})]})]}),e.jsx("div",{children:e.jsx(Z,{asChild:!0,children:e.jsx(l,{variant:"destructive",children:"Discard"})})})]})]})]}),e.jsxs(A,{children:[e.jsx(E,{asChild:!0,children:e.jsx(l,{size:"sm",variant:"destructive",className:"text-xs",children:"Delete"})}),e.jsxs(S,{children:[e.jsxs(T,{children:[e.jsx(F,{children:"Are you absolutely sure?"}),e.jsx(k,{children:"This action cannot be undone. This will permanently delete this record and remove the data from the database"})]}),e.jsxs(L,{children:[e.jsx(B,{children:"Cancel"}),e.jsx(I,{onClick:()=>Y(x),className:"bg-red-500",disabled:j,children:"Continue"})]})]})]})]})]})]})]})};export{je as E,ge as N};
