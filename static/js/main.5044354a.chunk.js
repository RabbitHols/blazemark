(this["webpackJsonpwebworkers-comlink-typescript-react"]=this["webpackJsonpwebworkers-comlink-typescript-react"]||[]).push([[0],{110:function(e,n,r){},122:function(e,n,r){"use strict";r.r(n);var o=r(1),t=r.n(o),i=(n=r(42),n=r.n(n),r(50),r(2)),c=r(43),a=(r(110),r(44)),l=(r(117),r(120),r(121),"$$ k $$");Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),n.a.render(t.a.createElement((function(){var e=Object(o.useState)(l),n=Object(i.a)(e,2),r=(e=n[0],n[1]);return e=Object(c.a)(e),t.a.createElement("div",{className:"App"},t.a.createElement("div",null,t.a.createElement(a.Codemirror,{value:l,options:{lineNumbers:!0,lineWrapping:!0,mode:"markdown",tabSize:2},onChange:function(e,n){r(e)}})),t.a.createElement("div",null,e))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},43:function(e,n,r){"use strict";(function(e){r.d(n,"a",(function(){return u}));var o=r(2),t=r(15),i=r(1),c=r(4),a=r.n(c),l=r(53).Parser,s=r(109);function u(n){new l;var r,c=Object(i.useState)(null),u=Object(o.a)(c,2),p=(c=u[0],u[1]),d=(r=Object(i.useMemo)((function(){return n=new Worker(e,{name:"my-first-worker"}),{workerApi:r=Object(t.b)(n),cleanup:function(){r[t.a](),n.terminate()}};var n,r}),[]),Object(i.useEffect)((function(){var e=r.cleanup;return function(){e()}}),[r]),r).workerApi;return Object(i.useEffect)((function(){d.processMarkdownWithWorker(n).then((function(e){var n=Object(o.a)(e,2);e=n[0];n[1],a.a.isEmpty(e)?p(""):(e=function e(n){return a.a.map(n,(function(n){var r,o,t,i,c,l,s;return a.a.isObject(n)&&(n=a.a.assign({$$typeof:Symbol.for("react.element")},n),a.a.isArray(null===n||void 0===n||null===(r=n.props)||void 0===r?void 0:r.children)&&(n.props.children=e(n.props.children)),-1<(null===n||void 0===n||null===(o=n.props)||void 0===o||null===(t=o.children)||void 0===t?void 0:t.key)&&(n.props.children=a.a.assign({$$typeof:Symbol.for("react.element")},null===n||void 0===n||null===(i=n.props)||void 0===i?void 0:i.children),a.a.isObject(null===n||void 0===n||null===(c=n.props)||void 0===c||null===(l=c.children)||void 0===l||null===(s=l.props)||void 0===s?void 0:s.children)&&(n.props.children.props.children=a.a.assign({$$typeof:Symbol.for("react.element")},n.props.children.props.children)))),n}))}(e=s.parse(e)),console.log(e),p(e))}))}),[d,p,n]),c}}).call(this,r(51))},45:function(e,n,r){e.exports=r(122)},50:function(e,n,r){},51:function(e,n,r){e.exports=r.p+"static/js/my-first-worker.3618b1f1.chunk.worker.js"}},[[45,1,2]]]);