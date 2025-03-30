// Theme Toggle
const light = document.getElementById("light");
const dark = document.getElementById("dark");

light.addEventListener("click", () => {
  document.body.classList.remove("dark");
});

dark.addEventListener("click", () => {
  document.body.classList.add("dark");
});

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const middle = document.querySelector(".middle");

hamburger.addEventListener("click", () => {
  middle.classList.toggle("active");
});

// Cart Functionality
const addCartButtons = document.querySelectorAll(".add-cart");
const removeCartButtons = document.querySelectorAll(".remove-cart");
const cartShow = document.getElementById("cart_input");
let totalCartCount = 0;
let cartItems = {};

addCartButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    cartItems[index] = (cartItems[index] || 0) + 1;
    totalCartCount++;
    cartShow.textContent = totalCartCount;
  });
});

removeCartButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (cartItems[index] > 0) {
      cartItems[index]--;
      totalCartCount--;
      cartShow.textContent = totalCartCount;
    }
  });
});