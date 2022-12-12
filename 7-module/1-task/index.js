import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this._container = this.render();
  }

  get elem() {
    return this._container;
  }

  render() {
    const container = createElement(
      `<div class="ribbon">
          <button class="ribbon__arrow ribbon__arrow_left">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon">
          </button>

          <nav class="ribbon__inner"></nav>

          <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon">
          </button>
      </div>`
    );

    const ribbonInner = container.querySelector(`.ribbon__inner`);

    this.categories.map((category) => {
      ribbonInner.insertAdjacentHTML(
        `beforeend`,
        `<a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>`
      );
    });

    container.addEventListener(`click`, this.onClick);
    ribbonInner.addEventListener(`scroll`, this.onScroll);

    return container;
  }

  onClick(evt) {
    const ribbon = evt.currentTarget;
    const inner = ribbon.querySelector(`.ribbon__inner`);
    const items = ribbon.querySelectorAll(`.ribbon__item`);
    const rightBtn = evt.target.closest(`.ribbon__arrow_right`);
    const leftBtn = evt.target.closest(`.ribbon__arrow_left`);
    const item = evt.target.closest(`.ribbon__item`);

    if (item) {
      items.forEach((item) => {
        item.classList.remove(`ribbon__item_active`);
      });
      evt.preventDefault();
      item.classList.add(`ribbon__item_active`);
      item.dispatchEvent(
        new CustomEvent("ribbon-select", {
          detail: item.dataset.id,
          bubbles: true,
        })
      );
    }

    switch (true) {
    case Boolean(rightBtn):
      inner.scrollBy(350, 0);
      break;
    case Boolean(leftBtn):
      inner.scrollBy(-350, 0);
      break;
    default:
      break;
    }
  }

  onScroll(evt) {
    const target = evt.target;
    const ribbon = target.parentNode;
    const rightBtn = ribbon.querySelector(`.ribbon__arrow_right`);
    const leftBtn = ribbon.querySelector(`.ribbon__arrow_left`);
    let scrollLeft = target.scrollLeft;
    let clientWidth = target.clientWidth;
    let scrollWidth = target.scrollWidth;
    let scrollRight = scrollWidth - scrollLeft - clientWidth;
    if (scrollLeft === 0) {
      leftBtn.classList.remove(`ribbon__arrow_visible`);
    } else {
      leftBtn.classList.add(`ribbon__arrow_visible`);
    }
    if (scrollRight < 1) {
      rightBtn.classList.remove(`ribbon__arrow_visible`);
    } else {
      rightBtn.classList.add(`ribbon__arrow_visible`);
    }
  }
}
