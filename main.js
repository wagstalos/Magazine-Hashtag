import { renderizarCatalago } from "./src/cartaoProduto";
import { inicializarCarrinho } from "./src/menuCarrinho";

function init() {
  renderizarCatalago();
  inicializarCarrinho();
}

init();
