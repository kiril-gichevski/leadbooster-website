# 🚀 Quick Deployment Guide

## Step-by-Step: Deploy to GitHub Pages (Free)

### 1. Push to GitHub

```bash
# Navigate to website directory
cd website

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial LeadBooster website"

# Create main branch
git branch -M main

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/leadbooster-website.git

# Push to GitHub
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/leadbooster-website`
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

✅ Your site will be live in 2-3 minutes at:
`https://YOUR_USERNAME.github.io/leadbooster-website/`

---

## 🌐 Add Custom Domain (Optional)

### Cost: ~$10-15/year for domain name

### Where to Buy Domain:
- **Cloudflare** (recommended, cheapest): [cloudflare.com/products/registrar](https://www.cloudflare.com/products/registrar/)
- **Namecheap**: [namecheap.com](https://www.namecheap.com)
- **Google Domains**: [domains.google](https://domains.google)

### After Buying Domain:

#### A. Configure DNS Records

Add these records at your domain registrar:

**For root domain (leadbooster.dev):**
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
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

#### B. Update CNAME File

Edit `website/CNAME` file:
```
yourdomain.com
```

Commit and push:
```bash
git add CNAME
git commit -m "Update custom domain"
git push
```

#### C. Configure in GitHub

1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter: `yourdomain.com`
3. Click **Save**
4. Wait 24 hours for DNS to propagate
5. Enable **Enforce HTTPS** (once DNS is verified)

✅ Your site will be live at: `https://yourdomain.com`

---

## 🎥 Add YouTube Demo Video

### 1. Upload Video to YouTube

1. Create a demo video (5-10 minutes)
2. Upload to YouTube
3. Set visibility to **Public** or **Unlisted**
4. Copy the video ID from URL:
   - URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - Video ID: `dQw4w9WgXcQ`

### 2. Update HTML

Find this section in `index.html` (around line 280):

```html
<div class="video-placeholder">
    <!-- Delete this placeholder -->
</div>
```

Replace with:

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

### 3. Commit and Push

```bash
git add index.html
git commit -m "Add demo video"
git push
```

---

## ✏️ Update Content Checklist

Before going live, update these in `index.html`:

### Required Updates:

- [ ] **Line 27**: Update Google Workspace Marketplace URL
  ```html
  <a href="YOUR_ACTUAL_MARKETPLACE_URL" class="btn btn-primary">
  ```

- [ ] **Line 96**: Update main CTA URL (appears multiple times)

- [ ] **Email Address**: Replace `contact@leadbooster.dev` with your email
  - Find all instances: `Ctrl+F` → search for `contact@leadbooster.dev`

- [ ] **GitHub Links**: Update repository URLs
  - Find all instances of: `https://github.com/kiril-gichevski/leadbooster`

- [ ] **Demo Video**: Add your YouTube embed (see above)

### Optional Updates:

- [ ] **Logo**: Replace SVG logo in navbar (line ~30)
- [ ] **Favicon**: Add to `<head>`: `<link rel="icon" href="images/favicon.png">`
- [ ] **Stats**: Update numbers if needed (lines 96-108)
- [ ] **Pricing**: Adjust pricing tiers (lines 350-400)
- [ ] **Social Media**: Add your social links in footer (lines 520-540)

---

## 📊 Add Google Analytics (Optional)

### 1. Create GA4 Property

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create account and property
3. Get your Measurement ID (format: `G-XXXXXXXXXX`)

### 2. Add to Website

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

The site already tracks CTA clicks automatically!

---

## 🎨 Customize Colors

Edit `css/styles.css` (lines 2-15):

```css
:root {
    --primary: #6366f1;        /* Main brand color (buttons, links) */
    --primary-dark: #4f46e5;   /* Hover states */
    --secondary: #10b981;      /* Success/highlight color */
    --dark: #0f172a;           /* Text color */
}
```

---

## 🧪 Testing Checklist

Before launch:

- [ ] Test on mobile device
- [ ] Test all CTA buttons work
- [ ] Test all navigation links
- [ ] Check spelling/grammar
- [ ] Test demo video plays
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Check page load speed: [pagespeed.web.dev](https://pagespeed.web.dev)

---

## 🚨 Troubleshooting

### Site not updating?

```bash
# Hard refresh browser
Ctrl + Shift + R  (Windows/Linux)
Cmd + Shift + R   (Mac)

# Check GitHub Actions
Go to: https://github.com/YOUR_USERNAME/repo/actions
```

### Custom domain not working?

```bash
# Check DNS propagation
Go to: https://dnschecker.org
Enter your domain: yourdomain.com

# Wait 24-48 hours for full propagation
```

### YouTube video not showing?

- Ensure video is Public or Unlisted (not Private)
- Use `/embed/` URL format
- Check browser console for errors (F12)

---

## 📞 Need Help?

- GitHub Pages Docs: [docs.github.com/pages](https://docs.github.com/pages)
- Custom Domain Guide: [docs.github.com/pages/custom-domain](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## 🎉 That's It!

Your professional LeadBooster website is now live!

**Next steps:**
1. Share the link on social media
2. Add to your email signature
3. Submit to Google Search Console
4. Create content/blog posts for SEO
5. Run Google Ads or social media campaigns

Good luck! 🚀
