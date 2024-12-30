const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuItem = document.querySelector(".menu-items");

hamburgerIcon.addEventListener("click", () => {
  // document.querySelector(".menu-items").classList.toggle("menu-items show");
  menuItem.classList.toggle("show");
  console.log(menuItem.tagName);
  console.log("click");
});
