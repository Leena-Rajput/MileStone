const calculateDiscountPercentage = () => {
    const originalPriceInput = document.getElementById("original-price");
    const discountedPriceInput = document.getElementById("discounted-price");
    const discountPercentageOutput = document.getElementById("discount-percentage");
  
    const originalPrice = parseFloat(originalPriceInput.value);
    const discountedPrice = parseFloat(discountedPriceInput.value);
  
    const discount = originalPrice - discountedPrice;
    const discountPercentage = (discount / originalPrice) * 100;
  
    discountPercentageOutput.value = discountPercentage.toFixed(2) + "%";
  };
  