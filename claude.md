# CLAUDE.md — Jyorah Business Solutions Website Rules

## Project Context

Create a premium website for:

**Company:** Jyorah Business Solutions
**Domain:** jyorah.com
**Location:** Dubai / UAE / Middle East
**Business Type:** Accounting, bookkeeping, VAT, tax, payroll, and business support services

## Before You Start

Before generating the website, ask if any of the below are available:

* Logo file
* Brand colors
* Real company address
* WhatsApp number
* Business email
* Trade license name
* Any preferred images
* Final service list

If not available, proceed with premium placeholders.

---

## Always Do First

* Invoke the `frontend-design` skill before writing any frontend code, every session, no exceptions.

---

## Design Direction

Use the attached Stitch reference image as the design inspiration.

Match the same premium feeling:

* Luxury black theme
* Gold accent color
* White / soft gray text
* Elegant serif headings
* Clean modern sans-serif body text
* Dubai executive finance feel
* Premium consulting / wealth management style

Do **not** make it look like a cheap accounting website.

---

## Brand Colors

Use this palette unless brand assets define otherwise:

* Primary Gold: `#D4AF37`
* Rich Gold: `#B88A1D`
* Matte Black: `#0A0A0A`
* Charcoal: `#141414`
* Elevated Surface: `#1A1A1A`
* Soft White: `#F7F3EA`
* Muted Text: `#B8B2A5`
* Border Gold: `rgba(212,175,55,0.35)`

---

## Reference Images

* If a reference image is provided, match the overall layout, spacing, typography, and color style closely.
* Screenshot your output, compare against the reference, fix mismatches, and re-screenshot.
* Do at least 2 comparison rounds.
* Stop only when no visible differences remain or the user says so.

---

## Local Server

* Always serve on localhost.
* Never screenshot a `file:///` URL.
* Start the dev server:

```bash
node serve.mjs
```

* Server should run at:

```text
http://localhost:3000
```

* If the server is already running, do not start a second instance.

---

## Screenshot Workflow


* Chrome cache is at:

```text
C:/Users/sreyas/.cache/puppeteer/
```

* Always screenshot from localhost:

```bash
node screenshot.mjs http://localhost:3000
```

* Screenshots are saved automatically to:

```text
./temporary screenshots/screenshot-N.png
```

* Optional label suffix:

```bash
node screenshot.mjs http://localhost:3000 jyorah-home
```

* After screenshotting, read the PNG from `temporary screenshots/` and compare it visually against the reference.

When comparing, be specific:

* heading size mismatch
* card spacing mismatch
* color mismatch
* section height mismatch
* image treatment mismatch
* button size mismatch
* alignment mismatch

---

## Output Defaults

* Create a single `index.html` file.
* Keep all styles inline.
* Use Tailwind CSS via CDN:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

* Use placeholder images:

```text
https://placehold.co/WIDTHxHEIGHT
```

* Mobile-first responsive design.

---

## Brand Assets

* Always check the `brand_assets/` folder before designing.
* If logo, images, color guide, or style guide exists, use them.
* If no logo exists, create a clean text-based logo:

```text
JYORAH
```

with small subtitle:

```text
Business Solutions
```

---

## Website Content

### Navigation

Use:

* Services
* VAT & Tax
* Payroll
* Insights
* About
* Contact

Primary CTA:

```text
Free Consultation
```

---

## Hero Section

Use a dark cinematic Dubai skyline or executive finance background.

Headline:

```text
Smart Finance.
Clear Numbers.
Confident Growth.
```

Subheadline:

```text
Premium accounting, VAT, bookkeeping, payroll and business support for UAE companies.
```

CTA buttons:

```text
Get Free Consultation
WhatsApp Now
```

---

## Trust Metrics

Use premium stat strip:

* 15+ Years Experience
* UAE Compliance Focused
* Flexible Part-Time Support
* Confidential Service

---

## About Section

Headline:

```text
Professional. Reliable. Discreet.
```

Body:

```text
Jyorah Business Solutions provides accurate and confidential accounting, VAT, tax, payroll and business support for growing companies across the UAE and Middle East.
```

Support text:

```text
We help business owners stay compliant, organized and financially clear, while they focus on running and growing their business.
```

---

## Services Section

Title:

```text
Premium Business Support Services
```

Service cards:

1. Accounting & Bookkeeping
2. VAT Filing & Compliance
3. Corporate Tax Support
4. Payroll Management
5. Bank Reconciliation
6. Admin & Document Support

Each card should have:

* Small gold icon
* Short title
* Short description
* Gold hover border

---

## Why Choose Section

Title:

```text
Why Businesses Choose Jyorah
```

Use icons and short points:

* Trusted & Confidential
* Accurate Reporting
* Flexible Packages
* Fast Response
* UAE-Focused Compliance

---

## Testimonials Section

Create premium testimonial cards using placeholder names.

Keep tone professional and short.

---

## CTA Section

Gold panel with luxury feel.

Headline:

```text
Ready to bring clarity to your business finances?
```

Subtext:

```text
Speak with Jyorah Business Solutions and explore flexible accounting and business support packages.
```

Button:

```text
Schedule Consultation
```

---

## Footer

Use:

```text
Jyorah Business Solutions
Dubai, UAE
info@jyorah.com
jyorah.com
```

Include:

* Privacy Policy
* Terms of Service
* VAT & Tax
* Contact

---

## Anti-Generic Guardrails

* Do not use default Tailwind blue, indigo, or purple.
* Do not use generic accounting stock visuals.
* Do not use flat shadows.
* Use layered, low-opacity gold-tinted shadows.
* Use serif headings and sans-serif body text.
* Use tight tracking on big headlines.
* Use generous line-height for body text.
* Use subtle radial gradients and luxury depth.
* Use grain / noise texture if possible.
* Animate only transform and opacity.
* Never use `transition-all`.
* Every button and link must have hover, focus-visible, and active states.
* Images must include dark gradient overlay and color treatment.
* Keep spacing intentional and consistent.

---

## Hard Rules

* Do not use JyoLedger anywhere.
* Do not use lumora anywhere.
* Do not use Finora anywhere.
* Company name must be **Jyorah Business Solutions**.
* Domain must be **jyorah.com**.
* Keep design premium, black, gold, executive, and trustworthy.
* Do not add unnecessary sections beyond those listed.
* Do not stop after one screenshot pass.
* Do not use `transition-all`.
* Do not use default Tailwind blue/indigo as the primary color.
