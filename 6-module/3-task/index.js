import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  #slides = [];
  #translateX = 0;
  #countSlide = 0;
  #carouselArrowLeft = null;
  #carouselArrowRight = null;

  constructor(slides) {
    this.#slides = slides || this.#slides;

    this.elem = this.#render();
  }

  #showArrows(translateX, widthSlide) {
    if (translateX <= 0) {
      this.#carouselArrowLeft.style.display = 'none';
    } else {
      this.#carouselArrowLeft.style.display = 'flex';
    }

    if (translateX >= widthSlide * (this.#countSlide - 1)) {
      this.#carouselArrowRight.style.display = 'none';
    } else {
      this.#carouselArrowRight.style.display = 'flex';
    }
  }

  #template() {
    return `
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img alt="icon" src="/assets/images/icons/angle-icon.svg">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img alt="icon" src="/assets/images/icons/angle-left-icon.svg">
        </div>
        <div class="carousel__inner">
        ${this.#slides.map((item) => {
      const {name, price, image, id} = item;
      const pathImage = `/assets/images/carousel/${image}`;

      return `
            <div class="carousel__slide" data-id=${id}>
              <img alt="slide" class="carousel__img" src=${pathImage}>
              <div class="carousel__caption">
                <span class="carousel__price">€${price?.toFixed(2)}</span>
                <div class="carousel__title">${name}</div>
                <button class="carousel__button" type="button">
                  <img alt="icon" src="/assets/images/icons/plus-icon.svg" />
                </button>
              </div>
            </div>
          `;
    }).join('')}
      </div>
    `;
  }

  #carouselArrowRightButtonClick = () => {
    const carouselInner = this.elem.querySelector('.carousel__inner');
    let widthSlide = carouselInner.offsetWidth;
    this.#translateX += widthSlide;
    carouselInner.style.transform = `translateX(-${this.#translateX}px)`;
    this.#showArrows(this.#translateX, widthSlide);
  }

  #carouselArrowLeftButtonClick = () => {
    const carouselInner = this.elem.querySelector('.carousel__inner');
    let widthSlide = carouselInner.offsetWidth;
    this.#translateX += -widthSlide;
    carouselInner.style.transform = `translateX(-${this.#translateX}px)`;
    this.#showArrows(this.#translateX, widthSlide);
  }

  #onCardButtonClick = (event) => {
    const slideId = event.target.closest('.carousel__slide').getAttribute("data-id");
    const productAddEvent =  new CustomEvent("product-add", {
      detail: slideId,
      bubbles: true
    });

    this.elem.dispatchEvent(productAddEvent);
  };

  #render() {
    this.elem = createElement(this.#template());
    this.#countSlide = this.elem.querySelector('.carousel__inner').children.length;

    this.#carouselArrowRight = this.elem.querySelector('.carousel__arrow_right');
    this.#carouselArrowRight.addEventListener('click', this.#carouselArrowRightButtonClick);

    this.#carouselArrowLeft = this.elem.querySelector('.carousel__arrow_left');
    this.#carouselArrowLeft.addEventListener('click', this.#carouselArrowLeftButtonClick);
    this.#carouselArrowLeft.style.display = 'none';

    const carouselButtons = this.elem.querySelectorAll('.carousel__button');
    carouselButtons.forEach((item) => {
      item.addEventListener('click', this.#onCardButtonClick);
    });

    return this.elem;
  }
}
