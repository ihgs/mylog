(this["webpackJsonpmy-log"]=this["webpackJsonpmy-log"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(12),o=n.n(a),s=(n(39),n(19)),i=n(13),l=(n(40),n(54)),j=n(55),u=n(50),d=n(51),m=n(52),b=n(53),h=n(56),O=n(21),f=n(22),v=function(){function e(){Object(O.a)(this,e),this._start=-1,this._end=-1,this._comment=""}return Object(f.a)(e,[{key:"clone",value:function(){var t=new e;return t.start=this._start,t.end=this._end,t.comment=this._comment,t}},{key:"start",get:function(){return this._start},set:function(e){this._start=e}},{key:"end",get:function(){return this._end},set:function(e){this._end=e}},{key:"comment",get:function(){return this._comment},set:function(e){this._comment=e}}]),e}(),g=n(33),x=n.n(g),k="mylogDataWorks",C="mylogDataCurrent",S=function(){function e(){Object(O.a)(this,e)}return Object(f.a)(e,null,[{key:"getWorks",value:function(){var e=[];return k in localStorage&&JSON.parse(localStorage.getItem(k)).forEach((function(t){var n=new v;n.start=t._start,n.end=t._end,n.comment=t._comment,e.push(n)})),e}},{key:"saveWorks",value:function(e){localStorage.setItem(k,JSON.stringify(e))}},{key:"getCurrent",value:function(){var e=new v;if(C in localStorage){var t=JSON.parse(localStorage.getItem(C));e.start=t._start,e.comment=t._comment}return e}},{key:"saveCurrent",value:function(e){localStorage.setItem(C,JSON.stringify(e))}},{key:"clearCurrent",value:function(){localStorage.removeItem(C)}},{key:"clear",value:function(){localStorage.removeItem(k),localStorage.removeItem(C)}}]),e}(),y=n(5);var _=function(){var e=Object(c.useState)(new v),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),o=Object(i.a)(a,2),O=o[0],f=o[1],g=Object(c.useState)("not_start"),k=Object(i.a)(g,2),C=k[0],_=k[1],w=Object(c.useState)(""),p=Object(i.a)(w,2),I=p[0],W=p[1],D=Object(c.useState)(new v),E=Object(i.a)(D,2),T=E[0],J=E[1],F=Object(c.useState)(0),N=Object(i.a)(F,2),B=N[0],H=N[1],q=Object(c.useState)(!1),A=Object(i.a)(q,2),L=A[0],M=A[1],P=function(){return M(!1)};Object(c.useEffect)((function(){var e=S.getWorks();f(e);var t=S.getCurrent();r(t)}),[]);var R=function(){var e=n.clone();e.start=(new Date).getTime(),r(e),_("started")},z=function(){if(0!==n.comment.length){W("");var e=n.clone();e.end=(new Date).getTime();var t=[].concat(Object(s.a)(O),[e]);f(t),S.saveWorks(t),r(new v),S.clearCurrent(),_("not_start")}else W("comment is required")},G=function(){if(0!==n.comment.length){W("");var e=n.clone();e.end=(new Date).getTime();var t=[].concat(Object(s.a)(O),[e]);f(t),S.saveWorks(t),S.clearCurrent();var c=new v;c.start=(new Date).getTime(),r(c),_("started")}else W("comment is required")},K=function(e){var t=T.clone();t.comment=e.target.value,J(t);var n=Object(s.a)(O);n[B]=T,f(n),S.saveWorks(n)},Q=function(e){return e>0?x()(e).format("HH:mm"):""};return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)("div",{children:Object(y.jsxs)(m.a,{children:[Object(y.jsx)(b.a,{children:I.length>0&&Object(y.jsx)(h.a,{variant:"danger",children:I})}),Object(y.jsx)(b.a,{children:"not_start"===C?Object(y.jsx)(u.a,{onClick:R,children:"Start"}):Object(y.jsxs)("div",{children:[Object(y.jsx)(u.a,{onClick:z,children:"End"}),Object(y.jsx)(u.a,{onClick:G,children:"End&Start"})]})}),Object(y.jsx)(b.a,{children:Object(y.jsx)(j.a.Control,{onChange:function(e){var t=n.clone();t.comment=e.target.value,r(t),S.saveCurrent(t)},value:n.comment})}),Object(y.jsxs)(b.a,{children:[n.comment," ",Q(n.start)," - ",Q(n.end)]}),Object(y.jsx)(b.a,{children:function(){var e=[];return O.forEach((function(t,n){e.push(Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:t.comment}),Object(y.jsx)("td",{children:Math.round((t.end-t.start)/36e5*100)/100}),Object(y.jsxs)("td",{children:[Q(t.start)," - ",Q(t.end)]}),Object(y.jsxs)("td",{children:[Object(y.jsx)(u.a,{onClick:function(){!function(e){J(O[e]),H(e),M(!0)}(n)},children:"Edit"}),Object(y.jsx)(u.a,{onClick:function(){!function(e){O.splice(e,1);var t=Object(s.a)(O);f(t),S.saveWorks(t)}(n)},children:"Remove"})]})]},n))})),Object(y.jsx)(d.a,{striped:!0,bordered:!0,children:Object(y.jsx)("tbody",{children:e})})}()}),Object(y.jsx)(b.a,{children:Object(y.jsx)(u.a,{onClick:function(){window.confirm("All clear")&&(S.clear(),f([]),r(new v))},children:"Clear"})}),Object(y.jsxs)(l.a,{show:L,onHide:P,children:[Object(y.jsx)(l.a.Header,{closeButton:!0,children:Object(y.jsx)(l.a.Title,{children:"\u7de8\u96c6"})}),Object(y.jsx)(l.a.Body,{children:Object(y.jsx)(j.a.Control,{onChange:K,value:T.comment})}),Object(y.jsx)(l.a.Footer,{children:Object(y.jsx)(u.a,{variant:"secondary",onClick:P,children:"Close"})})]})]})})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};n(46);o.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(_,{})}),document.getElementById("root")),w()}},[[47,1,2]]]);
//# sourceMappingURL=main.0740718a.chunk.js.map