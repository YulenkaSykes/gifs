(this.webpackJsonpgifs=this.webpackJsonpgifs||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(11),s=c.n(r),i=(c(19),c(2)),l=c(10),o=c(3),j=(c(20),c(38)),d=c(0),b=function(e){var t=e.gif,c=Object(n.useContext)(_),a=c.store,r=c.dispatch,s=t.title,i=(t.user,t.trending_datetime,t.images),l=t.id;return Object(d.jsx)("div",{className:"gif",style:{background:"url(".concat(i.original.url,")")},children:Object(d.jsxs)("div",{className:"content col centered",children:[Object(d.jsx)("h2",{className:"tittle_card",children:s}),Object(d.jsxs)("div",{className:"row centered",children:[a.ll.find((function(e){return e.id===l}))?Object(d.jsx)("span",{onClick:function(){return r({type:"remove_from_ll",payload:t})},children:Object(d.jsx)(j.a,{fontSize:"large",children:"favorite"})}):Object(d.jsx)("span",{onClick:function(){return r({type:"add_to_ll",payload:t})},children:Object(d.jsx)(j.a,{fontSize:"large",children:"favorite_border"})}),Object(d.jsx)("span",{className:"icon",onClick:function(){r({type:"add_prev_gif",payload:t}),console.log(t),console.log(a.prevGif)},children:Object(d.jsx)(j.a,{children:"info"})}),Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("a",{href:i.original.url,children:Object(d.jsx)(j.a,{children:"download"})})})]})]})})},u=function(){var e=Object(n.useContext)(_).key,t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){fetch("https://api.giphy.com/v1/gifs/trending?api_key=".concat(e)).then((function(e){return e.json()})).then((function(e){r(e.data),console.log(e)}))}),[]),Object(d.jsxs)("div",{className:"col centered",children:[Object(d.jsx)("h1",{children:"Trends"}),Object(d.jsx)("div",{className:"wrapper row centered",children:(null===a||void 0===a?void 0:a.length)>0?a.map((function(e){return Object(d.jsx)(b,{gif:e})})):Object(d.jsx)("h1",{children:"Loading"})})]})},h=function(){var e=Object(n.useContext)(_).key,t=Object(n.useState)(!1),c=Object(i.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(""),l=Object(i.a)(s,2),o=l[0],j=l[1],u=Object(n.useState)(),h=Object(i.a)(u,2),O=h[0],f=h[1];return Object(d.jsxs)("div",{className:"col centered text",children:[Object(d.jsx)("h1",{children:"Enter a random word"}),Object(d.jsxs)("div",{className:"row centered",children:[Object(d.jsx)("input",{className:"input_t_s",type:"text",onChange:function(e){return j(e.target.value)},value:o}),Object(d.jsx)("button",{className:"btn",onClick:function(){var t;j(""),t=o,r(!0),fetch("https://api.giphy.com/v1/gifs/translate?api_key=".concat(e,"&s=").concat(t)).then((function(e){return e.json()})).then((function(e){r(!1),f(e.data),console.log(e)}))},children:"Create"})]}),a&&Object(d.jsx)("h1",{children:"Loading..."}),Object(d.jsx)("div",{className:"wrapper row",children:O&&Object(d.jsx)(b,{gif:O})})]})},O=c(13),f=c.n(O),p=function(){var e=Object(n.useContext)(_),t=e.store,c=e.dispatch,a=e.key,r=Object(n.useState)(!1),s=Object(i.a)(r,2),l=(s[0],s[1]),o=Object(n.useState)([]),u=Object(i.a)(o,2),h=u[0],O=u[1],p=Object(n.useState)([]),x=Object(i.a)(p,2),m=x[0],g=x[1],v=Object(n.useState)(),y=Object(i.a)(v,2),N=y[0],k=y[1],C=Object(n.useState)(),w=Object(i.a)(C,2),S=w[0],L=w[1],E=Object(n.useState)(!0),I=Object(i.a)(E,2),J=I[0],F=I[1];Object(n.useEffect)((function(){l(!0),fetch("https://api.giphy.com/v1/gifs/categories?api_key=".concat(a)).then((function(e){return e.json()})).then((function(e){l(!1),console.log(e),O(e.data)}))}),[]),Object(n.useEffect)((function(){G(N)}),[N]);var G=function(e){e&&fetch("https://api.giphy.com/v1/gifs/search?api_key=".concat(a,"&q=").concat(e)).then((function(e){return e.json()})).then((function(e){l(!1),g(e.data),console.log(e)}))};return Object(d.jsxs)("div",{className:"col centered",children:[N?Object(d.jsxs)("h1",{children:["Category: ",N&&N]}):Object(d.jsx)("h1",{children:"Select category"}),Object(d.jsxs)("div",{className:"row centered",children:[J?Object(d.jsxs)("aside",{className:"col",children:[Object(d.jsx)("span",{className:"icon-close",onClick:function(){return F(!1)},children:Object(d.jsx)(j.a,{children:"close"})}),Object(d.jsxs)("div",{className:"row centered search-input",children:[Object(d.jsx)("input",{type:"text",onChange:function(e){return L(e.target.value)}}),Object(d.jsx)(j.a,{children:"search"})]}),h.length>0&&S?h.filter((function(e){return e.name.includes(S)})).map((function(e){return Object(d.jsxs)("div",{className:"row centered category-tittle",children:[Object(d.jsx)("h3",{onClick:function(){return k(e.name)},children:e.name}),Object(d.jsxs)("div",{className:"row centered",children:[t.lc.find((function(t){return t===e.name}))?Object(d.jsx)("span",{style:{color:"red"},className:"icon",onClick:function(){return c({type:"remove_from_lc",payload:e.name})},children:Object(d.jsx)(j.a,{children:"favorite"})}):Object(d.jsx)("span",{className:"icon",onClick:function(){c({type:"add_lc",payload:e.name}),f.a.toast({html:"Return my favorite!"})},children:Object(d.jsx)(j.a,{children:"favorite"})}),Object(d.jsx)("img",{src:e.gif.images.original.url,alt:"gif"})]})]})})):h.map((function(e){return Object(d.jsxs)("div",{className:"row centered category-tittle",children:[Object(d.jsx)("h3",{onClick:function(){return k(e.name)},children:e.name}),Object(d.jsxs)("div",{className:"row centered",children:[t.lc.find((function(t){return t===e.name}))?Object(d.jsx)("span",{style:{color:"red"},className:"icon",onClick:function(){return c({type:"remove_from_lc",payload:e.name})},children:Object(d.jsx)(j.a,{children:"favorite"})}):Object(d.jsx)("span",{className:"icon",onClick:function(){return c({type:"add_lc",payload:e.name})},children:Object(d.jsx)(j.a,{children:"favorite"})}),Object(d.jsx)("img",{src:e.gif.images.original.url,alt:"gif"})]})]})}))]}):Object(d.jsx)("button",{className:"show-side-btn",onClick:function(){return F(!0)},children:"Categories"}),Object(d.jsx)("div",{className:"wrapper centered row",children:m.length>0&&m.map((function(e){return Object(d.jsx)(b,{gif:e})}))})]})]})},x=function(){var e=Object(n.useContext)(_).key,t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(""),l=Object(i.a)(s,2),o=l[0],j=l[1],u=Object(n.useState)(!1),h=Object(i.a)(u,2),O=h[0],f=h[1];return Object(d.jsxs)("div",{className:"col centered",children:[Object(d.jsx)("h1",{children:"Search"}),Object(d.jsxs)("div",{className:"row centered",children:[Object(d.jsx)("input",{className:"input_t_s",type:"text",onChange:function(e){return j(e.target.value)},value:o}),Object(d.jsx)("button",{className:"btn",onClick:function(){var t;j(""),t=o,f(!0),fetch("https://api.giphy.com/v1/gifs/search?api_key=".concat(e,"&q=").concat(t)).then((function(e){return e.json()})).then((function(e){f(!1),r(e.data),console.log(e)}))},children:"Search"})]}),O&&Object(d.jsx)("h1",{children:"Loading..."}),Object(d.jsx)("div",{className:"wrapper centered row",children:a.length>0&&a.map((function(e){return Object(d.jsx)(b,{gif:e})}))})]})},m=function(){var e=Object(n.useContext)(_),t=e.store,c=e.dispatch;return Object(d.jsxs)("div",{className:"like",children:[Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("span",{style:{margin:"10px"},className:"icon-close",onClick:function(){return c({type:"show_ll"})},children:Object(d.jsx)(j.a,{children:"close"})})}),Object(d.jsx)("h1",{children:"Like List"}),(null===t||void 0===t?void 0:t.ll.length)>0?t.ll.map((function(e){return Object(d.jsx)(b,{gif:e})})):Object(d.jsx)("h1",{children:"No like gifs"})]})},g=function(e){var t=e.category,c=Object(n.useContext)(_),a=c.key,r=c.dispatch,s=Object(n.useState)([]),l=Object(i.a)(s,2),o=l[0],u=l[1],h=Object(n.useState)(!1),O=Object(i.a)(h,2),f=O[0],p=O[1];return Object(n.useEffect)((function(){var e;e=t,p(!0),fetch("https://api.giphy.com/v1/gifs/search?api_key=".concat(a,"&q=").concat(e)).then((function(e){return e.json()})).then((function(e){u(e.data),p(!1),console.log(e)}))}),[]),Object(d.jsxs)("section",{className:"col section",children:[Object(d.jsxs)("h1",{children:[Object(d.jsx)("span",{className:"icon-close",onClick:function(){return r({type:"remove_from_lc",payload:t})},children:Object(d.jsx)(j.a,{children:"close"})}),t,""]}),Object(d.jsxs)("div",{className:"row gif-wrapper",children:[f&&Object(d.jsx)("h1",{children:"Loading..."}),o.length>0&&o.slice(0,7).map((function(e){return Object(d.jsx)(b,{gif:e})}))]})]})},v=function(){var e,t=Object(n.useContext)(_).store;return Object(d.jsx)("div",{className:"col main",children:(null===(e=t.lc)||void 0===e?void 0:e.length)>0?t.lc.map((function(e){return Object(d.jsx)(g,{category:e})})):Object(d.jsx)("h1",{className:" row centered",children:"No like categories"})})},y=function(e){var t=e.gif,c=Object(n.useContext)(_).dispatch,a=(t.title,t.user),r=t.trending_datetime,s=t.images;t.id;return Object(d.jsx)("div",{className:"col centered prev-wrapper",children:Object(d.jsxs)("div",{className:"row centered preview",children:[Object(d.jsx)("img",{src:s.original.url,alt:"",className:"gif_img"}),Object(d.jsxs)("div",{className:"col info",children:[Object(d.jsx)("span",{className:"icon-close",onClick:function(){return c({type:"remove_prev_gif"})},children:Object(d.jsx)(j.a,{children:"close"})}),a?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"row centered",children:[a.avatar_url?Object(d.jsx)("img",{src:a.avatar_url,alt:"",className:"avatar"}):Object(d.jsx)(j.a,{children:"person"}),Object(d.jsx)("p",{children:a.display_name})]}),Object(d.jsxs)("p",{children:["profile : ",Object(d.jsx)("a",{href:a.profile_url,children:"Link"})]}),Object(d.jsxs)("p",{children:["Instagram: ",Object(d.jsx)("a",{href:a.instagram_url,children:"Link"})]}),Object(d.jsxs)("p",{children:["Data of creationg:"," ",r.split(" ")[0].split("-").reverse().join(".")]})]}):Object(d.jsxs)("div",{className:"row centered",children:[Object(d.jsx)("h1",{children:"No user info"}),Object(d.jsx)(j.a,{children:"mood_bad"})]})]})]})})},_=Object(n.createContext)(null),N=function(e,t){switch(t.type){case"change_tab":return Object(o.a)(Object(o.a)({},e),{},{tab:t.payload});case"show_ll":return Object(o.a)(Object(o.a)({},e),{},{showLL:!e.showLL});case"init":return Object(o.a)(Object(o.a)({},e),{},{ll:t.payload});case"add_to_ll":return Object(o.a)(Object(o.a)({},e),{},{ll:[].concat(Object(l.a)(e.ll),[t.payload])});case"remove_from_ll":return Object(o.a)(Object(o.a)({},e),{},{ll:e.ll.filter((function(e){return e.id!==t.payload.id}))});case"add_prev_gif":return Object(o.a)(Object(o.a)({},e),{},{prevGif:t.payload});case"remove_prev_gif":return Object(o.a)(Object(o.a)({},e),{},{prevGif:null});case"init_lc":return Object(o.a)(Object(o.a)({},e),{},{lc:t.payload});case"add_lc":return Object(o.a)(Object(o.a)({},e),{},{lc:[].concat(Object(l.a)(e.lc),[t.payload])});case"remove_from_lc":return Object(o.a)(Object(o.a)({},e),{},{lc:e.lc.filter((function(e){return e!==t.payload}))});default:return e}};var k=function(){var e=Object(n.useReducer)(N,{tab:"trends",showLL:!1,ll:[]}),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){a({type:"init",payload:localStorage.getItem("ll")?JSON.parse(localStorage.getItem("ll")):[]}),a({type:"init_lc",payload:localStorage.getItem("lc")?JSON.parse(localStorage.getItem("lc")):[]})}),[]),Object(n.useEffect)((function(){localStorage.setItem("ll",JSON.stringify(c.ll))}),[c.ll]),Object(n.useEffect)((function(){localStorage.setItem("lc",JSON.stringify(c.lc))}),[c.lc]),Object(d.jsxs)("div",{className:"App col centered",children:[Object(d.jsxs)("header",{className:"row header centered",children:[Object(d.jsx)("button",{onClick:function(){return a({type:"change_tab",payload:"main"})},children:"My favorite"}),Object(d.jsx)("button",{onClick:function(){return a({type:"change_tab",payload:"trends"})},children:"Trends"}),Object(d.jsx)("button",{onClick:function(){return a({type:"change_tab",payload:"text"})},children:"Create Text"}),Object(d.jsx)("button",{onClick:function(){return a({type:"change_tab",payload:"search"})},children:"Search"}),Object(d.jsx)("button",{onClick:function(){return a({type:"change_tab",payload:"category"})},children:"Category"}),Object(d.jsx)("button",{onClick:function(){return a({type:"show_ll"})},children:"Like List"})]}),Object(d.jsxs)(_.Provider,{value:{store:c,dispatch:a,key:"87JQLyjE7LUEf2bII4WVvYCFmBxEujcz"},children:["main"===c.tab&&Object(d.jsx)(v,{}),"trends"===c.tab&&Object(d.jsx)(u,{}),"text"===c.tab&&Object(d.jsx)(h,{}),"search"===c.tab&&Object(d.jsx)(x,{}),"category"===c.tab&&Object(d.jsx)(p,{}),c.showLL&&Object(d.jsx)(m,{}),c.prevGif&&Object(d.jsx)(y,{gif:c.prevGif})]})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),C()}},[[27,1,2]]]);
//# sourceMappingURL=main.7e2b4c6a.chunk.js.map