import{b as h,r as m,j as e}from"./index-B3RiOCrZ.js";import{H as u}from"./Header-vC6Xadgy.js";import{e as j,Q as g,a as N}from"./QueryError-CXOoGzrA.js";import{I as y}from"./api-BEGC1kzT.js";import{e as v,f as k}from"./mutation-qjc_V6la.js";import{F as S}from"./Footer-DcYSxMoe.js";import{M as b,a as L}from"./index-CYi9IFBD.js";import{a as I}from"./index-CGMYJcyI.js";import{n as x}from"./utils-CRrKglZt.js";import"./react-B8-VDvk0.js";import"./index-mzZfK4P6.js";import"./sheet-0RRl-yiz.js";import"./x-DpfHoRYL.js";import"./createLucideIcon-qxTwWL44.js";import"./index-DGxk-FAX.js";import"./index-CX5Vue1q.js";import"./tabs-BmkUSFmj.js";import"./input-ic8zs4dQ.js";import"./label-VXwO0fkC.js";import"./textarea-CinkjcXl.js";const q=()=>{const{id:s}=h(),n=v(),p=k(),[l,f]=m.useState(()=>{try{if(window.localStorage!==void 0){const a=window.localStorage.getItem("liked");return a?!!JSON.parse(a).includes(s):!1}else return!1}catch{return!1}});if(!s){window.history.back();return}const{data:t,isLoading:o,isError:d,refetch:w}=j(s);if(document.title=t?t.title.toUpperCase():"Global Kids Academy",m.useEffect(()=>{try{if(window.localStorage!==void 0&&t&&!o&&!d){let a=window.localStorage.getItem("viewed");if(a){const i=JSON.parse(a);i.includes(s)||(i.push(s),n.mutateAsync(s),window.localStorage.setItem("viewed",JSON.stringify(i)))}else{const i=[s];n.mutateAsync(s),window.localStorage.setItem("viewed",JSON.stringify(i))}}}catch{}},[s,o]),o)return e.jsx(g,{});if(d)return e.jsx(N,{refetch:w});const c=async a=>{p.mutate({id:s,value:{like:a}}),f(a);try{if(window.localStorage!==void 0){const i=window.localStorage.getItem("liked");if(i){let r=JSON.parse(i);r.includes(s)||(r.push(s),window.localStorage.setItem("liked",JSON.stringify(r)))}else{let r=[s];window.localStorage.setItem("liked",JSON.stringify(r))}}}catch{}};return e.jsxs("div",{children:[e.jsx(u,{active:"#news"}),e.jsxs("div",{className:"p-5 w-full ",children:[e.jsx("h2",{className:"text-3xl font-bold",children:"News Feed"}),e.jsx("p",{className:"text-primary",children:"// Latest News and Events."}),e.jsx("div",{className:"content p-5 pl-0",children:t?e.jsxs("div",{className:"bg-gray-50 pt-2 ",children:[e.jsxs("nav",{className:"text-xs text-gray-600",children:[e.jsx("a",{href:"/#news",className:"hover:underline",children:"Home"})," ",">",e.jsxs("a",{href:"/news",className:"hover:underline",children:[" ","News Feed"]})," ",">",e.jsxs("span",{className:"capitalize",children:[" ",t.title.toLowerCase()]})]}),e.jsx("div",{className:"mx-auto px-4 p-6",children:e.jsxs("div",{className:"text-gray-700 min-h-[350px] h-fit text-lg leading-7 space-y-4 px-10 md:px-22 py-5",children:[e.jsxs("div",{className:"min-h-[250px]",children:[t.image!==""?e.jsx("img",{src:y+t.image,alt:"End of Session",className:"mr-8 mb-2 p-5 object-cover shadow-lg w-[450px] h-[450px] md:max-w-2xl float-left rounded-full",style:{shapeOutside:"circle(50%)"}}):"",e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"text-4xl font-extrabold text-gray-800 mb-6 indent-14",children:t.title}),e.jsx("div",{className:"text-sm text-justify leading-7",children:t.body})]})]}),e.jsxs("div",{className:"text-gray-600 text-xs flex justify-between",children:[e.jsxs("span",{className:"flex gap-3 items-center",children:[l?e.jsx(b,{className:"fill-primary text-lg cursor-pointer",onClick:()=>c(!l)}):e.jsx(L,{className:"text-lg cursor-pointer",onClick:()=>c(!l)}),e.jsx("span",{children:x.format(t.likes)}),e.jsxs("span",{className:"text-lg flex gap-2 items-center",children:[e.jsx(I,{}),e.jsx("span",{className:"text-sm",children:x.format(t.views)})]})]}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx("span",{className:"font-semibold",children:"Published by: Admin"}),e.jsx("span",{children:new Date(t.createdAt).toDateString()})]})]})]})})]}):e.jsx("div",{children:"No Data Found"})})]}),e.jsx(S,{})]})};export{q as default};
