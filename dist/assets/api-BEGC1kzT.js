function _n(e,t){return typeof e=="function"?e(...t):!!e}function Fn(){}function Pe(e,t){return function(){return e.apply(t,arguments)}}const{toString:et}=Object.prototype,{getPrototypeOf:ue}=Object,W=(e=>t=>{const n=et.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),N=e=>(e=e.toLowerCase(),t=>W(t)===e),K=e=>t=>typeof t===e,{isArray:k}=Array,I=K("undefined");function tt(e){return e!==null&&!I(e)&&e.constructor!==null&&!I(e.constructor)&&x(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const _e=N("ArrayBuffer");function nt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&_e(e.buffer),t}const rt=K("string"),x=K("function"),Fe=K("number"),G=e=>e!==null&&typeof e=="object",st=e=>e===!0||e===!1,z=e=>{if(W(e)!=="object")return!1;const t=ue(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ot=N("Date"),at=N("File"),it=N("Blob"),ct=N("FileList"),ut=e=>G(e)&&x(e.pipe),lt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||x(e.append)&&((t=W(e))==="formdata"||t==="object"&&x(e.toString)&&e.toString()==="[object FormData]"))},dt=N("URLSearchParams"),[ft,pt,ht,mt]=["ReadableStream","Request","Response","Headers"].map(N),yt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function H(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),k(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let c;for(r=0;r<a;r++)c=o[r],t.call(null,e[c],c,e)}}function Le(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const B=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Be=e=>!I(e)&&e!==B;function ne(){const{caseless:e}=Be(this)&&this||{},t={},n=(r,s)=>{const o=e&&Le(t,s)||s;z(t[o])&&z(r)?t[o]=ne(t[o],r):z(r)?t[o]=ne({},r):k(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&H(arguments[r],n);return t}const wt=(e,t,n,{allOwnKeys:r}={})=>(H(t,(s,o)=>{n&&x(s)?e[o]=Pe(s,n):e[o]=s},{allOwnKeys:r}),e),bt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),gt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Et=(e,t,n,r)=>{let s,o,a;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)a=s[o],(!r||r(a,e,t))&&!c[a]&&(t[a]=e[a],c[a]=!0);e=n!==!1&&ue(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},St=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Rt=e=>{if(!e)return null;if(k(e))return e;let t=e.length;if(!Fe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Tt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ue(Uint8Array)),Ot=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},At=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ct=N("HTMLFormElement"),xt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),me=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Nt=N("RegExp"),De=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};H(n,(s,o)=>{let a;(a=t(s,o,e))!==!1&&(r[o]=a||s)}),Object.defineProperties(e,r)},Pt=e=>{De(e,(t,n)=>{if(x(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(x(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},_t=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return k(e)?r(e):r(String(e).split(t)),n},Ft=()=>{},Lt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Z="abcdefghijklmnopqrstuvwxyz",ye="0123456789",Ue={DIGIT:ye,ALPHA:Z,ALPHA_DIGIT:Z+Z.toUpperCase()+ye},Bt=(e=16,t=Ue.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Dt(e){return!!(e&&x(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ut=e=>{const t=new Array(10),n=(r,s)=>{if(G(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=k(r)?[]:{};return H(r,(a,c)=>{const d=n(a,s+1);!I(d)&&(o[c]=d)}),t[s]=void 0,o}}return r};return n(e,0)},kt=N("AsyncFunction"),jt=e=>e&&(G(e)||x(e))&&x(e.then)&&x(e.catch),ke=((e,t)=>e?setImmediate:t?((n,r)=>(B.addEventListener("message",({source:s,data:o})=>{s===B&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),B.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",x(B.postMessage)),qt=typeof queueMicrotask<"u"?queueMicrotask.bind(B):typeof process<"u"&&process.nextTick||ke,i={isArray:k,isArrayBuffer:_e,isBuffer:tt,isFormData:lt,isArrayBufferView:nt,isString:rt,isNumber:Fe,isBoolean:st,isObject:G,isPlainObject:z,isReadableStream:ft,isRequest:pt,isResponse:ht,isHeaders:mt,isUndefined:I,isDate:ot,isFile:at,isBlob:it,isRegExp:Nt,isFunction:x,isStream:ut,isURLSearchParams:dt,isTypedArray:Tt,isFileList:ct,forEach:H,merge:ne,extend:wt,trim:yt,stripBOM:bt,inherits:gt,toFlatObject:Et,kindOf:W,kindOfTest:N,endsWith:St,toArray:Rt,forEachEntry:Ot,matchAll:At,isHTMLForm:Ct,hasOwnProperty:me,hasOwnProp:me,reduceDescriptors:De,freezeMethods:Pt,toObjectSet:_t,toCamelCase:xt,noop:Ft,toFiniteNumber:Lt,findKey:Le,global:B,isContextDefined:Be,ALPHABET:Ue,generateString:Bt,isSpecCompliantForm:Dt,toJSONObject:Ut,isAsyncFn:kt,isThenable:jt,setImmediate:ke,asap:qt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}i.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i.toJSONObject(this.config),code:this.code,status:this.status}}});const je=m.prototype,qe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{qe[e]={value:e}});Object.defineProperties(m,qe);Object.defineProperty(je,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const a=Object.create(je);return i.toFlatObject(e,a,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),m.call(a,e.message,t,n,r,s),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const It=null;function re(e){return i.isPlainObject(e)||i.isArray(e)}function Ie(e){return i.endsWith(e,"[]")?e.slice(0,-2):e}function we(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ie(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Ht(e){return i.isArray(e)&&!e.some(re)}const Mt=i.toFlatObject(i,{},null,function(t){return/^is[A-Z]/.test(t)});function X(e,t,n){if(!i.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=i.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,h){return!i.isUndefined(h[y])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,a=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&i.isSpecCompliantForm(t);if(!i.isFunction(s))throw new TypeError("visitor must be a function");function u(p){if(p===null)return"";if(i.isDate(p))return p.toISOString();if(!d&&i.isBlob(p))throw new m("Blob is not supported. Use a Buffer instead.");return i.isArrayBuffer(p)||i.isTypedArray(p)?d&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function l(p,y,h){let g=p;if(p&&!h&&typeof p=="object"){if(i.endsWith(y,"{}"))y=r?y:y.slice(0,-2),p=JSON.stringify(p);else if(i.isArray(p)&&Ht(p)||(i.isFileList(p)||i.endsWith(y,"[]"))&&(g=i.toArray(p)))return y=Ie(y),g.forEach(function(T,P){!(i.isUndefined(T)||T===null)&&t.append(a===!0?we([y],P,o):a===null?y:y+"[]",u(T))}),!1}return re(p)?!0:(t.append(we(h,y,o),u(p)),!1)}const f=[],b=Object.assign(Mt,{defaultVisitor:l,convertValue:u,isVisitable:re});function S(p,y){if(!i.isUndefined(p)){if(f.indexOf(p)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(p),i.forEach(p,function(g,R){(!(i.isUndefined(g)||g===null)&&s.call(t,g,i.isString(R)?R.trim():R,y,b))===!0&&S(g,y?y.concat(R):[R])}),f.pop()}}if(!i.isObject(e))throw new TypeError("data must be an object");return S(e),t}function be(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function le(e,t){this._pairs=[],e&&X(e,this,t)}const He=le.prototype;He.append=function(t,n){this._pairs.push([t,n])};He.toString=function(t){const n=t?function(r){return t.call(this,r,be)}:be;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function vt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Me(e,t,n){if(!t)return e;const r=n&&n.encode||vt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=i.isURLSearchParams(t)?t.toString():new le(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class ge{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){i.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ve={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},zt=typeof URLSearchParams<"u"?URLSearchParams:le,$t=typeof FormData<"u"?FormData:null,Jt=typeof Blob<"u"?Blob:null,Vt={isBrowser:!0,classes:{URLSearchParams:zt,FormData:$t,Blob:Jt},protocols:["http","https","file","blob","url","data"]},de=typeof window<"u"&&typeof document<"u",se=typeof navigator=="object"&&navigator||void 0,Wt=de&&(!se||["ReactNative","NativeScript","NS"].indexOf(se.product)<0),Kt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Gt=de&&window.location.href||"http://localhost",Xt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:de,hasStandardBrowserEnv:Wt,hasStandardBrowserWebWorkerEnv:Kt,navigator:se,origin:Gt},Symbol.toStringTag,{value:"Module"})),A={...Xt,...Vt};function Qt(e,t){return X(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return A.isNode&&i.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Zt(e){return i.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Yt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function ze(e){function t(n,r,s,o){let a=n[o++];if(a==="__proto__")return!0;const c=Number.isFinite(+a),d=o>=n.length;return a=!a&&i.isArray(s)?s.length:a,d?(i.hasOwnProp(s,a)?s[a]=[s[a],r]:s[a]=r,!c):((!s[a]||!i.isObject(s[a]))&&(s[a]=[]),t(n,r,s[a],o)&&i.isArray(s[a])&&(s[a]=Yt(s[a])),!c)}if(i.isFormData(e)&&i.isFunction(e.entries)){const n={};return i.forEachEntry(e,(r,s)=>{t(Zt(r),s,n,0)}),n}return null}function en(e,t,n){if(i.isString(e))try{return(t||JSON.parse)(e),i.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const M={transitional:ve,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=i.isObject(t);if(o&&i.isHTMLForm(t)&&(t=new FormData(t)),i.isFormData(t))return s?JSON.stringify(ze(t)):t;if(i.isArrayBuffer(t)||i.isBuffer(t)||i.isStream(t)||i.isFile(t)||i.isBlob(t)||i.isReadableStream(t))return t;if(i.isArrayBufferView(t))return t.buffer;if(i.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Qt(t,this.formSerializer).toString();if((c=i.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return X(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),en(t)):t}],transformResponse:[function(t){const n=this.transitional||M.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(i.isResponse(t)||i.isReadableStream(t))return t;if(t&&i.isString(t)&&(r&&!this.responseType||s)){const a=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(a)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};i.forEach(["delete","get","head","post","put","patch"],e=>{M.headers[e]={}});const tn=i.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),nn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(a){s=a.indexOf(":"),n=a.substring(0,s).trim().toLowerCase(),r=a.substring(s+1).trim(),!(!n||t[n]&&tn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ee=Symbol("internals");function q(e){return e&&String(e).trim().toLowerCase()}function $(e){return e===!1||e==null?e:i.isArray(e)?e.map($):String(e)}function rn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const sn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Y(e,t,n,r,s){if(i.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!i.isString(t)){if(i.isString(r))return t.indexOf(r)!==-1;if(i.isRegExp(r))return r.test(t)}}function on(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function an(e,t){const n=i.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,a){return this[r].call(this,t,s,o,a)},configurable:!0})})}class C{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,d,u){const l=q(d);if(!l)throw new Error("header name must be a non-empty string");const f=i.findKey(s,l);(!f||s[f]===void 0||u===!0||u===void 0&&s[f]!==!1)&&(s[f||d]=$(c))}const a=(c,d)=>i.forEach(c,(u,l)=>o(u,l,d));if(i.isPlainObject(t)||t instanceof this.constructor)a(t,n);else if(i.isString(t)&&(t=t.trim())&&!sn(t))a(nn(t),n);else if(i.isHeaders(t))for(const[c,d]of t.entries())o(d,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=q(t),t){const r=i.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return rn(s);if(i.isFunction(n))return n.call(this,s,r);if(i.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=q(t),t){const r=i.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Y(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(a){if(a=q(a),a){const c=i.findKey(r,a);c&&(!n||Y(r,r[c],c,n))&&(delete r[c],s=!0)}}return i.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Y(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return i.forEach(this,(s,o)=>{const a=i.findKey(r,o);if(a){n[a]=$(s),delete n[o];return}const c=t?on(o):String(o).trim();c!==o&&delete n[o],n[c]=$(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return i.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&i.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ee]=this[Ee]={accessors:{}}).accessors,s=this.prototype;function o(a){const c=q(a);r[c]||(an(s,a),r[c]=!0)}return i.isArray(t)?t.forEach(o):o(t),this}}C.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);i.reduceDescriptors(C.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});i.freezeMethods(C);function ee(e,t){const n=this||M,r=t||n,s=C.from(r.headers);let o=r.data;return i.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function $e(e){return!!(e&&e.__CANCEL__)}function j(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}i.inherits(j,m,{__CANCEL__:!0});function Je(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function cn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function un(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,a;return t=t!==void 0?t:1e3,function(d){const u=Date.now(),l=r[o];a||(a=u),n[s]=d,r[s]=u;let f=o,b=0;for(;f!==s;)b+=n[f++],f=f%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-a<t)return;const S=l&&u-l;return S?Math.round(b*1e3/S):void 0}}function ln(e,t){let n=0,r=1e3/t,s,o;const a=(u,l=Date.now())=>{n=l,s=null,o&&(clearTimeout(o),o=null),e.apply(null,u)};return[(...u)=>{const l=Date.now(),f=l-n;f>=r?a(u,l):(s=u,o||(o=setTimeout(()=>{o=null,a(s)},r-f)))},()=>s&&a(s)]}const J=(e,t,n=3)=>{let r=0;const s=un(50,250);return ln(o=>{const a=o.loaded,c=o.lengthComputable?o.total:void 0,d=a-r,u=s(d),l=a<=c;r=a;const f={loaded:a,total:c,progress:c?a/c:void 0,bytes:d,rate:u||void 0,estimated:u&&c&&l?(c-a)/u:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(f)},n)},Se=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Re=e=>(...t)=>i.asap(()=>e(...t)),dn=A.hasStandardBrowserEnv?function(){const t=A.navigator&&/(msie|trident)/i.test(A.navigator.userAgent),n=document.createElement("a");let r;function s(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(a){const c=i.isString(a)?s(a):a;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),fn=A.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const a=[e+"="+encodeURIComponent(t)];i.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),i.isString(r)&&a.push("path="+r),i.isString(s)&&a.push("domain="+s),o===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function pn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function hn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ve(e,t){return e&&!pn(t)?hn(e,t):t}const Te=e=>e instanceof C?{...e}:e;function U(e,t){t=t||{};const n={};function r(u,l,f){return i.isPlainObject(u)&&i.isPlainObject(l)?i.merge.call({caseless:f},u,l):i.isPlainObject(l)?i.merge({},l):i.isArray(l)?l.slice():l}function s(u,l,f){if(i.isUndefined(l)){if(!i.isUndefined(u))return r(void 0,u,f)}else return r(u,l,f)}function o(u,l){if(!i.isUndefined(l))return r(void 0,l)}function a(u,l){if(i.isUndefined(l)){if(!i.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function c(u,l,f){if(f in t)return r(u,l);if(f in e)return r(void 0,u)}const d={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c,headers:(u,l)=>s(Te(u),Te(l),!0)};return i.forEach(Object.keys(Object.assign({},e,t)),function(l){const f=d[l]||s,b=f(e[l],t[l],l);i.isUndefined(b)&&f!==c||(n[l]=b)}),n}const We=e=>{const t=U({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:a,auth:c}=t;t.headers=a=C.from(a),t.url=Me(Ve(t.baseURL,t.url),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let d;if(i.isFormData(n)){if(A.hasStandardBrowserEnv||A.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if((d=a.getContentType())!==!1){const[u,...l]=d?d.split(";").map(f=>f.trim()).filter(Boolean):[];a.setContentType([u||"multipart/form-data",...l].join("; "))}}if(A.hasStandardBrowserEnv&&(r&&i.isFunction(r)&&(r=r(t)),r||r!==!1&&dn(t.url))){const u=s&&o&&fn.read(o);u&&a.set(s,u)}return t},mn=typeof XMLHttpRequest<"u",yn=mn&&function(e){return new Promise(function(n,r){const s=We(e);let o=s.data;const a=C.from(s.headers).normalize();let{responseType:c,onUploadProgress:d,onDownloadProgress:u}=s,l,f,b,S,p;function y(){S&&S(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(l),s.signal&&s.signal.removeEventListener("abort",l)}let h=new XMLHttpRequest;h.open(s.method.toUpperCase(),s.url,!0),h.timeout=s.timeout;function g(){if(!h)return;const T=C.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),O={data:!c||c==="text"||c==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:T,config:e,request:h};Je(function(L){n(L),y()},function(L){r(L),y()},O),h=null}"onloadend"in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(g)},h.onabort=function(){h&&(r(new m("Request aborted",m.ECONNABORTED,e,h)),h=null)},h.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let P=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const O=s.transitional||ve;s.timeoutErrorMessage&&(P=s.timeoutErrorMessage),r(new m(P,O.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,h)),h=null},o===void 0&&a.setContentType(null),"setRequestHeader"in h&&i.forEach(a.toJSON(),function(P,O){h.setRequestHeader(O,P)}),i.isUndefined(s.withCredentials)||(h.withCredentials=!!s.withCredentials),c&&c!=="json"&&(h.responseType=s.responseType),u&&([b,p]=J(u,!0),h.addEventListener("progress",b)),d&&h.upload&&([f,S]=J(d),h.upload.addEventListener("progress",f),h.upload.addEventListener("loadend",S)),(s.cancelToken||s.signal)&&(l=T=>{h&&(r(!T||T.type?new j(null,e,h):T),h.abort(),h=null)},s.cancelToken&&s.cancelToken.subscribe(l),s.signal&&(s.signal.aborted?l():s.signal.addEventListener("abort",l)));const R=cn(s.url);if(R&&A.protocols.indexOf(R)===-1){r(new m("Unsupported protocol "+R+":",m.ERR_BAD_REQUEST,e));return}h.send(o||null)})},wn=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(u){if(!s){s=!0,c();const l=u instanceof Error?u:this.reason;r.abort(l instanceof m?l:new j(l instanceof Error?l.message:l))}};let a=t&&setTimeout(()=>{a=null,o(new m(`timeout ${t} of ms exceeded`,m.ETIMEDOUT))},t);const c=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(o):u.removeEventListener("abort",o)}),e=null)};e.forEach(u=>u.addEventListener("abort",o));const{signal:d}=r;return d.unsubscribe=()=>i.asap(c),d}},bn=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},gn=async function*(e,t){for await(const n of En(e))yield*bn(n,t)},En=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Oe=(e,t,n,r)=>{const s=gn(e,t);let o=0,a,c=d=>{a||(a=!0,r&&r(d))};return new ReadableStream({async pull(d){try{const{done:u,value:l}=await s.next();if(u){c(),d.close();return}let f=l.byteLength;if(n){let b=o+=f;n(b)}d.enqueue(new Uint8Array(l))}catch(u){throw c(u),u}},cancel(d){return c(d),s.return()}},{highWaterMark:2})},Q=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ke=Q&&typeof ReadableStream=="function",Sn=Q&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Ge=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Rn=Ke&&Ge(()=>{let e=!1;const t=new Request(A.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Ae=64*1024,oe=Ke&&Ge(()=>i.isReadableStream(new Response("").body)),V={stream:oe&&(e=>e.body)};Q&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!V[t]&&(V[t]=i.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new m(`Response type '${t}' is not supported`,m.ERR_NOT_SUPPORT,r)})})})(new Response);const Tn=async e=>{if(e==null)return 0;if(i.isBlob(e))return e.size;if(i.isSpecCompliantForm(e))return(await new Request(A.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(i.isArrayBufferView(e)||i.isArrayBuffer(e))return e.byteLength;if(i.isURLSearchParams(e)&&(e=e+""),i.isString(e))return(await Sn(e)).byteLength},On=async(e,t)=>{const n=i.toFiniteNumber(e.getContentLength());return n??Tn(t)},An=Q&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:a,onDownloadProgress:c,onUploadProgress:d,responseType:u,headers:l,withCredentials:f="same-origin",fetchOptions:b}=We(e);u=u?(u+"").toLowerCase():"text";let S=wn([s,o&&o.toAbortSignal()],a),p;const y=S&&S.unsubscribe&&(()=>{S.unsubscribe()});let h;try{if(d&&Rn&&n!=="get"&&n!=="head"&&(h=await On(l,r))!==0){let O=new Request(t,{method:"POST",body:r,duplex:"half"}),_;if(i.isFormData(r)&&(_=O.headers.get("content-type"))&&l.setContentType(_),O.body){const[L,v]=Se(h,J(Re(d)));r=Oe(O.body,Ae,L,v)}}i.isString(f)||(f=f?"include":"omit");const g="credentials"in Request.prototype;p=new Request(t,{...b,signal:S,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",credentials:g?f:void 0});let R=await fetch(p);const T=oe&&(u==="stream"||u==="response");if(oe&&(c||T&&y)){const O={};["status","statusText","headers"].forEach(he=>{O[he]=R[he]});const _=i.toFiniteNumber(R.headers.get("content-length")),[L,v]=c&&Se(_,J(Re(c),!0))||[];R=new Response(Oe(R.body,Ae,L,()=>{v&&v(),y&&y()}),O)}u=u||"text";let P=await V[i.findKey(V,u)||"text"](R,e);return!T&&y&&y(),await new Promise((O,_)=>{Je(O,_,{data:P,headers:C.from(R.headers),status:R.status,statusText:R.statusText,config:e,request:p})})}catch(g){throw y&&y(),g&&g.name==="TypeError"&&/fetch/i.test(g.message)?Object.assign(new m("Network Error",m.ERR_NETWORK,e,p),{cause:g.cause||g}):m.from(g,g&&g.code,e,p)}}),ae={http:It,xhr:yn,fetch:An};i.forEach(ae,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ce=e=>`- ${e}`,Cn=e=>i.isFunction(e)||e===null||e===!1,Xe={getAdapter:e=>{e=i.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let a;if(r=n,!Cn(n)&&(r=ae[(a=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${a}'`);if(r)break;s[a||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let a=t?o.length>1?`since :
`+o.map(Ce).join(`
`):" "+Ce(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:ae};function te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new j(null,e)}function xe(e){return te(e),e.headers=C.from(e.headers),e.data=ee.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Xe.getAdapter(e.adapter||M.adapter)(e).then(function(r){return te(e),r.data=ee.call(e,e.transformResponse,r),r.headers=C.from(r.headers),r},function(r){return $e(r)||(te(e),r&&r.response&&(r.response.data=ee.call(e,e.transformResponse,r.response),r.response.headers=C.from(r.response.headers))),Promise.reject(r)})}const Qe="1.7.7",fe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ne={};fe.transitional=function(t,n,r){function s(o,a){return"[Axios v"+Qe+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,c)=>{if(t===!1)throw new m(s(a," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Ne[a]&&(Ne[a]=!0,console.warn(s(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,c):!0}};function xn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],a=t[o];if(a){const c=e[o],d=c===void 0||a(c,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const ie={assertOptions:xn,validators:fe},F=ie.validators;class D{constructor(t){this.defaults=t,this.interceptors={request:new ge,response:new ge}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=U(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ie.assertOptions(r,{silentJSONParsing:F.transitional(F.boolean),forcedJSONParsing:F.transitional(F.boolean),clarifyTimeoutError:F.transitional(F.boolean)},!1),s!=null&&(i.isFunction(s)?n.paramsSerializer={serialize:s}:ie.assertOptions(s,{encode:F.function,serialize:F.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=o&&i.merge(o.common,o[n.method]);o&&i.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=C.concat(a,o);const c=[];let d=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(d=d&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let l,f=0,b;if(!d){const p=[xe.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,u),b=p.length,l=Promise.resolve(n);f<b;)l=l.then(p[f++],p[f++]);return l}b=c.length;let S=n;for(f=0;f<b;){const p=c[f++],y=c[f++];try{S=p(S)}catch(h){y.call(this,h);break}}try{l=xe.call(this,S)}catch(p){return Promise.reject(p)}for(f=0,b=u.length;f<b;)l=l.then(u[f++],u[f++]);return l}getUri(t){t=U(this.defaults,t);const n=Ve(t.baseURL,t.url);return Me(n,t.params,t.paramsSerializer)}}i.forEach(["delete","get","head","options"],function(t){D.prototype[t]=function(n,r){return this.request(U(r||{},{method:t,url:n,data:(r||{}).data}))}});i.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,c){return this.request(U(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}D.prototype[t]=n(),D.prototype[t+"Form"]=n(!0)});class pe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const a=new Promise(c=>{r.subscribe(c),o=c}).then(s);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,c){r.reason||(r.reason=new j(o,a,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new pe(function(s){t=s}),cancel:t}}}function Nn(e){return function(n){return e.apply(null,n)}}function Pn(e){return i.isObject(e)&&e.isAxiosError===!0}const ce={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ce).forEach(([e,t])=>{ce[t]=e});function Ze(e){const t=new D(e),n=Pe(D.prototype.request,t);return i.extend(n,D.prototype,t,{allOwnKeys:!0}),i.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ze(U(e,s))},n}const E=Ze(M);E.Axios=D;E.CanceledError=j;E.CancelToken=pe;E.isCancel=$e;E.VERSION=Qe;E.toFormData=X;E.AxiosError=m;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=Nn;E.isAxiosError=Pn;E.mergeConfig=U;E.AxiosHeaders=C;E.formToJSON=e=>ze(i.isHTMLForm(e)?new FormData(e):e);E.getAdapter=Xe.getAdapter;E.HttpStatusCode=ce;E.default=E;const Ye="",Ln=Ye+"/images/",w=E.create({baseURL:Ye+"/api",headers:{"Content-Type":"application/json"},withCredentials:!0}),Bn=async()=>(await w.get("/dashboard")).data.data,Dn=async()=>(await w.get("/auth/account/status")).data,Un=async()=>(await w.get("/dashboard/events")).data.data,kn=async()=>(await w.get("/dashboard/messages")).data.data,jn=async e=>(await w.post("/auth/login",e)).data,qn=async e=>(await w.post("/dashboard/slider",e,{headers:{"Content-Type":"multipart/form-data"}})).data,In=async e=>(await w.post("/dashboard/about",e,{headers:{"Content-Type":"multipart/form-data"}})).data,Hn=async e=>(await w.post("/dashboard/news",e,{headers:{"Content-Type":"multipart/form-data"}})).data,Mn=async e=>(await w.post("/dashboard/events",e,{headers:{"Content-Type":"multipart/form-data"}})).data,vn=async e=>(await w.post("/dashboard/gallery",e,{headers:{"Content-Type":"multipart/form-data"}})).data,zn=async(e,t)=>(await w.put(`/dashboard/slider/${e}`,t,{headers:{"Content-Type":"multipart/form-data"}})).data,$n=async(e,t)=>(await w.put(`/dashboard/about/${e}`,t,{headers:{"Content-Type":"multipart/form-data"}})).data,Jn=async(e,t)=>(await w.put(`/dashboard/events/${e}`,t,{headers:{"Content-Type":"multipart/form-data"}})).data,Vn=async(e,t)=>(await w.put(`/dashboard/news/${e}`,t,{headers:{"Content-Type":"multipart/form-data"}})).data,Wn=async(e,t)=>(await w.put(`/dashboard/gallery/${e}`,t,{headers:{"Content-Type":"multipart/form-data"}})).data,Kn=async e=>(await w.put("/dashboard/history",e)).data,Gn=async()=>(await w.get("/dashboard/slider")).data.data,Xn=async e=>(await w.delete(`/dashboard/slider/${e}`)).data,Qn=async e=>(await w.delete(`/dashboard/news/${e}`)).data,Zn=async e=>(await w.delete(`/dashboard/gallery/${e}`)).data,Yn=async e=>(await w.delete(`/dashboard/events/${e}`)).data,er=async e=>(await w.delete(`/dashboard/about/${e}`)).data,tr=async()=>(await w.get("/dashboard/about")).data.data,nr=async()=>(await w.get("/dashboard/history")).data.data,rr=async()=>(await w.get("/dashboard/gallery")).data.data,sr=async()=>(await w.get("/dashboard/news")).data.data,or=async e=>(await w.get(`/dashboard/news/${e}`)).data.data,ar=async()=>(await w.get("/dashboard/reviews")).data.data,ir=async()=>(await w.get("/auth/logout")).data.data,cr=async e=>(await w.put(`/dashboard/news/${e}/views`)).data,ur=async(e,t)=>(await w.put(`/dashboard/news/${e}/likes`,t)).data,lr=async(e,t,n)=>(await w.post("/dashboard/contact-us",{fullname:e,email:t,message:n})).data,dr=async(e,t,n)=>(await w.post("/dashboard/reviews",{fullname:e,review:t,rank:n})).data;export{tr as A,nr as B,rr as C,sr as D,or as E,ar as F,Dn as G,Un as H,Ln as I,kn as J,qn as a,In as b,er as c,Xn as d,zn as e,$n as f,Jn as g,Kn as h,vn as i,Wn as j,Zn as k,ir as l,Yn as m,Fn as n,Hn as o,Mn as p,Vn as q,Qn as r,_n as s,cr as t,ur as u,jn as v,lr as w,dr as x,Bn as y,Gn as z};
