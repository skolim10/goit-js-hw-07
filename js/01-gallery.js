import { galleryItems } from "./gallery-items.js";
// Change code below this line
const imagesList = document.querySelector(".gallery");
const images = [];

galleryItems.forEach((img) => {
  const divItem = document.createElement("div");
  divItem.classList.add("gallery__item");

  const aItem = document.createElement("a");
  aItem.href = img.original;
  aItem.classList.add("gallery__link");
  aItem.insertAdjacentHTML(
    "beforeend",
    `<img class="gallery__image" src=${img.preview} data-source=${img.original} alt=${img.description}>`
  );
  divItem.appendChild(aItem);

  images.push(divItem);
});
imagesList.append(...images);

imagesList.addEventListener("click", imgClick);

function imgClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.getAttribute(
      "data-source"
    )}" width="800" height="600">`);

  instance.show();

  imagesList.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}

console.log(galleryItems);
