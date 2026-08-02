/* ==========================================
   BLISSBWOY WEBSITE
   MUSIC JAVASCRIPT
========================================== */


/* =============== AUDIO PLAYER SYSTEM =============== */


const playButtons = document.querySelectorAll(".play-btn");

const audioPlayer = document.getElementById("audio-player");


let currentButton = null;



playButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        let song =
        button.getAttribute("data-song");



        if(audioPlayer.src.includes(song)){


            if(audioPlayer.paused){

                audioPlayer.play();

                button.innerHTML =
                '<i class="fas fa-pause"></i>';

            }

            else{

                audioPlayer.pause();

                button.innerHTML =
                '<i class="fas fa-play"></i>';

            }


        }


        else{


            audioPlayer.src =
            "audio/" + song;


            audioPlayer.play();



            playButtons.forEach(btn=>{

                btn.innerHTML =
                '<i class="fas fa-play"></i>';

            });



            button.innerHTML =
            '<i class="fas fa-pause"></i>';

            currentButton = button;


        }



    });



});





/* =============== WHEN SONG ENDS =============== */


if(audioPlayer){


audioPlayer.addEventListener("ended",()=>{


    if(currentButton){


        currentButton.innerHTML =
        '<i class="fas fa-play"></i>';


    }


});


}






/* =============== MUSIC CARD HOVER =============== */


const musicCards =
document.querySelectorAll(".music-card");



musicCards.forEach(card=>{


    card.addEventListener("mouseenter",()=>{


        card.classList.add("playing");


    });



    card.addEventListener("mouseleave",()=>{


        card.classList.remove("playing");


    });



});