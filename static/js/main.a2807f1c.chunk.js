(this.webpackJsonpalpha=this.webpackJsonpalpha||[]).push([[0],{24:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(17),r=c.n(i),j=c(2),a=c(19),d=c(16),h=(c(24),c(0)),l=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)([]),r=Object(d.a)(i,2),l=r[0],b=r[1],o=Object(j.f)();Object(n.useEffect)((function(){s(c)})),Object(n.useEffect)((function(){var e=setTimeout((function(){if(c.length>0){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){e.filter((function(e){if(e.name.includes(c))return b([].concat(Object(a.a)(l),[e]))}))}))}}),400);return function(){return clearTimeout(e)}}),[c]);var O=function(e){var t=e.target.value,c=t.charAt(0).toUpperCase()+t.slice(1);s(c),b([])},u=function(e){o.push({pathname:"/userDetails",state:{user:l}})};return Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)(n.Fragment,{children:Object(h.jsx)("input",{type:"text",placeholder:"Please enter a name...",value:c,onChange:O})}),0===l.length?Object(h.jsx)("p",{children:"No results found."}):Object(h.jsx)(n.Fragment,{children:Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Username"}),Object(h.jsx)("th",{children:"Email"}),Object(h.jsx)("th",{children:"More"})]})}),l.map((function(e,t){return Object(h.jsx)("tbody",{onClick:u,children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.username}),Object(h.jsx)("td",{children:e.email}),Object(h.jsx)("td",{children:"..."})]})},t)}))]})})]})},b=c.p+"static/media/logo.bd400292.png",o=(c(34),function(){return Object(h.jsxs)("div",{className:"page-container",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:b,alt:""})}),Object(h.jsx)(l,{})]})}),O=(c(35),function(e){var t=e.location.state.user[0],c=Object(j.f)(),s=function(e){c.push({pathname:"/"})};return Object(h.jsx)(n.Fragment,{children:Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)("div",{className:"home",onClick:s,children:"< Back"}),Object(h.jsxs)("div",{className:"user-container",children:[Object(h.jsxs)("div",{className:"user-container user-info-header",children:[Object(h.jsx)("h1",{children:t.name}),Object(h.jsxs)("h3",{children:["Contact number: ",t.phone]}),Object(h.jsx)("div",{children:"---------"}),Object(h.jsxs)("h3",{children:["Email: ",t.email]}),Object(h.jsxs)("h3",{children:["Website: ",t.website]})]}),Object(h.jsxs)("div",{className:"user-container-info",children:[Object(h.jsxs)("div",{className:"user-container info",children:[Object(h.jsx)("h3",{children:"Address"}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Suite:"})," ",t.address.suite]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Street:"})," ",t.address.street]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"City:"})," ",t.address.city]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Zipcode:"})," ",t.address.zipcode]})]}),Object(h.jsxs)("div",{className:"user-container info",children:[Object(h.jsx)("h3",{children:"Company"}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Name:"})," ",t.company.name]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"BS:"})," ",t.company.bs]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Catch Phrase:"})," ",t.company.catchPhrase]})]})]})]})]})})});c(36);var u=function(){return Object(h.jsx)("div",{className:"app",children:Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{exact:!0,path:"/",component:o}),Object(h.jsx)(j.a,{path:"/userDetails",component:O})]})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))},m=c(8);r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(m.a,{basename:window.location.pathname||"",children:Object(h.jsx)(u,{})})}),document.getElementById("root")),x()}},[[37,1,2]]]);
//# sourceMappingURL=main.a2807f1c.chunk.js.map