// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Highlight the current page in the navigation menu
    function highlightActiveMenu() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('nav ul li a');

        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active'); // Add the active class for styling
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Dynamically update the welcome message with the current date
    function updateWelcomeMessage() {
        const welcomeMessage = document.querySelector('main h2');
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = today.toLocaleDateString(undefined, options);

        welcomeMessage.innerHTML = `Welcome to Contract Farming - ${formattedDate}`;
    }

    // Call functions
    highlightActiveMenu();
    updateWelcomeMessage();
});

/*javacript for the signup page*/
// JavaScript to handle option clicks
document.getElementById('farmer-option').addEventListener('click', function() {
    window.location.href = 'farmer-registration.html'; // Redirect to farmer registration page
});

document.getElementById('customer-option').addEventListener('click', function() {
    window.location.href = 'customer-registration.html'; // Redirect to customer registration page
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Simple validation example
    const name = document.getElementById('name').value;
    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    // You can add more validation or form processing here
    alert('Registration submitted successfully!');
});




/*forgot password*/
document.getElementById('forgot-password-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const successMessage = document.getElementById('success-message');
    successMessage.classList.remove('hidden');
});
