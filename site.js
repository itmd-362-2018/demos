// Clicking anywhere in the li focuses the child <input>
$('html').removeClass('nojs').addClass('js');

var loadFX = function() {
  $('html').addClass('fx');
}

setTimeout(loadFX, 500);

$('.inputs li').on('click', function() {
  $(this).find('input').focus();
});
