const btn = document.getElementsByClassName("hamburger-btn")[0];
const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
const container = document.getElementsByClassName("menu")[0];

console.log(container);

container.onclick = function (e) {
  e.stopPropagation();
  if (
    e.target.tagName === "BUTTON" &&
    btn.getAttribute("aria-expanded") === "true"
  ) {
    console.log("expanded true");
    btn.setAttribute("aria-expanded", false);
    hamburgerMenu.classList.remove("show-menu");
    return;
  }

  if (
    e.target.tagName === "BUTTON" &&
    btn.getAttribute("aria-expanded") === "false"
  ) {
    console.log("expanded false");
    btn.setAttribute("aria-expanded", true);
    hamburgerMenu.classList.add("show-menu");
    return;
  }
};

document.body.onclick = function (e) {
  if (btn.getAttribute("aria-expanded") === "true") {
    btn.setAttribute("aria-expanded", false);
    hamburgerMenu.classList.remove("show-menu");
  }
};
