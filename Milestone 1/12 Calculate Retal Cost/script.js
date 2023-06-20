function calculateRentalCost() {
    var daysInput = document.getElementById("days");
    var carTypeInput = document.getElementById("car-type");
    var rentalCostOutput = document.getElementById("rental-cost");
  
    var days = parseInt(daysInput.value);
    var carType = carTypeInput.value;
    var rentalCost = 0;
  
    switch (carType) {
      case "economy":
        rentalCost = 4000;
        break;
      case "midsize":
        rentalCost = 15000;
        break;
      case "luxury":
        rentalCost = 20000;
        break;
      default:
        rentalCost = 0;
    }
  
    var totalCost = rentalCost * days;
    rentalCostOutput.value = "Rs. " + totalCost.toLocaleString() + "/-";
  }
  