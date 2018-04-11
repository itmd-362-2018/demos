$('html').removeClass('nojs').addClass('js');

/* https://github.com/madmurphy/cookies.js (GPL3) */
var docCookies={getItem:function(e){return e?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:null},setItem:function(e,o,n,t,r,c){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var s="";if(n)switch(n.constructor){case Number:s=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:s="; expires="+n;break;case Date:s="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(o)+s+(r?"; domain="+r:"")+(t?"; path="+t:"")+(c?"; secure":""),!0},removeItem:function(e,o,n){return this.hasItem(e)?(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:"")+(o?"; path="+o:""),!0):!1},hasItem:function(e){return!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e)?!1:new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),o=e.length,n=0;o>n;n++)e[n]=decodeURIComponent(e[n]);return e}};"undefined"!=typeof module&&"undefined"!=typeof module.exports&&(module.exports=docCookies);


// Add the .fx class after a short delay to avoid triggering any animations on DOM loads
var loadFX = function() {
  $('html').addClass('fx');
}
setTimeout(loadFX, 500);

// Focus inner inputs when li is clicked/tapped
$('.inputs li').on('click', function() {
  $(this).find('input').focus();
});

// Prepare the seats so that some are unavailable
var unavailable = [ "a1", "a2", "a3", "a4", "a5", "b3", "b4", "c1", "c2" ];
$.each(unavailable, function(i,v) {
  $('.seats a[href="#'+v+'"]').addClass('unavailable').prepend('<span>Seat unavailable.</span> ');
});

$('.seats a').on('click', function(e) {
  var selected = [];
  var seats;
  e.preventDefault();
  if ($(this).hasClass('unavailable')) {
    return;
  }
  // Toggle the class for whether a seat is selected or not
  $(this).toggleClass('selected');
  // THEN, run through everything with a selected class
  // and build up the array of selected seats
  // TODO: double-check the `.rows` context argument
  $('.selected','.rows').each(function(){
    var seat = $(this).attr('href').substring(1);
    // Add the current seat in the set to the `selected` array
    selected.push(seat);
  });
  seats = selected.join(",");
  $('#seats').val(seats);
  docCookies.setItem('seats',seats);
});

$('#seats').on('keyup', function(e) {
  var seats = $(this).val().replace(/\s/g, '');
  var selected = seats.split(",");
  $('.seats a').removeClass('selected');
  $.each(selected, function(i,v) {
    $('.seats a[href="#'+v+'"]:not(.unavailable)').addClass('selected');
    console.log('.seats a[href="#'+v+'"]');
  });
});

$('#seat-selection').on('submit', function(e){
  var selected = [];
  // Let jQuery race through all the submitted form data
  var form_data = $(this).serializeArray();
  // Then, walk through each item in the form data array
  $.each(form_data, function(i,field){
    // Start building a switch statement to do data checking, etc.
    // We'll build this out more next week
    switch(field.name) {
      case 'seats':
        selected = field.value.split(",");
        console.log(selected);
        break;
    }
  });
  // console.log(form_data);
  e.preventDefault();
  window.location.href = $(this).attr('action');
});

if (docCookies.hasItem('seats')) {
  $('#confirmation').append('<b>They are seats ' + docCookies.getItem('seats') + '.</b>');
}
