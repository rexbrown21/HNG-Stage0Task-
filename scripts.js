// JavaScript code for handling form submission or any other interactive functionality

// Example: Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Example: Retrieve form values (you may customize this based on your form fields)
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Example: Display form values (you may customize this based on your needs)
    alert(`Submitted Form:
    Name: ${name}
    Username: ${username}
    Email: ${email}`);
});



