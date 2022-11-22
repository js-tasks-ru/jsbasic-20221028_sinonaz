function initCarousel() {
  // ваш код...
  const carousel = document.querySelector(`.container`);
  const slider = carousel.querySelector(`.carousel__inner`);
  const nextButton = carousel.querySelector(`.carousel__arrow_right`);
  const prevButton = carousel.querySelector(`.carousel__arrow_left`);

  let translateProp = 0;
  let sliderCount = 1;
  prevButton.style.display = `none`;

  function slideHandler(event) {
    const slideWidth = slider.offsetWidth;

    if (event.target.closest(`.carousel__arrow_right`)) {
      slider.style.transform = `translateX(-${slideWidth + translateProp}px)`;
      translateProp += slideWidth;
      sliderCount++;
    } else if (event.target.closest(`.carousel__arrow_left`)) {
      slider.style.transform = `translateX(-${translateProp - slideWidth}px)`;
      translateProp -= slideWidth;
      sliderCount--;
    }

    switch (sliderCount) {
      case 1:
        prevButton.style.display = `none`;
        break;
      case 4:
        nextButton.style.display = `none`;
        break;
      default:
        nextButton.style.display = ``;
        prevButton.style.display = ``;
        break;
    }
  }

  carousel.addEventListener(`click`, slideHandler);
}
