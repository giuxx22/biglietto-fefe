let apertura = new Date();

apertura.setHours(22);
apertura.setMinutes(22);
apertura.setSeconds(0);


let timer = document.getElementById("timer");
let countdown = document.getElementById("countdown");
let envelope = document.getElementById("envelope");


// FUNZIONE FUOCHI

function fuochi() {

    for (let i = 0; i < 30; i++) {

        let fuoco = document.createElement("div");

        fuoco.className = "firework";
        fuoco.innerHTML = "✨";

        fuoco.style.left = Math.random() * 100 + "vw";
        fuoco.style.top = Math.random() * 70 + "vh";

        fuoco.style.animationDuration =
        (1 + Math.random() * 2) + "s";

        document.body.appendChild(fuoco);


        setTimeout(() => {

            fuoco.remove();

        }, 3000);

    }

}


// APERTURA AUTOMATICA

function apriSorpresa() {

    countdown.style.display = "none";

    envelope.classList.remove("hidden");

    envelope.classList.add("open");

    fuochi();

}



// CONTROLLO ORARIO

let adesso = new Date();


if (adesso >= apertura) {

    apriSorpresa();


} else {


    let controllo = setInterval(() => {


        let adesso = new Date();

        let tempo = apertura - adesso;


        if (tempo <= 0) {

            clearInterval(controllo);

            apriSorpresa();


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

}



// APERTURA CON CLICK + CUORI

envelope.addEventListener("click", () => {

    envelope.classList.add("open");


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

        },6000);


    },300);


});
