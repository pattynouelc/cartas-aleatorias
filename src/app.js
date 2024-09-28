/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Al cargar la página
window.onload = function() {
  generateRandomCard();
};

function generateRandomCard() {
  // Palos disponibles
  const suits = ["♦", "♥", "♠", "♣"];
  const suitClasses = ["diamond", "heart", "spade", "club"];

  // Valores disponibles
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  // Generar índice aleatorio para el palo y el valor
  const randomSuitIndex = Math.floor(Math.random() * suits.length);
  const randomValueIndex = Math.floor(Math.random() * values.length);

  // Seleccionar el valor y el palo aleatorios
  const selectedSuit = suits[randomSuitIndex];
  const selectedValue = values[randomValueIndex];

  // Seleccionar elementos del DOM
  const topSuit = document.querySelector(".top-suit");
  const number = document.querySelector(".number");
  const bottomSuit = document.querySelector(".bottom-suit");
  const card = document.querySelector(".card");

  // Asignar el valor y el palo a los elementos
  topSuit.innerHTML = selectedSuit;
  number.innerHTML = selectedValue;
  bottomSuit.innerHTML = selectedSuit;

  // Quitar cualquier clase de palo existente
  card.classList.remove("heart", "spade", "club", "diamond");

  // Asignar la clase de palo correcta
  card.classList.add(suitClasses[randomSuitIndex]);
}
