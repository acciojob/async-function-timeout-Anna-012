//your JS code here. If required.
// Function to simulate a delay using a promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle the display logic
async function handleDisplay() {
    // Retrieve the values from the input fields
    const textInput = document.getElementById('text').value;
    const delayInput = document.getElementById('delay').value;
    const outputDiv = document.getElementById('output');
    
    // Clear any existing content in the output div
    outputDiv.textContent = '';

    // Validate input
    if (!textInput || !delayInput || delayInput <= 0) {
        outputDiv.textContent = 'Please enter valid text and delay.';
        return;
    }

    // Display loading message during the delay
    outputDiv.textContent = 'Loading...';

    // Introduce the specified delay
    await delay(Number(delayInput));

    // Display the user-provided text after the delay
    outputDiv.textContent = textInput;
}

// Add an event listener to the button
document.getElementById('btn').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    handleDisplay(); // Call the async function
});
