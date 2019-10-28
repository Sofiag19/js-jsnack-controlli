// Crea un array vuoto.
// Chiedi per sei volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array

// creazione array
var numDisp = [];

// impostazione variabili
var numero;
var dispari = false;

// ciclare per vedere se un numero è dispari
for (var i = 0; i < 6; i++) {
  var numero = parseInt(prompt("inserisci un numero"));
  if (numero%2 != 0) {
    dispari = true;
    numDisp.push(numero);
  }
}

if (dispari = true) {
  // console.log(numDisp);
  document.getElementById("pag").innerHTML = numDisp;
}
