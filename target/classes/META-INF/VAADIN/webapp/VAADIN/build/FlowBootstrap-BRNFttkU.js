const m=function(u){window.Vaadin=window.Vaadin||{},window.Vaadin.Flow=window.Vaadin.Flow||{};var l={},w={},o;typeof window.console===void 0||!window.location.search.match(/[&?]debug(&|$)/)?o=function(){}:typeof window.console.log=="function"?o=function(){window.console.log.apply(window.console,arguments)}:o=window.console.log;var v=function(n){var t=document.getElementById(n);if(!t)return!1;for(var i=0;i<t.childElementCount;i++){var e=t.childNodes[i].className;if(e&&e.indexOf("v-app-loading")!=-1)return!1}return!0};window.Vaadin=window.Vaadin||{},window.Vaadin.Flow=window.Vaadin.Flow||{},window.Vaadin.Flow.tryCatchWrapper=function(n,t){return function(){try{return n.apply(this,arguments)}catch(i){console.error(`There seems to be an error in ${t}:
${i.message}
Please submit an issue to https://github.com/vaadin/flow-components/issues/new/choose`)}}},window.Vaadin.Flow.initApplication||(window.Vaadin.Flow.clients=window.Vaadin.Flow.clients||{},window.Vaadin.Flow.initApplication=function(n,t){var i=n.replace(/-\d+$/,"");if(l[n]){if(window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients&&window.Vaadin.Flow.clients[i]&&window.Vaadin.Flow.clients[i].initializing)throw new Error("Application "+n+" is already being initialized");if(v(n)){if(u.appConfig.productionMode)throw new Error("Application "+n+" already initialized");for(var e=document.getElementById(n),a=0;a<e.childElementCount;a++)e.childNodes[a].remove();const c={getConfig:function(h){return t[h]}};return l[n]=c,w.client.callback?(o("Starting from bootstrap",n),w.client.callback(n)):(o("Setting pending startup",n),w.client.pendingApps.push(n)),l[n]}}o("init application",n,t),window.Vaadin.Flow.clients[i]={isActive:function(){return!0},initializing:!0,productionMode:p};var f=function(s){var c=t[s];return c},r={getConfig:f};l[n]=r,window.name||(window.name=n+"-"+Math.random());var d="client";return w[d]={pendingApps:[]},w[d].callback?(o("Starting from bootstrap",n),w[d].callback(n)):(o("Setting pending startup",n),w[d].pendingApps.push(n)),r},window.Vaadin.Flow.getAppIds=function(){var n=[];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&n.push(t);return n},window.Vaadin.Flow.getApp=function(n){return l[n]},window.Vaadin.Flow.registerWidgetset=function(n,t){o("Widgetset registered",n);var i=w[n];if(i&&i.pendingApps){i.callback=t;for(var e=0;e<i.pendingApps.length;e++){var a=i.pendingApps[e];o("Starting from register widgetset",a),t(a)}i.pendingApps=null}},window.Vaadin.Flow.getBrowserDetailsParameters=function(){var n={};n["v-sh"]=window.screen.height,n["v-sw"]=window.screen.width,n["v-wh"]=window.innerHeight,n["v-ww"]=window.innerWidth,n["v-bh"]=document.body.clientHeight,n["v-bw"]=document.body.clientWidth;var t=new Date;n["v-curdate"]=t.getTime();for(var i=t.getTimezoneOffset(),e=0,a=i,f=12;f>0;f--){t.setUTCMonth(f);var r=t.getTimezoneOffset();if(i!=r){e=i>r?i-r:r-i,a=i>r?i:r;break}}n["v-tzo"]=i,n["v-dstd"]=e,n["v-rtzo"]=a,n["v-dston"]=i!=a;try{n["v-tzid"]=Intl.DateTimeFormat().resolvedOptions().timeZone}catch{n["v-tzid"]=""}window.name&&(n["v-wn"]=window.name);var d=!1;try{document.createEvent("TouchEvent"),d=!0}catch{d="ontouchstart"in window||typeof navigator.msMaxTouchPoints<"u"}return n["v-td"]=d,n["v-pr"]=window.devicePixelRatio,navigator.platform&&(n["v-np"]=navigator.platform),Object.keys(n).forEach(function(s){var c=n[s];typeof c<"u"&&(n[s]=c.toString())}),n}),o("Flow bootstrap loaded"),u.appConfig.productionMode&&typeof window.__gwtStatsEvent!="function"&&(window.Vaadin.Flow.gwtStatsEvents=[],window.__gwtStatsEvent=function(n){return window.Vaadin.Flow.gwtStatsEvents.push(n),!0});var g=u.appConfig,p=u.appConfig.productionMode;window.Vaadin.Flow.initApplication(g.appId,g)};export{m as init};