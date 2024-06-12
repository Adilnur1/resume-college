const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".navbar-item-menu");
const list = document.querySelector(".burgerr1");
const list2 = document.querySelector(".burgerr2");
const list3 = document.querySelector(".burgerr3");
burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
  list.classList.toggle("active");
  list2.classList.toggle("active");
  list3.classList.toggle("active");
});
