// Select the button and set initial state
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference, if any, on page load
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    body.classList.toggle('dark-mode', savedTheme === 'dark');
    toggleButton.textContent = savedTheme === 'dark' ? '🌜' : '🌞';
}

// Toggle between dark and light mode
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Check current mode and update button text
    const isDarkMode = body.classList.contains('dark-mode');
    toggleButton.textContent = isDarkMode ? '🌜' : '🌞';

    // Save user preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});
