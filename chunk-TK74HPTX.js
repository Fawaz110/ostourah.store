import{a as z,b as V}from"./chunk-VYLQXCVW.js";import{a as h,b as y}from"./chunk-VCCYTWDR.js";import{a as O}from"./chunk-T46CL4BO.js";import"./chunk-PF7Z7L76.js";import"./chunk-P7CL672O.js";import"./chunk-ZDTRC7CM.js";import{b as F,c as S,e as D,f as J,h as A,j as G,k as L,l as M,m as P,n as R}from"./chunk-AWB5UADZ.js";import{l as j}from"./chunk-UPVS7NE6.js";import{ca as B,da as E}from"./chunk-4ZAGXY36.js";import{c as T,d as N}from"./chunk-OSWKULZA.js";import{aa as _}from"./chunk-IAZM3ENT.js";import{$b as c,Ab as d,Fb as e,Gb as t,Hb as r,Rb as b,_b as a,ac as f,f as q,fb as i,fc as C,gb as u,gc as I,ob as v,oc as n,pc as o,ua as w,vb as k}from"./chunk-4SNW6VHE.js";var g=q(z());function K(s,W){s&1&&r(0,"i",39)}function U(s,W){s&1&&r(0,"i",40)}var me=(()=>{class s{encrypt(l){return g.AES.encrypt(JSON.stringify(l),y.TokenSecretKey).toString()}decrypt(l){let p=g.AES.decrypt(l,y.TokenSecretKey);return JSON.parse(p.toString(g.enc.Utf8))}constructor(l,p,m,x){this._FormBuilder=l,this.CookieService=p,this.store=m,this._Router=x,this.hide=v(!0)}setCookie(l){this.CookieService.set("userToken",this.encrypt(l),{expires:30,path:"/",secure:!0,sameSite:"Strict"})}getCookie(){let l=this.CookieService.get("userToken")}toggle(){this.hide=v(!this.hide())}submit(){this.form.status=="VALID"?(this.setCookie("from navbar: my-secret-token !see console when inter home"),this.store.dispatch(V({token:"from navbar: my-secret-token !see console when inter home"})),this.getCookie(),console.log("form value: ",this.form.value)):console.error("form values invalid"),this._Router.navigate(["/home"])}ngOnInit(){this.form=this._FormBuilder.group({phone:["",[S.required]],password:["",[S.required]]})}static{this.\u0275fac=function(p){return new(p||s)(u(M),u(h),u(j),u(B))}}static{this.\u0275cmp=w({type:s,selectors:[["app-sign-in"]],standalone:!0,features:[C([h]),I],decls:64,vars:37,consts:[[1,"flex","items-center","min-h-screen"],[1,"lang-drop","fixed","top-5","rtl:left-5","ltr:right-5"],[1,"container","mx-auto"],[1,"inner","flex","items-center","justify-center"],["wow-data-duration","1.5s",1,"w-full","lg:w-3/4","xl:w-3/5","lg:border","border-main-solid","rounded-md","flex","items-stretch","overflow-hidden","justify-center","wow","fadeIn"],[1,"w-1/2","max-lg:hidden","bg-main-solid","inline-flex","justify-center","items-center"],["src","logo-dark.png","alt","logo image"],[1,"w-full","lg:w-1/2"],[1,"p-5"],[1,"flex","items-center","gap-2","mb-5","heading"],["loading","lazy","src","logo.png","alt","logo",1,"w-14","lg:hidden"],[1,"content"],[1,"text-3xl","font-extrabold","text-main-solid"],[1,"text-lg","font-thin","text-main-light"],[1,"form"],[3,"ngSubmit","formGroup"],[1,"mb-3","form-control"],["for","phoneNumber"],["id","phoneNumber","formControlName","phone","type","text",3,"placeholder"],["for","password"],[1,"relative"],["id","password","formControlName","password",1,"peer/input",3,"type","placeholder"],["aria-label","showPrHodePassword","type","button","for","password",1,"absolute","text-gray-400","-translate-y-1/2","top-1/2","ltr:right-2","rtl:left-2","peer-focus/input:text-main-solid",3,"click"],["class","text-lg pi pi-eye",4,"ngIf"],["class","text-lg pi pi-eye-slash",4,"ngIf"],["aria-label","loginBtn",1,"w-full","mt-5","rounded-md","btn-main"],[1,"block","text-center"],["routerLink","/reset-password",1,"inline-block","underline","duration-200","cursor-pointer","text-main-solid","hover:text-main-light"],[1,"my-3","flex","justify-center","items-center","text-center","relative","before:w-1/2","before:rounded-full","before:absolute","before:h-0.5","before:bg-main-light"],[1,"relative","z-10","p-1","bg-white"],[1,"flex","items-center","justify-center","text-sm","rounded-full","inner","bg-main-solid","text-gray-50","w-7","h-7"],[1,"flex","items-center","justify-center","gap-2","my-3"],["aria-label","loginWithGoogleBtn",1,"flex","items-center","justify-center","w-12","h-12","duration-200","border","rounded-full","icon","border-main-solid","text-main-solid","hover:bg-main-solid","hover:text-gray-50"],[1,"text-xl","pi","pi-google"],["aria-label","loginWithAppleBtn",1,"flex","items-center","justify-center","w-12","h-12","duration-200","border","rounded-full","icon","border-main-solid","text-main-solid","hover:bg-main-solid","hover:text-gray-50"],[1,"text-xl","pi","pi-apple"],["aria-label","loginWithFacebookBtn",1,"flex","items-center","justify-center","w-12","h-12","duration-200","border","rounded-full","icon","border-main-solid","text-main-solid","hover:bg-main-solid","hover:text-gray-50"],[1,"text-xl","pi","pi-facebook"],["routerLink","/sign-up",1,"underline","duration-200","cursor-pointer","text-main-solid","hover:text-main-light"],[1,"text-lg","pi","pi-eye"],[1,"text-lg","pi","pi-eye-slash"]],template:function(p,m){p&1&&(e(0,"section",0)(1,"div",1),r(2,"app-languages-dropdown"),t(),e(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5),r(7,"img",6),t(),e(8,"div",7)(9,"div",8)(10,"div",9),r(11,"img",10),e(12,"div",11)(13,"h2",12),a(14),n(15,"translate"),t(),e(16,"span",13),a(17),n(18,"translate"),t()()(),e(19,"div",14)(20,"form",15),b("ngSubmit",function(){return m.submit()}),e(21,"div",16)(22,"label",17),a(23),n(24,"translate"),t(),r(25,"input",18),n(26,"translate"),t(),e(27,"div",16)(28,"label",19),a(29),n(30,"translate"),t(),e(31,"div",20),r(32,"input",21),n(33,"translate"),e(34,"button",22),b("click",function(){return m.toggle()}),k(35,K,1,0,"i",23)(36,U,1,0,"i",24),t()()(),e(37,"button",25),a(38),n(39,"translate"),t(),e(40,"span",26),a(41),n(42,"translate"),e(43,"a",27),a(44),n(45,"translate"),t()()(),e(46,"span",28)(47,"span",29)(48,"span",30),a(49,"Or"),t()()(),e(50,"div",31)(51,"button",32),r(52,"i",33),t(),e(53,"button",34),r(54,"i",35),t(),e(55,"button",36),r(56,"i",37),t()(),e(57,"span",26)(58,"span"),a(59),n(60,"translate"),t(),e(61,"a",38),a(62),n(63,"translate"),t()()()()()()()()()),p&2&&(i(14),f(" ",o(15,15,"account.login")," "),i(3),c(o(18,17,"account.to-know")),i(3),d("formGroup",m.form),i(3),c(o(24,19,"account.phone")),i(2),d("placeholder",o(26,21,"account.phone-placeholder")),i(4),c(o(30,23,"account.password")),i(3),d("type",m.hide()?"password":"text")("placeholder",o(33,25,"account.pass-placeholder")),i(3),d("ngIf",!m.hide()),i(),d("ngIf",m.hide()),i(2),f(" ",o(39,27,"account.submit-login")," "),i(3),f("",o(42,29,"account.forgotPassword")," "),i(3),c(o(45,31,"account.reset-pass")),i(15),c(o(60,33,"account.dont-acc")),i(3),f(" ",o(63,35,"account.register"),""))},dependencies:[P,A,F,D,J,R,G,L,_,E,N,T,O]})}}return s})();export{me as SignInComponent};