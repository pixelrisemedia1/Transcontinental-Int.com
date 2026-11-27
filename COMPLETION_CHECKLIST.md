# Transcontinental Group International — Completion Checklist

Source: https://transcontinental-int.com
Repository: pixelrisemedia1/Transcontinental-Int.com
Status: IN PROGRESS — unchecked items are not verified complete.
Rule: Check an item only after comparing against the source or testing the public deployment and recording evidence in the commit/issue/notes.

## 1. Routes and source pages
- [ ] Home
- [ ] About Us
- [ ] Our Services and all nested service routes
- [ ] Sea Freight
- [ ] Rail Freight
- [ ] Air Freight
- [ ] Road Freight
- [ ] Warehousing
- [ ] Domestic & Coastal shipping
- [ ] Wood Trading
- [ ] Metals Trading
- [ ] Get a Quote
- [ ] Track & Trace
- [ ] Documents
- [ ] Profile/account routes
- [ ] Contact
- [ ] Accessibility and all legal routes (extract full source list)

## 2. Images, video, documents and other media
- [ ] assets/hero-cargo.webp — verify exact source hero and responsive crop
- [ ] assets/sea-freight.webp and assets/coastal.webp — verify service placements and crops
- [ ] assets/road-freight.webp and assets/cargo.webp — verify sections/cards
- [ ] assets/global-trade.webp — verify trading section imagery
- [ ] assets/nikolai.webp — verify source person, identity, caption, approval and crop; replace locally hosted Base44 media
- [ ] Inventory all source videos, posters, logos, route/port photos, document thumbnails, badges and icons; map each one to its page

## 3. Site-specific content and functionality
- [ ] Rebuild every freight, trading, domestic/coastal, quote, tracking, document, profile, contact and legal route found in source
- [ ] Verify route and service names, section copy, operational claims, statistics, port/coverage details and contact information exactly
- [ ] Implement quote flow with cargo/service fields, validation and real authorized delivery
- [ ] Implement tracking flow with a valid lookup service or clear truthful unavailable state
- [ ] Verify every document listing and downloadable file, including file version, type, page count and working download
- [ ] Review video embeds, transcripts/captions, poster frames, player controls and mobile behavior if present
- [ ] Replace all Base44-hosted media and remove Base44 runtime, SDK, APIs, auth, database and form dependencies from the copy
- [ ] Confirm person/employee photos and testimonial quotes are source-accurate and authorized
- [ ] Recreate nav menus, service detail routes, 24/7 support links, phone/email, map and footer links

## Shared production acceptance checks
- [ ] Verify source route inventory against the live source and archived export; record date and evidence for each route.
- [ ] Compare each page at matching desktop, tablet and mobile viewports; record unresolved visual differences.
- [ ] Audit every image, logo, icon, video, poster, caption, document and embedded asset; verify local/independent URL, dimensions, crop, alt text and successful public loading.
- [ ] Confirm no Base44 media URLs, SDK/runtime, API, auth, storage, form or database dependency remains in the copied site or its public requests.
- [ ] Verify every navigation destination, CTA, form, menu, carousel, modal, filter and document link; no dead controls or fake success states.
- [ ] Verify accurate title/description/social metadata, favicon, headings, canonical URL plan, robots/sitemap when appropriate and not-found behavior.
- [ ] Check keyboard use, focus visibility, contrast, labels, alt text, reduced-motion, mobile touch targets and responsive reflow.
- [ ] Check spelling, dates, claims, addresses, phone numbers, email addresses, legal content and document versions against approved source material.
- [ ] Check browser console, failed network requests, broken links, 404s, image loading and performance on desktop/mobile.
- [ ] Verify GitHub Actions deployment succeeds; open the live deployed copy in a fresh session and directly load/refresh every route.
- [ ] Record final verification date, deployed commit, public URL, and any remaining limitation. Custom domain/DNS is intentionally deferred until requested.
