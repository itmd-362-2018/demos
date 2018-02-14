// Clicking anywhere in the li focuses the child <input>
$('html').addClass('js');

$('.inputs li').on('click', function() {
  $(this).find('input').focus();
});
