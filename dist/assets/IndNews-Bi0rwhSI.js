import{b as u,r as m,j as e}from"./index-CX7QPJWi.js";import{H as j}from"./Header-S3SvKOiJ.js";import{e as g,Q as N,a as v}from"./QueryError-D6izbPnr.js";import{e as y,f as b,I as k}from"./mutation-CFAGO9ym.js";import{F as S}from"./Footer-D5PF2JsS.js";import{M as L,a as I}from"./index-epaJ6MaG.js";import{b as O,c as J,d as A,e as E,a as F}from"./index-CewGFZMT.js";import{n as x}from"./utils-CRrKglZt.js";import"./react-B8-VDvk0.js";import"./sheet-COiuI-UT.js";import"./createLucideIcon-nSWrYmZ4.js";import"./button-Djh4qDtK.js";import"./x-C7Na-r05.js";import"./index-Cat4cN-9.js";import"./index-CnUwcH3o.js";import"./tabs-7FRXcckP.js";import"./input-ClgkosYZ.js";import"./label-CsoZxuQ2.js";import"./textarea-BHd6XDA1.js";const Z=()=>{const{id:s}=u(),n=y(),f=b(),[i,p]=m.useState(()=>{try{if(window.localStorage!==void 0){const a=window.localStorage.getItem("liked");return a?!!JSON.parse(a).includes(s):!1}else return!1}catch{return!1}});if(!s){window.history.back();return}const{data:t,isLoading:o,isError:d,refetch:h}=g(s);if(document.title=t?t.title.toUpperCase():"Global Kids Academy",m.useEffect(()=>{try{if(window.localStorage!==void 0&&t&&!o&&!d){let a=window.localStorage.getItem("viewed");if(a){const r=JSON.parse(a);r.includes(s)||(r.push(s),n.mutateAsync(s),window.localStorage.setItem("viewed",JSON.stringify(r)))}else{const r=[s];n.mutateAsync(s),window.localStorage.setItem("viewed",JSON.stringify(r))}}}catch{}},[s,o]),o)return e.jsx(N,{});if(d)return e.jsx(v,{refetch:h});const c=async a=>{f.mutate({id:s,value:{like:a}}),p(a);try{if(window.localStorage!==void 0){const r=window.localStorage.getItem("liked");if(a)if(r){let l=JSON.parse(r);l.includes(s)||(l.push(s),window.localStorage.setItem("liked",JSON.stringify(l)))}else{let l=[s];window.localStorage.setItem("liked",JSON.stringify(l))}else if(r){let l=JSON.parse(r);l=l.filter(w=>w!==s),window.localStorage.setItem("liked",JSON.stringify(l))}}}catch{}};return e.jsxs("div",{children:[e.jsx(j,{active:"#news"}),e.jsxs("div",{className:"p-5 w-full ",children:[e.jsx("h2",{className:"text-3xl font-bold",children:"News Feed"}),e.jsx("p",{className:"text-primary",children:"// Latest News and Events."}),e.jsx("div",{className:"content p-5 pl-0",children:t?e.jsxs("div",{className:"bg-gray-50 pt-2 ",children:[e.jsxs("nav",{className:"text-xs text-gray-600",children:[e.jsx("a",{href:"/#news",className:"hover:underline",children:"Home"})," ",">",e.jsxs("a",{href:"/news",className:"hover:underline",children:[" ","News Feed"]})," ",">",e.jsxs("a",{href:"",className:"capitalize",children:[" ",t.title.toLowerCase()]})]}),e.jsx("div",{className:"mx-auto px-1 sm:px-4",children:e.jsxs("div",{className:"text-slate-700 h-fit text-lg leading-7 space-y-4 px-2 sm:px-10 md:px-22 py-2 pt-10 ",children:[e.jsxs("div",{className:"flex justify-center flex-col",children:[e.jsx("div",{className:"text-xl sm:text-2xl lg:text-4xl font-extrabold text-slate-700 mb-6 text-center",children:t.title}),e.jsxs("div",{className:"flex md:gap-3 justify-center px-5 sm:px-2  w-full items-center py-3",children:[e.jsx("a",{href:"#",rel:"noopener noreferrer",className:"hover:scale-125 transition-transform border p-2 border-slate-600 hover:bg-slate-700 hover:text-white rounded-full",children:e.jsx(O,{})}),e.jsx("a",{href:"#",rel:"noopener noreferrer",className:"hover:scale-125 transition-transform border p-2 border-slate-600 hover:bg-slate-700 hover:text-white rounded-full",children:e.jsx(J,{})}),e.jsx("a",{href:"#",rel:"noopener noreferrer",className:"hover:scale-125 transition-transform border p-2 border-slate-600 hover:bg-slate-700 hover:text-white rounded-full",children:e.jsx(A,{})}),e.jsx("a",{href:"#",rel:"noopener noreferrer",className:"hover:scale-125 transition-transform border p-2 border-slate-600 hover:bg-slate-700 hover:text-white rounded-full",children:e.jsx(E,{})})]}),t.image!==""?e.jsx("img",{src:k+t.image,alt:t.title,className:"mb-2 object-cover w-full sm:w-[80%] h-[300px] rounded-2xl lg:h-[450px] mx-auto "}):"",e.jsx("div",{className:"body",children:e.jsx("div",{className:"text-left leading-7 sm:px-24 lg:px-32 text-sm sm:text-lg py-5",children:t.body})})]}),e.jsxs("div",{className:"text-slate-700 text-xs flex gap-5 justify-between sm:justify-end w-full sm:w-[80%] mx-auto py-5",children:[e.jsxs("span",{className:"flex gap-3 items-center",children:[i?e.jsx(L,{className:"fill-primary text-lg cursor-pointer",onClick:()=>c(!i)}):e.jsx(I,{className:"text-lg cursor-pointer",onClick:()=>c(!i)}),e.jsx("span",{children:x.format(t.likes)}),e.jsxs("span",{className:"text-lg flex gap-2 items-center",children:[e.jsx(F,{}),e.jsx("span",{className:"text-sm",children:x.format(t.views)})]})]}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx("span",{className:"font-semibold",children:"Published by: Admin"}),e.jsx("span",{children:new Date(t.createdAt).toDateString()})]})]})]})})]}):e.jsx("div",{children:"No Data Found"})})]}),e.jsx(S,{})]})};export{Z as default};
