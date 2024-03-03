var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
});

var search = document.querySelector(".search-box");
search.addEventListener('click',() => {
    search.style.boxShadow = "0 0 30px rgba(207, 207, 25, 0.7)"; 
})
search.addEventListener('mouseleave',() => {
    search.style.boxShadow = "none"; 
})


var alcho = document.querySelector("#alcho-btn");
alcho.addEventListener('mouseenter', () =>{
    alcho.style.boxShadow = "0 0 30px rgba(207, 207, 25, 0.7)";
})
alcho.addEventListener('mouseleave', () =>{
    alcho.style.boxShadow = "0 0 30px rgba(34, 25, 207, 0.7)";
})


var foodbox = document.querySelectorAll("#foodbox");
foodbox.forEach(box => {
    box.addEventListener('mouseenter', () =>{
        box.style.boxShadow = "0 0 30px rgba(34, 25, 207, 0.7)";
    })
    box.addEventListener('mouseleave', () =>{
        box.style.boxShadow = "none";
    })
})

// document.addEventListener("DOMContentLoaded", function() {
//     const image = document.querySelectorAll("#oo");
    
//     image.forEach(img =>{
//         img.addEventListener("click", () => {
//             const textNode = document.createTextNode(img.alt);
//             img.parentNode.replaceChild(textNode, img);
//         });
       
//     })
   
// });


// textNode.addEventListener("mouseleave", () => {
//     const newImage = document.createElement("imag");
//     newImage.src = image.src;
//     newImage.alt = image.alt;
//     textNode.parentNode.replaceChild(newImage, textNode);
// })
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("#oo");
    
    images.forEach(img => {
        img.addEventListener("click", () => {
            const textNode = document.createTextNode(img.alt);
            img.parentNode.replaceChild(textNode, img);
            
            textNode.parentNode.addEventListener("mouseleave", function() {
                const newImg = document.createElement("img");
                newImg.src = img.src;
                newImg.alt = img.alt;

                textNode.parentNode.replaceChild(newImg, textNode.parentNode.firstChild);
                
            });
        });
    });
});
