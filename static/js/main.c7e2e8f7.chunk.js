(this.webpackJsonpprojeteval=this.webpackJsonpprojeteval||[]).push([[0],{15:function(e,t,c){},23:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(16),r=c.n(i),a=(c(23),c(8)),l=c(7),o=c(0),j=function(e){var t=e.films;return Object(o.jsx)("div",{className:"container2",children:t.map((function(e){return e.title&&Object(o.jsxs)("article",{class:"film-card",children:[Object(o.jsxs)("h4",{className:"film-title",children:[" ",e.title]}),Object(o.jsx)("img",{className:"film-image",src:"https://image.tmdb.org/t/p/w500/"+e.backdrop_path,alt:e.title}),Object(o.jsxs)(l.a,{to:"/details/"+e.id,children:[Object(o.jsx)("button",{className:"btn btn-primary film-text",children:"Voire plus d\xe9tails"})," "]})]})}))})};c(15),c(30);var b=function(){var e=s.a.useState([]),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=e3e3d29c3d379923c3ef3321c35b73c0&language=fr&page=1").then((function(e){return e.json()})).then((function(e){i(e.results)}))}),[]),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)(l.a,{to:"/search",children:[Object(o.jsxs)("button",{className:"btn btn-primary",id:"btnr",children:["Recherche des films \xa0",Object(o.jsx)("img",{src:"https://www.freeiconspng.com/uploads/search-icon-png-21.png",width:"35",alt:"Search Free Icon Image"})]})," "]}),Object(o.jsx)("h1",{children:" Liste des films populaires  "}),Object(o.jsx)(j,{films:c})]})};c(2);var d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),d()}},[[31,1,2]]]);
//# sourceMappingURL=main.c7e2e8f7.chunk.js.map