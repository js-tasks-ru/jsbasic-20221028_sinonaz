import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this._container = this.render();
  }

  get elem() {
    return this._container;
  }

  render() {
    const container = createElement(
      `<div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left" style="display:none;">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner" data-slide-count="0" data-prop="0"></div>
      </div>`
    );

    const carouselInner = container.querySelector(`.carousel__inner`);

    this.slides.map((slide) => {
      carouselInner.insertAdjacentHTML(
        `beforeend`,
        `<div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${
            slide.image
          }" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>`
      );
    });

    container.addEventListener(`click`, this.onClick);

    return container;
  }

  onClick(evt) {
    const carousel = evt.currentTarget;
    const carouselInner = carousel.querySelector(`.carousel__inner`);
    const prevBtnClass = `.carousel__arrow_left`;
    const nextBtnClass = `.carousel__arrow_right`;
    const nextBtn = carousel.querySelector(nextBtnClass);
    const prevBtn = carousel.querySelector(prevBtnClass);
    const addBtnClass = `.carousel__button`;
    const currentSlide = evt.target.closest(`.carousel__slide`);
    const currentAddBtn = evt.target.closest(addBtnClass);
    const slideNode = carousel.querySelectorAll(`.carousel__slide`);
    const sliderWidth = carouselInner.offsetWidth;
    let prop = Number(carouselInner.dataset.prop);

    switch (true) {
      case Boolean(evt.target.closest(prevBtnClass)):
        carouselInner.dataset.slideCount--;
        carouselInner.dataset.prop = prop - sliderWidth;
        carouselInner.style.transform = `translateX(-${+carouselInner.dataset
          .prop}px)`;
        break;
      case Boolean(evt.target.closest(nextBtnClass)):
        prevBtn.style.display = ``;
        carouselInner.dataset.slideCount++;
        carouselInner.dataset.prop = prop + sliderWidth;
        carouselInner.style.transform = `translateX(-${+carouselInner.dataset
          .prop}px)`;
        break;
      case Boolean(currentAddBtn):
        currentAddBtn.dispatchEvent(
          new CustomEvent("product-add", {
            detail: currentSlide.dataset.id,
            bubbles: true,
          })
        );
        break;

      default:
        break;
    }

    switch (+carouselInner.dataset.slideCount) {
      case 0:
        prevBtn.style.display = `none`;
        break;
      case slideNode.length - 1:
        nextBtn.style.display = `none`;
        break;

      default:
        nextBtn.style.display = ``;
        break;
    }
  }
}
