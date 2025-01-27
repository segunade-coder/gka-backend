import{r as p,j as e,t as s}from"./index-CqB5SdoF.js";import{C as h,a as u,b as g,c as j,d as f,e as w}from"./card-DjqBInF4.js";import{A as y,a as N,b as C,c as v,d as D,e as b,f as A,h as T,g as S}from"./alert-dialog-DEX_zow3.js";import{B as x}from"./button-CdFIPDxQ.js";import{l as E,m as F,n as L}from"./mutation-B4N89SGw.js";import{F as m}from"./index-CE504BZ6.js";import{U as R}from"./user-ixF3tilY.js";const I=({fullname:a,rank:t,review:i})=>e.jsxs(h,{className:"w-full sm:w-[300px] lg:w-[350px] md:shadow-2xl rounded-2xl bg-slate-50 hover:shadow-xl md:shadow-slate-400/30",children:[e.jsxs(u,{children:[e.jsxs(g,{className:"flex gap-5 items-center text-slate-600",children:[e.jsx(R,{className:"text-2xl fill-primary stroke-primary",size:30}),a]}),e.jsx(j,{className:"",children:t})]}),e.jsx(f,{children:e.jsx("div",{className:"text-xs text-slate-700",children:i})})]}),J=({id:a,fullname:t,email:i,message:o})=>{const d=E(),[c,n]=p.useState(!1),l=async()=>{try{n(!0),s.loading("Loading...",{id:"loading-delete-message"}),await d.mutateAsync(a),n(!1),s.dismiss("loading-delete-message"),s.success("Deleted Successfully")}finally{n(!1)}};return e.jsxs(h,{className:"flex flex-col w-full sm:w-[300px] lg:w-[320px] md:shadow-lg rounded-md bg-slate-50",children:[e.jsxs(u,{children:[e.jsx(g,{className:"flex gap-5 items-center text-slate-600 text-lg",children:t}),e.jsx(j,{className:"",children:i})]}),e.jsx(f,{className:"flex-1",children:e.jsx("div",{className:"text-xs text-slate-700",children:o})}),e.jsx(w,{className:"gap-3",children:e.jsxs(y,{children:[e.jsx(N,{asChild:!0,children:e.jsx(x,{variant:"destructive",size:"sm",children:"Delete"})}),e.jsxs(C,{children:[e.jsxs(v,{children:[e.jsx(D,{children:"Are you absolutely sure?"}),e.jsx(b,{children:"This action cannot be undone. This will permanently delete this record and remove the data from the database"})]}),e.jsxs(A,{children:[e.jsx(T,{children:"Cancel"}),e.jsx(S,{onClick:()=>l(),className:"",disabled:c,children:c?e.jsx(m,{className:"animate-spin"}):"Continue"})]})]})]})})]})},K=({id:a,fullname:t,rank:i,review:o,publish:d})=>{const c=F(),n=L(),[l,r]=p.useState(!1),k=async()=>{r(!0),s.loading("Loading...",{id:"loading-edit-status"});try{await n.mutateAsync({id:a,publish:!d}),s.dismiss("loading-edit-status"),s.success("Modified Successfully")}finally{r(!1)}},z=async()=>{r(!0),s.loading("Loading...",{id:"loading-delete-review"});try{await c.mutateAsync(a),r(!1),s.dismiss("loading-delete-review"),s.success("Deleted Successfully")}finally{r(!1)}};return e.jsxs(h,{className:"flex flex-col w-full sm:w-[240px] lg:w-[320px] md:shadow-2xl rounded-2xl bg-slate-50 md:shadow-slate-400/30",children:[e.jsxs(u,{children:[e.jsxs(g,{className:"flex gap-5 items-center text-slate-600 text-lg",children:[e.jsx(R,{className:"text-2xl fill-primary stroke-primary",size:30}),t]}),e.jsx(j,{className:"",children:i})]}),e.jsx(f,{className:"flex-1",children:e.jsx("div",{className:"text-xs text-slate-700",children:o})}),e.jsxs(w,{className:"gap-3",children:[e.jsxs(y,{children:[e.jsx(N,{asChild:!0,children:e.jsx(x,{variant:"destructive",size:"sm",className:"w-full",children:"Delete"})}),e.jsxs(C,{children:[e.jsxs(v,{children:[e.jsx(D,{children:"Are you absolutely sure?"}),e.jsx(b,{children:"This action cannot be undone. This will permanently delete this record and remove the data from the database"})]}),e.jsxs(A,{children:[e.jsx(T,{children:"Cancel"}),e.jsx(S,{onClick:()=>z(),disabled:l,children:l?e.jsx(m,{className:"animate-spin"}):"Continue"})]})]})]}),e.jsx(x,{variant:"outline",size:"sm",onClick:()=>k(),className:"w-full",disabled:l,children:d?"Unpublish":l?e.jsx(m,{className:"animate-spin"}):"Publish"})]})]})};export{J as E,I as T,K as a};
