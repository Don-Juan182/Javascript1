document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    const counterDisplay = document.querySelector('.counter');
    const inputsContainer = document.querySelector('.inputs');
    let counter = 0;
    let intervalId = null;

    // Function to update the counter display
    function updateDisplay() {
        counterDisplay.textContent = counter;
    }

    // Start counting when the button is pressed
    button.addEventListener('mousedown', function() {
        // Reset the counter and clear inputs if already there
        counter = 0;
        inputsContainer.innerHTML = '';
        updateDisplay();

        // Start the interval to increment counter
        intervalId = setInterval(function() {
            counter++;
            updateDisplay();
        }, 1000);
    });

    // Stop counting and create inputs when the button is released
    button.addEventListener('mouseup', function() {
        // Stop the counter
        clearInterval(intervalId);

        // Create input elements
        for (let i = 0; i < counter; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            inputsContainer.appendChild(input);
        }
    });

    // Also handle the case when the mouse leaves the button while pressed
    button.addEventListener('mouseleave', function() {
        clearInterval(intervalId);
    });

    // Prevent context menu from appearing on long press
    button.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
});
