document.getElementById('payment-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form data
  var cardNumber = document.getElementById('card-number').value;
  var expiryDate = document.getElementById('expiry-date').value;
  var cvv = document.getElementById('cvv').value;
  var amount = document.getElementById('amount').value;

  // Validate form data
  if (cardNumber.length !== 16 || isNaN(cardNumber)) {
    alert('Invalid card number');
    return;
  }

  if (expiryDate.length !== 5 || expiryDate.indexOf('/') !== 2) {
    alert('Invalid expiry date');
    return;
  }

  if (cvv.length !== 3 || isNaN(cvv)) {
    alert('Invalid CVV');
    return;
  }

  if (amount <= 0) {
    alert('Invalid amount');
    return;
  }

  // Process payment
  // Demo logic
  // (Replace this with your actual payment processing logic)
  alert('Payment successful!');
});
