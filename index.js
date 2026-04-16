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
  .then(res => res.json())
 .then(data => {
    display.innerHTML = "";
    const alerts = data.features;
 display.innerHTML = `
  <h3>Alerts for ${state}: ${alerts.length}</h3>
`;
display.innerHTML = `
  <h3>Alerts for ${state}: ${alerts.length}</h3>
`;

//Adding paragraph for each alert
alerts.forEach(alert => {
const p = document.createElement("p");
p.textContent = alert.properties.headline;

//Show alert on webpage
display.appendChild(p);
});

//Error handling
errorDiv.textContent = "";
      errorDiv.classList.add("hidden");
      input.value = "";
    })
    .catch(err => {
      errorDiv.textContent = err.message;
      errorDiv.classList.remove("hidden");
    });
});