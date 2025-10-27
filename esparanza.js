function myFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode")
}

    function addToCart(name, price, image) {
      const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
      const existing = cart.find(item => item.name === name);

      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ name, price, image, quantity: 1 });
      }

      localStorage.setItem('cartItems', JSON.stringify(cart));
      updateDisplay();
    }

    function updateDisplay() {
      const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
      // Count total quantity of all items
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      document.getElementById('itemCount').textContent = totalItems;
    }

    function goToCart() {
      window.location.href = "cart.html";
    }

  //reset
  /*
  function resetCalculation() {
    const countDisplay = document.querySelector('.count-display')
    const resetButton = document.querySelector('.price-display');
    clickCount = 0;
    totalSum = 0;
    countDisplay.innerHTML = `${clickCount}`,`${clickCount}`;
    resetButton.innerHTML = `${totalSum}`,`${countDisplay}`;
    localStorage.removeItem('count-display');
    localStorage.removeItem('price-display');
    updateDisplay();
  }*/