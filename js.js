function validateCard() {
    var cardNumber = document.getElementById("cardNumber").value.replace(/\s/g, "");
    var isValid = luhnAlgorithm(cardNumber);
    var resultElement = document.getElementById("result");
    
    if (isValid) {
      resultElement.innerHTML = "Card number is valid.";
    } else {
      resultElement.innerHTML = "Card number is not valid.";
    }
  }
  
  function luhnAlgorithm(cardNumber) {
    var sum = 0;
    var shouldDouble = false;
    
    for (var i = cardNumber.length - 1; i >= 0; i--) {
      var digit = parseInt(cardNumber.charAt(i));
      
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    
    return (sum % 10) === 0;
  }