const mq = window.matchMedia("(min-width: 1024px)");

const viewMoreBtnEl = document.getElementById("additional-btn");
let viewMore = false;

viewMoreBtnEl.addEventListener("click", function () {
  viewMore = !viewMore;
});

window.addEventListener("resize", function () {
  if (!viewMore && mq.matches) {
    console.log("yes");
  }
});

document.getElementsByClassName("additional-media");
