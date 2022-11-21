function toggleText() {
  // ваш код...

  const buttonElement = document.querySelector(`.toggle-text-button`);
  const textElement = document.querySelector(`#text`);

  buttonElement.addEventListener(`click`, () => {
    if (textElement.hidden) {
      textElement.hidden = false;
    } else {
      textElement.hidden = true;
    }
  });
}
