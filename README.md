# Al Noor Quran Academy

A frontend-only bilingual Next.js website, restyled against the supplied Faizan-e-Quran screenshots and https://www.faizanequran.co/. Al Noor's existing green/gold identity, academy details, English/Urdu routing, and inquiry delivery behavior are retained.

## Run and validate

Requires Node.js 20.9 or newer. Use npm.cmd on PowerShell if npm script execution is restricted.

- npm install
- npm run dev
- npm run typecheck
- npm run build
- npm start

Open /en or /ur. The four routes are home, /services, /about, and /contact beneath each locale.

## Structure

- src/app/[locale]/layout.tsx: shared navigation/footer, locale direction, and organization metadata.
- src/components/home/: split hero, benefit cards, course carousel, help strip, inquiry process, illustrative stories, curriculum, and FAQs.
- src/components/services/Catalog.tsx: category filters and existing academy programs.
- src/components/CourseCard.tsx: shared course cards with expandable outlines and inquiry links.
- src/components/about/: academy story, values, and tutor information.
- src/components/contact/: three-step inquiry form, direct contact information, and support FAQs.
- src/components/JourneyCTA.tsx: shared invitation panel.
- src/lib/content.ts: academy contact data, translations, and FAQs.
- src/lib/programs.ts: stable course IDs, bilingual course descriptions, and outlines.
- public/images/services/: five original green/gold SVG course-cover graphics.
- public/images/shared/: original support illustration.
- public/media/: supplied academy artwork.

## Behavior and content

The screenshot reference guides layout, proportions, rounded cards, pale backgrounds, course grids, and dark-green panels. Al Noor's supported courses replace the reference catalog. No reference-company credentials, course counts, students, portals, certificates, availability promises, or contact details are copied.

The inquiry form validates each of three stages, preserves fields while moving backward, accepts a course from ?program=, and prepares a mailto link plus an optional plain-text download. It does not send or store an inquiry. Editing fields invalidates the prepared message. The language switch preserves the current path, query, and anchor.

FAQs use accessible native disclosure controls. Course outlines expand in place. The mobile navigation supports Escape. The course carousel uses native scrolling and respects reduced-motion preferences. Content stays visible without scroll-animation JavaScript.

The illustrative learning stories remain labeled as illustrative; verified reviews and tutor profiles have not been supplied.

AI photographic asset generation was attempted but blocked by the account usage limit. Hero/story artwork currently uses the supplied Al Noor material, and new course/support graphics are original SVGs. Replacing hero photography with generated assets and browser-based visual comparison remain outstanding.

## Deployment

Set NEXT_PUBLIC_SITE_URL to the production origin before the build for correct social metadata. The default is http://localhost:3000. This revision is local; no hosting or external publication was performed.
