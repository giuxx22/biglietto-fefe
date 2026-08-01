// ORARIO APERTURA (prova: 10 secondi)
let apertura = new Date();

apertura.setSeconds(apertura.getSeconds() + 10);


let timer = document.getElementById("timer");
let countdown = document.getElementById("countdown");
let envelope = document.getElementById("envelope");


// CONTROLLO TIMER

let controllo = setInterval(() => {

    let adesso = new Date();

    let tempo = apertura - adesso;


    if (tempo <= 0) {

        clearInterval(controllo);

        countdown.style.display = "none";
        envelope.classList.remove("hidden");

    } else {

        let secondi = Math.floor(tempo / 1000);

        timer.innerHTML = "00 : 00 : " + secondi;

    }


}, 1000);



// APERTURA BUSTA

envelope.addEventListener("click", () => {

    envelope.classList.add("open");


    // CUORI

    setInterval(() => {

        let cuore = document.createElement("div");

        cuore.className = "heart";
        cuore.innerHTML = "❤️";

        cuore.style.left = Math.random() * 100 + "vw";

        cuore.style.animationDuration =
        (3 + Math.random() * 3) + "s";


        document.body.appendChild(cuore);


        setTimeout(() => {

            cuore.remove();

        }, 6000);


    }, 300);


});
