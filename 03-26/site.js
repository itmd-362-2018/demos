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
  // On a keyup event, ...
  var zip = $(this).val();
  if (zip.length === 5) {
    console.log("Looks like a valid ZIP to me!");
    $('label b').remove();
    $.ajax({
      url: 'http://api.zippopotam.us/us/' + zip,
      statusCode: {
        200: function(data) {
          $('#city').val(data.places[0]["place name"]);
          $('#state').val(data.places[0]["state abbreviation"]);
        },
        404: function() {
          $('label[for="zip"]').append(' <b>Are you sure about that ZIP code?</b>');
        }
      }
    }
    );
  }
});
