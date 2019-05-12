let slideIndexAuto = 0;
showSlidesAutomatic();

function showSlidesAutomatic() {
  let slides = document.getElementsByClassName("mySlides");
  slides = [...slides];
  let dots = document.getElementsByClassName("dots__span");
  dots = [...dots];

  const hideSlide = slide => {
    slide.style.display = "none";
  };

  slides.forEach(hideSlide);

  slideIndexAuto++;

  if (slideIndexAuto > slides.length) {
    slideIndexAuto = 1;
  }

  disactivateDot = dot => {
    dot.className = dot.className.replace("active", "");
  };

  dots.forEach(disactivateDot);

  slides[slideIndexAuto - 1].style.display = "block";
  dots[slideIndexAuto - 1].classList.add("active");
  setTimeout(showSlidesAutomatic, 3000);
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function goToFirstSlide() {
  slideIndex = 1;
}

function goToLastSlide() {
  slideIndex = slides.length;
}

function showSlides(n) {
  const isLastSlide = n > slides.length;
  // getElementsByClassName returns NodeElements, need to convert in to array
  const slides = [...document.getElementsByClassName("mySlides")];
  const dots = [...document.getElementsByClassName("dots__span")];

  if (isLastSlide) {
    goToFirstSlide();
  } else if (n < 1) {
    goToLastSlide();
  }

  slides.forEach(hideSlide);

  dots.forEach(disactivateDot);

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}
