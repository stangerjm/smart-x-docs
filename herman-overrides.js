document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[id="css--.smart-modal"] iframe, [id="css--.smart-modal--content"] iframe').forEach(function(iframe) {
    iframe.style.height = 'auto';
  });

  document.querySelectorAll('.example-code').forEach(function(codeExample) {
    codeExample.querySelectorAll('.code-block').forEach(function(codeBlock) {
      var codeLanguage = codeBlock.querySelector('.code-language');
      if (codeLanguage.textContent.trim() === 'njk') {
        codeBlock.style.display = 'none';
      }
    });
  });
});