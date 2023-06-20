
  
 // Sample cart array with quantity of each item
var cart = [1, 2, 3, 4, 5];

function correctCartBug() {
  // Double the quantity of each item in the cart array
  for (var i = 0; i < cart.length; i++) {
    cart[i] *= 2;
  }
}

// Call the function to correct the bug
correctCartBug();

// Display the updated cart items on the webpage
var cartItemsDiv = document.getElementById("cart-items");

for (var i = 0; i < cart.length; i++) {
  var itemDiv = document.createElement("div");
  itemDiv.textContent = "Item " + (i + 1) + ": Quantity - " + cart[i];
  cartItemsDiv.appendChild(itemDiv);
}

                    