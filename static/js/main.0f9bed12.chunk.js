(this.webpackJsonpprojeteval=this.webpackJsonpprojeteval||[]).push([[0],{15:function(e,t,c){},23:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(16),r=c.n(i),a=(c(23),c(8)),l=c(7),j=c(0),o=function(e){var t=e.films;return Object(j.jsx)("div",{className:"container2",children:t.map((function(e){return e.title&&Object(j.jsxs)("article",{class:"film-card",children:[Object(j.jsxs)("h4",{className:"film-title",children:[" ",e.title]}),Object(j.jsx)("img",{className:"film-image",src:"https://image.tmdb.org/t/p/w500/"+e.backdrop_path,alt:e.title}),Object(j.jsxs)(l.a,{to:"/details/"+e.id,children:[Object(j.jsx)("button",{className:"btn btn-primary film-text",children:"Voire plus d\xe9tails"})," "]})]})}))})};c(15),c(30);var b=function(){var e=n.a.useState([]),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(s.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=e3e3d29c3d379923c3ef3321c35b73c0&language=fr&page=1").then((function(e){return e.json()})).then((function(e){i(e.results)}))}),[]),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)(l.a,{to:"/search",children:[Object(j.jsxs)("button",{className:"btn btn-primary",id:"btnr",children:["Recherche des films \xa0",Object(j.jsx)("img",{src:"https://www.freeiconspng.com/uploads/search-icon-png-21.png",width:"35",alt:"Search Free Icon Image"})]})," "]}),Object(j.jsx)("h1",{children:" Liste des films populaires  "}),Object(j.jsx)(o,{films:c})]})};c(2);var d=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"ssss"}),Object(j.jsx)(b,{})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),h()}},[[31,1,2]]]);
//# sourceMappingURL=main.0f9bed12.chunk.js.map