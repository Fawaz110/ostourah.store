import{a as O}from"./chunk-XLXKMNED.js";import{a as D}from"./chunk-K4HR3HD6.js";import{a as R}from"./chunk-RFMH7JZO.js";import{c as h,l as L,m as $,n as M}from"./chunk-RWPWEADW.js";import"./chunk-5YQQEXEO.js";import"./chunk-E7LQUBD3.js";import"./chunk-WSAW2S45.js";import"./chunk-ZZ4TVKJ3.js";import{X as P}from"./chunk-GBURKEHO.js";import"./chunk-SQCQW5LJ.js";import{c as j,d as V}from"./chunk-YRDZDYCR.js";import{$ as F,wa as q}from"./chunk-24Y6DEMT.js";import{$b as k,Ga as u,Gb as y,Gc as o,Ha as v,Hc as l,Lb as m,Rb as S,Vb as e,Wb as n,Xb as s,ca as E,gc as f,hc as g,i as I,kb as w,pb as i,qb as C,qc as r,rc as a,sc as x,va as B,yc as T}from"./chunk-YL2HPNIQ.js";function U(p,_){if(p&1){let t=k();e(0,"tr")(1,"td",19)(2,"div",20)(3,"button",21),f("click",function(){let d=u(t).$implicit,b=g(2);return v(b.deleteItem(d.id))}),s(4,"i",22),n()()(),e(5,"td",23)(6,"div",24)(7,"figure",25),s(8,"img",26),n(),e(9,"div",27)(10,"h5",28),r(11),n(),e(12,"div",29)(13,"div",30),s(14,"i",31),e(15,"span",17),r(16),n()()(),e(17,"div",32)(18,"div",33)(19,"span"),r(20),n()()()()()(),e(21,"td",19)(22,"span",17),r(23),n()(),e(24,"td",34)(25,"div",35)(26,"div",36)(27,"button",37),f("click",function(){let d=u(t).$implicit;return v(d.quantity=d.quantity-1)}),n(),e(28,"span",38),r(29),n(),e(30,"button",39),f("click",function(){let d=u(t).$implicit;return v(d.quantity=d.quantity+1)}),n()()()(),e(31,"td",19)(32,"span",17),r(33),n()()()}if(p&2){let t=_.$implicit,c=g(2);i(8),m("src",t.product.coverImage,w)("alt",t.product.title),i(2),m("routerLink","/product/description/"+t.id),i(),x("",t.product.title," "),i(5),a(t.product.rate),i(4),a(t.product.category),i(3),x("$",t.price,""),i(4),m("disabled",t.quantity==1),i(2),a(t.quantity),i(4),x("$",c.getSubTotal(t.price,t.quantity),"")}}function z(p,_){if(p&1&&(e(0,"div",5)(1,"div",6)(2,"table",7)(3,"thead")(4,"tr")(5,"th"),r(6),o(7,"translate"),n(),e(8,"th",8),r(9),o(10,"translate"),n(),e(11,"th"),r(12),o(13,"translate"),n(),e(14,"th",9),r(15),o(16,"translate"),n(),e(17,"th"),r(18),o(19,"translate"),n()()(),e(20,"tbody"),y(21,U,34,10,"tr",10),n()()()(),e(22,"div",11)(23,"div",12)(24,"h3",13),r(25),o(26,"translate"),n(),e(27,"div",14)(28,"div",15)(29,"span",16),r(30),o(31,"translate"),n(),e(32,"span",17),r(33),o(34,"currency"),n()(),e(35,"div",15)(36,"span",16),r(37),o(38,"translate"),n(),e(39,"span",17),r(40,"Free"),n()(),e(41,"div",15)(42,"span",16),r(43),o(44,"translate"),n(),e(45,"span",17),r(46),o(47,"currency"),n()()(),e(48,"div",14)(49,"div",15)(50,"span",16),r(51),o(52,"translate"),n(),e(53,"span",17),r(54),o(55,"currency"),n()()(),e(56,"button",18),r(57),o(58,"translate"),n()()()),p&2){let t=g();i(6),a(l(7,16,"cart.remove")),i(3),a(l(10,18,"products.product-name")),i(3),a(l(13,20,"products.price")),i(3),a(l(16,22,"cart.quantity")),i(3),a(l(19,24,"cart.subtotal")),i(3),m("ngForOf",t.cartItems),i(4),a(l(26,26,"cart.cart-totals")),i(5),a(l(31,28,"cart.subtotal")),i(3),a(l(34,30,t.totalCartPrice)),i(4),a(l(38,32,"cart.extimated-delivery")),i(6),a(l(44,34,"cart.extimated-taxs")),i(3),a(l(47,36,t.taxes)),i(5),a(l(52,38,"cart.total")),i(3),a(l(55,40,t.taxes+t.totalCartPrice)),i(2),m("disabled",t.taxes+t.totalCartPrice<=0),i(),x(" ",l(58,42,"cart.proceed-to-checkout")," ")}}function N(p,_){p&1&&(e(0,"p",3),r(1),o(2,"translate"),n()),p&2&&(i(),a(l(2,1,"empty.cart")))}var et=(()=>{class p{constructor(t,c){this._FormBuilder=t,this._CartService=c,this.cartItems=[],this.count=5,this.totalCartPrice=0,this.taxes=0,this.getSubTotal=(d,b)=>d*b,this.getTotal=()=>250}applyCoupon(){console.log(this.form.value)}deleteItem(t){console.log(t)}ngOnInit(){document.body.scrollTop=0,document.documentElement.scrollTop=0,this.form=this._FormBuilder.group({code:["",[h.required,h.minLength(5),h.maxLength(5)]]}),this.getCart()}getCart(){this._CartService.getCart().pipe(E(t=>{console.log(t.data.cart),this.cartItems=t.data.cart.cartItems,this.totalCartPrice=t.data.cart.totalCartPrice,this.taxes=this.totalCartPrice*.05})).subscribe(I,t=>console.log(t))}static{this.\u0275fac=function(c){return new(c||p)(C(L),C(O))}}static{this.\u0275cmp=B({type:p,selectors:[["app-cart"]],standalone:!0,features:[T],decls:9,vars:5,consts:[[3,"title"],[1,"container","mx-auto","p-2"],[1,"grid","grid-cols-12","gap-5"],[1,"col-span-12","text-center","text-3xl","my-5","text-main-solid"],[1,"col-span-12"],[1,"col-span-12","md:col-span-9"],[1,"inner","p-5","rounded-md","border","border-main-lighter","overflow-y-auto"],[1,"w-full","text-center"],["colspan","4"],["colspan","2"],[4,"ngFor","ngForOf"],[1,"col-span-12","md:col-span-3"],[1,"inner","p-5","rounded-md","border","border-main-lighter"],[1,"text-xl","font-bold","mb-5"],[1,"bg-main-lighter","p-5","my-5","text-main-solid","rounded-md"],[1,"flex","items-center","justify-between","my-2"],[1,"text-lg","font-thin"],[1,"text-lg","font-semibold"],["routerLink","/order-details",1,"btn-main","w-full","rounded-md",3,"disabled"],[1,"border-b","border-main-lighter","p-3"],[1,"flex","items-center","justify-center"],[1,"flex","gap-2","items-center","justify-center","px-4","py-2","text-xl","text-main-solid","hover:text-main-light","duration-200",3,"click"],[1,"pi","pi-trash","text-xl"],["colspan","4",1,"border-b","border-main-lighter","p-3"],[1,"flex","gap-2","items-stretch","justify-center","text-start"],[1,"p-2","border","min-w-16","flex","items-center","justify-center","border-main-lighter","rounded-md"],[1,"w-full",3,"src","alt"],[1,"product-info"],[1,"text-xl","font-bold","mb-3","cursor-pointer","hover:text-main-light","duration-200",3,"routerLink"],[1,"more-info","flex","items-center","gap-5","mb-3"],[1,"rate","flex","items-center","gap-2"],[1,"pi","pi-star-fill","text-yellow-500"],[1,"categories","flex","items-center","gap-2"],[1,"bg-main-lighter","p-2","rounded-md"],["colspan","2",1,"border-b","border-main-lighter","p-3"],[1,"qty"],[1,"px-4","py-2","border","border-main-light","flex","items-center","justify-evenly","rounded-full"],[1,"pi","pi-minus","mx-2","text-lg",3,"click","disabled"],[1,"inline-block","mx-4"],[1,"pi","pi-plus","mx-2","text-lg",3,"click"]],template:function(c,d){c&1&&(e(0,"section"),s(1,"app-banner",0),o(2,"translate"),e(3,"div",1)(4,"div",2),y(5,z,59,44)(6,N,3,3,"p",3),e(7,"div",4),s(8,"app-why-us"),n()()()()),c&2&&(i(),m("title",l(2,3,"cart.title")),i(4),S(d.cartItems.length>0?5:-1),i(),S(d.cartItems.length==0?6:-1))},dependencies:[R,P,$,M,F,D,V,j,q]})}}return p})();export{et as CartComponent};
