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


## Complete source route and visual review matrix

All 37 registered page components are present in the transferred source and included in the React route registry. The source-code-presence check is complete; the visual comparison remains unchecked until each route has been opened at matching desktop/mobile widths.

| Route | Original component present | Visual/source parity |
|---|---:|---:|
| Accessibility | [x] | [ ] |
| AirFreight | [x] | [ ] |
| Blog | [x] | [ ] |
| BlogPostPage | [x] | [ ] |
| CEOMessage | [x] | [ ] |
| CarbonNeutral | [x] | [ ] |
| Company | [x] | [ ] |
| Contact | [x] | [ ] |
| CookiesPolicy | [x] | [ ] |
| CustomsClearance | [x] | [ ] |
| DocumentAML | [x] | [ ] |
| DocumentAudit2023 | [x] | [ ] |
| DocumentAudit2024 | [x] | [ ] |
| DocumentAudit2025 | [x] | [ ] |
| DocumentCompliance | [x] | [ ] |
| DocumentProhibited | [x] | [ ] |
| DocumentRisk | [x] | [ ] |
| DocumentSanctions | [x] | [ ] |
| Documents | [x] | [ ] |
| DomesticShipping | [x] | [ ] |
| FourPL | [x] | [ ] |
| GetQuote | [x] | [ ] |
| GlobalNetwork | [x] | [ ] |
| Home | [x] | [ ] |
| MetalsTrading | [x] | [ ] |
| PrivacyPolicy | [x] | [ ] |
| Profile | [x] | [ ] |
| ProjectLogistics | [x] | [ ] |
| RailFreight | [x] | [ ] |
| RoadFreight | [x] | [ ] |
| SeaFreight | [x] | [ ] |
| Services | [x] | [ ] |
| TermsConditions | [x] | [ ] |
| Testimonials | [x] | [ ] |
| TrackOrder | [x] | [ ] |
| Warehousing | [x] | [ ] |
| WoodTrading | [x] | [ ] |

## Image-by-image source inventory

The transferred source references 85 Unsplash image URLs across 56 distinct photo IDs. The original URLs and source page placements are retained. The COO portrait is locally hosted. No video URL, video file, video embed or poster was found in the 131 inspected text/source files.

| Image source ID | Source page/component placements | Visual and responsive check |
|---|---|---:|
| `photo-1554224155-6726b3ff858f` | Documents, DocumentPageLayout, Blog, BlogPostPage | [ ] |
| `photo-1606836591695-4d58a73eba1e` | CEOQuote | [ ] |
| `photo-1619468129361-605ebea04b44` | DomesticSection | [ ] |
| `photo-1605745341112-85968b19335b` | HeroSection, Blog, BlogPostPage | [ ] |
| `photo-1578575437130-527eed3abbec` | HeroSection, DomesticShipping, GetQuote | [ ] |
| `photo-1529260830199-42c24126f198` | HeroSection, Blog, BlogPostPage | [ ] |
| `photo-1570710891163-6d3b5c47248b` | QuoteCallout, Services | [ ] |
| `photo-1519003300449-424ad0405076` | RoadCTA | [ ] |
| `photo-1494412574643-ff11b0a5c1c3` | ServicesPreview, DomesticShipping, SeaFreight | [ ] |
| `photo-1474487548417-781cb71495f3` | ServicesPreview, Blog, BlogPostPage | [ ] |
| `photo-1436491865332-7a61a109cc05` | ServicesPreview | [ ] |
| `photo-1601584115197-04ecc0da31d7` | ServicesPreview, Company, RoadFreight | [ ] |
| `photo-1586528116311-ad8dd3c8310d` | ServicesPreview, Blog, BlogPostPage | [ ] |
| `photo-1573164713988-8665fc963095` | Accessibility | [ ] |
| `photo-1569154941061-e231b4aa8da2` | AirFreight | [ ] |
| `photo-1556388158-158ea5ccacbd` | AirFreight | [ ] |
| `photo-1464037866556-6812c9d1c72e` | AirFreight | [ ] |
| `photo-1466611653911-95081537e5b7` | Blog, BlogPostPage | [ ] |
| `photo-1565793979169-ee7c33d6a741` | Blog, BlogPostPage | [ ] |
| `photo-1504307651254-35680f356dfd` | Blog, BlogPostPage, ProjectLogistics | [ ] |
| `photo-1566422972567-39dbc8b67b13` | Blog, BlogPostPage | [ ] |
| `photo-1497366811353-6870744d04b2` | Blog, CEOMessage | [ ] |
| `photo-1448375240586-882707db888b` | CarbonNeutral, WoodTrading | [ ] |
| `photo-1497435334941-8c899ee9e8e9` | CarbonNeutral | [ ] |
| `photo-1441974231531-c6227db76b6e` | CarbonNeutral | [ ] |
| `photo-1423666639041-f56000c27a9a` | Contact | [ ] |
| `photo-1450101499163-c8848c66ca85` | CustomsClearance | [ ] |
| `photo-1554224155-8d04cb21cd6c` | CustomsClearance | [ ] |
| `photo-1516738901171-8eb4fc13bd20` | DomesticShipping | [ ] |
| `photo-1520607162513-77705c0f0d4a` | FourPL | [ ] |
| `photo-1454165804606-c3d57bc86b40` | FourPL | [ ] |
| `photo-1460925895917-afdab827c52f` | FourPL | [ ] |
| `photo-1536599018102-9f803c140fc1` | GlobalNetwork | [ ] |
| `photo-1485871981521-5b1fd3805eee` | GlobalNetwork | [ ] |
| `photo-1467269204594-9661b134dd2b` | GlobalNetwork | [ ] |
| `photo-1512453979798-5ea266f8880c` | GlobalNetwork | [ ] |
| `photo-1451187580459-43490279c0fa` | GlobalNetwork | [ ] |
| `photo-1567789884554-0b844b597180` | MetalsTrading | [ ] |
| `photo-1504328345606-18bbc8c9d7d1` | MetalsTrading | [ ] |
| `photo-1528918652533-dfdb3f368093` | MetalsTrading | [ ] |
| `photo-1497366216548-37526070297c` | Profile | [ ] |
| `photo-1541888946425-d81bb19240f5` | ProjectLogistics | [ ] |
| `photo-1501704163333-86d3832cd4ea` | RailFreight | [ ] |
| `photo-1622340973965-6370cd932bd7` | RailFreight | [ ] |
| `photo-1596245296613-cfcdd8490086` | RailFreight | [ ] |
| `photo-1519003722824-194d4455a60c` | RoadFreight | [ ] |
| `photo-1724597500306-a4cbb7d1324e` | SeaFreight | [ ] |
| `photo-1696287146802-af8ccce45601` | SeaFreight | [ ] |
| `photo-1436491865332-7a61a109db05` | Services | [ ] |
| `photo-1521737604893-d14cc237f11d` | Testimonials | [ ] |
| `photo-1494412574643-ff11b0a5eb19` | TrackOrder | [ ] |
| `photo-1587293852726-70cdb56c2866` | Warehousing | [ ] |
| `photo-1553413077-190dd305871c` | Warehousing | [ ] |
| `photo-1587371169587-0ad13dea4be2` | WoodTrading | [ ] |
| `photo-1513836279014-a89f7a76ae86` | WoodTrading | [ ] |
| Local COO portrait `TC_Nikolai.png` | CEOQuote, CEOMessage, Company | [ ] |

## Standalone behavior and production checks

- [x] Active application code contains no Base44 SDK imports, Base44 API calls, Base44-hosted media URLs, Base44 auth/database wiring, or Base44 backend scaffold. The full source scan found only checklist/workflow documentation references.
- [x] The exact three audit PDFs and four policy PDFs referenced by source are stored in `public/assets/documents/`; the source's HTML-only Compliance Policy route remains HTML without a PDF.
- [x] GitHub Actions production build and Pages artifact upload succeeded on the migration branch.
- [ ] Final Pages deployment for the latest main commit succeeds; open the deployed site and verify the returned Pages URL.
- [ ] Compare all route visuals, the source image placements/crops, responsive layouts, and direct-route refreshes on the deployed site.
- [ ] Verify quote/contact mailto handoff in a browser; delivery is not server-backed.
- [ ] Verify the static tracking limitation is clear and no tracking result is fabricated.
- [ ] Decide and configure a real server-backed login/form inbox only if account sign-in or cross-device storage is required; current profile/drafts are browser-local.
- [ ] Confirm custom domain/DNS when the user is ready; deferred by request.
