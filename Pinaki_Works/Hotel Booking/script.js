 function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';

}
function closeSidebar(){
    const close = document.querySelector('.sidebar')
    close.style.display = 'none';
}
const Uname = document.getElementById("name");
const UAdhar = document.getElementById("adhar");
const UmobNo = document.getElementById("mobNo");
const UAddress = document.getElementById("address");
const UroomNo = document.getElementById("roomno");
const UinDate = document.getElementById("indate");
const UoutDate = document.getElementById("outdate");
const Ufine = document.getElementById("fine");
const UGuests = document.getElementById("guests");
const submit = document.getElementById("btn");

// Load stored users from localStorage (if any)
let users = JSON.parse(localStorage.getItem("users")) || {};

function addUser(event) {
    event.preventDefault(); 

    const roomNo = UroomNo.value.trim();

    if (!Uname.value || !UAdhar.value || !UmobNo.value || !UroomNo.value) {
        alert("⚠️ Please fill in all required fields: Name, Aadhar, Mobile Number, and Room Number.");
        return;
    }

    // Check if the room is already booked
    if (users[roomNo]) {
        let existingUser = users[roomNo];

        alert(`❌ Room ${roomNo} is already booked by:
        Name: ${existingUser.name}
        Aadhar: ${existingUser.adhar}
        Mobile: ${existingUser.mobNo}
        Address: ${existingUser.address}
        Check-in Date: ${existingUser.inDate}
        Check-out Date: ${existingUser.outDate}`);

        return; 
    }

    // If the room is available, add the new user
    let newUser = {
        name: Uname.value.trim(),
        adhar: UAdhar.value.trim(),
        mobNo: UmobNo.value.trim(),
        address: UAddress.value.trim(),
        roomNo: roomNo,
        inDate: UinDate.value,
        outDate: UoutDate.value,
        fine: Ufine.value || "0", 
        guests: UGuests.value || "0" 
    };

    users[roomNo] = newUser; 
    localStorage.setItem("users", JSON.stringify(users)); 

    alert(`✅ Room ${roomNo} booked successfully!`);

    setTimeout(clearFields, 500);
}

// Function to clear input fields after adding a user
function clearFields() {
    Uname.value = "";
    UAdhar.value = "";
    UmobNo.value = "";
    UAddress.value = "";
    UroomNo.value = "";
    UinDate.value = "";
    UoutDate.value = "";
    Ufine.value = "";
    UGuests.value = "";
    Uname.focus(); // Automatically focus on the first field for the next entry
}

// Event listener for the "Submit" button
submit.addEventListener("click", addUser);
