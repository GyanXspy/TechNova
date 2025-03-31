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
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let location = document.getElementById("location").value.trim();

    if (name === "" || email === "" || location === "") {
        alert("Please fill in all required fields.");
        return;
    }

    alert(`Searching for:\nName: ${name}\nEmail: ${email}\nLocation: ${location || "Not provided"}`);
});
