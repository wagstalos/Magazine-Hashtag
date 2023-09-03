(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l=[{id:"1",marca:"Integralmedica",nome:"Whey protein",preco:79.9,precoAntigo:84.9,imagem:"product-1.jpg",feminino:!1},{id:"2",marca:"Black Skull",nome:"Whey 3hd",preco:84.9,precoAntigo:[],imagem:"product-2.jpg",feminino:!1},{id:"3",marca:"Integralmedica",nome:"Creatina",preco:29.9,precoAntigo:34.99,imagem:"product-3.jpg",feminino:!0},{id:"4",marca:"Black Skull",nome:"BCAA",preco:34.9,precoAntigo:[],imagem:"product-4.jpg",feminino:!0},{id:"5",marca:"Atlhetica",nome:"BCAA ",preco:29.9,precoAntigo:[],imagem:"product-5.jpg",feminino:!0},{id:"6",marca:"Proteína pura ",nome:"pasta de amendoim",preco:19.9,precoAntigo:[],imagem:"product-6.jpg",feminino:!0},{id:"7",marca:"Black Skull",nome:"Whey 3hd",preco:84.9,precoAntigo:[],imagem:"product-7.jpg",feminino:!1},{id:"8",marca:"Integralmedica",nome:"Whey protein",preco:79.9,precoAntigo:[],imagem:"product-8.jpg",feminino:!1}];function m(o,a){localStorage.setItem(o,JSON.stringify(a))}function d(o){return JSON.parse(localStorage.getItem(o))}function p(o){localStorage.removeItem(o)}function u(o,a,n){const r=l.find(c=>c.id===o),e=document.getElementById(a),t=document.createElement("article"),i=["flex","bg-gray-200","rounded-lg","p-1","relative","mb-2"];for(const c of i)t.classList.add(c);const s=`    

    <img src="assets/img/${r.imagem}" alt="${r.nome}" class="h-24 rounded-lg">

    <div class="p-2 flex flex-col">
      <p class="ml-2 text-slate-900 font-semibold text-sm ">${r.nome}</p>
      <p class="ml-2 text-slate-400 text-xs">${r.marca}</p>

    </div>

    <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
        <p id="quantidade-${r.id}" class="ml-2"> <small>Quantidade:</small>   ${n}</p>
    </div>
    `;t.innerHTML=s,e.appendChild(t)}export{p as a,l as c,u as d,d as l,m as s};
