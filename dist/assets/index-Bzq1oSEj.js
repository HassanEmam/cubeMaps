(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Sm(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ac={exports:{}},Ao={},lc={exports:{}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp;function D_(){if(fp)return ct;fp=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=S&&I[S]||I["@@iterator"],typeof I=="function"?I:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function v(I,te,Ie){this.props=I,this.context=te,this.refs=T,this.updater=Ie||y}v.prototype.isReactComponent={},v.prototype.setState=function(I,te){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,te,"setState")},v.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function g(){}g.prototype=v.prototype;function N(I,te,Ie){this.props=I,this.context=te,this.refs=T,this.updater=Ie||y}var L=N.prototype=new g;L.constructor=N,M(L,v.prototype),L.isPureReactComponent=!0;var C=Array.isArray,G=Object.prototype.hasOwnProperty,O={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function X(I,te,Ie){var Z,de={},ye=null,ve=null;if(te!=null)for(Z in te.ref!==void 0&&(ve=te.ref),te.key!==void 0&&(ye=""+te.key),te)G.call(te,Z)&&!U.hasOwnProperty(Z)&&(de[Z]=te[Z]);var Te=arguments.length-2;if(Te===1)de.children=Ie;else if(1<Te){for(var Ue=Array(Te),Ze=0;Ze<Te;Ze++)Ue[Ze]=arguments[Ze+2];de.children=Ue}if(I&&I.defaultProps)for(Z in Te=I.defaultProps,Te)de[Z]===void 0&&(de[Z]=Te[Z]);return{$$typeof:o,type:I,key:ye,ref:ve,props:de,_owner:O.current}}function P(I,te){return{$$typeof:o,type:I.type,key:te,ref:I.ref,props:I.props,_owner:I._owner}}function R(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function z(I){var te={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ie){return te[Ie]})}var oe=/\/+/g;function ee(I,te){return typeof I=="object"&&I!==null&&I.key!=null?z(""+I.key):te.toString(36)}function ce(I,te,Ie,Z,de){var ye=typeof I;(ye==="undefined"||ye==="boolean")&&(I=null);var ve=!1;if(I===null)ve=!0;else switch(ye){case"string":case"number":ve=!0;break;case"object":switch(I.$$typeof){case o:case e:ve=!0}}if(ve)return ve=I,de=de(ve),I=Z===""?"."+ee(ve,0):Z,C(de)?(Ie="",I!=null&&(Ie=I.replace(oe,"$&/")+"/"),ce(de,te,Ie,"",function(Ze){return Ze})):de!=null&&(R(de)&&(de=P(de,Ie+(!de.key||ve&&ve.key===de.key?"":(""+de.key).replace(oe,"$&/")+"/")+I)),te.push(de)),1;if(ve=0,Z=Z===""?".":Z+":",C(I))for(var Te=0;Te<I.length;Te++){ye=I[Te];var Ue=Z+ee(ye,Te);ve+=ce(ye,te,Ie,Ue,de)}else if(Ue=x(I),typeof Ue=="function")for(I=Ue.call(I),Te=0;!(ye=I.next()).done;)ye=ye.value,Ue=Z+ee(ye,Te++),ve+=ce(ye,te,Ie,Ue,de);else if(ye==="object")throw te=String(I),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return ve}function he(I,te,Ie){if(I==null)return I;var Z=[],de=0;return ce(I,Z,"","",function(ye){return te.call(Ie,ye,de++)}),Z}function se(I){if(I._status===-1){var te=I._result;te=te(),te.then(function(Ie){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ie)},function(Ie){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ie)}),I._status===-1&&(I._status=0,I._result=te)}if(I._status===1)return I._result.default;throw I._result}var le={current:null},k={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:k,ReactCurrentOwner:O};function re(){throw Error("act(...) is not supported in production builds of React.")}return ct.Children={map:he,forEach:function(I,te,Ie){he(I,function(){te.apply(this,arguments)},Ie)},count:function(I){var te=0;return he(I,function(){te++}),te},toArray:function(I){return he(I,function(te){return te})||[]},only:function(I){if(!R(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ct.Component=v,ct.Fragment=n,ct.Profiler=a,ct.PureComponent=N,ct.StrictMode=r,ct.Suspense=p,ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,ct.act=re,ct.cloneElement=function(I,te,Ie){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Z=M({},I.props),de=I.key,ye=I.ref,ve=I._owner;if(te!=null){if(te.ref!==void 0&&(ye=te.ref,ve=O.current),te.key!==void 0&&(de=""+te.key),I.type&&I.type.defaultProps)var Te=I.type.defaultProps;for(Ue in te)G.call(te,Ue)&&!U.hasOwnProperty(Ue)&&(Z[Ue]=te[Ue]===void 0&&Te!==void 0?Te[Ue]:te[Ue])}var Ue=arguments.length-2;if(Ue===1)Z.children=Ie;else if(1<Ue){Te=Array(Ue);for(var Ze=0;Ze<Ue;Ze++)Te[Ze]=arguments[Ze+2];Z.children=Te}return{$$typeof:o,type:I.type,key:de,ref:ye,props:Z,_owner:ve}},ct.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},ct.createElement=X,ct.createFactory=function(I){var te=X.bind(null,I);return te.type=I,te},ct.createRef=function(){return{current:null}},ct.forwardRef=function(I){return{$$typeof:d,render:I}},ct.isValidElement=R,ct.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:se}},ct.memo=function(I,te){return{$$typeof:m,type:I,compare:te===void 0?null:te}},ct.startTransition=function(I){var te=k.transition;k.transition={};try{I()}finally{k.transition=te}},ct.unstable_act=re,ct.useCallback=function(I,te){return le.current.useCallback(I,te)},ct.useContext=function(I){return le.current.useContext(I)},ct.useDebugValue=function(){},ct.useDeferredValue=function(I){return le.current.useDeferredValue(I)},ct.useEffect=function(I,te){return le.current.useEffect(I,te)},ct.useId=function(){return le.current.useId()},ct.useImperativeHandle=function(I,te,Ie){return le.current.useImperativeHandle(I,te,Ie)},ct.useInsertionEffect=function(I,te){return le.current.useInsertionEffect(I,te)},ct.useLayoutEffect=function(I,te){return le.current.useLayoutEffect(I,te)},ct.useMemo=function(I,te){return le.current.useMemo(I,te)},ct.useReducer=function(I,te,Ie){return le.current.useReducer(I,te,Ie)},ct.useRef=function(I){return le.current.useRef(I)},ct.useState=function(I){return le.current.useState(I)},ct.useSyncExternalStore=function(I,te,Ie){return le.current.useSyncExternalStore(I,te,Ie)},ct.useTransition=function(){return le.current.useTransition()},ct.version="18.3.1",ct}var dp;function wl(){return dp||(dp=1,lc.exports=D_()),lc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp;function U_(){if(hp)return Ao;hp=1;var o=wl(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var _,S={},x=null,y=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(y=p.ref);for(_ in p)r.call(p,_)&&!u.hasOwnProperty(_)&&(S[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)S[_]===void 0&&(S[_]=p[_]);return{$$typeof:e,type:d,key:x,ref:y,props:S,_owner:a.current}}return Ao.Fragment=n,Ao.jsx=f,Ao.jsxs=f,Ao}var pp;function I_(){return pp||(pp=1,ac.exports=U_()),ac.exports}var Ct=I_(),ri=wl(),Ya={},uc={exports:{}},Cn={},cc={exports:{}},fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function N_(){return mp||(mp=1,function(o){function e(k,ae){var re=k.length;k.push(ae);e:for(;0<re;){var I=re-1>>>1,te=k[I];if(0<a(te,ae))k[I]=ae,k[re]=te,re=I;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var ae=k[0],re=k.pop();if(re!==ae){k[0]=re;e:for(var I=0,te=k.length,Ie=te>>>1;I<Ie;){var Z=2*(I+1)-1,de=k[Z],ye=Z+1,ve=k[ye];if(0>a(de,re))ye<te&&0>a(ve,de)?(k[I]=ve,k[ye]=re,I=ye):(k[I]=de,k[Z]=re,I=Z);else if(ye<te&&0>a(ve,re))k[I]=ve,k[ye]=re,I=ye;else break e}}return ae}function a(k,ae){var re=k.sortIndex-ae.sortIndex;return re!==0?re:k.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,S=null,x=3,y=!1,M=!1,T=!1,v=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(k){for(var ae=n(m);ae!==null;){if(ae.callback===null)r(m);else if(ae.startTime<=k)r(m),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=n(m)}}function C(k){if(T=!1,L(k),!M)if(n(p)!==null)M=!0,se(G);else{var ae=n(m);ae!==null&&le(C,ae.startTime-k)}}function G(k,ae){M=!1,T&&(T=!1,g(X),X=-1),y=!0;var re=x;try{for(L(ae),S=n(p);S!==null&&(!(S.expirationTime>ae)||k&&!z());){var I=S.callback;if(typeof I=="function"){S.callback=null,x=S.priorityLevel;var te=I(S.expirationTime<=ae);ae=o.unstable_now(),typeof te=="function"?S.callback=te:S===n(p)&&r(p),L(ae)}else r(p);S=n(p)}if(S!==null)var Ie=!0;else{var Z=n(m);Z!==null&&le(C,Z.startTime-ae),Ie=!1}return Ie}finally{S=null,x=re,y=!1}}var O=!1,U=null,X=-1,P=5,R=-1;function z(){return!(o.unstable_now()-R<P)}function oe(){if(U!==null){var k=o.unstable_now();R=k;var ae=!0;try{ae=U(!0,k)}finally{ae?ee():(O=!1,U=null)}}else O=!1}var ee;if(typeof N=="function")ee=function(){N(oe)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,he=ce.port2;ce.port1.onmessage=oe,ee=function(){he.postMessage(null)}}else ee=function(){v(oe,0)};function se(k){U=k,O||(O=!0,ee())}function le(k,ae){X=v(function(){k(o.unstable_now())},ae)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_continueExecution=function(){M||y||(M=!0,se(G))},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return n(p)},o.unstable_next=function(k){switch(x){case 1:case 2:case 3:var ae=3;break;default:ae=x}var re=x;x=ae;try{return k()}finally{x=re}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(k,ae){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var re=x;x=k;try{return ae()}finally{x=re}},o.unstable_scheduleCallback=function(k,ae,re){var I=o.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?I+re:I):re=I,k){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=re+te,k={id:_++,callback:ae,priorityLevel:k,startTime:re,expirationTime:te,sortIndex:-1},re>I?(k.sortIndex=re,e(m,k),n(p)===null&&k===n(m)&&(T?(g(X),X=-1):T=!0,le(C,re-I))):(k.sortIndex=te,e(p,k),M||y||(M=!0,se(G))),k},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(k){var ae=x;return function(){var re=x;x=ae;try{return k.apply(this,arguments)}finally{x=re}}}}(fc)),fc}var gp;function F_(){return gp||(gp=1,cc.exports=N_()),cc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function O_(){if(_p)return Cn;_p=1;var o=wl(),e=F_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},S={};function x(t){return p.call(S,t)?!0:p.call(_,t)?!1:m.test(t)?S[t]=!0:(_[t]=!0,!1)}function y(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function M(t,i,s,l){if(i===null||typeof i>"u"||y(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,s,l,c,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,N);v[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,N);v[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,N);v[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,s,l){var c=v.hasOwnProperty(i)?v[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,s,c,l)&&(s=null),l||c===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):c.mustUseProperty?t[c.propertyName]=s===null?c.type===3?!1:"":s:(i=c.attributeName,l=c.attributeNamespace,s===null?t.removeAttribute(i):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),O=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),k=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,I;function te(t){if(I===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Ie=!1;function Z(t,i){if(!t||Ie)return"";Ie=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var l=J}Reflect.construct(t,[],i)}else{try{i.call()}catch(J){l=J}t.call(i.prototype)}else{try{throw Error()}catch(J){l=J}t()}}catch(J){if(J&&l&&typeof J.stack=="string"){for(var c=J.stack.split(`
`),h=l.stack.split(`
`),E=c.length-1,D=h.length-1;1<=E&&0<=D&&c[E]!==h[D];)D--;for(;1<=E&&0<=D;E--,D--)if(c[E]!==h[D]){if(E!==1||D!==1)do if(E--,D--,0>D||c[E]!==h[D]){var F=`
`+c[E].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=E&&0<=D);break}}}finally{Ie=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?te(t):""}function de(t){switch(t.tag){case 5:return te(t.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return t=Z(t.type,!1),t;case 11:return t=Z(t.type.render,!1),t;case 1:return t=Z(t.type,!0),t;default:return""}}function ye(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case O:return"Portal";case P:return"Profiler";case X:return"StrictMode";case ee:return"Suspense";case ce:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case oe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:ye(t.type)||"Memo";case se:i=t._payload,t=t._init;try{return ye(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=Ue(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Tt(t){t._valueTracker||(t._valueTracker=Ze(t))}function dt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Ue(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function bt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function B(t,i){var s=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function gn(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=Te(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ft(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function lt(t,i){ft(t,i);var s=Te(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Et(t,i.type,s):i.hasOwnProperty("defaultValue")&&Et(t,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function qe(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function Et(t,i,s){(i!=="number"||bt(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var Ge=Array.isArray;function b(t,i,s,l){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Te(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function w(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function K(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(Ge(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:Te(s)}}function pe(t,i){var s=Te(i.value),l=Te(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ue(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ue(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var we,Ne=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,c)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=we.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function at(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function je(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function Je(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,c=je(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,c):t[s]=c}}var Be=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ut(t,i){if(i){if(Be[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function nt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mt=null;function V(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ae=null,ie=null,fe=null;function be(t){if(t=co(t)){if(typeof Ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=la(i),Ae(t.stateNode,t.type,i))}}function Pe(t){ie?fe?fe.push(t):fe=[t]:ie=t}function it(){if(ie){var t=ie,i=fe;if(fe=ie=null,be(t),i)for(t=0;t<i.length;t++)be(i[t])}}function Dt(t,i){return t(i)}function Yt(){}var _t=!1;function Mn(t,i,s){if(_t)return t(i,s);_t=!0;try{return Dt(t,i,s)}finally{_t=!1,(ie!==null||fe!==null)&&(Yt(),it())}}function _n(t,i){var s=t.stateNode;if(s===null)return null;var l=la(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var Kr=!1;if(d)try{var zi={};Object.defineProperty(zi,"passive",{get:function(){Kr=!0}}),window.addEventListener("test",zi,zi),window.removeEventListener("test",zi,zi)}catch{Kr=!1}function gi(t,i,s,l,c,h,E,D,F){var J=Array.prototype.slice.call(arguments,3);try{i.apply(s,J)}catch(_e){this.onError(_e)}}var _i=!1,xr=null,Sr=!1,Hi=null,zo={onError:function(t){_i=!0,xr=t}};function Zr(t,i,s,l,c,h,E,D,F){_i=!1,xr=null,gi.apply(zo,arguments)}function Ho(t,i,s,l,c,h,E,D,F){if(Zr.apply(this,arguments),_i){if(_i){var J=xr;_i=!1,xr=null}else throw Error(n(198));Sr||(Sr=!0,Hi=J)}}function li(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Vo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Go(t){if(li(t)!==t)throw Error(n(188))}function bl(t){var i=t.alternate;if(!i){if(i=li(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return Go(c),t;if(h===l)return Go(c),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=c,l=h;else{for(var E=!1,D=c.child;D;){if(D===s){E=!0,s=c,l=h;break}if(D===l){E=!0,l=c,s=h;break}D=D.sibling}if(!E){for(D=h.child;D;){if(D===s){E=!0,s=h,l=c;break}if(D===l){E=!0,l=h,s=c;break}D=D.sibling}if(!E)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function Wo(t){return t=bl(t),t!==null?Xo(t):null}function Xo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Xo(t);if(i!==null)return i;t=t.sibling}return null}var qo=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,W=e.unstable_shouldYield,Q=e.unstable_requestPaint,j=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,Se=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,Le=e.unstable_NormalPriority,ke=e.unstable_LowPriority,et=e.unstable_IdlePriority,Qe=null,He=null;function pt(t){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Qe,t,void 0,(t.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:gt,kt=Math.log,Nt=Math.LN2;function gt(t){return t>>>=0,t===0?32:31-(kt(t)/Nt|0)|0}var Ye=64,zt=4194304;function ht(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ln(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,E=s&268435455;if(E!==0){var D=E&~c;D!==0?l=ht(D):(h&=E,h!==0&&(l=ht(h)))}else E=s&~c,E!==0?l=ht(E):h!==0&&(l=ht(h));if(l===0)return 0;if(i!==0&&i!==l&&!(i&c)&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if(l&4&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-rt(i),c=1<<s,l|=t[s],i&=~c;return l}function Vi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vn(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-rt(h),D=1<<E,F=c[E];F===-1?(!(D&s)||D&l)&&(c[E]=Vi(D,i)):F<=i&&(t.expiredLanes|=D),h&=~D}}function vi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rt(){var t=Ye;return Ye<<=1,!(Ye&4194240)&&(Ye=64),t}function un(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Qt(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-rt(i),t[i]=s}function sn(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var c=31-rt(s),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,s&=~h}}function Jt(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-rt(s),c=1<<l;c&i|t[l]&i&&(t[l]|=i),s&=~c}}var vt=0;function ui(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Wf,Ll,Xf,qf,Yf,Dl=!1,Yo=[],Gi=null,Wi=null,Xi=null,js=new Map,$s=new Map,qi=[],tg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jf(t,i){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":js.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":$s.delete(i.pointerId)}}function Ks(t,i,s,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=co(i),i!==null&&Ll(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function ng(t,i,s,l,c){switch(i){case"focusin":return Gi=Ks(Gi,t,i,s,l,c),!0;case"dragenter":return Wi=Ks(Wi,t,i,s,l,c),!0;case"mouseover":return Xi=Ks(Xi,t,i,s,l,c),!0;case"pointerover":var h=c.pointerId;return js.set(h,Ks(js.get(h)||null,t,i,s,l,c)),!0;case"gotpointercapture":return h=c.pointerId,$s.set(h,Ks($s.get(h)||null,t,i,s,l,c)),!0}return!1}function $f(t){var i=yr(t.target);if(i!==null){var s=li(i);if(s!==null){if(i=s.tag,i===13){if(i=Vo(s),i!==null){t.blockedOn=i,Yf(t.priority,function(){Xf(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Il(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Mt=l,s.target.dispatchEvent(l),Mt=null}else return i=co(s),i!==null&&Ll(i),t.blockedOn=s,!1;i.shift()}return!0}function Kf(t,i,s){jo(t)&&s.delete(i)}function ig(){Dl=!1,Gi!==null&&jo(Gi)&&(Gi=null),Wi!==null&&jo(Wi)&&(Wi=null),Xi!==null&&jo(Xi)&&(Xi=null),js.forEach(Kf),$s.forEach(Kf)}function Zs(t,i){t.blockedOn===i&&(t.blockedOn=null,Dl||(Dl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ig)))}function Qs(t){function i(c){return Zs(c,t)}if(0<Yo.length){Zs(Yo[0],t);for(var s=1;s<Yo.length;s++){var l=Yo[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Gi!==null&&Zs(Gi,t),Wi!==null&&Zs(Wi,t),Xi!==null&&Zs(Xi,t),js.forEach(i),$s.forEach(i),s=0;s<qi.length;s++)l=qi[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<qi.length&&(s=qi[0],s.blockedOn===null);)$f(s),s.blockedOn===null&&qi.shift()}var Qr=C.ReactCurrentBatchConfig,$o=!0;function rg(t,i,s,l){var c=vt,h=Qr.transition;Qr.transition=null;try{vt=1,Ul(t,i,s,l)}finally{vt=c,Qr.transition=h}}function sg(t,i,s,l){var c=vt,h=Qr.transition;Qr.transition=null;try{vt=4,Ul(t,i,s,l)}finally{vt=c,Qr.transition=h}}function Ul(t,i,s,l){if($o){var c=Il(t,i,s,l);if(c===null)Zl(t,i,l,Ko,s),jf(t,l);else if(ng(c,t,i,s,l))l.stopPropagation();else if(jf(t,l),i&4&&-1<tg.indexOf(t)){for(;c!==null;){var h=co(c);if(h!==null&&Wf(h),h=Il(t,i,s,l),h===null&&Zl(t,i,l,Ko,s),h===c)break;c=h}c!==null&&l.stopPropagation()}else Zl(t,i,l,null,s)}}var Ko=null;function Il(t,i,s,l){if(Ko=null,t=V(l),t=yr(t),t!==null)if(i=li(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Vo(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Ko=t,null}function Zf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case Se:return 1;case Re:return 4;case Le:case ke:return 16;case et:return 536870912;default:return 16}default:return 16}}var Yi=null,Nl=null,Zo=null;function Qf(){if(Zo)return Zo;var t,i=Nl,s=i.length,l,c="value"in Yi?Yi.value:Yi.textContent,h=c.length;for(t=0;t<s&&i[t]===c[t];t++);var E=s-t;for(l=1;l<=E&&i[s-l]===c[h-l];l++);return Zo=c.slice(t,1<l?1-l:void 0)}function Qo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Jo(){return!0}function Jf(){return!1}function Dn(t){function i(s,l,c,h,E){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(s=t[D],this[D]=s?s(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Jo:Jf,this.isPropagationStopped=Jf,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),i}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=Dn(Jr),Js=re({},Jr,{view:0,detail:0}),og=Dn(Js),Ol,Bl,eo,ea=re({},Js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(Ol=t.screenX-eo.screenX,Bl=t.screenY-eo.screenY):Bl=Ol=0,eo=t),Ol)},movementY:function(t){return"movementY"in t?t.movementY:Bl}}),ed=Dn(ea),ag=re({},ea,{dataTransfer:0}),lg=Dn(ag),ug=re({},Js,{relatedTarget:0}),kl=Dn(ug),cg=re({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),fg=Dn(cg),dg=re({},Jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hg=Dn(dg),pg=re({},Jr,{data:0}),td=Dn(pg),mg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_g={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=_g[t])?!!i[t]:!1}function zl(){return vg}var xg=re({},Js,{key:function(t){if(t.key){var i=mg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zl,charCode:function(t){return t.type==="keypress"?Qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sg=Dn(xg),yg=re({},ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nd=Dn(yg),Mg=re({},Js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zl}),Eg=Dn(Mg),Tg=re({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),wg=Dn(Tg),Ag=re({},ea,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rg=Dn(Ag),Cg=[9,13,27,32],Hl=d&&"CompositionEvent"in window,to=null;d&&"documentMode"in document&&(to=document.documentMode);var Pg=d&&"TextEvent"in window&&!to,id=d&&(!Hl||to&&8<to&&11>=to),rd=" ",sd=!1;function od(t,i){switch(t){case"keyup":return Cg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ad(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function bg(t,i){switch(t){case"compositionend":return ad(i);case"keypress":return i.which!==32?null:(sd=!0,rd);case"textInput":return t=i.data,t===rd&&sd?null:t;default:return null}}function Lg(t,i){if(es)return t==="compositionend"||!Hl&&od(t,i)?(t=Qf(),Zo=Nl=Yi=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return id&&i.locale!=="ko"?null:i.data;default:return null}}var Dg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ld(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Dg[t.type]:i==="textarea"}function ud(t,i,s,l){Pe(l),i=sa(i,"onChange"),0<i.length&&(s=new Fl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var no=null,io=null;function Ug(t){Rd(t,0)}function ta(t){var i=ss(t);if(dt(i))return t}function Ig(t,i){if(t==="change")return i}var cd=!1;if(d){var Vl;if(d){var Gl="oninput"in document;if(!Gl){var fd=document.createElement("div");fd.setAttribute("oninput","return;"),Gl=typeof fd.oninput=="function"}Vl=Gl}else Vl=!1;cd=Vl&&(!document.documentMode||9<document.documentMode)}function dd(){no&&(no.detachEvent("onpropertychange",hd),io=no=null)}function hd(t){if(t.propertyName==="value"&&ta(io)){var i=[];ud(i,io,t,V(t)),Mn(Ug,i)}}function Ng(t,i,s){t==="focusin"?(dd(),no=i,io=s,no.attachEvent("onpropertychange",hd)):t==="focusout"&&dd()}function Fg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ta(io)}function Og(t,i){if(t==="click")return ta(i)}function Bg(t,i){if(t==="input"||t==="change")return ta(i)}function kg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var $n=typeof Object.is=="function"?Object.is:kg;function ro(t,i){if($n(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!p.call(i,c)||!$n(t[c],i[c]))return!1}return!0}function pd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function md(t,i){var s=pd(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=pd(s)}}function gd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?gd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function _d(){for(var t=window,i=bt();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=bt(t.document)}return i}function Wl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function zg(t){var i=_d(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&gd(s.ownerDocument.documentElement,s)){if(l!==null&&Wl(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=s.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=md(s,h);var E=md(s,l);c&&E&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Hg=d&&"documentMode"in document&&11>=document.documentMode,ts=null,Xl=null,so=null,ql=!1;function vd(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ql||ts==null||ts!==bt(l)||(l=ts,"selectionStart"in l&&Wl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),so&&ro(so,l)||(so=l,l=sa(Xl,"onSelect"),0<l.length&&(i=new Fl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=ts)))}function na(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var ns={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},Yl={},xd={};d&&(xd=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function ia(t){if(Yl[t])return Yl[t];if(!ns[t])return t;var i=ns[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in xd)return Yl[t]=i[s];return t}var Sd=ia("animationend"),yd=ia("animationiteration"),Md=ia("animationstart"),Ed=ia("transitionend"),Td=new Map,wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ji(t,i){Td.set(t,i),u(i,[t])}for(var jl=0;jl<wd.length;jl++){var $l=wd[jl],Vg=$l.toLowerCase(),Gg=$l[0].toUpperCase()+$l.slice(1);ji(Vg,"on"+Gg)}ji(Sd,"onAnimationEnd"),ji(yd,"onAnimationIteration"),ji(Md,"onAnimationStart"),ji("dblclick","onDoubleClick"),ji("focusin","onFocus"),ji("focusout","onBlur"),ji(Ed,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wg=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function Ad(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,Ho(l,i,void 0,t),t.currentTarget=null}function Rd(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var D=l[E],F=D.instance,J=D.currentTarget;if(D=D.listener,F!==h&&c.isPropagationStopped())break e;Ad(c,D,J),h=F}else for(E=0;E<l.length;E++){if(D=l[E],F=D.instance,J=D.currentTarget,D=D.listener,F!==h&&c.isPropagationStopped())break e;Ad(c,D,J),h=F}}}if(Sr)throw t=Hi,Sr=!1,Hi=null,t}function Ut(t,i){var s=i[iu];s===void 0&&(s=i[iu]=new Set);var l=t+"__bubble";s.has(l)||(Cd(i,t,2,!1),s.add(l))}function Kl(t,i,s){var l=0;i&&(l|=4),Cd(s,t,l,i)}var ra="_reactListening"+Math.random().toString(36).slice(2);function ao(t){if(!t[ra]){t[ra]=!0,r.forEach(function(s){s!=="selectionchange"&&(Wg.has(s)||Kl(s,!1,t),Kl(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ra]||(i[ra]=!0,Kl("selectionchange",!1,i))}}function Cd(t,i,s,l){switch(Zf(i)){case 1:var c=rg;break;case 4:c=sg;break;default:c=Ul}s=c.bind(null,i,s,t),c=void 0,!Kr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function Zl(t,i,s,l,c){var h=l;if(!(i&1)&&!(i&2)&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var D=l.stateNode.containerInfo;if(D===c||D.nodeType===8&&D.parentNode===c)break;if(E===4)for(E=l.return;E!==null;){var F=E.tag;if((F===3||F===4)&&(F=E.stateNode.containerInfo,F===c||F.nodeType===8&&F.parentNode===c))return;E=E.return}for(;D!==null;){if(E=yr(D),E===null)return;if(F=E.tag,F===5||F===6){l=h=E;continue e}D=D.parentNode}}l=l.return}Mn(function(){var J=h,_e=V(s),xe=[];e:{var me=Td.get(t);if(me!==void 0){var De=Fl,ze=t;switch(t){case"keypress":if(Qo(s)===0)break e;case"keydown":case"keyup":De=Sg;break;case"focusin":ze="focus",De=kl;break;case"focusout":ze="blur",De=kl;break;case"beforeblur":case"afterblur":De=kl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=Eg;break;case Sd:case yd:case Md:De=fg;break;case Ed:De=wg;break;case"scroll":De=og;break;case"wheel":De=Rg;break;case"copy":case"cut":case"paste":De=hg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=nd}var Ve=(i&4)!==0,Vt=!Ve&&t==="scroll",Y=Ve?me!==null?me+"Capture":null:me;Ve=[];for(var H=J,$;H!==null;){$=H;var Ee=$.stateNode;if($.tag===5&&Ee!==null&&($=Ee,Y!==null&&(Ee=_n(H,Y),Ee!=null&&Ve.push(lo(H,Ee,$)))),Vt)break;H=H.return}0<Ve.length&&(me=new De(me,ze,null,s,_e),xe.push({event:me,listeners:Ve}))}}if(!(i&7)){e:{if(me=t==="mouseover"||t==="pointerover",De=t==="mouseout"||t==="pointerout",me&&s!==Mt&&(ze=s.relatedTarget||s.fromElement)&&(yr(ze)||ze[xi]))break e;if((De||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,De?(ze=s.relatedTarget||s.toElement,De=J,ze=ze?yr(ze):null,ze!==null&&(Vt=li(ze),ze!==Vt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(De=null,ze=J),De!==ze)){if(Ve=ed,Ee="onMouseLeave",Y="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=nd,Ee="onPointerLeave",Y="onPointerEnter",H="pointer"),Vt=De==null?me:ss(De),$=ze==null?me:ss(ze),me=new Ve(Ee,H+"leave",De,s,_e),me.target=Vt,me.relatedTarget=$,Ee=null,yr(_e)===J&&(Ve=new Ve(Y,H+"enter",ze,s,_e),Ve.target=$,Ve.relatedTarget=Vt,Ee=Ve),Vt=Ee,De&&ze)t:{for(Ve=De,Y=ze,H=0,$=Ve;$;$=is($))H++;for($=0,Ee=Y;Ee;Ee=is(Ee))$++;for(;0<H-$;)Ve=is(Ve),H--;for(;0<$-H;)Y=is(Y),$--;for(;H--;){if(Ve===Y||Y!==null&&Ve===Y.alternate)break t;Ve=is(Ve),Y=is(Y)}Ve=null}else Ve=null;De!==null&&Pd(xe,me,De,Ve,!1),ze!==null&&Vt!==null&&Pd(xe,Vt,ze,Ve,!0)}}e:{if(me=J?ss(J):window,De=me.nodeName&&me.nodeName.toLowerCase(),De==="select"||De==="input"&&me.type==="file")var Xe=Ig;else if(ld(me))if(cd)Xe=Bg;else{Xe=Fg;var $e=Ng}else(De=me.nodeName)&&De.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Xe=Og);if(Xe&&(Xe=Xe(t,J))){ud(xe,Xe,s,_e);break e}$e&&$e(t,me,J),t==="focusout"&&($e=me._wrapperState)&&$e.controlled&&me.type==="number"&&Et(me,"number",me.value)}switch($e=J?ss(J):window,t){case"focusin":(ld($e)||$e.contentEditable==="true")&&(ts=$e,Xl=J,so=null);break;case"focusout":so=Xl=ts=null;break;case"mousedown":ql=!0;break;case"contextmenu":case"mouseup":case"dragend":ql=!1,vd(xe,s,_e);break;case"selectionchange":if(Hg)break;case"keydown":case"keyup":vd(xe,s,_e)}var Ke;if(Hl)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else es?od(t,s)&&(tt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(tt="onCompositionStart");tt&&(id&&s.locale!=="ko"&&(es||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&es&&(Ke=Qf()):(Yi=_e,Nl="value"in Yi?Yi.value:Yi.textContent,es=!0)),$e=sa(J,tt),0<$e.length&&(tt=new td(tt,t,null,s,_e),xe.push({event:tt,listeners:$e}),Ke?tt.data=Ke:(Ke=ad(s),Ke!==null&&(tt.data=Ke)))),(Ke=Pg?bg(t,s):Lg(t,s))&&(J=sa(J,"onBeforeInput"),0<J.length&&(_e=new td("onBeforeInput","beforeinput",null,s,_e),xe.push({event:_e,listeners:J}),_e.data=Ke))}Rd(xe,i)})}function lo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function sa(t,i){for(var s=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=_n(t,s),h!=null&&l.unshift(lo(t,h,c)),h=_n(t,i),h!=null&&l.push(lo(t,h,c))),t=t.return}return l}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pd(t,i,s,l,c){for(var h=i._reactName,E=[];s!==null&&s!==l;){var D=s,F=D.alternate,J=D.stateNode;if(F!==null&&F===l)break;D.tag===5&&J!==null&&(D=J,c?(F=_n(s,h),F!=null&&E.unshift(lo(s,F,D))):c||(F=_n(s,h),F!=null&&E.push(lo(s,F,D)))),s=s.return}E.length!==0&&t.push({event:i,listeners:E})}var Xg=/\r\n?/g,qg=/\u0000|\uFFFD/g;function bd(t){return(typeof t=="string"?t:""+t).replace(Xg,`
`).replace(qg,"")}function oa(t,i,s){if(i=bd(i),bd(t)!==i&&s)throw Error(n(425))}function aa(){}var Ql=null,Jl=null;function eu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,Yg=typeof clearTimeout=="function"?clearTimeout:void 0,Ld=typeof Promise=="function"?Promise:void 0,jg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ld<"u"?function(t){return Ld.resolve(null).then(t).catch($g)}:tu;function $g(t){setTimeout(function(){throw t})}function nu(t,i){var s=i,l=0;do{var c=s.nextSibling;if(t.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(l===0){t.removeChild(c),Qs(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=c}while(s);Qs(i)}function $i(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Dd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var rs=Math.random().toString(36).slice(2),ci="__reactFiber$"+rs,uo="__reactProps$"+rs,xi="__reactContainer$"+rs,iu="__reactEvents$"+rs,Kg="__reactListeners$"+rs,Zg="__reactHandles$"+rs;function yr(t){var i=t[ci];if(i)return i;for(var s=t.parentNode;s;){if(i=s[xi]||s[ci]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Dd(t);t!==null;){if(s=t[ci])return s;t=Dd(t)}return i}t=s,s=t.parentNode}return null}function co(t){return t=t[ci]||t[xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function la(t){return t[uo]||null}var ru=[],os=-1;function Ki(t){return{current:t}}function It(t){0>os||(t.current=ru[os],ru[os]=null,os--)}function Lt(t,i){os++,ru[os]=t.current,t.current=i}var Zi={},cn=Ki(Zi),En=Ki(!1),Mr=Zi;function as(t,i){var s=t.type.contextTypes;if(!s)return Zi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in s)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function Tn(t){return t=t.childContextTypes,t!=null}function ua(){It(En),It(cn)}function Ud(t,i,s){if(cn.current!==Zi)throw Error(n(168));Lt(cn,i),Lt(En,s)}function Id(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ve(t)||"Unknown",c));return re({},s,l)}function ca(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,Mr=cn.current,Lt(cn,t),Lt(En,En.current),!0}function Nd(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=Id(t,i,Mr),l.__reactInternalMemoizedMergedChildContext=t,It(En),It(cn),Lt(cn,t)):It(En),Lt(En,s)}var Si=null,fa=!1,su=!1;function Fd(t){Si===null?Si=[t]:Si.push(t)}function Qg(t){fa=!0,Fd(t)}function Qi(){if(!su&&Si!==null){su=!0;var t=0,i=vt;try{var s=Si;for(vt=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}Si=null,fa=!1}catch(c){throw Si!==null&&(Si=Si.slice(t+1)),qo(Se,Qi),c}finally{vt=i,su=!1}}return null}var ls=[],us=0,da=null,ha=0,zn=[],Hn=0,Er=null,yi=1,Mi="";function Tr(t,i){ls[us++]=ha,ls[us++]=da,da=t,ha=i}function Od(t,i,s){zn[Hn++]=yi,zn[Hn++]=Mi,zn[Hn++]=Er,Er=t;var l=yi;t=Mi;var c=32-rt(l)-1;l&=~(1<<c),s+=1;var h=32-rt(i)+c;if(30<h){var E=c-c%5;h=(l&(1<<E)-1).toString(32),l>>=E,c-=E,yi=1<<32-rt(i)+c|s<<c|l,Mi=h+t}else yi=1<<h|s<<c|l,Mi=t}function ou(t){t.return!==null&&(Tr(t,1),Od(t,1,0))}function au(t){for(;t===da;)da=ls[--us],ls[us]=null,ha=ls[--us],ls[us]=null;for(;t===Er;)Er=zn[--Hn],zn[Hn]=null,Mi=zn[--Hn],zn[Hn]=null,yi=zn[--Hn],zn[Hn]=null}var Un=null,In=null,Ft=!1,Kn=null;function Bd(t,i){var s=Xn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function kd(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Un=t,In=$i(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Un=t,In=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Er!==null?{id:yi,overflow:Mi}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Xn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,Un=t,In=null,!0):!1;default:return!1}}function lu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uu(t){if(Ft){var i=In;if(i){var s=i;if(!kd(t,i)){if(lu(t))throw Error(n(418));i=$i(s.nextSibling);var l=Un;i&&kd(t,i)?Bd(l,s):(t.flags=t.flags&-4097|2,Ft=!1,Un=t)}}else{if(lu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,Un=t}}}function zd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function pa(t){if(t!==Un)return!1;if(!Ft)return zd(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!eu(t.type,t.memoizedProps)),i&&(i=In)){if(lu(t))throw Hd(),Error(n(418));for(;i;)Bd(t,i),i=$i(i.nextSibling)}if(zd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){In=$i(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}In=null}}else In=Un?$i(t.stateNode.nextSibling):null;return!0}function Hd(){for(var t=In;t;)t=$i(t.nextSibling)}function cs(){In=Un=null,Ft=!1}function cu(t){Kn===null?Kn=[t]:Kn.push(t)}var Jg=C.ReactCurrentBatchConfig;function fo(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var D=c.refs;E===null?delete D[h]:D[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function ma(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Vd(t){var i=t._init;return i(t._payload)}function Gd(t){function i(Y,H){if(t){var $=Y.deletions;$===null?(Y.deletions=[H],Y.flags|=16):$.push(H)}}function s(Y,H){if(!t)return null;for(;H!==null;)i(Y,H),H=H.sibling;return null}function l(Y,H){for(Y=new Map;H!==null;)H.key!==null?Y.set(H.key,H):Y.set(H.index,H),H=H.sibling;return Y}function c(Y,H){return Y=or(Y,H),Y.index=0,Y.sibling=null,Y}function h(Y,H,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<H?(Y.flags|=2,H):$):(Y.flags|=2,H)):(Y.flags|=1048576,H)}function E(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function D(Y,H,$,Ee){return H===null||H.tag!==6?(H=tc($,Y.mode,Ee),H.return=Y,H):(H=c(H,$),H.return=Y,H)}function F(Y,H,$,Ee){var Xe=$.type;return Xe===U?_e(Y,H,$.props.children,Ee,$.key):H!==null&&(H.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&Vd(Xe)===H.type)?(Ee=c(H,$.props),Ee.ref=fo(Y,H,$),Ee.return=Y,Ee):(Ee=ka($.type,$.key,$.props,null,Y.mode,Ee),Ee.ref=fo(Y,H,$),Ee.return=Y,Ee)}function J(Y,H,$,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==$.containerInfo||H.stateNode.implementation!==$.implementation?(H=nc($,Y.mode,Ee),H.return=Y,H):(H=c(H,$.children||[]),H.return=Y,H)}function _e(Y,H,$,Ee,Xe){return H===null||H.tag!==7?(H=Dr($,Y.mode,Ee,Xe),H.return=Y,H):(H=c(H,$),H.return=Y,H)}function xe(Y,H,$){if(typeof H=="string"&&H!==""||typeof H=="number")return H=tc(""+H,Y.mode,$),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case G:return $=ka(H.type,H.key,H.props,null,Y.mode,$),$.ref=fo(Y,null,H),$.return=Y,$;case O:return H=nc(H,Y.mode,$),H.return=Y,H;case se:var Ee=H._init;return xe(Y,Ee(H._payload),$)}if(Ge(H)||ae(H))return H=Dr(H,Y.mode,$,null),H.return=Y,H;ma(Y,H)}return null}function me(Y,H,$,Ee){var Xe=H!==null?H.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Xe!==null?null:D(Y,H,""+$,Ee);if(typeof $=="object"&&$!==null){switch($.$$typeof){case G:return $.key===Xe?F(Y,H,$,Ee):null;case O:return $.key===Xe?J(Y,H,$,Ee):null;case se:return Xe=$._init,me(Y,H,Xe($._payload),Ee)}if(Ge($)||ae($))return Xe!==null?null:_e(Y,H,$,Ee,null);ma(Y,$)}return null}function De(Y,H,$,Ee,Xe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get($)||null,D(H,Y,""+Ee,Xe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case G:return Y=Y.get(Ee.key===null?$:Ee.key)||null,F(H,Y,Ee,Xe);case O:return Y=Y.get(Ee.key===null?$:Ee.key)||null,J(H,Y,Ee,Xe);case se:var $e=Ee._init;return De(Y,H,$,$e(Ee._payload),Xe)}if(Ge(Ee)||ae(Ee))return Y=Y.get($)||null,_e(H,Y,Ee,Xe,null);ma(H,Ee)}return null}function ze(Y,H,$,Ee){for(var Xe=null,$e=null,Ke=H,tt=H=0,nn=null;Ke!==null&&tt<$.length;tt++){Ke.index>tt?(nn=Ke,Ke=null):nn=Ke.sibling;var St=me(Y,Ke,$[tt],Ee);if(St===null){Ke===null&&(Ke=nn);break}t&&Ke&&St.alternate===null&&i(Y,Ke),H=h(St,H,tt),$e===null?Xe=St:$e.sibling=St,$e=St,Ke=nn}if(tt===$.length)return s(Y,Ke),Ft&&Tr(Y,tt),Xe;if(Ke===null){for(;tt<$.length;tt++)Ke=xe(Y,$[tt],Ee),Ke!==null&&(H=h(Ke,H,tt),$e===null?Xe=Ke:$e.sibling=Ke,$e=Ke);return Ft&&Tr(Y,tt),Xe}for(Ke=l(Y,Ke);tt<$.length;tt++)nn=De(Ke,Y,tt,$[tt],Ee),nn!==null&&(t&&nn.alternate!==null&&Ke.delete(nn.key===null?tt:nn.key),H=h(nn,H,tt),$e===null?Xe=nn:$e.sibling=nn,$e=nn);return t&&Ke.forEach(function(ar){return i(Y,ar)}),Ft&&Tr(Y,tt),Xe}function Ve(Y,H,$,Ee){var Xe=ae($);if(typeof Xe!="function")throw Error(n(150));if($=Xe.call($),$==null)throw Error(n(151));for(var $e=Xe=null,Ke=H,tt=H=0,nn=null,St=$.next();Ke!==null&&!St.done;tt++,St=$.next()){Ke.index>tt?(nn=Ke,Ke=null):nn=Ke.sibling;var ar=me(Y,Ke,St.value,Ee);if(ar===null){Ke===null&&(Ke=nn);break}t&&Ke&&ar.alternate===null&&i(Y,Ke),H=h(ar,H,tt),$e===null?Xe=ar:$e.sibling=ar,$e=ar,Ke=nn}if(St.done)return s(Y,Ke),Ft&&Tr(Y,tt),Xe;if(Ke===null){for(;!St.done;tt++,St=$.next())St=xe(Y,St.value,Ee),St!==null&&(H=h(St,H,tt),$e===null?Xe=St:$e.sibling=St,$e=St);return Ft&&Tr(Y,tt),Xe}for(Ke=l(Y,Ke);!St.done;tt++,St=$.next())St=De(Ke,Y,tt,St.value,Ee),St!==null&&(t&&St.alternate!==null&&Ke.delete(St.key===null?tt:St.key),H=h(St,H,tt),$e===null?Xe=St:$e.sibling=St,$e=St);return t&&Ke.forEach(function(L_){return i(Y,L_)}),Ft&&Tr(Y,tt),Xe}function Vt(Y,H,$,Ee){if(typeof $=="object"&&$!==null&&$.type===U&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case G:e:{for(var Xe=$.key,$e=H;$e!==null;){if($e.key===Xe){if(Xe=$.type,Xe===U){if($e.tag===7){s(Y,$e.sibling),H=c($e,$.props.children),H.return=Y,Y=H;break e}}else if($e.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&Vd(Xe)===$e.type){s(Y,$e.sibling),H=c($e,$.props),H.ref=fo(Y,$e,$),H.return=Y,Y=H;break e}s(Y,$e);break}else i(Y,$e);$e=$e.sibling}$.type===U?(H=Dr($.props.children,Y.mode,Ee,$.key),H.return=Y,Y=H):(Ee=ka($.type,$.key,$.props,null,Y.mode,Ee),Ee.ref=fo(Y,H,$),Ee.return=Y,Y=Ee)}return E(Y);case O:e:{for($e=$.key;H!==null;){if(H.key===$e)if(H.tag===4&&H.stateNode.containerInfo===$.containerInfo&&H.stateNode.implementation===$.implementation){s(Y,H.sibling),H=c(H,$.children||[]),H.return=Y,Y=H;break e}else{s(Y,H);break}else i(Y,H);H=H.sibling}H=nc($,Y.mode,Ee),H.return=Y,Y=H}return E(Y);case se:return $e=$._init,Vt(Y,H,$e($._payload),Ee)}if(Ge($))return ze(Y,H,$,Ee);if(ae($))return Ve(Y,H,$,Ee);ma(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,H!==null&&H.tag===6?(s(Y,H.sibling),H=c(H,$),H.return=Y,Y=H):(s(Y,H),H=tc($,Y.mode,Ee),H.return=Y,Y=H),E(Y)):s(Y,H)}return Vt}var fs=Gd(!0),Wd=Gd(!1),ga=Ki(null),_a=null,ds=null,fu=null;function du(){fu=ds=_a=null}function hu(t){var i=ga.current;It(ga),t._currentValue=i}function pu(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function hs(t,i){_a=t,fu=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(wn=!0),t.firstContext=null)}function Vn(t){var i=t._currentValue;if(fu!==t)if(t={context:t,memoizedValue:i,next:null},ds===null){if(_a===null)throw Error(n(308));ds=t,_a.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return i}var wr=null;function mu(t){wr===null?wr=[t]:wr.push(t)}function Xd(t,i,s,l){var c=i.interleaved;return c===null?(s.next=s,mu(i)):(s.next=c.next,c.next=s),i.interleaved=s,Ei(t,l)}function Ei(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var Ji=!1;function gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function er(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,xt&2){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ei(t,s)}return c=l.interleaved,c===null?(i.next=i,mu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ei(t,s)}function va(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Jt(t,s)}}function Yd(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var E={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?c=h=E:h=h.next=E,s=s.next}while(s!==null);h===null?c=h=i:h=h.next=i}else c=h=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function xa(t,i,s,l){var c=t.updateQueue;Ji=!1;var h=c.firstBaseUpdate,E=c.lastBaseUpdate,D=c.shared.pending;if(D!==null){c.shared.pending=null;var F=D,J=F.next;F.next=null,E===null?h=J:E.next=J,E=F;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,D=_e.lastBaseUpdate,D!==E&&(D===null?_e.firstBaseUpdate=J:D.next=J,_e.lastBaseUpdate=F))}if(h!==null){var xe=c.baseState;E=0,_e=J=F=null,D=h;do{var me=D.lane,De=D.eventTime;if((l&me)===me){_e!==null&&(_e=_e.next={eventTime:De,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ze=t,Ve=D;switch(me=i,De=s,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){xe=ze.call(De,xe,me);break e}xe=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,me=typeof ze=="function"?ze.call(De,xe,me):ze,me==null)break e;xe=re({},xe,me);break e;case 2:Ji=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,me=c.effects,me===null?c.effects=[D]:me.push(D))}else De={eventTime:De,lane:me,tag:D.tag,payload:D.payload,callback:D.callback,next:null},_e===null?(J=_e=De,F=xe):_e=_e.next=De,E|=me;if(D=D.next,D===null){if(D=c.shared.pending,D===null)break;me=D,D=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);if(_e===null&&(F=xe),c.baseState=F,c.firstBaseUpdate=J,c.lastBaseUpdate=_e,i=c.shared.interleaved,i!==null){c=i;do E|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Cr|=E,t.lanes=E,t.memoizedState=xe}}function jd(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=s,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var ho={},fi=Ki(ho),po=Ki(ho),mo=Ki(ho);function Ar(t){if(t===ho)throw Error(n(174));return t}function _u(t,i){switch(Lt(mo,i),Lt(po,t),Lt(fi,ho),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=We(i,t)}It(fi),Lt(fi,i)}function ps(){It(fi),It(po),It(mo)}function $d(t){Ar(mo.current);var i=Ar(fi.current),s=We(i,t.type);i!==s&&(Lt(po,t),Lt(fi,s))}function vu(t){po.current===t&&(It(fi),It(po))}var Ot=Ki(0);function Sa(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var xu=[];function Su(){for(var t=0;t<xu.length;t++)xu[t]._workInProgressVersionPrimary=null;xu.length=0}var ya=C.ReactCurrentDispatcher,yu=C.ReactCurrentBatchConfig,Rr=0,Bt=null,jt=null,en=null,Ma=!1,go=!1,_o=0,e_=0;function fn(){throw Error(n(321))}function Mu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!$n(t[s],i[s]))return!1;return!0}function Eu(t,i,s,l,c,h){if(Rr=h,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ya.current=t===null||t.memoizedState===null?r_:s_,t=s(l,c),go){h=0;do{if(go=!1,_o=0,25<=h)throw Error(n(301));h+=1,en=jt=null,i.updateQueue=null,ya.current=o_,t=s(l,c)}while(go)}if(ya.current=wa,i=jt!==null&&jt.next!==null,Rr=0,en=jt=Bt=null,Ma=!1,i)throw Error(n(300));return t}function Tu(){var t=_o!==0;return _o=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?Bt.memoizedState=en=t:en=en.next=t,en}function Gn(){if(jt===null){var t=Bt.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var i=en===null?Bt.memoizedState:en.next;if(i!==null)en=i,jt=t;else{if(t===null)throw Error(n(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},en===null?Bt.memoizedState=en=t:en=en.next=t}return en}function vo(t,i){return typeof i=="function"?i(t):i}function wu(t){var i=Gn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=jt,c=l.baseQueue,h=s.pending;if(h!==null){if(c!==null){var E=c.next;c.next=h.next,h.next=E}l.baseQueue=c=h,s.pending=null}if(c!==null){h=c.next,l=l.baseState;var D=E=null,F=null,J=h;do{var _e=J.lane;if((Rr&_e)===_e)F!==null&&(F=F.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),l=J.hasEagerState?J.eagerState:t(l,J.action);else{var xe={lane:_e,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};F===null?(D=F=xe,E=l):F=F.next=xe,Bt.lanes|=_e,Cr|=_e}J=J.next}while(J!==null&&J!==h);F===null?E=l:F.next=D,$n(l,i.memoizedState)||(wn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=F,s.lastRenderedState=l}if(t=s.interleaved,t!==null){c=t;do h=c.lane,Bt.lanes|=h,Cr|=h,c=c.next;while(c!==t)}else c===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Au(t){var i=Gn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,h=i.memoizedState;if(c!==null){s.pending=null;var E=c=c.next;do h=t(h,E.action),E=E.next;while(E!==c);$n(h,i.memoizedState)||(wn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function Kd(){}function Zd(t,i){var s=Bt,l=Gn(),c=i(),h=!$n(l.memoizedState,c);if(h&&(l.memoizedState=c,wn=!0),l=l.queue,Ru(eh.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||en!==null&&en.memoizedState.tag&1){if(s.flags|=2048,xo(9,Jd.bind(null,s,l,c,i),void 0,null),tn===null)throw Error(n(349));Rr&30||Qd(s,i,c)}return c}function Qd(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Jd(t,i,s,l){i.value=s,i.getSnapshot=l,th(i)&&nh(t)}function eh(t,i,s){return s(function(){th(i)&&nh(t)})}function th(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!$n(t,s)}catch{return!0}}function nh(t){var i=Ei(t,1);i!==null&&ei(i,t,1,-1)}function ih(t){var i=di();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:t},i.queue=t,t=t.dispatch=i_.bind(null,Bt,t),[i.memoizedState,t]}function xo(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function rh(){return Gn().memoizedState}function Ea(t,i,s,l){var c=di();Bt.flags|=t,c.memoizedState=xo(1|i,s,void 0,l===void 0?null:l)}function Ta(t,i,s,l){var c=Gn();l=l===void 0?null:l;var h=void 0;if(jt!==null){var E=jt.memoizedState;if(h=E.destroy,l!==null&&Mu(l,E.deps)){c.memoizedState=xo(i,s,h,l);return}}Bt.flags|=t,c.memoizedState=xo(1|i,s,h,l)}function sh(t,i){return Ea(8390656,8,t,i)}function Ru(t,i){return Ta(2048,8,t,i)}function oh(t,i){return Ta(4,2,t,i)}function ah(t,i){return Ta(4,4,t,i)}function lh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function uh(t,i,s){return s=s!=null?s.concat([t]):null,Ta(4,4,lh.bind(null,i,t),s)}function Cu(){}function ch(t,i){var s=Gn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Mu(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function fh(t,i){var s=Gn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Mu(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function dh(t,i,s){return Rr&21?($n(s,i)||(s=Rt(),Bt.lanes|=s,Cr|=s,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,wn=!0),t.memoizedState=s)}function t_(t,i){var s=vt;vt=s!==0&&4>s?s:4,t(!0);var l=yu.transition;yu.transition={};try{t(!1),i()}finally{vt=s,yu.transition=l}}function hh(){return Gn().memoizedState}function n_(t,i,s){var l=rr(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},ph(t))mh(i,s);else if(s=Xd(t,i,s,l),s!==null){var c=Sn();ei(s,t,l,c),gh(s,i,l)}}function i_(t,i,s){var l=rr(t),c={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(ph(t))mh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,D=h(E,s);if(c.hasEagerState=!0,c.eagerState=D,$n(D,E)){var F=i.interleaved;F===null?(c.next=c,mu(i)):(c.next=F.next,F.next=c),i.interleaved=c;return}}catch{}finally{}s=Xd(t,i,c,l),s!==null&&(c=Sn(),ei(s,t,l,c),gh(s,i,l))}}function ph(t){var i=t.alternate;return t===Bt||i!==null&&i===Bt}function mh(t,i){go=Ma=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function gh(t,i,s){if(s&4194240){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Jt(t,s)}}var wa={readContext:Vn,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},r_={readContext:Vn,useCallback:function(t,i){return di().memoizedState=[t,i===void 0?null:i],t},useContext:Vn,useEffect:sh,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,Ea(4194308,4,lh.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Ea(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ea(4,2,t,i)},useMemo:function(t,i){var s=di();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=di();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=n_.bind(null,Bt,t),[l.memoizedState,t]},useRef:function(t){var i=di();return t={current:t},i.memoizedState=t},useState:ih,useDebugValue:Cu,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=ih(!1),i=t[0];return t=t_.bind(null,t[1]),di().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Bt,c=di();if(Ft){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),tn===null)throw Error(n(349));Rr&30||Qd(l,i,s)}c.memoizedState=s;var h={value:s,getSnapshot:i};return c.queue=h,sh(eh.bind(null,l,h,t),[t]),l.flags|=2048,xo(9,Jd.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=di(),i=tn.identifierPrefix;if(Ft){var s=Mi,l=yi;s=(l&~(1<<32-rt(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=_o++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=e_++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},s_={readContext:Vn,useCallback:ch,useContext:Vn,useEffect:Ru,useImperativeHandle:uh,useInsertionEffect:oh,useLayoutEffect:ah,useMemo:fh,useReducer:wu,useRef:rh,useState:function(){return wu(vo)},useDebugValue:Cu,useDeferredValue:function(t){var i=Gn();return dh(i,jt.memoizedState,t)},useTransition:function(){var t=wu(vo)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:Kd,useSyncExternalStore:Zd,useId:hh,unstable_isNewReconciler:!1},o_={readContext:Vn,useCallback:ch,useContext:Vn,useEffect:Ru,useImperativeHandle:uh,useInsertionEffect:oh,useLayoutEffect:ah,useMemo:fh,useReducer:Au,useRef:rh,useState:function(){return Au(vo)},useDebugValue:Cu,useDeferredValue:function(t){var i=Gn();return jt===null?i.memoizedState=t:dh(i,jt.memoizedState,t)},useTransition:function(){var t=Au(vo)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:Kd,useSyncExternalStore:Zd,useId:hh,unstable_isNewReconciler:!1};function Zn(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function Pu(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:re({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Aa={isMounted:function(t){return(t=t._reactInternals)?li(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=Sn(),c=rr(t),h=Ti(l,c);h.payload=i,s!=null&&(h.callback=s),i=er(t,h,c),i!==null&&(ei(i,t,c,l),va(i,t,c))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=Sn(),c=rr(t),h=Ti(l,c);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=er(t,h,c),i!==null&&(ei(i,t,c,l),va(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Sn(),l=rr(t),c=Ti(s,l);c.tag=2,i!=null&&(c.callback=i),i=er(t,c,l),i!==null&&(ei(i,t,l,s),va(i,t,l))}};function _h(t,i,s,l,c,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!ro(s,l)||!ro(c,h):!0}function vh(t,i,s){var l=!1,c=Zi,h=i.contextType;return typeof h=="object"&&h!==null?h=Vn(h):(c=Tn(i)?Mr:cn.current,l=i.contextTypes,h=(l=l!=null)?as(t,c):Zi),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Aa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function xh(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Aa.enqueueReplaceState(i,i.state,null)}function bu(t,i,s,l){var c=t.stateNode;c.props=s,c.state=t.memoizedState,c.refs={},gu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Vn(h):(h=Tn(i)?Mr:cn.current,c.context=as(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Pu(t,i,h,s),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Aa.enqueueReplaceState(c,c.state,null),xa(t,s,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,i){try{var s="",l=i;do s+=de(l),l=l.return;while(l);var c=s}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Lu(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Du(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var a_=typeof WeakMap=="function"?WeakMap:Map;function Sh(t,i,s){s=Ti(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Ua||(Ua=!0,Yu=l),Du(t,i)},s}function yh(t,i,s){s=Ti(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;s.payload=function(){return l(c)},s.callback=function(){Du(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){Du(t,i),typeof l!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),s}function Mh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new a_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||(c.add(s),t=y_.bind(null,t,i,s),i.then(t,t))}function Eh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Th(t,i,s,l,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ti(-1,1),i.tag=2,er(s,i,1))),s.lanes|=1),t)}var l_=C.ReactCurrentOwner,wn=!1;function xn(t,i,s,l){i.child=t===null?Wd(i,null,s,l):fs(i,t.child,s,l)}function wh(t,i,s,l,c){s=s.render;var h=i.ref;return hs(i,c),l=Eu(t,i,s,l,h,c),s=Tu(),t!==null&&!wn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,wi(t,i,c)):(Ft&&s&&ou(i),i.flags|=1,xn(t,i,l,c),i.child)}function Ah(t,i,s,l,c){if(t===null){var h=s.type;return typeof h=="function"&&!ec(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,Rh(t,i,h,l,c)):(t=ka(s.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&c)){var E=h.memoizedProps;if(s=s.compare,s=s!==null?s:ro,s(E,l)&&t.ref===i.ref)return wi(t,i,c)}return i.flags|=1,t=or(h,l),t.ref=i.ref,t.return=i,i.child=t}function Rh(t,i,s,l,c){if(t!==null){var h=t.memoizedProps;if(ro(h,l)&&t.ref===i.ref)if(wn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)t.flags&131072&&(wn=!0);else return i.lanes=t.lanes,wi(t,i,c)}return Uu(t,i,s,l,c)}function Ch(t,i,s){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(_s,Nn),Nn|=s;else{if(!(s&1073741824))return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(_s,Nn),Nn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Lt(_s,Nn),Nn|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,Lt(_s,Nn),Nn|=l;return xn(t,i,c,s),i.child}function Ph(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Uu(t,i,s,l,c){var h=Tn(s)?Mr:cn.current;return h=as(i,h),hs(i,c),s=Eu(t,i,s,l,h,c),l=Tu(),t!==null&&!wn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,wi(t,i,c)):(Ft&&l&&ou(i),i.flags|=1,xn(t,i,s,c),i.child)}function bh(t,i,s,l,c){if(Tn(s)){var h=!0;ca(i)}else h=!1;if(hs(i,c),i.stateNode===null)Ca(t,i),vh(i,s,l),bu(i,s,l,c),l=!0;else if(t===null){var E=i.stateNode,D=i.memoizedProps;E.props=D;var F=E.context,J=s.contextType;typeof J=="object"&&J!==null?J=Vn(J):(J=Tn(s)?Mr:cn.current,J=as(i,J));var _e=s.getDerivedStateFromProps,xe=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==l||F!==J)&&xh(i,E,l,J),Ji=!1;var me=i.memoizedState;E.state=me,xa(i,l,E,c),F=i.memoizedState,D!==l||me!==F||En.current||Ji?(typeof _e=="function"&&(Pu(i,s,_e,l),F=i.memoizedState),(D=Ji||_h(i,s,D,l,me,F,J))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),E.props=l,E.state=F,E.context=J,l=D):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,qd(t,i),D=i.memoizedProps,J=i.type===i.elementType?D:Zn(i.type,D),E.props=J,xe=i.pendingProps,me=E.context,F=s.contextType,typeof F=="object"&&F!==null?F=Vn(F):(F=Tn(s)?Mr:cn.current,F=as(i,F));var De=s.getDerivedStateFromProps;(_e=typeof De=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==xe||me!==F)&&xh(i,E,l,F),Ji=!1,me=i.memoizedState,E.state=me,xa(i,l,E,c);var ze=i.memoizedState;D!==xe||me!==ze||En.current||Ji?(typeof De=="function"&&(Pu(i,s,De,l),ze=i.memoizedState),(J=Ji||_h(i,s,J,l,me,ze,F)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,ze,F),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,ze,F)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),E.props=l,E.state=ze,E.context=F,l=J):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Iu(t,i,s,l,h,c)}function Iu(t,i,s,l,c,h){Ph(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return c&&Nd(i,s,!1),wi(t,i,h);l=i.stateNode,l_.current=i;var D=E&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=fs(i,t.child,null,h),i.child=fs(i,null,D,h)):xn(t,i,D,h),i.memoizedState=l.state,c&&Nd(i,s,!0),i.child}function Lh(t){var i=t.stateNode;i.pendingContext?Ud(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Ud(t,i.context,!1),_u(t,i.containerInfo)}function Dh(t,i,s,l,c){return cs(),cu(c),i.flags|=256,xn(t,i,s,l),i.child}var Nu={dehydrated:null,treeContext:null,retryLane:0};function Fu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Uh(t,i,s){var l=i.pendingProps,c=Ot.current,h=!1,E=(i.flags&128)!==0,D;if((D=E)||(D=t!==null&&t.memoizedState===null?!1:(c&2)!==0),D?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Lt(Ot,c&1),t===null)return uu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(E=l.children,t=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},!(l&1)&&h!==null?(h.childLanes=0,h.pendingProps=E):h=za(E,l,0,null),t=Dr(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Fu(s),i.memoizedState=Nu,t):Ou(i,E));if(c=t.memoizedState,c!==null&&(D=c.dehydrated,D!==null))return u_(t,i,E,l,D,c,s);if(h){h=l.fallback,E=i.mode,c=t.child,D=c.sibling;var F={mode:"hidden",children:l.children};return!(E&1)&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=F,i.deletions=null):(l=or(c,F),l.subtreeFlags=c.subtreeFlags&14680064),D!==null?h=or(D,h):(h=Dr(h,E,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E=E===null?Fu(s):{baseLanes:E.baseLanes|s,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~s,i.memoizedState=Nu,l}return h=t.child,t=h.sibling,l=or(h,{mode:"visible",children:l.children}),!(i.mode&1)&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function Ou(t,i){return i=za({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ra(t,i,s,l){return l!==null&&cu(l),fs(i,t.child,null,s),t=Ou(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function u_(t,i,s,l,c,h,E){if(s)return i.flags&256?(i.flags&=-257,l=Lu(Error(n(422))),Ra(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=za({mode:"visible",children:l.children},c,0,null),h=Dr(h,c,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,i.mode&1&&fs(i,t.child,null,E),i.child.memoizedState=Fu(E),i.memoizedState=Nu,h);if(!(i.mode&1))return Ra(t,i,E,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var D=l.dgst;return l=D,h=Error(n(419)),l=Lu(h,l,void 0),Ra(t,i,E,l)}if(D=(E&t.childLanes)!==0,wn||D){if(l=tn,l!==null){switch(E&-E){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(l.suspendedLanes|E)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ei(t,c),ei(l,t,c,-1))}return Ju(),l=Lu(Error(n(421))),Ra(t,i,E,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=M_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,In=$i(c.nextSibling),Un=i,Ft=!0,Kn=null,t!==null&&(zn[Hn++]=yi,zn[Hn++]=Mi,zn[Hn++]=Er,yi=t.id,Mi=t.overflow,Er=i),i=Ou(i,l.children),i.flags|=4096,i)}function Ih(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),pu(t.return,i,s)}function Bu(t,i,s,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=c)}function Nh(t,i,s){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(xn(t,i,l.children,s),l=Ot.current,l&2)l=l&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ih(t,s,i);else if(t.tag===19)Ih(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Lt(Ot,l),!(i.mode&1))i.memoizedState=null;else switch(c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&Sa(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),Bu(i,!1,c,s,h);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Sa(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}Bu(i,!0,s,null,h);break;case"together":Bu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ca(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function wi(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Cr|=i.lanes,!(s&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=or(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=or(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function c_(t,i,s){switch(i.tag){case 3:Lh(i),cs();break;case 5:$d(i);break;case 1:Tn(i.type)&&ca(i);break;case 4:_u(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Lt(ga,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(Ot,Ot.current&1),i.flags|=128,null):s&i.child.childLanes?Uh(t,i,s):(Lt(Ot,Ot.current&1),t=wi(t,i,s),t!==null?t.sibling:null);Lt(Ot,Ot.current&1);break;case 19:if(l=(s&i.childLanes)!==0,t.flags&128){if(l)return Nh(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Lt(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,Ch(t,i,s)}return wi(t,i,s)}var Fh,ku,Oh,Bh;Fh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},ku=function(){},Oh=function(t,i,s,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Ar(fi.current);var h=null;switch(s){case"input":c=B(t,c),l=B(t,l),h=[];break;case"select":c=re({},c,{value:void 0}),l=re({},l,{value:void 0}),h=[];break;case"textarea":c=w(t,c),l=w(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=aa)}ut(s,l);var E;s=null;for(J in c)if(!l.hasOwnProperty(J)&&c.hasOwnProperty(J)&&c[J]!=null)if(J==="style"){var D=c[J];for(E in D)D.hasOwnProperty(E)&&(s||(s={}),s[E]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(a.hasOwnProperty(J)?h||(h=[]):(h=h||[]).push(J,null));for(J in l){var F=l[J];if(D=c!=null?c[J]:void 0,l.hasOwnProperty(J)&&F!==D&&(F!=null||D!=null))if(J==="style")if(D){for(E in D)!D.hasOwnProperty(E)||F&&F.hasOwnProperty(E)||(s||(s={}),s[E]="");for(E in F)F.hasOwnProperty(E)&&D[E]!==F[E]&&(s||(s={}),s[E]=F[E])}else s||(h||(h=[]),h.push(J,s)),s=F;else J==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,D=D?D.__html:void 0,F!=null&&D!==F&&(h=h||[]).push(J,F)):J==="children"?typeof F!="string"&&typeof F!="number"||(h=h||[]).push(J,""+F):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(a.hasOwnProperty(J)?(F!=null&&J==="onScroll"&&Ut("scroll",t),h||D===F||(h=[])):(h=h||[]).push(J,F))}s&&(h=h||[]).push("style",s);var J=h;(i.updateQueue=J)&&(i.flags|=4)}},Bh=function(t,i,s,l){s!==l&&(i.flags|=4)};function So(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function f_(t,i,s){var l=i.pendingProps;switch(au(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return Tn(i.type)&&ua(),dn(i),null;case 3:return l=i.stateNode,ps(),It(En),It(cn),Su(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(pa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Kn!==null&&(Ku(Kn),Kn=null))),ku(t,i),dn(i),null;case 5:vu(i);var c=Ar(mo.current);if(s=i.type,t!==null&&i.stateNode!=null)Oh(t,i,s,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return dn(i),null}if(t=Ar(fi.current),pa(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[ci]=i,l[uo]=h,t=(i.mode&1)!==0,s){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(c=0;c<oo.length;c++)Ut(oo[c],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":gn(l,h),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ut("invalid",l);break;case"textarea":K(l,h),Ut("invalid",l)}ut(s,h),c=null;for(var E in h)if(h.hasOwnProperty(E)){var D=h[E];E==="children"?typeof D=="string"?l.textContent!==D&&(h.suppressHydrationWarning!==!0&&oa(l.textContent,D,t),c=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(h.suppressHydrationWarning!==!0&&oa(l.textContent,D,t),c=["children",""+D]):a.hasOwnProperty(E)&&D!=null&&E==="onScroll"&&Ut("scroll",l)}switch(s){case"input":Tt(l),qe(l,h,!0);break;case"textarea":Tt(l),ge(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=aa)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ue(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(s,{is:l.is}):(t=E.createElement(s),s==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,s),t[ci]=i,t[uo]=l,Fh(t,i,!1,!1),i.stateNode=t;e:{switch(E=nt(s,l),s){case"dialog":Ut("cancel",t),Ut("close",t),c=l;break;case"iframe":case"object":case"embed":Ut("load",t),c=l;break;case"video":case"audio":for(c=0;c<oo.length;c++)Ut(oo[c],t);c=l;break;case"source":Ut("error",t),c=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),c=l;break;case"details":Ut("toggle",t),c=l;break;case"input":gn(t,l),c=B(t,l),Ut("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=re({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":K(t,l),c=w(t,l),Ut("invalid",t);break;default:c=l}ut(s,c),D=c;for(h in D)if(D.hasOwnProperty(h)){var F=D[h];h==="style"?Je(t,F):h==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Ne(t,F)):h==="children"?typeof F=="string"?(s!=="textarea"||F!=="")&&at(t,F):typeof F=="number"&&at(t,""+F):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?F!=null&&h==="onScroll"&&Ut("scroll",t):F!=null&&L(t,h,F,E))}switch(s){case"input":Tt(t),qe(t,l,!1);break;case"textarea":Tt(t),ge(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Te(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?b(t,!!l.multiple,h,!1):l.defaultValue!=null&&b(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=aa)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(t&&i.stateNode!=null)Bh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Ar(mo.current),Ar(fi.current),pa(i)){if(l=i.stateNode,s=i.memoizedProps,l[ci]=i,(h=l.nodeValue!==s)&&(t=Un,t!==null))switch(t.tag){case 3:oa(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oa(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[ci]=i,i.stateNode=l}return dn(i),null;case 13:if(It(Ot),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&In!==null&&i.mode&1&&!(i.flags&128))Hd(),cs(),i.flags|=98560,h=!1;else if(h=pa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ci]=i}else cs(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;dn(i),h=!1}else Kn!==null&&(Ku(Kn),Kn=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,i.mode&1&&(t===null||Ot.current&1?$t===0&&($t=3):Ju())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return ps(),ku(t,i),t===null&&ao(i.stateNode.containerInfo),dn(i),null;case 10:return hu(i.type._context),dn(i),null;case 17:return Tn(i.type)&&ua(),dn(i),null;case 19:if(It(Ot),h=i.memoizedState,h===null)return dn(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)So(h,!1);else{if($t!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(E=Sa(t),E!==null){for(i.flags|=128,So(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Lt(Ot,Ot.current&1|2),i.child}t=t.sibling}h.tail!==null&&j()>vs&&(i.flags|=128,l=!0,So(h,!1),i.lanes=4194304)}else{if(!l)if(t=Sa(E),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),So(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!Ft)return dn(i),null}else 2*j()-h.renderingStartTime>vs&&s!==1073741824&&(i.flags|=128,l=!0,So(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(s=h.last,s!==null?s.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=j(),i.sibling=null,s=Ot.current,Lt(Ot,l?s&1|2:s&1),i):(dn(i),null);case 22:case 23:return Qu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&i.mode&1?Nn&1073741824&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function d_(t,i){switch(au(i),i.tag){case 1:return Tn(i.type)&&ua(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ps(),It(En),It(cn),Su(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return vu(i),null;case 13:if(It(Ot),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));cs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(Ot),null;case 4:return ps(),null;case 10:return hu(i.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var Pa=!1,hn=!1,h_=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function gs(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Ht(t,i,l)}else s.current=null}function zu(t,i,s){try{s()}catch(l){Ht(t,i,l)}}var kh=!1;function p_(t,i){if(Ql=$o,t=_d(),Wl(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var E=0,D=-1,F=-1,J=0,_e=0,xe=t,me=null;t:for(;;){for(var De;xe!==s||c!==0&&xe.nodeType!==3||(D=E+c),xe!==h||l!==0&&xe.nodeType!==3||(F=E+l),xe.nodeType===3&&(E+=xe.nodeValue.length),(De=xe.firstChild)!==null;)me=xe,xe=De;for(;;){if(xe===t)break t;if(me===s&&++J===c&&(D=E),me===h&&++_e===l&&(F=E),(De=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=De}s=D===-1||F===-1?null:{start:D,end:F}}else s=null}s=s||{start:0,end:0}}else s=null;for(Jl={focusedElem:t,selectionRange:s},$o=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var ze=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,Vt=ze.memoizedState,Y=i.stateNode,H=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:Zn(i.type,Ve),Vt);Y.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Ht(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return ze=kh,kh=!1,ze}function yo(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&zu(i,s,h)}c=c.next}while(c!==l)}}function ba(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function Hu(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function zh(t){var i=t.alternate;i!==null&&(t.alternate=null,zh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ci],delete i[uo],delete i[iu],delete i[Kg],delete i[Zg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hh(t){return t.tag===5||t.tag===3||t.tag===4}function Vh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=aa));else if(l!==4&&(t=t.child,t!==null))for(Vu(t,i,s),t=t.sibling;t!==null;)Vu(t,i,s),t=t.sibling}function Gu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Gu(t,i,s),t=t.sibling;t!==null;)Gu(t,i,s),t=t.sibling}var on=null,Qn=!1;function tr(t,i,s){for(s=s.child;s!==null;)Gh(t,i,s),s=s.sibling}function Gh(t,i,s){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Qe,s)}catch{}switch(s.tag){case 5:hn||gs(s,i);case 6:var l=on,c=Qn;on=null,tr(t,i,s),on=l,Qn=c,on!==null&&(Qn?(t=on,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):on.removeChild(s.stateNode));break;case 18:on!==null&&(Qn?(t=on,s=s.stateNode,t.nodeType===8?nu(t.parentNode,s):t.nodeType===1&&nu(t,s),Qs(t)):nu(on,s.stateNode));break;case 4:l=on,c=Qn,on=s.stateNode.containerInfo,Qn=!0,tr(t,i,s),on=l,Qn=c;break;case 0:case 11:case 14:case 15:if(!hn&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,E=h.destroy;h=h.tag,E!==void 0&&(h&2||h&4)&&zu(s,i,E),c=c.next}while(c!==l)}tr(t,i,s);break;case 1:if(!hn&&(gs(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(D){Ht(s,i,D)}tr(t,i,s);break;case 21:tr(t,i,s);break;case 22:s.mode&1?(hn=(l=hn)||s.memoizedState!==null,tr(t,i,s),hn=l):tr(t,i,s);break;default:tr(t,i,s)}}function Wh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new h_),i.forEach(function(l){var c=E_.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}}function Jn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];try{var h=t,E=i,D=E;e:for(;D!==null;){switch(D.tag){case 5:on=D.stateNode,Qn=!1;break e;case 3:on=D.stateNode.containerInfo,Qn=!0;break e;case 4:on=D.stateNode.containerInfo,Qn=!0;break e}D=D.return}if(on===null)throw Error(n(160));Gh(h,E,c),on=null,Qn=!1;var F=c.alternate;F!==null&&(F.return=null),c.return=null}catch(J){Ht(c,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Xh(i,t),i=i.sibling}function Xh(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(i,t),hi(t),l&4){try{yo(3,t,t.return),ba(3,t)}catch(Ve){Ht(t,t.return,Ve)}try{yo(5,t,t.return)}catch(Ve){Ht(t,t.return,Ve)}}break;case 1:Jn(i,t),hi(t),l&512&&s!==null&&gs(s,s.return);break;case 5:if(Jn(i,t),hi(t),l&512&&s!==null&&gs(s,s.return),t.flags&32){var c=t.stateNode;try{at(c,"")}catch(Ve){Ht(t,t.return,Ve)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,E=s!==null?s.memoizedProps:h,D=t.type,F=t.updateQueue;if(t.updateQueue=null,F!==null)try{D==="input"&&h.type==="radio"&&h.name!=null&&ft(c,h),nt(D,E);var J=nt(D,h);for(E=0;E<F.length;E+=2){var _e=F[E],xe=F[E+1];_e==="style"?Je(c,xe):_e==="dangerouslySetInnerHTML"?Ne(c,xe):_e==="children"?at(c,xe):L(c,_e,xe,J)}switch(D){case"input":lt(c,h);break;case"textarea":pe(c,h);break;case"select":var me=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var De=h.value;De!=null?b(c,!!h.multiple,De,!1):me!==!!h.multiple&&(h.defaultValue!=null?b(c,!!h.multiple,h.defaultValue,!0):b(c,!!h.multiple,h.multiple?[]:"",!1))}c[uo]=h}catch(Ve){Ht(t,t.return,Ve)}}break;case 6:if(Jn(i,t),hi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(Ve){Ht(t,t.return,Ve)}}break;case 3:if(Jn(i,t),hi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Qs(i.containerInfo)}catch(Ve){Ht(t,t.return,Ve)}break;case 4:Jn(i,t),hi(t);break;case 13:Jn(i,t),hi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(qu=j())),l&4&&Wh(t);break;case 22:if(_e=s!==null&&s.memoizedState!==null,t.mode&1?(hn=(J=hn)||_e,Jn(i,t),hn=J):Jn(i,t),hi(t),l&8192){if(J=t.memoizedState!==null,(t.stateNode.isHidden=J)&&!_e&&t.mode&1)for(Fe=t,_e=t.child;_e!==null;){for(xe=Fe=_e;Fe!==null;){switch(me=Fe,De=me.child,me.tag){case 0:case 11:case 14:case 15:yo(4,me,me.return);break;case 1:gs(me,me.return);var ze=me.stateNode;if(typeof ze.componentWillUnmount=="function"){l=me,s=me.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(Ve){Ht(l,s,Ve)}}break;case 5:gs(me,me.return);break;case 22:if(me.memoizedState!==null){jh(xe);continue}}De!==null?(De.return=me,Fe=De):jh(xe)}_e=_e.sibling}e:for(_e=null,xe=t;;){if(xe.tag===5){if(_e===null){_e=xe;try{c=xe.stateNode,J?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(D=xe.stateNode,F=xe.memoizedProps.style,E=F!=null&&F.hasOwnProperty("display")?F.display:null,D.style.display=je("display",E))}catch(Ve){Ht(t,t.return,Ve)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=J?"":xe.memoizedProps}catch(Ve){Ht(t,t.return,Ve)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:Jn(i,t),hi(t),l&4&&Wh(t);break;case 21:break;default:Jn(i,t),hi(t)}}function hi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(Hh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(at(c,""),l.flags&=-33);var h=Vh(t);Gu(t,h,c);break;case 3:case 4:var E=l.stateNode.containerInfo,D=Vh(t);Vu(t,D,E);break;default:throw Error(n(161))}}catch(F){Ht(t,t.return,F)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function m_(t,i,s){Fe=t,qh(t)}function qh(t,i,s){for(var l=(t.mode&1)!==0;Fe!==null;){var c=Fe,h=c.child;if(c.tag===22&&l){var E=c.memoizedState!==null||Pa;if(!E){var D=c.alternate,F=D!==null&&D.memoizedState!==null||hn;D=Pa;var J=hn;if(Pa=E,(hn=F)&&!J)for(Fe=c;Fe!==null;)E=Fe,F=E.child,E.tag===22&&E.memoizedState!==null?$h(c):F!==null?(F.return=E,Fe=F):$h(c);for(;h!==null;)Fe=h,qh(h),h=h.sibling;Fe=c,Pa=D,hn=J}Yh(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,Fe=h):Yh(t)}}function Yh(t){for(;Fe!==null;){var i=Fe;if(i.flags&8772){var s=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:hn||ba(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!hn)if(s===null)l.componentDidMount();else{var c=i.elementType===i.type?s.memoizedProps:Zn(i.type,s.memoizedProps);l.componentDidUpdate(c,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&jd(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}jd(i,E,s)}break;case 5:var D=i.stateNode;if(s===null&&i.flags&4){s=D;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&s.focus();break;case"img":F.src&&(s.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var _e=J.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&Qs(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}hn||i.flags&512&&Hu(i)}catch(me){Ht(i,i.return,me)}}if(i===t){Fe=null;break}if(s=i.sibling,s!==null){s.return=i.return,Fe=s;break}Fe=i.return}}function jh(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Fe=s;break}Fe=i.return}}function $h(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{ba(4,i)}catch(F){Ht(i,s,F)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(F){Ht(i,c,F)}}var h=i.return;try{Hu(i)}catch(F){Ht(i,h,F)}break;case 5:var E=i.return;try{Hu(i)}catch(F){Ht(i,E,F)}}}catch(F){Ht(i,i.return,F)}if(i===t){Fe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Fe=D;break}Fe=i.return}}var g_=Math.ceil,La=C.ReactCurrentDispatcher,Wu=C.ReactCurrentOwner,Wn=C.ReactCurrentBatchConfig,xt=0,tn=null,Wt=null,an=0,Nn=0,_s=Ki(0),$t=0,Mo=null,Cr=0,Da=0,Xu=0,Eo=null,An=null,qu=0,vs=1/0,Ai=null,Ua=!1,Yu=null,nr=null,Ia=!1,ir=null,Na=0,To=0,ju=null,Fa=-1,Oa=0;function Sn(){return xt&6?j():Fa!==-1?Fa:Fa=j()}function rr(t){return t.mode&1?xt&2&&an!==0?an&-an:Jg.transition!==null?(Oa===0&&(Oa=Rt()),Oa):(t=vt,t!==0||(t=window.event,t=t===void 0?16:Zf(t.type)),t):1}function ei(t,i,s,l){if(50<To)throw To=0,ju=null,Error(n(185));Qt(t,s,l),(!(xt&2)||t!==tn)&&(t===tn&&(!(xt&2)&&(Da|=s),$t===4&&sr(t,an)),Rn(t,l),s===1&&xt===0&&!(i.mode&1)&&(vs=j()+500,fa&&Qi()))}function Rn(t,i){var s=t.callbackNode;vn(t,i);var l=ln(t,t===tn?an:0);if(l===0)s!==null&&A(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&A(s),i===1)t.tag===0?Qg(Zh.bind(null,t)):Fd(Zh.bind(null,t)),jg(function(){!(xt&6)&&Qi()}),s=null;else{switch(ui(l)){case 1:s=Se;break;case 4:s=Re;break;case 16:s=Le;break;case 536870912:s=et;break;default:s=Le}s=sp(s,Kh.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function Kh(t,i){if(Fa=-1,Oa=0,xt&6)throw Error(n(327));var s=t.callbackNode;if(xs()&&t.callbackNode!==s)return null;var l=ln(t,t===tn?an:0);if(l===0)return null;if(l&30||l&t.expiredLanes||i)i=Ba(t,l);else{i=l;var c=xt;xt|=2;var h=Jh();(tn!==t||an!==i)&&(Ai=null,vs=j()+500,br(t,i));do try{x_();break}catch(D){Qh(t,D)}while(!0);du(),La.current=h,xt=c,Wt!==null?i=0:(tn=null,an=0,i=$t)}if(i!==0){if(i===2&&(c=vi(t),c!==0&&(l=c,i=$u(t,c))),i===1)throw s=Mo,br(t,0),sr(t,l),Rn(t,j()),s;if(i===6)sr(t,l);else{if(c=t.current.alternate,!(l&30)&&!__(c)&&(i=Ba(t,l),i===2&&(h=vi(t),h!==0&&(l=h,i=$u(t,h))),i===1))throw s=Mo,br(t,0),sr(t,l),Rn(t,j()),s;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Lr(t,An,Ai);break;case 3:if(sr(t,l),(l&130023424)===l&&(i=qu+500-j(),10<i)){if(ln(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){Sn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=tu(Lr.bind(null,t,An,Ai),i);break}Lr(t,An,Ai);break;case 4:if(sr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var E=31-rt(l);h=1<<E,E=i[E],E>c&&(c=E),l&=~h}if(l=c,l=j()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*g_(l/1960))-l,10<l){t.timeoutHandle=tu(Lr.bind(null,t,An,Ai),l);break}Lr(t,An,Ai);break;case 5:Lr(t,An,Ai);break;default:throw Error(n(329))}}}return Rn(t,j()),t.callbackNode===s?Kh.bind(null,t):null}function $u(t,i){var s=Eo;return t.current.memoizedState.isDehydrated&&(br(t,i).flags|=256),t=Ba(t,i),t!==2&&(i=An,An=s,i!==null&&Ku(i)),t}function Ku(t){An===null?An=t:An.push.apply(An,t)}function __(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var c=s[l],h=c.getSnapshot;c=c.value;try{if(!$n(h(),c))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function sr(t,i){for(i&=~Xu,i&=~Da,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-rt(i),l=1<<s;t[s]=-1,i&=~l}}function Zh(t){if(xt&6)throw Error(n(327));xs();var i=ln(t,0);if(!(i&1))return Rn(t,j()),null;var s=Ba(t,i);if(t.tag!==0&&s===2){var l=vi(t);l!==0&&(i=l,s=$u(t,l))}if(s===1)throw s=Mo,br(t,0),sr(t,i),Rn(t,j()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Lr(t,An,Ai),Rn(t,j()),null}function Zu(t,i){var s=xt;xt|=1;try{return t(i)}finally{xt=s,xt===0&&(vs=j()+500,fa&&Qi())}}function Pr(t){ir!==null&&ir.tag===0&&!(xt&6)&&xs();var i=xt;xt|=1;var s=Wn.transition,l=vt;try{if(Wn.transition=null,vt=1,t)return t()}finally{vt=l,Wn.transition=s,xt=i,!(xt&6)&&Qi()}}function Qu(){Nn=_s.current,It(_s)}function br(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Yg(s)),Wt!==null)for(s=Wt.return;s!==null;){var l=s;switch(au(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ua();break;case 3:ps(),It(En),It(cn),Su();break;case 5:vu(l);break;case 4:ps();break;case 13:It(Ot);break;case 19:It(Ot);break;case 10:hu(l.type._context);break;case 22:case 23:Qu()}s=s.return}if(tn=t,Wt=t=or(t.current,null),an=Nn=i,$t=0,Mo=null,Xu=Da=Cr=0,An=Eo=null,wr!==null){for(i=0;i<wr.length;i++)if(s=wr[i],l=s.interleaved,l!==null){s.interleaved=null;var c=l.next,h=s.pending;if(h!==null){var E=h.next;h.next=c,l.next=E}s.pending=l}wr=null}return t}function Qh(t,i){do{var s=Wt;try{if(du(),ya.current=wa,Ma){for(var l=Bt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Ma=!1}if(Rr=0,en=jt=Bt=null,go=!1,_o=0,Wu.current=null,s===null||s.return===null){$t=1,Mo=i,Wt=null;break}e:{var h=t,E=s.return,D=s,F=i;if(i=an,D.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var J=F,_e=D,xe=_e.tag;if(!(_e.mode&1)&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var De=Eh(E);if(De!==null){De.flags&=-257,Th(De,E,D,h,i),De.mode&1&&Mh(h,J,i),i=De,F=J;var ze=i.updateQueue;if(ze===null){var Ve=new Set;Ve.add(F),i.updateQueue=Ve}else ze.add(F);break e}else{if(!(i&1)){Mh(h,J,i),Ju();break e}F=Error(n(426))}}else if(Ft&&D.mode&1){var Vt=Eh(E);if(Vt!==null){!(Vt.flags&65536)&&(Vt.flags|=256),Th(Vt,E,D,h,i),cu(ms(F,D));break e}}h=F=ms(F,D),$t!==4&&($t=2),Eo===null?Eo=[h]:Eo.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=Sh(h,F,i);Yd(h,Y);break e;case 1:D=F;var H=h.type,$=h.stateNode;if(!(h.flags&128)&&(typeof H.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(nr===null||!nr.has($)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=yh(h,D,i);Yd(h,Ee);break e}}h=h.return}while(h!==null)}tp(s)}catch(Xe){i=Xe,Wt===s&&s!==null&&(Wt=s=s.return);continue}break}while(!0)}function Jh(){var t=La.current;return La.current=wa,t===null?wa:t}function Ju(){($t===0||$t===3||$t===2)&&($t=4),tn===null||!(Cr&268435455)&&!(Da&268435455)||sr(tn,an)}function Ba(t,i){var s=xt;xt|=2;var l=Jh();(tn!==t||an!==i)&&(Ai=null,br(t,i));do try{v_();break}catch(c){Qh(t,c)}while(!0);if(du(),xt=s,La.current=l,Wt!==null)throw Error(n(261));return tn=null,an=0,$t}function v_(){for(;Wt!==null;)ep(Wt)}function x_(){for(;Wt!==null&&!W();)ep(Wt)}function ep(t){var i=rp(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,i===null?tp(t):Wt=i,Wu.current=null}function tp(t){var i=t;do{var s=i.alternate;if(t=i.return,i.flags&32768){if(s=d_(s,i),s!==null){s.flags&=32767,Wt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$t=6,Wt=null;return}}else if(s=f_(s,i,Nn),s!==null){Wt=s;return}if(i=i.sibling,i!==null){Wt=i;return}Wt=i=t}while(i!==null);$t===0&&($t=5)}function Lr(t,i,s){var l=vt,c=Wn.transition;try{Wn.transition=null,vt=1,S_(t,i,s,l)}finally{Wn.transition=c,vt=l}return null}function S_(t,i,s,l){do xs();while(ir!==null);if(xt&6)throw Error(n(327));s=t.finishedWork;var c=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(sn(t,h),t===tn&&(Wt=tn=null,an=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||Ia||(Ia=!0,sp(Le,function(){return xs(),null})),h=(s.flags&15990)!==0,s.subtreeFlags&15990||h){h=Wn.transition,Wn.transition=null;var E=vt;vt=1;var D=xt;xt|=4,Wu.current=null,p_(t,s),Xh(s,t),zg(Jl),$o=!!Ql,Jl=Ql=null,t.current=s,m_(s),Q(),xt=D,vt=E,Wn.transition=h}else t.current=s;if(Ia&&(Ia=!1,ir=t,Na=c),h=t.pendingLanes,h===0&&(nr=null),pt(s.stateNode),Rn(t,j()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)c=i[s],l(c.value,{componentStack:c.stack,digest:c.digest});if(Ua)throw Ua=!1,t=Yu,Yu=null,t;return Na&1&&t.tag!==0&&xs(),h=t.pendingLanes,h&1?t===ju?To++:(To=0,ju=t):To=0,Qi(),null}function xs(){if(ir!==null){var t=ui(Na),i=Wn.transition,s=vt;try{if(Wn.transition=null,vt=16>t?16:t,ir===null)var l=!1;else{if(t=ir,ir=null,Na=0,xt&6)throw Error(n(331));var c=xt;for(xt|=4,Fe=t.current;Fe!==null;){var h=Fe,E=h.child;if(Fe.flags&16){var D=h.deletions;if(D!==null){for(var F=0;F<D.length;F++){var J=D[F];for(Fe=J;Fe!==null;){var _e=Fe;switch(_e.tag){case 0:case 11:case 15:yo(8,_e,h)}var xe=_e.child;if(xe!==null)xe.return=_e,Fe=xe;else for(;Fe!==null;){_e=Fe;var me=_e.sibling,De=_e.return;if(zh(_e),_e===J){Fe=null;break}if(me!==null){me.return=De,Fe=me;break}Fe=De}}}var ze=h.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var Vt=Ve.sibling;Ve.sibling=null,Ve=Vt}while(Ve!==null)}}Fe=h}}if(h.subtreeFlags&2064&&E!==null)E.return=h,Fe=E;else e:for(;Fe!==null;){if(h=Fe,h.flags&2048)switch(h.tag){case 0:case 11:case 15:yo(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,Fe=Y;break e}Fe=h.return}}var H=t.current;for(Fe=H;Fe!==null;){E=Fe;var $=E.child;if(E.subtreeFlags&2064&&$!==null)$.return=E,Fe=$;else e:for(E=H;Fe!==null;){if(D=Fe,D.flags&2048)try{switch(D.tag){case 0:case 11:case 15:ba(9,D)}}catch(Xe){Ht(D,D.return,Xe)}if(D===E){Fe=null;break e}var Ee=D.sibling;if(Ee!==null){Ee.return=D.return,Fe=Ee;break e}Fe=D.return}}if(xt=c,Qi(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Qe,t)}catch{}l=!0}return l}finally{vt=s,Wn.transition=i}}return!1}function np(t,i,s){i=ms(s,i),i=Sh(t,i,1),t=er(t,i,1),i=Sn(),t!==null&&(Qt(t,1,i),Rn(t,i))}function Ht(t,i,s){if(t.tag===3)np(t,t,s);else for(;i!==null;){if(i.tag===3){np(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(nr===null||!nr.has(l))){t=ms(s,t),t=yh(i,t,1),i=er(i,t,1),t=Sn(),i!==null&&(Qt(i,1,t),Rn(i,t));break}}i=i.return}}function y_(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=Sn(),t.pingedLanes|=t.suspendedLanes&s,tn===t&&(an&s)===s&&($t===4||$t===3&&(an&130023424)===an&&500>j()-qu?br(t,0):Xu|=s),Rn(t,i)}function ip(t,i){i===0&&(t.mode&1?(i=zt,zt<<=1,!(zt&130023424)&&(zt=4194304)):i=1);var s=Sn();t=Ei(t,i),t!==null&&(Qt(t,i,s),Rn(t,s))}function M_(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),ip(t,s)}function E_(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),ip(t,s)}var rp;rp=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||En.current)wn=!0;else{if(!(t.lanes&s)&&!(i.flags&128))return wn=!1,c_(t,i,s);wn=!!(t.flags&131072)}else wn=!1,Ft&&i.flags&1048576&&Od(i,ha,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ca(t,i),t=i.pendingProps;var c=as(i,cn.current);hs(i,s),c=Eu(null,i,l,t,c,s);var h=Tu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Tn(l)?(h=!0,ca(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,gu(i),c.updater=Aa,i.stateNode=c,c._reactInternals=i,bu(i,l,t,s),i=Iu(null,i,l,!0,h,s)):(i.tag=0,Ft&&h&&ou(i),xn(null,i,c,s),i=i.child),i;case 16:l=i.elementType;e:{switch(Ca(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=w_(l),t=Zn(l,t),c){case 0:i=Uu(null,i,l,t,s);break e;case 1:i=bh(null,i,l,t,s);break e;case 11:i=wh(null,i,l,t,s);break e;case 14:i=Ah(null,i,l,Zn(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),Uu(t,i,l,c,s);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),bh(t,i,l,c,s);case 3:e:{if(Lh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,qd(t,i),xa(i,l,null,s);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ms(Error(n(423)),i),i=Dh(t,i,l,s,c);break e}else if(l!==c){c=ms(Error(n(424)),i),i=Dh(t,i,l,s,c);break e}else for(In=$i(i.stateNode.containerInfo.firstChild),Un=i,Ft=!0,Kn=null,s=Wd(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(cs(),l===c){i=wi(t,i,s);break e}xn(t,i,l,s)}i=i.child}return i;case 5:return $d(i),t===null&&uu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,E=c.children,eu(l,c)?E=null:h!==null&&eu(l,h)&&(i.flags|=32),Ph(t,i),xn(t,i,E,s),i.child;case 6:return t===null&&uu(i),null;case 13:return Uh(t,i,s);case 4:return _u(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=fs(i,null,l,s):xn(t,i,l,s),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),wh(t,i,l,c,s);case 7:return xn(t,i,i.pendingProps,s),i.child;case 8:return xn(t,i,i.pendingProps.children,s),i.child;case 12:return xn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,E=c.value,Lt(ga,l._currentValue),l._currentValue=E,h!==null)if($n(h.value,E)){if(h.children===c.children&&!En.current){i=wi(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var D=h.dependencies;if(D!==null){E=h.child;for(var F=D.firstContext;F!==null;){if(F.context===l){if(h.tag===1){F=Ti(-1,s&-s),F.tag=2;var J=h.updateQueue;if(J!==null){J=J.shared;var _e=J.pending;_e===null?F.next=F:(F.next=_e.next,_e.next=F),J.pending=F}}h.lanes|=s,F=h.alternate,F!==null&&(F.lanes|=s),pu(h.return,s,i),D.lanes|=s;break}F=F.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=s,D=E.alternate,D!==null&&(D.lanes|=s),pu(E,s,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}xn(t,i,c.children,s),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,hs(i,s),c=Vn(c),l=l(c),i.flags|=1,xn(t,i,l,s),i.child;case 14:return l=i.type,c=Zn(l,i.pendingProps),c=Zn(l.type,c),Ah(t,i,l,c,s);case 15:return Rh(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),Ca(t,i),i.tag=1,Tn(l)?(t=!0,ca(i)):t=!1,hs(i,s),vh(i,l,c),bu(i,l,c,s),Iu(null,i,l,!0,t,s);case 19:return Nh(t,i,s);case 22:return Ch(t,i,s)}throw Error(n(156,i.tag))};function sp(t,i){return qo(t,i)}function T_(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,i,s,l){return new T_(t,i,s,l)}function ec(t){return t=t.prototype,!(!t||!t.isReactComponent)}function w_(t){if(typeof t=="function")return ec(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oe)return 11;if(t===he)return 14}return 2}function or(t,i){var s=t.alternate;return s===null?(s=Xn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function ka(t,i,s,l,c,h){var E=2;if(l=t,typeof t=="function")ec(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case U:return Dr(s.children,c,h,i);case X:E=8,c|=8;break;case P:return t=Xn(12,s,i,c|2),t.elementType=P,t.lanes=h,t;case ee:return t=Xn(13,s,i,c),t.elementType=ee,t.lanes=h,t;case ce:return t=Xn(19,s,i,c),t.elementType=ce,t.lanes=h,t;case le:return za(s,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:E=10;break e;case z:E=9;break e;case oe:E=11;break e;case he:E=14;break e;case se:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Xn(E,s,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Dr(t,i,s,l){return t=Xn(7,t,l,i),t.lanes=s,t}function za(t,i,s,l){return t=Xn(22,t,l,i),t.elementType=le,t.lanes=s,t.stateNode={isHidden:!1},t}function tc(t,i,s){return t=Xn(6,t,null,i),t.lanes=s,t}function nc(t,i,s){return i=Xn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function A_(t,i,s,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=un(0),this.expirationTimes=un(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=un(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function ic(t,i,s,l,c,h,E,D,F){return t=new A_(t,i,s,D,F),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Xn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},gu(h),t}function R_(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function op(t){if(!t)return Zi;t=t._reactInternals;e:{if(li(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Tn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(Tn(s))return Id(t,s,i)}return i}function ap(t,i,s,l,c,h,E,D,F){return t=ic(s,l,!0,t,c,h,E,D,F),t.context=op(null),s=t.current,l=Sn(),c=rr(s),h=Ti(l,c),h.callback=i??null,er(s,h,c),t.current.lanes=c,Qt(t,c,l),Rn(t,l),t}function Ha(t,i,s,l){var c=i.current,h=Sn(),E=rr(c);return s=op(s),i.context===null?i.context=s:i.pendingContext=s,i=Ti(h,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=er(c,i,E),t!==null&&(ei(t,c,E,h),va(t,c,E)),E}function Va(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function rc(t,i){lp(t,i),(t=t.alternate)&&lp(t,i)}var up=typeof reportError=="function"?reportError:function(t){console.error(t)};function sc(t){this._internalRoot=t}Ga.prototype.render=sc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ha(t,i,null,null)},Ga.prototype.unmount=sc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Pr(function(){Ha(null,t,null,null)}),i[xi]=null}};function Ga(t){this._internalRoot=t}Ga.prototype.unstable_scheduleHydration=function(t){if(t){var i=qf();t={blockedOn:null,target:t,priority:i};for(var s=0;s<qi.length&&i!==0&&i<qi[s].priority;s++);qi.splice(s,0,t),s===0&&$f(t)}};function oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cp(){}function C_(t,i,s,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var J=Va(E);h.call(J)}}var E=ap(i,l,t,0,null,!1,!1,"",cp);return t._reactRootContainer=E,t[xi]=E.current,ao(t.nodeType===8?t.parentNode:t),Pr(),E}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var D=l;l=function(){var J=Va(F);D.call(J)}}var F=ic(t,0,!1,null,null,!1,!1,"",cp);return t._reactRootContainer=F,t[xi]=F.current,ao(t.nodeType===8?t.parentNode:t),Pr(function(){Ha(i,F,s,l)}),F}function Xa(t,i,s,l,c){var h=s._reactRootContainer;if(h){var E=h;if(typeof c=="function"){var D=c;c=function(){var F=Va(E);D.call(F)}}Ha(i,E,t,c)}else E=C_(s,i,t,c,l);return Va(E)}Wf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=ht(i.pendingLanes);s!==0&&(Jt(i,s|1),Rn(i,j()),!(xt&6)&&(vs=j()+500,Qi()))}break;case 13:Pr(function(){var l=Ei(t,1);if(l!==null){var c=Sn();ei(l,t,1,c)}}),rc(t,1)}},Ll=function(t){if(t.tag===13){var i=Ei(t,134217728);if(i!==null){var s=Sn();ei(i,t,134217728,s)}rc(t,134217728)}},Xf=function(t){if(t.tag===13){var i=rr(t),s=Ei(t,i);if(s!==null){var l=Sn();ei(s,t,i,l)}rc(t,i)}},qf=function(){return vt},Yf=function(t,i){var s=vt;try{return vt=t,i()}finally{vt=s}},Ae=function(t,i,s){switch(i){case"input":if(lt(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var c=la(l);if(!c)throw Error(n(90));dt(l),lt(l,c)}}}break;case"textarea":pe(t,s);break;case"select":i=s.value,i!=null&&b(t,!!s.multiple,i,!1)}},Dt=Zu,Yt=Pr;var P_={usingClientEntryPoint:!1,Events:[co,ss,la,Pe,it,Zu]},wo={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},b_={bundleType:wo.bundleType,version:wo.version,rendererPackageName:wo.rendererPackageName,rendererConfig:wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Wo(t),t===null?null:t.stateNode},findFiberByHostInstance:wo.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{Qe=qa.inject(b_),He=qa}catch{}}return Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P_,Cn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oc(i))throw Error(n(200));return R_(t,i,null,s)},Cn.createRoot=function(t,i){if(!oc(t))throw Error(n(299));var s=!1,l="",c=up;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=ic(t,1,!1,null,null,s,!1,l,c),t[xi]=i.current,ao(t.nodeType===8?t.parentNode:t),new sc(i)},Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Wo(i),t=t===null?null:t.stateNode,t},Cn.flushSync=function(t){return Pr(t)},Cn.hydrate=function(t,i,s){if(!Wa(i))throw Error(n(200));return Xa(null,t,i,!0,s)},Cn.hydrateRoot=function(t,i,s){if(!oc(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,c=!1,h="",E=up;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(E=s.onRecoverableError)),i=ap(i,null,t,1,s??null,c,!1,h,E),t[xi]=i.current,ao(t),l)for(t=0;t<l.length;t++)s=l[t],c=s._getVersion,c=c(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,c]:i.mutableSourceEagerHydrationData.push(s,c);return new Ga(i)},Cn.render=function(t,i,s){if(!Wa(i))throw Error(n(200));return Xa(null,t,i,!1,s)},Cn.unmountComponentAtNode=function(t){if(!Wa(t))throw Error(n(40));return t._reactRootContainer?(Pr(function(){Xa(null,null,t,!1,function(){t._reactRootContainer=null,t[xi]=null})}),!0):!1},Cn.unstable_batchedUpdates=Zu,Cn.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!Wa(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Xa(t,i,s,!1,l)},Cn.version="18.3.1-next-f1338f8080-20240426",Cn}var vp;function B_(){if(vp)return uc.exports;vp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),uc.exports=O_(),uc.exports}var xp;function k_(){if(xp)return Ya;xp=1;var o=B_();return Ya.createRoot=o.createRoot,Ya.hydrateRoot=o.hydrateRoot,Ya}var z_=k_(),gl={exports:{}},H_=gl.exports,Sp;function V_(){return Sp||(Sp=1,function(o,e){(function(r,a){o.exports=a(wl())})(H_,function(n){return function(r){var a={};function u(f){if(a[f])return a[f].exports;var d=a[f]={i:f,l:!1,exports:{}};return r[f].call(d.exports,d,d.exports,u),d.l=!0,d.exports}return u.m=r,u.c=a,u.d=function(f,d,p){u.o(f,d)||Object.defineProperty(f,d,{enumerable:!0,get:p})},u.r=function(f){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(f,"__esModule",{value:!0})},u.t=function(f,d){if(d&1&&(f=u(f)),d&8||d&4&&typeof f=="object"&&f&&f.__esModule)return f;var p=Object.create(null);if(u.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:f}),d&2&&typeof f!="string")for(var m in f)u.d(p,m,(function(_){return f[_]}).bind(null,m));return p},u.n=function(f){var d=f&&f.__esModule?function(){return f.default}:function(){return f};return u.d(d,"a",d),d},u.o=function(f,d){return Object.prototype.hasOwnProperty.call(f,d)},u.p="",u(u.s="./src/react-webcam.tsx")}({"./src/react-webcam.tsx":function(r,a,u){u.r(a);var f=u("react"),d=function(){var x=function(y,M){return x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(T,v){T.__proto__=v}||function(T,v){for(var g in v)v.hasOwnProperty(g)&&(T[g]=v[g])},x(y,M)};return function(y,M){x(y,M);function T(){this.constructor=y}y.prototype=M===null?Object.create(M):(T.prototype=M.prototype,new T)}}(),p=function(){return p=Object.assign||function(x){for(var y,M=1,T=arguments.length;M<T;M++){y=arguments[M];for(var v in y)Object.prototype.hasOwnProperty.call(y,v)&&(x[v]=y[v])}return x},p.apply(this,arguments)},m=function(x,y){var M={};for(var T in x)Object.prototype.hasOwnProperty.call(x,T)&&y.indexOf(T)<0&&(M[T]=x[T]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,T=Object.getOwnPropertySymbols(x);v<T.length;v++)y.indexOf(T[v])<0&&Object.prototype.propertyIsEnumerable.call(x,T[v])&&(M[T[v]]=x[T[v]]);return M};(function(){typeof window>"u"||(navigator.mediaDevices===void 0&&(navigator.mediaDevices={}),navigator.mediaDevices.getUserMedia===void 0&&(navigator.mediaDevices.getUserMedia=function(y){var M=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return M?new Promise(function(T,v){M.call(navigator,y,T,v)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}))})();function _(){return!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)}var S=function(x){d(y,x);function y(M){var T=x.call(this,M)||this;return T.canvas=null,T.ctx=null,T.requestUserMediaId=0,T.unmounted=!1,T.state={hasUserMedia:!1},T}return y.prototype.componentDidMount=function(){var M=this,T=M.state,v=M.props;if(this.unmounted=!1,!_()){v.onUserMediaError("getUserMedia not supported");return}T.hasUserMedia||this.requestUserMedia(),v.children&&typeof v.children!="function"&&console.warn("children must be a function")},y.prototype.componentDidUpdate=function(M){var T=this.props;if(!_()){T.onUserMediaError("getUserMedia not supported");return}var v=JSON.stringify(M.audioConstraints)!==JSON.stringify(T.audioConstraints),g=JSON.stringify(M.videoConstraints)!==JSON.stringify(T.videoConstraints),N=M.minScreenshotWidth!==T.minScreenshotWidth,L=M.minScreenshotHeight!==T.minScreenshotHeight;(g||N||L)&&(this.canvas=null,this.ctx=null),(v||g)&&(this.stopAndCleanup(),this.requestUserMedia())},y.prototype.componentWillUnmount=function(){this.unmounted=!0,this.stopAndCleanup()},y.stopMediaStream=function(M){M&&(M.getVideoTracks&&M.getAudioTracks?(M.getVideoTracks().map(function(T){M.removeTrack(T),T.stop()}),M.getAudioTracks().map(function(T){M.removeTrack(T),T.stop()})):M.stop())},y.prototype.stopAndCleanup=function(){var M=this.state;M.hasUserMedia&&(y.stopMediaStream(this.stream),M.src&&window.URL.revokeObjectURL(M.src))},y.prototype.getScreenshot=function(M){var T=this,v=T.state,g=T.props;if(!v.hasUserMedia)return null;var N=this.getCanvas(M);return N&&N.toDataURL(g.screenshotFormat,g.screenshotQuality)},y.prototype.getCanvas=function(M){var T=this,v=T.state,g=T.props;if(!this.video||!v.hasUserMedia||!this.video.videoHeight)return null;if(!this.ctx){var N=this.video.videoWidth,L=this.video.videoHeight;if(!this.props.forceScreenshotSourceSize){var C=N/L;N=g.minScreenshotWidth||this.video.clientWidth,L=N/C,g.minScreenshotHeight&&L<g.minScreenshotHeight&&(L=g.minScreenshotHeight,N=L*C)}this.canvas=document.createElement("canvas"),this.canvas.width=(M==null?void 0:M.width)||N,this.canvas.height=(M==null?void 0:M.height)||L,this.ctx=this.canvas.getContext("2d")}var G=this,O=G.ctx,U=G.canvas;return O&&U&&(U.width=(M==null?void 0:M.width)||U.width,U.height=(M==null?void 0:M.height)||U.height,g.mirrored&&(O.translate(U.width,0),O.scale(-1,1)),O.imageSmoothingEnabled=g.imageSmoothing,O.drawImage(this.video,0,0,(M==null?void 0:M.width)||U.width,(M==null?void 0:M.height)||U.height),g.mirrored&&(O.scale(-1,1),O.translate(-U.width,0))),U},y.prototype.requestUserMedia=function(){var M=this,T=this.props,v=function(L,C){var G={video:typeof C<"u"?C:!0};T.audio&&(G.audio=typeof L<"u"?L:!0),M.requestUserMediaId++;var O=M.requestUserMediaId;navigator.mediaDevices.getUserMedia(G).then(function(U){M.unmounted||O!==M.requestUserMediaId?y.stopMediaStream(U):M.handleUserMedia(null,U)}).catch(function(U){M.handleUserMedia(U)})};if("mediaDevices"in navigator)v(T.audioConstraints,T.videoConstraints);else{var g=function(L){return{optional:[{sourceId:L}]}},N=function(L){var C=L.deviceId;return typeof C=="string"?C:Array.isArray(C)&&C.length>0?C[0]:typeof C=="object"&&C.ideal?C.ideal:null};MediaStreamTrack.getSources(function(L){var C=null,G=null;L.forEach(function(X){X.kind==="audio"?C=X.id:X.kind==="video"&&(G=X.id)});var O=N(T.audioConstraints);O&&(C=O);var U=N(T.videoConstraints);U&&(G=U),v(g(C),g(G))})}},y.prototype.handleUserMedia=function(M,T){var v=this.props;if(M||!T){this.setState({hasUserMedia:!1}),v.onUserMediaError(M);return}this.stream=T;try{this.video&&(this.video.srcObject=T),this.setState({hasUserMedia:!0})}catch{this.setState({hasUserMedia:!0,src:window.URL.createObjectURL(T)})}v.onUserMedia(T)},y.prototype.render=function(){var M=this,T=this,v=T.state,g=T.props,N=g.audio;g.forceScreenshotSourceSize;var L=g.disablePictureInPicture;g.onUserMedia,g.onUserMediaError,g.screenshotFormat,g.screenshotQuality,g.minScreenshotWidth,g.minScreenshotHeight,g.audioConstraints,g.videoConstraints,g.imageSmoothing;var C=g.mirrored,G=g.style,O=G===void 0?{}:G,U=g.children,X=m(g,["audio","forceScreenshotSourceSize","disablePictureInPicture","onUserMedia","onUserMediaError","screenshotFormat","screenshotQuality","minScreenshotWidth","minScreenshotHeight","audioConstraints","videoConstraints","imageSmoothing","mirrored","style","children"]),P=C?p(p({},O),{transform:(O.transform||"")+" scaleX(-1)"}):O,R={getScreenshot:this.getScreenshot.bind(this)};return f.createElement(f.Fragment,null,f.createElement("video",p({autoPlay:!0,disablePictureInPicture:L,src:v.src,muted:!N,playsInline:!0,ref:function(z){M.video=z},style:P},X)),U&&U(R))},y.defaultProps={audio:!1,disablePictureInPicture:!1,forceScreenshotSourceSize:!1,imageSmoothing:!0,mirrored:!1,onUserMedia:function(){},onUserMediaError:function(){},screenshotFormat:"image/webp",screenshotQuality:.92},y}(f.Component);a.default=S},react:function(r,a){r.exports=n}}).default})}(gl)),gl.exports}var G_=V_();const W_=Sm(G_);var dc={exports:{}},hc,yp;function X_(){if(yp)return hc;yp=1;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return hc=o,hc}var pc,Mp;function q_(){if(Mp)return pc;Mp=1;var o=X_();function e(){}function n(){}return n.resetWarningCache=e,pc=function(){function r(f,d,p,m,_,S){if(S!==o){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}r.isRequired=r;function a(){return r}var u={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:e};return u.PropTypes=u,u},pc}var Ep;function Y_(){return Ep||(Ep=1,dc.exports=q_()()),dc.exports}var j_=Y_();const Gr=Sm(j_),ym=({onSaveCubemap:o})=>{const[e,n]=ri.useState(0),[r,a]=ri.useState({alpha:0,beta:0,gamma:0}),[u,f]=ri.useState(!1),d=[{name:"Front",target:{alpha:0,beta:90},instruction:"Face the front wall."},{name:"Right",target:{alpha:90,beta:90},instruction:"Rotate 90° to the right."},{name:"Back",target:{alpha:180,beta:90},instruction:"Rotate 180° to face the back wall."},{name:"Left",target:{alpha:-90,beta:90},instruction:"Rotate 90° to the left."},{name:"Top",target:{alpha:0,beta:-180},instruction:"Tilt the camera upwards."},{name:"Bottom",target:{alpha:0,beta:0},instruction:"Tilt the camera downwards."}],p=5,[m,_]=ri.useState([]),S=ri.useRef(null);ri.useEffect(()=>{const M=T=>{const{alpha:v,beta:g,gamma:N}=T;if(a({alpha:v,beta:g,gamma:N}),e<d.length){const L=d[e].target,C=Math.abs((L.alpha-v+360)%360)<=p||Math.abs((L.alpha-v-360)%360)<=p,G=Math.abs(L.beta-g)<=p;f(C&&G)}};return window.addEventListener("deviceorientation",M),()=>{window.removeEventListener("deviceorientation",M)}},[e]);const x=()=>{if(S.current&&u){const M=S.current.getScreenshot({width:512,height:512});_([...m,M]),n(e+1)}},y=()=>{m.length===6&&o(m)};return Ct.jsx("div",{style:{textAlign:"center",position:"relative"},children:e<d.length?Ct.jsxs(Ct.Fragment,{children:[Ct.jsxs("h2",{children:["Capture: ",d[e].name]}),Ct.jsx("p",{children:d[e].instruction}),Ct.jsxs("p",{children:["Current Orientation: Alpha: ",Math.round(r.alpha),"°, Beta:"," ",Math.round(r.beta),"°"]}),Ct.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[Ct.jsx(W_,{audio:!1,screenshotFormat:"image/jpeg",ref:S,style:{width:"512px",height:"512px"}}),Ct.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:u?"green":"red",fontSize:"50px",fontWeight:"bold"},children:e===0?"↑":e===1||e===2||e===3?"→":e===4?"↑":"↓"})]}),Ct.jsxs("button",{onClick:x,style:{marginTop:"20px"},disabled:!u,children:["Capture ",d[e].name]})]}):Ct.jsxs(Ct.Fragment,{children:[Ct.jsx("h2",{children:"Capture Complete!"}),Ct.jsx("p",{children:"All six images have been successfully captured."}),Ct.jsx("button",{onClick:y,style:{marginTop:"20px"},children:"Save Cubemap"})]})})};ym.propTypes={onSaveCubemap:Gr.func.isRequired};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uf="172",$_=0,Tp=1,K_=2,Mm=1,Z_=2,Di=3,_r=0,bn=1,Ui=2,mr=0,Fs=1,wp=2,Ap=3,Rp=4,Q_=5,Hr=100,J_=101,ev=102,tv=103,nv=104,iv=200,rv=201,sv=202,ov=203,Xc=204,qc=205,av=206,lv=207,uv=208,cv=209,fv=210,dv=211,hv=212,pv=213,mv=214,Yc=0,jc=1,$c=2,ks=3,Kc=4,Zc=5,Qc=6,Jc=7,Em=0,gv=1,_v=2,gr=0,vv=1,xv=2,Sv=3,yv=4,Mv=5,Ev=6,Tv=7,Tm=300,zs=301,Hs=302,ef=303,tf=304,Al=306,nf=1e3,Wr=1001,rf=1002,ai=1003,wv=1004,ja=1005,jn=1006,mc=1007,Xr=1008,Bi=1009,wm=1010,Am=1011,Uo=1012,If=1013,Yr=1014,Ii=1015,No=1016,Nf=1017,Ff=1018,Vs=1020,Rm=35902,Cm=1021,Pm=1022,oi=1023,bm=1024,Lm=1025,Os=1026,Gs=1027,Dm=1028,Of=1029,Um=1030,Bf=1031,kf=1033,_l=33776,vl=33777,xl=33778,Sl=33779,sf=35840,of=35841,af=35842,lf=35843,uf=36196,cf=37492,ff=37496,df=37808,hf=37809,pf=37810,mf=37811,gf=37812,_f=37813,vf=37814,xf=37815,Sf=37816,yf=37817,Mf=37818,Ef=37819,Tf=37820,wf=37821,yl=36492,Af=36494,Rf=36495,Im=36283,Cf=36284,Pf=36285,bf=36286,Av=3200,Rv=3201,Cv=0,Pv=1,pr="",Bn="srgb",Ws="srgb-linear",El="linear",wt="srgb",Ss=7680,Cp=519,bv=512,Lv=513,Dv=514,Nm=515,Uv=516,Iv=517,Nv=518,Fv=519,Pp=35044,bp="300 es",Ni=2e3,Tl=2001;class qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gc=Math.PI/180,Lf=180/Math.PI;function Fo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pn[o&255]+pn[o>>8&255]+pn[o>>16&255]+pn[o>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]).toLowerCase()}function mt(o,e,n){return Math.max(e,Math.min(n,o))}function Ov(o,e){return(o%e+e)%e}function _c(o,e,n){return(1-n)*o+n*e}function Ro(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Pn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(e=0,n=0){Pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,n,r,a,u,f,d,p,m){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=p,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],_=r[4],S=r[7],x=r[2],y=r[5],M=r[8],T=a[0],v=a[3],g=a[6],N=a[1],L=a[4],C=a[7],G=a[2],O=a[5],U=a[8];return u[0]=f*T+d*N+p*G,u[3]=f*v+d*L+p*O,u[6]=f*g+d*C+p*U,u[1]=m*T+_*N+S*G,u[4]=m*v+_*L+S*O,u[7]=m*g+_*C+S*U,u[2]=x*T+y*N+M*G,u[5]=x*v+y*L+M*O,u[8]=x*g+y*C+M*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*f*_-n*d*m-r*u*_+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],S=_*f-d*m,x=d*p-_*u,y=m*u-f*p,M=n*S+r*x+a*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=S*T,e[1]=(a*m-_*r)*T,e[2]=(d*r-a*f)*T,e[3]=x*T,e[4]=(_*n-a*p)*T,e[5]=(a*u-d*n)*T,e[6]=y*T,e[7]=(r*p-m*n)*T,e[8]=(f*n-r*u)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(vc.makeScale(e,n)),this}rotate(e){return this.premultiply(vc.makeRotation(-e)),this}translate(e,n){return this.premultiply(vc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vc=new st;function Fm(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Io(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Bv(){const o=Io("canvas");return o.style.display="block",o}const Lp={};function Is(o){o in Lp||(Lp[o]=!0,console.warn(o))}function kv(o,e,n){return new Promise(function(r,a){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function zv(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hv(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Dp=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Up=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vv(){const o={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(a,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===wt&&(a.r=Oi(a.r),a.g=Oi(a.g),a.b=Oi(a.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===wt&&(a.r=Bs(a.r),a.g=Bs(a.g),a.b=Bs(a.b))),a},fromWorkingColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},toWorkingColorSpace:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===pr?El:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,f){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ws]:{primaries:e,whitePoint:r,transfer:El,toXYZ:Dp,fromXYZ:Up,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:e,whitePoint:r,transfer:wt,toXYZ:Dp,fromXYZ:Up,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),o}const yt=Vv();function Oi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Bs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ys;class Gv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=Io("canvas")),ys.width=e.width,ys.height=e.height;const r=ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ys}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Io("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Oi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Oi(n[r]/255)*255):n[r]=Oi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wv=0;class Om{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=Fo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(xc(a[f].image)):u.push(xc(a[f]))}else u=xc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function xc(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Gv.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xv=0;class Ln extends qs{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,r=Wr,a=Wr,u=jn,f=Xr,d=oi,p=Bi,m=Ln.DEFAULT_ANISOTROPY,_=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Fo(),this.name="",this.source=new Om(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nf:e.x=e.x-Math.floor(e.x);break;case Wr:e.x=e.x<0?0:1;break;case rf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nf:e.y=e.y-Math.floor(e.y);break;case Wr:e.y=e.y<0?0:1;break;case rf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Tm;Ln.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,n=0,r=0,a=1){Gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],_=p[4],S=p[8],x=p[1],y=p[5],M=p[9],T=p[2],v=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(S-T)<.01&&Math.abs(M-v)<.01){if(Math.abs(_+x)<.1&&Math.abs(S+T)<.1&&Math.abs(M+v)<.1&&Math.abs(m+y+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,C=(y+1)/2,G=(g+1)/2,O=(_+x)/4,U=(S+T)/4,X=(M+v)/4;return L>C&&L>G?L<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(L),a=O/r,u=U/r):C>G?C<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(C),r=O/a,u=X/a):G<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(G),r=U/u,a=X/u),this.set(r,a,u,n),this}let N=Math.sqrt((v-M)*(v-M)+(S-T)*(S-T)+(x-_)*(x-_));return Math.abs(N)<.001&&(N=1),this.x=(v-M)/N,this.y=(S-T)/N,this.z=(x-_)/N,this.w=Math.acos((m+y+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this.z=mt(this.z,e.z,n.z),this.w=mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this.z=mt(this.z,e,n),this.w=mt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qv extends qs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Ln(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new Om(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jr extends qv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Bm extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ai,this.minFilter=ai,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yv extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ai,this.minFilter=ai,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],_=r[a+2],S=r[a+3];const x=u[f+0],y=u[f+1],M=u[f+2],T=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=S;return}if(d===1){e[n+0]=x,e[n+1]=y,e[n+2]=M,e[n+3]=T;return}if(S!==T||p!==x||m!==y||_!==M){let v=1-d;const g=p*x+m*y+_*M+S*T,N=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const G=Math.sqrt(L),O=Math.atan2(G,g*N);v=Math.sin(v*O)/G,d=Math.sin(d*O)/G}const C=d*N;if(p=p*v+x*C,m=m*v+y*C,_=_*v+M*C,S=S*v+T*C,v===1-d){const G=1/Math.sqrt(p*p+m*m+_*_+S*S);p*=G,m*=G,_*=G,S*=G}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],S=u[f],x=u[f+1],y=u[f+2],M=u[f+3];return e[n]=d*M+_*S+p*y-m*x,e[n+1]=p*M+_*x+m*S-d*y,e[n+2]=m*M+_*y+d*x-p*S,e[n+3]=_*M-d*S-p*x-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),S=d(u/2),x=p(r/2),y=p(a/2),M=p(u/2);switch(f){case"XYZ":this._x=x*_*S+m*y*M,this._y=m*y*S-x*_*M,this._z=m*_*M+x*y*S,this._w=m*_*S-x*y*M;break;case"YXZ":this._x=x*_*S+m*y*M,this._y=m*y*S-x*_*M,this._z=m*_*M-x*y*S,this._w=m*_*S+x*y*M;break;case"ZXY":this._x=x*_*S-m*y*M,this._y=m*y*S+x*_*M,this._z=m*_*M+x*y*S,this._w=m*_*S-x*y*M;break;case"ZYX":this._x=x*_*S-m*y*M,this._y=m*y*S+x*_*M,this._z=m*_*M-x*y*S,this._w=m*_*S+x*y*M;break;case"YZX":this._x=x*_*S+m*y*M,this._y=m*y*S+x*_*M,this._z=m*_*M-x*y*S,this._w=m*_*S-x*y*M;break;case"XZY":this._x=x*_*S-m*y*M,this._y=m*y*S-x*_*M,this._z=m*_*M+x*y*S,this._w=m*_*S+x*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],_=n[6],S=n[10],x=r+d+S;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-p)*y,this._y=(u-m)*y,this._z=(f-a)*y}else if(r>d&&r>S){const y=2*Math.sqrt(1+r-d-S);this._w=(_-p)/y,this._x=.25*y,this._y=(a+f)/y,this._z=(u+m)/y}else if(d>S){const y=2*Math.sqrt(1+d-r-S);this._w=(u-m)/y,this._x=(a+f)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+S-r-d);this._w=(f-a)/y,this._x=(u+m)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+f*d+a*m-u*p,this._y=a*_+f*p+u*d-r*m,this._z=u*_+f*m+r*p-a*d,this._w=f*_-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*r+n*this._x,this._y=y*a+n*this._y,this._z=y*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),S=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=f*S+this._w*x,this._x=r*S+this._x*x,this._y=a*S+this._y*x,this._z=u*S+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,n=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ip.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ip.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),_=2*(d*n-u*a),S=2*(u*r-f*n);return this.x=n+p*m+f*S-d*_,this.y=r+p*_+d*m-u*S,this.z=a+p*S+u*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this.z=mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this.z=mt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sc=new ne,Ip=new Oo;class Bo{constructor(e=new ne(1/0,1/0,1/0),n=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ti):ti.fromBufferAttribute(u,f),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$a.copy(r.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),Ka.subVectors(this.max,Co),Ms.subVectors(e.a,Co),Es.subVectors(e.b,Co),Ts.subVectors(e.c,Co),lr.subVectors(Es,Ms),ur.subVectors(Ts,Es),Ur.subVectors(Ms,Ts);let n=[0,-lr.z,lr.y,0,-ur.z,ur.y,0,-Ur.z,Ur.y,lr.z,0,-lr.x,ur.z,0,-ur.x,Ur.z,0,-Ur.x,-lr.y,lr.x,0,-ur.y,ur.x,0,-Ur.y,Ur.x,0];return!yc(n,Ms,Es,Ts,Ka)||(n=[1,0,0,0,1,0,0,0,1],!yc(n,Ms,Es,Ts,Ka))?!1:(Za.crossVectors(lr,ur),n=[Za.x,Za.y,Za.z],yc(n,Ms,Es,Ts,Ka))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],ti=new ne,$a=new Bo,Ms=new ne,Es=new ne,Ts=new ne,lr=new ne,ur=new ne,Ur=new ne,Co=new ne,Ka=new ne,Za=new ne,Ir=new ne;function yc(o,e,n,r,a){for(let u=0,f=o.length-3;u<=f;u+=3){Ir.fromArray(o,u);const d=a.x*Math.abs(Ir.x)+a.y*Math.abs(Ir.y)+a.z*Math.abs(Ir.z),p=e.dot(Ir),m=n.dot(Ir),_=r.dot(Ir);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const jv=new Bo,Po=new ne,Mc=new ne;class zf{constructor(e=new ne,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):jv.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Po,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Mc)),this.expandByPoint(Po.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new ne,Ec=new ne,Qa=new ne,cr=new ne,Tc=new ne,Ja=new ne,wc=new ne;class $v{constructor(e=new ne,n=new ne(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Ec.copy(e).add(n).multiplyScalar(.5),Qa.copy(n).sub(e).normalize(),cr.copy(this.origin).sub(Ec);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Qa),d=cr.dot(this.direction),p=-cr.dot(Qa),m=cr.lengthSq(),_=Math.abs(1-f*f);let S,x,y,M;if(_>0)if(S=f*p-d,x=f*d-p,M=u*_,S>=0)if(x>=-M)if(x<=M){const T=1/_;S*=T,x*=T,y=S*(S+f*x+2*d)+x*(f*S+x+2*p)+m}else x=u,S=Math.max(0,-(f*x+d)),y=-S*S+x*(x+2*p)+m;else x=-u,S=Math.max(0,-(f*x+d)),y=-S*S+x*(x+2*p)+m;else x<=-M?(S=Math.max(0,-(-f*u+d)),x=S>0?-u:Math.min(Math.max(-u,-p),u),y=-S*S+x*(x+2*p)+m):x<=M?(S=0,x=Math.min(Math.max(-u,-p),u),y=x*(x+2*p)+m):(S=Math.max(0,-(f*u+d)),x=S>0?u:Math.min(Math.max(-u,-p),u),y=-S*S+x*(x+2*p)+m);else x=f>0?-u:u,S=Math.max(0,-(f*x+d)),y=-S*S+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),a&&a.copy(Ec).addScaledVector(Qa,x),y}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const r=Ci.dot(this.direction),a=Ci.dot(Ci)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(u=(e.min.y-x.y)*_,f=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,f=(e.min.y-x.y)*_),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),S>=0?(d=(e.min.z-x.z)*S,p=(e.max.z-x.z)*S):(d=(e.max.z-x.z)*S,p=(e.min.z-x.z)*S),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,r,a,u){Tc.subVectors(n,e),Ja.subVectors(r,e),wc.crossVectors(Tc,Ja);let f=this.direction.dot(wc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;cr.subVectors(this.origin,e);const p=d*this.direction.dot(Ja.crossVectors(cr,Ja));if(p<0)return null;const m=d*this.direction.dot(Tc.cross(cr));if(m<0||p+m>f)return null;const _=-d*cr.dot(wc);return _<0?null:this.at(_/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,n,r,a,u,f,d,p,m,_,S,x,y,M,T,v){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,_,S,x,y,M,T,v)}set(e,n,r,a,u,f,d,p,m,_,S,x,y,M,T,v){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=S,g[14]=x,g[3]=y,g[7]=M,g[11]=T,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/ws.setFromMatrixColumn(e,0).length(),u=1/ws.setFromMatrixColumn(e,1).length(),f=1/ws.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),S=Math.sin(u);if(e.order==="XYZ"){const x=f*_,y=f*S,M=d*_,T=d*S;n[0]=p*_,n[4]=-p*S,n[8]=m,n[1]=y+M*m,n[5]=x-T*m,n[9]=-d*p,n[2]=T-x*m,n[6]=M+y*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*_,y=p*S,M=m*_,T=m*S;n[0]=x+T*d,n[4]=M*d-y,n[8]=f*m,n[1]=f*S,n[5]=f*_,n[9]=-d,n[2]=y*d-M,n[6]=T+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*_,y=p*S,M=m*_,T=m*S;n[0]=x-T*d,n[4]=-f*S,n[8]=M+y*d,n[1]=y+M*d,n[5]=f*_,n[9]=T-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*_,y=f*S,M=d*_,T=d*S;n[0]=p*_,n[4]=M*m-y,n[8]=x*m+T,n[1]=p*S,n[5]=T*m+x,n[9]=y*m-M,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,y=f*m,M=d*p,T=d*m;n[0]=p*_,n[4]=T-x*S,n[8]=M*S+y,n[1]=S,n[5]=f*_,n[9]=-d*_,n[2]=-m*_,n[6]=y*S+M,n[10]=x-T*S}else if(e.order==="XZY"){const x=f*p,y=f*m,M=d*p,T=d*m;n[0]=p*_,n[4]=-S,n[8]=m*_,n[1]=x*S+T,n[5]=f*_,n[9]=y*S-M,n[2]=M*S-y,n[6]=d*_,n[10]=T*S+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kv,e,Zv)}lookAt(e,n,r){const a=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),fr.crossVectors(r,Fn),fr.lengthSq()===0&&(Math.abs(r.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),fr.crossVectors(r,Fn)),fr.normalize(),el.crossVectors(Fn,fr),a[0]=fr.x,a[4]=el.x,a[8]=Fn.x,a[1]=fr.y,a[5]=el.y,a[9]=Fn.y,a[2]=fr.z,a[6]=el.z,a[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],_=r[1],S=r[5],x=r[9],y=r[13],M=r[2],T=r[6],v=r[10],g=r[14],N=r[3],L=r[7],C=r[11],G=r[15],O=a[0],U=a[4],X=a[8],P=a[12],R=a[1],z=a[5],oe=a[9],ee=a[13],ce=a[2],he=a[6],se=a[10],le=a[14],k=a[3],ae=a[7],re=a[11],I=a[15];return u[0]=f*O+d*R+p*ce+m*k,u[4]=f*U+d*z+p*he+m*ae,u[8]=f*X+d*oe+p*se+m*re,u[12]=f*P+d*ee+p*le+m*I,u[1]=_*O+S*R+x*ce+y*k,u[5]=_*U+S*z+x*he+y*ae,u[9]=_*X+S*oe+x*se+y*re,u[13]=_*P+S*ee+x*le+y*I,u[2]=M*O+T*R+v*ce+g*k,u[6]=M*U+T*z+v*he+g*ae,u[10]=M*X+T*oe+v*se+g*re,u[14]=M*P+T*ee+v*le+g*I,u[3]=N*O+L*R+C*ce+G*k,u[7]=N*U+L*z+C*he+G*ae,u[11]=N*X+L*oe+C*se+G*re,u[15]=N*P+L*ee+C*le+G*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],_=e[2],S=e[6],x=e[10],y=e[14],M=e[3],T=e[7],v=e[11],g=e[15];return M*(+u*p*S-a*m*S-u*d*x+r*m*x+a*d*y-r*p*y)+T*(+n*p*y-n*m*x+u*f*x-a*f*y+a*m*_-u*p*_)+v*(+n*m*S-n*d*y-u*f*S+r*f*y+u*d*_-r*m*_)+g*(-a*d*_-n*p*S+n*d*x+a*f*S-r*f*x+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],S=e[9],x=e[10],y=e[11],M=e[12],T=e[13],v=e[14],g=e[15],N=S*v*m-T*x*m+T*p*y-d*v*y-S*p*g+d*x*g,L=M*x*m-_*v*m-M*p*y+f*v*y+_*p*g-f*x*g,C=_*T*m-M*S*m+M*d*y-f*T*y-_*d*g+f*S*g,G=M*S*p-_*T*p-M*d*x+f*T*x+_*d*v-f*S*v,O=n*N+r*L+a*C+u*G;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/O;return e[0]=N*U,e[1]=(T*x*u-S*v*u-T*a*y+r*v*y+S*a*g-r*x*g)*U,e[2]=(d*v*u-T*p*u+T*a*m-r*v*m-d*a*g+r*p*g)*U,e[3]=(S*p*u-d*x*u-S*a*m+r*x*m+d*a*y-r*p*y)*U,e[4]=L*U,e[5]=(_*v*u-M*x*u+M*a*y-n*v*y-_*a*g+n*x*g)*U,e[6]=(M*p*u-f*v*u-M*a*m+n*v*m+f*a*g-n*p*g)*U,e[7]=(f*x*u-_*p*u+_*a*m-n*x*m-f*a*y+n*p*y)*U,e[8]=C*U,e[9]=(M*S*u-_*T*u-M*r*y+n*T*y+_*r*g-n*S*g)*U,e[10]=(f*T*u-M*d*u+M*r*m-n*T*m-f*r*g+n*d*g)*U,e[11]=(_*d*u-f*S*u-_*r*m+n*S*m+f*r*y-n*d*y)*U,e[12]=G*U,e[13]=(_*T*a-M*S*a+M*r*x-n*T*x-_*r*v+n*S*v)*U,e[14]=(M*d*a-f*T*a-M*r*p+n*T*p+f*r*v-n*d*v)*U,e[15]=(f*S*a-_*d*a+_*r*p-n*S*p-f*r*x+n*d*x)*U,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,_=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*f,0,m*p-a*d,_*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,_=f+f,S=d+d,x=u*m,y=u*_,M=u*S,T=f*_,v=f*S,g=d*S,N=p*m,L=p*_,C=p*S,G=r.x,O=r.y,U=r.z;return a[0]=(1-(T+g))*G,a[1]=(y+C)*G,a[2]=(M-L)*G,a[3]=0,a[4]=(y-C)*O,a[5]=(1-(x+g))*O,a[6]=(v+N)*O,a[7]=0,a[8]=(M+L)*U,a[9]=(v-N)*U,a[10]=(1-(x+T))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=ws.set(a[0],a[1],a[2]).length();const f=ws.set(a[4],a[5],a[6]).length(),d=ws.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ni.copy(this);const m=1/u,_=1/f,S=1/d;return ni.elements[0]*=m,ni.elements[1]*=m,ni.elements[2]*=m,ni.elements[4]*=_,ni.elements[5]*=_,ni.elements[6]*=_,ni.elements[8]*=S,ni.elements[9]*=S,ni.elements[10]*=S,n.setFromRotationMatrix(ni),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Ni){const p=this.elements,m=2*u/(n-e),_=2*u/(r-a),S=(n+e)/(n-e),x=(r+a)/(r-a);let y,M;if(d===Ni)y=-(f+u)/(f-u),M=-2*f*u/(f-u);else if(d===Tl)y=-f/(f-u),M=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=M,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Ni){const p=this.elements,m=1/(n-e),_=1/(r-a),S=1/(f-u),x=(n+e)*m,y=(r+a)*_;let M,T;if(d===Ni)M=(f+u)*S,T=-2*S;else if(d===Tl)M=u*S,T=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=T,p[14]=-M,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const ws=new ne,ni=new qt,Kv=new ne(0,0,0),Zv=new ne(1,1,1),fr=new ne,el=new ne,Fn=new ne,Np=new qt,Fp=new Oo;class ki{constructor(e=0,n=0,r=0,a=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],_=a[9],S=a[2],x=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-mt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Np.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Np,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fp.setFromEuler(this),this.setFromQuaternion(Fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class km{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qv=0;const Op=new ne,As=new Oo,Pi=new qt,tl=new ne,bo=new ne,Jv=new ne,e0=new Oo,Bp=new ne(1,0,0),kp=new ne(0,1,0),zp=new ne(0,0,1),Hp={type:"added"},t0={type:"removed"},Rs={type:"childadded",child:null},Ac={type:"childremoved",child:null};class kn extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new ne,n=new ki,r=new Oo,a=new ne(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new qt},normalMatrix:{value:new st}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new km,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Bp,e)}rotateY(e){return this.rotateOnAxis(kp,e)}rotateZ(e){return this.rotateOnAxis(zp,e)}translateOnAxis(e,n){return Op.copy(e).applyQuaternion(this.quaternion),this.position.add(Op.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bp,e)}translateY(e){return this.translateOnAxis(kp,e)}translateZ(e){return this.translateOnAxis(zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?tl.copy(e):tl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(bo,tl,this.up):Pi.lookAt(tl,bo,this.up),this.quaternion.setFromRotationMatrix(Pi),a&&(Pi.extractRotation(a.matrixWorld),As.setFromRotationMatrix(Pi),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hp),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(t0),Ac.child=e,this.dispatchEvent(Ac),Ac.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hp),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,Jv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const S=p[m];u(e.shapes,S)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),_=f(e.images),S=f(e.shapes),x=f(e.skeletons),y=f(e.animations),M=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=a,r;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}kn.DEFAULT_UP=new ne(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new ne,bi=new ne,Rc=new ne,Li=new ne,Cs=new ne,Ps=new ne,Vp=new ne,Cc=new ne,Pc=new ne,bc=new ne,Lc=new Gt,Dc=new Gt,Uc=new Gt;class si{constructor(e=new ne,n=new ne,r=new ne){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ii.subVectors(e,n),a.cross(ii);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ii.subVectors(a,n),bi.subVectors(r,n),Rc.subVectors(e,n);const f=ii.dot(ii),d=ii.dot(bi),p=ii.dot(Rc),m=bi.dot(bi),_=bi.dot(Rc),S=f*m-d*d;if(S===0)return u.set(0,0,0),null;const x=1/S,y=(m*p-d*_)*x,M=(f*_-d*p)*x;return u.set(1-y-M,M,y)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Li)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Li.x),p.addScaledVector(f,Li.y),p.addScaledVector(d,Li.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return Lc.setScalar(0),Dc.setScalar(0),Uc.setScalar(0),Lc.fromBufferAttribute(e,n),Dc.fromBufferAttribute(e,r),Uc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Lc,u.x),f.addScaledVector(Dc,u.y),f.addScaledVector(Uc,u.z),f}static isFrontFacing(e,n,r,a){return ii.subVectors(r,n),bi.subVectors(e,n),ii.cross(bi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ii.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return si.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Cs.subVectors(a,r),Ps.subVectors(u,r),Cc.subVectors(e,r);const p=Cs.dot(Cc),m=Ps.dot(Cc);if(p<=0&&m<=0)return n.copy(r);Pc.subVectors(e,a);const _=Cs.dot(Pc),S=Ps.dot(Pc);if(_>=0&&S<=_)return n.copy(a);const x=p*S-_*m;if(x<=0&&p>=0&&_<=0)return f=p/(p-_),n.copy(r).addScaledVector(Cs,f);bc.subVectors(e,u);const y=Cs.dot(bc),M=Ps.dot(bc);if(M>=0&&y<=M)return n.copy(u);const T=y*m-p*M;if(T<=0&&m>=0&&M<=0)return d=m/(m-M),n.copy(r).addScaledVector(Ps,d);const v=_*M-y*S;if(v<=0&&S-_>=0&&y-M>=0)return Vp.subVectors(u,a),d=(S-_)/(S-_+(y-M)),n.copy(a).addScaledVector(Vp,d);const g=1/(v+T+x);return f=T*g,d=x*g,n.copy(r).addScaledVector(Cs,f).addScaledVector(Ps,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},nl={h:0,s:0,l:0};function Ic(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class At{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=yt.workingColorSpace){return this.r=e,this.g=n,this.b=r,yt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=yt.workingColorSpace){if(e=Ov(e,1),n=mt(n,0,1),r=mt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Ic(f,u,e+1/3),this.g=Ic(f,u,e),this.b=Ic(f,u,e-1/3)}return yt.toWorkingColorSpace(this,a),this}setStyle(e,n=Bn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const r=zm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return yt.fromWorkingColorSpace(mn.copy(this),e),Math.round(mt(mn.r*255,0,255))*65536+Math.round(mt(mn.g*255,0,255))*256+Math.round(mt(mn.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=yt.workingColorSpace){yt.fromWorkingColorSpace(mn.copy(this),n);const r=mn.r,a=mn.g,u=mn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const S=f-d;switch(m=_<=.5?S/(f+d):S/(2-f-d),f){case r:p=(a-u)/S+(a<u?6:0);break;case a:p=(u-r)/S+2;break;case u:p=(r-a)/S+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=yt.workingColorSpace){return yt.fromWorkingColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Bn){yt.fromWorkingColorSpace(mn.copy(this),e);const n=mn.r,r=mn.g,a=mn.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+n,dr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(dr),e.getHSL(nl);const r=_c(dr.h,nl.h,n),a=_c(dr.s,nl.s,n),u=_c(dr.l,nl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new At;At.NAMES=zm;let n0=0;class Rl extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=Fs,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=qc,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(r.blending=this.blending),this.side!==_r&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Xc&&(r.blendSrc=this.blendSrc),this.blendDst!==qc&&(r.blendDst=this.blendDst),this.blendEquation!==Hr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hm extends Rl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Em,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new ne,il=new Pt;class mi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Pp,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)il.fromBufferAttribute(this,n),il.applyMatrix3(e),this.setXY(n,il.x,il.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix3(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix4(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyNormalMatrix(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.transformDirection(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ro(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ro(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ro(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ro(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ro(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),a=Pn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),a=Pn(a,this.array),u=Pn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pp&&(e.usage=this.usage),e}}class Vm extends mi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Gm extends mi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class qr extends mi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let i0=0;const qn=new qt,Nc=new kn,bs=new ne,On=new Bo,Lo=new Bo,rn=new ne;class $r extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fm(e)?Gm:Vm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new st().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,n,r){return qn.makeTranslation(e,n,r),this.applyMatrix4(qn),this}scale(e,n,r){return qn.makeScale(e,n,r),this.applyMatrix4(qn),this}lookAt(e){return Nc.lookAt(e),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new qr(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];On.setFromBufferAttribute(u),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Lo.setFromBufferAttribute(d),this.morphTargetsRelative?(rn.addVectors(On.min,Lo.min),On.expandByPoint(rn),rn.addVectors(On.max,Lo.max),On.expandByPoint(rn)):(On.expandByPoint(Lo.min),On.expandByPoint(Lo.max))}On.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)rn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(rn));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)rn.fromBufferAttribute(d,m),p&&(bs.fromBufferAttribute(e,m),rn.add(bs)),a=Math.max(a,r.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let X=0;X<r.count;X++)d[X]=new ne,p[X]=new ne;const m=new ne,_=new ne,S=new ne,x=new Pt,y=new Pt,M=new Pt,T=new ne,v=new ne;function g(X,P,R){m.fromBufferAttribute(r,X),_.fromBufferAttribute(r,P),S.fromBufferAttribute(r,R),x.fromBufferAttribute(u,X),y.fromBufferAttribute(u,P),M.fromBufferAttribute(u,R),_.sub(m),S.sub(m),y.sub(x),M.sub(x);const z=1/(y.x*M.y-M.x*y.y);isFinite(z)&&(T.copy(_).multiplyScalar(M.y).addScaledVector(S,-y.y).multiplyScalar(z),v.copy(S).multiplyScalar(y.x).addScaledVector(_,-M.x).multiplyScalar(z),d[X].add(T),d[P].add(T),d[R].add(T),p[X].add(v),p[P].add(v),p[R].add(v))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let X=0,P=N.length;X<P;++X){const R=N[X],z=R.start,oe=R.count;for(let ee=z,ce=z+oe;ee<ce;ee+=3)g(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const L=new ne,C=new ne,G=new ne,O=new ne;function U(X){G.fromBufferAttribute(a,X),O.copy(G);const P=d[X];L.copy(P),L.sub(G.multiplyScalar(G.dot(P))).normalize(),C.crossVectors(O,P);const z=C.dot(p[X])<0?-1:1;f.setXYZW(X,L.x,L.y,L.z,z)}for(let X=0,P=N.length;X<P;++X){const R=N[X],z=R.start,oe=R.count;for(let ee=z,ce=z+oe;ee<ce;ee+=3)U(e.getX(ee+0)),U(e.getX(ee+1)),U(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new mi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const a=new ne,u=new ne,f=new ne,d=new ne,p=new ne,m=new ne,_=new ne,S=new ne;if(e)for(let x=0,y=e.count;x<y;x+=3){const M=e.getX(x+0),T=e.getX(x+1),v=e.getX(x+2);a.fromBufferAttribute(n,M),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,v),_.subVectors(f,u),S.subVectors(a,u),_.cross(S),d.fromBufferAttribute(r,M),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,v),d.add(_),p.add(_),m.add(_),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let x=0,y=n.count;x<y;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),_.subVectors(f,u),S.subVectors(a,u),_.cross(S),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)rn.fromBufferAttribute(e,n),rn.normalize(),e.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,S=d.normalized,x=new m.constructor(p.length*_);let y=0,M=0;for(let T=0,v=p.length;T<v;T++){d.isInterleavedBufferAttribute?y=p[T]*d.data.stride+d.offset:y=p[T]*_;for(let g=0;g<_;g++)x[M++]=m[y++]}return new mi(x,_,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $r,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,S=m.length;_<S;_++){const x=m[_],y=e(x,r);p.push(y)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let S=0,x=m.length;S<x;S++){const y=m[S];_.push(y.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],S=u[m];for(let x=0,y=S.length;x<y;x++)_.push(S[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const S=f[m];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gp=new qt,Nr=new $v,rl=new zf,Wp=new ne,sl=new ne,ol=new ne,al=new ne,Fc=new ne,ll=new ne,Xp=new ne,ul=new ne;class Fi extends kn{constructor(e=new $r,n=new Hm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){ll.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],S=u[p];_!==0&&(Fc.fromBufferAttribute(S,e),f?ll.addScaledVector(Fc,_):ll.addScaledVector(Fc.sub(n),_))}n.add(ll)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),rl.copy(r.boundingSphere),rl.applyMatrix4(u),Nr.copy(e.ray).recast(e.near),!(rl.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(rl,Wp)===null||Nr.origin.distanceToSquared(Wp)>(e.far-e.near)**2))&&(Gp.copy(u).invert(),Nr.copy(e.ray).applyMatrix4(Gp),!(r.boundingBox!==null&&Nr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Nr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,S=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let M=0,T=x.length;M<T;M++){const v=x[M],g=f[v.materialIndex],N=Math.max(v.start,y.start),L=Math.min(d.count,Math.min(v.start+v.count,y.start+y.count));for(let C=N,G=L;C<G;C+=3){const O=d.getX(C),U=d.getX(C+1),X=d.getX(C+2);a=cl(this,g,e,r,m,_,S,O,U,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const M=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let v=M,g=T;v<g;v+=3){const N=d.getX(v),L=d.getX(v+1),C=d.getX(v+2);a=cl(this,f,e,r,m,_,S,N,L,C),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let M=0,T=x.length;M<T;M++){const v=x[M],g=f[v.materialIndex],N=Math.max(v.start,y.start),L=Math.min(p.count,Math.min(v.start+v.count,y.start+y.count));for(let C=N,G=L;C<G;C+=3){const O=C,U=C+1,X=C+2;a=cl(this,g,e,r,m,_,S,O,U,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const M=Math.max(0,y.start),T=Math.min(p.count,y.start+y.count);for(let v=M,g=T;v<g;v+=3){const N=v,L=v+1,C=v+2;a=cl(this,f,e,r,m,_,S,N,L,C),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}}}function r0(o,e,n,r,a,u,f,d){let p;if(e.side===bn?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===_r,d),p===null)return null;ul.copy(d),ul.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(ul);return m<n.near||m>n.far?null:{distance:m,point:ul.clone(),object:o}}function cl(o,e,n,r,a,u,f,d,p,m){o.getVertexPosition(d,sl),o.getVertexPosition(p,ol),o.getVertexPosition(m,al);const _=r0(o,e,n,r,sl,ol,al,Xp);if(_){const S=new ne;si.getBarycoord(Xp,sl,ol,al,S),a&&(_.uv=si.getInterpolatedAttribute(a,d,p,m,S,new Pt)),u&&(_.uv1=si.getInterpolatedAttribute(u,d,p,m,S,new Pt)),f&&(_.normal=si.getInterpolatedAttribute(f,d,p,m,S,new ne),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new ne,materialIndex:0};si.getNormal(sl,ol,al,x.normal),_.face=x,_.barycoord=S}return _}class ko extends $r{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],_=[],S=[];let x=0,y=0;M("z","y","x",-1,-1,r,n,e,f,u,0),M("z","y","x",1,-1,r,n,-e,f,u,1),M("x","z","y",1,1,e,r,n,a,f,2),M("x","z","y",1,-1,e,r,-n,a,f,3),M("x","y","z",1,-1,e,n,r,a,u,4),M("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new qr(m,3)),this.setAttribute("normal",new qr(_,3)),this.setAttribute("uv",new qr(S,2));function M(T,v,g,N,L,C,G,O,U,X,P){const R=C/U,z=G/X,oe=C/2,ee=G/2,ce=O/2,he=U+1,se=X+1;let le=0,k=0;const ae=new ne;for(let re=0;re<se;re++){const I=re*z-ee;for(let te=0;te<he;te++){const Ie=te*R-oe;ae[T]=Ie*N,ae[v]=I*L,ae[g]=ce,m.push(ae.x,ae.y,ae.z),ae[T]=0,ae[v]=0,ae[g]=O>0?1:-1,_.push(ae.x,ae.y,ae.z),S.push(te/U),S.push(1-re/X),le+=1}}for(let re=0;re<X;re++)for(let I=0;I<U;I++){const te=x+I+he*re,Ie=x+I+he*(re+1),Z=x+(I+1)+he*(re+1),de=x+(I+1)+he*re;p.push(te,Ie,de),p.push(Ie,Z,de),k+=6}d.addGroup(y,k,P),y+=k,x+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function yn(o){const e={};for(let n=0;n<o.length;n++){const r=Xs(o[n]);for(const a in r)e[a]=r[a]}return e}function s0(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Wm(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const o0={clone:Xs,merge:yn};var a0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vr extends Rl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a0,this.fragmentShader=l0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=s0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Xm extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Ni}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hr=new ne,qp=new Pt,Yp=new Pt;class Yn extends Xm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Lf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lf*2*Math.atan(Math.tan(gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,n){return this.getViewBounds(e,qp,Yp),n.subVectors(Yp,qp)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(gc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ls=-90,Ds=1;class u0 extends kn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Yn(Ls,Ds,e,n);a.layers=this.layers,this.add(a);const u=new Yn(Ls,Ds,e,n);u.layers=this.layers,this.add(u);const f=new Yn(Ls,Ds,e,n);f.layers=this.layers,this.add(f);const d=new Yn(Ls,Ds,e,n);d.layers=this.layers,this.add(d);const p=new Yn(Ls,Ds,e,n);p.layers=this.layers,this.add(p);const m=new Yn(Ls,Ds,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Ni)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Tl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,_]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(S,x,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Hf extends Ln{constructor(e,n,r,a,u,f,d,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:zs,super(e,n,r,a,u,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class c0 extends jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Hf(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:jn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new ko(5,5,5),u=new vr({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:bn,blending:mr});u.uniforms.tEquirect.value=n;const f=new Fi(a,u),d=n.minFilter;return n.minFilter===Xr&&(n.minFilter=jn),new u0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}class f0 extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Oc=new ne,d0=new ne,h0=new st;class kr{constructor(e=new ne(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Oc.subVectors(r,n).cross(d0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Oc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||h0.getNormalMatrix(e),a=this.coplanarPoint(Oc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new zf,fl=new ne;class qm{constructor(e=new kr,n=new kr,r=new kr,a=new kr,u=new kr,f=new kr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ni){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],_=a[5],S=a[6],x=a[7],y=a[8],M=a[9],T=a[10],v=a[11],g=a[12],N=a[13],L=a[14],C=a[15];if(r[0].setComponents(p-u,x-m,v-y,C-g).normalize(),r[1].setComponents(p+u,x+m,v+y,C+g).normalize(),r[2].setComponents(p+f,x+_,v+M,C+N).normalize(),r[3].setComponents(p-f,x-_,v-M,C-N).normalize(),r[4].setComponents(p-d,x-S,v-T,C-L).normalize(),n===Ni)r[5].setComponents(p+d,x+S,v+T,C+L).normalize();else if(n===Tl)r[5].setComponents(d,S,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(fl.x=a.normal.x>0?e.max.x:e.min.x,fl.y=a.normal.y>0?e.max.y:e.min.y,fl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dl extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Ym extends Ln{constructor(e,n,r,a,u,f,d,p,m,_=Os){if(_!==Os&&_!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Os&&(r=Yr),r===void 0&&_===Gs&&(r=Vs),super(null,a,u,f,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:ai,this.minFilter=p!==void 0?p:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Cl extends $r{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,S=e/d,x=n/p,y=[],M=[],T=[],v=[];for(let g=0;g<_;g++){const N=g*x-f;for(let L=0;L<m;L++){const C=L*S-u;M.push(C,-N,0),T.push(0,0,1),v.push(L/d),v.push(1-g/p)}}for(let g=0;g<p;g++)for(let N=0;N<d;N++){const L=N+m*g,C=N+m*(g+1),G=N+1+m*(g+1),O=N+1+m*g;y.push(L,C,O),y.push(C,G,O)}this.setIndex(y),this.setAttribute("position",new qr(M,3)),this.setAttribute("normal",new qr(T,3)),this.setAttribute("uv",new qr(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.width,e.height,e.widthSegments,e.heightSegments)}}class p0 extends Rl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Av,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class m0 extends Rl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jp={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class g0{constructor(e,n,r){const a=this;let u=!1,f=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(_){d++,u===!1&&a.onStart!==void 0&&a.onStart(_,f,d),u=!0},this.itemEnd=function(_){f++,a.onProgress!==void 0&&a.onProgress(_,f,d),f===d&&(u=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(_){a.onError!==void 0&&a.onError(_)},this.resolveURL=function(_){return p?p(_):_},this.setURLModifier=function(_){return p=_,this},this.addHandler=function(_,S){return m.push(_,S),this},this.removeHandler=function(_){const S=m.indexOf(_);return S!==-1&&m.splice(S,2),this},this.getHandler=function(_){for(let S=0,x=m.length;S<x;S+=2){const y=m[S],M=m[S+1];if(y.global&&(y.lastIndex=0),y.test(_))return M}return null}}}const _0=new g0;class Vf{constructor(e){this.manager=e!==void 0?e:_0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(a,u){r.load(e,a,n,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vf.DEFAULT_MATERIAL_NAME="__DEFAULT";class v0 extends Vf{constructor(e){super(e)}load(e,n,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,f=jp.get(e);if(f!==void 0)return u.manager.itemStart(e),setTimeout(function(){n&&n(f),u.manager.itemEnd(e)},0),f;const d=Io("img");function p(){_(),jp.add(e,this),n&&n(this),u.manager.itemEnd(e)}function m(S){_(),a&&a(S),u.manager.itemError(e),u.manager.itemEnd(e)}function _(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(e),d.src=e,d}}class x0 extends Vf{constructor(e){super(e)}load(e,n,r,a){const u=new Hf;u.colorSpace=Bn;const f=new v0(this.manager);f.setCrossOrigin(this.crossOrigin),f.setPath(this.path);let d=0;function p(m){f.load(e[m],function(_){u.images[m]=_,d++,d===6&&(u.needsUpdate=!0,n&&n(u))},void 0,a)}for(let m=0;m<e.length;++m)p(m);return u}}class S0 extends Xm{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class y0 extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function $p(o,e,n,r){const a=M0(r);switch(n){case Cm:return o*e;case bm:return o*e;case Lm:return o*e*2;case Dm:return o*e/a.components*a.byteLength;case Of:return o*e/a.components*a.byteLength;case Um:return o*e*2/a.components*a.byteLength;case Bf:return o*e*2/a.components*a.byteLength;case Pm:return o*e*3/a.components*a.byteLength;case oi:return o*e*4/a.components*a.byteLength;case kf:return o*e*4/a.components*a.byteLength;case _l:case vl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case xl:case Sl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case of:case lf:return Math.max(o,16)*Math.max(e,8)/4;case sf:case af:return Math.max(o,8)*Math.max(e,8)/2;case uf:case cf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ff:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case df:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case hf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case pf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case mf:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case gf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case _f:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case vf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case xf:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Sf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case yf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Mf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Ef:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Tf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case wf:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case yl:case Af:case Rf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Im:case Cf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Pf:case bf:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function M0(o){switch(o){case Bi:case wm:return{byteLength:1,components:1};case Uo:case Am:case No:return{byteLength:2,components:1};case Nf:case Ff:return{byteLength:2,components:4};case Yr:case If:case Ii:return{byteLength:4,components:1};case Rm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jm(){let o=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function E0(o){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,S=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,_),d.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:S}}function r(d,p,m){const _=p.array,S=p.updateRanges;if(o.bindBuffer(m,d),S.length===0)o.bufferSubData(m,0,_);else{S.sort((y,M)=>y.start-M.start);let x=0;for(let y=1;y<S.length;y++){const M=S[x],T=S[y];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++x,S[x]=T)}S.length=x+1;for(let y=0,M=S.length;y<M;y++){const T=S[y];o.bufferSubData(m,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}var T0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,A0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,L0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,U0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,O0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,B0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Y0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,j0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",tx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ax=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ux=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ex=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ax=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ux=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ox=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,oS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_S=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,MS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ES=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,LS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,US=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,BS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,VS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$S=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ey=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ty=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ny=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:T0,alphahash_pars_fragment:w0,alphamap_fragment:A0,alphamap_pars_fragment:R0,alphatest_fragment:C0,alphatest_pars_fragment:P0,aomap_fragment:b0,aomap_pars_fragment:L0,batching_pars_vertex:D0,batching_vertex:U0,begin_vertex:I0,beginnormal_vertex:N0,bsdfs:F0,iridescence_fragment:O0,bumpmap_pars_fragment:B0,clipping_planes_fragment:k0,clipping_planes_pars_fragment:z0,clipping_planes_pars_vertex:H0,clipping_planes_vertex:V0,color_fragment:G0,color_pars_fragment:W0,color_pars_vertex:X0,color_vertex:q0,common:Y0,cube_uv_reflection_fragment:j0,defaultnormal_vertex:$0,displacementmap_pars_vertex:K0,displacementmap_vertex:Z0,emissivemap_fragment:Q0,emissivemap_pars_fragment:J0,colorspace_fragment:ex,colorspace_pars_fragment:tx,envmap_fragment:nx,envmap_common_pars_fragment:ix,envmap_pars_fragment:rx,envmap_pars_vertex:sx,envmap_physical_pars_fragment:gx,envmap_vertex:ox,fog_vertex:ax,fog_pars_vertex:lx,fog_fragment:ux,fog_pars_fragment:cx,gradientmap_pars_fragment:fx,lightmap_pars_fragment:dx,lights_lambert_fragment:hx,lights_lambert_pars_fragment:px,lights_pars_begin:mx,lights_toon_fragment:_x,lights_toon_pars_fragment:vx,lights_phong_fragment:xx,lights_phong_pars_fragment:Sx,lights_physical_fragment:yx,lights_physical_pars_fragment:Mx,lights_fragment_begin:Ex,lights_fragment_maps:Tx,lights_fragment_end:wx,logdepthbuf_fragment:Ax,logdepthbuf_pars_fragment:Rx,logdepthbuf_pars_vertex:Cx,logdepthbuf_vertex:Px,map_fragment:bx,map_pars_fragment:Lx,map_particle_fragment:Dx,map_particle_pars_fragment:Ux,metalnessmap_fragment:Ix,metalnessmap_pars_fragment:Nx,morphinstance_vertex:Fx,morphcolor_vertex:Ox,morphnormal_vertex:Bx,morphtarget_pars_vertex:kx,morphtarget_vertex:zx,normal_fragment_begin:Hx,normal_fragment_maps:Vx,normal_pars_fragment:Gx,normal_pars_vertex:Wx,normal_vertex:Xx,normalmap_pars_fragment:qx,clearcoat_normal_fragment_begin:Yx,clearcoat_normal_fragment_maps:jx,clearcoat_pars_fragment:$x,iridescence_pars_fragment:Kx,opaque_fragment:Zx,packing:Qx,premultiplied_alpha_fragment:Jx,project_vertex:eS,dithering_fragment:tS,dithering_pars_fragment:nS,roughnessmap_fragment:iS,roughnessmap_pars_fragment:rS,shadowmap_pars_fragment:sS,shadowmap_pars_vertex:oS,shadowmap_vertex:aS,shadowmask_pars_fragment:lS,skinbase_vertex:uS,skinning_pars_vertex:cS,skinning_vertex:fS,skinnormal_vertex:dS,specularmap_fragment:hS,specularmap_pars_fragment:pS,tonemapping_fragment:mS,tonemapping_pars_fragment:gS,transmission_fragment:_S,transmission_pars_fragment:vS,uv_pars_fragment:xS,uv_pars_vertex:SS,uv_vertex:yS,worldpos_vertex:MS,background_vert:ES,background_frag:TS,backgroundCube_vert:wS,backgroundCube_frag:AS,cube_vert:RS,cube_frag:CS,depth_vert:PS,depth_frag:bS,distanceRGBA_vert:LS,distanceRGBA_frag:DS,equirect_vert:US,equirect_frag:IS,linedashed_vert:NS,linedashed_frag:FS,meshbasic_vert:OS,meshbasic_frag:BS,meshlambert_vert:kS,meshlambert_frag:zS,meshmatcap_vert:HS,meshmatcap_frag:VS,meshnormal_vert:GS,meshnormal_frag:WS,meshphong_vert:XS,meshphong_frag:qS,meshphysical_vert:YS,meshphysical_frag:jS,meshtoon_vert:$S,meshtoon_frag:KS,points_vert:ZS,points_frag:QS,shadow_vert:JS,shadow_frag:ey,sprite_vert:ty,sprite_frag:ny},Ce={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},pi={basic:{uniforms:yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new At(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:yn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:yn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new At(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:yn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:yn([Ce.points,Ce.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:yn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:yn([Ce.common,Ce.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:yn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:yn([Ce.sprite,Ce.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:yn([Ce.common,Ce.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:yn([Ce.lights,Ce.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};pi.physical={uniforms:yn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const hl={r:0,b:0,g:0},Or=new ki,iy=new qt;function ry(o,e,n,r,a,u,f){const d=new At(0);let p=u===!0?0:1,m,_,S=null,x=0,y=null;function M(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?n:e).get(C)),C}function T(L){let C=!1;const G=M(L);G===null?g(d,p):G&&G.isColor&&(g(G,1),C=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function v(L,C){const G=M(C);G&&(G.isCubeTexture||G.mapping===Al)?(_===void 0&&(_=new Fi(new ko(1,1,1),new vr({name:"BackgroundCubeMaterial",uniforms:Xs(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(O,U,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Or.copy(C.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),_.material.uniforms.envMap.value=G,_.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(iy.makeRotationFromEuler(Or)),_.material.toneMapped=yt.getTransfer(G.colorSpace)!==wt,(S!==G||x!==G.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,S=G,x=G.version,y=o.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):G&&G.isTexture&&(m===void 0&&(m=new Fi(new Cl(2,2),new vr({name:"BackgroundMaterial",uniforms:Xs(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=G,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=yt.getTransfer(G.colorSpace)!==wt,G.matrixAutoUpdate===!0&&G.updateMatrix(),m.material.uniforms.uvTransform.value.copy(G.matrix),(S!==G||x!==G.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,S=G,x=G.version,y=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function g(L,C){L.getRGB(hl,Wm(o)),r.buffers.color.setClear(hl.r,hl.g,hl.b,C,f)}function N(){_!==void 0&&(_.geometry.dispose(),_.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(L,C=1){d.set(L),p=C,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,g(d,p)},render:T,addToRenderList:v,dispose:N}}function sy(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(R,z,oe,ee,ce){let he=!1;const se=S(ee,oe,z);u!==se&&(u=se,m(u.object)),he=y(R,ee,oe,ce),he&&M(R,ee,oe,ce),ce!==null&&e.update(ce,o.ELEMENT_ARRAY_BUFFER),(he||f)&&(f=!1,C(R,z,oe,ee),ce!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function p(){return o.createVertexArray()}function m(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function S(R,z,oe){const ee=oe.wireframe===!0;let ce=r[R.id];ce===void 0&&(ce={},r[R.id]=ce);let he=ce[z.id];he===void 0&&(he={},ce[z.id]=he);let se=he[ee];return se===void 0&&(se=x(p()),he[ee]=se),se}function x(R){const z=[],oe=[],ee=[];for(let ce=0;ce<n;ce++)z[ce]=0,oe[ce]=0,ee[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:oe,attributeDivisors:ee,object:R,attributes:{},index:null}}function y(R,z,oe,ee){const ce=u.attributes,he=z.attributes;let se=0;const le=oe.getAttributes();for(const k in le)if(le[k].location>=0){const re=ce[k];let I=he[k];if(I===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),re===void 0||re.attribute!==I||I&&re.data!==I.data)return!0;se++}return u.attributesNum!==se||u.index!==ee}function M(R,z,oe,ee){const ce={},he=z.attributes;let se=0;const le=oe.getAttributes();for(const k in le)if(le[k].location>=0){let re=he[k];re===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const I={};I.attribute=re,re&&re.data&&(I.data=re.data),ce[k]=I,se++}u.attributes=ce,u.attributesNum=se,u.index=ee}function T(){const R=u.newAttributes;for(let z=0,oe=R.length;z<oe;z++)R[z]=0}function v(R){g(R,0)}function g(R,z){const oe=u.newAttributes,ee=u.enabledAttributes,ce=u.attributeDivisors;oe[R]=1,ee[R]===0&&(o.enableVertexAttribArray(R),ee[R]=1),ce[R]!==z&&(o.vertexAttribDivisor(R,z),ce[R]=z)}function N(){const R=u.newAttributes,z=u.enabledAttributes;for(let oe=0,ee=z.length;oe<ee;oe++)z[oe]!==R[oe]&&(o.disableVertexAttribArray(oe),z[oe]=0)}function L(R,z,oe,ee,ce,he,se){se===!0?o.vertexAttribIPointer(R,z,oe,ce,he):o.vertexAttribPointer(R,z,oe,ee,ce,he)}function C(R,z,oe,ee){T();const ce=ee.attributes,he=oe.getAttributes(),se=z.defaultAttributeValues;for(const le in he){const k=he[le];if(k.location>=0){let ae=ce[le];if(ae===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const re=ae.normalized,I=ae.itemSize,te=e.get(ae);if(te===void 0)continue;const Ie=te.buffer,Z=te.type,de=te.bytesPerElement,ye=Z===o.INT||Z===o.UNSIGNED_INT||ae.gpuType===If;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Te=ve.stride,Ue=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<k.locationSize;Ze++)g(k.location+Ze,ve.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<k.locationSize;Ze++)v(k.location+Ze);o.bindBuffer(o.ARRAY_BUFFER,Ie);for(let Ze=0;Ze<k.locationSize;Ze++)L(k.location+Ze,I/k.locationSize,Z,re,Te*de,(Ue+I/k.locationSize*Ze)*de,ye)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<k.locationSize;ve++)g(k.location+ve,ae.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<k.locationSize;ve++)v(k.location+ve);o.bindBuffer(o.ARRAY_BUFFER,Ie);for(let ve=0;ve<k.locationSize;ve++)L(k.location+ve,I/k.locationSize,Z,re,I*de,I/k.locationSize*ve*de,ye)}}else if(se!==void 0){const re=se[le];if(re!==void 0)switch(re.length){case 2:o.vertexAttrib2fv(k.location,re);break;case 3:o.vertexAttrib3fv(k.location,re);break;case 4:o.vertexAttrib4fv(k.location,re);break;default:o.vertexAttrib1fv(k.location,re)}}}}N()}function G(){X();for(const R in r){const z=r[R];for(const oe in z){const ee=z[oe];for(const ce in ee)_(ee[ce].object),delete ee[ce];delete z[oe]}delete r[R]}}function O(R){if(r[R.id]===void 0)return;const z=r[R.id];for(const oe in z){const ee=z[oe];for(const ce in ee)_(ee[ce].object),delete ee[ce];delete z[oe]}delete r[R.id]}function U(R){for(const z in r){const oe=r[z];if(oe[R.id]===void 0)continue;const ee=oe[R.id];for(const ce in ee)_(ee[ce].object),delete ee[ce];delete oe[R.id]}}function X(){P(),f=!0,u!==a&&(u=a,m(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:X,resetDefaultState:P,dispose:G,releaseStatesOfGeometry:O,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:v,disableUnusedAttributes:N}}function oy(o,e,n){let r;function a(m){r=m}function u(m,_){o.drawArrays(r,m,_),n.update(_,r,1)}function f(m,_,S){S!==0&&(o.drawArraysInstanced(r,m,_,S),n.update(_,r,S))}function d(m,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,S);let y=0;for(let M=0;M<S;M++)y+=_[M];n.update(y,r,1)}function p(m,_,S,x){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<m.length;M++)f(m[M],_[M],x[M]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,S);let M=0;for(let T=0;T<S;T++)M+=_[T]*x[T];n.update(M,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function ay(o,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(U){return!(U!==oi&&r.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const X=U===No&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Bi&&r.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Ii&&!X)}function p(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const S=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),v=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=M>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:S,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:G,maxSamples:O}}function ly(o){const e=this;let n=null,r=0,a=!1,u=!1;const f=new kr,d=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const y=S.length!==0||x||r!==0||a;return a=x,r=S.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,x){n=_(S,x,0)},this.setState=function(S,x,y){const M=S.clippingPlanes,T=S.clipIntersection,v=S.clipShadows,g=o.get(S);if(!a||M===null||M.length===0||u&&!v)u?_(null):m();else{const N=u?0:r,L=N*4;let C=g.clippingState||null;p.value=C,C=_(M,x,L,y);for(let G=0;G!==L;++G)C[G]=n[G];g.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(S,x,y,M){const T=S!==null?S.length:0;let v=null;if(T!==0){if(v=p.value,M!==!0||v===null){const g=y+T*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(v===null||v.length<g)&&(v=new Float32Array(g));for(let L=0,C=y;L!==T;++L,C+=4)f.copy(S[L]).applyMatrix4(N,d),f.normal.toArray(v,C),v[C+3]=f.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,v}}function uy(o){let e=new WeakMap;function n(f,d){return d===ef?f.mapping=zs:d===tf&&(f.mapping=Hs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===ef||d===tf)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new c0(p.height);return m.fromEquirectangularTexture(o,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Ns=4,Kp=[.125,.215,.35,.446,.526,.582],Vr=20,Bc=new S0,Zp=new At;let kc=null,zc=0,Hc=0,Vc=!1;const zr=(1+Math.sqrt(5))/2,Us=1/zr,Qp=[new ne(-zr,Us,0),new ne(zr,Us,0),new ne(-Us,0,zr),new ne(Us,0,zr),new ne(0,zr,-Us),new ne(0,zr,Us),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class Jp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){kc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kc,zc,Hc),this._renderer.xr.enabled=Vc,e.scissorTest=!1,pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:No,format:oi,colorSpace:Ws,depthBuffer:!1},a=em(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=em(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cy(u)),this._blurMaterial=fy(u,e,n)}return a}_compileMaterial(e){const n=new Fi(this._lodPlanes[0],e);this._renderer.compile(n,Bc)}_sceneToCubeUV(e,n,r,a){const d=new Yn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,x=_.toneMapping;_.getClearColor(Zp),_.toneMapping=gr,_.autoClear=!1;const y=new Hm({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),M=new Fi(new ko,y);let T=!1;const v=e.background;v?v.isColor&&(y.color.copy(v),e.background=null,T=!0):(y.color.copy(Zp),T=!0);for(let g=0;g<6;g++){const N=g%3;N===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):N===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const L=this._cubeSize;pl(a,N*L,g>2?L:0,L,L),_.setRenderTarget(a),T&&_.render(M,d),_.render(e,d)}M.geometry.dispose(),M.material.dispose(),_.toneMapping=x,_.autoClear=S,e.background=v}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===zs||e.mapping===Hs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tm());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new Fi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;pl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Bc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Qp[(a-u-1)%Qp.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,S=new Fi(this._lodPlanes[a],m),x=m.uniforms,y=this._sizeLods[r]-1,M=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Vr-1),T=u/M,v=isFinite(u)?1+Math.floor(_*T):Vr;v>Vr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Vr}`);const g=[];let N=0;for(let U=0;U<Vr;++U){const X=U/T,P=Math.exp(-X*X/2);g.push(P),U===0?N+=P:U<v&&(N+=2*P)}for(let U=0;U<g.length;U++)g[U]=g[U]/N;x.envMap.value=e.texture,x.samples.value=v,x.weights.value=g,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=M,x.mipInt.value=L-r;const C=this._sizeLods[a],G=3*C*(a>L-Ns?a-L+Ns:0),O=4*(this._cubeSize-C);pl(n,G,O,3*C,2*C),p.setRenderTarget(n),p.render(S,Bc)}}function cy(o){const e=[],n=[],r=[];let a=o;const u=o-Ns+1+Kp.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>o-Ns?p=Kp[f-o+Ns-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,S=1+m,x=[_,_,S,_,S,S,_,_,S,S,_,S],y=6,M=6,T=3,v=2,g=1,N=new Float32Array(T*M*y),L=new Float32Array(v*M*y),C=new Float32Array(g*M*y);for(let O=0;O<y;O++){const U=O%3*2/3-1,X=O>2?0:-1,P=[U,X,0,U+2/3,X,0,U+2/3,X+1,0,U,X,0,U+2/3,X+1,0,U,X+1,0];N.set(P,T*M*O),L.set(x,v*M*O);const R=[O,O,O,O,O,O];C.set(R,g*M*O)}const G=new $r;G.setAttribute("position",new mi(N,T)),G.setAttribute("uv",new mi(L,v)),G.setAttribute("faceIndex",new mi(C,g)),e.push(G),a>Ns&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function em(o,e,n){const r=new jr(o,e,n);return r.texture.mapping=Al,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function pl(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function fy(o,e,n){const r=new Float32Array(Vr),a=new ne(0,1,0);return new vr({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function tm(){return new vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function nm(){return new vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Gf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dy(o){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===ef||p===tf,_=p===zs||p===Hs;if(m||_){let S=e.get(d);const x=S!==void 0?S.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Jp(o)),S=m?n.fromEquirectangular(d,S):n.fromCubemap(d,S),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),S.texture;if(S!==void 0)return S.texture;{const y=d.image;return m&&y&&y.height>0||_&&y&&a(y)?(n===null&&(n=new Jp(o)),S=m?n.fromEquirectangular(d):n.fromCubemap(d),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),d.addEventListener("dispose",u),S.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function hy(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Is("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function py(o,e,n,r){const a={},u=new WeakMap;function f(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",f),delete a[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(S,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(S){const x=S.attributes;for(const y in x)e.update(x[y],o.ARRAY_BUFFER)}function m(S){const x=[],y=S.index,M=S.attributes.position;let T=0;if(y!==null){const N=y.array;T=y.version;for(let L=0,C=N.length;L<C;L+=3){const G=N[L+0],O=N[L+1],U=N[L+2];x.push(G,O,O,U,U,G)}}else if(M!==void 0){const N=M.array;T=M.version;for(let L=0,C=N.length/3-1;L<C;L+=3){const G=L+0,O=L+1,U=L+2;x.push(G,O,O,U,U,G)}}else return;const v=new(Fm(x)?Gm:Vm)(x,1);v.version=T;const g=u.get(S);g&&e.remove(g),u.set(S,v)}function _(S){const x=u.get(S);if(x){const y=S.index;y!==null&&x.version<y.version&&m(S)}else m(S);return u.get(S)}return{get:d,update:p,getWireframeAttribute:_}}function my(o,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,y){o.drawElements(r,y,u,x*f),n.update(y,r,1)}function m(x,y,M){M!==0&&(o.drawElementsInstanced(r,y,u,x*f,M),n.update(y,r,M))}function _(x,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,M);let v=0;for(let g=0;g<M;g++)v+=y[g];n.update(v,r,1)}function S(x,y,M,T){if(M===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<x.length;g++)m(x[g]/f,y[g],T[g]);else{v.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,T,0,M);let g=0;for(let N=0;N<M;N++)g+=y[N]*T[N];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=S}function gy(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case o.TRIANGLES:n.triangles+=d*(u/3);break;case o.LINES:n.lines+=d*(u/2);break;case o.LINE_STRIP:n.lines+=d*(u-1);break;case o.LINE_LOOP:n.lines+=d*u;break;case o.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function _y(o,e,n){const r=new WeakMap,a=new Gt;function u(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==S){let R=function(){X.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var y=R;x!==void 0&&x.texture.dispose();const M=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let C=0;M===!0&&(C=1),T===!0&&(C=2),v===!0&&(C=3);let G=d.attributes.position.count*C,O=1;G>e.maxTextureSize&&(O=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const U=new Float32Array(G*O*4*S),X=new Bm(U,G,O,S);X.type=Ii,X.needsUpdate=!0;const P=C*4;for(let z=0;z<S;z++){const oe=g[z],ee=N[z],ce=L[z],he=G*O*4*z;for(let se=0;se<oe.count;se++){const le=se*P;M===!0&&(a.fromBufferAttribute(oe,se),U[he+le+0]=a.x,U[he+le+1]=a.y,U[he+le+2]=a.z,U[he+le+3]=0),T===!0&&(a.fromBufferAttribute(ee,se),U[he+le+4]=a.x,U[he+le+5]=a.y,U[he+le+6]=a.z,U[he+le+7]=0),v===!0&&(a.fromBufferAttribute(ce,se),U[he+le+8]=a.x,U[he+le+9]=a.y,U[he+le+10]=a.z,U[he+le+11]=ce.itemSize===4?a.w:1)}}x={count:S,texture:X,size:new Pt(G,O)},r.set(d,x),d.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,n);else{let M=0;for(let v=0;v<m.length;v++)M+=m[v];const T=d.morphTargetsRelative?1:1-M;p.getUniforms().setValue(o,"morphTargetBaseInfluence",T),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function vy(o,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,S=e.get(p,_);if(a.get(S)!==m&&(e.update(S),a.set(S,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return S}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}const $m=new Ln,im=new Ym(1,1),Km=new Bm,Zm=new Yv,Qm=new Hf,rm=[],sm=[],om=new Float32Array(16),am=new Float32Array(9),lm=new Float32Array(4);function Ys(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let u=rm[a];if(u===void 0&&(u=new Float32Array(a),rm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,o[f].toArray(u,d)}return u}function Kt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function Zt(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function Pl(o,e){let n=sm[e];n===void 0&&(n=new Int32Array(e),sm[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function xy(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function Sy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;o.uniform2fv(this.addr,e),Zt(n,e)}}function yy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;o.uniform3fv(this.addr,e),Zt(n,e)}}function My(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;o.uniform4fv(this.addr,e),Zt(n,e)}}function Ey(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;lm.set(r),o.uniformMatrix2fv(this.addr,!1,lm),Zt(n,r)}}function Ty(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;am.set(r),o.uniformMatrix3fv(this.addr,!1,am),Zt(n,r)}}function wy(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;om.set(r),o.uniformMatrix4fv(this.addr,!1,om),Zt(n,r)}}function Ay(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function Ry(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;o.uniform2iv(this.addr,e),Zt(n,e)}}function Cy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;o.uniform3iv(this.addr,e),Zt(n,e)}}function Py(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;o.uniform4iv(this.addr,e),Zt(n,e)}}function by(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function Ly(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;o.uniform2uiv(this.addr,e),Zt(n,e)}}function Dy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;o.uniform3uiv(this.addr,e),Zt(n,e)}}function Uy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;o.uniform4uiv(this.addr,e),Zt(n,e)}}function Iy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);let u;this.type===o.SAMPLER_2D_SHADOW?(im.compareFunction=Nm,u=im):u=$m,n.setTexture2D(e||u,a)}function Ny(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Zm,a)}function Fy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Qm,a)}function Oy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Km,a)}function By(o){switch(o){case 5126:return xy;case 35664:return Sy;case 35665:return yy;case 35666:return My;case 35674:return Ey;case 35675:return Ty;case 35676:return wy;case 5124:case 35670:return Ay;case 35667:case 35671:return Ry;case 35668:case 35672:return Cy;case 35669:case 35673:return Py;case 5125:return by;case 36294:return Ly;case 36295:return Dy;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return Fy;case 36289:case 36303:case 36311:case 36292:return Oy}}function ky(o,e){o.uniform1fv(this.addr,e)}function zy(o,e){const n=Ys(e,this.size,2);o.uniform2fv(this.addr,n)}function Hy(o,e){const n=Ys(e,this.size,3);o.uniform3fv(this.addr,n)}function Vy(o,e){const n=Ys(e,this.size,4);o.uniform4fv(this.addr,n)}function Gy(o,e){const n=Ys(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function Wy(o,e){const n=Ys(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function Xy(o,e){const n=Ys(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function qy(o,e){o.uniform1iv(this.addr,e)}function Yy(o,e){o.uniform2iv(this.addr,e)}function jy(o,e){o.uniform3iv(this.addr,e)}function $y(o,e){o.uniform4iv(this.addr,e)}function Ky(o,e){o.uniform1uiv(this.addr,e)}function Zy(o,e){o.uniform2uiv(this.addr,e)}function Qy(o,e){o.uniform3uiv(this.addr,e)}function Jy(o,e){o.uniform4uiv(this.addr,e)}function eM(o,e,n){const r=this.cache,a=e.length,u=Pl(n,a);Kt(r,u)||(o.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||$m,u[f])}function tM(o,e,n){const r=this.cache,a=e.length,u=Pl(n,a);Kt(r,u)||(o.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||Zm,u[f])}function nM(o,e,n){const r=this.cache,a=e.length,u=Pl(n,a);Kt(r,u)||(o.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||Qm,u[f])}function iM(o,e,n){const r=this.cache,a=e.length,u=Pl(n,a);Kt(r,u)||(o.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||Km,u[f])}function rM(o){switch(o){case 5126:return ky;case 35664:return zy;case 35665:return Hy;case 35666:return Vy;case 35674:return Gy;case 35675:return Wy;case 35676:return Xy;case 5124:case 35670:return qy;case 35667:case 35671:return Yy;case 35668:case 35672:return jy;case 35669:case 35673:return $y;case 5125:return Ky;case 36294:return Zy;case 36295:return Qy;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return eM;case 35679:case 36299:case 36307:return tM;case 35680:case 36300:case 36308:case 36293:return nM;case 36289:case 36303:case 36311:case 36292:return iM}}class sM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=By(n.type)}}class oM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rM(n.type)}}class aM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Gc=/(\w+)(\])?(\[|\.)?/g;function um(o,e){o.seq.push(e),o.map[e.id]=e}function lM(o,e,n){const r=o.name,a=r.length;for(Gc.lastIndex=0;;){const u=Gc.exec(r),f=Gc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){um(n,m===void 0?new sM(d,o,e):new oM(d,o,e));break}else{let S=n.map[d];S===void 0&&(S=new aM(d),um(n,S)),n=S}}}class Ml{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);lM(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function cm(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const uM=37297;let cM=0;function fM(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const fm=new st;function dM(o){yt._getMatrix(fm,yt.workingColorSpace,o);const e=`mat3( ${fm.elements.map(n=>n.toFixed(4))} )`;switch(yt.getTransfer(o)){case El:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function dm(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+fM(o.getShaderSource(e),f)}else return a}function hM(o,e){const n=dM(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function pM(o,e){let n;switch(e){case vv:n="Linear";break;case xv:n="Reinhard";break;case Sv:n="Cineon";break;case yv:n="ACESFilmic";break;case Ev:n="AgX";break;case Tv:n="Neutral";break;case Mv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ml=new ne;function mM(){yt.getLuminanceCoefficients(ml);const o=ml.x.toFixed(4),e=ml.y.toFixed(4),n=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gM(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function _M(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function vM(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=o.getActiveAttrib(e,a),f=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:o.getAttribLocation(e,f),locationSize:d}}return n}function Do(o){return o!==""}function hm(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pm(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Df(o){return o.replace(xM,yM)}const SM=new Map;function yM(o,e){let n=ot[e];if(n===void 0){const r=SM.get(e);if(r!==void 0)n=ot[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Df(n)}const MM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mm(o){return o.replace(MM,EM)}function EM(o,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function gm(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Mm?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Z_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function wM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case zs:case Hs:e="ENVMAP_TYPE_CUBE";break;case Al:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AM(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function RM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Em:e="ENVMAP_BLENDING_MULTIPLY";break;case gv:e="ENVMAP_BLENDING_MIX";break;case _v:e="ENVMAP_BLENDING_ADD";break}return e}function CM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function PM(o,e,n,r){const a=o.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=TM(n),m=wM(n),_=AM(n),S=RM(n),x=CM(n),y=gM(n),M=_M(u),T=a.createProgram();let v,g,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Do).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Do).join(`
`),g.length>0&&(g+=`
`)):(v=[gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),g=[gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gr?"#define TONE_MAPPING":"",n.toneMapping!==gr?ot.tonemapping_pars_fragment:"",n.toneMapping!==gr?pM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,hM("linearToOutputTexel",n.outputColorSpace),mM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Do).join(`
`)),f=Df(f),f=hm(f,n),f=pm(f,n),d=Df(d),d=hm(d,n),d=pm(d,n),f=mm(f),d=mm(d),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,v=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",n.glslVersion===bp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=N+v+f,C=N+g+d,G=cm(a,a.VERTEX_SHADER,L),O=cm(a,a.FRAGMENT_SHADER,C);a.attachShader(T,G),a.attachShader(T,O),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function U(z){if(o.debug.checkShaderErrors){const oe=a.getProgramInfoLog(T).trim(),ee=a.getShaderInfoLog(G).trim(),ce=a.getShaderInfoLog(O).trim();let he=!0,se=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(he=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,T,G,O);else{const le=dm(a,G,"vertex"),k=dm(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+oe+`
`+le+`
`+k)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(ee===""||ce==="")&&(se=!1);se&&(z.diagnostics={runnable:he,programLog:oe,vertexShader:{log:ee,prefix:v},fragmentShader:{log:ce,prefix:g}})}a.deleteShader(G),a.deleteShader(O),X=new Ml(a,T),P=vM(a,T)}let X;this.getUniforms=function(){return X===void 0&&U(this),X};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(T,uM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cM++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=G,this.fragmentShader=O,this}let bM=0;class LM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new DM(e),n.set(e,r)),r}}class DM{constructor(e){this.id=bM++,this.code=e,this.usedTimes=0}}function UM(o,e,n,r,a,u,f){const d=new km,p=new LM,m=new Set,_=[],S=a.logarithmicDepthBuffer,x=a.vertexTextures;let y=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return m.add(P),P===0?"uv":`uv${P}`}function v(P,R,z,oe,ee){const ce=oe.fog,he=ee.geometry,se=P.isMeshStandardMaterial?oe.environment:null,le=(P.isMeshStandardMaterial?n:e).get(P.envMap||se),k=le&&le.mapping===Al?le.image.height:null,ae=M[P.type];P.precision!==null&&(y=a.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,I=re!==void 0?re.length:0;let te=0;he.morphAttributes.position!==void 0&&(te=1),he.morphAttributes.normal!==void 0&&(te=2),he.morphAttributes.color!==void 0&&(te=3);let Ie,Z,de,ye;if(ae){const _t=pi[ae];Ie=_t.vertexShader,Z=_t.fragmentShader}else Ie=P.vertexShader,Z=P.fragmentShader,p.update(P),de=p.getVertexShaderID(P),ye=p.getFragmentShaderID(P);const ve=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Ue=ee.isInstancedMesh===!0,Ze=ee.isBatchedMesh===!0,Tt=!!P.map,dt=!!P.matcap,bt=!!le,B=!!P.aoMap,gn=!!P.lightMap,ft=!!P.bumpMap,lt=!!P.normalMap,qe=!!P.displacementMap,Et=!!P.emissiveMap,Ge=!!P.metalnessMap,b=!!P.roughnessMap,w=P.anisotropy>0,K=P.clearcoat>0,pe=P.dispersion>0,ge=P.iridescence>0,ue=P.sheen>0,We=P.transmission>0,we=w&&!!P.anisotropyMap,Ne=K&&!!P.clearcoatMap,at=K&&!!P.clearcoatNormalMap,Me=K&&!!P.clearcoatRoughnessMap,Oe=ge&&!!P.iridescenceMap,je=ge&&!!P.iridescenceThicknessMap,Je=ue&&!!P.sheenColorMap,Be=ue&&!!P.sheenRoughnessMap,ut=!!P.specularMap,nt=!!P.specularColorMap,Mt=!!P.specularIntensityMap,V=We&&!!P.transmissionMap,Ae=We&&!!P.thicknessMap,ie=!!P.gradientMap,fe=!!P.alphaMap,be=P.alphaTest>0,Pe=!!P.alphaHash,it=!!P.extensions;let Dt=gr;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Dt=o.toneMapping);const Yt={shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:Ie,fragmentShader:Z,defines:P.defines,customVertexShaderID:de,customFragmentShaderID:ye,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:Ze,batchingColor:Ze&&ee._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&ee.instanceColor!==null,instancingMorph:Ue&&ee.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ws,alphaToCoverage:!!P.alphaToCoverage,map:Tt,matcap:dt,envMap:bt,envMapMode:bt&&le.mapping,envMapCubeUVHeight:k,aoMap:B,lightMap:gn,bumpMap:ft,normalMap:lt,displacementMap:x&&qe,emissiveMap:Et,normalMapObjectSpace:lt&&P.normalMapType===Pv,normalMapTangentSpace:lt&&P.normalMapType===Cv,metalnessMap:Ge,roughnessMap:b,anisotropy:w,anisotropyMap:we,clearcoat:K,clearcoatMap:Ne,clearcoatNormalMap:at,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:ge,iridescenceMap:Oe,iridescenceThicknessMap:je,sheen:ue,sheenColorMap:Je,sheenRoughnessMap:Be,specularMap:ut,specularColorMap:nt,specularIntensityMap:Mt,transmission:We,transmissionMap:V,thicknessMap:Ae,gradientMap:ie,opaque:P.transparent===!1&&P.blending===Fs&&P.alphaToCoverage===!1,alphaMap:fe,alphaTest:be,alphaHash:Pe,combine:P.combine,mapUv:Tt&&T(P.map.channel),aoMapUv:B&&T(P.aoMap.channel),lightMapUv:gn&&T(P.lightMap.channel),bumpMapUv:ft&&T(P.bumpMap.channel),normalMapUv:lt&&T(P.normalMap.channel),displacementMapUv:qe&&T(P.displacementMap.channel),emissiveMapUv:Et&&T(P.emissiveMap.channel),metalnessMapUv:Ge&&T(P.metalnessMap.channel),roughnessMapUv:b&&T(P.roughnessMap.channel),anisotropyMapUv:we&&T(P.anisotropyMap.channel),clearcoatMapUv:Ne&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:at&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:je&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:Be&&T(P.sheenRoughnessMap.channel),specularMapUv:ut&&T(P.specularMap.channel),specularColorMapUv:nt&&T(P.specularColorMap.channel),specularIntensityMapUv:Mt&&T(P.specularIntensityMap.channel),transmissionMapUv:V&&T(P.transmissionMap.channel),thicknessMapUv:Ae&&T(P.thicknessMap.channel),alphaMapUv:fe&&T(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(lt||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!he.attributes.uv&&(Tt||fe),fog:!!ce,useFog:P.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:S,reverseDepthBuffer:Te,skinning:ee.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:te,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Tt&&P.map.isVideoTexture===!0&&yt.getTransfer(P.map.colorSpace)===wt,decodeVideoTextureEmissive:Et&&P.emissiveMap.isVideoTexture===!0&&yt.getTransfer(P.emissiveMap.colorSpace)===wt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Ui,flipSided:P.side===bn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:it&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&P.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Yt.vertexUv1s=m.has(1),Yt.vertexUv2s=m.has(2),Yt.vertexUv3s=m.has(3),m.clear(),Yt}function g(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)R.push(z),R.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(N(R,P),L(R,P),R.push(o.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function N(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function L(P,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),P.push(d.mask)}function C(P){const R=M[P.type];let z;if(R){const oe=pi[R];z=o0.clone(oe.uniforms)}else z=P.uniforms;return z}function G(P,R){let z;for(let oe=0,ee=_.length;oe<ee;oe++){const ce=_[oe];if(ce.cacheKey===R){z=ce,++z.usedTimes;break}}return z===void 0&&(z=new PM(o,R,P,u),_.push(z)),z}function O(P){if(--P.usedTimes===0){const R=_.indexOf(P);_[R]=_[_.length-1],_.pop(),P.destroy()}}function U(P){p.remove(P)}function X(){p.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:C,acquireProgram:G,releaseProgram:O,releaseShaderCache:U,programs:_,dispose:X}}function IM(){let o=new WeakMap;function e(f){return o.has(f)}function n(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function r(f){o.delete(f)}function a(f,d,p){o.get(f)[d]=p}function u(){o=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function NM(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function _m(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function vm(){const o=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(S,x,y,M,T,v){let g=o[e];return g===void 0?(g={id:S.id,object:S,geometry:x,material:y,groupOrder:M,renderOrder:S.renderOrder,z:T,group:v},o[e]=g):(g.id=S.id,g.object=S,g.geometry=x,g.material=y,g.groupOrder=M,g.renderOrder=S.renderOrder,g.z=T,g.group=v),e++,g}function d(S,x,y,M,T,v){const g=f(S,x,y,M,T,v);y.transmission>0?r.push(g):y.transparent===!0?a.push(g):n.push(g)}function p(S,x,y,M,T,v){const g=f(S,x,y,M,T,v);y.transmission>0?r.unshift(g):y.transparent===!0?a.unshift(g):n.unshift(g)}function m(S,x){n.length>1&&n.sort(S||NM),r.length>1&&r.sort(x||_m),a.length>1&&a.sort(x||_m)}function _(){for(let S=e,x=o.length;S<x;S++){const y=o[S];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:_,sort:m}}function FM(){let o=new WeakMap;function e(r,a){const u=o.get(r);let f;return u===void 0?(f=new vm,o.set(r,[f])):a>=u.length?(f=new vm,u.push(f)):f=u[a],f}function n(){o=new WeakMap}return{get:e,dispose:n}}function OM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ne,color:new At};break;case"SpotLight":n={position:new ne,direction:new ne,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ne,color:new At,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ne,skyColor:new At,groundColor:new At};break;case"RectAreaLight":n={color:new At,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return o[e.id]=n,n}}}function BM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let kM=0;function zM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function HM(o){const e=new OM,n=BM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ne);const a=new ne,u=new qt,f=new qt;function d(m){let _=0,S=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let y=0,M=0,T=0,v=0,g=0,N=0,L=0,C=0,G=0,O=0,U=0;m.sort(zM);for(let P=0,R=m.length;P<R;P++){const z=m[P],oe=z.color,ee=z.intensity,ce=z.distance,he=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=oe.r*ee,S+=oe.g*ee,x+=oe.b*ee;else if(z.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(z.sh.coefficients[se],ee);U++}else if(z.isDirectionalLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const le=z.shadow,k=n.get(z);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,r.directionalShadow[y]=k,r.directionalShadowMap[y]=he,r.directionalShadowMatrix[y]=z.shadow.matrix,N++}r.directional[y]=se,y++}else if(z.isSpotLight){const se=e.get(z);se.position.setFromMatrixPosition(z.matrixWorld),se.color.copy(oe).multiplyScalar(ee),se.distance=ce,se.coneCos=Math.cos(z.angle),se.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),se.decay=z.decay,r.spot[T]=se;const le=z.shadow;if(z.map&&(r.spotLightMap[G]=z.map,G++,le.updateMatrices(z),z.castShadow&&O++),r.spotLightMatrix[T]=le.matrix,z.castShadow){const k=n.get(z);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,r.spotShadow[T]=k,r.spotShadowMap[T]=he,C++}T++}else if(z.isRectAreaLight){const se=e.get(z);se.color.copy(oe).multiplyScalar(ee),se.halfWidth.set(z.width*.5,0,0),se.halfHeight.set(0,z.height*.5,0),r.rectArea[v]=se,v++}else if(z.isPointLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),se.distance=z.distance,se.decay=z.decay,z.castShadow){const le=z.shadow,k=n.get(z);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,k.shadowCameraNear=le.camera.near,k.shadowCameraFar=le.camera.far,r.pointShadow[M]=k,r.pointShadowMap[M]=he,r.pointShadowMatrix[M]=z.shadow.matrix,L++}r.point[M]=se,M++}else if(z.isHemisphereLight){const se=e.get(z);se.skyColor.copy(z.color).multiplyScalar(ee),se.groundColor.copy(z.groundColor).multiplyScalar(ee),r.hemi[g]=se,g++}}v>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=S,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==y||X.pointLength!==M||X.spotLength!==T||X.rectAreaLength!==v||X.hemiLength!==g||X.numDirectionalShadows!==N||X.numPointShadows!==L||X.numSpotShadows!==C||X.numSpotMaps!==G||X.numLightProbes!==U)&&(r.directional.length=y,r.spot.length=T,r.rectArea.length=v,r.point.length=M,r.hemi.length=g,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+G-O,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=U,X.directionalLength=y,X.pointLength=M,X.spotLength=T,X.rectAreaLength=v,X.hemiLength=g,X.numDirectionalShadows=N,X.numPointShadows=L,X.numSpotShadows=C,X.numSpotMaps=G,X.numLightProbes=U,r.version=kM++)}function p(m,_){let S=0,x=0,y=0,M=0,T=0;const v=_.matrixWorldInverse;for(let g=0,N=m.length;g<N;g++){const L=m[g];if(L.isDirectionalLight){const C=r.directional[S];C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(v),S++}else if(L.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(v),C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(v),y++}else if(L.isRectAreaLight){const C=r.rectArea[M];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(v),f.identity(),u.copy(L.matrixWorld),u.premultiply(v),f.extractRotation(u),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),M++}else if(L.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(v),x++}else if(L.isHemisphereLight){const C=r.hemi[T];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(v),T++}}}return{setup:d,setupView:p,state:r}}function xm(o){const e=new HM(o),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function f(_){r.push(_)}function d(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function VM(o){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new xm(o),e.set(a,[d])):u>=f.length?(d=new xm(o),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function XM(o,e,n){let r=new qm;const a=new Pt,u=new Pt,f=new Gt,d=new p0({depthPacking:Rv}),p=new m0,m={},_=n.maxTextureSize,S={[_r]:bn,[bn]:_r,[Ui]:Ui},x=new vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:GM,fragmentShader:WM}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const M=new $r;M.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Fi(M,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mm;let g=this.type;this.render=function(O,U,X){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||O.length===0)return;const P=o.getRenderTarget(),R=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),oe=o.state;oe.setBlending(mr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ee=g!==Di&&this.type===Di,ce=g===Di&&this.type!==Di;for(let he=0,se=O.length;he<se;he++){const le=O[he],k=le.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const ae=k.getFrameExtents();if(a.multiply(ae),u.copy(k.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/ae.x),a.x=u.x*ae.x,k.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/ae.y),a.y=u.y*ae.y,k.mapSize.y=u.y)),k.map===null||ee===!0||ce===!0){const I=this.type!==Di?{minFilter:ai,magFilter:ai}:{};k.map!==null&&k.map.dispose(),k.map=new jr(a.x,a.y,I),k.map.texture.name=le.name+".shadowMap",k.camera.updateProjectionMatrix()}o.setRenderTarget(k.map),o.clear();const re=k.getViewportCount();for(let I=0;I<re;I++){const te=k.getViewport(I);f.set(u.x*te.x,u.y*te.y,u.x*te.z,u.y*te.w),oe.viewport(f),k.updateMatrices(le,I),r=k.getFrustum(),C(U,X,k.camera,le,this.type)}k.isPointLightShadow!==!0&&this.type===Di&&N(k,X),k.needsUpdate=!1}g=this.type,v.needsUpdate=!1,o.setRenderTarget(P,R,z)};function N(O,U){const X=e.update(T);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new jr(a.x,a.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(U,null,X,x,T,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(U,null,X,y,T,null)}function L(O,U,X,P){let R=null;const z=X.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(z!==void 0)R=z;else if(R=X.isPointLight===!0?p:d,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const oe=R.uuid,ee=U.uuid;let ce=m[oe];ce===void 0&&(ce={},m[oe]=ce);let he=ce[ee];he===void 0&&(he=R.clone(),ce[ee]=he,U.addEventListener("dispose",G)),R=he}if(R.visible=U.visible,R.wireframe=U.wireframe,P===Di?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:S[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const oe=o.properties.get(R);oe.light=X}return R}function C(O,U,X,P,R){if(O.visible===!1)return;if(O.layers.test(U.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===Di)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,O.matrixWorld);const ee=e.update(O),ce=O.material;if(Array.isArray(ce)){const he=ee.groups;for(let se=0,le=he.length;se<le;se++){const k=he[se],ae=ce[k.materialIndex];if(ae&&ae.visible){const re=L(O,ae,P,R);O.onBeforeShadow(o,O,U,X,ee,re,k),o.renderBufferDirect(X,null,ee,re,O,k),O.onAfterShadow(o,O,U,X,ee,re,k)}}}else if(ce.visible){const he=L(O,ce,P,R);O.onBeforeShadow(o,O,U,X,ee,he,null),o.renderBufferDirect(X,null,ee,he,O,null),O.onAfterShadow(o,O,U,X,ee,he,null)}}const oe=O.children;for(let ee=0,ce=oe.length;ee<ce;ee++)C(oe[ee],U,X,P,R)}function G(O){O.target.removeEventListener("dispose",G);for(const X in m){const P=m[X],R=O.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const qM={[Yc]:jc,[$c]:Qc,[Kc]:Jc,[ks]:Zc,[jc]:Yc,[Qc]:$c,[Jc]:Kc,[Zc]:ks};function YM(o,e){function n(){let V=!1;const Ae=new Gt;let ie=null;const fe=new Gt(0,0,0,0);return{setMask:function(be){ie!==be&&!V&&(o.colorMask(be,be,be,be),ie=be)},setLocked:function(be){V=be},setClear:function(be,Pe,it,Dt,Yt){Yt===!0&&(be*=Dt,Pe*=Dt,it*=Dt),Ae.set(be,Pe,it,Dt),fe.equals(Ae)===!1&&(o.clearColor(be,Pe,it,Dt),fe.copy(Ae))},reset:function(){V=!1,ie=null,fe.set(-1,0,0,0)}}}function r(){let V=!1,Ae=!1,ie=null,fe=null,be=null;return{setReversed:function(Pe){if(Ae!==Pe){const it=e.get("EXT_clip_control");Ae?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const Dt=be;be=null,this.setClear(Dt)}Ae=Pe},getReversed:function(){return Ae},setTest:function(Pe){Pe?ve(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(Pe){ie!==Pe&&!V&&(o.depthMask(Pe),ie=Pe)},setFunc:function(Pe){if(Ae&&(Pe=qM[Pe]),fe!==Pe){switch(Pe){case Yc:o.depthFunc(o.NEVER);break;case jc:o.depthFunc(o.ALWAYS);break;case $c:o.depthFunc(o.LESS);break;case ks:o.depthFunc(o.LEQUAL);break;case Kc:o.depthFunc(o.EQUAL);break;case Zc:o.depthFunc(o.GEQUAL);break;case Qc:o.depthFunc(o.GREATER);break;case Jc:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}fe=Pe}},setLocked:function(Pe){V=Pe},setClear:function(Pe){be!==Pe&&(Ae&&(Pe=1-Pe),o.clearDepth(Pe),be=Pe)},reset:function(){V=!1,ie=null,fe=null,be=null,Ae=!1}}}function a(){let V=!1,Ae=null,ie=null,fe=null,be=null,Pe=null,it=null,Dt=null,Yt=null;return{setTest:function(_t){V||(_t?ve(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(_t){Ae!==_t&&!V&&(o.stencilMask(_t),Ae=_t)},setFunc:function(_t,Mn,_n){(ie!==_t||fe!==Mn||be!==_n)&&(o.stencilFunc(_t,Mn,_n),ie=_t,fe=Mn,be=_n)},setOp:function(_t,Mn,_n){(Pe!==_t||it!==Mn||Dt!==_n)&&(o.stencilOp(_t,Mn,_n),Pe=_t,it=Mn,Dt=_n)},setLocked:function(_t){V=_t},setClear:function(_t){Yt!==_t&&(o.clearStencil(_t),Yt=_t)},reset:function(){V=!1,Ae=null,ie=null,fe=null,be=null,Pe=null,it=null,Dt=null,Yt=null}}}const u=new n,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let _={},S={},x=new WeakMap,y=[],M=null,T=!1,v=null,g=null,N=null,L=null,C=null,G=null,O=null,U=new At(0,0,0),X=0,P=!1,R=null,z=null,oe=null,ee=null,ce=null;const he=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,le=0;const k=o.getParameter(o.VERSION);k.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(k)[1]),se=le>=1):k.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),se=le>=2);let ae=null,re={};const I=o.getParameter(o.SCISSOR_BOX),te=o.getParameter(o.VIEWPORT),Ie=new Gt().fromArray(I),Z=new Gt().fromArray(te);function de(V,Ae,ie,fe){const be=new Uint8Array(4),Pe=o.createTexture();o.bindTexture(V,Pe),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let it=0;it<ie;it++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Ae,0,o.RGBA,1,1,fe,0,o.RGBA,o.UNSIGNED_BYTE,be):o.texImage2D(Ae+it,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,be);return Pe}const ye={};ye[o.TEXTURE_2D]=de(o.TEXTURE_2D,o.TEXTURE_2D,1),ye[o.TEXTURE_CUBE_MAP]=de(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[o.TEXTURE_2D_ARRAY]=de(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ye[o.TEXTURE_3D]=de(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ve(o.DEPTH_TEST),f.setFunc(ks),ft(!1),lt(Tp),ve(o.CULL_FACE),B(mr);function ve(V){_[V]!==!0&&(o.enable(V),_[V]=!0)}function Te(V){_[V]!==!1&&(o.disable(V),_[V]=!1)}function Ue(V,Ae){return S[V]!==Ae?(o.bindFramebuffer(V,Ae),S[V]=Ae,V===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Ae),V===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ze(V,Ae){let ie=y,fe=!1;if(V){ie=x.get(Ae),ie===void 0&&(ie=[],x.set(Ae,ie));const be=V.textures;if(ie.length!==be.length||ie[0]!==o.COLOR_ATTACHMENT0){for(let Pe=0,it=be.length;Pe<it;Pe++)ie[Pe]=o.COLOR_ATTACHMENT0+Pe;ie.length=be.length,fe=!0}}else ie[0]!==o.BACK&&(ie[0]=o.BACK,fe=!0);fe&&o.drawBuffers(ie)}function Tt(V){return M!==V?(o.useProgram(V),M=V,!0):!1}const dt={[Hr]:o.FUNC_ADD,[J_]:o.FUNC_SUBTRACT,[ev]:o.FUNC_REVERSE_SUBTRACT};dt[tv]=o.MIN,dt[nv]=o.MAX;const bt={[iv]:o.ZERO,[rv]:o.ONE,[sv]:o.SRC_COLOR,[Xc]:o.SRC_ALPHA,[fv]:o.SRC_ALPHA_SATURATE,[uv]:o.DST_COLOR,[av]:o.DST_ALPHA,[ov]:o.ONE_MINUS_SRC_COLOR,[qc]:o.ONE_MINUS_SRC_ALPHA,[cv]:o.ONE_MINUS_DST_COLOR,[lv]:o.ONE_MINUS_DST_ALPHA,[dv]:o.CONSTANT_COLOR,[hv]:o.ONE_MINUS_CONSTANT_COLOR,[pv]:o.CONSTANT_ALPHA,[mv]:o.ONE_MINUS_CONSTANT_ALPHA};function B(V,Ae,ie,fe,be,Pe,it,Dt,Yt,_t){if(V===mr){T===!0&&(Te(o.BLEND),T=!1);return}if(T===!1&&(ve(o.BLEND),T=!0),V!==Q_){if(V!==v||_t!==P){if((g!==Hr||C!==Hr)&&(o.blendEquation(o.FUNC_ADD),g=Hr,C=Hr),_t)switch(V){case Fs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case wp:o.blendFunc(o.ONE,o.ONE);break;case Ap:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Rp:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Fs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case wp:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Ap:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Rp:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}N=null,L=null,G=null,O=null,U.set(0,0,0),X=0,v=V,P=_t}return}be=be||Ae,Pe=Pe||ie,it=it||fe,(Ae!==g||be!==C)&&(o.blendEquationSeparate(dt[Ae],dt[be]),g=Ae,C=be),(ie!==N||fe!==L||Pe!==G||it!==O)&&(o.blendFuncSeparate(bt[ie],bt[fe],bt[Pe],bt[it]),N=ie,L=fe,G=Pe,O=it),(Dt.equals(U)===!1||Yt!==X)&&(o.blendColor(Dt.r,Dt.g,Dt.b,Yt),U.copy(Dt),X=Yt),v=V,P=!1}function gn(V,Ae){V.side===Ui?Te(o.CULL_FACE):ve(o.CULL_FACE);let ie=V.side===bn;Ae&&(ie=!ie),ft(ie),V.blending===Fs&&V.transparent===!1?B(mr):B(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),u.setMask(V.colorWrite);const fe=V.stencilWrite;d.setTest(fe),fe&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Et(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function ft(V){R!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),R=V)}function lt(V){V!==$_?(ve(o.CULL_FACE),V!==z&&(V===Tp?o.cullFace(o.BACK):V===K_?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),z=V}function qe(V){V!==oe&&(se&&o.lineWidth(V),oe=V)}function Et(V,Ae,ie){V?(ve(o.POLYGON_OFFSET_FILL),(ee!==Ae||ce!==ie)&&(o.polygonOffset(Ae,ie),ee=Ae,ce=ie)):Te(o.POLYGON_OFFSET_FILL)}function Ge(V){V?ve(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function b(V){V===void 0&&(V=o.TEXTURE0+he-1),ae!==V&&(o.activeTexture(V),ae=V)}function w(V,Ae,ie){ie===void 0&&(ae===null?ie=o.TEXTURE0+he-1:ie=ae);let fe=re[ie];fe===void 0&&(fe={type:void 0,texture:void 0},re[ie]=fe),(fe.type!==V||fe.texture!==Ae)&&(ae!==ie&&(o.activeTexture(ie),ae=ie),o.bindTexture(V,Ae||ye[V]),fe.type=V,fe.texture=Ae)}function K(){const V=re[ae];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function pe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function We(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function at(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function je(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(V){Ie.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),Ie.copy(V))}function Be(V){Z.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function ut(V,Ae){let ie=m.get(Ae);ie===void 0&&(ie=new WeakMap,m.set(Ae,ie));let fe=ie.get(V);fe===void 0&&(fe=o.getUniformBlockIndex(Ae,V.name),ie.set(V,fe))}function nt(V,Ae){const fe=m.get(Ae).get(V);p.get(Ae)!==fe&&(o.uniformBlockBinding(Ae,fe,V.__bindingPointIndex),p.set(Ae,fe))}function Mt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},ae=null,re={},S={},x=new WeakMap,y=[],M=null,T=!1,v=null,g=null,N=null,L=null,C=null,G=null,O=null,U=new At(0,0,0),X=0,P=!1,R=null,z=null,oe=null,ee=null,ce=null,Ie.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ve,disable:Te,bindFramebuffer:Ue,drawBuffers:Ze,useProgram:Tt,setBlending:B,setMaterial:gn,setFlipSided:ft,setCullFace:lt,setLineWidth:qe,setPolygonOffset:Et,setScissorTest:Ge,activeTexture:b,bindTexture:w,unbindTexture:K,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:Oe,texImage3D:je,updateUBOMapping:ut,uniformBlockBinding:nt,texStorage2D:at,texStorage3D:Me,texSubImage2D:ue,texSubImage3D:We,compressedTexSubImage2D:we,compressedTexSubImage3D:Ne,scissor:Je,viewport:Be,reset:Mt}}function jM(o,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Pt,_=new WeakMap;let S;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(b,w){return y?new OffscreenCanvas(b,w):Io("canvas")}function T(b,w,K){let pe=1;const ge=Ge(b);if((ge.width>K||ge.height>K)&&(pe=K/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ue=Math.floor(pe*ge.width),We=Math.floor(pe*ge.height);S===void 0&&(S=M(ue,We));const we=w?M(ue,We):S;return we.width=ue,we.height=We,we.getContext("2d").drawImage(b,0,0,ue,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ue+"x"+We+")."),we}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),b;return b}function v(b){return b.generateMipmaps}function g(b){o.generateMipmap(b)}function N(b){return b.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?o.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(b,w,K,pe,ge=!1){if(b!==null){if(o[b]!==void 0)return o[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ue=w;if(w===o.RED&&(K===o.FLOAT&&(ue=o.R32F),K===o.HALF_FLOAT&&(ue=o.R16F),K===o.UNSIGNED_BYTE&&(ue=o.R8)),w===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(ue=o.R8UI),K===o.UNSIGNED_SHORT&&(ue=o.R16UI),K===o.UNSIGNED_INT&&(ue=o.R32UI),K===o.BYTE&&(ue=o.R8I),K===o.SHORT&&(ue=o.R16I),K===o.INT&&(ue=o.R32I)),w===o.RG&&(K===o.FLOAT&&(ue=o.RG32F),K===o.HALF_FLOAT&&(ue=o.RG16F),K===o.UNSIGNED_BYTE&&(ue=o.RG8)),w===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(ue=o.RG8UI),K===o.UNSIGNED_SHORT&&(ue=o.RG16UI),K===o.UNSIGNED_INT&&(ue=o.RG32UI),K===o.BYTE&&(ue=o.RG8I),K===o.SHORT&&(ue=o.RG16I),K===o.INT&&(ue=o.RG32I)),w===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),K===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),K===o.UNSIGNED_INT&&(ue=o.RGB32UI),K===o.BYTE&&(ue=o.RGB8I),K===o.SHORT&&(ue=o.RGB16I),K===o.INT&&(ue=o.RGB32I)),w===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),K===o.UNSIGNED_INT&&(ue=o.RGBA32UI),K===o.BYTE&&(ue=o.RGBA8I),K===o.SHORT&&(ue=o.RGBA16I),K===o.INT&&(ue=o.RGBA32I)),w===o.RGB&&K===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),w===o.RGBA){const We=ge?El:yt.getTransfer(pe);K===o.FLOAT&&(ue=o.RGBA32F),K===o.HALF_FLOAT&&(ue=o.RGBA16F),K===o.UNSIGNED_BYTE&&(ue=We===wt?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function C(b,w){let K;return b?w===null||w===Yr||w===Vs?K=o.DEPTH24_STENCIL8:w===Ii?K=o.DEPTH32F_STENCIL8:w===Uo&&(K=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Yr||w===Vs?K=o.DEPTH_COMPONENT24:w===Ii?K=o.DEPTH_COMPONENT32F:w===Uo&&(K=o.DEPTH_COMPONENT16),K}function G(b,w){return v(b)===!0||b.isFramebufferTexture&&b.minFilter!==ai&&b.minFilter!==jn?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function O(b){const w=b.target;w.removeEventListener("dispose",O),X(w),w.isVideoTexture&&_.delete(w)}function U(b){const w=b.target;w.removeEventListener("dispose",U),R(w)}function X(b){const w=r.get(b);if(w.__webglInit===void 0)return;const K=b.source,pe=x.get(K);if(pe){const ge=pe[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(b),Object.keys(pe).length===0&&x.delete(K)}r.remove(b)}function P(b){const w=r.get(b);o.deleteTexture(w.__webglTexture);const K=b.source,pe=x.get(K);delete pe[w.__cacheKey],f.memory.textures--}function R(b){const w=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let ge=0;ge<w.__webglFramebuffer[pe].length;ge++)o.deleteFramebuffer(w.__webglFramebuffer[pe][ge]);else o.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)o.deleteFramebuffer(w.__webglFramebuffer[pe]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const K=b.textures;for(let pe=0,ge=K.length;pe<ge;pe++){const ue=r.get(K[pe]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),f.memory.textures--),r.remove(K[pe])}r.remove(b)}let z=0;function oe(){z=0}function ee(){const b=z;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),z+=1,b}function ce(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.colorSpace),w.join()}function he(b,w){const K=r.get(b);if(b.isVideoTexture&&qe(b),b.isRenderTargetTexture===!1&&b.version>0&&K.__version!==b.version){const pe=b.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(K,b,w);return}}n.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+w)}function se(b,w){const K=r.get(b);if(b.version>0&&K.__version!==b.version){Z(K,b,w);return}n.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+w)}function le(b,w){const K=r.get(b);if(b.version>0&&K.__version!==b.version){Z(K,b,w);return}n.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+w)}function k(b,w){const K=r.get(b);if(b.version>0&&K.__version!==b.version){de(K,b,w);return}n.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+w)}const ae={[nf]:o.REPEAT,[Wr]:o.CLAMP_TO_EDGE,[rf]:o.MIRRORED_REPEAT},re={[ai]:o.NEAREST,[wv]:o.NEAREST_MIPMAP_NEAREST,[ja]:o.NEAREST_MIPMAP_LINEAR,[jn]:o.LINEAR,[mc]:o.LINEAR_MIPMAP_NEAREST,[Xr]:o.LINEAR_MIPMAP_LINEAR},I={[bv]:o.NEVER,[Fv]:o.ALWAYS,[Lv]:o.LESS,[Nm]:o.LEQUAL,[Dv]:o.EQUAL,[Nv]:o.GEQUAL,[Uv]:o.GREATER,[Iv]:o.NOTEQUAL};function te(b,w){if(w.type===Ii&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===jn||w.magFilter===mc||w.magFilter===ja||w.magFilter===Xr||w.minFilter===jn||w.minFilter===mc||w.minFilter===ja||w.minFilter===Xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(b,o.TEXTURE_WRAP_S,ae[w.wrapS]),o.texParameteri(b,o.TEXTURE_WRAP_T,ae[w.wrapT]),(b===o.TEXTURE_3D||b===o.TEXTURE_2D_ARRAY)&&o.texParameteri(b,o.TEXTURE_WRAP_R,ae[w.wrapR]),o.texParameteri(b,o.TEXTURE_MAG_FILTER,re[w.magFilter]),o.texParameteri(b,o.TEXTURE_MIN_FILTER,re[w.minFilter]),w.compareFunction&&(o.texParameteri(b,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(b,o.TEXTURE_COMPARE_FUNC,I[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ai||w.minFilter!==ja&&w.minFilter!==Xr||w.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");o.texParameterf(b,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ie(b,w){let K=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",O));const pe=w.source;let ge=x.get(pe);ge===void 0&&(ge={},x.set(pe,ge));const ue=ce(w);if(ue!==b.__cacheKey){ge[ue]===void 0&&(ge[ue]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,K=!0),ge[ue].usedTimes++;const We=ge[b.__cacheKey];We!==void 0&&(ge[b.__cacheKey].usedTimes--,We.usedTimes===0&&P(w)),b.__cacheKey=ue,b.__webglTexture=ge[ue].texture}return K}function Z(b,w,K){let pe=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=o.TEXTURE_3D);const ge=Ie(b,w),ue=w.source;n.bindTexture(pe,b.__webglTexture,o.TEXTURE0+K);const We=r.get(ue);if(ue.version!==We.__version||ge===!0){n.activeTexture(o.TEXTURE0+K);const we=yt.getPrimaries(yt.workingColorSpace),Ne=w.colorSpace===pr?null:yt.getPrimaries(w.colorSpace),at=w.colorSpace===pr||we===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Me=T(w.image,!1,a.maxTextureSize);Me=Et(w,Me);const Oe=u.convert(w.format,w.colorSpace),je=u.convert(w.type);let Je=L(w.internalFormat,Oe,je,w.colorSpace,w.isVideoTexture);te(pe,w);let Be;const ut=w.mipmaps,nt=w.isVideoTexture!==!0,Mt=We.__version===void 0||ge===!0,V=ue.dataReady,Ae=G(w,Me);if(w.isDepthTexture)Je=C(w.format===Gs,w.type),Mt&&(nt?n.texStorage2D(o.TEXTURE_2D,1,Je,Me.width,Me.height):n.texImage2D(o.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,je,null));else if(w.isDataTexture)if(ut.length>0){nt&&Mt&&n.texStorage2D(o.TEXTURE_2D,Ae,Je,ut[0].width,ut[0].height);for(let ie=0,fe=ut.length;ie<fe;ie++)Be=ut[ie],nt?V&&n.texSubImage2D(o.TEXTURE_2D,ie,0,0,Be.width,Be.height,Oe,je,Be.data):n.texImage2D(o.TEXTURE_2D,ie,Je,Be.width,Be.height,0,Oe,je,Be.data);w.generateMipmaps=!1}else nt?(Mt&&n.texStorage2D(o.TEXTURE_2D,Ae,Je,Me.width,Me.height),V&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,je,Me.data)):n.texImage2D(o.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,je,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){nt&&Mt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Je,ut[0].width,ut[0].height,Me.depth);for(let ie=0,fe=ut.length;ie<fe;ie++)if(Be=ut[ie],w.format!==oi)if(Oe!==null)if(nt){if(V)if(w.layerUpdates.size>0){const be=$p(Be.width,Be.height,w.format,w.type);for(const Pe of w.layerUpdates){const it=Be.data.subarray(Pe*be/Be.data.BYTES_PER_ELEMENT,(Pe+1)*be/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,Pe,Be.width,Be.height,1,Oe,it)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,Be.width,Be.height,Me.depth,Oe,Be.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ie,Je,Be.width,Be.height,Me.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?V&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,Be.width,Be.height,Me.depth,Oe,je,Be.data):n.texImage3D(o.TEXTURE_2D_ARRAY,ie,Je,Be.width,Be.height,Me.depth,0,Oe,je,Be.data)}else{nt&&Mt&&n.texStorage2D(o.TEXTURE_2D,Ae,Je,ut[0].width,ut[0].height);for(let ie=0,fe=ut.length;ie<fe;ie++)Be=ut[ie],w.format!==oi?Oe!==null?nt?V&&n.compressedTexSubImage2D(o.TEXTURE_2D,ie,0,0,Be.width,Be.height,Oe,Be.data):n.compressedTexImage2D(o.TEXTURE_2D,ie,Je,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?V&&n.texSubImage2D(o.TEXTURE_2D,ie,0,0,Be.width,Be.height,Oe,je,Be.data):n.texImage2D(o.TEXTURE_2D,ie,Je,Be.width,Be.height,0,Oe,je,Be.data)}else if(w.isDataArrayTexture)if(nt){if(Mt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Je,Me.width,Me.height,Me.depth),V)if(w.layerUpdates.size>0){const ie=$p(Me.width,Me.height,w.format,w.type);for(const fe of w.layerUpdates){const be=Me.data.subarray(fe*ie/Me.data.BYTES_PER_ELEMENT,(fe+1)*ie/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,fe,Me.width,Me.height,1,Oe,je,be)}w.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,je,Me.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,Oe,je,Me.data);else if(w.isData3DTexture)nt?(Mt&&n.texStorage3D(o.TEXTURE_3D,Ae,Je,Me.width,Me.height,Me.depth),V&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,je,Me.data)):n.texImage3D(o.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,Oe,je,Me.data);else if(w.isFramebufferTexture){if(Mt)if(nt)n.texStorage2D(o.TEXTURE_2D,Ae,Je,Me.width,Me.height);else{let ie=Me.width,fe=Me.height;for(let be=0;be<Ae;be++)n.texImage2D(o.TEXTURE_2D,be,Je,ie,fe,0,Oe,je,null),ie>>=1,fe>>=1}}else if(ut.length>0){if(nt&&Mt){const ie=Ge(ut[0]);n.texStorage2D(o.TEXTURE_2D,Ae,Je,ie.width,ie.height)}for(let ie=0,fe=ut.length;ie<fe;ie++)Be=ut[ie],nt?V&&n.texSubImage2D(o.TEXTURE_2D,ie,0,0,Oe,je,Be):n.texImage2D(o.TEXTURE_2D,ie,Je,Oe,je,Be);w.generateMipmaps=!1}else if(nt){if(Mt){const ie=Ge(Me);n.texStorage2D(o.TEXTURE_2D,Ae,Je,ie.width,ie.height)}V&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,je,Me)}else n.texImage2D(o.TEXTURE_2D,0,Je,Oe,je,Me);v(w)&&g(pe),We.__version=ue.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function de(b,w,K){if(w.image.length!==6)return;const pe=Ie(b,w),ge=w.source;n.bindTexture(o.TEXTURE_CUBE_MAP,b.__webglTexture,o.TEXTURE0+K);const ue=r.get(ge);if(ge.version!==ue.__version||pe===!0){n.activeTexture(o.TEXTURE0+K);const We=yt.getPrimaries(yt.workingColorSpace),we=w.colorSpace===pr?null:yt.getPrimaries(w.colorSpace),Ne=w.colorSpace===pr||We===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const at=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Oe=[];for(let fe=0;fe<6;fe++)!at&&!Me?Oe[fe]=T(w.image[fe],!0,a.maxCubemapSize):Oe[fe]=Me?w.image[fe].image:w.image[fe],Oe[fe]=Et(w,Oe[fe]);const je=Oe[0],Je=u.convert(w.format,w.colorSpace),Be=u.convert(w.type),ut=L(w.internalFormat,Je,Be,w.colorSpace),nt=w.isVideoTexture!==!0,Mt=ue.__version===void 0||pe===!0,V=ge.dataReady;let Ae=G(w,je);te(o.TEXTURE_CUBE_MAP,w);let ie;if(at){nt&&Mt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,ut,je.width,je.height);for(let fe=0;fe<6;fe++){ie=Oe[fe].mipmaps;for(let be=0;be<ie.length;be++){const Pe=ie[be];w.format!==oi?Je!==null?nt?V&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,0,0,Pe.width,Pe.height,Je,Pe.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,ut,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,0,0,Pe.width,Pe.height,Je,Be,Pe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,ut,Pe.width,Pe.height,0,Je,Be,Pe.data)}}}else{if(ie=w.mipmaps,nt&&Mt){ie.length>0&&Ae++;const fe=Ge(Oe[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,ut,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Me){nt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Oe[fe].width,Oe[fe].height,Je,Be,Oe[fe].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ut,Oe[fe].width,Oe[fe].height,0,Je,Be,Oe[fe].data);for(let be=0;be<ie.length;be++){const it=ie[be].image[fe].image;nt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,0,0,it.width,it.height,Je,Be,it.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,ut,it.width,it.height,0,Je,Be,it.data)}}else{nt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Je,Be,Oe[fe]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ut,Je,Be,Oe[fe]);for(let be=0;be<ie.length;be++){const Pe=ie[be];nt?V&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,0,0,Je,Be,Pe.image[fe]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,ut,Je,Be,Pe.image[fe])}}}v(w)&&g(o.TEXTURE_CUBE_MAP),ue.__version=ge.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function ye(b,w,K,pe,ge,ue){const We=u.convert(K.format,K.colorSpace),we=u.convert(K.type),Ne=L(K.internalFormat,We,we,K.colorSpace),at=r.get(w),Me=r.get(K);if(Me.__renderTarget=w,!at.__hasExternalTextures){const Oe=Math.max(1,w.width>>ue),je=Math.max(1,w.height>>ue);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?n.texImage3D(ge,ue,Ne,Oe,je,w.depth,0,We,we,null):n.texImage2D(ge,ue,Ne,Oe,je,0,We,we,null)}n.bindFramebuffer(o.FRAMEBUFFER,b),lt(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ge,Me.__webglTexture,0,ft(w)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ge,Me.__webglTexture,ue),n.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(b,w,K){if(o.bindRenderbuffer(o.RENDERBUFFER,b),w.depthBuffer){const pe=w.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ue=C(w.stencilBuffer,ge),We=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=ft(w);lt(w)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,ue,w.width,w.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,ue,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,ue,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,We,o.RENDERBUFFER,b)}else{const pe=w.textures;for(let ge=0;ge<pe.length;ge++){const ue=pe[ge],We=u.convert(ue.format,ue.colorSpace),we=u.convert(ue.type),Ne=L(ue.internalFormat,We,we,ue.colorSpace),at=ft(w);K&&lt(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,at,Ne,w.width,w.height):lt(w)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,at,Ne,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Ne,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Te(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(w.depthTexture);pe.__renderTarget=w,(!pe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he(w.depthTexture,0);const ge=pe.__webglTexture,ue=ft(w);if(w.depthTexture.format===Os)lt(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0);else if(w.depthTexture.format===Gs)lt(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ue(b){const w=r.get(b),K=b.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==b.depthTexture){const pe=b.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=pe}if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Te(w.__webglFramebuffer,b)}else if(K){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=o.createRenderbuffer(),ve(w.__webglDepthbuffer[pe],b,!1);else{const ge=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,ue)}}else if(n.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),ve(w.__webglDepthbuffer,b,!1);else{const pe=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ge),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,ge)}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ze(b,w,K){const pe=r.get(b);w!==void 0&&ye(pe.__webglFramebuffer,b,b.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&Ue(b)}function Tt(b){const w=b.texture,K=r.get(b),pe=r.get(w);b.addEventListener("dispose",U);const ge=b.textures,ue=b.isWebGLCubeRenderTarget===!0,We=ge.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=w.version,f.memory.textures++),ue){K.__webglFramebuffer=[];for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[we]=[];for(let Ne=0;Ne<w.mipmaps.length;Ne++)K.__webglFramebuffer[we][Ne]=o.createFramebuffer()}else K.__webglFramebuffer[we]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let we=0;we<w.mipmaps.length;we++)K.__webglFramebuffer[we]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(We)for(let we=0,Ne=ge.length;we<Ne;we++){const at=r.get(ge[we]);at.__webglTexture===void 0&&(at.__webglTexture=o.createTexture(),f.memory.textures++)}if(b.samples>0&&lt(b)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){const Ne=ge[we];K.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[we]);const at=u.convert(Ne.format,Ne.colorSpace),Me=u.convert(Ne.type),Oe=L(Ne.internalFormat,at,Me,Ne.colorSpace,b.isXRRenderTarget===!0),je=ft(b);o.renderbufferStorageMultisample(o.RENDERBUFFER,je,Oe,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,K.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),b.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),ve(K.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){n.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),te(o.TEXTURE_CUBE_MAP,w);for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ne=0;Ne<w.mipmaps.length;Ne++)ye(K.__webglFramebuffer[we][Ne],b,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ne);else ye(K.__webglFramebuffer[we],b,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);v(w)&&g(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(We){for(let we=0,Ne=ge.length;we<Ne;we++){const at=ge[we],Me=r.get(at);n.bindTexture(o.TEXTURE_2D,Me.__webglTexture),te(o.TEXTURE_2D,at),ye(K.__webglFramebuffer,b,at,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,0),v(at)&&g(o.TEXTURE_2D)}n.unbindTexture()}else{let we=o.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(we=b.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(we,pe.__webglTexture),te(we,w),w.mipmaps&&w.mipmaps.length>0)for(let Ne=0;Ne<w.mipmaps.length;Ne++)ye(K.__webglFramebuffer[Ne],b,w,o.COLOR_ATTACHMENT0,we,Ne);else ye(K.__webglFramebuffer,b,w,o.COLOR_ATTACHMENT0,we,0);v(w)&&g(we),n.unbindTexture()}b.depthBuffer&&Ue(b)}function dt(b){const w=b.textures;for(let K=0,pe=w.length;K<pe;K++){const ge=w[K];if(v(ge)){const ue=N(b),We=r.get(ge).__webglTexture;n.bindTexture(ue,We),g(ue),n.unbindTexture()}}}const bt=[],B=[];function gn(b){if(b.samples>0){if(lt(b)===!1){const w=b.textures,K=b.width,pe=b.height;let ge=o.COLOR_BUFFER_BIT;const ue=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,We=r.get(b),we=w.length>1;if(we)for(let Ne=0;Ne<w.length;Ne++)n.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ne=0;Ne<w.length;Ne++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,We.__webglColorRenderbuffer[Ne]);const at=r.get(w[Ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,at,0)}o.blitFramebuffer(0,0,K,pe,0,0,K,pe,ge,o.NEAREST),p===!0&&(bt.length=0,B.length=0,bt.push(o.COLOR_ATTACHMENT0+Ne),b.depthBuffer&&b.resolveDepthBuffer===!1&&(bt.push(ue),B.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,B)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,bt))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let Ne=0;Ne<w.length;Ne++){n.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,We.__webglColorRenderbuffer[Ne]);const at=r.get(w[Ne]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,at,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const w=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function ft(b){return Math.min(a.maxSamples,b.samples)}function lt(b){const w=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function qe(b){const w=f.render.frame;_.get(b)!==w&&(_.set(b,w),b.update())}function Et(b,w){const K=b.colorSpace,pe=b.format,ge=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||K!==Ws&&K!==pr&&(yt.getTransfer(K)===wt?(pe!==oi||ge!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}function Ge(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=ee,this.resetTextureUnits=oe,this.setTexture2D=he,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=k,this.rebindTextures=Ze,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=lt}function $M(o,e){function n(r,a=pr){let u;const f=yt.getTransfer(a);if(r===Bi)return o.UNSIGNED_BYTE;if(r===Nf)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Ff)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Rm)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===wm)return o.BYTE;if(r===Am)return o.SHORT;if(r===Uo)return o.UNSIGNED_SHORT;if(r===If)return o.INT;if(r===Yr)return o.UNSIGNED_INT;if(r===Ii)return o.FLOAT;if(r===No)return o.HALF_FLOAT;if(r===Cm)return o.ALPHA;if(r===Pm)return o.RGB;if(r===oi)return o.RGBA;if(r===bm)return o.LUMINANCE;if(r===Lm)return o.LUMINANCE_ALPHA;if(r===Os)return o.DEPTH_COMPONENT;if(r===Gs)return o.DEPTH_STENCIL;if(r===Dm)return o.RED;if(r===Of)return o.RED_INTEGER;if(r===Um)return o.RG;if(r===Bf)return o.RG_INTEGER;if(r===kf)return o.RGBA_INTEGER;if(r===_l||r===vl||r===xl||r===Sl)if(f===wt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===_l)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===vl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Sl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===_l)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===vl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Sl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sf||r===of||r===af||r===lf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===sf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===of)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===af)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===uf||r===cf||r===ff)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===uf||r===cf)return f===wt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===ff)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===df||r===hf||r===pf||r===mf||r===gf||r===_f||r===vf||r===xf||r===Sf||r===yf||r===Mf||r===Ef||r===Tf||r===wf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===df)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_f)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ef)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Tf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yl||r===Af||r===Rf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===yl)return f===wt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Af)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Im||r===Cf||r===Pf||r===bf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===yl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Cf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vs?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}const KM={type:"move"};class Wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const T of e.hand.values()){const v=n.getJointPose(T,r),g=this._getHandJoint(m,T);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const _=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],x=_.position.distanceTo(S.position),y=.02,M=.005;m.inputState.pinching&&x>y+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=y-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(KM)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new dl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const ZM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class JM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Ln,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new vr({vertexShader:ZM,fragmentShader:QM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fi(new Cl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eE extends qs{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,_=null,S=null,x=null,y=null,M=null;const T=new JM,v=n.getContextAttributes();let g=null,N=null;const L=[],C=[],G=new Pt;let O=null;const U=new Yn;U.viewport=new Gt;const X=new Yn;X.viewport=new Gt;const P=[U,X],R=new y0;let z=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let de=L[Z];return de===void 0&&(de=new Wc,L[Z]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Z){let de=L[Z];return de===void 0&&(de=new Wc,L[Z]=de),de.getGripSpace()},this.getHand=function(Z){let de=L[Z];return de===void 0&&(de=new Wc,L[Z]=de),de.getHandSpace()};function ee(Z){const de=C.indexOf(Z.inputSource);if(de===-1)return;const ye=L[de];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,m||f),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ce(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",ce),a.removeEventListener("inputsourceschange",he);for(let Z=0;Z<L.length;Z++){const de=C[Z];de!==null&&(C[Z]=null,L[Z].disconnect(de))}z=null,oe=null,T.reset(),e.setRenderTarget(g),y=null,x=null,S=null,a=null,N=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){u=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return S},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",ce),a.addEventListener("inputsourceschange",he),v.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(G),a.enabledFeatures!==void 0&&a.enabledFeatures.includes("layers")){let ye=null,ve=null,Te=null;v.depth&&(Te=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=v.stencil?Gs:Os,ve=v.stencil?Vs:Yr);const Ue={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:u};S=new XRWebGLBinding(a,n),x=S.createProjectionLayer(Ue),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new jr(x.textureWidth,x.textureHeight,{format:oi,type:Bi,depthTexture:new Ym(x.textureWidth,x.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const ye={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(a,n,ye),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new jr(y.framebufferWidth,y.framebufferHeight,{format:oi,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Ie.setContext(a),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function he(Z){for(let de=0;de<Z.removed.length;de++){const ye=Z.removed[de],ve=C.indexOf(ye);ve>=0&&(C[ve]=null,L[ve].disconnect(ye))}for(let de=0;de<Z.added.length;de++){const ye=Z.added[de];let ve=C.indexOf(ye);if(ve===-1){for(let Ue=0;Ue<L.length;Ue++)if(Ue>=C.length){C.push(ye),ve=Ue;break}else if(C[Ue]===null){C[Ue]=ye,ve=Ue;break}if(ve===-1)break}const Te=L[ve];Te&&Te.connect(ye)}}const se=new ne,le=new ne;function k(Z,de,ye){se.setFromMatrixPosition(de.matrixWorld),le.setFromMatrixPosition(ye.matrixWorld);const ve=se.distanceTo(le),Te=de.projectionMatrix.elements,Ue=ye.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),Tt=Te[14]/(Te[10]+1),dt=(Te[9]+1)/Te[5],bt=(Te[9]-1)/Te[5],B=(Te[8]-1)/Te[0],gn=(Ue[8]+1)/Ue[0],ft=Ze*B,lt=Ze*gn,qe=ve/(-B+gn),Et=qe*-B;if(de.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Et),Z.translateZ(qe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Te[10]===-1)Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ge=Ze+qe,b=Tt+qe,w=ft-Et,K=lt+(ve-Et),pe=dt*Tt/b*Ge,ge=bt*Tt/b*Ge;Z.projectionMatrix.makePerspective(w,K,pe,ge,Ge,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,de){de===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(de.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let de=Z.near,ye=Z.far;T.texture!==null&&(T.depthNear>0&&(de=T.depthNear),T.depthFar>0&&(ye=T.depthFar)),R.near=X.near=U.near=de,R.far=X.far=U.far=ye,(z!==R.near||oe!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,oe=R.far),U.layers.mask=Z.layers.mask|2,X.layers.mask=Z.layers.mask|4,R.layers.mask=U.layers.mask|X.layers.mask;const ve=Z.parent,Te=R.cameras;ae(R,ve);for(let Ue=0;Ue<Te.length;Ue++)ae(Te[Ue],ve);Te.length===2?k(R,U,X):R.projectionMatrix.copy(U.projectionMatrix),re(Z,R,ve)};function re(Z,de,ye){ye===null?Z.matrix.copy(de.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(de.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Lf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(Z){p=Z,x!==null&&(x.fixedFoveation=Z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Z)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let I=null;function te(Z,de){if(_=de.getViewerPose(m||f),M=de,_!==null){const ye=_.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let ve=!1;ye.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let Ue=0;Ue<ye.length;Ue++){const Ze=ye[Ue];let Tt=null;if(y!==null)Tt=y.getViewport(Ze);else{const bt=S.getViewSubImage(x,Ze);Tt=bt.viewport,Ue===0&&(e.setRenderTargetTextures(N,bt.colorTexture,x.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(N))}let dt=P[Ue];dt===void 0&&(dt=new Yn,dt.layers.enable(Ue),dt.viewport=new Gt,P[Ue]=dt),dt.matrix.fromArray(Ze.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(Ze.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),Ue===0&&(R.matrix.copy(dt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(dt)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ue=S.getDepthInformation(ye[0]);Ue&&Ue.isValid&&Ue.texture&&T.init(e,Ue,a.renderState)}}for(let ye=0;ye<L.length;ye++){const ve=C[ye],Te=L[ye];ve!==null&&Te!==void 0&&Te.update(ve,de,m||f)}I&&I(Z,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),M=null}const Ie=new jm;Ie.setAnimationLoop(te),this.setAnimationLoop=function(Z){I=Z},this.dispose=function(){}}}const Br=new ki,tE=new qt;function nE(o,e){function n(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function r(v,g){g.color.getRGB(v.fogColor.value,Wm(o)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function a(v,g,N,L,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(v,g):g.isMeshToonMaterial?(u(v,g),S(v,g)):g.isMeshPhongMaterial?(u(v,g),_(v,g)):g.isMeshStandardMaterial?(u(v,g),x(v,g),g.isMeshPhysicalMaterial&&y(v,g,C)):g.isMeshMatcapMaterial?(u(v,g),M(v,g)):g.isMeshDepthMaterial?u(v,g):g.isMeshDistanceMaterial?(u(v,g),T(v,g)):g.isMeshNormalMaterial?u(v,g):g.isLineBasicMaterial?(f(v,g),g.isLineDashedMaterial&&d(v,g)):g.isPointsMaterial?p(v,g,N,L):g.isSpriteMaterial?m(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,n(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,n(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===bn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,n(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===bn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,n(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,n(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const N=e.get(g),L=N.envMap,C=N.envMapRotation;L&&(v.envMap.value=L,Br.copy(C),Br.x*=-1,Br.y*=-1,Br.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),v.envMapRotation.value.setFromMatrix4(tE.makeRotationFromEuler(Br)),v.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,v.aoMapTransform))}function f(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,n(g.map,v.mapTransform))}function d(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function p(v,g,N,L){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*N,v.scale.value=L*.5,g.map&&(v.map.value=g.map,n(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function m(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,n(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function _(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function S(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function x(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function y(v,g,N){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===bn&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=N.texture,v.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,v.specularIntensityMapTransform))}function M(v,g){g.matcap&&(v.matcap.value=g.matcap)}function T(v,g){const N=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(N.matrixWorld),v.nearDistance.value=N.shadow.camera.near,v.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function iE(o,e,n,r){let a={},u={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,L){const C=L.program;r.uniformBlockBinding(N,C)}function m(N,L){let C=a[N.id];C===void 0&&(M(N),C=_(N),a[N.id]=C,N.addEventListener("dispose",v));const G=L.program;r.updateUBOMapping(N,G);const O=e.render.frame;u[N.id]!==O&&(x(N),u[N.id]=O)}function _(N){const L=S();N.__bindingPointIndex=L;const C=o.createBuffer(),G=N.__size,O=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,G,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,C),C}function S(){for(let N=0;N<d;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const L=a[N.id],C=N.uniforms,G=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let O=0,U=C.length;O<U;O++){const X=Array.isArray(C[O])?C[O]:[C[O]];for(let P=0,R=X.length;P<R;P++){const z=X[P];if(y(z,O,P,G)===!0){const oe=z.__offset,ee=Array.isArray(z.value)?z.value:[z.value];let ce=0;for(let he=0;he<ee.length;he++){const se=ee[he],le=T(se);typeof se=="number"||typeof se=="boolean"?(z.__data[0]=se,o.bufferSubData(o.UNIFORM_BUFFER,oe+ce,z.__data)):se.isMatrix3?(z.__data[0]=se.elements[0],z.__data[1]=se.elements[1],z.__data[2]=se.elements[2],z.__data[3]=0,z.__data[4]=se.elements[3],z.__data[5]=se.elements[4],z.__data[6]=se.elements[5],z.__data[7]=0,z.__data[8]=se.elements[6],z.__data[9]=se.elements[7],z.__data[10]=se.elements[8],z.__data[11]=0):(se.toArray(z.__data,ce),ce+=le.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,oe,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(N,L,C,G){const O=N.value,U=L+"_"+C;if(G[U]===void 0)return typeof O=="number"||typeof O=="boolean"?G[U]=O:G[U]=O.clone(),!0;{const X=G[U];if(typeof O=="number"||typeof O=="boolean"){if(X!==O)return G[U]=O,!0}else if(X.equals(O)===!1)return X.copy(O),!0}return!1}function M(N){const L=N.uniforms;let C=0;const G=16;for(let U=0,X=L.length;U<X;U++){const P=Array.isArray(L[U])?L[U]:[L[U]];for(let R=0,z=P.length;R<z;R++){const oe=P[R],ee=Array.isArray(oe.value)?oe.value:[oe.value];for(let ce=0,he=ee.length;ce<he;ce++){const se=ee[ce],le=T(se),k=C%G,ae=k%le.boundary,re=k+ae;C+=ae,re!==0&&G-re<le.storage&&(C+=G-re),oe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=C,C+=le.storage}}}const O=C%G;return O>0&&(C+=G-O),N.__size=C,N.__cache={},this}function T(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function v(N){const L=N.target;L.removeEventListener("dispose",v);const C=f.indexOf(L.__bindingPointIndex);f.splice(C,1),o.deleteBuffer(a[L.id]),delete a[L.id],delete u[L.id]}function g(){for(const N in a)o.deleteBuffer(a[N]);f=[],a={},u={}}return{bind:p,update:m,dispose:g}}class rE{constructor(e={}){const{canvas:n=Bv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const M=new Uint32Array(4),T=new Int32Array(4);let v=null,g=null;const N=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bn,this.toneMapping=gr,this.toneMappingExposure=1;const C=this;let G=!1,O=0,U=0,X=null,P=-1,R=null;const z=new Gt,oe=new Gt;let ee=null;const ce=new At(0);let he=0,se=n.width,le=n.height,k=1,ae=null,re=null;const I=new Gt(0,0,se,le),te=new Gt(0,0,se,le);let Ie=!1;const Z=new qm;let de=!1,ye=!1;this.transmissionResolutionScale=1;const ve=new qt,Te=new qt,Ue=new ne,Ze=new Gt,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function bt(){return X===null?k:1}let B=r;function gn(A,W){return n.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Uf}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),B===null){const W="webgl2";if(B=gn(W,A),B===null)throw gn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ft,lt,qe,Et,Ge,b,w,K,pe,ge,ue,We,we,Ne,at,Me,Oe,je,Je,Be,ut,nt,Mt,V;function Ae(){ft=new hy(B),ft.init(),nt=new $M(B,ft),lt=new ay(B,ft,e,nt),qe=new YM(B,ft),lt.reverseDepthBuffer&&x&&qe.buffers.depth.setReversed(!0),Et=new gy(B),Ge=new IM,b=new jM(B,ft,qe,Ge,lt,nt,Et),w=new uy(C),K=new dy(C),pe=new E0(B),Mt=new sy(B,pe),ge=new py(B,pe,Et,Mt),ue=new vy(B,ge,pe,Et),Je=new _y(B,lt,b),Me=new ly(Ge),We=new UM(C,w,K,ft,lt,Mt,Me),we=new nE(C,Ge),Ne=new FM,at=new VM(ft),je=new ry(C,w,K,qe,ue,y,p),Oe=new XM(C,ue,lt),V=new iE(B,Et,lt,qe),Be=new oy(B,ft,Et),ut=new my(B,ft,Et),Et.programs=We.programs,C.capabilities=lt,C.extensions=ft,C.properties=Ge,C.renderLists=Ne,C.shadowMap=Oe,C.state=qe,C.info=Et}Ae();const ie=new eE(C,B);this.xr=ie,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=ft.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ft.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(se,le,!1))},this.getSize=function(A){return A.set(se,le)},this.setSize=function(A,W,Q=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,le=W,n.width=Math.floor(A*k),n.height=Math.floor(W*k),Q===!0&&(n.style.width=A+"px",n.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(se*k,le*k).floor()},this.setDrawingBufferSize=function(A,W,Q){se=A,le=W,k=Q,n.width=Math.floor(A*Q),n.height=Math.floor(W*Q),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,W,Q,j){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,W,Q,j),qe.viewport(z.copy(I).multiplyScalar(k).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,W,Q,j){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,W,Q,j),qe.scissor(oe.copy(te).multiplyScalar(k).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(A){qe.setScissorTest(Ie=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(A=!0,W=!0,Q=!0){let j=0;if(A){let q=!1;if(X!==null){const Se=X.texture.format;q=Se===kf||Se===Bf||Se===Of}if(q){const Se=X.texture.type,Re=Se===Bi||Se===Yr||Se===Uo||Se===Vs||Se===Nf||Se===Ff,Le=je.getClearColor(),ke=je.getClearAlpha(),et=Le.r,Qe=Le.g,He=Le.b;Re?(M[0]=et,M[1]=Qe,M[2]=He,M[3]=ke,B.clearBufferuiv(B.COLOR,0,M)):(T[0]=et,T[1]=Qe,T[2]=He,T[3]=ke,B.clearBufferiv(B.COLOR,0,T))}else j|=B.COLOR_BUFFER_BIT}W&&(j|=B.DEPTH_BUFFER_BIT),Q&&(j|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),je.dispose(),Ne.dispose(),at.dispose(),Ge.dispose(),w.dispose(),K.dispose(),ue.dispose(),Mt.dispose(),V.dispose(),We.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Kr),ie.removeEventListener("sessionend",zi),gi.stop()};function fe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=Et.autoReset,W=Oe.enabled,Q=Oe.autoUpdate,j=Oe.needsUpdate,q=Oe.type;Ae(),Et.autoReset=A,Oe.enabled=W,Oe.autoUpdate=Q,Oe.needsUpdate=j,Oe.type=q}function Pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function it(A){const W=A.target;W.removeEventListener("dispose",it),Dt(W)}function Dt(A){Yt(A),Ge.remove(A)}function Yt(A){const W=Ge.get(A).programs;W!==void 0&&(W.forEach(function(Q){We.releaseProgram(Q)}),A.isShaderMaterial&&We.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,Q,j,q,Se){W===null&&(W=Tt);const Re=q.isMesh&&q.matrixWorld.determinant()<0,Le=Vo(A,W,Q,j,q);qe.setMaterial(j,Re);let ke=Q.index,et=1;if(j.wireframe===!0){if(ke=ge.getWireframeAttribute(Q),ke===void 0)return;et=2}const Qe=Q.drawRange,He=Q.attributes.position;let pt=Qe.start*et,rt=(Qe.start+Qe.count)*et;Se!==null&&(pt=Math.max(pt,Se.start*et),rt=Math.min(rt,(Se.start+Se.count)*et)),ke!==null?(pt=Math.max(pt,0),rt=Math.min(rt,ke.count)):He!=null&&(pt=Math.max(pt,0),rt=Math.min(rt,He.count));const kt=rt-pt;if(kt<0||kt===1/0)return;Mt.setup(q,j,Le,Q,ke);let Nt,gt=Be;if(ke!==null&&(Nt=pe.get(ke),gt=ut,gt.setIndex(Nt)),q.isMesh)j.wireframe===!0?(qe.setLineWidth(j.wireframeLinewidth*bt()),gt.setMode(B.LINES)):gt.setMode(B.TRIANGLES);else if(q.isLine){let Ye=j.linewidth;Ye===void 0&&(Ye=1),qe.setLineWidth(Ye*bt()),q.isLineSegments?gt.setMode(B.LINES):q.isLineLoop?gt.setMode(B.LINE_LOOP):gt.setMode(B.LINE_STRIP)}else q.isPoints?gt.setMode(B.POINTS):q.isSprite&&gt.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)gt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))gt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ye=q._multiDrawStarts,zt=q._multiDrawCounts,ht=q._multiDrawCount,ln=ke?pe.get(ke).bytesPerElement:1,Vi=Ge.get(j).currentProgram.getUniforms();for(let vn=0;vn<ht;vn++)Vi.setValue(B,"_gl_DrawID",vn),gt.render(Ye[vn]/ln,zt[vn])}else if(q.isInstancedMesh)gt.renderInstances(pt,kt,q.count);else if(Q.isInstancedBufferGeometry){const Ye=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,zt=Math.min(Q.instanceCount,Ye);gt.renderInstances(pt,kt,zt)}else gt.render(pt,kt)};function _t(A,W,Q){A.transparent===!0&&A.side===Ui&&A.forceSinglePass===!1?(A.side=bn,A.needsUpdate=!0,Zr(A,W,Q),A.side=_r,A.needsUpdate=!0,Zr(A,W,Q),A.side=Ui):Zr(A,W,Q)}this.compile=function(A,W,Q=null){Q===null&&(Q=A),g=at.get(Q),g.init(W),L.push(g),Q.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),A!==Q&&A.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights();const j=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Se=q.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const Le=Se[Re];_t(Le,Q,q),j.add(Le)}else _t(Se,Q,q),j.add(Se)}),L.pop(),g=null,j},this.compileAsync=function(A,W,Q=null){const j=this.compile(A,W,Q);return new Promise(q=>{function Se(){if(j.forEach(function(Re){Ge.get(Re).currentProgram.isReady()&&j.delete(Re)}),j.size===0){q(A);return}setTimeout(Se,10)}ft.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Mn=null;function _n(A){Mn&&Mn(A)}function Kr(){gi.stop()}function zi(){gi.start()}const gi=new jm;gi.setAnimationLoop(_n),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(A){Mn=A,ie.setAnimationLoop(A),A===null?gi.stop():gi.start()},ie.addEventListener("sessionstart",Kr),ie.addEventListener("sessionend",zi),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(W),W=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,W,X),g=at.get(A,L.length),g.init(W),L.push(g),Te.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(Te),ye=this.localClippingEnabled,de=Me.init(this.clippingPlanes,ye),v=Ne.get(A,N.length),v.init(),N.push(v),ie.enabled===!0&&ie.isPresenting===!0){const Se=C.xr.getDepthSensingMesh();Se!==null&&_i(Se,W,-1/0,C.sortObjects)}_i(A,W,0,C.sortObjects),v.finish(),C.sortObjects===!0&&v.sort(ae,re),dt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,dt&&je.addToRenderList(v,A),this.info.render.frame++,de===!0&&Me.beginShadows();const Q=g.state.shadowsArray;Oe.render(Q,A,W),de===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=v.opaque,q=v.transmissive;if(g.setupLights(),W.isArrayCamera){const Se=W.cameras;if(q.length>0)for(let Re=0,Le=Se.length;Re<Le;Re++){const ke=Se[Re];Sr(j,q,A,ke)}dt&&je.render(A);for(let Re=0,Le=Se.length;Re<Le;Re++){const ke=Se[Re];xr(v,A,ke,ke.viewport)}}else q.length>0&&Sr(j,q,A,W),dt&&je.render(A),xr(v,A,W);X!==null&&U===0&&(b.updateMultisampleRenderTarget(X),b.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(C,A,W),Mt.resetDefaultState(),P=-1,R=null,L.pop(),L.length>0?(g=L[L.length-1],de===!0&&Me.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,N.pop(),N.length>0?v=N[N.length-1]:v=null};function _i(A,W,Q,j){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){j&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Te);const Re=ue.update(A),Le=A.material;Le.visible&&v.push(A,Re,Le,Q,Ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Z.intersectsObject(A))){const Re=ue.update(A),Le=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ze.copy(Re.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(Te)),Array.isArray(Le)){const ke=Re.groups;for(let et=0,Qe=ke.length;et<Qe;et++){const He=ke[et],pt=Le[He.materialIndex];pt&&pt.visible&&v.push(A,Re,pt,Q,Ze.z,He)}}else Le.visible&&v.push(A,Re,Le,Q,Ze.z,null)}}const Se=A.children;for(let Re=0,Le=Se.length;Re<Le;Re++)_i(Se[Re],W,Q,j)}function xr(A,W,Q,j){const q=A.opaque,Se=A.transmissive,Re=A.transparent;g.setupLightsView(Q),de===!0&&Me.setGlobalState(C.clippingPlanes,Q),j&&qe.viewport(z.copy(j)),q.length>0&&Hi(q,W,Q),Se.length>0&&Hi(Se,W,Q),Re.length>0&&Hi(Re,W,Q),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Sr(A,W,Q,j){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[j.id]===void 0&&(g.state.transmissionRenderTarget[j.id]=new jr(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?No:Bi,minFilter:Xr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const Se=g.state.transmissionRenderTarget[j.id],Re=j.viewport||z;Se.setSize(Re.z*C.transmissionResolutionScale,Re.w*C.transmissionResolutionScale);const Le=C.getRenderTarget();C.setRenderTarget(Se),C.getClearColor(ce),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),dt&&je.render(Q);const ke=C.toneMapping;C.toneMapping=gr;const et=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),g.setupLightsView(j),de===!0&&Me.setGlobalState(C.clippingPlanes,j),Hi(A,Q,j),b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let He=0,pt=W.length;He<pt;He++){const rt=W[He],kt=rt.object,Nt=rt.geometry,gt=rt.material,Ye=rt.group;if(gt.side===Ui&&kt.layers.test(j.layers)){const zt=gt.side;gt.side=bn,gt.needsUpdate=!0,zo(kt,Q,j,Nt,gt,Ye),gt.side=zt,gt.needsUpdate=!0,Qe=!0}}Qe===!0&&(b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se))}C.setRenderTarget(Le),C.setClearColor(ce,he),et!==void 0&&(j.viewport=et),C.toneMapping=ke}function Hi(A,W,Q){const j=W.isScene===!0?W.overrideMaterial:null;for(let q=0,Se=A.length;q<Se;q++){const Re=A[q],Le=Re.object,ke=Re.geometry,et=j===null?Re.material:j,Qe=Re.group;Le.layers.test(Q.layers)&&zo(Le,W,Q,ke,et,Qe)}}function zo(A,W,Q,j,q,Se){A.onBeforeRender(C,W,Q,j,q,Se),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(C,W,Q,j,A,Se),q.transparent===!0&&q.side===Ui&&q.forceSinglePass===!1?(q.side=bn,q.needsUpdate=!0,C.renderBufferDirect(Q,W,j,q,A,Se),q.side=_r,q.needsUpdate=!0,C.renderBufferDirect(Q,W,j,q,A,Se),q.side=Ui):C.renderBufferDirect(Q,W,j,q,A,Se),A.onAfterRender(C,W,Q,j,q,Se)}function Zr(A,W,Q){W.isScene!==!0&&(W=Tt);const j=Ge.get(A),q=g.state.lights,Se=g.state.shadowsArray,Re=q.state.version,Le=We.getParameters(A,q.state,Se,W,Q),ke=We.getProgramCacheKey(Le);let et=j.programs;j.environment=A.isMeshStandardMaterial?W.environment:null,j.fog=W.fog,j.envMap=(A.isMeshStandardMaterial?K:w).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",it),et=new Map,j.programs=et);let Qe=et.get(ke);if(Qe!==void 0){if(j.currentProgram===Qe&&j.lightsStateVersion===Re)return li(A,Le),Qe}else Le.uniforms=We.getUniforms(A),A.onBeforeCompile(Le,C),Qe=We.acquireProgram(Le,ke),et.set(ke,Qe),j.uniforms=Le.uniforms;const He=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=Me.uniform),li(A,Le),j.needsLights=bl(A),j.lightsStateVersion=Re,j.needsLights&&(He.ambientLightColor.value=q.state.ambient,He.lightProbe.value=q.state.probe,He.directionalLights.value=q.state.directional,He.directionalLightShadows.value=q.state.directionalShadow,He.spotLights.value=q.state.spot,He.spotLightShadows.value=q.state.spotShadow,He.rectAreaLights.value=q.state.rectArea,He.ltc_1.value=q.state.rectAreaLTC1,He.ltc_2.value=q.state.rectAreaLTC2,He.pointLights.value=q.state.point,He.pointLightShadows.value=q.state.pointShadow,He.hemisphereLights.value=q.state.hemi,He.directionalShadowMap.value=q.state.directionalShadowMap,He.directionalShadowMatrix.value=q.state.directionalShadowMatrix,He.spotShadowMap.value=q.state.spotShadowMap,He.spotLightMatrix.value=q.state.spotLightMatrix,He.spotLightMap.value=q.state.spotLightMap,He.pointShadowMap.value=q.state.pointShadowMap,He.pointShadowMatrix.value=q.state.pointShadowMatrix),j.currentProgram=Qe,j.uniformsList=null,Qe}function Ho(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Ml.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function li(A,W){const Q=Ge.get(A);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function Vo(A,W,Q,j,q){W.isScene!==!0&&(W=Tt),b.resetTextureUnits();const Se=W.fog,Re=j.isMeshStandardMaterial?W.environment:null,Le=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ws,ke=(j.isMeshStandardMaterial?K:w).get(j.envMap||Re),et=j.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Qe=!!Q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),He=!!Q.morphAttributes.position,pt=!!Q.morphAttributes.normal,rt=!!Q.morphAttributes.color;let kt=gr;j.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(kt=C.toneMapping);const Nt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,gt=Nt!==void 0?Nt.length:0,Ye=Ge.get(j),zt=g.state.lights;if(de===!0&&(ye===!0||A!==R)){const sn=A===R&&j.id===P;Me.setState(j,A,sn)}let ht=!1;j.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==zt.state.version||Ye.outputColorSpace!==Le||q.isBatchedMesh&&Ye.batching===!1||!q.isBatchedMesh&&Ye.batching===!0||q.isBatchedMesh&&Ye.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ye.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ye.instancing===!1||!q.isInstancedMesh&&Ye.instancing===!0||q.isSkinnedMesh&&Ye.skinning===!1||!q.isSkinnedMesh&&Ye.skinning===!0||q.isInstancedMesh&&Ye.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ye.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ye.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ye.instancingMorph===!1&&q.morphTexture!==null||Ye.envMap!==ke||j.fog===!0&&Ye.fog!==Se||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==et||Ye.vertexTangents!==Qe||Ye.morphTargets!==He||Ye.morphNormals!==pt||Ye.morphColors!==rt||Ye.toneMapping!==kt||Ye.morphTargetsCount!==gt)&&(ht=!0):(ht=!0,Ye.__version=j.version);let ln=Ye.currentProgram;ht===!0&&(ln=Zr(j,W,q));let Vi=!1,vn=!1,vi=!1;const Rt=ln.getUniforms(),un=Ye.uniforms;if(qe.useProgram(ln.program)&&(Vi=!0,vn=!0,vi=!0),j.id!==P&&(P=j.id,vn=!0),Vi||R!==A){qe.buffers.depth.getReversed()?(ve.copy(A.projectionMatrix),zv(ve),Hv(ve),Rt.setValue(B,"projectionMatrix",ve)):Rt.setValue(B,"projectionMatrix",A.projectionMatrix),Rt.setValue(B,"viewMatrix",A.matrixWorldInverse);const Jt=Rt.map.cameraPosition;Jt!==void 0&&Jt.setValue(B,Ue.setFromMatrixPosition(A.matrixWorld)),lt.logarithmicDepthBuffer&&Rt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Rt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,vn=!0,vi=!0)}if(q.isSkinnedMesh){Rt.setOptional(B,q,"bindMatrix"),Rt.setOptional(B,q,"bindMatrixInverse");const sn=q.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Rt.setValue(B,"boneTexture",sn.boneTexture,b))}q.isBatchedMesh&&(Rt.setOptional(B,q,"batchingTexture"),Rt.setValue(B,"batchingTexture",q._matricesTexture,b),Rt.setOptional(B,q,"batchingIdTexture"),Rt.setValue(B,"batchingIdTexture",q._indirectTexture,b),Rt.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&Rt.setValue(B,"batchingColorTexture",q._colorsTexture,b));const Qt=Q.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&Je.update(q,Q,ln),(vn||Ye.receiveShadow!==q.receiveShadow)&&(Ye.receiveShadow=q.receiveShadow,Rt.setValue(B,"receiveShadow",q.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(un.envMap.value=ke,un.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&W.environment!==null&&(un.envMapIntensity.value=W.environmentIntensity),vn&&(Rt.setValue(B,"toneMappingExposure",C.toneMappingExposure),Ye.needsLights&&Go(un,vi),Se&&j.fog===!0&&we.refreshFogUniforms(un,Se),we.refreshMaterialUniforms(un,j,k,le,g.state.transmissionRenderTarget[A.id]),Ml.upload(B,Ho(Ye),un,b)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ml.upload(B,Ho(Ye),un,b),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Rt.setValue(B,"center",q.center),Rt.setValue(B,"modelViewMatrix",q.modelViewMatrix),Rt.setValue(B,"normalMatrix",q.normalMatrix),Rt.setValue(B,"modelMatrix",q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const sn=j.uniformsGroups;for(let Jt=0,vt=sn.length;Jt<vt;Jt++){const ui=sn[Jt];V.update(ui,ln),V.bind(ui,ln)}}return ln}function Go(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function bl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,W,Q){Ge.get(A.texture).__webglTexture=W,Ge.get(A.depthTexture).__webglTexture=Q;const j=Ge.get(A);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Q===void 0,j.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const Q=Ge.get(A);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0};const Wo=B.createFramebuffer();this.setRenderTarget=function(A,W=0,Q=0){X=A,O=W,U=Q;let j=!0,q=null,Se=!1,Re=!1;if(A){const ke=Ge.get(A);if(ke.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(B.FRAMEBUFFER,null),j=!1;else if(ke.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(ke.__hasExternalTextures)b.rebindTextures(A,Ge.get(A.texture).__webglTexture,Ge.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const He=A.depthTexture;if(ke.__boundDepthTexture!==He){if(He!==null&&Ge.has(He)&&(A.width!==He.image.width||A.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const et=A.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Re=!0);const Qe=Ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[W])?q=Qe[W][Q]:q=Qe[W],Se=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?q=Ge.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?q=Qe[Q]:q=Qe,z.copy(A.viewport),oe.copy(A.scissor),ee=A.scissorTest}else z.copy(I).multiplyScalar(k).floor(),oe.copy(te).multiplyScalar(k).floor(),ee=Ie;if(Q!==0&&(q=Wo),qe.bindFramebuffer(B.FRAMEBUFFER,q)&&j&&qe.drawBuffers(A,q),qe.viewport(z),qe.scissor(oe),qe.setScissorTest(ee),Se){const ke=Ge.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,ke.__webglTexture,Q)}else if(Re){const ke=Ge.get(A.texture),et=W;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,ke.__webglTexture,Q,et)}else if(A!==null&&Q!==0){const ke=Ge.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ke.__webglTexture,Q)}P=-1},this.readRenderTargetPixels=function(A,W,Q,j,q,Se,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){qe.bindFramebuffer(B.FRAMEBUFFER,Le);try{const ke=A.texture,et=ke.format,Qe=ke.type;if(!lt.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-j&&Q>=0&&Q<=A.height-q&&B.readPixels(W,Q,j,q,nt.convert(et),nt.convert(Qe),Se)}finally{const ke=X!==null?Ge.get(X).__webglFramebuffer:null;qe.bindFramebuffer(B.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,W,Q,j,q,Se,Re){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){const ke=A.texture,et=ke.format,Qe=ke.type;if(!lt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-j&&Q>=0&&Q<=A.height-q){qe.bindFramebuffer(B.FRAMEBUFFER,Le);const He=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,He),B.bufferData(B.PIXEL_PACK_BUFFER,Se.byteLength,B.STREAM_READ),B.readPixels(W,Q,j,q,nt.convert(et),nt.convert(Qe),0);const pt=X!==null?Ge.get(X).__webglFramebuffer:null;qe.bindFramebuffer(B.FRAMEBUFFER,pt);const rt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await kv(B,rt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,He),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Se),B.deleteBuffer(He),B.deleteSync(rt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,Q=0){A.isTexture!==!0&&(Is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const j=Math.pow(2,-Q),q=Math.floor(A.image.width*j),Se=Math.floor(A.image.height*j),Re=W!==null?W.x:0,Le=W!==null?W.y:0;b.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,Re,Le,q,Se),qe.unbindTexture()};const Xo=B.createFramebuffer(),qo=B.createFramebuffer();this.copyTextureToTexture=function(A,W,Q=null,j=null,q=0,Se=null){A.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1],W=arguments[2],Se=arguments[3]||0,Q=null),Se===null&&(q!==0?(Is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=q,q=0):Se=0);let Re,Le,ke,et,Qe,He,pt,rt,kt;const Nt=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(Q!==null)Re=Q.max.x-Q.min.x,Le=Q.max.y-Q.min.y,ke=Q.isBox3?Q.max.z-Q.min.z:1,et=Q.min.x,Qe=Q.min.y,He=Q.isBox3?Q.min.z:0;else{const Qt=Math.pow(2,-q);Re=Math.floor(Nt.width*Qt),Le=Math.floor(Nt.height*Qt),A.isDataArrayTexture?ke=Nt.depth:A.isData3DTexture?ke=Math.floor(Nt.depth*Qt):ke=1,et=0,Qe=0,He=0}j!==null?(pt=j.x,rt=j.y,kt=j.z):(pt=0,rt=0,kt=0);const gt=nt.convert(W.format),Ye=nt.convert(W.type);let zt;W.isData3DTexture?(b.setTexture3D(W,0),zt=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(b.setTexture2DArray(W,0),zt=B.TEXTURE_2D_ARRAY):(b.setTexture2D(W,0),zt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const ht=B.getParameter(B.UNPACK_ROW_LENGTH),ln=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Vi=B.getParameter(B.UNPACK_SKIP_PIXELS),vn=B.getParameter(B.UNPACK_SKIP_ROWS),vi=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Nt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Nt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,et),B.pixelStorei(B.UNPACK_SKIP_ROWS,Qe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,He);const Rt=A.isDataArrayTexture||A.isData3DTexture,un=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Qt=Ge.get(A),sn=Ge.get(W),Jt=Ge.get(Qt.__renderTarget),vt=Ge.get(sn.__renderTarget);qe.bindFramebuffer(B.READ_FRAMEBUFFER,Jt.__webglFramebuffer),qe.bindFramebuffer(B.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ui=0;ui<ke;ui++)Rt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ge.get(A).__webglTexture,q,He+ui),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ge.get(W).__webglTexture,Se,kt+ui)),B.blitFramebuffer(et,Qe,Re,Le,pt,rt,Re,Le,B.DEPTH_BUFFER_BIT,B.NEAREST);qe.bindFramebuffer(B.READ_FRAMEBUFFER,null),qe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Ge.has(A)){const Qt=Ge.get(A),sn=Ge.get(W);qe.bindFramebuffer(B.READ_FRAMEBUFFER,Xo),qe.bindFramebuffer(B.DRAW_FRAMEBUFFER,qo);for(let Jt=0;Jt<ke;Jt++)Rt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Qt.__webglTexture,q,He+Jt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Qt.__webglTexture,q),un?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,sn.__webglTexture,Se,kt+Jt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,sn.__webglTexture,Se),q!==0?B.blitFramebuffer(et,Qe,Re,Le,pt,rt,Re,Le,B.COLOR_BUFFER_BIT,B.NEAREST):un?B.copyTexSubImage3D(zt,Se,pt,rt,kt+Jt,et,Qe,Re,Le):B.copyTexSubImage2D(zt,Se,pt,rt,et,Qe,Re,Le);qe.bindFramebuffer(B.READ_FRAMEBUFFER,null),qe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else un?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(zt,Se,pt,rt,kt,Re,Le,ke,gt,Ye,Nt.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(zt,Se,pt,rt,kt,Re,Le,ke,gt,Nt.data):B.texSubImage3D(zt,Se,pt,rt,kt,Re,Le,ke,gt,Ye,Nt):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Se,pt,rt,Re,Le,gt,Ye,Nt.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Se,pt,rt,Nt.width,Nt.height,gt,Nt.data):B.texSubImage2D(B.TEXTURE_2D,Se,pt,rt,Re,Le,gt,Ye,Nt);B.pixelStorei(B.UNPACK_ROW_LENGTH,ht),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ln),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Vi),B.pixelStorei(B.UNPACK_SKIP_ROWS,vn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,vi),Se===0&&W.generateMipmaps&&B.generateMipmap(zt),qe.unbindTexture()},this.copyTextureToTexture3D=function(A,W,Q=null,j=null,q=0){return A.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,j=arguments[1]||null,A=arguments[2],W=arguments[3],q=arguments[4]||0),Is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,Q,j,q)},this.initRenderTarget=function(A){Ge.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),qe.unbindTexture()},this.resetState=function(){O=0,U=0,X=null,qe.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=yt._getDrawingBufferColorSpace(e),n.unpackColorSpace=yt._getUnpackColorSpace()}}const Jm=({cubemapImages:o})=>{const e=ri.useRef(null);return ri.useEffect(()=>{if(!o||o.length!==6){console.error("Cubemap requires exactly six images.");return}const n=new f0,r=new Yn(75,window.innerWidth/window.innerHeight,.1,1e3),a=new rE;a.setSize(window.innerWidth,window.innerHeight);const u=e.current;u.appendChild(a.domElement);const d=new x0().load(o,()=>{console.log("Cubemap loaded successfully!")},void 0,m=>{console.error("Error loading cubemap:",m)});d.magFilter=jn,d.minFilter=jn,n.background=d,r.position.z=1;const p=()=>{requestAnimationFrame(p),a.render(n,r)};return p(),()=>{u.removeChild(a.domElement),a.dispose()}},[o]),Ct.jsx("div",{ref:e,style:{width:"100%",height:"100%"}})};Jm.propTypes={cubemapImages:Gr.arrayOf(Gr.string).isRequired};const eg=({rooms:o,onSelectRoom:e})=>Ct.jsxs("div",{children:[Ct.jsx("h2",{children:"Select a Room"}),o.map((n,r)=>Ct.jsx("button",{onClick:()=>e(r),children:n.name},r))]});eg.propTypes={rooms:Gr.arrayOf(Gr.shape({name:Gr.string.isRequired})).isRequired,onSelectRoom:Gr.func.isRequired};const sE=()=>{const[o,e]=ri.useState([]),[n,r]=ri.useState(null),a=u=>{const f=[u[1],u[3],u[4],u[5],u[0],u[2]],d={name:`Room ${o.length+1}`,images:f};console.log(u),e([...o,d])};return Ct.jsx("div",{children:n?Ct.jsx(Jm,{cubemapImages:o[n].images}):Ct.jsxs(Ct.Fragment,{children:[Ct.jsx(ym,{onSaveCubemap:a}),Ct.jsx(eg,{rooms:o,onSelectRoom:r})]})})};z_.createRoot(document.getElementById("root")).render(Ct.jsx(ri.StrictMode,{children:Ct.jsx(sE,{})}));
