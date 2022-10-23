document.querySelectorAll("[data-video]").forEach((el) => {
   el.addEventListener("click", toggleVideo);
});
function toggleVideo(e) {
   if (e.target.closest("[data-video-play]")) {
      if (window.innerWidth < 769) {
         if (document.fullscreenEnabled) {
            e.target.closest("[data-video] iframe").requestFullscreen();
         }
      }
      e.target.closest("[data-video] [data-video-preview]").style.display = "none";
      let src = e.target.closest("[data-video] iframe").getAttribute("data-src-video");
      e.target.closest("[data-video] iframe").setAttribute("src", `${src}?rel=0&autoplay=1`);
   }
}
function pauseVideo(e) {
   let src = e.target.closest("[data-video] iframe").getAttribute("data-src-video");
   e.target.closest("[data-video] iframe").setAttribute("src", `${src}?rel=0&autoplay=0`);
}
