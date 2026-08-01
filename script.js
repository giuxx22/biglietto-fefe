// ORARIO APERTURA (prova: 10 secondi)
let apertura = new Date();

apertura.setHours(22);
apertura.setMinutes(22);
apertura.setSeconds(0);


let timer = document.getElementById("timer");
let countdown = document.getElementById("countdown");
let envelope = document.getElementById("envelope");


let adesso = new Date();


// se l'orario è già passato apre subito
if (adesso >= apertura) {

    countdown.style.display = "none";
    envelope.classList.remove("hidden");
    envelope.classList.add("open");

} else {


let controllo = setInterval(() => {

    let adesso = new Date();

    let tempo = apertura - adesso;


    if (tempo <= 0) {

        clearInterval(controllo);

        countdown.style.display = "none";

        envelope.classList.remove("hidden");

        // apre automaticamente
        envelope.classList.add("open");


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

    // FUOCHI D'ARTIFICIO 🎆

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
