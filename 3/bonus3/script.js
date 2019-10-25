// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// for
var somma = 0;
for (var i = 0; i < 5; i++) {
  var numero = parseInt(prompt("inserisci un numero"));
somma += numero;
  console.log(somma);
}

// while
var j = 0;
while (j < 5) {
  var numero = parseInt(prompt("inserisci un numero"));
  somma += numero;
  console.log(somma);
  j++;
}
