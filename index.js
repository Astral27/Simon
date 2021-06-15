var userClickedPattern = [];
var choosenColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var started = false;
var level = 0;

function check(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextsequenc();
      }, 1000);
    }
  }
  else
  {
    $(".title-head").html("Game Over!!</br>Press any key to restart");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");},200);
      var wrong= new Audio("sounds/wrong.mp3");
      wrong.play();

      startOver();
  }
}

$(document).on("touchstart", function() {
  if (!started) {
    $(".title-head").text("level " + level);
    nextsequenc();
    started = true;
  }
});

$(document).on("keypress", function() {
  if (!started) {
    $(".title-head").text("level " + level);
    nextsequenc();
    started = true;
  }
});

function nextsequenc() {
 userClickedPattern = [];
  level++;

  $(".title-head").text("level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomColor = choosenColor[randomNumber];
  gamePattern.push(randomColor);
  $("#" + randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playsound(randomColor);
}


$(".btn").on("click", handler);

function handler() {
  var userChoosenColor = $(this).attr("id");
  userClickedPattern.push(userChoosenColor);
  playsound(userChoosenColor);
  animate(userChoosenColor);

  check(userClickedPattern.length - 1);
}
// $(".btn").click(function() {
//
//   var userChosenColour = this.id;
//   userClickedPattern.push(userChosenColour);
//
//   playSound(this.id);
//   animatePress(this.id);
// });

function playsound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animate(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function startOver()
{
  level = 0;
  gamePattern = [];
  started = false;
}
