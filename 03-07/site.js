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
$('#servings').after('<a id="more" href="#null">+</a>');
$('#servings').before('<a id="less" href="#null">-</a>');


/* TODO: DRY up the repetition on these event handlers */
$('#more').on('click', function(e) {
  var current_value = $('#servings').val();
  var new_value = parseInt(current_value, 10) + 1;
  $('#servings').val(new_value);
  e.stopPropagation();
  e.preventDefault();
});

$('#less').on('click', function(e) {
  var current_value = $('#servings').val();
  var new_value = parseInt(current_value, 10) - 1;
  if (new_value < 0) {
    new_value = 0;
  }
  $('#servings').val(new_value);
  e.stopPropagation();
  e.preventDefault();
});

/* Create buttons from short <select> */

$('#size').after('<ul class="options"></ul>');
$('#size option').each(function() {
  var opt = {
    text: $(this).text(),
    val: $(this).val()
  }
  $('.options').append('<li><a class="option" href="#null" data-value="'+opt.val+'">'+opt.text+'</a></li>');
});

$('.option').on('click', function(e) {
  var value = $(this).data('value');
  $('.option').removeClass('selected');
  $(this).addClass('selected');
  $('#size option').removeAttr('selected'); // Remove existing `selected` attributes
  $('#size option[value="'+value+'"]').attr('selected','selected'); // Add `selected` attribute onto the chosen option
  e.stopPropagation();
  e.preventDefault();
});
