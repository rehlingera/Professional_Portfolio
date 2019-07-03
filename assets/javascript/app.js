var moved = false;

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
  window.scrollTo(0, 0);
  dragElement(document.getElementById("glasses"));

  setInterval(function () {
    if (moved === false) {
      glassesAnimation();
    };
  }, 2000)
});

document.addEventListener('DOMContentLoaded', function () {
  cloudsMove();
});

document.addEventListener('scroll', function () {
  var elem1 = document.getElementById("cloud");
  var elem2 = document.getElementById("cloud2");
  elem1.style.top = (0 - window.scrollY/4) + "px";
  elem2.style.top = (0 - window.scrollY/4) + "px";
})

function cloudsMove() {
  setTimeout(function () {
    var elem1 = document.getElementById("cloud");
    var elem2 = document.getElementById("cloud2");
    elem1.style.left = 100 + "%";
    elem2.style.left = 0 + "%";
  }, 0);
};

function dragElement(elmnt) {
  console.log("drag loaded")
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, t = 0, l = 0;
  elmnt.onmousedown = dragMouseDown;
  elmnt.ontouchstart = dragMouseDown;

  function dragMouseDown(e) {
    console.log("clicked");
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
    document.ontouchend = closeDragElement;
    document.ontouchmove = elementDrag;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      backgroundChange();
      moved = true;
    }
  }

  function elementDrag(e) {
    e = e || window.event;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      pos1 = pos3 - e.touches[0].clientX;
      pos2 = pos4 - e.touches[0].clientY;
      pos3 = e.touches[0].clientX;
      pos4 = e.touches[0].clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      t = elmnt.offsetTop - pos2
      l = elmnt.offsetLeft - pos1
    }
    else {
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      t = elmnt.offsetTop - pos2
      l = elmnt.offsetLeft - pos1
      if (l > 655 && l < 665 && t > 300 && t < 320) {
        backgroundChange();
      }
      if (l < 655 || l > 665 || t < 300 || t > 320) {
        backgroundChangeBack();
      }
      console.log(l + " " + t)
    }
  }

  function closeDragElement() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      backgroundChangeBack();
    }
    document.onmouseup = null;
    document.onmousemove = null;
    document.ontouchstart = null;
    document.ontouchmove = null;
  }

  elmnt.onmouseup = function () {
    if (l > 655 && l < 665 && t > 300 && t < 320) {
      console.log("t=" + t + " l=" + l);
      console.log("nice");
      moved = true;
      console.log(moved);
      bouncyAnimation();
      setTimeout(function () {
        window.scrollTo(0, 320);
      }, 250);
    };
  };
};

function backgroundChange() {
  document.getElementById("bckgrnd").style.opacity = 1;
}

function backgroundChangeBack() {
  document.getElementById("bckgrnd").style.opacity = 0;
}

function bouncyAnimation() {
  document.getElementById("bodyFooterWrapper").style.top = 675 + "px"
  setTimeout(function () {
    document.getElementById("bodyFooterWrapper").style.top = 650 + "px"
  }, 500)
}

function glassesAnimation() {
  document.getElementById("glasses").style.transform = "rotate(5deg)";
  setTimeout(function () {
    document.getElementById("glasses").style.transform = "rotate(-5deg)";
  }, 250);
  setTimeout(function () {
    document.getElementById("glasses").style.transform = "rotate(0deg)";
  }, 500)
}

$(document).on("mousedown", ".carousel-item", function () {
  console.log("hello");
  var label = this.id;
  var description = "";
  var title = "";

  if (label === "hangman") {
    title = "Hangman: Dinosaur Edition";
    description = "This is a game of hangman coded in javascript, with a dinosaur theme. Use the keyboard to navigate and play the game. Winning a round will produce a bonus picture of a dinosaur and a fun fact about it! Play as many times as you like, and the game will keep your score.";
    deployLink = "https://rehlingera.github.io/Word-Guess-Game";
    codeLink = "https://github.com/rehlingera/Word-Guess-Game";
  }
  else if (label === "sc") {
    title = "scriptr";
    description = "A React application that helps the user learn and study different coding languages. Created in partnership with Sam Rehlinger.";
    deployLink = "https://powerful-chamber-64882.herokuapp.com/";
    codeLink = "https://github.com/Lamuel27/scriptr";
  }
  else if (label === "bk") {
    title = "BookKeeper";
    description = "A reading list manager built in React, connected to the Google Books API.";
    deployLink = "https://obscure-lowlands-48939.herokuapp.com/";
    codeLink = "https://github.com/rehlingera/Google-Books-Search";
  }
  else if (label === "cc") {
    title = "Cat Consoler";
    description = "A clicky game built in React.";
    deployLink = "https://rehlingera.github.io/Clicky-Game/";
    codeLink = "https://github.com/rehlingera/Clicky-Game/";
  }
  else if (label === "rsp") {
    title = "Real Scraped Politics";
    description = "A web scraper designed to pull the latest articles from Real Clear Politics.";
    deployLink = "https://fast-inlet-68980.herokuapp.com/";
    codeLink = "https://github.com/rehlingera/Homework-16";
  }
  else if (label === "hg") {
    title = "Hero Genesis";
    description = "Hero genesis is an open platform for RPG players and Dungeon Masters to generate and exchnage ideas.";
    deployLink = "https://lit-reaches-81284.herokuapp.com/";
    codeLink = "https://github.com/Lamuel27/Hero-Genesis";
  }
  else if (label === "burger") {
    title = "Eat-Da-Burger";
    description = "A demonstration of Express Handlebars, MySQL, and Express. Create burgers and devour them.";
    deployLink = "https://blooming-chamber-53517.herokuapp.com/";
    codeLink = "https://github.com/rehlingera/burger";
  }
  else if (label === "trivia") {
    title = "Video Game Trivia";
    description = "A trivia game themed on video games and using a skeumorphic design. The questions span multiple time periods, consoles and genres, so it may get challenging! Use the mouse to play the game. Answer 20 randomized questions and get your result.";
    deployLink = "https://rehlingera.github.io/TriviaGame";
    codeLink = "https://github.com/rehlingera/TriviaGame";
  }
  else if (label === "rpg") {
    title = "Lord of the Rings RPG";
    description = "A Lord of the Rings themed fighting RPG. Use the mouse to select your character. Then pick an enemy. Use the sword button in the middle to battle! Your attack power will increase with each strike. Defeat all of the enemies to win the game.";
    deployLink = "https://rehlingera.github.io/unit-4-game";
    codeLink = "https://github.com/rehlingera/unit-4-game";
  }
  else if (label === "liri") {
    title = "LIRI Bot";
    description = "A bot for the Git Bash console that performs API calls to OMDB, Spotify and BandsInTown. This bot will take user input and display concert dates and venues for bands, Spotify search results for songs and information for movie titles.";
    deployLink = "https://github.com/rehlingera/liri-node-app";
    codeLink = "https://github.com/rehlingera/liri-node-app";
  }
  else if (label === "friendFinder") {
    title = "FriendFinder";
    description = "A website that matches the user with a friend based on a personality quiz.";
    deployLink = "https://warm-dawn-60945.herokuapp.com/";
    codeLink = "https://github.com/rehlingera/FriendFinder";
  }
  else if (label === "bamazon") {
    title = "Bamazon";
    description = "A console app masquerading as an online store. Some of the items appear to be cursed.";
    deployLink = "https://github.com/rehlingera/bamazon";
    codeLink = "https://github.com/rehlingera/bamazon";
  }
  else if (label === "boredom") {
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