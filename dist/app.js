!function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=5)}([function(t,e,o){var r=o(1);"string"==typeof r&&(r=[[t.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(3)(r,n);r.locals&&(t.exports=r.locals)},function(t,e,o){(t.exports=o(2)(!1)).push([t.i,"#main-text {\r\n    height: 65vh;\r\n    font-size: 30px;\r\n}\r\n\r\n#colored-text {\r\n    height: 75vh;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    font-size: 70px;\r\n    border: 1px solid rgba(0, 0, 0, .2);\r\n    padding: 0 10px 10px 10px;\r\n    line-height: 1.75;\r\n}\r\n\r\n#colored-text:focus {\r\n    outline: 0;\r\n}\r\n\r\n#colored-text div, p, font {\r\n    word-break: break-all;\r\n    font-size: 70px;\r\n}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=function(t,e){var o=t[1]||"",r=t[3];if(!r)return o;if(e&&"function"==typeof btoa){var n=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),f=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[o].concat(f).concat([n]).join("\n")}return[o].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},n=0;n<this.length;n++){var f=this[n][0];"number"==typeof f&&(r[f]=!0)}for(n=0;n<t.length;n++){var l=t[n];"number"==typeof l[0]&&r[l[0]]||(o&&!l[2]?l[2]=o:o&&(l[2]="("+l[2]+") and ("+o+")"),e.push(l))}},e}},function(t,e,o){var r={},n=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),f=function(t){var e={};return function(t,o){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,o);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),l=null,i=0,a=[],s=o(4);function c(t,e){for(var o=0;o<t.length;o++){var n=t[o],f=r[n.id];if(f){f.refs++;for(var l=0;l<f.parts.length;l++)f.parts[l](n.parts[l]);for(;l<n.parts.length;l++)f.parts.push(h(n.parts[l],e))}else{var i=[];for(l=0;l<n.parts.length;l++)i.push(h(n.parts[l],e));r[n.id]={id:n.id,refs:1,parts:i}}}}function u(t,e){for(var o=[],r={},n=0;n<t.length;n++){var f=t[n],l=e.base?f[0]+e.base:f[0],i={css:f[1],media:f[2],sourceMap:f[3]};r[l]?r[l].parts.push(i):o.push(r[l]={id:l,parts:[i]})}return o}function p(t,e){var o=f(t.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=a[a.length-1];if("top"===t.insertAt)r?r.nextSibling?o.insertBefore(e,r.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),a.push(e);else if("bottom"===t.insertAt)o.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=f(t.insertAt.before,o);o.insertBefore(e,n)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=a.indexOf(t);e>=0&&a.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return o.nc}();r&&(t.attrs.nonce=r)}return g(e,t.attrs),p(t,e),e}function g(t,e){Object.keys(e).forEach(function(o){t.setAttribute(o,e[o])})}function h(t,e){var o,r,n,f;if(e.transform&&t.css){if(!(f=e.transform(t.css)))return function(){};t.css=f}if(e.singleton){var a=i++;o=l||(l=b(e)),r=x.bind(null,o,a,!1),n=x.bind(null,o,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),p(t,e),e}(e),r=function(t,e,o){var r=o.css,n=o.sourceMap,f=void 0===e.convertToAbsoluteUrls&&n;(e.convertToAbsoluteUrls||f)&&(r=s(r));n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var l=new Blob([r],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(l),i&&URL.revokeObjectURL(i)}.bind(null,o,e),n=function(){d(o),o.href&&URL.revokeObjectURL(o.href)}):(o=b(e),r=function(t,e){var o=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}.bind(null,o),n=function(){d(o)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else n()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=n()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var o=u(t,e);return c(o,e),function(t){for(var n=[],f=0;f<o.length;f++){var l=o[f];(i=r[l.id]).refs--,n.push(i)}t&&c(u(t,e),e);for(f=0;f<n.length;f++){var i;if(0===(i=n[f]).refs){for(var a=0;a<i.parts.length;a++)i.parts[a]();delete r[i.id]}}}};var C=function(){var t=[];return function(e,o){return t[e]=o,t.filter(Boolean).join("\n")}}();function x(t,e,o,r){var n=o?"":r.css;if(t.styleSheet)t.styleSheet.cssText=C(e,n);else{var f=document.createTextNode(n),l=t.childNodes;l[e]&&t.removeChild(l[e]),l.length?t.insertBefore(f,l[e]):t.appendChild(f)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var o=e.protocol+"//"+e.host,r=o+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var n,f=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(f)?t:(n=0===f.indexOf("//")?f:0===f.indexOf("/")?o+f:r+f.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},function(t,e,o){"use strict";o.r(e);o(0);const r=function(t){let e,o,r=t.length;for(;0!==r;)o=Math.floor(Math.random()*r),e=t[r-=1],t[r]=t[o],t[o]=e;return t};let n={textColor:"#000",bgColor:"#fff"},f=[{textColor:"#001F3F",bgColor:"#fff"},{textColor:"#0074D9",bgColor:"#fff"},{textColor:"#39CCCC",bgColor:"#fff"},{textColor:"#3D9970",bgColor:"#fff"},{textColor:"#2ECC40",bgColor:"#fff"},{textColor:"#FF851B",bgColor:"#fff"},{textColor:"#FF4136",bgColor:"#fff"},{textColor:"#85144B",bgColor:"#fff"},{textColor:"#B10DC9",bgColor:"#fff"},{textColor:"#111111",bgColor:"#fff"},{textColor:"#1c1c1c",bgColor:"#fff"}],l=[{textColor:"#000",bgColor:"#92a8d1"},{textColor:"#fff",bgColor:"#c94c4c"},{textColor:"#fff",bgColor:"#50394c"},{textColor:"#000",bgColor:"#ffef96"},{textColor:"#fff",bgColor:"#618685"},{textColor:"#fff",bgColor:"#618685"},{textColor:"#fff",bgColor:"#36486b"},{textColor:"#fff",bgColor:"#1abc9c"},{textColor:"#fff",bgColor:"#16a085"},{textColor:"#fff",bgColor:"#f1c40f"},{textColor:"#fff",bgColor:"#f39c12"},{textColor:"#fff",bgColor:"#2ecc71"},{textColor:"#fff",bgColor:"#27ae60"},{textColor:"#fff",bgColor:"#e67e22"},{textColor:"#fff",bgColor:"#d35400"},{textColor:"#fff",bgColor:"#3498db"},{textColor:"#fff",bgColor:"#2980b9"},{textColor:"#fff",bgColor:"#e74c3c"},{textColor:"#fff",bgColor:"#c0392b"},{textColor:"#fff",bgColor:"#9b59b6"},{textColor:"#fff",bgColor:"#8e44ad"},{textColor:"#000",bgColor:"#ecf0f1"},{textColor:"#fff",bgColor:"#34495e"},{textColor:"#fff",bgColor:"#2c3e50"},{textColor:"#fff",bgColor:"#7f8c8d"}];window.normalColors=r(f),window.bgColors=r(l);let i=$("#colored-text");i.on("input",()=>{s()});const a="<div><span><br></span></div>";function s(){let t=$("#colored-text"),e=0,o=0,r=t.find("div, p, font");localStorage.setItem("plainText",t.html());for(let t=0;t<r.length;t++){let i=0===t?n:(t+1)%5==0?l[o++]:f[e++];e>=f.length&&(e=0),o>=l.length&&(o=0);let a=$(r[t]);if(a.find(":not(span)").length>0&&!a.hasClass("MsoNormal"))continue;1!==a.find("span").length&&a.html(`<span>${a.text()}</span>`),(a=a.find("span")).css({color:i.textColor,backgroundColor:i.bgColor}),a.attr("id",`colored-text-${t}`);let s=a.text();s.length<=16?a[0].style.fontSize="70px":s.length>16&&s.length<=20?a[0].style.fontSize="55px":s.length>20&&s.length<=26?a[0].style.fontSize="50px":s.length>26&&s.length<=31?a[0].style.fontSize="43px":s.length>31&&s.length<=40?a[0].style.fontSize="38px":s.length>40&&s.length<=50?a[0].style.fontSize="27px":s.length>50&&(a[0].style.fontSize="20px")}}$("#select-all-btn").on("click",()=>{i.focus(),document.execCommand("selectAll",!1,null)}),$("#clear-btn").on("click",()=>{$("#colored-text").html(a),s(),$("#colored-text").focus()}),$(document).ready(()=>{let t=localStorage.getItem("plainText");t?$("#colored-text").html(t):$("#colored-text").html(a),s()})}]);