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
  else if(label==="hg") {
    title = "Hero Genesis";
    description = "Hero genesis is an open platform for RPG players and Dungeon Masters to generate and exchnage ideas.";
    deployLink = "https://lit-reaches-81284.herokuapp.com/";
    codeLink = "https://github.com/Lamuel27/Hero-Genesis";
  }
  else if(label==="burger") {
    title = "Eat-Da-Burger";
    description = "A demonstration of Express Handlebars, MySQL, and Express. Create burgers and devour them.";
    deployLink = "https://blooming-chamber-53517.herokuapp.com/";
    codeLink = "https://github.com/rehlingera/burger";
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
  else if(label==="liri") {
    title = "LIRI Bot";
    description = "A bot for the Git Bash console that performs API calls to OMDB, Spotify and BandsInTown. This bot will take user input and display concert dates and venues for bands, Spotify search results for songs and information for movie titles.";
    deployLink = "https://github.com/rehlingera/liri-node-app";
    codeLink = "https://github.com/rehlingera/liri-node-app";
  }
  else if(label==="friendFinder") {
    title = "FriendFinder";
    description = "A website that matches the user with a friend based on a personality quiz.";
    deployLink = "https://warm-dawn-60945.herokuapp.com/";
    codeLink = "https://github.com/rehlingera/FriendFinder";
  }
  else if(label==="bamazon") {
    title = "Bamazon";
    description = "A console app masquerading as an online store. Some of the items appear to be cursed.";
    deployLink = "https://github.com/rehlingera/bamazon";
    codeLink = "https://github.com/rehlingera/bamazon";
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