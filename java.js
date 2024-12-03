const btnShowCard = document.getElementById("btn-show-card");
const cardContainer = document.getElementById("card-container");
const card = document.querySelector(".card");

btnShowCard.addEventListener("click", function(event) {
    cardContainer.classList.toggle("show");
    event.stopPropagation();  
});


document.addEventListener("click", function(event) {
    if (!card.contains(event.target) && !btnShowCard.contains(event.target)) {
        cardContainer.classList.remove("show");
    }
});
