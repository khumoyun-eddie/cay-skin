class FooterView {
  _parentElement = document.querySelector('.footer');
  _errorMessage = 'We could not find Footer! Please try again!';
  addHandlerRender(handler) {
    handler()
  }
  render(){
    const markup = this._generateMarkup()
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  _generateMarkup() {
    return `<div class="footer__contact">
    <h5 class="footer__title">Join The Club</h5>
    <p class="footer__text">
      Keep up with our new releases, beauty tips and what Winnie's been up
      to.
    </p>
    <form class="footer__form">
      <input
        type="text"
        placeholder="Email Address"
        class="footer__input"
      />
      <img
        src="assets/icons/arrow.svg"
        class="footer__icon-arrow"
        alt=""
      />
    </form>
    <img
      src="assets/icons/socials.svg"
      alt="Socials"
      class="footer__icon-socials"
    />
    </div>
    <span class="footer__divider">&nbsp;</span>
    <div class="footer__nav">
    <ul class="footer__list">
      <h5 class="heading-5 heading-5--white">Shop</h5>
      <li class="footer__list-item">Shop All</li>
      <li class="footer__list-item">Best Sellers</li>
      <li class="footer__list-item">Universal Mineral</li>
      <li class="footer__list-item">Isie Glow to Isle</li>
      <li class="footer__list-item">Deepwater</li>
      <li class="footer__list-item">Winnie Selects</li>
    </ul>
    <ul class="footer__list">
      <h5 class="heading-5 heading-5--white">Learn</h5>
      <li class="footer__list-item">About Us</li>
      <li class="footer__list-item">Ingredient Glossary</li>
      <li class="footer__list-item">Sun Care 101</li>
      <li class="footer__list-item">Our Journey</li>
    </ul>
    <ul class="footer__list">
      <h5 class="heading-5 heading-5--white">Customer</h5>
      <li class="footer__list-item">Contact Us</li>
      <li class="footer__list-item">Help/FAQ</li>
      <li class="footer__list-item">My Account</li>
      <li class="footer__list-item">Shipping and Return</li>
    </ul>
    </div>
    <div class="footer__credentials">
      <p class="copyright dark__text">&copy; 2021 Cream Shop</p>
      <a href="#" class="terms dark__text">Terms and Conditions</a>
      <a href="#" class="policy dark__text">Policy</a>
    </div>
    
    <img
    src="assets/icons/chat-icon.svg"
    alt=""
    class="footer__icon-chat"
    />`;
  }
}
export default new FooterView();
