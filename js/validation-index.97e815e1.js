!function(){"use strict";var e={8148:function(e,t,n){n.d(t,{Ci:function(){return v},Rp:function(){return g},Tg:function(){return a},UK:function(){return f},XQ:function(){return d},Zd:function(){return l},dO:function(){return I},f:function(){return x},iU:function(){return p},in:function(){return h},jJ:function(){return c},kh:function(){return y},o7:function(){return u},u$:function(){return m},xL:function(){return b},yD:function(){return s}}),document.querySelector(".menu-icon-div"),document.querySelector(".menu-icon").offsetWidth,document.querySelector(".menu-items");const r=window.location.href,i=r.substring(r.lastIndexOf("/")+1),o=i.indexOf("."),u=(i.substring(0,o),document.querySelector(".dropdown-div"),document.querySelector(".gal-arrow"),document.querySelector(".dropdown-content"),document.querySelector(".menu-items"),Array.from(document.querySelectorAll(".menu-btn")),Array.from(document.querySelectorAll(".dropdown-item")),!0===window.matchMedia("(prefers-reduced-motion: reduce)")||window.matchMedia("(prefers-reduced-motion: reduce)").matches,document.querySelectorAll(".menu-link"),document.querySelector(".form-disabled")),c=document.querySelector(".active-form-link"),l=document.querySelector("#contact"),d=document.querySelector("fieldset"),s=document.querySelectorAll("input"),a=document.querySelector("textarea"),m=document.getElementById("first-name"),y=document.querySelector(".firstNameError"),f=document.getElementById("last-name"),v=document.querySelector(".lastNameError"),g=document.getElementById("email"),x=document.querySelector(".emailError"),p=document.getElementById("message"),h=document.querySelector(".messageError"),b=document.querySelector(".send-contact"),I=document.querySelector(".submitError");window.innerHeight,window.innerWidth,document.querySelectorAll(".gal-main");let S={boxImgs:[],get boxImgsArray(){return this.boxImgs},set boxImgsArray(e){this.boxImgs=e}},q={circleDivs:[],get circleDivsArray(){return this.circleDivs},set circleDivsArray(e){this.circleDivs=e}},E={circles:[],get circleIconsArray(){return this.circles},set circleIconsArray(e){this.circles=e}},C={currentIndex:0,get targetIndex(){return this.currentIndex},set targetIndex(e){this.currentIndex=e}};S.boxImgs[C.currentIndex],S.boxImgs[C.currentIndex+1],S.boxImgs[C.currentIndex-1],q.circleDivs[C.currentIndex],q.circleDivs[C.currentIndex+1],q.circleDivs[C.currentIndex-1],E.circles[C.currentIndex],E.circles[C.currentIndex+1],E.circles[C.currentIndex-1]}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var r=n(8148);function i(){r.u$.validity.valueMissing?(d(r.u$,r.kh),r.kh.textContent="You need to enter your first name."):r.u$.validity.typeMismatch?(d(r.u$,r.kh),r.kh.textContent="Entered value needs to be a name."):l(r.u$,r.kh)}function o(){r.UK.validity.valueMissing?(d(r.UK,r.Ci),r.Ci.textContent="You need to enter your first name."):r.UK.validity.typeMismatch?(d(r.UK,r.Ci),r.Ci.textContent="Entered value needs to be a name."):l(r.UK,r.Ci)}function u(){r.Rp.validity.valueMissing||r.Rp.validity.typeMismatch?(d(r.Rp,r.f),r.f.textContent="Please follow format: your-email@email.com."):r.Rp.validity.tooShort?(d(r.Rp,r.f),r.f.textContent=`Email should be at least ${r.Rp.minLength} characters; you entered ${r.Rp.value.length}.`):l(r.Rp,r.f)}function c(){r.iU.validity.valueMissing||r.iU.validity.typeMismatch?(d(r.iU,r.in),r.in.textContent="You must enter a message to submit this form."):r.iU.validity.tooShort?(d(r.iU,r.in),r.in.textContent=`Message should be at least ${r.iU.minLength} characters; you entered ${r.iU.value.length}.`):l(r.iU,r.in)}function l(e,t){e.classList.remove("input--invalid"),t.textContent="",t.style.visibility="hidden"}function d(e,t){e.classList.add("input--invalid"),t.style.visibility="visible",t.setAttribute("aria-live","polite"),t.focus()}console.log("photogallery"),document.addEventListener("DOMContentLoaded",(e=>{console.log("Form page"),r.XQ.disabled?(r.o7.style.display="initial",r.jJ.style.display="initial",r.yD.forEach((e=>{e.style.backgroundColor="#edf0f0",e.style.pointerEvents="none"})),r.Tg.style.backgroundColor="#edf0f0",r.Tg.style.pointerEvents="none",r.xL.style.backgroundColor="#edf0f0",r.xL.style.pointerEvents="none"):r.XQ.disabled||(r.u$.addEventListener("blur",(e=>{i()})),r.UK.addEventListener("blur",(e=>{o()})),r.Rp.addEventListener("blur",(e=>{u()})),r.iU.addEventListener("blur",(e=>{c()})),r.Zd.addEventListener("submit",(e=>{r.u$.validity.valid&&r.UK.validity.valid&&r.Rp.validity.valid&&r.iU.validity.valid||(e.preventDefault(),i(),o(),u(),c(),r.dO.style.visibility="visible",r.dO.textContent="Please complete all text fields.")})))}))}();
//# sourceMappingURL=validation-index.97e815e1.js.map