console.log('working');
// cards array holds all cards
let card = document.getElementsByClassName("card");
let cards = [...card];
// loop to add event listeners to each card
for (var i = 0; i < cards.length; i++){
   cards[i].addEventListener("click", displayCard);
};
