import View from './View.js';

let loadMore = `<div class="products-collection__control">
<p class="dark__text">Showing 15 of 23</p>
<a href="#" class="btn-bg btn--white">Load More</a>
</div>`;

class ProductsListView extends View {
  _parentElement = document.querySelector('.products-collection');
  _errorMessage = 'We could not find products! Please try again!';

  addHandlerRender(handler) {
    handler();
  }
  _generateMarkup(item) {
    console.log(item)
    return `<div class="product">
    <div class="product__showcase">
      <span class="product__icon product__icon--${
        item.isNew ? 'new' : 'sale'
      }">${item.isNew ? 'new' : 'sale'}</span>
      <div class="product__img-box">
        <img
          src="assets/icons/image-${Math.trunc(Math.random() * 3 + 1)}.png"
          alt=""
          class="product__img"
        />
      </div>
      <button class="btn-product">+ Quick Shop</button>
    </div>
    <div class="product__description">
      ${item.description}
    </div>
    ${item.isOnSale &&`
    <div class='product__prices'>
        <span class='product__price product__price--current'>$${item.price.current}</span>
        <span class='product__price product__price--original'>$${item.price.original}</span>
    </div>`}
   </div>`;
  }
}

export default new ProductsListView();
