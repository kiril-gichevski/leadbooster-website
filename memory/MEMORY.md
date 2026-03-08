# LeadBooster Website Memory

## Project
Marketing website for LeadBooster — a Google Sheets add-on for lead enrichment.
Repo: C:\Users\Kiril\GitHub\leadbooster-website
Branch: new-copy-claude (feature branch off master)

## Positioning (confirmed GTM plan)
"The Zapier of lead enrichment."
- We connect enrichment APIs and run them on lead lists in Google Sheets
- BYO API keys — we don't sell data, we connect APIs
- Competitors: Clay (expensive, credits) and n8n/Make (too complex, requires code)
- We win on: price ($29 flat) + simplicity (it's Google Sheets)

## Page Structure (current as of 2026-03-08)
1. Hero — "The Zapier of Lead Enrichment" (no competitor names)
2. How it works — 3 steps (install, connect keys, run)
3. Demo video
4. Why it works — 3 cards (no competitor names): APIs at cost / flat monthly / Google Sheets
5. Integrations — logos (OpenAI, Hunter, Apollo, Serper + 20 more)
6. Features — workflow builder, free scraping, BYO keys (+ expandable grid)
7. Testimonials
8. Pricing — equation: $29 + APIs = ~$50-110/mo (no "vs Clay" framing)
9. Comparison table — Clay vs n8n/Make vs LeadBooster (supporting evidence, not identity)
10. FAQ — includes n8n comparison question
11. Final CTA — "Your APIs. Your Data. Your Spreadsheet."

## Key Rule: No competitor names in first 60% of page
Competitors only appear in the comparison table (#9) and FAQ.

## Pricing
- $29/mo per seat (Starter)
- Pro: $49/mo (exists in GTM plan, not yet on website)
- Free: 100 enrichments (GTM plan, not yet on website)
- LTD: $69 one-time (April 2026 launch only)
Google Workspace Marketplace URL: https://workspace.google.com/marketplace/app/leadbooster/96942350094?flow_type=2

## Tech Stack
- Plain HTML/CSS/JS (no framework)
- CSS variables in styles.css (primary: #6366f1, secondary: #10b981)
- Components loaded via js/components.js (navbar, footer are placeholders)
- Google Fonts: Inter
