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
