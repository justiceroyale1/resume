---
target: workflow diagram of the featured project and all workflow diagrams
total_score: 16
max_score: 24
na_heuristics: 5,7,9,10
p0_count: 0
p1_count: 2
target_identity: "file:/home/justice-abutu/Personal Projects/resume/components/PortfolioShowcase.vue"
target_fingerprint: "sha256:8e7d8319e74004546e60031db8cb3c33d6911e039e4a78ed123849a1ac759b21"
target_path: /home/justice-abutu/Personal Projects/resume/components/PortfolioShowcase.vue
timestamp: 2026-10-14T22-10-30Z
slug: components-portfolioshowcase-vue
---
# Workflow diagram critique: portfolio

## Design health score

| # | Heuristic | Score | Key issue |
|---|---|---:|---|
| 1 | Visibility of system status | 3 | Navigation and case-study route are clear; diagrams have no active state to show. |
| 2 | Match with the real world | 2 | The lead diagram opens with Laravel, MySQL, Redis and S3 instead of a sale, stock change or owner's decision. |
| 3 | User control and freedom | 3 | Selected-work and case-study links provide clear exits. |
| 4 | Consistency and standards | 3 | Shared dark palette and typography, but inconsistent diagram grammar across layouts. |
| 5 | Error prevention | n/a | Read-only portfolio. |
| 6 | Recognition rather than recall | 2 | Hub and matrix cards require readers to infer relationships. |
| 7 | Flexibility and efficiency | n/a | No repeat task on this portfolio surface. |
| 8 | Aesthetic and minimalist design | 3 | Restrained styling, but repeated boxes carry little information. |
| 9 | Error recovery | n/a | No recoverable in-page action. |
| 10 | Help and documentation | n/a | No help workflow is needed. |
| **Total** | | **16/24** | **Good foundation, weak explanatory power.** |

## Design specificity verdict

The case-study copy is specific to these products, but the diagrams are less so. The hero map could describe many Laravel SaaS products, while the ManagedCo hub and AmanaMarket matrix are collections of cards without visible relationships. The FJSC and XRadar360 timelines are closer to genuine workflows. The deterministic detector found zero issues in PortfolioShowcase.vue and CaseStudyArtifact.vue. No live browser overlay or visual screenshot was available because localhost:3001 refused the connection and no browser automation tool was exposed.

## Overall impression

The diagrams are orderly and legible in source, but most act as summaries rather than explanations. Their biggest opportunity is to show the consequential action, state change, review point and result unique to each project.

## What's working

- The featured diagram gives ManagedCo a visual presence in the first viewport and links directly to its case study.
- The case artifacts share a coherent palette, title and caption treatment.
- FJSC's receipt-to-report and XRadar360's review-to-release sequences provide useful narrative direction.

## Priority issues

1. **P1 — Featured ManagedCo map explains infrastructure before the product.** `PortfolioShowcase.vue:61–73` leads from storefront/business operations to Laravel and then MySQL/Redis/S3. This is technically credible but does not show the owner benefit. Replace its visual story with customer purchase or staff sale → one order and stock record → follow-up → owner's review. Put implementation detail in the case study. Suggested command: `$impeccable shape`.
2. **P1 — Hub and matrix layouts do not show relationships.** `CaseStudyArtifact.vue:95–101` renders four equal cards for ManagedCo and AmanaMarket; viewers must invent flow and dependencies. Give each artifact a direction, meaningful connector labels, and one emphasized state or decision. If a graphic is only a domain overview, label it as such rather than calling it a workflow. Suggested command: `$impeccable layout`.
3. **P2 — One shared diagram system is missing.** The featured map, hub, matrix, sequence and timeline use related colors but different semantics. Define a shared visual grammar: actor/input, action, record or decision, outcome; consistent node hierarchy, line/arrow treatment, annotation style and accessible text equivalent. Preserve layout variation only where a different relationship requires it. Suggested command: `$impeccable extract`.
4. **P2 — Narrow-screen diagrams may sacrifice comprehension.** `CaseStudyArtifact.vue:175–179` leaves hub and matrix at two columns until 360px, while the featured map has many small labels. Verify at common phone widths and favor a readable single-column sequence with connectors and full text over tiny parallel cards. Suggested command: `$impeccable adapt`.

## Cognitive load and emotional journey

The layout groups information well, but the map's six-plus technical labels ask visitors to translate architecture into value before reaching the work. The hub and matrix impose an extra inference step because visual proximity stands in for causality. This is moderate extraneous load in the most visible portfolio artifact. A product workflow would create a stronger first impression; the quantified FJSC result already gives a strong later payoff.

## Persona red flags

- **Jordan, first-time recruiter:** The ManagedCo map names Laravel, Redis and S3 but does not show what changed for a business owner. Its value needs translation.
- **Casey, mobile visitor:** The stacked hero, diagram and proof strip create a long path to the project list; compact labels and two-column artifact cards may be hard to scan on a phone.
- **Sam, screen-reader visitor:** The featured map has one `role="img"` description, while its visible child labels may be announced separately; preserve a concise, single reading of the workflow. Case artifacts have useful `figure` and ordered-list semantics.

## Minor observations

The KadMap sequence's final “Issue token” detail lists workspace, resource and permission data without specifying that these become token context. The case-study side navigation has five links but skips the engineering-challenge section.

## Questions to consider

Would the lead artifact better prove engineering judgment by showing how one sale changes stock and reaches the owner? Should every diagram show a decision or state transition, rather than only component names? Which technical details are worth including before the visitor opens a case study?
