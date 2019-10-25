// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome
// comunicagli se può partecipare o no alla festa.

var invitati = ["Jules", "Lucy", "Stefan", "Adam","Joe"];

var invitato = prompt("inserisci il tuo nome per vedere se sei tra gli invitati");

var ok = false;

for (var i = 0; i < invitati.length; i++) {
  if (invitato === invitati[i]) {
    ok = true;
 }
}

if (ok = true) {
  console.log("sei invitato");
} else {
  console.log("non sei invitato");
}
