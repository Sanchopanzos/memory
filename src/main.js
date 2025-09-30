import { images } from "./data.js"

images.sort(() => Math.random() - 0.5);

console.log("Hello, New Eridu");

const container = document.querySelector(".container"); // находит на странице элемент с классом container

let visibleCards = [];

images.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("card" + item.id)

    const img = document.createElement("img");
    img.src = item.url;
    img.alt = "";

    card.append(img);
    container.append(card);

    card.addEventListener("click", () => {
        if (visibleCards.length < 2) {
            card.classList.toggle("card-show");

            visibleCards.push(item);

            if(visibleCards.length == 2)
            {
                setTimeout(() => {
                    card.classList.toggle("card-show");
                    document.querySelector(".card"+visibleCards[0].id).classList.remove("card-show"); 
                    visibleCards = [];
                }, 3000);
            }
        }
    })
});