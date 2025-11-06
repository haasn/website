// Section Collapse/Expand Functionality
// Collapses long sections when there are fewer than 3 cards side-by-side

function setupSectionCollapse() {
    const sections = ['services', 'skills', 'projects', 'publications'];
    const sectionStates = {};

    // Initialize state for each section
    sections.forEach(section => {
        sectionStates[section] = {
            isExpanded: false,
            shouldCollapse: false
        };
    });

    // Function to count how many cards fit in one row
    function getCardsPerRow(wrapper) {
        const grid = wrapper.querySelector('[class$="-grid"]');
        if (!grid) return 3; // Default to 3 if grid not found

        const cards = Array.from(grid.children);
        if (cards.length === 0) return 3;

        // Get the top position of the first card
        const firstCardTop = cards[0].getBoundingClientRect().top;

        // Count how many cards are on the same row (same top position)
        let cardsInFirstRow = 0;
        for (const card of cards) {
            const cardTop = card.getBoundingClientRect().top;
            // Use a small threshold (5px) to account for minor differences
            if (Math.abs(cardTop - firstCardTop) < 5) {
                cardsInFirstRow++;
            } else {
                break;
            }
        }

        return cardsInFirstRow;
    }

    // Function to check if section should be collapsed
    function checkSectionCollapse(section) {
        const wrapper = document.querySelector(`.section-collapsible-wrapper[data-section="${section}"]`);
        const button = document.querySelector(`.section-expand-btn[data-section="${section}"]`);

        if (!wrapper || !button) return;

        const cardsPerRow = getCardsPerRow(wrapper);
        const shouldCollapse = cardsPerRow < 3;

        sectionStates[section].shouldCollapse = shouldCollapse;

        if (shouldCollapse) {
            // Show button and apply collapsed state if not expanded
            button.classList.add('visible');
            if (!sectionStates[section].isExpanded) {
                wrapper.classList.add('collapsed');
                button.innerHTML = 'Show More <i class="fas fa-chevron-down"></i>';
                button.classList.remove('expanded');
            }
        } else {
            // Hide button and remove collapsed state
            button.classList.remove('visible');
            wrapper.classList.remove('collapsed');
            // Reset expanded state when not collapsing
            sectionStates[section].isExpanded = false;
        }
    }

    // Function to handle button click
    function handleButtonClick(section) {
        const wrapper = document.querySelector(`.section-collapsible-wrapper[data-section="${section}"]`);
        const button = document.querySelector(`.section-expand-btn[data-section="${section}"]`);

        if (!wrapper || !button) return;

        sectionStates[section].isExpanded = !sectionStates[section].isExpanded;

        if (sectionStates[section].isExpanded) {
            wrapper.classList.remove('collapsed');
            button.innerHTML = 'Show Less <i class="fas fa-chevron-down"></i>';
            button.classList.add('expanded');
        } else {
            wrapper.classList.add('collapsed');
            button.innerHTML = 'Show More <i class="fas fa-chevron-down"></i>';
            button.classList.remove('expanded');

            // Smooth scroll to section top when collapsing
            const section_element = wrapper.closest('section');
            if (section_element) {
                const rect = section_element.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const sectionTop = rect.top + scrollTop;

                // Only scroll if we're below the section
                if (window.pageYOffset > sectionTop) {
                    window.scrollTo({
                        top: sectionTop - 20,
                        behavior: 'smooth'
                    });
                }
            }
        }
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
