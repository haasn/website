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
    const allNavLinks = document.querySelectorAll('.nav-links a[href*="#"]');
    const navLinks = [];

    // Get all sections that have IDs matching the nav links
    const sections = [];
    const sectionIds = [];

    allNavLinks.forEach(link => {
        // Skip the theme toggle and any non-section links
        if (link.id === 'themeToggle' || link.classList.contains('theme-toggle')) {
            return;
        }

        const hash = link.getAttribute('href').split('#')[1];
        if (hash) {
            const section = document.getElementById(hash);
            if (section) {
                navLinks.push(link);
                sections.push(section);
                sectionIds.push(hash);
            }
        }
    });

    // Section groupings: map sections without nav links to their nav equivalents
    // hero -> about, testimonials -> contact
    const sectionGroupings = {
        'hero': 'about',
        'testimonials': 'contact'
    };

    // Function to update active nav link
    function updateActiveNavLink() {
        // Get current scroll position
        const scrollPosition = window.scrollY + 100; // Offset for better UX
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Find the current section by checking ALL sections on the page
        let currentSection = '';

        // Get all sections (including hero, testimonials, etc.)
        const allSections = document.querySelectorAll('section[id]');

        allSections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.id;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Map grouped sections to their nav equivalents
                currentSection = sectionGroupings[sectionId] || sectionId;
            }
        });

        // Handle edge cases: stay on About at top, Contact at bottom
        if (window.scrollY < 50 && sectionIds.length > 0) {
            // At the very top - highlight "about" (first section)
            currentSection = sectionIds[0];
        } else if (window.scrollY + windowHeight >= documentHeight - 10) {
            // At the very bottom - highlight "contact" (last section)
            currentSection = sectionIds[sectionIds.length - 1];
        }

        // Update nav links
        navLinks.forEach((link, index) => {
            if (sectionIds[index] === currentSection) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Listen for scroll events (no debouncing for instant updates)
    window.addEventListener('scroll', updateActiveNavLink, { passive: true });

    // Update on page load
    updateActiveNavLink();
}

// Run setup when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupNavScrollSpy);
} else {
    setupNavScrollSpy();
}
