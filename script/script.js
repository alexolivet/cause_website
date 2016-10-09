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

  //Global var created by purpose. It will be used to set the input box value to the last version
  var tmpValue;

  $('input').click(function() {
    tmpValue = $(this).val();

    if ((tmpValue === 'Other amount') || 
        (tmpValue === 'First name') ||
        (tmpValue === 'Last name') ||
        (tmpValue === 'Street name') ||
        (tmpValue === 'Number') ||
        (tmpValue === 'City') ||
        (tmpValue === 'ZIP code') || 
        (tmpValue === 'E-mail address') ||
        (tmpValue === 'Phone number')) {
      $(this).val('');
    }

  });

  $('input').focusout(function() {
    if ( $(this).val() === '' ) {
      $(this).val(tmpValue);
    }
    tmpValue = '';
  });

  //Global var created by purpose. It holds the donation
  var tmpDonate;

  $('button').click(function() {

    if ($(this).attr('value') != 'next') {
      tmpDonate = setDonation(this);

      if ((tmpDonate / 2) > 0) {
        $("#step1").slideUp("slow");
        $("#step2").slideDown("slow");
      }
    }

  });


  $('#s2next').click(function() {
      $("#step2").slideUp("slow");
      $("#step3").slideDown("slow");
  });

  $('#cc').click (function() {
    payNext();
  });

  $('#pp').click (function() {
    payNext();
  });

  $('#id').click (function() {
    payNext();
  });

  $('#oke').click (function() {
    payNext();
  });


  $('#s3next').click(function() {

    $("#step3").slideUp("slow");
    $("#step4").slideDown("slow");

    $("#firstnameForm").text ($('#firstname').val());
    $("#lastnameForm").text ($('#lastname').val());
    $("#amountForm").text (tmpDonate);

    if ($('#cc').is(':checked') === true) {
      $('#paymentForm').text ("Creditcard");
    } else if ($('#pp').is(':checked') === true) {
      $('#paymentForm').text ("PayPal");
    } else {
      $('#paymentForm').text ("iDeal");
    }
  });


});

function setDonation (element) {

  if ($(element).attr('value')) {

    if ($(element).attr('value') === 'donate') {

      if (($('#ownvalue').val() / 2) > 0) {
        return ($('#ownvalue').val());
      } else {
        $('#error').show();
      }

    } else {
      return ($(element).attr('value'));
    }
  }
}

function payNext() {
  if (($('#oke').is(':checked') === true) && 
        (($('#cc').is(':checked') === true) ||
        ($('#pp').is(':checked') === true) ||
        ($('#id').is(':checked') === true))) {
    $('#s3next').show();
  } else {
    $('#s3next').hide();
  }
}