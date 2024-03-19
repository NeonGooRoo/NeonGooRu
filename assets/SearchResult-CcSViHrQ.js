import{l as I,i as Z,m as ee,p as U,q as te,s as ae,v as le,x as se,j as L,y as E,z as re,A as M,k as a,B as F,C as O,R as _,D as ue,E as ie,G as oe,H as ne,I as ce,J as ve,K as De,L as de,O as he,M as ye,N as pe,P as me,Q as ge,S as Be,T as j}from"./app-0QgF8O21.js";const fe=["/","/resources.html","/blog/","/en/","/guide/focus.html","/guide/handwriting.html","/guide/how-to.html","/guide/jpdb.html","/guide/mext.html","/software/","/software/activitywatch.html","/software/anki.html","/software/asbplayer.html","/software/jidoujisho.html","/software/jl.html","/software/mpv.html","/software/ocr-tools.html","/software/other.html","/software/subtitles.html","/software/vn.html","/software/yomitan.html","/en/guide/","/en/demo/","/en/demo/disable.html","/en/demo/layout.html","/en/demo/markdown.html","/en/demo/page.html","/en/guide/bar/","/en/guide/bar/baz.html","/en/guide/foo/","/en/guide/foo/ray.html","/404.html","/guide/","/category/","/category/%D1%80%D0%B5%D1%81%D1%83%D1%80%D1%81%D1%8B/","/category/%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/","/category/%D0%B8%D1%81%D0%BD%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/","/en/category/","/en/category/guide/","/tag/","/tag/%D0%BE%D0%B1%D1%8F%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5/","/tag/%D1%83%D1%87%D0%B5%D1%82-%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8/","/tag/%D1%84%D0%BB%D0%B5%D1%88%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%87%D0%BA%D0%B8/","/tag/%D0%BC%D0%B0%D0%B9%D0%BD%D0%B8%D0%BD%D0%B3/","/tag/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE/","/tag/%D0%B2%D0%BD%D0%B8%D0%B3%D1%80%D1%8B/","/tag/android/","/tag/ocr/","/tag/%D1%81%D1%83%D0%B1%D1%82%D0%B8%D1%82%D1%80%D1%8B/","/en/tag/","/en/tag/disable/","/en/tag/encryption/","/en/tag/layout/","/en/tag/markdown/","/en/tag/page-config/","/en/tag/guide/","/article/","/en/article/","/star/","/en/star/","/timeline/","/en/timeline/"],we="SEARCH_PRO_QUERY_HISTORY",h=I(we,[]),He=()=>{const{queryHistoryCount:l}=j,s=l>0;return{enabled:s,queryHistory:h,addQueryHistory:r=>{s&&(h.value.length<l?h.value=Array.from(new Set([r,...h.value])):h.value=Array.from(new Set([r,...h.value.slice(0,l-1)])))},removeQueryHistory:r=>{h.value=[...h.value.slice(0,r),...h.value.slice(r+1)]}}},T=l=>fe[l.id]+("anchor"in l?`#${l.anchor}`:""),ke="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:q}=j,y=I(ke,[]),Re=()=>{const l=q>0;return{enabled:l,resultHistory:y,addResultHistory:s=>{if(l){const r={link:T(s),display:s.display};"header"in s&&(r.header=s.header),y.value.length<q?y.value=[r,...y.value]:y.value=[r,...y.value.slice(0,q-1)]}},removeResultHistory:s=>{y.value=[...y.value.slice(0,s),...y.value.slice(s+1)]}}},Ce=l=>{const s=ce(),r=U(),Q=ve(),i=L(!1),m=De([]);return de(()=>{const{search:w,terminate:p}=he(),H=()=>{m.value=[],i.value=!1},g=Be(D=>{i.value=!0,D?w(D,r.value,s.value).then(d=>{var k,B;return((B=(k=s.value).searchFilter)==null?void 0:B.call(k,d,D,r.value,Q.value))??d}).then(d=>{m.value=d,i.value=!1}).catch(d=>{console.error(d),H()}):H()},j.searchDelay);M([l,r],()=>g(l.value),{immediate:!0}),ye(()=>{p()})}),{searching:i,results:m}};var be=Z({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(l,{emit:s}){const r=ee(),Q=U(),i=te(ae),{enabled:m,addQueryHistory:w,queryHistory:p,removeQueryHistory:H}=He(),{enabled:g,resultHistory:D,addResultHistory:d,removeResultHistory:k}=Re(),B=m||g,b=le(l,"query"),{results:f,searching:z}=Ce(b),u=se({isQuery:!0,index:0}),c=L(0),v=L(0),P=E(()=>B&&(p.value.length>0||D.value.length>0)),x=E(()=>f.value.length>0),S=E(()=>f.value[c.value]||null),Y=()=>{const{isQuery:e,index:t}=u;t===0?(u.isQuery=!e,u.index=e?D.value.length-1:p.value.length-1):u.index=t-1},G=()=>{const{isQuery:e,index:t}=u;t===(e?p.value.length-1:D.value.length-1)?(u.isQuery=!e,u.index=0):u.index=t+1},J=()=>{c.value=c.value>0?c.value-1:f.value.length-1,v.value=S.value.contents.length-1},K=()=>{c.value=c.value<f.value.length-1?c.value+1:0,v.value=0},N=()=>{v.value<S.value.contents.length-1?v.value+=1:K()},V=()=>{v.value>0?v.value-=1:J()},A=e=>e.map(t=>pe(t)?t:a(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=me[e.index]||"$content",[o,C=""]=ge(t)?t[Q.value].split("$content"):t.split("$content");return e.display.map(n=>a("div",A([o,...n,C])))}return e.display.map(t=>a("div",A(t)))},R=()=>{c.value=0,v.value=0,s("updateQuery",""),s("close")};return re("keydown",e=>{if(l.isFocusing){if(x.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const t=S.value.contents[v.value];w(l.query),d(t),r.push(T(t)),R()}}else if(g){if(e.key==="ArrowUp")Y();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=u;u.isQuery?(s("updateQuery",p.value[t]),e.preventDefault()):(r.push(D.value[t].link),R())}}}}),M([c,v],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:b.value?!x.value:!P.value}],id:"search-pro-results"},b.value===""?B?P.value?[m?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.queryHistory),p.value.map((e,t)=>a("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===t}],onClick:()=>{s("updateQuery",e)}},[a(F,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:O,onClick:o=>{o.preventDefault(),o.stopPropagation(),H(t)}})]))])):null,g?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.resultHistory),D.value.map((e,t)=>a(_,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===t}],onClick:()=>{R()}},()=>[a(F,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(o=>A(o)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:O,onClick:o=>{o.preventDefault(),o.stopPropagation(),k(t)}})]))])):null]:i.value.emptyHistory:i.value.emptyResult:z.value?a(ue,{hint:i.value.searching}):x.value?a("ul",{class:"search-pro-result-list"},f.value.map(({title:e,contents:t},o)=>{const C=c.value===o;return a("li",{class:["search-pro-result-list-item",{active:C}]},[a("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),t.map((n,X)=>{const $=C&&v.value===X;return a(_,{to:T(n),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{w(l.query),d(n),R()}},()=>[n.type==="text"?null:a(n.type==="title"?ie:n.type==="heading"?oe:ne,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?a("div",{class:"content-header"},n.header):null,a("div",W(n))])])})])})):i.value.emptyResult)}});export{be as default};
