$('#clicker').on('click',
  function(e) {
    $(this).html('I Have Been Clicked');
    e.preventDefault();
  }
);
