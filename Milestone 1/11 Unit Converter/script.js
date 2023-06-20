function convertTemperature() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitOutput = document.getElementById("fahrenheit");
  
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9 / 5) + 32;
  
    fahrenheitOutput.value = fahrenheit.toFixed(2);
  }
  