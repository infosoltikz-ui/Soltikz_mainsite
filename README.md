# SolTikz Consulting — Web Platform (v4.0 Modernized Edition)

A high-performance, zero-build corporate web platform for **SolTikz Consulting** (Specialized IT & Healthcare Technology Staffing, Full-Time Career Marketing, and ResumeIQ AI Platform).

---

## 📁 Architecture & File Structure

The project is built on a clean, zero-build HTML5 / CSS3 / Vanilla JS architecture. Each page is completely self-contained with embedded design tokens, responsive CSS, accessible components, and progressive enhancement JavaScript.

```
├── index.html        # Main Landing Page — Talent Globe, Screening, Core Pillars, Hero Stats
├── about.html        # About SolTikz, Executive Team, The SolTikz Standard, Results & Metrics
├── services.html     # Full-Time Marketing, Candidate Screening, IT Staffing, Training, StudyDad
├── resumeiq.html     # ResumeIQ AI Platform — Interactive ATS Simulator Engine & JD Rewriting
├── healthcare.html   # Healthcare IT & Informatics Domain Specialization (Epic, Cerner, FHIR)
├── plans.html        # Pricing Tiers, ResumeIQ Pro, Enterprise Staffing, Comprehensive FAQ
├── contact.html      # Multi-field Consultation Form with Real-Time Validation & Office Locations
└── README.md         # Comprehensive System Architecture & Engineering Documentation
```

---

## 🚀 Key Improvements & UI Innovations (v4.0 Audit)

### 1. Interactive ATS Simulation Engine (`resumeiq.html`)
- **Dynamic Role Switcher**: Interactive role selector allowing candidates to switch between *Health Informatics Analyst* (95%), *Cloud Data Engineer* (92%), and *Full Stack Developer* (89%).
- **Synchronized SVG Gauge**: Real-time calculated circular meter (`strokeDashoffset = 283 - (283 * (score / 100))`) with animated percentage counters.
- **Dynamic Keyword Categorization**: Renders matched ATS keywords, soft skills, and specific technical competencies dynamically per selected role.

### 2. Accessible Legal & Compliance Modal System (All Pages)
- Replaced dead `#` footer links with a built-in accessible dialog system (`data-open-modal="privacyModal"` and `data-open-modal="termsModal"`).
- Full legal copy covering candidate data transparency, ResumeIQ processing, non-fabrication ethical standards, and immigration advisory disclaimers.
- Complete keyboard accessibility (`Escape` to close), backdrop overlay blur, click-outside dismissal, and body scroll lock management.

### 3. Animated Hero Statistics (`index.html`)
- `IntersectionObserver`-driven count-up engine animating metrics (e.g., `22+`, `48h`, `94%`, `100%`) smoothly on scroll into viewport.

### 4. Interactive Three.js Talent Globe (`index.html`, `about.html`, etc.)
- 3D interactive talent network visualization with Fibonacci-distributed node points, latitude arcs, dual orbiting rings, and mouse-parallax responsiveness with progressive fallback.

### 5. Unified Navigation & Active Indicators
- Desktop navbar active states (`.mi > a.on` / `.mi > button.on`) and mobile sheet submenu highlights (`.ssub a.on`) across all 7 pages for consistent user orientation.

### 6. Interactive Form Experience & Real-Time Validation (`contact.html`, `index.html`)
- Real-time input validation checking email regex patterns and required fields with non-intrusive error outlines.
- Submit button loading spinner (`.btn-loader`) with smooth state transitions.
- Accessible notification banners (`role="alert"`) providing instant feedback upon submission.

### 7. Floating UX Enhancements (All Pages)
- **Back-to-Top Button**: Smoothly appears when scrolling past 350px with one-click animated scroll.
- **Live WhatsApp FAB**: Pulsing floating button with live tooltip preview ("Chat with us live") linking directly to the SolTikz WhatsApp business line.

### 8. Resolved Developer Placeholders
- `about.html`: Replaced `[Your name here]` with `Executive Leadership Team`.
- `plans.html`: Replaced bracketed text in FAQ with transparent placement terms and standard one-click cancellation policies.

---

## 🎨 Design System Tokens

The design system is governed by customized CSS custom properties:

```css
:root {
  --brand:    #1A1180;  /* Deep Indigo Brand Color */
  --cyan:     #0FD4DC;  /* Vibrant Cyan Accent */
  --ink:      #060428;  /* Background Ground Canvas */
  --ink-2:    #0B0740;  /* Elevated Card Surfaces */
  --ink-3:    #171063;  /* Sub-surface / Stroke Highlights */
  --accent:   #0FD4DC;  /* Primary Interactive Highlights */
  --accent-d: #0AA7AF;  /* Darkened Cyan for High Contrast */
  --blue:     #6C63FF;  /* Secondary Accent Glow */
  --text:     #0C0830;  /* High-contrast Light Theme Text */
  --muted:    #5B5878;  /* Secondary Copy Color */
  --font:     'Plus Jakarta Sans', system-ui, sans-serif;
}
```

---

## 🌐 Deployment Instructions

1. **Static Hosting**: Upload all files to any web server or static hosting provider (e.g., Cloudflare Pages, Vercel, Netlify, AWS S3 / CloudFront, Firebase Hosting, or cPanel/Apache/Nginx).
2. **Domain Mapping**: Ensure `index.html` is configured as the default directory index.
3. **Form Integration**: Replace the demo submission timeout in the contact forms with your live webhook, CRM endpoint, or form provider (e.g., Formspree, Web3Forms, HubSpot, or AWS Lambda).
4. **WhatsApp Number**: WhatsApp FAB and header links are pre-configured to `https://wa.me/18723786305`.

---

© 2026 SolTikz LLC. All rights reserved. Solution to IT & Healthcare Business.
