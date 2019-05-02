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
        this.sIndex = 7;
      }
      $(this.slides).css("display", "none");
      $(this.slides[this.sIndex]).css("display", "flex");
    }
    pause() {
      clearInterval(this.theInterval);
    }
    launchInterval() {
      this.theInterval = setInterval(() =>{
        this.slideSuivant()
      } ,4000);
      console.log(this.theInterval);
      return this.theInterval;
    }
  }
  
  const slider = new Slide (0, undefined);
  window.addEventListener("load", e => {
    if(e.isTrusted){
      slider.launchInterval();  
    }
  })