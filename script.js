// ORARIO APERTURA
let apertura = new Date();

apertura.setSeconds(apertura.getSeconds()+5);


let timer = document.getElementById("timer");
let countdown = document.getElementById("countdown");
let envelope = document.getElementById("envelope");


// CONTROLLO ORA

let controllo = setInterval(() => {

    let adesso = new Date();

    let tempo = apertura - adesso;


    if (tempo <= 0) {

        clearInterval(controllo);

        countdown.style.display = "none";
        envelope.classList.remove("hidden");

    } else {


        let ore = Math.floor(tempo / 3600000);

        let minuti = Math.floor(
            (tempo % 3600000) / 60000
        );

        let secondi = Math.floor(
            (tempo % 60000) / 1000
        );


        timer.innerHTML =
        ore + " : " +
        minuti + " : " +
        secondi;

    }


},1000);



// APERTURA BUSTA

envelope.addEventListener("click",()=>{

    envelope.classList.add("open");


    // CUORI

    setInterval(()=>{

        let cuore=document.createElement("div");

        cuore.className="heart";
        cuore.innerHTML="❤️";

        cuore.style.left =
        Math.random()*100+"vw";


        cuore.style.animationDuration =
        (3+Math.random()*3)+"s";


        document.body.appendChild(cuore);


        setTimeout(()=>{

            cuore.remove();

        },6000);
/* PARTE SOPRA DELLA BUSTA */

.flap {

    position: absolute;

    width: 0;
    height: 0;

    border-left: 170px solid transparent;
    border-right: 170px solid transparent;

    border-top: 120px solid #c9a7ff;

    top: 0;

    z-index: 2;

    transition: 1s;
    transform-origin: top;

}
        /* LETTERA */

.letter {

    position: absolute;

    background: white;

    color: #6a0dad;

    width: 270px;

    min-height: 170px;

    left: 35px;

    top: 50px;

    border-radius: 12px;

    padding: 15px;

    opacity: 0;

    z-index: 1;

    transition: 2s;

    box-shadow:
    0 10px 30px #555;

}


/* APERTURA LETTERA */

.open .flap {

    transform: rotateX(180deg);

}


.open .letter {

    top: -180px;

    opacity: 1;

    z-index: 3;

}

    },300);


});
