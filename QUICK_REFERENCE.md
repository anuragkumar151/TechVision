# TechVision Website - Quick Reference Card

## 🚀 START HERE

```bash
# View your website (currently running)
http://localhost:5173/
```

---

## ⚡ Essential Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run code linting |

---

## 🎨 Key Files to Customize

| File | What to Change |
|------|---------------|
| `src/components/Navbar.tsx` | Company logo & name |
| `src/components/Footer.tsx` | Contact info & social |
| `tailwind.config.js` | Colors (primary, secondary) |
| `src/pages/Home.tsx` | Services & hero text |
| `src/pages/Services.tsx` | Full service descriptions |
| `src/pages/Portfolio.tsx` | Your projects |
| `src/pages/About.tsx` | Team & company story |
| `src/pages/Contact.tsx` | Contact form & info |
| `index.html` | Page title & meta tags |

---

## 📝 Customization Examples

### Change Company Name
**File**: `src/components/Navbar.tsx` (line 20)
```typescript
<span className="font-bold text-xl">YOUR COMPANY NAME</span>
```

### Change Primary Color
**File**: `tailwind.config.js`
```javascript
colors: {
  primary: '#YOUR_HEX_CODE',  // Change this
}
```

### Add Your Service
**File**: `src/pages/Home.tsx` (line 8)
```typescript
{
  icon: '💻',
  title: 'Your Service Name',
  description: 'Your description here'
}
```

### Update Contact Info
**File**: `src/components/Footer.tsx` (line 30)
```typescript
<a href="tel:+YOUR_PHONE">+YOUR PHONE</a>
<a href="mailto:YOUR_EMAIL">YOUR EMAIL</a>
```

---

## 🌐 Deployment (Choose One)

### Vercel (Easiest - 30 seconds)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Azure Static Web Apps
```bash
az staticwebapp create --name techvision --source . --location "East US"
```

---

## 📁 Project Structure Quick View

```
Website/
├── src/
│   ├── pages/          ← UPDATE CONTENT HERE
│   ├── components/     ← UPDATE STYLES HERE
│   ├── App.tsx         ← Routes
│   └── index.css       ← Global styles
├── public/             ← ADD IMAGES HERE
├── package.json        ← Dependencies
├── vite.config.ts      ← Build config
├── tailwind.config.js  ← Colors & styles
└── README.md           ← Full documentation
```

---

## ✨ Page URLs

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Landing page |
| Services | `/services` | Service listings |
| Portfolio | `/portfolio` | Your projects |
| About | `/about` | Company info |
| Contact | `/contact` | Contact form |

---

## 🔄 Workflow

1. **Edit** → Make changes to files
2. **Save** → Files auto-reload (HMR)
3. **Test** → View at http://localhost:5173/
4. **Build** → `npm run build`
5. **Deploy** → Push to production

---

## 🐛 Quick Fixes

| Problem | Solution |
|---------|----------|
| Port 5173 in use | `npm run dev -- --port 3000` |
| Styling broken | Clear cache: Cmd+Shift+Delete |
| Build fails | `rm -rf node_modules` then `npm install` |
| Changes not showing | Hard refresh: Cmd+Shift+R |

---

## 📚 Documentation

- **README.md** - Project overview
- **GETTING_STARTED.md** - Detailed setup guide
- **DEPLOYMENT.md** - How to deploy
- **PROJECT_SUMMARY.md** - Complete summary

---

## 🎯 To-Do List

### Today
- [ ] Explore website at http://localhost:5173/
- [ ] Review all pages

### This Week
- [ ] Change company name & logo
- [ ] Update colors
- [ ] Add your services
- [ ] Update portfolio

### This Month
- [ ] Add real images
- [ ] Connect backend API
- [ ] Deploy to production
- [ ] Set up domain

---

## 💡 Pro Tips

1. **Emojis**: Replace with real images from `public/images`
2. **Colors**: Match your brand colors in `tailwind.config.js`
3. **Content**: Update all placeholder text with your content
4. **Images**: Compress images <500KB for faster loading
5. **SEO**: Update meta tags in `index.html`

---

## 📞 Tech Stack

| Tech | Version | Purpose |
|------|---------|---------|
| React | 18 | UI Framework |
| Vite | 5 | Build Tool |
| Tailwind | 3.3 | Styling |
| React Router | 6 | Navigation |
| TypeScript | Latest | Type Safety |

---

## ✅ Status

- ✅ Development server running
- ✅ All pages created
- ✅ Responsive design done
- ✅ Production build optimized
- ⬜ Backend integration (next step)
- ⬜ Deployment (ready when you are)

---

## 🚀 Next Step

**Visit your website now:**
```
http://localhost:5173/
```

**Then customize using GETTING_STARTED.md**

---

**Happy building! 🎉**
