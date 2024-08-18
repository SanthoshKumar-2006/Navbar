let burger = document.querySelector(".burger");
let navLinks = document.querySelector(".nav-links");

burger.addEventListener('click', () => {
  navLinks.classList.toggle("nav-active");
});
