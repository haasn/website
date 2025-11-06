// Navigation Scroll Spy
// Highlights the nav link for the currently visible section

// Guard to prevent duplicate initialization
let isNavSpyInitialized = false;

function setupNavScrollSpy() {
    // Prevent duplicate initialization
    if (isNavSpyInitialized) {
        return;
    }
    isNavSpyInitialized = true;

    // Get all navigation links (excluding the theme toggle)
    const navLinks = document.querySelectorAll('.nav-links a[href*="#"]');

    // Get all sections that have IDs matching the nav links
    const sections = [];
    const sectionIds = [];

    navLinks.forEach(link => {
        // Skip the theme toggle
        if (link.id === 'themeToggle') {
            return;
        }

        const hash = link.getAttribute('href').split('#')[1];
        if (hash) {
            const section = document.getElementById(hash);
            if (section) {
                sections.push(section);
                sectionIds.push(hash);
            }
        }
    });

    // Function to update active nav link
    function updateActiveNavLink() {
        // Get current scroll position
        const scrollPosition = window.scrollY + 100; // Offset for better UX

        // Find the current section
        let currentSection = '';

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = sectionIds[index];
            }
        });

        // If we're at the very top of the page, don't highlight anything
        if (window.scrollY < 50) {
            currentSection = '';
        }

        // Update nav links
        navLinks.forEach(link => {
            const hash = link.getAttribute('href').split('#')[1];

            if (hash === currentSection) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Debounce function for better performance
    let scrollTimer;
    function debouncedUpdateActiveNavLink() {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(updateActiveNavLink, 50);
    }

    // Listen for scroll events
    window.addEventListener('scroll', debouncedUpdateActiveNavLink);

    // Update on page load
    updateActiveNavLink();
}

// Run setup when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupNavScrollSpy);
} else {
    setupNavScrollSpy();
}
