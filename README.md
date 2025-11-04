# niklashaas.de

Personal consulting website for Niklas Haas - IT consulting in multimedia processing, color management, HDR, and performance optimization.

## Structure

- `index.html` - Main landing page
- `impressum.html` - Legal information page (required for German websites)
- `css/style.css` - Stylesheet with responsive design
- `js/theme-switcher.js` - Dark/light theme toggle

## Features

- Responsive design for mobile and desktop
- Dark/light theme switcher
- Sections: About, Services, Skills, Projects, Testimonials, Contact

## Deployment

Serve the root directory with any static web server (nginx, Apache, etc.).

## PR Previews

Pull requests automatically deploy preview versions of the website to GitHub Pages. When you open or update a PR, a GitHub Actions workflow will:

1. Deploy the PR changes to `https://haasn.github.io/website/pr-previews/pr-{number}/index.html`
2. Post a comment on the PR with the preview URL
3. Update the preview when new commits are pushed
4. Clean up the preview when the PR is closed

This allows you to review website changes before merging them to production.
