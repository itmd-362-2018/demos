// Clicking anywhere in the li focuses the child <input>
$('html').removeClass('nojs').addClass('js');

var loadFX = function() {
  $('html').addClass('fx');
}

setTimeout(loadFX, 500);

$('.inputs li').on('click', function() {
  $(this).find('input').focus();
});

$('#email').on('keyup', function(){
  var email = {
    val: $(this).val(),
    pat: /^[^\s@]+@[^\s@]+$/
  }
  if((email.pat).test(email.val)) {
    $('input[type="submit"]').addClass('show');
  } else {
    $('input[type="submit"]').removeClass('show');
  }
});
