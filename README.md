# Aurelia Frames — Premium Photography Website

A static 7-page site (plus custom 404) built with plain HTML, CSS and JavaScript. No build step, no frameworks.

Pages: `index.html`, `about.html`, `portfolio.html`, `services.html`, `pricing.html`, `films.html`, `contact.html`, `404.html`.

## 1. Where to change content
Almost everything is in ONE file: **`assets/js/content.js`**. Each block is numbered and commented.

| You want to change | Section in content.js |
|---|---|
| Brand name, logo, site URL | 1. `brand` |
| WhatsApp number, phone, email, address, map | 2. `contact` |
| Instagram / Facebook / Telegram links | 3. `social` |
| Where form enquiries go | 4. `form` |
| Homepage video, poster, headline | 5. `hero` |
| Portfolio photos and categories | 6. `portfolio`, `categories` |
| Services and starting prices | 7. `services` |
| Packages, inclusions, add-ons | 8. `packages`, `addons` |
| Film thumbnails and videos | 9. `videos` |
| Photographer, team, stats | 10. `about` |
| Testimonials | 11. `testimonials` |
| Instagram preview images | 12. `instagramImages` |

**Your own photos:** put files in `assets/img/` (create the folder) and replace `src: u("...")` with `src: "assets/img/wedding-1.jpg"`. Aim for 1600px wide, JPG, under 300 KB each.
**Your own videos:** put an MP4 in `assets/video/` and set `videoUrl: "assets/video/hero.mp4"` (keep the hero clip under ~8 MB, muted, 1080p). For films use `file: "assets/video/film1.mp4"` or `youtube: "VIDEO_ID"`.
**Colours and fonts:** the `:root` block at the top of `assets/css/style.css`.
**Page titles / descriptions / social-share text:** the `<title>` and `<meta>` tags at the top of each HTML file. After you know your final website address, set `brand.siteUrl` and replace the sample share image in the `og:image` tag of each page.

## 2. Booking form
- **Recommended (free):** create a form at https://formspree.io (free tier is limited to a small number of submissions per month), copy its endpoint into `form.endpoint`. Enquiries are then emailed to you and the page shows success only if Formspree confirms it.
- **If the endpoint is left empty (default):** the form checks the fields, then opens WhatsApp with the details pre-filled. Nothing is claimed as "sent" until the visitor presses Send in WhatsApp.

## 3. Deploying on GitHub Pages (free)
1. Create a GitHub repository and upload everything in this folder (keep `.nojekyll`).
2. Repository → Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Your site appears at `https://YOUR-USERNAME.github.io/YOUR-REPO/`.
4. Custom domain (optional): add it under Settings → Pages and set the DNS records your registrar needs.

Note: GitHub Pages shows `404.html` for unknown addresses. It loads its styles from relative paths, so it displays correctly at the site root; with a custom domain this is fully reliable.

## 4. Third-party services and costs
| Item | Cost |
|---|---|
| GitHub Pages hosting | Free |
| Custom domain (optional) | Paid yearly by you to a registrar |
| Formspree form delivery | Free tier, paid plans if volume grows |
| Google Fonts (Cormorant Garamond, Montserrat) | Free |
| Social icons (Simple Icons CDN) | Free |
| Sample photos (Unsplash) | Free under the Unsplash licence; replace with your own |
| Sample video (MDN CC0 clip) | Free; replace with your own |

## 5. Important notes
- Sample photos are loaded from Unsplash and the sample video from a public demo clip. Replace them with your own before launch; own files are also faster and do not depend on outside sites.
- Sample prices and packages are illustrative. The phone number, email, address and social links are placeholders.
- Open `index.html` through a local server or the GitHub Pages URL for the full experience (e.g. run `python3 -m http.server` in this folder).
