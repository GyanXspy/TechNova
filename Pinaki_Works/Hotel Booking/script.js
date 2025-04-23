// Sidebar Toggle Function
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
  }
  
  // Booking form toggle
  function toggleBookingForm() {
    const form = document.querySelector('.booking__form');
    if (form.style.display === 'none' || form.style.display === '') {
      form.style.display = 'block';
      window.scrollTo({ top: form.offsetTop, behavior: 'smooth' });
    } else {
      form.style.display = 'none';
    }
  }
  
  // Select form fields
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
  
  // Load stored users
  let users = JSON.parse(localStorage.getItem("users")) || {};
  
  // Check-in date validation
  UinDate.addEventListener("change", function () {
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    const inputDate = new Date(UinDate.value);
  
    if (inputDate < todayDate) {
      alert("❌ Please enter a valid check-in date (today or future).");
      UinDate.value = "";
      UinDate.focus();
    }
  });
  
  // Auto calculate check-out date
  UstayDays.addEventListener("input", function () {
    const checkInDate = new Date(UinDate.value);
    const stayDays = parseInt(UstayDays.value, 10);
  
    if (checkInDate && !isNaN(stayDays) && stayDays > 0) {
      checkInDate.setDate(checkInDate.getDate() + stayDays);
      UoutDate.value = checkInDate.toISOString().split("T")[0];
    }
  });
  
  // Calculate fine
  function calculateFine() {
    const checkInDate = new Date(UinDate.value);
    const checkOutDate = new Date(UoutDate.value);
    const enteredDays = parseInt(UstayDays.value, 10);
  
    if (!UinDate.value || !UoutDate.value || isNaN(enteredDays)) return;
  
    const actualStay = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    Ufine.value = actualStay > enteredDays ? (actualStay - enteredDays) * 100 : 0;
  }
  
  // Handle form submission
  function addUser(event) {
    event.preventDefault();
    const roomNo = UroomNo.value.trim();
  
    if (!Uname.value || !UAdhar.value || !UmobNo.value || !Uemail.value || !roomNo || !UinDate.value || !UoutDate.value || !UstayDays.value) {
      alert("⚠️ Please fill in all required fields.");
      return;
    }
  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(Uemail.value)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }
  
    if (users[roomNo]) {
      const existingUser = users[roomNo];
      alert(`❌ Room ${roomNo} is already booked by:
        Name: ${existingUser.name}
        Aadhar: ${existingUser.adhar}
        Mobile: ${existingUser.mobNo}
        Email: ${existingUser.email}
        Check-in: ${existingUser.inDate}
        Check-out: ${existingUser.outDate}`);
      return;
    }
  
    calculateFine();
  
    const newUser = {
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
  
    generateIDCard(newUser);
    document.getElementById("id-card-tab").style.display = "block";
    setTimeout(clearFields, 500);
  }
  
  // Display ID card + PDF download button
  function generateIDCard(user) {
    const idCardContainer = document.getElementById("id-card-container");
  
    const idCardHTML = `
      <div class="id-card">
        <h3>ID Card - Room ${user.roomNo}</h3>
        <p><span>Name:</span> ${user.name}</p>
        <p><span>Aadhar:</span> ${user.adhar}</p>
        <p><span>Mobile:</span> ${user.mobNo}</p>
        <p><span>Email:</span> ${user.email}</p>
        <p><span>Room No:</span> ${user.roomNo}</p>
        <p><span>Check-in Date:</span> ${user.inDate}</p>
        <p><span>Check-out Date:</span> ${user.outDate}</p>
        <p><span>Fine:</span> ₹${user.fine}</p>
      </div>
      <button id="download-link" class="download-btn">Download Room pass (PDF)</button>
    `;
  
    idCardContainer.innerHTML = idCardHTML;
  
    const downloadLink = document.getElementById("download-link");
    downloadLink.addEventListener("click", function () {
      const idCardElement = document.querySelector(".id-card");
  
      const opt = {
        margin:       0.5,
        filename:     `Room_${user.roomNo}_ID_Card.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
  
      html2pdf().set(opt).from(idCardElement).save();
    });
  }
  
  // Show/Hide ID Card Tab
  const showCardBtn = document.getElementById("show-id-card-btn");
  showCardBtn.addEventListener("click", function () {
    const card = document.getElementById("id-card-container");
    if (card.style.display === "none" || card.style.display === "") {
      card.style.display = "block";
      showCardBtn.textContent = "Hide Admit Card";
    } else {
      card.style.display = "none";
      showCardBtn.textContent = "Show Admit Card";
    }
  });
  
  // Clear form fields
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
  
  // Event Listeners
  submit.addEventListener("click", addUser);
  UoutDate.addEventListener("change", calculateFine);
  UstayDays.addEventListener("input", calculateFine);
  
  // Mobile behavior
  document.addEventListener("DOMContentLoaded", function () {
    const bookButton = document.querySelector(".btn-submit");
    const bookingForm = document.querySelector(".booking__form");
  
    if (window.innerWidth <= 768) {
      bookingForm.style.display = "none";
  
      bookButton.addEventListener("click", function (event) {
        if (bookingForm.style.display === "none") {
          event.preventDefault();
          bookingForm.style.display = "block";
        } else {
          addUser(event);
        }
      });
    } else {
      bookButton.addEventListener("click", addUser);
    }
  });

  function toggleRoomServices() {
    const services = document.getElementById("roomServices");
    services.style.display = services.style.display === "none" || services.style.display === ""
      ? "block"
      : "none";
  }
  
  const serviceItems = document.querySelectorAll(".service-for");
  const serviceForm = document.getElementsByClassName("services-form")[0]; // Get the first element
  
  serviceItems.forEach(item => {
    item.addEventListener("click", () => {
      serviceForm.style.display = serviceForm.style.display === "none" || serviceForm.style.display === ""
        ? "block"
        : "none";
    });
    serviceForm.style.display="none";
  });
  
 // Handle Service Form Submission
const serviceFormElement = document.getElementById("service-form");

serviceFormElement.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  const serviceRoomNo = document.getElementById("serviceRoom").value.trim();
  const bookedUsers = JSON.parse(localStorage.getItem("users")) || {};

  if (bookedUsers[serviceRoomNo]) {
    const guest = bookedUsers[serviceRoomNo];
    alert(`🛎️ Dear ${guest.name}, please wait a moment. Our staff will reach Room ${serviceRoomNo} shortly.`);
  } else {
    alert(`❌ Room ${serviceRoomNo} is not booked. Please enter a valid booked room number.`);
  }
});
