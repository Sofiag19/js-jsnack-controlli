// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

var parola1, parola2;

// prompts
parola1 = prompt("inserisci la prima parola");
parola2 = prompt("inserisci la seconda parola");

// if - condizionale
var scritta = document.getElementById('parole');

if ((isNaN(parola1)) && (isNaN(parola2))) {
  if (parola1.length > parola2.length) {
    // console.log(parola2 + " " + parola1);
    scritta.innerHTML = parola2 + " è una parola più corta rispetto a " + parola1;
  } else if (parola2.length > parola1.length) {
    // console.log(parola1 + " " + parola2);
    scritta.innerHTML = parola1 + " è una parola più corta rispetto a " + parola2;
  } else {
    // console.log(parola1 + " e " + parola2 + " hanno le stessa lunghezza");
    scritta.innerHTML = parola1 + " e " + parola2 + " hanno le stessa lunghezza";
  }
}else {
  scritta.innerHTML = "Non hai inserito due parole!!";
}
