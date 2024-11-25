//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async () => {
  const textInput = document.getElementById('text').value; // Retrieve text input
  const delayInput = parseInt(document.getElementById('delay').value, 10); // Retrieve and parse delay input
  const outputDiv = document.getElementById('output'); // Reference to output div

  // Validate text input
  if (!textInput.trim()) {
    outputDiv.textContent = 'Please enter some text.';
    return;
  }

  // Validate delay input
  if (isNaN(delayInput) || delayInput < 0) {
    outputDiv.textContent = 'Please enter a valid delay in milliseconds.';
    return;
  }

  // Show waiting message
  outputDiv.textContent = 'Waiting...';

  // Introduce delay
  await new Promise((resolve) => setTimeout(resolve, delayInput));

  // Update output after the delay
  outputDiv.textContent = textInput;
});
