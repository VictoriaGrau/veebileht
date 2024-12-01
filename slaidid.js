
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slaid");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); 
  }

// Kood on pärit.
// W3Schools.(). How TO - Slideshow. W3Schools. Kasutatud 23.11.2024, https://www.w3schools.com/howto/howto_js_slideshow.asp