import "./style.css";
var main = document.querySelector("#main");
var contorno = document.querySelector("#contorno");

window.onload = function() {
  let titulo = document.createElement("h1");
  titulo.innerText = "Generador de cartas";
  main.appendChild(titulo);
  let carta = generarCarta();
  main.appendChild(carta);
};

function generarCarta() {
  // Generar numero
  let num = Math.floor(Math.random() * 13 + 1);
  switch (num) {
    case 1:
      num = "A";
      break;
    case 11:
      num = "J";
      break;
    case 12:
      num = "Q";
      break;
    case 13:
      num = "K";
      break;
  }

  // Generar figura ["heart", "club", "spade", "diamond"]
  let carta = ["♥", "♣", "♦", "♠"];
  let cartaEscogida = Math.floor(Math.random() * carta.length);
  let contenedor = document.createElement("div");
  let figura1 = document.createElement("div");
  let figura2 = document.createElement("div");
  contenedor.className = "card";

  // Codigo que genera la carta
  //figura superior
  figura1.className = "upfigure";
  figura1.style.cssFloat = "Left"; //function to align figure
  figura1.innerHTML = carta[cartaEscogida];
  contenedor.appendChild(figura1);

  //contenedor del numero
  let contenedornum = document.createElement("div");
  contenedornum.innerHTML = num;
  contenedornum.className = "numero";
  contenedor.appendChild(contenedornum);

  //figura inferior
  figura2.innerHTML = figura1.textContent;
  figura2.className = "lowfigure";
  figura2.style.cssFloat = "rigth"; //function to align figure
  contenedor.appendChild(figura2);
  // Retorna el elemento

  return contenedor;
}

/*

function floatRight() {
    document.querySelector(".lowfigure").style.cssFloat = "right";
  }
  function floatLeft() {
    document.querySelector(".upfigure").style.cssFloat = "Left";
  }
*/
