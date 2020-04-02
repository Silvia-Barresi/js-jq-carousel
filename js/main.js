// ricreo lo slider come fatto questa mattina (o da zero, o partendo dall’html [ref sempre mio repo su github]);
// faccio funzionare il tracciamento dei pallini anche in prev (stamattina lo abbiam fatto solo in next);
// creo anche la possibilità di poter navigare cliccando anche sui pallini (quindi se clicco sul pallino 3, l’img vista è la 3 e il pallino 3 rimane rosso);



$(document).ready(function(){


// gestisco gli eventi next e prev
  $('.now').click(
    nowI
  );

  $('.then').click(
    thenI

  );


  // creo la funzione next

  function nowI(){

    // tolgo l'active dall'immagine selezionata

    var activeI = $('.vang img.active');
    var activeC = $('i.active');

    activeI.removeClass('active');
    activeC.removeClass('active');

    // attivo le immagini a seguire
    if(activeI.hasClass('last')){
      $('.vang img.first').addClass('active');
      $('i.first').addClass('active');

    }else{
      activeI.next().addClass('active');
      activeC.next().addClass('active');
    };
  };


  // creo la funzione prev

  function thenI(){

    // tolgo l'active dall'immagine selezionata

    var activeI = $('.vang img.active');
    var activeC = $('i.active');


    activeI.removeClass('active');
    activeC.removeClass('active');
    // attivo le immagini a seguire
    if(activeI.hasClass('first')){
      $('.vang img.last').addClass('active');
      $('i.last').addClass('active');
    }else{
      activeI.prev().addClass('active');
      activeC.prev().addClass('active');
    };
  };

  // click on dots

    function circle(){

    }



});
