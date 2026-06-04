# Route swap — agency homepage at `/`, SaaS landing at `/overlays`

Date: 2026-06-04

## What changed

The original agency one-pager (formerly at `/home`) is now the main homepage at `/`.
The TikTok Shop overlays SaaS landing (formerly at `/`) is now at `/overlays`.
Privacy / terms / refunds / pricing / contact pages were not moved.

### File moves
- `src/app/page.tsx`            ← was the SaaS landing; now contains the agency one-pager (moved from `src/app/home/page.tsx`).
- `src/app/overlays/page.tsx`   ← new location for the SaaS landing (moved from `src/app/page.tsx`).
- `src/app/home/page.tsx`       ← removed (moved to `/`).
- `src/app/home/layout.tsx`     ← removed (it only set `robots: noindex`, no longer needed since the agency page is now the indexed root).

### File added
- `src/app/overlays/layout.tsx` — sets the SaaS-specific `<title>`, description, OG tags, and `canonical: /overlays` so SEO for the overlays product follows it to the new route. (Root `src/app/layout.tsx` was left untouched per request, so its metadata still describes the overlays product — it now cascades to the agency page, which is an intentional short-term mismatch.)

### Edits
- `src/app/robots.ts` — removed `/home` from the disallow list (route no longer exists).
- `src/app/sitemap.ts` — added `/overlays` entry alongside `/`.
- `src/app/pricing/page.tsx` — the FAQ link "Visit the homepage" now points to `/overlays` (and label changed to "overlays page"), since the feature breakdown lives there now.
- `src/components/site-nav.tsx` — logo link `/` → `/overlays`; nav anchors `/#widgets` and `/#features` → `/overlays#widgets`, `/overlays#features`. This nav is shared by `/overlays`, `/pricing`, `/contact`, and legal pages.
- `src/components/site-footer.tsx` — same swaps as `site-nav` (logo + product links).
- `src/app/overlays/page.tsx` — JSON-LD `SoftwareApplication.url` updated from `https://pulsr.live` to `https://pulsr.live/overlays`.

### Not changed (intentionally)
- `src/app/layout.tsx` — root metadata still describes the overlays product. Agency homepage inherits it. Update this when ready to give the agency page its own metadata.
- `src/app/opengraph-image.tsx`, `icon.tsx`, `apple-icon.tsx`, `manifest.ts` — all still SaaS-branded.
- The agency one-pager (`src/app/page.tsx`) still uses its own `Nav` / `Footer` components from `src/components/nav.tsx` / `footer.tsx` — those were untouched, so internal agency links behave the same as they did at `/home`.

## How to revert

The cleanest revert is via git, since the moves were done with `git mv` (history is preserved).

### Option A — revert the commit
Once these changes are committed:
```
git revert <commit-sha>
```

### Option B — manual revert (if changes are not yet committed or you only want to undo locally)
From the repo root:
```
# Move SaaS landing back to /
git mv src/app/page.tsx src/app/home/page.tsx     # temporarily stash the agency page
git mv src/app/overlays/page.tsx src/app/page.tsx
git mv src/app/home/page.tsx src/app/home/page.tsx # (the agency page is now back at /home)

# Restore /home/layout.tsx (it set noindex)
# Create src/app/home/layout.tsx with:
#   export const metadata = { robots: { index: false, follow: false } };
#   export default function Layout({ children }) { return children; }

# Remove the new overlays layout
rm src/app/overlays/layout.tsx
rmdir src/app/overlays
```

Then revert the edits to:
- `src/app/robots.ts` — re-add `"/home"` to disallow.
- `src/app/sitemap.ts` — remove the `/overlays` entry.
- `src/app/pricing/page.tsx` — change `href="/overlays"` back to `href="/"`, label back to "homepage".
- `src/components/site-nav.tsx` — logo `href` back to `/`, nav links back to `/#widgets` and `/#features`.
- `src/components/site-footer.tsx` — logo `href` back to `/`, product links back to `/#widgets` and `/#features`.
- `src/app/overlays/page.tsx` JSON-LD `url` back to `https://pulsr.live` (no-op once the file moves back).

## Follow-ups worth considering
- Decide whether `/overlays` should be the canonical product URL long-term, or whether the agency page is temporary and `/` will swing back. If long-term: update root `layout.tsx`, OG image, and Organization JSON-LD to reflect the agency.
- Consider a 301 from `/home` → `/` (currently `/home` 404s).
- The agency page's internal anchors and CTAs were not audited — verify them in-browser before promoting traffic.
