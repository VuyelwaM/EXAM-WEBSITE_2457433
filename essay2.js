var paragraphs = document.getElementsByTagName('p');

for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener('mouseenter', function() {
    this.classList.add('highlight');
  });

  paragraphs[i].addEventListener('mouseleave', function() {
    this.classList.remove('highlight');
  });
}
