import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const imagesList = document.querySelector(".gallery");

const galleryItem = galleryItems
  .map(
    (galleryItem) => `<a class="gallery__item" href="${galleryItem.original}">
  <img
    class="gallery__image"
    src="${galleryItem.preview}"
    alt="${galleryItem.description}"
    title="${galleryItem.description}"
  />
</a>`
  )
  .join("");

imagesList.innerHTML = galleryItem;

let gallery = new SimpleLightbox(".gallery a", { captionDelay: 250 });
//gallery.on("show.simplelightbox", function () {
// Do something…
//});
