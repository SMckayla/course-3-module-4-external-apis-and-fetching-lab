// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!
//Creating the elements
const input = document.getElementById("state-input");
const button = document.getElementById("fetch-alerts");
const display = document.getElementById("alerts-display");
const errorDiv = document.getElementById("error-message");

//Adding click button
button.addEventListener("click", () => {

// Adding action to get user input
const state = input.value;

//Fetching
fetch(`https://api.weather.gov/alerts/active?area=${state}`)