import { catalogo } from "./utilidades";

const idsProdutosCarrinhoComQuantidade = {};

function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("right-[0px]");
  document.getElementById("carrinho").classList.remove("right-[-360px]");
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[0px]");
  document.getElementById("carrinho").classList.add("right-[-360px]");
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
  const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

  botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
  botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}

function removerDoCarrinho(idProduto) {
  delete idsProdutosCarrinhoComQuantidade[idProduto];
  atualizarPrecoCarrinho();
  renderizarProdutosCarrinho();
}

function incrementarQuantidadeProduto(idProduto) {
  idsProdutosCarrinhoComQuantidade[idProduto]++;
  atualizarPrecoCarrinho();
  atualizarInformacoesQuantidade(idProduto);
}

function decrementarQuantidadeProduto(idProduto) {
  if (idsProdutosCarrinhoComQuantidade[idProduto] === 1) {
    removerDoCarrinho(idProduto);
    return;
  }
  idsProdutosCarrinhoComQuantidade[idProduto]--;
  atualizarPrecoCarrinho();
  atualizarInformacoesQuantidade(idProduto);
}

function atualizarInformacoesQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText =
    idsProdutosCarrinhoComQuantidade[idProduto];
}

function desenharProdutonoCarrinho(idProduto) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const conatinerProdutosCarrinho =
    document.getElementById("produtos-carrinho");

  const elementoArticle = document.createElement("article");
  const articleClasses = [
    "flex",
    "bg-slate-100",
    "rounded-lg",
    "p-1",
    "relative",
    "mb-2",
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }

  const cartaoProdutoCarrinho = `
    <button id="remover-item-${produto.id}" class="absolute top-0 right-2">
      <i class="fa-regular fa-circle-xmark text-slate-700 hover:text-slate-400"></i>
    </button>

    <img src="./assets/img/${produto.imagem}" alt="${
    produto.nome
  }" class="h-24 rounded-lg">

    <div class="p-2 flex flex-col justify-between">
      <p class="ml-2 text-slate-900 font-semibold text-sm ">${produto.nome}</p>
      <p class="ml-2 text-slate-400 text-xs">Tamanho: M</p>
      <p class="ml-2 font-semibold text-green-600 text-lg">R$ ${
        produto.preco
      }</p>
    </div>

    <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
        <button id='decrementar-produto-${
          produto.id
        }' class="font-semibold "><i class="fa-solid fa-minus"></i></button>
        <p id="quantidade-${produto.id}" class="ml-2">${
    idsProdutosCarrinhoComQuantidade[produto.id]
  }</p>
        <button id='incrementar-produto-${
          produto.id
        }' class="ml-2 font-semibold "><i class="fa-solid fa-plus"></i></button>
    </div>
    `;

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  conatinerProdutosCarrinho.appendChild(elementoArticle);

  document
    .getElementById(`decrementar-produto-${produto.id}`)
    .addEventListener("click", () => decrementarQuantidadeProduto(produto.id));

  document
    .getElementById(`incrementar-produto-${produto.id}`)
    .addEventListener("click", () => incrementarQuantidadeProduto(produto.id));

  document
    .getElementById(`remover-item-${produto.id}`)
    .addEventListener("click", () => removerDoCarrinho(produto.id));
}

function renderizarProdutosCarrinho() {
  const conatinerProdutosCarrinho =
    document.getElementById("produtos-carrinho");
  conatinerProdutosCarrinho.innerHTML = "";

  for (const idProduto in idsProdutosCarrinhoComQuantidade) {
    desenharProdutonoCarrinho(idProduto);
  }
}

export function adicionarAoCarrinho(idProduto) {
  if (idProduto in idsProdutosCarrinhoComQuantidade) {
    incrementarQuantidadeProduto(idProduto);
    return;
  }
  idsProdutosCarrinhoComQuantidade[idProduto] = 1;
  desenharProdutonoCarrinho(idProduto);
  atualizarPrecoCarrinho();
}

function atualizarPrecoCarrinho() {
  const precoCarrinho = document.getElementById("preco-total");
  let precoTotalCarrinho = 0;

  for (const idProdutoNoCarrinho in idsProdutosCarrinhoComQuantidade) {
    precoTotalCarrinho +=
      catalogo.find((p) => p.id === idProdutoNoCarrinho).preco *
      idsProdutosCarrinhoComQuantidade[idProdutoNoCarrinho];
  }

  precoCarrinho.innerText = `$${precoTotalCarrinho}`;
}
