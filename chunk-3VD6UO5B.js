import{a as K}from"./chunk-4IFKJB3M.js";import{Hb as pe,Ja as o,Oa as k,Ra as b,S as N,Sa as d,U as V,V as Z,Vb as M,Wb as h,X as O,Z as g,Za as Y,a as l,aa as de,b as u,da as x,ea as c,hb as G,j as ae,ja as X,m as le,na as he,pa as fe,r as ue,ra as D,ua as P,wb as A,x as ce}from"./chunk-PG3DKY5E.js";var Ae=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(o(k),o(P))}}static{this.\u0275dir=c({type:i})}}return i})(),Me=(()=>{class i extends Ae{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=he(i)))(r||i)}})()}static{this.\u0275dir=c({type:i,features:[d]})}}return i})(),ne=new g("");var ze={provide:ne,useExisting:V(()=>Ee),multi:!0};function Ze(){let i=K()?K().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Xe=new g(""),Ee=(()=>{class i extends Ae{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Ze())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(o(k),o(P),o(Xe,8))}}static{this.\u0275dir=c({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&G("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},features:[A([ze]),d]})}}return i})();function f(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function Fe(i){return i!=null&&typeof i.length=="number"}var we=new g(""),Ie=new g(""),Ye=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ge=class{static min(e){return Ke(e)}static max(e){return Je(e)}static required(e){return Qe(e)}static requiredTrue(e){return et(e)}static email(e){return tt(e)}static minLength(e){return it(e)}static maxLength(e){return nt(e)}static pattern(e){return rt(e)}static nullValidator(e){return Se(e)}static compose(e){return Ge(e)}static composeAsync(e){return Te(e)}};function Ke(i){return e=>{if(f(e.value)||f(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<i?{min:{min:i,actual:e.value}}:null}}function Je(i){return e=>{if(f(e.value)||f(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>i?{max:{max:i,actual:e.value}}:null}}function Qe(i){return f(i.value)?{required:!0}:null}function et(i){return i.value===!0?null:{required:!0}}function tt(i){return f(i.value)||Ye.test(i.value)?null:{email:!0}}function it(i){return e=>f(e.value)||!Fe(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function nt(i){return e=>Fe(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function rt(i){if(!i)return Se;let e,t;return typeof i=="string"?(t="",i.charAt(0)!=="^"&&(t+="^"),t+=i,i.charAt(i.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=i.toString(),e=i),n=>{if(f(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function Se(i){return null}function Ne(i){return i!=null}function Oe(i){return pe(i)?le(i):i}function xe(i){let e={};return i.forEach(t=>{e=t!=null?l(l({},e),t):e}),Object.keys(e).length===0?null:e}function Pe(i,e){return e.map(t=>t(i))}function st(i){return!i.validate}function ke(i){return i.map(e=>st(e)?e:t=>e.validate(t))}function Ge(i){if(!i)return null;let e=i.filter(Ne);return e.length==0?null:function(t){return xe(Pe(t,e))}}function Re(i){return i!=null?Ge(ke(i)):null}function Te(i){if(!i)return null;let e=i.filter(Ne);return e.length==0?null:function(t){let n=Pe(t,e).map(Oe);return ce(n).pipe(ue(xe))}}function je(i){return i!=null?Te(ke(i)):null}function me(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Be(i){return i._rawValidators}function Ue(i){return i._rawAsyncValidators}function J(i){return i?Array.isArray(i)?i:[i]:[]}function j(i,e){return Array.isArray(i)?i.includes(e):i===e}function _e(i,e){let t=J(e);return J(i).forEach(r=>{j(t,r)||t.push(r)}),t}function ve(i,e){return J(e).filter(t=>!j(i,t))}var B=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Re(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=je(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},v=class extends B{get formDirective(){return null}get path(){return null}},y=class extends B{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},U=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},ot={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Xt=u(l({},ot),{"[class.ng-submitted]":"isSubmitted"}),Yt=(()=>{class i extends U{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(y,2))}}static{this.\u0275dir=c({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&Y("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[d]})}}return i})(),Kt=(()=>{class i extends U{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(v,10))}}static{this.\u0275dir=c({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&Y("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[d]})}}return i})();var E="VALID",R="INVALID",m="PENDING",F="DISABLED",p=class{},H=class extends p{constructor(e,t){super(),this.value=e,this.source=t}},w=class extends p{constructor(e,t){super(),this.pristine=e,this.source=t}},I=class extends p{constructor(e,t){super(),this.touched=e,this.source=t}},_=class extends p{constructor(e,t){super(),this.status=e,this.source=t}},Q=class extends p{constructor(e){super(),this.source=e}},ee=class extends p{constructor(e){super(),this.source=e}};function re(i){return(q(i)?i.validators:i)||null}function at(i){return Array.isArray(i)?Re(i):i||null}function se(i,e){return(q(e)?e.asyncValidators:i)||null}function lt(i){return Array.isArray(i)?je(i):i||null}function q(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function He(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new N(1e3,"");if(!n[t])throw new N(1001,"")}function Le(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new N(1002,"")})}var C=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=M(()=>this.statusReactive()),this.statusReactive=b(void 0),this._pristine=M(()=>this.pristineReactive()),this.pristineReactive=b(!0),this._touched=M(()=>this.touchedReactive()),this.touchedReactive=b(!1),this._events=new ae,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return h(this.statusReactive)}set status(e){h(()=>this.statusReactive.set(e))}get valid(){return this.status===E}get invalid(){return this.status===R}get pending(){return this.status==m}get disabled(){return this.status===F}get enabled(){return this.status!==F}get pristine(){return h(this.pristineReactive)}set pristine(e){h(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return h(this.touchedReactive)}set touched(e){h(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(_e(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(_e(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ve(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ve(e,this._rawAsyncValidators))}hasValidator(e){return j(this._rawValidators,e)}hasAsyncValidator(e){return j(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(u(l({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new I(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new I(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(u(l({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new w(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new w(!0,n))}markAsPending(e={}){this.status=m;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new _(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(u(l({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=F,this.errors=null,this._forEachChild(r=>{r.disable(u(l({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new H(this.value,n)),this._events.next(new _(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(u(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=E,this._forEachChild(n=>{n.enable(u(l({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(u(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===E||this.status===m)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new H(this.value,t)),this._events.next(new _(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(u(l({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?F:E}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=m,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=Oe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new _(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new D,this.statusChanges=new D}_calculateStatus(){return this._allControlsDisabled()?F:this.errors?R:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(m)?m:this._anyControlsHaveStatus(R)?R:E}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new w(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new I(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){q(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=at(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=lt(this._rawAsyncValidators)}},L=class extends C{constructor(e,t,n){super(re(t),se(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){Le(this,!0,e),Object.keys(e).forEach(n=>{He(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,s)=>{n=t(n,r,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var te=class extends L{};var z=new g("CallSetDisabledState",{providedIn:"root",factory:()=>S}),S="always";function ut(i,e){return[...e.path,i]}function ye(i,e,t=S){oe(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),dt(i,e),ft(i,e),ht(i,e),ct(i,e)}function Ce(i,e,t=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),W(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function $(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function ct(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function oe(i,e){let t=Be(i);e.validator!==null?i.setValidators(me(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=Ue(i);e.asyncValidator!==null?i.setAsyncValidators(me(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();$(e._rawValidators,r),$(e._rawAsyncValidators,r)}function W(i,e){let t=!1;if(i!==null){if(e.validator!==null){let r=Be(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.validator);s.length!==r.length&&(t=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let r=Ue(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.asyncValidator);s.length!==r.length&&(t=!0,i.setAsyncValidators(s))}}}let n=()=>{};return $(e._rawValidators,n),$(e._rawAsyncValidators,n),t}function dt(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&$e(i,e)})}function ht(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&$e(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function $e(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function ft(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function pt(i,e){i==null,oe(i,e)}function gt(i,e){return W(i,e)}function mt(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function _t(i){return Object.getPrototypeOf(i.constructor)===Me}function vt(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function yt(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===Ee?t=s:_t(s)?n=s:r=s}),r||n||t||null}function Ct(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Ve(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function De(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var T=class extends C{constructor(e=null,t,n){super(re(t),se(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),q(t)&&(t.nonNullable||t.initialValueIsDefault)&&(De(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ve(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ve(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){De(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Vt=i=>i instanceof T;var Qt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=c({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var Dt={provide:ne,useExisting:V(()=>At),multi:!0};var bt=(()=>{class i{constructor(){this._accessors=[]}add(t,n){this._accessors.push([t,n])}remove(t){for(let n=this._accessors.length-1;n>=0;--n)if(this._accessors[n][1]===t){this._accessors.splice(n,1);return}}select(t){this._accessors.forEach(n=>{this._isSameGroup(n,t)&&n[1]!==t&&n[1].fireUncheck(t.value)})}_isSameGroup(t,n){return t[0].control?t[0]._parent===n._control._parent&&t[1].name===n.name:!1}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Z({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})(),At=(()=>{class i extends Me{constructor(t,n,r,s){super(t,n),this._registry=r,this._injector=s,this.setDisabledStateFired=!1,this.onChange=()=>{},this.callSetDisabledState=de(z,{optional:!0})??S}ngOnInit(){this._control=this._injector.get(y),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(t){this._state=t===this.value,this.setProperty("checked",this._state)}registerOnChange(t){this._fn=t,this.onChange=()=>{t(this.value),this._registry.select(this)}}setDisabledState(t){(this.setDisabledStateFired||t||this.callSetDisabledState==="whenDisabledForLegacyCode")&&this.setProperty("disabled",t),this.setDisabledStateFired=!0}fireUncheck(t){this.writeValue(t)}_checkName(){this.name&&this.formControlName&&(this.name,this.formControlName),!this.name&&this.formControlName&&(this.name=this.formControlName)}static{this.\u0275fac=function(n){return new(n||i)(o(k),o(P),o(bt),o(fe))}}static{this.\u0275dir=c({type:i,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(n,r){n&1&&G("change",function(){return r.onChange()})("blur",function(){return r.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[A([Dt]),d]})}}return i})();var We=new g("");var Mt={provide:v,useExisting:V(()=>Et)},Et=(()=>{class i extends v{get submitted(){return h(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}constructor(t,n,r){super(),this.callSetDisabledState=r,this._submitted=M(()=>this._submittedReactive()),this._submittedReactive=b(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new D,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(W(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return ye(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){Ce(t.control||null,t,!1),Ct(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this._submittedReactive.set(!0),vt(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new Q(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new ee(this.form))}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,r=this.form.get(t.path);n!==r&&(Ce(n||null,t),Vt(r)&&(ye(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);pt(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&gt(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){oe(this.form,this),this._oldForm&&W(this._oldForm,this)}_checkFormPresent(){this.form}static{this.\u0275fac=function(n){return new(n||i)(o(we,10),o(Ie,10),o(z,8))}}static{this.\u0275dir=c({type:i,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&G("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[A([Mt]),d,X]})}}return i})();var Ft={provide:y,useExisting:V(()=>wt)},wt=(()=>{class i extends y{set isDisabled(t){}static{this._ngModelWarningSentOnce=!1}constructor(t,n,r,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new D,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=yt(this,s)}ngOnChanges(t){this._added||this._setUpControl(),mt(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return ut(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(n){return new(n||i)(o(v,13),o(we,10),o(Ie,10),o(ne,10),o(We,8))}}static{this.\u0275dir=c({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[A([Ft]),d,X]})}}return i})();var qe=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=x({type:i})}static{this.\u0275inj=O({})}}return i})(),ie=class extends C{constructor(e,t,n){super(re(t),se(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,n={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(e,t={}){let n=this._adjustIndex(e);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,n={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),t&&(this.controls.splice(r,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){Le(this,!1,e),e.forEach((n,r)=>{He(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(e.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((n,r)=>{n.reset(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,n)=>n._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,n)=>{e(t,n)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function be(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var ei=(()=>{class i{constructor(){this.useNonNullable=!1}get nonNullable(){let t=new i;return t.useNonNullable=!0,t}group(t,n=null){let r=this._reduceControls(t),s={};return be(n)?s=n:n!==null&&(s.validators=n.validator,s.asyncValidators=n.asyncValidator),new L(r,s)}record(t,n=null){let r=this._reduceControls(t);return new te(r,n)}control(t,n,r){let s={};return this.useNonNullable?(be(n)?s=n:(s.validators=n,s.asyncValidators=r),new T(t,u(l({},s),{nonNullable:!0}))):new T(t,n,r)}array(t,n,r){let s=t.map(a=>this._createControl(a));return new ie(s,n,r)}_reduceControls(t){let n={};return Object.keys(t).forEach(r=>{n[r]=this._createControl(t[r])}),n}_createControl(t){if(t instanceof T)return t;if(t instanceof C)return t;if(Array.isArray(t)){let n=t[0],r=t.length>1?t[1]:null,s=t.length>2?t[2]:null;return this.control(n,r,s)}else return this.control(t)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Z({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var ti=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:z,useValue:t.callSetDisabledState??S}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=x({type:i})}static{this.\u0275inj=O({imports:[qe]})}}return i})(),ii=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:We,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:z,useValue:t.callSetDisabledState??S}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=x({type:i})}static{this.\u0275inj=O({imports:[qe]})}}return i})();export{ne as a,Ee as b,ge as c,Yt as d,Kt as e,Qt as f,At as g,Et as h,wt as i,ei as j,ti as k,ii as l};
