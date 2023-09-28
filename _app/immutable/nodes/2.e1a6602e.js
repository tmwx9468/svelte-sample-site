import{n as O,s as G,r as X,c as Y}from"../chunks/scheduler.b0c1c2c3.js";import{S as F,i as K,g as w,s as L,m as N,h as M,j as k,y as D,c as E,n as P,f as y,k as _,l as z,a as j,A as p,B as R,o as U,r as Z,C as ee,u as te,v as se,d as ne,t as oe,w as ae}from"../chunks/index.994eb031.js";import{w as re}from"../chunks/index.4b5dc0fd.js";const W=typeof window<"u";let V=W?()=>window.performance.now():()=>Date.now(),J=W?e=>requestAnimationFrame(e):O;const H=new Set;function Q(e){H.forEach(s=>{s.c(e)||(H.delete(s),s.f())}),H.size!==0&&J(Q)}function le(e){let s;return H.size===0&&J(Q),{promise:new Promise(t=>{H.add(s={c:e,f:t})}),abort(){H.delete(s)}}}const ie=!0,ce="always",we=Object.freeze(Object.defineProperty({__proto__:null,prerender:ie,trailingSlash:ce},Symbol.toStringTag,{value:"Module"}));function q(e){return Object.prototype.toString.call(e)==="[object Date]"}function A(e,s,t,d){if(typeof t=="number"||q(t)){const o=d-t,n=(t-s)/(e.dt||1/60),a=e.opts.stiffness*o,r=e.opts.damping*n,c=(a-r)*e.inv_mass,m=(n+c)*e.dt;return Math.abs(m)<e.opts.precision&&Math.abs(o)<e.opts.precision?d:(e.settled=!1,q(t)?new Date(t.getTime()+m):t+m)}else{if(Array.isArray(t))return t.map((o,n)=>A(e,s[n],t[n],d[n]));if(typeof t=="object"){const o={};for(const n in t)o[n]=A(e,s[n],t[n],d[n]);return o}else throw new Error(`Cannot spring ${typeof t} values`)}}function fe(e,s={}){const t=re(e),{stiffness:d=.15,damping:o=.8,precision:n=.01}=s;let a,r,c,m=e,b=e,f=1,v=0,l=!1;function g(T,x={}){b=T;const S=c={};return e==null||x.hard||i.stiffness>=1&&i.damping>=1?(l=!0,a=V(),m=T,t.set(e=b),Promise.resolve()):(x.soft&&(v=1/((x.soft===!0?.5:+x.soft)*60),f=0),r||(a=V(),l=!1,r=le(h=>{if(l)return l=!1,r=null,!1;f=Math.min(f+v,1);const u={inv_mass:f,opts:i,settled:!0,dt:(h-a)*60/1e3},C=A(u,m,e,b);return a=h,m=e,t.set(e=C),u.settled&&(r=null),!u.settled})),new Promise(h=>{r.promise.then(()=>{S===c&&h()})}))}const i={set:g,update:(T,x)=>g(T(b,e),x),subscribe:t.subscribe,stiffness:d,damping:o,precision:n};return i}function de(e){let s,t,d='<svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-y96mxt"><path d="M0,0.5 L1,0.5" class="svelte-y96mxt"></path></svg>',o,n,a,r,c=Math.floor(e[1]+1)+"",m,b,f,v=Math.floor(e[1])+"",l,g,i,T='<svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-y96mxt"><path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" class="svelte-y96mxt"></path></svg>',x,S;return{c(){s=w("div"),t=w("button"),t.innerHTML=d,o=L(),n=w("div"),a=w("div"),r=w("strong"),m=N(c),b=L(),f=w("strong"),l=N(v),g=L(),i=w("button"),i.innerHTML=T,this.h()},l(h){s=M(h,"DIV",{class:!0});var u=k(s);t=M(u,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),D(t)!=="svelte-97ppyc"&&(t.innerHTML=d),o=E(u),n=M(u,"DIV",{class:!0});var C=k(n);a=M(C,"DIV",{class:!0,style:!0});var $=k(a);r=M($,"STRONG",{class:!0,"aria-hidden":!0});var B=k(r);m=P(B,c),B.forEach(y),b=E($),f=M($,"STRONG",{class:!0});var I=k(f);l=P(I,v),I.forEach(y),$.forEach(y),C.forEach(y),g=E(u),i=M(u,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),D(i)!=="svelte-irev0c"&&(i.innerHTML=T),u.forEach(y),this.h()},h(){_(t,"aria-label","Decrease the counter by one"),_(t,"class","svelte-y96mxt"),_(r,"class","hidden svelte-y96mxt"),_(r,"aria-hidden","true"),_(f,"class","svelte-y96mxt"),_(a,"class","counter-digits svelte-y96mxt"),z(a,"transform","translate(0, "+100*e[2]+"%)"),_(n,"class","counter-viewport svelte-y96mxt"),_(i,"aria-label","Increase the counter by one"),_(i,"class","svelte-y96mxt"),_(s,"class","counter svelte-y96mxt")},m(h,u){j(h,s,u),p(s,t),p(s,o),p(s,n),p(n,a),p(a,r),p(r,m),p(a,b),p(a,f),p(f,l),p(s,g),p(s,i),x||(S=[R(t,"click",e[4]),R(i,"click",e[5])],x=!0)},p(h,[u]){u&2&&c!==(c=Math.floor(h[1]+1)+"")&&U(m,c),u&2&&v!==(v=Math.floor(h[1])+"")&&U(l,v),u&4&&z(a,"transform","translate(0, "+100*h[2]+"%)")},i:O,o:O,d(h){h&&y(s),x=!1,X(S)}}}function me(e,s){return(e%s+s)%s}function pe(e,s,t){let d,o,n=0;const a=fe();Y(e,a,m=>t(1,o=m));const r=()=>t(0,n-=1),c=()=>t(0,n+=1);return e.$$.update=()=>{e.$$.dirty&1&&a.set(n),e.$$.dirty&2&&t(2,d=me(o,1))},[n,o,d,a,r,c]}class ue extends F{constructor(s){super(),K(this,s,pe,de,G,{})}}const he=""+new URL("../assets/svelte-welcome.c18bcf5a.webp",import.meta.url).href,_e=""+new URL("../assets/svelte-welcome.6c300099.png",import.meta.url).href;function ve(e){let s,t,d,o,n,a=`<span class="welcome svelte-19xx0bt"><picture><source srcset="${he}" type="image/webp"/> <img src="${_e}" alt="Welcome" class="svelte-19xx0bt"/></picture></span>

		to your new<br/>SvelteKit app`,r,c,m="try editing <strong>src/routes/+page.svelte</strong>",b,f,v;return f=new ue({}),{c(){s=w("html"),t=w("meta"),d=L(),o=w("section"),n=w("h1"),n.innerHTML=a,r=L(),c=w("h2"),c.innerHTML=m,b=L(),Z(f.$$.fragment),this.h()},l(l){const g=ee("svelte-10sk73a",document.head);s=M(g,"HTML",{lang:!0}),k(s).forEach(y),t=M(g,"META",{name:!0,content:!0}),g.forEach(y),d=E(l),o=M(l,"SECTION",{class:!0});var i=k(o);n=M(i,"H1",{class:!0,"data-svelte-h":!0}),D(n)!=="svelte-11s73ib"&&(n.innerHTML=a),r=E(i),c=M(i,"H2",{"data-svelte-h":!0}),D(c)!=="svelte-1e36z0s"&&(c.innerHTML=m),b=E(i),te(f.$$.fragment,i),i.forEach(y),this.h()},h(){_(s,"lang","en"),document.title="Home",_(t,"name","description"),_(t,"content","Svelte demo app"),_(n,"class","svelte-19xx0bt"),_(o,"class","svelte-19xx0bt")},m(l,g){p(document.head,s),p(document.head,t),j(l,d,g),j(l,o,g),p(o,n),p(o,r),p(o,c),p(o,b),se(f,o,null),v=!0},p:O,i(l){v||(ne(f.$$.fragment,l),v=!0)},o(l){oe(f.$$.fragment,l),v=!1},d(l){l&&(y(d),y(o)),y(s),y(t),ae(f)}}}class Me extends F{constructor(s){super(),K(this,s,null,ve,G,{})}}export{Me as component,we as universal};
