/* ==========================================================================
   CONTENT CONFIG — EDIT THIS FILE TO UPDATE THE WHOLE WEBSITE
   Everything below (brand, contact, social links, images, videos, services,
   packages, testimonials) is read by assets/js/app.js on every page.
   You never need to touch the HTML/CSS to change content.
   ========================================================================== */

/* Helper: builds an Unsplash image URL. To use YOUR OWN photo instead, simply
   replace the call with a plain path, e.g. "assets/img/my-photo.jpg". */
const u = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

window.SITE = {
  /* ---------- 1. BRAND (temporary name & logo — replace later) ---------- */
  brand: {
    name: "KARTIK CPN FILMS",
    tagline: "Cinematic Photography & Films",
    // Set logoImage to e.g. "assets/img/logo.svg" to use a real logo image.
    // Leave empty to use the text/monogram logo.
    logoImage: "",
    monogram: "KCF",
    siteUrl: "https://YOUR-USERNAME.github.io/YOUR-REPO/", // used for SEO/share links
  },

  /* ---------- 2. CONTACT DETAILS ---------- */
  contact: {
    whatsappNumber: "919999999999", // digits only, with country code (91 = India)
    whatsappMessage: "Hello! I would like to enquire about a photography session.",
    phoneDisplay: "+91 99999 99999",
    phoneLink: "+919999999999",
    email: "hello@example.com",
    address: "Studio 12, Sample Arcade, Main Road, Ranchi, Jharkhand 834001",
    hours: "Mon–Sat, 10:00 AM – 7:00 PM",
    // Map: paste the "Embed a map" src URL from Google Maps → Share → Embed
    mapEmbedUrl:
      "https://www.google.com/maps?q=Ranchi,Jharkhand&output=embed",
  },

  /* ---------- 3. SOCIAL LINKS (icons come from the Simple Icons library) ---------- */
  social: {
    instagram: "https://instagram.com/your.handle",
    facebook: "https://facebook.com/your.page",
    telegram: "https://t.me/your_username",
    whatsapp: "", // auto-built from whatsappNumber above
  },

  /* ---------- 4. BOOKING FORM DELIVERY ----------
     Option A (recommended, free): create a form at https://formspree.io,
     paste its endpoint here, e.g. "https://formspree.io/f/abcdwxyz".
     Option B: leave empty — the form then opens WhatsApp with the details
     prefilled (it will NOT pretend an enquiry was emailed). */
  form: { endpoint: "" },

  /* ---------- 5. HOME PAGE HERO ---------- */
  hero: {
    // Replace with your own file, e.g. "assets/video/hero.mp4" (keep under ~8 MB, 1080p, muted).
    // The sample below is a free CC0 demo clip so playback works out of the box.
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster: u("1519741497674-611481863552", 1800),
    eyebrow: "Photography · Films · Stories",
    headline: "Moments, Framed Like Cinema",
    intro:
      "We create timeless wedding, portrait and commercial imagery with an editorial eye and a cinematic heart.",
  },

  /* ---------- 6. PORTFOLIO (category must match one of `categories`) ---------- */
  categories: ["Weddings", "Pre-Wedding", "Portraits", "Fashion", "Events", "Commercial"],
  portfolio: [
    { src: u("1519741497674-611481863552"), cat: "Weddings", alt: "Bride and groom sharing a quiet moment", featured: true },
    { src: u("1511285560929-80b456fea0bc"), cat: "Weddings", alt: "Wedding ceremony with warm evening light", featured: true },
    { src: u("1465495976277-4387d4b0b4c6"), cat: "Weddings", alt: "Couple walking hand in hand after the ceremony" },
    { src: u("1583939003579-730e3918a45a"), cat: "Weddings", alt: "Bridal details in soft natural light" },
    { src: u("1529634806980-85c3dd6d34ac"), cat: "Pre-Wedding", alt: "Pre-wedding couple portrait outdoors", featured: true },
    { src: u("1537633552985-df8429e8048b"), cat: "Pre-Wedding", alt: "Romantic pre-wedding portrait" },
    { src: u("1494790108377-be9c29b29330"), cat: "Portraits", alt: "Studio portrait of a woman" , featured: true },
    { src: u("1507003211169-0a1dd7228f2d"), cat: "Portraits", alt: "Natural light portrait of a man" },
    { src: u("1469334031218-e382a71b716b"), cat: "Fashion", alt: "Fashion editorial in a golden field" },
    { src: u("1515886657613-9f3515b0c78f"), cat: "Fashion", alt: "High-fashion studio look" },
    { src: u("1492684223066-81342ee5ff30"), cat: "Events", alt: "Celebration event with lights and guests" },
    { src: u("1511795409834-ef04bbd61622"), cat: "Events", alt: "Elegant reception tables" },
    { src: u("1523275335684-37898b6baf30"), cat: "Commercial", alt: "Wristwatch product photograph" },
    { src: u("1505740420928-5e560c06d30e"), cat: "Commercial", alt: "Headphones commercial product shot" },
  ],

  /* ---------- 7. SERVICES ---------- */
  services: [
    { title: "Wedding Photography", from: "₹14,999", img: u("1519741497674-611481863552", 900), alt: "Wedding couple", text: "Full-day storytelling of rituals, emotions and candid moments, delivered as a curated, colour-graded gallery." },
    { title: "Pre-Wedding Photography", from: "₹9,999", img: u("1529634806980-85c3dd6d34ac", 900), alt: "Pre-wedding couple", text: "Relaxed, romantic shoots at scenic locations with styling guidance so you look and feel your best." },
    { title: "Portrait Photography", from: "₹4,999", img: u("1494790108377-be9c29b29330", 900), alt: "Portrait of a woman", text: "Personal, family and professional portraits with refined lighting and natural direction." },
    { title: "Fashion Photography", from: "₹12,999", img: u("1469334031218-e382a71b716b", 900), alt: "Fashion editorial", text: "Editorial and lookbook shoots for models, designers and boutiques, with concept support." },
    { title: "Event Photography", from: "₹7,999", img: u("1492684223066-81342ee5ff30", 900), alt: "Event photography", text: "Corporate functions, birthdays and celebrations captured discreetly, with fast-turnaround highlights." },
    { title: "Commercial Photography", from: "₹9,999", img: u("1523275335684-37898b6baf30", 900), alt: "Commercial product shot", text: "Brand, restaurant and architecture imagery that makes your business look premium." },
    { title: "Cinematic Videography", from: "₹19,999", img: u("1516035069371-29a1b244cc32", 900), alt: "Cinema camera", text: "Highlight films, teasers and promos shot in 4K with licensed music and cinematic grading." },
    { title: "Product Photography", from: "₹3,999", img: u("1505740420928-5e560c06d30e", 900), alt: "Product photography", text: "Clean catalogue and creative lifestyle shots for e-commerce and social media." },
  ],

  /* ---------- 8. PACKAGES (illustrative — edit freely) ---------- */
  packagesNote:
    "These are illustrative sample packages. Final inclusions and prices are fully customisable to your event.",
  packages: [
    { name: "Essential", price: "₹14,999", recommended: false, features: ["4 hours of coverage", "1 photographer", "150 edited photographs", "Online gallery"] },
    { name: "Signature", price: "₹29,999", recommended: true, features: ["8 hours of coverage", "2 photographers", "300 edited photographs", "Cinematic highlight film", "Online gallery"] },
    { name: "Luxury", price: "₹49,999", recommended: false, features: ["Full-day coverage", "2 photographers", "Cinematic highlight film", "Premium album", "Online gallery"] },
  ],
  addons: [
    { name: "Extra coverage hour", price: "₹2,500 / hour" },
    { name: "Premium handcrafted album", price: "from ₹8,000" },
    { name: "Additional photographer", price: "₹6,000" },
    { name: "Pre-wedding shoot", price: "from ₹9,999" },
    { name: "Cinematic wedding film", price: "from ₹19,999" },
    { name: "Drone coverage", price: "₹7,500" },
  ],

  /* ---------- 9. VIDEOS (films page + home showcase) ----------
     For each item use EITHER `file` (mp4 path/URL) OR `youtube` (video ID only).
     `thumb` is the poster image. */
  videos: [
    { title: "Aanya & Kabir — Wedding Film", cat: "Wedding Films", thumb: u("1519741497674-611481863552", 1000), file: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4", length: "Sample" },
    { title: "Under the Stars — Pre-Wedding", cat: "Pre-Wedding Films", thumb: u("1529634806980-85c3dd6d34ac", 1000), file: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4", length: "Sample" },
    { title: "Brand Story — Promo", cat: "Promotional", thumb: u("1523275335684-37898b6baf30", 1000), file: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4", length: "Sample" },
    { title: "Behind the Lens", cat: "Behind the Scenes", thumb: u("1516035069371-29a1b244cc32", 1000), file: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4", length: "Sample" },
    { title: "The Grand Reception — Teaser", cat: "Wedding Films", thumb: u("1511795409834-ef04bbd61622", 1000), file: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4", length: "Sample" },
    { title: "Fashion Reel", cat: "Promotional", thumb: u("1515886657613-9f3515b0c78f", 1000), file: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4", length: "Sample" },
  ],

  /* ---------- 10. ABOUT / PHOTOGRAPHER ---------- */
  about: {
    name: "KARTIK SHARMA",
    role: "Lead Photographer & Filmmaker",
    photo: "assets/img/kartik.jpeg",
    previewText:
      "With over a decade behind the lens, Rohan blends documentary instinct with cinematic composition to turn fleeting moments into heirlooms.",
    story:
      "KARTIK CPN FILMS began with a single camera and a belief that every celebration deserves to be remembered with honesty and beauty. Today we are a small, passionate studio serving couples, families and brands across India.",
    philosophy:
      "We shoot what you feel, not just what you see. Light, emotion and timing guide every frame — never forced poses or heavy filters.",
    stats: [
      { n: "10+", l: "Years of experience" },
      { n: "450+", l: "Events covered" },
      { n: "120+", l: "Films delivered" },
      { n: "100%", l: "Client delight" },
    ],
    specialities: ["Candid wedding storytelling", "Editorial portraits", "Cinematic films", "Brand & product imagery"],
    team: [
      { name: "KARTIK THAKUR", role: "Founder · Lead Photographer", img: "assets/img/kartik.jpeg"},
      { name: "MEERA KAPOOR", role: "Cinematographer", img: u("1494790108377-be9c29b29330", 600) },
      { name: "ARJUN DAS", role: "Editor & Colourist", img: u("1542038784456-1ea8e935640e", 600) },
    ],
  },

  /* ---------- 11. TESTIMONIALS (sample content) ---------- */
  testimonials: [
    { name: "Priya & Karan", event: "Wedding, Jaipur", text: "Every photograph felt like a scene from a film. We relive our day every time we open the gallery." },
    { name: "Sneha Rao", event: "Portrait Session", text: "I was nervous in front of the camera, but the team made it effortless. The results were beyond what I imagined." },
    { name: "Vikram Industries", event: "Commercial Shoot", text: "Professional, punctual and creative. Our catalogue has never looked this premium." },
  ],

  /* ---------- 12. INSTAGRAM PREVIEW (uses portfolio images; edit as needed) ---------- */
  instagramImages: [
    u("1519741497674-611481863552", 500), u("1469334031218-e382a71b716b", 500),
    u("1494790108377-be9c29b29330", 500), u("1511285560929-80b456fea0bc", 500),
    u("1492684223066-81342ee5ff30", 500), u("1529634806980-85c3dd6d34ac", 500),
  ],

  /* ---------- 13. NAVIGATION ---------- */
  nav: [
    { label: "Home", href: "index.html" },
    { label: "About", href: "about.html" },
    { label: "Portfolio", href: "portfolio.html" },
    { label: "Services", href: "services.html" },
    { label: "Pricing", href: "pricing.html" },
    { label: "Films", href: "films.html" },
    { label: "Contact", href: "contact.html" },
  ],
};
