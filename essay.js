// Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all the paragraphs on the page
    var paragraphs = document.getElementsByTagName("p");
  
    // Loop through each paragraph
    for (var i = 0; i < paragraphs.length; i++) {
      // Add event listeners for mouseenter and mouseleave
      paragraphs[i].addEventListener("mouseenter", highlightParagraph);
      paragraphs[i].addEventListener("mouseleave", unhighlightParagraph);
    }
  
    // Function to highlight the paragraph
    function highlightParagraph(event) {
      event.target.style.backgroundColor = "pink";
    }
  
    // Function to remove the highlight from the paragraph
    function unhighlightParagraph(event) {
      event.target.style.backgroundColor = "";
    }
  });
  
