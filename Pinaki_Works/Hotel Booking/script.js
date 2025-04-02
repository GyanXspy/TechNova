// Sidebar Toggle Function
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
}

// Select form fields correctly
const Uname = document.getElementById("name");
const UAdhar = document.getElementById("adharid");
const UmobNo = document.getElementById("mobNo");
const Uemail = document.getElementById("emailId"); 
const UroomNo = document.getElementById("roomNo");
const UinDate = document.getElementById("indate");
const UoutDate = document.getElementById("outdate");
const UstayDays = document.getElementById("date");
const Ufine = document.getElementById("fine");

const submit = document.querySelector(".btn-submit");

// Load stored users from localStorage (if any)
let users = JSON.parse(localStorage.getItem("users")) || {};

// Function to calculate fine
function calculateFine() {
  const checkInDate = new Date(UinDate.value);
  const checkOutDate = new Date(UoutDate.value);
  const enteredDays = parseInt(UstayDays.value, 10);

  if (!UinDate.value || !UoutDate.value || isNaN(enteredDays)) {
      return; // If any required date is missing, don't calculate fine
  }

  const actualStay = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)); // Convert ms to days

  if (actualStay > enteredDays) {
      let extraDays = actualStay - enteredDays;
      Ufine.value = extraDays * 100; // ₹100 fine per extra day
  } else {
      Ufine.value = 0; // No fine if days match
  }
}

// Function to add user
function addUser(event) {
  event.preventDefault();

  const roomNo = UroomNo.value.trim();

  if (!Uname.value || !UAdhar.value || !UmobNo.value || !Uemail.value || !roomNo || !UinDate.value || !UoutDate.value || !UstayDays.value) {
      alert("⚠️ Please fill in all required fields.");
      return;
  }

  // Validate email format
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(Uemail.value)) {
      alert("⚠️ Please enter a valid email address.");
      return;
  }

  // Check if room is already booked
  if (users[roomNo]) {
      let existingUser = users[roomNo];
      alert(`❌ Room ${roomNo} is already booked by:
      Name: ${existingUser.name}
      Aadhar: ${existingUser.adhar}
      Mobile: ${existingUser.mobNo}
      Email: ${existingUser.email}
      Check-in Date: ${existingUser.inDate}
      Check-out Date: ${existingUser.outDate}`);
      return;
  }

  // Calculate fine before storing
  calculateFine();

  // Store user data
  let newUser = {
      name: Uname.value.trim(),
      adhar: UAdhar.value.trim(),
      mobNo: UmobNo.value.trim(),
      email: Uemail.value.trim(),
      roomNo: roomNo,
      inDate: UinDate.value,
      outDate: UoutDate.value,
      stayDays: UstayDays.value,
      fine: Ufine.value
  };

  users[roomNo] = newUser;
  localStorage.setItem("users", JSON.stringify(users));

  alert(`✅ Room ${roomNo} booked successfully!`);

  setTimeout(clearFields, 500);
}

// Function to clear input fields
function clearFields() {
  Uname.value = "";
  UAdhar.value = "";
  UmobNo.value = "";
  Uemail.value = "";
  UroomNo.value = "";
  UinDate.value = "";
  UoutDate.value = "";
  UstayDays.value = "";
  Ufine.value = "";
  Uname.focus();
}

// Event listeners
submit.addEventListener("click", addUser);
UoutDate.addEventListener("change", calculateFine);
UstayDays.addEventListener("input", calculateFine);


document.addEventListener("DOMContentLoaded", function () {
  const bookButton = document.querySelector(".btn-submit");
  const bookingForm = document.querySelector(".booking__form");

  if (window.innerWidth <= 768) {
      bookingForm.style.display = "none"; 
      bookButton.addEventListener("click", function () {
          bookingForm.style.display = "block"; 
      });
  }
});
