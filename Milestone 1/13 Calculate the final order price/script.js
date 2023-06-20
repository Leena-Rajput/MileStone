const cart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 5, quantity: 3 },
    { unitPrice: 8, quantity: 1 }
  ];
  
  const calculateTotalCost = () => {
    const totalCostInput = document.getElementById("total-cost");
    let totalCost = 0;
  
    for (const item of cart) {
      totalCost += item.unitPrice * item.quantity;
    }
  
    totalCostInput.value = "$" + totalCost.toFixed(2);
  };
  
  window.addEventListener("DOMContentLoaded", () => {
    const cartItemsUl = document.getElementById("cart-items");
  
    for (const item of cart) {
      const li = document.createElement("li");
      li.textContent = `Unit Price: $${item.unitPrice}, Quantity: ${item.quantity}`;
      cartItemsUl.appendChild(li);
    }
  });
  

