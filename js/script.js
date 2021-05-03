var totalPoints;
var popupPoints = document.querySelector(".popupPoints");
var i = 0, j = 0;
var mainMenu = document.querySelector(".mainMenu");
var mainGame = document.querySelector(".mainGame");
var background = document.querySelector("#background");
var setting = document.querySelector(".settings");
var bgMusic = document.querySelector("#bgMusic");
var musicIcon = document.querySelector("#musicOnImg");
var clickSound = document.querySelector("#clickSound");
var buttons = document.querySelectorAll("button");
var popupExit = document.querySelector(".popupExit");
var allBtn = document.querySelectorAll("button");
////////////////////////////////////////////////////
const options = ["rock", "paper", "scissor"];
const ans = document.querySelector("#ans");
const yourChoice = document.querySelector("#yourChoice");
const comChoice = document.querySelector("#comChoice");
var userPoint = document.querySelector("#yourPoint");
var comPoint = document.querySelector("#comPoint");
var shakeUser = document.querySelector(".animationUser");
var shakeCom = document.querySelector(".animationCom");
var popupRestart = document.querySelector(".popupRestart");
var winner = document.querySelector("#winner");

function start() {
  popupPoints.style.display = "block";
}

function settings() {
  mainMenu.style.display = "none";
  setting.style.display = "block";
}
function clickPlay(){
  clickSound.play();
}
function music() {
  if (bgMusic.paused) {
    bgMusic.play();
    musicIcon.src = "img/music_on_white.png";
  }
  else {
    bgMusic.pause();
    musicIcon.src = "img/music_off_white.png";
  }
}

function submit() {
  totalPoints = parseInt(document.querySelector("#totalPoints").value);
  background.style.display = "none";

  if (totalPoints === '' || totalPoints === null || totalPoints === 0 || totalPoints === String || totalPoints === NaN) {
    alert("Enter Valid Number 😐");
  } else {
    mainMenu.style.display = "none";
    mainGame.style.display = "block";
    popupPoints.style.display = "none";
  }
}
function closeBtn() {
  popupPoints.style.display = "none";
}
function backBtn() {
  mainMenu.style.display = "block";
  setting.style.display = "none";
}
function rock() {

  var random = Math.floor(Math.random() * options.length);
  var computerChoice = options[random];

  shakeUser.style.animationPlayState = "running";
  shakeCom.style.animationPlayState = "running";
  yourChoice.src = "img/rockup_white.png";
  comChoice.src = "img/rockup_white_rotate.png"

  setTimeout(() => {
    yourChoice.src = "img/rock_white.png";
    shakeUser.style.animationPlayState = "paused";
    shakeCom.style.animationPlayState = "paused";

    if (computerChoice == "rock") {
      ans.innerHTML = "It's Draw!";
      comChoice.src = "img/rock_white_rotate.png";
    }
    ///////////////////////////////////////////////////////////
    else if (computerChoice == "paper") {
      ans.innerHTML = "Computer got this point!";
      comChoice.src = "img/paper_white_rotate.png";

      i++
      comPoint.textContent = i;
      if (comPoint.textContent == totalPoints) {
        setTimeout(function () {
          winner.innerHTML = "Computer Won This Match 😐";
          popupRestart.style.display = "block";
          mainGame.style.display = "none";
        }, 1000);
      }
    }
    ///////////////////////////////////////////////////////////
    else if (computerChoice == "scissor") {
      ans.innerHTML = "You got this point!";
      comChoice.src = "img/scissor_white_rotate.png";

      j++
      userPoint.textContent = j;
      if (userPoint.textContent == totalPoints) {
        setTimeout(function () {
          winner.innerHTML = "You Won This Match 😀";
          popupRestart.style.display = "block";
          mainGame.style.display = "none";
        }, 1000);
      }
    }
  }, 1000);
}

function paper() {

  var random = Math.floor(Math.random() * options.length);
  var computerChoice = options[random];

  shakeUser.style.animationPlayState = "running";
  shakeCom.style.animationPlayState = "running";
  yourChoice.src = "img/rockup_white.png";
  comChoice.src = "img/rockup_white_rotate.png"

  setTimeout(() => {
    yourChoice.src = "img/paper_white.png";
    shakeUser.style.animationPlayState = "paused";
    shakeCom.style.animationPlayState = "paused";

    if (computerChoice == "rock") {
      ans.innerHTML = "You got this point!";
      comChoice.src = "img/rock_white_rotate.png";

      j++
      userPoint.textContent = j;
      if (userPoint.textContent == totalPoints) {
        setTimeout(function () {
          winner.innerHTML = "You Won This Match 😀";
          popupRestart.style.display = "block";
          mainGame.style.display = "none";
        }, 1000);
      }
    }
    ///////////////////////////////////////////////////////////
    else if (computerChoice == "paper") {
      ans.innerHTML = "It's Draw!";
      comChoice.src = "img/paper_white_rotate.png";
    }
    ///////////////////////////////////////////////////////////
    else if (computerChoice == "scissor") {
      ans.innerHTML = "Computer got this point!";
      comChoice.src = "img/scissor_white_rotate.png";

      i++
      comPoint.textContent = i;
      if (comPoint.textContent == totalPoints) {
        setTimeout(function () {
          winner.innerHTML = "Computer Won This Match 😐";
          popupRestart.style.display = "block";
          mainGame.style.display = "none";
        }, 1000);
      }
    }
  }, 1000);
}

function scissors() {

  var random = Math.floor(Math.random() * options.length);
  var computerChoice = options[random];

  shakeUser.style.animationPlayState = "running";
  shakeCom.style.animationPlayState = "running";
  yourChoice.src = "img/rockup_white.png";
  comChoice.src = "img/rockup_white_rotate.png"

  setTimeout(() => {
    yourChoice.src = "img/scissor_white.png";
    shakeUser.style.animationPlayState = "paused";
    shakeCom.style.animationPlayState = "paused";

    if (computerChoice == "rock") {
      ans.innerHTML = "Computer got this point!";
      comChoice.src = "img/rock_white_rotate.png";

      i++
      comPoint.textContent = i;
      if (comPoint.textContent == totalPoints) {
        setTimeout(function () {
          winner.innerHTML = "Computer Won This Match 😐";
          popupRestart.style.display = "block";
          mainGame.style.display = "none";
        }, 1000);
      }
    }
    ///////////////////////////////////////////////////////////
    else if (computerChoice == "paper") {
      ans.innerHTML = "You got this point!";
      comChoice.src = "img/paper_white_rotate.png";

      j++
      userPoint.textContent = j;
      if (userPoint.textContent == totalPoints) {
        setTimeout(function () {
          winner.innerHTML = "You Won This Match 😀";
          popupRestart.style.display = "block";
          mainGame.style.display = "none";
        }, 1000);
      }
    }
    ///////////////////////////////////////////////////////////
    else if (computerChoice == "scissor") {
      ans.innerHTML = "It's Draw!";
      comChoice.src = "img/scissor_white_rotate.png";
    }
  }, 1000);
}

function exit() {
  popupExit.style.display = "block";
  mainMenu.style.display = "none";
}
document.addEventListener("deviceready", exitYES, false);

function exitYES() {
  if (navigator.app) {
    navigator.app.exitApp();
  } else if (navigator.device) {
    navigator.device.exitApp();
  } else {
    window.close();
  }
}
function exitNO() {
  popupExit.style.display = "none";
  mainMenu.style.display = "block";
}