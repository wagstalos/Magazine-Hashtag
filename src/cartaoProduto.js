import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalago() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = 
    `<div class='shadow bg-white rounded-lg 
                w-60 m-2 bg-slate-100 rounded-xl 
                flex flex-col p-2 justify-between group relative ${produtoCatalogo.feminino ? 'feminino' : 'masculino' }' id="card-produto-${produtoCatalogo.id}">
        <i class="fa-regular fa-heart absolute top-4 right-4 z-10 cursor-pointer"></i>  
     
        <img class="h-100 rounded-xl group-hover:scale-105 duration-200"
                  src="./assets/img/${produtoCatalogo.imagem}"
                  alt="Produto 1 do Magazine Hashtag."
              />
              <p class="px-2 text-sm font-medium text-slate-700 mt-2">${produtoCatalogo.marca}</p>
              <p class="px-2 text-lg font-semibold text-slate-900">${produtoCatalogo.nome}</p>
              <p class="px-2 text-lg font-semibold text-slate-500">$${produtoCatalogo.preco}</p>
              <button id='adicionar=${produtoCatalogo.id}' class="h-10 px-6 font-semibold rounded-md bg-black hover:bg-slate-800 text-white"><i class="fa-solid fa-cart-plus"></i></button>
          </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }

  for (const produtoCatalogo of catalogo) {
    document
      .getElementById(`adicionar=${produtoCatalogo.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
  }
}

// Seleciona todos os elementos com a classe ".fa-heart"
// const heartIcons = document.querySelectorAll(".fa-heart");

// // Adiciona o ouvinte de evento a cada elemento
// heartIcons.forEach((icon) => {
//   icon.addEventListener("click", function () {
//     this.classList.toggle("is-favorited");
//   });
// });

export function wishList() {
  const heartIcons = document.querySelectorAll(".fa-heart");

  heartIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const isFavorited = this.classList.contains("is-favorited");

      if (isFavorited) {
        this.classList.remove("is-favorited");
        this.classList.remove("fa-solid");
        this.classList.add("fa-regular");
      } else {
        this.classList.add("is-favorited");
        this.classList.remove("fa-regular");
        this.classList.add("fa-solid");
      }
    });
  });
}
