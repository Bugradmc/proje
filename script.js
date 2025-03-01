function ShopNow(){
    window.location.href='http://127.0.0.1:5500/product.html';
}


<<<<<<< HEAD
<<<<<<< HEAD
=======
// Artı ikonunu seç
const addIcon = document.querySelector('.plus-icon');
const cartCount = document.getElementById('cart-count');
=======
>>>>>>> 8b6154b132f5387c71afb75d941bc5146b0317fa

  const plusIcons = document.querySelectorAll('.plus-icon');
  const cartCount = document.getElementById('cart-count');

<<<<<<< HEAD
// Artı ikonu tıklanıldığında sepet sayısını artır
addIcon.addEventListener('click', function() {
  // Eğer sayı 9'dan küçükse, artır
  if (count < 9) {
    count++;
    cartCount.textContent = count; // Sepet sayısını güncelle
  }
});
>>>>>>> 954808b6697819cfd014cb442914c780e1bee6e3
=======

  plusIcons.forEach(icon => {
    icon.addEventListener('click', () => {
     
      let currentCount = cartCount.textContent;

    
      if (currentCount < 9) {
        cartCount.textContent = ++currentCount;
      }
    });
  });
>>>>>>> 8b6154b132f5387c71afb75d941bc5146b0317fa
