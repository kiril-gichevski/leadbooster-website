# LeadBooster Website

Professional marketing website for LeadBooster - the cost-efficient Clay alternative.

## 🚀 Quick Start

This is a static website built with pure HTML, CSS, and JavaScript. No build process required!

### Local Development

1. Open `index.html` in your browser, or
2. Use a simple local server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

Visit `http://localhost:8000`

## 📦 Deployment Options

### Option 1: GitHub Pages (Recommended - Free)

#### Step 1: Create a GitHub Repository

```bash
cd website
git init
git add .
git commit -m "Initial website commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/leadbooster.git
git push -u origin main
```

#### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select branch: **main** and folder: **/ (root)**
5. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/leadbooster/`

#### Step 3: Add Custom Domain (Optional)

1. Buy a domain (e.g., `leadbooster.dev` from Namecheap, GoDaddy, or Cloudflare)
2. Add DNS records at your domain registrar:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153

   Type: A
   Name: @
   Value: 185.199.109.153

   Type: A
   Name: @
   Value: 185.199.110.153

   Type: A
   Name: @
   Value: 185.199.111.153

   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```
3. In GitHub Settings → Pages, enter your domain in "Custom domain"
4. Enable "Enforce HTTPS" (wait 24h for DNS propagation)

The `CNAME` file in this repo already contains `leadbooster.dev` - update it with your domain.

### Option 2: Vercel (Free)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Option 3: Netlify (Free)

1. Drag and drop the `website` folder to [netlify.com/drop](https://netlify.com/drop)
2. Or connect your GitHub repo

### Option 4: Cloudflare Pages (Free)

1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Connect your GitHub repository
3. Build settings:
   - Build command: (leave empty)
   - Build output directory: `/`
4. Deploy

## 🎨 Customization

### Update Content

All content is in `index.html`. Key sections to customize:

- **Hero Section**: Update the main headline and value proposition
- **Stats**: Update the numbers (77% cost savings, 50K leads/day, etc.)
- **Pricing**: Adjust pricing tiers
- **Demo Video**: Replace the placeholder with your YouTube embed
- **Contact Email**: Update `contact@leadbooster.dev` to your email

### Add YouTube Video

Replace this section in `index.html` (around line 280):

```html
<div class="video-placeholder">
    <!-- Replace this with your YouTube embed -->
</div>
```

With:

```html
<iframe
    width="100%"
    height="600"
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
```

### Update Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --primary: #6366f1;        /* Main brand color */
    --primary-dark: #4f46e5;   /* Hover states */
    --secondary: #10b981;      /* Accent color */
}
```

### Update Links

Update these links throughout `index.html`:

- **Google Workspace Marketplace**: Replace all instances of `https://workspace.google.com/marketplace` with your actual listing URL
- **GitHub Repository**: Update `https://github.com/kiril-gichevski/leadbooster` with your repo
- **Contact Email**: Update `contact@leadbooster.dev`
- **Social Media**: Add your social media links in the footer

## 📊 Analytics

### Add Google Analytics

Add before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

The JavaScript in `main.js` already includes GA event tracking for CTA clicks.

## 🎯 SEO Optimization

### Meta Tags (Already Included)

- Title, description, and keywords are set
- Open Graph tags for social sharing (add these if needed)

### Add Sitemap

Create `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://leadbooster.dev/</loc>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Submit to Search Engines

- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

## 📁 File Structure

```
website/
├── index.html          # Main landing page
├── css/
│   └── styles.css      # All styling
├── js/
│   └── main.js         # Interactive features
├── images/             # Add your images here
├── CNAME               # Custom domain configuration
├── .nojekyll           # Tells GitHub Pages not to use Jekyll
└── README.md           # This file
```

## ✅ Pre-Launch Checklist

- [ ] Update all placeholder text
- [ ] Add your YouTube demo video
- [ ] Update Google Workspace Marketplace URL
- [ ] Update contact email
- [ ] Add your logo/favicon
- [ ] Test all CTA buttons
- [ ] Test on mobile devices
- [ ] Add Google Analytics
- [ ] Set up custom domain
- [ ] Test all links
- [ ] Add OG image for social sharing

## 🖼️ Adding Logo/Images

1. Add images to the `images/` folder
2. Update the logo SVG in the navbar (line ~30 in `index.html`)
3. Add a favicon:

```html
<link rel="icon" type="image/png" href="images/favicon.png">
```

## 📱 Mobile Responsive

The site is fully responsive. Test it on:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🚨 Common Issues

**GitHub Pages not updating?**
- Wait 2-3 minutes for changes to deploy
- Check Actions tab for build status
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**Custom domain not working?**
- Wait 24-48 hours for DNS propagation
- Check DNS records are correct
- Enable "Enforce HTTPS" in GitHub Pages settings

**YouTube video not showing?**
- Ensure you're using the embed URL (`/embed/VIDEO_ID`)
- Check video privacy settings (must be Public or Unlisted)

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Email: contact@leadbooster.dev

## 📄 License

MIT License - feel free to use this template for your own projects!
