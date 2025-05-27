document.addEventListener('DOMContentLoaded', () => {
  renderCart();
});

function renderCart() {
  const cartList = document.getElementById('cart-list');
  const totalElement = document.getElementById('total');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  cartList.innerHTML = ''; 
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `<strong>${item.name}</strong><br>
      Price: ₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}
     <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;"><br>
      <button class="remove" data-index="${index}">Remove</button>`;
    cartList.appendChild(div);
  });

  totalElement.textContent = `Total: ₹${total}`;

 
  document.querySelectorAll('.remove').forEach(btn => {
    btn.addEventListener('click', function () {
      const index = this.dataset.index;
      removeItem(index);
    });
  });
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart(); 
}
