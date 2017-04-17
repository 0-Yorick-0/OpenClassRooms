$(document).ready(function(){
    console.log("jQuery is ready");

    $('p:first').click(function(){
      console.log("hop");
      $('.container div:eq(1)').slideDown(1000);
    });

    $('.container div:eq(1)').click(function(){
      console.log("hop");
      $('.container div:eq(2)').slideDown(1000);
    });

    $('.container div:eq(2)').click(function(){
      console.log("hop");
      $('body').css('background-image', 'url("img/1.jpg")');
      $('.container div:last').slideDown(1000);
      $('audio').play();
    });







});
