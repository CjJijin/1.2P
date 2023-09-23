// JavaScript file for the HTML code

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the user's name from the input field
    var nameInput = document.getElementById('name');
    var userName = nameInput.value;

    // Display a personalized greeting
    var greetingElement = document.getElementById('greeting');
    greetingElement.textContent = 'Hello, ' + userName + '! Welcome to our website.';
}

// Get a reference to the form element
var formElement = document.getElementById('greetingForm');

// Add a form submit event listener
formElement.addEventListener('submit', handleSubmit);
