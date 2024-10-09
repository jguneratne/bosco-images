!function(){"use strict";var e={8148:function(e,t,r){r.d(t,{BE:function(){return u},F2:function(){return i},Hy:function(){return s},Lg:function(){return v},Zk:function(){return a},dm:function(){return c},eW:function(){return f},q5:function(){return n},ro:function(){return o},tp:function(){return y},vU:function(){return m},vg:function(){return g},xd:function(){return p}});const n=document.querySelector(".menu-icon-div"),o=document.querySelector(".menu-icon"),c=o.offsetWidth,a=c/2,s=document.querySelector(".menu-items"),i=window.location.href,l=i.substring(i.lastIndexOf("/")+1),d=l.indexOf("."),u=l.substring(0,d),m=document.querySelector(".dropdown-div"),g=document.querySelector(".gal-arrow"),y=document.querySelector(".dropdown-content"),v=(document.querySelector(".menu-items"),Array.from(document.querySelectorAll(".menu-btn"))),f=Array.from(document.querySelectorAll(".dropdown-item")),p=(!0===window.matchMedia("(prefers-reduced-motion: reduce)")||window.matchMedia("(prefers-reduced-motion: reduce)").matches,document.querySelectorAll(".menu-link"));document.querySelector(".form-disabled"),document.querySelector(".active-form-link"),document.querySelector("#contact"),document.querySelector("fieldset"),document.querySelectorAll("input"),document.querySelector("textarea"),document.getElementById("first-name"),document.querySelector(".firstNameError"),document.getElementById("last-name"),document.querySelector(".lastNameError"),document.getElementById("email"),document.querySelector(".emailError"),document.getElementById("message"),document.querySelector(".messageError"),document.querySelector(".send-contact"),document.querySelector(".submitError"),window.innerHeight,window.innerWidth,document.querySelectorAll(".gal-main");let L={boxImgs:[],get boxImgsArray(){return this.boxImgs},set boxImgsArray(e){this.boxImgs=e}},x={circleDivs:[],get circleDivsArray(){return this.circleDivs},set circleDivsArray(e){this.circleDivs=e}},E={circles:[],get circleIconsArray(){return this.circles},set circleIconsArray(e){this.circles=e}},w={currentIndex:0,get targetIndex(){return this.currentIndex},set targetIndex(e){this.currentIndex=e}};L.boxImgs[w.currentIndex],L.boxImgs[w.currentIndex+1],L.boxImgs[w.currentIndex-1],x.circleDivs[w.currentIndex],x.circleDivs[w.currentIndex+1],x.circleDivs[w.currentIndex-1],E.circles[w.currentIndex],E.circles[w.currentIndex+1],E.circles[w.currentIndex-1]}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,r),c.exports}r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var n=r(8148);function o(){n.Lg.forEach((e=>{e.dataset.name===n.BE?(console.log(e.dataset.name),n.Lg.forEach((e=>{e.classList.remove("selected")})),e.classList.add("selected")):"birds-gallery"!==n.BE&&"insects-gallery"!==n.BE&&"small-animals-gallery"!==n.BE||n.eW.forEach((e=>{"birds-gallery"!==e.dataset.name&&"insects-gallery"!==e.dataset.name&&"small-animals-gallery"!==e.dataset.name||(n.Lg.forEach((e=>{e.classList.remove("selected")})),n.vU.classList.add("selected"))}))}))}function c(){n.vg.classList.add("gal-arrow--active"),n.tp.classList.add("dropdown-content--active"),n.eW.forEach((e=>{e.classList.add("dropdown-item--active")})),n.Lg.forEach((e=>{console.log(e.dataset.name),e.classList.remove("selected"),"galleries"===e.dataset.name&&e.classList.add("selected")}))}function a(){n.Lg.forEach((e=>{e.classList.remove("selected"),e.dataset.name===n.BE?(e.classList.add("selected"),console.log(n.F2)):e.dataset.name===n.BE||"birds-gallery"!==n.BE&&"insects-gallery"!==n.BE&&"small-animals-gallery"!==n.BE&&"pond-life-gallery"!==n.BE&&"urban-animals-gallery"!==n.BE||n.vU.classList.add("selected")}))}function s(){n.Lg.forEach((e=>{e.classList.remove("selected")})),n.tp.classList.remove("dropdown-content--active"),n.vg.classList.remove("gal-arrow--active"),n.eW.forEach((e=>{e.classList.remove("dropdown-item--active")}))}document.addEventListener("DOMContentLoaded",(e=>{console.log("The page is loaded"),n.q5.addEventListener("pointerdown",(e=>{e.target!==n.q5&&e.target!==n.ro||n.Hy.classList.contains("active")?!n.Hy.classList.contains("active")||e.target!==n.q5&&e.target!==n.ro||(n.Hy.classList.remove("active"),n.ro.style.width=n.dm+"px",n.ro.setAttribute("alt","Menu Button: Click to expand menu options")):(n.Hy.classList.add("active"),n.ro.style.width=n.Zk+"px",n.ro.setAttribute("alt","Menu Button: Click to hide menu options"),o())})),n.q5.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||e.target!==n.q5&&e.target!==n.ro||n.Hy.classList.contains("active")?"Enter"!==e.key&&" "!==e.key||e.target!==n.q5&&e.target!==n.ro||!n.Hy.classList.contains("active")||(n.Hy.classList.remove("active"),n.ro.style.width=n.dm+"px",n.ro.setAttribute("alt","Menu Button: Click to expand menu options")):(n.Hy.classList.add("active"),n.ro.style.width=n.Zk+"px",n.ro.setAttribute("alt","Menu Button: Click to hide menu options"),o())})),n.xd.forEach((e=>{e.dataset.name===n.BE&&(n.xd.forEach((e=>{e.removeAttribute("aria-current","page")})),e.setAttribute("aria-current","page"))})),n.vU.addEventListener("pointerdown",(e=>{"galleries"!==e.target.innerText.toLowerCase()&&e.target!==n.vg||n.tp.classList.contains("dropdown-content--active")?e.target!==n.eW&&e.target!==n.vg||!n.tp.classList.contains("dropdown-content--active")?"galleries"!==e.target.innerText.toLowerCase()&&e.target!==n.vg||!n.tp.classList.contains("dropdown-content--active")||(s(),a()):(console.log(e.target),s()):c()})),n.vU.addEventListener("keydown",(e=>{" "!==e.key&&"Enter"!==e.key||"galleries"!==e.target.innerText.toLowerCase()&&e.target!==n.vg||n.tp.classList.contains("dropdown-content--active")?" "!==e.key&&"Enter"!==e.key||"galleries"!==e.target.innerText.toLowerCase()&&e.target!==n.vg||!n.tp.classList.contains("dropdown-content--active")||(console.log(e.target),s(),a(),"galleries"===e.target.dataset.name&&e.target.blur()):c()}))}))}();
//# sourceMappingURL=menu-index.5db71363.js.map