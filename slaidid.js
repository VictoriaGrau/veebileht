
let slideIndex = 0; //Määrab milline slaid on nähtav.
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slaid"); //Html klassiga "slaid" elementide salvestamine massiivi slides.
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // Esialgu kõik pildid peidetakse, väärtuseks antakse neile "none".
  }
  slideIndex++;  //Suurendab slaidi indeksid 1 võrra.
  if (slideIndex > slides.length) {
    slideIndex = 1              //Kui on viimane slaid, siis minnakse peale seda uuesti esimese slaidi peale.
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000);  //Üks slaid on ees 4 sekundit.
  }

// Kood on pärit.
// W3Schools.(). How TO - Slideshow. W3Schools. Kasutatud 23.11.2024, https://www.w3schools.com/howto/howto_js_slideshow.asp