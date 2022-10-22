let viewportTop = document.documentElement.clientHeight;
window.addEventListener("scroll", showPictures);
showPictures();
function showPictures(e) {
   document.querySelectorAll("[data-src-webp]").forEach((el) => {
      if (el.getBoundingClientRect().top <= viewportTop / 1) {
         el.setAttribute("srcset", el.getAttribute("data-src-webp"));
      }
   });
   document.querySelectorAll("[data-src-img]").forEach((el) => {
      if (el.getBoundingClientRect().top <= viewportTop / 1) {
         el.setAttribute("src", el.getAttribute("data-src-img"));
         // el.removeAttribute("style"); // ? А нужны ли вообще стили..?
      }
   });
}
