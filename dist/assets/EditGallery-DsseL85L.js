import{r as t,j as e,t as i}from"./index-BBSTRate.js";import{b as j,Q as y,a as D}from"./QueryError-BINf_RdC.js";import{E as v}from"./EditTitle-ClHkCq97.js";import{D as N,a as b,b as w,c as A,d as C,e as E,f as G,g as L}from"./dialog-KStwYGBp.js";import{B as l}from"./button-C6chzYxY.js";import{B as S}from"./index-A-28yzP7.js";import{I as F}from"./input-C7gvCt6p.js";import{a as I}from"./EditCard-CRDoLznn.js";import{b as T}from"./mutation-BeDhgqjj.js";import{F as B}from"./index-Dh2z8C50.js";import"./utils-rgcHhr6V.js";import"./createLucideIcon-CI2fB3hB.js";import"./x-rsbs1AMH.js";import"./index-DWy4lw-k.js";import"./index-DWYddG2Y.js";import"./alert-dialog-BDAEqnpT.js";import"./label-Bcn1efk1.js";const Z=()=>{const{data:a,isLoading:c,isError:p,refetch:g}=j(),[r,o]=t.useState(),[x,n]=t.useState(!1),[d,m]=t.useState(!1),u=T();if(c)return e.jsx(y,{});if(p)return e.jsx(D,{refetch:g});if(!a)return e.jsx("div",{children:"No data found"});const f=async()=>{if(r){const s=new FormData;Array.from(r).map(h=>{s.append("image",h)}),i.loading("Loading...",{id:"loading-add-gallery"}),m(!0);try{await u.mutateAsync(s),n(!1),i.dismiss("loading-add-gallery"),i.success("Success",{description:`Image${Image.length>0?"s":""} added to gallery successfully`}),o(null)}finally{m(!1)}}else i.warning("Warning",{description:"Select one or more images"})};return e.jsxs("div",{className:"px-5",children:[e.jsx(v,{text:"Edit Gallery"}),e.jsxs(N,{open:x,onOpenChange:n,children:[e.jsx(b,{asChild:!0,children:e.jsxs(l,{size:"sm",className:"bg-primary hover:bg-primary/80 text-sm flex gap-2 py-2 px-4 text-white items-center rounded-md ml-auto md:mr-10",children:["Add ",e.jsx(S,{})]})}),e.jsxs(w,{className:"max-h-screen overflow-auto",children:[e.jsxs(A,{children:[e.jsx(C,{children:"Add image to gallery"}),e.jsx(E,{children:"Add a single or multiple image to gallery."})]}),e.jsxs("div",{children:[e.jsx(F,{type:"file",className:"ring-1 ring-slate-300 my-4",id:"image",multiple:!0,onChange:s=>o(s.target.files),accept:"image/*"}),r&&(r==null?void 0:r.length)>0?e.jsx("div",{className:"w-full h-auto flex gap-2 flex-wrap",children:Array.from(r).map(s=>e.jsx("img",{src:URL.createObjectURL(s),alt:"",className:"object-cover w-[100px] h-[100px] object-top rounded-full ring-2 ring-slate-400"}))}):""]}),e.jsxs(G,{children:[e.jsxs(l,{type:"submit",className:"",onClick:()=>f(),disabled:d,children:["Add ",d?e.jsx(B,{className:"animate-spin"}):""]}),e.jsx(L,{asChild:!0,children:e.jsx(l,{variant:"destructive",children:"Discard"})})]})]})]}),e.jsx("div",{className:"flex gap-2 flex-wrap my-2 justify-center lg:justify-start",children:a&&(a==null?void 0:a.length)>0?a==null?void 0:a.map(s=>e.jsx(I,{gallery:s},s.id)):e.jsx("div",{children:"Nothing here"})})]})};export{Z as default};
