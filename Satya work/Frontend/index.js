// Light mode toggle
const light = document.getElementById("light");
light.addEventListener('click', () => {
    document.body.style.backgroundColor = "white";
});
const dark = document.getElementById("dark");
dark.addEventListener('click', () => {
    document.body.style.backgroundColor = "black";
});

// Get all add and remove buttons
const addCartButtons = document.querySelectorAll(".add-cart");
const removeCartButtons = document.querySelectorAll(".remove-cart");
const cartshow = document.getElementById("cart_input"); 
let totalCartCount = 0; 
let cartItems = {}; 

// Add to Cart
addCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (!cartItems[index]) cartItems[index] = 0; 
        cartItems[index]++; 
        totalCartCount++; 
        cartshow.value = totalCartCount; 
    });
});

// Remove from Cart
removeCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (cartItems[index] > 0) { 
            cartItems[index]--;
            totalCartCount--; 
            cartshow.value = totalCartCount; 
        }
    });
});

const menu = document.querySelector(".menu-toggle");
const middle = document.querySelector(".middle");

if (window.innerWidth <= 768 ) {
    middle.style.display = "none"; 

    menu.addEventListener("click", () => {
        if (middle.style.display === "none") {
            middle.style.csstext=''
            middle.style.display = "block"; 
        } else {
            middle.style.display = "none"; 
        }
    });
}

const btn = document.getElementById("categoryBtn");
const foodList = document.getElementById("foodList");
foodList.style.display = "none";

btn.addEventListener("click", () => {
  foodList.style.display = (foodList.style.display === "flex") ? "none" : "flex";
});

// Optional: close dropdown if clicked outside
window.addEventListener("click", function (e) {
  if (!btn.contains(e.target) && !foodList.contains(e.target)) {
    foodList.style.display = "none";
  }
});

const mainBody=document.getElementById("main-body")
const breakfastBtn=document.getElementById("food-1");
const breakfastShow=document.getElementById("breakfast")
breakfastBtn.addEventListener("click",()=>{
    mainBody.style.display="none"
    breakfastShow.style.display = "flex";
    launchShow.style.display = "none";
    dinnerShow.style.display="none";
    snackShow.style.display="none";
})

const launchBtn=document.getElementById("food-2");
const launchShow=document.getElementById("launch")
launchBtn.addEventListener("click",()=>{
    mainBody.style.display="none"
    breakfastShow.style.display = "none";
    launchShow.style.display = "flex";
    dinnerShow.style.display="none";
    snackShow.style.display="none";
})

const dinnerBtn=document.getElementById("food-4");
const dinnerShow=document.getElementById("dinner")
dinnerBtn.addEventListener("click",()=>{
    mainBody.style.display="none"
    breakfastShow.style.display = "none";
    launchShow.style.display = "none";
    dinnerShow.style.display="flex";
    snackShow.style.display="none";
})

const snackBtn=document.getElementById("food-3");
const snackShow=document.getElementById("snack")
snackBtn.addEventListener("click",()=>{
    mainBody.style.display="none"
    breakfastShow.style.display = "none";
    launchShow.style.display = "none";
    dinnerShow.style.display="none";
    snackShow.style.display="flex";
})
