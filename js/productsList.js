const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

const DUMMY_PRODUCTS = [
  {
    id: uid(),
    description: 'Your Skin But Better CC+ Cream with SPF50 12ml',
    isOnSale: false,
    isNew: true,
    price: {
      original: 28,
    },
  },
  {
    id: uid(),
    description: 'KEM DUONG VT CICA - VT CICA CREAM',
    isOnSale: true,
    isNew: false,
    price: {
      original: 32,
      current: 28,
    },
  },
  {
    id: uid(),
    description: 'Niche Beauty CCC Cream - Niche Beauty',
    isOnSale: false,
    isNew: true,
    price: {
      original: 32,
    },
  },
  {
    id: uid(),
    description: 'Your Skin But Better CC+ Cream with SPF50 12ml',
    isOnSale: false,
    isNew: true,
    price: {
      original: 28,
    },
  },
  {
    id: uid(),
    description: 'KEM DUONG VT CICA - VT CICA CREAM',
    isOnSale: true,
    isNew: false,
    price: {
      original: 32,
      current: 28,
    },
  },
  {
    id: uid(),
    description: 'Niche Beauty CCC Cream - Niche Beauty',
    isOnSale: false,
    isNew: true,
    price: {
      original: 32,
    },
  },
  {
    id: uid(),
    description: 'Your Skin But Better CC+ Cream with SPF50 12ml',
    isOnSale: false,
    isNew: true,
    price: {
      original: 28,
    },
  },
  {
    id: uid(),
    description: 'KEM DUONG VT CICA - VT CICA CREAM',
    isOnSale: true,
    isNew: false,
    price: {
      original: 32,
      current: 28,
    },
  },
  {
    id: uid(),
    description: 'Niche Beauty CCC Cream - Niche Beauty',
    isOnSale: false,
    isNew: true,
    price: {
      original: 32,
    },
  },
  {
    id: uid(),
    description: 'Your Skin But Better CC+ Cream with SPF50 12ml',
    isOnSale: false,
    isNew: true,
    price: {
      original: 28,
    },
  },
  {
    id: uid(),
    description: 'KEM DUONG VT CICA - VT CICA CREAM',
    isOnSale: true,
    isNew: false,
    price: {
      original: 32,
      current: 28,
    },
  },
  {
    id: uid(),
    description: 'Niche Beauty CCC Cream - Niche Beauty',
    isOnSale: false,
    isNew: true,
    price: {
      original: 32,
    },
  },
  {
    id: uid(),
    description: 'Niche Beauty CCC Cream - Niche Beauty',
    isOnSale: false,
    isNew: true,
    price: {
      original: 32,
    },
  },
];
const productsWrapper = document.querySelector('.products-collection');
let loadMore = `<div class="products-collection__control">
<p class="dark__text">Showing 15 of 23</p>
<a href="#" class="btn-bg btn--white">Load More</a>
</div>`;
let productHtml = ``;

DUMMY_PRODUCTS.forEach((item) => {
  productHtml += `<div class="product">
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
    ${
      item.isOnSale
        ? `<div class='product__prices'>
        <span class='product__price product__price--current'>$${item.price.current}</span>
          <span class='product__price product__price--original'>$${item.price.original}</span>
        </div>`
        : `<div class='product__prices'>
          <span class='product__price product__price--current'>$${item.price.original}</span>
        </div>`
    }
    </div>`;
});

productsWrapper.innerHTML += productHtml;
productsWrapper.innerHTML += loadMore;
