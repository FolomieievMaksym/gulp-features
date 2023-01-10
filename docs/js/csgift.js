const marquee = document.querySelector(".marquee__wrapper");
const marquees = document.querySelector(".marquee__wrapper").children;
const marqueeContainerWidth = marquee.scrollWidth / marquees.length;
const marqueeWidth = marqueeContainerWidth / marquees[0].children.length;
console.log(marqueeWidth);

let positionToShow, itemToShow;
addMarquee();
function addMarquee() {
   if (window.innerWidth * 10 > marqueeContainerWidth * marquees.length) {
      let newMarquee = marquees[marquees.length - 1].cloneNode(true);
      marquees[marquees.length - 1].parentElement.append(newMarquee);
      console.log("added new marquee");
      addMarquee();
   } else {
      const productsImage = document.querySelector(".marquee__wrapper").children;
      itemToShow = productsImage[productsImage.length - 3].children[0];
      positionToShow = itemToShow.getBoundingClientRect().left;
   }
}

let animationDuration = 10000;
marquee.style.transitionProperty = `left, transform`;
marquee.style.transitionTimingFunction = `ease, ease`;
marquee.style.transitionDuration = `${animationDuration}ms,  1500ms`;
marquee.style.transitionDelay = `0s, 0s`;
console.log(`Ширина враппера = ${marquee.scrollWidth}`);
console.log(`Ширина контейнера картинок = ${marquee.scrollWidth / marquees.length}`);
console.log(itemToShow);
console.log(`Left последнего = ${positionToShow}`);
document.querySelector("[data-gift-start]").addEventListener("click", startGift, { once: true });
function startGift() {
   // marquee.style.left = `-${positionToShow - window.innerWidth / 2 + marqueeWidth}px`;
   marquee.style.left = `-${positionToShow - window.innerWidth / 2}px`;
   // setTimeout(() => {
   // marquee.style.transform = `translateX(${marqueeWidth / 3}px)`;
   // marquee.style.left = `-${positionToShow - window.innerWidth / 2 + marqueeWidth - 50}px`;
   // setTimeout(() => {
   //    showFormNotifictaion();
   // }, animationDuration / 10);
   // }, animationDuration - animationDuration / 10);
}
function showFormNotifictaion() {
   document.querySelector(".form-notification").classList.add("active");
   document.querySelector(".form-notification").addEventListener("click", showForm);
}
function showForm(e) {
   if (!e.target.closest(".form-notification__wrapper") || e.target.closest(".form-notification button")) {
      document.querySelector(".form-notification").classList.remove("active");
      console.log("Show Form");
   }
}
