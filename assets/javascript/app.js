document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
});

$(document).on("click", ".carousel-item", function() {
  console.log("hello");
  var label = this.id;
  var description = "";
  var title = "";

  if(label==="hangman") {
    title = "Hangman: Dinosaur Edition";
    description = "This is a game of hangman coded in javascript, with a dinosaur theme. Use the keyboard to navigate and play the game. Winning a round will produce a bonus picture of a dinosaur and a fun fact about it! Play as many times as you like, and the game will keep your score.";
  }
  else if(label==="trivia") {
    title = "Video Game Trivia";
    description = "A trivia game themed on video games and using a skeumorphic design. The questions span multiple time periods, consoles and genres, so it may get challenging! Use the mouse to play the game. Answer 20 randomized questions and get your result.";
  }
  else if(label==="rpg") {
    title = "Lord of the Rings RPG";
    description = "A Lord of the Rings themed fighting RPG. Use the mouse to select your character. Then pick an enemy. Use the sword button in the middle to battle! Your attack power will increase with each strike. Defeat all of the enemies to win the game.";
  }
  else if(label==="boredom") {
    title = "BoreDom";
    description = "BoreDom is an API app that will take a search term and display results from Google Books, Open Movie Database and Edamam (a recipe database). When a search is executed, the search term is logged in Google FireBase and called into a button on the app for future use.";
  };

  $("#descriptionArea").empty();
  var descriptionDiv = $("<div>");
  descriptionDiv.append("<h3>" + title + "</h3><p>" + description + "</p>")
  $("#descriptionArea").append(descriptionDiv);
})