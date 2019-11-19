// Chiedere all’API 10 nomi da inserire in un array di invitati.
// Una volta generata la lista chiedere all’utente di dire il proprio nome. Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.


$(document).ready(function(){

  var invitati = [];

  for (var i = 0; i < 10; i++) {

    $.ajax({

      url : "https://flynn.boolean.careers/exercises/api/random/name",

      method : "GET",

      success : function (nomeInvitato) {
        var invitato = nomeInvitato.response;
        invitati.push(invitato);
        if (invitati.length == 10) {
          console.log(invitati);
          var sonoInvitato = prompt("Inserisci il tuo nome per vedere se sei invitato");
          var k = 0;
          var ok;
          while (k < invitati.length) {
            if (sonoInvitato === invitati[k]) {
              ok = true;
            }
            k++;
          }
          if (ok == true) {
            alert("Benvenuto!!!!!!!!!!");
          } else {
            alert("Non sei il benvenuto!!");
          }
        }
      },

      error : function (errore) {
        alert("E' avvenuto un errore");
      }

    });
  }



})
