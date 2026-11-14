const form = document.querySelector("#converter-form");
const temperatureInput = document.querySelector("#temperature");
const inputUnit = document.querySelector("#input-unit");
const errorMessage = document.querySelector("#input-error");
const resultElements = {
  celsius: document.querySelector("#result-celsius"),
  fahrenheit: document.querySelector("#result-fahrenheit"),
  kelvin: document.querySelector("#result-kelvin"),
};

const unitLabels = { celsius: "°C", fahrenheit: "°F", kelvin: "K" };
const absoluteZero = { celsius: -273.15, fahrenheit: -459.67, kelvin: 0 };
let hasConverted = false;

function showError(message) {
  errorMessage.textContent = message;
  temperatureInput.setAttribute("aria-invalid", "true");
  document.querySelector(".converter-card").classList.add("has-error");
  clearResults();
}

function clearError() {
  errorMessage.textContent = "";
  temperatureInput.removeAttribute("aria-invalid");
  document.querySelector(".converter-card").classList.remove("has-error");
}

function clearResults() {
  Object.values(resultElements).forEach((element) => {
    element.innerHTML = `—<span class="result-unit">${element.id.includes("fahrenheit") ? "°F" : element.id.includes("kelvin") ? "K" : "°C"}</span>`;
  });
}

function toCelsius(value, unit) {
  if (unit === "fahrenheit") return (value - 32) * (5 / 9);
  if (unit === "kelvin") return value - 273.15;
  return value;
}

function format(value) {
  const rounded = Math.round((value + Number.EPSILON) * 100) / 100;
  return Object.is(rounded, -0) ? "0.00" : rounded.toFixed(2);
}

function convert() {
  const rawValue = temperatureInput.value.trim();
  const value = Number(rawValue);
  const unit = inputUnit.value;

  if (rawValue === "" || !Number.isFinite(value)) {
    showError("Enter a valid number to convert, like 24 or −5.5.");
    return false;
  }

  if (value < absoluteZero[unit]) {
    const minimum = unit === "kelvin" ? "0 K" : `${absoluteZero[unit]} ${unitLabels[unit]}`;
    showError(`That’s below absolute zero. The lowest possible value is ${minimum}.`);
    return false;
  }

  clearError();
  const celsius = toCelsius(value, unit);
  const values = {
    celsius,
    fahrenheit: (celsius * 9) / 5 + 32,
    kelvin: celsius + 273.15,
  };

  Object.entries(values).forEach(([key, result]) => {
    resultElements[key].innerHTML = `${format(result)}<span class="result-unit">${unitLabels[key]}</span>`;
  });
  document.querySelector("#results-caption").textContent = `FROM ${unitLabels[unit]} · ALL SCALES`;
  hasConverted = true;
  return true;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  convert();
});

temperatureInput.addEventListener("input", () => {
  if (temperatureInput.value.trim() === "") {
    clearError();
    clearResults();
    hasConverted = false;
    document.querySelector("#results-caption").textContent = "ALL SCALES";
    return;
  }

  if (temperatureInput.value.trim() && !Number.isFinite(Number(temperatureInput.value.trim()))) {
    showError("Please use numbers only, with an optional minus sign and decimal point.");
    hasConverted = false;
    return;
  }

  clearError();
  if (hasConverted) convert();
});

inputUnit.addEventListener("change", () => {
  clearError();
  if (hasConverted && temperatureInput.value.trim() !== "") convert();
});
