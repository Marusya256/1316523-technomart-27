var buy = document.querySelectorAll(".buy");
var check = document.querySelector(".modal-check");
var close = document.querySelector(".modal-close");


buy.forEach(function(element) {
  element.addEventListener("click", function (event) {
    event.preventDefault()
    check.classList.add("modal-show");
  })
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  check.classList.remove("modal-show");
});
