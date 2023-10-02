document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.querySelector(".signup-container form");

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Here, you can add your sign-up logic.
        // For this example, let's simulate a successful sign-up:
        const isSignedUp = true;

        if (isSignedUp) {
            window.location.href = "last.html"; // Redirect to calculator page
        }
    });
});