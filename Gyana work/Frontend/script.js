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


// Hotel details 

// const hotelDetails = [
//     {
//         photo: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         name: "Hotel Paradise",
//         distance: "2 km",
//         ratings: "4.5",
//         more: "Hotel Paradise is known for its breathtaking ocean views and luxurious amenities."

//     },
//     {
//         photo: "https://plus.unsplash.com/premium_photo-1670984940113-f3aa1cd1309a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         name: "Seaside Inn",
//         distance: "5 km",
//         ratings: "4.0",
//         more: "Seaside Inn offers a relaxing beach experience with comfortable rooms and excellent dining options."
//     },
//     {
//         photo: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         name: "Hotel Chapan Bhog",
//         distance: "5km",
//         ratings: "5.0",
//         more: "Seaside Inn offers a relaxing beach experience with comfortable rooms and excellent dining options."
        
//     }

// ];
// function displayHotel() {
//     const container = document.getElementById('hotelContainer')
//     container.innerHTML = "";
//     hotelDetails.forEach((hotelDetails, index) =>{
//         const card = document.createElement("div");
//         card.className = "hotel-card";

//         const image = document.createElement("img");
//         image.src = hotelDetails.photo;
//         image.alt = hotelDetails.name;
//         image.className = "hotel-image";

//         const info = document.createElement("div");
//         info.className = "hotel-info";

//         const nameEle = document.createElement("h4");
//         nameEle.innerText = hotelDetails.name;
//         const dist = document.createElement("p");
//         dist.innerText = "Distance: "+hotelDetails.distance;
//         const ratings = document.createElement("p");
//         ratings.innerText = "Ratings: "+hotelDetails.ratings;
        
//         const detailButton = document.createElement("button");
//         detailButton.innerText = "More details";
//         detailButton.className = "btn";
//         detailButton.style.marginTop = "10px";

//         const moreInfo = document.createElement("div");
//         moreInfo.className = "more-details hidden";
//         moreInfo.innerText = hotelDetails.more;

//         detailButton.addEventListener("click", function(){
//             if(moreInfo.classList.contains("hidden")){
//                 moreInfo.classList.remove("hidden");
//                 detailButton.innerText = "Hide Details";

//             } else{
//                 moreInfo.classList.add("hidden");
//                 detailButton.innerText = "More Details";
//             }
//         });
//         info.appendChild(nameEle);
//         info.appendChild(dist);
//         info.appendChild(ratings);
//         info.appendChild(detailButton);
//         info.appendChild(moreInfo);

//         card.appendChild(image);
//         card.appendChild(info);

//         container.appendChild(card);

//     });
//     document.getElementById("displayBtn").addEventListener("click", displayHotel);
// }
