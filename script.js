"use-strict";
// variables declaration starts
const inputSliderElementForRed = document.getElementById("red");
const inputSliderElementForGreen = document.getElementById("green");
const inputSliderElementForBlue = document.getElementById("blue");
let redValue = 0,
  greenValue = 0,
  blueValue = 0;
const hexCodes = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};
let i;
// variables declaration ends
// functions starts
function redValueFunction() {
  redValue = inputSliderElementForRed.value;
  document.getElementById("r_out").value = redValue;
}
function greenValueFunction() {
  greenValue = inputSliderElementForGreen.value;
  document.getElementById("g_out").value = greenValue;
}
function blueValueFunction() {
  blueValue = inputSliderElementForBlue.value;
  document.getElementById("b_out").value = blueValue;
}

function genrateHexValueAndChangeBodyColor() {
  let rem,
    hexCode = "#";
  let values = [Number(redValue), Number(greenValue), Number(blueValue)];
  // formula I used from this website: https://www.developintelligence.com/blog/2017/02/rgb-to-hex-understanding-the-major-web-color-codes/#:~:text=First%20Value,code%20is%2012%2C%20or%20C.

  for (i = 0; i < 3; i++) {
    values[i] = values[i] / 16;
    rem = values[i] % 1;
    values[i] = Math.trunc(values[i]);
    hexCode = hexCode + hexCodes[`${values[i]}`];
    hexCode = hexCode + hexCodes[`${rem * 16}`];
  }
  document.querySelector(
    "body"
  ).style.backgroundColor = `rgba(${redValue}, ${greenValue}, ${blueValue})`;
  document.getElementById("output").textContent = hexCode;
}
// function ends
inputSliderElementForRed.addEventListener("input", redValueFunction);
inputSliderElementForGreen.addEventListener("input", greenValueFunction);
inputSliderElementForBlue.addEventListener("input", blueValueFunction);
document.addEventListener("input");
