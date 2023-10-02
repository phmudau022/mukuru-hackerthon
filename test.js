// Get references to the About, Help, Log In, and Sign Up links
const aboutLink = document.querySelector('a[href="#about"]');
const helpLink = document.querySelector('a[href="#help"]');
const loginLink = document.querySelector('a[href="#login"]');
const signupLink = document.querySelector('#signup-link');

// Add click event listeners to the links
aboutLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    // Redirect to the "About us" page
    window.location.href = 'about.html'; // Replace with the actual URL
});

helpLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    // Redirect to the "Help" page
    window.location.href = 'help.html'; // Replace with the actual URL
});

loginLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    // Redirect to the login page
    window.location.href = 'login.html'; // Replace with the actual URL
});

signupLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    // Redirect to the sign-up page
    window.location.href = 'signup.html'; // Replace with the actual URL
});