import{a as F}from"./chunk-BWUQ67XU.js";import{a as T}from"./chunk-KEYZLELH.js";import{da as k}from"./chunk-BOOJ2XVT.js";import{$ as I,Ba as _,Y as E}from"./chunk-X3BFDEXP.js";import{$a as v,$b as p,Ea as u,Eb as e,Fa as f,Fb as t,Gb as s,Kb as y,Qb as w,Rb as S,Ta as x,Zb as r,_b as d,eb as n,fb as h,fc as C,ta as g,ub as b,zb as l}from"./chunk-3KPRBS5G.js";function j(a,c){if(a&1){let i=y();e(0,"tr")(1,"td",9)(2,"div",10)(3,"button",11),w("click",function(){let m=u(i).$implicit,W=S();return f(W.deleteItem(m.id))}),s(4,"i",12),e(5,"span"),r(6,"Delete"),t()()()(),e(7,"td",13)(8,"div",14)(9,"figure",15),s(10,"img",16),t(),e(11,"div",17)(12,"h5",18),r(13),t(),e(14,"div",19)(15,"div",20),s(16,"i",21),e(17,"span",22),r(18),t()(),e(19,"div",23)(20,"span",24),r(21),t()()(),e(22,"div",25)(23,"div",26)(24,"span"),r(25,"Camera"),t()(),e(26,"div",26)(27,"span"),r(28,"Videos"),t()()()()()(),e(29,"td",9)(30,"span",22),r(31),t()(),e(32,"td",9)(33,"p",27),r(34,"In Stock"),t()(),e(35,"td",28)(36,"button",29),r(37,"Add To Cart"),t()()()}if(a&2){let i=c.$implicit,o=c.last;n(),l("ngClass",o?"border-b":""),n(6),l("ngClass",o?"border-b":""),n(3),l("src",i.src,v)("alt",i.title),n(2),l("routerLink","/product/description/"+i.id),n(),d(i.title),n(5),d(i.rate),n(3),p("",i.reviews," Reviews"),n(8),l("ngClass",o?"border-b":""),n(2),p("$",i.price,""),n(),l("ngClass",o?"border-b":""),n(3),l("ngClass",o?"border-b":"")}}var R=(()=>{class a{constructor(i){this.platformId=i,this.wishlistItems=[]}deleteItem(i){console.log(i)}ngOnInit(){_(this.platformId)&&(document.documentElement.scrollTop=0,document.body.scrollTop=0),this.wishlistItems=[{id:"item-1",rate:4.7,reviews:128,title:"Camera",src:"cart/product-two-img1.png",qty:5,price:2e3},{id:"item-2",rate:4.7,reviews:128,title:"Smart Watch",src:"cart/product-two-img2.png",qty:8,price:4e3},{id:"item-3",rate:4.7,reviews:128,title:"IPhone 12 Pro Max",src:"cart/product-two-img3.png",qty:1,price:2e4}]}static{this.\u0275fac=function(o){return new(o||a)(h(x))}}static{this.\u0275cmp=g({type:a,selectors:[["app-wishlist"]],standalone:!0,features:[C],decls:22,vars:2,consts:[[3,"title"],[1,"container","mx-auto","p-2"],[1,"grid","grid-cols-12","gap-5"],[1,"col-span-12"],[1,"inner","p-5","rounded-md","border","border-main-lighter","overflow-y-auto"],[1,"w-full","text-center"],["colspan","4"],["colspan","2"],[4,"ngFor","ngForOf"],[1,"border-main-lighter","p-3",3,"ngClass"],[1,"flex","items-center","justify-center"],[1,"flex","gap-2","items-center","justify-center","px-4","py-2","text-xl","text-main-solid","hover:text-main-light","duration-200",3,"click"],[1,"pi","pi-times-circle"],["colspan","4",1,"border-main-lighter","p-3",3,"ngClass"],[1,"flex","gap-2","items-stretch","justify-center","text-start"],[1,"p-2","border","min-w-16","flex","items-center","justify-center","border-main-lighter","rounded-md"],[1,"w-full",3,"src","alt"],[1,"product-info"],[1,"text-xl","font-bold","mb-3","cursor-pointer","hover:text-main-light","duration-200",3,"routerLink"],[1,"more-info","flex","items-center","gap-5","mb-3"],[1,"rate","flex","items-center","gap-2"],[1,"pi","pi-star-fill","text-yellow-500"],[1,"text-lg","font-semibold"],[1,"review","px-5","border-s","border-gray-400"],[1,"text-base","font-thin"],[1,"categories","flex","items-center","gap-2"],[1,"bg-main-lighter","p-2","rounded-md"],[1,"text-xl"],["colspan","2",1,"border-main-lighter","p-3",3,"ngClass"],[1,"btn-main","w-full"]],template:function(o,m){o&1&&(e(0,"section"),s(1,"app-banner",0),e(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"table",5)(7,"thead")(8,"tr")(9,"th"),r(10,"Delete"),t(),e(11,"th",6),r(12,"Product Name"),t(),e(13,"th"),r(14,"Price"),t(),e(15,"th"),r(16,"Status"),t(),s(17,"th",7),t()(),e(18,"tbody"),b(19,j,38,12,"tr",8),t()()()(),e(20,"div",3),s(21,"app-why-us"),t()()()()),o&2&&(n(),l("title","Wishlist"),n(18),l("ngForOf",m.wishlistItems))},dependencies:[T,I,E,k,F]})}}return a})();export{R as WishlistComponent};