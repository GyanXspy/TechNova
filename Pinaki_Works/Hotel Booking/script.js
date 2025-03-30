function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
  }
  
  const form = document.getElementById('booking-form');
  const inputs = {
    name: document.getElementById('name'),
    mobNo: document.getElementById('mobNo'),
    indate: document.getElementById('indate'),
    outdate: document.getElementById('outdate')
  };
  
  let bookings = JSON.parse(localStorage.getItem('bookings')) || {};
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const today = new Date().toISOString().split('T')[0];
    if (inputs.indate.value < today) {
      alert('⚠️ Check-in date cannot be in the past.');
      return;
    }
    if (inputs.outdate.value <= inputs.indate.value) {
      alert('⚠️ Check-out date must be after check-in date.');
      return;
    }
  
    const booking = {
      name: inputs.name.value.trim(),
      mobNo: inputs.mobNo.value.trim(),
      inDate: inputs.indate.value,
      outDate: inputs.outdate.value
    };
  
    bookings[Date.now()] = booking;
    localStorage.setItem('bookings', JSON.stringify(bookings));
    alert('✅ Booking confirmed! We’ll contact you soon.');
    form.reset();
  });
  
  document.addEventListener('click', (e) => {
    const sidebar = document.querySelector('.sidebar');
    const toggle = document.querySelector('.menu-toggle');
    if (!sidebar.contains(e.target) && !toggle.contains(e.target) && sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
    }
  });