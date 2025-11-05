// Theme Switcher
// This script handles theme switching functionality for the website

// Get current system preference
function getSystemPreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
    }
    return 'dark';
}

// Apply theme before page renders to prevent flicker
// This function should be called inline in the <head> section
function initTheme() {
    const storedTheme = localStorage.getItem('theme');
    const isManual = localStorage.getItem('themeIsManual') === 'true';
    const lastSystemPref = localStorage.getItem('lastSystemPref');
    const currentSystemPref = getSystemPreference();

    // Store current system preference for future comparisons
    localStorage.setItem('lastSystemPref', currentSystemPref);

    let themeToApply;

    if (isManual && storedTheme) {
        // User manually set a preference
        // Check if system preference changed since last visit
        if (lastSystemPref && lastSystemPref !== currentSystemPref) {
            // System preference changed - follow new system preference
            themeToApply = currentSystemPref;
            localStorage.setItem('theme', themeToApply);
            localStorage.setItem('themeIsManual', 'false');
        } else {
            // System preference unchanged - keep manual preference
            themeToApply = storedTheme;
        }
    } else if (storedTheme) {
        // Automatic preference (follows system)
        themeToApply = currentSystemPref;
        localStorage.setItem('theme', themeToApply);
    } else {
        // No stored preference - use system preference
        themeToApply = currentSystemPref;
        localStorage.setItem('theme', themeToApply);
        localStorage.setItem('themeIsManual', 'false');
    }

    if (themeToApply === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
}

// Initialize theme switcher functionality
// This function should be called after the DOM is loaded
function setupThemeSwitcher() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const root = document.documentElement;

    // Create broadcast channel for cross-tab synchronization
    let themeChannel;
    if (typeof BroadcastChannel !== 'undefined') {
        themeChannel = new BroadcastChannel('theme-channel');
    }

    // Update icon based on current theme
    function updateIcon() {
        const currentTheme = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        themeIcon.textContent = currentTheme === 'light' ? 'brightness_4' : 'brightness_7';
    }

    // Apply theme
    function setTheme(theme, isManualChange = false, shouldBroadcast = true) {
        if (theme === 'light') {
            root.setAttribute('data-theme', 'light');
        } else {
            root.removeAttribute('data-theme');
        }
        localStorage.setItem('theme', theme);

        if (isManualChange) {
            localStorage.setItem('themeIsManual', 'true');
        }

        updateIcon();

        // Broadcast to other tabs
        if (shouldBroadcast && themeChannel) {
            themeChannel.postMessage({ theme, isManual: isManualChange });
        }
    }

    // Toggle theme (manual user action)
    function toggleTheme(e) {
        e.preventDefault();
        const currentTheme = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme, true, true);
    }

    // Initialize icon (theme already applied in head)
    updateIcon();

    // Add click handler
    themeToggle.addEventListener('click', toggleTheme);

    // Listen for messages from other tabs
    if (themeChannel) {
        themeChannel.addEventListener('message', (event) => {
            const { theme, isManual } = event.data;
            setTheme(theme, isManual, false); // Don't broadcast back
        });
    }

    // Listen for system theme changes (live updates)
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');

        mediaQuery.addEventListener('change', (e) => {
            const newSystemPref = e.matches ? 'light' : 'dark';
            const isManual = localStorage.getItem('themeIsManual') === 'true';

            // Update last known system preference
            localStorage.setItem('lastSystemPref', newSystemPref);

            // If not manually set, follow system preference
            if (!isManual) {
                setTheme(newSystemPref, false, true);
            } else {
                // System preference changed - override manual preference
                setTheme(newSystemPref, false, true);
                localStorage.setItem('themeIsManual', 'false');
            }
        });
    }
}
