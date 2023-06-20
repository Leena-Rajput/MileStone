// script.js
document.addEventListener("DOMContentLoaded", function() {
    var paragraph = document.getElementById("myParagraph");
    var words = paragraph.innerText.split(" ");
  
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > 8) {
        words[i] = '<span class="highlight">' + words[i] + '</span>';
      }
    }
  
    paragraph.innerHTML = words.join(" ");
  });
  