// Clicking anywhere in the li focuses the child <input>
$('.inputs li').on('click', function() {
  $(this).find('input').focus();
});
