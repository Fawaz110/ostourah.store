import{f as Ie,g as U,h as K,m as ye,n as X,p as Oe,u as Se}from"./chunk-MBQNBJIH.js";import{A as Ye,a as Te,b as At,c as q,d as Ee,e as ve,f as Re,g as It,h as Ce,i as De,j as xe,k as be,l as D,m as we,n as _e,o as Le,q as J,r as Ne,s as Me,t as Pe,u as Q,v as Fe,w as je,x as ke,y as Be,z as Ue}from"./chunk-CQZ6QPKI.js";import"./chunk-NMGI7OHJ.js";import{a as de,b as ue,c as pe,d as he,e as Z,f as fe,g as me,h as mt,j as ge,n as gt,o as Ae}from"./chunk-XDOYN5UI.js";import{d as W,p as ft}from"./chunk-ASSOMLWD.js";import{$ as Jt,$a as re,D as lt,Da as ne,E as M,F as Vt,H as Gt,I as Wt,Ja as P,K as Zt,Ka as oe,Ob as ce,Pa as ie,Qa as k,T as Kt,U as Xt,W as qt,Y as dt,Z as $,_a as B,a as O,aa as Qt,b as S,bb as se,cb as V,ea as b,fa as ut,fb as G,g as at,ga as pt,hc as le,ia as _,j as Bt,ka as I,l as Ut,la as L,m as Yt,n as zt,o as $t,pa as te,q as ct,qa as ht,ta as H,tb as ae,u as Ht,ua as ee,v as w}from"./chunk-B6HEPDKE.js";var Dn=(()=>{class t extends X{constructor(e,o,i){super(e,o,i)}ngOnDestroy(){this.flush()}static{this.\u0275fac=function(o){return new(o||t)(I(W),I(U),I(K))}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac})}}return t})();function xn(){return new ye}function bn(t,n,e){return new Se(t,n,e)}var ze=[{provide:K,useFactory:xn},{provide:X,useClass:Dn},{provide:V,useFactory:bn,deps:[Z,X,P]}],yt=[{provide:U,useFactory:()=>new Oe},{provide:k,useValue:"BrowserAnimations"},...ze],wn=[{provide:U,useClass:Ie},{provide:k,useValue:"NoopAnimations"},...ze],St=(()=>{class t{static withConfig(e){return{ngModule:t,providers:e.disableAnimations?wn:yt}}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=ht({type:t})}static{this.\u0275inj=pt({providers:yt,imports:[me]})}}return t})();function $e(){return G("NgEagerAnimations"),[...yt]}var _n="@",Ln=(()=>{class t{constructor(e,o,i,a,u){this.doc=e,this.delegate=o,this.zone=i,this.animationType=a,this.moduleImpl=u,this._rendererFactoryPromise=null,this.scheduler=L(se,{optional:!0}),this.loadingSchedulerFn=L(Nn,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-5KZLOPML.js").then(i=>i),o;return this.loadingSchedulerFn?o=this.loadingSchedulerFn(e):o=e(),o.catch(i=>{throw new Qt(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:a})=>{this._engine=i(this.animationType,this.doc);let u=new a(this.delegate,this._engine,this.zone);return this.delegate=u,u})}createRenderer(e,o){let i=this.delegate.createRenderer(e,o);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let a=new Tt(i);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(u=>{let l=u.createRenderer(e,o);a.use(l),this.scheduler?.notify(10)}).catch(u=>{a.use(i)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(o){re()}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac})}}return t})(),Tt=class{constructor(n){this.delegate=n,this.replay=[],this.\u0275type=1}use(n){if(this.delegate=n,this.replay!==null){for(let e of this.replay)e(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,e){this.delegate.appendChild(n,e)}insertBefore(n,e,o,i){this.delegate.insertBefore(n,e,o,i)}removeChild(n,e,o){this.delegate.removeChild(n,e,o)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,o,i){this.delegate.setAttribute(n,e,o,i)}removeAttribute(n,e,o){this.delegate.removeAttribute(n,e,o)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,o,i){this.delegate.setStyle(n,e,o,i)}removeStyle(n,e,o){this.delegate.removeStyle(n,e,o)}setProperty(n,e,o){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(n,e,o)),this.delegate.setProperty(n,e,o)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,o){return this.shouldReplay(e)&&this.replay.push(i=>i.listen(n,e,o)),this.delegate.listen(n,e,o)}shouldReplay(n){return this.replay!==null&&n.startsWith(_n)}},Nn=new _("");function Et(t="animations"){return G("NgAsyncAnimations"),H([{provide:V,useFactory:(n,e,o)=>new Ln(n,e,o,t),deps:[W,Z,P]},{provide:k,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var z="PERFORM_ACTION",Pn="REFRESH",Ke="RESET",Xe="ROLLBACK",qe="COMMIT",Je="SWEEP",Qe="TOGGLE_ACTION",Fn="SET_ACTIONS_ACTIVE",tn="JUMP_TO_STATE",en="JUMP_TO_ACTION",Ft="IMPORT_STATE",nn="LOCK_CHANGES",on="PAUSE_RECORDING",F=class{constructor(n,e){if(this.action=n,this.timestamp=e,this.type=z,typeof n.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},vt=class{constructor(){this.type=Pn}},Rt=class{constructor(n){this.timestamp=n,this.type=Ke}},Ct=class{constructor(n){this.timestamp=n,this.type=Xe}},Dt=class{constructor(n){this.timestamp=n,this.type=qe}},xt=class{constructor(){this.type=Je}},bt=class{constructor(n){this.id=n,this.type=Qe}};var wt=class{constructor(n){this.index=n,this.type=tn}},_t=class{constructor(n){this.actionId=n,this.type=en}},Lt=class{constructor(n){this.nextLiftedState=n,this.type=Ft}},Nt=class{constructor(n){this.status=n,this.type=nn}},Mt=class{constructor(n){this.status=n,this.type=on}};var ot=new _("@ngrx/store-devtools Options"),He=new _("@ngrx/store-devtools Initial Config");function rn(){return null}var jn="NgRx Store DevTools";function kn(t){let n={maxAge:!1,monitor:rn,actionSanitizer:void 0,stateSanitizer:void 0,name:jn,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},e=typeof t=="function"?t():t,o=e.logOnly?{pause:!0,export:!0,test:!0}:!1,i=e.features||o||n.features;i.import===!0&&(i.import="custom");let a=Object.assign({},n,{features:i},e);if(a.maxAge&&a.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${a.maxAge}`);return a}function Ve(t,n){return t.filter(e=>n.indexOf(e)<0)}function sn(t){let{computedStates:n,currentStateIndex:e}=t;if(e>=n.length){let{state:i}=n[n.length-1];return i}let{state:o}=n[e];return o}function Y(t){return new F(t,+Date.now())}function Bn(t,n){return Object.keys(n).reduce((e,o)=>{let i=Number(o);return e[i]=an(t,n[i],i),e},{})}function an(t,n,e){return S(O({},n),{action:t(n.action,e)})}function Un(t,n){return n.map((e,o)=>({state:cn(t,e.state,o),error:e.error}))}function cn(t,n,e){return t(n,e)}function ln(t){return t.predicate||t.actionsSafelist||t.actionsBlocklist}function Yn(t,n,e,o){let i=[],a={},u=[];return t.stagedActionIds.forEach((l,g)=>{let r=t.actionsById[l];r&&(g&&jt(t.computedStates[g],r,n,e,o)||(a[l]=r,i.push(l),u.push(t.computedStates[g])))}),S(O({},t),{stagedActionIds:i,actionsById:a,computedStates:u})}function jt(t,n,e,o,i){let a=e&&!e(t,n.action),u=o&&!n.action.type.match(o.map(g=>Ge(g)).join("|")),l=i&&n.action.type.match(i.map(g=>Ge(g)).join("|"));return a||u||l}function Ge(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function dn(t){return{ngZone:t?L(P):null,connectInZone:t}}var it=(()=>{class t extends q{static{this.\u0275fac=(()=>{let e;return function(i){return(e||(e=ne(t)))(i||t)}})()}static{this.\u0275prov=b({token:t,factory:t.\u0275fac})}}return t})(),tt={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},Pt=new _("@ngrx/store-devtools Redux Devtools Extension"),un=(()=>{class t{constructor(e,o,i){this.config=o,this.dispatcher=i,this.zoneConfig=dn(this.config.connectInZone),this.devtoolsExtension=e,this.createActionStreams()}notify(e,o){if(this.devtoolsExtension)if(e.type===z){if(o.isLocked||o.isPaused)return;let i=sn(o);if(ln(this.config)&&jt(i,e,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let a=this.config.stateSanitizer?cn(this.config.stateSanitizer,i,o.currentStateIndex):i,u=this.config.actionSanitizer?an(this.config.actionSanitizer,e,o.nextActionId):e;this.sendToReduxDevtools(()=>this.extensionConnection.send(u,a))}else{let i=S(O({},o),{stagedActionIds:o.stagedActionIds,actionsById:this.config.actionSanitizer?Bn(this.config.actionSanitizer,o.actionsById):o.actionsById,computedStates:this.config.stateSanitizer?Un(this.config.stateSanitizer,o.computedStates):o.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,i,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new at(e=>{let o=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=o,o.init(),o.subscribe(i=>e.next(i)),o.unsubscribe}):zt}createActionStreams(){let e=this.createChangesObservable().pipe(Xt()),o=e.pipe(M(r=>r.type===tt.START)),i=e.pipe(M(r=>r.type===tt.STOP)),a=e.pipe(M(r=>r.type===tt.DISPATCH),w(r=>this.unwrapAction(r.payload)),Gt(r=>r.type===Ft?this.dispatcher.pipe(M(A=>A.type===It),Ht(1e3),Wt(1e3),w(()=>r),Vt(()=>ct(r)),Zt(1)):ct(r))),l=e.pipe(M(r=>r.type===tt.ACTION),w(r=>this.unwrapAction(r.payload))).pipe($(i)),g=a.pipe($(i));this.start$=o.pipe($(i)),this.actions$=this.start$.pipe(dt(()=>l)),this.liftedActions$=this.start$.pipe(dt(()=>g))}unwrapAction(e){return typeof e=="string"?(0,eval)(`(${e})`):e}getExtensionConfig(e){let o={name:e.name,features:e.features,serialize:e.serialize,autoPause:e.autoPause??!1,trace:e.trace??!1,traceLimit:e.traceLimit??75};return e.maxAge!==!1&&(o.maxAge=e.maxAge),o}sendToReduxDevtools(e){try{e()}catch(o){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",o)}}static{this.\u0275fac=function(o){return new(o||t)(I(Pt),I(ot),I(it))}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac})}}return t})(),nt={type:At},zn="@ngrx/store-devtools/recompute",$n={type:zn};function pn(t,n,e,o,i){if(o)return{state:e,error:"Interrupted by an error up the chain"};let a=e,u;try{a=t(e,n)}catch(l){u=l.toString(),i.handleError(l)}return{state:a,error:u}}function et(t,n,e,o,i,a,u,l,g){if(n>=t.length&&t.length===a.length)return t;let r=t.slice(0,n),A=a.length-(g?1:0);for(let s=n;s<A;s++){let p=a[s],T=i[p].action,d=r[s-1],c=d?d.state:o,v=d?d.error:void 0,R=u.indexOf(p)>-1?d:pn(e,T,c,v,l);r.push(R)}return g&&r.push(t[t.length-1]),r}function Hn(t,n){return{monitorState:n(void 0,{}),nextActionId:1,actionsById:{0:Y(nt)},stagedActionIds:[0],skippedActionIds:[],committedState:t,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function Vn(t,n,e,o,i={}){return a=>(u,l)=>{let{monitorState:g,actionsById:r,nextActionId:A,stagedActionIds:s,skippedActionIds:p,committedState:T,currentStateIndex:d,computedStates:c,isLocked:v,isPaused:y}=u||n;u||(r=Object.create(r));function R(m){let f=m,x=s.slice(1,f+1);for(let E=0;E<x.length;E++)if(c[E+1].error){f=E,x=s.slice(1,f+1);break}else delete r[x[E]];p=p.filter(E=>x.indexOf(E)===-1),s=[0,...s.slice(f+1)],T=c[f].state,c=c.slice(f),d=d>f?d-f:0}function C(){r={0:Y(nt)},A=1,s=[0],p=[],T=c[d].state,d=0,c=[]}let h=0;switch(l.type){case nn:{v=l.status,h=1/0;break}case on:{y=l.status,y?(s=[...s,A],r[A]=new F({type:"@ngrx/devtools/pause"},+Date.now()),A++,h=s.length-1,c=c.concat(c[c.length-1]),d===s.length-2&&d++,h=1/0):C();break}case Ke:{r={0:Y(nt)},A=1,s=[0],p=[],T=t,d=0,c=[];break}case qe:{C();break}case Xe:{r={0:Y(nt)},A=1,s=[0],p=[],d=0,c=[];break}case Qe:{let{id:m}=l;p.indexOf(m)===-1?p=[m,...p]:p=p.filter(x=>x!==m),h=s.indexOf(m);break}case Fn:{let{start:m,end:f,active:x}=l,E=[];for(let st=m;st<f;st++)E.push(st);x?p=Ve(p,E):p=[...p,...E],h=s.indexOf(m);break}case tn:{d=l.index,h=1/0;break}case en:{let m=s.indexOf(l.actionId);m!==-1&&(d=m),h=1/0;break}case Je:{s=Ve(s,p),p=[],d=Math.min(d,s.length-1);break}case z:{if(v)return u||n;if(y||u&&jt(u.computedStates[d],l,i.predicate,i.actionsSafelist,i.actionsBlocklist)){let f=c[c.length-1];c=[...c.slice(0,-1),pn(a,l.action,f.state,f.error,e)],h=1/0;break}i.maxAge&&s.length===i.maxAge&&R(1),d===s.length-1&&d++;let m=A++;r[m]=l,s=[...s,m],h=s.length-1;break}case Ft:{({monitorState:g,actionsById:r,nextActionId:A,stagedActionIds:s,skippedActionIds:p,committedState:T,currentStateIndex:d,computedStates:c,isLocked:v,isPaused:y}=l.nextLiftedState);break}case At:{h=0,i.maxAge&&s.length>i.maxAge&&(c=et(c,h,a,T,r,s,p,e,y),R(s.length-i.maxAge),h=1/0);break}case It:{if(c.filter(f=>f.error).length>0)h=0,i.maxAge&&s.length>i.maxAge&&(c=et(c,h,a,T,r,s,p,e,y),R(s.length-i.maxAge),h=1/0);else{if(!y&&!v){d===s.length-1&&d++;let f=A++;r[f]=new F(l,+Date.now()),s=[...s,f],h=s.length-1,c=et(c,h,a,T,r,s,p,e,y)}c=c.map(f=>S(O({},f),{state:a(f.state,$n)})),d=s.length-1,i.maxAge&&s.length>i.maxAge&&R(s.length-i.maxAge),h=1/0}break}default:{h=1/0;break}}return c=et(c,h,a,T,r,s,p,e,y),g=o(g,l),{monitorState:g,actionsById:r,nextActionId:A,stagedActionIds:s,skippedActionIds:p,committedState:T,currentStateIndex:d,computedStates:c,isLocked:v,isPaused:y}}}var We=(()=>{class t{constructor(e,o,i,a,u,l,g,r){let A=Hn(g,r.monitor),s=Vn(g,A,l,r.monitor,r),p=lt(lt(o.asObservable().pipe(qt(1)),a.actions$).pipe(w(Y)),e,a.liftedActions$).pipe($t(Yt)),T=i.pipe(w(s)),d=dn(r.connectInZone),c=new Ut(1);this.liftedStateSubscription=p.pipe(Jt(T),Ze(d),Kt(({state:R},[C,h])=>{let m=h(R,C);return C.type!==z&&ln(r)&&(m=Yn(m,r.predicate,r.actionsSafelist,r.actionsBlocklist)),a.notify(C,m),{state:m,action:C}},{state:A,action:null})).subscribe(({state:R,action:C})=>{if(c.next(R),C.type===z){let h=C.action;u.next(h)}}),this.extensionStartSubscription=a.start$.pipe(Ze(d)).subscribe(()=>{this.refresh()});let v=c.asObservable(),y=v.pipe(w(sn));Object.defineProperty(y,"state",{value:Te(y,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=e,this.liftedState=v,this.state=y}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(e){this.dispatcher.next(e)}next(e){this.dispatcher.next(e)}error(e){}complete(){}performAction(e){this.dispatch(new F(e,+Date.now()))}refresh(){this.dispatch(new vt)}reset(){this.dispatch(new Rt(+Date.now()))}rollback(){this.dispatch(new Ct(+Date.now()))}commit(){this.dispatch(new Dt(+Date.now()))}sweep(){this.dispatch(new xt)}toggleAction(e){this.dispatch(new bt(e))}jumpToAction(e){this.dispatch(new _t(e))}jumpToState(e){this.dispatch(new wt(e))}importState(e){this.dispatch(new Lt(e))}lockChanges(e){this.dispatch(new Nt(e))}pauseRecording(e){this.dispatch(new Mt(e))}static{this.\u0275fac=function(o){return new(o||t)(I(it),I(q),I(ve),I(un),I(Ce),I(oe),I(Ee),I(ot))}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac})}}return t})();function Ze({ngZone:t,connectInZone:n}){return e=>n?new at(o=>e.subscribe({next:i=>t.run(()=>o.next(i)),error:i=>t.run(()=>o.error(i)),complete:()=>t.run(()=>o.complete())})):e}var Gn=new _("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function Wn(t,n){return!!t||n.monitor!==rn}function Zn(){let t="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[t]<"u"?window[t]:null}function hn(t={}){return H([un,it,We,{provide:He,useValue:t},{provide:Gn,deps:[Pt,ot],useFactory:Wn},{provide:Pt,useFactory:Zn},{provide:ot,deps:[He],useFactory:kn},{provide:De,deps:[We],useFactory:Kn},{provide:Re,useExisting:it}])}function Kn(t){return t.state}var rt=class{http;prefix;suffix;constructor(n,e="/assets/i18n/",o=".json"){this.http=n,this.prefix=e,this.suffix=o}getTranslation(n){return this.http.get(`${this.prefix}${n}${this.suffix}`)}};var kt=[{path:"",loadComponent:()=>import("./chunk-MBRKZVYW.js").then(t=>t.BlankLayoutComponent),children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadComponent:()=>import("./chunk-JIDX3NNQ.js").then(t=>t.HomeComponent)},{path:"products",loadComponent:()=>import("./chunk-Q2FDZWKJ.js").then(t=>t.ProductsComponent)},{path:"products/:category",loadComponent:()=>import("./chunk-Q2FDZWKJ.js").then(t=>t.ProductsComponent)},{path:"product/:id",loadComponent:()=>import("./chunk-RRERGCLM.js").then(t=>t.ProductDetailsComponent)},{path:"offers",loadComponent:()=>import("./chunk-4PHT2RI6.js").then(t=>t.OfferComponent)},{path:"cart",loadComponent:()=>import("./chunk-PUMCFZZ3.js").then(t=>t.CartComponent)},{path:"wishlist",loadComponent:()=>import("./chunk-7A6IZ4WM.js").then(t=>t.WishlistComponent)},{path:"policy",loadComponent:()=>import("./chunk-X2VR27EC.js").then(t=>t.PolicyComponent)},{path:"about-us",loadComponent:()=>import("./chunk-4HLF44DY.js").then(t=>t.AboutUsComponent)}]},{path:"",loadComponent:()=>import("./chunk-WNXPIT3C.js").then(t=>t.AuthLayoutComponent),children:[{path:"",redirectTo:"sign-in",pathMatch:"full"},{path:"sign-in",loadComponent:()=>import("./chunk-VU54PGQE.js").then(t=>t.SignInComponent)},{path:"sign-up",loadComponent:()=>import("./chunk-LLT4OUAT.js").then(t=>t.SignUpComponent)}]},{path:"**",loadComponent:()=>import("./chunk-6D5OK7CT.js").then(t=>t.NotFoundComponent)}];var fn={VERTICAL:"vertical",HORIZONTAL:"horizontal"},mn={DEFAULT:"default",BORDERED:"bordered"},gn={LIGHTMODE:"light",DARKMODE:"dark"},An={LTR:"ltr",RTL:"rtl"},In={FLUID:"fluid",BOXED:"boxed"},yn={DEFAULT:"lg",COMPACT:"md",SMALL:"sm"},On={STICKY:"sticky",SCROLL:"scroll",BORDERED:"bordered",HIDDEN:"hidden"},Sn={LIGHT:"light",DARK:"dark",BRAND:"brand",MODERN:"modern"},Tn={LIGHT:"light",DARK:"dark",BRAND:"brand"};var Xn={LAYOUT:fn.VERTICAL,LAYOUT_SKIN:mn.BORDERED,LAYOUT_MODE:gn.LIGHTMODE,LAYOUT_DIRECTION:An.LTR,LAYOUT_WIDTH:In.BOXED,SIDEBAR_SIZE:yn.DEFAULT,LAYOUT_NAVIGATION:On.STICKY,SIDEBAR_COLOR:Sn.BRAND,TOPBAR_COLOR:Tn.BRAND},En=we(Xn,D(Ne,(t,n)=>S(O({},t),{LAYOUT:n.layout})),D(Me,(t,n)=>S(O({},t),{LAYOUT_SKIN:n.skin})),D(Pe,(t,n)=>S(O({},t),{LAYOUT_MODE:n.mode})),D(Q,(t,n)=>S(O({},t),{LAYOUT_DIRECTION:n.dir})),D(Fe,(t,n)=>S(O({},t),{LAYOUT_WIDTH:n.width})),D(je,(t,n)=>S(O({},t),{SIDEBAR_SIZE:n.size})),D(ke,(t,n)=>S(O({},t),{LAYOUT_NAVIGATION:n.navigation})),D(Be,(t,n)=>S(O({},t),{SIDEBAR_COLOR:n.sidebar})),D(Ue,(t,n)=>S(O({},t),{TOPBAR_COLOR:n.topbar})));var vn={layout:En};function qn(t){return new rt(t,"./assets/i18n/",".json")}var Rn={providers:[St,le({eventCoalescing:!0}),St,gt(kt),gt(kt,Ae()),mt(),ue(pe()),$e(),Et(),be(vn),mt(),hn(),Et(),ee(he,J.forRoot({defaultLanguage:"en",loader:{provide:_e,useFactory:qn,deps:[de]}}))]};var j=class{get nativeWindow(){return Jn()}};j.ngInjectableDef=ut({factory:function(){return new j},token:j,providedIn:"root"});function Jn(){return typeof window<"u"?window:void 0}var N=class{constructor(n){this.itemRevealedSource=new Bt,this.itemRevealed$=this.itemRevealedSource.asObservable(),this.window=n.nativeWindow}init(n){if(this.window){let e=n||{};e.callback=()=>this.itemRevealedSource.next(),new WOW(e).init()}}};N.ngInjectableDef=ut({factory:function(){return new N(L(j))},token:N,providedIn:"root"});var Cn=(()=>{class t{constructor(e,o,i,a){this._NgwWowService=e,this.platformId=o,this.translate=i,this.store=a,this.title="ecommerce",e.init()}ngOnInit(){ft(this.platformId)&&typeof document<"u"&&window.scrollTo(0,50),this.translate&&typeof this.translate.setDefaultLang=="function"?(this.translate.setDefaultLang("en"),this.translate.use("en")):console.error("TranslateService not correctly initialized"),typeof window<"u"&&window.localStorage&&ft(this.platformId)&&this.changeLanguage(localStorage.getItem("lang")||this.translate.getBrowserCultureLang()||"en")}changeLanguage(e){this.translate.use(e),localStorage.setItem("lang",e),this.applyLanguage()}applyLanguage(){let e=localStorage.getItem("lang"),i=new URL(window.location.href).searchParams.get("lang")||e||this.getBrowserPreferredLanguage();localStorage.setItem("lang",i),this.translate.setDefaultLang(i),this.translate.use(i)}getBrowserPreferredLanguage(){let e=navigator.language,o=["en","ar"],i=e.substring(0,2);return o.includes(i)?i:"en"}changeLayoutDirection(e){this.store.dispatch(Q({dir:e})),this.store.select(Ye).subscribe(o=>{document.documentElement.setAttribute("dir",o)})}static{this.\u0275fac=function(o){return new(o||t)(B(N),B(ie),B(Le),B(xe))}}static{this.\u0275cmp=te({type:t,selectors:[["app-root"]],standalone:!0,features:[ce],decls:1,vars:0,template:function(o,i){o&1&&ae(0,"router-outlet")},dependencies:[ge,J]})}}return t})();fe(Cn,Rn).catch(t=>console.error(t));