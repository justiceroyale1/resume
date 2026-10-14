---
target: updated portfolio workflow diagrams
total_score: 16
max_score: 24
na_heuristics: 5,7,9,10
p0_count: 0
p1_count: 2
target_identity: "file:/home/justice-abutu/Personal Projects/resume/components/PortfolioShowcase.vue"
target_fingerprint: "sha256:9d49ffa0e3536270b04b277052b1d3fda42b9c044fe16183d628577fe33259d9"
target_path: /home/justice-abutu/Personal Projects/resume/components/PortfolioShowcase.vue
timestamp: 2026-10-14T22-36-09Z
slug: components-portfolioshowcase-vue
---
# Follow-up critique: portfolio workflow diagrams

Method: dual-agent (A: /root/design_review; B: /root/detector_review)

## Design health score

| # | Heuristic | Score | Key issue |
|---|---|---:|---|
| 1 | Visibility of system status | 3 | Reading path and case-study navigation are clear. |
| 2 | Match with the real world | 2 | Hub and matrix links imply relationships not supported by project copy. |
| 3 | User control and freedom | 3 | Case-study links and page navigation are clear. |
| 4 | Consistency and standards | 3 | Connector color and weight are consistent, though meaning varies. |
| 5 | Error prevention | n/a | Read-only portfolio. |
| 6 | Recognition rather than recall | 2 | Visible links help, but domain-card relationships are ambiguous. |
| 7 | Flexibility and efficiency | n/a | No repeat task. |
| 8 | Aesthetic and minimalist design | 3 | Restrained styling and legible graphic structure. |
| 9 | Error recovery | n/a | No recoverable in-page action. |
| 10 | Help and documentation | n/a | No help workflow needed. |
| Total | | 16/24 | Clearer lines, but inaccurate visual implications need correction. |

## Design specificity verdict

The featured ManagedCo diagram now has strong visible branches from two inputs through an application to three services, and the sequence and timeline artifacts read more clearly. The shared 2px connector treatment ties the diagrams together. The hub and matrix layouts, however, encode relationships the text does not claim. ManagedCo's Owner’s view branches to Orders and Customers, then vertical links imply Orders→Storefronts and Customers→Reporting. AmanaMarket's four domain cards form a square of pairwise links without a stated causal or operational relationship for each edge. The detector found zero rule issues in both components; this semantic problem is outside its rules.

## Overall impression

The visual craft of the connectors improved. Their meaning now needs to be made truthful, especially on diagrams that summarize domains rather than sequences.

## What's working

- The featured map's 2-to-1-to-3 branch geometry is aligned and its arrowheads make direction explicit.
- The KadMap sequence uses clear directional arrows and becomes vertical below 540px.
- FJSC and XRadar360 timelines have numbered stages joined by a visible spine.

## Priority issues

1. **P1 — ManagedCo hub implies unsupported dependencies.** In `CaseStudyArtifact.vue:102–147`, links imply Orders→Storefronts and Customers→Reporting, while the content describes four areas available to the owner. Keep the four boxes but connect each directly to the central owner view, or remove links between domain cards. Suggested command: `$impeccable layout`.
2. **P1 — AmanaMarket matrix looks like a workflow when it is a domain overview.** `CaseStudyArtifact.vue:97–100,127–147` joins adjacent commerce, finance, verification and logistics cards without stating what those edges mean. Use one common central connection or independent cards under an explicit domain-overview caption. Suggested command: `$impeccable clarify`.
3. **P2 — Narrow-screen hub becomes a misleading chain.** At `CaseStudyArtifact.vue:248–275`, stacked ManagedCo cards gain vertical links, implying Orders→Customers→Storefronts→Reporting. Keep the mobile layout but avoid chaining independent areas. Suggested command: `$impeccable adapt`.
4. **P2 — Visual direction and spoken description differ.** The hero `role="img"` label says systems connect, but does not describe direction; case-study CSS connectors have no screen-reader meaning. Express meaningful direction in concise figure descriptions without repeating every visible label. Suggested command: `$impeccable harden`.

## Cognitive load and emotional journey

Stronger shafts and arrowheads reduce effort in true sequences. In hub and matrix views, they add interpretive work because the reader must decide whether a line means data flow, dependency or simple association. The featured map still foregrounds infrastructure rather than the customer sale, shared stock and owner review that make ManagedCo distinctive. Its technical framing is a secondary concern given the user's request to keep changes small.

## Persona red flags

- Jordan, first-time recruiter: may infer a false implementation hierarchy from the domain cards.
- Casey, mobile visitor: the stacked ManagedCo boxes read as a process because vertical links join each card.
- Sam, screen-reader visitor: sees project areas through labels and captions but does not receive the same directional story conveyed by arrows.

## Minor observations

The three service boxes in the featured map remain three columns on a small phone, so label wrapping should be checked in a browser. The detector reported no warnings. Live inspection and overlays were unavailable because localhost:3001 refused the connection and no browser automation tool was exposed.

## Questions to consider

Would a neutral association line communicate these domains more honestly than an arrow? Which relationships are real enough to draw, and which belong only in the accompanying prose?
