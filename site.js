$('#clicker').on('click',
  function(e) {
    $(this).html('I Have Been Clicked');
    e.preventDefault();
  }
);
$('#contact-form').on('submit',
  function() {
    console.log('The form was submitted.');
  }
);
