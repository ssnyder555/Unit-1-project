let card = document.getElementsByClassName("card");
let cards = [...card];

// loop to add event listiner to each cards
for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", displayCard);
};

// toggles open and show class to display cards
var displayCard = function() {
  this.classList.toggle("open");
  this.classList.toggle("show");
  this.classList.toggle("disabled");

}
// Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
// deck of all cards in game
const deck = document.querySelector(".deck");

function startGame() {
  var shuffledCards = shuffle(cards);
  for (var i = 0; i < shuffledCards.length; i++) {
    [].forEach.call(shuffledCards, function(item) {
      deck.appendChild(item);
    });
  }
}

window.onload = startGame();

//add opened cards to OpenedCards list and check if cards are match or not
function cardOpen() {
  openedCards.push(this);
  var len = openedCards.length;
  if (len === 2) {
    moveCounter();
    if (openedCards[0].type === openedCards[1].type) {
      matched();
    } else {
      unmatched();
    }
  }
};

//for when cards match
function matched() {
  openedCards[0].classList.add("match");
  openedCards[1].classList.add("match");
  openedCards[0].classList.remove("show", "open");
  openedCards[1].classList.remove("show", "open");
  openedCards = [];
}

//for when cards don't match
function unmatched() {
  openedCards[0].classList.add("unmatched");
  openedCards[1].classList.add("unmatched");
  disable();
  setTimeout(function() {
    openedCards[0].classList.remove("show", "open", "unmatched");
    openedCards[1].classList.remove("show", "open", "unmatched");
    enable();
    openedCards = [];
  }, 1100);
}

//disable cards temporarily
function disable() {
  Array.prototype.filter.call(cards, function(card) {
    card.classList.add('disabled');
  });
}

//enable cards and disable matched cards
function enable() {
  Array.prototype.filter.call(cards, function(card) {
    card.classList.remove('disabled');
    for (var i = 0; i < matchedCard.length; i++) {
      matchedCard[i].classList.add("disabled");
    }
  });
}

function moveCounter() {
  moves++;
  counter.innerHTML = moves;

  // setting rates based on moves
  if (moves > 8 && moves < 12) {
    for (i = 0; i < 3; i++) {
      if (i > 1) {
        stars[i].style.visibility = "collapse";
      }
    }
  } else if (moves > 13) {
    for (i = 0; i < 3; i++) {
      if (i > 0) {
        stars[i].style.visibility = "collapse";
      }
    }
  }
}
//game timer
var second = 0,
  minute = 0;
var timer = document.querySelector(".timer");
var interval;

function startTimer() {
  interval = setInterval(function() {
    timer.innerHTML = minute + "mins " + second + "secs";
    second++;
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
}

function moveCounter() {
  moves++;
  counter.innerHTML = moves;
  //start timer on first move
  if (moves == 1) {
    second = 0;
    minute = 0;
    hour = 0;
    startTimer();
  };
  startGame(){
  . . .
  //reset timer
  var timer = document.querySelector(".timer");
  timer.innerHTML = "0 mins 0 secs";
  clearInterval(interval);
  }
  //My restart button
  <div class="restart" onclick="startGame()">
     <i class="fa fa-repeat"></i>
  </div>
  StartGame(){
     // shuffle deck
     cards = shuffle(cards);
     // remove all existing classes from each card
    for (var i = 0; i < cards.length; i++){
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match",            "disabled");
     }
     // reset moves
     moves = 0;
     counter.innerHTML = moves;
    // reset star rating
    for (var i= 0; i < stars.length; i++){
        stars[i].style.color = "#FFD700";
        stars[i].style.visibility = "visible";
    }
    //reset timer
    var timer = document.querySelector(".timer");
    timer.innerHTML = "0 mins 0 secs";
    clearInterval(interval);
}
//modal
let modal = document.getElementById("popup1")
//stars list
 let starsList = document.querySelectorAll(".stars li");
//close icon in modal
 let closeicon = document.querySelector(".close");
//congratulations when all cards match, show modal and moves, time and rating
function congratulations(){
    if (matchedCard.length == 16){
        clearInterval(interval);
        finalTime = timer.innerHTML;
    //show congratulations modal
    modal.classList.add("show");
    //declare star rating variable
    var starRating = document.querySelector(".stars").innerHTML;
    //showing move, rating, time on modal
    document.getElementById("finalMove").innerHTML = moves;
    document.getElementById("starRating").innerHTML = starRating;
    document.getElementById("totalTime").innerHTML = finalTime;
    //closeicon on modal
    closeModal();
    };
}
//close icon on modal
function closeModal(){
    closeicon.addEventListener("click", function(e){
        modal.classList.remove("show");
        startGame();
    });
}
//for player to play Again
function playAgain(){
    modal.classList.remove("show");
    startGame();
}
