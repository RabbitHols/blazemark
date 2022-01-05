(this["webpackJsonpwebworkers-comlink-typescript-react"]=this["webpackJsonpwebworkers-comlink-typescript-react"]||[]).push([[0],{110:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),i=(t=n(42),t=n.n(t),n(50),n(2)),a=n(43),s=(n(110),n(44)),l=(n(117),n(120),n(121),"# Blaze Mark \u26a1\n\n\n**It's fast**. The parse is moved on a separate thread, that's allow the user to write without beeing blocked from the markdown parser. While writing inside the editor a webworker run the wasm module, so the main thread is never polluted allowing the user to write without waiting the markdown parser to finish.\n\n- The parse under the hood is done with [md4c](https://github.com/mity/md4c)\n- The editor is [Codemirror](https://codemirror.net/)\n\n\n\n**You can benchmark it with your favorite web markdown editor, by pasting huge text:**\n\n- [Stackedit](https://stackedit.io/)\n- [Editor.MD](https://pandao.github.io/editor.md/en.html)\n- [Dillinger](https://dillinger.io/)\n\n\n\n# CHANGELOG\n\n- 0.0.1 - A little compromise was made by downgrading the performance by porting the raw html to react vdom. With that the web worket take a few more milliseconds but we save a lot of them later during the painting time. \n\n\nYou can follow me on github **[RabbitHols](https://github.com/RabbitHols)**, as soon will be stable will be release as OSS.\n\n## COMING SOON IN THE NEXT RELEASE... !\n\nHouston we're approaching the speed of light, 100k line like nothing... \n> ###Even vscode is getting slow in comparison\n\n![](https://github.com/RabbitHols/blazemark/blob/main/ripvscode.gif?raw=true)\n");Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),t.a.render(r.a.createElement((function(){var e=Object(o.useState)(l),t=Object(i.a)(e,2),n=(e=t[0],t[1]);return e=Object(a.a)(e),r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(s.Codemirror,{value:l,options:{lineNumbers:!0,lineWrapping:!0,mode:"markdown",tabSize:2},onChange:function(e,t){n(e)}})),r.a.createElement("div",null,e))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},43:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d}));var o=n(2),r=n(15),i=n(1),a=n(4),s=n.n(a),l=n(53).Parser,c=n(109);function d(t){new l;var n,a=Object(i.useState)(null),d=Object(o.a)(a,2),u=(a=d[0],d[1]),p=(n=Object(i.useMemo)((function(){return t=new Worker(e,{name:"my-first-worker"}),{workerApi:n=Object(r.b)(t),cleanup:function(){n[r.a](),t.terminate()}};var t,n}),[]),Object(i.useEffect)((function(){var e=n.cleanup;return function(){e()}}),[n]),n).workerApi;return Object(i.useEffect)((function(){p.processMarkdownWithWorker(t).then((function(e){var t=Object(o.a)(e,2);e=t[0];t[1],s.a.isEmpty(e)?u(""):(e=function e(t){return s.a.map(t,(function(t){var n,o,r,i,a,l,c;return s.a.isObject(t)&&(t=s.a.assign({$$typeof:Symbol.for("react.element")},t),s.a.isArray(null===t||void 0===t||null===(n=t.props)||void 0===n?void 0:n.children)&&(t.props.children=e(t.props.children)),-1<(null===t||void 0===t||null===(o=t.props)||void 0===o||null===(r=o.children)||void 0===r?void 0:r.key)&&(t.props.children=s.a.assign({$$typeof:Symbol.for("react.element")},null===t||void 0===t||null===(i=t.props)||void 0===i?void 0:i.children),s.a.isObject(null===t||void 0===t||null===(a=t.props)||void 0===a||null===(l=a.children)||void 0===l||null===(c=l.props)||void 0===c?void 0:c.children)&&(t.props.children.props.children=s.a.assign({$$typeof:Symbol.for("react.element")},t.props.children.props.children)))),t}))}(e=c.parse(e)),u(e))}))}),[p,u,t]),a}}).call(this,n(51))},45:function(e,t,n){e.exports=n(122)},50:function(e,t,n){},51:function(e,t,n){e.exports=n.p+"static/js/my-first-worker.1644d0eb.chunk.worker.js"}},[[45,1,2]]]);