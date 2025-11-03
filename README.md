# niklashaas.de

Professional business website for Niklas Haas - Independent IT Consultant

## Overview

This is a static website showcasing consulting services in multimedia processing, color management, HDR, and performance optimization.

## Structure

- `index.html` - Main landing page with all sections
- `impressum.html` - Legal information page (required for German websites)
- `css/style.css` - Stylesheet with responsive design

## Features

- Fully static - servable with stock nginx
- Responsive design for mobile and desktop
- Professional layout with modern styling
- Sections for:
  - About & Expertise
  - Services
  - Projects
  - Testimonials
  - Contact

## Deployment

Simply serve the root directory with any static web server. For nginx:

```nginx
server {
    listen 80;
    server_name niklashaas.de;
    root /path/to/website;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

## Updating Content

To add projects, edit the `.projects-grid` section in `index.html`.

To add testimonials, edit the `.testimonials-grid` section in `index.html`.

To update the Impressum, edit `impressum.html` with your actual address and contact details.
