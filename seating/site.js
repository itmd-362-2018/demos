$('html').removeClass('nojs').addClass('js');

// Add the .fx class after a short delay to avoid triggering any animations on DOM loads
var loadFX = function() {
  $('html').addClass('fx');
}
setTimeout(loadFX, 500);

// Focus inner inputs when li is clicked/tapped
$('.inputs li').on('click', function() {
  $(this).find('input').focus();
});

// Prepare the seats so that some are unavailable
var unavailable = [ "a1", "a2", "a3", "a4", "a5", "b3", "b4", "c1", "c2" ];
$.each(unavailable, function(i,v) {
  $('.seats a[href="#'+v+'"]').addClass('unavailable');
});

$('.seats a:not(.unavailable)').on('click', function(e) {
  var selected = [];
  // Toggle the class for whether a seat is selected or not
  $(this).toggleClass('selected');
  // THEN, run through everything with a selected class
  // and build up the array of selected seats
  // TODO: double-check the `.rows` context argument
  $('.selected','.rows').each(function(){
    var seat = $(this).attr('href').substring(1);
    // Add the current seat in the set to the `selected` array
    selected.push(seat);
  });
  $('#seats').val(selected.join(","));
  e.preventDefault();
});

$('#seats').on('keyup', function(e) {
  var seats = $(this).val().replace(/\s/g, '');
  var selected = seats.split(",");
  $('.seats a').removeClass('selected');
  $.each(selected, function(i,v) {
    $('.seats a[href="#'+v+'"]').addClass('selected');
    console.log('.seats a[href="#'+v+'"]');
  });
});

$('#seat-selection').on('submit', function(e){
  var selected = [];
  // Let jQuery race through all the submitted form data
  var form_data = $(this).serializeArray();
  // Then, walk through each item in the form data array
  $.each(form_data, function(i,field){
    // Start building a switch statement to do data checking, etc.
    // We'll build this out more next week
    switch(field.name) {
      case 'seats':
        selected = field.value.split(",");
        console.log(selected);
        break;
    }
  });
  // console.log(form_data);
  e.preventDefault();
});
