function ShopNow(){
    window.location.href='http://127.0.0.1:5500/product.html';
}


const addIcon = document.querySelector('.plus-icon');
const cartCount = document.getElementById('cart-count');

  const plusIcons = document.querySelectorAll('.plus-icon');
  const cartCount = document.getElementById('cart-count');


addIcon.addEventListener('click', function() {
  if (count < 9) {
    count++;
    cartCount.textContent = count;
  }
});

  plusIcons.forEach(icon => {
    icon.addEventListener('click', () => {
     
      let currentCount = cartCount.textContent;

    
      if (currentCount < 9) {
        cartCount.textContent = ++currentCount;
      }
    });
  });
