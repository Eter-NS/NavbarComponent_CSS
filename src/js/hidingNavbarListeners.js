import throttle from "./throttle.js";

const siteMovement = {
  navbar: document.querySelector(".navbar"),
  savedScrollPosition: 0,

  checkScrollYMovement() {
    console.log("first");
    if (window.scrollY > this.savedScrollPosition) {
      this.navbar.classList.add("movingDown");
    }
    if (window.scrollY < this.savedScrollPosition) {
      this.navbar.classList.remove("movingDown");
    }
    this.savedScrollPosition = window.scrollY;
  },

  start() {
    // desktop/laptop implementation
    this.checkScrollYMovement = this.checkScrollYMovement.bind(this);
    document.addEventListener("wheel", (e) => {
      throttle(this.checkScrollYMovement, 1000 / 30)();
    });

    // mobile implementation
    document.addEventListener("touchmove", (e) => {
      throttle(this.checkScrollYMovement, 1000 / 30)();
    });
  },
};

export default siteMovement;
