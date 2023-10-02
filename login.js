document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;


        console.log("Email:", email);
        console.log("Password:", password);


    });
}); // login.js

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();


        const isLoggedIn = true;

        if (isLoggedIn) {

            window.location.href = "last.html";
        }
    });
});