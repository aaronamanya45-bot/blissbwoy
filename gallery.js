/* ==========================================
   BLISSBWOY WEBSITE
   GALLERY JAVASCRIPT
========================================== */


/* =============== GALLERY LIGHTBOX =============== */


const galleryImages =
document.querySelectorAll(".gallery-img");


const lightbox =
document.querySelector(".lightbox");


const lightboxImage =
document.querySelector(".lightbox img");



galleryImages.forEach(image=>{


    image.addEventListener("click",()=>{


        if(lightbox){


            lightbox.classList.add("active");


            lightboxImage.src =
            image.src;


        }


    });



});





/* =============== CLOSE LIGHTBOX =============== */


const closeLightbox =
document.querySelector(".close-lightbox");



if(closeLightbox){


closeLightbox.addEventListener("click",()=>{


    lightbox.classList.remove("active");


});


}






/* Close when clicking outside image */


if(lightbox){


lightbox.addEventListener("click",(e)=>{


    if(e.target !== lightboxImage){


        lightbox.classList.remove("active");


    }


});


}






/* =============== GALLERY FILTER =============== */


const filterButtons =
document.querySelectorAll(".filter-btn");


const galleryItems =
document.querySelectorAll(".gallery-item");



filterButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        let category =
        button.getAttribute("data-filter");



        filterButtons.forEach(btn=>{

            btn.classList.remove("active");

        });



        button.classList.add("active");




        galleryItems.forEach(item=>{


            if(
                category === "all" ||
                item.classList.contains(category)
            ){

                item.style.display="block";


            }

            else{

                item.style.display="none";

            }


        });



    });



});