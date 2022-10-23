if (document.querySelector(".custom-swiper")) {
   const swiperTable = new Swiper(".custom-swiper", {
      speed: 500,
      initialSlide: 0,
      spaceBetween: 20,
      simulateTouch: true,
      autoHeight: false,
      grid: {
         rows: 3,
      },
      pagination: {
         el: ".custom-pagination",
         clickable: true,
      },
      navigation: {
         nextEl: ".custom-next",
         prevEl: ".custom-prev",
      },
      breakpoints: {
         744: {
            grid: {
               rows: 2,
            },
            slidesPerView: 2,
            slidesPerColumn: 2,
         },
      },
   });

   window.addEventListener("resize", changeSlideHeight);
   changeSlideHeight();
   function changeSlideHeight(e) {
      document.querySelectorAll(".custom-swiper .swiper-slide").forEach((el) => {
         el.style.height = document.querySelector(".custom-slide").scrollHeight + "px";
      });
      if (window.innerWidth < 743) {
         document.querySelector(".custom-swiper.swiper").style.height =
            document.querySelector(".custom-swiper .swiper-slide").scrollHeight * 3 + 40 + "px";
      } else if (window.innerWidth > 743) {
         document.querySelector(".custom-swiper.swiper").style.height =
            document.querySelector(".custom-swiper .swiper-slide").scrollHeight * 2 + 20 + "px";
      }
   }
}
