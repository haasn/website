// Section Collapse/Expand Functionality
// Collapses long sections when section height exceeds viewport height

function setupSectionCollapse() {
    const sections = ['services', 'skills', 'projects', 'publications'];
    const sectionStates = {};

    // Initialize state for each section
    sections.forEach(section => {
        sectionStates[section] = {
            isExpanded: false
        };
    });

    // Function to check if section height exceeds viewport height
    function shouldCollapseSection(wrapper) {
        // Temporarily remove collapsed class to measure full height
        const wasCollapsed = wrapper.classList.contains('collapsed');
        wrapper.classList.remove('collapsed');

        const sectionHeight = wrapper.scrollHeight;
        const viewportHeight = window.innerHeight;

        // Restore collapsed state if it was collapsed
        if (wasCollapsed) {
            wrapper.classList.add('collapsed');
        }

        return sectionHeight > viewportHeight;
    }

    // Function to check if section should be collapsed
    function checkSectionCollapse(section) {
        const wrapper = document.querySelector(`.section-collapsible-wrapper[data-section="${section}"]`);
        const button = document.querySelector(`.section-expand-btn[data-section="${section}"]`);

        if (!wrapper || !button) return;

        // Skip if already expanded by user
        if (sectionStates[section].isExpanded) {
            return;
        }

        const shouldCollapse = shouldCollapseSection(wrapper);

        if (shouldCollapse) {
            // Show button and apply collapsed state
            button.classList.add('visible');
            wrapper.classList.add('collapsed');
        } else {
            // Hide button and remove collapsed state
            button.classList.remove('visible');
            wrapper.classList.remove('collapsed');
        }
    }

    // Function to handle button click
    function handleButtonClick(section) {
        const wrapper = document.querySelector(`.section-collapsible-wrapper[data-section="${section}"]`);
        const button = document.querySelector(`.section-expand-btn[data-section="${section}"]`);

        if (!wrapper || !button) return;

        // Mark as expanded and remove collapsed state
        sectionStates[section].isExpanded = true;
        wrapper.classList.remove('collapsed');

        // Hide the button permanently
        button.classList.remove('visible');
    }

    // Initialize all sections
    function initializeSections() {
        sections.forEach(section => {
            checkSectionCollapse(section);

            // Add click handler to button
            const button = document.querySelector(`.section-expand-btn[data-section="${section}"]`);
            if (button) {
                button.addEventListener('click', () => handleButtonClick(section));
            }
        });
    }

    // Check sections on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        // Debounce resize events
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            sections.forEach(section => checkSectionCollapse(section));
        }, 250);
    });

    // Initialize after a short delay to ensure layout is complete
    setTimeout(initializeSections, 100);
}

// Run setup when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupSectionCollapse);
} else {
    setupSectionCollapse();
}
