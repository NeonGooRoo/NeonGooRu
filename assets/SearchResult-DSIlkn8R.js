import{u as I,f as Z,g as ee,h as U,i as te,j as ae,t as se,k as le,l as q,m as S,n as re,p as M,q as a,s as $,v as O,R as _,x as De,y as ue,z as oe,A as ne,B as ie,C as ce,D as Be,E as ve,O as he,F as de,G as me,P as ye,H as ge,I as pe,J as F}from"./app-DlDwmOE_.js";const fe=["/","/resources.html","/blog/","/guide/focus.html","/guide/handwriting.html","/guide/how-to.html","/guide/jpdb.html","/guide/mext.html","/en/","/en/resources.html","/software/","/software/activitywatch.html","/software/anki.html","/software/asbplayer.html","/software/jidoujisho.html","/software/jl.html","/software/memento.html","/software/mpv.html","/software/ocr-tools.html","/software/other.html","/software/subtitles.html","/software/vn.html","/software/yomitan.html","/en/guide/focus.html","/en/guide/handwriting.html","/en/guide/how-to.html","/en/guide/jpdb.html","/en/guide/mext.html","/en/blog/","/en/software/","/en/software/activitywatch.html","/en/software/anki.html","/en/software/asbplayer.html","/en/software/jidoujisho.html","/en/software/jl.html","/en/software/mpv.html","/en/software/ocr-tools.html","/en/software/other.html","/en/software/subtitles.html","/en/software/vn.html","/en/software/yomitan.html","/404.html","/guide/","/en/guide/","/category/","/category/%D1%80%D0%B5%D1%81%D1%83%D1%80%D1%81%D1%8B/","/category/%D0%B3%D0%B0%D0%B9%D0%B4/","/category/%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/","/category/%D0%B8%D1%81%D0%BD%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/","/en/category/","/en/category/resources/","/en/category/guide/","/en/category/%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/","/en/category/%D0%B8%D1%81%D0%BD%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/","/tag/","/tag/%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5/","/tag/%D0%BE%D0%B1%D1%8F%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5/","/tag/%D0%BD%D0%BE%D0%B2%D0%B8%D1%87%D0%BA%D0%B0%D0%BC/","/tag/%D1%83%D1%87%D0%B5%D1%82-%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8/","/tag/%D1%84%D0%BB%D0%B5%D1%88%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%87%D0%BA%D0%B8/","/tag/%D0%BC%D0%B0%D0%B9%D0%BD%D0%B8%D0%BD%D0%B3/","/tag/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE/","/tag/%D0%B2%D0%BD%D0%B8%D0%B3%D1%80%D1%8B/","/tag/android/","/tag/ocr/","/tag/%D1%81%D1%83%D0%B1%D1%82%D0%B8%D1%82%D1%80%D1%8B/","/en/tag/","/en/tag/tools/","/en/tag/lifehacks/","/en/tag/in-the-works/","/en/tag/handwriting/","/en/tag/must-have/","/en/tag/for-beginners/","/en/tag/%D0%BE%D0%B1%D1%8F%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5/","/en/tag/%D1%83%D1%87%D0%B5%D1%82-%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8/","/en/tag/%D1%84%D0%BB%D0%B5%D1%88%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%87%D0%BA%D0%B8/","/en/tag/%D0%BC%D0%B0%D0%B9%D0%BD%D0%B8%D0%BD%D0%B3/","/en/tag/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE/","/en/tag/%D0%B2%D0%BD%D0%B8%D0%B3%D1%80%D1%8B/","/en/tag/android/","/en/tag/ocr/","/en/tag/%D1%81%D1%83%D0%B1%D1%82%D0%B8%D1%82%D1%80%D1%8B/","/article/","/en/article/","/star/","/en/star/","/timeline/","/en/timeline/"],we="SEARCH_PRO_QUERY_HISTORY",h=I(we,[]),Ce=()=>{const{queryHistoryCount:s}=F,l=s>0;return{enabled:l,queryHistory:h,addQueryHistory:r=>{l&&(h.value.length<s?h.value=Array.from(new Set([r,...h.value])):h.value=Array.from(new Set([r,...h.value.slice(0,s-1)])))},removeQueryHistory:r=>{h.value=[...h.value.slice(0,r),...h.value.slice(r+1)]}}},L=s=>fe[s.id]+("anchor"in s?`#${s.anchor}`:""),He="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:j}=F,d=I(He,[]),ke=()=>{const s=j>0;return{enabled:s,resultHistory:d,addResultHistory:l=>{if(s){const r={link:L(l),display:l.display};"header"in l&&(r.header=l.header),d.value.length<j?d.value=[r,...d.value]:d.value=[r,...d.value.slice(0,j-1)]}},removeResultHistory:l=>{d.value=[...d.value.slice(0,l),...d.value.slice(l+1)]}}},Re=s=>{const l=ie(),r=U(),x=ce(),u=q(!1),y=Be([]);return ve(()=>{const{search:w,terminate:m}=he(),C=()=>{y.value=[],u.value=!1},g=pe(B=>{u.value=!0,B?w(B,r.value,l.value).then(v=>{var H,p;return((p=(H=l.value).searchFilter)==null?void 0:p.call(H,v,B,r.value,x.value))??v}).then(v=>{y.value=v,u.value=!1}).catch(v=>{console.error(v),C()}):C()},F.searchDelay);M([s,r],()=>g(s.value),{immediate:!0}),de(()=>{m()})}),{searching:u,results:y}};var Qe=Z({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:l}){const r=ee(),x=U(),u=te(ae),{enabled:y,addQueryHistory:w,queryHistory:m,removeQueryHistory:C}=Ce(),{enabled:g,resultHistory:B,addResultHistory:v,removeResultHistory:H}=ke(),p=y||g,Q=se(s,"query"),{results:f,searching:Y}=Re(Q),D=le({isQuery:!0,index:0}),i=q(0),c=q(0),P=S(()=>p&&(m.value.length>0||B.value.length>0)),b=S(()=>f.value.length>0),E=S(()=>f.value[i.value]||null),z=()=>{const{isQuery:e,index:t}=D;t===0?(D.isQuery=!e,D.index=e?B.value.length-1:m.value.length-1):D.index=t-1},G=()=>{const{isQuery:e,index:t}=D;t===(e?m.value.length-1:B.value.length-1)?(D.isQuery=!e,D.index=0):D.index=t+1},J=()=>{i.value=i.value>0?i.value-1:f.value.length-1,c.value=E.value.contents.length-1},V=()=>{i.value=i.value<f.value.length-1?i.value+1:0,c.value=0},K=()=>{c.value<E.value.contents.length-1?c.value+=1:V()},N=()=>{c.value>0?c.value-=1:J()},A=e=>e.map(t=>me(t)?t:a(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=ye[e.index]||"$content",[o,R=""]=ge(t)?t[x.value].split("$content"):t.split("$content");return e.display.map(n=>a("div",A([o,...n,R])))}return e.display.map(t=>a("div",A(t)))},k=()=>{i.value=0,c.value=0,l("updateQuery",""),l("close")};return re("keydown",e=>{if(s.isFocusing){if(b.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const t=E.value.contents[c.value];w(s.query),v(t),r.push(L(t)),k()}}else if(g){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=D;D.isQuery?(l("updateQuery",m.value[t]),e.preventDefault()):(r.push(B.value[t].link),k())}}}}),M([i,c],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:Q.value?!b.value:!P.value}],id:"search-pro-results"},Q.value===""?p?P.value?[y?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},u.value.queryHistory),m.value.map((e,t)=>a("div",{class:["search-pro-result-item",{active:D.isQuery&&D.index===t}],onClick:()=>{l("updateQuery",e)}},[a($,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:O,onClick:o=>{o.preventDefault(),o.stopPropagation(),C(t)}})]))])):null,g?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},u.value.resultHistory),B.value.map((e,t)=>a(_,{to:e.link,class:["search-pro-result-item",{active:!D.isQuery&&D.index===t}],onClick:()=>{k()}},()=>[a($,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(o=>A(o)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:O,onClick:o=>{o.preventDefault(),o.stopPropagation(),H(t)}})]))])):null]:u.value.emptyHistory:u.value.emptyResult:Y.value?a(De,{hint:u.value.searching}):b.value?a("ul",{class:"search-pro-result-list"},f.value.map(({title:e,contents:t},o)=>{const R=i.value===o;return a("li",{class:["search-pro-result-list-item",{active:R}]},[a("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),t.map((n,X)=>{const T=R&&c.value===X;return a(_,{to:L(n),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{w(s.query),v(n),k()}},()=>[n.type==="text"?null:a(n.type==="title"?ue:n.type==="heading"?oe:ne,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?a("div",{class:"content-header"},n.header):null,a("div",W(n))])])})])})):u.value.emptyResult)}});export{Qe as default};
