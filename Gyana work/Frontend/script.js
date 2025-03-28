let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > lastScrollY) {
        // Scrolling down, hide navbar
        navbar.classList.add("hidden");
    } else {
        // Scrolling up, show navbar
        navbar.classList.remove("hidden");
    }
    lastScrollY = window.scrollY;
});

document.getElementById('signupB').addEventListener('click', ()=>{
    window.location.href = '/Frontend/LoginSignup/index.html';
});