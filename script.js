const products = document.querySelector("#products");
const productsDropDown = document.querySelector("#productsDropDown");

products.addEventListener("mouseover", () => {
  productsDropDown.style.display = "block";
});

products.addEventListener("mouseout", () => {
  productsDropDown.style.display = "none";
});
