import{a as N}from"./chunk-KNR6RNH7.js";import{a as Q}from"./chunk-EB42JTE5.js";import{a as D}from"./chunk-NB3MO2E5.js";import{l as x,m as W,n as $}from"./chunk-L4FLERUP.js";import{a as f}from"./chunk-E7LQUBD3.js";import{X as H}from"./chunk-I6UTEODU.js";import{a as B}from"./chunk-JPM7ZRFP.js";import{c as L,d as U}from"./chunk-OYDM5OEP.js";import{aa as z,wa as A,ya as F}from"./chunk-TRTIGX42.js";import{Dc as _,Ec as O,Fc as P,Gb as h,Lb as s,Sb as o,Tb as a,Ub as c,ca as m,dc as w,ec as C,i as p,ia as I,kb as T,nc as l,oa as y,oc as g,pb as n,pc as E,qb as u,qc as M,va as k,vc as j,zb as b}from"./chunk-K2EQSHJF.js";var S=$("currency"),R=W(S,i=>i.currency);var q=(()=>{class i{constructor(t,r){this._HttpClient=t,this._Store=r,this.authorization$=this._Store.select(D),this.currency$=this._Store.select(S)}getCart(){let{token:t,currency:r}=this.getTokenAndCurrency(),e=localStorage.getItem("lang");return this._HttpClient.get(f.baseUrl+"cart",{headers:{Authorization:"Bearer "+t,lang:e,currency:r}})}addToCart(t){let{token:r,currency:e}=this.getTokenAndCurrency(),d=localStorage.getItem("lang");return this._HttpClient.post(f.baseUrl+"cart",t,{headers:{Authorization:"Bearer "+r,lang:d}})}removeFromCart(t){let{token:r,currency:e}=this.getTokenAndCurrency(),d=localStorage.getItem("lang");return this._HttpClient.delete(f.baseUrl+"cart",{headers:{Authorization:"Bearer "+r,lang:d}})}clearCart(){let{token:t,currency:r}=this.getTokenAndCurrency(),e=localStorage.getItem("lang");return this._HttpClient.delete(f.baseUrl+"cart",{headers:{Authorization:"Bearer "+t,lang:e}})}getTokenAndCurrency(){let t="";this.authorization$.pipe(m(e=>t=e.token)).subscribe(p,e=>console.log(e));let r="";return this.currency$.pipe(m(e=>r=e.currency)).subscribe(p,e=>console.log(e)),{token:t,currency:r}}static{this.\u0275fac=function(r){return new(r||i)(y(B),y(x))}}static{this.\u0275prov=I({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function V(i,v){if(i&1&&(o(0,"span",24),l(1),_(2,"translate"),a()),i&2){let t=C();n(),M("",O(2,2,"cart.discount")," ",t.product.discount,"%")}}function X(i,v){if(i&1&&(o(0,"del",25),l(1),a()),i&2){let t=C();n(),g(t.product.price)}}function Y(i,v){i&1&&c(0,"i",26)}function Z(i,v){i&1&&c(0,"i",27)}var ye=(()=>{class i{constructor(t,r,e,d){this._CartService=t,this._WishlistService=r,this._Store=e,this._ToastrService=d,this.isFavourite=b(!1),this.currency$=this._Store.select(R),this.currency=""}ngOnInit(){this.currency$.pipe(m(t=>this.currency=t)).subscribe(p,t=>console.log(t))}addToWishlist(t){this.isFavourite=b(!this.isFavourite()),this._WishlistService.addToWishlist(t).pipe(m(r=>{r.code==200&&this._ToastrService.success(r.message)})).subscribe(p,r=>console.log(r))}addToCart(t){console.log("id: ",t)}static{this.\u0275fac=function(r){return new(r||i)(u(q),u(N),u(x),u(Q))}}static{this.\u0275cmp=k({type:i,selectors:[["app-card-item"]],inputs:{product:"product"},standalone:!0,features:[j],decls:34,vars:15,consts:[[1,"relative","overflow-hidden","duration-200","border","rounded-md","shadow-md","product","group/card","card","bg-gray-50","border-gray-50","hover:border-main-solid"],["class","absolute z-10 px-4 text-xs bg-red-600 rounded-tl-full rounded-br-full top-2 left-2 lg:top-5 lg:left-5 text-gray-50",4,"ngIf"],[1,"w-full","min-h-52","max-h-52","flex","items-stretch","mb-3","overflow-hidden","rounded-md","bg-red-200"],["loading","lazy",1,"w-full","duration-200","group-hover/card:scale-110",3,"src","alt"],[1,"p-3","content"],[1,"cursor-pointer"],[1,"flex","flex-col","items-start","justify-center","gap-2","main-content"],[1,"px-4","py-2","text-xs","duration-200","border","rounded-md","sm:m-0","sm:px-2","sm:py-1","-tracking-tighter","bg-main-solid","text-gray-50","border-main-solid","group-hover/card:text-main-solid","group-hover/card:bg-transparent"],[1,"text-xl","font-bold","duration-200","cursor-pointer","text-main-solid","hover:text-main-light","line-clamp-1",3,"routerLink"],[1,"flex","items-center","gap-2","my-3","text-sm"],[1,"text-lg","pi","pi-shop","text-main-solid"],[1,"text-gray-400"],[1,"my-3","text-xl","font-bold","group-hover/card:text-main-solid"],[1,"inline-block","mx-2","text-gray-400","text-sm"],["class","text-base text-gray-400 line-through",4,"ngIf"],[1,"flex","items-center","justify-between","gap-5","text-sm","text-gray-400"],[1,"rate","flex","items-center","gap-2"],[1,"text-yellow-500","pi","pi-star-fill"],[1,"btns","flex","gap-2","items-center"],[1,"w-10","h-10","flex","items-center","justify-center","text-lg","font-semibold","text-center","duration-200","border","rounded-full","lg:text-sm","xl:text-lg","text-nowrap","bg-main-lighter","border-main-lighter","text-main-solid","hover:text-main-lighter","hover:bg-main-solid","hover:border-main-solid",3,"routerLink"],[1,"pi","pi-shopping-cart"],[1,"w-10","h-10","flex","items-center","justify-center","text-lg","font-semibold","text-center","duration-200","border","rounded-full","lg:text-sm","xl:text-lg","text-nowrap","border-main-lighter","text-main-solid","hover:text-main-lighter","hover:bg-main-solid","hover:border-main-solid",3,"click"],["class","pi pi-heart",4,"ngIf"],["class","pi pi-heart-fill",4,"ngIf"],[1,"absolute","z-10","px-4","text-xs","bg-red-600","rounded-tl-full","rounded-br-full","top-2","left-2","lg:top-5","lg:left-5","text-gray-50"],[1,"text-base","text-gray-400","line-through"],[1,"pi","pi-heart"],[1,"pi","pi-heart-fill"]],template:function(r,e){r&1&&(o(0,"div",0)(1,"div"),h(2,V,3,4,"span",1),o(3,"figure",2),c(4,"img",3),a()(),o(5,"div",4)(6,"div",5)(7,"div",6)(8,"span",7),l(9),a(),o(10,"h3",8),l(11),a()(),o(12,"p",9),c(13,"i",10),o(14,"span",11),l(15,"By Al-ostourah store"),a()(),o(16,"h3",12)(17,"span"),l(18),_(19,"currency"),a(),o(20,"span",13),l(21,"/Qty"),a(),h(22,X,2,1,"del",14),a(),o(23,"div",15)(24,"div",16)(25,"span"),l(26),a(),c(27,"i",17),a(),o(28,"div",18)(29,"button",19),c(30,"i",20),a(),o(31,"button",21),w("click",function(){return e.addToWishlist(e.product.id)}),h(32,Y,1,0,"i",22)(33,Z,1,0,"i",23),a()()()()()()),r&2&&(n(2),s("ngIf",e.product.discount>0),n(2),s("src",e.product.coverImage,T)("alt",e.product.title),n(5),g(e.product.category),n(),s("routerLink","/product/description/"+e.product.id),n(),E(" ",e.product.title," "),n(7),g(P(19,12,e.product.priceOfterDiscount,e.currency)),n(4),s("ngIf",e.product.discount>0),n(4),g(e.product.rate),n(3),s("routerLink","/product/description/"+e.product.id),n(3),s("ngIf",!e.isFavourite()),n(),s("ngIf",e.isFavourite()))},dependencies:[H,F,z,A,U,L],styles:[".product[_ngcontent-%COMP%]:hover   .heart[_ngcontent-%COMP%]{transform:translate(0)}.product[_ngcontent-%COMP%]   .heart[_ngcontent-%COMP%]{transition:transform .5s .4s;transform:translate(160%)}.product[_ngcontent-%COMP%]   .heart[_ngcontent-%COMP%]:hover, .heart[_ngcontent-%COMP%]:hover{animation:_ngcontent-%COMP%_animate 1s linear infinite}@keyframes _ngcontent-%COMP%_animate{0%{transform:scale(1)}20%{transform:scale(.8)}40%{transform:scale(1.5)}60%{transform:scale(1)}80%{transform:scale(1.3)}to{transform:scale(1)}}"]})}}return i})();export{S as a,ye as b};
