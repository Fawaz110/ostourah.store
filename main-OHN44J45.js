import{f as Ae,g as B,h as K,m as Ie,n as X,p as Te,u as Se}from"./chunk-3SREWCWD.js";import{a as Le,b as Ne,c as Me,d as tt,e as Pe,f as Fe,g as je,h as ke,i as Ue,j as Ye,k as ze}from"./chunk-A5LF7LWE.js";import"./chunk-NMGI7OHJ.js";import{a as Be}from"./chunk-TZ7ZSMBT.js";import{a as Oe,d as At,e as q,f as Ee,g as ve,h as Ce,i as It,j as Re,k as De,l as xe,o as we,p as E,q as J}from"./chunk-YIV5LES5.js";import{a as be,b as _e,d as Q}from"./chunk-VKPY6LTO.js";import{a as le,b as pe,c as ue,d as he,e as Z,f as me,g as fe,h as gt,j as ge,n as yt,o as ye}from"./chunk-MFC3YLCU.js";import{d as W,p as ft}from"./chunk-S72EANLY.js";import{$,F as lt,Fa as ne,G as M,H as Vt,J as Gt,K as Wt,La as P,M as Zt,Ma as oe,Qb as ce,Ra as ie,Sa as k,V as Kt,W as Xt,Y as qt,_ as pt,a as y,ab as U,b as A,ba as Jt,bb as re,ca as Qt,db as se,eb as V,ga as w,ha as ut,hb as G,i as ct,ia as ht,jc as de,ka as _,l as Ut,ma as T,n as Bt,na as L,o as Yt,p as zt,q as $t,ra as te,s as dt,sa as mt,va as H,vb as ae,w as Ht,wa as ee,x as b}from"./chunk-M2M7UK3E.js";var bn=(()=>{class t extends X{constructor(e,o,i){super(e,o,i)}ngOnDestroy(){this.flush()}static{this.\u0275fac=function(o){return new(o||t)(T(W),T(B),T(K))}}static{this.\u0275prov=w({token:t,factory:t.\u0275fac})}}return t})();function _n(){return new Ie}function Ln(t,n,e){return new Se(t,n,e)}var $e=[{provide:K,useFactory:_n},{provide:X,useClass:bn},{provide:V,useFactory:Ln,deps:[Z,X,P]}],Tt=[{provide:B,useFactory:()=>new Te},{provide:k,useValue:"BrowserAnimations"},...$e],Nn=[{provide:B,useClass:Ae},{provide:k,useValue:"NoopAnimations"},...$e],He=(()=>{class t{static withConfig(e){return{ngModule:t,providers:e.disableAnimations?Nn:Tt}}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=mt({type:t})}static{this.\u0275inj=ht({providers:Tt,imports:[fe]})}}return t})();function Ve(){return G("NgEagerAnimations"),[...Tt]}var Mn="@",Pn=(()=>{class t{constructor(e,o,i,a,p){this.doc=e,this.delegate=o,this.zone=i,this.animationType=a,this.moduleImpl=p,this._rendererFactoryPromise=null,this.scheduler=L(se,{optional:!0}),this.loadingSchedulerFn=L(Fn,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-XWODS3N7.js").then(i=>i),o;return this.loadingSchedulerFn?o=this.loadingSchedulerFn(e):o=e(),o.catch(i=>{throw new Qt(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:a})=>{this._engine=i(this.animationType,this.doc);let p=new a(this.delegate,this._engine,this.zone);return this.delegate=p,p})}createRenderer(e,o){let i=this.delegate.createRenderer(e,o);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let a=new Ot(i);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(p=>{let d=p.createRenderer(e,o);a.use(d),this.scheduler?.notify(10)}).catch(p=>{a.use(i)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(o){re()}}static{this.\u0275prov=w({token:t,factory:t.\u0275fac})}}return t})(),Ot=class{constructor(n){this.delegate=n,this.replay=[],this.\u0275type=1}use(n){if(this.delegate=n,this.replay!==null){for(let e of this.replay)e(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,e){this.delegate.appendChild(n,e)}insertBefore(n,e,o,i){this.delegate.insertBefore(n,e,o,i)}removeChild(n,e,o){this.delegate.removeChild(n,e,o)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,o,i){this.delegate.setAttribute(n,e,o,i)}removeAttribute(n,e,o){this.delegate.removeAttribute(n,e,o)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,o,i){this.delegate.setStyle(n,e,o,i)}removeStyle(n,e,o){this.delegate.removeStyle(n,e,o)}setProperty(n,e,o){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(n,e,o)),this.delegate.setProperty(n,e,o)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,o){return this.shouldReplay(e)&&this.replay.push(i=>i.listen(n,e,o)),this.delegate.listen(n,e,o)}shouldReplay(n){return this.replay!==null&&n.startsWith(Mn)}},Fn=new _("");function Et(t="animations"){return G("NgAsyncAnimations"),H([{provide:V,useFactory:(n,e,o)=>new Pn(n,e,o,t),deps:[W,Z,P]},{provide:k,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var z="PERFORM_ACTION",kn="REFRESH",qe="RESET",Je="ROLLBACK",Qe="COMMIT",tn="SWEEP",en="TOGGLE_ACTION",Un="SET_ACTIONS_ACTIVE",nn="JUMP_TO_STATE",on="JUMP_TO_ACTION",Ft="IMPORT_STATE",rn="LOCK_CHANGES",sn="PAUSE_RECORDING",F=class{constructor(n,e){if(this.action=n,this.timestamp=e,this.type=z,typeof n.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},vt=class{constructor(){this.type=kn}},Ct=class{constructor(n){this.timestamp=n,this.type=qe}},Rt=class{constructor(n){this.timestamp=n,this.type=Je}},Dt=class{constructor(n){this.timestamp=n,this.type=Qe}},xt=class{constructor(){this.type=tn}},wt=class{constructor(n){this.id=n,this.type=en}};var bt=class{constructor(n){this.index=n,this.type=nn}},_t=class{constructor(n){this.actionId=n,this.type=on}},Lt=class{constructor(n){this.nextLiftedState=n,this.type=Ft}},Nt=class{constructor(n){this.status=n,this.type=rn}},Mt=class{constructor(n){this.status=n,this.type=sn}};var it=new _("@ngrx/store-devtools Options"),Ge=new _("@ngrx/store-devtools Initial Config");function an(){return null}var Bn="NgRx Store DevTools";function Yn(t){let n={maxAge:!1,monitor:an,actionSanitizer:void 0,stateSanitizer:void 0,name:Bn,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},e=typeof t=="function"?t():t,o=e.logOnly?{pause:!0,export:!0,test:!0}:!1,i=e.features||o||n.features;i.import===!0&&(i.import="custom");let a=Object.assign({},n,{features:i},e);if(a.maxAge&&a.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${a.maxAge}`);return a}function We(t,n){return t.filter(e=>n.indexOf(e)<0)}function cn(t){let{computedStates:n,currentStateIndex:e}=t;if(e>=n.length){let{state:i}=n[n.length-1];return i}let{state:o}=n[e];return o}function Y(t){return new F(t,+Date.now())}function zn(t,n){return Object.keys(n).reduce((e,o)=>{let i=Number(o);return e[i]=dn(t,n[i],i),e},{})}function dn(t,n,e){return A(y({},n),{action:t(n.action,e)})}function $n(t,n){return n.map((e,o)=>({state:ln(t,e.state,o),error:e.error}))}function ln(t,n,e){return t(n,e)}function pn(t){return t.predicate||t.actionsSafelist||t.actionsBlocklist}function Hn(t,n,e,o){let i=[],a={},p=[];return t.stagedActionIds.forEach((d,g)=>{let r=t.actionsById[d];r&&(g&&jt(t.computedStates[g],r,n,e,o)||(a[d]=r,i.push(d),p.push(t.computedStates[g])))}),A(y({},t),{stagedActionIds:i,actionsById:a,computedStates:p})}function jt(t,n,e,o,i){let a=e&&!e(t,n.action),p=o&&!n.action.type.match(o.map(g=>Ze(g)).join("|")),d=i&&n.action.type.match(i.map(g=>Ze(g)).join("|"));return a||p||d}function Ze(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function un(t){return{ngZone:t?L(P):null,connectInZone:t}}var rt=(()=>{class t extends q{static{this.\u0275fac=(()=>{let e;return function(i){return(e||(e=ne(t)))(i||t)}})()}static{this.\u0275prov=w({token:t,factory:t.\u0275fac})}}return t})(),et={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},Pt=new _("@ngrx/store-devtools Redux Devtools Extension"),hn=(()=>{class t{constructor(e,o,i){this.config=o,this.dispatcher=i,this.zoneConfig=un(this.config.connectInZone),this.devtoolsExtension=e,this.createActionStreams()}notify(e,o){if(this.devtoolsExtension)if(e.type===z){if(o.isLocked||o.isPaused)return;let i=cn(o);if(pn(this.config)&&jt(i,e,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let a=this.config.stateSanitizer?ln(this.config.stateSanitizer,i,o.currentStateIndex):i,p=this.config.actionSanitizer?dn(this.config.actionSanitizer,e,o.nextActionId):e;this.sendToReduxDevtools(()=>this.extensionConnection.send(p,a))}else{let i=A(y({},o),{stagedActionIds:o.stagedActionIds,actionsById:this.config.actionSanitizer?zn(this.config.actionSanitizer,o.actionsById):o.actionsById,computedStates:this.config.stateSanitizer?$n(this.config.stateSanitizer,o.computedStates):o.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,i,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new ct(e=>{let o=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=o,o.init(),o.subscribe(i=>e.next(i)),o.unsubscribe}):zt}createActionStreams(){let e=this.createChangesObservable().pipe(Xt()),o=e.pipe(M(r=>r.type===et.START)),i=e.pipe(M(r=>r.type===et.STOP)),a=e.pipe(M(r=>r.type===et.DISPATCH),b(r=>this.unwrapAction(r.payload)),Gt(r=>r.type===Ft?this.dispatcher.pipe(M(I=>I.type===It),Ht(1e3),Wt(1e3),b(()=>r),Vt(()=>dt(r)),Zt(1)):dt(r))),d=e.pipe(M(r=>r.type===et.ACTION),b(r=>this.unwrapAction(r.payload))).pipe($(i)),g=a.pipe($(i));this.start$=o.pipe($(i)),this.actions$=this.start$.pipe(pt(()=>d)),this.liftedActions$=this.start$.pipe(pt(()=>g))}unwrapAction(e){return typeof e=="string"?(0,eval)(`(${e})`):e}getExtensionConfig(e){let o={name:e.name,features:e.features,serialize:e.serialize,autoPause:e.autoPause??!1,trace:e.trace??!1,traceLimit:e.traceLimit??75};return e.maxAge!==!1&&(o.maxAge=e.maxAge),o}sendToReduxDevtools(e){try{e()}catch(o){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",o)}}static{this.\u0275fac=function(o){return new(o||t)(T(Pt),T(it),T(rt))}}static{this.\u0275prov=w({token:t,factory:t.\u0275fac})}}return t})(),ot={type:At},Vn="@ngrx/store-devtools/recompute",Gn={type:Vn};function mn(t,n,e,o,i){if(o)return{state:e,error:"Interrupted by an error up the chain"};let a=e,p;try{a=t(e,n)}catch(d){p=d.toString(),i.handleError(d)}return{state:a,error:p}}function nt(t,n,e,o,i,a,p,d,g){if(n>=t.length&&t.length===a.length)return t;let r=t.slice(0,n),I=a.length-(g?1:0);for(let s=n;s<I;s++){let u=a[s],O=i[u].action,l=r[s-1],c=l?l.state:o,C=l?l.error:void 0,R=p.indexOf(u)>-1?l:mn(e,O,c,C,d);r.push(R)}return g&&r.push(t[t.length-1]),r}function Wn(t,n){return{monitorState:n(void 0,{}),nextActionId:1,actionsById:{0:Y(ot)},stagedActionIds:[0],skippedActionIds:[],committedState:t,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function Zn(t,n,e,o,i={}){return a=>(p,d)=>{let{monitorState:g,actionsById:r,nextActionId:I,stagedActionIds:s,skippedActionIds:u,committedState:O,currentStateIndex:l,computedStates:c,isLocked:C,isPaused:S}=p||n;p||(r=Object.create(r));function R(f){let m=f,x=s.slice(1,m+1);for(let v=0;v<x.length;v++)if(c[v+1].error){m=v,x=s.slice(1,m+1);break}else delete r[x[v]];u=u.filter(v=>x.indexOf(v)===-1),s=[0,...s.slice(m+1)],O=c[m].state,c=c.slice(m),l=l>m?l-m:0}function D(){r={0:Y(ot)},I=1,s=[0],u=[],O=c[l].state,l=0,c=[]}let h=0;switch(d.type){case rn:{C=d.status,h=1/0;break}case sn:{S=d.status,S?(s=[...s,I],r[I]=new F({type:"@ngrx/devtools/pause"},+Date.now()),I++,h=s.length-1,c=c.concat(c[c.length-1]),l===s.length-2&&l++,h=1/0):D();break}case qe:{r={0:Y(ot)},I=1,s=[0],u=[],O=t,l=0,c=[];break}case Qe:{D();break}case Je:{r={0:Y(ot)},I=1,s=[0],u=[],l=0,c=[];break}case en:{let{id:f}=d;u.indexOf(f)===-1?u=[f,...u]:u=u.filter(x=>x!==f),h=s.indexOf(f);break}case Un:{let{start:f,end:m,active:x}=d,v=[];for(let at=f;at<m;at++)v.push(at);x?u=We(u,v):u=[...u,...v],h=s.indexOf(f);break}case nn:{l=d.index,h=1/0;break}case on:{let f=s.indexOf(d.actionId);f!==-1&&(l=f),h=1/0;break}case tn:{s=We(s,u),u=[],l=Math.min(l,s.length-1);break}case z:{if(C)return p||n;if(S||p&&jt(p.computedStates[l],d,i.predicate,i.actionsSafelist,i.actionsBlocklist)){let m=c[c.length-1];c=[...c.slice(0,-1),mn(a,d.action,m.state,m.error,e)],h=1/0;break}i.maxAge&&s.length===i.maxAge&&R(1),l===s.length-1&&l++;let f=I++;r[f]=d,s=[...s,f],h=s.length-1;break}case Ft:{({monitorState:g,actionsById:r,nextActionId:I,stagedActionIds:s,skippedActionIds:u,committedState:O,currentStateIndex:l,computedStates:c,isLocked:C,isPaused:S}=d.nextLiftedState);break}case At:{h=0,i.maxAge&&s.length>i.maxAge&&(c=nt(c,h,a,O,r,s,u,e,S),R(s.length-i.maxAge),h=1/0);break}case It:{if(c.filter(m=>m.error).length>0)h=0,i.maxAge&&s.length>i.maxAge&&(c=nt(c,h,a,O,r,s,u,e,S),R(s.length-i.maxAge),h=1/0);else{if(!S&&!C){l===s.length-1&&l++;let m=I++;r[m]=new F(d,+Date.now()),s=[...s,m],h=s.length-1,c=nt(c,h,a,O,r,s,u,e,S)}c=c.map(m=>A(y({},m),{state:a(m.state,Gn)})),l=s.length-1,i.maxAge&&s.length>i.maxAge&&R(s.length-i.maxAge),h=1/0}break}default:{h=1/0;break}}return c=nt(c,h,a,O,r,s,u,e,S),g=o(g,d),{monitorState:g,actionsById:r,nextActionId:I,stagedActionIds:s,skippedActionIds:u,committedState:O,currentStateIndex:l,computedStates:c,isLocked:C,isPaused:S}}}var Ke=(()=>{class t{constructor(e,o,i,a,p,d,g,r){let I=Wn(g,r.monitor),s=Zn(g,I,d,r.monitor,r),u=lt(lt(o.asObservable().pipe(qt(1)),a.actions$).pipe(b(Y)),e,a.liftedActions$).pipe($t(Yt)),O=i.pipe(b(s)),l=un(r.connectInZone),c=new Bt(1);this.liftedStateSubscription=u.pipe(Jt(O),Xe(l),Kt(({state:R},[D,h])=>{let f=h(R,D);return D.type!==z&&pn(r)&&(f=Hn(f,r.predicate,r.actionsSafelist,r.actionsBlocklist)),a.notify(D,f),{state:f,action:D}},{state:I,action:null})).subscribe(({state:R,action:D})=>{if(c.next(R),D.type===z){let h=D.action;p.next(h)}}),this.extensionStartSubscription=a.start$.pipe(Xe(l)).subscribe(()=>{this.refresh()});let C=c.asObservable(),S=C.pipe(b(cn));Object.defineProperty(S,"state",{value:Oe(S,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=e,this.liftedState=C,this.state=S}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(e){this.dispatcher.next(e)}next(e){this.dispatcher.next(e)}error(e){}complete(){}performAction(e){this.dispatch(new F(e,+Date.now()))}refresh(){this.dispatch(new vt)}reset(){this.dispatch(new Ct(+Date.now()))}rollback(){this.dispatch(new Rt(+Date.now()))}commit(){this.dispatch(new Dt(+Date.now()))}sweep(){this.dispatch(new xt)}toggleAction(e){this.dispatch(new wt(e))}jumpToAction(e){this.dispatch(new _t(e))}jumpToState(e){this.dispatch(new bt(e))}importState(e){this.dispatch(new Lt(e))}lockChanges(e){this.dispatch(new Nt(e))}pauseRecording(e){this.dispatch(new Mt(e))}static{this.\u0275fac=function(o){return new(o||t)(T(rt),T(q),T(ve),T(hn),T(Re),T(oe),T(Ee),T(it))}}static{this.\u0275prov=w({token:t,factory:t.\u0275fac})}}return t})();function Xe({ngZone:t,connectInZone:n}){return e=>n?new ct(o=>e.subscribe({next:i=>t.run(()=>o.next(i)),error:i=>t.run(()=>o.error(i)),complete:()=>t.run(()=>o.complete())})):e}var Kn=new _("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function Xn(t,n){return!!t||n.monitor!==an}function qn(){let t="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[t]<"u"?window[t]:null}function fn(t={}){return H([hn,rt,Ke,{provide:Ge,useValue:t},{provide:Kn,deps:[Pt,it],useFactory:Xn},{provide:Pt,useFactory:qn},{provide:it,deps:[Ge],useFactory:Yn},{provide:De,deps:[Ke],useFactory:Jn},{provide:Ce,useExisting:rt}])}function Jn(t){return t.state}var st=class{http;prefix;suffix;constructor(n,e="/assets/i18n/",o=".json"){this.http=n,this.prefix=e,this.suffix=o}getTranslation(n){return this.http.get(`${this.prefix}${n}${this.suffix}`)}};var kt=[{path:"",loadComponent:()=>import("./chunk-HO7H7ZWP.js").then(t=>t.BlankLayoutComponent),children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadComponent:()=>import("./chunk-QIUYFLGW.js").then(t=>t.HomeComponent)},{path:"products",loadComponent:()=>import("./chunk-GSGXJIAM.js").then(t=>t.ProductsComponent)},{path:"products/:category",loadComponent:()=>import("./chunk-GSGXJIAM.js").then(t=>t.ProductsComponent)},{path:"product",loadComponent:()=>import("./chunk-QITISVGA.js").then(t=>t.ProductDetailsComponent),children:[{path:"",redirectTo:"description/:id",pathMatch:"full"},{path:"description/:id",loadComponent:()=>import("./chunk-RBE2P57X.js").then(t=>t.ProdDescriptionComponent)},{path:"review/:id",loadComponent:()=>import("./chunk-INIJB736.js").then(t=>t.ProdReviewComponent)}]},{path:"offers",loadComponent:()=>import("./chunk-VQ42A2FB.js").then(t=>t.OfferComponent)},{path:"cart",loadComponent:()=>import("./chunk-S3K7K4D7.js").then(t=>t.CartComponent)},{path:"wishlist",loadComponent:()=>import("./chunk-KR7WN7P3.js").then(t=>t.WishlistComponent)},{path:"policy",loadComponent:()=>import("./chunk-5GPDXLCW.js").then(t=>t.PolicyComponent)},{path:"about-us",loadComponent:()=>import("./chunk-OFTMB3QD.js").then(t=>t.AboutUsComponent)}]},{path:"",loadComponent:()=>import("./chunk-GPYZHTAG.js").then(t=>t.AuthLayoutComponent),children:[{path:"",redirectTo:"sign-in",pathMatch:"full"},{path:"sign-in",loadComponent:()=>import("./chunk-E7FAFOQZ.js").then(t=>t.SignInComponent)},{path:"sign-up",loadComponent:()=>import("./chunk-XC6WOJOL.js").then(t=>t.SignUpComponent)},{path:"privacy-policy",loadComponent:()=>import("./chunk-5GPDXLCW.js").then(t=>t.PolicyComponent)},{path:"reset-password",loadComponent:()=>import("./chunk-YSFSRZNB.js").then(t=>t.ResetPasswordComponent)}]},{path:"**",loadComponent:()=>import("./chunk-AMKRI6RG.js").then(t=>t.NotFoundComponent)}];var gn={VERTICAL:"vertical",HORIZONTAL:"horizontal"},yn={DEFAULT:"default",BORDERED:"bordered"},An={LIGHTMODE:"light",DARKMODE:"dark"},In={LTR:"ltr",RTL:"rtl"},Tn={FLUID:"fluid",BOXED:"boxed"},Sn={DEFAULT:"lg",COMPACT:"md",SMALL:"sm"},On={STICKY:"sticky",SCROLL:"scroll",BORDERED:"bordered",HIDDEN:"hidden"},En={LIGHT:"light",DARK:"dark",BRAND:"brand",MODERN:"modern"},vn={LIGHT:"light",DARK:"dark",BRAND:"brand"};var Qn={LAYOUT:gn.VERTICAL,LAYOUT_SKIN:yn.BORDERED,LAYOUT_MODE:An.LIGHTMODE,LAYOUT_DIRECTION:In.LTR,LAYOUT_WIDTH:Tn.BOXED,SIDEBAR_SIZE:Sn.DEFAULT,LAYOUT_NAVIGATION:On.STICKY,SIDEBAR_COLOR:En.BRAND,TOPBAR_COLOR:vn.BRAND},Cn=J(Qn,E(Le,(t,n)=>A(y({},t),{LAYOUT:n.layout})),E(Ne,(t,n)=>A(y({},t),{LAYOUT_SKIN:n.skin})),E(Me,(t,n)=>A(y({},t),{LAYOUT_MODE:n.mode})),E(tt,(t,n)=>A(y({},t),{LAYOUT_DIRECTION:n.dir})),E(Pe,(t,n)=>A(y({},t),{LAYOUT_WIDTH:n.width})),E(Fe,(t,n)=>A(y({},t),{SIDEBAR_SIZE:n.size})),E(je,(t,n)=>A(y({},t),{LAYOUT_NAVIGATION:n.navigation})),E(ke,(t,n)=>A(y({},t),{SIDEBAR_COLOR:n.sidebar})),E(Ue,(t,n)=>A(y({},t),{TOPBAR_COLOR:n.topbar})));var to={token:null},Rn=J(to,E(Ye,(t,{token:n})=>A(y({},t),{token:n})),E(ze,t=>A(y({},t),{token:null})));var Dn={layout:Cn,token:Rn};function eo(t){return new st(t,"./assets/i18n/",".json")}var xn={providers:[de({eventCoalescing:!0}),He,yt(kt),yt(kt,ye()),gt(),pe(ue()),Ve(),Et(),we(Dn),gt(),fn(),Et(),ee(he,Q.forRoot({defaultLanguage:"en",loader:{provide:be,useFactory:eo,deps:[le]}}))]};var j=class{get nativeWindow(){return no()}};j.ngInjectableDef=ut({factory:function(){return new j},token:j,providedIn:"root"});function no(){return typeof window<"u"?window:void 0}var N=class{constructor(n){this.itemRevealedSource=new Ut,this.itemRevealed$=this.itemRevealedSource.asObservable(),this.window=n.nativeWindow}init(n){if(this.window){let e=n||{};e.callback=()=>this.itemRevealedSource.next(),new WOW(e).init()}}};N.ngInjectableDef=ut({factory:function(){return new N(L(j))},token:N,providedIn:"root"});var wn=(()=>{class t{constructor(e,o,i,a){this._NgwWowService=e,this.platformId=o,this.translate=i,this.store=a,this.title="ecommerce",e.init()}ngOnInit(){ft(this.platformId)&&typeof document<"u"&&window.scrollTo(0,50),this.translate&&typeof this.translate.setDefaultLang=="function"?(this.translate.setDefaultLang("en"),this.translate.use("en")):console.error("TranslateService not correctly initialized"),typeof window<"u"&&window.localStorage&&ft(this.platformId)&&this.changeLanguage(localStorage.getItem("lang")||this.translate.getBrowserCultureLang()||"en")}changeLanguage(e){this.translate.use(e),localStorage.setItem("lang",e),this.applyLanguage()}applyLanguage(){let e=localStorage.getItem("lang"),i=new URL(window.location.href).searchParams.get("lang")||e||this.getBrowserPreferredLanguage();localStorage.setItem("lang",i),this.translate.setDefaultLang(i),this.translate.use(i)}getBrowserPreferredLanguage(){let e=navigator.language,o=["en","ar"],i=e.substring(0,2);return o.includes(i)?i:"en"}changeLayoutDirection(e){this.store.dispatch(tt({dir:e})),this.store.select(Be).subscribe(o=>{document.documentElement.setAttribute("dir",o)})}static{this.\u0275fac=function(o){return new(o||t)(U(N),U(ie),U(_e),U(xe))}}static{this.\u0275cmp=te({type:t,selectors:[["app-root"]],standalone:!0,features:[ce],decls:1,vars:0,template:function(o,i){o&1&&ae(0,"router-outlet")},dependencies:[ge,Q]})}}return t})();me(wn,xn).catch(t=>console.error(t));