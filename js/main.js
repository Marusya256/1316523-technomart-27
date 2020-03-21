var buy = document.querySelector(".buy");
var popup = document.querySelector(".modal-check");
var close = document.querySelector(".modal-close");

buy.addEventListener("click", function (evt) {
  evt.preventDefault();
   popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
