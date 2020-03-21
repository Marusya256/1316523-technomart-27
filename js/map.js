var close = document.querySelector(".modal-close");
var button = document.querySelector(".contacts-button-map");
var map = document.querySelector(".modal-map");

contacts-button-map.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
});

console.log("hello")
