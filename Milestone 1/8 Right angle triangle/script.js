function printPattern() {
    var numRowsInput = document.getElementById('numRowsInput');
    var numRows = parseInt(numRowsInput.value);
  
    var pattern = '';
  
    for (var row = numRows; row >= 1; row--) {
      for (var col = 1; col <= row; col++) {
        pattern += '*';
      }
      pattern += '\n';
    }
  
    var patternOutput = document.getElementById('patternOutput');
    patternOutput.textContent = pattern;
  }
  