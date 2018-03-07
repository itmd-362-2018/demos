// Clicking anywhere in the li focuses the child <input>
$('html').removeClass('nojs').addClass('js');

var loadFX = function() {
  $('html').addClass('fx');
}

setTimeout(loadFX, 500);

$('.inputs li').on('click', function() {
  $(this).find('input').focus();
});

/* Create steppers for servings */
/* Add stepper elements */
/* TODO: Make sure these controls are accessible */
/* TODO: Watch focus on stepper click events; form submits accidentally */
$('#servings').before('<a id="more" href="#null">+</a>');
$('#servings').after('<a id="less" href="#null">-</a>');

$('#more').on('click', function(e) {
  var current_value = $('#servings').val();
  var new_value = parseInt(current_value, 10) + 1;
  $('#servings').val(new_value);
});

$('#less').on('click', function(e) {
  var current_value = $('#servings').val();
  var new_value = parseInt(current_value, 10) - 1;
  if (new_value < 0) {
    new_value = 0;
  }
  $('#servings').val(new_value);
});
