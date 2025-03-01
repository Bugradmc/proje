function ShopNow(){
    window.location.href='http://127.0.0.1:5500/product.html';
}



  const plusIcons = document.querySelectorAll('.plus-icon');
  const cartCount = document.getElementById('cart-count');


  plusIcons.forEach(icon => {
    icon.addEventListener('click', () => {
     
      let currentCount = cartCount.textContent;

    
      if (currentCount < 9) {
        cartCount.textContent = ++currentCount;
      }
    });
  });