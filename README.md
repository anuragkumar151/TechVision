# TechVision - IT Solutions Company Website

A modern, production-ready React website for an IT solutions company. Built with React, TypeScript, Tailwind CSS, and Vite for optimal performance.

## Features

✨ **Modern Design**
- Responsive and mobile-first design
- Beautiful gradient backgrounds
- Smooth animations and transitions
- Professional UI/UX

🚀 **Performance**
- Fast loading with Vite
- Optimized bundle size
- SEO-friendly structure
- Production-ready

📱 **Pages**
- **Home** - Hero section with CTA, services overview, portfolio highlights, testimonials
- **Services** - Comprehensive service listings with technology stack
- **Portfolio** - Showcase of past projects and success metrics
- **About** - Company story, team, values, why choose us
- **Contact** - Contact form, business hours, FAQ, location info

🎨 **Components**
- Responsive Navbar with mobile menu
- Service Cards
- Portfolio Items
- Testimonial Cards
- Beautiful Footer

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Icons**: React Icons
- **Language**: TypeScript
- **HTTP Client**: Axios

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ServiceCard.tsx
│   ├── PortfolioItem.tsx
│   └── TestimonialCard.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css          # Global styles
```

## Customization

### Colors
Edit color scheme in `tailwind.config.js`:
```js
colors: {
  primary: '#1a5c7a',
  secondary: '#ff6b6b',
  accent: '#4ecdc4',
}
```

### Company Information
Update company details in:
- `src/components/Footer.tsx` - Contact info
- `src/pages/Contact.tsx` - Business hours and location
- `src/pages/About.tsx` - Company story and team

### Services
Add or modify services in:
- `src/pages/Home.tsx` - Services section
- `src/pages/Services.tsx` - Full services page

### Portfolio Projects
Update portfolio items in:
- `src/pages/Home.tsx` - Featured projects
- `src/pages/Portfolio.tsx` - Full portfolio

## Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy using Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to Azure Static Web Apps

```bash
# Build
npm run build

# Deploy using Azure CLI
az staticwebapp create --name techvision --source . --location "East US" --sku Standard
```

### Deploy to AWS

```bash
# Build
npm run build

# Use AWS Amplify
npm install -g @aws-amplify/cli
amplify init
amplify add hosting
amplify publish
```

## Backend Integration

To connect a backend API:

1. Update `axios` requests in `Contact.tsx`:
```typescript
import axios from 'axios'

const response = await axios.post('/api/contact', formData)
```

2. Set environment variables in `.env`:
```
VITE_API_URL=https://api.yourdomain.com
```

## SEO Optimization

- Meta tags in `index.html`
- Semantic HTML structure
- Fast page load times
- Mobile-responsive design
- Open Graph meta tags (can be added)

## Performance Tips

1. **Image Optimization**: Replace emoji placeholders with actual images
2. **Code Splitting**: Components are already optimized
3. **Lazy Loading**: Add React.lazy() for heavy components
4. **Caching**: Configure proper cache headers on deployment

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use this template for your projects

## Support

For customization and support:
- Email: anuragkumar88583@gmail.com
- Phone: +91 8092580652

---

**Ready to launch?** Start the development server with `npm run dev` and customize the content to match your company details!
