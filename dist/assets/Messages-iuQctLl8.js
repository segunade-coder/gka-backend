import{j as e,r as i}from"./index-ByHRS0xJ.js";import{E as c}from"./EditTitle-BuQtPKBZ.js";import{g as n,Q as p,a as f}from"./QueryError-FtU77oJ7.js";import{T as u,a as g,b as l,c as m}from"./tabs-BsPsD8qn.js";import{E as j,a as h}from"./TestimonyCard-C6s7rbM8.js";import"./mutation-BZIcoOZ8.js";import"./utils-CRrKglZt.js";import"./index-bSZwzxjY.js";import"./index-AIJgyYnN.js";import"./createLucideIcon-D8ENqwiY.js";import"./card-Bw8-RrvK.js";import"./alert-dialog-BuwRlA1z.js";import"./index-DCGt0Eyp.js";import"./user-BoYz3NDr.js";const A=()=>{const{data:a,isLoading:o,isError:x,refetch:d}=n();if(o)return e.jsx(p,{});if(x)return e.jsx(f,{refetch:d});if(!a)return;const{messages:r,reviews:t}=a;return e.jsxs("div",{className:"px-5",children:[e.jsx(c,{text:"View Messages"}),e.jsx("div",{className:"flex justify-center w-full py-5",children:e.jsxs(u,{defaultValue:"messages",className:"w-full",children:[e.jsxs(g,{className:"grid grid-cols-2 mx-auto w-full md:w-[400px]",children:[e.jsx(l,{value:"messages",children:"Messages"}),e.jsx(l,{value:"review",children:"Reviews"})]}),e.jsx(m,{value:"messages",children:e.jsx("div",{className:"flex gap-3 flex-wrap flex-row py-5",children:r.length>0?r.map(s=>i.createElement(j,{...s,key:s.id})):e.jsx("div",{className:"text-slate-400 text-center w-full py-5",children:"No Messages Available"})})}),e.jsx(m,{value:"review",children:e.jsx("div",{className:"flex gap-3 flex-wrap flex-row py-5",children:t.length>0?t.map(s=>i.createElement(h,{...s,key:s.id})):e.jsx("div",{className:"text-slate-400 text-center w-full py-5",children:"No Reviews yet"})})})]})})]})};export{A as default};
