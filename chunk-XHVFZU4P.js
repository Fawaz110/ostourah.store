import{a as B}from"./chunk-KEYZLELH.js";import{a as A}from"./chunk-7K5AXTC3.js";import{a as v,c as P}from"./chunk-DISSH7UQ.js";import{l as R}from"./chunk-WQI3MN5H.js";import{P as y,ca as E,da as I,ea as L}from"./chunk-BOOJ2XVT.js";import{c as S,d as C}from"./chunk-Z5E3ILZ7.js";import{$ as k}from"./chunk-X3BFDEXP.js";import{Eb as t,Fb as i,Gb as u,Pa as f,Qb as w,Zb as o,_b as s,eb as n,fb as l,fc as _,kb as g,nc as d,oc as p,ta as x,ub as b,zb as m}from"./chunk-3KPRBS5G.js";function F(a,T){if(a&1&&(t(0,"div",20),u(1,"app-card-item",21),i()),a&2){let e=T.$implicit;n(),m("product",e)}}var K=(()=>{class a{constructor(e,r,c,h,j){this._ActivatedRoute=e,this._ElementRef=r,this._Renderer2=c,this._Router=h,this.store=j,this.products=[...v,...v]}ngOnInit(){this.expand(),document.body.scrollTop=0,document.documentElement.scrollTop=0,this._ActivatedRoute.params.subscribe(e=>{this.category=e.category,console.log(this.category)}),this.store.select(A).subscribe(e=>{console.log(e)})}expand(){let e=this._ElementRef.nativeElement.querySelector("aside"),r=this._ElementRef.nativeElement.querySelector(".expand-btn");e.classList.contains("-translate-x-64")?(this._Renderer2.removeClass(e,"-translate-x-64"),this._Renderer2.addClass(r,"rotate-180")):(this._Renderer2.addClass(e,"-translate-x-64"),this._Renderer2.removeClass(r,"rotate-180"))}static{this.\u0275fac=function(r){return new(r||a)(l(y),l(f),l(g),l(E),l(R))}}static{this.\u0275cmp=x({type:a,selectors:[["app-products"]],standalone:!0,features:[_],decls:44,vars:20,consts:[[1,"relative","min-h-screen"],[3,"title"],[1,"md:ms-64","p-2"],[1,"flex","items-center","justify-center"],[1,"grid","grid-cols-12","gap-10","md:gap-5","sm:gap-5"],["class","col-span-6 md:col-span-4 lg:col-span-2 wow bounceInUp","data-wow-duration","1s","data-wow-delay","0s",4,"ngFor","ngForOf"],["data-wow-duration","1s",1,"absolute","top-0","bottom-0","left-0","z-20","w-64","p-0","-mt-2","duration-200","-translate-x-64","xl:rtl:right-0","lg:rtl:right-0","md:translate-x-0","wow","bounceInLeft"],[1,"relative","pt-20","px-2"],[1,"inner","border","border-main-lighter","p-5","rounded-md","bg-white"],[1,"mb-5","pb-5","border-b","text-main-solid","border-b-main-lighter","text-xl","font-bold","tracking-tight","wow","fadeInDown"],[1,"font-thin"],[1,"absolute","z-50","px-4","py-2","duration-200","expand-btn","bg-main-lighter","top-48","left-full","md:hidden",3,"click"],[1,"pi","pi-arrow-right"],["routerLink","/products","routerLinkActive",".nav-item-active",1,"p-2","duration-200","cursor-pointer","ps-3","text-main-light","hover:text-main-solid"],[1,"text-lg"],["routerLink","/products/men","routerLinkActive",".nav-item-active",1,"p-2","duration-200","cursor-pointer","ps-3","text-main-light","hover:text-main-solid"],["routerLink","/products/women","routerLinkActive",".nav-item-active",1,"p-2","duration-200","cursor-pointer","ps-3","text-main-light","hover:text-main-solid"],["routerLink","/products/children","routerLinkActive",".nav-item-active",1,"p-2","duration-200","cursor-pointer","ps-3","text-main-light","hover:text-main-solid"],["routerLink","/products/electronics","routerLinkActive",".nav-item-active",1,"p-2","duration-200","cursor-pointer","ps-3","text-main-light","hover:text-main-solid"],["routerLink","/products/accessories","routerLinkActive",".nav-item-active",1,"p-2","duration-200","cursor-pointer","ps-3","text-main-light","hover:text-main-solid"],["data-wow-duration","1s","data-wow-delay","0s",1,"col-span-6","md:col-span-4","lg:col-span-2","wow","bounceInUp"],[3,"product"]],template:function(r,c){r&1&&(t(0,"section",0),u(1,"app-banner",1),t(2,"div",2)(3,"div",3)(4,"div",4),b(5,F,2,1,"div",5),i()()(),t(6,"aside",6)(7,"div",7)(8,"div",8)(9,"h3",9),o(10," Product Category"),i(),t(11,"ul",10)(12,"button",11),w("click",function(){return c.expand()}),u(13,"i",12),i(),t(14,"li",13)(15,"a",14)(16,"span"),o(17),d(18,"translate"),i()()(),t(19,"li",15)(20,"a",14)(21,"span"),o(22),d(23,"translate"),i()()(),t(24,"li",16)(25,"a",14)(26,"span"),o(27),d(28,"translate"),i()()(),t(29,"li",17)(30,"a",14)(31,"span"),o(32),d(33,"translate"),i()()(),t(34,"li",18)(35,"a",14)(36,"span"),o(37),d(38,"translate"),i()()(),t(39,"li",19)(40,"a",14)(41,"span"),o(42),d(43,"translate"),i()()()()()()()()),r&2&&(n(),m("title","Products"),n(4),m("ngForOf",c.products),n(12),s(p(18,8,"products.all")),n(5),s(p(23,10,"products.men")),n(5),s(p(28,12,"products.women")),n(5),s(p(33,14,"products.kids")),n(5),s(p(38,16,"products.electro")),n(5),s(p(43,18,"products.accessories")))},dependencies:[I,L,P,C,S,k,B]})}}return a})();export{K as ProductsComponent};
