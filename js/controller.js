import * as model from './model.js';
import productsListView from './view/productsListView.js';
import footerView from './view/footerView.js';
import navbarView from './view/navbarView.js';
import DUMMY_PRODUCTS from './data-products.js';

const controlProductsList = () => {
  model.loadProducts(DUMMY_PRODUCTS);
  model.state.products.forEach(product=>productsListView.render(product))
//   productsListView.render(model.state.products);
};
const controlFooter = () => {
  footerView.render();
};
const controlNavbar = () => {
  navbarView.render();
};
(() => {
  navbarView.addHandlerRender(controlNavbar);
  footerView.addHandlerRender(controlFooter);
  productsListView.addHandlerRender(controlProductsList);
})();
