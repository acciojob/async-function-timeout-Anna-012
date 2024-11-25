//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async () => {
  const textInput = document.getElementById('text').value;
  const delayInput = parseInt(document.getElementById('delay').value, 10);
  const outputDiv = document.getElementById('output');

  // Validate inputs
  if (!textInput.trim()) {
    outputDiv.textContent = 'Please enter some text.';
    return;
  }

  if (isNaN(delayInput) || delayInput < 0) {
    outputDiv.textContent = 'Please enter a valid delay in milliseconds.';
    return;
  }

  // Show waiting message and introduce a delay
  outputDiv.textContent = 'Waiting...';
  await new Promise((resolve) => setTimeout(resolve, delayInput));

  // Update output
  outputDiv.textContent = textInput;
});
