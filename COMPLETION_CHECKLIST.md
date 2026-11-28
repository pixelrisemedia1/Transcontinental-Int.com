# Transcontinental Group International — Completion Checklist

Source: https://transcontinental-int.com
Repository: pixelrisemedia1/Transcontinental-Int.com
Status: IN PROGRESS — source code transfer and Base44 decoupling are underway; visual parity and production verification remain open.
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
- [x] Import all 37 distinct registered page components and the shared source layout, route registry, and styles into the working branch; visual comparison is still open
- [ ] Verify route and service names, section copy, operational claims, statistics, port/coverage details and contact information exactly
- [ ] Implement quote flow with cargo/service fields, validation and real authorized delivery
- [ ] Implement tracking flow with a valid lookup service or clear truthful unavailable state
- [ ] Verify every document listing and downloadable file, including file version, type, page count and working download
- [ ] Review video embeds, transcripts/captions, poster frames, player controls and mobile behavior if present
- [x] Replace all identified Base44 media URLs in active route components with local repo assets; remove the Base44 SDK and runtime dependency from the site build.
- [ ] Scan repository metadata and the built public requests after cleanup to confirm no Base44 references remain.
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

## Verified audit notes — 2026-11-27
- [x] Inspected source and copied homepages. Source home includes Search, Services & Trading, Company, Documents, More, Login/Sign Up, Track & Trace, freight tabs, wood/metals trading, quote form, COO quote/photo, documents request, contact/location and consent controls.
- [x] Replaced the source COO image URL with the exact locally vendored source file at `public/assets/TC_Nikolai.png`.
- [x] Confirmed the copy home currently uses in-page anchors for many links where the source navigates to dedicated pages; route and account parity remain open.
- [ ] Verify every service, trading, documents, account, legal and tracking route and all source image/video/document assets.
- [ ] Verify quote and contact email handoff, search, cookie consent, local support panel, accessibility controls and browser-local profile behavior.

### Transcontinental image verification detail
- [x] The source has one Base44-hosted executive image and seven Base44-hosted/linked PDFs; the executive image and all seven PDFs are now vendored locally. Unsplash image URLs are still external.
- [ ] Map each local candidate to its source image (especially the three hero slides and COO photo) and verify exact crop, responsive variants, alt text, and successful loads for every route.

## Repository-level checks
- [x] Inspected the repository file tree and confirmed the root homepage file and deployment workflow path.
- [x] Compared local asset filenames against references in the root homepage HTML.
- [x] Scanned the root homepage HTML for Base44, Supabase, and Unsplash URL references: none found in `index.html`.
- [ ] Scan every repository file, document, metadata field and deployed network request for any remaining third-party/Base44 runtime or media dependency.
- [ ] Confirm all listed local assets are source-matched and used in the appropriate page; unused files are not removed until their role is understood.
- [ ] Verify the latest deployment for this checklist commit and smoke-test every route and asset after deployment.

## Transcontinental source inventory (checked 2026-11-27)
- [x] Confirmed homepage routes for Home, Services, Company, Documents, GetQuote, SeaFreight, WoodTrading, MetalsTrading, Contact, TrackOrder, Accessibility, TermsConditions and PrivacyPolicy.
- [x] Confirmed homepage includes Search, More, Login/Sign Up, freight service tabs, wood/metals cards, quote form, COO testimonial/photo, domestic/coastal section, document request, Google map, cookie and accessibility controls.
- [x] Captured seven unique homepage photo roles: three hero/carousel images, sea freight, COO portrait, coastal shipping, road freight; plus an embedded map.
- [ ] Inspect every linked route and the More menu, search, Login/Sign Up, TrackOrder, documents and legal destinations; verify which external services can be replaced independently.


## Source route and document audit — additional verified detail
- [x] Quote page is a 3-step flow; first step requires First Name and Email, with last name/company/phone optional.
- [x] Documents section has audit, compliance, risk/safety and legal categories. Direct source document routes include DocumentAudit2023, DocumentAudit2024, DocumentAudit2025, DocumentAML, DocumentProhibited, DocumentRisk, DocumentSanctions, TermsConditions, PrivacyPolicy and CookiesPolicy.
- [x] Verified source PDF destinations are Base44-hosted for 2023/2024/2025 audit reports, AML policy, Prohibited Cargo Policy, Risk Assessment Policy and Sanctions Compliance Policy. These exact files must be acquired from authorized source and stored locally before removing Base44 references.
- [x] Fargo source product routes also inspected separately (inventory belongs in Fargo checklist).
- [x] Acquire and locally host the three audit PDFs and four policy PDFs referenced by the source.
- [ ] Compare each local PDF's filename, version, page count, contents and public open/download behavior against the source. `DocumentCompliance` intentionally has no attached PDF in the source and is restored as source HTML.
- [ ] Inspect remaining document and legal text, embedded media, images and every route against source; no Base44 URL or runtime may remain.


## Migration progress — 2026-11-28
- [x] Copied all 142 Base44 text source files into branch `tcl-base44-transfer`; route registry contains 37 distinct pages.
- [x] Removed `@base44/sdk` and `@base44/vite-plugin` from the Vite build configuration and package manifest.
- [x] Replaced SDK calls with browser-local storage and email handoff; no Base44 backend requests are part of the new app shell.
- [x] Added a Vite build plus GitHub Pages SPA fallback workflow. Branch builds are intended to run without deploying; main deploys after merge.
- [ ] Build in GitHub Actions and fix all errors before merge/deploy.
- [ ] Open every route in a browser at desktop/mobile widths and compare typography, backgrounds, images, content, spacing, interactions and responsive behavior with the source.
- [ ] Confirm the public deployment and its complete route and asset list; custom domain/DNS remains deferred by request.
