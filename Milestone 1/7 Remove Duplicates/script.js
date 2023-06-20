function removeDuplicates() {
    var cartItemsInput = document.getElementById('cartItems');
    var cartItems = cartItemsInput.value.trim().split(',');
  
    var uniqueItems = [...new Set(cartItems)];
  
    var resultDiv = document.getElementById('result');
    resultDiv.textContent = "Cart items without duplicates: " + uniqueItems.join(', ');
  }
  