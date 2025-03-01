function ShopNow(){
    window.location.href='http://127.0.0.1:5500/product.html';
}


<<<<<<< HEAD
=======
// Artı ikonunu seç
const addIcon = document.querySelector('.plus-icon');
const cartCount = document.getElementById('cart-count');

// Başlangıç sayısı
let count = 0;

// Artı ikonu tıklanıldığında sepet sayısını artır
addIcon.addEventListener('click', function() {
  // Eğer sayı 9'dan küçükse, artır
  if (count < 9) {
    count++;
    cartCount.textContent = count; // Sepet sayısını güncelle
  }
});
>>>>>>> 954808b6697819cfd014cb442914c780e1bee6e3
