(function(e){function t(t){for(var r,o,u=t[0],a=t[1],l=t[2],s=0,d=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c={app:0},i=[];function u(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-0243f584":"3b6aba0e","chunk-0566b3e0":"6f59a2c6","chunk-1dc481d2":"d16c06eb","chunk-2d0bd628":"567a3033","chunk-2d0df819":"a2b5ad32","chunk-5877b415":"5f24588d","chunk-744ff0f1":"9ebca0be","chunk-458b6d51":"3a321430","chunk-545d5ed8":"5c214532","chunk-7daaa0ca":"e7277124","chunk-db0f809e":"fed58e8c","chunk-f90bf03e":"26cbec67"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n={"chunk-0243f584":1,"chunk-0566b3e0":1,"chunk-1dc481d2":1,"chunk-5877b415":1,"chunk-458b6d51":1,"chunk-545d5ed8":1,"chunk-7daaa0ca":1,"chunk-db0f809e":1,"chunk-f90bf03e":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0243f584":"5796f819","chunk-0566b3e0":"c69b95c4","chunk-1dc481d2":"edd44a8e","chunk-2d0bd628":"31d6cfe0","chunk-2d0df819":"31d6cfe0","chunk-5877b415":"5dceb439","chunk-744ff0f1":"31d6cfe0","chunk-458b6d51":"06e973e7","chunk-545d5ed8":"c4fd4ce5","chunk-7daaa0ca":"2d1e23a3","chunk-db0f809e":"6f1a2191","chunk-f90bf03e":"9012b990"}[e]+".css",c=a.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=i[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===c))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],s=l.getAttribute("data-href");if(s===r||s===c)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],h.parentNode.removeChild(h),n(i)},h.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=u(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(h);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}c[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue2-practice/",a.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"css-demo bg-vue dark:bg-dark-800 text-white",class:{"top-menu":e.topMenu},on:{click:e.changeMenuPosition}},[n("router-link",{staticClass:"link-item border-b border-solid border-light-300 px-4",attrs:{to:"/scroll-snap1"}},[e._v(" 仿微信列表滑动删除功能 ")]),n("router-link",{staticClass:"link-item border-b border-solid border-light-300 px-4",attrs:{to:"/flex1"},nativeOn:{click:function(t){e.topMenu=!1}}},[e._v("flex布局测试 ")]),n("router-link",{staticClass:"link-item border-b border-solid border-light-300 px-4",attrs:{to:"/button1"},nativeOn:{click:function(t){e.topMenu=!1}}},[e._v("CSS style1 ")]),n("router-link",{staticClass:"link-item border-b border-solid border-light-300 px-4",attrs:{to:"/element-height"},nativeOn:{click:function(t){e.topMenu=!1}}},[e._v("Vue获取元素尺寸 ")]),n("router-link",{staticClass:"link-item border-b border-solid border-light-300 px-4",attrs:{to:"/clip-path1"},nativeOn:{click:function(t){e.topMenu=!1}}},[e._v("svg clipPath动画1 ")]),n("router-link",{staticClass:"link-item border-b border-solid border-light-300 px-4",attrs:{to:"/img-error-report"},nativeOn:{click:function(t){e.topMenu=!1}}},[e._v("img-error-report ")]),n("router-link",{staticClass:"link-item border-b border-solid border-light-300 px-4",attrs:{to:"/sourcemap-test"},nativeOn:{click:function(t){e.topMenu=!1}}},[e._v("sourceMapTest ")]),n("router-link",{staticClass:"link-item border-b border-solid border-light-300 px-4",attrs:{to:"/animationIndex"},nativeOn:{click:function(t){e.topMenu=!1}}},[e._v("Animation ")]),n("router-link",{staticClass:"link-item border-b border-solid border-light-300 px-4",attrs:{to:"/css1"},nativeOn:{click:function(t){e.topMenu=!1}}},[e._v("css1 ")]),n("router-link",{staticClass:"link-item border-b border-solid border-light-300 px-4",attrs:{to:"/ui-events"},nativeOn:{click:function(t){e.topMenu=!1}}},[e._v("UI events ")]),n("router-link",{staticClass:"link-item border-b border-solid border-light-300 px-4",attrs:{to:"/echarts"},nativeOn:{click:function(t){e.topMenu=!1}}},[e._v("Echarts ")])],1),n("div",{staticStyle:{"margin-left":"180px",padding:"15px 0 0 15px"}},[n("router-view")],1)])},c=[],i=(n("caad"),n("2532"),{name:"App",components:{},data:function(){return{topMenu:!1,clickCount:0,maxInterval:800}},mounted:function(){document.addEventListener("click",this.toggleDarkMode)},methods:{toggleDarkMode:function(){if(0===this.clickCount)this.startTime=Date.now(),this.clickCount=this.clickCount+1;else if(this.clickCount>0&&this.clickCount<5){var e=Date.now()-this.startTime;e>this.maxInterval&&(this.clickCount=0,this.startTime=Date.now()),this.clickCount=this.clickCount+1}else 5===this.clickCount?(document.documentElement.classList.toggle("dark"),this.clickCount=0):this.clickCount=0},changeMenuPosition:function(e){console.log(e.target);var t=e.target.getAttribute("href");t.includes("scroll-snap1")?this.topMenu=!0:this.topMenu=!1,console.log(this.$route,t),t&&t.includes(this.$route.path)&&e.target.classList.add("active")}}}),u=i,a=(n("5c0b"),n("2877")),l=Object(a["a"])(u,o,c,!1,null,null,null),s=l.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(d["a"]);var h=[{path:"/scroll-snap1",component:function(){return n.e("chunk-7daaa0ca").then(n.bind(null,"de79"))}},{path:"/flex1",component:function(){return n.e("chunk-db0f809e").then(n.bind(null,"83c3"))}},{path:"/button1",component:function(){return n.e("chunk-5877b415").then(n.bind(null,"74a1"))}},{path:"/element-height",component:function(){return n.e("chunk-1dc481d2").then(n.bind(null,"1d67"))}},{path:"/clip-path1",component:function(){return n.e("chunk-0243f584").then(n.bind(null,"8aed"))}},{path:"/img-error-report",component:function(){return n.e("chunk-2d0bd628").then(n.bind(null,"2c89"))}},{path:"/sourcemap-test",component:function(){return n.e("chunk-2d0df819").then(n.bind(null,"89ce"))}},{path:"/css1",component:function(){return Promise.all([n.e("chunk-744ff0f1"),n.e("chunk-458b6d51")]).then(n.bind(null,"27be"))}},{path:"/animationIndex",component:function(){return n.e("chunk-0566b3e0").then(n.bind(null,"5990"))}},{path:"/ui-events",component:function(){return Promise.all([n.e("chunk-744ff0f1"),n.e("chunk-545d5ed8")]).then(n.bind(null,"e001"))}},{path:"/echarts",component:function(){return n.e("chunk-f90bf03e").then(n.bind(null,"60e7"))}}],f=function(){return new d["a"]({scrollBehavior:function(){return{y:0}},routes:h})},p=f();var b=p,k=n("9eb6");n("f5df1"),n("b20f");r["a"].config.errorHandler=k["a"],new r["a"]({router:b,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("70c1")},"70c1":function(e,t,n){},"9eb6":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("b0c0"),n("99af");function r(e){if(e){var t=e.message,n=e.columnNumber,r=e.lineNumber,o=e.name,c="http://localhost:3000/error",i=new Image;i.src=c+"?message=".concat(t,"&name=").concat(o,"&column=").concat(n,"&line=").concat(r),console.error(e)}}},b20f:function(e,t,n){}});
//# sourceMappingURL=app.31ef28f5.js.map