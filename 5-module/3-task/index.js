function showArrows(translateX, carouselArrowLeft, carouselArrowRight, widthSlide, COUNT_SLIDE) {
  if (translateX <= 0) {
    carouselArrowLeft.style.display = 'none';
  } else {
    carouselArrowLeft.style.display = 'block';
  }

  if (translateX >= widthSlide * (COUNT_SLIDE - 1)) {
    carouselArrowRight.style.display = 'none';
  }
}

function initCarousel() {
  const COUNT_SLIDE = 4;
  const carouselArrowRight = document.querySelector('.carousel__arrow_right');
  const carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  const carouselInner = document.querySelector('.carousel__inner');
  let widthSlide = carouselInner.offsetWidth;
  let translateX = 0;
  carouselArrowLeft.style.display = 'none';

  carouselArrowRight.addEventListener('click', () => {
    translateX = translateX + widthSlide;
    carouselInner.style.transform = `translateX(-${translateX}px)`;

    showArrows(translateX, carouselArrowLeft, carouselArrowRight, widthSlide, COUNT_SLIDE);
  });

  carouselArrowLeft.addEventListener('click', () => {
    translateX = translateX - widthSlide;
    carouselInner.style.transform = `translateX(-${translateX}px)`;

    showArrows(translateX, carouselArrowLeft, carouselArrowRight, widthSlide, COUNT_SLIDE);
  });
}
