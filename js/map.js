var button = document.querySelector(".contacts-button-map");
var map = document.querySelector(".modal-map");
var close = document.querySelector(".modal-close");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
});
