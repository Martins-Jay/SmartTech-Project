// TOGGLE NAVIGATION CONTROL
let open_menu = document.getElementById("open_menu"),
  nav_menu = document.getElementById("nav_menu"),
  close_menu = document.getElementById("close_menu");

open_menu?.addEventListener("click", () => {
  nav_menu?.classList.add("show_menu");
});

close_menu?.addEventListener("click", () => {
  nav_menu?.classList.remove("show_menu");
});

// REMOVE MENU AFTER SELECTING ANY NAV LINK
const navLink = document.querySelectorAll(".nav_link");

navLink.forEach((value) => {
  value.addEventListener("click", linkAction);
});

function linkAction() {
  const nav_menu = document.getElementById("nav_menu");

  nav_menu?.classList.remove("show_menu");
}

// REMOVE MENU WHEN USER CLICKS OUTSIDE THE NAV
const main_section = document.querySelector(".main_section");

main_section?.addEventListener("click", () => {
  nav_menu?.classList.remove("show_menu");
});