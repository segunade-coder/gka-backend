import{j as e}from"./index-Bfq0amQ2.js";import{F as o}from"./Footer-gzA9awSj.js";import{H as d}from"./Header-Dp8hkXa8.js";import{d as l,Q as p,a as n}from"./QueryError-Dfo3VzMM.js";import{N as x}from"./NewsCard-B0wRV2B1.js";import{I as c}from"./api-BEGC1kzT.js";import{g as f}from"./utils-CRrKglZt.js";import"./react-B8-VDvk0.js";import"./index-DehX_8rL.js";import"./index-C-JnsLA3.js";import"./x-CAFi2_58.js";import"./createLucideIcon-Dv1Jt6YD.js";import"./index-CbUyBKir.js";import"./tabs-CH3sEB_I.js";import"./index-BdVJDS0n.js";import"./input-BRqrOLwX.js";import"./label-C5WRzvr2.js";import"./textarea-fJBJBpyv.js";import"./mutation-DstUrLZk.js";import"./sheet-BmgCW-qc.js";import"./index-CFAVWaCh.js";import"./dialog-DEcS-NNy.js";import"./alert-dialog-CXrI5NAH.js";const q=()=>{const{data:t,isLoading:i,isError:s,refetch:a}=l();return i?e.jsx(p,{}):s?e.jsx(n,{refetch:a}):e.jsxs("div",{children:[e.jsx(d,{active:"#news"}),e.jsxs("div",{className:"p-5 w-full ",children:[e.jsx("h2",{className:"text-3xl font-bold text-slate-700",children:"News Feed"}),e.jsx("p",{className:"text-primary",children:"// Latest News and Events."}),e.jsxs("div",{className:"bg-gray-50 py-5",children:[e.jsxs("nav",{className:"container mx-auto px-2 mb-4 text-sm text-gray-600",children:[e.jsx("a",{href:"/#news",className:"hover:underline",children:"Home"})," ",">",e.jsxs("a",{href:"/news",className:"hover:underline font-semibold",children:[" ","News Feed"]})]}),e.jsx("div",{className:"imgs flex gap-5 justify-center flex-wrap lg:flex-nowrap",children:t&&t.length>0?t.map((r,m)=>e.jsx(x,{title:r.title,date:r.createdAt,body:r.body,id:r.id,image:r.image!==""?c+r.image:f(m),newsImage:r.image,likes:r.likes,views:r.views,edited:r.edited},r.id)):""})]})]}),e.jsx(o,{})]})};export{q as default};
