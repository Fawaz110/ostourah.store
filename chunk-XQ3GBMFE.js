import{a as z,b as V}from"./chunk-VYLQXCVW.js";import{a as y}from"./chunk-JOHXSRUU.js";import{a as O}from"./chunk-63RNEX5N.js";import"./chunk-PF7Z7L76.js";import{a as h}from"./chunk-74OYPEEI.js";import"./chunk-P7CL672O.js";import"./chunk-ZDTRC7CM.js";import{b as F,c as S,e as D,f as J,h as A,j as G,k as L,l as M,m as P,n as R}from"./chunk-AWB5UADZ.js";import{l as j}from"./chunk-UPVS7NE6.js";import{ca as _,da as E}from"./chunk-4ZAGXY36.js";import{c as T,d as N}from"./chunk-OSWKULZA.js";import{aa as B}from"./chunk-IAZM3ENT.js";import{$b as u,Ab as c,Fb as e,Gb as t,Hb as a,Rb as b,_b as r,ac as d,f as q,fb as i,fc as I,gb as f,gc as C,ob as v,oc as n,pc as o,ua as w,vb as k}from"./chunk-4SNW6VHE.js";var g=q(z());function K(p,W){p&1&&a(0,"i",42)}function U(p,W){p&1&&a(0,"i",43)}var me=(()=>{class p{encrypt(l){return g.AES.encrypt(JSON.stringify(l),y.TokenSecretKey).toString()}decrypt(l){let s=g.AES.decrypt(l,y.TokenSecretKey);return JSON.parse(s.toString(g.enc.Utf8))}constructor(l,s,m,x){this._FormBuilder=l,this.CookieService=s,this.store=m,this._Router=x,this.hide=v(!0)}setCookie(l){this.CookieService.set("userToken",this.encrypt(l),{expires:30,path:"/",secure:!0,sameSite:"Strict"})}getCookie(){let l=this.CookieService.get("userToken")}toggle(){this.hide=v(!this.hide())}submit(){this.form.status=="VALID"?(this.setCookie("from navbar: my-secret-token !see console when inter home"),this.store.dispatch(V({token:"from navbar: my-secret-token !see console when inter home"})),this.getCookie(),console.log("form value: ",this.form.value)):console.error("form values invalid"),this._Router.navigate(["/home"])}ngOnInit(){this.form=this._FormBuilder.group({phone:["",[S.required]],password:["",[S.required]]})}static{this.\u0275fac=function(s){return new(s||p)(f(M),f(h),f(j),f(_))}}static{this.\u0275cmp=w({type:p,selectors:[["app-sign-in"]],standalone:!0,features:[I([h]),C],decls:71,vars:43,consts:[[1,"flex","items-stretch","min-h-screen"],[1,"lang-drop","fixed","top-5","rtl:left-5","ltr:right-5"],[1,"w-full","min-h-full"],[1,"inner","h-full","flex","items-stretch","justify-center"],["wow-data-duration","1.5s",1,"w-full","flex","items-stretch","overflow-hidden","justify-center","wow","fadeIn"],[1,"w-1/2","max-lg:hidden","bg-main-solid","inline-flex","justify-center","items-center","flex-col"],["src","logo-dark.png","alt","logo image"],[1,"text-5xl","-tracking-tight","font-extrabold","text-white"],[1,"w-full","lg:w-1/2"],[1,"inner","flex","items-center","h-full"],[1,"p-5","w-full"],[1,"flex","items-center","gap-2","mb-5","heading"],["loading","lazy","src","logo.png","alt","logo",1,"w-14","lg:hidden"],[1,"content"],[1,"text-3xl","lg:hidden","font-extrabold","text-main-solid"],[1,"text-3xl","max-lg:hidden","font-extrabold","text-main-solid"],[1,"text-lg","font-thin","text-main-light"],[1,"form"],[3,"ngSubmit","formGroup"],[1,"mb-3","form-control"],["for","phoneNumber"],["id","phoneNumber","formControlName","phone","type","text",3,"placeholder"],["for","password"],[1,"relative"],["id","password","formControlName","password",1,"peer/input",3,"type","placeholder"],["aria-label","showPrHodePassword","type","button","for","password",1,"absolute","text-gray-400","-translate-y-1/2","top-1/2","ltr:right-2","rtl:left-2","peer-focus/input:text-main-solid",3,"click"],["class","text-lg pi pi-eye",4,"ngIf"],["class","text-lg pi pi-eye-slash",4,"ngIf"],["aria-label","loginBtn",1,"w-full","mt-5","rounded-md","btn-main"],[1,"block","text-center"],["routerLink","/reset-password",1,"inline-block","underline","duration-200","cursor-pointer","text-main-solid","hover:text-main-light"],[1,"my-3","flex","justify-center","items-center","text-center","relative","before:w-1/2","before:rounded-full","before:absolute","before:h-0.5","before:bg-main-light"],[1,"relative","z-10","p-1","bg-white"],[1,"flex","items-center","justify-center","text-sm","rounded-full","inner","bg-main-solid","text-gray-50","w-7","h-7"],[1,"flex","items-center","justify-center","gap-2","my-3"],["aria-label","loginWithGoogleBtn",1,"flex","items-center","justify-center","w-12","h-12","duration-200","border","rounded-full","icon","border-main-solid","text-main-solid","hover:bg-main-solid","hover:text-gray-50"],[1,"text-xl","pi","pi-google"],["aria-label","loginWithAppleBtn",1,"flex","items-center","justify-center","w-12","h-12","duration-200","border","rounded-full","icon","border-main-solid","text-main-solid","hover:bg-main-solid","hover:text-gray-50"],[1,"text-xl","pi","pi-apple"],["aria-label","loginWithFacebookBtn",1,"flex","items-center","justify-center","w-12","h-12","duration-200","border","rounded-full","icon","border-main-solid","text-main-solid","hover:bg-main-solid","hover:text-gray-50"],[1,"text-xl","pi","pi-facebook"],["routerLink","/sign-up",1,"underline","duration-200","cursor-pointer","text-main-solid","hover:text-main-light"],[1,"text-lg","pi","pi-eye"],[1,"text-lg","pi","pi-eye-slash"]],template:function(s,m){s&1&&(e(0,"section",0)(1,"div",1),a(2,"app-languages-dropdown"),t(),e(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5),a(7,"img",6),e(8,"h2",7),r(9),n(10,"translate"),t()(),e(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11),a(15,"img",12),e(16,"div",13)(17,"h2",14),r(18),n(19,"translate"),t(),e(20,"h2",15),r(21),n(22,"translate"),t(),e(23,"span",16),r(24),n(25,"translate"),t()()(),e(26,"div",17)(27,"form",18),b("ngSubmit",function(){return m.submit()}),e(28,"div",19)(29,"label",20),r(30),n(31,"translate"),t(),a(32,"input",21),n(33,"translate"),t(),e(34,"div",19)(35,"label",22),r(36),n(37,"translate"),t(),e(38,"div",23),a(39,"input",24),n(40,"translate"),e(41,"button",25),b("click",function(){return m.toggle()}),k(42,K,1,0,"i",26)(43,U,1,0,"i",27),t()()(),e(44,"button",28),r(45),n(46,"translate"),t(),e(47,"span",29),r(48),n(49,"translate"),e(50,"a",30),r(51),n(52,"translate"),t()()(),e(53,"span",31)(54,"span",32)(55,"span",33),r(56,"Or"),t()()(),e(57,"div",34)(58,"button",35),a(59,"i",36),t(),e(60,"button",37),a(61,"i",38),t(),e(62,"button",39),a(63,"i",40),t()(),e(64,"span",29)(65,"span"),r(66),n(67,"translate"),t(),e(68,"a",41),r(69),n(70,"translate"),t()()()()()()()()()()),s&2&&(i(9),d(" ",o(10,17,"account.login")," "),i(9),d(" ",o(19,19,"account.login")," "),i(3),d(" ",o(22,21,"global.welcome-back")," "),i(3),u(o(25,23,"account.to-know")),i(3),c("formGroup",m.form),i(3),u(o(31,25,"account.phone")),i(2),c("placeholder",o(33,27,"account.phone-placeholder")),i(4),u(o(37,29,"account.password")),i(3),c("type",m.hide()?"password":"text")("placeholder",o(40,31,"account.pass-placeholder")),i(3),c("ngIf",!m.hide()),i(),c("ngIf",m.hide()),i(2),d(" ",o(46,33,"account.submit-login")," "),i(3),d("",o(49,35,"account.forgotPassword")," "),i(3),u(o(52,37,"account.reset-pass")),i(15),u(o(67,39,"account.dont-acc")),i(3),d(" ",o(70,41,"account.register"),""))},dependencies:[P,A,F,D,J,R,G,L,B,E,N,T,O]})}}return p})();export{me as SignInComponent};
