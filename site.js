// Clicking anywhere in the li focuses the child <input>
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

$('#zip').on('keyup', function(e) {
  var zip = $(this).val();
  if (zip.length === 5) {
    console.log('We have a valid ZIP');
    $.get('http://api.zippopotam.us/us/' + zip, function(data) {
      $('#city').val(data.places[0]['place name']);
      $('#state').val(data.places[0]['state abbreviation']);
    }
    );
  }
});
