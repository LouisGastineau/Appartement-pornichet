# Copilot Instructions for Appartement Pornichet

## Project Overview

This is a static website for "Fleur de thé" (C301), a vacation rental apartment in Pornichet, France. The site provides information about the apartment, residence, local activities, restaurants, and house rules for potential guests.

## Technology Stack

- **HTML5**: Semantic markup for website structure
- **Bootstrap 5.3.3**: Responsive design framework via CDN
- **CSS3**: Custom styling in `style.css` with CSS variables for theming
- **Vanilla JavaScript**: No frameworks - pure JavaScript for interactivity
- **Open-Meteo API**: Weather data integration (no API key required)

## Code Style and Conventions

### Language
- **UI Text**: All user-facing text must be in French (France)
- **Code Comments**: Preferably in French, but English is acceptable
- **Variable Names**: Use clear, descriptive names in English or French

### HTML
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<section>`, `<footer>`)
- Maintain consistent indentation (2 spaces)
- Include `lang="fr"` attribute on `<html>` tag
- Use Bootstrap classes for responsive layout
- Keep accessibility in mind (alt text, ARIA labels, semantic structure)

### CSS
- Use CSS custom properties (variables) defined in `:root` for theming
- Support both light and dark modes (`.dark-mode` class on `<body>`)
- Follow the coastal theme color palette:
  - `--coastal-blue`: Primary brand color
  - `--soft-sand`: Accent color
  - `--warm-white`: Background color
  - `--sea-foam`: Secondary accent
  - `--deep-ocean`: Dark primary
  - `--sunset-coral`: Tertiary accent
- Maintain the existing gradient and styling patterns
- Use relative units (rem, em, %) for responsive design

### JavaScript
- Use vanilla JavaScript (no jQuery or frameworks)
- Use modern ES6+ syntax (const/let, arrow functions, template literals)
- Keep scripts modular - separate files for different features:
  - `dark-mode.js`: Theme switching
  - `weather.js`: Weather widget
  - `carousel.js`: Gestion des indicateurs de carrousel pour un nombre variable d’images
- Add error handling for API calls
- Use `addEventListener` for event handling

## File Organization

```
/
├── .github/              # GitHub configuration
├── public/
│   └── img/             # Images and logos
├── screenshots/         # Documentation screenshots
├── *.html               # Main pages (index, appartement, residence, etc.)
├── *.js                 # JavaScript modules
├── style.css            # Main stylesheet
├── *.md                 # Documentation files
└── README.md            # Main documentation
```

## Development Practices

### No Build System
- This is a static site with no build process
- Files are served directly without compilation
- External dependencies loaded via CDN
- No package.json or npm dependencies

### Testing
- Manual testing by opening HTML files in a browser
- Use local server for development:
  ```bash
  # Using Python (built-in, no installation required)
  python3 -m http.server 8000
  
  # Using Node.js http-server (requires Node.js installed)
  npx http-server -p 8000
  ```
- Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- Test responsive design at different viewport sizes
- Verify both light and dark modes

### API Keys

## Common Tasks

### Adding a New Page
1. Create new HTML file with consistent header structure (see `HEADER_STRUCTURE.md`)
2. Include Bootstrap CSS and `style.css`
3. Add navigation links to header
4. Include dark mode and weather scripts at bottom
5. Update navigation in all existing HTML pages (index.html, appartement.html, residence.html, regles.html, activities.html, equipement.html, se-nourrir.html, contact.html)
6. Add page description to README.md

Note: Maintaining navigation consistency across pages requires updating multiple files. Consider this maintenance burden when adding new pages.

### Modifying the Header
- Header structure is consistent across all pages
- See `HEADER_STRUCTURE.md` for the canonical structure
- Changes should be applied to all HTML files for consistency
- Mobile menu toggle functionality is inline in each HTML file

### Styling Changes
- Use CSS custom properties for colors to maintain theme consistency
- Update both light mode (`:root`) and dark mode (`.dark-mode`) variables
- Test changes in both themes
- Maintain the coastal/beach aesthetic

### Adding Interactive Features
- Create a new `.js` file for the feature
- Include it in relevant HTML pages before closing `</body>` tag
- Use modern JavaScript syntax
- Add appropriate error handling
- Consider mobile responsiveness

## Important Files

- `README.md`: Main project documentation
- `HEADER_STRUCTURE.md`: Canonical header structure for consistency
- `style.css`: All custom styles and theming
- `dark-mode.js`: Theme switching logic
- `weather.js`: Weather widget integration
- `carousel.js`: Gestion dynamique des indicateurs de carrousel

## Website Content Guidelines

- Maintain the welcoming, vacation-focused tone
- Use emojis tastefully to enhance readability (🏖️, 🏠, 🎨, etc.)
- Keep French grammar and spelling accurate
- Information should be helpful for potential guests
- Emphasize the coastal location and beach proximity

## Accessibility

- Use semantic HTML elements
- Include alt text for all images
- Ensure sufficient color contrast in both themes
- Support keyboard navigation
- Test with screen readers when adding new features
- Use ARIA labels where appropriate

## Performance

- Keep page load times fast
- Optimize images in `public/img/`
- Use CDN for Bootstrap (already configured)
- Minimize inline JavaScript
- Lazy load images if adding many new images

## Browser Support

- Target modern browsers (last 2 versions)
- Chrome, Firefox, Safari, Edge
- Mobile browsers on iOS and Android
- Responsive design for mobile, tablet, and desktop

## Questions to Ask

When working on this project, consider:
- Does this maintain the coastal theme aesthetic?
- Is the text in proper French?
- Does it work in both light and dark modes?
- Is it responsive on mobile devices?
- Does it maintain consistency with existing pages?
- Have I tested it in a browser?
