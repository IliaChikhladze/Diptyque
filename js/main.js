$(document).ready(function(){

  $("#picker1").birthdaypicker({
    futureDates: true,
    maxYear: 2022,
    maxAge: 75,
    defaultDate: "10-17-1990"
  }); 

  // Validate Username
  $('.warning').hide();
    
  function validateName(selector) {
    $(selector).removeClass("notValid");
    let value = $(selector).val();
    if (value.length == '') {
      $('.warning').show();
      $(selector).addClass("notValid");
    }
    else {
      $(selector).removeClass("notValid");
        $('.warning').hide();
    }
  }

  function isValidEmailAddress(selector) {
    let emailAddress = $(selector).val(),
    pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    
    if(pattern.test(emailAddress)) {
      $(selector).removeClass("notValid");
      $('.warning').hide();
    } else {
      $(selector).addClass("notValid");
      $('.warning').show();
    }
  };
   
  // Submit button
  $('.submit-btn').click(function () {
      validateName('#name');
      validateName('#last-name');
      validateName('#zip');
      validateName('#phone-number');
      isValidEmailAddress('#email');    
  });

  $('.cancel-btn').click(function () {
    $('.main-container').trigger("reset");
  });
});