const productCarousel = document.querySelector('.product-carousel');
const productFlkty = new Flickity(productCarousel, {
  cellAlign: "left",
  contain: true,
  pageDots: false,
//   groupCells: 3,
  prevNextButtons: false,
});
const productsListPrevBtn = document.querySelector('.prev-btn');
const productsListNextBtn = document.querySelector('.next-btn');

productsListPrevBtn.addEventListener('click', () => {
  productFlkty.previous();
});
productsListNextBtn.addEventListener('click', () => {
    productFlkty.next();
  });
