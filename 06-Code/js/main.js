var navLinks = document.getElementsByClassName("navbar--links")[0];
var navButton = document.getElementsByClassName("navbar--btn")[0];
var navBars = document.getElementsByClassName("navbar--btn--bar");

navButton.addEventListener("click", toggleNav);

function toggleNav() {
  navLinks.classList.toggle("visible");

  for (let bar of navBars) {
    bar.classList.toggle("close");
  }
}
