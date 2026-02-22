# DEPLOYMENT GUIDE

## Quick Deployment Options

Your TechVision website is ready to deploy! Choose one of these platforms:

## 1. **Vercel (Recommended - Easiest)**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# For production
vercel --prod
```

**Advantages:**
- Free tier with generous limits
- Automatic deployments from Git
- Zero-config setup
- Edge functions support
- Analytics included

## 2. **Netlify**

```bash
# Build locally
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

**Setup:**
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Domain setup and SSL automatic

## 3. **Azure Static Web Apps**

```bash
# Login to Azure
az login

# Create and deploy
az staticwebapp create \
  --name techvision \
  --resource-group myResourceGroup \
  --source . \
  --location "East US" \
  --sku Standard
```

**Via Azure Portal:**
1. Create Static Web Apps resource
2. Connect GitHub repository
3. Configure build settings
4. Deploy automatically

## 4. **AWS Amplify**

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize
amplify init

# Add hosting
amplify add hosting

# Deploy
amplify publish
```

**Features:**
- Automatic builds from Git
- Global CDN
- Custom domains
- SSL included

## 5. **Traditional Hosting (Shared/VPS)**

For cPanel, Plesk, or traditional shared hosting:

```bash
# Build the project
npm run build

# Upload the 'dist' folder contents to your web root
# Usually via FTP, SFTP, or file manager
```

## Environment Variables

Create a `.env` file in the root:

```env
# API Configuration
VITE_API_URL=https://api.techvision.com

# Analytics
VITE_ANALYTICS_ID=your_analytics_id
```

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Mobile responsiveness working
- [ ] Contact form sends emails
- [ ] Navigation links working
- [ ] SEO meta tags present
- [ ] Images loading properly
- [ ] SSL certificate active
- [ ] Domain configured
- [ ] Analytics setup
- [ ] Custom email configured

## Custom Domain Setup

### For Vercel/Netlify:
1. Go to domain settings
2. Add custom domain
3. Update DNS records (CNAME/A records)
4. Wait 24-48 hours for propagation

### For Azure:
1. Resource > Custom domains
2. Add your domain
3. Update DNS records
4. Validate ownership

## Backend Integration

To connect contact form to your backend:

**Update `Contact.tsx`:**
```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/contact`,
      formData
    )
    setSubmitted(true)
  } catch (error) {
    console.error('Error:', error)
  }
}
```

## Monitoring & Analytics

Add Google Analytics:

```typescript
// In main.tsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

useEffect(() => {
  window.gtag?.('config', 'GA_MEASUREMENT_ID')
}, [location])
```

## Performance Optimization

After deployment, optimize with:

1. **Image Optimization**
   - Use WebP format
   - Compress images
   - Lazy load images

2. **Caching**
   - Cache static assets (365 days)
   - Cache HTML (1 hour)

3. **CDN**
   - Enable CDN in deployment platform
   - Cloudflare integration available

## Troubleshooting

### Build fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment fails
- Check Node.js version (18+ recommended)
- Verify environment variables
- Check build logs

### Site slow
- Enable gzip compression
- Use CDN
- Optimize images
- Enable caching

## Updating Your Site

After deployment:

```bash
# Make changes locally
git add .
git commit -m "Update content"
git push

# Deployment happens automatically!
```

## Costs Estimation

- **Vercel**: Free tier or $20+/month
- **Netlify**: Free tier or Pro plans
- **Azure**: $10-20/month for small sites
- **AWS Amplify**: Pay-per-use, typically $5-15/month
- **Traditional Hosting**: $5-20/month

## Support

Need help with deployment? Contact:
- Email: anuragkumar88583@gmail.com
- Phone: +91 8092580652

Happy deploying! 🚀
