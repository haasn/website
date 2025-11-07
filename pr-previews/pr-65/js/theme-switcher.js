// Theme Switcher
// This script handles theme switching functionality for the website

// Get current system preference
function getSystemPreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
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
    } else {
        // Automatic or no stored preference - use system preference
        themeToApply = currentSystemPref;
        localStorage.setItem('theme', themeToApply);
        if (!storedTheme) {
            localStorage.setItem('themeIsManual', 'false');
        }
    }

    if (themeToApply === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
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
        const currentTheme = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        themeIcon.textContent = currentTheme === 'dark' ? 'brightness_7' : 'brightness_4';
    }

    // Update favicon based on current theme
    function updateFavicon() {
        const currentTheme = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const color = currentTheme === 'dark' ? '#6dd4e0' : '#0e7490';

        const svg = `<svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="12" y1="12" x2="12" y2="38" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
    <line x1="12" y1="12" x2="15" y2="12" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
    <line x1="12" y1="38" x2="15" y2="38" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
    <line x1="20" y1="25" x2="30" y2="25" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
    <line x1="38" y1="12" x2="38" y2="38" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
    <line x1="35" y1="12" x2="38" y2="12" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
    <line x1="35" y1="38" x2="38" y2="38" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
</svg>`;

        const favicon = document.querySelector('link[rel="icon"]');
        if (favicon) {
            favicon.href = 'data:image/svg+xml,' + encodeURIComponent(svg);
        }
    }

    // Apply theme
    function setTheme(theme, isManualChange = false, shouldBroadcast = true) {
        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.removeAttribute('data-theme');
        }
        localStorage.setItem('theme', theme);

        if (isManualChange) {
            localStorage.setItem('themeIsManual', 'true');
        }

        updateIcon();
        updateFavicon();

        // Broadcast to other tabs
        if (shouldBroadcast && themeChannel) {
            themeChannel.postMessage({ theme, isManual: isManualChange });
        }
    }

    // Toggle theme (manual user action)
    function toggleTheme(e) {
        e.preventDefault();
        const currentTheme = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme, true, true);
    }

    // Initialize icon and favicon (theme already applied in head)
    updateIcon();
    updateFavicon();

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
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        mediaQuery.addEventListener('change', (e) => {
            const newSystemPref = e.matches ? 'dark' : 'light';
            const isManual = localStorage.getItem('themeIsManual') === 'true';

            // Update last known system preference
            localStorage.setItem('lastSystemPref', newSystemPref);

            // Always follow system preference changes (overrides manual preferences)
            setTheme(newSystemPref, false, true);
            if (isManual) {
                localStorage.setItem('themeIsManual', 'false');
            }
        });
    }
}
