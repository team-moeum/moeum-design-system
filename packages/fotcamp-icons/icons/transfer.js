/*! For license information please see transfer.js.LICENSE.txt */
(()=>{"use strict";var e={6018:(e,t)=>{var r=Symbol.for("react.element"),o=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator,{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),n=Object.assign,a={};function f(e,t,r){this.props=e,this.context=t,this.refs=a,this.updater=r||o}function i(){}function p(e,t,r){this.props=e,this.context=t,this.refs=a,this.updater=r||o}f.prototype.isReactComponent={},f.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},f.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},i.prototype=f.prototype;var s=p.prototype=new i;s.constructor=p,n(s,f.prototype),s.isPureReactComponent=!0;Array.isArray;var c=Object.prototype.hasOwnProperty,u=null,l={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,o){var n,a={},f=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(f=""+t.key),t)c.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);var p=arguments.length-2;if(1===p)a.children=o;else if(1<p){for(var s=Array(p),y=0;y<p;y++)s[y]=arguments[y+2];a.children=s}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===a[n]&&(a[n]=p[n]);return{$$typeof:r,type:e,key:f,ref:i,props:a,_owner:u}}},2155:(e,t,r)=>{e.exports=r(6018)}},t={};(function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports})(2155)})();