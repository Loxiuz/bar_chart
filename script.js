"use strict";

window.addEventListener("load", start);

const numArray = [];

function start() {
  fillArray();
  displayBars();
  loop();
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function fillArray() {
  for (let i = 0; i < 40; i++) {
    numArray[i] = getNumberOfCustomers();
  }
}

function modifyArray() {
  numArray.shift();
  numArray.push(getNumberOfCustomers());
}

function displayBars() {
  const bars = document.querySelectorAll(".bar");
  for (let i = 0; i < numArray.length; i++) {
    const bar = bars[i];
    bar.style.height = `${numArray[i] * 10}px`;
  }
  console.log(numArray);
}

function loop() {
  setInterval(function () {
    modifyArray();
    displayBars();
  }, 1000);
}
