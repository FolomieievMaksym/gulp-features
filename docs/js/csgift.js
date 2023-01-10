const marquee = document.querySelector(".marquee__wrapper");
const marquees = document.querySelector(".marquee__wrapper").children;
const marqueeContainerWidth = marquee.scrollWidth / marquees.length;
const marqueeWidth = marqueeContainerWidth / marquees[0].children.length;
let itemToShow, itemToShowLeft, itemToShowWidth;
addMarquee();
function addMarquee() {
   if (window.innerWidth * 10 > marqueeContainerWidth * marquees.length) {
      let newMarquee = marquees[marquees.length - 1].cloneNode(true);
      marquees[marquees.length - 1].parentElement.append(newMarquee);
      // console.log("added new marquee");
      addMarquee();
   } else {
      const productsImage = document.querySelector(".marquee__wrapper").children;
      itemToShow = productsImage[productsImage.length - 3].children[0];
      itemToShowLeft = itemToShow.getBoundingClientRect().left;
      itemToShowWidth = itemToShow.getBoundingClientRect().width;
   }
}

let animationDuration = 5000;
marquee.style.transitionProperty = `left, transform`;
marquee.style.transitionTimingFunction = `ease, ease`;
marquee.style.transitionDuration = `${animationDuration}ms,  ${animationDuration / 3.5}ms`;
marquee.style.transitionDelay = `0s, 0s`;
// console.log(`Ширина враппера = ${marquee.scrollWidth}`);
// console.log(`Ширина контейнера картинок = ${marquee.scrollWidth / marquees.length}`);
// console.log(itemToShow);
// console.log(itemToShowWidth);
// console.log(`Left последнего = ${itemToShowLeft}`);
document.querySelector("[data-gift-start]").addEventListener("click", startGift, { once: true });
function startGift() {
   marquee.style.left = `-${itemToShowLeft - window.innerWidth / 2 + itemToShowWidth + 5}px`;
   setTimeout(() => {
      marquee.style.transform = `translateX(15px)`;
      setTimeout(() => {
         showFormNotifictaion();
      }, animationDuration / 3.5 + 500);
   }, animationDuration);
}
document.querySelector(".button-wrapper").style.height =
   document.querySelector(".button-wrapper button").scrollHeight + "px";
function showFormNotifictaion() {
   document.querySelector(".form-notification").classList.add("active");
   document.querySelector(".form-notification").addEventListener("click", showForm);
}
function showForm(e) {
   if (!e.target.closest(".form-notification__wrapper") || e.target.closest(".form-notification button")) {
      document.querySelector(".form-notification").classList.remove("active");
      console.log("Show Form");
      document.querySelector(".button-wrapper").style.height = "0px";
      document.querySelector(".form").style.height = document.querySelector(".form__wrapper").scrollHeight + "px";
      setTimeout(() => {
         document.querySelector(".form").style.height = "auto";
      }, 1000);
   }
}
