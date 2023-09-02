import { renderizarCatalago } from "./src/cartaoProduto";
import { wishList } from "./src/cartaoProduto";
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
}

init();
