import "bootstrap";
import "./style.css";

const palo = ["corazon", "pica", "trebol", "diamante"];
const simbol = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
let simbolUp = document.querySelector("#simbolUp");
let num = document.querySelector("#num");
let simbolDown = document.querySelector("#simbolDown");

function cardSelect(array1, array2) {
  let card = [];
  card.push(array1[Math.floor(Math.random() * array1.length)]);
  card.push(array2[Math.floor(Math.random() * array2.length)]);
  return card;
}

function asigColor(array) {
  if(array[0] === "corazon" || array[0] === "diamante") {
    simbolUp.style.color = "red";
    num.style.color = "red";
    simbolDown.style.color = "red";
  } else {
    simbolUp.style.color = "black";
    num.style.color = "black";
    simbolDown.style.color = "black";
  }
}

function asigPalo(array) {
  if(array[0] === "corazon") {
    simbolUp.innerHTML = "♥";
    simbolDown.innerHTML = "♥";
  } else if(array[0] === "diamante") {
    simbolUp.innerHTML = "♦";
    simbolDown.innerHTML = "♦";
  } else if(array[0] === "trebol") {
    simbolUp.innerHTML = "♣";
    simbolDown.innerHTML = "♣";
  } else {
    simbolUp.innerHTML = "♠";
    simbolDown.innerHTML = "♠";
  }
}

function asigSimbol(array) {
  num.innerHTML = array[1];
}

function cardGene() {
  let carta = cardSelect(palo, simbol);
  asigColor(carta);
  asigPalo(carta);
  asigSimbol(carta);
}
window.onload = function() { //write your code here
  cardGene();
};
document.getElementById("button").addEventListener("click", function() {
  cardGene();
});