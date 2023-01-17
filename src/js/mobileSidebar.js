import throttle from "./throttle.js";

const scaleDetectionAndReaction = {
  menu: document.querySelector(".navbar__hoverLink"),
  button: document.querySelector("#hamburgerMenu"),
  mediaQueryMobile: null,

  checkQueries() {
    let { menu } = this;
    this.mediaQueryMobile = window.matchMedia(`(max-width: 426px)`).matches;
    menu.ariaHidden = "" + this.mediaQueryMobile;
    menu.ariaExpanded = this.mediaQueryMobile ? false : null;
  },

  openCloseSidebar() {
    const { menu } = this;
    menu.classList.toggle("is-active");
    menu.ariaHidden = menu.ariaHidden === "true" ? "false" : "true";
    menu.ariaExpanded = menu.ariaExpanded === "true" ? "false" : "true";
  },

  start() {
    // page loaded, first check even if resize is not necessary
    this.checkQueries();

    this.checkQueries = this.checkQueries.bind(this);

    window.addEventListener("resize", (e) => {
      throttle(this.checkQueries, 1000 / 60)();
    });

    this.button.addEventListener("click", (e) => {
      this.openCloseSidebar();
    });
  },
};

export default scaleDetectionAndReaction;
