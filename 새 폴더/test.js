// 강사수정 $ham 아니라 .ham 이겠지요?
// const $ham = document.querySelector("$ham");

// 아래 부분은 mediaquery가 적용된 상태에서
// 작동시겼야 겠죠?
const $ham = document.querySelector(".ham");
const $menu = document.querySelector(".menu");
$ham.addEventListener("click", function () {
  $menu.classList.toggle("on");
});
