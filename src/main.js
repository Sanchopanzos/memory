import {images} from "./data.js"

console.log("Hello, New Eridu");

const container = document.querySelector(".container"); // находит на странице элемент с классом container

images.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    
    const img = document.createElement("img");
    img.src = item.url;
    img.alt = "";

    card.append(img);
    container.append(card);

    card.addEventListener("click", ()=>{
    card.classList.toggle("card-show");
    setTimeout(() => {
        card.classList.toggle("card-show");
    }, 3000);
    })
});