function calculateBill() {
    var dishCostInput = document.getElementById("dish-cost");
    var numPeopleInput = document.getElementById("num-people");
    var totalBillOutput = document.getElementById("total-bill");
    var billPerPersonOutput = document.getElementById("bill-per-person");
  
    var dishCost = parseFloat(dishCostInput.value);
    var numPeople = parseInt(numPeopleInput.value);
  
    var totalBill = dishCost * numPeople;
    var billPerPerson = totalBill / numPeople;
  
    totalBillOutput.value = "Rs. " + totalBill.toFixed(2) + "/-";
    billPerPersonOutput.value = "Rs. " + billPerPerson.toFixed(2) + "/-";
  }
  