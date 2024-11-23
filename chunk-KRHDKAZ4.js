import{a as L}from"./chunk-TZ7ZSMBT.js";import{l as S}from"./chunk-YIV5LES5.js";import{a as R}from"./chunk-TRHJISLE.js";import{c as I,d as k}from"./chunk-VKPY6LTO.js";import{i as y,k as f,l as b,m as E}from"./chunk-MFC3YLCU.js";import"./chunk-S72EANLY.js";import{$a as r,Ab as g,Jb as o,Kb as l,Na as w,Qb as h,Yb as s,Zb as d,ab as p,fb as x,ra as v,tb as e,ub as t,vb as i}from"./chunk-M2M7UK3E.js";var q=(()=>{class c{constructor(n,a,m,u,_){this._ActivatedRoute=n,this._ElementRef=a,this._Renderer2=m,this._Router=u,this.store=_}ngOnInit(){this.expand(),document.body.scrollTop=0,document.documentElement.scrollTop=0,this._ActivatedRoute.params.subscribe(n=>{this.category=n.category,console.log(this.category)}),this.store.select(L).subscribe(n=>{console.log(n)})}expand(){let n=this._ElementRef.nativeElement.querySelector("aside"),a=this._ElementRef.nativeElement.querySelector(".expand-btn");n.classList.contains("-translate-x-64")?(this._Renderer2.removeClass(n,"-translate-x-64"),this._Renderer2.addClass(a,"rotate-180")):(this._Renderer2.addClass(n,"-translate-x-64"),this._Renderer2.removeClass(a,"rotate-180"))}static{this.\u0275fac=function(a){return new(a||c)(p(y),p(w),p(x),p(f),p(S))}}static{this.\u0275cmp=v({type:c,selectors:[["app-products"]],standalone:!0,features:[h],decls:63,vars:18,consts:[[1,"relative","min-h-screen"],[1,"md:ms-64"],[1,"flex","items-center","justify-center"],[1,"grid","grid-cols-12","gap-10","md:gap-5","sm:gap-5"],["data-wow-duration","1s","data-wow-delay","0s",1,"col-span-6","sm:col-span-4","lg:col-span-3","wow","bounceInUp"],["data-wow-duration","1s","data-wow-delay","0.25s",1,"col-span-6","sm:col-span-4","lg:col-span-3","wow","bounceInUp"],["data-wow-duration","1s","data-wow-delay","0.5s",1,"col-span-6","sm:col-span-4","lg:col-span-3","wow","bounceInUp"],["data-wow-duration","1s","data-wow-delay",".75s",1,"col-span-6","sm:col-span-4","lg:col-span-3","wow","bounceInUp"],["data-wow-duration","1s","data-wow-delay","0.75s",1,"col-span-6","sm:col-span-4","lg:col-span-3","wow","bounceInUp"],["data-wow-duration","1s",1,"absolute","top-0","bottom-0","left-0","z-20","w-64","p-0","-mt-2","duration-200","-translate-x-64","bg-gray-100","shadow-md","xl:rtl:right-0","lg:rtl:right-0","md:translate-x-0","wow","bounceInLeft"],[1,"absolute","z-50","px-4","py-2","duration-200","expand-btn","bg-main-lighter","top-48","left-full","md:hidden",3,"click"],[1,"pi","pi-arrow-right"],[1,"relative","py-5"],[1,"pt-20"],["routerLink","/products","routerLinkActive",".nav-item-active",1,"px-3","py-4","duration-200","cursor-pointer","ps-3","hover:text-main-solid","hover:bg-gray-200"],[1,"text-xl","font-semibold"],["routerLink","/products/men","routerLinkActive",".nav-item-active",1,"px-3","py-4","duration-200","cursor-pointer","ps-3","hover:text-main-solid","hover:bg-gray-200"],["routerLink","/products/women","routerLinkActive",".nav-item-active",1,"px-3","py-4","duration-200","cursor-pointer","ps-3","hover:text-main-solid","hover:bg-gray-200"],["routerLink","/products/children","routerLinkActive",".nav-item-active",1,"px-3","py-4","duration-200","cursor-pointer","ps-3","hover:text-main-solid","hover:bg-gray-200"],["routerLink","/products/electronics","routerLinkActive",".nav-item-active",1,"px-3","py-4","duration-200","cursor-pointer","ps-3","hover:text-main-solid","hover:bg-gray-200"],["routerLink","/products/accessories","routerLinkActive",".nav-item-active",1,"px-3","py-4","duration-200","cursor-pointer","ps-3","hover:text-main-solid","hover:bg-gray-200"]],template:function(a,m){a&1&&(e(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),i(5,"app-card-item"),t(),e(6,"div",5),i(7,"app-card-item"),t(),e(8,"div",6),i(9,"app-card-item"),t(),e(10,"div",7),i(11,"app-card-item"),t(),e(12,"div",4),i(13,"app-card-item"),t(),e(14,"div",5),i(15,"app-card-item"),t(),e(16,"div",6),i(17,"app-card-item"),t(),e(18,"div",8),i(19,"app-card-item"),t(),e(20,"div",4),i(21,"app-card-item"),t(),e(22,"div",5),i(23,"app-card-item"),t(),e(24,"div",6),i(25,"app-card-item"),t(),e(26,"div",8),i(27,"app-card-item"),t()()()(),e(28,"aside",9)(29,"button",10),g("click",function(){return m.expand()}),i(30,"i",11),t(),e(31,"div",12)(32,"ul",13)(33,"li",14)(34,"a",15)(35,"span"),o(36),s(37,"translate"),t()()(),e(38,"li",16)(39,"a",15)(40,"span"),o(41),s(42,"translate"),t()()(),e(43,"li",17)(44,"a",15)(45,"span"),o(46),s(47,"translate"),t()()(),e(48,"li",18)(49,"a",15)(50,"span"),o(51),s(52,"translate"),t()()(),e(53,"li",19)(54,"a",15)(55,"span"),o(56),s(57,"translate"),t()()(),e(58,"li",20)(59,"a",15)(60,"span"),o(61),s(62,"translate"),t()()()()()()()),a&2&&(r(36),l(d(37,6,"products.all")),r(5),l(d(42,8,"products.men")),r(5),l(d(47,10,"products.women")),r(5),l(d(52,12,"products.kids")),r(5),l(d(57,14,"products.electro")),r(5),l(d(62,16,"products.accessories")))},dependencies:[b,E,R,k,I]})}}return c})();export{q as ProductsComponent};
