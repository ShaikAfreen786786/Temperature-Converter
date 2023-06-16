// Get the form and input elements
const form = document.querySelector('form');
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const resultDiv = document.getElementById('result');

// Add an event listener to the form to handle form submissions
form.addEventListener('submit', event => {
  event.preventDefault(); // prevent the default form submission behavior

  // Get the input value from the Celsius input field
  const celsius = parseFloat(celsiusInput.value);

  // Check if the input is valid (a number)
  if (isNaN(celsius)) {
    alert('Please enter a valid number for Celsius.');
    return;
  }

  // Convert Celsius to Fahrenheit
  const fahrenheit = (celsius * 9/5) + 32;

  // Display the result in the Fahrenheit input field and the result div
  fahrenheitInput.value = fahrenheit.toFixed(2);
  resultDiv.textContent = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
});
