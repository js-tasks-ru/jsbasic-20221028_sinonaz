import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.modal = createElement(
      `<div class="modal">
    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title">
          Вот сюда нужно добавлять заголовок
        </h3>
      </div>

      <div class="modal__body">
        A сюда нужно добавлять содержимое тела модального окна
      </div>
    </div>

  </div>`
    );
    this.modalTitle = this.modal.querySelector(`.modal__title`);
    this.modalBody = this.modal.querySelector(`.modal__body`);
  }

  open() {
    document.body.classList.add(`is-modal-open`);
    document.body.append(this.modal);
    const closeBtn = this.modal.querySelector(`.modal__close`);

    closeBtn.addEventListener(`click`, this.closeModal);
    document.addEventListener(`keydown`, this.keydownHandler);
  }

  setTitle(title) {
    this.modalTitle.textContent = title;
  }

  setBody(modalBody) {
    this.modalBody.innerHTML = ` `;
    this.modalBody.append(modalBody);
  }

  close() {
    document.body.classList.remove(`is-modal-open`);
    document.removeEventListener(`keydown`, this.keydownHandler);
    this.modal.remove();
  }

  closeModal() {
    const modal = document.querySelector(`.modal`);
    document.body.classList.remove(`is-modal-open`);
    document.removeEventListener(`keydown`, this.keydownHandler);
    modal.remove();
  }

  keydownHandler(event) {
    const modal = document.querySelector(`.modal`);
    if (event.code === `Escape`) {
      document.body.classList.remove(`is-modal-open`);
      document.removeEventListener(`keydown`, this.keydownHandler);
      modal.remove();
    }
  }
}
