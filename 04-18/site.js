// Clicking anywhere in the li focuses the child <input>
$('html').removeClass('nojs').addClass('js');

/* https://github.com/madmurphy/cookies.js (GPL3) */
var docCookies={getItem:function(e){return e?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:null},setItem:function(e,o,n,t,r,c){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var s="";if(n)switch(n.constructor){case Number:s=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:s="; expires="+n;break;case Date:s="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(o)+s+(r?"; domain="+r:"")+(t?"; path="+t:"")+(c?"; secure":""),!0},removeItem:function(e,o,n){return this.hasItem(e)?(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:"")+(o?"; path="+o:""),!0):!1},hasItem:function(e){return!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e)?!1:new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),o=e.length,n=0;o>n;n++)e[n]=decodeURIComponent(e[n]);return e}};"undefined"!=typeof module&&"undefined"!=typeof module.exports&&(module.exports=docCookies);

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

if(!docCookies.hasItem('drink-test')) {
  docCookies.setItem('drink-test', coinToss());
  console.log(docCookies.getItem('drink-test'));
}

if(docCookies.getItem('drink-test') === "true") {
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
  // Hide the default control
  $('#size').addClass('is-hidden');
  $('#test').val('drink-enhanced');
}



function coinToss() {
  var condition = false;
  if (Math.floor(Math.random() * 1000) % 2 === 0) {
    condition = true;
  }
  return condition;
}

// Test for fairness of coinToss()
// var counter = { true: 0, false: 0 };
// for (var i = 0; i < 1000000; i++) {
//  if(coinToss()) {
//    counter.true += 1;
//  } else {
//    counter.false += 1;
//  }
// }
// console.log(counter);
