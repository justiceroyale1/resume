---
target: dedicated selected work pages
total_score: 16
max_score: 24
na_heuristics: 5,7,9,10
p0_count: 0
p1_count: 2
target_identity: "file:/home/justice-abutu/Personal Projects/resume/pages/portfolio/[slug].vue"
target_fingerprint: "sha256:9fb957cbeee4de4cdb11f618b967a987dd74e4567b467e567bbb4774b99b65d7"
target_path: /home/justice-abutu/Personal Projects/resume/pages/portfolio/[slug].vue
timestamp: 2026-10-14T21-18-12Z
slug: pages-portfolio-slug-vue
---
# Dedicated selected-work pages critique — 14 October 2026

Method: dual-agent (A: /root/case_design · B: /root/case_detector). Parent inspected rendered ManagedCo and AmanaMarket desktop and KadMap and XRadar360 mobile views in headless Chrome.

## Design health score
| # | Heuristic | Score | Key issue |
|---|---|---:|---|
| 1 | Visibility of system status | 2 | Back link exists, but no section or case-series wayfinding. |
| 2 | Match with real world | 3 | Problems are clear; several acronyms assume domain knowledge. |
| 3 | User control and freedom | 3 | Easy to return to portfolio; no next case-study path. |
| 4 | Consistency and standards | 3 | All four pages share coherent type and link patterns. |
| 5 | Error prevention | n/a | Read-only pages. |
| 6 | Recognition rather than recall | 3 | Section headings and numbered order are clear. |
| 7 | Flexibility and efficiency | n/a | No repeated task workflow. |
| 8 | Aesthetic and minimalist design | 2 | Long text and repeated metadata obscure the work. |
| 9 | Error recovery | n/a | No in-page error flow. |
| 10 | Help and documentation | n/a | Case studies require no help system. |
| Total | | 16/24 | Acceptable (67%). |

## Design specificity verdict
The prose documents concrete domains, ownership and trade-offs. Visually, the same text-only template could host any engineering project: oversized name, summary, role/timeline/technology sidebar, five or six numbered sections, and a generic contact panel. None of the distinctive systems appears as an artifact. Detector: one `overused-font` warning at `pages/portfolio/[slug].vue:165` for Lato; false positive because Lato is absent from the rule's own font list. No user-visible overlay was possible because no native mutable browser tool is exposed. Parent headless Chrome captures supplied visual evidence.

## Overall impression
The pages are readable and candid, but they ask visitors to imagine the engineering instead of showing it. The largest opportunity is to make each case's core system and personal contribution graspable before the long prose.

## What's working
- The problem, contribution, challenge, decisions and results form a clear story.
- Trade-offs and discontinued-project outcomes are honest, which strengthens credibility.
- Navigation, headings, links and focus styling establish a usable baseline.

## Priority issues
1. **P1 — No project-specific artifact.** ManagedCo operations, AmanaMarket finance and KYC, KadMap distributed identity, and XRadar360 escrow all use the same text-only layout (`pages/portfolio/[slug].vue:59-139`). Add a truthful screenshot, flow, architecture diagram, or evidence panel specific to each, preferably before the first long section. Suggested command: `$impeccable shape`.
2. **P1 — Personal results are buried or missing.** AmanaMarket's 68% test-time reduction is stored as its index preview but does not appear in its dedicated case; the page ends with restructuring. KadMap and XRadar360 end with funding and traction outcomes. Keep those facts, but lead each result section with the work shipped, measurable improvement, or lesson before company outcome (`usePortfolioContent.ts`). Suggested command: `$impeccable clarify`.
3. **P2 — Repeated metadata delays the story on mobile.** Role/date appear in hero and overview; the technology inventory appears before the first problem paragraph. On a 390px KadMap capture, the first screen ends in the technology list (`pages/portfolio/[slug].vue:59-91`). Remove duplication and move technology detail later or behind concise project facts. Suggested command: `$impeccable distill`.
4. **P2 — Dense contribution lists flatten priority.** AmanaMarket has seven long bullets, with substantial spacing but no grouping by finance, commerce or platform work. Surface two or three defining contributions first and group the rest (`usePortfolioContent.ts`). Suggested command: `$impeccable layout`.
5. **P2 — No continuation through the body of work.** The top links go back to the portfolio or résumé, and the ending offers a generic contact panel. Add a next/related case-study link and a compact in-page section route if the long-form structure remains (`pages/portfolio/[slug].vue:50-155`). Suggested command: `$impeccable layout`.

## Cognitive load and emotional journey
No decision point offers more than four actions. Dense bullet lists and 14-item technology inventories weaken chunking and force long linear reading. The stories begin with clear problems and credible trade-offs, but three conclude with company setbacks before a generic contact panel. The ending should preserve candor while making Justice's delivered work easy to remember.

## Persona red flags
- **Jordan, first-time recruiter:** Needs to read several sections to learn what Justice personally delivered; the case title and summary describe the product more than the impact.
- **Riley, technical hiring manager:** Can read trade-offs but has no diagram, screenshot or comparable evidence to inspect.
- **Sam, keyboard/screen-reader visitor:** Heading semantics and focus styles work, but the long page has no section or next-case navigation; repeated technology and contribution lists lengthen traversal.

## Minor observations
Role and date are repeated in hero and sidebar. ManagedCo's `Explore ManagedCo` hero button leads directly to registration, which may surprise a reader expecting a product overview. All four article social previews use the headshot instead of project-specific imagery.

## Questions to consider
Which truthful artifact can each project share publicly? Which achievement should a hiring manager remember from each case? Should a visitor reach another case study before the final contact panel?
