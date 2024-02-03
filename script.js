const arrow = document.querySelector(".arrow");
const list = document.querySelector(".drop-down");
//Show the list on btn click
arrow.addEventListener("click", () => {
  list.classList.toggle("show");
  arrow.classList.toggle("up");
})