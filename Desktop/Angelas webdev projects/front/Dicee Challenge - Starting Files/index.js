
var dice1Number = (Math.floor(Math.random() * 6)) + 1;

function dice1Image() {

    if (dice1Number === 1) {
        document.querySelector(".img1").setAttribute("src", "./images/dice1.png");

    }
    else if (dice1Number === 2) {
        document.querySelector(".img1").setAttribute("src", "./images/dice2.png");

    }
    else if (dice1Number === 3) {
        document.querySelector(".img1").setAttribute("src", "./images/dice3.png");

    }
    else if (dice1Number === 4) {
        document.querySelector(".img1").setAttribute("src", "./images/dice4.png");

    }
    else if (dice1Number === 5) {
        document.querySelector(".img1").setAttribute("src", "./images/dice5.png");

    }
    else {
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png");

    }
}

var dice2Number = Math.floor((Math.random() * 6)) + 1;

function dice2Image() {

    if (dice2Number === 1) {
        document.querySelector(".img2").setAttribute("src", "./images/dice1.png");

    }
    else if (dice2Number === 2) {
        document.querySelector(".img2").setAttribute("src", "./images/dice2.png");

    }
    else if (dice2Number === 3) {
        document.querySelector(".img2").setAttribute("src", "./images/dice3.png");

    }
    else if (dice2Number === 4) {
        document.querySelector(".img2").setAttribute("src", "./images/dice4.png");

    }
    else if (dice2Number === 5) {
        document.querySelector(".img2").setAttribute("src", "./images/dice5.png");

    }
    else {
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png");

    }
}

function text() {
    if (dice1Number === dice2Number) {
        document.querySelector("h1").textContent = "Draw!";
    }
    else if (dice1Number > dice2Number) {
        document.querySelector("h1").textContent = "🚩 Wife Wins!";
    }
    else {
        document.querySelector("h1").textContent = "Husband Wins! 🚩";
    }
}

dice1Image();
dice2Image();
text();

