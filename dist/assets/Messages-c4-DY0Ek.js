import{j as s,r as c}from"./index-Bfq0amQ2.js";import{E as d}from"./EditTitle-BhDrdm1h.js";import{g as n,Q as p,a as u}from"./QueryError-Dfo3VzMM.js";import{T as f,a as g,b as i,c as t}from"./tabs-CH3sEB_I.js";import{E as j}from"./TestimonyCard-BD4dWmJB.js";import"./api-BEGC1kzT.js";import"./index-C-JnsLA3.js";import"./utils-CRrKglZt.js";import"./index-BdVJDS0n.js";import"./createLucideIcon-Dv1Jt6YD.js";import"./card-BSd5EpdM.js";import"./user-AhkPQcDO.js";const R=()=>{const{data:e,isLoading:l,isError:o,refetch:m}=n();if(l)return s.jsx(p,{});if(o)return s.jsx(u,{refetch:m});if(!e)return;const{messages:x,reviews:r}=e;return console.log(x,r),s.jsxs("div",{className:"px-5",children:[s.jsx(d,{text:"View Messages"}),s.jsx("div",{className:"flex justify-center w-full py-5",children:s.jsxs(f,{defaultValue:"messages",className:"w-full",children:[s.jsxs(g,{className:"grid grid-cols-2 mx-auto w-full md:w-[400px]",children:[s.jsx(i,{value:"messages",children:"Messages"}),s.jsx(i,{value:"review",children:"Reviews"})]}),s.jsx(t,{value:"messages"}),s.jsx(t,{value:"review",children:s.jsx("div",{className:"flex gap-3 flex-wrap flex-row py-5",children:r.map(a=>c.createElement(j,{...a,key:a.id}))})})]})})]})};export{R as default};
