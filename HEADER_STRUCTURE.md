# Header Structure Documentation

## Overview
The header has been completely rebuilt from scratch using semantic HTML and flexbox layout. The old header relied on absolute positioning, z-index hacks, and negative margins which caused overlap and clickability issues.

## Layout Structure

### Desktop Layout (> 991px)
```
┌─────────────────────────────────────────────────────┐
│  [Nav Left Items]   [LOGO]   [Nav Right Items]      │
│   ← flex: 1      flex-shrink: 0     flex: 1 →       │
└─────────────────────────────────────────────────────┘
```

The header uses a three-column flexbox layout:
1. **Left navigation** (flex: 1) - grows to fill available space, items aligned to the right
2. **Logo** (flex-shrink: 0) - takes its natural space in the center
3. **Right navigation** (flex: 1) - grows to fill available space, items aligned to the left

### Mobile Layout (≤ 991px)
```
┌─────────────────────────────────────────────────────┐
│  [LOGO]                          [☰ Hamburger]       │
└─────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────┐
│                  [Nav Items]                         │
│              (when menu opened)                      │
└─────────────────────────────────────────────────────┘
```

On mobile:
- Logo displays at the top
- Hamburger menu button shown on the right
- Navigation lists hidden by default (`display: none`)
- When hamburger is clicked, navigation lists appear in vertical layout
- All items centered for easy tap access

## HTML Structure

```html
<header class="site-header">
  <nav class="header-nav">
    <button class="mobile-menu-toggle" id="mobileMenuToggle">
      <span class="hamburger-icon"></span>
    </button>
    
    <ul class="nav-list nav-left">
      <li><a href="...">Link</a></li>
      ...
    </ul>
    
    <a href="index.html" class="logo-link">
      <img src="..." alt="..." class="logo-img">
    </a>
    
    <ul class="nav-list nav-right">
      <li><a href="...">Link</a></li>
      ...
    </ul>
  </nav>
</header>
```

## CSS Key Principles

1. **NO absolute positioning for layout** - Everything uses flexbox
2. **NO negative margins** - Spacing is natural
3. **NO z-index above 1** - Only used on mobile toggle button (z-index: 1)
4. **NO pointer-events hacks** - All elements naturally clickable
5. **Semantic HTML** - Uses `<header>`, `<nav>`, `<ul>`, `<li>`, `<a>`
6. **Flexbox only** - `display: flex` for all layout

## Key CSS Classes

- `.site-header` - Main header container with background gradient
- `.header-nav` - Flex container for the navigation layout
- `.nav-list` - Flex list of navigation items
- `.nav-left` - Left navigation group (flex: 1, justify-content: flex-end)
- `.nav-right` - Right navigation group (flex: 1, justify-content: flex-start)
- `.logo-link` - Center logo (flex-shrink: 0)
- `.mobile-menu-toggle` - Hamburger button (hidden on desktop)

## Mobile Menu Toggle

JavaScript is used to toggle the `.active` class on navigation lists:
```javascript
document.getElementById('mobileMenuToggle').addEventListener('click', function() {
  document.querySelector('.nav-left').classList.toggle('active');
  document.querySelector('.nav-right').classList.toggle('active');
});
```

When `.active` is added, the CSS changes `display: none` to `display: flex`, making the menu visible.

## Benefits of New Structure

1. **No overlap** - Logo takes its own space, never overlaps links
2. **Fully clickable** - All navigation items are unobstructed
3. **Clean layout** - No positioning hacks or workarounds
4. **Responsive by design** - Mobile layout naturally flows
5. **Maintainable** - Simple flexbox structure, easy to modify
6. **Accessible** - Semantic HTML, keyboard navigable
7. **Performant** - No complex z-index stacking contexts

## Requirements Met

✅ Semantic HTML: `<header>`, `<nav>`, `<ul>`, `<li>`, `<a>`  
✅ NO absolute positioning for layout  
✅ NO negative margins  
✅ NO z-index above 1  
✅ Uses Flexbox ONLY (display: flex)  
✅ Logo NEVER overlaps links  
✅ Header responsive by design  
✅ Each nav item fully clickable and unobstructed  
✅ Logo takes its own space in layout flow
