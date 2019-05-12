const slides = [...document.getElementsByClassName("mySlides")];
const dots = [...document.getElementsByClassName("dots__span")];
let slideIndexAuto = 0;
let slideIndex = 1;

const hideSlide = slide => {
  slide.style.display = "none";
};

const disactivateDot = dot => {
  dot.className = dot.className.replace("active", "");
};

function showSlidesAutomatic() {
  slides.forEach(hideSlide);
  slideIndexAuto++;

  if (slideIndexAuto > slides.length) {
    slideIndexAuto = 1;
  }

  dots.forEach(disactivateDot);

  slides[slideIndexAuto - 1].style.display = "block";
  dots[slideIndexAuto - 1].classList.add("active");
  setTimeout(showSlidesAutomatic, 3000);
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach(hideSlide);
  dots.forEach(disactivateDot);

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

showSlidesAutomatic();
