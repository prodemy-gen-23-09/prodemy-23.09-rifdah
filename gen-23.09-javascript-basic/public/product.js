function redirectToProductDetail(productId, productName, productPrice, productImage) {
  var productDetailUrl = "previewproduct.html?id=" + productId + "&name=" + encodeURIComponent(productName) + "&price=" + encodeURIComponent(productPrice) + "&image=" + encodeURIComponent(productImage);
  window.location.href = productDetailUrl;
}

//Function Untuk Menangkap Data Dari Halaman List Product
var urlParams = new URLSearchParams(window.location.search);
var productId = urlParams.get("id");
var productName = urlParams.get("name");
var productPrice = urlParams.get("price");
var productImage = urlParams.get("image");

// document.getElementById("productName").innerText = productName;
// document.getElementById("productPrice").innerText = productPrice;
// document.getElementById("mainImage").src = productImage;
document.querySelector("#productName").innerText = productName;
document.querySelector("#productPrice").innerText = productPrice;
document.querySelector("#mainImage").src = productImage;