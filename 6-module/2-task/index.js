import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this._card = this.cardTemplate();
  }

  get elem() {
    return this._card;
  }

  cardTemplate() {
    const card = createElement(
      `<div class="card">
        <div class="card__top">
          <img src="/assets/images/products/${
            this.product.image
          }" class="card__image" alt="product">
          <span class="card__price">€${this.product.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${this.product.name}</div>
          <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`
    );

    const addCartBtnElement = card.querySelector(`.card__button`);

    addCartBtnElement.addEventListener(`click`, () => {
      addCartBtnElement.dispatchEvent(
        new CustomEvent(`product-add`, {
          detail: this.product.id,
          bubbles: true,
        })
      );
    });

    return card;
  }
}
