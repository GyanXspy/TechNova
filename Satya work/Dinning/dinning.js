
const bookingButtons = document.getElementsByClassName("book");

for (let i = 0; i < bookingButtons.length; i++) {
  bookingButtons[i].addEventListener("click", function () {
    if (this.value === "Booking") {
      this.value = "Booked";
    } else {
      this.value = "Booking"; // optional toggle
    }
  });
}
