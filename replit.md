# Dani's Dogs - Pet Grooming Website

## Overview

Dani's Dogs is a static website for a premium pet grooming service business. The project is built using vanilla HTML and CSS, creating a professional online presence for the pet grooming business. The site features a modern, responsive design with a warm and welcoming aesthetic suitable for a pet care service.

## System Architecture

### Frontend Architecture
- **Technology Stack**: Vanilla HTML5 and CSS3
- **Design Approach**: Mobile-first responsive design
- **Styling Strategy**: CSS Custom Properties (CSS Variables) for consistent theming
- **Typography**: Google Fonts (Poppins) for modern, readable text
- **Icons**: Font Awesome for scalable vector icons

### Key Design Decisions
- **Static Site**: Chosen for simplicity, fast loading times, and cost-effective hosting
- **Vanilla Technologies**: No framework dependencies for minimal overhead and maximum performance
- **CSS Variables**: Centralized theming system for easy maintenance and consistent branding

## Key Components

### 1. Header/Navigation
- Fixed navigation with logo and menu items
- Mobile-responsive hamburger menu
- Logo section with paw icon representing the pet grooming theme
- Navigation links: Home, About, Services, Contact

### 2. Branding & Visual Identity
- **Color Palette**: 
  - Primary: Blush pink (#f4a6cd)
  - Secondary: Warm cream (#faf0e6)
  - Accent: Soft beige (#f5deb3)
- **Typography**: Poppins font family with multiple weights
- **Visual Elements**: Paw icon, soft shadows, rounded borders

### 3. Responsive Design System
- Container-based layout with max-width constraints
- CSS Grid/Flexbox for layout management
- Mobile-first responsive breakpoints
- Touch-friendly interface elements

## Data Flow

As a static website, there is no dynamic data flow. Content is served directly from HTML files with styling applied via CSS. The site structure follows a traditional multi-section single-page application pattern.

## External Dependencies

### Content Delivery Networks (CDNs)
- **Google Fonts**: Poppins font family hosting
- **Font Awesome**: Icon library (version 6.4.0)

### Third-party Services
- Google Fonts for web typography
- Font Awesome for scalable vector icons

## Deployment Strategy

### Static Hosting Requirements
- Any static file hosting service (Netlify, Vercel, GitHub Pages, etc.)
- No server-side processing required
- Simple file upload deployment
- CDN-friendly for global content delivery

### Performance Considerations
- Optimized external font loading with preconnect
- Minimal dependencies for fast load times
- Efficient CSS structure with custom properties

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 05, 2025. Initial setup