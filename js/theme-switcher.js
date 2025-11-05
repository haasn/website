// Theme Switcher
// This script handles theme switching functionality for the website

// Apply theme before page renders to prevent flicker
// This function should be called inline in the <head> section
function initTheme() {
    const stored = localStorage.getItem('theme');
    if (stored) {
        if (stored === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

// Initialize theme switcher functionality
// This function should be called after the DOM is loaded
function setupThemeSwitcher() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const root = document.documentElement;

    // Update icon based on current theme
    function updateIcon() {
        const currentTheme = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        themeIcon.textContent = currentTheme === 'light' ? 'brightness_4' : 'brightness_7';
    }

    // Apply theme
    function setTheme(theme) {
        if (theme === 'light') {
            root.setAttribute('data-theme', 'light');
        } else {
            root.removeAttribute('data-theme');
        }
        localStorage.setItem('theme', theme);
        updateIcon();
    }

    // Toggle theme
    function toggleTheme(e) {
        e.preventDefault();
        const currentTheme = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    // Initialize icon (theme already applied in head)
    updateIcon();

    // Add click handler
    themeToggle.addEventListener('click', toggleTheme);

    // Listen for system theme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'light' : 'dark');
            }
        });
    }
}
