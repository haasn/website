Always commit and push changes to feature branches, and create PRs unless asked otherwise.
Never push directly to master unless asked otherwise.

## Repository Structure

This is a Jekyll-based static website for Niklas Haas's IT consulting business, specializing in multimedia processing, color management, HDR, and performance optimization.

### Core Files
- `index.html` - Main landing page that includes all sections via Jekyll
- `impressum.html` - Legal information page (required for German websites)
- `_config.yml` - Jekyll configuration (site settings, build settings, plugins)
- `CNAME` - Custom domain configuration (niklashaas.de)
- `favicon.svg` - Site favicon

### Templates & Components
- `_layouts/default.html` - Main page layout template
- `_includes/` - Reusable HTML components:
  - `header.html` - Site header with navigation
  - `hero.html` - Hero section with logo
  - `about.html` - About section
  - `services.html` - Services offered
  - `skills.html` - Technical skills
  - `projects.html` - Notable projects
  - `publications.html` - Papers and presentations
  - `testimonials.html` - Client testimonials
  - `contact.html` - Contact form
  - `footer.html` - Site footer

### Styling & Scripts
- `css/style.css` - Main stylesheet with responsive design and theme support
- `js/theme-switcher.js` - Dark/light theme toggle functionality
- `js/section-collapse.js` - Section collapse/expand functionality

### Assets
- `assets/papers/` - PDF files of academic papers (rlnc.pdf, thesis.pdf, wltm.pdf)
- `assets/slides/` - PDF files of presentation slides (vdd18.pdf, vdd25.pdf)

### CI/CD
- `.github/workflows/deploy.yml` - Deployment workflow for production
- `.github/workflows/pr-preview.yml` - Preview deployment for pull requests
