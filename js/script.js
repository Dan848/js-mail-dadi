/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

const dice = [1,2,3,4,5,6];
const btnDice = document.getElementById("diceBtn");

btnDice.addEventListener("click", rollDice);

function rollDice (){
    const score = document.querySelector("h6");
    if (score) score.remove();
    const playerScore = dice[Math.floor(Math.random() * dice.length)];
    const cpuScore = dice[Math.floor(Math.random() * dice.length)];
    const scorePrint = document.createElement("h6");
    scorePrint.classList.add("text-white");
    const diceCol = document.getElementById("diceCol");
    diceCol.append(scorePrint)
    
    if (playerScore > cpuScore){
        scorePrint.innerHTML = `HAI VINTO! Il tuo punteggio è ${playerScore}, quello della CPU è ${cpuScore}`;
    }
    else if (playerScore < cpuScore){
        scorePrint.innerHTML = `HAI PERSO! Il tuo punteggio è ${playerScore}, quello della CPU è ${cpuScore}`;
    }
    else {
        scorePrint.innerHTML = `PAREGGIO! Il tuo punteggio è ${playerScore}, quello della CPU è ${cpuScore}`
    }
}

