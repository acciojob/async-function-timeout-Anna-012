//your JS code here. If required.
// Function to introduce a delay using a Promise
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function handleDisplay(event) {
  event.preventDefault();
  const textInput = document.getElementById('text').value.trim();
  const delayInput = parseInt(document.getElementById('delay').value.trim(), 10);
  const outputDiv = document.getElementById('output');

  outputDiv.textContent = ''; // Clear previous content

  if (!textInput || isNaN(delayInput) || delayInput <= 0) {
    outputDiv.textContent = 'Please enter valid text and delay.';
    return;
  }

  outputDiv.textContent = 'Loading...'; // Loading message
  await delay(delayInput); // Introduce delay
  outputDiv.textContent = textInput; // Update output
}

document.getElementById('form').addEventListener('submit', handleDisplay);
