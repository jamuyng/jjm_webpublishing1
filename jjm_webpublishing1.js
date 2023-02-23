const $ham = document.querySelector(".ham");
const $menu = document.querySelector(".menu");
$ham.addEventListener("click", function () {
  $menu.classList.toggle("on");
});
