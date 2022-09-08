(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{19394:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r(17187);function i(t,e,r){try{Reflect.apply(t,e,r)}catch(n){setTimeout((()=>{throw n}))}}class o extends n.EventEmitter{emit(t,...e){let r="error"===t;const n=this._events;if(void 0!==n)r=r&&void 0===n.error;else if(!r)return!1;if(r){let t;if(e.length>0&&([t]=e),t instanceof Error)throw t;const r=new Error("Unhandled error."+(t?` (${t.message})`:""));throw r.context=t,r}const o=n[t];if(void 0===o)return!1;if("function"===typeof o)i(o,this,e);else{const t=o.length,r=function(t){const e=t.length,r=new Array(e);for(let n=0;n<e;n+=1)r[n]=t[n];return r}(o);for(let n=0;n<t;n+=1)i(r[n],this,e)}return!0}}e.default=o},2450:function(t,e,r){"use strict";var n=r(48764).Buffer,i=new(0,r(86266).ec)("secp256k1"),o=r.g.crypto||r.g.msCrypto||{},a=o.subtle||o.webkitSubtle,s=r(42474);const u=n.from("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141","hex"),l=n.alloc(32,0);function h(t,e){if(!t)throw new Error(e||"Assertion failed")}function f(t){return e=t,!(!n.isBuffer(e)||32!==e.length)&&(t.compare(l)>0&&t.compare(u)<0);var e}function c(t){var e=new Uint8Array(t);return"undefined"===typeof o.getRandomValues?n.from(s.randomBytes(t)):(o.getRandomValues(e),n.from(e))}function d(t){return new Promise((function(e){var r=s.createHash("sha512").update(t).digest();e(new Uint8Array(r))}))}function p(t){return function(e,r,i){return new Promise((function(o){if(a){return a.importKey("raw",r,{name:"AES-CBC"},!1,[t]).then((function(r){var n={name:"AES-CBC",iv:e};return a[t](n,r,i)})).then((function(t){o(n.from(new Uint8Array(t)))}))}if("encrypt"===t){var u=s.createCipheriv("aes-256-cbc",r,e);let t=u.update(i),a=u.final();o(n.concat([t,a]))}else if("decrypt"===t){var l=s.createDecipheriv("aes-256-cbc",r,e);let t=l.update(i),a=l.final();o(n.concat([t,a]))}}))}}var m=p("encrypt"),g=p("decrypt");e.oq=function(){for(var t=c(32);!f(t);)t=c(32);return t};var v=e.rc=function(t){return h(32===t.length,"Bad private key"),h(f(t),"Bad private key"),n.from(i.keyFromPrivate(t).getPublic("arr"))};e.Xx=function(t,e){return new Promise((function(r){h(32===t.length,"Bad private key"),h(f(t),"Bad private key"),h(e.length>0,"Message should not be empty"),h(e.length<=32,"Message is too long"),r(n.from(i.sign(e,t,{canonical:!0}).toDER()))}))};var y=function(t,e){return new Promise((function(r){h(n.isBuffer(t),"Bad private key"),h(n.isBuffer(e),"Bad public key"),h(32===t.length,"Bad private key"),h(f(t),"Bad private key"),h(65===e.length||33===e.length,"Bad public key"),65===e.length&&h(4===e[0],"Bad public key"),33===e.length&&h(2===e[0]||3===e[0],"Bad public key");var o=i.keyFromPrivate(t),a=i.keyFromPublic(e),s=o.derive(a.getPublic());r(n.from(s.toArray()))}))};e.HI=function(t,e,r){var i,o,a,u;return r=r||{},new Promise((function(e){for(var n=r.ephemPrivateKey||c(32);!f(n);)n=r.ephemPrivateKey||c(32);o=v(n),e(y(n,t))})).then((function(t){return d(t)})).then((function(t){i=r.iv||c(16);var n=t.slice(0,32);return u=t.slice(32),m(i,n,e)})).then((function(t){a=t;var e=n.concat([i,o,a]);return function(t,e){return new Promise((function(r){var i=s.createHmac("sha256",n.from(t));i.update(e),r(i.digest())}))}(u,e)})).then((function(t){return{iv:i,ephemPublicKey:o,ciphertext:a,mac:t}}))},e.pe=function(t,e){var r;return y(t,e.ephemPublicKey).then((function(t){return d(t)})).then((function(t){r=t.slice(0,32);var i,o,a,u=t.slice(32),l=n.concat([e.iv,e.ephemPublicKey,e.ciphertext]);return i=u,o=l,a=e.mac,new Promise((function(t){var e=s.createHmac("sha256",n.from(i));e.update(o),t(function(t,e){if(t.length!==e.length)return!1;for(var r=0,n=0;n<t.length;n++)r|=t[n]^e[n];return 0===r}(e.digest(),a))}))})).then((function(t){return h(t,"Bad MAC"),g(e.iv,r,e.ciphertext)})).then((function(t){return n.from(new Uint8Array(t))}))}},20917:function(t,e,r){"use strict";r.d(e,{U2:function(){return _},i:function(){return x},ut:function(){return g},v_:function(){return M},y1:function(){return m}});var n=r(4942),i=r(72378),o=r.n(i),a=r(2043);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const l=r.n(a)().getLogger("http-helpers");l.setLevel(a.levels.INFO);let h="torus-default",f="";let c=null;const d=[],p=[];function m(t){f=t}function g(t){h=t}async function v(t,e){let r=null;try{r=new URL(t)}catch(n){}if(c&&r&&(d.includes(r.origin)||p.includes(r.pathname))){const r=c.startTransaction({name:t}),n=r.startChild({op:"http"}),i=await fetch(t,e);return n.finish(),r.finish(),i}return fetch(t,e)}function y(){const t={};return h&&(t["x-api-key"]=h),f&&(t["x-embed-host"]=f),t}function b(t){l.info("Response: ".concat(t.status," ").concat(t.statusText)),l.info("Url: ".concat(t.url))}const w=(t,e)=>{const r=new Promise(((e,r)=>{const n=setTimeout((()=>{clearTimeout(n),r(new Error("Timed out in ".concat(t,"ms")))}),t)}));return Promise.race([e,r])},_=async function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const n={mode:"cors",headers:{}};r.useAPIKey&&(n.headers=u(u({},n.headers),y()));const i=o()(n,e,{method:"GET"}),a=await v(t,i);if(a.ok)return a.json();throw b(a),a},M=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i={mode:"cors",headers:{"Content-Type":"application/json; charset=utf-8"}};n.useAPIKey&&(i.headers=u(u({},i.headers),y()));const a=o()(i,r,{method:"POST"});return n.isUrlEncodedData?(a.body=e,"application/json; charset=utf-8"===a.headers["Content-Type"]&&delete a.headers["Content-Type"]):a.body=JSON.stringify(e),w(n.timeout||6e4,v(t,a).then((t=>{if(t.ok)return t.json();throw b(t),t})))},x=(t,e)=>({jsonrpc:"2.0",method:t,id:10,params:e})},95844:function(t,e,r){"use strict";r.d(e,{AP:function(){return x},O4:function(){return N},Pk:function(){return k},Rq:function(){return E},UZ:function(){return P},Ue:function(){return w},V2:function(){return B},XR:function(){return y},eI:function(){return R},nE:function(){return M},v0:function(){return S},zc:function(){return L}});var n=r(4942),i=r(88473),o=r(15048),a=r(17187),s=r(4445),u=r.n(s),l=r(79826),h=r(12840),f=r.n(h),c=r(30778),d=r.n(c),p=r(74286),m=r.n(p);function g(){}const v="ACK";class y extends i.Duplex{constructor(t){let{name:e,target:r,targetWindow:i=window,targetOrigin:o="*"}=t;if(super({objectMode:!0}),(0,n.Z)(this,"_init",void 0),(0,n.Z)(this,"_haveSyn",void 0),(0,n.Z)(this,"_name",void 0),(0,n.Z)(this,"_target",void 0),(0,n.Z)(this,"_targetWindow",void 0),(0,n.Z)(this,"_targetOrigin",void 0),(0,n.Z)(this,"_onMessage",void 0),(0,n.Z)(this,"_synIntervalId",void 0),!e||!r)throw new Error("Invalid input.");this._init=!1,this._haveSyn=!1,this._name=e,this._target=r,this._targetWindow=i,this._targetOrigin=o,this._onMessage=this.onMessage.bind(this),this._synIntervalId=null,window.addEventListener("message",this._onMessage,!1),this._handShake()}_break(){this.cork(),this._write("BRK",null,g),this._haveSyn=!1,this._init=!1}_handShake(){this._write("SYN",null,g),this.cork()}_onData(t){if(this._init)if("BRK"===t)this._break();else try{this.push(t)}catch(e){this.emit("error",e)}else"SYN"===t?(this._haveSyn=!0,this._write(v,null,g)):t===v&&(this._init=!0,this._haveSyn||this._write(v,null,g),this.uncork())}_postMessage(t){const e=this._targetOrigin;this._targetWindow.postMessage({target:this._target,data:t},e)}onMessage(t){const e=t.data;"*"!==this._targetOrigin&&t.origin!==this._targetOrigin||t.source!==this._targetWindow||"object"!==typeof e||e.target!==this._name||!e.data||this._onData(e.data)}_read(){}_write(t,e,r){this._postMessage(t),r()}_destroy(){window.removeEventListener("message",this._onMessage,!1)}}function b(t,e,r){try{Reflect.apply(t,e,r)}catch(n){setTimeout((()=>{throw n}))}}class w extends a.EventEmitter{emit(t){let e="error"===t;const r=this._events;if(void 0!==r)e=e&&void 0===r.error;else if(!e)return!1;for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];if(e){let t;if(i.length>0&&([t]=i),t instanceof Error)throw t;const e=new Error("Unhandled error.".concat(t?" (".concat(t.message,")"):""));throw e.context=t,e}const a=r[t];if(void 0===a)return!1;if("function"===typeof a)b(a,this,i);else{const t=a.length,e=function(t){const e=t.length,r=new Array(e);for(let n=0;n<e;n+=1)r[n]=t[n];return r}(a);for(let r=0;r<t;r+=1)b(e[r],this,i)}return!0}}class _ extends Error{constructor(t){let{code:e,message:r,data:i}=t;if(!Number.isInteger(e))throw new Error("code must be an integer");if(!r||"string"!==typeof r)throw new Error("message must be string");super(r),(0,n.Z)(this,"code",void 0),(0,n.Z)(this,"data",void 0),this.code=e,void 0!==i&&(this.data=i)}toString(){return u()({code:this.code,message:this.message,data:this.data,stack:this.stack})}}const M=function(t,e){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(n,i)=>{n||i.error?e(n||i.error):!r||Array.isArray(i)?t(i):t(i.result)}};function x(){const t={};const e=new w;const r=new i.Duplex({objectMode:!0,read:function(){return!1},write:function(r,n,i){let o;try{!r.id?function(t){e.emit("notification",t)}(r):function(e){const r=t[e.id];if(!r)throw new Error('StreamMiddleware - Unknown response id "'.concat(e.id,'"'));delete t[e.id],Object.assign(r.res,e),setTimeout(r.end)}(r)}catch(a){o=a}i(o)}});return{events:e,middleware:(e,n,i,o)=>{r.push(e),t[e.id]={req:e,res:n,next:i,end:o}},stream:r}}function S(t){return(e,r,n,i)=>{const o=t[e.method];return void 0===o?n():"function"===typeof o?o(e,r,n,i):(r.result=o,i())}}function E(){return(t,e,r,n)=>{const i=t.id,a=(0,o.kb)();t.id=a,e.id=a,r((r=>{t.id=i,e.id=i,r()}))}}function k(t){return async(e,r,n,i)=>{let o;const a=new Promise((t=>{o=t}));let s=null,u=!1;const l=async()=>{u=!0,n((t=>{s=t,o()})),await a};try{await t(e,r,l),u?(await a,s(null)):i(null)}catch(h){s?s(h):i(h)}}}function A(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}class R extends w{constructor(){super(),(0,n.Z)(this,"_middleware",void 0),this._middleware=[]}static async _runAllMiddleware(t,e,r){const n=[];let i=null,o=!1;for(const a of r)if([i,o]=await R._runMiddleware(t,e,a,n),o)break;return[i,o,n.reverse()]}static _runMiddleware(t,e,r,n){return new Promise((i=>{const o=t=>{const r=t||e.error;r&&(e.error=(0,l.serializeError)(r)),i([r,!0])},a=t=>{e.error?o(e.error):(t&&("function"!==typeof t&&o(new _({code:-32603,message:"JRPCEngine: 'next' return handlers must be functions"})),n.push(t)),i([null,!1]))};try{r(t,e,a,o)}catch(s){o(s)}}))}static async _runReturnHandlers(t){for(const e of t)await new Promise(((t,r)=>{e((e=>e?r(e):t()))}))}static _checkForCompletion(t,e,r){if(!("result"in e)&&!("error"in e))throw new _({code:-32603,message:"Response has no error or result for request"});if(!r)throw new _({code:-32603,message:"Nothing ended request"})}push(t){this._middleware.push(t)}handle(t,e){if(e&&"function"!==typeof e)throw new Error('"callback" must be a function if provided.');return Array.isArray(t)?e?this._handleBatch(t,e):this._handleBatch(t):e?this._handle(t,e):this._promiseHandle(t)}asMiddleware(){return async(t,e,r,n)=>{try{const[i,o,a]=await R._runAllMiddleware(t,e,this._middleware);return o?(await R._runReturnHandlers(a),n(i)):r((async t=>{try{await R._runReturnHandlers(a)}catch(e){return t(e)}return t()}))}catch(i){return n(i)}}}async _handleBatch(t,e){try{const r=await Promise.all(t.map(this._promiseHandle.bind(this)));return e?e(null,r):r}catch(r){if(e)return e(r);throw r}}_promiseHandle(t){return new Promise((e=>{this._handle(t,((t,r)=>{e(r)}))}))}async _handle(t,e){if(!t||Array.isArray(t)||"object"!==typeof t){const t=new _({code:-32603,message:"request must be plain object"});return e(t,{id:void 0,jsonrpc:"2.0",error:t})}if("string"!==typeof t.method){const r=new _({code:-32603,message:"method must be string"});return e(r,{id:t.id,jsonrpc:"2.0",error:r})}const r=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?A(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t),i={id:r.id,jsonrpc:r.jsonrpc};let o=null;try{await this._processRequest(r,i)}catch(a){o=a}return o&&(delete i.result,i.error||(i.error=(0,l.serializeError)(o))),e(o,i)}async _processRequest(t,e){const[r,n,i]=await R._runAllMiddleware(t,e,this._middleware);if(R._checkForCompletion(t,e,n),await R._runReturnHandlers(i),r)throw r}}function P(t){const e=new R;return t.forEach((t=>e.push(t))),e.asMiddleware()}class C extends i.Duplex{constructor(t){let{parent:e,name:r}=t;super({objectMode:!0}),(0,n.Z)(this,"_parent",void 0),(0,n.Z)(this,"_name",void 0),this._parent=e,this._name=r}_read(){}_write(t,e,r){this._parent.push({name:this._name,data:t}),r()}}function I(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?I(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const T=Symbol("IGNORE_SUBSTREAM");class N extends i.Duplex{constructor(){super(O(O({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),{},{objectMode:!0})),(0,n.Z)(this,"_substreams",void 0),(0,n.Z)(this,"getStream",void 0),this._substreams={}}createStream(t){if(!t)throw new Error("ObjectMultiplex - name must not be empty");if(this._substreams[t])throw new Error('ObjectMultiplex - Substream for name "'.concat(t,'" already exists'));const e=new C({parent:this,name:t});return this._substreams[t]=e,function(t,e){const r=d()(e);f()(t,{readable:!1},r),f()(t,{writable:!1},r)}(this,(t=>e.destroy(t||void 0))),e}ignoreStream(t){if(!t)throw new Error("ObjectMultiplex - name must not be empty");if(this._substreams[t])throw new Error('ObjectMultiplex - Substream for name "'.concat(t,'" already exists'));this._substreams[t]=T}_read(){}_write(t,e,r){const{name:n,data:i}=t;if(!n)return window.console.warn('ObjectMultiplex - malformed chunk without name "'.concat(t,'"')),r();const o=this._substreams[n];return o?(o!==T&&o.push(i),r()):(window.console.warn('ObjectMultiplex - orphaned data for stream "'.concat(n,'"')),r())}}function B(t){const e=new N;return e.getStream=function(t){return this._substreams[t]?this._substreams[t]:this.createStream(t)},m()(t,e,t,(t=>{t&&window.console.error(t)})),e}class L extends y{_postMessage(t){let e=this._targetOrigin;if("object"===typeof t){const r=t;if("object"===typeof r.data){const t=r.data;if(Array.isArray(t.params)&&t.params.length>0){const r=t.params[0];r._origin&&(e=r._origin),r._origin=window.location.origin}}}this._targetWindow.postMessage({target:this._target,data:t},e)}}},15048:function(t,e,r){"use strict";r.d(e,{KO:function(){return c},kb:function(){return l},sX:function(){return f},tH:function(){return h},zc:function(){return d}});var n=r(61798),i=r.n(n),o=r(45772),a=r.n(o),s=r(95811),u=r.n(s);r(48764).Buffer;const l=()=>i()(32).toString("hex");URL;const h=a();function f(t){return h.decode(t)}const c=u();function d(t){return h.encode(JSON.stringify(t))}},3388:function(t,e,r){"use strict";r.d(e,{$e:function(){return v},Gv:function(){return I},ZP:function(){return W},dr:function(){return k},hG:function(){return R},x7:function(){return A}});var n=r(2043),i=r.n(n),o=r(4942),a=r(2450),s=r(20917),u=r(95844),l=r(15048),h=r(72378),f=r.n(h),c=r(74286),d=r.n(c),p=r(48764).Buffer;const m="openlogin-modal",g="openlogin_store",v={POPUP:"popup",REDIRECT:"redirect"},y="openlogin_login",b="openlogin_logout",w="openlogin_check_3PC_support",_="openlogin_set_pid_data",M="openlogin_get_data",x="popup",S="redirect",E="jrpc",k={MAINNET:"mainnet",TESTNET:"testnet",CYAN:"cyan",DEVELOPMENT:"development"},A={SECP256K1:"secp256k1",ED25519:"ed25519"},R={GOOGLE:"google",FACEBOOK:"facebook",REDDIT:"reddit",DISCORD:"discord",TWITCH:"twitch",APPLE:"apple",LINE:"line",GITHUB:"github",KAKAO:"kakao",LINKEDIN:"linkedin",TWITTER:"twitter",WEIBO:"weibo",WECHAT:"wechat",EMAIL_PASSWORDLESS:"email_passwordless",WEBAUTHN:"webauthn",JWT:"jwt"};i().setLevel("error");var P=i().getLogger("openlogin");async function C(){return new Promise((t=>{"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",(()=>{t()}))}))}function I(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const e={},r=new URL(window.location.href);r.searchParams.forEach(((t,r)=>{"result"!==r&&(e[r]=t)}));const n=r.searchParams.get("result");if(n)try{const t=JSON.parse((0,l.sX)(n));Object.keys(t).forEach((r=>{e[r]=t[r]}))}catch(s){P.error(s)}const i=r.hash.substring(1),o=new URL("".concat(window.location.origin,"/?").concat(i));o.searchParams.forEach(((t,r)=>{"result"!==r&&(e[r]=t)}));const a=o.searchParams.get("result");if(a)try{const t=JSON.parse((0,l.sX)(a));Object.keys(t).forEach((r=>{e[r]=t[r]}))}catch(s){P.error(s)}if(t){const t=window.location.origin+window.location.pathname;window.history.replaceState(null,"",t)}return e}function O(t,e){return new Promise(((r,n)=>{e||n(new Error("Unable to open window"));let i=!1;const o=setInterval((()=>{!i&&e.closed&&(clearInterval(o),n(new Error("user closed popup")))}),500),a=s=>{const{pid:u}=s.data;t===u&&(window.removeEventListener("message",a),i=!0,clearInterval(o),e.close(),s.data.data&&s.data.data.error?n(new Error(s.data.data.error)):r(s.data.data))};window.addEventListener("message",a)}))}function T(t){const{baseURL:e,query:r,hash:n}=t,i=new URL(e);if(r&&Object.keys(r).forEach((t=>{i.searchParams.append(t,r[t])})),n){const t=new URL(T({baseURL:e,query:n})).searchParams.toString();i.hash=t}return i.toString()}function N(t){let e,r=!1,n=0;try{e=window[t],r=!0,n=e.length;const i="__storage_test__";return e.setItem(i,i),e.removeItem(i),!0}catch(i){return i&&(22===i.code||1014===i.code||"QuotaExceededErro r"===i.name||"NS_ERROR_DOM_QUOTA_REACHED"===i.name)&&r&&0!==n}}const B=N("sessionStorage"),L=N("localStorage");function j(){const t=void 0!==window.screenLeft?window.screenLeft:window.screenX,e=void 0!==window.screenTop?window.screenTop:window.screenY,r=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:window.screen.width,n=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:window.screen.height,i=Math.abs((r-1200)/2/1+t),o=Math.abs((n-700)/2/1+e);return"titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=".concat(700,",width=").concat(1200,",top=").concat(o,",left=").concat(i)}class D{constructor(t){(0,o.Z)(this,"modalUrl",void 0),(0,o.Z)(this,"iframeElem",void 0),(0,o.Z)(this,"initialized",!1),(0,o.Z)(this,"modalZIndex",99999),(0,o.Z)(this,"mux",void 0),(0,o.Z)(this,"verifierStream",void 0),this.modalUrl=t}async init(){await this.initIFrame(this.modalUrl),this.setupStream()}setupStream(){if(null===this.iframeElem)throw new Error("iframe is null");this.mux=(0,u.V2)(new u.zc({name:"modal_iframe_rpc",target:"modal_rpc",targetWindow:this.iframeElem.contentWindow,targetOrigin:new URL(this.modalUrl).origin})),this.verifierStream=this.mux.createStream("verifier")}async initIFrame(t){await C();const e=document.getElementById(m);return e&&(e.remove(),P.info("already initialized, removing previous modal iframe")),this.iframeElem=(t=>{const e=window.document.createElement("template"),r=t.trim();return e.innerHTML=r,e.content.firstChild})("<iframe\n        id=".concat(m,'\n        class="torusIframe"\n        src="').concat(t,'"\n        style="display: none; position: fixed; top: 0; right: 0; width: 100%;\n        height: 100%; border: none; border-radius: 0; z-index: ').concat(this.modalZIndex.toString(),'"\n      ></iframe>')),this._hideModal(),document.body.appendChild(this.iframeElem),new Promise((t=>{this.iframeElem.onload=()=>{this.initialized=!0,t()}}))}_showModal(){const t={display:"block",position:"fixed",width:"100%",height:"100%",top:"0px",right:"0px",left:"0px",bottom:"0px",border:"0"};t["z-index"]=this.modalZIndex,this.iframeElem.setAttribute("style",Object.entries(t).map((t=>{let[e,r]=t;return"".concat(e,":").concat(r)})).join(";"))}_hideModal(){const t={display:"none",position:"fixed",width:"100%",height:"100%",top:"0px",right:"0px",left:"0px",bottom:"0px",border:"0"};t["z-index"]=this.modalZIndex,this.iframeElem.setAttribute("style",Object.entries(t).map((t=>{let[e,r]=t;return"".concat(e,":").concat(r)})).join(";"))}async _prompt(t,e,r,n){this._showModal();((t,e,r)=>{const n=i=>{r(i),t.removeListener(e,n)};t.on(e,n)})(this.verifierStream,"data",(t=>{this._hideModal(),n(t)})),this.verifierStream.write({name:"prompt",clientId:t,whiteLabel:e,loginConfig:r})}async cleanup(){await C();const t=document.getElementById(m);t&&(t.remove(),this.iframeElem=null),this.initialized=!1}}class F{constructor(){(0,o.Z)(this,"store",{})}getItem(t){return this.store[t]}setItem(t,e){this.store[t]=e}}class U{constructor(t,e){(0,o.Z)(this,"_storeKey",g),(0,o.Z)(this,"storage",void 0),this.storage=t,this._storeKey=e||g;try{t.getItem(e||g)||this.resetStore()}catch(r){}}static getInstance(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"local";if(!this.instance){let r=new F;"local"===e&&L&&(r=localStorage),"session"===e&&B&&(r=sessionStorage);const n=t?"".concat(g,"_").concat(t):g;this.instance=new this(r,n)}return this.instance}toJSON(){return this.storage.getItem(this._storeKey)}resetStore(){const t=this.getStore();return this.storage.setItem(this._storeKey,JSON.stringify({})),t}getStore(){return JSON.parse(this.storage.getItem(this._storeKey))}get(t){return JSON.parse(this.storage.getItem(this._storeKey))[t]}set(t,e){const r=JSON.parse(this.storage.getItem(this._storeKey));r[t]=e,this.storage.setItem(this._storeKey,JSON.stringify(r))}}(0,o.Z)(U,"instance",void 0);class q extends u.Ue{constructor(){super(...arguments),(0,o.Z)(this,"iframeElem",null),(0,o.Z)(this,"rpcStream",void 0),(0,o.Z)(this,"iframeUrl",void 0),(0,o.Z)(this,"rpcEngine",void 0),(0,o.Z)(this,"initialized",void 0),(0,o.Z)(this,"mux",void 0)}init(t){let{iframeElem:e,iframeUrl:r}=t;this.iframeElem=e,this.iframeUrl=r,this.setupStream(),this.initialized=!0}setupStream(){if(null===this.iframeElem)throw new Error("iframe is null");this.rpcStream=new u.zc({name:"embed_rpc",target:"iframe_rpc",targetWindow:this.iframeElem.contentWindow,targetOrigin:new URL(this.iframeUrl).origin}),this.mux=(0,u.V2)(this.rpcStream);const t=(0,u.AP)();d()(t.stream,this.mux.createStream("jrpc"),t.stream,(t=>{P.error("JRPC connection broken",t)}));const e=new u.eI;e.push((0,u.Rq)()),e.push(t.middleware),this.rpcEngine=e}cleanup(){this.iframeElem=null,this.initialized=!1}_rpcRequest(t,e){t.jsonrpc||(t.jsonrpc="2.0"),t.id||(t.id=(0,l.kb)()),this.rpcEngine.handle(t,e)}}function z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function $(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?z(Object(r),!0).forEach((function(e){(0,o.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}!function(t){try{if("undefined"===typeof document)return;const e=document.createElement("link");e.href=t,e.crossOrigin="anonymous",e.type="text/html",e.rel="prefetch",e.relList&&e.relList.supports&&e.relList.supports("prefetch")&&document.head.appendChild(e)}catch(e){P.error(e)}}("https://app.openlogin.com/sdk-modal");class W{constructor(t){var e,r,n,i,a,s,u,l,h,f,c;if((0,o.Z)(this,"provider",void 0),(0,o.Z)(this,"state",void 0),(0,o.Z)(this,"modal",void 0),this.provider=new Proxy(new q,{deleteProperty:()=>!0}),t._iframeUrl||(t.network===k.MAINNET?t._iframeUrl="https://app.openlogin.com":t.network===k.CYAN?t._iframeUrl="https://cyan.openlogin.com":t.network===k.TESTNET?t._iframeUrl="https://beta.openlogin.com":t.network===k.DEVELOPMENT&&(t._iframeUrl="http://localhost:3000")),!t._iframeUrl)throw new Error("unspecified network and iframeUrl");this.modal=new D("".concat(t._iframeUrl,"/sdk-modal")),this.initState($($({},t),{},{no3PC:null!==(e=t.no3PC)&&void 0!==e&&e,_iframeUrl:t._iframeUrl,_startUrl:null!==(r=t._startUrl)&&void 0!==r?r:"".concat(t._iframeUrl,"/start"),_popupUrl:null!==(n=t._popupUrl)&&void 0!==n?n:"".concat(t._iframeUrl,"/popup-window"),redirectUrl:null!==(i=t.redirectUrl)&&void 0!==i?i:"".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname),uxMode:null!==(a=t.uxMode)&&void 0!==a?a:v.REDIRECT,replaceUrlOnRedirect:null===(s=t.replaceUrlOnRedirect)||void 0===s||s,originData:null!==(u=t.originData)&&void 0!==u?u:{[window.location.origin]:""},whiteLabel:null!==(l=t.whiteLabel)&&void 0!==l?l:{},loginConfig:null!==(h=t.loginConfig)&&void 0!==h?h:{},_storageServerUrl:null!==(f=t._storageServerUrl)&&void 0!==f?f:"https://broadcast-server.tor.us",storageKey:"session"===t.storageKey?"session":"local",_sessionNamespace:null!==(c=t._sessionNamespace)&&void 0!==c?c:""}))}get privKey(){return this.state.privKey?this.state.privKey.padStart(64,"0"):""}initState(t){this.state={uxMode:t.uxMode,network:t.network,store:U.getInstance(t._sessionNamespace,t.storageKey),iframeUrl:t._iframeUrl,startUrl:t._startUrl,popupUrl:t._popupUrl,clientId:t.clientId,redirectUrl:t.redirectUrl,replaceUrlOnRedirect:t.replaceUrlOnRedirect,originData:t.originData,loginConfig:t.loginConfig,support3PC:!t.no3PC,whiteLabel:t.whiteLabel,storageServerUrl:t._storageServerUrl,sessionNamespace:t._sessionNamespace}}async init(){this.state.network===k.TESTNET&&console.log("%c WARNING! You are on testnet. Please set network: 'mainnet' in production","color: #FF0000"),await Promise.all([this.modal.init(),this.updateOriginData()]),this.provider.init({iframeElem:this.modal.iframeElem,iframeUrl:this.state.iframeUrl});const t=I(this.state.replaceUrlOnRedirect);if(t.sessionId&&this.state.store.set("sessionId",t.sessionId),this._syncState(await this._getData()),this.state.support3PC){const t=await this._check3PCSupport();this.state.support3PC=!!t.support3PC}}async updateOriginData(){const t=JSON.parse(JSON.stringify(this.state.originData));Object.keys(t).forEach((e=>{""===t[e]&&delete t[e]}));const[e,r]=await Promise.all([this.getWhitelist(),this.getWhiteLabel()]);this._syncState({originData:$($({},e),t),whiteLabel:$($({},r),this.state.whiteLabel)})}async getWhitelist(){try{const{clientId:t}=this.state;if(!t)throw new Error("unspecified clientId");const e=new URL("https://api.developer.tor.us/whitelist");e.searchParams.append("project_id",this.state.clientId);return(await(0,s.U2)(e.href)).signed_urls}catch(t){return{}}}async getWhiteLabel(){try{const{clientId:t}=this.state;if(!t)throw new Error("unspecified clientId");const e=new URL("https://api.developer.tor.us/whitelabel");e.searchParams.append("project_id",this.state.clientId);return(await(0,s.U2)(e.href)).whiteLabel}catch(t){return{}}}async login(t){return null!==t&&void 0!==t&&t.loginProvider?this._selectedLogin(t):this._modal(t)}async _selectedLogin(t){const e={redirectUrl:this.state.redirectUrl},r=$($({loginProvider:t.loginProvider},e),t),n=await this.request({method:y,allowedInteractions:[v.REDIRECT,v.POPUP],startUrl:this.state.startUrl,popupUrl:this.state.popupUrl,params:[r]});return this.state.privKey=n.privKey,n.store?this._syncState(n):this.state.privKey&&this.state.support3PC&&this._syncState(await this._getData()),{privKey:this.privKey}}async logout(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e={};e.redirectUrl=this.state.redirectUrl,e._clientId=this.state.clientId,e.sessionId=this.state.store.get("sessionId"),t.clientId&&(e._clientId=t.clientId),void 0!==t.redirectUrl&&(e.redirectUrl=t.redirectUrl);const r=await this.request({method:b,params:[e],startUrl:this.state.startUrl,popupUrl:this.state.popupUrl,allowedInteractions:[E]});return this.state.privKey="",r}async request(t){var e;const r=(0,l.kb)();let{params:n}=t;const i={};if(1!==n.length)throw new Error("request params array should have only one element");const{startUrl:o,popupUrl:s,method:u,allowedInteractions:h}=t;if(0===h.length)throw new Error("no allowed interactions");if(this.state.clientId&&(i._clientId=this.state.clientId),this.state.sessionNamespace&&(i._sessionNamespace=this.state.sessionNamespace),this.privKey){const t={clientId:i._clientId,timestamp:Date.now().toString()},e=await(0,a.Xx)(p.from(this.privKey,"hex"),p.from((0,l.KO)("keccak256").update(JSON.stringify(t)).digest("hex"),"hex"));i._user=(0,a.rc)(p.from(this.privKey,"hex")).toString("hex"),i._userSig=l.tH.encode(e),i._userData=t}if(i._originData=this.state.originData,i._whiteLabelData=this.state.whiteLabel,i._loginConfig=this.state.loginConfig,i._sessionId=this.state.store.get("sessionId"),!i._sessionId){const t=(0,l.kb)();i._sessionId=t,this.state.store.set("sessionId",t)}if(n=[$($({},i),n[0])],h.includes(E))return this._jrpcRequest({method:u,params:n});if(n[0]._origin=new URL(null!==(e=n[0].redirectUrl)&&void 0!==e?e:this.state.redirectUrl).origin,this.state.support3PC&&(await this._setPIDData(r,n),n=[{}]),!o||!s)throw new Error("no url for redirect / popup flow");if(this.state.uxMode===v.REDIRECT){if(h.includes(S))return setTimeout((()=>{window.location.href=T({baseURL:o,hash:{b64Params:(0,l.zc)(n[0]),_pid:r,_method:u}})}),50),{};if(h.includes(x)){const t=new URL(T({baseURL:s,hash:{b64Params:(0,l.zc)(n[0]),_pid:r,_method:u}})),e=window.open(t.toString(),"_blank",j());return O(r,e)}}else{if(h.includes(x)){const t=new URL(T({baseURL:s,hash:{b64Params:(0,l.zc)(n[0]),_pid:r,_method:u}})),e=window.open(t.toString(),"_blank",j());return O(r,e)}if(h.includes(S))return setTimeout((()=>{window.location.href=T({baseURL:o,hash:{b64Params:(0,l.zc)(n[0]),_pid:r,_method:u}})}),50),null}throw new Error("no matching allowed interactions")}async _jrpcRequest(t){if(!t||"object"!==typeof t||Array.isArray(t))throw new Error("invalid request args");const{method:e,params:r}=t;if("string"!==typeof e||0===e.length)throw new Error("invalid request method");if(void 0===r||!Array.isArray(r))throw new Error("invalid request params");return 0===r.length&&r.push({}),new Promise(((t,n)=>{this.provider._rpcRequest({method:e,params:r},(0,u.nE)(t,n))}))}async _check3PCSupport(){return this._jrpcRequest({method:w,params:[{_originData:this.state.originData}]})}async _setPIDData(t,e){await this.request({allowedInteractions:[E],method:_,params:[{pid:t,data:e[0]}]})}async _getData(){return this.request({allowedInteractions:[E],method:M,params:[{}]})}_syncState(t){if(t.store){if("object"!==typeof t.store)throw new Error("expected store to be an object");Object.keys(t.store).forEach((e=>{this.state.store.set(e,t.store[e])}))}const{store:e}=this.state;this.state=$($($({},this.state),t),{},{store:e})}async _modal(t){return new Promise(((e,r)=>{this.modal._prompt(this.state.clientId,this.state.whiteLabel,this.state.loginConfig,(async n=>{if(n.cancel)r(new Error("user canceled login"));else try{const r=await this._selectedLogin(f()(t,n));e(r)}catch(i){r(i)}}))}))}async _cleanup(){await this.modal.cleanup(),this.provider.cleanup()}async encrypt(t,e){let r=e;if(r||(r=this.privKey),!/^[0-9a-fA-f]{64}$/.exec(r))throw""===r||void 0===r?new Error("private key cannot be empty"):new Error("invalid private key in encrypt");return(0,a.HI)((0,a.rc)(p.from(r,"hex")),t)}async decrypt(t,e){let r=e;if(r||(r=this.privKey),!/^[0-9a-fA-f]{64}$/.exec(r))throw""===r||void 0===r?new Error("private key cannot be empty"):new Error("invalid private key in decrypt");return(0,a.pe)(p.from(r,"hex"),t)}async getUserInfo(){if(this.privKey){const t=this.state.store.getStore();return{email:t.email||"",name:t.name||"",profileImage:t.profileImage||"",aggregateVerifier:t.aggregateVerifier||"",verifier:t.verifier||"",verifierId:t.verifierId||"",typeOfLogin:t.typeOfLogin||"",dappShare:t.dappShare||"",idToken:t.idToken||"",oAuthIdToken:t.oAuthIdToken||"",oAuthAccessToken:t.oAuthAccessToken||""}}throw new Error("user should be logged in to fetch userInfo")}async getEncodedLoginUrl(t){const{redirectUrl:e}=t,{clientId:r}=this.state;this.state.originData[origin]||await this.updateOriginData();const n=$({_clientId:r,_origin:new URL(e).origin,_originData:this.state.originData,redirectUrl:e},t),i={b64Params:(0,l.zc)(n),_method:"openlogin_login"};return T({baseURL:"".concat(this.state.iframeUrl,"/start"),hash:i})}}},21445:function(t,e,r){"use strict";r.r(e),r.d(e,{detectEnv:function(){return y},detectOS:function(){return b},formatIOSMobile:function(){return W},formatMobileRegistry:function(){return X},formatMobileRegistryEntry:function(){return Y},getClientMeta:function(){return j},getCrypto:function(){return N},getCryptoOrThrow:function(){return T},getDappRegistryUrl:function(){return J},getDocument:function(){return R},getDocumentOrThrow:function(){return A},getFromWindow:function(){return E},getFromWindowOrThrow:function(){return k},getLocal:function(){return q},getLocalStorage:function(){return L},getLocalStorageOrThrow:function(){return B},getLocation:function(){return O},getLocationOrThrow:function(){return I},getMobileLinkRegistry:function(){return G},getMobileRegistryEntry:function(){return K},getNavigator:function(){return C},getNavigatorOrThrow:function(){return P},getWalletRegistryUrl:function(){return Z},isAndroid:function(){return w},isBrowser:function(){return S},isIOS:function(){return _},isMobile:function(){return M},isNode:function(){return x},mobileLinkChoiceKey:function(){return $},removeLocal:function(){return z},safeJsonParse:function(){return D},safeJsonStringify:function(){return F},saveMobileLinkInfo:function(){return H},setLocal:function(){return U}});var n=r(65755),i=r(62873),o=r(34155),a=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),i=0;for(e=0;e<r;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)n[i]=o[a];return n},s=function(t,e,r){this.name=t,this.version=e,this.os=r,this.type="browser"},u=function(t){this.version=t,this.type="node",this.name="node",this.os=o.platform},l=function(t,e,r,n){this.name=t,this.version=e,this.os=r,this.bot=n,this.type="bot-device"},h=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},f=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},c=/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,d=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],p=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function m(t){return t?v(t):"undefined"===typeof document&&"undefined"!==typeof navigator&&"ReactNative"===navigator.product?new f:"undefined"!==typeof navigator?v(navigator.userAgent):"undefined"!==typeof o&&o.version?new u(o.version.slice(1)):null}function g(t){return""!==t&&d.reduce((function(e,r){var n=r[0],i=r[1];if(e)return e;var o=i.exec(t);return!!o&&[n,o]}),!1)}function v(t){var e=g(t);if(!e)return null;var r=e[0],n=e[1];if("searchbot"===r)return new h;var i=n[1]&&n[1].split(/[._]/).slice(0,3);i?i.length<3&&(i=a(i,function(t){for(var e=[],r=0;r<t;r++)e.push("0");return e}(3-i.length))):i=[];var o=i.join("."),u=function(t){for(var e=0,r=p.length;e<r;e++){var n=p[e],i=n[0];if(n[1].exec(t))return i}return null}(t),f=c.exec(t);return f&&f[1]?new l(r,o,u,f[1]):new s(r,o,u)}function y(t){return m(t)}function b(){const t=y();return t&&t.os?t.os:void 0}function w(){const t=b();return!!t&&t.toLowerCase().includes("android")}function _(){const t=b();return!!t&&(t.toLowerCase().includes("ios")||t.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1)}function M(){return!!b()&&(w()||_())}function x(){const t=y();return!(!t||!t.name)&&"node"===t.name.toLowerCase()}function S(){return!x()&&!!C()}const E=i.getFromWindow,k=i.getFromWindowOrThrow,A=i.getDocumentOrThrow,R=i.getDocument,P=i.getNavigatorOrThrow,C=i.getNavigator,I=i.getLocationOrThrow,O=i.getLocation,T=i.getCryptoOrThrow,N=i.getCrypto,B=i.getLocalStorageOrThrow,L=i.getLocalStorage;function j(){return n.D()}const D=function(t){if("string"!==typeof t)throw new Error("Cannot safe json parse value of type "+typeof t);try{return JSON.parse(t)}catch(e){return t}},F=function(t){return"string"===typeof t?t:JSON.stringify(t)};function U(t,e){const r=F(e),n=L();n&&n.setItem(t,r)}function q(t){let e=null,r=null;const n=L();return n&&(r=n.getItem(t)),e=r?D(r):r,e}function z(t){const e=L();e&&e.removeItem(t)}const $="WALLETCONNECT_DEEPLINK_CHOICE";function W(t,e){const r=encodeURIComponent(t);return e.universalLink?`${e.universalLink}/wc?uri=${r}`:e.deepLink?`${e.deepLink}${e.deepLink.endsWith(":")?"//":"/"}wc?uri=${r}`:""}function H(t){const e=t.href.split("?")[0];U($,Object.assign(Object.assign({},t),{href:e}))}function K(t,e){return t.filter((t=>t.name.toLowerCase().includes(e.toLowerCase())))[0]}function G(t,e){let r=t;return e&&(r=e.map((e=>K(t,e))).filter(Boolean)),r}const V="https://registry.walletconnect.com";function Z(){return V+"/api/v2/wallets"}function J(){return V+"/api/v2/dapps"}function Y(t,e="mobile"){var r;return{name:t.name||"",shortName:t.metadata.shortName||"",color:t.metadata.colors.primary||"",logo:null!==(r=t.image_url.sm)&&void 0!==r?r:"",universalLink:t[e].universal||"",deepLink:t[e].native||""}}function X(t,e="mobile"){return Object.values(t).filter((t=>!!t[e].universal||!!t[e].native)).map((t=>Y(t,e)))}},75426:function(t,e,r){"use strict";r.d(e,{Z:function(){return m}});var n=r(61793);var i=class{constructor(){this._eventEmitters=[],"undefined"!==typeof window&&"undefined"!==typeof window.addEventListener&&(window.addEventListener("online",(()=>this.trigger("online"))),window.addEventListener("offline",(()=>this.trigger("offline"))))}on(t,e){this._eventEmitters.push({event:t,callback:e})}trigger(t){let e=[];t&&(e=this._eventEmitters.filter((e=>e.event===t))),e.forEach((t=>{t.callback()}))}};const o="undefined"!==typeof r.g.WebSocket?r.g.WebSocket:r(68007);var a=class{constructor(t){if(this.opts=t,this._queue=[],this._events=[],this._subscriptions=[],this._protocol=t.protocol,this._version=t.version,this._url="",this._netMonitor=null,this._socket=null,this._nextSocket=null,this._subscriptions=t.subscriptions||[],this._netMonitor=t.netMonitor||new i,!t.url||"string"!==typeof t.url)throw new Error("Missing or invalid WebSocket url");this._url=t.url,this._netMonitor.on("online",(()=>this._socketCreate()))}set readyState(t){}get readyState(){return this._socket?this._socket.readyState:-1}set connecting(t){}get connecting(){return 0===this.readyState}set connected(t){}get connected(){return 1===this.readyState}set closing(t){}get closing(){return 2===this.readyState}set closed(t){}get closed(){return 3===this.readyState}open(){this._socketCreate()}close(){this._socketClose()}send(t,e,r){if(!e||"string"!==typeof e)throw new Error("Missing or invalid topic field");this._socketSend({topic:e,type:"pub",payload:t,silent:!!r})}subscribe(t){this._socketSend({topic:t,type:"sub",payload:"",silent:!0})}on(t,e){this._events.push({event:t,callback:e})}_socketCreate(){if(this._nextSocket)return;const t=function(t,e,r){var i,o;const a=(t.startsWith("https")?t.replace("https","wss"):t.startsWith("http")?t.replace("http","ws"):t).split("?"),s=(0,n.jU)()?{protocol:e,version:r,env:"browser",host:(null===(i=(0,n.k$)())||void 0===i?void 0:i.host)||""}:{protocol:e,version:r,env:(null===(o=(0,n.G5)())||void 0===o?void 0:o.name)||""},u=(0,n.F4)((0,n.Wz)(a[1]||""),s);return a[0]+"?"+u}(this._url,this._protocol,this._version);if(this._nextSocket=new o(t),!this._nextSocket)throw new Error("Failed to create socket");this._nextSocket.onmessage=t=>this._socketReceive(t),this._nextSocket.onopen=()=>this._socketOpen(),this._nextSocket.onerror=t=>this._socketError(t),this._nextSocket.onclose=()=>{setTimeout((()=>{this._nextSocket=null,this._socketCreate()}),1e3)}}_socketOpen(){this._socketClose(),this._socket=this._nextSocket,this._nextSocket=null,this._queueSubscriptions(),this._pushQueue()}_socketClose(){this._socket&&(this._socket.onclose=()=>{},this._socket.close())}_socketSend(t){const e=JSON.stringify(t);this._socket&&1===this._socket.readyState?this._socket.send(e):(this._setToQueue(t),this._socketCreate())}async _socketReceive(t){let e;try{e=JSON.parse(t.data)}catch(r){return}if(this._socketSend({topic:e.topic,type:"ack",payload:"",silent:!0}),this._socket&&1===this._socket.readyState){const t=this._events.filter((t=>"message"===t.event));t&&t.length&&t.forEach((t=>t.callback(e)))}}_socketError(t){const e=this._events.filter((t=>"error"===t.event));e&&e.length&&e.forEach((e=>e.callback(t)))}_queueSubscriptions(){this._subscriptions.forEach((t=>this._queue.push({topic:t,type:"sub",payload:"",silent:!0}))),this._subscriptions=this.opts.subscriptions||[]}_setToQueue(t){this._queue.push(t)}_pushQueue(){this._queue.forEach((t=>this._socketSend(t))),this._queue=[]}};const s="Session currently connected",u="Session currently disconnected",l="JSON RPC response format is invalid",h="User close QRCode Modal";var f=class{constructor(){this._eventEmitters=[]}subscribe(t){this._eventEmitters.push(t)}unsubscribe(t){this._eventEmitters=this._eventEmitters.filter((e=>e.event!==t))}trigger(t){let e,r=[];e=(0,n.DW)(t)?t.method:(0,n.vF)(t)||(0,n.R)(t)?`response:${t.id}`:(0,n.tf)(t)?t.event:"",e&&(r=this._eventEmitters.filter((t=>t.event===e))),r&&r.length||(0,n.jA)(e)||(0,n.tf)(e)||(r=this._eventEmitters.filter((t=>"call_request"===t.event))),r.forEach((e=>{if((0,n.R)(t)){const r=new Error(t.error.message);e.callback(r,null)}else e.callback(null,t)}))}};var c=class{constructor(t="walletconnect"){this.storageId=t}getSession(){let t=null;const e=(0,n.tv)(this.storageId);return e&&(0,n.yr)(e)&&(t=e),t}setSession(t){return(0,n.co)(this.storageId,t),t}removeSession(){(0,n.uj)(this.storageId)}};const d="abcdefghijklmnopqrstuvwxyz0123456789".split("").map((t=>`https://${t}.bridge.walletconnect.org`));function p(){return d[Math.floor(Math.random()*d.length)]}var m=class{constructor(t){if(this.protocol="wc",this.version=1,this._bridge="",this._key=null,this._clientId="",this._clientMeta=null,this._peerId="",this._peerMeta=null,this._handshakeId=0,this._handshakeTopic="",this._connected=!1,this._accounts=[],this._chainId=0,this._networkId=0,this._rpcUrl="",this._eventManager=new f,this._clientMeta=(0,n.AS)()||t.connectorOpts.clientMeta||null,this._cryptoLib=t.cryptoLib,this._sessionStorage=t.sessionStorage||new c(t.connectorOpts.storageId),this._qrcodeModal=t.connectorOpts.qrcodeModal,this._qrcodeModalOptions=t.connectorOpts.qrcodeModalOptions,this._signingMethods=[...n.V7,...t.connectorOpts.signingMethods||[]],!t.connectorOpts.bridge&&!t.connectorOpts.uri&&!t.connectorOpts.session)throw new Error("Missing one of the required parameters: bridge / uri / session");var e;t.connectorOpts.bridge&&(this.bridge=function(t){return"walletconnect.org"===function(t){return function(t){let e=t.indexOf("//")>-1?t.split("/")[2]:t.split("/")[0];return e=e.split(":")[0],e=e.split("?")[0],e}(t).split(".").slice(-2).join(".")}(t)}(e=t.connectorOpts.bridge)?p():e),t.connectorOpts.uri&&(this.uri=t.connectorOpts.uri);const r=t.connectorOpts.session||this._getStorageSession();r&&(this.session=r),this.handshakeId&&this._subscribeToSessionResponse(this.handshakeId,"Session request rejected"),this._transport=t.transport||new a({protocol:this.protocol,version:this.version,url:this.bridge,subscriptions:[this.clientId]}),this._subscribeToInternalEvents(),this._initTransport(),t.connectorOpts.uri&&this._subscribeToSessionRequest(),t.pushServerOpts&&this._registerPushServer(t.pushServerOpts)}set bridge(t){t&&(this._bridge=t)}get bridge(){return this._bridge}set key(t){if(!t)return;const e=(0,n.y_)(t);this._key=e}get key(){if(this._key){return(0,n.wb)(this._key,!0)}return""}set clientId(t){t&&(this._clientId=t)}get clientId(){let t=this._clientId;return t||(t=this._clientId=(0,n.Vj)()),this._clientId}set peerId(t){t&&(this._peerId=t)}get peerId(){return this._peerId}set clientMeta(t){}get clientMeta(){let t=this._clientMeta;return t||(t=this._clientMeta=(0,n.AS)()),t}set peerMeta(t){this._peerMeta=t}get peerMeta(){return this._peerMeta}set handshakeTopic(t){t&&(this._handshakeTopic=t)}get handshakeTopic(){return this._handshakeTopic}set handshakeId(t){t&&(this._handshakeId=t)}get handshakeId(){return this._handshakeId}get uri(){return this._formatUri()}set uri(t){if(!t)return;const{handshakeTopic:e,bridge:r,key:n}=this._parseUri(t);this.handshakeTopic=e,this.bridge=r,this.key=n}set chainId(t){this._chainId=t}get chainId(){return this._chainId}set networkId(t){this._networkId=t}get networkId(){return this._networkId}set accounts(t){this._accounts=t}get accounts(){return this._accounts}set rpcUrl(t){this._rpcUrl=t}get rpcUrl(){return this._rpcUrl}set connected(t){}get connected(){return this._connected}set pending(t){}get pending(){return!!this._handshakeTopic}get session(){return{connected:this.connected,accounts:this.accounts,chainId:this.chainId,bridge:this.bridge,key:this.key,clientId:this.clientId,clientMeta:this.clientMeta,peerId:this.peerId,peerMeta:this.peerMeta,handshakeId:this.handshakeId,handshakeTopic:this.handshakeTopic}}set session(t){t&&(this._connected=t.connected,this.accounts=t.accounts,this.chainId=t.chainId,this.bridge=t.bridge,this.key=t.key,this.clientId=t.clientId,this.clientMeta=t.clientMeta,this.peerId=t.peerId,this.peerMeta=t.peerMeta,this.handshakeId=t.handshakeId,this.handshakeTopic=t.handshakeTopic)}on(t,e){const r={event:t,callback:e};this._eventManager.subscribe(r)}off(t){this._eventManager.unsubscribe(t)}async createInstantRequest(t){this._key=await this._generateKey();const e=this._formatRequest({method:"wc_instantRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,request:this._formatRequest(t)}]});this.handshakeId=e.id,this.handshakeTopic=(0,n.Vj)(),this._eventManager.trigger({event:"display_uri",params:[this.uri]}),this.on("modal_closed",(()=>{throw new Error(h)}));const r=()=>{this.killSession()};try{const t=await this._sendCallRequest(e);return t&&r(),t}catch(i){throw r(),i}}async connect(t){if(!this._qrcodeModal)throw new Error("QRCode Modal not provided");return this.connected?{chainId:this.chainId,accounts:this.accounts}:(await this.createSession(t),new Promise((async(t,e)=>{this.on("modal_closed",(()=>e(new Error(h)))),this.on("connect",((r,n)=>{if(r)return e(r);t(n.params[0])}))})))}async createSession(t){if(this._connected)throw new Error(s);if(this.pending)return;this._key=await this._generateKey();const e=this._formatRequest({method:"wc_sessionRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,chainId:t&&t.chainId?t.chainId:null}]});this.handshakeId=e.id,this.handshakeTopic=(0,n.Vj)(),this._sendSessionRequest(e,"Session update rejected",{topic:this.handshakeTopic}),this._eventManager.trigger({event:"display_uri",params:[this.uri]})}approveSession(t){if(this._connected)throw new Error(s);this.chainId=t.chainId,this.accounts=t.accounts,this.networkId=t.networkId||0,this.rpcUrl=t.rpcUrl||"";const e={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl,peerId:this.clientId,peerMeta:this.clientMeta},r={id:this.handshakeId,jsonrpc:"2.0",result:e};this._sendResponse(r),this._connected=!0,this._setStorageSession(),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})}rejectSession(t){if(this._connected)throw new Error(s);const e=t&&t.message?t.message:"Session Rejected",r=this._formatResponse({id:this.handshakeId,error:{message:e}});this._sendResponse(r),this._connected=!1,this._eventManager.trigger({event:"disconnect",params:[{message:e}]}),this._removeStorageSession()}updateSession(t){if(!this._connected)throw new Error(u);this.chainId=t.chainId,this.accounts=t.accounts,this.networkId=t.networkId||0,this.rpcUrl=t.rpcUrl||"";const e={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl},r=this._formatRequest({method:"wc_sessionUpdate",params:[e]});this._sendSessionRequest(r,"Session update rejected"),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]}),this._manageStorageSession()}async killSession(t){const e=t?t.message:"Session Disconnected",r=this._formatRequest({method:"wc_sessionUpdate",params:[{approved:!1,chainId:null,networkId:null,accounts:null}]});await this._sendRequest(r),this._handleSessionDisconnect(e)}async sendTransaction(t){if(!this._connected)throw new Error(u);const e=(0,n.Ky)(t),r=this._formatRequest({method:"eth_sendTransaction",params:[e]});return await this._sendCallRequest(r)}async signTransaction(t){if(!this._connected)throw new Error(u);const e=(0,n.Ky)(t),r=this._formatRequest({method:"eth_signTransaction",params:[e]});return await this._sendCallRequest(r)}async signMessage(t){if(!this._connected)throw new Error(u);const e=this._formatRequest({method:"eth_sign",params:t});return await this._sendCallRequest(e)}async signPersonalMessage(t){if(!this._connected)throw new Error(u);t=(0,n.bW)(t);const e=this._formatRequest({method:"personal_sign",params:t});return await this._sendCallRequest(e)}async signTypedData(t){if(!this._connected)throw new Error(u);const e=this._formatRequest({method:"eth_signTypedData",params:t});return await this._sendCallRequest(e)}async updateChain(t){if(!this._connected)throw new Error("Session currently disconnected");const e=this._formatRequest({method:"wallet_updateChain",params:[t]});return await this._sendCallRequest(e)}unsafeSend(t,e){return this._sendRequest(t,e),this._eventManager.trigger({event:"call_request_sent",params:[{request:t,options:e}]}),new Promise(((e,r)=>{this._subscribeToResponse(t.id,((t,n)=>{if(t)r(t);else{if(!n)throw new Error("Missing JSON RPC response");e(n)}}))}))}async sendCustomRequest(t,e){if(!this._connected)throw new Error(u);switch(t.method){case"eth_accounts":return this.accounts;case"eth_chainId":return(0,n.uA)(this.chainId);case"eth_sendTransaction":case"eth_signTransaction":t.params&&(t.params[0]=(0,n.Ky)(t.params[0]));break;case"personal_sign":t.params&&(t.params=(0,n.bW)(t.params))}const r=this._formatRequest(t);return await this._sendCallRequest(r,e)}approveRequest(t){if(!(0,n.vF)(t))throw new Error('JSON-RPC success response must include "result" field');{const e=this._formatResponse(t);this._sendResponse(e)}}rejectRequest(t){if(!(0,n.R)(t))throw new Error('JSON-RPC error response must include "error" field');{const e=this._formatResponse(t);this._sendResponse(e)}}transportClose(){this._transport.close()}async _sendRequest(t,e){const r=this._formatRequest(t),i=await this._encrypt(r),o="undefined"!==typeof(null===e||void 0===e?void 0:e.topic)?e.topic:this.peerId,a=JSON.stringify(i),s="undefined"!==typeof(null===e||void 0===e?void 0:e.forcePushNotification)?!e.forcePushNotification:(0,n.wM)(r);this._transport.send(a,o,s)}async _sendResponse(t){const e=await this._encrypt(t),r=this.peerId,n=JSON.stringify(e);this._transport.send(n,r,!0)}async _sendSessionRequest(t,e,r){this._sendRequest(t,r),this._subscribeToSessionResponse(t.id,e)}_sendCallRequest(t,e){return this._sendRequest(t,e),this._eventManager.trigger({event:"call_request_sent",params:[{request:t,options:e}]}),this._subscribeToCallResponse(t.id)}_formatRequest(t){if("undefined"===typeof t.method)throw new Error('JSON RPC request must have valid "method" value');return{id:"undefined"===typeof t.id?(0,n.o0)():t.id,jsonrpc:"2.0",method:t.method,params:"undefined"===typeof t.params?[]:t.params}}_formatResponse(t){if("undefined"===typeof t.id)throw new Error('JSON RPC request must have valid "id" value');const e={id:t.id,jsonrpc:"2.0"};if((0,n.R)(t)){const r=(0,n.sH)(t.error);return Object.assign(Object.assign(Object.assign({},e),t),{error:r})}if((0,n.vF)(t)){return Object.assign(Object.assign({},e),t)}throw new Error(l)}_handleSessionDisconnect(t){const e=t||"Session Disconnected";this._connected||(this._qrcodeModal&&this._qrcodeModal.close(),(0,n.uj)(n.FT)),this._connected&&(this._connected=!1),this._handshakeId&&(this._handshakeId=0),this._handshakeTopic&&(this._handshakeTopic=""),this._peerId&&(this._peerId=""),this._eventManager.trigger({event:"disconnect",params:[{message:e}]}),this._removeStorageSession(),this.transportClose()}_handleSessionResponse(t,e){e&&e.approved?(this._connected?(e.chainId&&(this.chainId=e.chainId),e.accounts&&(this.accounts=e.accounts),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]})):(this._connected=!0,e.chainId&&(this.chainId=e.chainId),e.accounts&&(this.accounts=e.accounts),e.peerId&&!this.peerId&&(this.peerId=e.peerId),e.peerMeta&&!this.peerMeta&&(this.peerMeta=e.peerMeta),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})),this._manageStorageSession()):this._handleSessionDisconnect(t)}async _handleIncomingMessages(t){if(![this.clientId,this.handshakeTopic].includes(t.topic))return;let e;try{e=JSON.parse(t.payload)}catch(n){return}const r=await this._decrypt(e);r&&this._eventManager.trigger(r)}_subscribeToSessionRequest(){this._transport.subscribe(this.handshakeTopic)}_subscribeToResponse(t,e){this.on(`response:${t}`,e)}_subscribeToSessionResponse(t,e){this._subscribeToResponse(t,((t,r)=>{t?this._handleSessionResponse(t.message):(0,n.vF)(r)?this._handleSessionResponse(e,r.result):r.error&&r.error.message?this._handleSessionResponse(r.error.message):this._handleSessionResponse(e)}))}_subscribeToCallResponse(t){return new Promise(((e,r)=>{this._subscribeToResponse(t,((t,i)=>{t?r(t):(0,n.vF)(i)?e(i.result):i.error&&i.error.message?r(i.error):r(new Error(l))}))}))}_subscribeToInternalEvents(){this.on("display_uri",(()=>{this._qrcodeModal&&this._qrcodeModal.open(this.uri,(()=>{this._eventManager.trigger({event:"modal_closed",params:[]})}),this._qrcodeModalOptions)})),this.on("connect",(()=>{this._qrcodeModal&&this._qrcodeModal.close()})),this.on("call_request_sent",((t,e)=>{const{request:r}=e.params[0];if((0,n.tq)()&&this._signingMethods.includes(r.method)){const t=(0,n.tv)(n.FT);t&&(window.location.href=t.href)}})),this.on("wc_sessionRequest",((t,e)=>{t&&this._eventManager.trigger({event:"error",params:[{code:"SESSION_REQUEST_ERROR",message:t.toString()}]}),this.handshakeId=e.id,this.peerId=e.params[0].peerId,this.peerMeta=e.params[0].peerMeta;const r=Object.assign(Object.assign({},e),{method:"session_request"});this._eventManager.trigger(r)})),this.on("wc_sessionUpdate",((t,e)=>{t&&this._handleSessionResponse(t.message),this._handleSessionResponse("Session disconnected",e.params[0])}))}_initTransport(){this._transport.on("message",(t=>this._handleIncomingMessages(t))),this._transport.on("open",(()=>this._eventManager.trigger({event:"transport_open",params:[]}))),this._transport.on("close",(()=>this._eventManager.trigger({event:"transport_close",params:[]}))),this._transport.on("error",(()=>this._eventManager.trigger({event:"transport_error",params:["Websocket connection failed"]}))),this._transport.open()}_formatUri(){return`${this.protocol}:${this.handshakeTopic}@${this.version}?bridge=${encodeURIComponent(this.bridge)}&key=${this.key}`}_parseUri(t){const e=(0,n.GZ)(t);if(e.protocol===this.protocol){if(!e.handshakeTopic)throw Error("Invalid or missing handshakeTopic parameter value");const t=e.handshakeTopic;if(!e.bridge)throw Error("Invalid or missing bridge url parameter value");const r=decodeURIComponent(e.bridge);if(!e.key)throw Error("Invalid or missing key parameter value");return{handshakeTopic:t,bridge:r,key:e.key}}throw new Error("URI format is invalid")}async _generateKey(){if(this._cryptoLib){return await this._cryptoLib.generateKey()}return null}async _encrypt(t){const e=this._key;if(this._cryptoLib&&e){return await this._cryptoLib.encrypt(t,e)}return null}async _decrypt(t){const e=this._key;if(this._cryptoLib&&e){return await this._cryptoLib.decrypt(t,e)}return null}_getStorageSession(){let t=null;return this._sessionStorage&&(t=this._sessionStorage.getSession()),t}_setStorageSession(){this._sessionStorage&&this._sessionStorage.setSession(this.session)}_removeStorageSession(){this._sessionStorage&&this._sessionStorage.removeSession()}_manageStorageSession(){this._connected?this._setStorageSession():this._removeStorageSession()}_registerPushServer(t){if(!t.url||"string"!==typeof t.url)throw Error("Invalid or missing pushServerOpts.url parameter value");if(!t.type||"string"!==typeof t.type)throw Error("Invalid or missing pushServerOpts.type parameter value");if(!t.token||"string"!==typeof t.token)throw Error("Invalid or missing pushServerOpts.token parameter value");const e={bridge:this.bridge,topic:this.clientId,type:t.type,token:t.token,peerName:"",language:t.language||""};this.on("connect",(async(r,n)=>{if(r)throw r;if(t.peerMeta){const t=n.params[0].peerMeta.name;e.peerName=t}try{const r=await fetch(`${t.url}/new`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});if(!(await r.json()).success)throw Error("Failed to register in Push Server")}catch(r){throw Error("Failed to register in Push Server")}}))}}},52707:function(t,e,r){"use strict";r.d(e,{A7:function(){return w},KT:function(){return x},L_:function(){return S},OG:function(){return b},QM:function(){return c},ZV:function(){return y},Zr:function(){return v},_W:function(){return l},ek:function(){return d},eu:function(){return g},oO:function(){return p},w3:function(){return _},wL:function(){return k},xb:function(){return E}});r(4501);var n=r(65054),i=r.n(n),o=r(48764).Buffer;const a="hex",s="utf8",u="0";function l(t){return new Uint8Array(t)}function h(t,e=!1){const r=t.toString(a);return e?S(r):r}function f(t){return t.toString(s)}function c(t){return i()(t)}function d(t,e=!1){return h(c(t),e)}function p(t){return f(c(t))}function m(t){return o.from(x(t),a)}function g(t){return l(m(t))}function v(t){return o.from(t,s)}function y(t){return l(v(t))}function b(t,e=!1){return h(v(t),e)}function w(t,e){return!("string"!==typeof t||!t.match(/^0x[0-9A-Fa-f]*$/))&&(!e||t.length===2+2*e)}function _(...t){let e=[];return t.forEach((t=>e=e.concat(Array.from(t)))),new Uint8Array([...e])}function M(t,e=8,r="0"){return function(t,e,r="0"){return A(t,e,!0,r)}(t,function(t,e=8){const r=t%e;return r?(t-r)/e*e+e:t}(t.length,e),r)}function x(t){return t.replace(/^0x/,"")}function S(t){return t.startsWith("0x")?t:`0x${t}`}function E(t){return(t=M(t=x(t),2))&&(t=S(t)),t}function k(t){const e=t.startsWith("0x");return t=(t=x(t)).startsWith(u)?t.substring(1):t,e?S(t):t}function A(t,e,r,n="0"){const i=e-t.length;let o=t;if(i>0){const e=n.repeat(i);o=r?e+t:t+e}return o}},40926:function(t,e,r){"use strict";function n(){return(null===r.g||void 0===r.g?void 0:r.g.crypto)||(null===r.g||void 0===r.g?void 0:r.g.msCrypto)||{}}function i(){const t=n();return t.subtle||t.webkitSubtle}Object.defineProperty(e,"__esModule",{value:!0}),e.isBrowserCryptoAvailable=e.getSubtleCrypto=e.getBrowerCrypto=void 0,e.getBrowerCrypto=n,e.getSubtleCrypto=i,e.isBrowserCryptoAvailable=function(){return!!n()&&!!i()}},88618:function(t,e,r){"use strict";var n=r(34155);function i(){return"undefined"===typeof document&&"undefined"!==typeof navigator&&"ReactNative"===navigator.product}function o(){return"undefined"!==typeof n&&"undefined"!==typeof n.versions&&"undefined"!==typeof n.versions.node}Object.defineProperty(e,"__esModule",{value:!0}),e.isBrowser=e.isNode=e.isReactNative=void 0,e.isReactNative=i,e.isNode=o,e.isBrowser=function(){return!i()&&!o()}},1468:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),i=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||e.hasOwnProperty(r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),i(r(40926),e),i(r(88618),e)},71578:function(t){"use strict";var e=Object.prototype.hasOwnProperty,r="~";function n(){}function i(t,e,r){this.fn=t,this.context=e,this.once=r||!1}function o(t,e,n,o,a){if("function"!==typeof n)throw new TypeError("The listener must be a function");var s=new i(n,o||t,a),u=r?r+e:e;return t._events[u]?t._events[u].fn?t._events[u]=[t._events[u],s]:t._events[u].push(s):(t._events[u]=s,t._eventsCount++),t}function a(t,e){0===--t._eventsCount?t._events=new n:delete t._events[e]}function s(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(r=!1)),s.prototype.eventNames=function(){var t,n,i=[];if(0===this._eventsCount)return i;for(n in t=this._events)e.call(t,n)&&i.push(r?n.slice(1):n);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(t)):i},s.prototype.listeners=function(t){var e=r?r+t:t,n=this._events[e];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,o=n.length,a=new Array(o);i<o;i++)a[i]=n[i].fn;return a},s.prototype.listenerCount=function(t){var e=r?r+t:t,n=this._events[e];return n?n.fn?1:n.length:0},s.prototype.emit=function(t,e,n,i,o,a){var s=r?r+t:t;if(!this._events[s])return!1;var u,l,h=this._events[s],f=arguments.length;if(h.fn){switch(h.once&&this.removeListener(t,h.fn,void 0,!0),f){case 1:return h.fn.call(h.context),!0;case 2:return h.fn.call(h.context,e),!0;case 3:return h.fn.call(h.context,e,n),!0;case 4:return h.fn.call(h.context,e,n,i),!0;case 5:return h.fn.call(h.context,e,n,i,o),!0;case 6:return h.fn.call(h.context,e,n,i,o,a),!0}for(l=1,u=new Array(f-1);l<f;l++)u[l-1]=arguments[l];h.fn.apply(h.context,u)}else{var c,d=h.length;for(l=0;l<d;l++)switch(h[l].once&&this.removeListener(t,h[l].fn,void 0,!0),f){case 1:h[l].fn.call(h[l].context);break;case 2:h[l].fn.call(h[l].context,e);break;case 3:h[l].fn.call(h[l].context,e,n);break;case 4:h[l].fn.call(h[l].context,e,n,i);break;default:if(!u)for(c=1,u=new Array(f-1);c<f;c++)u[c-1]=arguments[c];h[l].fn.apply(h[l].context,u)}}return!0},s.prototype.on=function(t,e,r){return o(this,t,e,r,!1)},s.prototype.once=function(t,e,r){return o(this,t,e,r,!0)},s.prototype.removeListener=function(t,e,n,i){var o=r?r+t:t;if(!this._events[o])return this;if(!e)return a(this,o),this;var s=this._events[o];if(s.fn)s.fn!==e||i&&!s.once||n&&s.context!==n||a(this,o);else{for(var u=0,l=[],h=s.length;u<h;u++)(s[u].fn!==e||i&&!s[u].once||n&&s[u].context!==n)&&l.push(s[u]);l.length?this._events[o]=1===l.length?l[0]:l:a(this,o)}return this},s.prototype.removeAllListeners=function(t){var e;return t?(e=r?r+t:t,this._events[e]&&a(this,e)):(this._events=new n,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=r,s.EventEmitter=s,t.exports=s},74131:function(t,e,r){"use strict";r.r(e),r.d(e,{decrypt:function(){return m},encrypt:function(){return p},generateKey:function(){return c},verifyHmac:function(){return d}});var n=r(1468);const i="AES-CBC",o="HMAC";async function a(t,e="AES-CBC"){return n.getSubtleCrypto().importKey("raw",t,function(t){return t===i?{length:256,name:i}:{hash:{name:"SHA-256"},name:o}}(e),!0,function(t){return t===i?["encrypt","decrypt"]:["sign","verify"]}(e))}function s(t,e,r){return async function(t,e,r){const o=n.getSubtleCrypto(),s=await a(e,i),u=await o.encrypt({iv:t,name:i},s,r);return new Uint8Array(u)}(t,e,r)}function u(t,e,r){return async function(t,e,r){const o=n.getSubtleCrypto(),s=await a(e,i),u=await o.decrypt({iv:t,name:i},s,r);return new Uint8Array(u)}(t,e,r)}async function l(t,e){const r=await async function(t,e){const r=n.getSubtleCrypto(),i=await a(t,o),s=await r.sign({length:256,name:o},i,e);return new Uint8Array(s)}(t,e);return r}var h=r(52707),f=r(61793);async function c(t){const e=function(t){return n.getBrowerCrypto().getRandomValues(new Uint8Array(t))}((t||256)/8);return(0,f.rw)(h.QM(e))}async function d(t,e){const r=h.eu(t.data),n=h.eu(t.iv),i=h.eu(t.hmac),o=h.ek(i,!1),a=h.w3(r,n),s=await l(e,a),u=h.ek(s,!1);return h.KT(o)===h.KT(u)}async function p(t,e,r){const n=h._W((0,f.aU)(e)),i=r||await c(128),o=h._W((0,f.aU)(i)),a=h.ek(o,!1),u=JSON.stringify(t),d=h.ZV(u),p=await s(o,n,d),m=h.ek(p,!1),g=h.w3(p,o),v=await l(n,g);return{data:m,hmac:h.ek(v,!1),iv:a}}async function m(t,e){const r=h._W((0,f.aU)(e));if(!r)throw new Error("Missing key: required for decryption");if(!(await d(t,r)))return null;const n=h.eu(t.data),i=h.eu(t.iv),o=await u(i,r,n),a=h.oO(o);let s;try{s=JSON.parse(a)}catch(l){return null}return s}},4337:function(t,e,r){var n=r(34155);function i(t){return t&&"object"===typeof t&&"default"in t?t.default:t}var o=r(21445),a=i(r(92592)),s=i(r(20640)),u=r(57423);"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var l="walletconnect-wrapper",h="walletconnect-style-sheet",f="walletconnect-qrcode-modal",c="walletconnect-qrcode-text";function d(t){return u.createElement("div",{className:"walletconnect-modal__header"},u.createElement("img",{src:"data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E",className:"walletconnect-modal__headerLogo"}),u.createElement("p",null,"WalletConnect"),u.createElement("div",{className:"walletconnect-modal__close__wrapper",onClick:t.onClose},u.createElement("div",{id:"walletconnect-qrcode-close",className:"walletconnect-modal__close__icon"},u.createElement("div",{className:"walletconnect-modal__close__line1"}),u.createElement("div",{className:"walletconnect-modal__close__line2"}))))}function p(t){return u.createElement("a",{className:"walletconnect-connect__button",href:t.href,id:"walletconnect-connect-button-"+t.name,onClick:t.onClick,rel:"noopener noreferrer",style:{backgroundColor:t.color},target:"_blank"},t.name)}function m(t){var e=t.color,r=t.href,n=t.name,i=t.logo,o=t.onClick;return u.createElement("a",{className:"walletconnect-modal__base__row",href:r,onClick:o,rel:"noopener noreferrer",target:"_blank"},u.createElement("h3",{className:"walletconnect-modal__base__row__h3"},n),u.createElement("div",{className:"walletconnect-modal__base__row__right"},u.createElement("div",{className:"walletconnect-modal__base__row__right__app-icon",style:{background:"url('"+i+"') "+e,backgroundSize:"100%"}}),u.createElement("img",{src:"data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E",className:"walletconnect-modal__base__row__right__caret"})))}function g(t){var e=t.color,r=t.href,n=t.name,i=t.logo,o=t.onClick,a=window.innerWidth<768?(n.length>8?2.5:2.7)+"vw":"inherit";return u.createElement("a",{className:"walletconnect-connect__button__icon_anchor",href:r,onClick:o,rel:"noopener noreferrer",target:"_blank"},u.createElement("div",{className:"walletconnect-connect__button__icon",style:{background:"url('"+i+"') "+e,backgroundSize:"100%"}}),u.createElement("div",{style:{fontSize:a},className:"walletconnect-connect__button__text"},n))}function v(t){var e=o.isAndroid(),r=u.useState(""),n=r[0],i=r[1],a=u.useState(""),s=a[0],l=a[1],h=u.useState(1),f=h[0],d=h[1],v=s?t.links.filter((function(t){return t.name.toLowerCase().includes(s.toLowerCase())})):t.links,y=t.errorMessage,b=s||v.length>5,w=Math.ceil(v.length/12),_=[12*(f-1)+1,12*f],M=v.length?v.filter((function(t,e){return e+1>=_[0]&&e+1<=_[1]})):[],x=!(e||!(w>1)),S=void 0;return u.createElement("div",null,u.createElement("p",{id:c,className:"walletconnect-qrcode__text"},e?t.text.connect_mobile_wallet:t.text.choose_preferred_wallet),!e&&u.createElement("input",{className:"walletconnect-search__input",placeholder:"Search",value:n,onChange:function(t){i(t.target.value),clearTimeout(S),t.target.value?S=setTimeout((function(){l(t.target.value),d(1)}),1e3):(i(""),l(""),d(1))}}),u.createElement("div",{className:"walletconnect-connect__buttons__wrapper"+(e?"__android":b&&v.length?"__wrap":"")},e?u.createElement(p,{name:t.text.connect,color:"rgb(64, 153, 255)",href:t.uri,onClick:u.useCallback((function(){o.saveMobileLinkInfo({name:"Unknown",href:t.uri})}),[])}):M.length?M.map((function(e){var r=e.color,n=e.name,i=e.shortName,a=e.logo,s=o.formatIOSMobile(t.uri,e),l=u.useCallback((function(){o.saveMobileLinkInfo({name:n,href:s})}),[M]);return b?u.createElement(g,{color:r,href:s,name:i||n,logo:a,onClick:l}):u.createElement(m,{color:r,href:s,name:n,logo:a,onClick:l})})):u.createElement(u.Fragment,null,u.createElement("p",null,y.length?t.errorMessage:t.links.length&&!v.length?t.text.no_wallets_found:t.text.loading))),x&&u.createElement("div",{className:"walletconnect-modal__footer"},Array(w).fill(0).map((function(t,e){var r=e+1,n=f===r;return u.createElement("a",{style:{margin:"auto 10px",fontWeight:n?"bold":"normal"},onClick:function(){return d(r)}},r)}))))}function y(t){var e=!!t.message.trim();return u.createElement("div",{className:"walletconnect-qrcode__notification"+(e?" notification__show":"")},t.message)}function b(t){var e=u.useState(""),r=e[0],n=e[1],i=u.useState(""),o=i[0],l=i[1];u.useEffect((function(){try{return Promise.resolve(function(t){try{var e="";return Promise.resolve(a.toString(t,{margin:0,type:"svg"})).then((function(t){return"string"===typeof t&&(e=t.replace("<svg",'<svg class="walletconnect-qrcode__image"')),e}))}catch(r){return Promise.reject(r)}}(t.uri)).then((function(t){l(t)}))}catch(e){Promise.reject(e)}}),[]);return u.createElement("div",null,u.createElement("p",{id:c,className:"walletconnect-qrcode__text"},t.text.scan_qrcode_with_wallet),u.createElement("div",{dangerouslySetInnerHTML:{__html:o}}),u.createElement("div",{className:"walletconnect-modal__footer"},u.createElement("a",{onClick:function(){s(t.uri)?(n(t.text.copied_to_clipboard),setInterval((function(){return n("")}),1200)):(n("Error"),setInterval((function(){return n("")}),1200))}},t.text.copy_to_clipboard)),u.createElement(y,{message:r}))}function w(t){var e=o.isAndroid(),r=o.isMobile(),n=r?t.qrcodeModalOptions&&t.qrcodeModalOptions.mobileLinks?t.qrcodeModalOptions.mobileLinks:void 0:t.qrcodeModalOptions&&t.qrcodeModalOptions.desktopLinks?t.qrcodeModalOptions.desktopLinks:void 0,i=u.useState(!1),a=i[0],s=i[1],l=u.useState(!1),h=l[0],c=l[1],p=u.useState(!r),m=p[0],g=p[1],y={mobile:r,text:t.text,uri:t.uri,qrcodeModalOptions:t.qrcodeModalOptions},w=u.useState(""),_=w[0],M=w[1],x=u.useState(!1),S=x[0],E=x[1],k=u.useState([]),A=k[0],R=k[1],P=u.useState(""),C=P[0],I=P[1],O=function(){h||a||n&&!n.length||A.length>0||u.useEffect((function(){!function(){try{if(e)return Promise.resolve();s(!0);var i=function(t,e){try{var r=t()}catch(n){return e(n)}return r&&r.then?r.then(void 0,e):r}((function(){var e=t.qrcodeModalOptions&&t.qrcodeModalOptions.registryUrl?t.qrcodeModalOptions.registryUrl:o.getWalletRegistryUrl();return Promise.resolve(fetch(e)).then((function(e){return Promise.resolve(e.json()).then((function(e){var i=e.listings,a=r?"mobile":"desktop",u=o.getMobileLinkRegistry(o.formatMobileRegistry(i,a),n);s(!1),c(!0),I(u.length?"":t.text.no_supported_wallets),R(u);var l=1===u.length;l&&(M(o.formatIOSMobile(t.uri,u[0])),g(!0)),E(l)}))}))}),(function(e){s(!1),c(!0),I(t.text.something_went_wrong),console.error(e)}));Promise.resolve(i&&i.then?i.then((function(){})):void 0)}catch(a){return Promise.reject(a)}}()}))};O();var T=r?m:!m;return u.createElement("div",{id:f,className:"walletconnect-qrcode__base animated fadeIn"},u.createElement("div",{className:"walletconnect-modal__base"},u.createElement(d,{onClose:t.onClose}),S&&m?u.createElement("div",{className:"walletconnect-modal__single_wallet"},u.createElement("a",{onClick:function(){return o.saveMobileLinkInfo({name:A[0].name,href:_})},href:_,rel:"noopener noreferrer",target:"_blank"},t.text.connect_with+" "+(S?A[0].name:"")+" \u203a")):e||a||!a&&A.length?u.createElement("div",{className:"walletconnect-modal__mobile__toggle"+(T?" right__selected":"")},u.createElement("div",{className:"walletconnect-modal__mobile__toggle_selector"}),r?u.createElement(u.Fragment,null,u.createElement("a",{onClick:function(){return g(!1),O()}},t.text.mobile),u.createElement("a",{onClick:function(){return g(!0)}},t.text.qrcode)):u.createElement(u.Fragment,null,u.createElement("a",{onClick:function(){return g(!0)}},t.text.qrcode),u.createElement("a",{onClick:function(){return g(!1),O()}},t.text.desktop))):null,u.createElement("div",null,m||!e&&!a&&!A.length?u.createElement(b,Object.assign({},y)):u.createElement(v,Object.assign({},y,{links:A,errorMessage:C})))))}var _={de:{choose_preferred_wallet:"W\xe4hle bevorzugte Wallet",connect_mobile_wallet:"Verbinde mit Mobile Wallet",scan_qrcode_with_wallet:"Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",connect:"Verbinden",qrcode:"QR-Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"In die Zwischenablage kopieren",copied_to_clipboard:"In die Zwischenablage kopiert!",connect_with:"Verbinden mit Hilfe von",loading:"Laden...",something_went_wrong:"Etwas ist schief gelaufen",no_supported_wallets:"Es gibt noch keine unterst\xfctzten Wallet",no_wallets_found:"keine Wallet gefunden"},en:{choose_preferred_wallet:"Choose your preferred wallet",connect_mobile_wallet:"Connect to Mobile Wallet",scan_qrcode_with_wallet:"Scan QR code with a WalletConnect-compatible wallet",connect:"Connect",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copy to clipboard",copied_to_clipboard:"Copied to clipboard!",connect_with:"Connect with",loading:"Loading...",something_went_wrong:"Something went wrong",no_supported_wallets:"There are no supported wallets yet",no_wallets_found:"No wallets found"},es:{choose_preferred_wallet:"Elige tu billetera preferida",connect_mobile_wallet:"Conectar a billetera m\xf3vil",scan_qrcode_with_wallet:"Escanea el c\xf3digo QR con una billetera compatible con WalletConnect",connect:"Conectar",qrcode:"C\xf3digo QR",mobile:"M\xf3vil",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Conectar mediante",loading:"Cargando...",something_went_wrong:"Algo sali\xf3 mal",no_supported_wallets:"Todav\xeda no hay billeteras compatibles",no_wallets_found:"No se encontraron billeteras"},fr:{choose_preferred_wallet:"Choisissez votre portefeuille pr\xe9f\xe9r\xe9",connect_mobile_wallet:"Se connecter au portefeuille mobile",scan_qrcode_with_wallet:"Scannez le QR code avec un portefeuille compatible WalletConnect",connect:"Se connecter",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copier",copied_to_clipboard:"Copi\xe9!",connect_with:"Connectez-vous \xe0 l'aide de",loading:"Chargement...",something_went_wrong:"Quelque chose a mal tourn\xe9",no_supported_wallets:"Il n'y a pas encore de portefeuilles pris en charge",no_wallets_found:"Aucun portefeuille trouv\xe9"},ko:{choose_preferred_wallet:"\uc6d0\ud558\ub294 \uc9c0\uac11\uc744 \uc120\ud0dd\ud558\uc138\uc694",connect_mobile_wallet:"\ubaa8\ubc14\uc77c \uc9c0\uac11\uacfc \uc5f0\uacb0",scan_qrcode_with_wallet:"WalletConnect \uc9c0\uc6d0 \uc9c0\uac11\uc5d0\uc11c QR\ucf54\ub4dc\ub97c \uc2a4\uce94\ud558\uc138\uc694",connect:"\uc5f0\uacb0",qrcode:"QR \ucf54\ub4dc",mobile:"\ubaa8\ubc14\uc77c",desktop:"\ub370\uc2a4\ud06c\ud0d1",copy_to_clipboard:"\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac",copied_to_clipboard:"\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4!",connect_with:"\uc640 \uc5f0\uacb0\ud558\ub2e4",loading:"\ub85c\ub4dc \uc911...",something_went_wrong:"\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",no_supported_wallets:"\uc544\uc9c1 \uc9c0\uc6d0\ub418\ub294 \uc9c0\uac11\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",no_wallets_found:"\uc9c0\uac11\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"},pt:{choose_preferred_wallet:"Escolha sua carteira preferida",connect_mobile_wallet:"Conectar-se \xe0 carteira m\xf3vel",scan_qrcode_with_wallet:"Ler o c\xf3digo QR com uma carteira compat\xedvel com WalletConnect",connect:"Conectar",qrcode:"C\xf3digo QR",mobile:"M\xf3vel",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Ligar por meio de",loading:"Carregamento...",something_went_wrong:"Algo correu mal",no_supported_wallets:"Ainda n\xe3o h\xe1 carteiras suportadas",no_wallets_found:"Nenhuma carteira encontrada"},zh:{choose_preferred_wallet:"\u9009\u62e9\u4f60\u7684\u94b1\u5305",connect_mobile_wallet:"\u8fde\u63a5\u81f3\u79fb\u52a8\u7aef\u94b1\u5305",scan_qrcode_with_wallet:"\u4f7f\u7528\u517c\u5bb9 WalletConnect \u7684\u94b1\u5305\u626b\u63cf\u4e8c\u7ef4\u7801",connect:"\u8fde\u63a5",qrcode:"\u4e8c\u7ef4\u7801",mobile:"\u79fb\u52a8",desktop:"\u684c\u9762",copy_to_clipboard:"\u590d\u5236\u5230\u526a\u8d34\u677f",copied_to_clipboard:"\u590d\u5236\u5230\u526a\u8d34\u677f\u6210\u529f\uff01",connect_with:"\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8fde\u63a5",loading:"\u6b63\u5728\u52a0\u8f7d...",something_went_wrong:"\u51fa\u4e86\u95ee\u9898",no_supported_wallets:"\u76ee\u524d\u8fd8\u6ca1\u6709\u652f\u6301\u7684\u94b1\u5305",no_wallets_found:"\u6ca1\u6709\u627e\u5230\u94b1\u5305"},fa:{choose_preferred_wallet:"\u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",connect_mobile_wallet:"\u0628\u0647 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0648\u0635\u0644 \u0634\u0648\u06cc\u062f",scan_qrcode_with_wallet:"\u06a9\u062f QR \u0631\u0627 \u0628\u0627 \u06cc\u06a9 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0633\u0627\u0632\u06af\u0627\u0631 \u0628\u0627 WalletConnect \u0627\u0633\u06a9\u0646 \u06a9\u0646\u06cc\u062f",connect:"\u0627\u062a\u0635\u0627\u0644",qrcode:"\u06a9\u062f QR",mobile:"\u0633\u06cc\u0627\u0631",desktop:"\u062f\u0633\u06a9\u062a\u0627\u067e",copy_to_clipboard:"\u06a9\u067e\u06cc \u0628\u0647 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f",copied_to_clipboard:"\u062f\u0631 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f \u06a9\u067e\u06cc \u0634\u062f!",connect_with:"\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627",loading:"...\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc",something_went_wrong:"\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f",no_supported_wallets:"\u0647\u0646\u0648\u0632 \u0647\u06cc\u0686 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0634\u062f\u0647 \u0627\u06cc \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f",no_wallets_found:"\u0647\u06cc\u0686 \u06a9\u06cc\u0641 \u067e\u0648\u0644\u06cc \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f"}};function M(){var t=o.getDocumentOrThrow(),e=t.getElementById(f);e&&(e.className=e.className.replace("fadeIn","fadeOut"),setTimeout((function(){var e=t.getElementById(l);e&&t.body.removeChild(e)}),300))}function x(t){return function(){M(),t&&t()}}function S(){var t=o.getNavigatorOrThrow().language.split("-")[0]||"en";return _[t]||_.en}function E(t,e,r){!function(){var t=o.getDocumentOrThrow(),e=t.getElementById(h);e&&t.head.removeChild(e);var r=t.createElement("style");r.setAttribute("id",h),r.innerText=':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n',t.head.appendChild(r)}();var n=function(){var t=o.getDocumentOrThrow(),e=t.createElement("div");return e.setAttribute("id",l),t.body.appendChild(e),e}();u.render(u.createElement(w,{text:S(),uri:t,onClose:x(e),qrcodeModalOptions:r}),n)}var k=function(){return"undefined"!==typeof n&&"undefined"!==typeof n.versions&&"undefined"!==typeof n.versions.node};var A={open:function(t,e,r){console.log(t),k()?function(t){a.toString(t,{type:"terminal"}).then(console.log)}(t):E(t,e,r)},close:function(){k()||M()}};t.exports=A},68007:function(t){"use strict";t.exports=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}},61793:function(t,e,r){"use strict";r.d(e,{F4:function(){return N},aU:function(){return h},wb:function(){return f},rw:function(){return c},y_:function(){return d},uA:function(){return p},G5:function(){return n.detectEnv},sH:function(){return I},AS:function(){return n.getClientMeta},sD:function(){return n.getFromWindow},tv:function(){return n.getLocal},k$:function(){return n.getLocation},Wz:function(){return T},RM:function(){return w},jU:function(){return n.isBrowser},tf:function(){return E},DW:function(){return M},R:function(){return S},vF:function(){return x},tq:function(){return n.isMobile},jA:function(){return k},wM:function(){return A},yr:function(){return L},FT:function(){return n.mobileLinkChoiceKey},bW:function(){return P},Ky:function(){return C},GZ:function(){return j},o0:function(){return y},uj:function(){return n.removeLocal},co:function(){return n.setLocal},V7:function(){return o},Vj:function(){return b}});var n=r(21445);const i=["session_request","session_update","exchange_key","connect","disconnect","display_uri","modal_closed","transport_open","transport_close","transport_error"],o=["eth_sendTransaction","eth_signTransaction","eth_sign","eth_signTypedData","eth_signTypedData_v1","eth_signTypedData_v2","eth_signTypedData_v3","eth_signTypedData_v4","personal_sign","wallet_addEthereumChain","wallet_switchEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode"],a={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan"};var s=r(11460),u=r.n(s),l=r(52707);function h(t){return l.QM(new Uint8Array(t))}function f(t,e){return l.ek(new Uint8Array(t),!e)}function c(t){return l._W(t).buffer}function d(t){return l.eu(t).buffer}function p(t,e){const r=l.KT(l.xb(new(u())(t).toString(16)));return e?r:l.L_(r)}var m=r(91094);r(1468);function g(){return Date.now()*Math.pow(10,3)+Math.floor(Math.random()*Math.pow(10,3))}function v(t){return l.xb(t)}const y=g;function b(){return((t,e)=>{for(e=t="";t++<36;e+=51*t&52?(15^t?8^Math.random()*(20^t?16:4):4).toString(16):"-");return e})()}function w(t,e){let r;const n=function(t,e){let r;const n=a[t];return n&&(r=`https://${n}.infura.io/v3/${e}`),r}(t,e.infuraId);return e.custom&&e.custom[t]?r=e.custom[t]:n&&(r=n),r}function _(t,e){return l.A7(t,e)}function M(t){return"undefined"!==typeof t.method}function x(t){return"undefined"!==typeof t.result}function S(t){return"undefined"!==typeof t.error}function E(t){return"undefined"!==typeof t.event}function k(t){return i.includes(t)||t.startsWith("wc_")}function A(t){return!!t.method.startsWith("wc_")||!o.includes(t.method)}function R(t){t=(0,l.KT)(t.toLowerCase());const e=(0,l.KT)((0,m.keccak_256)((r=t,l.Zr(r))));var r;let n="";for(let i=0;i<t.length;i++)parseInt(e[i],16)>7?n+=t[i].toUpperCase():n+=t[i];return(0,l.L_)(n)}function P(t){var e,r,n;return(n=t)&&n.length&&!_(t[0])&&(t[0]=(e=t[0],l.OG(e,!r))),t}function C(t){if("undefined"!==typeof t.type&&"0"!==t.type)return t;if("undefined"===typeof t.from||(!(e=t.from)||"0x"!==e.toLowerCase().substring(0,2)||!/^(0x)?[0-9a-f]{40}$/i.test(e)||!/^(0x)?[0-9a-f]{40}$/.test(e)&&!/^(0x)?[0-9A-F]{40}$/.test(e)&&e!==R(e)))throw new Error("Transaction object must include a valid 'from' value.");var e;function r(t){let e=t;var r;return("number"===typeof t||"string"===typeof t&&!function(t){return""===t||"string"===typeof t&&""===t.trim()}(t))&&(_(t)?"string"===typeof t&&(e=v(t)):e=p(t)),"string"===typeof e&&(r=e,e=l.wL(l.L_(r))),e}const n={from:v(t.from),to:"undefined"===typeof t.to?void 0:v(t.to),gasPrice:"undefined"===typeof t.gasPrice?"":r(t.gasPrice),gas:"undefined"===typeof t.gas?"undefined"===typeof t.gasLimit?"":r(t.gasLimit):r(t.gas),value:"undefined"===typeof t.value?"":r(t.value),nonce:"undefined"===typeof t.nonce?"":r(t.nonce),data:"undefined"===typeof t.data?"":v(t.data)||"0x"},i=["gasPrice","gas","value","nonce"];return Object.keys(n).forEach((t=>{("undefined"===typeof n[t]||"string"===typeof n[t]&&!n[t].trim().length)&&i.includes(t)&&delete n[t]})),n}function I(t){const e=t.message||"Failed or Rejected Request";let r=-32e3;if(t&&!t.code)switch(e){case"Parse error":r=-32700;break;case"Invalid request":r=-32600;break;case"Method not found":r=-32601;break;case"Invalid params":r=-32602;break;case"Internal error":r=-32603;break;default:r=-32e3}const n={code:r,message:e};return t.data&&(n.data=t.data),n}var O=r(17563);function T(t){const e=-1!==t.indexOf("?")?t.indexOf("?"):void 0;return"undefined"!==typeof e?t.substr(e):""}function N(t,e){let r=B(t);return r=Object.assign(Object.assign({},r),e),t=function(t){return O.stringify(t)}(r),t}function B(t){return O.parse(t)}function L(t){return"undefined"!==typeof t.bridge}function j(t){const e=t.indexOf(":"),r=-1!==t.indexOf("?")?t.indexOf("?"):void 0,n=t.substring(0,e);const i=function(t){const e=t.split("@");return{handshakeTopic:e[0],version:parseInt(e[1],10)}}(t.substring(e+1,r));const o=function(t){const e=B(t);return{key:e.key||"",bridge:e.bridge||""}}("undefined"!==typeof r?t.substr(r):"");return Object.assign(Object.assign({protocol:n},i),o)}},11460:function(t,e,r){!function(t,e){"use strict";function n(t,e){if(!t)throw new Error(e||"Assertion failed")}function i(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}function o(t,e,r){if(o.isBN(t))return t;this.negative=0,this.words=null,this.length=0,this.red=null,null!==t&&("le"!==e&&"be"!==e||(r=e,e=10),this._init(t||0,e||10,r||"be"))}var a;"object"===typeof t?t.exports=o:e.BN=o,o.BN=o,o.wordSize=26;try{a=r(36563).Buffer}catch(S){}function s(t,e,r){for(var n=0,i=Math.min(t.length,r),o=e;o<i;o++){var a=t.charCodeAt(o)-48;n<<=4,n|=a>=49&&a<=54?a-49+10:a>=17&&a<=22?a-17+10:15&a}return n}function u(t,e,r,n){for(var i=0,o=Math.min(t.length,r),a=e;a<o;a++){var s=t.charCodeAt(a)-48;i*=n,i+=s>=49?s-49+10:s>=17?s-17+10:s}return i}o.isBN=function(t){return t instanceof o||null!==t&&"object"===typeof t&&t.constructor.wordSize===o.wordSize&&Array.isArray(t.words)},o.max=function(t,e){return t.cmp(e)>0?t:e},o.min=function(t,e){return t.cmp(e)<0?t:e},o.prototype._init=function(t,e,r){if("number"===typeof t)return this._initNumber(t,e,r);if("object"===typeof t)return this._initArray(t,e,r);"hex"===e&&(e=16),n(e===(0|e)&&e>=2&&e<=36);var i=0;"-"===(t=t.toString().replace(/\s+/g,""))[0]&&i++,16===e?this._parseHex(t,i):this._parseBase(t,e,i),"-"===t[0]&&(this.negative=1),this.strip(),"le"===r&&this._initArray(this.toArray(),e,r)},o.prototype._initNumber=function(t,e,r){t<0&&(this.negative=1,t=-t),t<67108864?(this.words=[67108863&t],this.length=1):t<4503599627370496?(this.words=[67108863&t,t/67108864&67108863],this.length=2):(n(t<9007199254740992),this.words=[67108863&t,t/67108864&67108863,1],this.length=3),"le"===r&&this._initArray(this.toArray(),e,r)},o.prototype._initArray=function(t,e,r){if(n("number"===typeof t.length),t.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(t.length/3),this.words=new Array(this.length);for(var i=0;i<this.length;i++)this.words[i]=0;var o,a,s=0;if("be"===r)for(i=t.length-1,o=0;i>=0;i-=3)a=t[i]|t[i-1]<<8|t[i-2]<<16,this.words[o]|=a<<s&67108863,this.words[o+1]=a>>>26-s&67108863,(s+=24)>=26&&(s-=26,o++);else if("le"===r)for(i=0,o=0;i<t.length;i+=3)a=t[i]|t[i+1]<<8|t[i+2]<<16,this.words[o]|=a<<s&67108863,this.words[o+1]=a>>>26-s&67108863,(s+=24)>=26&&(s-=26,o++);return this.strip()},o.prototype._parseHex=function(t,e){this.length=Math.ceil((t.length-e)/6),this.words=new Array(this.length);for(var r=0;r<this.length;r++)this.words[r]=0;var n,i,o=0;for(r=t.length-6,n=0;r>=e;r-=6)i=s(t,r,r+6),this.words[n]|=i<<o&67108863,this.words[n+1]|=i>>>26-o&4194303,(o+=24)>=26&&(o-=26,n++);r+6!==e&&(i=s(t,e,r+6),this.words[n]|=i<<o&67108863,this.words[n+1]|=i>>>26-o&4194303),this.strip()},o.prototype._parseBase=function(t,e,r){this.words=[0],this.length=1;for(var n=0,i=1;i<=67108863;i*=e)n++;n--,i=i/e|0;for(var o=t.length-r,a=o%n,s=Math.min(o,o-a)+r,l=0,h=r;h<s;h+=n)l=u(t,h,h+n,e),this.imuln(i),this.words[0]+l<67108864?this.words[0]+=l:this._iaddn(l);if(0!==a){var f=1;for(l=u(t,h,t.length,e),h=0;h<a;h++)f*=e;this.imuln(f),this.words[0]+l<67108864?this.words[0]+=l:this._iaddn(l)}},o.prototype.copy=function(t){t.words=new Array(this.length);for(var e=0;e<this.length;e++)t.words[e]=this.words[e];t.length=this.length,t.negative=this.negative,t.red=this.red},o.prototype.clone=function(){var t=new o(null);return this.copy(t),t},o.prototype._expand=function(t){for(;this.length<t;)this.words[this.length++]=0;return this},o.prototype.strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--;return this._normSign()},o.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},o.prototype.inspect=function(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"};var l=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],h=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],f=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];function c(t,e,r){r.negative=e.negative^t.negative;var n=t.length+e.length|0;r.length=n,n=n-1|0;var i=0|t.words[0],o=0|e.words[0],a=i*o,s=67108863&a,u=a/67108864|0;r.words[0]=s;for(var l=1;l<n;l++){for(var h=u>>>26,f=67108863&u,c=Math.min(l,e.length-1),d=Math.max(0,l-t.length+1);d<=c;d++){var p=l-d|0;h+=(a=(i=0|t.words[p])*(o=0|e.words[d])+f)/67108864|0,f=67108863&a}r.words[l]=0|f,u=0|h}return 0!==u?r.words[l]=0|u:r.length--,r.strip()}o.prototype.toString=function(t,e){var r;if(e=0|e||1,16===(t=t||10)||"hex"===t){r="";for(var i=0,o=0,a=0;a<this.length;a++){var s=this.words[a],u=(16777215&(s<<i|o)).toString(16);r=0!==(o=s>>>24-i&16777215)||a!==this.length-1?l[6-u.length]+u+r:u+r,(i+=2)>=26&&(i-=26,a--)}for(0!==o&&(r=o.toString(16)+r);r.length%e!==0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}if(t===(0|t)&&t>=2&&t<=36){var c=h[t],d=f[t];r="";var p=this.clone();for(p.negative=0;!p.isZero();){var m=p.modn(d).toString(t);r=(p=p.idivn(d)).isZero()?m+r:l[c-m.length]+m+r}for(this.isZero()&&(r="0"+r);r.length%e!==0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}n(!1,"Base should be between 2 and 36")},o.prototype.toNumber=function(){var t=this.words[0];return 2===this.length?t+=67108864*this.words[1]:3===this.length&&1===this.words[2]?t+=4503599627370496+67108864*this.words[1]:this.length>2&&n(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-t:t},o.prototype.toJSON=function(){return this.toString(16)},o.prototype.toBuffer=function(t,e){return n("undefined"!==typeof a),this.toArrayLike(a,t,e)},o.prototype.toArray=function(t,e){return this.toArrayLike(Array,t,e)},o.prototype.toArrayLike=function(t,e,r){var i=this.byteLength(),o=r||Math.max(1,i);n(i<=o,"byte array longer than desired length"),n(o>0,"Requested array length <= 0"),this.strip();var a,s,u="le"===e,l=new t(o),h=this.clone();if(u){for(s=0;!h.isZero();s++)a=h.andln(255),h.iushrn(8),l[s]=a;for(;s<o;s++)l[s]=0}else{for(s=0;s<o-i;s++)l[s]=0;for(s=0;!h.isZero();s++)a=h.andln(255),h.iushrn(8),l[o-s-1]=a}return l},Math.clz32?o.prototype._countBits=function(t){return 32-Math.clz32(t)}:o.prototype._countBits=function(t){var e=t,r=0;return e>=4096&&(r+=13,e>>>=13),e>=64&&(r+=7,e>>>=7),e>=8&&(r+=4,e>>>=4),e>=2&&(r+=2,e>>>=2),r+e},o.prototype._zeroBits=function(t){if(0===t)return 26;var e=t,r=0;return 0===(8191&e)&&(r+=13,e>>>=13),0===(127&e)&&(r+=7,e>>>=7),0===(15&e)&&(r+=4,e>>>=4),0===(3&e)&&(r+=2,e>>>=2),0===(1&e)&&r++,r},o.prototype.bitLength=function(){var t=this.words[this.length-1],e=this._countBits(t);return 26*(this.length-1)+e},o.prototype.zeroBits=function(){if(this.isZero())return 0;for(var t=0,e=0;e<this.length;e++){var r=this._zeroBits(this.words[e]);if(t+=r,26!==r)break}return t},o.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},o.prototype.toTwos=function(t){return 0!==this.negative?this.abs().inotn(t).iaddn(1):this.clone()},o.prototype.fromTwos=function(t){return this.testn(t-1)?this.notn(t).iaddn(1).ineg():this.clone()},o.prototype.isNeg=function(){return 0!==this.negative},o.prototype.neg=function(){return this.clone().ineg()},o.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},o.prototype.iuor=function(t){for(;this.length<t.length;)this.words[this.length++]=0;for(var e=0;e<t.length;e++)this.words[e]=this.words[e]|t.words[e];return this.strip()},o.prototype.ior=function(t){return n(0===(this.negative|t.negative)),this.iuor(t)},o.prototype.or=function(t){return this.length>t.length?this.clone().ior(t):t.clone().ior(this)},o.prototype.uor=function(t){return this.length>t.length?this.clone().iuor(t):t.clone().iuor(this)},o.prototype.iuand=function(t){var e;e=this.length>t.length?t:this;for(var r=0;r<e.length;r++)this.words[r]=this.words[r]&t.words[r];return this.length=e.length,this.strip()},o.prototype.iand=function(t){return n(0===(this.negative|t.negative)),this.iuand(t)},o.prototype.and=function(t){return this.length>t.length?this.clone().iand(t):t.clone().iand(this)},o.prototype.uand=function(t){return this.length>t.length?this.clone().iuand(t):t.clone().iuand(this)},o.prototype.iuxor=function(t){var e,r;this.length>t.length?(e=this,r=t):(e=t,r=this);for(var n=0;n<r.length;n++)this.words[n]=e.words[n]^r.words[n];if(this!==e)for(;n<e.length;n++)this.words[n]=e.words[n];return this.length=e.length,this.strip()},o.prototype.ixor=function(t){return n(0===(this.negative|t.negative)),this.iuxor(t)},o.prototype.xor=function(t){return this.length>t.length?this.clone().ixor(t):t.clone().ixor(this)},o.prototype.uxor=function(t){return this.length>t.length?this.clone().iuxor(t):t.clone().iuxor(this)},o.prototype.inotn=function(t){n("number"===typeof t&&t>=0);var e=0|Math.ceil(t/26),r=t%26;this._expand(e),r>0&&e--;for(var i=0;i<e;i++)this.words[i]=67108863&~this.words[i];return r>0&&(this.words[i]=~this.words[i]&67108863>>26-r),this.strip()},o.prototype.notn=function(t){return this.clone().inotn(t)},o.prototype.setn=function(t,e){n("number"===typeof t&&t>=0);var r=t/26|0,i=t%26;return this._expand(r+1),this.words[r]=e?this.words[r]|1<<i:this.words[r]&~(1<<i),this.strip()},o.prototype.iadd=function(t){var e,r,n;if(0!==this.negative&&0===t.negative)return this.negative=0,e=this.isub(t),this.negative^=1,this._normSign();if(0===this.negative&&0!==t.negative)return t.negative=0,e=this.isub(t),t.negative=1,e._normSign();this.length>t.length?(r=this,n=t):(r=t,n=this);for(var i=0,o=0;o<n.length;o++)e=(0|r.words[o])+(0|n.words[o])+i,this.words[o]=67108863&e,i=e>>>26;for(;0!==i&&o<r.length;o++)e=(0|r.words[o])+i,this.words[o]=67108863&e,i=e>>>26;if(this.length=r.length,0!==i)this.words[this.length]=i,this.length++;else if(r!==this)for(;o<r.length;o++)this.words[o]=r.words[o];return this},o.prototype.add=function(t){var e;return 0!==t.negative&&0===this.negative?(t.negative=0,e=this.sub(t),t.negative^=1,e):0===t.negative&&0!==this.negative?(this.negative=0,e=t.sub(this),this.negative=1,e):this.length>t.length?this.clone().iadd(t):t.clone().iadd(this)},o.prototype.isub=function(t){if(0!==t.negative){t.negative=0;var e=this.iadd(t);return t.negative=1,e._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(t),this.negative=1,this._normSign();var r,n,i=this.cmp(t);if(0===i)return this.negative=0,this.length=1,this.words[0]=0,this;i>0?(r=this,n=t):(r=t,n=this);for(var o=0,a=0;a<n.length;a++)o=(e=(0|r.words[a])-(0|n.words[a])+o)>>26,this.words[a]=67108863&e;for(;0!==o&&a<r.length;a++)o=(e=(0|r.words[a])+o)>>26,this.words[a]=67108863&e;if(0===o&&a<r.length&&r!==this)for(;a<r.length;a++)this.words[a]=r.words[a];return this.length=Math.max(this.length,a),r!==this&&(this.negative=1),this.strip()},o.prototype.sub=function(t){return this.clone().isub(t)};var d=function(t,e,r){var n,i,o,a=t.words,s=e.words,u=r.words,l=0,h=0|a[0],f=8191&h,c=h>>>13,d=0|a[1],p=8191&d,m=d>>>13,g=0|a[2],v=8191&g,y=g>>>13,b=0|a[3],w=8191&b,_=b>>>13,M=0|a[4],x=8191&M,S=M>>>13,E=0|a[5],k=8191&E,A=E>>>13,R=0|a[6],P=8191&R,C=R>>>13,I=0|a[7],O=8191&I,T=I>>>13,N=0|a[8],B=8191&N,L=N>>>13,j=0|a[9],D=8191&j,F=j>>>13,U=0|s[0],q=8191&U,z=U>>>13,$=0|s[1],W=8191&$,H=$>>>13,K=0|s[2],G=8191&K,V=K>>>13,Z=0|s[3],J=8191&Z,Y=Z>>>13,X=0|s[4],Q=8191&X,tt=X>>>13,et=0|s[5],rt=8191&et,nt=et>>>13,it=0|s[6],ot=8191&it,at=it>>>13,st=0|s[7],ut=8191&st,lt=st>>>13,ht=0|s[8],ft=8191&ht,ct=ht>>>13,dt=0|s[9],pt=8191&dt,mt=dt>>>13;r.negative=t.negative^e.negative,r.length=19;var gt=(l+(n=Math.imul(f,q))|0)+((8191&(i=(i=Math.imul(f,z))+Math.imul(c,q)|0))<<13)|0;l=((o=Math.imul(c,z))+(i>>>13)|0)+(gt>>>26)|0,gt&=67108863,n=Math.imul(p,q),i=(i=Math.imul(p,z))+Math.imul(m,q)|0,o=Math.imul(m,z);var vt=(l+(n=n+Math.imul(f,W)|0)|0)+((8191&(i=(i=i+Math.imul(f,H)|0)+Math.imul(c,W)|0))<<13)|0;l=((o=o+Math.imul(c,H)|0)+(i>>>13)|0)+(vt>>>26)|0,vt&=67108863,n=Math.imul(v,q),i=(i=Math.imul(v,z))+Math.imul(y,q)|0,o=Math.imul(y,z),n=n+Math.imul(p,W)|0,i=(i=i+Math.imul(p,H)|0)+Math.imul(m,W)|0,o=o+Math.imul(m,H)|0;var yt=(l+(n=n+Math.imul(f,G)|0)|0)+((8191&(i=(i=i+Math.imul(f,V)|0)+Math.imul(c,G)|0))<<13)|0;l=((o=o+Math.imul(c,V)|0)+(i>>>13)|0)+(yt>>>26)|0,yt&=67108863,n=Math.imul(w,q),i=(i=Math.imul(w,z))+Math.imul(_,q)|0,o=Math.imul(_,z),n=n+Math.imul(v,W)|0,i=(i=i+Math.imul(v,H)|0)+Math.imul(y,W)|0,o=o+Math.imul(y,H)|0,n=n+Math.imul(p,G)|0,i=(i=i+Math.imul(p,V)|0)+Math.imul(m,G)|0,o=o+Math.imul(m,V)|0;var bt=(l+(n=n+Math.imul(f,J)|0)|0)+((8191&(i=(i=i+Math.imul(f,Y)|0)+Math.imul(c,J)|0))<<13)|0;l=((o=o+Math.imul(c,Y)|0)+(i>>>13)|0)+(bt>>>26)|0,bt&=67108863,n=Math.imul(x,q),i=(i=Math.imul(x,z))+Math.imul(S,q)|0,o=Math.imul(S,z),n=n+Math.imul(w,W)|0,i=(i=i+Math.imul(w,H)|0)+Math.imul(_,W)|0,o=o+Math.imul(_,H)|0,n=n+Math.imul(v,G)|0,i=(i=i+Math.imul(v,V)|0)+Math.imul(y,G)|0,o=o+Math.imul(y,V)|0,n=n+Math.imul(p,J)|0,i=(i=i+Math.imul(p,Y)|0)+Math.imul(m,J)|0,o=o+Math.imul(m,Y)|0;var wt=(l+(n=n+Math.imul(f,Q)|0)|0)+((8191&(i=(i=i+Math.imul(f,tt)|0)+Math.imul(c,Q)|0))<<13)|0;l=((o=o+Math.imul(c,tt)|0)+(i>>>13)|0)+(wt>>>26)|0,wt&=67108863,n=Math.imul(k,q),i=(i=Math.imul(k,z))+Math.imul(A,q)|0,o=Math.imul(A,z),n=n+Math.imul(x,W)|0,i=(i=i+Math.imul(x,H)|0)+Math.imul(S,W)|0,o=o+Math.imul(S,H)|0,n=n+Math.imul(w,G)|0,i=(i=i+Math.imul(w,V)|0)+Math.imul(_,G)|0,o=o+Math.imul(_,V)|0,n=n+Math.imul(v,J)|0,i=(i=i+Math.imul(v,Y)|0)+Math.imul(y,J)|0,o=o+Math.imul(y,Y)|0,n=n+Math.imul(p,Q)|0,i=(i=i+Math.imul(p,tt)|0)+Math.imul(m,Q)|0,o=o+Math.imul(m,tt)|0;var _t=(l+(n=n+Math.imul(f,rt)|0)|0)+((8191&(i=(i=i+Math.imul(f,nt)|0)+Math.imul(c,rt)|0))<<13)|0;l=((o=o+Math.imul(c,nt)|0)+(i>>>13)|0)+(_t>>>26)|0,_t&=67108863,n=Math.imul(P,q),i=(i=Math.imul(P,z))+Math.imul(C,q)|0,o=Math.imul(C,z),n=n+Math.imul(k,W)|0,i=(i=i+Math.imul(k,H)|0)+Math.imul(A,W)|0,o=o+Math.imul(A,H)|0,n=n+Math.imul(x,G)|0,i=(i=i+Math.imul(x,V)|0)+Math.imul(S,G)|0,o=o+Math.imul(S,V)|0,n=n+Math.imul(w,J)|0,i=(i=i+Math.imul(w,Y)|0)+Math.imul(_,J)|0,o=o+Math.imul(_,Y)|0,n=n+Math.imul(v,Q)|0,i=(i=i+Math.imul(v,tt)|0)+Math.imul(y,Q)|0,o=o+Math.imul(y,tt)|0,n=n+Math.imul(p,rt)|0,i=(i=i+Math.imul(p,nt)|0)+Math.imul(m,rt)|0,o=o+Math.imul(m,nt)|0;var Mt=(l+(n=n+Math.imul(f,ot)|0)|0)+((8191&(i=(i=i+Math.imul(f,at)|0)+Math.imul(c,ot)|0))<<13)|0;l=((o=o+Math.imul(c,at)|0)+(i>>>13)|0)+(Mt>>>26)|0,Mt&=67108863,n=Math.imul(O,q),i=(i=Math.imul(O,z))+Math.imul(T,q)|0,o=Math.imul(T,z),n=n+Math.imul(P,W)|0,i=(i=i+Math.imul(P,H)|0)+Math.imul(C,W)|0,o=o+Math.imul(C,H)|0,n=n+Math.imul(k,G)|0,i=(i=i+Math.imul(k,V)|0)+Math.imul(A,G)|0,o=o+Math.imul(A,V)|0,n=n+Math.imul(x,J)|0,i=(i=i+Math.imul(x,Y)|0)+Math.imul(S,J)|0,o=o+Math.imul(S,Y)|0,n=n+Math.imul(w,Q)|0,i=(i=i+Math.imul(w,tt)|0)+Math.imul(_,Q)|0,o=o+Math.imul(_,tt)|0,n=n+Math.imul(v,rt)|0,i=(i=i+Math.imul(v,nt)|0)+Math.imul(y,rt)|0,o=o+Math.imul(y,nt)|0,n=n+Math.imul(p,ot)|0,i=(i=i+Math.imul(p,at)|0)+Math.imul(m,ot)|0,o=o+Math.imul(m,at)|0;var xt=(l+(n=n+Math.imul(f,ut)|0)|0)+((8191&(i=(i=i+Math.imul(f,lt)|0)+Math.imul(c,ut)|0))<<13)|0;l=((o=o+Math.imul(c,lt)|0)+(i>>>13)|0)+(xt>>>26)|0,xt&=67108863,n=Math.imul(B,q),i=(i=Math.imul(B,z))+Math.imul(L,q)|0,o=Math.imul(L,z),n=n+Math.imul(O,W)|0,i=(i=i+Math.imul(O,H)|0)+Math.imul(T,W)|0,o=o+Math.imul(T,H)|0,n=n+Math.imul(P,G)|0,i=(i=i+Math.imul(P,V)|0)+Math.imul(C,G)|0,o=o+Math.imul(C,V)|0,n=n+Math.imul(k,J)|0,i=(i=i+Math.imul(k,Y)|0)+Math.imul(A,J)|0,o=o+Math.imul(A,Y)|0,n=n+Math.imul(x,Q)|0,i=(i=i+Math.imul(x,tt)|0)+Math.imul(S,Q)|0,o=o+Math.imul(S,tt)|0,n=n+Math.imul(w,rt)|0,i=(i=i+Math.imul(w,nt)|0)+Math.imul(_,rt)|0,o=o+Math.imul(_,nt)|0,n=n+Math.imul(v,ot)|0,i=(i=i+Math.imul(v,at)|0)+Math.imul(y,ot)|0,o=o+Math.imul(y,at)|0,n=n+Math.imul(p,ut)|0,i=(i=i+Math.imul(p,lt)|0)+Math.imul(m,ut)|0,o=o+Math.imul(m,lt)|0;var St=(l+(n=n+Math.imul(f,ft)|0)|0)+((8191&(i=(i=i+Math.imul(f,ct)|0)+Math.imul(c,ft)|0))<<13)|0;l=((o=o+Math.imul(c,ct)|0)+(i>>>13)|0)+(St>>>26)|0,St&=67108863,n=Math.imul(D,q),i=(i=Math.imul(D,z))+Math.imul(F,q)|0,o=Math.imul(F,z),n=n+Math.imul(B,W)|0,i=(i=i+Math.imul(B,H)|0)+Math.imul(L,W)|0,o=o+Math.imul(L,H)|0,n=n+Math.imul(O,G)|0,i=(i=i+Math.imul(O,V)|0)+Math.imul(T,G)|0,o=o+Math.imul(T,V)|0,n=n+Math.imul(P,J)|0,i=(i=i+Math.imul(P,Y)|0)+Math.imul(C,J)|0,o=o+Math.imul(C,Y)|0,n=n+Math.imul(k,Q)|0,i=(i=i+Math.imul(k,tt)|0)+Math.imul(A,Q)|0,o=o+Math.imul(A,tt)|0,n=n+Math.imul(x,rt)|0,i=(i=i+Math.imul(x,nt)|0)+Math.imul(S,rt)|0,o=o+Math.imul(S,nt)|0,n=n+Math.imul(w,ot)|0,i=(i=i+Math.imul(w,at)|0)+Math.imul(_,ot)|0,o=o+Math.imul(_,at)|0,n=n+Math.imul(v,ut)|0,i=(i=i+Math.imul(v,lt)|0)+Math.imul(y,ut)|0,o=o+Math.imul(y,lt)|0,n=n+Math.imul(p,ft)|0,i=(i=i+Math.imul(p,ct)|0)+Math.imul(m,ft)|0,o=o+Math.imul(m,ct)|0;var Et=(l+(n=n+Math.imul(f,pt)|0)|0)+((8191&(i=(i=i+Math.imul(f,mt)|0)+Math.imul(c,pt)|0))<<13)|0;l=((o=o+Math.imul(c,mt)|0)+(i>>>13)|0)+(Et>>>26)|0,Et&=67108863,n=Math.imul(D,W),i=(i=Math.imul(D,H))+Math.imul(F,W)|0,o=Math.imul(F,H),n=n+Math.imul(B,G)|0,i=(i=i+Math.imul(B,V)|0)+Math.imul(L,G)|0,o=o+Math.imul(L,V)|0,n=n+Math.imul(O,J)|0,i=(i=i+Math.imul(O,Y)|0)+Math.imul(T,J)|0,o=o+Math.imul(T,Y)|0,n=n+Math.imul(P,Q)|0,i=(i=i+Math.imul(P,tt)|0)+Math.imul(C,Q)|0,o=o+Math.imul(C,tt)|0,n=n+Math.imul(k,rt)|0,i=(i=i+Math.imul(k,nt)|0)+Math.imul(A,rt)|0,o=o+Math.imul(A,nt)|0,n=n+Math.imul(x,ot)|0,i=(i=i+Math.imul(x,at)|0)+Math.imul(S,ot)|0,o=o+Math.imul(S,at)|0,n=n+Math.imul(w,ut)|0,i=(i=i+Math.imul(w,lt)|0)+Math.imul(_,ut)|0,o=o+Math.imul(_,lt)|0,n=n+Math.imul(v,ft)|0,i=(i=i+Math.imul(v,ct)|0)+Math.imul(y,ft)|0,o=o+Math.imul(y,ct)|0;var kt=(l+(n=n+Math.imul(p,pt)|0)|0)+((8191&(i=(i=i+Math.imul(p,mt)|0)+Math.imul(m,pt)|0))<<13)|0;l=((o=o+Math.imul(m,mt)|0)+(i>>>13)|0)+(kt>>>26)|0,kt&=67108863,n=Math.imul(D,G),i=(i=Math.imul(D,V))+Math.imul(F,G)|0,o=Math.imul(F,V),n=n+Math.imul(B,J)|0,i=(i=i+Math.imul(B,Y)|0)+Math.imul(L,J)|0,o=o+Math.imul(L,Y)|0,n=n+Math.imul(O,Q)|0,i=(i=i+Math.imul(O,tt)|0)+Math.imul(T,Q)|0,o=o+Math.imul(T,tt)|0,n=n+Math.imul(P,rt)|0,i=(i=i+Math.imul(P,nt)|0)+Math.imul(C,rt)|0,o=o+Math.imul(C,nt)|0,n=n+Math.imul(k,ot)|0,i=(i=i+Math.imul(k,at)|0)+Math.imul(A,ot)|0,o=o+Math.imul(A,at)|0,n=n+Math.imul(x,ut)|0,i=(i=i+Math.imul(x,lt)|0)+Math.imul(S,ut)|0,o=o+Math.imul(S,lt)|0,n=n+Math.imul(w,ft)|0,i=(i=i+Math.imul(w,ct)|0)+Math.imul(_,ft)|0,o=o+Math.imul(_,ct)|0;var At=(l+(n=n+Math.imul(v,pt)|0)|0)+((8191&(i=(i=i+Math.imul(v,mt)|0)+Math.imul(y,pt)|0))<<13)|0;l=((o=o+Math.imul(y,mt)|0)+(i>>>13)|0)+(At>>>26)|0,At&=67108863,n=Math.imul(D,J),i=(i=Math.imul(D,Y))+Math.imul(F,J)|0,o=Math.imul(F,Y),n=n+Math.imul(B,Q)|0,i=(i=i+Math.imul(B,tt)|0)+Math.imul(L,Q)|0,o=o+Math.imul(L,tt)|0,n=n+Math.imul(O,rt)|0,i=(i=i+Math.imul(O,nt)|0)+Math.imul(T,rt)|0,o=o+Math.imul(T,nt)|0,n=n+Math.imul(P,ot)|0,i=(i=i+Math.imul(P,at)|0)+Math.imul(C,ot)|0,o=o+Math.imul(C,at)|0,n=n+Math.imul(k,ut)|0,i=(i=i+Math.imul(k,lt)|0)+Math.imul(A,ut)|0,o=o+Math.imul(A,lt)|0,n=n+Math.imul(x,ft)|0,i=(i=i+Math.imul(x,ct)|0)+Math.imul(S,ft)|0,o=o+Math.imul(S,ct)|0;var Rt=(l+(n=n+Math.imul(w,pt)|0)|0)+((8191&(i=(i=i+Math.imul(w,mt)|0)+Math.imul(_,pt)|0))<<13)|0;l=((o=o+Math.imul(_,mt)|0)+(i>>>13)|0)+(Rt>>>26)|0,Rt&=67108863,n=Math.imul(D,Q),i=(i=Math.imul(D,tt))+Math.imul(F,Q)|0,o=Math.imul(F,tt),n=n+Math.imul(B,rt)|0,i=(i=i+Math.imul(B,nt)|0)+Math.imul(L,rt)|0,o=o+Math.imul(L,nt)|0,n=n+Math.imul(O,ot)|0,i=(i=i+Math.imul(O,at)|0)+Math.imul(T,ot)|0,o=o+Math.imul(T,at)|0,n=n+Math.imul(P,ut)|0,i=(i=i+Math.imul(P,lt)|0)+Math.imul(C,ut)|0,o=o+Math.imul(C,lt)|0,n=n+Math.imul(k,ft)|0,i=(i=i+Math.imul(k,ct)|0)+Math.imul(A,ft)|0,o=o+Math.imul(A,ct)|0;var Pt=(l+(n=n+Math.imul(x,pt)|0)|0)+((8191&(i=(i=i+Math.imul(x,mt)|0)+Math.imul(S,pt)|0))<<13)|0;l=((o=o+Math.imul(S,mt)|0)+(i>>>13)|0)+(Pt>>>26)|0,Pt&=67108863,n=Math.imul(D,rt),i=(i=Math.imul(D,nt))+Math.imul(F,rt)|0,o=Math.imul(F,nt),n=n+Math.imul(B,ot)|0,i=(i=i+Math.imul(B,at)|0)+Math.imul(L,ot)|0,o=o+Math.imul(L,at)|0,n=n+Math.imul(O,ut)|0,i=(i=i+Math.imul(O,lt)|0)+Math.imul(T,ut)|0,o=o+Math.imul(T,lt)|0,n=n+Math.imul(P,ft)|0,i=(i=i+Math.imul(P,ct)|0)+Math.imul(C,ft)|0,o=o+Math.imul(C,ct)|0;var Ct=(l+(n=n+Math.imul(k,pt)|0)|0)+((8191&(i=(i=i+Math.imul(k,mt)|0)+Math.imul(A,pt)|0))<<13)|0;l=((o=o+Math.imul(A,mt)|0)+(i>>>13)|0)+(Ct>>>26)|0,Ct&=67108863,n=Math.imul(D,ot),i=(i=Math.imul(D,at))+Math.imul(F,ot)|0,o=Math.imul(F,at),n=n+Math.imul(B,ut)|0,i=(i=i+Math.imul(B,lt)|0)+Math.imul(L,ut)|0,o=o+Math.imul(L,lt)|0,n=n+Math.imul(O,ft)|0,i=(i=i+Math.imul(O,ct)|0)+Math.imul(T,ft)|0,o=o+Math.imul(T,ct)|0;var It=(l+(n=n+Math.imul(P,pt)|0)|0)+((8191&(i=(i=i+Math.imul(P,mt)|0)+Math.imul(C,pt)|0))<<13)|0;l=((o=o+Math.imul(C,mt)|0)+(i>>>13)|0)+(It>>>26)|0,It&=67108863,n=Math.imul(D,ut),i=(i=Math.imul(D,lt))+Math.imul(F,ut)|0,o=Math.imul(F,lt),n=n+Math.imul(B,ft)|0,i=(i=i+Math.imul(B,ct)|0)+Math.imul(L,ft)|0,o=o+Math.imul(L,ct)|0;var Ot=(l+(n=n+Math.imul(O,pt)|0)|0)+((8191&(i=(i=i+Math.imul(O,mt)|0)+Math.imul(T,pt)|0))<<13)|0;l=((o=o+Math.imul(T,mt)|0)+(i>>>13)|0)+(Ot>>>26)|0,Ot&=67108863,n=Math.imul(D,ft),i=(i=Math.imul(D,ct))+Math.imul(F,ft)|0,o=Math.imul(F,ct);var Tt=(l+(n=n+Math.imul(B,pt)|0)|0)+((8191&(i=(i=i+Math.imul(B,mt)|0)+Math.imul(L,pt)|0))<<13)|0;l=((o=o+Math.imul(L,mt)|0)+(i>>>13)|0)+(Tt>>>26)|0,Tt&=67108863;var Nt=(l+(n=Math.imul(D,pt))|0)+((8191&(i=(i=Math.imul(D,mt))+Math.imul(F,pt)|0))<<13)|0;return l=((o=Math.imul(F,mt))+(i>>>13)|0)+(Nt>>>26)|0,Nt&=67108863,u[0]=gt,u[1]=vt,u[2]=yt,u[3]=bt,u[4]=wt,u[5]=_t,u[6]=Mt,u[7]=xt,u[8]=St,u[9]=Et,u[10]=kt,u[11]=At,u[12]=Rt,u[13]=Pt,u[14]=Ct,u[15]=It,u[16]=Ot,u[17]=Tt,u[18]=Nt,0!==l&&(u[19]=l,r.length++),r};function p(t,e,r){return(new m).mulp(t,e,r)}function m(t,e){this.x=t,this.y=e}Math.imul||(d=c),o.prototype.mulTo=function(t,e){var r,n=this.length+t.length;return r=10===this.length&&10===t.length?d(this,t,e):n<63?c(this,t,e):n<1024?function(t,e,r){r.negative=e.negative^t.negative,r.length=t.length+e.length;for(var n=0,i=0,o=0;o<r.length-1;o++){var a=i;i=0;for(var s=67108863&n,u=Math.min(o,e.length-1),l=Math.max(0,o-t.length+1);l<=u;l++){var h=o-l,f=(0|t.words[h])*(0|e.words[l]),c=67108863&f;s=67108863&(c=c+s|0),i+=(a=(a=a+(f/67108864|0)|0)+(c>>>26)|0)>>>26,a&=67108863}r.words[o]=s,n=a,a=i}return 0!==n?r.words[o]=n:r.length--,r.strip()}(this,t,e):p(this,t,e),r},m.prototype.makeRBT=function(t){for(var e=new Array(t),r=o.prototype._countBits(t)-1,n=0;n<t;n++)e[n]=this.revBin(n,r,t);return e},m.prototype.revBin=function(t,e,r){if(0===t||t===r-1)return t;for(var n=0,i=0;i<e;i++)n|=(1&t)<<e-i-1,t>>=1;return n},m.prototype.permute=function(t,e,r,n,i,o){for(var a=0;a<o;a++)n[a]=e[t[a]],i[a]=r[t[a]]},m.prototype.transform=function(t,e,r,n,i,o){this.permute(o,t,e,r,n,i);for(var a=1;a<i;a<<=1)for(var s=a<<1,u=Math.cos(2*Math.PI/s),l=Math.sin(2*Math.PI/s),h=0;h<i;h+=s)for(var f=u,c=l,d=0;d<a;d++){var p=r[h+d],m=n[h+d],g=r[h+d+a],v=n[h+d+a],y=f*g-c*v;v=f*v+c*g,g=y,r[h+d]=p+g,n[h+d]=m+v,r[h+d+a]=p-g,n[h+d+a]=m-v,d!==s&&(y=u*f-l*c,c=u*c+l*f,f=y)}},m.prototype.guessLen13b=function(t,e){var r=1|Math.max(e,t),n=1&r,i=0;for(r=r/2|0;r;r>>>=1)i++;return 1<<i+1+n},m.prototype.conjugate=function(t,e,r){if(!(r<=1))for(var n=0;n<r/2;n++){var i=t[n];t[n]=t[r-n-1],t[r-n-1]=i,i=e[n],e[n]=-e[r-n-1],e[r-n-1]=-i}},m.prototype.normalize13b=function(t,e){for(var r=0,n=0;n<e/2;n++){var i=8192*Math.round(t[2*n+1]/e)+Math.round(t[2*n]/e)+r;t[n]=67108863&i,r=i<67108864?0:i/67108864|0}return t},m.prototype.convert13b=function(t,e,r,i){for(var o=0,a=0;a<e;a++)o+=0|t[a],r[2*a]=8191&o,o>>>=13,r[2*a+1]=8191&o,o>>>=13;for(a=2*e;a<i;++a)r[a]=0;n(0===o),n(0===(-8192&o))},m.prototype.stub=function(t){for(var e=new Array(t),r=0;r<t;r++)e[r]=0;return e},m.prototype.mulp=function(t,e,r){var n=2*this.guessLen13b(t.length,e.length),i=this.makeRBT(n),o=this.stub(n),a=new Array(n),s=new Array(n),u=new Array(n),l=new Array(n),h=new Array(n),f=new Array(n),c=r.words;c.length=n,this.convert13b(t.words,t.length,a,n),this.convert13b(e.words,e.length,l,n),this.transform(a,o,s,u,n,i),this.transform(l,o,h,f,n,i);for(var d=0;d<n;d++){var p=s[d]*h[d]-u[d]*f[d];u[d]=s[d]*f[d]+u[d]*h[d],s[d]=p}return this.conjugate(s,u,n),this.transform(s,u,c,o,n,i),this.conjugate(c,o,n),this.normalize13b(c,n),r.negative=t.negative^e.negative,r.length=t.length+e.length,r.strip()},o.prototype.mul=function(t){var e=new o(null);return e.words=new Array(this.length+t.length),this.mulTo(t,e)},o.prototype.mulf=function(t){var e=new o(null);return e.words=new Array(this.length+t.length),p(this,t,e)},o.prototype.imul=function(t){return this.clone().mulTo(t,this)},o.prototype.imuln=function(t){n("number"===typeof t),n(t<67108864);for(var e=0,r=0;r<this.length;r++){var i=(0|this.words[r])*t,o=(67108863&i)+(67108863&e);e>>=26,e+=i/67108864|0,e+=o>>>26,this.words[r]=67108863&o}return 0!==e&&(this.words[r]=e,this.length++),this},o.prototype.muln=function(t){return this.clone().imuln(t)},o.prototype.sqr=function(){return this.mul(this)},o.prototype.isqr=function(){return this.imul(this.clone())},o.prototype.pow=function(t){var e=function(t){for(var e=new Array(t.bitLength()),r=0;r<e.length;r++){var n=r/26|0,i=r%26;e[r]=(t.words[n]&1<<i)>>>i}return e}(t);if(0===e.length)return new o(1);for(var r=this,n=0;n<e.length&&0===e[n];n++,r=r.sqr());if(++n<e.length)for(var i=r.sqr();n<e.length;n++,i=i.sqr())0!==e[n]&&(r=r.mul(i));return r},o.prototype.iushln=function(t){n("number"===typeof t&&t>=0);var e,r=t%26,i=(t-r)/26,o=67108863>>>26-r<<26-r;if(0!==r){var a=0;for(e=0;e<this.length;e++){var s=this.words[e]&o,u=(0|this.words[e])-s<<r;this.words[e]=u|a,a=s>>>26-r}a&&(this.words[e]=a,this.length++)}if(0!==i){for(e=this.length-1;e>=0;e--)this.words[e+i]=this.words[e];for(e=0;e<i;e++)this.words[e]=0;this.length+=i}return this.strip()},o.prototype.ishln=function(t){return n(0===this.negative),this.iushln(t)},o.prototype.iushrn=function(t,e,r){var i;n("number"===typeof t&&t>=0),i=e?(e-e%26)/26:0;var o=t%26,a=Math.min((t-o)/26,this.length),s=67108863^67108863>>>o<<o,u=r;if(i-=a,i=Math.max(0,i),u){for(var l=0;l<a;l++)u.words[l]=this.words[l];u.length=a}if(0===a);else if(this.length>a)for(this.length-=a,l=0;l<this.length;l++)this.words[l]=this.words[l+a];else this.words[0]=0,this.length=1;var h=0;for(l=this.length-1;l>=0&&(0!==h||l>=i);l--){var f=0|this.words[l];this.words[l]=h<<26-o|f>>>o,h=f&s}return u&&0!==h&&(u.words[u.length++]=h),0===this.length&&(this.words[0]=0,this.length=1),this.strip()},o.prototype.ishrn=function(t,e,r){return n(0===this.negative),this.iushrn(t,e,r)},o.prototype.shln=function(t){return this.clone().ishln(t)},o.prototype.ushln=function(t){return this.clone().iushln(t)},o.prototype.shrn=function(t){return this.clone().ishrn(t)},o.prototype.ushrn=function(t){return this.clone().iushrn(t)},o.prototype.testn=function(t){n("number"===typeof t&&t>=0);var e=t%26,r=(t-e)/26,i=1<<e;return!(this.length<=r)&&!!(this.words[r]&i)},o.prototype.imaskn=function(t){n("number"===typeof t&&t>=0);var e=t%26,r=(t-e)/26;if(n(0===this.negative,"imaskn works only with positive numbers"),this.length<=r)return this;if(0!==e&&r++,this.length=Math.min(r,this.length),0!==e){var i=67108863^67108863>>>e<<e;this.words[this.length-1]&=i}return this.strip()},o.prototype.maskn=function(t){return this.clone().imaskn(t)},o.prototype.iaddn=function(t){return n("number"===typeof t),n(t<67108864),t<0?this.isubn(-t):0!==this.negative?1===this.length&&(0|this.words[0])<t?(this.words[0]=t-(0|this.words[0]),this.negative=0,this):(this.negative=0,this.isubn(t),this.negative=1,this):this._iaddn(t)},o.prototype._iaddn=function(t){this.words[0]+=t;for(var e=0;e<this.length&&this.words[e]>=67108864;e++)this.words[e]-=67108864,e===this.length-1?this.words[e+1]=1:this.words[e+1]++;return this.length=Math.max(this.length,e+1),this},o.prototype.isubn=function(t){if(n("number"===typeof t),n(t<67108864),t<0)return this.iaddn(-t);if(0!==this.negative)return this.negative=0,this.iaddn(t),this.negative=1,this;if(this.words[0]-=t,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var e=0;e<this.length&&this.words[e]<0;e++)this.words[e]+=67108864,this.words[e+1]-=1;return this.strip()},o.prototype.addn=function(t){return this.clone().iaddn(t)},o.prototype.subn=function(t){return this.clone().isubn(t)},o.prototype.iabs=function(){return this.negative=0,this},o.prototype.abs=function(){return this.clone().iabs()},o.prototype._ishlnsubmul=function(t,e,r){var i,o,a=t.length+r;this._expand(a);var s=0;for(i=0;i<t.length;i++){o=(0|this.words[i+r])+s;var u=(0|t.words[i])*e;s=((o-=67108863&u)>>26)-(u/67108864|0),this.words[i+r]=67108863&o}for(;i<this.length-r;i++)s=(o=(0|this.words[i+r])+s)>>26,this.words[i+r]=67108863&o;if(0===s)return this.strip();for(n(-1===s),s=0,i=0;i<this.length;i++)s=(o=-(0|this.words[i])+s)>>26,this.words[i]=67108863&o;return this.negative=1,this.strip()},o.prototype._wordDiv=function(t,e){var r=(this.length,t.length),n=this.clone(),i=t,a=0|i.words[i.length-1];0!==(r=26-this._countBits(a))&&(i=i.ushln(r),n.iushln(r),a=0|i.words[i.length-1]);var s,u=n.length-i.length;if("mod"!==e){(s=new o(null)).length=u+1,s.words=new Array(s.length);for(var l=0;l<s.length;l++)s.words[l]=0}var h=n.clone()._ishlnsubmul(i,1,u);0===h.negative&&(n=h,s&&(s.words[u]=1));for(var f=u-1;f>=0;f--){var c=67108864*(0|n.words[i.length+f])+(0|n.words[i.length+f-1]);for(c=Math.min(c/a|0,67108863),n._ishlnsubmul(i,c,f);0!==n.negative;)c--,n.negative=0,n._ishlnsubmul(i,1,f),n.isZero()||(n.negative^=1);s&&(s.words[f]=c)}return s&&s.strip(),n.strip(),"div"!==e&&0!==r&&n.iushrn(r),{div:s||null,mod:n}},o.prototype.divmod=function(t,e,r){return n(!t.isZero()),this.isZero()?{div:new o(0),mod:new o(0)}:0!==this.negative&&0===t.negative?(s=this.neg().divmod(t,e),"mod"!==e&&(i=s.div.neg()),"div"!==e&&(a=s.mod.neg(),r&&0!==a.negative&&a.iadd(t)),{div:i,mod:a}):0===this.negative&&0!==t.negative?(s=this.divmod(t.neg(),e),"mod"!==e&&(i=s.div.neg()),{div:i,mod:s.mod}):0!==(this.negative&t.negative)?(s=this.neg().divmod(t.neg(),e),"div"!==e&&(a=s.mod.neg(),r&&0!==a.negative&&a.isub(t)),{div:s.div,mod:a}):t.length>this.length||this.cmp(t)<0?{div:new o(0),mod:this}:1===t.length?"div"===e?{div:this.divn(t.words[0]),mod:null}:"mod"===e?{div:null,mod:new o(this.modn(t.words[0]))}:{div:this.divn(t.words[0]),mod:new o(this.modn(t.words[0]))}:this._wordDiv(t,e);var i,a,s},o.prototype.div=function(t){return this.divmod(t,"div",!1).div},o.prototype.mod=function(t){return this.divmod(t,"mod",!1).mod},o.prototype.umod=function(t){return this.divmod(t,"mod",!0).mod},o.prototype.divRound=function(t){var e=this.divmod(t);if(e.mod.isZero())return e.div;var r=0!==e.div.negative?e.mod.isub(t):e.mod,n=t.ushrn(1),i=t.andln(1),o=r.cmp(n);return o<0||1===i&&0===o?e.div:0!==e.div.negative?e.div.isubn(1):e.div.iaddn(1)},o.prototype.modn=function(t){n(t<=67108863);for(var e=(1<<26)%t,r=0,i=this.length-1;i>=0;i--)r=(e*r+(0|this.words[i]))%t;return r},o.prototype.idivn=function(t){n(t<=67108863);for(var e=0,r=this.length-1;r>=0;r--){var i=(0|this.words[r])+67108864*e;this.words[r]=i/t|0,e=i%t}return this.strip()},o.prototype.divn=function(t){return this.clone().idivn(t)},o.prototype.egcd=function(t){n(0===t.negative),n(!t.isZero());var e=this,r=t.clone();e=0!==e.negative?e.umod(t):e.clone();for(var i=new o(1),a=new o(0),s=new o(0),u=new o(1),l=0;e.isEven()&&r.isEven();)e.iushrn(1),r.iushrn(1),++l;for(var h=r.clone(),f=e.clone();!e.isZero();){for(var c=0,d=1;0===(e.words[0]&d)&&c<26;++c,d<<=1);if(c>0)for(e.iushrn(c);c-- >0;)(i.isOdd()||a.isOdd())&&(i.iadd(h),a.isub(f)),i.iushrn(1),a.iushrn(1);for(var p=0,m=1;0===(r.words[0]&m)&&p<26;++p,m<<=1);if(p>0)for(r.iushrn(p);p-- >0;)(s.isOdd()||u.isOdd())&&(s.iadd(h),u.isub(f)),s.iushrn(1),u.iushrn(1);e.cmp(r)>=0?(e.isub(r),i.isub(s),a.isub(u)):(r.isub(e),s.isub(i),u.isub(a))}return{a:s,b:u,gcd:r.iushln(l)}},o.prototype._invmp=function(t){n(0===t.negative),n(!t.isZero());var e=this,r=t.clone();e=0!==e.negative?e.umod(t):e.clone();for(var i,a=new o(1),s=new o(0),u=r.clone();e.cmpn(1)>0&&r.cmpn(1)>0;){for(var l=0,h=1;0===(e.words[0]&h)&&l<26;++l,h<<=1);if(l>0)for(e.iushrn(l);l-- >0;)a.isOdd()&&a.iadd(u),a.iushrn(1);for(var f=0,c=1;0===(r.words[0]&c)&&f<26;++f,c<<=1);if(f>0)for(r.iushrn(f);f-- >0;)s.isOdd()&&s.iadd(u),s.iushrn(1);e.cmp(r)>=0?(e.isub(r),a.isub(s)):(r.isub(e),s.isub(a))}return(i=0===e.cmpn(1)?a:s).cmpn(0)<0&&i.iadd(t),i},o.prototype.gcd=function(t){if(this.isZero())return t.abs();if(t.isZero())return this.abs();var e=this.clone(),r=t.clone();e.negative=0,r.negative=0;for(var n=0;e.isEven()&&r.isEven();n++)e.iushrn(1),r.iushrn(1);for(;;){for(;e.isEven();)e.iushrn(1);for(;r.isEven();)r.iushrn(1);var i=e.cmp(r);if(i<0){var o=e;e=r,r=o}else if(0===i||0===r.cmpn(1))break;e.isub(r)}return r.iushln(n)},o.prototype.invm=function(t){return this.egcd(t).a.umod(t)},o.prototype.isEven=function(){return 0===(1&this.words[0])},o.prototype.isOdd=function(){return 1===(1&this.words[0])},o.prototype.andln=function(t){return this.words[0]&t},o.prototype.bincn=function(t){n("number"===typeof t);var e=t%26,r=(t-e)/26,i=1<<e;if(this.length<=r)return this._expand(r+1),this.words[r]|=i,this;for(var o=i,a=r;0!==o&&a<this.length;a++){var s=0|this.words[a];o=(s+=o)>>>26,s&=67108863,this.words[a]=s}return 0!==o&&(this.words[a]=o,this.length++),this},o.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},o.prototype.cmpn=function(t){var e,r=t<0;if(0!==this.negative&&!r)return-1;if(0===this.negative&&r)return 1;if(this.strip(),this.length>1)e=1;else{r&&(t=-t),n(t<=67108863,"Number is too big");var i=0|this.words[0];e=i===t?0:i<t?-1:1}return 0!==this.negative?0|-e:e},o.prototype.cmp=function(t){if(0!==this.negative&&0===t.negative)return-1;if(0===this.negative&&0!==t.negative)return 1;var e=this.ucmp(t);return 0!==this.negative?0|-e:e},o.prototype.ucmp=function(t){if(this.length>t.length)return 1;if(this.length<t.length)return-1;for(var e=0,r=this.length-1;r>=0;r--){var n=0|this.words[r],i=0|t.words[r];if(n!==i){n<i?e=-1:n>i&&(e=1);break}}return e},o.prototype.gtn=function(t){return 1===this.cmpn(t)},o.prototype.gt=function(t){return 1===this.cmp(t)},o.prototype.gten=function(t){return this.cmpn(t)>=0},o.prototype.gte=function(t){return this.cmp(t)>=0},o.prototype.ltn=function(t){return-1===this.cmpn(t)},o.prototype.lt=function(t){return-1===this.cmp(t)},o.prototype.lten=function(t){return this.cmpn(t)<=0},o.prototype.lte=function(t){return this.cmp(t)<=0},o.prototype.eqn=function(t){return 0===this.cmpn(t)},o.prototype.eq=function(t){return 0===this.cmp(t)},o.red=function(t){return new M(t)},o.prototype.toRed=function(t){return n(!this.red,"Already a number in reduction context"),n(0===this.negative,"red works only with positives"),t.convertTo(this)._forceRed(t)},o.prototype.fromRed=function(){return n(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},o.prototype._forceRed=function(t){return this.red=t,this},o.prototype.forceRed=function(t){return n(!this.red,"Already a number in reduction context"),this._forceRed(t)},o.prototype.redAdd=function(t){return n(this.red,"redAdd works only with red numbers"),this.red.add(this,t)},o.prototype.redIAdd=function(t){return n(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,t)},o.prototype.redSub=function(t){return n(this.red,"redSub works only with red numbers"),this.red.sub(this,t)},o.prototype.redISub=function(t){return n(this.red,"redISub works only with red numbers"),this.red.isub(this,t)},o.prototype.redShl=function(t){return n(this.red,"redShl works only with red numbers"),this.red.shl(this,t)},o.prototype.redMul=function(t){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,t),this.red.mul(this,t)},o.prototype.redIMul=function(t){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,t),this.red.imul(this,t)},o.prototype.redSqr=function(){return n(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},o.prototype.redISqr=function(){return n(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},o.prototype.redSqrt=function(){return n(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},o.prototype.redInvm=function(){return n(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},o.prototype.redNeg=function(){return n(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},o.prototype.redPow=function(t){return n(this.red&&!t.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,t)};var g={k256:null,p224:null,p192:null,p25519:null};function v(t,e){this.name=t,this.p=new o(e,16),this.n=this.p.bitLength(),this.k=new o(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function y(){v.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function b(){v.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function w(){v.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function _(){v.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function M(t){if("string"===typeof t){var e=o._prime(t);this.m=e.p,this.prime=e}else n(t.gtn(1),"modulus must be greater than 1"),this.m=t,this.prime=null}function x(t){M.call(this,t),this.shift=this.m.bitLength(),this.shift%26!==0&&(this.shift+=26-this.shift%26),this.r=new o(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}v.prototype._tmp=function(){var t=new o(null);return t.words=new Array(Math.ceil(this.n/13)),t},v.prototype.ireduce=function(t){var e,r=t;do{this.split(r,this.tmp),e=(r=(r=this.imulK(r)).iadd(this.tmp)).bitLength()}while(e>this.n);var n=e<this.n?-1:r.ucmp(this.p);return 0===n?(r.words[0]=0,r.length=1):n>0?r.isub(this.p):r.strip(),r},v.prototype.split=function(t,e){t.iushrn(this.n,0,e)},v.prototype.imulK=function(t){return t.imul(this.k)},i(y,v),y.prototype.split=function(t,e){for(var r=4194303,n=Math.min(t.length,9),i=0;i<n;i++)e.words[i]=t.words[i];if(e.length=n,t.length<=9)return t.words[0]=0,void(t.length=1);var o=t.words[9];for(e.words[e.length++]=o&r,i=10;i<t.length;i++){var a=0|t.words[i];t.words[i-10]=(a&r)<<4|o>>>22,o=a}o>>>=22,t.words[i-10]=o,0===o&&t.length>10?t.length-=10:t.length-=9},y.prototype.imulK=function(t){t.words[t.length]=0,t.words[t.length+1]=0,t.length+=2;for(var e=0,r=0;r<t.length;r++){var n=0|t.words[r];e+=977*n,t.words[r]=67108863&e,e=64*n+(e/67108864|0)}return 0===t.words[t.length-1]&&(t.length--,0===t.words[t.length-1]&&t.length--),t},i(b,v),i(w,v),i(_,v),_.prototype.imulK=function(t){for(var e=0,r=0;r<t.length;r++){var n=19*(0|t.words[r])+e,i=67108863&n;n>>>=26,t.words[r]=i,e=n}return 0!==e&&(t.words[t.length++]=e),t},o._prime=function(t){if(g[t])return g[t];var e;if("k256"===t)e=new y;else if("p224"===t)e=new b;else if("p192"===t)e=new w;else{if("p25519"!==t)throw new Error("Unknown prime "+t);e=new _}return g[t]=e,e},M.prototype._verify1=function(t){n(0===t.negative,"red works only with positives"),n(t.red,"red works only with red numbers")},M.prototype._verify2=function(t,e){n(0===(t.negative|e.negative),"red works only with positives"),n(t.red&&t.red===e.red,"red works only with red numbers")},M.prototype.imod=function(t){return this.prime?this.prime.ireduce(t)._forceRed(this):t.umod(this.m)._forceRed(this)},M.prototype.neg=function(t){return t.isZero()?t.clone():this.m.sub(t)._forceRed(this)},M.prototype.add=function(t,e){this._verify2(t,e);var r=t.add(e);return r.cmp(this.m)>=0&&r.isub(this.m),r._forceRed(this)},M.prototype.iadd=function(t,e){this._verify2(t,e);var r=t.iadd(e);return r.cmp(this.m)>=0&&r.isub(this.m),r},M.prototype.sub=function(t,e){this._verify2(t,e);var r=t.sub(e);return r.cmpn(0)<0&&r.iadd(this.m),r._forceRed(this)},M.prototype.isub=function(t,e){this._verify2(t,e);var r=t.isub(e);return r.cmpn(0)<0&&r.iadd(this.m),r},M.prototype.shl=function(t,e){return this._verify1(t),this.imod(t.ushln(e))},M.prototype.imul=function(t,e){return this._verify2(t,e),this.imod(t.imul(e))},M.prototype.mul=function(t,e){return this._verify2(t,e),this.imod(t.mul(e))},M.prototype.isqr=function(t){return this.imul(t,t.clone())},M.prototype.sqr=function(t){return this.mul(t,t)},M.prototype.sqrt=function(t){if(t.isZero())return t.clone();var e=this.m.andln(3);if(n(e%2===1),3===e){var r=this.m.add(new o(1)).iushrn(2);return this.pow(t,r)}for(var i=this.m.subn(1),a=0;!i.isZero()&&0===i.andln(1);)a++,i.iushrn(1);n(!i.isZero());var s=new o(1).toRed(this),u=s.redNeg(),l=this.m.subn(1).iushrn(1),h=this.m.bitLength();for(h=new o(2*h*h).toRed(this);0!==this.pow(h,l).cmp(u);)h.redIAdd(u);for(var f=this.pow(h,i),c=this.pow(t,i.addn(1).iushrn(1)),d=this.pow(t,i),p=a;0!==d.cmp(s);){for(var m=d,g=0;0!==m.cmp(s);g++)m=m.redSqr();n(g<p);var v=this.pow(f,new o(1).iushln(p-g-1));c=c.redMul(v),f=v.redSqr(),d=d.redMul(f),p=g}return c},M.prototype.invm=function(t){var e=t._invmp(this.m);return 0!==e.negative?(e.negative=0,this.imod(e).redNeg()):this.imod(e)},M.prototype.pow=function(t,e){if(e.isZero())return new o(1).toRed(this);if(0===e.cmpn(1))return t.clone();var r=new Array(16);r[0]=new o(1).toRed(this),r[1]=t;for(var n=2;n<r.length;n++)r[n]=this.mul(r[n-1],t);var i=r[0],a=0,s=0,u=e.bitLength()%26;for(0===u&&(u=26),n=e.length-1;n>=0;n--){for(var l=e.words[n],h=u-1;h>=0;h--){var f=l>>h&1;i!==r[0]&&(i=this.sqr(i)),0!==f||0!==a?(a<<=1,a|=f,(4===++s||0===n&&0===h)&&(i=this.mul(i,r[a]),s=0,a=0)):s=0}u=26}return i},M.prototype.convertTo=function(t){var e=t.umod(this.m);return e===t?e.clone():e},M.prototype.convertFrom=function(t){var e=t.clone();return e.red=null,e},o.mont=function(t){return new x(t)},i(x,M),x.prototype.convertTo=function(t){return this.imod(t.ushln(this.shift))},x.prototype.convertFrom=function(t){var e=this.imod(t.mul(this.rinv));return e.red=null,e},x.prototype.imul=function(t,e){if(t.isZero()||e.isZero())return t.words[0]=0,t.length=1,t;var r=t.imul(e),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),o=i;return i.cmp(this.m)>=0?o=i.isub(this.m):i.cmpn(0)<0&&(o=i.iadd(this.m)),o._forceRed(this)},x.prototype.mul=function(t,e){if(t.isZero()||e.isZero())return new o(0)._forceRed(this);var r=t.mul(e),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),a=i;return i.cmp(this.m)>=0?a=i.isub(this.m):i.cmpn(0)<0&&(a=i.iadd(this.m)),a._forceRed(this)},x.prototype.invm=function(t){return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)}}(t=r.nmd(t),this)},4148:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return x}});var n=r(75426),i=r(74131);class o extends n.Z{constructor(t,e){super({cryptoLib:i,connectorOpts:t,pushServerOpts:e})}}var a=o,s=r(4337),u=r.n(s),l=r(71578),h=r.n(l),f=r(59536),c=r(61793);const d=(0,c.sD)("XMLHttpRequest")||f.XMLHttpRequest;class p extends(h()){constructor(t){super(),this.url=t}formatError(t,e,r=-1){return{error:{message:e,code:r},id:t.id,jsonrpc:t.jsonrpc}}send(t,e){return new Promise((r=>{if("eth_subscribe"===t.method){const e=this.formatError(t,"Subscriptions are not supported by this HTTP endpoint");return this.emit("error",e),r(e)}const n=new d;let i=!1;const o=(o,a)=>{if(!i)if(n.abort(),i=!0,e)e(o,a);else{const{id:e,jsonrpc:n}=t,i=o?{id:e,jsonrpc:n,error:{message:o.message,code:o.code}}:{id:e,jsonrpc:n,result:a};this.emit("payload",i),r(i)}};n.open("POST",this.url,!0),n.setRequestHeader("Content-Type","application/json"),n.timeout=6e4,n.onerror=o,n.ontimeout=o,n.onreadystatechange=()=>{if(4===n.readyState)try{const t=JSON.parse(n.responseText);o(t.error,t.result)}catch(t){o(t)}},n.send(JSON.stringify(t))}))}}var m=p;const g=r(12906),v=r(41955),y=r(2110),b=r(28260),w=r(78747),_=r(3621),M=r(78191);var x=class extends g{constructor(t){if(super({pollingInterval:t.pollingInterval||8e3}),this.bridge="https://bridge.walletconnect.org",this.qrcode=!0,this.qrcodeModal=u(),this.qrcodeModalOptions=void 0,this.rpc=null,this.infuraId="",this.http=null,this.isConnecting=!1,this.connected=!1,this.connectCallbacks=[],this.accounts=[],this.chainId=1,this.rpcUrl="",this.enable=async()=>{const t=await this.getWalletConnector();if(t)return this.start(),this.subscribeWalletConnector(),t.accounts;throw new Error("Failed to connect to WalleConnect")},this.request=async t=>this.send(t),this.send=async(t,e)=>{var r;if("string"===typeof t){const r=t;let n=e;return"personal_sign"===r&&(n=(0,c.bW)(n)),this.sendAsyncPromise(r,n)}if("personal_sign"===(t=Object.assign({id:(0,c.o0)(),jsonrpc:"2.0"},t)).method&&(t.params=(0,c.bW)(t.params)),!e){if("eth_signTypedData_v4"===t.method&&"MetaMask"===(null===(r=this.walletMeta)||void 0===r?void 0:r.name)){const{result:e}=await this.handleOtherRequests(t);return e}return this.sendAsyncPromise(t.method,t.params)}this.sendAsync(t,e)},this.onConnect=t=>{this.connectCallbacks.push(t)},this.triggerConnect=t=>{this.connectCallbacks&&this.connectCallbacks.length&&this.connectCallbacks.forEach((e=>e(t)))},this.bridge=t.connector?t.connector.bridge:t.bridge||"https://bridge.walletconnect.org",this.qrcode="undefined"===typeof t.qrcode||!1!==t.qrcode,this.qrcodeModal=t.qrcodeModal||this.qrcodeModal,this.qrcodeModalOptions=t.qrcodeModalOptions,this.wc=t.connector||new a({bridge:this.bridge,qrcodeModal:this.qrcode?this.qrcodeModal:void 0,qrcodeModalOptions:this.qrcodeModalOptions,storageId:null===t||void 0===t?void 0:t.storageId,signingMethods:null===t||void 0===t?void 0:t.signingMethods,clientMeta:null===t||void 0===t?void 0:t.clientMeta}),this.rpc=t.rpc||null,!this.rpc&&(!t.infuraId||"string"!==typeof t.infuraId||!t.infuraId.trim()))throw new Error("Missing one of the required parameters: rpc or infuraId");this.infuraId=t.infuraId||"",this.chainId=(null===t||void 0===t?void 0:t.chainId)||this.chainId,this.initialize()}get isWalletConnect(){return!0}get connector(){return this.wc}get walletMeta(){return this.wc.peerMeta}async disconnect(){this.close()}async close(){const t=await this.getWalletConnector({disableSessionCreation:!0});await t.killSession(),await this.onDisconnect()}async handleRequest(t){try{let e,r=null;const n=await this.getWalletConnector();switch(t.method){case"wc_killSession":await this.close(),r=null;break;case"eth_accounts":r=n.accounts;break;case"eth_coinbase":r=n.accounts[0];break;case"eth_chainId":case"net_version":r=n.chainId;break;case"eth_uninstallFilter":this.sendAsync(t,(t=>t)),r=!0;break;default:e=await this.handleOtherRequests(t)}return e||this.formatResponse(t,r)}catch(e){throw this.emit("error",e),e}}async handleOtherRequests(t){if(!c.V7.includes(t.method)&&t.method.startsWith("eth_"))return this.handleReadRequests(t);const e=await this.getWalletConnector(),r=await e.sendCustomRequest(t);return this.formatResponse(t,r)}async handleReadRequests(t){if(!this.http){const t=new Error("HTTP Connection not available");throw this.emit("error",t),t}return this.http.send(t)}formatResponse(t,e){return{id:t.id,jsonrpc:t.jsonrpc,result:e}}getWalletConnector(t={}){const{disableSessionCreation:e=!1}=t;return new Promise(((t,r)=>{const n=this.wc;this.isConnecting?this.onConnect((e=>t(e))):n.connected||e?(this.connected||(this.connected=!0,this.updateState(n.session)),t(n)):(this.isConnecting=!0,n.on("modal_closed",(()=>{r(new Error("User closed modal"))})),n.createSession({chainId:this.chainId}).then((()=>{n.on("connect",((e,i)=>{if(e)return this.isConnecting=!1,r(e);this.isConnecting=!1,this.connected=!0,i&&this.updateState(i.params[0]),this.emit("connect"),this.triggerConnect(n),t(n)}))})).catch((t=>{this.isConnecting=!1,r(t)})))}))}async subscribeWalletConnector(){const t=await this.getWalletConnector();t.on("disconnect",(t=>{t?this.emit("error",t):this.onDisconnect()})),t.on("session_update",((t,e)=>{t?this.emit("error",t):this.updateState(e.params[0])}))}async onDisconnect(){await this.stop(),this.emit("close",1e3,"Connection closed"),this.emit("disconnect",1e3,"Connection disconnected"),this.connected=!1}async updateState(t){const{accounts:e,chainId:r,networkId:n,rpcUrl:i}=t;(!this.accounts||e&&this.accounts!==e)&&(this.accounts=e,this.emit("accountsChanged",e)),(!this.chainId||r&&this.chainId!==r)&&(this.chainId=r,this.emit("chainChanged",r)),(!this.networkId||n&&this.networkId!==n)&&(this.networkId=n,this.emit("networkChanged",n)),this.updateRpcUrl(this.chainId,i||"")}updateRpcUrl(t,e=""){const r={infuraId:this.infuraId,custom:this.rpc||void 0};(e=e||(0,c.RM)(t,r))?(this.rpcUrl=e,this.updateHttpConnection()):this.emit("error",new Error(`No RPC Url available for chainId: ${t}`))}updateHttpConnection(){this.rpcUrl&&(this.http=new m(this.rpcUrl),this.http.on("payload",(t=>this.emit("payload",t))),this.http.on("error",(t=>this.emit("error",t))))}sendAsyncPromise(t,e){return new Promise(((r,n)=>{this.sendAsync({id:(0,c.o0)(),jsonrpc:"2.0",method:t,params:e||[]},((t,e)=>{t?n(t):r(e.result)}))}))}initialize(){this.updateRpcUrl(this.chainId),this.addProvider(new y({eth_hashrate:"0x00",eth_mining:!1,eth_syncing:!0,net_listening:!0,web3_clientVersion:"WalletConnect/v1.x.x/javascript"})),this.addProvider(new v),this.addProvider(new M),this.addProvider(new b),this.addProvider(new _),this.addProvider(new w(this.configWallet())),this.addProvider({handleRequest:async(t,e,r)=>{try{const{error:e,result:n}=await this.handleRequest(t);r(e,n)}catch(n){r(n)}},setEngine:t=>t})}configWallet(){return{getAccounts:async t=>{try{const e=(await this.getWalletConnector()).accounts;e&&e.length?t(null,e):t(new Error("Failed to get accounts"))}catch(e){t(e)}},processMessage:async(t,e)=>{try{const r=await this.getWalletConnector();e(null,await r.signMessage([t.from,t.data]))}catch(r){e(r)}},processPersonalMessage:async(t,e)=>{try{const r=await this.getWalletConnector();e(null,await r.signPersonalMessage([t.data,t.from]))}catch(r){e(r)}},processSignTransaction:async(t,e)=>{try{const r=await this.getWalletConnector();e(null,await r.signTransaction(t))}catch(r){e(r)}},processTransaction:async(t,e)=>{try{const r=await this.getWalletConnector();e(null,await r.sendTransaction(t))}catch(r){e(r)}},processTypedMessage:async(t,e)=>{try{const r=await this.getWalletConnector();e(null,await r.signTypedData([t.from,t.data]))}catch(r){e(r)}}}}}},62873:function(t,e){"use strict";function r(t){let e;return"undefined"!==typeof window&&"undefined"!==typeof window[t]&&(e=window[t]),e}function n(t){const e=r(t);if(!e)throw new Error(`${t} is not defined in Window`);return e}Object.defineProperty(e,"__esModule",{value:!0}),e.getLocalStorage=e.getLocalStorageOrThrow=e.getCrypto=e.getCryptoOrThrow=e.getLocation=e.getLocationOrThrow=e.getNavigator=e.getNavigatorOrThrow=e.getDocument=e.getDocumentOrThrow=e.getFromWindowOrThrow=e.getFromWindow=void 0,e.getFromWindow=r,e.getFromWindowOrThrow=n,e.getDocumentOrThrow=function(){return n("document")},e.getDocument=function(){return r("document")},e.getNavigatorOrThrow=function(){return n("navigator")},e.getNavigator=function(){return r("navigator")},e.getLocationOrThrow=function(){return n("location")},e.getLocation=function(){return r("location")},e.getCryptoOrThrow=function(){return n("crypto")},e.getCrypto=function(){return r("crypto")},e.getLocalStorageOrThrow=function(){return n("localStorage")},e.getLocalStorage=function(){return r("localStorage")}},65755:function(t,e,r){"use strict";e.D=void 0;const n=r(62873);e.D=function(){let t,e;try{t=n.getDocumentOrThrow(),e=n.getLocationOrThrow()}catch(o){return null}function r(...e){const r=t.getElementsByTagName("meta");for(let t=0;t<r.length;t++){const n=r[t],i=["itemprop","property","name"].map((t=>n.getAttribute(t))).filter((t=>!!t&&e.includes(t)));if(i.length&&i){const t=n.getAttribute("content");if(t)return t}}return""}const i=function(){let e=r("name","og:site_name","og:title","twitter:title");return e||(e=t.title),e}();return{description:r("description","og:description","twitter:description","keywords"),url:e.origin,icons:function(){const r=t.getElementsByTagName("link"),n=[];for(let t=0;t<r.length;t++){const i=r[t],o=i.getAttribute("rel");if(o&&o.toLowerCase().indexOf("icon")>-1){const t=i.getAttribute("href");if(t)if(-1===t.toLowerCase().indexOf("https:")&&-1===t.toLowerCase().indexOf("http:")&&0!==t.indexOf("//")){let r=e.protocol+"//"+e.host;if(0===t.indexOf("/"))r+=t;else{const n=e.pathname.split("/");n.pop();r+=n.join("/")+"/"+t}n.push(r)}else if(0===t.indexOf("//")){const r=e.protocol+t;n.push(r)}else n.push(t)}}return n}(),name:i}}},45624:function(t,e,r){"use strict";r.d(e,{hN:function(){return I},n2:function(){return T},yk:function(){return v},MP:function(){return O},J5:function(){return N},EN:function(){return g},$z:function(){return A},hf:function(){return k},rW:function(){return R},Ty:function(){return _},RM:function(){return M},up:function(){return w},$E:function(){return F},qz:function(){return W},h2:function(){return b},Cb:function(){return z},H2:function(){return D},cM:function(){return L},Fr:function(){return $},tV:function(){return U},oZ:function(){return j},rn:function(){return q}});var n=r(4942),i=r(95844);function o(t,e){void 0===e&&(e=t.constructor);var r=Error.captureStackTrace;r&&r(t,e)}var a=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),s=function(t){function e(e){var r=this.constructor,n=t.call(this,e)||this;return Object.defineProperty(n,"name",{value:r.name,enumerable:!1,configurable:!0}),function(t,e){var r=Object.setPrototypeOf;r?r(t,e):t.__proto__=e}(n,r.prototype),o(n),n}return a(e,t),e}(Error);var u=r(20917);function l(t){this.message=t}l.prototype=new Error,l.prototype.name="InvalidCharacterError";var h="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(t){var e=String(t).replace(/=+$/,"");if(e.length%4==1)throw new l("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,n,i=0,o=0,a="";n=e.charAt(o++);~n&&(r=i%4?64*r+n:n,i++%4)?a+=String.fromCharCode(255&r>>(-2*i&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return a};function f(t){var e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return function(t){return decodeURIComponent(h(t).replace(/(.)/g,(function(t,e){var r=e.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r})))}(e)}catch(t){return h(e)}}function c(t){this.message=t}c.prototype=new Error,c.prototype.name="InvalidTokenError";var d=function(t,e){if("string"!=typeof t)throw new c("Invalid token specified");var r=!0===(e=e||{}).header?0:1;try{return JSON.parse(f(t.split(".")[r]))}catch(t){throw new c("Invalid token specified: "+t.message)}},p=r(2043),m=r.n(p);const g={EIP155:"eip155",SOLANA:"solana",OTHER:"other"},v={EIP155:"eip155",SOLANA:"solana",MULTICHAIN:"multichain"},y="776218ac4734478c90191dde8cae483c",b=(t,e)=>{if(t===g.OTHER)return null;const r=e?"number"===typeof e?e:parseInt(e,16):(t=>{if(t===g.EIP155)return 1;if(t===g.SOLANA)return 1;throw new Error("Chain namespace ".concat(t," is not supported"))})(t);return t===g.EIP155?(t=>{const e=g.EIP155;return 1===t?{chainNamespace:e,chainId:"0x1",rpcTarget:"https://mainnet.infura.io/v3/".concat(y),displayName:"Ethereum Mainnet",blockExplorer:"https://etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:3===t?{chainNamespace:e,chainId:"0x3",rpcTarget:"https://ropsten.infura.io/v3/".concat(y),displayName:"ropsten",blockExplorer:"https://ropsten.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:4===t?{chainNamespace:e,chainId:"0x4",rpcTarget:"https://rinkeby.infura.io/v3/".concat(y),displayName:"rinkeby",blockExplorer:"https://rinkeby.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:5===t?{chainNamespace:e,chainId:"0x5",rpcTarget:"https://goerli.infura.io/v3/".concat(y),displayName:"goerli",blockExplorer:"https://goerli.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:42===t?{chainNamespace:e,chainId:"0x2a",rpcTarget:"https://kovan.infura.io/v3/".concat(y),displayName:"kovan",blockExplorer:"https://kovan.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:137===t?{chainNamespace:e,rpcTarget:"https://polygon-rpc.com",blockExplorer:"https://polygonscan.com",chainId:"0x89",displayName:"Polygon Mainnet",ticker:"matic",tickerName:"matic"}:80001===t?{chainNamespace:e,rpcTarget:"https://rpc-mumbai.maticvigil.com",blockExplorer:"https://mumbai-explorer.matic.today",chainId:"0x13881",displayName:"Polygon Mumbai Testnet",ticker:"matic",tickerName:"matic"}:56===t?{chainNamespace:e,rpcTarget:"https://bsc-dataseed.binance.org",blockExplorer:"https://bscscan.com",chainId:"0x38",displayName:"Binance SmartChain Mainnet",ticker:"BNB",tickerName:"BNB"}:97===t?{chainNamespace:e,rpcTarget:"https://data-seed-prebsc-2-s3.binance.org:8545",blockExplorer:"https://testnet.bscscan.com",chainId:"0x61",displayName:"Binance SmartChain Testnet",ticker:"BNB",tickerName:"BNB"}:null})(r):t===g.SOLANA?(t=>{const e=g.SOLANA;return 1===t?{chainNamespace:e,blockExplorer:"https://explorer.solana.com",chainId:"0x1",displayName:"Solana Mainnet",rpcTarget:"https://api.mainnet-beta.solana.com",ticker:"SOL",tickerName:"Solana Token"}:2===t?{rpcTarget:"https://api.testnet.solana.com",blockExplorer:"https://explorer.solana.com?cluster=testnet",chainId:"0x2",chainNamespace:e,displayName:"testnet",ticker:"SOL",tickerName:"solana"}:3===t?{rpcTarget:"https://api.devnet.solana.com",blockExplorer:"https://explorer.solana.com?cluster=devnet",chainId:"0x3",chainNamespace:e,displayName:"devnet",ticker:"SOL",tickerName:"solana"}:null})(r):null};class w extends s{constructor(t,e){super(e),(0,n.Z)(this,"code",void 0),(0,n.Z)(this,"message",void 0),this.code=t,this.message=e||"",Object.defineProperty(this,"name",{value:"Web3AuthError"})}toJSON(){return{name:this.name,code:this.code,message:this.message}}toString(){return JSON.stringify(this.toJSON())}}class _ extends w{constructor(t,e){super(t,e),Object.defineProperty(this,"name",{value:"WalletInitializationError"})}static fromCode(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new _(t,"".concat(_.messages[t],", ").concat(e))}static notFound(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return _.fromCode(5001,t)}static notInstalled(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return _.fromCode(5002,t)}static notReady(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return _.fromCode(5003,t)}static windowBlocked(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return _.fromCode(5004,t)}static windowClosed(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return _.fromCode(5005,t)}static incompatibleChainNameSpace(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return _.fromCode(5006,t)}static duplicateAdapterError(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return _.fromCode(5007,t)}static invalidProviderConfigError(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return _.fromCode(5008,t)}static providerNotReadyError(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return _.fromCode(5009,t)}static rpcConnectionError(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return _.fromCode(5010,t)}static invalidParams(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return _.fromCode(5011,t)}static invalidNetwork(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return _.fromCode(5013,t)}}(0,n.Z)(_,"messages",{5e3:"Custom",5001:"Wallet is not found",5002:"Wallet is not installed",5003:"Wallet is not ready yet",5004:"Wallet window is blocked",5005:"Wallet window has been closed by the user",5006:"Incompatible chain namespace provided",5007:"Adapter has already been included",5008:"Invalid provider Config",5009:"Provider is not ready yet",5010:"Failed to connect with rpc url",5011:"Invalid params passed in",5013:"Invalid network provided"});class M extends w{constructor(t,e){super(t,e),Object.defineProperty(this,"name",{value:"WalletLoginError"})}static fromCode(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new M(t,"".concat(M.messages[t]).concat(e))}static connectionError(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return M.fromCode(5111,t)}static disconnectionError(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return M.fromCode(5112,t)}static notConnectedError(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return M.fromCode(5113,t)}static popupClosed(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return M.fromCode(5114,t)}}function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}(0,n.Z)(M,"messages",{5e3:"Custom",5111:"Failed to connect with wallet",5112:"Failed to disconnect from wallet",5113:"Wallet is not connected",5114:"Wallet popup has been closed by the user"});const E={OPENLOGIN:"openlogin",WALLET_CONNECT_V1:"wallet-connect-v1",WALLET_CONNECT_V2:"wallet-connect-v2"},k=S({TORUS_SOLANA:"torus-solana",PHANTOM:"phantom",SOLLET:"sollet",SOLLET_EXTENSION:"sollet-extension",SOLFLARE:"solflare",SLOPE:"slope"},E),A=S({TORUS_EVM:"torus-evm",METAMASK:"metamask",COINBASE:"coinbase"},E),R=S(S({},A),k);function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const I={EXTERNAL:"external",IN_APP:"in_app"},O={NOT_READY:"not_ready",READY:"ready",CONNECTING:"connecting",CONNECTED:"connected",DISCONNECTED:"disconnected",ERRORED:"errored"},T=C(C({},O),{},{ADAPTER_DATA_UPDATED:"adapter_data_updated"});class N extends i.Ue{constructor(){super(...arguments),(0,n.Z)(this,"adapterData",{}),(0,n.Z)(this,"sessionTime",86400),(0,n.Z)(this,"chainConfig",null)}get chainConfigProxy(){return this.chainConfig?C({},this.chainConfig):null}setChainConfig(t){if(this.status===O.READY)return;if(!t.chainNamespace)throw _.notReady("ChainNamespace is required while setting chainConfig");const e=b(t.chainNamespace,t.chainId);this.chainConfig=C(C({},e),t)}setAdapterSettings(t){}checkConnectionRequirements(){if(this.name!==R.WALLET_CONNECT_V1||this.status!==O.CONNECTING){if(this.status===O.CONNECTING)throw _.notReady("Already connecting");if(this.status===O.CONNECTED)throw M.connectionError("Already connected");if(this.status!==O.READY)throw M.connectionError("Wallet adapter is not ready yet")}}checkInitializationRequirements(){if(this.status!==O.NOT_READY){if(this.status===O.CONNECTED)throw _.notReady("Already connected");if(this.status===O.READY)throw _.notReady("Adapter is already initialized")}}updateAdapterData(t){this.adapterData=t,this.emit(T.ADAPTER_DATA_UPDATED,{adapterName:this.name,data:t})}}const B="https://auth-js-backend.tor.us";var L=m().getLogger("web3auth-logger");function j(t){let e,r=!1,n=0;try{e=window[t],r=!0,n=e.length;const i="__storage_test__";return e.setItem(i,i),e.removeItem(i),!0}catch(i){const t=i;return!(!t||22!==t.code&&1014!==t.code&&"QuotaExceededError"!==t.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==t.name||!r||0===n)}}const D=t=>("string"===typeof t||"number"===typeof t)&&/^(-)?0x[0-9a-f]*$/i.test(t),F=t=>{const e=d(t);return!e.exp||e.exp<Math.floor(Date.now()/1e3)},U=async(t,e)=>{const r={payload:t,header:{t:"solana"===e?"sip99":"eip191"},network:"solana"===e?"solana":"ethereum"},n=await(0,u.v_)("".concat(B,"/siww/get"),r);if(!n.success)throw new Error("Failed to authenticate user, Please reach out to Web3Auth Support team");return n.challenge},q=async(t,e,r,n,i)=>{const o={signature:{s:e,t:"solana"===t?"sip99":"eip191"},message:r,issuer:n,audience:window.location.hostname,timeout:i},a=await(0,u.v_)("".concat(B,"/siww/verify"),o);if(!a.success)throw L.error("Failed to authenticate user, ,message verification failed",a.error),new Error("Failed to authenticate user, ,message verification failed");return a.token},z=(t,e)=>j("localStorage")?localStorage.getItem("".concat(t.toLowerCase(),"_").concat(e)):null,$=(t,e,r)=>j("localStorage")?localStorage.setItem("".concat(t.toLowerCase(),"_").concat(e),r):null,W=(t,e)=>j("localStorage")?localStorage.removeItem("".concat(t.toLowerCase(),"_").concat(e)):null},11218:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(r(45697)),i=o(r(67294));function o(t){return t&&t.__esModule?t:{default:t}}var a={d:n.default.string.isRequired,fill:n.default.string.isRequired,transformX:n.default.number.isRequired,transformY:n.default.number.isRequired},s=function(t){var e=t.d,r=t.fill,n=t.transformX,o=t.transformY;return i.default.createElement("path",{d:e,fill:r,transform:"matrix("+[1,0,0,1,n,o]+")"})};s.propTypes=a,s.defaultProps={},e.default=s},70258:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i=a(r(45697)),o=a(r(67294));function a(t){return t&&t.__esModule?t:{default:t}}var s={children:i.default.array.isRequired,size:i.default.number.isRequired,title:i.default.string,xmlns:i.default.string},u={title:void 0,xmlns:"http://www.w3.org/2000/svg"},l=function(t){var e=t.children,r=t.size,i=t.title,a=t.xmlns,s=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}(t,["children","size","title","xmlns"]);return o.default.createElement("svg",n({},s,{height:r,width:r,xmlns:a}),i?o.default.createElement("title",null,i):null,e)};l.propTypes=s,l.defaultProps=u,e.default=l},23745:function(t,e,r){"use strict";var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i=f(r(14450)),o=f(r(49381)),a=f(r(45697)),s=r(67294),u=f(s),l=f(r(11218)),h=f(r(70258));function f(t){return t&&t.__esModule?t:{default:t}}var c={bgColor:a.default.oneOfType([a.default.object,a.default.string]),fgColor:a.default.oneOfType([a.default.object,a.default.string]),level:a.default.oneOf(["L","M","Q","H"]),size:a.default.number,value:a.default.string.isRequired},d=function(t){var e=t.bgColor,r=t.fgColor,a=t.level,s=t.size,f=t.value,c=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}(t,["bgColor","fgColor","level","size","value"]),d=new i.default(-1,o.default[a]);d.addData(f),d.make();var p=d.modules,m=s/p.length;return u.default.createElement(h.default,n({},c,{size:s}),p.map((function(t,n){return t.map((function(t,i){var o=Math.round(i*m),a=Math.round(n*m),s=Math.round((i+1)*m)-o,h=Math.round((n+1)*m)-a;return u.default.createElement(l.default,{key:"rectangle-"+n+"-"+i,d:"M 0 0 L "+s+" 0 L "+s+" "+h+" L 0 "+h+" Z",fill:t?r:e,transformX:o,transformY:a})}))})))};d.propTypes=c,d.defaultProps={bgColor:"#FFFFFF",fgColor:"#000000",level:"L",size:256},e.Z=(0,s.memo)(d)},44936:function(t,e,r){"use strict";r.r(e),r.d(e,{Web3Auth:function(){return _t},defaultEvmDappModalConfig:function(){return dt},defaultEvmWalletModalConfig:function(){return mt},defaultOtherModalConfig:function(){return gt},defaultSolanaDappModalConfig:function(){return ct},defaultSolanaWalletModalConfig:function(){return pt}});var n=r(45624),i=r(4942),o=r(95844);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){(0,i.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const u=s(s({},n.EN),{},{MULTICHAIN:"multichain"});function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){(0,i.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const f="Web3Auth-cachedAdapter";class c extends o.Ue{constructor(t){var e,r,o,a;if(super(),(0,i.Z)(this,"coreOptions",void 0),(0,i.Z)(this,"connectedAdapterName",null),(0,i.Z)(this,"status",n.MP.NOT_READY),(0,i.Z)(this,"cachedAdapter",null),(0,i.Z)(this,"walletAdapters",{}),(0,i.Z)(this,"plugins",{}),(0,i.Z)(this,"storage","localStorage"),t.enableLogging?n.cM.enableAll():n.cM.disableAll(),null===(e=t.chainConfig)||void 0===e||!e.chainNamespace||!Object.values(n.EN).includes(null===(r=t.chainConfig)||void 0===r?void 0:r.chainNamespace))throw n.Ty.invalidParams("Please provide a valid chainNamespace in chainConfig");"session"===t.storageKey&&(this.storage="sessionStorage"),this.cachedAdapter=(0,n.oZ)(this.storage)?window[this.storage].getItem(f):null,this.coreOptions=h(h({},t),{},{chainConfig:h(h({},(0,n.h2)(null===(o=t.chainConfig)||void 0===o?void 0:o.chainNamespace,null===(a=t.chainConfig)||void 0===a?void 0:a.chainId)||{}),t.chainConfig)}),this.subscribeToAdapterEvents=this.subscribeToAdapterEvents.bind(this)}get provider(){if(this.status===n.MP.CONNECTED&&this.connectedAdapterName){return this.walletAdapters[this.connectedAdapterName].provider}return null}set provider(t){throw new Error("Not implemented")}async init(){const t=Object.keys(this.walletAdapters).map((t=>{if(this.subscribeToAdapterEvents(this.walletAdapters[t]),!this.walletAdapters[t].chainConfigProxy){const e=this.coreOptions.chainConfig;if(!e.chainNamespace)throw n.Ty.invalidParams("Please provide chainNamespace in chainConfig");const r=h(h({},(0,n.h2)(e.chainNamespace,e.chainId)),e);this.walletAdapters[t].setChainConfig(r)}return this.walletAdapters[t].init({autoConnect:this.cachedAdapter===t}).catch((t=>n.cM.error(t)))}));this.status=n.MP.READY,await Promise.all(t)}configureAdapter(t){this.checkInitRequirements();const e=this.coreOptions.chainConfig;if(!e.chainNamespace)throw n.Ty.invalidParams("Please provide chainNamespace in chainConfig");if(this.walletAdapters[t.name])throw n.Ty.duplicateAdapterError("Wallet adapter for ".concat(t.name," already exists"));if(t.adapterNamespace!==n.yk.MULTICHAIN&&t.adapterNamespace!==e.chainNamespace)throw n.Ty.incompatibleChainNameSpace("This wallet adapter belongs to ".concat(t.adapterNamespace," which is incompatible with currently used namespace: ").concat(e.chainNamespace));return t.adapterNamespace===n.yk.MULTICHAIN&&t.currentChainNamespace&&e.chainNamespace!==t.currentChainNamespace&&t.setChainConfig(e),this.walletAdapters[t.name]=t,this}clearCache(){(0,n.oZ)(this.storage)&&(window[this.storage].removeItem(f),this.cachedAdapter=null)}async connectTo(t,e){if(!this.walletAdapters[t])throw n.Ty.notFound("Please add wallet adapter for ".concat(t," wallet, before connecting"));return await this.walletAdapters[t].connect(e)}async logout(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleanup:!1};if(this.status!==n.MP.CONNECTED||!this.connectedAdapterName)throw n.RM.notConnectedError("No wallet is connected");await this.walletAdapters[this.connectedAdapterName].disconnect(t)}async getUserInfo(){if(n.cM.debug("Getting user info",this.status,this.connectedAdapterName),this.status!==n.MP.CONNECTED||!this.connectedAdapterName)throw n.RM.notConnectedError("No wallet is connected");return this.walletAdapters[this.connectedAdapterName].getUserInfo()}async authenticateUser(){if(this.status!==n.MP.CONNECTED||!this.connectedAdapterName)throw n.RM.notConnectedError("No wallet is connected");return this.walletAdapters[this.connectedAdapterName].authenticateUser()}async addPlugin(t){if(this.plugins[t.name])throw new Error("Plugin ".concat(t.name," already exist"));if(t.pluginNamespace!==u.MULTICHAIN&&t.pluginNamespace!==this.coreOptions.chainConfig.chainNamespace)throw new Error("This plugin belongs to ".concat(t.pluginNamespace," namespace which is incompatible with currently used namespace: ").concat(this.coreOptions.chainConfig.chainNamespace));return this.plugins[t.name]=t,await t.initWithWeb3Auth(this),this}subscribeToAdapterEvents(t){t.on(n.n2.CONNECTED,(async t=>{this.status=n.MP.CONNECTED,this.connectedAdapterName=t.adapter,this.cacheWallet(t.adapter),n.cM.debug("connected",this.status,this.connectedAdapterName),await Promise.all(Object.values(this.plugins).map((t=>t.connect().catch((t=>{5211!==t.code&&n.cM.error(t)}))))),this.emit(n.n2.CONNECTED,h({},t))})),t.on(n.n2.DISCONNECTED,(async t=>{if(this.status=n.MP.READY,(0,n.oZ)(this.storage)){const t=window[this.storage].getItem(f);this.connectedAdapterName===t&&this.clearCache()}n.cM.debug("disconnected",this.status,this.connectedAdapterName),await Promise.all(Object.values(this.plugins).map((t=>t.disconnect().catch((t=>{5211!==t.code&&n.cM.error(t)}))))),this.connectedAdapterName=null,this.emit(n.n2.DISCONNECTED,t)})),t.on(n.n2.CONNECTING,(t=>{this.status=n.MP.CONNECTING,this.emit(n.n2.CONNECTING,t),n.cM.debug("connecting",this.status,this.connectedAdapterName)})),t.on(n.n2.ERRORED,(t=>{this.status=n.MP.ERRORED,this.clearCache(),this.emit(n.n2.ERRORED,t),n.cM.debug("errored",this.status,this.connectedAdapterName)})),t.on(n.n2.ADAPTER_DATA_UPDATED,(t=>{n.cM.debug("adapter data updated",t),this.emit(n.n2.ADAPTER_DATA_UPDATED,t)}))}checkInitRequirements(){if(this.status===n.MP.CONNECTING)throw n.Ty.notReady("Already pending connection");if(this.status===n.MP.CONNECTED)throw n.Ty.notReady("Already connected");if(this.status===n.MP.READY)throw n.Ty.notReady("Adapter is already initialized")}cacheWallet(t){(0,n.oZ)(this.storage)&&(window[this.storage].setItem(f,t),this.cachedAdapter=t)}}var d=r(3388),p=r(85893),m=r(73935),g=r(83465),v=r.n(g),y=r(72378),b=r.n(y),w=r(67294),_=r(51206),M=r.n(_),x=r(23745),S=r(94184),E=r.n(S);const k=Object.values(d.hG).filter((t=>t!==d.hG.WEBAUTHN&&t!==d.hG.JWT)),A="INIT_EXTERNAL_WALLETS",R="LOGIN",P="DISCONNECT",C="MODAL_VISIBILITY",I="initialized",O="connected",T="connecting",N="errored";function B(t,e){void 0===e&&(e={});var r=e.insertAt;if(t&&"undefined"!==typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}B('/* devanagari */\n@font-face {\n  font-family: "Poppins";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z11lFd2JQEl8qw.woff2) format("woff2");\n  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;\n}\n/* latin-ext */\n@font-face {\n  font-family: "Poppins";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2) format("woff2");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: "Poppins";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2) format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,\n    U+2215, U+FEFF, U+FFFD;\n}\n\n/* latin-ext */\n@font-face {\n  font-family: "DM Sans";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/dmsans/v6/rP2Hp2ywxg089UriCZ2IHTWEBlwu8Q.woff2) format("woff2");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: "DM Sans";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/dmsans/v6/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2) format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,\n    U+2215, U+FEFF, U+FFFD;\n}\n\n/* Modal */\n#w3a-modal {\n  --bg1: #0f1222;\n  --bg2: #24262e;\n  --text-color1: #d3d3d4;\n  --text-color2: #ffffff;\n\n  --text-header: "Poppins", Helvetica, sans-serif;\n  --text-body: "DM Sans", Helvetica, sans-serif;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  padding: 15px;\n  background: rgba(33, 33, 33, 0.46);\n  color: var(--text-color1);\n  font-family: var(--text-body);\n}\n\n#w3a-modal.w3a-modal--hidden {\n  display: none;\n}\n\n#w3a-modal p,\n#w3a-modal form,\n#w3a-modal button {\n  margin: 0;\n  padding: 0;\n}\n\n#w3a-modal .w3a-modal__inner {\n  width: 100%;\n  max-width: 375px;\n  overflow: hidden;\n  border-radius: 6px;\n  position: relative;\n  max-height: 95%;\n  overflow-y: auto;\n  opacity: 0;\n  transition: 200ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transform-origin: center center;\n  min-height: 350px;\n}\n\n#w3a-modal .w3a-modal__inner.w3a-modal__inner--active {\n  opacity: 1;\n  transition: 200ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transform-origin: center center;\n}\n\n#w3a-modal .w3a-modal__header {\n  padding: 25px 34px;\n  background: var(--bg1);\n  box-shadow: 0px 4px 28px rgba(3, 100, 255, 0.05);\n  position: relative;\n}\n#w3a-modal .w3a-modal__content {\n  padding: 30px 34px;\n  background: var(--bg2);\n}\n#w3a-modal .w3a-modal__footer {\n  padding: 16px 34px;\n  background: var(--bg1);\n}\n\n/* SPINNER */\n/* Loader */\n#w3a-modal .w3a-modal__loader {\n  background: var(--bg2);\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n}\n\n#w3a-modal .w3a-modal__loader.w3a-modal__loader--hidden {\n  display: none;\n}\n\n#w3a-modal .w3a-modal__loader-content {\n  text-align: center;\n  margin-bottom: 80px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n#w3a-modal .w3a-modal__loader-info {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0 30px;\n}\n\n#w3a-modal .w3a-spinner-label {\n  margin-top: 10px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #0364ff;\n}\n\n#w3a-modal .w3a-spinner-message {\n  margin-top: 10px;\n  font-size: 16px;\n}\n#w3a-modal .w3a-spinner-message:first-letter {\n  text-transform: capitalize;\n}\n#w3a-modal .w3a-spinner-message.w3a-spinner-message--error {\n  color: #fb4a61;\n}\n\n#w3a-modal button.w3a-logout {\n  background: none;\n  border: 0;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 30px;\n  cursor: pointer;\n  margin-top: 20px;\n  color: #0364ff;\n}\n\n#w3a-modal .w3a-spinner-power {\n  margin-top: auto;\n  font-size: 12px;\n  line-height: 1.2em;\n  color: #b7b8bd;\n}\n#w3a-modal .w3a-spinner-power > img {\n  height: 32px;\n  width: auto;\n  display: inline;\n}\n\n#w3a-modal .w3a-spinner {\n  display: inline-block;\n  position: relative;\n  background-color: #0364ff;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  background: conic-gradient(transparent, #0364ff);\n  animation: rotate 1s linear infinite;\n}\n\n#w3a-modal .w3a-spinner__mask,\n#w3a-modal .w3a-spinner__head {\n  content: "";\n  position: absolute;\n  border-radius: 50%;\n}\n\n#w3a-modal .w3a-spinner__mask {\n  width: 50px;\n  height: 50px;\n  top: 5px;\n  left: 5px;\n  background-color: var(--bg2);\n}\n\n#w3a-modal .w3a-spinner__head {\n  height: 5px;\n  width: 5px;\n  background-color: #0364ff;\n  top: 0;\n  left: 26px;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotateZ(0);\n  }\n  to {\n    transform: rotateZ(360deg);\n  }\n}\n\n\n/* Header */\n#w3a-modal .w3a-header {\n  display: flex;\n  color: var(--text-color2);\n  align-items: center;\n}\n#w3a-modal .w3a-header__logo {\n  height: auto;\n  width: 40px;\n  margin-right: 16px;\n}\n#w3a-modal .w3a-header__title {\n  font-family: var(--text-header);\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 1.5em;\n}\n#w3a-modal p.w3a-header__subtitle {\n  font-size: 14px;\n  line-height: 1.5em;\n  font-weight: 400;\n}\n#w3a-modal button.w3a-header__button {\n  cursor: pointer;\n  position: absolute;\n  background: none;\n  padding: 0;\n  border: 0;\n  top: 20px;\n  right: 26px;\n}\n\n/* BODY */\n#w3a-modal .w3a-group {\n  margin-bottom: 24px;\n}\n#w3a-modal .w3a-group:last-child {\n  margin-bottom: 0;\n}\n\n#w3a-modal .w3a-group.w3a-group--hidden,\n#w3a-modal .w3a-group.w3a-group--social-hidden,\n#w3a-modal .w3a-group.w3a-group--email-hidden,\n#w3a-modal .w3a-group.w3a-group--ext-wallet-hidden {\n  display: none;\n}\n\n#w3a-modal .w3a-group:not(.w3a-group--hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--social-hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--email-hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--ext-wallet-hidden):not(:last-child) {\n  border-bottom: 0.5px solid #5c6c7f;\n  padding-bottom: 24px;\n}\n\n#w3a-modal div.w3a-group__title {\n  font-family: var(--text-header);\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.5em;\n  margin-bottom: 8px;\n}\n\n/* Adapter List */\n#w3a-modal ul.w3a-adapter-list {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  margin: 0;\n  gap: 16px;\n  overflow-y: hidden;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n  max-height: 500px;\n  transition: max-height 0.4s ease-in;\n}\n\n#w3a-modal ul.w3a-adapter-list.w3a-adapter-list--shrink {\n  max-height: 48px;\n  transition: max-height 0.4s ease-out;\n}\n\n#w3a-modal ul.w3a-adapter-list.w3a-adapter-list--hidden {\n  display: none;\n}\n\n#w3a-modal li.w3a-adapter-item {\n  list-style: none;\n  margin-bottom: 30px;\n}\n\n#w3a-modal .w3a-adapter-item--hide {\n  display: none;\n}\n\n#w3a-modal .w3a-adapter-item__label {\n  font-size: 12px;\n  color: #5c6c7f;\n  text-align: center;\n  margin: 8px 0 0 !important;\n  text-transform: capitalize;\n  position: absolute;\n  transform: translate(-6px);\n  width: 60px;\n}\n\n/* Buttons */\n#w3a-modal button.w3a-button {\n  background-color: #2f3136;\n  border: 1px solid #404145;\n  box-sizing: border-box;\n  box-shadow: 2px 2px 12px rgba(3, 100, 255, 0.05);\n  border-radius: 24px;\n  height: 48px;\n  width: 100%;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--text-body);\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--text-color2);\n  cursor: pointer;\n}\n\n#w3a-modal button.w3a-button:hover {\n  background: #595857;\n}\n\n#w3a-modal button.w3a-button:active {\n  background: #6f717a;\n}\n\n#w3a-modal button.w3a-button:disabled {\n  background: #27282d;\n  color: #6f717a;\n}\n\n#w3a-modal button.w3a-button:focus-visible {\n  outline: 1px solid #daf0ff;\n  outline-offset: -1px;\n}\n\n#w3a-modal button.w3a-button--icon {\n  width: 48px;\n}\n\n#w3a-modal button.w3a-button--left {\n  justify-content: start;\n  padding: 8px 16px;\n}\n\n#w3a-modal button.w3a-button--left > img {\n  height: 30px;\n  width: auto;\n}\n\n#w3a-modal button.w3a-button--left > div.w3a-button__name {\n  max-width: 180px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-transform: capitalize;\n}\n\n#w3a-modal button.w3a-button--left > div.w3a-button__note {\n  margin-left: 8px;\n  color: #b7b8bd;\n  margin-left: auto;\n}\n\n#w3a-modal .w3a-button__image {\n  max-width: 100%;\n  max-height: 100%;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;\n}\n\n#w3a-modal button.w3a-button.w3a-button--rotate .w3a-button__image {\n  transform: rotate(180deg);\n}\n\n#w3a-modal .w3a-button--left .w3a-button__image {\n  margin-right: 12px;\n}\n\n#w3a-modal button.w3a-button-expand {\n  height: unset;\n  width: auto;\n  margin-left: auto;\n  font-size: 12px;\n  margin-top: 16px;\n  display: flex;\n  border: 8px;\n  color: var(--text-color2);\n  align-items: center;\n  cursor: pointer;\n  border-radius: 12px;\n  cursor: pointer;\n  padding: 0 10px 0 8px;\n  background: transparent;\n}\n\n#w3a-modal button.w3a-button-expand svg {\n  width: 12px;\n  height: auto;\n  margin-right: 4px;\n}\n\n#w3a-modal .w3a-external-toggle {\n  display: block;\n}\n\n#w3a-modal .w3a-external-toggle.w3a-external-toggle--hidden {\n  display: none;\n}\n\n#w3a-modal .w3a-external-container {\n  display: block;\n  margin-bottom: 34px;\n}\n\n#w3a-modal .w3a-external-container.w3a-external-container--hidden {\n  display: none;\n}\n\n#w3a-modal .w3a-external-group {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n\n#w3a-modal .w3a-external-group__left {\n  flex-grow: 1;\n}\n\n#w3a-modal button.w3a-external-back {\n  background: none;\n  border: 0;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 30px;\n  cursor: pointer;\n  color: var(--text-color1);\n}\n\n#w3a-modal .w3a-external-back:focus-visible {\n  outline: 1px solid #daf0ff;\n}\n\n#w3a-modal .w3a-external-back .w3a-group__title {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n\n#w3a-modal .w3a-external-loader {\n  display: flex;\n  justify-content: center;\n}\n\n#w3a-modal .w3a-wallet-connect {\n  display: block;\n  text-align: center;\n  margin-bottom: 16px;\n}\n\n#w3a-modal .w3a-wallet-connect.w3a-wallet-connect--hidden {\n  display: none;\n}\n\n#w3a-modal .w3a-wallet-connect__container {\n  background: #ffffff;\n  border-radius: 10px;\n  color: var(--text-color1);\n  font-size: 10px;\n  width: fit-content;\n  margin: auto;\n  min-width: 250px;\n  padding: 16px 12px;\n}\n\n#w3a-modal .w3a-wallet-connect__container-desktop,\n#w3a-modal .w3a-wallet-connect__container-android {\n  margin: auto;\n}\n\n#w3a-modal .w3a-wallet-connect__container-btn-group {\n  display: flex;\n  gap: 18px;\n}\n\n#w3a-modal .w3a-wallet-connect__container-ios {\n  display: flex;\n  grid-gap: 30px 20px;\n  padding: 0 0 28px;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n}\n\n#w3a-modal .w3a-wallet-connect-qr {\n  margin: 16px 16px;\n  padding: inherit;\n}\n\n#w3a-modal .w3a-wallet-connect__container-android a {\n  text-decoration: none;\n}\n\n#w3a-modal .w3a-wallet-connect__container-android .w3a-button {\n  background-color: rgb(64, 153, 255) !important;\n  color: #ffffff !important;\n  height: auto;\n  font-size: 14px;\n  padding: 8px 16px;\n  width: auto;\n  margin: auto;\n}\n\n#w3a-modal .w3a-wallet-connect__logo > img {\n  text-align: center;\n  width: 115px;\n  margin-bottom: 16px;\n}\n\n/* Text Field */\n#w3a-modal .w3a-text-field {\n  background: #393938;\n  border: 1px solid #27282d;\n  box-sizing: border-box;\n  box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.4);\n  border-radius: 24px;\n  padding: 0 28px;\n  height: 48px;\n  width: 100%;\n  font-family: var(--text-body);\n  font-size: 16px;\n  color: var(--text-color2);\n  margin-bottom: 16px;\n}\n\n#w3a-modal .w3a-text-field:active {\n  background: #0f1222;\n}\n\n#w3a-modal .w3a-text-field:focus-visible {\n  outline: 1px solid #daf0ff;\n  outline-offset: -1px;\n}\n\n/* Footer Components */\n#w3a-modal .w3a-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 10px;\n  line-height: 150%;\n  color: var(--text-color2);\n}\n\n#w3a-modal .w3a-footer__links {\n  padding: 0;\n  margin: 0;\n}\n\n#w3a-modal .w3a-footer__links a {\n  color: var(--text-color1);\n  text-decoration: none;\n}\n\n#w3a-modal .w3a-footer__links a:focus-visible {\n  outline: 1px solid #daf0ff;\n}\n\n#w3a-modal .w3a-footer__links span {\n  margin: 0 2px;\n}\n\n#w3a-modal .w3a-footer__secured {\n  text-align: right;\n  color: #b7b8bd;\n}\n#w3a-modal .w3a-footer__secured > img {\n  height: 14px;\n  width: auto;\n}\n\n/* Loader Bridge */\n#w3a-modal .w3a-modal__loader-bridge {\n  display: flex;\n  margin-bottom: 14px;\n}\n\n#w3a-modal .w3a-modal__loader-bridge-message span {\n  text-transform: capitalize;\n}\n\n#w3a-modal .w3a-modal__loader-app-logo {\n  display: flex;\n  padding: 8px;\n}\n\n#w3a-modal .w3a-modal__loader-app-logo img {\n  width: 64px;\n  height: auto;\n}\n\n#w3a-modal .w3a-modal__loader-adapter img {\n  width: 84px;\n  height: auto;\n}\n\n#w3a-modal .w3a-modal__connector {\n  display: flex;\n  align-items: center;\n}\n\n.w3a-modal__connector-beat {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.w3a-modal__connector-beat div {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #808080;\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n\n.w3a-modal__connector-beat div:nth-child(1) {\n  left: 8px;\n  animation: beat1 2.4s infinite;\n}\n\n.w3a-modal__connector-beat div:nth-child(2) {\n  left: 8px;\n  animation: beat2 2.4s infinite;\n}\n\n.w3a-modal__connector-beat div:nth-child(3) {\n  left: 8px;\n  animation: beat3 2.4s infinite;\n}\n\n.w3a-modal__connector-beat div:nth-child(4) {\n  left: 32px;\n  animation: beat4 2.4s infinite;\n}\n\n.w3a-modal__connector-beat div:nth-child(5) {\n  left: 56px;\n  animation: beat5 2.4s infinite;\n}\n\n@keyframes beat1 {\n  0% {\n    transform: scale(0);\n  }\n\n  25% {\n    transform: scale(0);\n  }\n\n  50% {\n    transform: scale(1);\n  }\n\n  75% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(0);\n  }\n}\n\n@keyframes beat2 {\n  0% {\n    transform: scale(0);\n  }\n\n  25% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: translate(24px, 0);\n  }\n\n  75% {\n    transform: translate(0, 0);\n  }\n\n  100% {\n    transform: translate(0, 0) scale(0);\n  }\n}\n\n@keyframes beat3 {\n  0% {\n    transform: translate(0, 0);\n  }\n\n  25% {\n    transform: translate(24px, 0);\n  }\n\n  50% {\n    transform: translate(48px, 0);\n  }\n\n  75% {\n    transform: translate(24px, 0);\n  }\n\n  100% {\n    transform: translate(0, 0);\n  }\n}\n\n@keyframes beat4 {\n  0% {\n    transform: translate(0, 0);\n  }\n\n  25% {\n    transform: translate(24px, 0);\n  }\n\n  50% {\n    transform: translate(24px, 0) scale(0);\n  }\n\n  75% {\n    transform: translate(24px, 0) scale(1);\n  }\n\n  100% {\n    transform: translate(0, 0);\n  }\n}\n\n@keyframes beat5 {\n  0% {\n    transform: scale(1);\n  }\n\n  25% {\n    transform: scale(0);\n  }\n\n  50% {\n    transform: scale(0);\n  }\n\n  75% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n/* LIGHT MODE */\n#w3a-modal.w3a-modal--light {\n  --bg1: #ffffff;\n  --bg2: #f9f9fb;\n  --text-color1: #a2a5b5;\n  --text-color2: #5c6c7f;\n}\n\n#w3a-modal .w3a-group:not(.w3a-group--hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--social-hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--email-hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--ext-wallet-hidden):not(:last-child) {\n  border-bottom: 0.5px solid #b7b8bd;\n  padding-bottom: 24px;\n}\n\n#w3a-modal.w3a-modal--light button.w3a-button {\n  background-color: #ffffff;\n  border: 1px solid #f3f3f4;\n  box-shadow: none;\n  color: #595857;\n}\n\n#w3a-modal.w3a-modal--light button.w3a-button:disabled {\n  color: #b7b8bd;\n}\n\n#w3a-modal.w3a-modal--light button.w3a-button:focus-visible {\n  outline: 1px solid #0f1222;\n}\n\n#w3a-modal.w3a-modal--light .w3a-text-field {\n  background: #ffffff;\n  border: 1px solid #ffffff;\n  box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.1);\n  color: #b7b8bd;\n}\n\n#w3a-modal.w3a-modal--light .w3a-text-field:active {\n  color: #0f1222;\n  outline: 1px solid #0f1222;\n}\n\n#w3a-modal.w3a-modal--light .w3a-text-field:focus-visible {\n  color: #0f1222;\n  outline: 1px solid #0f1222;\n}\n\n#w3a-modal.w3a-modal--light .w3a-footer__links a:focus-visible {\n  outline: 1px solid #0f1222;\n}\n\n#w3a-modal.w3a-modal--light .w3a-external-back:focus-visible {\n  outline: 1px solid #0f1222;\n}\n');const L=(0,w.createContext)({isDark:!0});const j={"arrow-left":{image:"data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20id%3D%2224%20%2F%20arrows%20%2F%20circle-arrow-left%22%3E%3Cpath%20id%3D%22icon%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12%2023C5.92487%2023%201%2018.0751%201%2012C1%205.92487%205.92487%201%2012%201C18.0751%201%2023%205.92487%2023%2012C23%2018.0751%2018.0751%2023%2012%2023ZM12%2021C16.9706%2021%2021%2016.9706%2021%2012C21%207.02944%2016.9706%203%2012%203C7.02944%203%203%207.02944%203%2012C3%2016.9706%207.02944%2021%2012%2021ZM17%2011H10.4142L12.7071%208.70711L11.2929%207.29289L6.58579%2012L11.2929%2016.7071L12.7071%2015.2929L10.4142%2013H17V11Z%22%20fill%3D%22%23D3D3D4%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"},close:{image:"data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M13.4142%2012L19.7782%2018.364L18.364%2019.7782L12%2013.4143L5.63604%2019.7782L4.22183%2018.364L10.5858%2012L4.22183%205.63608L5.63604%204.22187L12%2010.5858L18.364%204.22187L19.7782%205.63608L13.4142%2012Z%22%20fill%3D%22%23DFDFDF%22%2F%3E%3C%2Fsvg%3E"},"expand-light":{image:"data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12.0991%2015.6785C11.694%2016.1072%2011.0119%2016.1072%2010.6068%2015.6785L4.98828%209.73136C4.36988%209.0768%204.83393%208%205.73441%208L16.9715%208C17.872%208%2018.336%209.0768%2017.7176%209.73136L12.0991%2015.6785Z%22%20fill%3D%22%23FFFFFF%22%2F%3E%3C%2Fsvg%3E"},expand:{image:"data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12.0991%2015.6785C11.694%2016.1072%2011.0119%2016.1072%2010.6068%2015.6785L4.98828%209.73136C4.36988%209.0768%204.83393%208%205.73441%208L16.9715%208C17.872%208%2018.336%209.0768%2017.7176%209.73136L12.0991%2015.6785Z%22%20fill%3D%22%23B7B8BD%22%2F%3E%3C%2Fsvg%3E"}};function D(t){const{iconName:e,height:r="auto",width:n="auto"}=t;return j[e]?(0,p.jsx)("img",{height:r,width:n,src:j[e].image,alt:e}):null}function F(t){const{imageId:e,height:r="auto",width:n="auto"}=t;return(0,p.jsx)("img",{src:"https://images.web3auth.io/".concat(e,".svg"),height:r,width:n,alt:e})}const U="https://images.web3auth.io/web3auth-logo.svg",q=(0,p.jsx)(D,{iconName:"close"});function z(t){const{adapter:e,appLogo:r=U,message:i,modalStatus:o,onClose:a}=t,s=(0,p.jsx)(F,{imageId:"web3auth"}),u=(0,p.jsx)(F,{imageId:"login-".concat(e)});return(0,w.useEffect)((()=>{n.cM.debug("adapter loader re-rendering"),o===O&&setTimeout((()=>{a()}),3e3)}),[o,a]),o!==I?(0,p.jsxs)("div",{className:"w3ajs-modal-loader w3a-modal__loader",children:[(0,p.jsxs)("div",{className:"w3a-modal__loader-content",children:[(0,p.jsxs)("div",{className:"w3a-modal__loader-info",children:[o===T&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"w3a-modal__loader-bridge",children:[(0,p.jsx)("div",{className:"w3a-modal__loader-app-logo",children:(0,p.jsx)("img",{src:r,alt:""})}),(0,p.jsx)("div",{className:"w3a-modal__connector",children:(0,p.jsxs)("div",{className:"w3a-modal__connector-beat",children:[(0,p.jsx)("div",{}),(0,p.jsx)("div",{}),(0,p.jsx)("div",{}),(0,p.jsx)("div",{}),(0,p.jsx)("div",{})]})}),(0,p.jsx)("div",{className:"w3a-modal__loader-adapter",children:u})]}),(0,p.jsx)("div",{children:(0,p.jsxs)("div",{className:"w3a-modal__loader-bridge-message",children:["Verify on your ",(0,p.jsx)("span",{children:e})," account to continue"]})})]}),o===n.MP.CONNECTED&&(0,p.jsx)("div",{className:"w3ajs-modal-loader__message w3a-spinner-message",children:i}),o===n.MP.ERRORED&&(0,p.jsx)("div",{className:"w3ajs-modal-loader__message w3a-spinner-message w3a-spinner-message--error",children:i})]}),(0,p.jsxs)("div",{className:"w3a-spinner-power",children:[(0,p.jsx)("div",{children:"Self-custodial login by"}),s]})]}),(o===n.MP.CONNECTED||o===n.MP.ERRORED)&&(0,p.jsx)("button",{type:"button",className:"w3a-header__button w3ajs-loader-close-btn",onClick:a,children:q})]}):null}const $=(0,p.jsx)(D,{iconName:"close"});function W(t){const{message:e,modalStatus:r,label:i,onClose:o,canEmit:a=!0}=t,s=(0,p.jsx)(F,{imageId:"web3auth"});return(0,w.useEffect)((()=>{n.cM.debug("loader re-rendering"),r===O&&a&&setTimeout((()=>{o()}),3e3)}),[a,r,o]),r!==I?(0,p.jsxs)("div",{className:"w3ajs-modal-loader w3a-modal__loader",children:[(0,p.jsxs)("div",{className:"w3a-modal__loader-content",children:[(0,p.jsxs)("div",{className:"w3a-modal__loader-info",children:[r===T&&(0,p.jsxs)("div",{className:"w3ajs-modal-loader__spinner w3a-spinner",children:[(0,p.jsx)("div",{className:"w3a-spinner__head"}),(0,p.jsx)("div",{className:"w3a-spinner__mask"})]}),(0,p.jsx)("div",{className:"w3ajs-modal-loader__label w3a-spinner-label",children:i}),r===n.MP.CONNECTED&&(0,p.jsx)("div",{className:"w3ajs-modal-loader__message w3a-spinner-message",children:e}),r===n.MP.ERRORED&&(0,p.jsx)("div",{className:"w3ajs-modal-loader__message w3a-spinner-message w3a-spinner-message--error",children:e})]}),(0,p.jsxs)("div",{className:"w3a-spinner-power",children:[(0,p.jsx)("div",{children:"Self-custodial login by"}),s]})]}),(r===n.MP.CONNECTED||r===n.MP.ERRORED)&&(0,p.jsx)("button",{type:"button",className:"w3a-header__button w3ajs-loader-close-btn",onClick:o,children:$})]}):null}const H=(0,p.jsx)(F,{imageId:"wallet-connect",width:"114px"});function K(t){const e=encodeURIComponent(t.uri);return t.universalLink?"".concat(t.universalLink,"/wc?uri=").concat(e):t.deepLink?"".concat(t.deepLink).concat(t.deepLink.endsWith(":")?"//":"/","wc?uri=").concat(e):""}function G(t,e,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"mobile";const i=t[n].universal||"",o=t[n].native||"";return{name:t.name||"",logo:t.logo||"",universalLink:i,deepLink:o,href:r===M().OS_MAP.iOS?K({uri:e,universalLink:i,deepLink:o}):e}}function V(t){const{walletConnectUri:e,wcAdapters:r}=t,[n,i]=(0,w.useState)([]),o=(0,w.useMemo)((()=>{const t=M().getParser(window.navigator.userAgent);return{platform:t.getPlatformType(),os:t.getOSName()}}),[]);return(0,w.useEffect)((()=>{if(o.platform===M().PLATFORMS_MAP.mobile){const t=function(t,e,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"mobile";return Object.values(t).filter((t=>!!t[n].universal||!!t[n].native)).map((t=>G(t,e,r,n)))}(r,e,o.os,o.platform);i(t)}}),[r,o.os,o.platform,e]),(0,p.jsx)("div",{className:"w3ajs-wallet-connect w3a-wallet-connect",children:(0,p.jsxs)("div",{className:"w3ajs-wallet-connect__container w3a-wallet-connect__container".concat(o.os===M().OS_MAP.Android?" w3a-wallet-connect__container--android":""),children:[(0,p.jsx)("div",{className:"w3a-wallet-connect__logo",children:H}),o.platform===M().PLATFORMS_MAP.desktop?(0,p.jsxs)("div",{className:"w3a-wallet-connect__container-desktop",children:[(0,p.jsx)("div",{children:"Scan QR code with a WalletConnect-compatible wallet"}),(0,p.jsx)("div",{className:"w3ajs-wallet-connect-qr w3a-wallet-connect-qr",children:(0,p.jsx)(x.Z,{size:200,value:e})})]}):(0,p.jsx)("div",{className:"w3a-wallet-connect__container-btn-group",children:n.map((t=>o.os===M().OS_MAP.iOS?(0,p.jsx)("div",{className:"w3a-wallet-connect__container-ios",children:(0,p.jsxs)("a",{href:t.href,rel:"noopener noreferrer",target:"_blank",children:[(0,p.jsx)("button",{type:"button",className:"w3a-button w3a-button--icon",children:(0,p.jsx)("img",{src:t.logo,height:"auto",width:"auto",alt:"login-".concat(t.name)})}),(0,p.jsx)("p",{className:"w3a-adapter-item__label",children:t.name})]},t.name)}):(0,p.jsx)("div",{className:"w3a-wallet-connect__container-android",children:(0,p.jsx)("a",{href:t.href,rel:"noopener noreferrer",target:"_blank",children:(0,p.jsx)("button",{type:"button",className:"w3a-button",children:"Connect"})},t.name)})))})]})})}var Z=(0,w.memo)(V);function J(t){const{hideExternalWallets:e,handleExternalWalletClick:r,config:i={},walletConnectUri:o,showBackButton:a,modalStatus:s,wcAdapters:u}=t,[l,h]=(0,w.useState)(!1);return(0,w.useEffect)((()=>{var t;n.cM.debug("loaded external wallets",i,o);!1!==((null===(t=i[n.rW.WALLET_CONNECT_V1])||void 0===t?void 0:t.showOnModal)||!1)&&!o?r({adapter:n.rW.WALLET_CONNECT_V1}):Object.keys(i).length>0&&h(!0)}),[i,r,o]),(0,p.jsx)("div",{className:"w3ajs-external-wallet w3a-group",children:(0,p.jsxs)("div",{className:"w3a-external-container w3ajs-external-container",children:[a&&(0,p.jsxs)("button",{type:"button",className:"w3a-external-back w3ajs-external-back",onClick:e,children:[(0,p.jsx)(D,{iconName:"arrow-left"}),(0,p.jsx)("div",{className:"w3a-group__title",children:"Back"})]}),!l&&(0,p.jsx)(W,{modalStatus:T,canEmit:!1}),Object.keys(i).map((t=>t===n.rW.WALLET_CONNECT_V1||t===n.rW.WALLET_CONNECT_V2?(0,p.jsx)(Z,{walletConnectUri:o,wcAdapters:u},t):null)),s===I&&(0,p.jsx)("ul",{className:"w3a-adapter-list w3ajs-wallet-adapters",children:Object.keys(i).map((t=>{var e;if(t===n.rW.WALLET_CONNECT_V1||t===n.rW.WALLET_CONNECT_V2)return null;const o=(0,p.jsx)(F,{imageId:"login-".concat(t)});return(0,p.jsxs)("li",{className:"w3a-adapter-item",children:[(0,p.jsx)("button",{type:"button",onClick:()=>r({adapter:t}),className:"w3a-button w3a-button--icon",children:o}),(0,p.jsx)("p",{className:"w3a-adapter-item__label",children:(null===(e=i[t])||void 0===e?void 0:e.label)||t})]},t)}))})]})})}function Y(t){const{version:e}=t,r=(0,p.jsx)(F,{imageId:"web3auth",height:"14px",width:"auto"});return(0,p.jsx)("div",{className:"w3a-modal__footer",children:(0,p.jsxs)("div",{className:"w3a-footer",children:[(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{className:"w3a-footer__links",children:[(0,p.jsx)("a",{href:"https://docs.web3auth.io/legal/terms-and-conditions",children:"Terms of use"}),(0,p.jsx)("span",{children:"|"}),(0,p.jsx)("a",{href:"https://docs.web3auth.io/legal/privacy-policy",children:"Privacy policy"})]}),(0,p.jsx)("p",{children:e})]}),(0,p.jsxs)("div",{className:"w3a-footer__secured",children:[(0,p.jsx)("div",{children:"Self-custodial login by"}),r]})]})})}var X=(0,w.memo)(Y);const Q="https://images.web3auth.io/web3auth-logo.svg";function tt(t){const{isDark:e}=(0,w.useContext)(L),{appLogo:r=Q,onClose:n}=t,i=(0,p.jsx)(F,{imageId:"web3auth".concat(e?"-light":"")});return(0,p.jsxs)("div",{className:"w3a-modal__header",children:[(0,p.jsxs)("div",{className:"w3a-header",children:[r?(0,p.jsx)("img",{className:"w3a-header__logo",src:r,alt:""}):i,(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{className:"w3a-header__title",children:"Sign in"}),(0,p.jsx)("p",{className:"w3a-header__subtitle",children:"Select one of the following to continue"})]})]}),(0,p.jsx)("button",{type:"button",onClick:n,className:"w3a-header__button w3ajs-close-btn",children:(0,p.jsx)(D,{iconName:"close"})})]})}const et=(0,w.memo)(tt,((t,e)=>t.appLogo!==e.appLogo));function rt(t){const{handleSocialLoginClick:e,adapter:r}=t,[n,i]=(0,w.useState)(!1);return(0,p.jsxs)("div",{className:"w3ajs-email-passwordless w3a-group w3a-group--email",children:[(0,p.jsx)("div",{className:"w3a-group__title",children:"EMAIL"}),(0,p.jsxs)("form",{className:"w3ajs-email-passwordless-form",onSubmit:t=>(t=>{t.preventDefault();const n=t.target[0].value;n&&e({adapter:r,loginParams:{loginProvider:"email_passwordless",login_hint:n}})})(t),children:[(0,p.jsx)("input",{className:"w3a-text-field",type:"email",name:"email",required:!0,placeholder:"Email",onChange:t=>(t=>{const e=t.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);i(!!e)})(t)}),(0,p.jsx)("button",{disabled:!n,className:"w3a-button",type:"submit",children:"Continue with Email"})]})]})}et.displayName="Header";const nt=["apple","github"];function it(t){const[e,r]=(0,w.useState)(!1),{socialLoginsConfig:n={loginMethods:{},loginMethodsOrder:[],adapter:""},handleSocialLoginClick:i}=t,{isDark:o}=(0,w.useContext)(L),[a,s]=(0,w.useState)(!1);(0,w.useEffect)((()=>{const t=Object.keys(n.loginMethods).filter((t=>n.loginMethods[t].showOnModal));r(t.length>5)}),[n.loginMethods]);const u=E()("w3a-adapter-list","w3ajs-socials-adapters",a?"":" w3a-adapter-list--shrink"),l=E()("w3a-button-expand","w3ajs-button-expand",a?"w3a-button--rotate":""),h=a?"View less options":"View more options";return(0,p.jsxs)("div",{className:"w3ajs-social-logins w3a-group",children:[(0,p.jsx)("div",{className:"w3a-group__title",children:"CONTINUE WITH"}),(0,p.jsx)("ul",{className:u,children:Object.keys(n.loginMethods).map((t=>{const e=(0,p.jsx)(F,{imageId:"login-".concat(t).concat(o&&nt.includes(t)?"-light":"")});if(!1===n.loginMethods[t].showOnModal||"webauthn"===t||"jwt"===t||"email_passwordless"===t)return null;const r=n.loginMethodsOrder.indexOf(t)+1||Object.keys(n.loginMethods).length+1;return(0,p.jsx)("li",{className:"w3a-adapter-item",style:{order:r},children:(0,p.jsx)("button",{type:"button",onClick:()=>i({adapter:n.adapter,loginParams:{loginProvider:t}}),className:"w3a-button w3a-button--icon",children:e})},t)}))}),e&&(0,p.jsxs)("button",{type:"button",className:l,style:{display:"flex"},onClick:()=>{s(!a)},children:[(0,p.jsx)(D,{iconName:"expand".concat(o?"-light":"")}),(0,p.jsx)("span",{className:"w3ajs-button-expand-text",children:h})]})]})}function ot(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function at(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ot(Object(r),!0).forEach((function(e){(0,i.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ot(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function st(t){var e,r,i;const{isDark:o}=(0,w.useContext)(L),[a,s]=(0,w.useState)(["w3a-modal__inner"]),[u,l]=(0,w.useState)({externalWalletsVisibility:!1,status:I,hasExternalWallets:!1,externalWalletsInitialized:!1,modalVisibility:!1,modalVisibilityDelayed:!1,postLoadingMessage:"",walletConnectUri:"",socialLoginsConfig:{loginMethods:{},loginMethodsOrder:[],adapter:""},externalWalletsConfig:{},detailedLoaderAdapter:"",showExternalWalletsOnly:!1,wcAdapters:[]}),{stateListener:h,appLogo:f,version:c,handleSocialLoginClick:m,handleExternalWalletClick:g,handleShowExternalWallets:y,closeModal:_}=t,M=[n.rW.PHANTOM,n.rW.METAMASK];(0,w.useEffect)((()=>{h.emit("MOUNTED"),h.on("STATE_UPDATED",(t=>{n.cM.debug("state updated",t),l((e=>v()(b()(e,t))))}))}),[h]),(0,w.useEffect)((()=>{let t;return u.modalVisibility?(l((t=>at(at({},t),{},{modalVisibilityDelayed:u.modalVisibility}))),t=window.setTimeout((()=>{s(["w3a-modal__inner",u.modalVisibility?"w3a-modal__inner--active":""])}),100)):(s(["w3a-modal__inner",u.modalVisibility?"w3a-modal__inner--active":""]),t=window.setTimeout((()=>{l((t=>at(at({},t),{},{modalVisibilityDelayed:u.modalVisibility})))}),250)),()=>{clearTimeout(t)}}),[u.modalVisibility]);const x=(0,w.useCallback)((()=>{u.status===O&&_(),u.status===N&&l((t=>at(at({},t),{},{modalVisibility:!0,status:I})))}),[_,u.status]),S=t=>{l((t=>at(at({},t),{},{detailedLoaderAdapter:""}))),m(t)},E=(0,p.jsx)("div",{className:"w3ajs-external-wallet w3a-group",children:(0,p.jsxs)("div",{className:"w3a-external-toggle w3ajs-external-toggle",children:[(0,p.jsx)("div",{className:"w3a-group__title",children:"EXTERNAL WALLET"}),(0,p.jsx)("button",{type:"button",className:"w3a-button w3ajs-external-toggle__button",onClick:()=>{y(u.externalWalletsInitialized),l((t=>at(at({},t),{},{externalWalletsVisibility:!0})))},children:"Connect with Wallet"})]})}),k=(0,w.useMemo)((()=>{var t,e;if(u.showExternalWalletsOnly)return!1;if(0===Object.keys((null===(t=u.socialLoginsConfig)||void 0===t?void 0:t.loginMethods)||{}).length)return!1;return!!Object.entries((null===(e=u.socialLoginsConfig)||void 0===e?void 0:e.loginMethods)||{}).some((t=>{let[e,r]=t;return e!==d.hG.EMAIL_PASSWORDLESS&&!1!==r.showOnModal}))}),[u.showExternalWalletsOnly,null===(e=u.socialLoginsConfig)||void 0===e?void 0:e.loginMethods]);n.cM.info("modal state",u,k);const A=(0,w.useMemo)((()=>{var t,e;return null===(t=u.socialLoginsConfig)||void 0===t||null===(e=t.loginMethods[d.hG.EMAIL_PASSWORDLESS])||void 0===e?void 0:e.showOnModal}),[null===(r=u.socialLoginsConfig)||void 0===r?void 0:r.loginMethods]),R="w3a-modal ".concat(o?"":" w3a-modal--light");return u.modalVisibilityDelayed&&(0,p.jsx)("div",{id:"w3a-modal",className:R,style:{display:"flex"},children:(0,p.jsxs)("div",{className:a.join(" "),children:[(0,p.jsx)(et,{onClose:_,appLogo:f}),u.status!==I?(0,p.jsx)("div",{className:"w3a-modal__content w3ajs-content",children:u.detailedLoaderAdapter?(0,p.jsx)(z,{onClose:x,appLogo:f,modalStatus:u.status,message:u.postLoadingMessage,adapter:u.detailedLoaderAdapter}):(0,p.jsx)(W,{onClose:x,modalStatus:u.status,message:u.postLoadingMessage})}):(0,p.jsx)("div",{className:"w3a-modal__content w3ajs-content",children:!k&&!A||u.externalWalletsVisibility?(0,p.jsx)(J,{modalStatus:u.status,showBackButton:k,handleExternalWalletClick:t=>(t=>{const{adapter:e}=t;M.includes(e)?l((t=>at(at({},t),{},{detailedLoaderAdapter:e}))):e!==n.rW.WALLET_CONNECT_V1&&l((t=>at(at({},t),{},{detailedLoaderAdapter:""}))),g(t)})(t),walletConnectUri:u.walletConnectUri,wcAdapters:u.wcAdapters,config:u.externalWalletsConfig,hideExternalWallets:()=>l((t=>at(at({},t),{},{externalWalletsVisibility:!1})))}):(0,p.jsxs)(p.Fragment,{children:[k?(0,p.jsx)(it,{handleSocialLoginClick:t=>S(t),socialLoginsConfig:u.socialLoginsConfig}):null,A&&(0,p.jsx)(rt,{adapter:null===(i=u.socialLoginsConfig)||void 0===i?void 0:i.adapter,handleSocialLoginClick:t=>S(t)}),u.hasExternalWallets&&E]})}),(0,p.jsx)(X,{version:c})]})})}n.cM.enableAll();class ut extends o.Ue{constructor(t){let{appLogo:e,version:r,adapterListener:a,theme:s="light",displayErrorsOnModal:u=!0}=t;super(),(0,i.Z)(this,"appLogo",void 0),(0,i.Z)(this,"version",void 0),(0,i.Z)(this,"isDark",void 0),(0,i.Z)(this,"stateEmitter",void 0),(0,i.Z)(this,"displayErrorsOnModal",!0),(0,i.Z)(this,"initModal",(async()=>{const t={isDark:this.isDark};return new Promise((e=>{this.stateEmitter.once("MOUNTED",(()=>(n.cM.info("rendered"),this.setState({status:I}),e()))),(0,m.render)((0,p.jsx)(L.Provider,{value:t,children:(0,p.jsx)(st,{closeModal:this.closeModal,stateListener:this.stateEmitter,handleShowExternalWallets:t=>this.handleShowExternalWallets(t),handleExternalWalletClick:t=>this.handleExternalWalletClick(t),handleSocialLoginClick:t=>this.handleSocialLoginClick(t),appLogo:this.appLogo,version:this.version})}),function(){const t=document.createElement("section");return t.setAttribute("id","w3a-container"),document.body.appendChild(t),t}())}))})),(0,i.Z)(this,"addSocialLogins",((t,e,r)=>{this.setState({socialLoginsConfig:{adapter:t,loginMethods:e,loginMethodsOrder:r}}),n.cM.info("addSocialLogins",t,e,r)})),(0,i.Z)(this,"addWalletLogins",((t,e)=>{this.setState({externalWalletsConfig:t,externalWalletsInitialized:!0,showExternalWalletsOnly:!(null===e||void 0===e||!e.showExternalWalletsOnly),externalWalletsVisibility:!0})})),(0,i.Z)(this,"open",(()=>{this.setState({modalVisibility:!0}),this.emit(C,!0)})),(0,i.Z)(this,"closeModal",(()=>{this.setState({modalVisibility:!1,externalWalletsVisibility:!1}),this.emit(C,!1)})),(0,i.Z)(this,"initExternalWalletContainer",(()=>{this.setState({hasExternalWallets:!0})})),(0,i.Z)(this,"handleShowExternalWallets",(t=>{this.emit(A,{externalWalletsInitialized:t})})),(0,i.Z)(this,"handleExternalWalletClick",(t=>{n.cM.info("external wallet clicked",t);const{adapter:e}=t;this.emit(R,{adapter:e})})),(0,i.Z)(this,"handleSocialLoginClick",(t=>{n.cM.info("social login clicked",t);const{adapter:e,loginParams:r}=t;this.emit(R,{adapter:e,loginParams:{loginProvider:r.loginProvider,login_hint:r.login_hint}})})),(0,i.Z)(this,"setState",(t=>{this.stateEmitter.emit("STATE_UPDATED",t)})),(0,i.Z)(this,"updateWalletConnect",((t,e)=>{t&&this.setState({walletConnectUri:t,wcAdapters:e})})),(0,i.Z)(this,"handleAdapterData",(t=>{if(t.adapterName===n.rW.WALLET_CONNECT_V1){const e=t.data;this.updateWalletConnect(e.uri,e.extensionAdapters)}})),(0,i.Z)(this,"subscribeCoreEvents",(t=>{t.on(n.n2.CONNECTING,(t=>{n.cM.info("connecting with adapter",t),(null===t||void 0===t?void 0:t.adapter)!==n.rW.WALLET_CONNECT_V1&&(null===t||void 0===t?void 0:t.adapter)!==n.rW.WALLET_CONNECT_V2&&this.setState({status:T})})),t.on(n.n2.CONNECTED,(t=>{n.cM.debug("connected with adapter",t),t.reconnected?this.setState({status:O}):this.setState({status:O,modalVisibility:!0,postLoadingMessage:"You are connected with your account"})})),t.on(n.n2.ERRORED,(t=>{n.cM.error("error",t,t.message),5e3===t.code?this.displayErrorsOnModal?this.setState({modalVisibility:!0,postLoadingMessage:t.message||"Something went wrong!",status:N}):this.setState({modalVisibility:!1}):this.setState({modalVisibility:!0,status:I})})),t.on(n.n2.DISCONNECTED,(()=>{this.setState({status:I,externalWalletsVisibility:!1})})),t.on(n.n2.ADAPTER_DATA_UPDATED,(t=>{this.handleAdapterData(t)}))})),this.appLogo=e||"https://images.web3auth.io/web3auth-logo.svg",this.version=r,this.isDark="dark"===s,this.stateEmitter=new o.Ue,this.displayErrorsOnModal=u,this.subscribeCoreEvents(a)}}function lt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ht(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?lt(Object(r),!0).forEach((function(e){(0,i.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):lt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}B('/* devanagari */\n@font-face {\n    font-family: "Poppins";\n    font-style: normal;\n    font-weight: 600;\n    src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z11lFd2JQEl8qw.woff2) format("woff2");\n    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;\n}\n/* latin-ext */\n@font-face {\n    font-family: "Poppins";\n    font-style: normal;\n    font-weight: 600;\n    src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2) format("woff2");\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n    font-family: "Poppins";\n    font-style: normal;\n    font-weight: 600;\n    src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2) format("woff2");\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,\n        U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* latin-ext */\n@font-face {\n    font-family: "DM Sans";\n    font-style: normal;\n    font-weight: 400;\n    src: url(https://fonts.gstatic.com/s/dmsans/v6/rP2Hp2ywxg089UriCZ2IHTWEBlwu8Q.woff2) format("woff2");\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n    font-family: "DM Sans";\n    font-style: normal;\n    font-weight: 400;\n    src: url(https://fonts.gstatic.com/s/dmsans/v6/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2) format("woff2");\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,\n        U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* Modal */\n#w3a-network-modal {\n    --bg1: #ffffff;\n    --bg2: #f9f9fb;\n    --text-color1: #a2a5b5;\n    --text-color2: #5c6c7f;\n\n    --text-header: "Poppins", Helvetica, sans-serif;\n    --text-body: "DM Sans", Helvetica, sans-serif;\n\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    padding: 15px;\n    color: var(--text-color1);\n    font-family: var(--text-body);\n    background: black;\n}\n\n#w3a-network-modal button.w3a-button {\n    background-color: #ffffff;\n    border: 1px solid #f3f3f4;\n    box-shadow: none;\n    box-sizing: border-box;\n    border-radius: 24px;\n    height: 48px;\n    width: 100%;\n    padding: 8px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: var(--text-body);\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    color: #b7b8bd;\n    cursor: pointer;\n}\n\n#w3a-network-modal .w3a-switch-network {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: #f9f9fb;\n    box-sizing: border-box;\n    border-radius: 10px;\n    width: 375px;\n    padding: 20px;\n    font-family: var(--text-body);\n}\n\n#w3a-network-modal .w3a-switch-network__title {\n    font-family: var(--text-header);\n    font-size: 20px;\n    color: var(--text-color2);\n    margin-bottom: 16px;\n    text-align: center;\n}\n\n#w3a-network-modal .w3a-switch-network__link {\n    font-size: 12px;\n    color: #b7b8bd;\n    background-color: #fff;\n    height: 24px;\n    border-radius: 12px;\n    padding: 4px 16px;\n}\n\n#w3a-network-modal .w3a-switch-network__connect {\n    display: flex;\n    margin: 40px auto 0;\n}\n\n#w3a-network-modal .w3a-switch-network__connect > div {\n    text-align: center;\n    font-size: 10px;\n    color: var(--text-color2);\n}\n\n.w3a-switch-network__connect-divider {\n    margin-top: 20px;\n}\n\n#w3a-network-modal .w3a-switch-network__logo {\n    background: #ffffff;\n    box-shadow: 2px 2px 12px rgba(3, 100, 255, 0.05);\n    border-radius: 50%;\n    width: 58px;\n    height: 58px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto 6px;\n}\n\n#w3a-network-modal .w3a-switch-network__logo img {\n    width: 34px;\n    height: 34px;\n}\n\n#w3a-network-modal .w3a-switch-network__buttons {\n    display: flex;\n    column-gap: 16px;\n    width: 100%;\n    margin-top: 60px;\n}\n\n#w3a-network-modal .w3a-button.w3a-button--primary {\n    background-color: #0364ff;\n    color: #fff;\n}\n');const ft=function(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i={};if(t!==n.rW.OPENLOGIN)throw new Error("".concat(t," is not a valid adapter"));return k.forEach((t=>{const e=r[t]||{name:t,showOnMobile:!0,showOnModal:!0,showOnDesktop:!0};i[t]=ht({},e)})),n.cM.debug("OpenLogin login method ui config",i),i};const ct={chainNamespace:n.EN.SOLANA,adapters:{[n.hf.TORUS_SOLANA]:{label:"Torus Wallet",showOnModal:!0,showOnMobile:!0,showOnDesktop:!0},[n.hf.OPENLOGIN]:{label:"OpenLogin",showOnModal:!0,showOnMobile:!0,showOnDesktop:!0},[n.hf.PHANTOM]:{label:"Phantom",showOnModal:!0,showOnMobile:!0,showOnDesktop:!0}}},dt={chainNamespace:n.EN.EIP155,adapters:{[n.$z.TORUS_EVM]:{label:"Torus Wallet",showOnModal:!0,showOnMobile:!0,showOnDesktop:!0},[n.$z.METAMASK]:{label:"MetaMask",showOnModal:!0,showOnMobile:!0,showOnDesktop:!0},[n.$z.OPENLOGIN]:{label:"OpenLogin",showOnModal:!0,showOnMobile:!0,showOnDesktop:!0},[n.$z.WALLET_CONNECT_V1]:{label:"Wallet Connect",showOnModal:!0,showOnMobile:!0,showOnDesktop:!0}}},pt={chainNamespace:n.EN.SOLANA,adapters:{[n.hf.OPENLOGIN]:{label:"OpenLogin",showOnModal:!0,showOnMobile:!0,showOnDesktop:!0}}},mt={chainNamespace:n.EN.EIP155,adapters:{[n.$z.OPENLOGIN]:{label:"OpenLogin",showOnModal:!0,showOnMobile:!0,showOnDesktop:!0}}},gt={chainNamespace:n.EN.OTHER,adapters:{[n.$z.OPENLOGIN]:{label:"OpenLogin",showOnModal:!0,showOnMobile:!0,showOnDesktop:!0}}};function vt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function yt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?vt(Object(r),!0).forEach((function(e){(0,i.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):vt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function bt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function wt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?bt(Object(r),!0).forEach((function(e){(0,i.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):bt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}class _t extends c{constructor(t){var e,r;super(t),(0,i.Z)(this,"loginModal",void 0),(0,i.Z)(this,"options",void 0),(0,i.Z)(this,"modalConfig",dt),this.options=wt({},t);const o=this.options.chainConfig;if(o.chainNamespace===n.EN.SOLANA)"WALLET"===t.authMode?this.modalConfig=pt:this.modalConfig=ct;else if(o.chainNamespace===n.EN.EIP155)"WALLET"===t.authMode?this.modalConfig=mt:this.modalConfig=dt;else{if(o.chainNamespace!==n.EN.OTHER)throw new Error("Invalid chainNamespace provided: ".concat(o.chainNamespace));this.modalConfig=gt}this.loginModal=new ut({theme:null===(e=this.options.uiConfig)||void 0===e?void 0:e.theme,appLogo:(null===(r=this.options.uiConfig)||void 0===r?void 0:r.appLogo)||"",version:"",adapterListener:this,displayErrorsOnModal:this.options.displayErrorsOnModal}),this.subscribeToLoginModalEvents()}async initModal(t){super.checkInitRequirements(),await this.loginModal.initModal();const e=this.options.chainConfig,i=[...new Set([...Object.keys(this.modalConfig.adapters||{}),...Object.keys(this.walletAdapters)])],o=i.map((async i=>{var o,a,s,u;let l=(null===(o=this.modalConfig.adapters)||void 0===o?void 0:o[i])||{label:i,showOnModal:!0,showOnMobile:!0,showOnDesktop:!0};null!==t&&void 0!==t&&null!==(a=t.modalConfig)&&void 0!==a&&a[i]&&(l=wt(wt({},l),t.modalConfig[i])),this.modalConfig.adapters[i]=l;const h=this.walletAdapters[i];if(n.cM.debug("adapter config",i,null===(s=this.modalConfig.adapters)||void 0===s?void 0:s[i].showOnModal,h),!h&&null!==(u=this.modalConfig.adapters)&&void 0!==u&&u[i].showOnModal){const t=await(async t=>{const{name:e,customChainConfig:i,clientId:o}=t;if(!Object.values(n.EN).includes(i.chainNamespace))throw new Error("Invalid chainNamespace: ".concat(i.chainNamespace));const a=yt(yt({},(0,n.h2)(i.chainNamespace,null===i||void 0===i?void 0:i.chainId)),i||{});if(e===n.rW.TORUS_EVM){const{TorusWalletAdapter:t}=await Promise.all([r.e(593),r.e(579),r.e(978)]).then(r.bind(r,93579));return new t({chainConfig:a})}if(e===n.rW.TORUS_SOLANA){const{SolanaWalletAdapter:t}=await Promise.all([r.e(662),r.e(766),r.e(845),r.e(108),r.e(401),r.e(423),r.e(992)]).then(r.bind(r,94423));return new t({chainConfig:a})}if(e===n.rW.METAMASK){const{MetamaskAdapter:t}=await r.e(429).then(r.bind(r,94429));return new t({chainConfig:a})}if(e===n.rW.PHANTOM){const{PhantomAdapter:t}=await Promise.all([r.e(662),r.e(766),r.e(845),r.e(108),r.e(401),r.e(447)]).then(r.bind(r,42848));return new t({chainConfig:a})}if(e===n.rW.WALLET_CONNECT_V1){const{WalletConnectV1Adapter:t}=await Promise.all([r.e(662),r.e(482),r.e(845),r.e(62),r.e(411)]).then(r.bind(r,43840));return new t({chainConfig:a})}if(e===n.rW.OPENLOGIN){const{OpenloginAdapter:t,getOpenloginDefaultOptions:e}=await Promise.all([r.e(662),r.e(845),r.e(94)]).then(r.bind(r,86094)),n=e(i.chainNamespace,null===i||void 0===i?void 0:i.chainId);return new t(yt(yt({},n),{},{chainConfig:yt(yt({},n.chainConfig||{}),a),adapterSettings:yt(yt({},n.adapterSettings),{},{clientId:o})}))}throw new Error("Invalid wallet adapter name")})({name:i,customChainConfig:this.options.chainConfig,clientId:this.options.clientId});return this.walletAdapters[i]=t,i}if((null===h||void 0===h?void 0:h.type)===n.hN.IN_APP||(null===h||void 0===h?void 0:h.type)===n.hN.EXTERNAL||i===this.cachedAdapter){var f;if(null===(f=this.modalConfig.adapters)||void 0===f||!f[i].showOnModal)return;if(i===n.rW.OPENLOGIN?this.walletAdapters[i].setAdapterSettings({clientId:this.options.clientId,sessionTime:this.options.sessionTime}):this.walletAdapters[i].setAdapterSettings({sessionTime:this.options.sessionTime}),!h.chainConfigProxy){var c;const t=wt(wt({},(0,n.h2)(e.chainNamespace,null===(c=this.coreOptions.chainConfig)||void 0===c?void 0:c.chainId)),this.coreOptions.chainConfig);this.walletAdapters[i].setChainConfig(t)}return i}})),a=await Promise.all(o),s=Object.values(this.walletAdapters).some((t=>{var e;if(t.type!==n.hN.IN_APP)return!1;if(!0!==this.modalConfig.adapters[t.name].showOnModal)return!1;if(!this.modalConfig.adapters[t.name].loginMethods)return!0;const r=ft(t.name,this.walletAdapters[t.name],null===(e=this.modalConfig.adapters[t.name])||void 0===e?void 0:e.loginMethods);return!!Object.values(r).some((t=>t.showOnModal))}));n.cM.debug(s,this.walletAdapters,"hasInAppWallets");const u=a.map((async t=>{if(t)try{const e=this.walletAdapters[t];if(this.cachedAdapter!==t&&e.type===n.hN.EXTERNAL)return;this.subscribeToAdapterEvents(e),e.status===n.MP.NOT_READY&&await e.init({autoConnect:this.cachedAdapter===t}),e.type===n.hN.IN_APP&&this.initializeInAppWallet(t)}catch(e){n.cM.error(e,"error while initializing adapter")}}));this.status=n.MP.READY,await Promise.all(u);const l=i.some((t=>{var e,r;return(null===(e=this.walletAdapters[t])||void 0===e?void 0:e.type)===n.hN.EXTERNAL&&(null===(r=this.modalConfig.adapters)||void 0===r?void 0:r[t].showOnModal)}));l&&this.loginModal.initExternalWalletContainer(),!s&&l&&await this.initExternalWalletAdapters(!1,{showExternalWalletsOnly:!0})}async connect(){return this.provider?this.provider:(this.loginModal.open(),new Promise(((t,e)=>{this.once(n.n2.CONNECTED,(()=>t(this.provider))),this.once(n.n2.ERRORED,(t=>e(t)))})))}async initExternalWalletAdapters(t,e){if(t)return;const r={},i={},o=Object.keys(this.walletAdapters).map((async t=>{try{const e=this.walletAdapters[t];if((null===e||void 0===e?void 0:e.type)===n.hN.EXTERNAL){if(n.cM.debug("init external wallet",this.cachedAdapter,t),this.subscribeToAdapterEvents(e),this.cachedAdapter===t)return;return e.status===n.MP.NOT_READY&&await e.init({autoConnect:this.cachedAdapter===t}),r[t]=this.modalConfig.adapters[t],i[t]=e.adapterData||{},t}}catch(e){n.cM.error(e,"error while initializing adapter")}})),a=await Promise.all(o),s={};a.forEach((t=>{t&&(s[t]=r[t])})),this.loginModal.addWalletLogins(s,{showExternalWalletsOnly:!(null===e||void 0===e||!e.showExternalWalletsOnly)})}initializeInAppWallet(t){var e,r;(n.cM.info("adapterInitResults",t),this.walletAdapters[t].type===n.hN.IN_APP)&&this.loginModal.addSocialLogins(t,ft(t,this.walletAdapters[t],null===(e=this.modalConfig.adapters[t])||void 0===e?void 0:e.loginMethods),(null===(r=this.options.uiConfig)||void 0===r?void 0:r.loginMethodsOrder)||k)}subscribeToLoginModalEvents(){this.loginModal.on(R,(async t=>{try{await this.connectTo(t.adapter,t.loginParams)}catch(e){n.cM.error("Error while connecting to adapter: ".concat(t.adapter),e)}})),this.loginModal.on(A,(async t=>{await this.initExternalWalletAdapters(t.externalWalletsInitialized)})),this.loginModal.on(P,(async()=>{try{await this.logout()}catch(t){n.cM.error("Error while disconnecting",t)}})),this.loginModal.on(C,(async t=>{var e;n.cM.debug("is login modal visible",t),this.emit(C,t);const r=null===(e=this.walletAdapters[n.rW.WALLET_CONNECT_V1])||void 0===e?void 0:e.status;if(t&&r===n.MP.READY)try{this.walletAdapters[n.rW.WALLET_CONNECT_V1].connect()}catch(i){n.cM.error("Error while disconnecting to wallet connect in core",i)}}))}}},75204:function(t,e,r){"use strict";r.d(e,{B:function(){return lu},C:function(){return Ge},E:function(){return md},G:function(){return gd},a:function(){return hr},c:function(){return lr},g:function(){return fr},j:function(){return Za},s:function(){return ur}});var n,i=r(67294);!function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"}(n||(n={}));function o(t){var e=t.pathname,r=void 0===e?"/":e,n=t.search,i=void 0===n?"":n,o=t.hash,a=void 0===o?"":o;return i&&"?"!==i&&(r+="?"===i.charAt(0)?i:"?"+i),a&&"#"!==a&&(r+="#"===a.charAt(0)?a:"#"+a),r}function a(t){var e={};if(t){var r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));var n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}const s=(0,i.createContext)(null);const u=(0,i.createContext)(null);const l=(0,i.createContext)({outlet:null,matches:[]});function h(t,e){if(!t)throw new Error(e)}function f(t,e,r){let n,i="string"===typeof t?a(t):t,o=""===t||""===i.pathname?"/":i.pathname;if(null==o)n=r;else{let t=e.length-1;if(o.startsWith("..")){let e=o.split("/");for(;".."===e[0];)e.shift(),t-=1;i.pathname=e.join("/")}n=t>=0?e[t]:"/"}let s=function(t,e){void 0===e&&(e="/");let{pathname:r,search:n="",hash:i=""}="string"===typeof t?a(t):t,o=r?r.startsWith("/")?r:function(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach((t=>{".."===t?r.length>1&&r.pop():"."!==t&&r.push(t)})),r.length>1?r.join("/"):"/"}(r,e):e;return{pathname:o,search:d(n),hash:p(i)}}(i,n);return o&&"/"!==o&&o.endsWith("/")&&!s.pathname.endsWith("/")&&(s.pathname+="/"),s}const c=t=>t.join("/").replace(/\/\/+/g,"/"),d=t=>t&&"?"!==t?t.startsWith("?")?t:"?"+t:"",p=t=>t&&"#"!==t?t.startsWith("#")?t:"#"+t:"";function m(t){g()||h(!1);let{basename:e,navigator:r}=(0,i.useContext)(s),{hash:n,pathname:o,search:u}=b(t),l=o;if("/"!==e){let r=function(t){return""===t||""===t.pathname?"/":"string"===typeof t?a(t).pathname:t.pathname}(t),n=null!=r&&r.endsWith("/");l="/"===o?e+(n?"/":""):c([e,o])}return r.createHref({pathname:l,search:u,hash:n})}function g(){return null!=(0,i.useContext)(u)}function v(){return g()||h(!1),(0,i.useContext)(u).location}function y(){g()||h(!1);let{basename:t,navigator:e}=(0,i.useContext)(s),{matches:r}=(0,i.useContext)(l),{pathname:n}=v(),o=JSON.stringify(r.map((t=>t.pathnameBase))),a=(0,i.useRef)(!1);return(0,i.useEffect)((()=>{a.current=!0})),(0,i.useCallback)((function(r,i){if(void 0===i&&(i={}),!a.current)return;if("number"===typeof r)return void e.go(r);let s=f(r,JSON.parse(o),n);"/"!==t&&(s.pathname=c([t,s.pathname])),(i.replace?e.replace:e.push)(s,i.state)}),[t,e,o,n])}function b(t){let{matches:e}=(0,i.useContext)(l),{pathname:r}=v(),n=JSON.stringify(e.map((t=>t.pathnameBase)));return(0,i.useMemo)((()=>f(t,JSON.parse(n),r)),[t,n,r])}function w(){return w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},w.apply(this,arguments)}function _(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}const M=["onClick","reloadDocument","replace","state","target","to"];const x=(0,i.forwardRef)((function(t,e){let{onClick:r,reloadDocument:n,replace:a=!1,state:s,target:u,to:l}=t,h=_(t,M),f=m(l),c=function(t,e){let{target:r,replace:n,state:a}=void 0===e?{}:e,s=y(),u=v(),l=b(t);return(0,i.useCallback)((e=>{if(0===e.button&&(!r||"_self"===r)&&!function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(e)){e.preventDefault();let r=!!n||o(u)===o(l);s(t,{replace:r,state:a})}}),[u,s,l,n,a,r,t])}(l,{replace:a,state:s,target:u});return(0,i.createElement)("a",w({},h,{href:f,onClick:function(t){r&&r(t),t.defaultPrevented||n||c(t)},ref:e,target:u}))}));var S=r(34155),E={exports:{}},k={},A=i,R=Symbol.for("react.element"),P=Symbol.for("react.fragment"),C=Object.prototype.hasOwnProperty,I=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function T(t,e,r){var n,i={},o=null,a=null;for(n in void 0!==r&&(o=""+r),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(a=e.ref),e)C.call(e,n)&&!O.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===i[n]&&(i[n]=e[n]);return{$$typeof:R,type:t,key:o,ref:a,props:i,_owner:I.current}}k.Fragment=P,k.jsx=T,k.jsxs=T,E.exports=k;const N=E.exports.jsx,B=E.exports.jsxs,L=({title:t,titleId:e,...r})=>B("svg",{"aria-hidden":"true","data-testid":"test-icon",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-labelledby":e,...r,children:[t?N("title",{id:e,children:t}):null,N("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.707 5.293a1 1 0 0 1 0 1.414l-11 11a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L9 15.586 19.293 5.293a1 1 0 0 1 1.414 0z"})]}),j=({title:t,titleId:e,...r})=>B("svg",{width:"1em",height:"1em",viewBox:"0 0 18 18",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","data-testid":"test-icon","aria-hidden":"true","aria-labelledby":e,...r,children:[t?N("title",{id:e,children:t}):null,N("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18Zm4.84-13.346.947.948c.165.165.165.494 0 .7l-3.563 3.522-3.563 3.521a.474.474 0 0 1-.7 0L3.213 9.556c-.165-.165-.165-.494 0-.7l.947-.906a.474.474 0 0 1 .7 0l2.472 2.471 5.808-5.767c.205-.205.535-.205.7 0Z"})]}),D=({title:t,titleId:e,...r})=>B("svg",{"aria-hidden":"true","data-testid":"test-icon",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-labelledby":e,...r,children:[t?N("title",{id:e,children:t}):null,N("path",{d:"M13.306 14.501H8.292a.837.837 0 0 1-.846-.83c0-.453.383-.829.846-.829h5.023c.472 0 .846.376.846.83a.845.845 0 0 1-.855.829zm0-3.335H8.292a.837.837 0 0 1-.846-.829c0-.454.383-.83.846-.83h5.023c.472 0 .846.376.846.83 0 .454-.383.83-.855.83zm0 6.67H8.292a.837.837 0 0 1-.846-.83c0-.453.383-.829.846-.829h5.023c.472 0 .846.376.846.83 0 .453-.383.829-.855.829z"}),N("path",{d:"M14.99 22H6.61C5.175 22 4 20.848 4 19.442V7.892c0-1.414 1.176-2.557 2.61-2.557h8.38c1.442 0 2.608 1.152 2.608 2.558v11.55c0 1.405-1.166 2.557-2.609 2.557zM6.61 7.002a.903.903 0 0 0-.91.89v11.55c0 .489.41.89.91.89h8.38a.903.903 0 0 0 .907-.89V7.892c0-.488-.41-.89-.908-.89H6.61z"}),N("path",{d:"M18.39 18.665h-1.638a.837.837 0 0 1-.846-.83c0-.453.383-.829.846-.829h1.639a.903.903 0 0 0 .908-.89V4.558c0-.489-.41-.89-.908-.89h-8.38a.903.903 0 0 0-.908.89v1.606c0 .463-.383.83-.846.83-.464 0-.855-.367-.855-.83V4.558C7.402 3.152 8.568 2 10.01 2h8.38C19.833 2 21 3.152 21 4.558v11.55c0 1.414-1.175 2.557-2.61 2.557z"})]}),F=({title:t,titleId:e,...r})=>B("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",width:"1em",height:"1em",viewBox:"0 0 24 24","data-testid":"test-icon","aria-hidden":"true","aria-labelledby":e,...r,children:[t?N("title",{id:e,children:t}):null,N("path",{d:"m23 20.168-8.185-8.187L23 3.807 20.168 1l-8.182 8.179L3.81 1 1 3.81l8.186 8.196L1 20.19 3.81 23l8.203-8.192L20.193 23z"})]}),U=({title:t,titleId:e,...r})=>B("svg",{"aria-hidden":"true","data-testid":"test-icon",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-labelledby":e,...r,children:[t?N("title",{id:e,children:t}):null,N("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm-.006-6.895c.835 0 1.524.69 1.524 1.524a1.51 1.51 0 0 1-1.524 1.524c-.87 0-1.524-.653-1.524-1.524a1.51 1.51 0 0 1 1.524-1.524zm-1.197-1.198-.254-4.935c0-.254.181-.472.435-.472h1.996c.254 0 .435.218.435.472l-.254 4.935c0 .218-.217.4-.435.4h-1.488c-.218 0-.435-.182-.435-.4z"})]}),q=({title:t,titleId:e,...r})=>B("svg",{"aria-hidden":"true","data-testid":"test-icon",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-labelledby":e,...r,children:[t?N("title",{id:e,children:t}):null,N("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm.006 6.895c-.835 0-1.524-.69-1.524-1.524 0-.871.69-1.524 1.524-1.524.87 0 1.524.653 1.524 1.524a1.51 1.51 0 0 1-1.524 1.524zm1.197 1.198v4.935c0 .254-.181.472-.435.472H11.28c-.254 0-.435-.218-.435-.472v-4.935c0-.218.217-.4.435-.4h1.488c.218 0 .435.182.435.4z"})]}),z=({title:t,titleId:e,...r})=>B("svg",{"aria-hidden":"true","data-testid":"test-icon",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-labelledby":e,...r,children:[t?N("title",{id:e,children:t}):null,N("path",{d:"m11.646 16.646-4.792-4.792A.5.5 0 0 1 7.207 11h9.586a.5.5 0 0 1 .353.854l-4.792 4.792a.5.5 0 0 1-.708 0z"})]}),$=({title:t,titleId:e,...r})=>B("svg",{"aria-hidden":"true","data-testid":"test-icon",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-labelledby":e,...r,children:[t?N("title",{id:e,children:t}):null,N("path",{d:"m11.646 9.354-4.792 4.792a.5.5 0 0 0 .353.854h9.586a.5.5 0 0 0 .353-.854l-4.792-4.792a.5.5 0 0 0-.708 0z"})]});var W,H={exports:{}},K={},G=Symbol.for("react.element"),V=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),Q=Symbol.for("react.context"),tt=Symbol.for("react.server_context"),et=Symbol.for("react.forward_ref"),rt=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),it=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),at=Symbol.for("react.offscreen");function st(t){if("object"===typeof t&&null!==t){var e=t.$$typeof;switch(e){case G:switch(t=t.type){case Z:case Y:case J:case rt:case nt:return t;default:switch(t=t&&t.$$typeof){case tt:case Q:case et:case ot:case it:case X:return t;default:return e}}case V:return e}}}function ut(t){function e(t,n,u,l,c){for(var d,p,m,g,w,M=0,x=0,S=0,E=0,k=0,O=0,N=m=d=0,L=0,j=0,D=0,F=0,U=u.length,q=U-1,z="",$="",W="",H="";L<U;){if(p=u.charCodeAt(L),L===q&&x+E+S+M!==0&&(0!==x&&(p=47===x?10:47),E=S=M=0,U++,q++),x+E+S+M===0){if(L===q&&(0<j&&(z=z.replace(f,"")),0<z.trim().length)){switch(p){case 32:case 9:case 59:case 13:case 10:break;default:z+=u.charAt(L)}p=59}switch(p){case 123:for(d=(z=z.trim()).charCodeAt(0),m=1,F=++L;L<U;){switch(p=u.charCodeAt(L)){case 123:m++;break;case 125:m--;break;case 47:switch(p=u.charCodeAt(L+1)){case 42:case 47:t:{for(N=L+1;N<q;++N)switch(u.charCodeAt(N)){case 47:if(42===p&&42===u.charCodeAt(N-1)&&L+2!==N){L=N+1;break t}break;case 10:if(47===p){L=N+1;break t}}L=N}}break;case 91:p++;case 40:p++;case 34:case 39:for(;L++<q&&u.charCodeAt(L)!==p;);}if(0===m)break;L++}if(m=u.substring(F,L),0===d&&(d=(z=z.replace(h,"").trim()).charCodeAt(0)),64===d){switch(0<j&&(z=z.replace(f,"")),p=z.charCodeAt(1)){case 100:case 109:case 115:case 45:j=n;break;default:j=I}if(F=(m=e(n,j,m,p,c+1)).length,0<T&&(w=s(3,m,j=r(I,z,D),n,R,A,F,p,c,l),z=j.join(""),void 0!==w&&0===(F=(m=w.trim()).length)&&(p=0,m="")),0<F)switch(p){case 115:z=z.replace(_,a);case 100:case 109:case 45:m=z+"{"+m+"}";break;case 107:m=(z=z.replace(v,"$1 $2"))+"{"+m+"}",m=1===C||2===C&&o("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=z+m,112===l&&($+=m,m="")}else m=""}else m=e(n,r(n,z,D),m,l,c+1);W+=m,m=D=j=N=d=0,z="",p=u.charCodeAt(++L);break;case 125:case 59:if(1<(F=(z=(0<j?z.replace(f,""):z).trim()).length))switch(0===N&&(d=z.charCodeAt(0),45===d||96<d&&123>d)&&(F=(z=z.replace(" ",":")).length),0<T&&void 0!==(w=s(1,z,n,t,R,A,$.length,l,c,l))&&0===(F=(z=w.trim()).length)&&(z="\0\0"),d=z.charCodeAt(0),p=z.charCodeAt(1),d){case 0:break;case 64:if(105===p||99===p){H+=z+u.charAt(L);break}default:58!==z.charCodeAt(F-1)&&($+=i(z,d,p,z.charCodeAt(2)))}D=j=N=d=0,z="",p=u.charCodeAt(++L)}}switch(p){case 13:case 10:47===x?x=0:1+d===0&&107!==l&&0<z.length&&(j=1,z+="\0"),0<T*B&&s(0,z,n,t,R,A,$.length,l,c,l),A=1,R++;break;case 59:case 125:if(x+E+S+M===0){A++;break}default:switch(A++,g=u.charAt(L),p){case 9:case 32:if(E+M+x===0)switch(k){case 44:case 58:case 9:case 32:g="";break;default:32!==p&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:E+x+M===0&&(j=D=1,g="\f"+g);break;case 108:if(E+x+M+P===0&&0<N)switch(L-N){case 2:112===k&&58===u.charCodeAt(L-3)&&(P=k);case 8:111===O&&(P=O)}break;case 58:E+x+M===0&&(N=L);break;case 44:x+S+E+M===0&&(j=1,g+="\r");break;case 34:case 39:0===x&&(E=E===p?0:0===E?p:E);break;case 91:E+x+S===0&&M++;break;case 93:E+x+S===0&&M--;break;case 41:E+x+M===0&&S--;break;case 40:if(E+x+M===0){if(0===d)if(2*k+3*O===533);else d=1;S++}break;case 64:x+S+E+M+N+m===0&&(m=1);break;case 42:case 47:if(!(0<E+M+S))switch(x){case 0:switch(2*p+3*u.charCodeAt(L+1)){case 235:x=47;break;case 220:F=L,x=42}break;case 42:47===p&&42===k&&F+2!==L&&(33===u.charCodeAt(F+2)&&($+=u.substring(F,L+1)),g="",x=0)}}0===x&&(z+=g)}O=k,k=p,L++}if(0<(F=$.length)){if(j=n,0<T&&(void 0!==(w=s(2,$,j,t,R,A,F,l,c,l))&&0===($=w).length))return H+$+W;if($=j.join(",")+"{"+$+"}",C*P!==0){switch(2!==C||o($,2)||(P=0),P){case 111:$=$.replace(b,":-moz-$1")+$;break;case 112:$=$.replace(y,"::-webkit-input-$1")+$.replace(y,"::-moz-$1")+$.replace(y,":-ms-input-$1")+$}P=0}}return H+$+W}function r(t,e,r){var i=e.trim().split(m);e=i;var o=i.length,a=t.length;switch(a){case 0:case 1:var s=0;for(t=0===a?"":t[0]+" ";s<o;++s)e[s]=n(t,e[s],r).trim();break;default:var u=s=0;for(e=[];s<o;++s)for(var l=0;l<a;++l)e[u++]=n(t[l]+" ",i[s],r).trim()}return e}function n(t,e,r){var n=e.charCodeAt(0);switch(33>n&&(n=(e=e.trim()).charCodeAt(0)),n){case 38:return e.replace(g,"$1"+t.trim());case 58:return t.trim()+e.replace(g,"$1"+t.trim());default:if(0<1*r&&0<e.indexOf("\f"))return e.replace(g,(58===t.charCodeAt(0)?"":"$1")+t.trim())}return t+e}function i(t,e,r,n){var a=t+";",s=2*e+3*r+4*n;if(944===s){t=a.indexOf(":",9)+1;var u=a.substring(t,a.length-1).trim();return u=a.substring(0,t).trim()+u+";",1===C||2===C&&o(u,1)?"-webkit-"+u+u:u}if(0===C||2===C&&!o(a,1))return a;switch(s){case 1015:return 97===a.charCodeAt(10)?"-webkit-"+a+a:a;case 951:return 116===a.charCodeAt(3)?"-webkit-"+a+a:a;case 963:return 110===a.charCodeAt(5)?"-webkit-"+a+a:a;case 1009:if(100!==a.charCodeAt(4))break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(45===a.charCodeAt(8))return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(k,"$1-webkit-$2")+a;break;case 932:if(45===a.charCodeAt(4))switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(99!==a.charCodeAt(8))break;return"-webkit-box-pack"+(u=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+a+"-ms-flex-pack"+u+a;case 1005:return d.test(a)?a.replace(c,":-webkit-")+a.replace(c,":-moz-")+a:a;case 1e3:switch(e=(u=a.substring(13).trim()).indexOf("-")+1,u.charCodeAt(0)+u.charCodeAt(e)){case 226:u=a.replace(w,"tb");break;case 232:u=a.replace(w,"tb-rl");break;case 220:u=a.replace(w,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+u+a;case 1017:if(-1===a.indexOf("sticky",9))break;case 975:switch(e=(a=t).length-10,s=(u=(33===a.charCodeAt(e)?a.substring(0,e):a).substring(t.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|u.charCodeAt(7))){case 203:if(111>u.charCodeAt(8))break;case 115:a=a.replace(u,"-webkit-"+u)+";"+a;break;case 207:case 102:a=a.replace(u,"-webkit-"+(102<s?"inline-":"")+"box")+";"+a.replace(u,"-webkit-"+u)+";"+a.replace(u,"-ms-"+u+"box")+";"+a}return a+";";case 938:if(45===a.charCodeAt(5))switch(a.charCodeAt(6)){case 105:return u=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+u+"-ms-flex-"+u+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(x,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(x,"")+a}break;case 973:case 989:if(45!==a.charCodeAt(3)||122===a.charCodeAt(4))break;case 931:case 953:if(!0===E.test(t))return 115===(u=t.substring(t.indexOf(":")+1)).charCodeAt(0)?i(t.replace("stretch","fill-available"),e,r,n).replace(":fill-available",":stretch"):a.replace(u,"-webkit-"+u)+a.replace(u,"-moz-"+u.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(102===a.charCodeAt(5)?"-ms-"+a:"")+a,r+n===211&&105===a.charCodeAt(13)&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+a}return a}function o(t,e){var r=t.indexOf(1===e?":":"{"),n=t.substring(0,3!==e?r:10);return r=t.substring(r+1,t.length-1),N(2!==e?n:n.replace(S,"$1"),r,e)}function a(t,e){var r=i(e,e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2));return r!==e+";"?r.replace(M," or ($1)").substring(4):"("+e+")"}function s(t,e,r,n,i,o,a,s,u,h){for(var f,c=0,d=e;c<T;++c)switch(f=O[c].call(l,t,d,r,n,i,o,a,s,u,h)){case void 0:case!1:case!0:case null:break;default:d=f}if(d!==e)return d}function u(t){return void 0!==(t=t.prefix)&&(N=null,t?"function"!==typeof t?C=1:(C=2,N=t):C=0),u}function l(t,r){var n=t;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<T){var i=s(-1,r,n,n,R,A,0,0,0,0);void 0!==i&&"string"===typeof i&&(r=i)}var o=e(I,n,r,0,0);return 0<T&&(void 0!==(i=s(-2,o,n,n,R,A,o.length,0,0,0))&&(o=i)),"",P=0,A=R=1,o}var h=/^\0+/g,f=/[\0\r\f]/g,c=/: */g,d=/zoo|gra/,p=/([,: ])(transform)/g,m=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,b=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,_=/\(\s*(.*)\s*\)/g,M=/([\s\S]*?);/g,x=/-self|flex-/g,S=/[^]*?(:[rp][el]a[\w-]+)[^]*/,E=/stretch|:\s*\w+\-(?:conte|avail)/,k=/([^-])(image-set\()/,A=1,R=1,P=0,C=1,I=[],O=[],T=0,N=null,B=0;return l.use=function t(e){switch(e){case void 0:case null:T=O.length=0;break;default:if("function"===typeof e)O[T++]=e;else if("object"===typeof e)for(var r=0,n=e.length;r<n;++r)t(e[r]);else B=0|!!e}return t},l.set=u,void 0!==t&&u(t),l}W=Symbol.for("react.module.reference"),K.ContextConsumer=Q,K.ContextProvider=X,K.Element=G,K.ForwardRef=et,K.Fragment=Z,K.Lazy=ot,K.Memo=it,K.Portal=V,K.Profiler=Y,K.StrictMode=J,K.Suspense=rt,K.SuspenseList=nt,K.isAsyncMode=function(){return!1},K.isConcurrentMode=function(){return!1},K.isContextConsumer=function(t){return st(t)===Q},K.isContextProvider=function(t){return st(t)===X},K.isElement=function(t){return"object"===typeof t&&null!==t&&t.$$typeof===G},K.isForwardRef=function(t){return st(t)===et},K.isFragment=function(t){return st(t)===Z},K.isLazy=function(t){return st(t)===ot},K.isMemo=function(t){return st(t)===it},K.isPortal=function(t){return st(t)===V},K.isProfiler=function(t){return st(t)===Y},K.isStrictMode=function(t){return st(t)===J},K.isSuspense=function(t){return st(t)===rt},K.isSuspenseList=function(t){return st(t)===nt},K.isValidElementType=function(t){return"string"===typeof t||"function"===typeof t||t===Z||t===Y||t===J||t===rt||t===nt||t===at||"object"===typeof t&&null!==t&&(t.$$typeof===ot||t.$$typeof===it||t.$$typeof===X||t.$$typeof===Q||t.$$typeof===et||t.$$typeof===W||void 0!==t.getModuleId)},K.typeOf=st,H.exports=K;var lt={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ht(t){var e=Object.create(null);return function(r){return void 0===e[r]&&(e[r]=t(r)),e[r]}}var ft=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ct=ht((function(t){return ft.test(t)||111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)<91})),dt={exports:{}},pt={},mt="function"===typeof Symbol&&Symbol.for,gt=mt?Symbol.for("react.element"):60103,vt=mt?Symbol.for("react.portal"):60106,yt=mt?Symbol.for("react.fragment"):60107,bt=mt?Symbol.for("react.strict_mode"):60108,wt=mt?Symbol.for("react.profiler"):60114,_t=mt?Symbol.for("react.provider"):60109,Mt=mt?Symbol.for("react.context"):60110,xt=mt?Symbol.for("react.async_mode"):60111,St=mt?Symbol.for("react.concurrent_mode"):60111,Et=mt?Symbol.for("react.forward_ref"):60112,kt=mt?Symbol.for("react.suspense"):60113,At=mt?Symbol.for("react.suspense_list"):60120,Rt=mt?Symbol.for("react.memo"):60115,Pt=mt?Symbol.for("react.lazy"):60116,Ct=mt?Symbol.for("react.block"):60121,It=mt?Symbol.for("react.fundamental"):60117,Ot=mt?Symbol.for("react.responder"):60118,Tt=mt?Symbol.for("react.scope"):60119;function Nt(t){if("object"===typeof t&&null!==t){var e=t.$$typeof;switch(e){case gt:switch(t=t.type){case xt:case St:case yt:case wt:case bt:case kt:return t;default:switch(t=t&&t.$$typeof){case Mt:case Et:case Pt:case Rt:case _t:return t;default:return e}}case vt:return e}}}function Bt(t){return Nt(t)===St}pt.AsyncMode=xt,pt.ConcurrentMode=St,pt.ContextConsumer=Mt,pt.ContextProvider=_t,pt.Element=gt,pt.ForwardRef=Et,pt.Fragment=yt,pt.Lazy=Pt,pt.Memo=Rt,pt.Portal=vt,pt.Profiler=wt,pt.StrictMode=bt,pt.Suspense=kt,pt.isAsyncMode=function(t){return Bt(t)||Nt(t)===xt},pt.isConcurrentMode=Bt,pt.isContextConsumer=function(t){return Nt(t)===Mt},pt.isContextProvider=function(t){return Nt(t)===_t},pt.isElement=function(t){return"object"===typeof t&&null!==t&&t.$$typeof===gt},pt.isForwardRef=function(t){return Nt(t)===Et},pt.isFragment=function(t){return Nt(t)===yt},pt.isLazy=function(t){return Nt(t)===Pt},pt.isMemo=function(t){return Nt(t)===Rt},pt.isPortal=function(t){return Nt(t)===vt},pt.isProfiler=function(t){return Nt(t)===wt},pt.isStrictMode=function(t){return Nt(t)===bt},pt.isSuspense=function(t){return Nt(t)===kt},pt.isValidElementType=function(t){return"string"===typeof t||"function"===typeof t||t===yt||t===St||t===wt||t===bt||t===kt||t===At||"object"===typeof t&&null!==t&&(t.$$typeof===Pt||t.$$typeof===Rt||t.$$typeof===_t||t.$$typeof===Mt||t.$$typeof===Et||t.$$typeof===It||t.$$typeof===Ot||t.$$typeof===Tt||t.$$typeof===Ct)},pt.typeOf=Nt,dt.exports=pt;var Lt=dt.exports,jt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Dt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ft={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ut={};function qt(t){return Lt.isMemo(t)?Ft:Ut[t.$$typeof]||jt}Ut[Lt.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ut[Lt.Memo]=Ft;var zt=Object.defineProperty,$t=Object.getOwnPropertyNames,Wt=Object.getOwnPropertySymbols,Ht=Object.getOwnPropertyDescriptor,Kt=Object.getPrototypeOf,Gt=Object.prototype;var Vt=function t(e,r,n){if("string"!==typeof r){if(Gt){var i=Kt(r);i&&i!==Gt&&t(e,i,n)}var o=$t(r);Wt&&(o=o.concat(Wt(r)));for(var a=qt(e),s=qt(r),u=0;u<o.length;++u){var l=o[u];if(!Dt[l]&&(!n||!n[l])&&(!s||!s[l])&&(!a||!a[l])){var h=Ht(r,l);try{zt(e,l,h)}catch(f){}}}}return e};function Zt(){return(Zt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var Jt=function(t,e){for(var r=[t[0]],n=0,i=e.length;n<i;n+=1)r.push(e[n],t[n+1]);return r},Yt=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!H.exports.typeOf(t)},Xt=Object.freeze([]),Qt=Object.freeze({});function te(t){return"function"==typeof t}function ee(t){return t.displayName||t.name||"Component"}function re(t){return t&&"string"==typeof t.styledComponentId}var ne="undefined"!=typeof S&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ie="undefined"!=typeof window&&"HTMLElement"in window,oe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof S&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof S&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY));function ae(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var se=function(){function t(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var e=t.prototype;return e.indexOfGroup=function(t){for(var e=0,r=0;r<t;r++)e+=this.groupSizes[r];return e},e.insertRules=function(t,e){if(t>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;t>=i;)(i<<=1)<0&&ae(16,""+t);this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=n;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),s=0,u=e.length;s<u;s++)this.tag.insertRule(a,e[s])&&(this.groupSizes[t]++,a++)},e.clearGroup=function(t){if(t<this.length){var e=this.groupSizes[t],r=this.indexOfGroup(t),n=r+e;this.groupSizes[t]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},e.getGroup=function(t){var e="";if(t>=this.length||0===this.groupSizes[t])return e;for(var r=this.groupSizes[t],n=this.indexOfGroup(t),i=n+r,o=n;o<i;o++)e+=this.tag.getRule(o)+"/*!sc*/\n";return e},t}(),ue=new Map,le=new Map,he=1,fe=function(t){if(ue.has(t))return ue.get(t);for(;le.has(he);)he++;var e=he++;return ue.set(t,e),le.set(e,t),e},ce=function(t){return le.get(t)},de=function(t,e){e>=he&&(he=e+1),ue.set(t,e),le.set(e,t)},pe="style["+ne+'][data-styled-version="5.3.5"]',me=new RegExp("^"+ne+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ge=function(t,e,r){for(var n,i=r.split(","),o=0,a=i.length;o<a;o++)(n=i[o])&&t.registerName(e,n)},ve=function(t,e){for(var r=(e.textContent||"").split("/*!sc*/\n"),n=[],i=0,o=r.length;i<o;i++){var a=r[i].trim();if(a){var s=a.match(me);if(s){var u=0|parseInt(s[1],10),l=s[2];0!==u&&(de(l,u),ge(t,l,s[3]),t.getTag().insertRules(u,n)),n.length=0}else n.push(a)}}},ye=function(t){var e=document.head,r=t||e,n=document.createElement("style"),i=function(t){for(var e=t.childNodes,r=e.length;r>=0;r--){var n=e[r];if(n&&1===n.nodeType&&n.hasAttribute(ne))return n}}(r),o=void 0!==i?i.nextSibling:null;n.setAttribute(ne,"active"),n.setAttribute("data-styled-version","5.3.5");var a="undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null;return a&&n.setAttribute("nonce",a),r.insertBefore(n,o),n},be=function(){function t(t){var e=this.element=ye(t);e.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var e=document.styleSheets,r=0,n=e.length;r<n;r++){var i=e[r];if(i.ownerNode===t)return i}ae(17)}(e),this.length=0}var e=t.prototype;return e.insertRule=function(t,e){try{return this.sheet.insertRule(e,t),this.length++,!0}catch(r){return!1}},e.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.getRule=function(t){var e=this.sheet.cssRules[t];return void 0!==e&&"string"==typeof e.cssText?e.cssText:""},t}(),we=function(){function t(t){var e=this.element=ye(t);this.nodes=e.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(t,e){if(t<=this.length&&t>=0){var r=document.createTextNode(e),n=this.nodes[t];return this.element.insertBefore(r,n||null),this.length++,!0}return!1},e.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},t}(),_e=function(){function t(t){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(t,e){return t<=this.length&&(this.rules.splice(t,0,e),this.length++,!0)},e.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.getRule=function(t){return t<this.length?this.rules[t]:""},t}(),Me=ie,xe={isServer:!ie,useCSSOMInjection:!oe},Se=function(){function t(t,e,r){void 0===t&&(t=Qt),void 0===e&&(e={}),this.options=Zt({},xe,{},t),this.gs=e,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ie&&Me&&(Me=!1,function(t){for(var e=document.querySelectorAll(pe),r=0,n=e.length;r<n;r++){var i=e[r];i&&"active"!==i.getAttribute(ne)&&(ve(t,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}t.registerId=function(t){return fe(t)};var e=t.prototype;return e.reconstructWithOptions=function(e,r){return void 0===r&&(r=!0),new t(Zt({},this.options,{},e),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.getTag=function(){return this.tag||(this.tag=(r=(e=this.options).isServer,n=e.useCSSOMInjection,i=e.target,t=r?new _e(i):n?new be(i):new we(i),new se(t)));var t,e,r,n,i},e.hasNameForId=function(t,e){return this.names.has(t)&&this.names.get(t).has(e)},e.registerName=function(t,e){if(fe(t),this.names.has(t))this.names.get(t).add(e);else{var r=new Set;r.add(e),this.names.set(t,r)}},e.insertRules=function(t,e,r){this.registerName(t,e),this.getTag().insertRules(fe(t),r)},e.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.clearRules=function(t){this.getTag().clearGroup(fe(t)),this.clearNames(t)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(t){for(var e=t.getTag(),r=e.length,n="",i=0;i<r;i++){var o=ce(i);if(void 0!==o){var a=t.names.get(o),s=e.getGroup(i);if(a&&s&&a.size){var u=ne+".g"+i+'[id="'+o+'"]',l="";void 0!==a&&a.forEach((function(t){t.length>0&&(l+=t+",")})),n+=""+s+u+'{content:"'+l+'"}/*!sc*/\n'}}}return n}(this)},t}(),Ee=/(a)(d)/gi,ke=function(t){return String.fromCharCode(t+(t>25?39:97))};function Ae(t){var e,r="";for(e=Math.abs(t);e>52;e=e/52|0)r=ke(e%52)+r;return(ke(e%52)+r).replace(Ee,"$1-$2")}var Re=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},Pe=function(t){return Re(5381,t)};var Ce=Pe("5.3.5"),Ie=function(){function t(t,e,r){this.rules=t,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&function(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(te(r)&&!re(r))return!1}return!0}(t),this.componentId=e,this.baseHash=Re(Ce,e),this.baseStyle=r,Se.registerId(e)}return t.prototype.generateAndInjectStyles=function(t,e,r){var n=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,e,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&e.hasNameForId(n,this.staticRulesId))i.push(this.staticRulesId);else{var o=He(this.rules,t,e,r).join(""),a=Ae(Re(this.baseHash,o)>>>0);if(!e.hasNameForId(n,a)){var s=r(o,"."+a,void 0,n);e.insertRules(n,a,s)}i.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,l=Re(this.baseHash,r.hash),h="",f=0;f<u;f++){var c=this.rules[f];if("string"==typeof c)h+=c;else if(c){var d=He(c,t,e,r),p=Array.isArray(d)?d.join(""):d;l=Re(l,p+f),h+=p}}if(h){var m=Ae(l>>>0);if(!e.hasNameForId(n,m)){var g=r(h,"."+m,void 0,n);e.insertRules(n,m,g)}i.push(m)}}return i.join(" ")},t}(),Oe=/^\s*\/\/.*$/gm,Te=[":","[",".","#"];var Ne=i.createContext();Ne.Consumer;var Be=i.createContext(),Le=(Be.Consumer,new Se),je=function(t){var e,r,n,i,o=void 0===t?Qt:t,a=o.options,s=void 0===a?Qt:a,u=o.plugins,l=void 0===u?Xt:u,h=new ut(s),f=[],c=function(t){function e(e){if(e)try{t(e+"}")}catch(r){}}return function(r,n,i,o,a,s,u,l,h,f){switch(r){case 1:if(0===h&&64===n.charCodeAt(0))return t(n+";"),"";break;case 2:if(0===l)return n+"/*|*/";break;case 3:switch(l){case 102:case 112:return t(i[0]+n),"";default:return n+(0===f?"/*|*/":"")}case-2:n.split("/*|*/}").forEach(e)}}}((function(t){f.push(t)})),d=function(t,n,o){return 0===n&&-1!==Te.indexOf(o[r.length])||o.match(i)?t:"."+e};function p(t,o,a,s){void 0===s&&(s="&");var u=t.replace(Oe,""),l=o&&a?a+" "+o+" { "+u+" }":u;return e=s,r=o,n=new RegExp("\\"+r+"\\b","g"),i=new RegExp("(\\"+r+"\\b){2,}"),h(a||!o?"":o,l)}return h.use([].concat(l,[function(t,e,i){2===t&&i.length&&i[0].lastIndexOf(r)>0&&(i[0]=i[0].replace(n,d))},c,function(t){if(-2===t){var e=f;return f=[],e}}])),p.hash=l.length?l.reduce((function(t,e){return e.name||ae(15),Re(t,e.name)}),5381).toString():"",p}();var De=function(){function t(t,e){var r=this;this.inject=function(t,e){void 0===e&&(e=je);var n=r.name+e.hash;t.hasNameForId(r.id,n)||t.insertRules(r.id,n,e(r.rules,n,"@keyframes"))},this.toString=function(){return ae(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=e}return t.prototype.getName=function(t){return void 0===t&&(t=je),this.name+t.hash},t}(),Fe=/([A-Z])/,Ue=/([A-Z])/g,qe=/^ms-/,ze=function(t){return"-"+t.toLowerCase()};function $e(t){return Fe.test(t)?t.replace(Ue,ze).replace(qe,"-ms-"):t}var We=function(t){return null==t||!1===t||""===t};function He(t,e,r,n){if(Array.isArray(t)){for(var i,o=[],a=0,s=t.length;a<s;a+=1)""!==(i=He(t[a],e,r,n))&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}return We(t)?"":re(t)?"."+t.styledComponentId:te(t)?"function"!=typeof(u=t)||u.prototype&&u.prototype.isReactComponent||!e?t:He(t(e),e,r,n):t instanceof De?r?(t.inject(r,n),t.getName(n)):t:Yt(t)?function t(e,r){var n,i,o=[];for(var a in e)e.hasOwnProperty(a)&&!We(e[a])&&(Array.isArray(e[a])&&e[a].isCss||te(e[a])?o.push($e(a)+":",e[a],";"):Yt(e[a])?o.push.apply(o,t(e[a],a)):o.push($e(a)+": "+(n=a,(null==(i=e[a])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||n in lt?String(i).trim():i+"px")+";")));return r?[r+" {"].concat(o,["}"]):o}(t):t.toString();var u}var Ke=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function Ge(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return te(t)||Yt(t)?Ke(He(Jt(Xt,[t].concat(r)))):0===r.length&&1===t.length&&"string"==typeof t[0]?t:Ke(He(Jt(t,r)))}var Ve=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ze=/(^-|-$)/g;function Je(t){return t.replace(Ve,"-").replace(Ze,"")}var Ye=function(t){return Ae(Pe(t)>>>0)};function Xe(t){return"string"==typeof t&&!0}var Qe=function(t){return"function"==typeof t||"object"==typeof t&&null!==t&&!Array.isArray(t)},tr=function(t){return"__proto__"!==t&&"constructor"!==t&&"prototype"!==t};function er(t,e,r){var n=t[r];Qe(e)&&Qe(n)?rr(n,e):t[r]=e}function rr(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];for(var i=0,o=r;i<o.length;i++){var a=o[i];if(Qe(a))for(var s in a)tr(s)&&er(t,a[s],s)}return t}var nr=i.createContext();nr.Consumer;var ir={};function or(t,e,r){var n,o=re(t),a=!Xe(t),s=e.attrs,u=void 0===s?Xt:s,l=e.componentId,h=void 0===l?function(t,e){var r="string"!=typeof t?"sc":Je(t);ir[r]=(ir[r]||0)+1;var n=r+"-"+Ye("5.3.5"+r+ir[r]);return e?e+"-"+n:n}(e.displayName,e.parentComponentId):l,f=e.displayName,c=void 0===f?Xe(n=t)?"styled."+n:"Styled("+ee(n)+")":f,d=e.displayName&&e.componentId?Je(e.displayName)+"-"+e.componentId:e.componentId||h,p=o&&t.attrs?Array.prototype.concat(t.attrs,u).filter(Boolean):u,m=e.shouldForwardProp;o&&t.shouldForwardProp&&(m=e.shouldForwardProp?function(r,n,i){return t.shouldForwardProp(r,n,i)&&e.shouldForwardProp(r,n,i)}:t.shouldForwardProp);var g,v=new Ie(r,d,o?t.componentStyle:void 0),y=v.isStatic&&0===u.length,b=function(t,e){return function(t,e,r,n){var o=t.attrs,a=t.componentStyle,s=t.defaultProps,u=t.foldedComponentIds,l=t.shouldForwardProp,h=t.styledComponentId,f=t.target,c=function(t,e,r){void 0===t&&(t=Qt);var n=Zt({},e,{theme:t}),i={};return r.forEach((function(t){var e,r,o,a=t;for(e in te(a)&&(a=a(n)),a)n[e]=i[e]="className"===e?(r=i[e],o=a[e],r&&o?r+" "+o:r||o):a[e]})),[n,i]}(function(t,e,r){return void 0===r&&(r=Qt),t.theme!==r.theme&&t.theme||e||r.theme}(e,(0,i.useContext)(nr),s)||Qt,e,o),d=c[0],p=c[1],m=function(t,e,r,n){var o=(0,i.useContext)(Ne)||Le,a=(0,i.useContext)(Be)||je;return e?t.generateAndInjectStyles(Qt,o,a):t.generateAndInjectStyles(r,o,a)}(a,n,d),g=r,v=p.$as||e.$as||p.as||e.as||f,y=Xe(v),b=p!==e?Zt({},e,{},p):e,w={};for(var _ in b)"$"!==_[0]&&"as"!==_&&("forwardedAs"===_?w.as=b[_]:(l?l(_,ct,v):!y||ct(_))&&(w[_]=b[_]));return e.style&&p.style!==e.style&&(w.style=Zt({},e.style,{},p.style)),w.className=Array.prototype.concat(u,h,m!==h?m:null,e.className,p.className).filter(Boolean).join(" "),w.ref=g,(0,i.createElement)(v,w)}(g,t,e,y)};return b.displayName=c,(g=i.forwardRef(b)).attrs=p,g.componentStyle=v,g.displayName=c,g.shouldForwardProp=m,g.foldedComponentIds=o?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Xt,g.styledComponentId=d,g.target=o?t.target:t,g.withComponent=function(t){var n=e.componentId,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(e,["componentId"]),o=n&&n+"-"+(Xe(t)?t:Je(ee(t)));return or(t,Zt({},i,{attrs:p,componentId:o}),r)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?rr({},t.defaultProps,e):e}}),g.toString=function(){return"."+g.styledComponentId},a&&Vt(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var ar=function(t){return function t(e,r,n){if(void 0===n&&(n=Qt),!H.exports.isValidElementType(r))return ae(1,String(r));var i=function(){return e(r,n,Ge.apply(void 0,arguments))};return i.withConfig=function(i){return t(e,r,Zt({},n,{},i))},i.attrs=function(i){return t(e,r,Zt({},n,{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},i}(or,t)};function sr(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var i=Ge.apply(void 0,[t].concat(r)).join(""),o=Ye(i);return new De(o,i)}["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(t){ar[t]=ar(t)}));var ur=ar;const lr={beauBlue:"#CEE4F3",black:"#000000",blue:"#2E7DAF",blueCloud:"#EEF6FB",blueCloudDark:"#3092CF",blueCultured:"#EBEFF9",blueDark:"#041836",blueDark2:"#112F5C",blueLight:"#F2F6FF",blueLight2:"#E5EDFF",blueLight3:"#E6EDFF",blueLight4:"#57A5FF",blueSky:"#9ECCEA",blueSkyDark:"#51A5DA",blueSkyLight:"#E8EAED",green:"#21BF96",greenDark:"#0FA67F",greenForestDark:"#3BC49D",greenForestLight:"#EBF9F5",greenLight:"#7AD9C0",greenMint:"#33FFCC",grey:"#68738D",greyDark:"#333333",greyDisabled:"#D7DAE0",greyIcons:"#B0B5BF",greyLight:"#C5CDD9",paleBlue2:"#C1D8E7",paleCerulean:"#9EC7EA",pink:"#DA51BE",pinkDark:"#E01FB3",pinkLight:"#FDF0FA",purple:"#8851DA",purpleDark:"#6D30CF",purpleLight:"#F3EEFB",red:"#EB5757",redDark:"#E01F1F",redLight:"#FDF0F0",white:"#FFFFFF",yellow:"#ECA609",yellowDark:"#F1A90E",yellowLight:"#FEF9EE",yellowHover:"#FAE7BC"},hr={beauBlue:"radial-gradient(106.45% 108.64% at 32.33% -4.84%, #ECF5FC 0.52%, #CEE4F3 100%)",blue:"linear-gradient(113.54deg, rgba(60, 87, 140, 0.5) 14.91%, rgba(70, 86, 169, 0.5) 30.39%, rgba(129, 161, 225, 0.185) 55.76%), linear-gradient(151.07deg, #145559 33.25%, #414FA7 98.24%)",goldShiny:"linear-gradient(113.54deg, rgba(199, 148, 37, 0.6) 14.91%, rgba(204, 147, 23, 0.6) 14.92%, rgba(181, 147, 24, 0) 45.98%, rgba(250, 228, 30, 0) 55.76%, rgba(219, 200, 26, 0) 55.76%), linear-gradient(147.17deg, #DBBB14 48.73%, #B38311 98.22%)",lightBlue:"linear-gradient(113.54deg, rgba(117, 183, 251, 0.531738) 14.91%, rgba(209, 103, 255, 0.03) 55.76%), linear-gradient(160.75deg, #427ACB 41.37%, #45FFFF 98.29%)",lightGrey:"linear-gradient(90deg,rgba(221, 221, 221, 0),rgba(232, 232, 232, 0.6),rgba(221, 221, 221, 0))",purpleToPink:"linear-gradient(113.54deg, rgba(103, 58, 194, 0.6) 14.91%, rgba(122, 74, 221, 0.498) 25.92%, rgba(209, 103, 255, 0.03) 55.76%), linear-gradient(160.75deg, #7A4ADD 41.37%, #D57BFF 98.29%)"},fr=(t,e)=>`rgba(\n    ${"light"===t?"255, 255, 255,":"0, 0, 0,"}\n    ${String(e/100)}\n  )`,cr="1200px",dr="1025px",pr="768px",mr="576px";var gr,vr={exports:{}},yr={},br=Symbol.for("react.element"),wr=Symbol.for("react.portal"),_r=Symbol.for("react.fragment"),Mr=Symbol.for("react.strict_mode"),xr=Symbol.for("react.profiler"),Sr=Symbol.for("react.provider"),Er=Symbol.for("react.context"),kr=Symbol.for("react.server_context"),Ar=Symbol.for("react.forward_ref"),Rr=Symbol.for("react.suspense"),Pr=Symbol.for("react.suspense_list"),Cr=Symbol.for("react.memo"),Ir=Symbol.for("react.lazy"),Or=Symbol.for("react.offscreen");function Tr(t){if("object"===typeof t&&null!==t){var e=t.$$typeof;switch(e){case br:switch(t=t.type){case _r:case xr:case Mr:case Rr:case Pr:return t;default:switch(t=t&&t.$$typeof){case kr:case Er:case Ar:case Ir:case Cr:case Sr:return t;default:return e}}case wr:return e}}}gr=Symbol.for("react.module.reference"),yr.ContextConsumer=Er,yr.ContextProvider=Sr,yr.Element=br,yr.ForwardRef=Ar,yr.Fragment=_r,yr.Lazy=Ir,yr.Memo=Cr,yr.Portal=wr,yr.Profiler=xr,yr.StrictMode=Mr,yr.Suspense=Rr,yr.SuspenseList=Pr,yr.isAsyncMode=function(){return!1},yr.isConcurrentMode=function(){return!1},yr.isContextConsumer=function(t){return Tr(t)===Er},yr.isContextProvider=function(t){return Tr(t)===Sr},yr.isElement=function(t){return"object"===typeof t&&null!==t&&t.$$typeof===br},yr.isForwardRef=function(t){return Tr(t)===Ar},yr.isFragment=function(t){return Tr(t)===_r},yr.isLazy=function(t){return Tr(t)===Ir},yr.isMemo=function(t){return Tr(t)===Cr},yr.isPortal=function(t){return Tr(t)===wr},yr.isProfiler=function(t){return Tr(t)===xr},yr.isStrictMode=function(t){return Tr(t)===Mr},yr.isSuspense=function(t){return Tr(t)===Rr},yr.isSuspenseList=function(t){return Tr(t)===Pr},yr.isValidElementType=function(t){return"string"===typeof t||"function"===typeof t||t===_r||t===xr||t===Mr||t===Rr||t===Pr||t===Or||"object"===typeof t&&null!==t&&(t.$$typeof===Ir||t.$$typeof===Cr||t.$$typeof===Sr||t.$$typeof===Er||t.$$typeof===Ar||t.$$typeof===gr||void 0!==t.getModuleId)},yr.typeOf=Tr,vr.exports=yr;var Nr={exports:{}},Br={},Lr=Symbol.for("react.element"),jr=Symbol.for("react.portal"),Dr=Symbol.for("react.fragment"),Fr=Symbol.for("react.strict_mode"),Ur=Symbol.for("react.profiler"),qr=Symbol.for("react.provider"),zr=Symbol.for("react.context"),$r=Symbol.for("react.forward_ref"),Wr=Symbol.for("react.suspense"),Hr=Symbol.for("react.memo"),Kr=Symbol.for("react.lazy"),Gr=Symbol.iterator;var Vr={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zr=Object.assign,Jr={};function Yr(t,e,r){this.props=t,this.context=e,this.refs=Jr,this.updater=r||Vr}function Xr(){}function Qr(t,e,r){this.props=t,this.context=e,this.refs=Jr,this.updater=r||Vr}Yr.prototype.isReactComponent={},Yr.prototype.setState=function(t,e){if("object"!==typeof t&&"function"!==typeof t&&null!=t)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},Yr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},Xr.prototype=Yr.prototype;var tn=Qr.prototype=new Xr;tn.constructor=Qr,Zr(tn,Yr.prototype),tn.isPureReactComponent=!0;var en=Array.isArray,rn=Object.prototype.hasOwnProperty,nn={current:null},on={key:!0,ref:!0,__self:!0,__source:!0};function an(t,e,r){var n,i={},o=null,a=null;if(null!=e)for(n in void 0!==e.ref&&(a=e.ref),void 0!==e.key&&(o=""+e.key),e)rn.call(e,n)&&!on.hasOwnProperty(n)&&(i[n]=e[n]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(n in s=t.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:Lr,type:t,key:o,ref:a,props:i,_owner:nn.current}}function sn(t){return"object"===typeof t&&null!==t&&t.$$typeof===Lr}var un=/\/+/g;function ln(t,e){return"object"===typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function hn(t,e,r,n,i){var o=typeof t;"undefined"!==o&&"boolean"!==o||(t=null);var a=!1;if(null===t)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Lr:case jr:a=!0}}if(a)return i=i(a=t),t=""===n?"."+ln(a,0):n,en(i)?(r="",null!=t&&(r=t.replace(un,"$&/")+"/"),hn(i,e,r,"",(function(t){return t}))):null!=i&&(sn(i)&&(i=function(t,e){return{$$typeof:Lr,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(un,"$&/")+"/")+t)),e.push(i)),1;if(a=0,n=""===n?".":n+":",en(t))for(var s=0;s<t.length;s++){var u=n+ln(o=t[s],s);a+=hn(o,e,r,u,i)}else if(u=function(t){return null===t||"object"!==typeof t?null:"function"===typeof(t=Gr&&t[Gr]||t["@@iterator"])?t:null}(t),"function"===typeof u)for(t=u.call(t),s=0;!(o=t.next()).done;)a+=hn(o=o.value,e,r,u=n+ln(o,s++),i);else if("object"===o)throw e=String(t),Error("Objects are not valid as a React child (found: "+("[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function fn(t,e,r){if(null==t)return t;var n=[],i=0;return hn(t,n,"","",(function(t){return e.call(r,t,i++)})),n}function cn(t){if(-1===t._status){var e=t._result;(e=e()).then((function(e){0!==t._status&&-1!==t._status||(t._status=1,t._result=e)}),(function(e){0!==t._status&&-1!==t._status||(t._status=2,t._result=e)})),-1===t._status&&(t._status=0,t._result=e)}if(1===t._status)return t._result.default;throw t._result}var dn={current:null},pn={transition:null},mn={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:pn,ReactCurrentOwner:nn};Br.Children={map:fn,forEach:function(t,e,r){fn(t,(function(){e.apply(this,arguments)}),r)},count:function(t){var e=0;return fn(t,(function(){e++})),e},toArray:function(t){return fn(t,(function(t){return t}))||[]},only:function(t){if(!sn(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},Br.Component=Yr,Br.Fragment=Dr,Br.Profiler=Ur,Br.PureComponent=Qr,Br.StrictMode=Fr,Br.Suspense=Wr,Br.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mn,Br.cloneElement=function(t,e,r){if(null===t||void 0===t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=Zr({},t.props),i=t.key,o=t.ref,a=t._owner;if(null!=e){if(void 0!==e.ref&&(o=e.ref,a=nn.current),void 0!==e.key&&(i=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(u in e)rn.call(e,u)&&!on.hasOwnProperty(u)&&(n[u]=void 0===e[u]&&void 0!==s?s[u]:e[u])}var u=arguments.length-2;if(1===u)n.children=r;else if(1<u){s=Array(u);for(var l=0;l<u;l++)s[l]=arguments[l+2];n.children=s}return{$$typeof:Lr,type:t.type,key:i,ref:o,props:n,_owner:a}},Br.createContext=function(t){return(t={$$typeof:zr,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:qr,_context:t},t.Consumer=t},Br.createElement=an,Br.createFactory=function(t){var e=an.bind(null,t);return e.type=t,e},Br.createRef=function(){return{current:null}},Br.forwardRef=function(t){return{$$typeof:$r,render:t}},Br.isValidElement=sn,Br.lazy=function(t){return{$$typeof:Kr,_payload:{_status:-1,_result:t},_init:cn}},Br.memo=function(t,e){return{$$typeof:Hr,type:t,compare:void 0===e?null:e}},Br.startTransition=function(t){var e=pn.transition;pn.transition={};try{t()}finally{pn.transition=e}},Br.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},Br.useCallback=function(t,e){return dn.current.useCallback(t,e)},Br.useContext=function(t){return dn.current.useContext(t)},Br.useDebugValue=function(){},Br.useDeferredValue=function(t){return dn.current.useDeferredValue(t)},Br.useEffect=function(t,e){return dn.current.useEffect(t,e)},Br.useId=function(){return dn.current.useId()},Br.useImperativeHandle=function(t,e,r){return dn.current.useImperativeHandle(t,e,r)},Br.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)},Br.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)},Br.useMemo=function(t,e){return dn.current.useMemo(t,e)},Br.useReducer=function(t,e,r){return dn.current.useReducer(t,e,r)},Br.useRef=function(t){return dn.current.useRef(t)},Br.useState=function(t){return dn.current.useState(t)},Br.useSyncExternalStore=function(t,e,r){return dn.current.useSyncExternalStore(t,e,r)},Br.useTransition=function(){return dn.current.useTransition()},Br.version="18.2.0",Nr.exports=Br;var gn=Nr.exports;function vn(t){function e(t,n,u,l,c){for(var d,p,m,g,w,M=0,x=0,S=0,E=0,k=0,O=0,N=m=d=0,L=0,j=0,D=0,F=0,U=u.length,q=U-1,z="",$="",W="",H="";L<U;){if(p=u.charCodeAt(L),L===q&&x+E+S+M!==0&&(0!==x&&(p=47===x?10:47),E=S=M=0,U++,q++),x+E+S+M===0){if(L===q&&(0<j&&(z=z.replace(f,"")),0<z.trim().length)){switch(p){case 32:case 9:case 59:case 13:case 10:break;default:z+=u.charAt(L)}p=59}switch(p){case 123:for(d=(z=z.trim()).charCodeAt(0),m=1,F=++L;L<U;){switch(p=u.charCodeAt(L)){case 123:m++;break;case 125:m--;break;case 47:switch(p=u.charCodeAt(L+1)){case 42:case 47:t:{for(N=L+1;N<q;++N)switch(u.charCodeAt(N)){case 47:if(42===p&&42===u.charCodeAt(N-1)&&L+2!==N){L=N+1;break t}break;case 10:if(47===p){L=N+1;break t}}L=N}}break;case 91:p++;case 40:p++;case 34:case 39:for(;L++<q&&u.charCodeAt(L)!==p;);}if(0===m)break;L++}if(m=u.substring(F,L),0===d&&(d=(z=z.replace(h,"").trim()).charCodeAt(0)),64===d){switch(0<j&&(z=z.replace(f,"")),p=z.charCodeAt(1)){case 100:case 109:case 115:case 45:j=n;break;default:j=I}if(F=(m=e(n,j,m,p,c+1)).length,0<T&&(w=s(3,m,j=r(I,z,D),n,R,A,F,p,c,l),z=j.join(""),void 0!==w&&0===(F=(m=w.trim()).length)&&(p=0,m="")),0<F)switch(p){case 115:z=z.replace(_,a);case 100:case 109:case 45:m=z+"{"+m+"}";break;case 107:m=(z=z.replace(v,"$1 $2"))+"{"+m+"}",m=1===C||2===C&&o("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=z+m,112===l&&($+=m,m="")}else m=""}else m=e(n,r(n,z,D),m,l,c+1);W+=m,m=D=j=N=d=0,z="",p=u.charCodeAt(++L);break;case 125:case 59:if(1<(F=(z=(0<j?z.replace(f,""):z).trim()).length))switch(0===N&&(d=z.charCodeAt(0),45===d||96<d&&123>d)&&(F=(z=z.replace(" ",":")).length),0<T&&void 0!==(w=s(1,z,n,t,R,A,$.length,l,c,l))&&0===(F=(z=w.trim()).length)&&(z="\0\0"),d=z.charCodeAt(0),p=z.charCodeAt(1),d){case 0:break;case 64:if(105===p||99===p){H+=z+u.charAt(L);break}default:58!==z.charCodeAt(F-1)&&($+=i(z,d,p,z.charCodeAt(2)))}D=j=N=d=0,z="",p=u.charCodeAt(++L)}}switch(p){case 13:case 10:47===x?x=0:1+d===0&&107!==l&&0<z.length&&(j=1,z+="\0"),0<T*B&&s(0,z,n,t,R,A,$.length,l,c,l),A=1,R++;break;case 59:case 125:if(x+E+S+M===0){A++;break}default:switch(A++,g=u.charAt(L),p){case 9:case 32:if(E+M+x===0)switch(k){case 44:case 58:case 9:case 32:g="";break;default:32!==p&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:E+x+M===0&&(j=D=1,g="\f"+g);break;case 108:if(E+x+M+P===0&&0<N)switch(L-N){case 2:112===k&&58===u.charCodeAt(L-3)&&(P=k);case 8:111===O&&(P=O)}break;case 58:E+x+M===0&&(N=L);break;case 44:x+S+E+M===0&&(j=1,g+="\r");break;case 34:case 39:0===x&&(E=E===p?0:0===E?p:E);break;case 91:E+x+S===0&&M++;break;case 93:E+x+S===0&&M--;break;case 41:E+x+M===0&&S--;break;case 40:if(E+x+M===0){if(0===d)if(2*k+3*O===533);else d=1;S++}break;case 64:x+S+E+M+N+m===0&&(m=1);break;case 42:case 47:if(!(0<E+M+S))switch(x){case 0:switch(2*p+3*u.charCodeAt(L+1)){case 235:x=47;break;case 220:F=L,x=42}break;case 42:47===p&&42===k&&F+2!==L&&(33===u.charCodeAt(F+2)&&($+=u.substring(F,L+1)),g="",x=0)}}0===x&&(z+=g)}O=k,k=p,L++}if(0<(F=$.length)){if(j=n,0<T&&(void 0!==(w=s(2,$,j,t,R,A,F,l,c,l))&&0===($=w).length))return H+$+W;if($=j.join(",")+"{"+$+"}",C*P!==0){switch(2!==C||o($,2)||(P=0),P){case 111:$=$.replace(b,":-moz-$1")+$;break;case 112:$=$.replace(y,"::-webkit-input-$1")+$.replace(y,"::-moz-$1")+$.replace(y,":-ms-input-$1")+$}P=0}}return H+$+W}function r(t,e,r){var i=e.trim().split(m);e=i;var o=i.length,a=t.length;switch(a){case 0:case 1:var s=0;for(t=0===a?"":t[0]+" ";s<o;++s)e[s]=n(t,e[s],r).trim();break;default:var u=s=0;for(e=[];s<o;++s)for(var l=0;l<a;++l)e[u++]=n(t[l]+" ",i[s],r).trim()}return e}function n(t,e,r){var n=e.charCodeAt(0);switch(33>n&&(n=(e=e.trim()).charCodeAt(0)),n){case 38:return e.replace(g,"$1"+t.trim());case 58:return t.trim()+e.replace(g,"$1"+t.trim());default:if(0<1*r&&0<e.indexOf("\f"))return e.replace(g,(58===t.charCodeAt(0)?"":"$1")+t.trim())}return t+e}function i(t,e,r,n){var a=t+";",s=2*e+3*r+4*n;if(944===s){t=a.indexOf(":",9)+1;var u=a.substring(t,a.length-1).trim();return u=a.substring(0,t).trim()+u+";",1===C||2===C&&o(u,1)?"-webkit-"+u+u:u}if(0===C||2===C&&!o(a,1))return a;switch(s){case 1015:return 97===a.charCodeAt(10)?"-webkit-"+a+a:a;case 951:return 116===a.charCodeAt(3)?"-webkit-"+a+a:a;case 963:return 110===a.charCodeAt(5)?"-webkit-"+a+a:a;case 1009:if(100!==a.charCodeAt(4))break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(45===a.charCodeAt(8))return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(k,"$1-webkit-$2")+a;break;case 932:if(45===a.charCodeAt(4))switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(99!==a.charCodeAt(8))break;return"-webkit-box-pack"+(u=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+a+"-ms-flex-pack"+u+a;case 1005:return d.test(a)?a.replace(c,":-webkit-")+a.replace(c,":-moz-")+a:a;case 1e3:switch(e=(u=a.substring(13).trim()).indexOf("-")+1,u.charCodeAt(0)+u.charCodeAt(e)){case 226:u=a.replace(w,"tb");break;case 232:u=a.replace(w,"tb-rl");break;case 220:u=a.replace(w,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+u+a;case 1017:if(-1===a.indexOf("sticky",9))break;case 975:switch(e=(a=t).length-10,s=(u=(33===a.charCodeAt(e)?a.substring(0,e):a).substring(t.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|u.charCodeAt(7))){case 203:if(111>u.charCodeAt(8))break;case 115:a=a.replace(u,"-webkit-"+u)+";"+a;break;case 207:case 102:a=a.replace(u,"-webkit-"+(102<s?"inline-":"")+"box")+";"+a.replace(u,"-webkit-"+u)+";"+a.replace(u,"-ms-"+u+"box")+";"+a}return a+";";case 938:if(45===a.charCodeAt(5))switch(a.charCodeAt(6)){case 105:return u=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+u+"-ms-flex-"+u+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(x,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(x,"")+a}break;case 973:case 989:if(45!==a.charCodeAt(3)||122===a.charCodeAt(4))break;case 931:case 953:if(!0===E.test(t))return 115===(u=t.substring(t.indexOf(":")+1)).charCodeAt(0)?i(t.replace("stretch","fill-available"),e,r,n).replace(":fill-available",":stretch"):a.replace(u,"-webkit-"+u)+a.replace(u,"-moz-"+u.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(102===a.charCodeAt(5)?"-ms-"+a:"")+a,r+n===211&&105===a.charCodeAt(13)&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+a}return a}function o(t,e){var r=t.indexOf(1===e?":":"{"),n=t.substring(0,3!==e?r:10);return r=t.substring(r+1,t.length-1),N(2!==e?n:n.replace(S,"$1"),r,e)}function a(t,e){var r=i(e,e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2));return r!==e+";"?r.replace(M," or ($1)").substring(4):"("+e+")"}function s(t,e,r,n,i,o,a,s,u,h){for(var f,c=0,d=e;c<T;++c)switch(f=O[c].call(l,t,d,r,n,i,o,a,s,u,h)){case void 0:case!1:case!0:case null:break;default:d=f}if(d!==e)return d}function u(t){return void 0!==(t=t.prefix)&&(N=null,t?"function"!==typeof t?C=1:(C=2,N=t):C=0),u}function l(t,r){var n=t;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<T){var i=s(-1,r,n,n,R,A,0,0,0,0);void 0!==i&&"string"===typeof i&&(r=i)}var o=e(I,n,r,0,0);return 0<T&&(void 0!==(i=s(-2,o,n,n,R,A,o.length,0,0,0))&&(o=i)),"",P=0,A=R=1,o}var h=/^\0+/g,f=/[\0\r\f]/g,c=/: */g,d=/zoo|gra/,p=/([,: ])(transform)/g,m=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,b=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,_=/\(\s*(.*)\s*\)/g,M=/([\s\S]*?);/g,x=/-self|flex-/g,S=/[^]*?(:[rp][el]a[\w-]+)[^]*/,E=/stretch|:\s*\w+\-(?:conte|avail)/,k=/([^-])(image-set\()/,A=1,R=1,P=0,C=1,I=[],O=[],T=0,N=null,B=0;return l.use=function t(e){switch(e){case void 0:case null:T=O.length=0;break;default:if("function"===typeof e)O[T++]=e;else if("object"===typeof e)for(var r=0,n=e.length;r<n;++r)t(e[r]);else B=0|!!e}return t},l.set=u,void 0!==t&&u(t),l}var yn={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function bn(t){var e=Object.create(null);return function(r){return void 0===e[r]&&(e[r]=t(r)),e[r]}}var wn=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,_n=bn((function(t){return wn.test(t)||111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)<91})),Mn={exports:{}},xn={},Sn="function"===typeof Symbol&&Symbol.for,En=Sn?Symbol.for("react.element"):60103,kn=Sn?Symbol.for("react.portal"):60106,An=Sn?Symbol.for("react.fragment"):60107,Rn=Sn?Symbol.for("react.strict_mode"):60108,Pn=Sn?Symbol.for("react.profiler"):60114,Cn=Sn?Symbol.for("react.provider"):60109,In=Sn?Symbol.for("react.context"):60110,On=Sn?Symbol.for("react.async_mode"):60111,Tn=Sn?Symbol.for("react.concurrent_mode"):60111,Nn=Sn?Symbol.for("react.forward_ref"):60112,Bn=Sn?Symbol.for("react.suspense"):60113,Ln=Sn?Symbol.for("react.suspense_list"):60120,jn=Sn?Symbol.for("react.memo"):60115,Dn=Sn?Symbol.for("react.lazy"):60116,Fn=Sn?Symbol.for("react.block"):60121,Un=Sn?Symbol.for("react.fundamental"):60117,qn=Sn?Symbol.for("react.responder"):60118,zn=Sn?Symbol.for("react.scope"):60119;function $n(t){if("object"===typeof t&&null!==t){var e=t.$$typeof;switch(e){case En:switch(t=t.type){case On:case Tn:case An:case Pn:case Rn:case Bn:return t;default:switch(t=t&&t.$$typeof){case In:case Nn:case Dn:case jn:case Cn:return t;default:return e}}case kn:return e}}}function Wn(t){return $n(t)===Tn}xn.AsyncMode=On,xn.ConcurrentMode=Tn,xn.ContextConsumer=In,xn.ContextProvider=Cn,xn.Element=En,xn.ForwardRef=Nn,xn.Fragment=An,xn.Lazy=Dn,xn.Memo=jn,xn.Portal=kn,xn.Profiler=Pn,xn.StrictMode=Rn,xn.Suspense=Bn,xn.isAsyncMode=function(t){return Wn(t)||$n(t)===On},xn.isConcurrentMode=Wn,xn.isContextConsumer=function(t){return $n(t)===In},xn.isContextProvider=function(t){return $n(t)===Cn},xn.isElement=function(t){return"object"===typeof t&&null!==t&&t.$$typeof===En},xn.isForwardRef=function(t){return $n(t)===Nn},xn.isFragment=function(t){return $n(t)===An},xn.isLazy=function(t){return $n(t)===Dn},xn.isMemo=function(t){return $n(t)===jn},xn.isPortal=function(t){return $n(t)===kn},xn.isProfiler=function(t){return $n(t)===Pn},xn.isStrictMode=function(t){return $n(t)===Rn},xn.isSuspense=function(t){return $n(t)===Bn},xn.isValidElementType=function(t){return"string"===typeof t||"function"===typeof t||t===An||t===Tn||t===Pn||t===Rn||t===Bn||t===Ln||"object"===typeof t&&null!==t&&(t.$$typeof===Dn||t.$$typeof===jn||t.$$typeof===Cn||t.$$typeof===In||t.$$typeof===Nn||t.$$typeof===Un||t.$$typeof===qn||t.$$typeof===zn||t.$$typeof===Fn)},xn.typeOf=$n,Mn.exports=xn;var Hn=Mn.exports,Kn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Gn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Vn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zn={};function Jn(t){return Hn.isMemo(t)?Vn:Zn[t.$$typeof]||Kn}Zn[Hn.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zn[Hn.Memo]=Vn;var Yn=Object.defineProperty,Xn=Object.getOwnPropertyNames,Qn=Object.getOwnPropertySymbols,ti=Object.getOwnPropertyDescriptor,ei=Object.getPrototypeOf,ri=Object.prototype;var ni=function t(e,r,n){if("string"!==typeof r){if(ri){var i=ei(r);i&&i!==ri&&t(e,i,n)}var o=Xn(r);Qn&&(o=o.concat(Qn(r)));for(var a=Jn(e),s=Jn(r),u=0;u<o.length;++u){var l=o[u];if(!Gn[l]&&(!n||!n[l])&&(!s||!s[l])&&(!a||!a[l])){var h=ti(r,l);try{Yn(e,l,h)}catch(f){}}}}return e};function ii(){return(ii=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var oi=function(t,e){for(var r=[t[0]],n=0,i=e.length;n<i;n+=1)r.push(e[n],t[n+1]);return r},ai=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!vr.exports.typeOf(t)},si=Object.freeze([]),ui=Object.freeze({});function li(t){return"function"==typeof t}function hi(t){return t.displayName||t.name||"Component"}function fi(t){return t&&"string"==typeof t.styledComponentId}var ci="undefined"!=typeof S&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",di="undefined"!=typeof window&&"HTMLElement"in window,pi=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof S&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof S&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY));function mi(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var gi=function(){function t(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var e=t.prototype;return e.indexOfGroup=function(t){for(var e=0,r=0;r<t;r++)e+=this.groupSizes[r];return e},e.insertRules=function(t,e){if(t>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;t>=i;)(i<<=1)<0&&mi(16,""+t);this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=n;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),s=0,u=e.length;s<u;s++)this.tag.insertRule(a,e[s])&&(this.groupSizes[t]++,a++)},e.clearGroup=function(t){if(t<this.length){var e=this.groupSizes[t],r=this.indexOfGroup(t),n=r+e;this.groupSizes[t]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},e.getGroup=function(t){var e="";if(t>=this.length||0===this.groupSizes[t])return e;for(var r=this.groupSizes[t],n=this.indexOfGroup(t),i=n+r,o=n;o<i;o++)e+=this.tag.getRule(o)+"/*!sc*/\n";return e},t}(),vi=new Map,yi=new Map,bi=1,wi=function(t){if(vi.has(t))return vi.get(t);for(;yi.has(bi);)bi++;var e=bi++;return vi.set(t,e),yi.set(e,t),e},_i=function(t){return yi.get(t)},Mi=function(t,e){e>=bi&&(bi=e+1),vi.set(t,e),yi.set(e,t)},xi="style["+ci+'][data-styled-version="5.3.5"]',Si=new RegExp("^"+ci+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Ei=function(t,e,r){for(var n,i=r.split(","),o=0,a=i.length;o<a;o++)(n=i[o])&&t.registerName(e,n)},ki=function(t,e){for(var r=(e.textContent||"").split("/*!sc*/\n"),n=[],i=0,o=r.length;i<o;i++){var a=r[i].trim();if(a){var s=a.match(Si);if(s){var u=0|parseInt(s[1],10),l=s[2];0!==u&&(Mi(l,u),Ei(t,l,s[3]),t.getTag().insertRules(u,n)),n.length=0}else n.push(a)}}},Ai=function(t){var e=document.head,r=t||e,n=document.createElement("style"),i=function(t){for(var e=t.childNodes,r=e.length;r>=0;r--){var n=e[r];if(n&&1===n.nodeType&&n.hasAttribute(ci))return n}}(r),o=void 0!==i?i.nextSibling:null;n.setAttribute(ci,"active"),n.setAttribute("data-styled-version","5.3.5");var a="undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null;return a&&n.setAttribute("nonce",a),r.insertBefore(n,o),n},Ri=function(){function t(t){var e=this.element=Ai(t);e.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var e=document.styleSheets,r=0,n=e.length;r<n;r++){var i=e[r];if(i.ownerNode===t)return i}mi(17)}(e),this.length=0}var e=t.prototype;return e.insertRule=function(t,e){try{return this.sheet.insertRule(e,t),this.length++,!0}catch(r){return!1}},e.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.getRule=function(t){var e=this.sheet.cssRules[t];return void 0!==e&&"string"==typeof e.cssText?e.cssText:""},t}(),Pi=function(){function t(t){var e=this.element=Ai(t);this.nodes=e.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(t,e){if(t<=this.length&&t>=0){var r=document.createTextNode(e),n=this.nodes[t];return this.element.insertBefore(r,n||null),this.length++,!0}return!1},e.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},t}(),Ci=function(){function t(t){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(t,e){return t<=this.length&&(this.rules.splice(t,0,e),this.length++,!0)},e.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.getRule=function(t){return t<this.length?this.rules[t]:""},t}(),Ii=di,Oi={isServer:!di,useCSSOMInjection:!pi},Ti=function(){function t(t,e,r){void 0===t&&(t=ui),void 0===e&&(e={}),this.options=ii({},Oi,{},t),this.gs=e,this.names=new Map(r),this.server=!!t.isServer,!this.server&&di&&Ii&&(Ii=!1,function(t){for(var e=document.querySelectorAll(xi),r=0,n=e.length;r<n;r++){var i=e[r];i&&"active"!==i.getAttribute(ci)&&(ki(t,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}t.registerId=function(t){return wi(t)};var e=t.prototype;return e.reconstructWithOptions=function(e,r){return void 0===r&&(r=!0),new t(ii({},this.options,{},e),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.getTag=function(){return this.tag||(this.tag=(r=(e=this.options).isServer,n=e.useCSSOMInjection,i=e.target,t=r?new Ci(i):n?new Ri(i):new Pi(i),new gi(t)));var t,e,r,n,i},e.hasNameForId=function(t,e){return this.names.has(t)&&this.names.get(t).has(e)},e.registerName=function(t,e){if(wi(t),this.names.has(t))this.names.get(t).add(e);else{var r=new Set;r.add(e),this.names.set(t,r)}},e.insertRules=function(t,e,r){this.registerName(t,e),this.getTag().insertRules(wi(t),r)},e.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.clearRules=function(t){this.getTag().clearGroup(wi(t)),this.clearNames(t)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(t){for(var e=t.getTag(),r=e.length,n="",i=0;i<r;i++){var o=_i(i);if(void 0!==o){var a=t.names.get(o),s=e.getGroup(i);if(a&&s&&a.size){var u=ci+".g"+i+'[id="'+o+'"]',l="";void 0!==a&&a.forEach((function(t){t.length>0&&(l+=t+",")})),n+=""+s+u+'{content:"'+l+'"}/*!sc*/\n'}}}return n}(this)},t}(),Ni=/(a)(d)/gi,Bi=function(t){return String.fromCharCode(t+(t>25?39:97))};function Li(t){var e,r="";for(e=Math.abs(t);e>52;e=e/52|0)r=Bi(e%52)+r;return(Bi(e%52)+r).replace(Ni,"$1-$2")}var ji=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},Di=function(t){return ji(5381,t)};var Fi=Di("5.3.5"),Ui=function(){function t(t,e,r){this.rules=t,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&function(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(li(r)&&!fi(r))return!1}return!0}(t),this.componentId=e,this.baseHash=ji(Fi,e),this.baseStyle=r,Ti.registerId(e)}return t.prototype.generateAndInjectStyles=function(t,e,r){var n=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,e,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&e.hasNameForId(n,this.staticRulesId))i.push(this.staticRulesId);else{var o=to(this.rules,t,e,r).join(""),a=Li(ji(this.baseHash,o)>>>0);if(!e.hasNameForId(n,a)){var s=r(o,"."+a,void 0,n);e.insertRules(n,a,s)}i.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,l=ji(this.baseHash,r.hash),h="",f=0;f<u;f++){var c=this.rules[f];if("string"==typeof c)h+=c;else if(c){var d=to(c,t,e,r),p=Array.isArray(d)?d.join(""):d;l=ji(l,p+f),h+=p}}if(h){var m=Li(l>>>0);if(!e.hasNameForId(n,m)){var g=r(h,"."+m,void 0,n);e.insertRules(n,m,g)}i.push(m)}}return i.join(" ")},t}(),qi=/^\s*\/\/.*$/gm,zi=[":","[",".","#"];var $i=gn.createContext();$i.Consumer;var Wi=gn.createContext(),Hi=(Wi.Consumer,new Ti),Ki=function(t){var e,r,n,i,o=void 0===t?ui:t,a=o.options,s=void 0===a?ui:a,u=o.plugins,l=void 0===u?si:u,h=new vn(s),f=[],c=function(t){function e(e){if(e)try{t(e+"}")}catch(r){}}return function(r,n,i,o,a,s,u,l,h,f){switch(r){case 1:if(0===h&&64===n.charCodeAt(0))return t(n+";"),"";break;case 2:if(0===l)return n+"/*|*/";break;case 3:switch(l){case 102:case 112:return t(i[0]+n),"";default:return n+(0===f?"/*|*/":"")}case-2:n.split("/*|*/}").forEach(e)}}}((function(t){f.push(t)})),d=function(t,n,o){return 0===n&&-1!==zi.indexOf(o[r.length])||o.match(i)?t:"."+e};function p(t,o,a,s){void 0===s&&(s="&");var u=t.replace(qi,""),l=o&&a?a+" "+o+" { "+u+" }":u;return e=s,r=o,n=new RegExp("\\"+r+"\\b","g"),i=new RegExp("(\\"+r+"\\b){2,}"),h(a||!o?"":o,l)}return h.use([].concat(l,[function(t,e,i){2===t&&i.length&&i[0].lastIndexOf(r)>0&&(i[0]=i[0].replace(n,d))},c,function(t){if(-2===t){var e=f;return f=[],e}}])),p.hash=l.length?l.reduce((function(t,e){return e.name||mi(15),ji(t,e.name)}),5381).toString():"",p}();var Gi=function(){function t(t,e){var r=this;this.inject=function(t,e){void 0===e&&(e=Ki);var n=r.name+e.hash;t.hasNameForId(r.id,n)||t.insertRules(r.id,n,e(r.rules,n,"@keyframes"))},this.toString=function(){return mi(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=e}return t.prototype.getName=function(t){return void 0===t&&(t=Ki),this.name+t.hash},t}(),Vi=/([A-Z])/,Zi=/([A-Z])/g,Ji=/^ms-/,Yi=function(t){return"-"+t.toLowerCase()};function Xi(t){return Vi.test(t)?t.replace(Zi,Yi).replace(Ji,"-ms-"):t}var Qi=function(t){return null==t||!1===t||""===t};function to(t,e,r,n){if(Array.isArray(t)){for(var i,o=[],a=0,s=t.length;a<s;a+=1)""!==(i=to(t[a],e,r,n))&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}return Qi(t)?"":fi(t)?"."+t.styledComponentId:li(t)?"function"!=typeof(u=t)||u.prototype&&u.prototype.isReactComponent||!e?t:to(t(e),e,r,n):t instanceof Gi?r?(t.inject(r,n),t.getName(n)):t:ai(t)?function t(e,r){var n,i,o=[];for(var a in e)e.hasOwnProperty(a)&&!Qi(e[a])&&(Array.isArray(e[a])&&e[a].isCss||li(e[a])?o.push(Xi(a)+":",e[a],";"):ai(e[a])?o.push.apply(o,t(e[a],a)):o.push(Xi(a)+": "+(n=a,(null==(i=e[a])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||n in yn?String(i).trim():i+"px")+";")));return r?[r+" {"].concat(o,["}"]):o}(t):t.toString();var u}var eo=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function ro(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return li(t)||ai(t)?eo(to(oi(si,[t].concat(r)))):0===r.length&&1===t.length&&"string"==typeof t[0]?t:eo(to(oi(t,r)))}var no=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,io=/(^-|-$)/g;function oo(t){return t.replace(no,"-").replace(io,"")}function ao(t){return"string"==typeof t&&!0}var so=function(t){return"function"==typeof t||"object"==typeof t&&null!==t&&!Array.isArray(t)},uo=function(t){return"__proto__"!==t&&"constructor"!==t&&"prototype"!==t};function lo(t,e,r){var n=t[r];so(e)&&so(n)?ho(n,e):t[r]=e}function ho(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];for(var i=0,o=r;i<o.length;i++){var a=o[i];if(so(a))for(var s in a)uo(s)&&lo(t,a[s],s)}return t}var fo=gn.createContext();fo.Consumer;var co={};function po(t,e,r){var n,i=fi(t),o=!ao(t),a=e.attrs,s=void 0===a?si:a,u=e.componentId,l=void 0===u?function(t,e){var r="string"!=typeof t?"sc":oo(t);co[r]=(co[r]||0)+1;var n=r+"-"+function(t){return Li(Di(t)>>>0)}("5.3.5"+r+co[r]);return e?e+"-"+n:n}(e.displayName,e.parentComponentId):u,h=e.displayName,f=void 0===h?ao(n=t)?"styled."+n:"Styled("+hi(n)+")":h,c=e.displayName&&e.componentId?oo(e.displayName)+"-"+e.componentId:e.componentId||l,d=i&&t.attrs?Array.prototype.concat(t.attrs,s).filter(Boolean):s,p=e.shouldForwardProp;i&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(r,n,i){return t.shouldForwardProp(r,n,i)&&e.shouldForwardProp(r,n,i)}:t.shouldForwardProp);var m,g=new Ui(r,c,i?t.componentStyle:void 0),v=g.isStatic&&0===s.length,y=function(t,e){return function(t,e,r,n){var i=t.attrs,o=t.componentStyle,a=t.defaultProps,s=t.foldedComponentIds,u=t.shouldForwardProp,l=t.styledComponentId,h=t.target,f=function(t,e,r){void 0===t&&(t=ui);var n=ii({},e,{theme:t}),i={};return r.forEach((function(t){var e,r,o,a=t;for(e in li(a)&&(a=a(n)),a)n[e]=i[e]="className"===e?(r=i[e],o=a[e],r&&o?r+" "+o:r||o):a[e]})),[n,i]}(function(t,e,r){return void 0===r&&(r=ui),t.theme!==r.theme&&t.theme||e||r.theme}(e,Nr.exports.useContext(fo),a)||ui,e,i),c=f[0],d=f[1],p=function(t,e,r,n){var i=Nr.exports.useContext($i)||Hi,o=Nr.exports.useContext(Wi)||Ki;return e?t.generateAndInjectStyles(ui,i,o):t.generateAndInjectStyles(r,i,o)}(o,n,c),m=r,g=d.$as||e.$as||d.as||e.as||h,v=ao(g),y=d!==e?ii({},e,{},d):e,b={};for(var w in y)"$"!==w[0]&&"as"!==w&&("forwardedAs"===w?b.as=y[w]:(u?u(w,_n,g):!v||_n(w))&&(b[w]=y[w]));return e.style&&d.style!==e.style&&(b.style=ii({},e.style,{},d.style)),b.className=Array.prototype.concat(s,l,p!==l?p:null,e.className,d.className).filter(Boolean).join(" "),b.ref=m,Nr.exports.createElement(g,b)}(m,t,e,v)};return y.displayName=f,(m=gn.forwardRef(y)).attrs=d,m.componentStyle=g,m.displayName=f,m.shouldForwardProp=p,m.foldedComponentIds=i?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):si,m.styledComponentId=c,m.target=i?t.target:t,m.withComponent=function(t){var n=e.componentId,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(e,["componentId"]),o=n&&n+"-"+(ao(t)?t:oo(hi(t)));return po(t,ii({},i,{attrs:d,componentId:o}),r)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?ho({},t.defaultProps,e):e}}),m.toString=function(){return"."+m.styledComponentId},o&&ni(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var mo=function(t){return function t(e,r,n){if(void 0===n&&(n=ui),!vr.exports.isValidElementType(r))return mi(1,String(r));var i=function(){return e(r,n,ro.apply(void 0,arguments))};return i.withConfig=function(i){return t(e,r,ii({},n,{},i))},i.attrs=function(i){return t(e,r,ii({},n,{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},i}(po,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(t){mo[t]=mo(t)}));var go=mo;const vo=36,yo=28,bo=24,wo=20,_o=16,Mo=ro`
        @media screen and (max-width: ${cr}) {
            font-size: ${vo-2}px;
        }

        @media screen and (max-width: ${dr}) {
            font-size: ${vo-4}px;
        }

        @media screen and (max-width: ${pr}) {
            font-size: ${vo-6}px;
        }

        @media screen and (max-width: ${mr}) {
            font-size: ${vo-8}px;
        }
    `,xo=ro`
        @media screen and (max-width: ${cr}) {
            font-size: ${yo-2}px;
        }

        @media screen and (max-width: ${dr}) {
            font-size: ${yo-4}px;
        }

        @media screen and (max-width: ${pr}) {
            font-size: ${yo-6}px;
        }
    `,So=ro`
        @media screen and (max-width: ${cr}) {
            font-size: ${bo-2}px;
        }

        @media screen and (max-width: ${dr}) {
            font-size: ${bo-4}px;
        }

        @media screen and (max-width: ${pr}) {
            font-size: ${bo-6}px;
        }
    `,Eo=ro`
        @media screen and (max-width: ${dr}) {
            font-size: ${wo-2}px;
        }

        @media screen and (max-width: ${pr}) {
            font-size: ${wo-4}px;
        }
    `,ko=ro`
        @media screen and (max-width: ${pr}) {
            font-size: ${_o-2}px;
        }
    `,Ao=ro`
    -webkit-font-smoothing: antialiased;
    color: ${lr.grey};
    fill: ${lr.grey};
    font-family: 'open-sans', sans-serif;
    font-size: ${vo}px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0;

    ${Mo};
`,Ro=ro`
    font-size: ${vo}px;
    line-height: 40px;
    letter-spacing: -0.75px;

    ${Mo};
`,Po=ro`
    font-size: ${yo}px;
    line-height: 36px;

    ${xo}
`,Co=ro`
    font-size: ${bo}px;
    font-weight: 700;
    line-height: 32px;

    ${So}
`,Io=ro`
    font-size: ${wo}px;
    line-height: 28px;

    ${Eo}
`,Oo=ro`
    font-size: ${_o}px;
    line-height: 25px;

    ${ko}
`,To=ro`
    font-family: IBM Plex Mono, 'Lucida Console', sans-serif;
    font-size: 16px;
    font-style: normal;
`,No=ro`
    font-family: IBM Plex Mono, 'Lucida Console', monospace;
    font-size: 14px;
`,Bo=ro`
    -webkit-font-smoothing: antialiased;
    color: ${lr.grey};
    fill: ${lr.grey};
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 24px;
`,Lo=Co,jo=Io,Do=Oo,Fo=Ao,Uo=To,qo=No,zo=Bo,$o=ro`
    font-weight: 600;
`,Wo=ro`
    font-weight: 700;
`,Ho=ro`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 24px;
`,Ko=ro`
    ${Bo};
    font-weight: 600;
`,Go=ro`
    font-weight: 500;
`,Vo=ro`
    -webkit-font-smoothing: antialiased;
    font-family: 'Open Sans', Tahoma, sans-serif;
`,Zo=ro`
    border: none;
    box-sizing: border-box;
    line-height: 1;
    margin: 0;
    outline: none;
    padding: 0;
`,Jo=ro`
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font: inherit;
    outline: inherit;
    padding: 0;
`;go.h1`
    ${Zo};
    ${Fo};
    ${Ro}
    margin-bottom: 12px;

    &:empty {
        display: none;
    }
`,go.h2`
    ${Zo};
    ${Fo};
    ${Po}
    margin-bottom: 12px;

    &:empty {
        display: none;
    }
`,go.p`
    ${Zo};
    ${zo};

    span {
        ${$o};
        color: ${lr.blue};
    }

    &:last-of-type {
        margin: 8px 0 16px;
    }
`;const Yo=Ge`
    background: ${lr.greenForestLight};
    color: ${lr.green};
`,Xo=Ge`
    background: ${lr.greenForestDark};
    color: ${lr.white};
`,Qo=Ge`
    background: ${lr.redLight};
    color: ${lr.red};
`,ta=Ge`
    background: ${lr.redDark};
    color: ${lr.white};
`,ea=Ge`
    background: ${lr.blueSkyLight};
    color: ${lr.blueDark};
`,ra=Ge`
    background: ${lr.grey};
    color: ${lr.white};
`,na=Ge`
    background: ${lr.yellowLight};
    color: ${lr.yellow};
`,ia=Ge`
    background: ${lr.yellowDark};
    color: ${lr.white};
`,oa=Ge`
    background: ${lr.blueCloud};
    color: ${lr.blueSkyDark};
`,aa=Ge`
    background: ${lr.blueCloudDark};
    color: ${lr.white};
`,sa=Ge`
    background: ${lr.purpleLight};
    color: ${lr.purple};
`,ua=Ge`
    background: ${lr.purpleDark};
    color: ${lr.white};
`;var la={coloredBlue:oa,coloredBlueDark:aa,coloredGrayDark:ra,coloredGreen:Yo,coloredGreenDark:Xo,coloredGrey:ea,coloredPink:Ge`
    background: ${lr.pinkLight};
    color: ${lr.pink};
`,coloredPinkDark:Ge`
    background: ${lr.pinkDark};
    color: ${lr.white};
`,coloredPurple:sa,coloredPurpleDark:ua,coloredRed:Qo,coloredRedDark:ta,coloredYellow:na,coloredYellowDark:ia,coloredBlueLight:Ge`
    background: ${lr.blueLight3};
    color: ${lr.blue};
`};const ha=Ge`
    ${Zo}
    ${zo}
    ${Wo};
    align-items: center;
    border-radius: 20px;
    display: flex;
    font-size: 14px;
    justify-content: center;
    overflow: hidden;
    padding: 2px 20px;
    text-align: center;
    width: 100%;
`,fa=Ge`
    background: ${lr.blueLight};
`,ca=Ge`
    background: ${lr.greenForestLight};
    color: ${lr.green};
    display: flex;

    svg {
        fill: ${lr.green};
        padding-right: 5px;
    }
`,da=Ge`
    background: ${lr.blueLight};
`,pa=Ge`
    align-items: center;
    background: ${lr.green};
    border-radius: 30px;
    color: ${lr.white};
    display: flex;
    font-size: 12px;
    height: 32px;
    justify-content: center;
    padding: 0 4px;
    width: 32px;
`;var ma={activeStatus:ca,chips:Ge`
    align-items: center;
    background: ${lr.green};
    border-left: 5px solid;
    border-radius: 5px;
    color: ${lr.white};
    display: flex;
    font-size: 12px;
    height: 32px;
    justify-content: center;
    padding: 6px 12px;
    width: 32px;
`,discount:pa,inactiveStatus:da,initialStyles:ha,regular:fa};const{activeStatus:ga,discount:va,inactiveStatus:ya,initialStyles:ba,regular:wa,chips:_a}=ma,{coloredBlue:Ma,coloredBlueDark:xa,coloredGrayDark:Sa,coloredGreen:Ea,coloredGreenDark:ka,coloredGrey:Aa,coloredPink:Ra,coloredPinkDark:Pa,coloredPurple:Ca,coloredPurpleDark:Ia,coloredRed:Oa,coloredRedDark:Ta,coloredYellow:Na,coloredYellowDark:Ba,coloredBlueLight:La}=la,ja=ur.div`
    cursor: pointer;
    display: flex;
    margin-left: 8px;
    padding: auto;
    &:hover{
        svg{
            fill: ${lr.blue};
        }
    }
`,Da=ur.div`
    ${ba}
    ${({active:t,theme:e})=>((t,e)=>{switch(t){case"status":return e?ga:ya;case"discount":return va;case"chips":return _a;default:return wa}})(e,t)}
    ${({color:t,theme:e,tone:r})=>"status"!==e&&t&&((t,e)=>{switch(t){case"green":return"light"===e?Ea:ka;case"red":return"light"===e?Oa:Ta;case"yellow":return"light"===e?Na:Ba;case"blue":return"light"===e?Ma:xa;case"blueLight":return La;case"purple":return"light"===e?Ca:Ia;case"pink":return"light"===e?Ra:Pa;case"grey":return"light"===e?Aa:Sa;default:return Aa}})(t,r)}
    width: ${({width:t})=>t};

    ${({width:t,theme:e})=>"discount"===e&&Boolean(t)&&`height: ${t}; width: ${t}; border-radius: 50%;`};

    ${({theme:t,tone:e})=>"chips"===t&&"dark"===e&&"border: 0px;"};

    ${({fontSize:t})=>Boolean(t)&&`font-size: ${t}`};
`;var Fa={SpanStyled:ja,TagStyled:Da},Ua={exports:{}},qa={},za=i,$a=Symbol.for("react.element"),Wa=Symbol.for("react.fragment"),Ha=Object.prototype.hasOwnProperty,Ka=za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ga={key:!0,ref:!0,__self:!0,__source:!0};function Va(t,e,r){var n,i={},o=null,a=null;for(n in void 0!==r&&(o=""+r),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(a=e.ref),e)Ha.call(e,n)&&!Ga.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===i[n]&&(i[n]=e[n]);return{$$typeof:$a,type:t,key:o,ref:a,props:i,_owner:Ka.current}}qa.Fragment=Wa,qa.jsx=Va,qa.jsxs=Va,Ua.exports=qa;const Za=Ua.exports.jsx,Ja=Ua.exports.jsxs,Ya=Ua.exports.Fragment,{TagStyled:Xa,SpanStyled:Qa}=Fa,ts=t=>{switch(t){case"blue":default:return lr.blue;case"red":return lr.red;case"green":return lr.green;case"yellow":return lr.yellow}},es=ur.section`
  background-color: ${lr.white};
  border: 1px solid ${t=>ts(t.theme)};
  border-radius: 20px;
  opacity: 0%;
  overflow: hidden;
  transition-delay: 0.3s;
  transition: opacity 0.3s ease-out;
`,rs=ur.header`
  display: flex;
  cursor: pointer;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 8px 12px;

  &:hover {
    background-color: ${lr.paleBlue2};
  }
`,ns=ur.h4`
  ${Zo}
  ${Fo}
    ${jo}
    line-height: 1;
  padding: 8px 0;
`;var is={DivStyled:ur.div`
  align-items: center;
  display: flex;
  justify-content: center;

  p {
    ${Zo}
    ${zo}
        margin: 0 6px;
    min-width: 100px;
    text-align: right;
  }

  svg {
    margin: 0 6px;
    min-width: 18px;
  }

  div {
    margin: 0 6px;
  }

  &:last-of-type {
    margin-left: auto;
  }
`,DivStyledContent:ur.div`
  overflow: hidden;
  transition: max-height 0.3s ease-out;
`,H4Styled:ns,HeaderStyled:rs,SectionStyled:es,getThemeColor:ts};const{SectionStyled:os,HeaderStyled:as,H4Styled:ss,DivStyled:us,DivStyledContent:ls,getThemeColor:hs}=is,fs=Ge`
    background-image: url(${t=>t.image});
    background-position: center;
    background-size: cover;
`;var cs={DivStyled:ur.div`
    background: radial-gradient(
        106.45% 108.64% at 32.33% -4.84%,
        #ecf5fc 0.52%,
        #cee4f3 100%
    );
    align-items: center;
    background: ${t=>t.avatarBackground};
    color: ${t=>t.textColor};
    display: flex;
    flex-direction: column;
    font-size: ${t=>t.fontSize}px;
    justify-content: center;
    overflow: hidden;
    position: static;
    text-transform: uppercase;
    word-break: break-all;
    ${t=>"image"===t.theme&&t.image&&fs};
    span {
        display: none;
    }
    &,
    & > svg {
        height: ${t=>t.size}px;
        width: ${t=>t.size}px;
        border-radius: ${t=>""+(t.isRounded?"50%":t.borderRadius?`${t.borderRadius}px`:"0px")};
    }
`,H4Styled:ur.h4`
    ${jo};
    ${Vo};
    ${Wo};
    ${Zo};
    color: ${t=>t.color};
    font-size: inherit;
`};const{DivStyled:ds,H4Styled:ps}=cs;var ms={DivStyled:ur.div`
    ${Zo}
    ${zo}
    align-items: center;
    border-radius: 6px;
    display: flex;
    height: min-content;
    justify-content: center;
    overflow: hidden;
    padding: 4px 10px;
    width: min-content;
    background-color: ${({state:t="normal"})=>(t=>{switch(t){case"danger":return lr.red;case"success":return lr.green;case"warning":return lr.yellow;default:return lr.blue}})(t)};
`};const gs=ur.button`
  ${Jo};
  display: inline-block;
  vertical-align: sub;

  &:first-child {
    fill: ${lr.grey};
    transition: fill 0.2s ease-out;
  }

  &:hover > svg {
    fill: ${lr.blue};
  }
`,vs=({text:t,iconSize:e=24,onCopy:r=(()=>{}),revertIn:n=3e3,...o})=>{const[,a]=(()=>{const[t,e]=(0,i.useState)(null);return[t,async t=>{if(!(null==navigator?void 0:navigator.clipboard))return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(t),e(t),!0}catch(r){return console.warn("Copy failed",r),e(null),!1}}]})(),[s,u]=(0,i.useState)(!1);return Za(gs,{className:"input_copy","data-testid":"test-copy-button",iconSize:e,onClick:e=>{r(e),a(`${t}`),u(!0),setTimeout((()=>{u(!1)}),n)},...o,children:s?Za(L,{title:"check icon",titleId:"copybutton check icon",fill:lr.green,fontSize:e}):Za(D,{title:"copy icon",titleId:"copybutton copy icon",fill:lr.blue,fontSize:e})})},ys=Ge`
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Open Sans', Tahoma, Verdana, sans-serif;
`,bs=Ge`
    ${ys};
    color: ${lr.grey};
    fill: ${lr.grey};
    font-style: normal;
    letter-spacing: 0;
`,ws=Ge`
    ${ys};
    color: ${lr.blueDark};
    fill: ${lr.blueDark};
    font-style: normal;
    letter-spacing: 0;
`,_s=Ge`
    ${ws};
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: -0.75px;
    ${Mo};
`,Ms=Ge`
    ${ws};
    font-size: 32px;
    font-weight: 400;
    line-height: 36px;
    ${xo}
`,xs=Ge`
    ${ws};
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    ${So}
`,Ss=Ge`
    ${ws};
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    ${Eo}
`,Es=Ge`
    ${ws};
    font-weight: 600;
    color: ${lr.blueDark};
    fill: ${lr.blueDark};
    font-size: 18px;
    line-height: 24px;
`,ks=Ge`
    ${ws};
    font-weight: 600;
    color: ${lr.blueDark};
    fill: ${lr.blueDark};
    font-size: 16px;
    line-height: 24px;
`,As=Ge`
    ${bs};
    font-size: 14px;
    line-height: 24px;
`,Rs=Ge`
    ${bs};
    font-size: 12px;
    line-height: 1.5;
`,Ps=Ge`
    ${bs};
    font-size: 10px;
    line-height: 1.5;
`,Cs=Ge`
    ${bs};
    font-size: 18px;
    line-height: 24px;
`,Is=Ge`
    ${bs};
    font-size: 16px;
    line-height: 24px;
`,Os=Ge`
    font-style: italic;
`,Ts=Ge`
    font-family: 'IBM Plex Mono', 'Lucida Console', monospace;
`,Ns=t=>Ge`
    ${(t=>{switch(t){case"h1":return _s;case"h2":return Ms;case"h3":return xs;case"h4":return Ss;case"subtitle1":return Es;case"subtitle2":return ks;case"body18":return Cs;case"body16":default:return Is;case"caption14":return As;case"caption12":return Rs;case"caption10":return Ps}})(t.variant||"body16")};
    ${(null==t?void 0:t.monospace)&&Ts};
    ${(null==t?void 0:t.color)&&`color: ${t.color}`};
    ${(null==t?void 0:t.italic)&&Os};
    ${(null==t?void 0:t.weight)&&(t=>{switch(t){case"regular":case"400":return Ge`
                font-weight: 400;
            `;case"medium":case"500":return Ge`
                font-weight: 500;
            `;case"semibold":case"600":return Ge`
                font-weight: 600;
            `;case"bold":case"700":return Ge`
                font-weight: 700;
            `;default:return Ge`
                font-weight: ${t};
            `}})(t.weight)};
`,{DivStyled:Bs}=(ur((({children:t,copyable:e,iconSize:r,italic:n,monospace:i,onCopy:o,variant:a="body16",...s})=>{const u=(t=>{switch(t){case"h1":return"h1";case"h2":case"subtitle1":case"subtitle2":return"h2";case"h3":return"h3";case"h4":return"h4";default:return"span"}})(a);return Ja(u,{"data-testid":"test-typography",...s,children:[t,e&&Za(vs,{iconSize:r,onCopy:o,text:`${t}`})]})}))`
    ${t=>Ns(t)};
    margin: 0;
    position: relative;
`,ms),Ls=sr`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`,js=ur.div`
    ${zo}
    display: flex;
    flex-direction: ${t=>"bottom"==t.direction?"column":"row"};
    align-items: center;
    justify-content: center;
    max-width: fit-content;
    text-align: center;
    & > span {
        color: ${t=>t.spinnerColor};
        font-weight: 500;
        font-size: ${t=>`${t.fontSize?t.fontSize:t.size&&t.size/2}px`};
        line-height: 5px;
        margin: 8px;
    }
`,Ds=ur.div`
    width: ${t=>`${t.size}px`};
    height: ${t=>`${t.size}px`};
    box-sizing: border-box;
    border: 2px solid ${t=>t.spinnerColor};
    border-bottom: transparent;
    border-right: transparent;
    border-radius: 50%;
    animation: 1s ${Ls} infinite;
`,Fs=sr`
    from {height: 2px; width: 2px;}
    to {height: 7px;width: 7px;}
`,Us=ur.div`
    display: flex;
    justify-content: center;
    width: fit-content;

    span {
        align-items: center;
        display: flex;
        height: 10px;
        justify-content: center;
        width: 10px;

        &:before {
            animation-direction: alternate;
            animation-duration: 0.4s;
            animation-iteration-count: infinite;
            animation-name: ${Fs};
            background-color: ${t=>t.spinnerColor};
            border-radius: 50%;
            content: '';
            display: block;
        }

        &#anim-delay1:before {
            animation-delay: 0s;
        }
        &#anim-delay2:before {
            animation-delay: 0.1s;
        }
        &#anim-delay3:before {
            animation-delay: 0.2s;
        }
        &#anim-delay4:before {
            animation-delay: 0.3s;
        }
        &#anim-delay5:before {
            animation-delay: 0.4s;
        }
    }
`,qs=({direction:t="bottom",fontSize:e,size:r=20,spinnerColor:n=lr.white,spinnerType:i="loader",text:o,...a})=>Ja(js,{"data-testid":"test-loading",direction:t,fontSize:e,role:"spinner",size:r,spinnerColor:n,...a,children:["loader"==i?Za(Ds,{spinnerColor:n,size:r}):Za(zs,{size:r,spinnerColor:n}),o&&Za("span",{children:o})]}),zs=({size:t,spinnerColor:e,...r})=>Ja(Us,{"aria-busy":"true","aria-label":"loading, please wait","data-testid":"test-loading",role:"alert",size:t,spinnerColor:e,...r,children:[Za("span",{"aria-hidden":"true",id:"anim-delay1"}),Za("span",{"aria-hidden":"true",id:"anim-delay2"}),Za("span",{"aria-hidden":"true",id:"anim-delay3"}),Za("span",{"aria-hidden":"true",id:"anim-delay4"}),Za("span",{"aria-hidden":"true",id:"anim-delay5"})]}),$s=Ge`
    span {
        flex-direction: row-reverse;
    }
    svg {
        margin-right: 12px;
    }
`,Ws=Ge`
    span {
        flex-direction: row;
    }
    svg {
        margin-left: 12px;
    }
`,Hs=Ge`
    align-items: center;
    border-width: 0;
    display: flex;
    height: 32px;
    justify-content: center;
    padding: 0;
    width: 32px;
    text-indent: -99999px;
`;var Ks={getIconColor:t=>Ge`
        svg {
            fill: ${t};
        }
    `,getIconLayoutStyles:t=>{switch(t){case"trailing":return Ws;case"icon-only":return Hs;default:return $s}},largeIconResize:()=>Ge`
    border-width: 4px;
    height: 40px;
    width: 40px;
`,smallIconResize:()=>Ge`
    height: 24px;
    width: 24px;
`};const Gs=Ge`
    border-radius: 20px;
    font-size: 14px;
    padding: 0 16px;
`,Vs=Ge`
    font-size: 14px;
    padding: 2px 14px;
`,Zs=Ge`
    padding: 6px 22px;
`,Js=Ge`
    padding: 16px 24px;
`;var Ys={getSizeStyles:t=>{switch(t){case"large":return Zs;case"small":return Gs;case"xl":return Js;default:return Vs}}};var Xs={linkStyles:Ge`
    background-color: transparent;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid ${lr.blue};
    padding: 0px;
    color: ${lr.blue};

    :active {
        border-width: 0px;
        border-bottom: 1px solid ${lr.blue};
    }

    :hover {
        color: ${lr.blueSkyDark};
        border-bottom: 1px solid ${lr.blueSkyDark};
    }

    svg {
        fill: ${lr.blue};
    }
`,textStyles:Ge`
    background-color: transparent;
    border-width: 0px;
    color: ${lr.blue};

    svg {
        fill: ${lr.blue};
    }
`,transparentStyles:Ge`
    background-color: transparent;
    border-color: transparent;
`};const{getIconColor:Qs,getIconLayoutStyles:tu,largeIconResize:eu,smallIconResize:ru}=Ks,{getSizeStyles:nu}=Ys,{linkStyles:iu,textStyles:ou,transparentStyles:au}=Xs;var su={BaseButtonStyled:ur.button`
    ${Zo}
    ${zo}
    align-items: center;
    background-origin: border-box;
    border-radius: ${({radius:t})=>t?`${t}px;`:"12px"};
    border: 2px solid transparent;
    cursor: pointer;
    display: flex;
    font-weight: 600;
    justify-content: center;
    overflow: hidden;
    padding: 2px 4px;
    position: relative;
    text-align: center;
    transition: all 0.2s ease;
    width: ${t=>t.isFullWidth?"100%":"fit-content"};

    :hover {
        background-color: ${fr("light",10)};
    }

    :focus {
        border-color: ${lr.blue};
    }

    :disabled {
        opacity: 50%;
        pointer-events: none;
    }

    span {
        align-items: center;
        display: flex;
        pointer-events: none;
        z-index: 1;
    }

    svg {
        pointer-events: none;
        z-index: 1;
    }

    // minor theme and props style corrections
    ${({isTransparent:t})=>t&&au}
    ${({theme:t,size:e})=>"link"!==t&&e&&nu(e)}
    ${({theme:t})=>"link"===t&&iu}
    ${({theme:t})=>"text"===t&&ou}

    // if icon styles corrections
    ${({icon:t,iconLayout:e})=>t&&e&&tu(e)}
    ${({icon:t,iconLayout:e,size:r})=>t&&"icon-only"===e&&"small"===r&&ru()}
    ${({icon:t,iconLayout:e,size:r})=>t&&"icon-only"===e&&"large"===r&&eu()}
    ${({icon:t,iconColor:e})=>t&&e&&Qs(e)}
`};const{BaseButtonStyled:uu}=su,lu=({disabled:t=!1,icon:e,iconColor:r,iconLayout:n="leading",id:i,isLoading:o=!1,isTransparent:a=!1,loadingProps:s,loadingText:u="Loading...",onClick:l=(t=>t.preventDefault),radius:h,size:f="regular",theme:c="secondary",text:d="click",type:p="button",...m})=>Za(uu,{"data-testid":"test-button",disabled:t||o,icon:e,iconColor:r,iconLayout:n,isTransparent:a,id:i,onClick:t=>l(t),radius:h,size:f,theme:c,type:p,...m,children:Za("span",{children:Ja(Ya,o?{children:[Za(qs,{size:15,...s}),u]}:{children:[d,e&&e]})})});(0,i.lazy)((()=>r.e(587).then(r.bind(r,97587)))),(0,i.lazy)((()=>r.e(300).then(r.bind(r,10300)))),(0,i.lazy)((()=>r.e(100).then(r.bind(r,77100)))),(0,i.lazy)((()=>r.e(85).then(r.bind(r,86085)))),(0,i.lazy)((()=>r.e(801).then(r.bind(r,61801)))),(0,i.lazy)((()=>r.e(301).then(r.bind(r,6301))));var hu={SectionStyled:ur.section`
    ${zo};
    align-items: center;
    color: ${lr.white};
    display: flex;
    height: 40px;
    justify-content: center;
    left: 0;
    max-width: 100%;
    padding: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 10001;
    background-color: ${t=>t.type&&(t=>{switch(t){case"success":return lr.green;case"warning":return lr.yellow;case"error":return lr.red;default:return lr.blue}})(t.type)};
    height: ${({height:t})=>t};

    button {
        padding: 0 8px;
        margin: 2px 6px;
        border: 0;
    }

    strong {
        margin: 0 8px;
        padding: 2px 8px;
        line-height: 16px;
    }
`};const{SectionStyled:fu}=hu,cu=Ge`
  ${Zo};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
`,du=Ge`
  ${Zo};
`,pu=Ge`
  ${Zo};
  color: ${lr.greyIcons};
  display: flex;
  margin: 0 2px;
  user-select: none;
`,mu=ur.nav`
  ${du};
  color: ${t=>(null==t?void 0:t.color)||lr.grey};
`,gu=ur.ol`
  ${cu};
`,vu=ur.li`
  align-items: center;
  display: flex;

  svg:first-child {
    margin-right: 5px;
  }

  &:last-child {
    pointer-events: none;
  }
`;var yu={Breadcrumb:ur(x)`
  ${Ko};
  align-items: center;
  display: flex;
  text-decoration: none;
  transition: all 0.2s ease;
  user-select: none;
  &:hover {
    color: ${lr.blueDark};
  }
`,BreadcrumbsSeparator:ur.li`
  ${pu};
`,ListItemStyled:vu,ListStyled:gu,NavStyled:mu};const{Breadcrumb:bu,BreadcrumbsSeparator:wu,ListItemStyled:_u,ListStyled:Mu,NavStyled:xu}=yu;const Su=Ge`
  position: absolute;
  height: 0;
  width: 0;
`,Eu=Ge`
  right: ${t=>t.width&&`calc(${t.width}px + 10px)`};
  top: 50%;
  transform: translateY(${t=>`${t.moveBody}%`});
`,ku=Ge`
  ${Su};
  border-bottom: 10px solid transparent;
  border-left: 10px solid ${lr.blueDark2};
  border-top: 10px solid transparent;
  right: -10px;
  top: calc(${t=>`${t.move}%`} - 10px);
`,Au=Ge`
  left: ${t=>t.width&&`calc(${t.width}px + 10px)`};
  top: 50%;
  transform: translateY(${t=>`${t.moveBody}%`});
`,Ru=Ge`
  ${Su};
  border-bottom: 10px solid transparent;
  border-right: 10px solid ${lr.blueDark2};
  border-top: 10px solid transparent;
  left: -10px;
  top: calc(${t=>`${t.move}%`} - 10px);
`,Pu=Ge`
  bottom: ${t=>t.height&&`calc(${t.height}px + 10px)`};
  left: 50%;
  transform: translateX(${t=>`${t.moveBody}%`});
`,Cu=Ge`
  left: 50%;
  top: ${t=>t.height&&`calc(${t.height}px + 10px)`};
  transform: translateX(${t=>`${t.moveBody}%`});
`,Iu={top:Ge`
  ${Su};
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid ${lr.blueDark2};
  left: calc(${t=>`${t.move}%`} - 10px);
  top: 100%;
`,bottom:Ge`
  ${Su}
  border-bottom: 10px solid ${lr.blueDark2};
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  left: calc(${t=>`${t.move}%`} - 10px);
  top: -10px;
`,left:ku,right:Ru},Ou={top:Pu,bottom:Cu,left:Eu,right:Au},Tu=ur.div`
  ${Vo}
  ${Zo}
    color: #252525;
  position: relative;
`,Nu=ur.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  z-index: 1;
  min-width: ${t=>t.minWidth}px;
  ${({position:t})=>Ou[t]};
`,Bu=ur.div`
  &:hover + ${Nu} {
    opacity: 1;
    visibility: visible;
    transition: 0.5s;
    transition-delay: 0.1s;
  }
`,Lu=ur.div`
  background-color: ${lr.blueDark2};
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: ${t=>t.maxWidth&&`${t.maxWidth}px`};
  min-width: fit-content;
  padding: 10px;
  transition: 0.5ms;
`;var ju={DivStyled:Nu,DivStyledArrow:ur.div`
  ${({position:t})=>Iu[t]}
`,DivStyledTooltipParent:Tu,DivStyledTooltipContent:Bu,DivStyledTooltipText:Lu};const{DivStyled:Du,DivStyledArrow:Fu,DivStyledTooltipParent:Uu,DivStyledTooltipContent:qu,DivStyledTooltipText:zu}=ju,$u=ur.div`
  ${Zo};
  ${zo};
  outline: 2px solid transparent;
  background: ${lr.blueLight};
  border-radius: 20px;
  display: grid;
  min-height: fit-content;
  padding: 11px;
  position: relative;
  transition: all 0.2s ease;
  width: 100%;
  ${t=>t.isDisabled?"opacity:70%;":"&:hover {\n        background: radial-gradient(\n            102.8% 102.8% at 3.14% -9.06%,\n            #e9fffc 0%,\n            #e8fefb 4.74%,\n            #e4f4f7 50.11%,\n            #e1eef4 83.07%,\n            #e0ecf3 100%\n        );\n    }"}
  ${t=>"pointer"===t.cursorType&&"cursor: pointer;"}
    ${t=>t.isSelected&&`outline-color: ${lr.green};`}
`;var Wu={AbsoluteIconStyled:ur.div`
  position: absolute;
  top: -2px;
  ${t=>"topL"===t.position?"left: -2px;":"right: -2px;"}
`,DivStyled:$u,FooterStyled:ur.footer`
  display: grid;
  text-align: center;
`,HeaderStyled:ur.div`
  position: relative;
`};const{AbsoluteIconStyled:Hu,DivStyled:Ku,FooterStyled:Gu,HeaderStyled:Vu}=Wu;ur.div`
    ${Zo}
    align-items: center;
    display: flex;
    height: ${t=>t.height};
    justify-content: center;
    width: ${t=>t.width};
`;var Zu={arbitrum:"linear-gradient(113.54deg, rgba(60, 87, 140, 0.5) 14.91%, rgba(70, 86, 169, 0.5) 43.21%, rgba(125, 150, 217, 0.345) 44.27%, rgba(129, 161, 225, 0.185) 55.76%), linear-gradient(151.07deg, #141659 33.25%, #4152A7 98.24%)",fantom:"linear-gradient(113.54deg, rgba(117, 183, 251, 0.531738) 14.91%, rgba(10, 41, 255, 0.6) 42.57%, rgba(25, 105, 255, 0.336) 45.98%, rgba(25, 105, 255, 0.03) 55.76%), linear-gradient(160.75deg, #071AFF 41.37%, #45D4FF 98.29%)",avalanche:"linear-gradient(113.54deg, rgba(119, 0, 1, 0.5) 14.91%, rgba(216, 43, 44, 0.5) 43.21%, rgba(255, 130, 130, 0.345) 44.27%, rgba(220, 96, 97, 0.185) 55.76%), linear-gradient(151.07deg, #8F0E0F 33.25%, #FA4A4B 98.24%)",polygon:"linear-gradient(113.54deg, rgba(103, 58, 194, 0.6) 14.91%, rgba(122, 74, 221, 0.498) 44.27%, rgba(170, 129, 255, 0.222) 45.98%, rgba(209, 103, 255, 0.03) 55.76%), linear-gradient(160.75deg, #7A4ADD 41.37%, #D57BFF 98.29%)",binance:"linear-gradient(113.54deg, rgba(217, 166, 54, 0.6) 14.91%, rgba(230, 166, 26, 0.6) 44.27%, rgba(207, 168, 28, 0) 45.98%, rgba(250, 228, 30, 0) 55.76%, rgba(245, 223, 30, 0) 55.76%), linear-gradient(147.17deg, #F5D116 48.73%, #CD9614 98.22%)",ethereum:"linear-gradient(113.54deg, rgba(117, 183, 251, 0.531738) 14.91%, rgba(215, 38, 243, 0.6) 42.57%, rgba(252, 84, 255, 0.336) 45.98%, rgba(209, 103, 255, 0.03) 55.76%), linear-gradient(160.75deg, #AB42CB 41.37%, #45FFFF 98.29%)",cronos:"#012d74",coinbase:"linear-gradient(113.54deg, rgba(45, 91, 104, 0.531738) 14.91%, rgba(0, 4, 48, 0.6) 42.57%, rgba(45, 91, 104, 0.336) 45.98%, rgba(0, 4, 48, 0.03) 55.76%), linear-gradient(160.75deg, #000430 41.37%, #223F47 98.29%), linear-gradient(113.54deg, rgba(117, 183, 251, 0.531738) 14.91%, rgba(10, 41, 255, 0.6) 42.57%, rgba(25, 105, 255, 0.336) 45.98%, rgba(25, 105, 255, 0.03) 55.76%), linear-gradient(160.75deg, #071AFF 41.37%, #45D4FF 98.29%)"};var Ju={DivStyledCryptoLogo:ur.div`
  ${Zo};
  ${t=>{return Ge`
  height: ${e=t.size};
  width: ${e};
`;var e}}
  align-items: center;
  border-radius: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  background: ${t=>{return(null==t?void 0:t.bgColor)||(e=t.chain,Zu[e]);var e}};
`};const{DivStyledCryptoLogo:Yu}=Ju,Xu={GridStyled:ur.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(154px, 1fr));
    width: 100%;
`,GridElementStyled:ur.div`
    height: 144px;
    & > div {
        height: 100%;
    }
`,CardContentStyled:ur.div`
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
    margin-top: 13px;
`},{GridStyled:Qu,CardContentStyled:tl,GridElementStyled:el}=Xu,rl=Ge`
    ${Zo};
    height: 10px;
    left: -12px;
    position: absolute;
    top: 0;
    width: 10px;
`,nl=Ge`
    ${Zo};
    ${zo};
    color: ${lr.blueDark};
    cursor: pointer;
    display: block;
    font-size: 18px;
    margin-bottom: 4px;
    overflow: hidden;
    position: relative;
    width: fit-content;
`,il=Ge`
    opacity: 50%;
    pointer-events: none;
`,ol=Ge`
    padding-left: 28px;

    &:before,
    .after {
        border-radius: 5px;
        content: '';
        display: block;
        height: 20px;
        left: 0;
        pointer-events: none;
        position: absolute;
        top: 1px;
        transition: all 0.1s ease-out;
        width: 20px;
    }

    &:before {
        background-color: ${lr.blueLight};
        border: 1px solid ${lr.blueSky};
        z-index: 0;
    }

    .after {
        align-items: center;
        display: flex;
        justify-content: center;
        left: 1px;
        opacity: 0;
        top: 2px;
        z-index: 1;
    }

    &:hover {
        &:before {
            filter: brightness(95%);
        }
    }

    &:active {
        &:before {
            filter: brightness(90%);
        }
    }
`,al=Ge`
    &:before {
        background-color: ${lr.green};
        border-color: ${lr.greenLight};
    }
    .after {
        opacity: 1;
    }
`,sl=Ge`
    padding-left: 48px;

    &:before {
        background-color: ${lr.greyLight};
        border-radius: 7px;
        content: '';
        display: block;
        height: 14px;
        left: 3px;
        opacity: 0.4;
        position: absolute;
        top: calc(50% - 7px);
        transition: all 0.1s ease-out;
        width: 34px;
    }

    &:after {
        background-color: ${lr.blueLight};
        border-radius: 50%;
        border: 1px solid ${lr.blue};
        content: '';
        display: block;
        height: 20px;
        left: 0;
        position: absolute;
        top: calc(50% - 11px);
        transition: all 0.1s ease-out;
        width: 20px;
    }

    &:hover {
        &:after {
            filter: brightness(95%);
        }
    }

    &:active {
        &:after {
            filter: brightness(90%);
        }
    }
`,ul=Ge`
    &:before {
        background-color: ${lr.green};
    }

    &:after {
        background-color: ${lr.green};
        border: 1px solid ${lr.green};
        left: 18px;
    }
`;var ll={StyledInput:ur.input`
    ${rl}
`,StyledLabel:ur.label`
    ${nl}
    ${t=>t.disabled&&il}
    ${t=>"box"===t.layout&&ol}
    ${t=>"box"===t.layout&&t.checked&&al}
    ${t=>"switch"===t.layout&&sl}
    ${t=>"switch"===t.layout&&t.checked&&ul}
`};const{StyledInput:hl,StyledLabel:fl}=ll,cl=ur.textarea`
  ${Zo};
  ${qo};
  ${Ho}
  background: ${lr.blueLight};
  overflow-x: auto;
  padding: 16px 8px;
  position: relative;
  width: 100vw;

  color: ${lr.blueDark};
  font-style: italic;
  overflow-y: hidden;
  white-space: pre;
  resize: none;
`,dl=ur.div`
  display: flex;
`,pl=ur.div`
  margin: 19px;
  position: absolute;
  right: 0;
`,ml=ur.div`
  background: ${lr.blueLight2};
  overflow: hidden;
  padding: 16px 8px 0px 23px;
`,gl=ur.ul`
  ${Zo};
  list-style: none;
  text-align: right;
`,vl=ur.div`
  border-radius: 16px;
  border: 2px solid ${lr.paleBlue2};
  display: flex;
  max-height: 100%;
  max-width: fit-content;
  overflow: hidden;
  position: relative;
  flex-direction: column;
`,yl=Ge`
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  box-shadow: 0px 8px 5px -2px ${lr.blueSky};
  overflow: hidden;
`,bl={WidthWrapperStyled:ur.div`
  border-bottom: 2px solid ${lr.paleBlue2};
  max-height: ${t=>t.maxHeight};
  max-width: ${t=>t.maxWidth};

  ${t=>t.maxHeight&&!t.isMaximized&&yl};
`,SideStyled:ml,StyledUl:gl,TextAreaStyled:cl,WrapperStyled:vl,ContentStyled:dl,HeaderStyled:ur.div`
  padding: 8px 16px;
  border-bottom: 1px solid ${lr.paleBlue2};
`,DivStyledButtonWrap:pl},{SideStyled:wl,StyledUl:_l}=bl,{ContentStyled:Ml,HeaderStyled:xl,DivStyledButtonWrap:Sl,TextAreaStyled:El,WidthWrapperStyled:kl,WrapperStyled:Al}=bl,Rl=ur.div`
    background: ${lr.blueLight};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    position: relative;
    width: ${t=>t.width};

    @media (max-width: 600px) {
        padding: 16px 8px;
    }
`,Pl=ur.pre`
    ${Zo};
    display: flex;
    height: max-content;
    justify-content: space-between;
    position: relative;

    @media (max-width: 600px) {
        width: 100%;
    }
`,Cl=ur.div`
    align-self: flex-end;
    display: flex;
    font-size: 24px;
    margin-left: 8px;
`,Il=ur.div`
    position: relative;
    margin: 0 8px;
    &:before {
        border-left: 2px solid ${lr.paleBlue2};
        content: '';
        height: 24px;
        position: absolute;
        width: 0;
    }
`;var Ol={CredentialsStyled:Rl,DivWrapperStyled:ur.div`
    ${Zo};
    overflow-x: ${t=>t.isHidden?"hidden":t.isMultiline&&"auto"};
    width: 90%;

    @media (max-width: 600px) {
        width: 80%;
    }
`,DividerStyled:Il,PreformattedStyled:Pl,ToolsStyled:Cl};ur.div`
    align-items: center;
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
`,ur.button`
    ${Jo};
    cursor: pointer;
`;const{CredentialsStyled:Tl,DividerStyled:Nl,DivWrapperStyled:Bl,PreformattedStyled:Ll,ToolsStyled:jl}=Ol;ur.div`
    ${Zo};
    ${zo};
    background: ${({brand:t})=>(t=>{switch(t){case"amex":return hr.lightBlue;case"diners":return hr.purpleToPink;case"mastercard":return hr.blue;case"visa":return hr.goldShiny}})(t)};
    border: 2px solid ${Dl=lr.white,Fl=40,`rgba(${parseInt(Dl.slice(1,3),16)},${parseInt(Dl.slice(3,5),16)},${parseInt(Dl.slice(5,7),16)},${Number(Fl)/100})`};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 17%;
    padding: 16px;
    height: 154px;
    width: 277px;

    ${({isExpired:t,pressed:e})=>t?Ul:e?ql:""}
`;var Dl,Fl;ur.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
`,ur.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;

    svg {
        cursor: pointer;
    }
`,ur.div`
    color: white;
    display: flex;
    margin-right: 8px;
`;ur.div`
    display: grid;
    place-items: center;

    :hover {
        cursor: pointer;
    }
`;ur.p`
    ${Ko};
    color: ${lr.white};
    font-size: 18px;
    line-height: 24px;
    margin: 0;
`,ur.p`
    ${Ko}
    color: ${t=>t.isExpired?lr.red:lr.white};
    font-size: 12px;
    line-height: 16px;
    margin: 0 0 0 5px;
`;const Ul=Ge`
    border-color: ${lr.red};
`,ql=Ge`
    border-color: ${lr.green};
`,zl=ur.div`
  ${Zo};
  align-items: center;
  background: ${t=>t.color};
  border-radius: 16px;
  border: 1px solid ${fr("light",10)};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  left: 20px;
  max-width: 256px;
  overflow: hidden;
  padding: 24px, 40px, 24px, 40px;
  position: relative;
  top: 20px;
  width: 100%;

  :after {
    content: '';
    display: block;
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: all 0.3s ease;
    width: 100%;
    z-index: 0;
  }

  :hover {
    box-shadow: 0px 0px 400px 400px rgba(4, 24, 54, 0.2) inset;
  }
  background: ${t=>t.color};
`,$l=ur.div`
  flex-grow: 0;
  flex: none;
  height: 160px;
  left: 21px;
  order: 0;
  position: static;
  top: 0px;
  width: 120px;
`,Wl=ur.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex: none;
  height: 224px;
  left: 51.5px;
  margin: 16px 0px;
  order: 0;
  padding: 0px;
  position: static;
  top: 28px;
  width: 162px;
`,Hl=ur.div`
  border-radius: 0px;
  height: 136px;
`,Kl=ur.div`
  bottom: 0%;
  color: ${lr.white};
  flex-grow: 0;
  flex: none;
  height: 64px;
  left: calc(50% - 162px / 2);
  margin: 0px 0px;
  order: 1;
  overflow: hidden;
  position: static;
  text-align: center;
  top: 71.43%;
  width: 100%;
`;var Gl={DivStyledCryptoCard:zl,DivStyledButton:ur.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  flex: none;
  height: 40px;
  justify-content: center;
  left: 39px;
  margin: 16px 0px;
  order: 1;
  position: static;
  top: 268px;
  width: 187px;
`,DivStyledImage:$l,DivStyledInfo:Wl,DivStyledLogo:Hl,DivStyledNetworkInfo:Kl,PStyledChainName:ur.p`
  ${Vo};
  ${Go};
  font-size: 32px;
  height: 55%;
  margin: 0;
  overflow: hidden;
  word-break: break-all;
`,PStyledNetwork:ur.p`
  ${Vo};
  ${Wo};
  font-size: 20px;
  height: 36px;
  line-height: 36px;
  margin: 0;
  overflow: hidden;
  word-break: break-all;
`};const{DivStyledCryptoCard:Vl,DivStyledButton:Zl,DivStyledImage:Jl,DivStyledInfo:Yl,DivStyledLogo:Xl,DivStyledNetworkInfo:Ql,PStyledChainName:th,PStyledNetwork:eh}=Gl,rh=(ur.span`
  ${Zo};
  align-items: center;
  background-color: ${lr.white};
  border-radius: 50%;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 5px;
  pointer-events: none;
  position: absolute;
  right: 10px;
  top: 0;
`,ur.div`
    ${Zo}
    border-radius: 16px;
    display: flex;
    max-width: 100%;
    min-width: fit-content;
    outline: 1px solid;
    position: relative;
    transition: all 0.1s linear;

    outline-color: ${({state:t})=>{switch(t){case"error":return lr.red;case"confirmed":return lr.green;case"disabled":return lr.greyDisabled;default:return lr.greyLight}}};

    & > * > * > * {
        ${t=>"disabled"===t.state&&` fill: ${lr.greyDisabled};`};
    }

    &:hover {
        outline-color: ${t=>"disabled"!==t.state&&lr.blue};

        strong {
            overflow: visible;
            text-overflow: unset;
            white-space: pre-wrap;
        }
    }

    &:hover > .input_prefixIcon > svg {
        fill: ${t=>!(null==t?void 0:t.state)&&lr.blue};
    }

    input {
        & + label {
            color: ${({state:t})=>{switch(t){case"error":return lr.red;case"confirmed":return lr.green;case"disabled":return lr.greyDisabled;default:return lr.grey}}};
        }
    }

    &:hover {
        ${t=>"error"===t.state&&`outline-color: ${lr.red};`}
        ${t=>"confirmed"===t.state&&`outline-color: ${lr.green};`}

        label {
            ${t=>!(null==t?void 0:t.state)&&`color: ${lr.blue};`}
        }
    }

    :not(&:focus-within) {
        &.input_filled {
            outline-color: ${lr.blueSky} !important;
        }
    }

    &:focus-within,
    &.input_filled {
        outline: 2px solid ${lr.blue};

        label {
            font-weight: 600;
            ${t=>!(null==t?void 0:t.state)&&`color: ${lr.blue};`}
        }

        ${t=>"error"===t.state&&`outline-color: ${lr.red};`}
        ${t=>"confirmed"===t.state&&`outline-color: ${lr.green};`}
    }

    ${({size:t})=>"large"===t?Ge`
                    height: 56px;
                    padding: 14px 16px;
                    & > label {
                        top: 15px;
                    }
                `:Ge`
                    height: 40px;
                    padding: 8px 16px;
                    & > label {
                        top: 8px;
                    }
                `}
`),nh=ur.label`
    ${Zo}
    ${zo}
    background-color: ${({labelBgColor:t})=>t||lr.white};
    height: 24px;
    left: ${({hasPrefix:t})=>t?"48px":"16px"};
    pointer-events: none;
    position: absolute;
    transition: all 0.1s ease-out;
    z-index: 1;
`,ih=ur.input`
    ${Zo}
    ${zo}
    background-color: transparent;
    overflow: hidden;
    transition: all 0.1s ease-out;
    width: 100%;
    ${t=>t.customInput&&"width: 0px; height:0px;"}

    &:focus,
    &:placeholder-shown,
    .input_filled & {
        + label {
            font-size: 14px;
            height: 18px;
            line-height: 1;
            padding: 2px 4px;
            top: -13px;
            left: 12px;
        }
    }

    &:focus {
        &::placeholder {
            display: none;
            visibility: visible;
            color: ${lr.grey};
        }
    }

    &:-webkit-autofill,
    :-webkit-autofill:focus {
        transition: background-color 600000s 0s, color 600000s 0s;
    }
`,oh=Ge`
    ${Zo}
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    max-width: 24px;
    width: 100%;

    & :first-child {
        fill: ${lr.grey};
        transition: fill 0.2s ease-out;
        width: 100%;
        height: 100%;
    }
`,ah=ur.div`
    ${oh}
    margin-right: 12px;
`,sh=ur.div`
    height: 100%;
    justify-content: center;
    margin-left: 24px;
    max-width: 24px;
    position: relative;
    width: 100%;

    & :first-child {
        width: 100%;
        height: 100%;
    }

    &:before {
        border-left: 1px solid ${lr.paleBlue2};
        content: '';
        height: 24px;
        left: -12px;
        position: absolute;
        width: 0;
    }
`,uh=ur.button`
    ${Jo}
    ${oh}
    position: relative;
    margin-left: 12px;

    &:hover > svg {
        fill: ${lr.blue};
    }
`;var lh={CopyContainerStyled:sh,DivStyled:ah,DivWrapperStyled:rh,InputStyled:ih,LabelStyled:nh,StrongStyled:ur.strong`
    ${Zo}
    ${zo}
    bottom: -23px;
    color: ${t=>t.isError?lr.red:lr.grey};
    font-size: 12px;
    height: 24px;
    left: 16px;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 26px);
`,VisibilityIcon:uh};const{DivWrapperStyled:hh,InputStyled:fh,LabelStyled:ch,StrongStyled:dh}=lh,{CopyContainerStyled:ph,DivStyled:mh,DivWrapperStyled:gh,InputStyled:vh,LabelStyled:yh,StrongStyled:bh,VisibilityIcon:wh}=(ur.div`
  ${Zo}
  display: flex;
  fill: ${lr.grey};
  flex-direction: column;
  height: fit-content;
  position: relative;
  row-gap: 16px;
  ${t=>t.isDisabled&&"opacity: 50%;"}
`,ur.div`
  border-radius: 16px;
  border: 1px solid ${t=>t.hasOutline?lr.greyLight:"transparent"};
  color: ${lr.blue};
  cursor: pointer;
  height: 40px;
  min-height: fit-content;
  min-width: fit-content;
  outline: 0px solid transparent;
  transition: all 0.3s ease;
  width: ${t=>t.width};
  & > div {
    align-items: center;
    color: inherit;
    display: flex;
    gap: 2px;
    padding: 8px;
    transition: all 0.3s ease;
    & :nth-child(2) {
      margin-right: auto;
      white-space: nowrap;
    }
    & :nth-child(3) {
      margin-left: auto;
    }
  }
  &:hover {
    border-color: ${t=>t.hasOutline?lr.blueSky:"transparent"};
  }
  &:focus {
    border: 2px solid ${lr.blueSky};
  }
  ${t=>t.isOpen&&Ge`
      ${t.hasOutline&&"outline: 4px solid rgba(158, 204, 234, 0.3)"};
      border-color: ${t.hasOutline?lr.blue:"transparent"};
    `};
`,ur.div`
  background-color: #f2f6ff;
  border-radius: 16px;
  border: 2px solid ${lr.blueSky};
  display: flex;
  flex-direction: column;
  margin-top: -8px;
  overflow: hidden;
  position: absolute;
  top: 56px;
  transition: all 0.3s ease;
  width: ${t=>t.width};
  z-index: 999;
  display: ${t=>t.isOpen?"block":"none"};
`,ur.div`
  padding: 8px;
`,ur.div`
  color: #041836;
  cursor: pointer;
  display: flex;
  grid-gap: 8px;
  padding: 6px 16px 6px 16px;
  transition: all 0.3s ease;
  &:hover {
    border-radius: 8px;
    background-color: #ebeff9;
  }
`,ur.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 0px;
`,lh),_h=ur.fieldset`
    ${Zo};
    display: flex;
    flex-direction: 'column';
    flex-wrap: wrap;
    overflow: hidden;
    position: relative;
`,Mh=ur.legend`
    ${Zo};
    ${Fo}
    ${Lo}
    color: ${lr.grey};
    display: block;
    margin-bottom: 4px;
`;var xh={DivStyled:ur.div`
    opacity: ${t=>t.disabled&&.5};
    position: relative;
`,DivWrapperStyled:ur.div`
    align-items: ${({isRow:t})=>t?"center":"flex-start"};
    flex-direction: ${t=>t.isRow?"row":"column"};
    gap: ${t=>t.isRow&&"12px"};
    display: flex;
    flex-wrap: wrap;
`,FieldsetStyled:_h,LabelStyled:ur.label`
    ${Zo};
    /* ${Fo} */
    ${zo}
    padding-left: ${t=>t.isCreditCardMode?"0":"28px"};
    align-content: center;
    color: ${lr.greyDark};
    display: flex;
    line-height: 20px;
    margin-bottom: 12px;
    position: relative;
    width: fit-content;

    &:before {
        left: ${t=>t.isCreditCardMode?"20px":"0"};
        top: ${t=>t.isCreditCardMode?"20px":"0"};
        background-color: ${lr.blueLight};
        border-radius: 50%;
        border: 1px solid ${lr.blueSky};
        content: '';
        display: block;
        height: 18px;
        position: absolute;
        transition: all 0.1s ease-out;
        width: 18px;
    }

    &:after {
        left: ${t=>t.isCreditCardMode?"26px":"6px"};
        top: ${t=>t.isCreditCardMode?"26px":"6px"};
        background-color: ${lr.white};
        border-radius: 50%;
        content: '';
        display: block;
        height: 8px;
        opacity: 0;
        position: absolute;
        transition: all 0.2s ease-out;
        width: 8px;
    }

    &:hover {
        &:before {
            filter: brightness(95%);
        }
    }

    &:active {
        &:before {
            filter: brightness(90%);
        }
    }
`,LegendStyled:Mh,RadioButtonStyled:ur.input`
    position: absolute;

    &:checked {
        & + label {
            &:before {
                background-color: ${lr.green};
                border-color: ${lr.greenLight};
            }
            &:after {
                opacity: 1;
            }
        }
    }
`};const{DivStyled:Sh,DivWrapperStyled:Eh,FieldsetStyled:kh,LabelStyled:Ah,LegendStyled:Rh,RadioButtonStyled:Ph}=xh,Ch=ur.div`
    ${Zo};
    display: inline-block;
    position: relative;
`,Ih=ur.label`
  ${Zo}
  ${zo}
    background-color: ${lr.white};
  height: 24px;
  left: ${({hasPrefixIcon:t,hasSelectedIndex:e})=>t&&!e?50:12}px;
  line-height: 1;
  pointer-events: none;
  position: absolute;
  padding: 0 4px;
  transition: all 0.1s ease-out;
  ${({hasSelectedIndex:t})=>t?"top: -9px; font-size: 14px;":"top: 20px;"};
`,Oh=ur.span`
    margin-right: px;
`,Th=ur.div`
    ${Zo};
    ${zo};
    background-color: ${lr.white};
    border-radius: 16px;
    border: 2px solid;
    cursor: pointer;
    display: flex;
    height: 56px;
    overflow: hidden;
    padding: 14px 50px 14px 16px;
    transition: all 0.1s linear;

    border-color: ${({state:t})=>{switch(t){case"error":return lr.red;case"confirmed":return lr.green;case"disabled":return lr.greyDisabled;default:return lr.greyLight}}};

    ${({hasPrefixIcon:t})=>t&&"gap: 13px"};

    ${({state:t})=>"disabled"===t&&`& * {fill: ${lr.greyDisabled};} color: ${lr.greyDisabled} !important;`};

    &:hover {
        border-color: ${t=>"disabled"!==t.state&&lr.blueSky};
    }

    &:focus {
        border-color: ${lr.blue};

        & + label {
            color: ${lr.blue};
        }
    }

    &:hover {
        ${t=>"error"===t.state&&`border-color: ${lr.red};`}
        ${t=>"confirmed"===t.state&&`border-color: ${lr.green};`}

        & + label {
            ${t=>!(null==t?void 0:t.state)&&`color: ${lr.blue};`}
        }
    }

    &:focus {
        ${t=>"error"===t.state&&`border-color: ${lr.red};`}
        ${t=>"confirmed"===t.state&&`border-color: ${lr.green};`}
        & + label {
            ${t=>"error"===t.state&&`color: ${lr.red};`}
            ${t=>"confirmed"===t.state&&`color: ${lr.green};`}
        }
    }

    & + label {
        color: ${({state:t})=>{switch(t){case"error":return lr.red;case"confirmed":return lr.green;case"disabled":return lr.greyDisabled;default:return lr.grey}}};
    }
`,Nh=Ge`
    align-items: center;
    display: flex;
    justify-content: center;
    max-height: 24px;
    max-width: 24px;
    width: 100%;
`,Bh=ur.div`
    ${Zo}
    ${Nh}
    margin-right: 13px;
    & :first-child {
        width: 100%;
        height: 100%;
    }
`,Lh=ur.div`
    ${Nh};
    position: absolute;
    right: 16px;
`,jh=ur.label`
    ${Zo}
    ${zo}
    bottom: -23px;
    color: ${lr.red};
    font-size: 12px;
    height: 24px;
    left: 16px;
    pointer-events: none;
    position: absolute;
`,Dh=ur.div`
  ${Zo}
  ${zo}
    background-color: ${lr.blueLight};
  border-radius: 16px;
  border: 2px solid ${lr.blueSky};
  left: 0;
  margin-top: 10px;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 10;
  max-height: 265px;
  overflow: auto;

  &::-webkit-scrollbar {
    background: none;
    height: 0;
    width: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${lr.greyIcons};
    border-radius: 30px;
    border: 8px solid transparent;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }
  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`,Fh=ur.div`
    ${Zo};
    align-items: center;
    cursor: pointer;
    display: flex;
    padding: 14px 50px 14px 16px;
    &:hover {
        background-color: rgba(128, 128, 128, 0.1);
    }
    &:first-child {
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
    }
    &:last-child {
        border-bottom-right-radius: 7px;
        border-bottom-left-radius: 7px;
    }
`,Uh=ur.p`
    text-align: center;
    margin-top: -12px;
    margin-bottom: 5px;
`;var qh={DivStyledDescription:ur.div`
    ${Zo};
    ${zo};
    bottom: -23px;
    color: ${lr.grey};
    font-size: 12px;
    height: 24px;
    left: 16px;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 26px);
`,DivStyledWrapper:Ch,DropDownIcon:Lh,ErrorLabel:jh,LabelStyled:Ih,NoDataTextStyled:Uh,Option:Fh,Options:Dh,PrefixIcon:Bh,PrefixSpan:Oh,SelectedItem:Th};const{DivStyledDescription:zh,DivStyledWrapper:$h,DropDownIcon:Wh,ErrorLabel:Hh,LabelStyled:Kh,NoDataTextStyled:Gh,Option:Vh,Options:Zh,PrefixIcon:Jh,PrefixSpan:Yh,SelectedItem:Xh}=qh,Qh=ur.select`
    ${Zo}
    ${zo}
    background-color: transparent;
    overflow: hidden;
    transition: all 0.1s ease-out;
    width: 100%;

    &:focus,
    .input_filled & {
        + label {
            font-size: 14px;
            height: 18px;
            line-height: 1;
            padding: 2px 4px;
            top: -13px;
            left: 12px;
        }
    }
`;var tf={DivStyledDescription:ur.div`
    ${Zo};
    ${zo};
    bottom: -23px;
    color: ${lr.grey};
    font-size: 12px;
    height: 24px;
    left: 16px;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 26px);
`,SelectStyled:Qh};const{DivWrapperStyled:ef,LabelStyled:rf}=lh,{DivStyledDescription:nf,SelectStyled:of}=tf;const af=ur.div`
    ${Zo};
    --arrow-width: 2.5em;
    --checkbox-width: 2em;
    display: inline-block;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
        sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-size: 0.88em;
    line-height: 1;
    &[aria-expanded='true'] {
        border-color: ${lr.blueSky};
        & .w3uik__dropdown-wrapper {
            display: block;
        }

        .w3uik__select-overlay {
            display: block;
        }
    }
`,sf=ur.div`
    background-color: ${lr.white};
    border-radius: 16px;
    cursor: pointer;
    display: flex;
    min-height: 2.75em;
    padding: 8px 20px 8px 10px;
    position: relative;
    transition: all 0.1s linear;
`,uf=ur.label`
    ${Zo};
    background-color: ${lr.white};
    color: ${lr.blue};
    font-weight: 500;
    font-size: 14px;
    height: 24px;
    left: 12px;
    line-height: 1;
    padding: 0 4px;
    pointer-events: none;
    position: absolute;
    top: -9px;
    transition: all 0.1s ease-out;
    z-index: 10;
    &[aria-disabled='true'] {
        color: ${lr.greyLight};
    }
`,lf=ur.button`
    appearance: none;
    background: none;
    border: 1px solid ${lr.greyLight};
    border-radius: 16px;
    box-sizing: border-box;
    color: black;
    font-size: 1em;
    height: 100%;
    left: 0;
    min-height: 2.75em;
    padding: 0;
    position: absolute;
    flex-grow: 1;
    text-align: left;
    top: 0;
    transition: border-color 150ms linear;
    width: 100%;
    z-index: 3;

    &[aria-expanded='true'],
    &:focus {
        border-color: ${lr.blueSky};
        outline: none;
        /* On Tab - set box shadow */
        -webkit-box-shadow: 0px 0px 0px 2px ${lr.blueSky};
        -moz-box-shadow: 0px 0px 0px 2px ${lr.blueSky};
        box-shadow: 0px 0px 0px 2px ${lr.blueSky};
    }

    &:hover:enabled {
        border-color: ${lr.blueSky};
    }

    :disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`,hf=ur.ul`
    display: flex;
    flex-wrap: wrap;
    font-family: inherit;
    grid-auto-flow: column;
    grid-gap: 0.5em;
    left: 0.5em;
    list-style: none;
    margin: 0;
    max-width: calc(100% - var(--arrow-width));
    padding-bottom: 2px;
    padding-left: 0;
    padding-right: calc(var(--arrow-width) + 0.5em);
    padding-top: 2px;
    position: relative;
    z-index: 10;
    &[aria-disabled='true'] {
        cursor: not-allowed;
        opacity: 0.5;
    }
`,ff=ur.li`
    display: flex;
    z-index: -10;
    align-items: center;
    width: 100%;
    padding-right: calc(var(--arrow-width) + 0.5em);
    line-break: loose;
`,cf=ur.div`
    display: flex;
    flex-wrap: wrap;
    font-family: inherit;
    grid-auto-flow: column;
    grid-gap: 0.5em;
    left: 0.5em;
    list-style: none;
    margin: 0;
    max-width: calc(100% - var(--arrow-width));
    padding-bottom: 0;
    padding-left: 0;
    padding-right: calc(var(--arrow-width) + 0.5em);
    padding-top: 0;
    position: relative;
    top: 0.5em;
    z-index: 10;
    line-height: 1.75em;
    min-height: 1.75em;
    opacity: 0.6;
    pointer-events: none;
`,df=ur.div`
    bottom: 0;
    display: none;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
`,pf=ur.menu`
    display: none;
    margin: 0;
    margin-top: 5px;
    padding: 0;
    position: relative;
    z-index: 3;
`,mf=ur.div`
    background: ${lr.blueLight};
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 20;
    border: 2px solid ${lr.blueSky};
    border-radius: 16px;
`,gf=ur.input`
    background-color: ${lr.blueLight};
    appearance: none;
    border: 0;
    border-bottom: 1px solid ${lr.paleBlue2};
    border-radius: 16px 16px 0 0;
    color: ${lr.blueDark};
    display: block;
    font-family: inherit;
    font-size: 1em;
    padding-bottom: 1em;
    padding-left: 3em;
    padding-right: 0.5em;
    padding-top: 1em;
    width: 100%;

    &[aria-hidden='true'] {
        position: absolute;
        display: none;

        & + .w3uik__search-icon {
            display: none;
        }
    }
    &:focus {
        outline: none;
    }
`,vf=ur.ul`
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    box-shadow: 0 4px 8px rgba(248, 174, 174, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    list-style: none;
    margin: 0;
    max-height: 13em;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding: 0;

    // Scrollbar in options
    &::-webkit-scrollbar {
        background: none;
        height: 0;
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-clip: padding-box;
        background-color: ${lr.greyIcons};
        border-radius: 30px;
        border: 4px solid transparent;
    }
    &::-webkit-scrollbar-button {
        display: none;
    }
    &::-webkit-scrollbar-corner {
        background-color: transparent;
    }

    // For Last option in list
    :last-child,
    :last-child:hover,
    :last-child:focus {
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
    }
    // For 1st option in list - first child is input so select 2nd child
    :nth-child(2),
    :nth-child(2):hover,
    :nth-child(2):focus {
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
    }
`,yf=ur.li`
    display: block;
    margin: 0;
    padding: 0;
    background-color: transparent;
`,bf=ur.span`
    align-items: center;
    display: flex;
    height: 24px;
    justify-content: center;
    margin: 0 4px;
    padding: 0 5px;
    width: 24px;
    // Any component(svg/img) used as icon will have a common width
    * {
        height: 100%;
        object-fit: contain;
        width: 24px !important;
    }
`,wf=ur.span`
    overflow: hidden;
    text-overflow: ellipsis;
`,_f=ur.button`
    align-items: center;
    appearance: none;
    background: none;
    border: none;
    color: ${lr.blueDark};
    display: flex;
    font-size: 1em;
    padding-bottom: 0.375em;
    padding-left: 0;
    padding-right: 0.5em;
    padding-top: 0.375em;
    text-align: left;
    transition-duration: 150ms;
    transition-property: background-color, color;
    transition-timing-function: linear;
    width: 100%;

    &::before {
        content: '';
        display: flex;
        height: 3em;
        justify-content: center;
        /* width: var(--checkbox-width); */
    }

    // Option Selected Styles
    &[aria-selected='true'] {
        color: ${lr.blueDark2};
        &::before {
            background-size: contain;
            content: '';
        }
    }

    &:hover {
        background: ${lr.beauBlue};
    }

    &[data-highlighted],
    &:focus {
        background: ${lr.beauBlue};
        outline: none;
    }

    &[disabled] {
        color: ${lr.grey};
        cursor: not-allowed;
    }
`,Mf=ur.span`
    display: block;
    color: ${lr.grey};
    padding: 1em;
    text-align: center;
`,xf=ur.div`
    color: ${lr.grey};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    overflow: hidden;
    padding: 4px 4px;
    position: absolute;
    text-overflow: ellipsis;
    top: 100%;
    white-space: nowrap;
    width: 90%;
    &:hover {
        overflow: visible;
        white-space: normal;
    }
    &[aria-invalid='true'] {
        color: ${lr.red};
    }
`,Sf=ur((({title:t,titleId:e,...r})=>B("svg",{"aria-hidden":"true","data-testid":"test-icon",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-labelledby":e,...r,children:[t?N("title",{id:e,children:t}):null,N("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25zM3.125 11a7.875 7.875 0 1 1 15.75 0 7.875 7.875 0 0 1-15.75 0z"}),N("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.381 15.381a.875.875 0 0 1 1.238 0l4 4a.875.875 0 1 1-1.238 1.238l-4-4a.875.875 0 0 1 0-1.238z"})]})))`
    background-size: contain;
    height: 1em;
    pointer-events: none;
    position: absolute;
    left: 0.5em;
    top: 1em;
    transform: translateY(-50%);
    width: 1em;
`,Ef=ur(z)`
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: var(--arrow-width);
`,kf=ur($)`
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: var(--arrow-width);
`;var Af={ButtonStyledListItem:_f,ButtonStyledSelect:lf,CheckmarkIconStyled:ur(j)`
    color: ${lr.green};
    margin-left: auto;
    display: none;
    height: 12px;
    width: 12px;
    &[aria-selected='true'] {
        display: block;
    }
`,DivStyledDesc:xf,DivStyledDropdown:mf,DivStyledOverlay:df,DivStyledPlaceholder:cf,DivStyledSelectWrapper:sf,DivStyledWrapper:af,InputStyledSearch:gf,LabelStyled:uf,ListItemStyledDropdown:yf,ListItemStyledTag:ff,ListStyledDropdown:vf,ListStyledSelected:hf,MenuStyledWrapper:pf,SearchIconStyled:Sf,SpanStyledItemIcon:bf,SpanStyledItemText:wf,SpanStyledNoResults:Mf,TriangleDownIconStyled:Ef,TriangleUpIconStyled:kf};const{ButtonStyledListItem:Rf,CheckmarkIconStyled:Pf,DivStyledDropdown:Cf,InputStyledSearch:If,ListItemStyledDropdown:Of,ListStyledDropdown:Tf,MenuStyledWrapper:Nf,SearchIconStyled:Bf,SpanStyledItemIcon:Lf,SpanStyledNoResults:jf}=Af,{DivStyledPlaceholder:Df,ListItemStyledTag:Ff,ListStyledSelected:Uf,SpanStyledItemIcon:qf,SpanStyledItemText:zf}=Af,{ButtonStyledSelect:$f,DivStyledDesc:Wf,DivStyledOverlay:Hf,DivStyledSelectWrapper:Kf,DivStyledWrapper:Gf,LabelStyled:Vf,TriangleDownIconStyled:Zf,TriangleUpIconStyled:Jf}=Af,Yf=ur.div`
  ${Zo};
  background-color: ${lr.white};
  border-radius: 16px;
  border: 1px solid ${lr.greyLight};
  display: inline-block;
  max-width: 100%;
  padding: 12px;
  position: relative;
  transition: all 0.1s linear;
  width: ${t=>t.width?t.width:"294px"};

  &:hover {
    border-color: ${t=>"disabled"===t.state?lr.greyLight:lr.blue};
  }

  &:focus {
    border-color: ${lr.blue};

    + label {
      color: ${lr.blue};
    }
  }

  ${t=>"error"===t.state&&`border-color: ${lr.red};`}
  ${t=>"confirmed"===t.state&&`border-color: ${lr.green};`}

    &:hover {
    ${t=>"error"===t.state&&`border-color: ${lr.red};`}
    ${t=>"confirmed"===t.state&&`border-color: ${lr.green};`}

        label {
      ${t=>"error"!==t.state&&"confirmed"!==t.state&&"disabled"!==t.state&&`color: ${lr.blue};`}
    }
  }

  &:focus {
    ${t=>"error"===t.state&&`border-color: ${lr.red};`}
    ${t=>"confirmed"===t.state&&`border-color: ${lr.green};`}
        & + label {
      ${t=>"error"===t.state&&`color: ${lr.red};`}
      ${t=>"confirmed"===t.state&&`color: ${lr.green};`}
    }
  }

  textarea {
    & + label {
      ${t=>"error"===t.state&&`color: ${lr.red};`}
      ${t=>"confirmed"===t.state&&`color: ${lr.green};`}
    }
  }
`,Xf=ur.label`
  ${Zo}
  ${zo}
    background-color: ${lr.white};
  height: 24px;
  left: 12px;
  padding: 0 4px;
  pointer-events: none;
  position: absolute;
  top: 14px;
  transition: all 0.1s ease-out;
`;var Qf={TextAreaStyled:ur.textarea`
  ${Zo}
  ${zo}
    background-color: transparent;
  display: block;
  max-width: 100%;
  min-height: 128px;
  overflow: hidden;
  padding: 2px;
  width: 100%;

  &::placeholder {
    opacity: 0;
  }

  &:focus,
  .filled & {
    + label {
      font-size: 14px;
      height: 18px;
      line-height: 1;
      padding: 2px 4px;
      top: -10px;
    }
  }

  &:focus {
    &::placeholder {
      opacity: 1;
      color: ${lr.grey};
    }
  }
`,LabelStyled:Xf,TextAreaWrapper:Yf};const{TextAreaStyled:tc,LabelStyled:ec,TextAreaWrapper:rc}=Qf,nc=ur.h3`
  ${Zo};
  ${Fo};
  ${Lo};
  margin-bottom: 18px;
`,ic=ur.h4`
  ${Zo};
  ${Fo};
  ${jo};
  margin-bottom: 12px;
  margin-top: 32px;
`;var oc={FormStyled:ur.form`
  ${Zo};
  background-color: ${lr.white};
  border-radius: 16px;
  padding: 16px;

  .form-item + .form-item {
    margin-top: 30px;
  }

  > button[type='submit'],
  .customFooter {
    margin-top: 32px;
  }
`,H4Styled:ic,H3Styled:nc};const{H3Styled:ac,H4Styled:sc,FormStyled:uc}=oc,lc=ur.section`
    ${Zo};
    background-color: ${t=>t.backgroundColor};
    background-image: ${({backgroundURL:t,linearGradient:e=""})=>t?`${e&&e+", "} url(${t})`:e};
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: ${t=>t.rounded||"0px"};
    display: flex;
    justify-content: space-between;
    height: ${({height:t})=>t||"100%"};
    max-width: 100%;
    overflow: hidden;

    * {
        color: ${t=>t.textColor||lr.white} !important;
    }

    @media (max-width: ${mr}) {
        align-items: center;
        text-align: center;
        flex-direction: column;
        gap: 20px;
        height: fit-content;
    }
`,hc=ur.div`
    display: flex;
    flex-grow: 1;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    padding: ${t=>t.padding||"20px"};
    @media (max-width: ${mr}) {
        padding: 20px;
        width: 100%;
        align-items: center;
    }
`,fc=ur.div`
    display: flex;
    flex-grow: 1;
    width: 50%;
    @media (max-width: ${mr}) {
        width: 100%;
    }
`;var cc={ImageStyled:ur.img`
    block-size: auto;
    height: 100%;
    max-inline-size: 100%;
    object-fit: contain;
    ${t=>(t=>{switch(t){case"center":return Ge`
                margin: auto;
            `;case"left":return Ge`
                margin-right: auto;
            `;case"right":return Ge`
                margin-left: auto;
            `}})(t.align||"center")};
    @media (max-width: ${mr}) {
        margin: auto;
    }
`,LeftContainerDiv:hc,RightContainerDiv:fc,SectionStyled:lc};const{ImageStyled:dc,LeftContainerDiv:pc,RightContainerDiv:mc,SectionStyled:gc}=cc;var vc={DivStyled:ur.div`
  ${Zo};
  ${zo};
  ${$o};
  background-color: ${lr.white};
  border-radius: 16px;
  border: 2px solid ${lr.blueSkyLight};
  display: grid;
  grid-gap: 5px;
  margin: 0;
  padding: 16px;
  width: 100%;
`,PStyledTopic:ur.p`
  color: ${lr.blue};
  margin: 0;
`,PStyledInfo:ur.p`
  color: ${lr.blueDark};
  font-size: 24px;
  margin: 0;
`};const{DivStyled:yc,PStyledTopic:bc,PStyledInfo:wc}=vc,_c=ur.a`
    ${Zo}
    ${zo}
    align-items: center;
    color: ${lr.blue};
    display: inline-block;
    font-weight: 600;
    height: fit-content;
    max-width: 100%;
    width: fit-content;

    &:hover {
        filter: brightness(0.7);
    }
`;var Mc={InternalLinkStyled:ur(x)`
    ${Zo}
    ${zo}
    align-items: center;
    color: ${lr.blue};
    display: inline-block;
    font-weight: 600;
    max-width: 100%;
    width: fit-content;
    &:hover {
        filter: brightness(0.7);
    }
`,LinkStyled:_c,SpanStyledFlex:ur.span`
    align-items: baseline;
    display: flex;
    flex-direction: ${({iconLayout:t})=>"leading"===t?"row":"row-reverse"};
    margin: ${t=>"leading"===t.iconLayout?"auto 2px auto 4px":"auto 4px auto 2px"};

    svg {
        margin: ${t=>"leading"===t.iconLayout?"auto 4px auto 0":"auto 0 auto 4px"};
    }
`,SpanStyledText:ur.span`
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`};const{InternalLinkStyled:xc,LinkStyled:Sc,SpanStyledFlex:Ec,SpanStyledText:kc}=Mc,Ac=ur.div`
    ${t=>!t.canOverflow&&"\n            overflow: auto;\n            scrollbar-width: none;\n            ::-webkit-scrollbar {\n              display: none;\n            }\n            -ms-overflow-style: none;\n        "}
    ${zo};
    background-color: ${lr.white};
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(48, 71, 105, 0.1);
    margin: 80px auto;
    max-width: ${t=>t.width};
    width: 96%;
`,Rc=ur.header`
    ${t=>t.fixedMode&&"position: sticky; top: 0;background-color: white;"}
    ${t=>"string"===typeof t.title&&`h3 {\n        color: ${lr.blue};\n        padding-right: 8px;\n        margin-block-start: 0;\n        margin-block-end: 0;\n    }`}
    align-items: center;
    display: flex;
    padding: 24px 32px 20px;
    justify-content: ${t=>t.title?"space-between":"flex-end"};
    border-bottom: ${t=>t.headerHasBottomBorder?`1px solid ${lr.paleBlue2}`:void 0};

    div {
        border-color: ${lr.blue};
        border-radius: 15px;
    }

    button {
        min-width: 30px;
    }

    #modal-close-button {
        border: 3px solid ${lr.paleBlue2};
        background-color: white;
    }
`,Pc=ur.div`
    padding: 0px 32px 0px;
`,Cc=ur.footer`
    ${t=>t.fixedMode&&"position: sticky;bottom: 0;background-color: white;"}
    border-top: 1px solid ${lr.paleBlue2};
    display: flex;
    flex-wrap: wrap;
    padding: 24px 32px 32px;
    justify-content: ${t=>t.hasCancel?"space-between":"flex-end"};

    button {
        margin: 3px 0;
    }

    #modal-cancel-button {
        color: ${lr.grey};
        :hover {
            color: ${lr.black};
        }
    }
`,Ic=ur.div`
    align-items: ${({isCentered:t})=>t?" center":"flex-start"};
    background: rgba(${(t=>{var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?` ${parseInt(e[1],16)}, ${parseInt(e[2],16)}, ${parseInt(e[3],16)} `:"66, 135, 245"})(lr.blueDark)}, 0.7);
    bottom: 0;
    display: ${({isVisible:t})=>t?" flex":"none"};
    height: 100vh;
    justify-content: center;
    left: 0;
    overflow: auto;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 5;
`,Oc=ur.footer`
    ${t=>t.fixedMode&&"position: sticky;bottom: 0;background-color: white;"}
    border-top: 1px solid ${lr.paleBlue2};
    display: flex;
    padding: 0px 32px 32px;
`;var Tc={CustomButtonStyle:ur.div`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
`,CustomFooterStyled:Oc,DivStyled:Ic,DivStyledContent:Pc,DivStyledWrap:Ac,FooterStyled:Cc,HeaderStyled:Rc};const{CustomFooterStyled:Nc,DivStyled:Bc,DivStyledContent:Lc,DivStyledWrap:jc,FooterStyled:Dc,HeaderStyled:Fc}=Tc,Uc=Ge`
    border-color: ${lr.red};
    & > svg {
        fill: ${lr.red};
    }
`,qc=Ge`
    border-color: ${lr.blue};
    & > svg {
        fill: ${lr.blue};
    }
`,zc=Ge`
    border-color: ${lr.green};
    & > svg {
        fill: ${lr.green};
    }
`,$c=Ge`
    border-color: ${lr.yellow};
    & > svg {
        fill: ${lr.yellow};
    }
`,Wc=sr` 
    0% {
        left: 150%;
    }

    100% {
        left: 0;
    }
`,Hc=sr` 
    0% {
        left: 0;
    }

    100% {
        left: 150%;
    }
`,Kc=sr` 
    0% {
        left: -150%;
    }

    100% {
        left: 0;
    }
`,Gc=sr` 
    0% {
        left: 0;
    }

    100% {
        left: -150%;
    }
`,Vc=t=>{switch(t){case"error":return lr.red;case"success":return lr.green;case"warning":return lr.yellow;default:return lr.blue}},Zc=ur.div`
    position: fixed;
    z-index: 30;

    ${t=>(t=>{switch(t){case"bottomL":return Ge`
                left: 0;
                bottom: 0;
            `;case"topL":return Ge`
                left: 0;
                top: 0;
            `;case"bottomR":return Ge`
                right: 0;
                bottom: 0;
            `;default:return Ge`
                right: 0;
                top: 0;
            `}})(t.position)}
`,Jc=ur.div`
    ${Zo}
    align-items: center;
    border-radius: 100%;
    display: flex;
    height: 24px;
    justify-content: center;
    width: 24px;
`,Yc=ur.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: 10px;
    width: 100%;
`,Xc=ur.span`
    ${Uo}
    color: ${lr.grey};
    display: inline-block;
    word-break: break-word;
`,Qc=ur.h5`
    ${Do};
    display: inline-block;
    font-weight: 700;
    line-height: 24px;
    margin: 0;
    word-break: break-word;
`,td=ur.div`
    ${Zo}
    cursor: pointer;
    position: absolute;
    right: 16px;
    top: 16px;
`,ed=ur.div`
    background-color: rgba(158, 204, 234, 0.3);
    bottom: 0;
    height: 6px;
    left: 0;
    position: absolute;
`,rd={CloseWrapperStyled:td,IconWrapperStyled:Jc,NotificationStyled:ur.div`
    ${Zo}
    ${zo}
    animation-fill-mode: forwards;
    background-color: ${lr.white};
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(48, 71, 105, 0.1);
    color: ${lr.grey};
    display: flex;
    margin: 18px;
    padding: 16px 48px 16px 16px;
    position: relative;
    width: 320px;
    overflow: hidden;
    z-index: 9999;

    ${t=>((t,e)=>{switch(t){case"bottomL":case"topL":return Ge`
                animation: ${e?Gc:Kc} 1s;
            `;case"bottomR":case"topR":return Ge`
                animation: ${e?Hc:Wc} 1s;
            `;default:throw new Error("Make sure you provided position")}})(t.position,t.isClosing)}

    & > ${Jc} {
        ${t=>(t=>{switch(t){case"error":return Uc;case"success":return zc;case"warning":return $c;default:return qc}})(t.type)}
    }
    & > ${Yc} > ${Qc} {
        color: ${t=>Vc(t.type)};
    }
`,SpanStyled:Xc,TextContentStyled:Yc,TitleStyled:Qc,NotificationContainerStyled:Zc,BarStyled:ed},{BarStyled:nd,CloseWrapperStyled:id,IconWrapperStyled:od,NotificationStyled:ad,SpanStyled:sd,TextContentStyled:ud,TitleStyled:ld}=rd,hd=({dispatch:t,icon:e,id:r,message:n,position:o="topL",title:a="New Message",type:s="info",...u})=>{const[l,h]=(0,i.useState)(!1),[f,c]=(0,i.useState)(),[d,p]=(0,i.useState)(0),m=()=>{if(l)return;const t=setInterval((()=>{p((e=>e<320?e+1:(clearInterval(t),e)))}),20);c(t)},g=()=>{clearInterval(f)};(0,i.useEffect)((()=>{l||320===d&&v()}),[d,l]),(0,i.useEffect)((()=>m()),[]);const v=()=>{g(),h(!0),setTimeout((()=>{t({type:"remove_notification",id:r})}),400)},y=t=>Vc(t);return Ja(ad,{"data-testid":"test-notification",id:r,isClosing:l,onMouseEnter:g,onMouseLeave:m,position:o,type:s,...u,children:[Za(od,{"data-testid":"test-notification-icon-wrapper",children:e||("error"===s||"warning"===s?Za(U,{title:"exclamation icon",titleId:"notification exclamation icon",fill:y(s)}):"info"===s?Za(q,{title:"info icon",titleId:"notification info icon",fill:y(s)}):Za(j,{title:"checkmark icon",titleId:"notification checkmark icon",fill:y(s)}))}),Ja(ud,{children:[Za(ld,{"data-testid":"test-notification-title",children:a}),Za(id,{onClick:v,"data-testid":"test-notification-x",children:Za(F,{title:"cross icon",titleId:"notification cross icon",fontSize:10,fill:lr.greyIcons})}),Za(sd,{"data-testid":"test-notification-message",children:n})]}),Za(nd,{style:{width:d}})]})},fd=(0,i.createContext)(),{NotificationContainerStyled:cd}=rd,dd=[];function pd(t,e){switch(e.type){case"add_notification":return[...t,{...e.payload}];case"remove_notification":return t.filter((t=>t.id!==e.id));case"clear_notifications":return[];default:return t}}const md=t=>{const[e,r]=(0,i.useReducer)(pd,dd),n=(0,i.useMemo)((()=>{const t={topR:[],topL:[],bottomR:[],bottomL:[]};return e.forEach((e=>t[e.position].push(e))),Object.keys(t).map((e=>{var n;return Za(cd,{position:e,children:null==(n=null==t?void 0:t[e])?void 0:n.map((t=>Za(hd,{id:t.id||String(Date.now()),dispatch:r,...t},t.id)))},`container-${e}`)}))}),[e]);return Ja(fd.Provider,{value:r,children:[n,t.children]})},gd=()=>{const t=(0,i.useContext)(fd);if(void 0===t)throw new Error("useNotification hook must be used within a NotificationProvider");return e=>{t({type:"add_notification",payload:{id:String(Date.now()),...e}})}},vd=ur.div`
  background: #ffffff;
  border-radius: 20px;
  border: 2px solid #c1d8e7;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 448px;
  max-width: 386.67px;
  padding: 32px;
  ${t=>t.isActive&&`\n      border-color: ${lr.green};\n    `}
`;vd.displayName="DivStyled";var yd={DivStyled:vd,DivStyledFeatures:ur.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  overflow-y: auto;
  row-gap: 8px;
  & > div {
    display: flex;
    align-items: center;
  }
`,DivStyledCardFooter:ur.div`
  margin-top: auto;
`};var bd={StyledDiv:ur.div`
    align-items: center;
    display: flex;
    height: 40px;
    justify-content: center;
`};const{StyledDiv:wd}=bd,{DivStyled:_d,DivStyledFeatures:Md,DivStyledCardFooter:xd}=yd,Sd="20px",Ed="10px",kd=ur.div`
    ${Zo};
    position: relative;

    &:hover > ul {
        display: block;
    }
`,Ad=(t,e)=>{switch(t){case"top":return(t=>Ge`
    left: 50%;
    bottom: calc(100% + ${Ed});
    transform: translateX(calc(-50% + ${t||0}px));

    &:before {
        bottom: -${Ed};
        height: ${Ed};
        left: 0;
        width: 100%;
    }

    &:after {
        left: calc((50% - ${Ed}) - ${t||0}px);
        bottom: -6px;
    }
`)(e);case"left":return(t=>Ge`
    right: calc(100% + ${Ed});
    top: 50%;
    transform: translateY(calc(-50% + ${t||0}px));

    &:before {
        height: 100%;
        right: -${Ed};
        top: 0;
        width: ${Ed};
    }

    &:after {
        top: calc((50% - ${Ed}) - ${t||0}px);
        right: -2px;
    }
`)(e);case"right":return(t=>Ge`
    left: calc(100% + ${Ed});
    top: 50%;
    transform: translateY(calc(-50% + ${t||0}px));

    &:before {
        height: 100%;
        left: -${Ed};
        top: 0;
        width: ${Ed};
    }

    &:after {
        top: calc((50% - ${Ed}) - ${t||0}px);
        left: -2px;
    }
`)(e);default:return(t=>Ge`
    left: 50%;
    top: calc(100% + ${Ed});
    transform: translateX(calc(-50% + ${t||0}px));

    &:before {
        height: ${Ed};
        left: 0;
        top: -${Ed};
        width: 100%;
    }

    &:after {
        left: calc((50% - ${Ed}) - ${t||0}px);
        top: -6px;
    }
`)(e)}};var Rd={DivStyled:kd,ListStyled:ur.ul`
    ${Zo};
    background-color: ${t=>`${t.backgroundColor}`};
    border-radius: ${Sd};
    display: none;
    list-style: none;
    min-width: ${t=>`${t.width}`};
    padding: 8px;
    position: absolute;
    ${t=>t.position&&Ad(t.position,t.moveBody)};

    &:hover {
        display: block;
    }

    li {
        ${Zo};
        display: block;
        list-style: none;
        position: relative;
        z-index: 2;
    }

    &:before {
        // dead-zone buffer to prevent off-hover bug
        background-color: transparent;
        content: '';
        display: block;
        position: absolute;
        // dynamic values come from setPosition()
    }

    &:after {
        // the tail of the popover box
        background-color: ${t=>`${t.backgroundColor}`};
        content: '';
        display: block;
        height: ${Sd};
        position: absolute;
        transform: rotate(45deg);
        width: ${Sd};
        z-index: 1;
        // dynamic values come from setPosition()
    }
`,halfSize:Ed};const{DivStyled:Pd,ListStyled:Cd}=Rd,Id=ur.div`
    background: ${t=>t.backgroundColor?t.backgroundColor:""};
    cursor: pointer;
    display: inline-block;
`,Od=ur.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    padding-left: 16px;
    padding-right: 16px;
    height: ${t=>t.height?`${t.height}px`:"auto"};
    width: ${t=>t.width?`${t.width}px`:"auto"};
`;var Td={DivContainerStyled:Id,DivImageStyled:ur.div`
    align-items: center;
    display: flex;
    width: 24px;
    height: 24px;
    margin: auto 0;
    padding-right: 8px;
`,DivStyled:Od,TextStyled:ur.p`
    ${Vo};
    ${$o};
    color: ${t=>t.textColor?t.textColor:lr.white};
    font-size: ${t=>t.textSize?`${t.textSize}px`:""};
    overflow: hidden;
    text-overflow: ellipsis;
`};const{DivContainerStyled:Nd,DivStyled:Bd,DivImageStyled:Ld,TextStyled:jd}=Td,Dd=(t,e,r)=>Object.keys(t).includes(e)?t[e]:r,Fd=ur.div`
  ${zo}
  display: flex;
  flex-wrap: wrap;
  align-items: ${t=>t.alignItems&&t.alignItems};
  gap: ${t=>t.rowGap?`${t.rowGap}px ${t.colGap}px`:"15px 15px"};
  justify-content: ${t=>t.justifyItems&&t.justifyItems};
  margin-left: ${t=>t.colGap&&t.colGap/2+"px"};
  width: ${t=>`${t.width&&`${t.width}px`} `};
`;var Ud={ColDiv:ur.div`
  color: white;
  order: ${t=>t.order};
  ${zo}
  // xSmall devices (landscape phones, 576px and up)
        @media (max-width: 767px) {
    flex: ${t=>t.span?100/(t.xs?t.xs:0)*Dd(t.breakpointsConfig,"xs",t.span)+"%":"100%"};

    max-width: ${t=>t.span?`calc(${100/(t.xs?t.xs:0)*Dd(t.breakpointsConfig,"xs",t.span)}% - ${t.colGap}px)`:"100%"};
    ${t=>t.isFullWidth&&"max-width: 100%; flex: 100%;"}
  }

  // sm devices (tablets, 768px and up)
  @media (min-width: 768px) and (max-width: 991px) {
    color: black;
    flex: ${t=>t.span?100/(t.sm?t.sm:0)*Dd(t.breakpointsConfig,"sm",t.span)+"%":"100%"};

    max-width: ${t=>t.span?`calc(${100/(t.sm?t.sm:0)*Dd(t.breakpointsConfig,"sm",t.span)}% - ${t.colGap}px)`:"100%"};
    ${t=>t.isFullWidth&&"max-width: 100%; flex: 100%;"}
  }

  // Meduim(desktops, 992px and up)
  @media (min-width: 992px) and (max-width: 1199px) {
    flex: ${t=>t.span?Dd(t.breakpointsConfig,"md",t.span)*(100/(t.md?t.md:0))+"%":"100%"};

    max-width: ${t=>t.span?`calc(${100/(t.md?t.md:0)*Dd(t.breakpointsConfig,"md",t.span)}% - ${t.colGap}px)`:"100%"};
    ${t=>t.isFullWidth&&"max-width: 100%; flex: 100%;"}
  }

  // large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    flex: ${t=>t.span?100/(t.lg?t.lg:0)*Dd(t.breakpointsConfig,"lg",t.span)+"%":"90%"};

    max-width: ${t=>t.span?`calc(${100/(t.lg?t.lg:0)*Dd(t.breakpointsConfig,"lg",t.span)}% - ${t.colGap}px )`:"90%"};

    ${t=>t.isFullWidth&&"max-width: 100%; flex: 100%;"}
  }
`,RowDiv:Fd};const{ColDiv:qd,RowDiv:zd}=Ud;(0,i.createContext)({lg:0,md:0,sm:0,xs:0,rowGap:15,colGap:15});ur.div`
  ${Zo};
  animation: progress 1.5s linear infinite;
  background: ${lr.white} no-repeat;
  background-image: ${hr.lightGrey};
  background-size: 200px 100%;
  box-sizing: border-box;
  display: inline-block;
  flex-shrink: 0;
  outline: none;
  overflow: hidden;
  position: relative;
  border-radius: ${({borderRadius:t})=>t};
  height: ${({height:t})=>t};
  width: ${({width:t})=>t};
  &:after,
  &:before {
    box-sizing: border-box;
  }
  @keyframes progress {
    0% {
      background-position: -300px 0;
    }
    100% {
      background-position: calc(300px + 100%) 0;
    }
  }
`;const $d=ur.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  position: relative;
`,Wd=ur.ol`
  ${Zo};
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-bottom: 24px;
  position: relative;
  text-align: center;
  width: 100%;
`,Hd=ur.li`
  ${Zo};
  ${zo};
  align-items: center;
  border-radius: 50%;
  border: 2px solid ${lr.green};
  color: ${lr.white};
  display: flex;
  font-size: 24px;
  height: 32px;
  justify-content: center;
  line-height: 0;
  position: relative;
  width: 32px;

  background-color: ${t=>t.activeStep<=t.thisStep?lr.green:lr.white};
  opacity: ${t=>t.activeStep<t.thisStep?"50%":"100%"};
`,Kd=ur.span`
  background-color: rgba(46, 125, 175, 0.3);
  border: none;
  display: block;
  height: 2px;

  &:last-of-type {
    display: none;
  }

  width: calc((100% / ${t=>t.stepTotal-1}) - (${t=>2===t.stepTotal?"90px":"64px"}));
`,Gd=ur.div`
  text-align: center;

  & > div[role='spinner'] {
    margin: 30px auto;
  }
`,Vd=ur.div`
  ${Zo};
  ${zo};
  display: inline-block;
  margin: 20px 20px 32px;
  p,
  i {
    ${Zo};
    ${zo};
  }

  :hover {
    display: inline-block;
    height: auto;
  }
`,Zd=ur.nav`
  display: flex;
  justify-content: center;
  margin-top: 12px;

  button {
    margin: 0 12px;
  }
`,Jd=ur.footer``;var Yd={DivStyled:Gd,DivStyledContent:Vd,DivStyledHelper:ur.div`
  margin-top: 26px;
  text-align: center;

  p,
  i,
  span {
    ${zo};
    font-size: 12px;
  }

  img,
  button {
    margin: 0 auto;
  }
`,FooterStyled:Jd,HeaderStyled:ur.header`
  ${t=>t.headerWidth&&`max-width: ${t.headerWidth}px`};
  width: 100%;
`,ListItemStyled:Hd,NavStyled:Zd,OrderedListStyled:Wd,SectionStyled:$d,SpanStyled:Kd};const{DivStyled:Xd,DivStyledHelper:Qd,FooterStyled:tp,ListItemStyled:ep,NavStyled:rp,OrderedListStyled:np,SectionStyled:ip,SpanStyled:op,HeaderStyled:ap}=Yd;ur.div`
  display: flex;
  flex-direction: column;
`,ur.div`
  ${Zo}
  ${zo}
    display: grid;
  min-height: fit-content;
  align-items: flex-start;
  justify-content: center;
  grid-column: 1 / -1;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
`,ur.div`
  padding-top: 1px;
  background: radial-gradient(106.45% 108.64% at 32.33% -4.84%, #ecf5fc 0.52%, #cee4f3 100%);
  grid-column: 1 / -1;
`,ur.div`
  ${Zo}
  ${zo}
    display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 12px 0px;
  > div {
    display: flex;
    flex-direction: row;
    min-width: 50px;
    justify-content: space-evenly;
    align-items: center;
  }
`,ur.div`
  cursor: ${t=>t.isActive?"pointer":"cursor"};
  color: ${t=>t.isActive?lr.blue:lr.greyLight};
`,ur.div`
  align-items: ${t=>t.alignCellItems};
  justify-content: ${t=>t.justifyCellItems};
  display: flex;
  padding: 16px 0;
`,ur.div.attrs((t=>({columns:t.columns})))`
  ${Zo}
  ${zo}
    padding-bottom: 11px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(48, 71, 105, 0.1);
  background-color: white;
  display: grid;
  grid-template-columns: ${t=>t.columns};
  // row-gap: 22px;
  column-gap: 11px;
  overflow: hidden;
  min-height: fit-content;
  min-width: fit-content;
  & > .firstCol {
    padding-left: 22px;
  }
  & > .lastCol {
    padding-right: 22px;
  }
  & > div.table_header {
    font-weight: 600;
    padding: 12px 0;

    &:first-of-type {
      padding-left: 22px;
    }
  }
`,ur.div`
  background: radial-gradient(106.45% 108.64% at 32.33% -4.84%, #ecf5fc 0.52%, #cee4f3 100%);
  border-radius: 20px;
  padding: 1px;
  position: relative;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,ur.div`
  width: 32px;
  height: 32px;
  border: 2px solid transparent;
  border-radius: 12px;
  margin: 0px 5px;
  display: grid;
  align-items: center;
  justify-content: center;
  border-color: ${t=>t.active&&lr.blue};
  background-color: ${t=>!t.active&&"#EBEFF9"};
  cursor: ${t=>!t.active&&"pointer"};
`,ur.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 1 / -1;
  & > h3 {
    margin-top: 29px;
  }
`,ur.div`
    ${Zo}
    ${zo}
    min-height: fit-content;
    display: flex;
    flex-direction: row;
    ${t=>!t.isVertical&&"flex-direction:column"}
`,ur.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    max-height: fit-content;
    min-width: fit-content;
    row-gap: 5px;
    ${t=>t.isVertical&&"flex-direction: column;"}

    ${t=>t.haveBackground&&!t.isVertical&&Ge`
            & > span {
                background-color: ${lr.blueCultured};
            }
            & > span:first-child {
                border-radius: 16px 0 0 16px;
            }

            & > span:last-child {
                border-radius: 0 16px 16px 0;
            }
        `};
    ${t=>t.haveBackground&&t.isVertical&&Ge`
            background-color: ${lr.blueCultured};
            border-radius: 16px;
        `};
    ${t=>t.isWidthAuto&&Ge`
            & > span {
                flex-grow: 1;
            }
        `}
`,ur.div`
    padding: ${t=>t.isVertical?"0px 11px":"11px 0px"};
`,ur.div`
    transition-duration: 500ms;
    transition-property: border;
    transition-timing-function: ease-in-out;
    margin: 0px 48px 0px 0px;
    padding-bottom: 4px;
    line-height: 24px;
    padding-bottom: 4px;
    margin-bottom: 11px;

    cursor: pointer;
    ${t=>t.isActive&&"font-weight:600;"};
    ${t=>t.isActive&&"border-bottom: 2px solid #21BF96;"};
    ${t=>(t.isActive||t.isDisabled)&&"pointer-events: none;"};
    ${t=>!t.isActive&&`color:${lr.greyIcons};`};
    line-height: ${t=>t.lineHeight&&`${t.lineHeight}px`};
    ${t=>t.isDisabled&&`color:${lr.greyDisabled};`}
`,ur.div`
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;
    border-radius: 16px;
    padding: 8px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${lr.blueCultured};
    border: 2px solid transparent;
    cursor: pointer;
    color: ${lr.blue};
    min-width: fit-content;
    ${({isActive:t})=>t&&Ge`
            border-color: ${lr.blueSky};
            background: ${lr.white};
        `};
    ${t=>t.isDisabled&&"pointer-events: none;"};
    ${t=>t.hasMargin&&"margin-right:6px;"};
    ${t=>t.isDisabled&&`opacity: 0.5; background-color: ${lr.white};`};
    line-height: ${t=>t.lineHeight&&`${t.lineHeight}px`};
    &:hover {
        background: ${lr.blueLight2};
        ${({isActive:t})=>t&&Ge`
                background: ${hr.beauBlue};
            `};
    }

    & > span {
        font-weight: 600;
        font-size: 14px;
        text-align: center;
    }
`,(0,i.createContext)({selectedKey:0,setSelectedKey:null,tabStyle:"bar"});var sp={DivStyled:ur.section`
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
    flex-wrap: wrap;
`,DivStyledContent:ur.div`
    display: flex;
    flex-direction: ${({fullWidth:t})=>t?"column":"row"};
    flex-wrap: wrap;
    gap: 16px;
`,SectionStyled:ur.section`
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 16px;
`};const{DivStyled:up,DivStyledContent:lp,SectionStyled:hp}=sp;var fp={DivStyled:ur.div`
    ${Zo};
    align-items: center;
    background: ${lr.white};
    border-radius: 13px;
    border: 2px dashed ${lr.blueSky};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    min-height: 160px;
    overflow: hidden;
    padding: 8px;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    ${t=>!t.isFileSelected&&Ge`
            &:hover {
                background: radial-gradient(
                    102.8% 102.8% at 3.14% -9.06%,
                    #e9fffc 0%,
                    #e8fefb 4.74%,
                    #e4f4f7 50.11%,
                    #e1eef4 83.07%,
                    #e0ecf3 100%
                );
            }
        `}

    ${t=>!t.isFileSelected&&Ge`
            &:active {
                background: radial-gradient(
                    102.8% 102.8% at 3.14% -9.06%,
                    #d3fff8 0%,
                    #d2fdf7 4.74%,
                    #c8e9ef 50.11%,
                    #c2dde9 83.07%,
                    #c0d8e7 100%
                );
            }
        `}
`,TextContentStyled:ur.div`
    ${Zo};
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
`,InputStyled:ur.input`
    display: none;
`,ImageStyled:ur.img`
    border-radius: 8px;
    height: 144px;
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
`,IconDivStyled:ur.div`
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;
`};const{DivStyled:cp,IconDivStyled:dp,ImageStyled:pp,InputStyled:mp,TextContentStyled:gp}=fp,vp="92px",yp="12px",bp="92.8px",wp=ur.div`
  ${Zo};
  display: flex;
  flex-wrap: wrap;
  gap: ${yp};
  justify-content: flex-start;
  margin: 10px 0px 4px 0px;
  position: relative;
  width: 100%;
  @media only screen and (max-width: 420px) {
    gap: 5px;
  }
`;var _p={InputStyled:ur.input`
  ${Zo};
  ${Vo};
  border-radius: 20px;
  border: 0;
  box-shadow: inset 0 0 0 1px ${lr.greyLight};
  color: ${lr.blueDark};
  font-size: 18px;
  font-weight: 600;
  height: ${vp};
  line-height: ${vp};
  padding: 0;
  text-align: center;
  transition: box-shadow 0.2s ease-out;
  width: ${bp};
  &::placeholder {
    color: ${lr.greyIcons};
    opacity: 1; // firefox
  }
  &:focus {
    box-shadow: inset 0 0 0 2px ${lr.blueSky} !important;
  }
  &.is-filled {
    background: ${lr.blueLight};
    box-shadow: none;
  }
  &:hover {
    box-shadow: inset 0 0 0 1px ${lr.blueSky};
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media only screen and (max-width: 420px) {
    width: 52px;
    height: 52px;
    line-height: 52px;
    border-radius: 10px;
  }
  /* Firefox */
  -moz-appearance: textfield;
  caret-color: transparent;
`,DivStyledWrapper:wp,DivStyledTooltip:ur.div`
  background-color: ${lr.red};
  border-radius: 4px;
  color: ${lr.white};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  padding: 8px 12px;
  position: absolute;
  width: fit-content;
  &::after {
    content: ' ';
    position: absolute;
    left: 30px;
    top: -4px;
    border-top: none;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
    border-bottom: 4px solid ${lr.red};
  }
`};const{InputStyled:Mp,DivStyledWrapper:xp,DivStyledTooltip:Sp}=_p;var Ep={DivStyled:ur.div`
  ${Zo};
  background-color: ${lr.white};
  border: 1px solid ${lr.paleBlue2};
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  padding: 32px;
  width: 100%;
  :first-child {
    :first-child {
      ${Vo};
      font-weight: 400;
    }
    :nth-child(1) {
      ${Vo};
      font-weight: 600;
    }
  }