function capitalizeName() {
    var nameInput = document.getElementById('nameInput');
    var name = nameInput.value.trim();
  
    var capitalizedFirstLetter = name.charAt(0).toUpperCase();
    var modifiedName = capitalizedFirstLetter + name.slice(1);
  
    var resultDiv = document.getElementById('result');
    resultDiv.textContent = "Capitalized name: " + modifiedName;
  }
  
  
  