import{j as s,r as c}from"./index-C-fJmuxi.js";import{E as d}from"./EditTitle-Cm_wRm78.js";import{g as n,Q as p,a as u}from"./QueryError-DHesN8Sa.js";import{T as f,a as g,b as i,c as t}from"./tabs-CscDN07T.js";import{E as j}from"./TestimonyCard-DZUTYIzc.js";import"./api-BEGC1kzT.js";import"./index-Cj53eeYN.js";import"./utils-CRrKglZt.js";import"./index-dBGPTHLA.js";import"./createLucideIcon-DD5OjBBs.js";import"./card-qwyQpANz.js";import"./user-uJSFQg-o.js";const R=()=>{const{data:e,isLoading:l,isError:o,refetch:m}=n();if(l)return s.jsx(p,{});if(o)return s.jsx(u,{refetch:m});if(!e)return;const{messages:x,reviews:r}=e;return console.log(x,r),s.jsxs("div",{className:"px-5",children:[s.jsx(d,{text:"View Messages"}),s.jsx("div",{className:"flex justify-center w-full py-5",children:s.jsxs(f,{defaultValue:"messages",className:"w-full",children:[s.jsxs(g,{className:"grid grid-cols-2 mx-auto w-full md:w-[400px]",children:[s.jsx(i,{value:"messages",children:"Messages"}),s.jsx(i,{value:"review",children:"Reviews"})]}),s.jsx(t,{value:"messages"}),s.jsx(t,{value:"review",children:s.jsx("div",{className:"flex gap-3 flex-wrap flex-row py-5",children:r.map(a=>c.createElement(j,{...a,key:a.id}))})})]})})]})};export{R as default};
