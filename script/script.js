/*Empty Javascript page*/

$(document).ready(function(){

  // Your code here.
  $('img.imagepic').mouseover(function() {
   
    this.src = this.src.replace('old', 'new');

  });
  
  // Your code here.
  $('img.imagepic').mouseout(function() {

    this.src = this.src.replace('new', 'old');

  });


  $('#ownvalue').click(function() {
    if ($('#ownvalue').val() === 'Other amount') {
      $('#ownvalue').val('');
    }
  });


  $('#ownvalue').focusout(function() {
    if ($('#ownvalue').val() === '') {
      $('#ownvalue').val('Other amount');
    }
  });



});


//When clink on other amount
