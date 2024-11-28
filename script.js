//your JS code here. If required.
// Function to introduce a delay using a Promise
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Async function to handle the form submission and delay
async function handleDisplay(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Retrieve user input
  const textInput = document.getElementById('text').value.trim();
  const delayInput = parseInt(document.getElementById('delay').value.trim(), 10);
  const outputDiv = document.getElementById('output');

  // Clear any previous output
  outputDiv.textContent = '';

  // Validate inputs
  if (!textInput || isNaN(delayInput) || delayInput <= 0) {
    outputDiv.textContent = 'Please enter valid text and delay.';
    return;
  }

  // Display a loading message during the delay
  outputDiv.textContent = 'Loading...';

  // Wait for the specified delay
  await delay(delayInput);

  // Display the user-provided text after the delay
  outputDiv.textContent = textInput;
}

// Attach event listener to the form submit button
document.getElementById('form').addEventListener('submit', handleDisplay);
