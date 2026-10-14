---
target: "http://localhost:3001/portfolio"
total_score: 16
max_score: 24
na_heuristics: 5,7,9,10
p0_count: 0
p1_count: 2
target_identity: "file:/home/justice-abutu/Personal Projects/resume/pages/portfolio/index.vue"
target_fingerprint: "sha256:d75ff6d72223064a58fc5b711166fc2e467b2c1fc8ae0c78efcabbbd317e8d28"
target_path: /home/justice-abutu/Personal Projects/resume/pages/portfolio/index.vue
timestamp: 2026-10-14T20-52-09Z
slug: pages-portfolio-index-vue
---
# Portfolio critique — 14 October 2026

Method: dual-agent (A: /root/design_review · B: /root/detector_review). Parent verified desktop and mobile screenshots with headless Chrome after starting a local preview on port 3002.

## Design health score
| # | Heuristic | Score | Key issue |
|---|---|---:|---|
| 1 | Visibility of system status | 2 | No page-level wayfinding through long portfolio. |
| 2 | Match with real world | 3 | Clear business domains, some unexplained technical language. |
| 3 | User control and freedom | 3 | Direct links, but no jump to selected work. |
| 4 | Consistency and standards | 3 | Repeated type, color, and link patterns. |
| 5 | Error prevention | n/a | No form or irreversible action. |
| 6 | Recognition rather than recall | 3 | Explicit section headings and case-study links. |
| 7 | Flexibility and efficiency | n/a | Static portfolio; no repeat task. |
| 8 | Aesthetic and minimalist design | 2 | Long text rows and tags overwhelm work artifacts. |
| 9 | Error recovery | n/a | No in-page error flow. |
| 10 | Help and documentation | n/a | Portfolio does not require help. |
| Total | | 16/24 | Acceptable (67%). |

## Design specificity verdict
The content is specific to Justice's work in business operations, commerce, infrastructure, and escrow. The visual structure is interchangeable with a résumé site: portrait, biography, fact strip, long text project rows, skills, jobs, certification, and contact. The first project artifact arrives nowhere on the index. The bundled detector found one `overused-font` warning at `pages/portfolio/index.vue:43` for Lato; its own listed fonts do not include Lato, so this is a false positive. The rendered component scan found zero warnings. No browser overlay was available because no native mutable browser tool was exposed; headless Chrome screenshots provided visual evidence instead.

## Overall impression
Readable and credible, with a clear contact endpoint. The largest opportunity is to let the work lead rather than make visitors read a second résumé before reaching it.

## What's working
- The project writing states concrete responsibilities and engineering trade-offs rather than generic skill claims.
- Four named case-study links make the path to deeper work explicit.
- Semantic headings, image alt text, visible focus styles, and responsive single-column rules provide a sound baseline.

## Priority issues
1. **P1 — No work artifact on the portfolio index.** Four featured projects are text-only rows (`components/PortfolioShowcase.vue:96`). The page feels like a CV despite rich project material. Show one real screenshot or architecture artifact for the lead project and give the four projects distinct visual entry points. Suggested command: `$impeccable shape`.
2. **P1 — The hero's main action leaves for the résumé.** `View my résumé` (`components/PortfolioShowcase.vue:55`) is the button, while selected work begins below the desktop fold. Make the lead case study or selected-work anchor the primary action, keeping the résumé secondary. Suggested command: `$impeccable layout`.
3. **P2 — Previews demand too much reading.** Each project repeats metadata, summary, three bullets, up to fourteen technology chips, and links (`components/PortfolioShowcase.vue:106`). Reduce index previews to problem, distinctive contribution or outcome, and case-study action; leave detail to case-study pages. Suggested command: `$impeccable distill`.
4. **P2 — Proof emphasizes activity over effect.** The four-item proof strip promotes a commit count (`composables/usePortfolioContent.ts:50`), while the stronger test-speed result is buried inside AmanaMarket. Put the clearest outcome beside its project and make its consequence understandable. Suggested command: `$impeccable clarify`.
5. **P2 — Mobile opens with the portrait before the pitch.** The `order: -1` rule (`components/PortfolioShowcase.vue:781`) places a 156px image above the name. At 390×844, selected work is absent and only the first secondary link starts at the viewport bottom. Put the value proposition and a work action first. Suggested command: `$impeccable adapt`.

## Cognitive load and emotional journey
The hero has four clear links, and project choice has four entries. Within each entry, bullets and technology tags create extra scanning decisions. Repeated dense text sections flatten hierarchy. The opening establishes credibility; interest peaks at the first quantified proof, then the long skills and earlier-work sequence delays the final contact panel. Lead with a project artifact and shorten the path to a memorable result.

## Persona red flags
- **Jordan, first-time recruiter:** The emphasized résumé button suggests this is a profile page; finding the case studies requires scrolling past the bio and fact strip.
- **Casey, mobile visitor:** The portrait and long introduction consume almost the whole first screen; the work is not discoverable before scrolling.
- **Sam, keyboard/screen-reader visitor:** Semantics and focus are sound, but no jump link helps traverse the long page; repeated technology lists lengthen linear reading.

## Minor observations
External profile links open new tabs without a visible cue. Technology chips resemble controls although they are static. The eyebrow `Senior product engineering` says less than the specific operational-domain claim below it.

## Questions to consider
Which one project artifact proves how you think in the first viewport? Which outcome should a hiring manager remember after leaving? Which preview details are necessary before someone opens a case study?
