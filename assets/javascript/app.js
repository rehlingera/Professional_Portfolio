document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
});

$(document).on("mousedown", ".carousel-item", function() {
  console.log("hello");
  var label = this.id;
  var description = "";
  var title = "";

  if(label==="hangman") {
    title = "Hangman: Dinosaur Edition";
    description = "This is a game of hangman coded in javascript, with a dinosaur theme. Use the keyboard to navigate and play the game. Winning a round will produce a bonus picture of a dinosaur and a fun fact about it! Play as many times as you like, and the game will keep your score.";
    deployLink = "https://rehlingera.github.io/Word-Guess-Game";
    codeLink = "https://github.com/rehlingera/Word-Guess-Game";
  }
  else if(label==="trivia") {
    title = "Video Game Trivia";
    description = "A trivia game themed on video games and using a skeumorphic design. The questions span multiple time periods, consoles and genres, so it may get challenging! Use the mouse to play the game. Answer 20 randomized questions and get your result.";
    deployLink = "https://rehlingera.github.io/TriviaGame";
    codeLink = "https://github.com/rehlingera/TriviaGame";
  }
  else if(label==="rpg") {
    title = "Lord of the Rings RPG";
    description = "A Lord of the Rings themed fighting RPG. Use the mouse to select your character. Then pick an enemy. Use the sword button in the middle to battle! Your attack power will increase with each strike. Defeat all of the enemies to win the game.";
    deployLink = "https://rehlingera.github.io/unit-4-game";
    codeLink = "https://github.com/rehlingera/unit-4-game";
  }
  else if(label==="boredom") {
    title = "BoreDom";
    description = "BoreDom is an API app that will take a search term and display results from Google Books, Open Movie Database and Edamam (a recipe database). When a search is executed, the search term is logged in Google FireBase and called into a button on the app for future use.";
    deployLink = "https://rehlingera.github.io/Project-1";
    codeLink = "https://github.com/rehlingera/Project-1";
  };

  $("#descriptionArea").empty();
  var descriptionDiv = $("<div>");
  descriptionDiv.append("<h5>" + title + "</h5><p>" + description + "</p><p><a href=" + deployLink + " target='_blank'>Go to the site</a> | <a href=" + codeLink + " target='_blank'>Check out the code</a></p>")
  $("#descriptionArea").append(descriptionDiv);
})