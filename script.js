"use strict";

// Overlay
const overlay = document.querySelector(".overlay");

// HTML
const htmlModal = document.querySelector(".html");
const btnOpenHTML = document.querySelector(".show-html");
btnOpenHTML.addEventListener("click", function () {
  htmlModal.classList.remove("hidden-html");
  overlay.classList.remove("hidden");
});
const btnCloseModalHTML = document.querySelector(".close-html");
const closeHTML = function () {
  htmlModal.classList.add("hidden-html");
  overlay.classList.add("hidden");
};
btnCloseModalHTML.addEventListener("click", closeHTML);
overlay.addEventListener("click", closeHTML);

// CSS
const cssModal = document.querySelector(".css");
const btnOpenCSS = document.querySelector(".show-css");
btnOpenCSS.addEventListener("click", function () {
  cssModal.classList.remove("hidden-css");
  overlay.classList.remove("hidden");
});
const btnCloseModalCSS = document.querySelector(".close-css");
const closeCSS = function () {
  cssModal.classList.add("hidden-css");
  overlay.classList.add("hidden");
};
btnCloseModalCSS.addEventListener("click", closeCSS);
overlay.addEventListener("click", closeCSS);

// JAVASCRIPT
const javascriptModal = document.querySelector(".javascript");
const btnOpenJavascript = document.querySelector(".show-js");
btnOpenJavascript.addEventListener("click", function () {
  javascriptModal.classList.remove("hidden-javascript");
  overlay.classList.remove("hidden");
});
const btnCloseModalJavascript = document.querySelector(".close-javascript");
const closeJavascript = function () {
  javascriptModal.classList.add("hidden-javascript");
  overlay.classList.add("hidden");
};
btnCloseModalJavascript.addEventListener("click", closeJavascript);
overlay.addEventListener("click", closeJavascript);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !htmlModal.classList.contains("hidden-html")) {
    closeHTML();
  } else if (e.key === "Escape" && !cssModal.classList.contains("hidden-css")) {
    closeCSS();
  } else if (
    e.key === "Escape" &&
    !javascriptModal.classList.contains("hidden-javascript")
  ) {
    closeJavascript();
  }
});

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden-HTML")) {
//     closeModal();
//   }
// });
