// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

// esplicitazione variabili
var primoNum, secondoNum, parsePrimoNum, parseSecondoNum;

// richiesta primo numero
primoNum = parseInt(prompt("Inserisci il primo numero"));


// richiesta secondo numero
secondoNum = parseInt(prompt("Inserisci il secondo numero"));

var risultato = document.getElementById('maggiore');
if (!(isNaN(primoNum)) && !(isNaN(secondoNum))) {
  // output numero più alto
  if (primoNum > secondoNum) {
    // console.log(primoNum);
    risultato.innerHTML = "Il numero maggiore è " + primoNum;
  } else if (primoNum < secondoNum) {
    // console.log(secondoNum);
    risultato.innerHTML = "Il numero maggiore è " + secondoNum;
  } else if (primoNum === secondoNum) {
    risultato.innerHTML = "Hai inserito due numeri uguali";
  }else {
    // console.log("riprova ed immetti due numeri diversi");
    risultato.innerHTML = "Riprova ed immetti due numeri diversi";
  }
} else {
  risultato.innerHTML = "Non hai inserito due numeri";
}
