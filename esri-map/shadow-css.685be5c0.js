("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f.register("w5H2b",(function(e,t){var s,r,o,n;s=e.exports,r="scopeCss",o=function(){return I},Object.defineProperty(s,r,{get:o,set:n,enumerable:!0,configurable:!0});
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */
const c="-shadowcsshost",l="-shadowcssslotted",i="-shadowcsscontext",a=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",p=new RegExp("(-shadowcsshost"+a,"gim"),h=new RegExp("(-shadowcsscontext"+a,"gim"),u=new RegExp("(-shadowcssslotted"+a,"gim"),d="-shadowcsshost-no-combinator",g=/-shadowcsshost-no-combinator([^\s]*)/,f=[/::shadow/g,/::content/g],m=/-shadowcsshost/gim,x=/:host/gim,w=/::slotted/gim,$=/:host-context/gim,_=/\/\*\s*[\s\S]*?\*\//g,b=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,S=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,O=/([{}])/g,W=/(^.*?[^\\])??((:+)(.*)|$)/,j="%BLOCK%",R=(e,t)=>{const s=E(e);let r=0;return s.escapedString.replace(S,((...e)=>{const o=e[2];let n="",c=e[4],l="";c&&c.startsWith("{%BLOCK%")&&(n=s.blocks[r++],c=c.substring(j.length+1),l="{");const i=t({selector:o,content:n});return`${e[1]}${i.selector}${e[3]}${l}${i.content}${c}`}))},E=e=>{const t=e.split(O),s=[],r=[];let o=0,n=[];for(let e=0;e<t.length;e++){const c=t[e];"}"===c&&o--,o>0?n.push(c):(n.length>0&&(r.push(n.join("")),s.push(j),n=[]),s.push(c)),"{"===c&&o++}n.length>0&&(r.push(n.join("")),s.push(j));return{escapedString:s.join(""),blocks:r}},T=(e,t,s)=>e.replace(t,((...e)=>{if(e[2]){const t=e[2].split(","),r=[];for(let o=0;o<t.length;o++){const n=t[o].trim();if(!n)break;r.push(s(d,n,e[3]))}return r.join(",")}return d+e[3]})),y=(e,t,s)=>e+t.replace(c,"")+s,k=(e,t,s)=>t.indexOf(c)>-1?y(e,t,s):e+t+s+", "+t+" "+e+s,C=(e,t)=>{var s;return!(s=(s=t).replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+s+")([>\\s~+[.,{:][\\s\\S]*)?$","m")).test(e)},L=(e,t)=>e.replace(W,((e,s="",r,o="",n="")=>s+t+o+n)),v=(e,t,s)=>{const r="."+(t=t.replace(/\[is=([^\]]*)\]/g,((e,...t)=>t[0]))),o=e=>{let o=e.trim();if(!o)return"";if(e.indexOf(d)>-1)o=((e,t,s)=>{if(m.lastIndex=0,m.test(e)){const t=`.${s}`;return e.replace(g,((e,s)=>L(s,t))).replace(m,t+" ")}return t+" "+e})(e,t,s);else{const t=e.replace(m,"");t.length>0&&(o=L(t,r))}return o},n=(e=>{const t=[];let s,r=0;return s=(e=e.replace(/(\[[^\]]*\])/g,((e,s)=>{const o=`__ph-${r}__`;return t.push(s),r++,o}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((e,s,o)=>{const n=`__ph-${r}__`;return t.push(o),r++,s+n})),{content:s,placeholders:t}})(e);let c,l="",i=0;const a=/( |>|\+|~(?!=))\s*/g;let p=!((e=n.content).indexOf(d)>-1);for(;null!==(c=a.exec(e));){const t=c[1],s=e.slice(i,c.index).trim();p=p||s.indexOf(d)>-1;l+=`${p?o(s):s} ${t} `,i=a.lastIndex}const h=e.substring(i);return p=p||h.indexOf(d)>-1,l+=p?o(h):h,u=n.placeholders,l.replace(/__ph-(\d+)__/g,((e,t)=>u[+t]));var u},B=(e,t,s,r,o)=>R(e,(e=>{let o=e.selector,n=e.content;"@"!==e.selector[0]?o=((e,t,s,r)=>e.split(",").map((e=>r&&e.indexOf("."+r)>-1?e.trim():C(e,t)?v(e,t,s).trim():e.trim())).join(", "))(e.selector,t,s,r):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(n=B(e.content,t,s,r));return{selector:o.replace(/\s{2,}/g," ").trim(),content:n}})),K=(e,t,s,r,o)=>{const n=((e,t)=>{const s="."+t+" > ",r=[];return e=e.replace(u,((...e)=>{if(e[2]){const t=e[2].trim(),o=e[3],n=s+t+o;let c="";for(let t=e[4]-1;t>=0;t--){const s=e[5][t];if("}"===s||","===s)break;c=s+c}const l=c+n,i=`${c.trimRight()}${n.trim()}`;if(l.trim()!==i.trim()){const e=`${i}, ${l}`;r.push({orgSelector:l,updatedSelector:e})}return n}return d+e[3]})),{selectors:r,cssText:e}})(e=(e=>T(e,h,k))(e=(e=>T(e,p,y))(e=e.replace($,i).replace(x,c).replace(w,l))),r);return e=(e=>f.reduce(((e,t)=>e.replace(t," ")),e))(e=n.cssText),t&&(e=B(e,t,s,r)),{cssText:(e=(e=e.replace(/-shadowcsshost-no-combinator/g,`.${s}`)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:n.selectors}},I=(e,t,s)=>{const r=t+"-h",o=t+"-s",n=e.match(b)||[];e=(e=>e.replace(_,""))(e);const c=[];if(s){const t=e=>{const t=`/*!@___${c.length}___*/`,s=`/*!@${e.selector}*/`;return c.push({placeholder:t,comment:s}),e.selector=t+e.selector,e};e=R(e,(e=>"@"!==e.selector[0]?t(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=R(e.content,t),e):e))}const l=K(e,t,r,o);return e=[l.cssText,...n].join("\n"),s&&c.forEach((({placeholder:t,comment:s})=>{e=e.replace(t,s)})),l.slottedSelectors.forEach((t=>{e=e.replace(t.orgSelector,t.updatedSelector)})),e}}));
//# sourceMappingURL=shadow-css.685be5c0.js.map