const readMoreContainers = document.querySelectorAll('.read-more-container');

readMoreContainers.forEach(container => {
  const readMoreBtn = container.querySelector('.read-more-btn');
  const readMoreText = container.querySelector('.read-more-text');

  readMoreBtn.addEventListener('click', () => {
    readMoreText.classList.toggle('read-more-text--show');
    readMoreBtn.textContent = readMoreText.classList.contains('read-more-text--show') ? 'Read Less...' : 'Read More...';
  });
});

  
  
  