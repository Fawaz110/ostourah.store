import{b as x,c as a,e as h,f as b,g as w,i as v,j as S,k as y,l as E,m as C}from"./chunk-QLQHYLM5.js";import{l as g}from"./chunk-MFC3YLCU.js";import"./chunk-S72EANLY.js";import{$a as d,Ab as f,Jb as i,Qb as p,ab as u,pb as c,ra as s,tb as e,ub as t,vb as l}from"./chunk-M2M7UK3E.js";var D=(()=>{class n{constructor(r){this._FormBuilder=r}submit(){console.log(this.form.value)}ngOnInit(){this.form=this._FormBuilder.group({email:["",[a.required,a.email]]})}static{this.\u0275fac=function(o){return new(o||n)(u(y))}}static{this.\u0275cmp=s({type:n,selectors:[["app-reset-password"]],standalone:!0,features:[p],decls:33,vars:1,consts:[[1,"min-h-screen","flex","items-center"],[1,"container","mx-auto"],[1,"inner","flex","justify-center"],["wow-data-duration","1.5s",1,"w-full","lg:w-1/3","rounded-md","lg:border","lg:shadow-md","lg:hover:shadow-main-lighter","lg:hover:border-main-solid","duration-200","p-5","wow","fadeIn"],[1,"heading","mb-5","flex","items-center","gap-2"],["src","logo.png","alt","logo",1,"w-14"],[1,"content"],[1,"text-3xl","font-extrabold","text-main-solid"],[1,"text-lg","font-thin","text-main-light"],[1,"form"],[3,"ngSubmit","formGroup"],[1,"form-control","mb-3"],["for","email"],["id","email","formControlName","email","type","email","placeholder","Enter your email..."],[1,"hint"],[1,"text-main-solid","font-extrabold"],[1,"text-sm","ms-2","text-main-light"],[1,"btn-main","w-full","mt-5","rounded-md"],[1,"my-3","flex","justify-center","items-center","text-center","relative","before:w-1/2","before:rounded-full","before:absolute","before:h-0.5","before:bg-main-light"],[1,"bg-white","relative","z-10","p-1"],[1,"inner","rounded-full","bg-main-solid","text-gray-50","w-7","text-sm","flex","items-center","justify-center","h-7"],[1,"block","text-center"],["routerLink","/sign-in",1,"text-main-solid","underline","cursor-pointer","hover:text-main-light","duration-200"]],template:function(o,m){o&1&&(e(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),l(5,"img",5),e(6,"div",6)(7,"h2",7),i(8,"Reset Password"),t(),e(9,"span",8),i(10,"To access your account"),t()()(),e(11,"div",9)(12,"form",10),f("ngSubmit",function(){return m.submit()}),e(13,"div",11)(14,"label",12),i(15,"Email"),t(),l(16,"input",13),t(),e(17,"div",14)(18,"span",15),i(19,"*"),t(),e(20,"span",16),i(21,"We will send you a message to set or reset a new password"),t()(),e(22,"button",17),i(23,"Reset password"),t()(),e(24,"span",18)(25,"span",19)(26,"span",20),i(27,"Or"),t()()(),e(28,"span",21)(29,"span"),i(30,"Can't access email recently?"),t(),e(31,"a",22),i(32,"login manually"),t()()()()()()()),o&2&&(d(12),c("formGroup",m.form))},dependencies:[E,w,x,h,b,C,v,S,g]})}}return n})();export{D as ResetPasswordComponent};