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



