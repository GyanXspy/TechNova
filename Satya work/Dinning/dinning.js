
const bookingButtons = document.getElementsByClassName("book");

for (let i = 0; i < bookingButtons.length; i++) {
  bookingButtons[i].addEventListener("click", function () {
    if (this.value === "Booking") {
      this.value = "Booked";
    } else {
      this.value = "Booking"; 
    }
  });
}




const locationBox = document.querySelector(".location");
const dropdown = document.querySelector(".dropdown-content");

// Toggle dropdown
locationBox.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

dropdown.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("click", () => {
  dropdown.style.display = "none";
});

