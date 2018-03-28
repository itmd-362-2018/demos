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
  var selected = $(this).attr('href').substring(1);
  $(this).toggleClass('selected');
  console.log(selected);
  e.preventDefault();
})
