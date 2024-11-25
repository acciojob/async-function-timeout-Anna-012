//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async () => {
  const textInput = document.getElementById('text').value; // Get text input value
  const delayInput = parseInt(document.getElementById('delay').value, 10); // Get delay value as a number
  const outputDiv = document.getElementById('output'); // Output div to display result

  // Validate inputs
  if (!textInput.trim()) {
    outputDiv.textContent = 'Please enter some text.';
    return;
  }

  if (isNaN(delayInput) || delayInput < 0) {
    outputDiv.textContent = 'Please enter a valid delay in milliseconds.';
    return;
  }

  // Async delay function
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  outputDiv.textContent = 'Waiting...'; // Show waiting message

  // Wait for the specified delay and then update the output
  await delay(delayInput);
  outputDiv.textContent = textInput;
});
