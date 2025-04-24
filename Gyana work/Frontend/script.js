function showSidebar(){
  const sidebar = document.querySelector('.sideNav');
  sidebar.style.display = 'flex';

}
function closeSidebar(){
  const close = document.querySelector('.sideNav');
  close.style.display = 'none'
}
let index = 0;
function moveSlide(step) {
  const slides = document.querySelector('.carousel-images');
  const totalSlides = slides.children.length;
  index = (index + step + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
}
function autoSlide() {
  moveSlide(1);
}
setInterval(autoSlide, 3000);

document.getElementById("searchBtn").addEventListener("click", function () {
  let searchQuery = document.getElementById("kitchenSearch").value.trim();
  if (searchQuery === "") {
    alert("Please enter a location or kitchen name to search.");
    return;
  }


  alert(`Searching for cloud kitchens matching: "${searchQuery}"`);
  // Here you could add actual search functionality to query a database
  // or API for cloud kitchens in the specified location
});

function searchHotels() {
  const location = document.getElementById("locationInput").value;
  if (location.trim() !== "") {
    alert("Searching hotels in: " + location);
    // You can replace this alert with a redirect or dynamic content loader.
    // Example: window.location.href = `/hotels?location=${encodeURIComponent(location)}`;
  } else {
    alert("Please enter a location.");
  }
}

function toggleCategory() {
  const categoryList = document.getElementById('categoryList');
  if (categoryList.style.display === 'none' || categoryList.style.display === '') {
    categoryList.style.display = 'block';
  } else {
    categoryList.style.display = 'none';
  }
}

const cardSlider = document.getElementById('cardSlider');

function scrollCards(direction) {
  const cardWidth = cardSlider.querySelector('.card').offsetWidth + 16; // width + gap
  cardSlider.scrollLeft += direction * cardWidth;
}
function showKitchenDetails(button) {
  const modal = document.getElementById('kitchenModal');
  const modalImage = document.getElementById('modalImage');
  const modalName = document.getElementById('modalName');
  const modalType = document.getElementById('modalType');
  const modalPrice = document.getElementById('modalPrice');
  const modalDescription = document.getElementById('modalDescription');

  modalImage.src = button.dataset.image;
  modalName.textContent = button.dataset.name;
  modalType.textContent = `Type: ${button.dataset.type}`;
  modalPrice.textContent = `Price: ${button.dataset.price}`;
  modalDescription.textContent = button.dataset.description;

  modal.style.display = 'flex';
}

function closeKitchenDetails() {
  const modal = document.getElementById('kitchenModal');
  modal.style.display = 'none';
}