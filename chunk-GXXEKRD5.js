import{a as m}from"./chunk-5YQQEXEO.js";import{a as o}from"./chunk-E7LQUBD3.js";import{a as p}from"./chunk-WSAW2S45.js";import{l as g}from"./chunk-ZZ4TVKJ3.js";import{a as h}from"./chunk-CB4AZW4Z.js";import{ca as i,i as c,ia as u,o as l,oa as s}from"./chunk-YL2HPNIQ.js";var A=(()=>{class n{constructor(r,t){this._HttpClient=r,this._Store=t,this.authorization$=this._Store.select(p),this.currency$=this._Store.select(m),this.count=new l(0)}getCart(){let{token:r,currency:t}=this.getTokenAndCurrency(),e=localStorage.getItem("lang");return this._HttpClient.get(o.baseUrl+"cart",{headers:{Authorization:"Bearer "+r,lang:e??"en",currency:t}})}addToCart(r){let{token:t,currency:e}=this.getTokenAndCurrency(),a=localStorage.getItem("lang");return this._HttpClient.post(o.baseUrl+"cart",r,{headers:{Authorization:"Bearer "+t,lang:a}})}removeFromCart(r){let{token:t,currency:e}=this.getTokenAndCurrency(),a=localStorage.getItem("lang");return this._HttpClient.delete(o.baseUrl+"cart",{headers:{Authorization:"Bearer "+t,lang:a}})}clearCart(){let{token:r,currency:t}=this.getTokenAndCurrency(),e=localStorage.getItem("lang");return this._HttpClient.delete(o.baseUrl+"cart",{headers:{Authorization:"Bearer "+r,lang:e}})}getTokenAndCurrency(){let r="";this.authorization$.pipe(i(e=>r=e.token)).subscribe(c,e=>console.log(e));let t="";return this.currency$.pipe(i(e=>t=e.currency)).subscribe(c,e=>console.log(e)),{token:r,currency:t}}static{this.\u0275fac=function(t){return new(t||n)(s(h),s(g))}}static{this.\u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();export{A as a};
