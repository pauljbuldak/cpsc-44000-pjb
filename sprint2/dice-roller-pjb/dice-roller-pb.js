/*
    Author: Paul Buldak
    Class: Software Engineering
    Project: Dice Roller
    Description: This application rolls dice utilizing the onload and 
        autofocus features
*/

function RollDice() {
    document.getElementById("dieOne").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dieTwo").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dieThree").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dieFour").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dieFive").value = Math.floor(Math.random()*6) + 1;
    CheckForWin();
}
function RollDieOne() {
    document.getElementById("dieOne").value = Math.floor(Math.random()*6) + 1;
    CheckForWin();
}
function RollDieTwo() {
    document.getElementById("dieTwo").value = Math.floor(Math.random()*6) + 1;
    CheckForWin();
}
function RollDieThree() {
    document.getElementById("dieThree").value = Math.floor(Math.random()*6) + 1;
    CheckForWin();
}
function RollDieFour() {
    document.getElementById("dieFour").value = Math.floor(Math.random()*6) + 1;
    CheckForWin();
}
function RollDieFive() {
    document.getElementById("dieFive").value = Math.floor(Math.random()*6) + 1;
    CheckForWin();
}

function CheckForWin() {
    if(document.getElementById("dieOne").value == document.getElementById("dieTwo").value
    && document.getElementById("dieOne").value == document.getElementById("dieThree").value
    && document.getElementById("dieOne").value == document.getElementById("dieFour").value
    && document.getElementById("dieOne").value == document.getElementById("dieFive").value) {
        alert("Congratulations! You've won!");
    }
}