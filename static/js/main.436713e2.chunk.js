(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{35:function(e,t,a){e.exports=a(46)},41:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(22),r=a.n(c),m=a(8),o=a(2),i=(a(40),a(41),a(56)),s=function(){return l.a.createElement(i.a,null,l.a.createElement(i.a.Item,null,l.a.createElement(m.b,{to:"/",exact:!0},"Home")),l.a.createElement(i.a.Item,null,l.a.createElement(m.b,{to:"/tabs"},"Tabs")))},u=function(e){var t=e.tabs,a=Object(o.f)().tabId,n=t.find((function(e){return e.id===a}));return l.a.createElement("div",{className:"tabs-page"},l.a.createElement("ul",{className:"list"},t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(m.b,{to:"/tabs/".concat(e.id)},e.title))}))),l.a.createElement("div",{className:"content"},l.a.createElement("p",null,n?n.content:"Please select a tab")))},b=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],E=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(s,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/tabs/:tabId?"},l.a.createElement(u,{tabs:b})),l.a.createElement(o.a,{path:"/",exact:!0},l.a.createElement("h1",null,"Home"))))};r.a.render(l.a.createElement(m.a,null,l.a.createElement(E,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.436713e2.chunk.js.map