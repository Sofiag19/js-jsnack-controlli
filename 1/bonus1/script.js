// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

// esplicitazione variabili
var primoNum, secondoNum, parsePrimoNum, parseSecondoNum;

// richiesta primo numero
primoNum = parseInt(prompt("Inserisci il primo numero"));


// richiesta secondo numero
secondoNum = parseInt(prompt("Inserisci il secondo numero"));

// output numero più alto
if (primoNum > secondoNum) {
  // console.log(primoNum);
  document.getElementById('maggiore').innerHTML = "Il numero maggiore è " + primoNum;
} else if (primoNum < secondoNum) {
  // console.log(secondoNum);
  document.getElementById('maggiore').innerHTML = "Il numero maggiore è " + secondoNum;
} else {
  // console.log("riprova ed immetti due numeri diversi");
  document.getElementById('maggiore').innerHTML = "Riprova ed immetti due numeri diversi";
}

