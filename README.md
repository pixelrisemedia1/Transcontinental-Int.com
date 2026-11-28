# Transcontinental Group International website

This repository contains the independently buildable React/Vite version of the Transcontinental website source. The transferred site includes 37 registered routes and the original shared layout and styling.

## Development

- Node.js 22+
- `npm install`
- `npm run dev`
- `npm run build`

## GitHub Pages

The project is built with the repository path `/Transcontinental-Int.com/`. GitHub Actions creates a production build and adds an SPA fallback so route links can be loaded directly. Pushing to `main` deploys the site; the migration working branch only builds.

## Independent behavior

The site contains no Base44 SDK or runtime. Profile preferences, demo quote drafts, blog drafts and testimonials are stored in the visitor's browser. Contact and quote forms open the visitor's email application with the form details addressed to the published Transcontinental email. This static site does not provide server-backed user accounts, cross-device request history, or a hosted form inbox.

Images still referenced from Unsplash are external source URLs; the source executive portrait and policy/audit PDFs are stored in the repository.
