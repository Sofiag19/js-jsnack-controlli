// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// var num1, num2, num3, num4, num5;
// prompts
// num1 = parseInt(prompt("inserisci il primo numero"));
// num2 = parseInt(prompt("inserisci il secondo numero"));
// num3 = parseInt(prompt("inserisci il terzo numero"));
// num4 = parseInt(prompt("inserisci il quarto numero"));
// num5 = parseInt(prompt("inserisci il quinto numero"));

// var numeriIns = [num1, num2, num3, num4, num5];

// stampa somma
// var risultato;

// for
// for (var i = 0; i < 5; i++) {
//   risultato += numeriIns[i];
//   console.log(risultato);
// }

// while
// var j = 0;
// while (j < numeriIns.length) {
//   risultato += numeriIns[j];
//   console.log(risultato);
//   j++;
// }

// for
var somma = 0;
// for (var i = 0; i < 5; i++) {
//   var numero = parseInt(prompt("inserisci un numero"));
// somma += numero;
//   console.log(somma);
// }

// while
var j = 0;
while (j < 5) {
  var numero = parseInt(prompt("inserisci un numero"));
  somma += numero;
  console.log(somma);
  j++;
}
