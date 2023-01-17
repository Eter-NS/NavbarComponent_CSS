import "../css/style.scss";
import scaleDetectionAndReaction from "./mobileSidebar";
import siteMovement from "./hidingNavbarListeners";

document.addEventListener("DOMContentLoaded", (e) => {
  scaleDetectionAndReaction.start();
  siteMovement.start();
});
