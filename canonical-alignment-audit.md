# Canonical RoleForge Alignment Audit

## Campaign

- Suggested chat name: `Westinghouse – OPX Chief of Staff`
- Company: Westinghouse Electric Company
- Canonical role title: OPX Chief of Staff
- Campaign repository: `russelldudek/Westinghouse`
- Original job posting: `https://careers.westinghousenuclear.com/job/Cranberry-Township-OPX-Chief-of-Staff-NC/1405207900/`
- Print standard: US Letter
- Audit date: July 11, 2026

## Canonical source snapshot used for this alignment pass

- `SKILL.md` — `2cce9a4672da509b2d3a52d8088d8d6eb58cb8b0`
- `references/portfolio-learning-loop.md` — `5c47171b8c570d726e3d52b046f523e345eda483`
- `references/role-intelligence.md` — `a24cfb2eae91797ec1fe13671beb9cbacb2b6d3f`
- `references/evidence-integrity.md` — `0866ece7a660bea4043c043ef08013314b30cd8a`
- `references/artifact-contracts.md` — `b929baeb41ac208302881dd2367bce4401fb9d3b`
- `references/github-publish.md` — `6bc6c13d296c3381747c6fa1f2c40e55d9d2276e`
- `memory/candidate-evidence.yaml` — `2da61ff1c277e2e20569c68e57316e73827173df`
- `memory/portfolio-index.yaml` — `34e7a06ad5a8b1e440e1a9d45fd3d04e46efb7ba`
- `memory/pattern-ledger.md` — `fcfcd208c635601237c8b37f3bbe955d641ab6cd`
- `memory/anti-clone-ledger.md` — `1bcc5374d9f41c53925586d1763d1362404df6cd`
- `memory/cases/azira.md` — `aa4d509d085903ab079805b76f737e5899884b97`
- `memory/cases/WATT.md` — `93fc7682b6d1cf0009e1034c74517c1f9bcf2070`
- `memory/cases/AMETEK.md` — `5d0d96f85f00fa3aa32671ef70618665354e831c`

## Final post-build canonical verification

After the aligned campaign and downloadable artifacts were committed, every required canonical file above was re-read from the latest `main` branch. All SHAs remained identical to the source snapshot used for the alignment pass. No new instruction, evidence, portfolio, pattern, anti-clone, or relevant-case drift appeared during the build. The finished repository was then rechecked against those unchanged contracts before this audit was finalized.

## Mismatches discovered and corrected

1. Added explicit campaign metadata, including the suggested chat name, canonical role title, repository, original posting URL, and US Letter print standard.
2. Added a documented Westinghouse brand-intelligence record with official-source provenance, palette, typography character, image/geometry cues, and public-campaign usage constraints.
3. Added exact reciprocal document controls: `View Cover Letter` on the resume and `View Resume` on the cover letter.
4. Added real `Download PDF` actions to the resume, cover letter, and interview brief, each linked to a committed, human-readable file under `docs/`.
5. Added optional, separately labeled `Print` controls and hid all web-only document controls from print/PDF output.
6. Rebalanced resume page one. The previous output was technically two pages but visually underfilled; the revised version uses larger professional typography, redistributed verified evidence, and a role-aligned mechanisms section rather than decorative filler.
7. Rebalanced the one-page cover letter and removed the print-only duplication of its web navigation links.
8. Reflowed the interview brief into a deliberate four-page executive document with intentional page breaks and no accidental blank pages or split visual modules.
9. Updated the README to surface the job URL, campaign metadata, downloadable artifacts, brand posture, and publication status.

## Evidence and anti-clone review

- All employers, titles, dates, metrics, credentials, and named relationships remain within `memory/candidate-evidence.yaml`.
- Concepts remain labeled as concepts; no historical title or ownership claim was upgraded.
- The candidate identity remains a high-reliability operator-technologist and executive mechanism builder across the site, resume, cover letter, and brief.
- The Executive Operating Envelope remains differentiated from Azira's signal-to-decision cockpit, WATT's launch control room, AMETEK's federated architecture, and the other metaphors in the anti-clone ledger.
- The campaign uses original candidate-owned visual identity with employer-adjacent cues; it does not present itself as an official Westinghouse publication or imply endorsement.

## Automated and visual QA results

- 22 of 22 local contract checks passed.
- Resume: exactly 2 US Letter pages.
- Resume page one: last substantive content finishes approximately 0.74 inch above the footer/page-number zone; no large dark, branded, or blank lower panel is present.
- Cover letter: exactly 1 US Letter page; approximately 1.27 inches of balanced closing whitespace remains.
- Interview brief: exactly 4 US Letter pages; all pages visually inspected at full-page scale.
- Reciprocal document paths are deployment-safe relative URLs.
- All PDF links resolve locally and each PDF opens successfully.
- The committed PDF objects report page counts of 2 for the resume, 1 for the cover letter, and 4 for the interview brief.
- Web-only controls are hidden in print output.
- Keyboard focus styling, responsive behavior, and reduced-motion handling remain present.

## Publication and remaining gate

The repository is publish-ready, but GitHub Pages deployment is not verified through the available connector. Do not represent the site as live until Pages is enabled and the deployed routes are tested.

Manual publication fallback:

1. Repository **Settings** → **Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select `main` and `/ (root)`, then **Save**.

After deployment, verify the live resume-to-cover-letter and cover-letter-to-resume paths, every PDF download, and the repository-base-path behavior. Portfolio memory should be refreshed only after this live verification.
