(this.webpackJsonpalpha=this.webpackJsonpalpha||[]).push([[0],{58:function(e,n,t){},59:function(e,n,t){},60:function(e,n,t){"use strict";t.r(n);var c,s,r,i,a=t(1),l=t.n(a),j=t(23),d=t.n(j),o=t(7),b=t(3),u=t(24),h=t(0),p=function(e){var n=e.mapDetails.queryResults.queryResults[0],t=n.address.geo.lat,c=n.address.geo.lng,s=Object(u.a)("AIzaSyDotwU2adiNnkpHLGk5Rf9HE0qBUj9YReQ",{center:{lat:Math.round(t),lng:Math.round(c)},zoom:3}).ref;return Object(h.jsx)("div",{ref:s,style:{width:800,height:300}})},x=t(4),O=t(5),g=O.a.div(c||(c=Object(x.a)(["\n    .user-container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        border-radius: 25px;\n        background-color: #ffffff;\n\n        padding: 25px;\n        width: 100%;\n\n        img {\n            border-radius: 20%;\n            max-width: 200px;\n        }\n\n        &__header {\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            \n            h3 {\n                margin: 0;\n            }\n\n            &--img {\n                margin-left: 220px;\n            }\n        }\n\n        &__info {\n            margin-bottom: 50px;\n            align-items: flex-start;\n\n            img {\n                padding: 30px 0px;\n            }\n\n            p, h3 {\n                margin: 0;\n                font-weight: 100;\n                color: #808080;\n            }\n        }\n    }\n\n    .user-container-info {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: 1fr;\n\n        p {\n            margin: 0;\n        }\n\n        &__maps {\n            display: flex;\n            justify-content: center;\n            padding: 80px;\n        }\n    }  \n"]))),f=function(e){var n=e.queryResults;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(g,{children:Object(h.jsxs)("div",{className:"user-container",children:[Object(h.jsxs)("div",{className:"user-container user-container__header",children:[Object(h.jsx)("img",{className:"user-container__header--img",src:"https://www.configur.tech/wp-content/uploads/2020/12/Staff2.png"}),Object(h.jsxs)("div",{className:"user-container user-container__info",children:[Object(h.jsx)("h1",{children:n.queryResults[0].name}),Object(h.jsxs)("h3",{children:[Object(h.jsx)("b",{children:"Username:"})," ",n.queryResults[0].username]}),Object(h.jsxs)("h3",{children:[Object(h.jsx)("b",{children:"Phone:"})," ",n.queryResults[0].phone]}),Object(h.jsx)("img",{src:"https://www.configur.tech/wp-content/uploads/2020/12/Squiggles1.png"}),Object(h.jsxs)("h3",{children:[Object(h.jsx)("b",{children:"Email:"})," ",n.queryResults[0].email]}),Object(h.jsxs)("h3",{children:[Object(h.jsx)("b",{children:"Website:"})," ",n.queryResults[0].website]})]})]}),Object(h.jsxs)("div",{className:"user-container-info",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:"https://www.configur.tech/wp-content/uploads/2020/12/Squiggles1.png"}),Object(h.jsx)("h3",{children:"Address"}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Suite:"})," ",n.queryResults[0].address.suite]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Street:"})," ",n.queryResults[0].address.street]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"City:"})," ",n.queryResults[0].address.city]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Zipcode:"})," ",n.queryResults[0].address.zipcode]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:"https://www.configur.tech/wp-content/uploads/2020/12/squiggles2.png"}),Object(h.jsx)("h3",{children:"Company"}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Name:"})," ",n.queryResults[0].company.name]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"BS:"})," ",n.queryResults[0].company.bs]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Catch Phrase:"})," ",n.queryResults[0].company.catchPhrase]})]})]}),Object(h.jsx)("div",{className:"user-container-info__maps",children:Object(h.jsx)(p,{mapDetails:e})})]})})})},m=O.a.table(s||(s=Object(x.a)(["\n    margin-left: auto;\n    margin-right: auto;\n\n    border-collapse: collapse;\n    border-radius: 1em;\n    overflow: hidden;\n\n    tbody {\n        background-color: lightgray;\n    }\n\n    th {\n        text-align: left;\n        padding: 30px;\n        background-color: #2BB297;\n    }\n\n    td {\n        padding: 30px;\n    }\n\n    tbody:nth-of-type(odd) {\n        background-color: white;\n    }\n\n    .row-click {\n        cursor: pointer;\n    }\n"]))),y=function(e){var n=Object(a.useState)(!1),t=Object(b.a)(n,2),c=t[0],s=t[1];if(0===e.length)return Object(h.jsx)("p",{children:"No results found."});var r=function(){s(!0)};return Object(h.jsx)(h.Fragment,{children:!0===c?Object(h.jsx)(f,{queryResults:e}):Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(m,{className:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Username"}),Object(h.jsx)("th",{children:"Email"}),Object(h.jsx)("th",{children:"Phone"}),Object(h.jsx)("th",{children:"Website"}),Object(h.jsx)("th",{children:"More"})]})}),e.queryResults.map((function(e,n){return Object(h.jsx)("tbody",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.username}),Object(h.jsx)("td",{children:e.email}),Object(h.jsx)("td",{children:e.phone}),Object(h.jsx)("td",{children:e.website}),Object(h.jsx)("td",{className:"row-click",onClick:r,children:"..."})]})},n)}))]})})})},v=t(12),w=t.n(v),q=t(28),N=t(29),R=t.n(N),S=t(30),_=t.n(S),k=O.a.div(r||(r=Object(x.a)(["\n    .pagination {\n        margin: 65px auto;\n        display: flex;\n        list-style: none;\n        outline: none;\n    }\n\n    .pagination > .active > a {\n        background-color: #2BB297;\n        border-color: #47ccde ;\n        color: #fff;\n    }\n\n    .pagination > li > a {  \n        padding: 5px 10px;\n        outline: none;\n        cursor: pointer;\n    }\n\n    .pagination > li > a, .pagination > li > span {\n        color: #000000;\n    }\n"]))),C=function(){var e=Object(a.useState)(0),n=Object(b.a)(e,2),t=n[0],c=n[1],s=Object(a.useState)([]),r=Object(b.a)(s,2),i=r[0],l=r[1],j=Object(a.useState)(5),d=Object(b.a)(j,1)[0],u=Object(a.useState)(0),p=Object(b.a)(u,2),x=p[0],O=p[1],g=Object(a.useState)(""),f=Object(b.a)(g,2),v=f[0],N=f[1],S=Object(a.useState)([]),C=Object(b.a)(S,2),P=C[0],F=C[1],E=function(){var e=Object(q.a)(w.a.mark((function e(){var n,c,s,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("https://jsonplaceholder.typicode.com/users");case 2:n=e.sent,c=n.data,s=c.slice(t,t+d),r=Object(h.jsxs)(m,{className:"table table__default",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Username"}),Object(h.jsx)("th",{children:"Email"}),Object(h.jsx)("th",{children:"Phone"}),Object(h.jsx)("th",{children:"Website"})]})}),s.map((function(e,n){return Object(h.jsx)("tbody",{children:Object(h.jsxs)("tr",{onClick:B,children:[Object(h.jsx)("td",{className:"row-click",children:e.name}),Object(h.jsx)("td",{children:e.username}),Object(h.jsx)("td",{children:e.email}),Object(h.jsx)("td",{children:e.phone}),Object(h.jsx)("td",{children:e.website})]},n)})}))]}),l(r),O(Math.ceil(c.length/d));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){E()}),[t]),Object(a.useEffect)((function(){if(v.length>0){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){e.filter((function(e){if(e.name.includes(v))return F([].concat(Object(o.a)(P),[e]))}))}))}}),[v]);var B=function(e){var n=e.target.innerHTML;N(n)};return Object(h.jsxs)(h.Fragment,{children:[P.length>0?Object(h.jsx)(y,{queryResults:P}):i,Object(h.jsx)(k,{children:Object(h.jsx)(_.a,{previousLabel:"Prev",nextLabel:"Next",breakLabel:"...",pageCount:x,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var n=e.selected;c(n+1)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})})]})},P=O.a.input(i||(i=Object(x.a)(["\n    font-family: 'Poppins', sans-serif;\n    box-shadow: 3px 3px 20px 3px rgb(0 0 0 / 20%);\n    \n    width: 60%;\n    padding: 15px;\n    text-align: left;\n\n    border-radius: 10px;\n    border: none;\n"]))),F=function(){var e=Object(a.useState)(""),n=Object(b.a)(e,2),t=n[0],c=n[1],s=Object(a.useState)([]),r=Object(b.a)(s,2),i=r[0],l=r[1];Object(a.useEffect)((function(){c(t)})),Object(a.useEffect)((function(){if(t.length>0){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){e.filter((function(e){return e.name.includes(t)||e.username.includes(t)?l([].concat(Object(o.a)(i),[e])):void 0}))}))}}),[t]);var j=function(e){var n=e.target.value,t=n.charAt(0).toUpperCase()+n.slice(1);c(t),l([])},d=function(){c("")};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(P,{type:"text",placeholder:"Please enter a name...",value:t,onChange:j,onFocus:d})}),i.length>0?Object(h.jsx)(y,{queryResults:i}):Object(h.jsx)(C,{})]})},E=t.p+"static/media/logo.bd400292.png",B=(t(58),function(){return Object(h.jsxs)("div",{className:"page-container",children:[Object(h.jsx)("div",{className:"page-container page-container__header",children:Object(h.jsx)("img",{src:E,alt:""})}),Object(h.jsx)(F,{})]})}),L=(t(59),function(){return Object(h.jsx)("div",{className:"app",children:Object(h.jsx)(B,{})})}),D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,61)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),s(e),r(e),i(e)}))};d.a.render(Object(h.jsx)(l.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),D()}},[[60,1,2]]]);
//# sourceMappingURL=main.1cc61eb3.chunk.js.map