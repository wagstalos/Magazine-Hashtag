import{l as v,c as a,s as r}from"./utilidades-73e83d2b.js";const o=v("carrinho")??{};function b(){document.getElementById("carrinho").classList.add("right-[0px]"),document.getElementById("carrinho").classList.remove("right-[-360px]")}function y(){document.getElementById("carrinho").classList.remove("right-[0px]"),document.getElementById("carrinho").classList.add("right-[-360px]")}function L(){Object.keys(o).length!==0&&(window.location.href=window.location.origin+"/checkout.html")}function E(){const t=document.getElementById("fechar-carrinho"),e=document.getElementById("abrir-carrinho"),i=document.getElementById("finalizar-compra");t.addEventListener("click",y),e.addEventListener("click",b),i.addEventListener("click",L)}function m(t){delete o[t],r("carrinho",o),s(),g()}function u(t){o[t]++,r("carrinho",o),s(),f(t)}function C(t){if(o[t]===1){m(t);return}o[t]--,r("carrinho",o),s(),f(t)}function f(t){document.getElementById(`quantidade-${t}`).innerText=o[t]}function h(t){const e=a.find(c=>c.id===t),i=document.getElementById("produtos-carrinho"),n=document.createElement("article"),p=["flex","bg-slate-100","rounded-lg","p-1","relative","mb-2"];for(const c of p)n.classList.add(c);const x=`
    <button id="remover-item-${e.id}" class="absolute top-2 right-2">
      <i class="fa-solid fa-trash text-red-600 hover:text-red-700"></i>
    </button>

    <img src="assets/img/${e.imagem}" alt="${e.nome}" class="h-24 rounded-lg">

    <div class="p-2 flex flex-col justify-between">
      <p class="ml-2 text-slate-900 font-semibold text-sm ">${e.nome}</p>
      <p class="ml-2 text-slate-400 text-xs">${e.marca}</p>

      <p class="ml-2 font-semibold text-teal-400 text-lg">${e.preco.toLocaleString("pt-br",{style:"currency",currency:"BRL"})}</p>
    </div>

    <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
        <button id='decrementar-produto-${e.id}' class="font-semibold "><i class="fa-solid fa-minus"></i></button>
        <p id="quantidade-${e.id}" class="ml-2">${o[e.id]}</p>
        <button id='incrementar-produto-${e.id}' class="ml-2 font-semibold "><i class="fa-solid fa-plus"></i></button>
    </div>
    `;n.innerHTML=x,i.appendChild(n),document.getElementById(`decrementar-produto-${e.id}`).addEventListener("click",()=>C(e.id)),document.getElementById(`incrementar-produto-${e.id}`).addEventListener("click",()=>u(e.id)),document.getElementById(`remover-item-${e.id}`).addEventListener("click",()=>m(e.id))}function g(){const t=document.getElementById("produtos-carrinho");t.innerHTML="";for(const e in o)h(e)}function B(t){if(t in o){u(t);return}const e=document.getElementById("success");e.classList.remove("hidden");function i(){e.classList.remove("hidden"),setTimeout(function(){e.classList.add("hidden")},3e3)}i(),o[t]=1,r("carrinho",o),h(t),s()}function s(){const t=document.getElementById("preco-total");let e=0;for(const i in o)e+=a.find(n=>n.id===i).preco*o[i];t.innerText=`${e.toLocaleString("pt-br",{style:"currency",currency:"BRL"})}`}function I(){for(const t of a){const e=`<div class='shadow bg-white
                w-80 m-2 rounded-xl 
                flex flex-col p-2 justify-between group relative ${t.feminino?"feminino":"masculino"}' id="card-produto-${t.id}">
        <i class="fa-regular fa-heart text-teal-300 absolute top-4 right-4 z-10 cursor-pointer"></i>  
     
        <img class="h-100 rounded-xl group-hover:scale-105 duration-200"
                  src="/assets/img/${t.imagem}"
                  alt="${t.nome}."
              />
              <p class="px-2 text-sm font-medium text-slate-400 mt-4"><i class="fa-solid fa-bolt"></i>${t.marca}</p>

              <p class="px-2 text-lg font-semibold text-slate-900 mb-2">${t.nome}</p>


              <div class="flex justify-between items-end mb-4">
                <div>
                  <del class="px-2 text-sm text-gray-400"> ${t.precoAntigo.toLocaleString("pt-br",{style:"currency",currency:"BRL"})}</del>

                  <p class="px-2 text-lg font-semibold text-teal-400 ">${t.preco.toLocaleString("pt-br",{style:"currency",currency:"BRL"})}</p>
                </div>

                <div class="flex px-2  text-amber-400">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <small class="text-slate-300">(5)</small>
                </div>

              </div>

              <button id='adicionar-${t.id}' class="h-10 px-6 font-semibold rounded-md bg-black hover:bg-slate-800 text-white"><i class="fa-solid fa-cart-plus"></i></button>
          </div>`;document.getElementById("container-produto").innerHTML+=e}for(const t of a)document.getElementById(`adicionar-${t.id}`).addEventListener("click",()=>B(t.id))}function $(){const t=document.querySelectorAll(".fa-heart"),e=document.getElementById("add-wish");t.forEach(i=>{i.addEventListener("click",function(){this.classList.contains("is-favorited")?(this.classList.remove("is-favorited"),this.classList.remove("fa-solid"),this.classList.add("fa-regular")):(this.classList.add("is-favorited"),this.classList.remove("fa-regular"),this.classList.add("fa-solid"),e.classList.remove("hidden"),setTimeout(function(){e.classList.add("hidden")},3e3))})})}const d=document.getElementById("container-produto");function l(){const t=Array.from(d.getElementsByClassName("hidden"));for(const e of t)e.classList.remove("hidden")}function k(){l();const t=Array.from(d.getElementsByClassName("masculino"));for(const e of t)e.classList.add("hidden")}function w(){l();const t=Array.from(d.getElementsByClassName("feminino"));for(const e of t)e.classList.add("hidden")}function T(){document.getElementById("exibir-todos").addEventListener("click",l),document.getElementById("exibir-masculinos").addEventListener("click",w),document.getElementById("exibir-femininos").addEventListener("click",k)}function z(){I(),$(),E(),g(),s(),T()}z();
