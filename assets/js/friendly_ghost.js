$(function() {
  // Setup prism syntax highlighting
  ["css", "c", "javascript", "java", "php", "coffeescript", "sass", "bash", "python", "sql", "ruby", "objective-c"].forEach(function(language) {
    $('code.'+language).attr('class', 'language-'+language);
  });

  // Contact form submission
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
