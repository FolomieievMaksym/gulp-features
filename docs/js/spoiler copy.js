// Базовые стили для спойлера
document.querySelectorAll("[data-spoiler]").forEach((el) => {
   el.children[0].style.cursor = "pointer";
   el.children[1].style.height = "0px";
   el.children[1].style.overflow = "hidden";
   el.children[1].style.transition = "height 0.5s ease";
});

// ? Если нужно открыть спойлер при загрузке страницы - нужно добавить класс 'opened' к элементу data-spoiler
if (document.querySelector("[data-spoiler].opened")) {
   document.querySelectorAll("[data-spoiler].opened").forEach((el) => {
      el.children[1].style.height = el.children[1].scrollHeight + "px";
   });
}
document.body.addEventListener("click", toggleSpoiler);

function toggleSpoiler(e) {
   if (e.target.closest("[data-spoiler]").children[0]) {
      e.target.closest("[data-spoiler]").classList.toggle("opened");
      let spoilerWrapper = e.target.closest("[data-spoiler]").children[1];
      if (!e.target.closest("[data-spoiler].opened")) {
         spoilerWrapper.style.height = "0px";
      } else {
         spoilerWrapper.style.height = spoilerWrapper.scrollHeight + "px";
      }
   }
}
