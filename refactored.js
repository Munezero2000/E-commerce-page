const product = {
  images: [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
  ],
  title: "Fall Limited Edition",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 125,
};

// Utility function to update product details
function updateProductDetails() {
  document
    .querySelector("#prod-image")
    .setAttribute("src", product.images[index]);
  document.querySelector("#title").textContent = product.title;
  document.querySelector("#price").textContent = `$${product.price}.00`;
}

// Menu toggle
document.querySelectorAll("#menu-icon, #close").forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelector("#menu").classList.toggle("hidden");
  });
});

// Image navigation
let index = 0;
document
  .querySelectorAll("#next, #previous, .img-slider")
  .forEach((element) => {
    element.addEventListener("click", () => {
      if (element.id === "next" || element.id === "previous") {
        index =
          element.id === "next"
            ? (index + 1) % product.images.length
            : (index - 1 + product.images.length) % product.images.length;
      } else {
        index = Array.from(document.querySelectorAll(".img-slider")).indexOf(
          element
        );
      }
      updateProductDetails();
    });
  });

// Quantity adjustment
let quantity = 0;
document.querySelectorAll("#minus, #plus").forEach((element) => {
  element.addEventListener("click", () => {
    if (element.id === "minus" && quantity > 0) {
      quantity--;
    } else if (element.id === "plus") {
      quantity++;
    }
    document.querySelector("#quantity").textContent = quantity;
  });
});

// Initialize product details
updateProductDetails();

// Show/hide banner
const banner = document.querySelector(".banner");
document.querySelector("#k").addEventListener("click", () => {
  banner.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
  const menu = document.querySelector("#cart-div");
  if (menu.classList.contains("block")) {
    menu.classList.add("hidden");
  }

  // Check if the click target is outside of the menu
  if (!menu.contains(event.target) && event.target.id !== "menu-icon") {
    menu.classList.add("hidden");
  }
});
