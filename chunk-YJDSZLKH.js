import{a as W}from"./chunk-FEQIZGWC.js";import{a as M}from"./chunk-Q3JYG6JT.js";import{da as k}from"./chunk-4ZAGXY36.js";import{c as B,d as F}from"./chunk-OSWKULZA.js";import{$ as T,Ba as j,Y as _}from"./chunk-IAZM3ENT.js";import{$b as p,Ab as o,Fa as g,Fb as e,Ga as v,Gb as i,Hb as l,Lb as C,Rb as I,Sb as S,Ua as h,_b as r,ab as b,ac as x,fb as t,gb as y,gc as E,oc as m,pc as d,ua as f,vb as w}from"./chunk-4SNW6VHE.js";function L(s,u){if(s&1){let n=C();e(0,"tr")(1,"td",9)(2,"div",10)(3,"button",11),I("click",function(){let c=g(n).$implicit,P=S();return v(P.deleteItem(c.id))}),l(4,"i",12),i()()(),e(5,"td",13)(6,"div",14)(7,"figure",15),l(8,"img",16),i(),e(9,"div",17)(10,"h5",18),r(11),i(),e(12,"div",19)(13,"div",20),l(14,"i",21),e(15,"span",22),r(16),i()(),e(17,"div",23)(18,"span",24),r(19),i()()(),e(20,"div",25)(21,"div",26)(22,"span"),r(23,"Camera"),i()(),e(24,"div",26)(25,"span"),r(26,"Videos"),i()()()()()(),e(27,"td",9)(28,"span",22),r(29),i()(),e(30,"td",9)(31,"p",27),r(32,"In Stock"),i()(),e(33,"td",28)(34,"button",29),l(35,"i",30),i()()()}if(s&2){let n=u.$implicit,a=u.last;t(),o("ngClass",a?"border-b":""),t(4),o("ngClass",a?"border-b":""),t(3),o("src",n.src,b)("alt",n.title),t(2),o("routerLink","/product/description/"+n.id),t(),p(n.title),t(5),p(n.rate),t(3),x("",n.reviews," Reviews"),t(8),o("ngClass",a?"border-b":""),t(2),x("$",n.price,""),t(),o("ngClass",a?"border-b":""),t(3),o("ngClass",a?"border-b":"")}}var G=(()=>{class s{constructor(n){this.platformId=n,this.wishlistItems=[]}deleteItem(n){console.log(n)}ngOnInit(){j(this.platformId)&&(document.documentElement.scrollTop=0,document.body.scrollTop=0),this.wishlistItems=[{id:"item-1",rate:4.7,reviews:128,title:"Camera",src:"cart/product-two-img1.png",qty:5,price:2e3},{id:"item-2",rate:4.7,reviews:128,title:"Smart Watch",src:"cart/product-two-img2.png",qty:8,price:4e3},{id:"item-3",rate:4.7,reviews:128,title:"IPhone 12 Pro Max",src:"cart/product-two-img3.png",qty:1,price:2e4}]}static{this.\u0275fac=function(a){return new(a||s)(y(h))}}static{this.\u0275cmp=f({type:s,selectors:[["app-wishlist"]],standalone:!0,features:[E],decls:27,vars:16,consts:[[3,"title"],[1,"container","mx-auto","p-2"],[1,"grid","grid-cols-12","gap-5"],[1,"col-span-12"],[1,"inner","p-5","rounded-md","border","border-main-lighter","overflow-y-auto"],[1,"w-full","text-center"],["colspan","4"],["colspan","2"],[4,"ngFor","ngForOf"],[1,"border-main-lighter","p-3",3,"ngClass"],[1,"flex","items-center","justify-center"],[1,"flex","gap-2","items-center","justify-center","px-4","py-2","text-xl","text-main-solid","hover:text-main-light","duration-200",3,"click"],[1,"pi","pi-trash","text-xl"],["colspan","4",1,"border-main-lighter","p-3",3,"ngClass"],[1,"flex","gap-2","items-stretch","justify-center","text-start"],[1,"p-2","border","min-w-16","flex","items-center","justify-center","border-main-lighter","rounded-md"],[1,"w-full",3,"src","alt"],[1,"product-info"],[1,"text-xl","font-bold","mb-3","cursor-pointer","hover:text-main-light","duration-200",3,"routerLink"],[1,"more-info","flex","items-center","gap-5","mb-3"],[1,"rate","flex","items-center","gap-2"],[1,"pi","pi-star-fill","text-yellow-500"],[1,"text-lg","font-semibold"],[1,"review","px-5","border-s","border-gray-400"],[1,"text-base","font-thin"],[1,"categories","flex","items-center","gap-2"],[1,"bg-main-lighter","p-2","rounded-md"],[1,"text-xl"],["colspan","2",1,"border-main-lighter","p-3",3,"ngClass"],[1,"btn-main","flex","items-center","justify-center"],[1,"pi","pi-shopping-cart","mx-2","text-xl"]],template:function(a,c){a&1&&(e(0,"section"),l(1,"app-banner",0),m(2,"translate"),e(3,"div",1)(4,"div",2)(5,"div",3)(6,"div",4)(7,"table",5)(8,"thead")(9,"tr")(10,"th"),r(11),m(12,"translate"),i(),e(13,"th",6),r(14),m(15,"translate"),i(),e(16,"th"),r(17),m(18,"translate"),i(),e(19,"th"),r(20),m(21,"translate"),i(),l(22,"th",7),i()(),e(23,"tbody"),w(24,L,36,12,"tr",8),i()()()(),e(25,"div",3),l(26,"app-why-us"),i()()()()),a&2&&(t(),o("title",d(2,6,"global.Wishlist")),t(10),p(d(12,8,"cart.remove")),t(3),p(d(15,10,"products.product-name")),t(3),p(d(18,12,"products.price")),t(3),p(d(21,14,"cart.status")),t(4),o("ngForOf",c.wishlistItems))},dependencies:[M,T,_,k,W,F,B]})}}return s})();export{G as WishlistComponent};