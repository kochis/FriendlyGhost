$(function() {
  // Setup prism syntax highlighting
  ["css", "c", "javascript", "java", "php", "coffeescript", "sass", "bash", "python", "sql", "ruby", "objective-c"].forEach(function(language) {
    $('code.'+language).attr('class', 'language-'+language);
  });
});
