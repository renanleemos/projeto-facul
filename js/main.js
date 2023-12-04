// // Products Array
// let products = [
//   {
//     id: 1,
//     title: "Café com Leite",
//     price: 7.5,
//     image:
//       "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOv4xncELe0Z1RFVrgL3CWKn-T_SopTHdp_Wjg7Fmtk5OrkHuVs3CjLgj1Hrk8ke3uXFyks681B5-H7mgN1Z-eVJg2AUA5Ak_5EP6tA45ocpoMvuTju3_8flSzVj_Hjl5jaXXudUwYGKzSuM329KOoaV1erc3fB58QD3mnYaaJ-TeRgggjkiDCzd5x0Q0/s320/product-1.webp",
//   },
//   {
//     id: 2,
//     title: "Croissant de Queijo",
//     price: 20,
//     image:
//       "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1rUonD8su7jhNYlWOitAZPM13dTpQxGq8gzqT1y9rA56oCYgljrfAbnGZt-9WRIlBMd6pEpMgK-DgyXFwXF5QW5b3n2ePrMvPiOCxtzWXkIH02LY994F-RMKsoGrbKYn3RX8q9vyK0c9DoT9mi3hWnZycYWPKflEFXixYjMmEpHVYE5KohKaVXdhyBKc/s320/product-2.jpg",
//   },
//   {
//     id: 3,
//     title: "Pão de Mel",
//     price: 8.75,
//     image:
//       "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSXhhGid_fCa0X0aC_0nscPxceIXYAdVoOVq3F3G0uWGwNffjOCxqi-38UUzPkLC5oA04yc9jOOVTvB-XteYOJrb5vQRXEbdpn7L-F2kb5-KfzO8mOFTaQq83-4MWohdF2OUAWtv7YEaNqyl7oqtddxutCvmQh2yZcGr3qqJbS_5kCjKhCEkc9QuDbe1I/s320/product-3.webp",
//   },
//   {
//     id: 4,
//     title: "Hambúrguer de Carne",
//     price: 25,
//     image:
//       "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTXZxyrh6jmPkmzpAJnk3RN3Q3EvyY1OvwNwgG7XohvmJKBjRYksKjdywIQVPcB4TGIoq411Ww_1lhayJi3GWKJLXSD8ed-JAefqT0PgiTCQbRJCsxwrqSM3Kv_bS8k-1WQMNqozr_jEePfDwAcusCbwuARRUOfjgWe7QF-7q8WrJ6FILuISL2VPlmFpg/s320/product-4.webp",
//   },
//   {
//     id: 5,
//     title: "Hambúrguer com ovo",
//     price: 26.99,
//     image:
//       "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXnFIV6JLLazjHMk3REnASPQa7OfP9dsDVlvQwJVRo_EQDhlDApV0o7ZBLjeXxSNGKPVBd2cmUAVOrqMtpgIIYOrEGZlBZtYLlqjDaId9yd93cEdWxn0ss_vbpPXlmthbL7Fkr4sek0KtVlZxPGG93t79DwdjJ8wyBgV5cBvlw_iD_x1R79vEtHyqq-KU/s320/product-5.jpeg",
//   },
//   {
//     id: 6,
//     title: "Hot Dog com Fritas",
//     price: 19,
//     image:
//       "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0FikhoDhRhDkAm6vpWNpBv0QRIJ5kRYuDAzwbeUYX-Cs4lJ0oRQYdAcJQkvIi5iWLUxzjNCIpJ7zfz_sHIm9SSgQT3MJqRlnTipY8h3JHiQVko4oBtB3g-HtUvomStXqVJQdPsguIz2WZNLfDavZELHrWlBM8gBoF7m18PWI6_H9pfF1pWuY8rhFDiNE/s320/product-6.webp",
//   },
//   {
//     id: 7,
//     title: "Petiscos",
//     price: 12.99,
//     image:
//       "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvQr5DzWLvrD44acY-TzjK-_UsYVf-BoEfpRfsTB38OiE4OX3Er1EI_ykG-PNMhlUDB5chaekfgmHPxEgFVYlnHQzye5AocAepNW8N6zqjpzwHM6El2H-oIqcaScSNvDgIXRiNRTsYcbX7HHXu57t3dsAKp9oIJWp7sUoEZ32TTW0EH-FrZ3A-lJ4yI34/s320/product-7.webp",
//   },
//   {
//     id: 8,
//     title: "Fatia de Bolo",
//     price: 14.99,
//     image:
//       "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhINlSn9Hx-meGsUFlTl9J-FofKGQ5iBKvRhgf7Leii4BqM9NAUDvdEL-WWxo-gWUON8YISUN5B8ZCuM4tnXX0AVkCpwkL9UsVqk2fAz5IYyobkfZIAt-ujsbulFoh304ymqkaIKp1bG91f4oV3otCHOBZBMfah6A0fsmwTupCxAdEayVN7I8xEND66NDo/s320/product-8.jpeg",
//   },
// ];

// Cart Open Close
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// Open Cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};
// Close Cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

// Making add to cart
// Cart Working JS
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// Making Function
function ready() {
  // Remove Item From cart
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  // Quantity Change
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  // Add to cart
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
}

//  Remove Cart Item
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}

// Quantity Change
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}

// add cart function
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement.parentElement;
  var title = shopProducts.getElementsByClassName("product-title").innerText;
  var price = shopProducts.getElementsByClassName("price").innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  updateTotal();
}

function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("Você já adicionou este item ao seu carrinho.");
      return;
    }
  }
  var cartBoxContent = `
  <img src="${productImg}" alt="" class="cart-img" />
  <div class="detail-box">
    <div class="cart-product-title">${title}</div>
    <div class="cart-price">${price}</div>
    <input
      type="number"
      name=""
      id=""
      value="1"
      class="cart-quantity"
    />
  </div>
  <i class="bx bx-trash-alt cart-remove"></i>`;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
}

//  Update Total
function updateTotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total += price * quantity;
  }
  // if price contain some cents
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}
