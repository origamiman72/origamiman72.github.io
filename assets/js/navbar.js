const menuButton = document.querySelector("a#menu-icon");
const navbar = document.querySelector("nav");

menuButton.addEventListener("click", function (e) {
 e.preventDefault();
 menuButton.classList.toggle("close");
 navbar.classList.toggle("close");
});