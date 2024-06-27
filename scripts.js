document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust offset as needed
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Retrieve form data
            const formData = new FormData(event.target);
            const name = formData.get('name');
            const username = formData.get('username');
            const email = formData.get('email');

            // Example: Display form data
            console.log(`Name: ${name}, Username: ${username}, Email: ${email}`);

            // Optionally display the form data on the page
            const formDataDisplay = document.createElement('div');
            formDataDisplay.innerHTML = `<p>Name: ${name}</p><p>Username: ${username}</p><p>Email: ${email}</p>`;
            contactForm.appendChild(formDataDisplay);
        });
    }
});


