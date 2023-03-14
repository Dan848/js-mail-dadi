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

//Creo un array per simulare le facce di un dado
const dice = [1,2,3,4,5,6];
//"Aggancio" il button e gli do una funzione al click
const btnDice = document.getElementById("diceBtn");
btnDice.addEventListener("click", rollDice);

//Creo una funzione per il button che:
function rollDice (){
    //1) Controlla se è già stato stampato del testo nella pagina...
    const score = document.querySelector(".print-dice");
    //...se è così lo rimuove così da non generare troppe/infinite righe di testo...
    if (score) score.remove();
    //2) Genera a caso un numero tra quelli dell'array una volta per il giocatore...
    const playerScore = dice[Math.floor(Math.random() * dice.length)];
    //...una volta per la CPU
    const cpuScore = dice[Math.floor(Math.random() * dice.length)];
    //3) Crea un div nel quale stamperemo il testo 
    const scorePrint = document.createElement("div");
    scorePrint.classList.add("h6", "print-dice", "rounded-2", "p-2");
    //4) "Aggancia" il contenitore nel quale inserire il div appena creato
    const diceCard = document.getElementById("diceCard");
    diceCard.append(scorePrint);
    //5) Stampa il testo in base al risultato
    if (playerScore > cpuScore){
        scorePrint.classList.add("text-bg-warning");
        scorePrint.innerHTML = `HAI VINTO! Il tuo punteggio è ${playerScore}, quello della CPU è ${cpuScore}`;
    }
    else if (playerScore < cpuScore){
        scorePrint.classList.add("text-bg-danger");
        scorePrint.innerHTML = `HAI PERSO! Il tuo punteggio è ${playerScore}, quello della CPU è ${cpuScore}`;
    }
    else {
        scorePrint.classList.add("text-white");
        scorePrint.innerHTML = `PAREGGIO! Il tuo punteggio è ${playerScore}, quello della CPU è ${cpuScore}`;
    }
}

//MAIL

//Creo un Array per simulare un elenco di mail
const fakeEmail = [
    "sono.un.tutor@possoaccedere.it",
    "sono.clelia@possoaccedere.it",
    "come.ti.permetti@possoaccedere.it",
    "certo.che@possoaccedere.it",
    "mario.rossi@possoaccedere.it",
    "giulia.verdi@possoaccedere.it",
    "sara.bianchi@possoaccedere.it"
];

//"Aggancio" il button e gli do una funzione al click
const btnMail = document.getElementById("mailBtn");
btnMail.addEventListener("click", checkMail);

//Creo una funzione per il button che:
function checkMail () {
    //1) "Legge" cosa l'utente ha inserito nella input bar
    const userMail = document.getElementById("userMail").value;
    //2) Controlla se è già stato stampato del testo nella pagina...
    const print = document.querySelector(".print-mail");
    //...se è così lo rimuove così da non generare troppe/infinite righe di testo...
    if (print) print.remove();
    //3) Crea un div nel quale stamperemo il testo 
    const mailPrint = document.createElement("div");
    mailPrint.classList.add("h6", "print-mail", "rounded-2", "p-2");
    //4) "Aggancia" il contenitore nel quale inserire il div appena creato
    const mailCard = document.getElementById("mailCard");
    mailCard.append(mailPrint);
    //5) Crea una variabile booleana...
    let access = false;
    //...per verificare con un ciclo se il valore della input bar è contenuto almeno una volta nell'array

    //6) Con un ciclo for controlla ogni elemento
    for (let i = 0; i < fakeEmail.length; i++) {
        if (userMail.toLowerCase() === fakeEmail[i].toLowerCase()){
            //7) Cambia valore alla variabile se trova un elemento uguale
            access = true;
        }
    }
    //8) Stampa il testo in base al valore della variabile
    if (access) {
        mailPrint.classList.add("text-bg-warning");
        mailPrint.innerHTML = `ACCESSO CONSENTITO! La tua email è nel nostro elenco`;
    }
    else {
        mailPrint.classList.add("text-bg-danger");
        mailPrint.innerHTML = `ACCESSO NEGATO! Controlla di aver inserito correttamente l'email`;
    }
}