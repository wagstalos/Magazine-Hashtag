import { renderizarCatalago } from "./src/cartaoProduto";
import { wishList } from "./src/cartaoProduto";
import { inicializarCarrinho } from "./src/menuCarrinho";

function init() {
  renderizarCatalago();
  wishList();
  inicializarCarrinho();
}

init();
