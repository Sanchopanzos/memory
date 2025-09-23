console.log("Hello, New Eridu");
const cards = document.querySelectorAll(".card");
for (let card of cards){
    card.addEventListener("click", ()=>{
        card.classList.add("card-show");
    })
}