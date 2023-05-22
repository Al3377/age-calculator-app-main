"use strict";

// Get Value from Input fields
let dayInput = document.getElementById("day");
let monthInput = document.getElementById("month");
let yearInput = document.getElementById("year");

// Selecting Output
let outputDays = document.getElementById("outputDays");
let outputMonths = document.getElementById("outputMonths");
let outputYears = document.getElementById("outputYears");

// Curent Date
const date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth() + 1;
let currentDay = date.getDate();
// Get the number of days in the current month
let numberOfDays = new Date(
  date.getFullYear(),
  date.getMonth() + 1,
  0
).getDate();

let monthsInYear = 12;

// Min Number Input
let minNum = 1;

// Seting Max and Min Attribute for Input
dayInput.setAttribute("max", numberOfDays);
dayInput.setAttribute("min", minNum);
monthInput.setAttribute("max", monthsInYear);
monthInput.setAttribute("min", minNum);
yearInput.setAttribute("min", minNum);

// Storing Value

let birthDay, birthMonth, birthYear;

dayInput.addEventListener("input", function () {
  birthDay = parseInt(dayInput.value);
  calculate();
});
monthInput.addEventListener("input", function () {
  birthMonth = parseInt(monthInput.value);
  calculate();
});
yearInput.addEventListener("input", function () {
  birthYear = parseInt(yearInput.value);
  calculate();
});

// Calculating

let days, months, years;

function calculate() {
  if (dayInput && monthInput && yearInput) {
    if (currentMonth >= birthMonth && currentDay >= birthDay) {
      years = currentYear - birthYear;
    } else {
      years = currentYear - birthYear - 1;
    }
    outputYears.textContent = `${years}`;
  }
  if (currentMonth < birthMonth) {
    months = monthsInYear - birthMonth + currentMonth;
  } else if (currentMonth > birthMonth) {
    months = currentMonth - birthMonth;
  } else {
    months = 0;
  }
  outputMonths.textContent = `${months}`;

  if (currentDay < birthDay) {
    days = numberOfDays - (birthDay - currentDay);
  } else if (currentDay > birthDay) {
    days = currentDay - birthDay;
  } else {
    days = 0;
  }
  outputDays.textContent = `${days}`;
}
