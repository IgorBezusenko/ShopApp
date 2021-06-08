(this["webpackJsonpreact-ts-shop"]=this["webpackJsonpreact-ts-shop"]||[]).push([[0],{14:function(e,t,c){e.exports={cart:"Cart_cart__3RzOM",list:"Cart_list__2svR1",list__empty:"Cart_list__empty__2aVqU",cart__price:"Cart_cart__price__3mhmB",item:"Cart_item__1RcF-",item__image:"Cart_item__image__21U9E",item__description:"Cart_item__description__3d819",btn_group:"Cart_btn_group__2zmLC",row:"Cart_row__2yHUq"}},15:function(e,t,c){e.exports={list:"Items_list__2MQ7R",item:"Items_item__2s357",image:"Items_image__2XXI3"}},18:function(e,t,c){e.exports={container:"ViewItem_container__1mTBp",item:"ViewItem_item__1AGux",image:"ViewItem_image__3KUwL",description:"ViewItem_description__1rS-o"}},38:function(e,t,c){e.exports={container:"Main_container__2saIt"}},43:function(e,t,c){},44:function(e,t,c){},70:function(e,t){},71:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),r=c(20),s=c.n(r),a=(c(43),c(44),c(4)),j=c(5),o=c(7),d=c(19),l=c(36),u=c(22),b=c(6),O="cart/ADD_ITEM_TO_CART",m="cart/REMOVE_ITEM_FROM_CART",h="cart/BUY_ALL",_={cartItems:[]},x=function(e){return{type:O,item:e}},p=function(e){return{type:m,itemId:e}},f=function(){return{type:h}},v=c(17),g=c.n(v),w=c(25),I=c(37),N=c.n(I).a.create({baseURL:"https://fakestoreapi.com/"}),C=function(){return N.get("products").then((function(e){return e.data}))},E=function(e){return N.get("products/".concat(e)).then((function(e){return e.data}))},y="products/SET_ITEMS",T="products/TOGGLE_IS_FETCHING",F="products/SET_VIEW_ITEMS",P={items:[],viewItem:null,isFetching:!1},k=function(e){return{type:y,items:e}},S=function(e){return{type:F,viewItem:e}},B=function(e){return{type:T,isFetching:e}},L=Object(d.b)({itemsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(b.a)(Object(b.a)({},e),{},{items:Object(u.a)(t.items)});case F:return Object(b.a)(Object(b.a)({},e),{},{viewItem:t.viewItem});case T:return Object(b.a)(Object(b.a)({},e),{},{isFetching:t.isFetching});default:return e}},cartPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var c=Object(b.a)(Object(b.a)({},t.item),{},{id:Date.now()});return Object(b.a)(Object(b.a)({},e),{},{cartItems:[].concat(Object(u.a)(e.cartItems),[c])});case m:return Object(b.a)(Object(b.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.itemId}))});case h:return Object(b.a)(Object(b.a)({},e),{},{cartItems:[]});default:return e}}}),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.c,R=Object(d.d)(L,M(Object(d.a)(l.a))),V=c(73),A=c(74),H=c(75),D=c(76),G=c(9),U=c.n(G),X=c(1),$=function(){var e=Object(o.c)((function(e){return e.cartPage.cartItems}));return Object(X.jsxs)("div",{className:U.a.header,children:[Object(X.jsx)(j.b,{className:U.a.logo,to:"/",children:Object(X.jsx)("h2",{children:"BIS!"})}),Object(X.jsxs)("ul",{className:U.a.list+" "+U.a.row,children:[Object(X.jsx)("li",{children:Object(X.jsxs)(j.b,{className:U.a.row,to:"/",children:[Object(X.jsx)(V.a,{className:U.a.icon}),Object(X.jsx)("p",{children:"Main"})]})}),Object(X.jsx)("li",{children:Object(X.jsxs)(j.b,{className:U.a.row,to:"/products",children:[Object(X.jsx)(A.a,{className:U.a.icon}),Object(X.jsx)("p",{children:"Products"})]})}),Object(X.jsx)("li",{children:Object(X.jsxs)(j.b,{className:U.a.row,to:"/cart",children:[0!==e.length&&Object(X.jsx)("div",{className:U.a.counter,children:e.length}),Object(X.jsx)(H.a,{className:U.a.icon}),Object(X.jsx)("p",{children:"Cart"})]})}),Object(X.jsx)("li",{children:Object(X.jsxs)(j.b,{className:U.a.row,to:"/login",children:[Object(X.jsx)(D.a,{className:U.a.icon}),Object(X.jsx)("p",{children:"Login"})]})})]})]})},q=c(38),z=c.n(q),J=function(){return Object(X.jsx)("div",{className:z.a.container,children:Object(X.jsx)(j.b,{to:"/products",children:Object(X.jsx)("h3",{children:"Go to products"})})})},K=function(){return Object(X.jsx)("div",{children:"Loading..."})},Q=c(15),W=c.n(Q),Y=function(e){var t=e.item,c=Object(o.b)();return Object(X.jsx)(X.Fragment,{children:Object(X.jsxs)("div",{className:W.a.item,children:[Object(X.jsx)(j.b,{to:"/view-item/"+t.id,children:Object(X.jsx)("div",{className:W.a.image,children:Object(X.jsx)("img",{src:t.image,alt:"Cover"})})}),Object(X.jsx)("div",{children:Object(X.jsxs)("h2",{children:["Price: ",t.price," $"]})}),Object(X.jsxs)("div",{children:[Object(X.jsx)(j.b,{to:"/view-item/"+t.id,children:Object(X.jsx)("button",{children:"View"})}),Object(X.jsx)("button",{onClick:function(){return function(e){c(x(e))}(t)},children:"Add to cart"})]}),Object(X.jsx)("p",{children:t.title})]})})},Z=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.itemsPage})),c=t.items,i=t.isFetching;return Object(n.useEffect)((function(){e(function(){var e=Object(w.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(B(!0)),e.next=3,C();case 3:c=e.sent,t(k(c)),t(B(!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),i?Object(X.jsx)(K,{}):Object(X.jsxs)("div",{className:W.a.container,children:[Object(X.jsx)("div",{children:Object(X.jsx)("h1",{children:"Products"})}),Object(X.jsx)("div",{className:W.a.list,children:c&&c.map((function(e){return Object(X.jsx)(Y,{item:e},e.id)}))})]})},ee=(c(70),c(14)),te=c.n(ee),ce=function(){var e=Object(o.c)((function(e){return e.cartPage.cartItems})),t=Object(o.b)(),c=function(e){t(p(e))},n=e.reduce((function(e,t){return e+t.price}),0);return Object(X.jsxs)("div",{className:te.a.cart,children:[Object(X.jsxs)("div",{className:te.a.row,children:[Object(X.jsx)("h1",{children:"Cart"}),Object(X.jsxs)("div",{className:te.a.cart__price,children:[" ",Object(X.jsx)("button",{onClick:function(){t(f())},children:"Buy All"})," ",Object(X.jsxs)("strong",{children:["Total price: ",n," $"]})]})]}),Object(X.jsx)("ul",{className:te.a.list,children:e.length?e.map((function(e){return Object(X.jsxs)("li",{className:te.a.item+" "+te.a.row,children:[Object(X.jsx)("div",{className:te.a.item__image,children:Object(X.jsx)("img",{src:e.image,alt:"Cover"})}),Object(X.jsxs)("div",{className:te.a.item__description,children:[Object(X.jsx)("p",{children:e.title}),Object(X.jsxs)("p",{children:[e.price," $"]})]}),Object(X.jsxs)("div",{className:te.a.btn_group,children:[Object(X.jsx)("button",{onClick:function(){return c(e.id)},children:"Buy"}),Object(X.jsx)("button",{onClick:function(){return c(e.id)},children:"Delete"})]})]},e.id)})):Object(X.jsx)("div",{className:te.a.list__empty,children:"Cart is empty"})})]})},ne=function(){return Object(X.jsx)(X.Fragment,{children:Object(X.jsx)("h1",{children:"Login"})})},ie=c(18),re=c.n(ie),se=function(e){var t=Object(o.c)((function(e){return e.itemsPage})),c=t.viewItem,i=t.isFetching,r=Object(o.b)();Object(n.useEffect)((function(){var t;r((t=+e.match.params.id,function(){var e=Object(w.a)(g.a.mark((function e(c){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(B(!0)),e.next=3,E(t);case 3:n=e.sent,c(S(n)),c(B(!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[]);return i?Object(X.jsx)(K,{}):Object(X.jsxs)("div",{className:re.a.container,children:[Object(X.jsx)(j.b,{to:"/products",children:"Go Back"}),c?Object(X.jsxs)("div",{className:re.a.item,children:[Object(X.jsx)("div",{className:re.a.image,children:Object(X.jsx)("img",{src:c.image,alt:"Cover"})}),Object(X.jsxs)("div",{className:re.a.description,children:[Object(X.jsx)("h3",{children:c.title}),Object(X.jsx)("p",{children:c.description}),Object(X.jsxs)("h2",{children:["Price: ",c.price," $"]}),Object(X.jsx)("button",{onClick:function(){return e=c,console.log(e),void r(x(e));var e},children:"Add to cart"}),Object(X.jsx)(j.b,{to:"/products",children:"Go Back"})]})]}):Object(X.jsxs)("div",{children:["Product by id:",e.match.params.id," dose not exist!"]})]})},ae=function(){return Object(X.jsxs)("div",{className:"app",children:[Object(X.jsx)($,{}),Object(X.jsxs)(a.c,{children:[Object(X.jsx)(a.a,{exact:!0,path:"/",component:J}),Object(X.jsx)(a.a,{path:"/products",component:Z}),Object(X.jsx)(a.a,{path:"/view-item/:id",component:se}),Object(X.jsx)(a.a,{path:"/cart",component:ce}),Object(X.jsx)(a.a,{path:"/login",component:ne}),Object(X.jsx)(a.a,{path:"/*",render:function(){return"Not Found"}})]})]})},je=function(){return Object(X.jsx)(j.a,{basename:"/ShopApp",children:Object(X.jsx)(o.a,{store:R,children:Object(X.jsx)(ae,{})})})},oe=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,77)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(X.jsx)(i.a.StrictMode,{children:Object(X.jsx)(je,{})}),document.getElementById("root")),oe()},9:function(e,t,c){e.exports={header:"Header_header__2bdVd",logo:"Header_logo__2Ek6_",row:"Header_row__39BcB",list:"Header_list__8RKXw",icon:"Header_icon__23P8C",counter:"Header_counter__180gV"}}},[[71,1,2]]]);
//# sourceMappingURL=main.83beb790.chunk.js.map