(this["webpackJsonpmy-log"]=this["webpackJsonpmy-log"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(7),o=n.n(a),i=(n(28),n(15)),s=n(10),l=(n(29),n(39)),u=n(40),j=n(41),d=n(42),m=n(43),h=n(44),b=n(12),f=n(13),O=function(){function e(){Object(b.a)(this,e),this._start=-1,this._end=-1,this._comment=""}return Object(f.a)(e,[{key:"clone",value:function(){var t=new e;return t.start=this._start,t.end=this._end,t.comment=this._comment,t}},{key:"start",get:function(){return this._start},set:function(e){this._start=e}},{key:"end",get:function(){return this._end},set:function(e){this._end=e}},{key:"comment",get:function(){return this._comment},set:function(e){this._comment=e}}]),e}(),v=n(20),g=n.n(v),x="mylogDataWorks",k="mylogDataCurrent",S=function(){function e(){Object(b.a)(this,e)}return Object(f.a)(e,null,[{key:"getWorks",value:function(){var e=[];return x in localStorage&&JSON.parse(localStorage.getItem(x)).forEach((function(t){var n=new O;n.start=t._start,n.end=t._end,n.comment=t._comment,e.push(n)})),e}},{key:"saveWorks",value:function(e){localStorage.setItem(x,JSON.stringify(e))}},{key:"getCurrent",value:function(){var e=new O;if(k in localStorage){var t=JSON.parse(localStorage.getItem(k));e.start=t._start,e.comment=t._comment}return e}},{key:"saveCurrent",value:function(e){localStorage.setItem(k,JSON.stringify(e))}},{key:"clearCurrent",value:function(){localStorage.removeItem(k)}},{key:"clear",value:function(){localStorage.removeItem(x),localStorage.removeItem(k)}}]),e}(),_=n(5);var C=function(){var e=Object(c.useState)(new O),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),o=Object(s.a)(a,2),b=o[0],f=o[1],v=Object(c.useState)("not_start"),x=Object(s.a)(v,2),k=x[0],C=x[1],y=Object(c.useState)(""),w=Object(s.a)(y,2),p=w[0],I=w[1];Object(c.useEffect)((function(){var e=S.getWorks();f(e);var t=S.getCurrent();r(t)}),[]);var D=function(){var e=n.clone();e.start=(new Date).getTime(),r(e),C("started")},W=function(){if(0!==n.comment.length){I("");var e=n.clone();e.end=(new Date).getTime();var t=[].concat(Object(i.a)(b),[e]);f(t),S.saveWorks(t),r(new O),S.clearCurrent(),C("not_start")}else I("comment is required")},E=function(){if(0!==n.comment.length){I("");var e=n.clone();e.end=(new Date).getTime();var t=[].concat(Object(i.a)(b),[e]);f(t),S.saveWorks(t),S.clearCurrent();var c=new O;c.start=(new Date).getTime(),r(c),C("started")}else I("comment is required")},J=function(e){return e>0?g()(e).format("HH:mm"):""};return Object(_.jsx)("div",{className:"App",children:Object(_.jsx)("div",{children:Object(_.jsxs)(j.a,{children:[Object(_.jsx)(d.a,{children:p.length>0&&Object(_.jsx)(m.a,{variant:"danger",children:p})}),Object(_.jsx)(d.a,{children:"not_start"===k?Object(_.jsx)(l.a,{onClick:D,children:"Start"}):Object(_.jsxs)("div",{children:[Object(_.jsx)(l.a,{onClick:W,children:"End"}),Object(_.jsx)(l.a,{onClick:E,children:"End&Start"})]})}),Object(_.jsx)(d.a,{children:Object(_.jsx)(h.a.Control,{onChange:function(e){var t=n.clone();t.comment=e.target.value,r(t),S.saveCurrent(t)},value:n.comment})}),Object(_.jsxs)(d.a,{children:[n.comment," ",J(n.start)," - ",J(n.end)]}),Object(_.jsx)(d.a,{children:function(){var e=[];return b.forEach((function(t,n){e.push(Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:t.comment}),Object(_.jsx)("td",{children:Math.round((t.end-t.start)/36e5*100)/100}),Object(_.jsxs)("td",{children:[J(t.start)," - ",J(t.end)]}),Object(_.jsx)("td",{children:Object(_.jsx)(l.a,{onClick:function(){!function(e){b.splice(e,1);var t=Object(i.a)(b);f(t),S.saveWorks(t)}(n)},children:"Remove"})})]},n))})),Object(_.jsx)(u.a,{striped:!0,bordered:!0,children:Object(_.jsx)("tbody",{children:e})})}()}),Object(_.jsx)(d.a,{children:Object(_.jsx)(l.a,{onClick:function(){window.confirm("All clear")&&(S.clear(),f([]),r(new O))},children:"Clear"})})]})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};n(35);o.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(C,{})}),document.getElementById("root")),y()}},[[36,1,2]]]);
//# sourceMappingURL=main.94af08f4.chunk.js.map