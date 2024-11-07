document.addEventListener('DOMContentLoaded', () => {
    // Show login page by default when content is loaded
    showPage('login-page');

    // Add event listener to the login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');

    // Show the selected page
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.style.display = 'block';
    }
}

function handleLogin(event) {
    event.preventDefault(); // Prevent form from submitting the usual way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('login-error');

    // Sample credentials for testing
    const validUsername = 'test';
    const validPassword = 'test';

    // Hide error message on each login attempt
    errorElement.style.display = 'none';

    // Check if credentials match
    if (username === validUsername && password === validPassword) {
        // Hide login page and show main content
        showPage('main-content');
    } else {
        // Show error message if credentials are incorrect
        errorElement.style.display = 'block';
    }
}
