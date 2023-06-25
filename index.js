// Get all the links in the navigation
const links = document.querySelectorAll('nav ul li a');

// Add event listeners to each link
links.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.classList.add('highlight');
  });

  link.addEventListener('mouseout', () => {
    link.classList.remove('highlight');
  });
});
