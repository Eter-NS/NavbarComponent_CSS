(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",d=>{function n(){e=window.matchMedia("(max-width: 426px)").matches,r.ariaHidden=""+e,r.ariaExpanded=e?!1:null}const r=document.querySelector(".navbar__hoverLink"),o=document.querySelector("#hamburgerMenu");let e;n(),window.addEventListener("resize",t=>{n()}),o.addEventListener("click",t=>{r.classList.toggle("is-active"),r.ariaHidden=r.ariaHidden==="true"?"false":"true",r.ariaExpanded=r.ariaExpanded==="true"?"false":"true"})});
