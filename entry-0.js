document.addEventListener("DOMContentLoaded", function () {
    shuffleCards();
  });

  function shuffleCards() {
    var cardsContainer = document.querySelector('.cards');
    var cards = document.querySelectorAll('.card');

    cardsContainer.innerHTML = ""; // Clear the container

    // Convert NodeList to Array for shuffling
    cards = Array.from(cards);

    // Shuffle the array of cards
    cards = shuffleArray(cards);

    // Append the shuffled cards back to the container
    cards.forEach(function (card) {
      cardsContainer.appendChild(card);
    });
  }

  function shuffleArray(array) {
    var currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }