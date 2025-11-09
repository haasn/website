// Hue Adjuster
// This script allows users to adjust the hue of all CSS colors on the page

// Helper function to convert hex to HSL
function hexToHSL(hex) {
    // Remove # if present
    hex = hex.replace(/^#/, '');

    // Parse hex values
    let r, g, b;
    if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
    } else {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
    }

    // Convert to 0-1 range
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }

    return {
        h: h * 360,
        s: s * 100,
        l: l * 100
    };
}

// Helper function to convert RGB to HSL
function rgbToHSL(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }

    return {
        h: h * 360,
        s: s * 100,
        l: l * 100
    };
}

// Parse color string (hex, rgb, rgba, hsl, hsla) to HSL
function parseColorToHSL(colorStr) {
    colorStr = colorStr.trim();

    // Handle hex colors
    if (colorStr.startsWith('#')) {
        return hexToHSL(colorStr);
    }

    // Handle rgb/rgba
    const rgbMatch = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
    if (rgbMatch) {
        return rgbToHSL(
            parseInt(rgbMatch[1]),
            parseInt(rgbMatch[2]),
            parseInt(rgbMatch[3])
        );
    }

    // Handle hsl/hsla
    const hslMatch = colorStr.match(/hsla?\(([\d.]+)(?:deg)?,\s*([\d.]+)%,\s*([\d.]+)%(?:,\s*[\d.]+)?\)/);
    if (hslMatch) {
        return {
            h: parseFloat(hslMatch[1]),
            s: parseFloat(hslMatch[2]),
            l: parseFloat(hslMatch[3])
        };
    }

    return null;
}

// Store original color values (before any hue adjustment)
const originalColors = new Map();

// Initialize and store original CSS custom properties
function storeOriginalColors() {
    const root = document.documentElement;
    const styles = getComputedStyle(root);

    // Get all CSS custom properties
    const allProps = Array.from(document.styleSheets)
        .flatMap(sheet => {
            try {
                return Array.from(sheet.cssRules);
            } catch (e) {
                return [];
            }
        })
        .filter(rule => rule.selectorText === ':root' || rule.selectorText === ':root[data-theme="dark"]')
        .flatMap(rule => Array.from(rule.style))
        .filter(prop => prop.startsWith('--'));

    // Store unique properties
    const uniqueProps = [...new Set(allProps)];

    uniqueProps.forEach(prop => {
        const value = styles.getPropertyValue(prop).trim();
        if (value && !originalColors.has(prop)) {
            originalColors.set(prop, value);
        }
    });
}

// Apply hue rotation to all CSS colors
function applyHueRotation(hueDelta) {
    const root = document.documentElement;

    originalColors.forEach((originalValue, prop) => {
        // Handle multiple colors (e.g., in gradients, shadows, etc.)
        const processedValue = originalValue.replace(
            /#[0-9a-fA-F]{3,6}|rgba?\([^)]+\)|hsla?\([^)]+\)/g,
            (match) => {
                const hsl = parseColorToHSL(match);
                if (!hsl) return match;

                // Apply hue rotation
                let newHue = (hsl.h + hueDelta) % 360;
                if (newHue < 0) newHue += 360;

                // Preserve saturation and lightness
                // Get alpha if present
                const alphaMatch = match.match(/,\s*([\d.]+)\s*\)/);
                const alpha = alphaMatch ? parseFloat(alphaMatch[1]) : 1;

                if (alpha < 1) {
                    return `hsla(${newHue}, ${hsl.s}%, ${hsl.l}%, ${alpha})`;
                } else {
                    return `hsl(${newHue}, ${hsl.s}%, ${hsl.l}%)`;
                }
            }
        );

        root.style.setProperty(prop, processedValue);
    });

    // Also update dark theme if active
    if (root.getAttribute('data-theme') === 'dark') {
        // Trigger a reflow to ensure dark theme colors are also updated
        root.style.setProperty('--hue-rotation', hueDelta.toString());
    }
}

// Reset to original colors
function resetColors() {
    const root = document.documentElement;
    originalColors.forEach((originalValue, prop) => {
        root.style.setProperty(prop, originalValue);
    });
    root.style.removeProperty('--hue-rotation');
}

// Initialize hue adjuster functionality
function setupHueAdjuster() {
    const hueControl = document.getElementById('hueControl');
    const hueInput = document.getElementById('hueInput');
    const hueReset = document.getElementById('hueReset');

    if (!hueControl || !hueInput || !hueReset) {
        console.warn('Hue adjuster elements not found');
        return;
    }

    // Store original colors on first load
    storeOriginalColors();

    // Load saved hue preference
    const savedHue = localStorage.getItem('hueRotation');
    if (savedHue !== null) {
        const hueValue = parseInt(savedHue);
        hueInput.value = hueValue;
        if (hueValue !== 0) {
            applyHueRotation(hueValue);
        }
    }

    // Update hue on input change
    hueInput.addEventListener('input', (e) => {
        const hueValue = parseInt(e.target.value);
        applyHueRotation(hueValue);
        localStorage.setItem('hueRotation', hueValue.toString());
    });

    // Reset button
    hueReset.addEventListener('click', (e) => {
        e.preventDefault();
        hueInput.value = 0;
        resetColors();
        localStorage.setItem('hueRotation', '0');
    });

    // Re-apply hue rotation when theme changes
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                // Re-store original colors for new theme
                originalColors.clear();
                storeOriginalColors();

                // Re-apply current hue rotation
                const currentHue = parseInt(hueInput.value) || 0;
                if (currentHue !== 0) {
                    applyHueRotation(currentHue);
                }
            }
        });
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
    });
}
