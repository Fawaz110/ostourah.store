import{a as z,b as V}from"./chunk-VYLQXCVW.js";import{a as y,b as h}from"./chunk-GIUONTZ4.js";import{a as O}from"./chunk-T46CL4BO.js";import"./chunk-PF7Z7L76.js";import"./chunk-P7CL672O.js";import"./chunk-ZDTRC7CM.js";import{b as F,c as S,e as D,f as J,h as A,j as G,k as L,l as M,m as P,n as R}from"./chunk-AWB5UADZ.js";import{l as T}from"./chunk-UPVS7NE6.js";import{ca as B,da as E}from"./chunk-4ZAGXY36.js";import{c as N,d as j}from"./chunk-OSWKULZA.js";import{aa as _}from"./chunk-IAZM3ENT.js";import{$b as c,Ab as d,Fb as e,Gb as t,Hb as l,Rb as b,_b as r,ac as f,f as q,fb as i,fc as C,gb as u,gc as I,ob as v,oc as n,pc as o,ua as w,vb as k}from"./chunk-4SNW6VHE.js";var g=q(z());function K(p,W){p&1&&l(0,"i",35)}function U(p,W){p&1&&l(0,"i",36)}var me=(()=>{class p{encrypt(a){return g.AES.encrypt(JSON.stringify(a),y.TokenSecretKey).toString()}decrypt(a){let s=g.AES.decrypt(a,y.TokenSecretKey);return JSON.parse(s.toString(g.enc.Utf8))}constructor(a,s,m,x){this._FormBuilder=a,this.CookieService=s,this.store=m,this._Router=x,this.hide=v(!0)}setCookie(a){this.CookieService.set("userToken",this.encrypt(a),{expires:30,path:"/",secure:!0,sameSite:"Strict"})}getCookie(){let a=this.CookieService.get("userToken")}toggle(){this.hide=v(!this.hide())}submit(){this.form.status=="VALID"?(this.setCookie("from navbar: my-secret-token !see console when inter home"),this.store.dispatch(V({token:"from navbar: my-secret-token !see console when inter home"})),this.getCookie(),console.log("form value: ",this.form.value)):console.error("form values invalid"),this._Router.navigate(["/home"])}ngOnInit(){this.form=this._FormBuilder.group({phone:["",[S.required]],password:["",[S.required]]})}static{this.\u0275fac=function(s){return new(s||p)(u(M),u(h),u(T),u(B))}}static{this.\u0275cmp=w({type:p,selectors:[["app-sign-in"]],standalone:!0,features:[C([h]),I],decls:60,vars:37,consts:[[1,"flex","items-center","min-h-screen"],[1,"lang-drop","fixed","top-5","rtl:left-5","ltr:right-5"],[1,"container","mx-auto"],[1,"flex","justify-center","inner"],["wow-data-duration","1.5s",1,"w-full","p-5","duration-200","rounded-md","lg:w-1/3","lg:border","lg:shadow-md","lg:hover:shadow-main-lighter","lg:hover:border-main-solid","wow","fadeIn"],[1,"flex","items-center","gap-2","mb-5","heading"],["loading","lazy","src","logo.png","alt","logo",1,"w-14"],[1,"content"],[1,"text-3xl","font-extrabold","text-main-solid"],[1,"text-lg","font-thin","text-main-light"],[1,"form"],[3,"ngSubmit","formGroup"],[1,"mb-3","form-control"],["for","phoneNumber"],["id","phoneNumber","formControlName","phone","type","text",3,"placeholder"],["for","password"],[1,"relative"],["id","password","formControlName","password",1,"peer/input",3,"type","placeholder"],["aria-label","showPrHodePassword","type","button","for","password",1,"absolute","text-gray-400","-translate-y-1/2","top-1/2","ltr:right-2","rtl:left-2","peer-focus/input:text-main-solid",3,"click"],["class","text-lg pi pi-eye",4,"ngIf"],["class","text-lg pi pi-eye-slash",4,"ngIf"],["aria-label","loginBtn",1,"w-full","mt-5","rounded-md","btn-main"],[1,"block","text-center"],["routerLink","/reset-password",1,"inline-block","underline","duration-200","cursor-pointer","text-main-solid","hover:text-main-light"],[1,"my-3","flex","justify-center","items-center","text-center","relative","before:w-1/2","before:rounded-full","before:absolute","before:h-0.5","before:bg-main-light"],[1,"relative","z-10","p-1","bg-white"],[1,"flex","items-center","justify-center","text-sm","rounded-full","inner","bg-main-solid","text-gray-50","w-7","h-7"],[1,"flex","items-center","justify-center","gap-2","my-3"],["aria-label","loginWithGoogleBtn",1,"flex","items-center","justify-center","w-12","h-12","duration-200","border","rounded-full","icon","border-main-solid","text-main-solid","hover:bg-main-solid","hover:text-gray-50"],[1,"text-xl","pi","pi-google"],["aria-label","loginWithAppleBtn",1,"flex","items-center","justify-center","w-12","h-12","duration-200","border","rounded-full","icon","border-main-solid","text-main-solid","hover:bg-main-solid","hover:text-gray-50"],[1,"text-xl","pi","pi-apple"],["aria-label","loginWithFacebookBtn",1,"flex","items-center","justify-center","w-12","h-12","duration-200","border","rounded-full","icon","border-main-solid","text-main-solid","hover:bg-main-solid","hover:text-gray-50"],[1,"text-xl","pi","pi-facebook"],["routerLink","/sign-up",1,"underline","duration-200","cursor-pointer","text-main-solid","hover:text-main-light"],[1,"text-lg","pi","pi-eye"],[1,"text-lg","pi","pi-eye-slash"]],template:function(s,m){s&1&&(e(0,"section",0)(1,"div",1),l(2,"app-languages-dropdown"),t(),e(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5),l(7,"img",6),e(8,"div",7)(9,"h2",8),r(10),n(11,"translate"),t(),e(12,"span",9),r(13),n(14,"translate"),t()()(),e(15,"div",10)(16,"form",11),b("ngSubmit",function(){return m.submit()}),e(17,"div",12)(18,"label",13),r(19),n(20,"translate"),t(),l(21,"input",14),n(22,"translate"),t(),e(23,"div",12)(24,"label",15),r(25),n(26,"translate"),t(),e(27,"div",16),l(28,"input",17),n(29,"translate"),e(30,"button",18),b("click",function(){return m.toggle()}),k(31,K,1,0,"i",19)(32,U,1,0,"i",20),t()()(),e(33,"button",21),r(34),n(35,"translate"),t(),e(36,"span",22),r(37),n(38,"translate"),e(39,"a",23),r(40),n(41,"translate"),t()()(),e(42,"span",24)(43,"span",25)(44,"span",26),r(45,"Or"),t()()(),e(46,"div",27)(47,"button",28),l(48,"i",29),t(),e(49,"button",30),l(50,"i",31),t(),e(51,"button",32),l(52,"i",33),t()(),e(53,"span",22)(54,"span"),r(55),n(56,"translate"),t(),e(57,"a",34),r(58),n(59,"translate"),t()()()()()()()),s&2&&(i(10),f(" ",o(11,15,"account.login")," "),i(3),c(o(14,17,"account.to-know")),i(3),d("formGroup",m.form),i(3),c(o(20,19,"account.phone")),i(2),d("placeholder",o(22,21,"account.phone-placeholder")),i(4),c(o(26,23,"account.password")),i(3),d("type",m.hide()?"password":"text")("placeholder",o(29,25,"account.pass-placeholder")),i(3),d("ngIf",!m.hide()),i(),d("ngIf",m.hide()),i(2),f(" ",o(35,27,"account.submit-login")," "),i(3),f("",o(38,29,"account.forgotPassword")," "),i(3),c(o(41,31,"account.reset-pass")),i(15),c(o(56,33,"account.dont-acc")),i(3),f(" ",o(59,35,"account.register"),""))},dependencies:[P,A,F,D,J,R,G,L,_,E,j,N,O]})}}return p})();export{me as SignInComponent};