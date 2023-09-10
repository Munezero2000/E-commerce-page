let product = {
  images: [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
  ],
  title: "Fall Limited Edition",

  description: `These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.`,

  price: 125,
};
// Close and Open the menu
document.querySelector("#menu-icon").addEventListener("click", () => {
  document.querySelector("#menu").classList.toggle("hidden");
});
document.querySelector("#close").addEventListener("click", () => {
  document.querySelector("#menu").classList.toggle("hidden");
});

// CODE TO RENDER NEXT IMAGE ON CLICK
let index = 0;
function rotate() {}

document.querySelector("#next").addEventListener("click", () => {
  if (index === product.images.length - 1) {
    index = 0;
  }
  console.log(index);
  document
    .querySelector("#prod-image")
    .setAttribute("src", `${product.images[index]}`);
  index++;
});

document.querySelector("#previous").addEventListener("click", () => {
  if (index === product.images.length - 1) {
    index = 0;
  }
  console.log(index);
  document
    .querySelector("#prod-image")
    .setAttribute("src", `${product.images[index]}`);
  index++;
});

document.querySelectorAll(".img-slider").forEach((img, index) => {
  img.addEventListener("click", (e) => {
    document
      .querySelector("#prod-image")
      .setAttribute("src", `${product.images[index]}`);
    img.classList.add("border-2");
  });
});

// CODE TO INCREASE OR DECREASE QUANTITY ORDERED
let quantity = 0;
document.querySelector("#minus").addEventListener("click", () => {
  if (quantity === 0) {
    quantity = 0;
  } else {
    quantity--;
    document.querySelector("#quantity").textContent = quantity;
    console.log(quantity);
  }
});
document.querySelector("#plus").addEventListener("click", () => {
  quantity++;
  document.querySelector("#quantity").textContent = quantity;
  console.log(quantity);
});
document.querySelector("#quantity").textContent = quantity;

// CODE TO ADD DATA TO PRODUCT

document
  .querySelector("#prod-image")
  .setAttribute("src", `${product.images[index]}`);
document.querySelector("#title").textContent = product.title;
document.querySelector("#price").textContent = `$${product.price}.00`;

let banner = document.querySelector(".banner");
document.querySelector("#k").addEventListener("click", () => {
  banner.classList.toggle("hidden");
});
