import{l as a,d as e,s as n,a as s}from"./utilidades-73e83d2b.js";function c(){const o=a("carrinho")??{};for(const t in o)e(t,"container-produtos-checkout",o[t])}function u(o){o.preventDefault();const t=a("carrinho")??{};if(Object.keys(t).length===0)return;const i={dataPedido:new Date,pedido:t},r=a("historico")??[],d=[i,...r];n("historico",d),s("carrinho"),window.location.href=window.location.origin+"/pedidos.html"}c();document.addEventListener("submit",o=>u(o));