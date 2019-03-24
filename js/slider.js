let slideIndexAuto = 0;
showSlidesAutomatic();

function showSlidesAutomatic() {
  let slides = document.getElementsByClassName("mySlides");
  slides = [...slides];

  slides.forEach(e => {
    e.style.display = 'none'
  });

  slideIndexAuto++;

  if (slideIndexAuto > slides.length) {
    slideIndexAuto = 1
  };

  slides[slideIndexAuto - 1].style.display = "block";
  setTimeout(showSlidesAutomatic, 3000);
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  slides = [...slides];
  let dots = document.getElementsByClassName("dots__span");
  dots = [...dots];

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  };

  slides.forEach(e => {
    e.style.display = 'none'
  });

  dots.forEach(e => {
    e.className = e.className.replace('active', '');
  });

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

