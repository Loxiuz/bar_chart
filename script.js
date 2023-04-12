"use strict";

window.addEventListener("load", start);

const numArray = [];

function start() {
  fillArray();
  displayBars();
  console.log(numArray);
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function fillArray() {
  for (let i = 0; i < 40; i++) {
    numArray[i] = getNumberOfCustomers();
  }
}

function displayBars() {
  const bars = document.querySelectorAll(".bar");
  for (let i = 0; i < 40; i++) {
    const bar = bars[i];
    bar.style.height = `${numArray[i] * 10}px`;
  }
}
