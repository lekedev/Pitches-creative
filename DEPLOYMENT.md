# The Stable Company — deployment & launch notes

The site has two parts:

| Part | Folder | Hosting | Purpose |
| --- | --- | --- | --- |
| Website | `client/` | Netlify (`client/netlify.toml`); Vercel also builds previews (`client/vercel.json`, applies when the Vercel project's root directory is `client`) | React + Vite single-page app |
| API | `server/` | Any Node host (wherever it runs today) | Contact enquiries, Insights CMS, admin login |

The website works without the API — Insights falls back to clearly labelled
sample articles — but **the contact form cannot send** until the API is
deployed and connected.

---

## 1. Connect the website to the API (required for the contact form)

Set this in **Netlify → Site configuration → Environment variables**, then
redeploy (Vite bakes it in at build time):

| Variable | Example | Notes |
| --- | --- | --- |
| `VITE_API_URL` | `https://api.example.com/api` | Must include the `/api` prefix. The local `client/.env` points at `http://localhost:5000/api`, which only works in development. |

## 2. Deploy the updated API

`server/src/controllers/contactController.ts` and `server/src/models/Contact.ts`
changed in this rebrand. Deploy them **with or before** the new website:

- The form now sends `company`, `service` and `budget`. An older API accepts
  the request but silently drops those fields.
- The new controller escapes visitor input in notification emails (the old one
  inserted it as raw HTML), validates every field and rejects spam caught by
  the form's honeypot.
- The schema change only adds optional fields — no migration needed; existing
  enquiries still load.

Server environment variables (names from `server/src`):

| Variable | Purpose |
| --- | --- |
| `MONGO_URI` | MongoDB connection string |
| `PORT` | Port the API listens on |
| `CLIENT_URL` | **Exact origin of the live website** (e.g. `https://stablecompany.example`). Used for CORS — if it doesn't match, browsers block the contact form. |
| `ADMIN_EMAIL` | Address that receives enquiry notifications |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Outgoing mail for notifications. If mail fails, enquiries are still saved and visible at `/admin/messages`. |
| `JWT_SECRET`, `JWT_EXPIRES_IN`, `ADMIN_PASSWORD_HASH` | Admin login |
| `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` | Insight cover-image uploads |

## 3. Verify after deploying

1. Submit a real enquiry on `/contact`. Confirm it appears at `/admin/messages`
   and that the notification email arrives at `ADMIN_EMAIL`.
2. Publish one article at `/admin/insights/new` and confirm `/insights` switches
   from the sample articles to it.
3. Share the homepage URL in a messaging app and check the preview image.

> Only the contact flow's logic was tested during the rebuild — against a
> stubbed database and a local stub API, never the real database or mail
> server. Step 1 is the first true end-to-end test.

---

## 4. Domain

The site currently assumes `https://pitchescreative.netlify.app` (the `pitchescreative`
Netlify project). A second Netlify project, `comforting-centaur-ee1192`, also
builds this repo behind a password; one of the two can probably be retired. When the
domain changes, update it in:

- `client/src/data/site.ts` → `url`
- `client/index.html` → canonical, `og:url`, `og:image`, `twitter:image`
- `client/public/robots.txt` and `client/public/sitemap.xml`
- the API's `CLIENT_URL`

## 5. Content still needed

Nothing below was invented — each gap renders as an explicit placeholder or is
hidden until filled.

| Item | Where | Currently |
| --- | --- | --- |
| Email, phone, location | `client/src/data/site.ts` → `contact` | Hidden; footer links to the enquiry form |
| Social profile URLs | `client/src/data/site.ts` → `socials` | Hidden |
| Stablefarm.ng: overview, challenge, approach, services, technology, outcomes, year | `client/src/data/projects.ts` | "To be published" |
| Stablefarm.ng screenshots | `client/public/work/stablefarm/` + `images` in `projects.ts` | Typographic cover, "Product visuals coming soon" |
| Stablefarm.ng brand colours | `projects.ts` → `theme` | Estimated green — confirm |
| Further projects | Append to `projects` in `projects.ts` | Gallery, filters and case-study pages update automatically |
| Real articles | Publish via `/admin` | Four sample articles, each badged "Sample" |
| Logo | `client/src/components/ui/Wordmark.tsx`, `client/public/favicon.svg` | Typographic wordmark + stacked-blocks mark designed during the rebrand |

Once real articles exist, `client/src/data/sampleInsights.ts` can be deleted
(remove its import from `pages/Insights.tsx` and `pages/InsightDetail.tsx`).

## 6. Known limitations

- **Social previews for inner pages.** Titles, descriptions and Open Graph tags
  are set per page in the browser. Search engines that run JavaScript see them;
  most social-media crawlers don't, so every shared link shows the homepage
  card. Fixing this needs prerendering (e.g. a static-generation step) — worth
  doing once real case studies and articles exist.
- **The sitemap is static.** Add new `/work/<slug>` and published
  `/insights/<slug>` URLs to `client/public/sitemap.xml` as they go live.

## 7. Regenerating brand images

`client/public/og-image.png` (1200×630) and `client/public/apple-touch-icon.png`
are rendered from HTML in `client/scripts/` with headless Chrome:

```sh
cd client && npm run brand-images
```

## 8. Housekeeping

- `client/src/components/Hero/HeroBackground.tsx` and `heroCategories.ts` are
  untracked files left over from the old Pitches hero (with
  `client/public/Appdev.webp`, `Branddesign.webp`, `Webdev 2.webp`). Nothing
  imports them; delete them once they're no longer needed.
- `FETCH_HEAD` in the repository root is a stray empty file and can be deleted.
