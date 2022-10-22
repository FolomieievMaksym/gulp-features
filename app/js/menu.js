const body = document.querySelector("body");
const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
// ! Burger

body.addEventListener("click", burgerToggle);
function burgerToggle(e) {
   if (e.target.closest(".burger")) {
      if (burger.classList.contains("active")) {
         closeBurger();
      } else {
         openBurger();
      }
   } else if (!e.target.closest(".burger")) {
      closeBurger();
   }
}
function openBurger() {
   body.classList.add("lock");
   header.classList.add("active");
   burger.classList.add("active");
   window.addEventListener("scroll", closeBurger);
}
function closeBurger() {
   body.classList.remove("lock");
   header.classList.remove("active");
   burger.classList.remove("active");
   window.removeEventListener("scroll", closeBurger);
}
