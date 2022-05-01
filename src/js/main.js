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

function resetActive() {
  var routes = document.getElementsByClassName("navbar--links--link");
  for (let route of routes) {
    route.classList.remove("active");
  }
}

function routeTo(obj) {
  resetActive();
  obj.classList.add("active");
}

ScrollReveal().reveal(".cover", { delay: 250, duration: 200 });
ScrollReveal().reveal(".cover--big", { delay: 250, duration: 1000 });
ScrollReveal().reveal(".cover--sm", { delay: 500, duration: 1000 });

ScrollReveal().reveal(".company--title", { delay: 250, duration: 1000 });
ScrollReveal().reveal(".company--img", { delay: 500, duration: 1000 });
ScrollReveal().reveal(".company--content--inner", {
  delay: 2300,
  duration: 1000,
});

ScrollReveal().reveal(".services--title", { delay: 250, duration: 1000 });
ScrollReveal().reveal(".services--item", { delay: 500, duration: 1000 });
ScrollReveal().reveal(".services--title", { delay: 250, duration: 1000 });
ScrollReveal().reveal(".services--item", { delay: 500, duration: 1000 });

ScrollReveal().reveal(".clients--title", { delay: 250, duration: 1000 });
ScrollReveal().reveal(".clients--desc", { delay: 500, duration: 1000 });
ScrollReveal().reveal(".clients--item", { delay: 1200, duration: 1000 });

ScrollReveal().reveal(".contact--title", { delay: 250, duration: 1000 });
ScrollReveal().reveal(".contact--img ", { delay: 500, duration: 1000 });
ScrollReveal().reveal(".contact--items--inner", {
  delay: 1200,
  duration: 1000,
});
