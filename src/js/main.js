import "../css/style.scss";

document.addEventListener("DOMContentLoaded", (e) => {
  function checkQueries() {
    mediaQueryMobile = window.matchMedia(`(max-width: 426px)`).matches;
    menu.ariaHidden = "" + mediaQueryMobile;
    menu.ariaExpanded = mediaQueryMobile ? false : null;
  }

  const menu = document.querySelector(".navbar__hoverLink");

  let mediaQueryMobile;
  checkQueries();

  window.addEventListener("resize", (e) => {
    checkQueries();
  });

  document.querySelector("#hamburgerMenu").addEventListener("click", (e) => {
    menu.classList.toggle("is-active");
    menu.ariaHidden = menu.ariaHidden === "true" ? "false" : "true";
    menu.ariaExpanded = menu.ariaExpanded === "true" ? "false" : "true";
  });
});
