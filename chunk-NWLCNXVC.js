import{a as G}from"./chunk-6K3FNK4E.js";import"./chunk-HWK6WT2Q.js";import"./chunk-HWVMMMZZ.js";import"./chunk-XV5SAAFR.js";import{c as I,d as B}from"./chunk-RAKTZQIK.js";import{b as _,c as h,e as E,f as C,g as k,i as F,j as N,k as j,l as T,m as D}from"./chunk-X5SMLHGE.js";import{l as S}from"./chunk-5MCLW6Y4.js";import{k as w}from"./chunk-UF5JX7MY.js";import{$a as i,$b as o,Cb as g,Lb as r,Mb as s,Nb as m,Sb as y,_b as n,ab as b,ib as f,nb as v,pb as d,ra as x,tb as e,ub as t,vb as a}from"./chunk-XI2IU34W.js";function P(l,L){l&1&&a(0,"i",35)}function V(l,L){l&1&&a(0,"i",36)}var U=(()=>{class l{constructor(c){this._FormBuilder=c,this.hide=f(!0)}toggle(){this.hide=f(!this.hide())}submit(){this.form.status=="VALID"?console.log("form value: ",this.form.value):console.error("form values invalid")}ngOnInit(){this.form=this._FormBuilder.group({phone:["",[h.required]],password:["",[h.required]]})}static{this.\u0275fac=function(u){return new(u||l)(b(j))}}static{this.\u0275cmp=x({type:l,selectors:[["app-sign-in"]],standalone:!0,features:[y],decls:60,vars:37,consts:[[1,"flex","items-center","min-h-screen"],[1,"lang-drop","fixed","top-5","rtl:left-5","ltr:right-5"],[1,"container","mx-auto"],[1,"flex","justify-center","inner"],["wow-data-duration","1.5s",1,"w-full","p-5","duration-200","rounded-md","lg:w-1/3","lg:border","lg:shadow-md","lg:hover:shadow-main-lighter","lg:hover:border-main-solid","wow","fadeIn"],[1,"flex","items-center","gap-2","mb-5","heading"],["loading","lazy","src","logo.png","alt","logo",1,"w-14"],[1,"content"],[1,"text-3xl","font-extrabold","text-main-solid"],[1,"text-lg","font-thin","text-main-light"],[1,"form"],[3,"ngSubmit","formGroup"],[1,"mb-3","form-control"],["for","phoneNumber"],["id","phoneNumber","formControlName","phone","type","text",3,"placeholder"],["for","password"],[1,"relative"],["id","password","formControlName","password",1,"peer/input",3,"type","placeholder"],["aria-label","showPrHodePassword","type","button","for","password",1,"absolute","text-gray-400","-translate-y-1/2","top-1/2","ltr:right-2","rtl:left-2","peer-focus/input:text-main-solid",3,"click"],["class","text-lg pi pi-eye",4,"ngIf"],["class","text-lg pi pi-eye-slash",4,"ngIf"],["aria-label","loginBtn",1,"w-full","mt-5","rounded-md","btn-main"],[1,"block","text-center"],["routerLink","/reset-password",1,"inline-block","underline","duration-200","cursor-pointer","text-main-solid","hover:text-main-light"],[1,"my-3","flex","justify-center","items-center","text-center","relative","before:w-1/2","before:rounded-full","before:absolute","before:h-0.5","before:bg-main-light"],[1,"relative","z-10","p-1","bg-white"],[1,"flex","items-center","justify-center","text-sm","rounded-full","inner","bg-main-solid","text-gray-50","w-7","h-7"],[1,"flex","items-center","justify-center","gap-2","my-3"],["aria-label","loginWithGoogleBtn",1,"flex","items-center","justify-center","w-12","h-12","duration-200","border","rounded-full","icon","border-main-solid","text-main-solid","hover:bg-main-solid","hover:text-gray-50"],[1,"text-xl","pi","pi-google"],["aria-label","loginWithAppleBtn",1,"flex","items-center","justify-center","w-12","h-12","duration-200","border","rounded-full","icon","border-main-solid","text-main-solid","hover:bg-main-solid","hover:text-gray-50"],[1,"text-xl","pi","pi-apple"],["aria-label","loginWithFacebookBtn",1,"flex","items-center","justify-center","w-12","h-12","duration-200","border","rounded-full","icon","border-main-solid","text-main-solid","hover:bg-main-solid","hover:text-gray-50"],[1,"text-xl","pi","pi-facebook"],["routerLink","/sign-up",1,"underline","duration-200","cursor-pointer","text-main-solid","hover:text-main-light"],[1,"text-lg","pi","pi-eye"],[1,"text-lg","pi","pi-eye-slash"]],template:function(u,p){u&1&&(e(0,"section",0)(1,"div",1),a(2,"app-languages-dropdown"),t(),e(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5),a(7,"img",6),e(8,"div",7)(9,"h2",8),r(10),n(11,"translate"),t(),e(12,"span",9),r(13),n(14,"translate"),t()()(),e(15,"div",10)(16,"form",11),g("ngSubmit",function(){return p.submit()}),e(17,"div",12)(18,"label",13),r(19),n(20,"translate"),t(),a(21,"input",14),n(22,"translate"),t(),e(23,"div",12)(24,"label",15),r(25),n(26,"translate"),t(),e(27,"div",16),a(28,"input",17),n(29,"translate"),e(30,"button",18),g("click",function(){return p.toggle()}),v(31,P,1,0,"i",19)(32,V,1,0,"i",20),t()()(),e(33,"button",21),r(34),n(35,"translate"),t(),e(36,"span",22),r(37),n(38,"translate"),e(39,"a",23),r(40),n(41,"translate"),t()()(),e(42,"span",24)(43,"span",25)(44,"span",26),r(45,"Or"),t()()(),e(46,"div",27)(47,"button",28),a(48,"i",29),t(),e(49,"button",30),a(50,"i",31),t(),e(51,"button",32),a(52,"i",33),t()(),e(53,"span",22)(54,"span"),r(55),n(56,"translate"),t(),e(57,"a",34),r(58),n(59,"translate"),t()()()()()()()),u&2&&(i(10),m(" ",o(11,15,"account.login")," "),i(3),s(o(14,17,"account.to-know")),i(3),d("formGroup",p.form),i(3),s(o(20,19,"account.phone")),i(2),d("placeholder",o(22,21,"account.phone-placeholder")),i(4),s(o(26,23,"account.password")),i(3),d("type",p.hide()?"password":"text")("placeholder",o(29,25,"account.pass-placeholder")),i(3),d("ngIf",!p.hide()),i(),d("ngIf",p.hide()),i(2),m(" ",o(35,27,"account.submit-login")," "),i(3),m("",o(38,29,"account.forgotPassword")," "),i(3),s(o(41,31,"account.reset-pass")),i(15),s(o(56,33,"account.dont-acc")),i(3),m(" ",o(59,35,"account.register"),""))},dependencies:[T,k,_,E,C,D,F,N,w,S,B,I,G]})}}return l})();export{U as SignInComponent};
