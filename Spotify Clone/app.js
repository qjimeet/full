const progress = document.querySelector(".progress");
const progress1 = document.querySelector(".progress1");

progress.addEventListener("input", function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #1db954 0%, #1db954 ${value}%, #fff ${value}%, white 100%)`;
});

progress1.addEventListener("input", function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #1db954 0%, #1db954 ${value}%, #fff ${value}%, white 100%)`;
});
