# Getting Started with TechVision Website

## Prerequisites

- **Node.js**: v18 or higher (download from https://nodejs.org/)
- **npm**: v9 or higher (comes with Node.js)
- **Git**: For version control

## Installation & Setup

### 1. Clone or Extract the Project

```bash
cd /Users/anuragmac/Desktop/Website
```

### 2. Install Dependencies

```bash
npm install
```

This will install:
- React 18
- Vite 5 (build tool)
- Tailwind CSS (styling)
- React Router (navigation)
- React Icons
- Axios (API calls)

### 3. Start Development Server

```bash
npm run dev
```

The website will open at `http://localhost:5173`

## Available Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting (eslint)
npm run lint
```

## Project Structure

```
Website/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation header
│   │   ├── Footer.tsx          # Footer with links
│   │   ├── ServiceCard.tsx     # Reusable service card
│   │   ├── PortfolioItem.tsx   # Portfolio card component
│   │   └── TestimonialCard.tsx # Testimonial component
│   ├── pages/
│   │   ├── Home.tsx            # Landing page
│   │   ├── Services.tsx        # Services listing
│   │   ├── Portfolio.tsx       # Portfolio showcase
│   │   ├── About.tsx           # Company information
│   │   └── Contact.tsx         # Contact form
│   ├── App.tsx                 # Main app router
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles
├── public/                     # Static files (add images here)
├── package.json                # Dependencies
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
├── tsconfig.json               # TypeScript config
├── index.html                  # HTML entry point
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore rules
├── DEPLOYMENT.md               # Deployment instructions
└── README.md                   # Project documentation
```

## Customization Guide

### Change Company Name & Logo

**File**: `src/components/Navbar.tsx` (line ~20)
```typescript
<span className="font-bold text-xl text-gray-800">TechVision</span>
```

**File**: `src/components/Footer.tsx` (line ~10)
```typescript
<span className="font-bold text-lg">TechVision</span>
```

### Update Colors

**File**: `tailwind.config.js`
```javascript
colors: {
  primary: '#1a5c7a',      // Change primary color
  secondary: '#ff6b6b',    // Change secondary color
  accent: '#4ecdc4',       // Change accent color
}
```

### Add Your Services

**File**: `src/pages/Home.tsx` (line ~15)
```typescript
const services = [
  {
    icon: '💻',
    title: 'Your Service Name',
    description: 'Your service description...'
  },
  // Add more services
]
```

### Update Contact Information

**File**: `src/components/Footer.tsx` (line ~30+)
```typescript
<a href="tel:+918092580652">+91 8092580652</a>
<a href="mailto:anuragkumar88583@gmail.com">anuragkumar88583@gmail.com</a>
<span>Your City, Country</span>
```

### Add Team Members

**File**: `src/pages/About.tsx` (line ~40)
```typescript
const team = [
  { 
    name: 'Your Name', 
    role: 'Your Role', 
    specialty: 'Your Specialty' 
  },
]
```

### Update Portfolio Projects

**File**: `src/pages/Portfolio.tsx` (line ~10)
```typescript
const portfolioItems = [
  {
    image: '🏪',
    title: 'Project Name',
    category: 'Web Development',
    description: 'Your project description...'
  },
]
```

## Adding Images

1. Create a `public/images` folder
2. Add your images there
3. Update emoji placeholders with image paths:

**Before**:
```typescript
<div className="...">💡</div>
```

**After**:
```typescript
<img src="/images/logo.png" alt="Logo" className="..." />
```

## Backend Integration

### Contact Form Setup

**File**: `src/pages/Contact.tsx` (line ~50)

Replace the form submission:

```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/contact`,
      formData
    )
    // Handle success
    setSubmitted(true)
  } catch (error) {
    console.error('Error:', error)
  }
}
```

Create `.env` file:
```env
VITE_API_URL=https://your-api-domain.com/api
```

## Performance Tips

1. **Add Real Images**
   - Replace emoji placeholders with actual project screenshots
   - Use WebP format for faster loading
   - Compress images to <500KB

2. **Enable Caching**
   - Add Cache-Control headers in deployment
   - Use CDN for static assets

3. **Optimize Bundle**
   - Already optimized with Vite
   - Consider adding `react-lazy-image` for images

4. **SEO Optimization**
   - Update meta tags in `index.html`
   - Add Open Graph tags
   - Create sitemap.xml
   - Add robots.txt

## Deployment

See `DEPLOYMENT.md` for detailed instructions on deploying to:
- ✅ Vercel (Recommended)
- ✅ Netlify
- ✅ Azure Static Web Apps
- ✅ AWS Amplify
- ✅ Traditional Hosting

### Quick Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

## Troubleshooting

### Port Already in Use

```bash
# Use different port
npm run dev -- --port 3000
```

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styling Issues

```bash
# Rebuild Tailwind CSS
npm run dev
```

## Browser DevTools

Press `F12` in your browser to open DevTools:
- **Console**: Check for errors
- **Network**: Monitor API calls
- **Responsive Design Mode**: Test on different devices

## VS Code Extensions (Recommended)

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Thunder Client (API testing)
- Git Graph
- ESLint

## Support & Help

### Common Issues

**Q: Website won't start?**
A: Make sure Node.js v18+ is installed: `node --version`

**Q: Styling looks broken?**
A: Clear browser cache and rebuild: `npm run dev`

**Q: Contact form not working?**
A: Check browser console for errors and ensure backend API is configured

### Getting Help

1. Check `README.md` for general info
2. Check `DEPLOYMENT.md` for deployment issues
3. Review comments in component files
4. Check browser console for JavaScript errors

## Next Steps

1. ✅ Install dependencies (`npm install`)
2. ✅ Start development server (`npm run dev`)
3. ⬜ Customize company information
4. ⬜ Replace emoji placeholders with real images
5. ⬜ Update services and portfolio
6. ⬜ Add backend API integration
7. ⬜ Test all pages and forms
8. ⬜ Deploy to production

## Technology Stack Details

- **React 18**: Modern UI library with hooks
- **Vite**: Next-gen build tool (instant HMR)
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Router v6**: Client-side routing
- **React Icons**: 5000+ icons
- **Axios**: HTTP client for APIs

## Performance Metrics

Current build sizes:
- HTML: ~1KB (gzipped)
- CSS: ~16KB → 3.7KB (gzipped)
- JS: ~212KB → 63KB (gzipped)

**Total**: ~67KB gzipped (production ready!)

---

**Ready to build?** Start with:

```bash
npm run dev
```

Visit `http://localhost:5173` and start customizing! 🚀
