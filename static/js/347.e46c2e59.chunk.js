"use strict";(globalThis.webpackChunkcra_app=globalThis.webpackChunkcra_app||[]).push([[347],{57776:(t,e,r)=>{r.d(e,{Q:()=>i});var n=r(47465),o=r(12591);var i=function(t){var e,r;function n(e){var r,n=(void 0===e?{}:e).supportedChainIds;return(r=t.call(this)||this).supportedChainIds=n,r}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var i=n.prototype;return i.emitUpdate=function(t){console.log("Emitting '"+o._.Update+"' with payload",t),this.emit(o._.Update,t)},i.emitError=function(t){console.log("Emitting '"+o._.Error+"' with payload",t),this.emit(o._.Error,t)},i.emitDeactivate=function(){console.log("Emitting '"+o._.Deactivate+"'"),this.emit(o._.Deactivate)},n}(n.EventEmitter)},36347:(t,e,r)=>{r.r(e),r.d(e,{PortisConnector:()=>c});var n=r(57776),o=r(56111);function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var a={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan",100:"xdai",30:"orchid",31:"orchidTestnet",99:"core",77:"sokol",61:"classic",8:"ubiq",108:"thundercore",18:"thundercoreTestnet",163:"lightstreams",122:"fuse",15001:"maticTestnet"},c=function(t){var e,n;function c(e){var r,n=e.dAppId,c=e.networks,s=e.config,u=void 0===s?{}:s,h=c.map((function(t){return"number"===typeof t?t:Number(t.chainId)}));return h.every((function(t){return!!a[t]}))||(0,o.Z)(!1,"One or more unsupported networks "+c),(r=t.call(this,{supportedChainIds:h})||this).dAppId=n,r.networks=c,r.config=u,r.handleOnLogout=r.handleOnLogout.bind(i(r)),r.handleOnActiveWalletChanged=r.handleOnActiveWalletChanged.bind(i(r)),r.handleOnError=r.handleOnError.bind(i(r)),r}n=t,(e=c).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var s=c.prototype;return s.handleOnLogout=function(){console.log("Handling 'onLogout' event"),this.emitDeactivate()},s.handleOnActiveWalletChanged=function(t){console.log("Handling 'onActiveWalletChanged' event with payload",t),this.emitUpdate({account:t})},s.handleOnError=function(t){console.log("Handling 'onError' event"),this.emitError(t)},s.activate=function(){try{var t=function(){return e.portis.onLogout(e.handleOnLogout),e.portis.onActiveWalletChanged(e.handleOnActiveWalletChanged),e.portis.onError(e.handleOnError),Promise.resolve(e.portis.provider.enable().then((function(t){return t[0]}))).then((function(t){return{provider:e.portis.provider,account:t}}))},e=this,n=function(){if(!e.portis)return Promise.resolve(r.e(643).then(r.t.bind(r,85643,23)).then((function(t){var e;return null!=(e=null==t?void 0:t.default)?e:t}))).then((function(t){e.portis=new t(e.dAppId,"number"===typeof e.networks[0]?a[e.networks[0]]:e.networks[0],e.config)}))}();return Promise.resolve(n&&n.then?n.then(t):t())}catch(o){return Promise.reject(o)}},s.getProvider=function(){try{return Promise.resolve(this.portis.provider)}catch(t){return Promise.reject(t)}},s.getChainId=function(){try{return Promise.resolve(this.portis.provider.send("eth_chainId"))}catch(t){return Promise.reject(t)}},s.getAccount=function(){try{return Promise.resolve(this.portis.provider.send("eth_accounts").then((function(t){return t[0]})))}catch(t){return Promise.reject(t)}},s.deactivate=function(){this.portis.onLogout((function(){})),this.portis.onActiveWalletChanged((function(){})),this.portis.onError((function(){}))},s.changeNetwork=function(t,e){try{var r=this;return"number"===typeof t?(a[t]||(0,o.Z)(!1,"Invalid chainId "+t),r.portis.changeNetwork(a[t],e),r.emitUpdate({chainId:t})):(r.portis.changeNetwork(t,e),r.emitUpdate({chainId:Number(t.chainId)})),Promise.resolve()}catch(n){return Promise.reject(n)}},s.close=function(){try{var t=this;return Promise.resolve(t.portis.logout()).then((function(){t.emitDeactivate()}))}catch(e){return Promise.reject(e)}},c}(n.Q)}}]);
//# sourceMappingURL=347.e46c2e59.chunk.js.map