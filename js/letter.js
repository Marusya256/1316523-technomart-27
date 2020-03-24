var close = document.querySelector(".modal-close-letter");
var contact = document.querySelector(".button-two");
var letter = document.querySelector(".modal-letter");

contact.addEventListener("click", function (evt) {
  evt.preventDefault();
  letter.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  letter.classList.remove("modal-show");
});
