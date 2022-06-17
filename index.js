const btn = document.getElementsByClassName("hamburger-btn")[0];
const menu = document.getElementsByClassName("hamburger-menu")[0];

console.log(menu);

btn.onclick = function (e) {
  console.log(btn);
  if (btn.getAttribute("aria-expanded") === "true") {
    console.log("expanded true");
    btn.setAttribute("aria-expanded", false);
    menu.classList.remove("show-menu");
  } else {
    console.log("expanded false");
    btn.setAttribute("aria-expanded", true);
    menu.classList.add("show-menu");
  }
};
