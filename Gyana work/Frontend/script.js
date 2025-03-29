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