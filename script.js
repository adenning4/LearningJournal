const viewMoreBtnEl = document.getElementById("additional-btn");

const defaultAdditionalMediaEls = [
  ...document.getElementsByClassName("default-additional-media"),
];

const choiceAdditionalMediaEls = [
  ...document.getElementsByClassName("choice-additional-media"),
];

const screenWidth = {
  currentWidth: window.screen.width,
};

let viewMore = false;

//initial page load check
showDefaultAdditionalMediaOnScreenCheck();

viewMoreBtnEl.addEventListener("click", userSelectViewMore);

window.addEventListener("resize", defaultAdditionalMediaDisplayOnScreenChange);

function userSelectViewMore() {
  viewMore = !viewMore;
  if (viewMore) {
    showDefaultAdditionalMedia();
    showChoiceAdditionalMedia();
    viewMoreBtnEl.textContent = "View Less";
  } else {
    hideChoiceAdditionalMedia();
    showDefaultAdditionalMediaOnScreenCheck();
    viewMoreBtnEl.textContent = "View More";
  }
}

function defaultAdditionalMediaDisplayOnScreenChange() {
  //this function only acts when user has not selected to view more
  if (!viewMore) {
    // update last and current screen width
    screenWidth.lastWidth = screenWidth.currentWidth;
    screenWidth.currentWidth = window.screen.width;
    //simple function calls for readability
    if (isScreenBreakPointGrowing()) {
      showDefaultAdditionalMedia();
    } else if (isScreenBreakPointShrinking()) {
      hideDefaultAdditionalMedia();
    }
  }
}

function showDefaultAdditionalMedia() {
  defaultAdditionalMediaEls.forEach((item) => (item.style.display = "block"));
}

function hideDefaultAdditionalMedia() {
  defaultAdditionalMediaEls.forEach((item) => (item.style.display = "none"));
}

function showDefaultAdditionalMediaOnScreenCheck() {
  if (window.screen.width >= 1024) {
    showDefaultAdditionalMedia();
  } else {
    hideDefaultAdditionalMedia();
  }
}

function showChoiceAdditionalMedia() {
  choiceAdditionalMediaEls.forEach((item) => (item.style.display = "block"));
}

function hideChoiceAdditionalMedia() {
  choiceAdditionalMediaEls.forEach((item) => (item.style.display = "none"));
}

function isScreenBreakPointGrowing() {
  return screenWidth.currentWidth >= 1024 && screenWidth.lastWidth < 1024;
}

function isScreenBreakPointShrinking() {
  return screenWidth.currentWidth < 1024 && screenWidth.lastWidth >= 1024;
}
