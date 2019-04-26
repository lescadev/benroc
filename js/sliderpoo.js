class Slide {
    constructor(sIndex, theInterval){
      this.theInterval = theInterval;
      this.slides = $(".slide");
      this.slidesLiens=$(".en-savoir-plus");
      this.sIndex = sIndex;
    }
      slideSuivant() {
        this.sIndex++;
      const taille = this.slides.length - 1;
      if (this.sIndex > taille) {
        this.sIndex = 0;
      }
      $(this.slides).css("display", "none");
      $(this.slides[this.sIndex]).css("display", "flex");
    }
    slidePrecedent() {
      this.sIndex--;
      if (this.sIndex < 0) {
        this.sIndex = 3;
      }
      $(this.slides).css("display", "none");
      $(this.slides[this.sIndex]).css("display", "flex");
    }
    launchInterval() {
      this.theInterval = setInterval(() =>{
        this.slideSuivant()
      } ,7000);
      console.log(this.theInterval);
      return this.theInterval;
    }
    pause() {
      clearInterval(this.theInterval);
    }
  }
  
  const slider = new Slide (0, undefined);
  window.addEventListener("load", e => {
    if(e.isTrusted){
      slider.launchInterval();  
    }
  })