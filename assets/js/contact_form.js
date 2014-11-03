$(function() {
  var contactForm = $('#contact-form');
  var submitButton = $('#contact-submit-button');
  submitButton.on('click', function() {
    $.ajax({
      type: "POST",
      url: contactForm.attr('action'),
      data: contactForm.serialize()
    });
    submitButton.fadeOut();
    contactForm.fadeOut(function() {
      $('#thank-you').fadeIn();
    });
  });
});
