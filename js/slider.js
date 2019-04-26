let theInterval;
const slides = $(".slide");
const slidesLiens = $(".en-savoir-plus");
let sIndex = 0;

function slideSuivant() {
  sIndex++;
  const taille = slides.length - 1;
  if (sIndex > taille) {
    sIndex = 0;
  }
  $(slides).css("display", "none");
  $(slides[sIndex]).css("display", "flex");
}

function slidePrecedent() {
  sIndex--;
  if (sIndex < 0) {
    sIndex = 3;
  }
  $(slides).css("display", "none");
  $(slides[sIndex]).css("display", "flex");
}

function play() {
  theInterval = setInterval(slideSuivant, 7000);
}

function pause() {
  clearInterval(theInterval);
}

play();
