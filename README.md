# Pet Business Website Template

A professional, responsive website template designed specifically for pet service businesses like groomers, dog walkers, trainers, and pet care providers.

## Features

- **Modern Design**: Clean, professional layout with warm pet-friendly colors
- **Fully Responsive**: Mobile-first design that works on all devices
- **Interactive Elements**: Animated hero section and image carousel
- **Easy Customization**: Well-commented code with clear customization instructions
- **Fast Loading**: Vanilla HTML/CSS/JavaScript for optimal performance
- **SEO Ready**: Proper meta tags and semantic HTML structure

## Quick Start Guide

### 1. Customize Your Business Information

**Header & Navigation:**
- Replace "Your Pet Business" with your actual business name
- Update logo: Replace `assets/template-logo.svg` with your logo

**Contact Information:**
- Update phone number: `(555) 123-4567`
- Update email: `hello@yourpetbusiness.com`
- Update address: `123 Pet Street, Your City, State 12345`
- Update business hours in the Contact section

### 2. Add Your Content

**About Section:**
- Write your business story
- Replace placeholder service photos with real ones

**Services Section:**
- Modify services to match what you offer
- Update service descriptions and icons

**Gallery Section:**
- Replace placeholder images with photos of your work
- Add more gallery items if needed (update HTML and adjust JavaScript)

### 3. Customize Colors & Styling

Edit the CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #f4a6cd;    /* Your brand color */
    --secondary-color: #faf0e6;  /* Background color */
    --accent-color: #f5deb3;     /* Accent color */
}
```

### 4. Add Your Social Media

Update social media links in the Contact section:
- Facebook
- Instagram
- Add more platforms as needed

## File Structure

```
├── index.html              # Main website file
├── styles.css              # All styling and responsive design
├── README.md               # This file
└── assets/
    ├── template-logo.svg           # Default logo (replace with yours)
    ├── placeholder-service-1.svg   # Replace with your service photos
    ├── placeholder-service-2.svg   # Replace with your service photos
    ├── gallery-placeholder-*.svg   # Replace with your work photos
    └── template-attribution.svg    # Template attribution
```

## Customization Tips

### Adding More Services
1. Copy an existing service card in the Services section
2. Update the icon, title, and description
3. Ensure the services grid layout remains balanced

### Expanding the Gallery
1. Add more `gallery-slide` divs in the HTML
2. Add corresponding dots in the `carousel-dots` section
3. Update the JavaScript if you want to change auto-slide timing

### Changing Fonts
The template uses Google Fonts (Poppins). To change:
1. Update the Google Fonts link in the HTML head
2. Update `font-family` declarations in CSS

### Mobile Responsiveness
The template is mobile-first. Check these breakpoints:
- Mobile: Default styles
- Tablet: 768px and up
- Desktop: 1024px and up

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This template was created by Paws & Pixels. Feel free to customize for your pet business needs.

## Support

For customization help or questions, the template includes detailed comments throughout the code to guide you through modifications.

---

**Created by Paws & Pixels** - Professional website templates for pet businesses