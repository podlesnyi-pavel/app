'use strict';
const slides = document.querySelectorAll('.slider__item');
const dots = document.querySelector('.slider__dots');

function createDots() {
  slides.forEach((item, index) => {
    if (index === 0) {
      dots.innerHTML += `
        <button class="slider__dot slider__dot--active" data-count="${index}"></button>
      `;
    } else {
      dots.innerHTML +=
        `<button class="slider__dot"  data-count="${index}"></button>
      `;
    }
  });
}

createDots();

function removeActiveClass(dot) {
  dot.forEach(i => {
    i.classList.remove('slider__dot--active');
  })
}

function tranlateSlide() {
  visibleSlide.style.transform = `translateX(-${width * currentSlider}px)`;
}

const dot = document.querySelectorAll('.slider__dot');
const visibleSlide = document.querySelector('.slider__items');
let currentSlider = 0;
const width = visibleSlide.offsetWidth;

function pickSlide() {
  dot.forEach(item => {
    item.addEventListener('click', (e) => {
      removeActiveClass(dot);
      
      e.target.classList.add('slider__dot--active');
      currentSlider = e.target.getAttribute('data-count');
      tranlateSlide();
    });
  })
}

pickSlide();

function autoNextSlide() {
  setInterval(() => {
    if (currentSlider >= slides.length - 1) {
      currentSlider = 0;
      tranlateSlide();
    } else {
      currentSlider++;
      tranlateSlide();
    }

    const currentDot = document
      .querySelector(`[data-count='${currentSlider}']`);

    removeActiveClass(dot);
    currentDot.classList.add('slider__dot--active');
  }, 3000);
}

autoNextSlide();
