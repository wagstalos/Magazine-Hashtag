import { renderizarCatalago } from "./src/cartaoProduto";
import { wishList } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo";
import {
  atualizarPrecoCarrinho,
  inicializarCarrinho,
  renderizarProdutosCarrinho,
} from "./src/menuCarrinho";

function init() {
  renderizarCatalago();
  wishList();
  inicializarCarrinho();
  renderizarProdutosCarrinho();
  atualizarPrecoCarrinho();
  inicializarFiltros();
}

init();
