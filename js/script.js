/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

//DADI
const dice = [1,2,3,4,5,6];
const btnDice = document.getElementById("diceBtn");
btnDice.addEventListener("click", rollDice);

function rollDice (){
    const score = document.querySelector(".print-dice");
    if (score) score.remove();
    const playerScore = dice[Math.floor(Math.random() * dice.length)];
    const cpuScore = dice[Math.floor(Math.random() * dice.length)];
    const scorePrint = document.createElement("div");
    scorePrint.classList.add("text-white", "h6", "print-dice");
    const diceCard = document.getElementById("diceCard");
    diceCard.append(scorePrint);
    
    if (playerScore > cpuScore){
        scorePrint.innerHTML = `HAI VINTO! Il tuo punteggio è ${playerScore}, quello della CPU è ${cpuScore}`;
    }
    else if (playerScore < cpuScore){
        scorePrint.innerHTML = `HAI PERSO! Il tuo punteggio è ${playerScore}, quello della CPU è ${cpuScore}`;
    }
    else {
        scorePrint.innerHTML = `PAREGGIO! Il tuo punteggio è ${playerScore}, quello della CPU è ${cpuScore}`;
    }
}

//MAIL
const fakeEmail = [
    "sono.un.tutor@possoaccedere.it",
    "sono.clelia@possoaccedere.it",
    "come.ti.permetti@possoaccedere.it",
    "certo.che@possoaccedere.it",
    "mario.rossi@possoaccedere.it",
    "giulia.verdi@possoaccedere.it",
    "sara.bianchi@possoaccedere.it"
];

const mailBtn = document.getElementById("mailBtn");