// Creare due div; uno conterrà numeri dispari di colore rosso e l’altro conterrà numeri pari in verde. Ad ogni click di un bottone chiedere all’API un numero, se è dispari metterlo nel blocco dispari, e se è pari in quello pari.

$(document).ready(function(){

  $("button").click(function(){

    $.ajax({
      url : "https://flynn.boolean.careers/exercises/api/random/int",

      method : "GET",

      success : function (numeroRitorno) {
        var num = numeroRitorno.response;
        if (num%2 == 0) {
          $(".red").append("<p>"+num+"</p>");
        } else {
          $(".green").append("<p>"+num+"</p>");
        }
      },

      error : function (errore) {
        alert("E' avvenuto un errore. ");
      }
    });
  });

})
