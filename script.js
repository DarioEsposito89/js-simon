"use scrict"

// Traccia
// ----------------------------------------------------------------------------------------------
// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

// Inserisco la data e l'ora della fine del countdown
const countDownDate = new Date("Jul 14, 2023 09:30:00").getTime();

// Aggiorno il conteggio ogni secondo
let x = setInterval(function() {

  // Mi procuro la data aggiornata di oggi
    let liveDate = new Date().getTime();
    
  // mi procuro il divario tra data di oggi e data di arrivo
    let difference = countDownDate - liveDate;
    
  // Tempo calcolato per giorni, ore, minuti and secondi
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
  // stampo il countdown in tempo reale sullo schermo
    document.getElementById("liveTime").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
  // Se il countdown è finito, si scrive questo
    if (difference < 0) {
    clearInterval(x);
    document.getElementById("liveTime").innerHTML = "Inizio lezione";
    document.getElementById("title").innerHTML = "";
    }
}, 1000);