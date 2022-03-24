/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let excusa = document.querySelector("#excuse");
  excusa.innerHTML = `<strong>${excuse}</strong>`;

  function generarExcusa() {
    return `${arregloRandom(who)} ${arregloRandom(action)} ${arregloRandom(
      what
    )} ${arregloRandom(when)}`;
  }

  document.getElementById("boton1").addEventListener("click", function() {
    excusa.innerHTML = `<h2>${generarExcusa()}</h2>`;
  });
};
let action = ["ate", "peed", "crushed", "broke"];
let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function arregloRandom(arreglo) {
  let max = arreglo.length;
  let random = Math.random() * max;
  random = Math.floor(random);
  return arreglo[random];
}

let excuse = `${arregloRandom(who)} ${arregloRandom(action)} ${arregloRandom(
  what
)} ${arregloRandom(when)}`;

console.log(excuse);
console.log(`la excusa es :${excuse} `);
