(this["webpackJsonpbangkok-burger-list"]=this["webpackJsonpbangkok-burger-list"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"burgerPlaces":[{"name":"Daniel Thaiger","location":"asoke","price_range":"$$","ranking":1,"description":"Best burger","delivery":["Foodpanda"],"tags":["good_value","best_all_around"]},{"name":"Billy\'s Smoke House","location":"ploen_chit","price_range":"$$$","ranking":2,"description":"Best burger","delivery":["Foodpanda"],"tags":["smokey","best_all_around"]},{"name":"Paper Butter and the Burger","location":"ari","price_range":"$$","ranking":3,"description":"Best burger","delivery":["Foodpanda"],"tags":["amazing_fries","cool_environment"]},{"name":"Prime Burger","location":"phrom_phong","price_range":"$$","ranking":4,"description":"Best burger","delivery":["Foodpanda"],"tags":["smash_burgers","vegetarian_friendly"]}]}')},24:function(e,a,l){},25:function(e,a,l){},44:function(e,a,l){"use strict";l.r(a);var t=l(0),c=l.n(t),n=l(7),i=l.n(n),s=(l(24),l(25),l(5)),r=l.p+"static/media/burger.a07c91cb.png",j=l(1);var o=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:"logo",children:Object(j.jsx)("a",{href:"/",children:Object(j.jsx)("img",{src:r,alt:"logo"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/",children:"The List"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/about",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/contact",children:"Contact"})})]})})})},d=l(2),b=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"About Burgers"}),Object(j.jsx)("p",{children:"The goal of this site is to maintain a regular list of where to find delicious burgers in Bangkok."}),Object(j.jsx)("h3",{className:"mt-10",children:"Why?"}),Object(j.jsx)("p",{children:"Because burgers are the best food, obviously."})]})})},u=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Want to tell us about a new burger place?"}),Object(j.jsx)("p",{children:"Email: lise.carpenter@gmail.com"})]})})},h=l(10),m=l(9),g=l(19).burgerPlaces,x=function(){var e=Object(t.useState)(),a=Object(h.a)(e,2),l=a[0],c=a[1],n=Object(t.useState)(),i=Object(h.a)(n,2),s=i[0],r=i[1],o=Object(t.useState)(),d=Object(h.a)(o,2),b=d[0],u=d[1],x=Object(t.useState)(),O=Object(h.a)(x,2),p=O[0],v=O[1],f=g.map((function(e){var a=e.name,l=e.location,t=e.price_range,c=e.ranking,n=e.delivery,i=e.tags;e.description;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"bg-white rounded-lg text-left w-full md:w-1/2 mt-10 p-4 shadow-lg mx-auto",children:Object(j.jsxs)("div",{className:"w-full md:w-3/4 grid grid-cols-2",children:[Object(j.jsx)("label",{children:"Name"})," ",Object(j.jsx)("span",{className:"capitalize",children:a}),Object(j.jsx)("label",{children:"Location"})," ",Object(j.jsx)("span",{className:"capitalize",children:l}),Object(j.jsx)("label",{children:"Price"})," ",Object(j.jsx)("span",{className:"capitalize",children:t}),Object(j.jsx)("label",{children:"Ranking"})," ",Object(j.jsx)("span",{className:"capitalize",children:c}),Object(j.jsx)("label",{children:"Delivery"})," ",Object(j.jsx)("span",{className:"capitalize",children:n.join(", ")}),Object(j.jsx)("label",{children:"Tags"})," ",Object(j.jsx)("span",{className:"capitalize",children:i.join(", ")})]})})})})),N=l&&g.filter((function(e){var a=e.location;return l.value===a})),k=N&&N.map((function(e){var a=e.name,l=e.location,t=e.price_range,c=e.ranking,n=e.delivery,i=e.tags;e.description;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"bg-white rounded-lg text-left w-full md:w-1/2 mt-10 p-4 shadow-lg mx-auto",children:Object(j.jsxs)("div",{className:"w-full md:w-3/4 grid grid-cols-2",children:[Object(j.jsx)("label",{children:"Name"})," ",Object(j.jsx)("span",{className:"capitalize",children:a}),Object(j.jsx)("label",{children:"Location"})," ",Object(j.jsx)("span",{className:"capitalize",children:l}),Object(j.jsx)("label",{children:"Price"})," ",Object(j.jsx)("span",{className:"capitalize",children:t}),Object(j.jsx)("label",{children:"Ranking"})," ",Object(j.jsx)("span",{className:"capitalize",children:c}),Object(j.jsx)("label",{children:"Delivery"})," ",Object(j.jsx)("span",{className:"capitalize",children:n.join(", ")}),Object(j.jsx)("label",{children:"Tags"})," ",Object(j.jsx)("span",{className:"capitalize",children:i.join(", ")})]})})})}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"filter-wrapper w-full md:w-3/4 justify-center mt-10 block md:flex mx-auto",children:[Object(j.jsx)(m.a,{value:l,required:!0,options:[{label:"Ari",value:"ari"},{label:"Asoke",value:"asoke"},{label:"Phrom Phong",value:"phrom_phong"},{label:"Ploen Chit",value:"ploen_chit"}],onChange:c,placeholder:"Location",className:"text-left w-full md:w-1/4 md:mx-4"}),Object(j.jsx)(m.a,{value:s,required:!0,options:[{label:"$",value:"$"},{label:"$$",value:"$$"},{label:"$$$",value:"$$$"},{label:"$$$$",value:"$$$$"}],onChange:r,placeholder:"Price",isDisabled:!0,className:"text-left w-full md:w-1/4 md:mx-4"}),Object(j.jsx)(m.a,{value:b,required:!0,options:[{label:"Food Panda",value:"food_panda"},{label:"LINE MAN",value:"line_man"},{label:"GrabFood",value:"grab_food"},{label:"GoJek",value:"go_jek"}],onChange:u,placeholder:"Delivery",isDisabled:!0,className:"text-left w-full md:w-1/4 md:mx-4"}),Object(j.jsx)(m.a,{value:p,required:!0,options:[{label:"Best All Around",value:"best_all_around"},{label:"Good Value",value:"good_value"},{label:"Amazing Fries",value:"amazing_fries"},{label:"Smokey",value:"smokey"},{label:"Cool Environment",value:"cool_environment"},{label:"Smash Burgers",value:"smash_burgers"},{label:"Vegetarian Friendly",value:"vegetarian_friendly"}],onChange:v,placeholder:"Tags",isDisabled:!0,className:"text-left w-full md:w-1/4 md:mx-4"})]}),l?k:f]})},O=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"hero",children:[Object(j.jsx)("div",{className:"overlay"}),Object(j.jsxs)("div",{className:"hero-content",children:[Object(j.jsx)("h1",{children:"Bangkok Burger List \ud83c\udf54"}),Object(j.jsx)("p",{children:"The ultimate burger ranking list in Bangkok"})]})]}),Object(j.jsx)("div",{className:"w-full h-full ranking-section",children:Object(j.jsxs)("div",{className:"p-10",children:[Object(j.jsx)("em",{className:"text-white",children:"Last Updated: April 28, 2021"}),Object(j.jsx)(x,{})]})})]})};var p=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/about",children:Object(j.jsx)(b,{})}),Object(j.jsx)(d.a,{path:"/contact",children:Object(j.jsx)(u,{})}),Object(j.jsx)(d.a,{path:"/",children:Object(j.jsx)(O,{})})]})})})};var v=function(){return Object(j.jsxs)(s.a,{children:[Object(j.jsx)(o,{}),Object(j.jsx)(p,{})]})},f=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,45)).then((function(a){var l=a.getCLS,t=a.getFID,c=a.getFCP,n=a.getLCP,i=a.getTTFB;l(e),t(e),c(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),f()}},[[44,1,2]]]);
//# sourceMappingURL=main.9c68dce8.chunk.js.map