(this.webpackJsonpprojeteval=this.webpackJsonpprojeteval||[]).push([[0],{15:function(e,t,c){},23:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(16),r=c.n(i),j=(c(23),c(8)),d=c(7),l=c(0),a=function(e){var t=e.films;return Object(l.jsx)("div",{className:"container2",children:t.map((function(e){return e.title&&Object(l.jsxs)("article",{class:"film-card",children:[Object(l.jsx)("img",{className:"film-image",src:"https://image.tmdb.org/t/p/w500/"+e.backdrop_path,alt:e.title}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("h4",{className:"film-title",children:[" ",e.title]}),Object(l.jsxs)(d.b,{to:"details/"+e.id,children:[Object(l.jsx)("button",{className:"btn btn-primary film-text",children:"Voire plus d\xe9tails"})," "]})]})}))})};var b=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],i=t[1],r=Object(s.useState)([]),b=Object(j.a)(r,2),o=b[0],h=b[1],O="https://api.themoviedb.org/3/search/multi?api_key=e3e3d29c3d379923c3ef3321c35b73c0&language=fr&query=".concat(c,"&page=1&include_adult=false");return n.a.useEffect((function(){fetch(O).then((function(e){return e.json()})).then((function(e){h(e.results)}))}),[O,c]),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(d.b,{to:"/Liste-des-films-avec-React-/",children:Object(l.jsx)("button",{className:"btn btn-primary",id:"btnr",children:Object(l.jsx)("img",{src:"https://www.freeiconspng.com/uploads/home-page-icon-0.png",width:"35",alt:"Search Free Icon Image"})})}),Object(l.jsxs)("div",{className:"ss",children:["  ",Object(l.jsx)("br",{}),Object(l.jsxs)("div",{class:"input-group input-group-sm mb-3",children:[Object(l.jsx)("div",{class:"input-group-prepend",children:Object(l.jsx)("span",{class:"input-group-text btn btn-secondary",id:"inputGroup-sizing-sm",children:" Tapez le nom du film :"})}),Object(l.jsx)("input",{type:"text",class:"form-control","aria-label":"Small","aria-describedby":"inputGroup-sizing-sm",value:c,onChange:function(e){return i(e.target.value)}})]})]}),Object(l.jsx)("br",{})," ",Object(l.jsx)("br",{}),o&&Object(l.jsx)(a,{films:o}),!o&&Object(l.jsx)("h2",{children:" Loading ... "})]})};c(15),c(30);var o=function(){var e=n.a.useState([]),t=Object(j.a)(e,2),c=t[0],i=t[1];return Object(s.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=e3e3d29c3d379923c3ef3321c35b73c0&language=fr&page=1").then((function(e){return e.json()})).then((function(e){i(e.results)}))}),[]),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)(d.b,{to:"search",children:[Object(l.jsxs)("button",{className:"btn btn-primary",id:"btnr",children:["Recherche des films \xa0",Object(l.jsx)("img",{src:"https://www.freeiconspng.com/uploads/search-icon-png-21.png",width:"35",alt:"Search Free Icon Image"})]})," "]})," ",Object(l.jsx)("br",{})," ",Object(l.jsx)("br",{})," ",Object(l.jsx)("br",{}),Object(l.jsx)("h1",{children:" Liste des films populaires  "}),Object(l.jsx)("br",{}),Object(l.jsx)(a,{films:c})]})},h=c(2),O=function(e){var t=e.film;return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("h2",{children:[" Les d\xe9tails du film : ",t.title,"  "]}),Object(l.jsx)("br",{}),Object(l.jsx)("table",{className:"table table-bordered",id:"details",children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:" image"}),Object(l.jsxs)("td",{children:[" ",Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/"+t.backdrop_path,alt:""})]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:" budget"}),Object(l.jsxs)("td",{children:[" ",t.budget," "]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:" Link"}),Object(l.jsxs)("td",{children:[" ",Object(l.jsxs)("a",{href:t.homepage,children:[" ",t.homepage," "]})]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:" id"}),Object(l.jsxs)("td",{children:[" ",t.id," "]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:" imdb_id"}),Object(l.jsxs)("td",{children:[" ",t.imdb_id," "]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:" original_language"}),Object(l.jsxs)("td",{children:[" ",t.original_language," "]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:" original_title"}),Object(l.jsxs)("td",{children:[" ",t.original_title," "]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:" overview"}),Object(l.jsxs)("td",{children:[" ",t.overview," "]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:" popularity"}),Object(l.jsxs)("td",{children:[" ",t.popularity," "]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:" Poster"}),Object(l.jsx)("td",{children:Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/"+t.poster_path,alt:"Sans poster "})})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:" production companies "}),Object(l.jsx)("td",{children:Object(l.jsx)("ul",{children:null===t||void 0===t?void 0:t.production_companies.map((function(e){return Object(l.jsxs)("li",{children:[" ",e.name]})}))})})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:" production countries "}),Object(l.jsx)("td",{children:Object(l.jsx)("ul",{children:null===t||void 0===t?void 0:t.production_countries.map((function(e){return Object(l.jsxs)("li",{children:[" ",e.name]})}))})})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:" genres "}),Object(l.jsx)("td",{children:Object(l.jsx)("ul",{children:null===t||void 0===t?void 0:t.genres.map((function(e){return Object(l.jsxs)("li",{children:[" ",e.name]})}))})})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:" release_date"}),Object(l.jsxs)("td",{children:[" ",t.release_date," "]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:" revenue"}),Object(l.jsxs)("td",{children:[" ",t.revenue," "]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:" runtime"}),Object(l.jsxs)("td",{children:[" ",t.runtime," "]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:" Spoken languages "}),Object(l.jsx)("td",{children:Object(l.jsx)("ul",{children:null===t||void 0===t?void 0:t.spoken_languages.map((function(e){return Object(l.jsxs)("li",{children:[" ",e.english_name]})}))})})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:" status"}),Object(l.jsxs)("td",{children:[" ",t.status," "]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:" vote_average"}),Object(l.jsxs)("td",{children:[" ",t.vote_average," "]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:" vote_count"}),Object(l.jsxs)("td",{children:[" ",t.vote_count," "]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:" Tagline"}),Object(l.jsxs)("td",{children:[" ",t.tagline," "]})]})]})}),Object(l.jsx)("h2",{children:" Bande annonce "}),Object(l.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/"+t.video_url,frameBorder:"50",allow:"autoplay; encrypted-media",allowFullScreen:!0,title:"video"})]})};var x=function(){var e=n.a.useState(null),t=Object(j.a)(e,2),c=t[0],i=t[1],r="https://api.themoviedb.org/3/movie/"+Object(h.e)().id+"?api_key=e3e3d29c3d379923c3ef3321c35b73c0&language=fr";return Object(s.useEffect)((function(){fetch(r).then((function(e){return e.json()})).then((function(e){var t="https://api.themoviedb.org/3/movie/".concat(e.id,"/videos?api_key=e3e3d29c3d379923c3ef3321c35b73c0&language=fr");fetch(t).then((function(e){return e.json()})).then((function(t){var c,s=e;s.video_url=null===t||void 0===t||null===(c=t.results[0])||void 0===c?void 0:c.key,i(s)})).catch((function(e){}))}))}),[r]),console.log(c),c?Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)(d.b,{to:"/Liste-des-films-avec-React-/",children:[Object(l.jsxs)("button",{className:"btn btn-primary",id:"btnr",children:["Page d'accueil \xa0",Object(l.jsx)("img",{src:"https://www.freeiconspng.com/uploads/home-page-icon-0.png",width:"35",alt:"Search Free Icon Image"})]})," "]}),Object(l.jsx)(O,{film:c})]}):Object(l.jsx)("h1",{children:"Film introuvable"})};var u=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(d.a,{children:[Object(l.jsx)(h.a,{exact:!0,path:"/Liste-des-films-avec-React-/",component:o}),Object(l.jsx)(h.a,{exact:!0,path:"/search",component:b}),Object(l.jsx)(h.a,{exact:!0,path:"/Liste-des-films-avec-React-/search",component:b}),Object(l.jsx)(h.a,{exact:!0,path:"/details/:id",component:x}),Object(l.jsx)(h.a,{exact:!0,path:"/Liste-des-films-avec-React-/details/:id",component:x})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),p()}},[[31,1,2]]]);
//# sourceMappingURL=main.3d88b593.chunk.js.map