(this.webpackJsonpshopiee=this.webpackJsonpshopiee||[]).push([[0],{14:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"e",(function(){return c})),a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return s}));var n=a(4);function o(e){return{type:n.b,payload:e}}function c(e){return{type:n.f,payload:e}}function i(e){return{type:n.e,payload:e}}function r(e){return{type:n.c,payload:e}}function s(e){return{type:n.d,payload:e}}},17:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={in:{opacity:1},out:{opacity:0}}},29:function(e,t,a){},30:function(e,t,a){e.exports=a(44)},39:function(e,t,a){},4:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return o})),a.d(t,"f",(function(){return c})),a.d(t,"e",(function(){return i})),a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return s}));var n="ADD_DATA",o="ADD_TO_CART",c="REMOVE_FROM_CART ",i="REDUCE_ORDER_QUANTITY",r="FILTER_ORDERS",s="EMPTY_CART"},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(18),i=a.n(c),r=a(10),s=a(5),u=a(13),l=a(2),d=(a(39),function(){return o.a.createElement("header",{className:"main-navigation"},o.a.createElement("div",{className:"main-navigation-logo"},o.a.createElement("h3",null,"SHOPIEE")),o.a.createElement("nav",{className:"main-navigation-item"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(r.b,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(r.b,{to:"/products"},"Products")),o.a.createElement("li",null,o.a.createElement(r.b,{to:"/cart"}," Cart")))))}),p=function(){return o.a.createElement("h1",{style:{textAlign:"center"}},"Welcome to shopiee")},m=a(14),h=(a(41),function(e){var t=e.id,a=e.brand,n=e.photos,c=e.quantity,i=e.size,r=e.price,u=Object(s.b)(),l=function(){u(Object(m.e)({id:t,price:r}))};return o.a.createElement("div",{className:"product-container"},o.a.createElement("img",{src:n[0],size:"tiny",alt:a}),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("strong",null,a)),o.a.createElement("label",null,o.a.createElement("strong",null,"Quantity: "),c," units"),o.a.createElement("label",null,o.a.createElement("strong",null,"Size: "),i)),o.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},o.a.createElement("button",{onClick:function(){return 0===c?l():function(){var e={id:t,quantity:c};u(Object(m.d)(e))}()}},"Reduce"),o.a.createElement("button",{onClick:function(){return l()}},"Remove")))}),f=function(){var e=Object(s.c)((function(e){return e.products.cart}));if(!e)return"Loading..";var t=e.map((function(e){return o.a.createElement(h,{key:e.id,id:e.id,photos:e.photos,brand:e.brand,category:e.category,price:e.price,quantity:e.quantity,size:e.size})}));return o.a.createElement(o.a.Fragment,null," ",t," ")},b=function(e){var t=e.cart,a=Object(s.c)((function(e){return e.products.amount}));return console.log(a),o.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},o.a.createElement("h3",null,"My shopping bag (",t.length," Items)"),o.a.createElement("h3",null,"Total \u20b9 ",a.toLocaleString()))},y=function(e){var t=e.onButtonClick,a=Object(s.c)((function(e){return e.products.amount}));return o.a.createElement("div",{className:"product-description-container"},o.a.createElement("h3",null,"Price Details"),o.a.createElement("div",{className:"total-label-container"},o.a.createElement("label",null,"Total Amount"),o.a.createElement("label",null,"Rs. ",a)),o.a.createElement("div",{className:"total-label-container"},o.a.createElement("label",null,"Eligible Discount"),o.a.createElement("label",null,"Rs. ",Math.floor(100*Math.random())+1)),o.a.createElement("button",{onClick:t},"Checkout"))},g=a(11),E=a(17),w=(a(29),function(e){var t=Object(s.c)((function(e){return e.products.cart})),a=t.map((function(e){return e.quantity}));if(0===t.length)return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"There's nothing in your cart"),o.a.createElement("button",{onClick:function(){return e.history.push("/")}},"All products"));return o.a.createElement(g.b.div,{initial:"out",exit:"out",animate:"in",variants:E.a},o.a.createElement("div",{className:"grid-container-cart"},o.a.createElement("div",null,o.a.createElement(b,{quantity:a,cart:t}),o.a.createElement(f,{cart:t})),o.a.createElement(y,{onButtonClick:function(){e.history.push("/completed")},quantity:a})))}),v=function(e){var t=Object(s.b)();return Object(n.useEffect)((function(){t(Object(m.b)(""))})),o.a.createElement(g.b.div,{initial:"out",exit:"out",animate:"in",variants:E.a},o.a.createElement("h2",{style:{textAlign:"center"}},"Thanks for shopping with us!",o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){return e.history.push("/")}},"All Products")))},T=(a(42),Object(n.lazy)((function(){return a.e(4).then(a.bind(null,51))}))),z=Object(n.lazy)((function(){return a.e(3).then(a.bind(null,50))}));var A=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"App"},o.a.createElement(d,null),o.a.createElement("main",{className:"main-content"},o.a.createElement(g.a,null,o.a.createElement(n.Suspense,{fallback:o.a.createElement("div",null,"Loading..")},o.a.createElement(l.d,null,o.a.createElement(l.b,{exact:!0,path:"/",component:p}),o.a.createElement(l.b,{exact:!0,path:"/products",component:T}),o.a.createElement(l.b,{path:"/details/:slug",component:z}),o.a.createElement(l.b,{path:"/cart",component:w}),o.a.createElement(l.b,{path:"/completed",component:v})))))))},O=a(20),R=a(3),M=a(4),j={products:[{id:1,brand:"Highlander",category:"Casual Shirt",size:"",price:455,quantity:1,photos:["https://images-codacious.s3.ap-south-1.amazonaws.com/107386c0-6081-4c61-9898-f9adabf9d2061529385860750-HRX-by-Hrithik-Roshan-Men-Charcoal-Grey-Slim-Advanced-Rapid--7.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/02e0a549-8eb9-4fe9-b934-6defd31ac7291548937957899-AMERICAN-EAGLE-OUTFITTERS-Men-Tshirts-1961548937956898-4.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/4c3260fa-d085-4f00-a285-f1acd88b43311571123456811-GAP-Mens-All-Day-Pique-Polo-Shirt-7361571123455295-4.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/693d0cf6-0c4d-4f97-a399-1284c7abb1d81529385860848-HRX-by-Hrithik-Roshan-Men-Charcoal-Grey-Slim-Advanced-Rapid--2.webp"]},{id:2,brand:"Nautica",category:"Casual Shirt",size:"",price:580,quantity:1,photos:["https://images-codacious.s3.ap-south-1.amazonaws.com/10909a08-74d3-47aa-9099-77faf0d6878f1564575072993-Levis-Men-Tshirts-3111564575071505-3.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/dc490212-3d6d-414c-8194-9f9f10ad105d1571123456993-GAP-Mens-All-Day-Pique-Polo-Shirt-7361571123455295-1.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/10909a08-74d3-47aa-9099-77faf0d6878f1564575072993-Levis-Men-Tshirts-3111564575071505-3.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/dc490212-3d6d-414c-8194-9f9f10ad105d1571123456993-GAP-Mens-All-Day-Pique-Polo-Shirt-7361571123455295-1.webp"]},{id:3,brand:"HRX by Hrithik Roshan",category:"T-Shirt",size:"",price:365,quantity:1,photos:["https://images-codacious.s3.ap-south-1.amazonaws.com/11523254006898-HRX-by-Hrithik-Roshan-Men-Navy-Blue-Solid-Round-Neck-T-shirt-4811523254006766-5.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/11523254006973-HRX-by-Hrithik-Roshan-Men-Navy-Blue-Solid-Round-Neck-T-shirt-4811523254006766-1.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/fa949f97-f594-4d2a-9b76-50d4bc772e2f1564575072974-Levis-Men-Tshirts-3111564575071505-4.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/11523254006898-HRX-by-Hrithik-Roshan-Men-Navy-Blue-Solid-Round-Neck-T-shirt-4811523254006766-5.webp"]},{id:4,brand:"Calvin",category:"T-Shirt",size:"",price:245,quantity:1,photos:["https://images-codacious.s3.ap-south-1.amazonaws.com/4a1d6cad-7f50-42c8-862a-5b4160f75dd51576221535629-AMERICAN-EAGLE-OUTFITTERS-Men-Tshirts-1691576221533577-5.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/10909a08-74d3-47aa-9099-77faf0d6878f1564575072993-Levis-Men-Tshirts-3111564575071505-3.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/dc490212-3d6d-414c-8194-9f9f10ad105d1571123456993-GAP-Mens-All-Day-Pique-Polo-Shirt-7361571123455295-1.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/fa949f97-f594-4d2a-9b76-50d4bc772e2f1564575072974-Levis-Men-Tshirts-3111564575071505-4.webp"]},{id:5,brand:"Wrogn",category:"Casual Tshirt",size:"",price:545,quantity:1,photos:["https://images-codacious.s3.ap-south-1.amazonaws.com/6fa37981-485a-4462-80f7-f1b7563362de1562570408475-Levis-Men-Tshirts-7271562570407368-4.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/10909a08-74d3-47aa-9099-77faf0d6878f1564575072993-Levis-Men-Tshirts-3111564575071505-3.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/dc490212-3d6d-414c-8194-9f9f10ad105d1571123456993-GAP-Mens-All-Day-Pique-Polo-Shirt-7361571123455295-1.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/fa949f97-f594-4d2a-9b76-50d4bc772e2f1564575072974-Levis-Men-Tshirts-3111564575071505-4.webp"]},{id:6,brand:"Highlander",category:"Casual Shirt",size:"",price:455,quantity:1,photos:["https://images-codacious.s3.ap-south-1.amazonaws.com/6fa37981-485a-4462-80f7-f1b7563362de1562570408475-Levis-Men-Tshirts-7271562570407368-4.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/10909a08-74d3-47aa-9099-77faf0d6878f1564575072993-Levis-Men-Tshirts-3111564575071505-3.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/dc490212-3d6d-414c-8194-9f9f10ad105d1571123456993-GAP-Mens-All-Day-Pique-Polo-Shirt-7361571123455295-1.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/fa949f97-f594-4d2a-9b76-50d4bc772e2f1564575072974-Levis-Men-Tshirts-3111564575071505-4.webp"]},{id:7,brand:"Nautica",category:"Casual Shirt",size:"",price:580,quantity:1,photos:["https://images-codacious.s3.ap-south-1.amazonaws.com/65c6d246-60c6-4ae7-9122-11a284eb56621548937957913-AMERICAN-EAGLE-OUTFITTERS-Men-Tshirts-1961548937956898-3+(1).webp","https://images-codacious.s3.ap-south-1.amazonaws.com/10909a08-74d3-47aa-9099-77faf0d6878f1564575072993-Levis-Men-Tshirts-3111564575071505-3.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/dc490212-3d6d-414c-8194-9f9f10ad105d1571123456993-GAP-Mens-All-Day-Pique-Polo-Shirt-7361571123455295-1.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/fa949f97-f594-4d2a-9b76-50d4bc772e2f1564575072974-Levis-Men-Tshirts-3111564575071505-4.webp"]},{id:8,brand:"HRX",category:"T-Shirt",size:"",price:365,quantity:1,photos:["https://images-codacious.s3.ap-south-1.amazonaws.com/6fa37981-485a-4462-80f7-f1b7563362de1562570408475-Levis-Men-Tshirts-7271562570407368-4.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/10909a08-74d3-47aa-9099-77faf0d6878f1564575072993-Levis-Men-Tshirts-3111564575071505-3.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/dc490212-3d6d-414c-8194-9f9f10ad105d1571123456993-GAP-Mens-All-Day-Pique-Polo-Shirt-7361571123455295-1.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/fa949f97-f594-4d2a-9b76-50d4bc772e2f1564575072974-Levis-Men-Tshirts-3111564575071505-4.webp"]}],cart:[],amount:"",filteredProducts:""};var P=function(e,t){return e.findIndex((function(e){return e.id===t}))},S=function(e,t,a){var n=P(e,t.id),o=Object(O.a)(e),c=o[n],i={};return i=a===M.b?Object(R.a)(Object(R.a)({},c),{},{quantity:c.quantity+t.quantity}):Object(R.a)(Object(R.a)({},c),{},{quantity:c.quantity-1}),o[n]=i,o},k=function(e){return e.map((function(e){return e.price*e.quantity})).reduce((function(e,t){return e+t}))},q=function(e,t){return"price-lh"===e?t.products.concat().sort((function(e,t){return e.price-t.price})):"price-hl"===e?t.products.concat().sort((function(e,t){return t.price-e.price})):t.products},C=Object(u.b)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.a:return Object(R.a)(Object(R.a)({},e),{},{products:t.payload});case M.b:var a=P(e.cart,t.payload.id),n=a>=0?S(e.cart,t.payload,t.type):[].concat(Object(O.a)(e.cart),[t.payload]),o=k(n);return Object(R.a)(Object(R.a)({},e),{},{cart:n,amount:o});case M.e:var c=P(e.cart,t.payload.id),i=c>=0?S(e.cart,t.payload,t.type):[].concat(Object(O.a)(e.cart),[t.payload]),r=k(i);return Object(R.a)(Object(R.a)({},e),{},{cart:i,amount:r});case M.f:var s=e.cart.filter((function(e){return e.id!==t.payload.id}));return Object(R.a)(Object(R.a)({},e),{},{cart:s,amount:e.amount-t.payload.price});case M.d:var u=q(t.payload,e);return Object(R.a)(Object(R.a)({},e),{},{filteredProducts:u});case M.c:return Object(R.a)(Object(R.a)({},e),{},{cart:[]});default:return e}}}),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(43);var D=Object(u.c)(C);i.a.render(o.a.createElement(s.a,{store:D},o.a.createElement(r.a,null,o.a.createElement(A,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/shopiee",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/shopiee","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(t,e)}))}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.67d37085.chunk.js.map