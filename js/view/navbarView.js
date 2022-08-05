// const navbarEl = document.querySelector('.navigation')
// const navbarHtml = `
// <p class="navigation__shipping">
//   Free Shipping for all orders over $100
// </p>
// <div class="navigation__nav">
//   <p class="navigation__menu menu-bar">Menu</p>
//   <ul class="navigation__list">
//     <li class="navigation__item">
//       <a href="#" class="navigation__link">Shop</a>
//     </li>
//     <li class="navigation__item">
//       <a href="#" class="navigation__link">About</a>
//     </li>
//     <li class="navigation__item">
//       <a href="#" class="navigation__link">Suncare 101</a>
//     </li>
//   </ul>
//   <p class="navigation__logo">Cream Shop</p>
//   <p class="navigation__menu cart-bar">Cart(0)</p>
//   <ul class="navigation__list">
//     <li class="navigation__item">
//       <a href="#" class="navigation__link">Account</a>
//     </li>
//     <li class="navigation__item">
//       <a href="#" class="navigation__link">Search</a>
//     </li>
//     <li class="navigation__item">
//       <a href="#" class="navigation__link">Cart (0)</a>
//     </li>
//   </ul>
// </div>
// `
// navbarEl.innerHTML=(navbarHtml)
class NavbarView {
  _parentElement = document.querySelector('.navigation');
  _errorMessage = 'We could not find Navbar! Please try again!';
  addHandlerRender(handler) {
    handler();
  }
  render() {
    const markup = this._generateMarkup();
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  _generateMarkup() {
    return `
    <p class="navigation__shipping">
      Free Shipping for all orders over $100
    </p>
    <div class="navigation__nav">
      <p class="navigation__menu menu-bar">Menu</p>
      <ul class="navigation__list">
        <li class="navigation__item">
          <a href="#" class="navigation__link">Shop</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">About</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">Suncare 101</a>
        </li>
      </ul>
      <p class="navigation__logo">Cream Shop</p>
      <p class="navigation__menu cart-bar">Cart(0)</p>
      <ul class="navigation__list">
        <li class="navigation__item">
          <a href="#" class="navigation__link">Account</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">Search</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">Cart (0)</a>
        </li>
      </ul>
    </div>
    `;
  }
}
export default new NavbarView();
