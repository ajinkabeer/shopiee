(this.webpackJsonpshopiee=this.webpackJsonpshopiee||[]).push([[0],{140:function(e,a,t){},141:function(e,a,t){},142:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(11),r=t.n(o),i=t(19),s=t(3),l=t(26),u=t(15),d=(t(86),function(){return c.a.createElement("header",{className:"main-navigation"},c.a.createElement("div",{className:"main-navigation-logo"},c.a.createElement("h3",null,"SHOPIEE")),c.a.createElement("nav",{className:"main-navigation-item"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(i.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/cart"}," Cart")))))}),m=t(9);function p(e){return{type:"ADD_TO_CART",payload:e}}var h=t(20),f=(t(59),function(e){var a=e.id,t=e.photos,o=e.brand,r=e.category,i=e.price,l=e.quantity,d=Object(n.useState)(!1),f=Object(m.a)(d,2),b=f[0],E=f[1],g=Object(s.b)();return c.a.createElement("div",{className:"card"},b&&c.a.createElement(u.a,{to:{pathname:"/details/".concat(a),id:a}}),c.a.createElement("img",{key:a,src:t[0],alt:o,onClick:function(){return E(!0)}}),c.a.createElement("div",{className:"card-container"},c.a.createElement("h4",null,o),c.a.createElement("p",null,r),c.a.createElement("p",null,c.a.createElement("strong",null,"Rs. ",i.toLocaleString()))),c.a.createElement("div",{className:"button-container"},c.a.createElement("button",{className:"add-to-cart",onClick:function(){return g(p({id:a,photos:t,brand:o,category:r,price:i,quantity:l,size:"small"})),void Object(h.b)("Added ".concat(o," to cart"))}},c.a.createElement("strong",null,"Add to cart")),c.a.createElement("p",null,"Available in all sizes")))}),b=t(12),E={in:{opacity:1},out:{opacity:0}},g=(t(41),t(5)),y=(t(88),function(e){var a=Object.assign({},e),t=Object(g.a)({},a.filter),n=Object(m.a)(t.filter,1)[0];return c.a.createElement(c.a.Fragment,null,c.a.createElement("label",null,"Filter by"),c.a.createElement("select",{className:"filter",onChange:function(e){n(e.target.value)},style:{marginBottom:15}},c.a.createElement("option",{value:"none"},"None"),c.a.createElement("option",{value:"price-lh"},"Price: Low to High"),c.a.createElement("option",{value:"price-hl"},"Price: High to Low")))}),v=function(e){var a=Object.assign({},e);return c.a.createElement(y,a)},w=function(){var e=Object(s.b)(),a=Object(n.useState)(""),t=Object(m.a)(a,2),o=t[0],r=t[1],i=Object(s.c)((function(e){return e.products.filteredProducts}));if(Object(n.useEffect)((function(){e({type:"FILTER_ORDERS",payload:o})}),[o,e]),!i)return"Loading..";var l=i.map((function(e){return c.a.createElement(f,{key:e.id,id:e.id,photos:e.photos,brand:e.brand,category:e.category,price:e.price,quantity:e.quantity})}));return c.a.createElement(b.b.div,{initial:"out",exit:"out",animate:"in",variants:E},c.a.createElement(v,{filter:{filter:[r]}}),c.a.createElement("br",null),c.a.createElement("div",{className:"grid-container"},l))},k=function(e){var a=e.photos;return c.a.createElement("div",{class:"image-container"},c.a.createElement("img",{src:a[0],alt:"product-1"}),c.a.createElement("img",{src:a[1],alt:"product-2"}),c.a.createElement("img",{src:a[2],alt:"product-3"}),c.a.createElement("img",{src:a[3],alt:"product-4"}))},O=(t(60),function(e){var a=Object.assign({},e),t=Object(g.a)({},a.selected),n=Object(m.a)(t.selected,1)[0];return c.a.createElement("select",{className:"select-size",onChange:function(e){n(e.target.value)}},c.a.createElement("option",{value:"select"},"Select your size"),c.a.createElement("option",{value:"s"},"Small"),c.a.createElement("option",{value:"m"},"Medium"),c.a.createElement("option",{value:"l"},"Large"),c.a.createElement("option",{value:"xl"},"Extra Large"))}),A=function(){return c.a.createElement("div",{style:{marginTop:15}},c.a.createElement("h1",null,"Facts"),c.a.createElement("p",null,"100% Original Products"),c.a.createElement("p",null,"Free Delivery on order above Rs. 1199"),c.a.createElement("p",null,"Pay on delivery might be available Easy 30 days returns and exchanges Try & Buy might be available"),c.a.createElement("br",null),c.a.createElement("p",null,c.a.createElement("strong",null,"Best offers ")),c.a.createElement("pre",null,"Applicable on: Orders above Rs. 2222"),c.a.createElement("pre",null,"Coupon code: SHOPIEE25"),c.a.createElement("pre",null,"Coupon Discount: Rs. 222 off (check cart for final savings)"),c.a.createElement("p",null,c.a.createElement("strong",null,"Product Details")),c.a.createElement("p",null,"Black solid T-shirt, has a round neck, and short sleeves"),c.a.createElement("p",null,c.a.createElement("strong",null,"Size & Fit")),c.a.createElement("p",null,"The model (height 6') is wearing a size M"),c.a.createElement("p",null,c.a.createElement("strong",null,"Material & Care")),c.a.createElement("p",null,"100% cotton Machine-wash"))},T=function(e){var a=e.id,t=e.photos,o=e.brand,r=e.price,i=e.category,l=(e.size,Object(n.useState)(1)),u=Object(m.a)(l,2),d=u[0],f=u[1],b=Object(n.useState)(!1),E=Object(m.a)(b,2),g=E[0],y=E[1],v=Object(s.b)();return c.a.createElement("div",null,c.a.createElement("h2",null,o),c.a.createElement("p",{className:"category-heading"},"Men Black Solid ".concat(i)," "),c.a.createElement("h2",null,"Rs. ",r," "),c.a.createElement("pre",null,"inclusive of all taxes"),c.a.createElement("label",null,c.a.createElement("strong",null,"Select size")),c.a.createElement(O,{selected:{selected:[y]}}),c.a.createElement("label",null,c.a.createElement("strong",null,"Quantity "),d),c.a.createElement("button",{className:"quantity-counter-button",onClick:function(){return f(d+1)}},"+"),c.a.createElement("button",{className:"quantity-counter-button",onClick:function(){return d>=2?f(d-1):null}},"-"),c.a.createElement("button",{className:"add-to-cart-button",onClick:function(){g?(v(p({id:a,photos:t,brand:o,category:i,price:r,quantity:d,size:g})),Object(h.b)("Added ".concat(o," to cart"))):h.b.warning("Please select a size")}},"Add to cart"),c.a.createElement(A,null))},x=function(e){var a=e.match,t=Number(a.params.slug),n=Object(s.c)((function(e){return e.products.products.filter((function(e){return e.id===t}))}));if(!n)return"Loading..";var o=n.map((function(e){return c.a.createElement(k,{key:e.id,id:e.id,photos:e.photos})})),r=n[0];return c.a.createElement(b.b.div,{initial:"out",exit:"out",animate:"in",variants:E},c.a.createElement("div",{className:"grid-container"},o,c.a.createElement(T,{key:r.id,photos:r.photos,id:r.id,brand:r.brand,price:r.price,category:r.category,size:r.size})))},R=(t(89),function(e){var a=e.id,t=e.brand,n=e.photos,o=e.quantity,r=e.size,i=Object(s.b)(),l=function(){i({type:"REMOVE_FROM_CART ",payload:a})};return c.a.createElement("div",{className:"product-container"},c.a.createElement("img",{src:n[0],size:"tiny",alt:t}),c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("label",null,c.a.createElement("strong",null,t)," "),c.a.createElement("label",null,", ",o," units"),c.a.createElement("label",null,", ",c.a.createElement("strong",null,r.toUpperCase()))),c.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},c.a.createElement("button",{onClick:function(){return 0===o?l():void i({type:"REDUCE_ORDER_QUANTITY",payload:{id:a,quantity:o}})}},"Reduce"),c.a.createElement("button",{onClick:function(){return l()}},"Remove")))}),j=function(){var e=Object(s.c)((function(e){return e.products.cart}));if(!e)return"Loading..";var a=e.map((function(e){return c.a.createElement(R,{key:e.id,id:e.id,photos:e.photos,brand:e.brand,category:e.category,price:e.price,quantity:e.quantity,size:e.size})}));return c.a.createElement(c.a.Fragment,null," ",a," ")},z=function(e){var a=e.cart,t=Object(s.c)((function(e){return e.products.amount}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Total \u20b9 ",t.toLocaleString()),c.a.createElement("h1",null,"My shopping bag (",a.length," Items)"))},M=function(e){var a=e.onButtonClick,t=Object(s.c)((function(e){return e.products.amount}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("label",null,"Rs. ",t),c.a.createElement("label",null,"Total Amount"),c.a.createElement("label",null,"Rs. ",Math.floor(100*Math.random())+1),c.a.createElement("label",null,"Eligible Discount"),c.a.createElement("button",{onClick:a},"Checkout"))},S=function(e){var a=Object(s.c)((function(e){return e.products.cart})),t=a.map((function(e){return e.quantity}));if(0===a.length)return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"There's nothing in your cart"),c.a.createElement("button",{onClick:function(){return e.history.push("/")}},"All products"));return c.a.createElement(b.b.div,{initial:"out",exit:"out",animate:"in",variants:E},c.a.createElement("div",{className:"grid-container"},c.a.createElement("div",null,c.a.createElement(z,{quantity:t,cart:a}),c.a.createElement(j,{cart:a})),c.a.createElement("div",null,c.a.createElement("p",null,"You are eligible for a discount"),c.a.createElement(M,{onButtonClick:function(){e.history.push("/completed")},quantity:t}))))},C=t(75),P=t.n(C),D={loop:!1,autoplay:!0,animationData:t(76),rendererSettings:{preserveAspectRatio:"xMidYMid slice"}},N=function(){return c.a.createElement(P.a,{options:D,height:100,width:100})},q=function(e){var a=Object(s.b)();return Object(n.useEffect)((function(){a({type:"EMPTY_CART",payload:""})})),c.a.createElement(b.b.div,{initial:"out",exit:"out",animate:"in",variants:E},c.a.createElement(N,null),c.a.createElement("h2",{style:{textAlign:"center"}},"Thanks for shopping with us!",c.a.createElement("br",null),c.a.createElement("button",{onClick:function(){return e.history.push("/")}},"All Products")))},L=[{id:1,brand:"Highlander",category:"Casual Shirt",size:"",price:455,quantity:1,photos:["https://images-codacious.s3.ap-south-1.amazonaws.com/107386c0-6081-4c61-9898-f9adabf9d2061529385860750-HRX-by-Hrithik-Roshan-Men-Charcoal-Grey-Slim-Advanced-Rapid--7.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/02e0a549-8eb9-4fe9-b934-6defd31ac7291548937957899-AMERICAN-EAGLE-OUTFITTERS-Men-Tshirts-1961548937956898-4.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/4c3260fa-d085-4f00-a285-f1acd88b43311571123456811-GAP-Mens-All-Day-Pique-Polo-Shirt-7361571123455295-4.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/693d0cf6-0c4d-4f97-a399-1284c7abb1d81529385860848-HRX-by-Hrithik-Roshan-Men-Charcoal-Grey-Slim-Advanced-Rapid--2.webp"]},{id:2,brand:"Nautica",category:"Casual Shirt",size:"",price:580,quantity:1,photos:["https://images-codacious.s3.ap-south-1.amazonaws.com/10909a08-74d3-47aa-9099-77faf0d6878f1564575072993-Levis-Men-Tshirts-3111564575071505-3.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/dc490212-3d6d-414c-8194-9f9f10ad105d1571123456993-GAP-Mens-All-Day-Pique-Polo-Shirt-7361571123455295-1.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/10909a08-74d3-47aa-9099-77faf0d6878f1564575072993-Levis-Men-Tshirts-3111564575071505-3.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/dc490212-3d6d-414c-8194-9f9f10ad105d1571123456993-GAP-Mens-All-Day-Pique-Polo-Shirt-7361571123455295-1.webp"]},{id:3,brand:"HRX by Hrithik Roshan",category:"T-Shirt",size:"",price:365,quantity:1,photos:["https://images-codacious.s3.ap-south-1.amazonaws.com/11523254006898-HRX-by-Hrithik-Roshan-Men-Navy-Blue-Solid-Round-Neck-T-shirt-4811523254006766-5.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/11523254006973-HRX-by-Hrithik-Roshan-Men-Navy-Blue-Solid-Round-Neck-T-shirt-4811523254006766-1.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/fa949f97-f594-4d2a-9b76-50d4bc772e2f1564575072974-Levis-Men-Tshirts-3111564575071505-4.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/11523254006898-HRX-by-Hrithik-Roshan-Men-Navy-Blue-Solid-Round-Neck-T-shirt-4811523254006766-5.webp"]},{id:4,brand:"Calvin",category:"T-Shirt",size:"",price:245,quantity:1,photos:["https://images-codacious.s3.ap-south-1.amazonaws.com/4a1d6cad-7f50-42c8-862a-5b4160f75dd51576221535629-AMERICAN-EAGLE-OUTFITTERS-Men-Tshirts-1691576221533577-5.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/10909a08-74d3-47aa-9099-77faf0d6878f1564575072993-Levis-Men-Tshirts-3111564575071505-3.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/dc490212-3d6d-414c-8194-9f9f10ad105d1571123456993-GAP-Mens-All-Day-Pique-Polo-Shirt-7361571123455295-1.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/fa949f97-f594-4d2a-9b76-50d4bc772e2f1564575072974-Levis-Men-Tshirts-3111564575071505-4.webp"]},{id:5,brand:"Wrogn",category:"Casual Tshirt",size:"",price:545,quantity:1,photos:["https://images-codacious.s3.ap-south-1.amazonaws.com/6fa37981-485a-4462-80f7-f1b7563362de1562570408475-Levis-Men-Tshirts-7271562570407368-4.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/10909a08-74d3-47aa-9099-77faf0d6878f1564575072993-Levis-Men-Tshirts-3111564575071505-3.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/dc490212-3d6d-414c-8194-9f9f10ad105d1571123456993-GAP-Mens-All-Day-Pique-Polo-Shirt-7361571123455295-1.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/fa949f97-f594-4d2a-9b76-50d4bc772e2f1564575072974-Levis-Men-Tshirts-3111564575071505-4.webp"]},{id:6,brand:"Highlander",category:"Casual Shirt",size:"",price:455,quantity:1,photos:["https://images-codacious.s3.ap-south-1.amazonaws.com/6fa37981-485a-4462-80f7-f1b7563362de1562570408475-Levis-Men-Tshirts-7271562570407368-4.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/10909a08-74d3-47aa-9099-77faf0d6878f1564575072993-Levis-Men-Tshirts-3111564575071505-3.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/dc490212-3d6d-414c-8194-9f9f10ad105d1571123456993-GAP-Mens-All-Day-Pique-Polo-Shirt-7361571123455295-1.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/fa949f97-f594-4d2a-9b76-50d4bc772e2f1564575072974-Levis-Men-Tshirts-3111564575071505-4.webp"]},{id:7,brand:"Nautica",category:"Casual Shirt",size:"",price:580,quantity:1,photos:["https://images-codacious.s3.ap-south-1.amazonaws.com/65c6d246-60c6-4ae7-9122-11a284eb56621548937957913-AMERICAN-EAGLE-OUTFITTERS-Men-Tshirts-1961548937956898-3+(1).webp","https://images-codacious.s3.ap-south-1.amazonaws.com/10909a08-74d3-47aa-9099-77faf0d6878f1564575072993-Levis-Men-Tshirts-3111564575071505-3.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/dc490212-3d6d-414c-8194-9f9f10ad105d1571123456993-GAP-Mens-All-Day-Pique-Polo-Shirt-7361571123455295-1.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/fa949f97-f594-4d2a-9b76-50d4bc772e2f1564575072974-Levis-Men-Tshirts-3111564575071505-4.webp"]},{id:8,brand:"HRX",category:"T-Shirt",size:"",price:365,quantity:1,photos:["https://images-codacious.s3.ap-south-1.amazonaws.com/6fa37981-485a-4462-80f7-f1b7563362de1562570408475-Levis-Men-Tshirts-7271562570407368-4.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/10909a08-74d3-47aa-9099-77faf0d6878f1564575072993-Levis-Men-Tshirts-3111564575071505-3.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/dc490212-3d6d-414c-8194-9f9f10ad105d1571123456993-GAP-Mens-All-Day-Pique-Polo-Shirt-7361571123455295-1.webp","https://images-codacious.s3.ap-south-1.amazonaws.com/fa949f97-f594-4d2a-9b76-50d4bc772e2f1564575072974-Levis-Men-Tshirts-3111564575071505-4.webp"]}];t(139),t(140);var B=function(){var e=Object(s.b)();return Object(n.useEffect)((function(){e({type:"ADD_DATA",payload:L})})),Object(s.c)((function(e){return e.products.products}))?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"App"},c.a.createElement(d,null),c.a.createElement("main",{className:"main-content"},c.a.createElement(b.a,null,c.a.createElement(u.d,null,c.a.createElement(u.b,{exact:!0,path:"/",component:w}),c.a.createElement(u.b,{path:"/details/:slug",component:x}),c.a.createElement(u.b,{path:"/cart",component:S}),c.a.createElement(u.b,{path:"/completed",component:q})))),c.a.createElement(h.a,{autoClose:1e3,hideProgressBar:!0,position:"bottom-right"}))):"Loading.."},H=t(39),_={products:"",cart:[],amount:"",filteredProducts:""};var F=function(e,a){return e.findIndex((function(e){return e.id===a}))},G=function(e,a,t){var n=F(e,a.id),c=Object(H.a)(e),o=c[n],r={};return r="ADD_TO_CART"===t?Object(g.a)(Object(g.a)({},o),{},{quantity:o.quantity+a.quantity}):Object(g.a)(Object(g.a)({},o),{},{quantity:o.quantity-1}),c[n]=r,c},I=function(e){return e.map((function(e){return e.price*e.quantity})).reduce((function(e,a){return e+a}))},U=function(e,a){return"price-lh"===e?a.products.concat().sort((function(e,a){return e.price-a.price})):"price-hl"===e?a.products.concat().sort((function(e,a){return a.price-e.price})):a.products},V=Object(l.b)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DATA":return Object(g.a)(Object(g.a)({},e),{},{products:a.payload});case"ADD_TO_CART":var t=F(e.cart,a.payload.id),n=t>=0?G(e.cart,a.payload,a.type):[].concat(Object(H.a)(e.cart),[a.payload]),c=I(n);return Object(g.a)(Object(g.a)({},e),{},{cart:n,amount:c});case"REDUCE_ORDER_QUANTITY":var o=F(e.cart,a.payload.id),r=o>=0?G(e.cart,a.payload,a.type):[].concat(Object(H.a)(e.cart),[a.payload]),i=I(r);return Object(g.a)(Object(g.a)({},e),{},{cart:r,amount:i});case"REMOVE_FROM_CART ":var s=e.cart.filter((function(e){return e.id!==a.payload}));return Object(g.a)(Object(g.a)({},e),{},{cart:s});case"FILTER_ORDERS":var l=U(a.payload,e);return Object(g.a)(Object(g.a)({},e),{},{filteredProducts:l});case"EMPTY_CART":return Object(g.a)(Object(g.a)({},e),{},{cart:[]});default:return e}}}),W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(141);var Y=Object(l.c)(V);r.a.render(c.a.createElement(s.a,{store:Y},c.a.createElement(i.a,null,c.a.createElement(B,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/shopiee",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/shopiee","/service-worker.js");W?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):X(a,e)}))}}()},41:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},76:function(e){e.exports=JSON.parse('{"v":"5.5.7","fr":60,"ip":0,"op":61,"w":186,"h":186,"nm":"\u6210\u529f","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"\u8def\u5f84 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[92.905,92.68,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-0.63,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0.62,0],[0,0],[0,0]],"v":[[-14.568,1.387],[-6.958,9.117],[-5.978,9.497],[-4.958,9.117],[14.572,-9.493]],"c":false},"ix":2},"nm":"\u8def\u5f84 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"\u63cf\u8fb9 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[300,300],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"\u8def\u5f84 4","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":1,"s":[0]},{"t":50,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"\u4fee\u526a\u8def\u5f84 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":3600,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Oval","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[93,93,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[62,62],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"\u692d\u5706\u8def\u5f84 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.058823999017,0.776471018791,0.22352899611,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"\u586b\u5145 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[300,300],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"\u53d8\u6362"}],"nm":"Oval","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":3600,"st":0,"bm":0}],"markers":[]}')},77:function(e,a,t){e.exports=t(142)},86:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){}},[[77,1,2]]]);
//# sourceMappingURL=main.8d2dc360.chunk.js.map