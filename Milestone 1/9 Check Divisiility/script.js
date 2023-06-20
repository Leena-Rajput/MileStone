function printDivisibleNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
  
      if (num % 3 !== 0) {
        continue; // Skip to the next iteration if not divisible by 3
      }
  
      if (num % 2 === 0) {
        continue; // Skip to the next iteration if divisible by 2
      }
  
      console.log(num);
    }
  }
  
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  printDivisibleNumbers(numbersArray);
  