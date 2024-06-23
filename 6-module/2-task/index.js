import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  #product = {};
  #productId = '';

  constructor(product) {
    this.#product = product || this.#product;
    this.#productId = product.id || this.#productId;

    this.elem = this.#render();
  }

  #template() {
    const {name, price, image} = this.#product;
    const pathImage = `/assets/images/products/${image}`;

    return `
      <div class="card">
        <div class="card__top">
          <img alt="product" class="card__image" src=${pathImage}>
          <span class="card__price">€${price.toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${name}</div>
          <button class="card__button" type="button">
            <img alt="icon" src="/assets/images/icons/plus-icon.svg">
          </button>
        </div>
      </div>
    `;
  }

  #onCardButtonClick = () => {
    const productAddEvent =  new CustomEvent("product-add", {
      detail: this.#productId,
      bubbles: true
    });

    this.elem.dispatchEvent(productAddEvent);
  }

  #render() {
    this.elem = createElement(this.#template());

    this.elem.addEventListener('click', this.#onCardButtonClick);

    return this.elem;
  }
}
