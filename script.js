/* ==========================================
   BLISSBWOY OFFICIAL WEBSITE
   MAIN JAVASCRIPT
========================================== */


/* =============== MOBILE MENU =============== */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");


if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        navMenu.classList.toggle("active");

        menuToggle.innerHTML = 
        navMenu.classList.contains("active")
        ?
        '<i class="fas fa-times"></i>'
        :
        '<i class="fas fa-bars"></i>';

    });

}



/* Close menu after clicking a link */

const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

        if(menuToggle){

            menuToggle.innerHTML =
            '<i class="fas fa-bars"></i>';

        }

    });

});



/* =============== NAVBAR SCROLL EFFECT =============== */


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }


});



/* =============== LOADER =============== */


window.addEventListener("load",()=>{


    const loader = document.querySelector(".loader");


    if(loader){

        setTimeout(()=>{

            loader.style.display="none";

        },2000);

    }


});



/* =============== SCROLL REVEAL =============== */


const revealElements = document.querySelectorAll(
".song-card, .stat-box, .event, .about-image, .about-text"
);



function revealOnScroll(){


    revealElements.forEach(element=>{


        let position =
        element.getBoundingClientRect().top;


        let screenHeight =
        window.innerHeight;



        if(position < screenHeight - 100){

            element.classList.add("active");

        }


    });


}



window.addEventListener(
"scroll",
revealOnScroll
);



revealOnScroll();




/* =============== CURRENT YEAR FOOTER =============== */


const year = new Date().getFullYear();


const footerYear =
document.querySelector(".year");


if(footerYear){

    footerYear.textContent = year;

}