import{f as Ie,g as B,h as K,m as ye,n as X,p as Se,u as Te}from"./chunk-3SREWCWD.js";import{a as Le,b as Ne,c as Me,d as tt,e as Pe,f as Fe,g as je,h as ke,i as Ue,j as Ye,k as ze}from"./chunk-A5LF7LWE.js";import"./chunk-NMGI7OHJ.js";import{a as Be}from"./chunk-TZ7ZSMBT.js";import{a as Oe,d as It,e as q,f as Ee,g as ve,h as Re,i as yt,j as Ce,k as De,l as xe,o as be,p as E,q as J}from"./chunk-YIV5LES5.js";import{a as we,b as _e,d as Q}from"./chunk-VKPY6LTO.js";import{a as de,b as ue,c as pe,d as he,e as Z,f as me,g as fe,h as gt,j as ge,n as At,o as Ae}from"./chunk-MFC3YLCU.js";import{d as W,p as ft}from"./chunk-S72EANLY.js";import{$,F as dt,Fa as ne,G as M,H as Vt,J as Gt,K as Wt,La as P,M as Zt,Ma as oe,Qb as ce,Ra as ie,Sa as k,V as Kt,W as Xt,Y as qt,_ as ut,a as A,ab as U,b as I,ba as Jt,bb as re,ca as Qt,db as se,eb as V,ga as b,ha as pt,hb as G,i as ct,ia as ht,jc as le,ka as _,l as Ut,ma as S,n as Bt,na as L,o as Yt,p as zt,q as $t,ra as te,s as lt,sa as mt,va as H,vb as ae,w as Ht,wa as ee,x as w}from"./chunk-M2M7UK3E.js";var wn=(()=>{class t extends X{constructor(e,o,i){super(e,o,i)}ngOnDestroy(){this.flush()}static{this.\u0275fac=function(o){return new(o||t)(S(W),S(B),S(K))}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac})}}return t})();function _n(){return new ye}function Ln(t,n,e){return new Te(t,n,e)}var $e=[{provide:K,useFactory:_n},{provide:X,useClass:wn},{provide:V,useFactory:Ln,deps:[Z,X,P]}],St=[{provide:B,useFactory:()=>new Se},{provide:k,useValue:"BrowserAnimations"},...$e],Nn=[{provide:B,useClass:Ie},{provide:k,useValue:"NoopAnimations"},...$e],He=(()=>{class t{static withConfig(e){return{ngModule:t,providers:e.disableAnimations?Nn:St}}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=mt({type:t})}static{this.\u0275inj=ht({providers:St,imports:[fe]})}}return t})();function Ve(){return G("NgEagerAnimations"),[...St]}var Mn="@",Pn=(()=>{class t{constructor(e,o,i,a,u){this.doc=e,this.delegate=o,this.zone=i,this.animationType=a,this.moduleImpl=u,this._rendererFactoryPromise=null,this.scheduler=L(se,{optional:!0}),this.loadingSchedulerFn=L(Fn,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-XWODS3N7.js").then(i=>i),o;return this.loadingSchedulerFn?o=this.loadingSchedulerFn(e):o=e(),o.catch(i=>{throw new Qt(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:a})=>{this._engine=i(this.animationType,this.doc);let u=new a(this.delegate,this._engine,this.zone);return this.delegate=u,u})}createRenderer(e,o){let i=this.delegate.createRenderer(e,o);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let a=new Ot(i);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(u=>{let l=u.createRenderer(e,o);a.use(l),this.scheduler?.notify(10)}).catch(u=>{a.use(i)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(o){re()}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac})}}return t})(),Ot=class{constructor(n){this.delegate=n,this.replay=[],this.\u0275type=1}use(n){if(this.delegate=n,this.replay!==null){for(let e of this.replay)e(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,e){this.delegate.appendChild(n,e)}insertBefore(n,e,o,i){this.delegate.insertBefore(n,e,o,i)}removeChild(n,e,o){this.delegate.removeChild(n,e,o)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,o,i){this.delegate.setAttribute(n,e,o,i)}removeAttribute(n,e,o){this.delegate.removeAttribute(n,e,o)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,o,i){this.delegate.setStyle(n,e,o,i)}removeStyle(n,e,o){this.delegate.removeStyle(n,e,o)}setProperty(n,e,o){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(n,e,o)),this.delegate.setProperty(n,e,o)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,o){return this.shouldReplay(e)&&this.replay.push(i=>i.listen(n,e,o)),this.delegate.listen(n,e,o)}shouldReplay(n){return this.replay!==null&&n.startsWith(Mn)}},Fn=new _("");function Et(t="animations"){return G("NgAsyncAnimations"),H([{provide:V,useFactory:(n,e,o)=>new Pn(n,e,o,t),deps:[W,Z,P]},{provide:k,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var z="PERFORM_ACTION",kn="REFRESH",qe="RESET",Je="ROLLBACK",Qe="COMMIT",tn="SWEEP",en="TOGGLE_ACTION",Un="SET_ACTIONS_ACTIVE",nn="JUMP_TO_STATE",on="JUMP_TO_ACTION",Ft="IMPORT_STATE",rn="LOCK_CHANGES",sn="PAUSE_RECORDING",F=class{constructor(n,e){if(this.action=n,this.timestamp=e,this.type=z,typeof n.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},vt=class{constructor(){this.type=kn}},Rt=class{constructor(n){this.timestamp=n,this.type=qe}},Ct=class{constructor(n){this.timestamp=n,this.type=Je}},Dt=class{constructor(n){this.timestamp=n,this.type=Qe}},xt=class{constructor(){this.type=tn}},bt=class{constructor(n){this.id=n,this.type=en}};var wt=class{constructor(n){this.index=n,this.type=nn}},_t=class{constructor(n){this.actionId=n,this.type=on}},Lt=class{constructor(n){this.nextLiftedState=n,this.type=Ft}},Nt=class{constructor(n){this.status=n,this.type=rn}},Mt=class{constructor(n){this.status=n,this.type=sn}};var it=new _("@ngrx/store-devtools Options"),Ge=new _("@ngrx/store-devtools Initial Config");function an(){return null}var Bn="NgRx Store DevTools";function Yn(t){let n={maxAge:!1,monitor:an,actionSanitizer:void 0,stateSanitizer:void 0,name:Bn,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},e=typeof t=="function"?t():t,o=e.logOnly?{pause:!0,export:!0,test:!0}:!1,i=e.features||o||n.features;i.import===!0&&(i.import="custom");let a=Object.assign({},n,{features:i},e);if(a.maxAge&&a.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${a.maxAge}`);return a}function We(t,n){return t.filter(e=>n.indexOf(e)<0)}function cn(t){let{computedStates:n,currentStateIndex:e}=t;if(e>=n.length){let{state:i}=n[n.length-1];return i}let{state:o}=n[e];return o}function Y(t){return new F(t,+Date.now())}function zn(t,n){return Object.keys(n).reduce((e,o)=>{let i=Number(o);return e[i]=ln(t,n[i],i),e},{})}function ln(t,n,e){return I(A({},n),{action:t(n.action,e)})}function $n(t,n){return n.map((e,o)=>({state:dn(t,e.state,o),error:e.error}))}function dn(t,n,e){return t(n,e)}function un(t){return t.predicate||t.actionsSafelist||t.actionsBlocklist}function Hn(t,n,e,o){let i=[],a={},u=[];return t.stagedActionIds.forEach((l,g)=>{let r=t.actionsById[l];r&&(g&&jt(t.computedStates[g],r,n,e,o)||(a[l]=r,i.push(l),u.push(t.computedStates[g])))}),I(A({},t),{stagedActionIds:i,actionsById:a,computedStates:u})}function jt(t,n,e,o,i){let a=e&&!e(t,n.action),u=o&&!n.action.type.match(o.map(g=>Ze(g)).join("|")),l=i&&n.action.type.match(i.map(g=>Ze(g)).join("|"));return a||u||l}function Ze(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function pn(t){return{ngZone:t?L(P):null,connectInZone:t}}var rt=(()=>{class t extends q{static{this.\u0275fac=(()=>{let e;return function(i){return(e||(e=ne(t)))(i||t)}})()}static{this.\u0275prov=b({token:t,factory:t.\u0275fac})}}return t})(),et={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},Pt=new _("@ngrx/store-devtools Redux Devtools Extension"),hn=(()=>{class t{constructor(e,o,i){this.config=o,this.dispatcher=i,this.zoneConfig=pn(this.config.connectInZone),this.devtoolsExtension=e,this.createActionStreams()}notify(e,o){if(this.devtoolsExtension)if(e.type===z){if(o.isLocked||o.isPaused)return;let i=cn(o);if(un(this.config)&&jt(i,e,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let a=this.config.stateSanitizer?dn(this.config.stateSanitizer,i,o.currentStateIndex):i,u=this.config.actionSanitizer?ln(this.config.actionSanitizer,e,o.nextActionId):e;this.sendToReduxDevtools(()=>this.extensionConnection.send(u,a))}else{let i=I(A({},o),{stagedActionIds:o.stagedActionIds,actionsById:this.config.actionSanitizer?zn(this.config.actionSanitizer,o.actionsById):o.actionsById,computedStates:this.config.stateSanitizer?$n(this.config.stateSanitizer,o.computedStates):o.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,i,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new ct(e=>{let o=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=o,o.init(),o.subscribe(i=>e.next(i)),o.unsubscribe}):zt}createActionStreams(){let e=this.createChangesObservable().pipe(Xt()),o=e.pipe(M(r=>r.type===et.START)),i=e.pipe(M(r=>r.type===et.STOP)),a=e.pipe(M(r=>r.type===et.DISPATCH),w(r=>this.unwrapAction(r.payload)),Gt(r=>r.type===Ft?this.dispatcher.pipe(M(y=>y.type===yt),Ht(1e3),Wt(1e3),w(()=>r),Vt(()=>lt(r)),Zt(1)):lt(r))),l=e.pipe(M(r=>r.type===et.ACTION),w(r=>this.unwrapAction(r.payload))).pipe($(i)),g=a.pipe($(i));this.start$=o.pipe($(i)),this.actions$=this.start$.pipe(ut(()=>l)),this.liftedActions$=this.start$.pipe(ut(()=>g))}unwrapAction(e){return typeof e=="string"?(0,eval)(`(${e})`):e}getExtensionConfig(e){let o={name:e.name,features:e.features,serialize:e.serialize,autoPause:e.autoPause??!1,trace:e.trace??!1,traceLimit:e.traceLimit??75};return e.maxAge!==!1&&(o.maxAge=e.maxAge),o}sendToReduxDevtools(e){try{e()}catch(o){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",o)}}static{this.\u0275fac=function(o){return new(o||t)(S(Pt),S(it),S(rt))}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac})}}return t})(),ot={type:It},Vn="@ngrx/store-devtools/recompute",Gn={type:Vn};function mn(t,n,e,o,i){if(o)return{state:e,error:"Interrupted by an error up the chain"};let a=e,u;try{a=t(e,n)}catch(l){u=l.toString(),i.handleError(l)}return{state:a,error:u}}function nt(t,n,e,o,i,a,u,l,g){if(n>=t.length&&t.length===a.length)return t;let r=t.slice(0,n),y=a.length-(g?1:0);for(let s=n;s<y;s++){let p=a[s],O=i[p].action,d=r[s-1],c=d?d.state:o,R=d?d.error:void 0,C=u.indexOf(p)>-1?d:mn(e,O,c,R,l);r.push(C)}return g&&r.push(t[t.length-1]),r}function Wn(t,n){return{monitorState:n(void 0,{}),nextActionId:1,actionsById:{0:Y(ot)},stagedActionIds:[0],skippedActionIds:[],committedState:t,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function Zn(t,n,e,o,i={}){return a=>(u,l)=>{let{monitorState:g,actionsById:r,nextActionId:y,stagedActionIds:s,skippedActionIds:p,committedState:O,currentStateIndex:d,computedStates:c,isLocked:R,isPaused:T}=u||n;u||(r=Object.create(r));function C(f){let m=f,x=s.slice(1,m+1);for(let v=0;v<x.length;v++)if(c[v+1].error){m=v,x=s.slice(1,m+1);break}else delete r[x[v]];p=p.filter(v=>x.indexOf(v)===-1),s=[0,...s.slice(m+1)],O=c[m].state,c=c.slice(m),d=d>m?d-m:0}function D(){r={0:Y(ot)},y=1,s=[0],p=[],O=c[d].state,d=0,c=[]}let h=0;switch(l.type){case rn:{R=l.status,h=1/0;break}case sn:{T=l.status,T?(s=[...s,y],r[y]=new F({type:"@ngrx/devtools/pause"},+Date.now()),y++,h=s.length-1,c=c.concat(c[c.length-1]),d===s.length-2&&d++,h=1/0):D();break}case qe:{r={0:Y(ot)},y=1,s=[0],p=[],O=t,d=0,c=[];break}case Qe:{D();break}case Je:{r={0:Y(ot)},y=1,s=[0],p=[],d=0,c=[];break}case en:{let{id:f}=l;p.indexOf(f)===-1?p=[f,...p]:p=p.filter(x=>x!==f),h=s.indexOf(f);break}case Un:{let{start:f,end:m,active:x}=l,v=[];for(let at=f;at<m;at++)v.push(at);x?p=We(p,v):p=[...p,...v],h=s.indexOf(f);break}case nn:{d=l.index,h=1/0;break}case on:{let f=s.indexOf(l.actionId);f!==-1&&(d=f),h=1/0;break}case tn:{s=We(s,p),p=[],d=Math.min(d,s.length-1);break}case z:{if(R)return u||n;if(T||u&&jt(u.computedStates[d],l,i.predicate,i.actionsSafelist,i.actionsBlocklist)){let m=c[c.length-1];c=[...c.slice(0,-1),mn(a,l.action,m.state,m.error,e)],h=1/0;break}i.maxAge&&s.length===i.maxAge&&C(1),d===s.length-1&&d++;let f=y++;r[f]=l,s=[...s,f],h=s.length-1;break}case Ft:{({monitorState:g,actionsById:r,nextActionId:y,stagedActionIds:s,skippedActionIds:p,committedState:O,currentStateIndex:d,computedStates:c,isLocked:R,isPaused:T}=l.nextLiftedState);break}case It:{h=0,i.maxAge&&s.length>i.maxAge&&(c=nt(c,h,a,O,r,s,p,e,T),C(s.length-i.maxAge),h=1/0);break}case yt:{if(c.filter(m=>m.error).length>0)h=0,i.maxAge&&s.length>i.maxAge&&(c=nt(c,h,a,O,r,s,p,e,T),C(s.length-i.maxAge),h=1/0);else{if(!T&&!R){d===s.length-1&&d++;let m=y++;r[m]=new F(l,+Date.now()),s=[...s,m],h=s.length-1,c=nt(c,h,a,O,r,s,p,e,T)}c=c.map(m=>I(A({},m),{state:a(m.state,Gn)})),d=s.length-1,i.maxAge&&s.length>i.maxAge&&C(s.length-i.maxAge),h=1/0}break}default:{h=1/0;break}}return c=nt(c,h,a,O,r,s,p,e,T),g=o(g,l),{monitorState:g,actionsById:r,nextActionId:y,stagedActionIds:s,skippedActionIds:p,committedState:O,currentStateIndex:d,computedStates:c,isLocked:R,isPaused:T}}}var Ke=(()=>{class t{constructor(e,o,i,a,u,l,g,r){let y=Wn(g,r.monitor),s=Zn(g,y,l,r.monitor,r),p=dt(dt(o.asObservable().pipe(qt(1)),a.actions$).pipe(w(Y)),e,a.liftedActions$).pipe($t(Yt)),O=i.pipe(w(s)),d=pn(r.connectInZone),c=new Bt(1);this.liftedStateSubscription=p.pipe(Jt(O),Xe(d),Kt(({state:C},[D,h])=>{let f=h(C,D);return D.type!==z&&un(r)&&(f=Hn(f,r.predicate,r.actionsSafelist,r.actionsBlocklist)),a.notify(D,f),{state:f,action:D}},{state:y,action:null})).subscribe(({state:C,action:D})=>{if(c.next(C),D.type===z){let h=D.action;u.next(h)}}),this.extensionStartSubscription=a.start$.pipe(Xe(d)).subscribe(()=>{this.refresh()});let R=c.asObservable(),T=R.pipe(w(cn));Object.defineProperty(T,"state",{value:Oe(T,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=e,this.liftedState=R,this.state=T}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(e){this.dispatcher.next(e)}next(e){this.dispatcher.next(e)}error(e){}complete(){}performAction(e){this.dispatch(new F(e,+Date.now()))}refresh(){this.dispatch(new vt)}reset(){this.dispatch(new Rt(+Date.now()))}rollback(){this.dispatch(new Ct(+Date.now()))}commit(){this.dispatch(new Dt(+Date.now()))}sweep(){this.dispatch(new xt)}toggleAction(e){this.dispatch(new bt(e))}jumpToAction(e){this.dispatch(new _t(e))}jumpToState(e){this.dispatch(new wt(e))}importState(e){this.dispatch(new Lt(e))}lockChanges(e){this.dispatch(new Nt(e))}pauseRecording(e){this.dispatch(new Mt(e))}static{this.\u0275fac=function(o){return new(o||t)(S(rt),S(q),S(ve),S(hn),S(Ce),S(oe),S(Ee),S(it))}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac})}}return t})();function Xe({ngZone:t,connectInZone:n}){return e=>n?new ct(o=>e.subscribe({next:i=>t.run(()=>o.next(i)),error:i=>t.run(()=>o.error(i)),complete:()=>t.run(()=>o.complete())})):e}var Kn=new _("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function Xn(t,n){return!!t||n.monitor!==an}function qn(){let t="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[t]<"u"?window[t]:null}function fn(t={}){return H([hn,rt,Ke,{provide:Ge,useValue:t},{provide:Kn,deps:[Pt,it],useFactory:Xn},{provide:Pt,useFactory:qn},{provide:it,deps:[Ge],useFactory:Yn},{provide:De,deps:[Ke],useFactory:Jn},{provide:Re,useExisting:rt}])}function Jn(t){return t.state}var st=class{http;prefix;suffix;constructor(n,e="/assets/i18n/",o=".json"){this.http=n,this.prefix=e,this.suffix=o}getTranslation(n){return this.http.get(`${this.prefix}${n}${this.suffix}`)}};var kt=[{path:"",loadComponent:()=>import("./chunk-2LQRPZ23.js").then(t=>t.BlankLayoutComponent),children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadComponent:()=>import("./chunk-UHJRCZ5C.js").then(t=>t.HomeComponent)},{path:"products",loadComponent:()=>import("./chunk-KRHDKAZ4.js").then(t=>t.ProductsComponent)},{path:"products/:category",loadComponent:()=>import("./chunk-KRHDKAZ4.js").then(t=>t.ProductsComponent)},{path:"product/:id",loadComponent:()=>import("./chunk-B3ROC4BR.js").then(t=>t.ProductDetailsComponent)},{path:"offers",loadComponent:()=>import("./chunk-TSQOQW7P.js").then(t=>t.OfferComponent)},{path:"cart",loadComponent:()=>import("./chunk-S3K7K4D7.js").then(t=>t.CartComponent)},{path:"wishlist",loadComponent:()=>import("./chunk-AYU5QT7M.js").then(t=>t.WishlistComponent)},{path:"policy",loadComponent:()=>import("./chunk-5GPDXLCW.js").then(t=>t.PolicyComponent)},{path:"about-us",loadComponent:()=>import("./chunk-OFTMB3QD.js").then(t=>t.AboutUsComponent)}]},{path:"",loadComponent:()=>import("./chunk-KWTKFARA.js").then(t=>t.AuthLayoutComponent),children:[{path:"",redirectTo:"sign-in",pathMatch:"full"},{path:"sign-in",loadComponent:()=>import("./chunk-3Q3RSSQL.js").then(t=>t.SignInComponent)},{path:"sign-up",loadComponent:()=>import("./chunk-Y6S2SPCT.js").then(t=>t.SignUpComponent)}]},{path:"**",loadComponent:()=>import("./chunk-AMKRI6RG.js").then(t=>t.NotFoundComponent)}];var gn={VERTICAL:"vertical",HORIZONTAL:"horizontal"},An={DEFAULT:"default",BORDERED:"bordered"},In={LIGHTMODE:"light",DARKMODE:"dark"},yn={LTR:"ltr",RTL:"rtl"},Sn={FLUID:"fluid",BOXED:"boxed"},Tn={DEFAULT:"lg",COMPACT:"md",SMALL:"sm"},On={STICKY:"sticky",SCROLL:"scroll",BORDERED:"bordered",HIDDEN:"hidden"},En={LIGHT:"light",DARK:"dark",BRAND:"brand",MODERN:"modern"},vn={LIGHT:"light",DARK:"dark",BRAND:"brand"};var Qn={LAYOUT:gn.VERTICAL,LAYOUT_SKIN:An.BORDERED,LAYOUT_MODE:In.LIGHTMODE,LAYOUT_DIRECTION:yn.LTR,LAYOUT_WIDTH:Sn.BOXED,SIDEBAR_SIZE:Tn.DEFAULT,LAYOUT_NAVIGATION:On.STICKY,SIDEBAR_COLOR:En.BRAND,TOPBAR_COLOR:vn.BRAND},Rn=J(Qn,E(Le,(t,n)=>I(A({},t),{LAYOUT:n.layout})),E(Ne,(t,n)=>I(A({},t),{LAYOUT_SKIN:n.skin})),E(Me,(t,n)=>I(A({},t),{LAYOUT_MODE:n.mode})),E(tt,(t,n)=>I(A({},t),{LAYOUT_DIRECTION:n.dir})),E(Pe,(t,n)=>I(A({},t),{LAYOUT_WIDTH:n.width})),E(Fe,(t,n)=>I(A({},t),{SIDEBAR_SIZE:n.size})),E(je,(t,n)=>I(A({},t),{LAYOUT_NAVIGATION:n.navigation})),E(ke,(t,n)=>I(A({},t),{SIDEBAR_COLOR:n.sidebar})),E(Ue,(t,n)=>I(A({},t),{TOPBAR_COLOR:n.topbar})));var to={token:null},Cn=J(to,E(Ye,(t,{token:n})=>I(A({},t),{token:n})),E(ze,t=>I(A({},t),{token:null})));var Dn={layout:Rn,token:Cn};function eo(t){return new st(t,"./assets/i18n/",".json")}var xn={providers:[le({eventCoalescing:!0}),He,At(kt),At(kt,Ae()),gt(),ue(pe()),Ve(),Et(),be(Dn),gt(),fn(),Et(),ee(he,Q.forRoot({defaultLanguage:"en",loader:{provide:we,useFactory:eo,deps:[de]}}))]};var j=class{get nativeWindow(){return no()}};j.ngInjectableDef=pt({factory:function(){return new j},token:j,providedIn:"root"});function no(){return typeof window<"u"?window:void 0}var N=class{constructor(n){this.itemRevealedSource=new Ut,this.itemRevealed$=this.itemRevealedSource.asObservable(),this.window=n.nativeWindow}init(n){if(this.window){let e=n||{};e.callback=()=>this.itemRevealedSource.next(),new WOW(e).init()}}};N.ngInjectableDef=pt({factory:function(){return new N(L(j))},token:N,providedIn:"root"});var bn=(()=>{class t{constructor(e,o,i,a){this._NgwWowService=e,this.platformId=o,this.translate=i,this.store=a,this.title="ecommerce",e.init()}ngOnInit(){ft(this.platformId)&&typeof document<"u"&&window.scrollTo(0,50),this.translate&&typeof this.translate.setDefaultLang=="function"?(this.translate.setDefaultLang("en"),this.translate.use("en")):console.error("TranslateService not correctly initialized"),typeof window<"u"&&window.localStorage&&ft(this.platformId)&&this.changeLanguage(localStorage.getItem("lang")||this.translate.getBrowserCultureLang()||"en")}changeLanguage(e){this.translate.use(e),localStorage.setItem("lang",e),this.applyLanguage()}applyLanguage(){let e=localStorage.getItem("lang"),i=new URL(window.location.href).searchParams.get("lang")||e||this.getBrowserPreferredLanguage();localStorage.setItem("lang",i),this.translate.setDefaultLang(i),this.translate.use(i)}getBrowserPreferredLanguage(){let e=navigator.language,o=["en","ar"],i=e.substring(0,2);return o.includes(i)?i:"en"}changeLayoutDirection(e){this.store.dispatch(tt({dir:e})),this.store.select(Be).subscribe(o=>{document.documentElement.setAttribute("dir",o)})}static{this.\u0275fac=function(o){return new(o||t)(U(N),U(ie),U(_e),U(xe))}}static{this.\u0275cmp=te({type:t,selectors:[["app-root"]],standalone:!0,features:[ce],decls:1,vars:0,template:function(o,i){o&1&&ae(0,"router-outlet")},dependencies:[ge,Q]})}}return t})();me(bn,xn).catch(t=>console.error(t));
