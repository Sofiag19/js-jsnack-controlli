// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// for
var risultato = document.getElementById("addizione");
var somma = 0;
// var numPrec;

// for (var i = 0; i < 5; i++) {
//   var numero = parseInt(prompt("inserisci un numero"));
//   somma += numero;

  // voglio stampare tutti i numeri????
//   numPrec += numero + " + ";


//   risultato.innerHTML = "La somma totale dei numeri immessi è " + numPrec + " = " + somma;
// }

// while
var j = 0;
while (j < 5) {
  var numero = parseInt(prompt("inserisci un numero"));
  somma += numero;
  console.log(somma);
  risultato.innerHTML = "La somma totale dei numeri immessi è " + somma;
  j++;
}
