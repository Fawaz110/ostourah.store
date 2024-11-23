import{Aa as re,Fa as oe,Ia as O,La as ie,P as Q,U as W,V as J,a as h,b as E,ba as X,ca as x,ga as R,i as S,ib as T,ka as c,kc as A,l as G,m as b,ma as l,na as f,o as Z,oa as ee,pa as te,q as H,tc as F,va as ne,x as Y}from"./chunk-M2M7UK3E.js";function C(e,r){let t=!r?.manualCleanup;t&&!r?.injector&&re(C);let n=t?r?.injector?.get(O)??f(O):null,i=Ae(r?.equal),o;r?.requireSync?o=T({kind:0},{equal:i}):o=T({kind:1,value:r?.initialValue},{equal:i});let s=e.subscribe({next:u=>o.set({kind:1,value:u}),error:u=>{if(r?.rejectErrors)throw u;o.set({kind:2,error:u})}});if(r?.requireSync&&o().kind===0)throw new x(601,!1);return n?.onDestroy(s.unsubscribe.bind(s)),F(()=>{let u=o();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new x(601,!1)}},{equal:r?.equal})}function Ae(e=Object.is){return(r,t)=>r.kind===1&&t.kind===1&&e(r.value,t.value)}var M={};function Pt(e,r){if(M[e]=(M[e]||0)+1,typeof r=="function")return D(e,(...n)=>E(h({},r(...n)),{type:e}));switch(r?r._as:"empty"){case"empty":return D(e,()=>({type:e}));case"props":return D(e,n=>E(h({},n),{type:e}));default:throw new Error("Unexpected config.")}}function zt(){return{_as:"props",_p:void 0}}function D(e,r){return Object.defineProperty(r,"type",{value:e,writable:!1})}var ge="@ngrx/store/init",m=(()=>{class e extends b{constructor(){super({type:ge})}next(t){if(typeof t=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof t>"u")throw new TypeError("Actions must be objects");if(typeof t.type>"u")throw new TypeError("Actions must have a type property");super.next(t)}complete(){}ngOnDestroy(){super.complete()}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=R({token:e,factory:e.\u0275fac})}}return e})(),Ce=[m],Ee=new c("@ngrx/store Internal Root Guard"),se=new c("@ngrx/store Internal Initial State"),z=new c("@ngrx/store Initial State"),Se=new c("@ngrx/store Reducer Factory"),ce=new c("@ngrx/store Internal Reducer Factory Provider"),be=new c("@ngrx/store Initial Reducers"),_=new c("@ngrx/store Internal Initial Reducers"),Vt=new c("@ngrx/store Store Features"),ue=new c("@ngrx/store Internal Store Reducers"),$t=new c("@ngrx/store Internal Feature Reducers"),qt=new c("@ngrx/store Internal Feature Configs"),Kt=new c("@ngrx/store Internal Store Features"),Lt=new c("@ngrx/store Internal Feature Reducers Token"),Bt=new c("@ngrx/store Feature Reducers"),ae=new c("@ngrx/store User Provided Meta Reducers"),I=new c("@ngrx/store Meta Reducers"),de=new c("@ngrx/store Internal Resolved Meta Reducers"),le=new c("@ngrx/store User Runtime Checks Config"),fe=new c("@ngrx/store Internal User Runtime Checks Config"),v=new c("@ngrx/store Internal Runtime Checks"),Fe=new c("@ngrx/store Check if Action types are unique"),pe=new c("@ngrx/store Root Store Provider"),Gt=new c("@ngrx/store Feature State Provider");function De(e,r={}){let t=Object.keys(e),n={};for(let o=0;o<t.length;o++){let s=t[o];typeof e[s]=="function"&&(n[s]=e[s])}let i=Object.keys(n);return function(s,u){s=s===void 0?r:s;let d=!1,p={};for(let a=0;a<i.length;a++){let y=i[a],Te=n[y],L=s[y],B=Te(L,u);p[y]=B,d=d||B!==L}return d?p:s}}function _e(e,r){return Object.keys(e).filter(t=>t!==r).reduce((t,n)=>Object.assign(t,{[n]:e[n]}),{})}function Ie(...e){return function(r){if(e.length===0)return r;let t=e[e.length-1];return e.slice(0,-1).reduceRight((i,o)=>o(i),t(r))}}function je(e,r){return Array.isArray(r)&&r.length>0&&(e=Ie.apply(null,[...r,e])),(t,n)=>{let i=e(t);return(o,s)=>(o=o===void 0?n:o,i(o,s))}}function Me(e){let r=Array.isArray(e)&&e.length>0?Ie(...e):t=>t;return(t,n)=>(t=r(t),(i,o)=>(i=i===void 0?n:i,t(i,o)))}var g=class extends S{},j=class extends m{},ke="@ngrx/store/update-reducers",k=(()=>{class e extends b{get currentReducers(){return this.reducers}constructor(t,n,i,o){super(o(i,n)),this.dispatcher=t,this.initialState=n,this.reducers=i,this.reducerFactory=o}addFeature(t){this.addFeatures([t])}addFeatures(t){let n=t.reduce((i,{reducers:o,reducerFactory:s,metaReducers:u,initialState:d,key:p})=>{let a=typeof o=="function"?Me(u)(o,d):je(s,u)(o,d);return i[p]=a,i},{});this.addReducers(n)}removeFeature(t){this.removeFeatures([t])}removeFeatures(t){this.removeReducers(t.map(n=>n.key))}addReducer(t,n){this.addReducers({[t]:n})}addReducers(t){this.reducers=h(h({},this.reducers),t),this.updateReducers(Object.keys(t))}removeReducer(t){this.removeReducers([t])}removeReducers(t){t.forEach(n=>{this.reducers=_e(this.reducers,n)}),this.updateReducers(t)}updateReducers(t){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:ke,features:t})}ngOnDestroy(){this.complete()}static{this.\u0275fac=function(n){return new(n||e)(l(j),l(z),l(be),l(Se))}}static{this.\u0275prov=R({token:e,factory:e.\u0275fac})}}return e})(),Ue=[k,{provide:g,useExisting:k},{provide:j,useExisting:m}],V=(()=>{class e extends G{ngOnDestroy(){this.complete()}static{this.\u0275fac=(()=>{let t;return function(i){return(t||(t=oe(e)))(i||e)}})()}static{this.\u0275prov=R({token:e,factory:e.\u0275fac})}}return e})(),Ne=[V],w=class extends S{},ye=(()=>{class e extends b{static{this.INIT=ge}constructor(t,n,i,o){super(o);let u=t.pipe(H(Z)).pipe(X(n)),d={state:o},p=u.pipe(J(Pe,d));this.stateSubscription=p.subscribe(({state:a,action:y})=>{this.next(a),i.next(y)}),this.state=C(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}static{this.\u0275fac=function(n){return new(n||e)(l(m),l(g),l(V),l(z))}}static{this.\u0275prov=R({token:e,factory:e.\u0275fac})}}return e})();function Pe(e={state:void 0},[r,t]){let{state:n}=e;return{state:t(n,r),action:r}}var ze=[ye,{provide:w,useExisting:ye}],$=(()=>{class e extends S{constructor(t,n,i){super(),this.actionsObserver=n,this.reducerManager=i,this.source=t,this.state=t.state}select(t,...n){return $e.call(null,t,...n)(this)}selectSignal(t,n){return F(()=>t(this.state()),n)}lift(t){let n=new e(this,this.actionsObserver,this.reducerManager);return n.operator=t,n}dispatch(t){this.actionsObserver.next(t)}next(t){this.actionsObserver.next(t)}error(t){this.actionsObserver.error(t)}complete(){this.actionsObserver.complete()}addReducer(t,n){this.reducerManager.addReducer(t,n)}removeReducer(t){this.reducerManager.removeReducer(t)}static{this.\u0275fac=function(n){return new(n||e)(l(w),l(m),l(k))}}static{this.\u0275prov=R({token:e,factory:e.\u0275fac})}}return e})(),Ve=[$];function $e(e,r,...t){return function(i){let o;if(typeof e=="string"){let s=[r,...t].filter(Boolean);o=i.pipe(W(e,...s))}else if(typeof e=="function")o=i.pipe(Y(s=>e(s,r)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return o.pipe(Q())}}var q="https://ngrx.io/guide/store/configuration/runtime-checks";function he(e){return e===void 0}function Re(e){return e===null}function we(e){return Array.isArray(e)}function qe(e){return typeof e=="string"}function Ke(e){return typeof e=="boolean"}function Le(e){return typeof e=="number"}function xe(e){return typeof e=="object"&&e!==null}function Be(e){return xe(e)&&!we(e)}function Ge(e){if(!Be(e))return!1;let r=Object.getPrototypeOf(e);return r===Object.prototype||r===null}function U(e){return typeof e=="function"}function Ze(e){return U(e)&&e.hasOwnProperty("\u0275cmp")}function He(e,r){return Object.prototype.hasOwnProperty.call(e,r)}var Ye=!1;function Qe(){return Ye}function me(e,r){return e===r}function We(e,r,t){for(let n=0;n<e.length;n++)if(!t(e[n],r[n]))return!0;return!1}function Oe(e,r=me,t=me){let n=null,i=null,o;function s(){n=null,i=null}function u(a=void 0){o={result:a}}function d(){o=void 0}function p(){if(o!==void 0)return o.result;if(!n)return i=e.apply(null,arguments),n=arguments,i;if(!We(arguments,n,r))return i;let a=e.apply(null,arguments);return n=arguments,t(i,a)?i:(i=a,a)}return{memoized:p,reset:s,setResult:u,clearResult:d}}function Je(...e){return et(Oe)(...e)}function Xe(e,r,t,n){if(t===void 0){let o=r.map(s=>s(e));return n.memoized.apply(null,o)}let i=r.map(o=>o(e,t));return n.memoized.apply(null,[...i,t])}function et(e,r={stateFn:Xe}){return function(...t){let n=t;if(Array.isArray(n[0])){let[a,...y]=n;n=[...a,...y]}else n.length===1&&tt(n[0])&&(n=nt(n[0]));let i=n.slice(0,n.length-1),o=n[n.length-1],s=i.filter(a=>a.release&&typeof a.release=="function"),u=e(function(...a){return o.apply(null,a)}),d=Oe(function(a,y){return r.stateFn.apply(null,[a,i,y,u])});function p(){d.reset(),u.reset(),s.forEach(a=>a.release())}return Object.assign(d.memoized,{release:p,projector:u.memoized,setResult:d.setResult,clearResult:d.clearResult})}}function Zt(e){return Je(r=>{let t=r[e];return!Qe()&&A()&&!(e in r)&&console.warn(`@ngrx/store: The feature name "${e}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${e}', ...) or StoreModule.forFeature('${e}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),t},r=>r)}function tt(e){return!!e&&typeof e=="object"&&Object.values(e).every(r=>typeof r=="function")}function nt(e){let r=Object.values(e),t=Object.keys(e),n=(...i)=>t.reduce((o,s,u)=>E(h({},o),{[s]:i[u]}),{});return[...r,n]}function rt(e){return e instanceof c?f(e):e}function ot(e){return typeof e=="function"?e():e}function it(e,r){return e.concat(r)}function st(){if(f($,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function ct(e,r){return function(t,n){let i=r.action(n)?N(n):n,o=e(t,i);return r.state()?N(o):o}}function N(e){Object.freeze(e);let r=U(e);return Object.getOwnPropertyNames(e).forEach(t=>{if(!t.startsWith("\u0275")&&He(e,t)&&(!r||t!=="caller"&&t!=="callee"&&t!=="arguments")){let n=e[t];(xe(n)||U(n))&&!Object.isFrozen(n)&&N(n)}}),e}function ut(e,r){return function(t,n){if(r.action(n)){let o=P(n);ve(o,"action")}let i=e(t,n);if(r.state()){let o=P(i);ve(o,"state")}return i}}function P(e,r=[]){return(he(e)||Re(e))&&r.length===0?{path:["root"],value:e}:Object.keys(e).reduce((n,i)=>{if(n)return n;let o=e[i];return Ze(o)?n:he(o)||Re(o)||Le(o)||Ke(o)||qe(o)||we(o)?!1:Ge(o)?P(o,[...r,i]):{path:[...r,i],value:o}},!1)}function ve(e,r){if(e===!1)return;let t=e.path.join("."),n=new Error(`Detected unserializable ${r} at "${t}". ${q}#strict${r}serializability`);throw n.value=e.value,n.unserializablePath=t,n}function at(e,r){return function(t,n){if(r.action(n)&&!ie.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${q}#strictactionwithinngzone`);return e(t,n)}}function dt(e){return A()?h({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function lt({strictActionSerializability:e,strictStateSerializability:r}){return t=>e||r?ut(t,{action:n=>e&&!K(n),state:()=>r}):t}function ft({strictActionImmutability:e,strictStateImmutability:r}){return t=>e||r?ct(t,{action:n=>e&&!K(n),state:()=>r}):t}function K(e){return e.type.startsWith("@ngrx")}function pt({strictActionWithinNgZone:e}){return r=>e?at(r,{action:t=>e&&!K(t)}):r}function yt(e){return[{provide:fe,useValue:e},{provide:le,useFactory:Rt,deps:[fe]},{provide:v,deps:[le],useFactory:dt},{provide:I,multi:!0,deps:[v],useFactory:ft},{provide:I,multi:!0,deps:[v],useFactory:lt},{provide:I,multi:!0,deps:[v],useFactory:pt}]}function ht(){return[{provide:Fe,multi:!0,deps:[v],useFactory:mt}]}function Rt(e){return e}function mt(e){if(!e.strictActionTypeUniqueness)return;let r=Object.entries(M).filter(([,t])=>t>1).map(([t])=>t);if(r.length)throw new Error(`Action types are registered more than once, ${r.map(t=>`"${t}"`).join(", ")}. ${q}#strictactiontypeuniqueness`)}function vt(e={},r={}){return[{provide:Ee,useFactory:st},{provide:se,useValue:r.initialState},{provide:z,useFactory:ot,deps:[se]},{provide:_,useValue:e},{provide:ue,useExisting:e instanceof c?e:_},{provide:be,deps:[_,[new ee(ue)]],useFactory:rt},{provide:ae,useValue:r.metaReducers?r.metaReducers:[]},{provide:de,deps:[I,ae],useFactory:it},{provide:ce,useValue:r.reducerFactory?r.reducerFactory:De},{provide:Se,deps:[ce,de],useFactory:je},Ce,Ue,Ne,ze,Ve,yt(r.runtimeChecks),ht()]}function gt(){f(m),f(g),f(V),f($),f(Ee,{optional:!0}),f(Fe,{optional:!0})}var Et=[{provide:pe,useFactory:gt},{provide:te,multi:!0,useFactory(){return()=>f(pe)}}];function Ht(e,r){return ne([...vt(e,r),Et])}function Yt(...e){let r=e.pop(),t=e.map(n=>n.type);return{reducer:r,types:t}}function Qt(e,...r){let t=new Map;for(let n of r)for(let i of n.types){let o=t.get(i);if(o){let s=(u,d)=>n.reducer(o(u,d),d);t.set(i,s)}else t.set(i,n.reducer)}return function(n=e,i){let o=t.get(i.type);return o?o(n,i):n}}export{C as a,Pt as b,zt as c,ge as d,m as e,z as f,g,j as h,ke as i,V as j,w as k,$ as l,Je as m,Zt as n,Ht as o,Yt as p,Qt as q};