document.addEventListener('DOMContentLoaded', function() {
    // Function to handle form submission
    function handleFormSubmission(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Retrieve form data
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Example: Log form data to console
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

        // You can add further logic here, such as sending the form data to a server using fetch API
        // Example: Send form data to a server
        /*
        fetch('https://example.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Optionally, display a success message to the user
        })
        .catch(error => {
            console.error('Error:', error);
            // Optionally, display an error message to the user
        });
        */

        // Reset the form after submission (optional)
        event.target.reset();
    }

    // Add form submission event listener
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }

    // Function to toggle visibility of an element
    function toggleElementVisibility(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.classList.toggle('hidden');
        }
    }

    // Example: Toggle visibility of content on button click
    const toggleButton = document.getElementById('toggleButton');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            toggleElementVisibility('toggleContent');
        });
    }
});

