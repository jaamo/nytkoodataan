document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".js-readmore").addEventListener("click", () => {
    document.querySelector(".readmore-content").style.display = "block";
    document.querySelector(".js-readmore").style.display = "none";
  });
});
