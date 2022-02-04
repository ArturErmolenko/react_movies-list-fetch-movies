(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var s=c(8),n=c.n(s),i=(c(15),c(10)),a=c(3),r=c(1),l=(c(16),c(17),c(18),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.Plot,Object(l.jsx)("br",{})]})]})]})},j=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbID)}))})},d=c(6),b=c(2),u=c.n(b),m=(c(21),c(9)),h=c.n(m);function v(e){return O.apply(this,arguments)}function O(){return(O=Object(d.a)(u.a.mark((function e(t){var c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://www.omdbapi.com/?apikey=9a9e9e07&t=".concat(t),e.next=3,fetch(c);case 3:if(s=e.sent){e.next=6;break}throw new Error("NONE");case 6:return e.abrupt("return",s.json());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(e){var t=e.addMovie,c=Object(r.useState)(""),s=Object(a.a)(c,2),n=s[0],i=s[1],j=Object(r.useState)(null),b=Object(a.a)(j,2),m=b[0],O=b[1],x=Object(r.useState)(!1),f=Object(a.a)(x,2),p=f[0],N=f[1],g=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,v(n);case 4:if((t=e.sent).Title){e.next=8;break}return N(!0),e.abrupt("return");case 8:O(t),N(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsxs)("label",{className:"label",htmlFor:"movie-title",children:["Movie title",Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{value:n,onChange:function(e){i(e.target.value),N(!1)},type:"text",id:"movie-title",placeholder:"Enter a title to search",className:h()("input",{"is-danger":p})})})]}),p&&Object(l.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-light",onClick:g,children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){m&&(t(m),i(""),O(null))},children:"Add to the list"})})]})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),m&&Object(l.jsx)(o,{movie:m})]})]})},f=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(j,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(x,{addMovie:function(e){c.every((function(t){return t.imdbID!==e.imdbID}))&&s((function(t){return[].concat(Object(i.a)(t),[e])}))}})})]})};n.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.7460985e.chunk.js.map