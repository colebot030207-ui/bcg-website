# Bucks County Gutter — SEO-Optimized Website

This is the **multi-page version built for search engines** — the one you should
host at buckscountygutter.com. It's identical in design to the single-file
preview, but structured so Google can find and rank each page.

## What's in here

```
site_seo/
├── index.html                          ← home page
├── services/
│   ├── gutter-cleaning.html            ← targets "gutter cleaning Bucks County"
│   ├── installation.html               ← "seamless gutter installation …"
│   ├── repair.html                     ← "gutter repair …"
│   ├── gutter-guards.html              ← "gutter guards …"
│   └── powerwashing.html               ← "powerwashing …"
├── areas/                              ← LOCAL landing pages (rank for town searches)
│   ├── gutter-cleaning-doylestown.html ← "gutter cleaning Doylestown"
│   ├── gutter-cleaning-warrington.html ← "gutter cleaning Warrington"
│   └── gutter-cleaning-warminster.html ← "gutter cleaning Warminster"
├── css/ (style.css, main.js)
├── assets/ (logo, favicon)
├── sitemap.xml                         ← lists every page for Google
└── robots.txt                          ← points crawlers to the sitemap
```

## What SEO is already built in

- **A real, separate page per service and per town** — each with its own URL,
  so Google can rank the right page for the right search. This is the single
  biggest reason to use this version over the one-file one.
- **Unique title + meta description per page**, written around the phrase people
  actually search ("Gutter Cleaning in Bucks County, PA", etc.).
- **Canonical URLs + Open Graph tags** on every page (clean sharing on
  social/text, no duplicate-content confusion).
- **Structured data (Schema.org):**
  - `LocalBusiness` on every page (name, phone, hours, area served, founder)
  - `Service` schema on each service page
  - `FAQPage` schema on service + town pages — your FAQs can appear directly in
    Google results as expandable questions.
- **Town landing pages** with genuinely local copy (not just the town name
  swapped in) — the highest-ROI on-site move for a local trade.
- **sitemap.xml + robots.txt**, internal linking between services/towns/footer,
  descriptive image alt text, fast/light pages, mobile-friendly.

## ⚠️ Still placeholder — replace before launch
- **Photos** — Unsplash URLs stand in for your real job photos (every image
  falls back gracefully if a URL breaks). Real photos help SEO and trust.
- **Stats** ("Local / Free / 100% / 24hr") and **testimonials** — make these
  true before launch. Invented reviews are a trust + legal risk.
- **Formspree `YOUR_FORM_ID`** — sign up at formspree.io so the form emails you.
- **Instagram / Facebook `#` links** in the contact + footer.

## YOUR SEO ACTION LIST (in priority order)

These matter more than anything on the site itself for a local business:

1. **Google Business Profile** (free, do first). Claim it, set name/phone/area/
   hours, list services. This is what shows in the map results for "near me"
   searches — it drives the most calls.
2. **Get reviews.** Ask every happy customer for a Google review. 10–20 real
   reviews will out-perform any website tweak for local ranking.
3. **Host this multi-page version** (not the single file) at your domain.
4. **Submit your sitemap** to Google Search Console (free): add your site,
   verify ownership, submit `sitemap.xml`. Tells Google about every page.
5. **Keep name/phone/address identical** everywhere (site, GBP, Facebook,
   Instagram) — Google cross-checks this "NAP" consistency.
6. **Add real photos** — especially before/afters of local jobs.
7. Over time: add more town pages (copy an existing one in /areas/ and edit),
   and consider a simple blog ("How often to clean gutters in PA") for
   long-tail searches.

## Editing with Claude Code
Open this folder, run `claude`, and e.g.:
- "Add an area page for Newtown, matching the Doylestown one."
- "Swap the hero photo for assets/my-photo.jpg across the site."
- "Update the stats to real numbers: 8 years, 300 jobs."

## Hosting (free, includes HTTPS)
Drag this whole folder into **Netlify** or **Cloudflare Pages**, or connect a
GitHub repo, then point buckscountygutter.com at it. Submit the sitemap in
Search Console afterward.
