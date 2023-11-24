// Products Array
const products = [
  {
    id: 1,
    title: "Café com Leite",
    price: 7.5,
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOv4xncELe0Z1RFVrgL3CWKn-T_SopTHdp_Wjg7Fmtk5OrkHuVs3CjLgj1Hrk8ke3uXFyks681B5-H7mgN1Z-eVJg2AUA5Ak_5EP6tA45ocpoMvuTju3_8flSzVj_Hjl5jaXXudUwYGKzSuM329KOoaV1erc3fB58QD3mnYaaJ-TeRgggjkiDCzd5x0Q0/s320/product-1.webp",
  },
  {
    id: 2,
    title: "Croissant de Queijo",
    price: 20,
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1rUonD8su7jhNYlWOitAZPM13dTpQxGq8gzqT1y9rA56oCYgljrfAbnGZt-9WRIlBMd6pEpMgK-DgyXFwXF5QW5b3n2ePrMvPiOCxtzWXkIH02LY994F-RMKsoGrbKYn3RX8q9vyK0c9DoT9mi3hWnZycYWPKflEFXixYjMmEpHVYE5KohKaVXdhyBKc/s320/product-2.jpg",
  },
  {
    id: 3,
    title: "Pão de Mel",
    price: 8.75,
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSXhhGid_fCa0X0aC_0nscPxceIXYAdVoOVq3F3G0uWGwNffjOCxqi-38UUzPkLC5oA04yc9jOOVTvB-XteYOJrb5vQRXEbdpn7L-F2kb5-KfzO8mOFTaQq83-4MWohdF2OUAWtv7YEaNqyl7oqtddxutCvmQh2yZcGr3qqJbS_5kCjKhCEkc9QuDbe1I/s320/product-3.webp",
  },
  {
    id: 4,
    title: "Hambúrguer de Carne",
    price: 25,
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTXZxyrh6jmPkmzpAJnk3RN3Q3EvyY1OvwNwgG7XohvmJKBjRYksKjdywIQVPcB4TGIoq411Ww_1lhayJi3GWKJLXSD8ed-JAefqT0PgiTCQbRJCsxwrqSM3Kv_bS8k-1WQMNqozr_jEePfDwAcusCbwuARRUOfjgWe7QF-7q8WrJ6FILuISL2VPlmFpg/s320/product-4.webp",
  },
  {
    id: 5,
    title: "Hambúrguer com ovo",
    price: 26.99,
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXnFIV6JLLazjHMk3REnASPQa7OfP9dsDVlvQwJVRo_EQDhlDApV0o7ZBLjeXxSNGKPVBd2cmUAVOrqMtpgIIYOrEGZlBZtYLlqjDaId9yd93cEdWxn0ss_vbpPXlmthbL7Fkr4sek0KtVlZxPGG93t79DwdjJ8wyBgV5cBvlw_iD_x1R79vEtHyqq-KU/s320/product-5.jpeg",
  },
  {
    id: 6,
    title: "Hot Dog com Fritas",
    price: 19,
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0FikhoDhRhDkAm6vpWNpBv0QRIJ5kRYuDAzwbeUYX-Cs4lJ0oRQYdAcJQkvIi5iWLUxzjNCIpJ7zfz_sHIm9SSgQT3MJqRlnTipY8h3JHiQVko4oBtB3g-HtUvomStXqVJQdPsguIz2WZNLfDavZELHrWlBM8gBoF7m18PWI6_H9pfF1pWuY8rhFDiNE/s320/product-6.webp",
  },
  {
    id: 7,
    title: "Petiscos",
    price: 12.99,
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvQr5DzWLvrD44acY-TzjK-_UsYVf-BoEfpRfsTB38OiE4OX3Er1EI_ykG-PNMhlUDB5chaekfgmHPxEgFVYlnHQzye5AocAepNW8N6zqjpzwHM6El2H-oIqcaScSNvDgIXRiNRTsYcbX7HHXu57t3dsAKp9oIJWp7sUoEZ32TTW0EH-FrZ3A-lJ4yI34/s320/product-7.webp",
  },
  {
    id: 8,
    title: "Fatia de Bolo",
    price: 14.99,
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhINlSn9Hx-meGsUFlTl9J-FofKGQ5iBKvRhgf7Leii4BqM9NAUDvdEL-WWxo-gWUON8YISUN5B8ZCuM4tnXX0AVkCpwkL9UsVqk2fAz5IYyobkfZIAt-ujsbulFoh304ymqkaIKp1bG91f4oV3otCHOBZBMfah6A0fsmwTupCxAdEayVN7I8xEND66NDo/s320/product-8.jpeg",
  },
];

// Get the products list and elements
const productList = document.getElementById("productList");
const cartItemsElement = document.getElementById("cartItems");
const cartTotalElement = document.getElementById("cartTotal");

// Store cart Items in Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

//  Render Products on Page
function renderProducts() {
  productList.innerHTML = products
    .map(
      (product) => `
    <div class="product">
    <img src="${product.image}" alt="${product.title}" class="product-img">
    <div class="product-info">
      <h2 class="product-title">${product.title}</h2>
      <p class="product-price">$${product.price.toFixed(2)}</p>
      <a class="add-to-cart" data-id="${product.id}">Add to Cart</a>
    </div>
  </div>
    `
    )
    .join("");
}

// Render Products On Cart Page
function renderCartItems() {
  cartItemsElement.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item">
              <img src="${item.image}" alt="${item.title}" />
              <div class="cart-item-info">
                <h2 class="cart-item-title">${item.title}</h2>
                <input
                  class="cart-item-quantity"
                  type="number"
                  name=""
                  min="1"
                  value="${item.quantity}"
                  data-id="${item.id}"
                />
              </div>
              <h2 class="cart-item-price">${item.price}</h2>
              <button class="remove-from-cart" data-id="${item.id}">Remove</button>
            </div>
    `
    )
    .join("");
}

// check if on cart page
if (window.location.pathname.includes("cart.html")) {
  renderCartItems();
} else {
  renderProducts();
}

renderProducts();
renderCartItems();
