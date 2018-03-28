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

$('.seats a').on('click', function(e) {
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
  })
  console.log(selected);
  e.preventDefault();
})
