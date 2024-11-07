// login.js

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
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show the selected page
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
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

    // Check if credentials match
    if (username === validUsername && password === validPassword) {
        // Hide login page and show main content
        document.getElementById('login-page').classList.remove('active');
        document.getElementById('main-content').classList.add('active');
        showPage('home');
    } else {
        // Show error message if credentials are incorrect
        errorElement.style.display = 'block';
    }
}