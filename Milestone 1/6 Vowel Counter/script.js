function countVowels() {
    var nameInput = document.getElementById('nameInput');
    var name = nameInput.value.trim().toLowerCase();
  
    var vowelCount = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (var i = 0; i < name.length; i++) {
      var currentChar = name.charAt(i);
  
      if (vowels.includes(currentChar)) {
        vowelCount++;
      }
    }
  
    var resultDiv = document.getElementById('result');
    resultDiv.textContent = "Number of vowels in the name: " + vowelCount;
  }
  