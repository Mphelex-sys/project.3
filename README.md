# project.3
# Mphele's Bakery – Website Update Log

## Overview

This document describes all changes made to the Mphele's Bakery website based on the IIE assignment requirements covering **Interactive Elements**, **Dynamic Content**, and **Search Engine Optimisation (SEO)**.

Each page has been updated separately and remains its own standalone HTML file. Pages have not been merged.

---

## File Structure

```
mpheles_bakery/
├── index.html
├── about.html
├── service.html
├── contact.html
├── enquiry.html
├── robots.txt          ← NEW
├── sitemap.xml         ← NEW
├── assets/
│   ├── css/
│   │   └── styles.css  ← UPDATED
│   └── js/             ← NEW FOLDER
│       ├── accordion.js
│       ├── featured.js
│       ├── tabs.js
│       ├── gallery.js
│       ├── form.js
│       └── animations.js
```

---

## Changes by Page

### index.html (Home)

**Interactive Elements:**
- Added an **accordion** component for the "What We Offer" section. Each product category (Bread, Cakes, Cookies, Muffins) expands and collapses when clicked, powered by `accordion.js`.
- Added CSS **animations** (fade-in and slide-up) on sections using IntersectionObserver in `animations.js`.

**Dynamic Content:**
- Added a **"Today's Specials"** section. Product cards are generated dynamically using JavaScript (`featured.js`) and injected into the DOM — no hardcoded HTML cards.

**SEO:**
- Added `<title>` tag with descriptive keywords.
- Added `<meta name="description">` tag.
- Added `<meta name="keywords">` tag.
- Added `<meta name="robots" content="index, follow">`.
- Added Open Graph meta tags (`og:title`, `og:description`, `og:type`).
- Wrapped logo and nav in a `<header>` element for semantic HTML.

---

### about.html (About)

**Interactive Elements:**
- Replaced the static Mission/Vision headings with an interactive **tab component** (`tabs.js`). Tabs for Mission, Vision, and Values switch content without reloading the page.
- Added CSS **animations** (fade-in).

**SEO:**
- Added descriptive `<title>` tag.
- Added `<meta name="description">`, `<meta name="keywords">`, `<meta name="robots">`.
- Added Open Graph tags.
- Wrapped logo and nav in a semantic `<header>`.

---

### service.html (Gallery)

**Interactive Elements:**
- Added a **lightbox** feature (`gallery.js`): clicking any product image opens it in a larger overlay view. The lightbox closes via a close button, clicking outside the image, or pressing the Escape key.
- Added CSS **animations** (fade-in on gallery items).

**Dynamic Content:**
- Added **filter buttons** (All, Bread, Cakes, Muffins, Cookies) that show and hide product cards dynamically using JavaScript, without reloading the page.

**SEO:**
- Added descriptive `<title>`, `<meta name="description">`, `<meta name="keywords">`, `<meta name="robots">`.
- Added Open Graph tags.
- Added `alt` attributes with descriptive text on all `<img>` tags for image optimisation.
- Added `loading="lazy"` attribute on all images to improve page speed.
- Gallery images now use clean descriptive `alt` text (e.g., "Artisan Bread freshly baked at Mphele's Bakery").
- Wrapped logo and nav in a semantic `<header>`.

---

### contact.html (Contact)

**Bug Fix:**
- Fixed the broken `<iframe>` tag — the original was missing the closing `>` on the opening tag, which would cause the map not to display.
- Added `title="Makhado Mall location map"` attribute on the iframe for accessibility.
- Added `loading="lazy"` and `referrerpolicy="no-referrer-when-downgrade"` for better performance and security.
- Wrapped iframe in a `.map-wrapper` div for consistent styling.

**SEO:**
- Added descriptive `<title>` tag.
- Added `<meta name="description">` including phone number and hours.
- Added `<meta name="keywords">`, `<meta name="robots">`.
- Added Open Graph tags.
- Added **Schema.org structured data** (`application/ld+json`) as a `Bakery` type — this enables Local SEO so Google can show business details (address, phone, hours) directly in search results.
- Wrapped logo and nav in a semantic `<header>`.

---

### enquiry.html (Booking)

**Interactive Elements:**
- Added **client-side form validation** (`form.js`). The form checks that Full Name, Phone, and Order are filled in before submission. Inline error messages appear below each field if a field is invalid.
- Phone number is validated with a regular expression to ensure correct format.
- On successful submission, the form hides and a **success confirmation message** appears, confirming the order was received.
- Added CSS **animations** (fade-in).

**SEO:**
- Added descriptive `<title>`, `<meta name="description">`, `<meta name="keywords">`, `<meta name="robots">`.
- Added Open Graph tags.
- Added `id`, `name`, and `placeholder` attributes to all form inputs for better accessibility and search engine understanding.
- Added a default disabled `<option>` to the select field to prompt users to choose.
- Wrapped logo and nav in a semantic `<header>`.

---

## New Files Added

### assets/js/accordion.js
Handles open/close toggle for the accordion on `index.html`. Only one item can be open at a time. Uses `maxHeight` CSS transitions for smooth animation.

### assets/js/featured.js
Dynamically creates and injects product listing cards into `#featured-products` on `index.html` using JavaScript DOM manipulation. Products are stored as a JavaScript array and rendered without hardcoded HTML.

### assets/js/tabs.js
Manages tab switching on `about.html` for the Mission, Vision, and Values sections. Shows the relevant content panel and highlights the active tab button.

### assets/js/gallery.js
Two features in one file:
- **Filter**: shows/hides `.gallery-item` elements by their `data-category` attribute.
- **Lightbox**: opens clicked gallery images in a full-screen overlay with a caption. Closes on button click, background click, or Escape key.

### assets/js/form.js
Validates the booking form on `enquiry.html` before submission. Checks for empty required fields and validates the phone number format. Shows inline error messages and a success banner on valid submission.

### assets/js/animations.js
Uses the browser's `IntersectionObserver` API to add a `visible` class to elements with `.fade-in` or `.slide-up` classes when they scroll into view. Respects the `prefers-reduced-motion` media query via CSS.

### robots.txt
Instructs search engine crawlers to index all pages and points to `sitemap.xml`.

### sitemap.xml
Lists all five pages of the website with their URLs and priority scores to help search engines understand the site structure.

---

## SEO Summary (Section 3 Requirements)

| Requirement | Implemented |
|---|---|
| Keyword Research & meta keywords | All pages |
| Title Tags | All pages |
| Meta Descriptions | All pages |
| Header Tags (H1, H2) | All pages (unchanged structure) |
| Image Optimisation (alt text) | service.html |
| URL Structure | Clean descriptive filenames |
| Internal Linking | Navbar on all pages |
| Mobile-Friendliness | Responsive CSS in styles.css |
| Backlinks / Social Media | Not applicable (static site) |
| Local SEO | Schema.org on contact.html |
| robots.txt | robots.txt (new) |
| sitemap.xml | sitemap.xml (new) |
| Page Speed | lazy loading images |
| Security | No inline scripts; CSP-friendly structure |
