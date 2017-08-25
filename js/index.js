$(document).ready(function() {
  $('p').hide();
  $('#hello').show();
  $('#hello').hover(function() {
    $('#hello').hide();
    $('#over').fadeIn(3000);
  });
  $('#over').hover(function() {
    $('#over').hide();
    $('#not').fadeIn(3000);
  });
  $('#not').hover(function() {
    $('#not').hide();
    $('#left').fadeIn(3000);
  });
  $('#left').hover(function() {
    $('#left').hide();
    $('#or').fadeIn(3000);
  });
  $('#or').hover(function() {
    $('#or').hide();
    $('#good').fadeIn(3000);
  });
  $('#good').hover(function() {
    $('#good').hide();
    $('#communism').fadeIn(3000);
  });
  $('#communism').click(function() {
    $('#communism').hide();
    $('body').toggleClass('all');
    $('body').toggleClass('not');
  });
});