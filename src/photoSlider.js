import {
  sliderBox,
  photoBox,
  galleryImgs,
  circleNav,
  circleIcons,
  rightArrow,
  leftArrow,
} from "./querySelectors";

export function defaultGallerySetting() {
  let i = 0;
  let j = 0;
  galleryImgs[i].classList.add("picture--active");
  circleIcons[j].classList.add("circle-icon--active");
}

export function sliderAnimation() {
  console.log(galleryImgs);

  let i = 0;

  const advanceSlides = function () {
    if (i === 0) {
      galleryImgs[i].classList.add("picture--active");
    } else if (i === galleryImgs.length) {
      galleryImgs[i - 1].classList.remove("picture--active");
      galleryImgs[0].classList.add("picture--active");
      i = 0;
    } else {
      galleryImgs[i - 1].classList.remove("picture--active");
      galleryImgs[i].classList.add("picture--active");
    }

    i++;
  };

  setInterval(advanceSlides, 3000);
}

export function highlightCircles() {
  let i = 0;

  const selectCircleIcon = function () {
    if (i === 0) {
      circleIcons[i].classList.add("circle-icon--active");
    } else if (i === circleIcons.length) {
      circleIcons[i - 1].classList.remove("circle-icon--active");
      circleIcons[0].classList.add("circle-icon--active");
      i = 0;
    } else {
      circleIcons[i - 1].classList.remove("circle-icon--active");
      circleIcons[i].classList.add("circle-icon--active");
    }

    i++;
  };

  setInterval(selectCircleIcon, 3000);
}

export function clickCircles() {
  let currentSlide = photoBox.querySelector(".picture--active");
  let currentCircle = circleNav.querySelector(".circle-icon--active");

  circleNav.addEventListener("pointerdown", (e) => {
    const targetDot = e.target;
    // console.log(targetDot);
    const targetDotIndex = targetDot.dataset.circle;
    //console.log(targetDotIndex);
    const targetImg = galleryImgs[targetDotIndex];
    console.log(targetImg);

    currentSlide.classList.remove("picture--active");
    currentCircle.classList.remove("circle-icon--active");
    targetImg.classList.add("picture--active");
    targetDot.classList.add("circle-icon--active");

    currentSlide = targetImg;
    currentCircle = targetDot;
  });
}

export function arrowCtrl() {
  let currentSlide = photoBox.querySelector(".picture--active");
  let nextSlide = currentSlide.nextElementSibling;
  let prevSlide = currentSlide.previousElementSibling;

  let currentCircle = circleNav.querySelector(".circle-icon--active");
  let nextCircle = currentCircle.nextElementSibling;
  let prevCircle = currentCircle.previousElementSibling;

  sliderBox.addEventListener("pointerdown", (e) => {
    if (e.target === rightArrow) {
      if (nextSlide === null) {
        nextSlide = galleryImgs[0];
      }

      if (nextCircle === null) {
        nextCircle = circleIcons[0];
      }

      currentSlide.classList.remove("picture--active");
      nextSlide.classList.add("picture--active");
      currentCircle.classList.remove("circle-icon--active");
      nextCircle.classList.add("circle-icon--active");

      currentSlide = photoBox.querySelector(".picture--active");
      nextSlide = currentSlide.nextElementSibling;
      prevSlide = currentSlide.previousElementSibling;
      currentCircle = circleNav.querySelector(".circle-icon--active");
      nextCircle = currentCircle.nextElementSibling;
      prevCircle = currentCircle.previousElementSibling;
    }

    if (e.target === leftArrow) {
      if (currentSlide === galleryImgs[0] || prevSlide === null) {
        prevSlide = galleryImgs[galleryImgs.length - 1];
      }

      if (currentCircle === circleIcons[0] || prevCircle === null) {
        prevCircle = circleIcons[circleIcons.length - 1];
      }

      currentSlide.classList.remove("picture--active");
      prevSlide.classList.add("picture--active");
      currentCircle.classList.remove("circle-icon--active");
      prevCircle.classList.add("circle-icon--active");

      currentSlide = photoBox.querySelector(".picture--active");
      nextSlide = currentSlide.nextElementSibling;
      prevSlide = currentSlide.previousElementSibling;
      currentCircle = circleNav.querySelector(".circle-icon--active");
      nextCircle = currentCircle.nextElementSibling;
      prevCircle = currentCircle.previousElementSibling;
    }
  });
}
