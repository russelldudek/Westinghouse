# Westinghouse Brand Intelligence

## Campaign relationship

This is an independent candidate campaign by Russell Dudek for the Westinghouse Electric Company OPX Chief of Staff role. Westinghouse branding identifies the intended employer; the Executive Operating Envelope is Russell's original role-specific point of view. The campaign does not imply Westinghouse authorship, sponsorship, approval, employment, or endorsement.

## Official identity and asset provenance

| Asset | Local path | Official source | Use decision |
|---|---|---|---|
| Blue Westinghouse 140-year wordmark | `assets/brand/westinghouse-logo-blue.png` | `https://westinghousenuclear.com/media/550fcpcf/westinghouse-logo-header-140-278.png` | Primary above-fold company identifier and restrained document identifier. Unmodified. |
| White Westinghouse 140-year wordmark | `assets/brand/westinghouse-logo-white.png` | `https://westinghousenuclear.com/media/j0qj14ma/westinghouse-logo-header-white-140-278.png` | Approved alternate for dark surfaces when needed. Unmodified. |
| Combined blue/white logo sprite | `assets/brand/westinghouse-logo-both-278x67.png` | `https://westinghousenuclear.com/assets/img/westinghouse-logo-both-278x67.png` | Retained as an official alternate/source artifact; not used in the visible lockup. |
| AP1000 product image | `assets/company/ap1000-pwr-circle.png` | `https://westinghousenuclear.com/media/31rh5jpq/ap1000-pwr-circle.png` | Used as a product cue in the company-moment composition. It is explicitly Westinghouse imagery, not Russell's work. |
| Official laboratory image | `assets/company/westinghouse-facility.webp` | `https://westinghousenuclear.com/media/mwjem53b/home25-leftimage-bg-image.jpg?format=webp` | Used in the company-moment section to establish applied-science and technical-personnel character. It is explicitly Westinghouse imagery, not Russell's work. |

The assets were acquired unmodified from the official corporate website, stored locally, checksummed, and committed to the campaign repository. No logo is traced, redrawn, recolored, cropped, animated, filtered, or combined with a Russell/RoleForge mark.

## Color token provenance

The token implementation is committed in `brand-tokens.css`. Values below were measured from Westinghouse's public corporate CSS, recorded in `assets/brand/official-css-evidence.txt`.

| Token | Value | Classification | Evidence/use |
|---|---:|---|---|
| `--brand-primary` | `#253470` | source-sampled | Most frequent deep blue in official corporate `main.min.css`; primary company-recognition layer. |
| `--brand-primary-deep` | `#12326A` | source-sampled | Official corporate CSS; dark technical surfaces and document rules. |
| `--brand-secondary` | `#0675BC` | source-sampled | Official theme CSS; links and active states. |
| `--brand-accent` | `#1EC2F3` | source-sampled | Official corporate/theme CSS; restrained technical signal accent. |
| `--brand-green` | `#487C09` | source-sampled | Prominent official corporate/theme CSS value; success and reuse state. |
| `--brand-yellow` | `#FDD922` | source-sampled | Official theme CSS; executive-attention state. |
| `--brand-red` | `#78272A` | source-sampled | Official corporate CSS; risk state. |
| `--brand-light` | `#F2F7FA` | candidate-original | Accessible light-neutral support surface derived from the official white/blue system. |
| `--campaign-surface` | `#E8F3F8` | candidate-original | Subordinate operating-envelope surface; never described as official. |

Official/source-sampled colors dominate the rendered company identity. Candidate-original colors are limited to neutral/surface support for the operating metaphor.

## Typography evidence and implementation

Westinghouse's public corporate CSS declares `Gotham` and `GothamMedium`. Those are proprietary typefaces; no webfont binaries were copied, extracted, or committed. The campaign uses the broadly available substitute stack:

- display: `Aptos Display`, `Segoe UI`, `Helvetica Neue`, Arial, sans-serif;
- body: `Aptos`, `Segoe UI`, `Helvetica Neue`, Arial, sans-serif.

The substitute is not claimed to be official. Brand behavior is reproduced through compact geometric proportions, confident headline weights, disciplined uppercase navigation/kickers, moderate tracking, short line lengths, and technical editorial rhythm. Documents use the same stack and restrained hierarchy.

## Public visual and motion character

- **Photography:** high-clarity industrial and laboratory imagery; technical personnel, engineered systems, facilities, and product imagery.
- **Geometry:** circular reactor/product crops, disciplined grids, strong horizontal rules, clean blue technical lines, broad white space, and measured information density.
- **Interface/data grammar:** deep-blue primary fields, bright cyan signal accents, green/yellow state cues, compact utility labels, and strong contrast between technical detail and major statements.
- **Motion character:** calm, precise, and mechanical rather than playful. The candidate site's nested boundaries breathe subtly, a signal routes through the operating system, and scenario/slider transitions change risk state. The official logo never moves.

## Role-specific translation

The Executive Operating Envelope remains an original candidate artifact: nested boundaries for commitments, constraints, decisions, and learning around a legible execution zone. It is not an imitation of a Westinghouse product interface. Official company cues establish the target employer; the contour system, interaction, decision architecture, and motion explain Russell's thesis for the role.

## Visible-use decisions by surface

- **Website:** official blue wordmark above the fold, immediately paired with `Candidate vision for OPX Chief of Staff` and `by Russell Dudek - independent candidate work`.
- **Resume and cover letter:** restrained blue wordmark in a candidate-labeled brand bar; no fake corporate letterhead.
- **Interview brief and 120-day plan:** same wordmark, token system, typography, rules, and operating-envelope page furniture.
- **PDFs:** generated from the approved HTML documents with local official assets; web-only navigation controls are hidden.
- **Footer/metadata:** explicit independent-candidate and non-endorsement statement.

## Source evidence

- `assets/brand/official-source-urls.txt` records official page, stylesheet, logo, product, and image URLs.
- `assets/brand/official-css-evidence.txt` records public font-family declarations and frequent/source color candidates.
- `assets/brand/asset-checksums.sha256` records the committed asset hashes.

## Restrictions and safeguards

Official marks are used solely for nominative employer identification. They are stored locally and are not hotlinked. Proprietary fonts are not redistributed. Images do not imply that Russell performed the depicted work. The campaign avoids official navigation patterns, corporate legal language, employee-portal styling, and fake Westinghouse letterhead or endorsement.
