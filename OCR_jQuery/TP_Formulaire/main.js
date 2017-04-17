$(function(){
  console.log('jQuery is fuckin\' ready !');

    function color(state, champ){
    if (state == 'ok') {
      champ.css('borderColor', 'green');
    }else{
      champ.css('borderColor', 'red');
    }
  }

  function verifier(champ){
    if (champ.length < 5 || champ == '') {
      $('div#erreur').show();
      console.log('erreur');
      return 'error';
    }else{
      $('div#erreur').hide();
      return 'ok';
    }
  }

  $('input.champ').keyup(function(){
    var longueurChamp = $(this).val();
    console.log(longueurChamp);
    if (longueurChamp.length < 5) {
      color('error', $(this));
    }else{
      color('ok', $(this));
    }
  });


  $('input#envoi').click(function(e){

    var nom = $('input#pseudo');
    var mdp = $('input#mdp');
    var confMdp = $('input#confirmation');
    var mail = $('input#mail');
    var donnees = [nom, mdp, mail];

    for (var i = 0; i < donnees.length; i++) {
      var state = verifier(donnees[i].val());
      color(state, donnees[i]);
      console.log(donnees[i]);
    }

    if (mdp.val() == confMdp.val()) {
      color('ok', confMdp);
    }else{
      color('error', confMdp);
      state = 'error';
    }

    if (state == 'error') {
      e.preventDefault();
    }else{
      alert('saisie réussie');
    }
  });

  $('input#rafraichir').click(function(){
    $('input.champ').css('borderColor', '#ccc');
    $('div#erreur').hide();
    console.log('reset');
  });

















});
