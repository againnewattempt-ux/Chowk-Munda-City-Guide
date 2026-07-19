const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {
  const value = this.value.toLowerCase();

  const shops = document.querySelectorAll(".shop-card");

  shops.forEach(shop => {
    const text = shop.innerText.toLowerCase();

    if (text.includes(value)) {
      shop.style.display = "flex";
    } else {
      shop.style.display = "none";
    }
  });
});
