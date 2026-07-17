# Global Life School — Website

A modern, responsive marketing website for **Global Life School**, a boarding and day school in Kamalbinayak, Bhaktapur, Nepal. Built with React and Vite, the site showcases the school's programs, story, leadership, and faculty, and gives prospective families an easy way to get in touch.

## ✨ Features

- **Home** — Hero slideshow, animated stats bar, program highlights, and a "Why Choose Us" bento grid.
- **About** — School mission & vision, an animated stat counter, a scrollable founding timeline, and a message from the Principal.
- **Academics** — NEB-aligned curriculum broken into three program phases (Lower Secondary, Grade 9, Grade 10 SEE), each with subjects and an apply CTA.
- **Team** — Leadership cards and a faculty grid, plus a "join our team" call to action.
- **Contact** — A validated enquiry form (name, phone, email, enquiry type, message), office hours, an embedded Google Map, and social links.
- Sticky **auto-hiding navbar**, consistent **footer** with sitemap and contact details, and **scroll-to-top on route change**.
- Fully responsive layouts with custom breakpoints on every page.

## 🛠️ Tech Stack

- **React 18** — component-based UI
- **Vite** — dev server & build tooling
- **React Router (`react-router`)** — client-side routing
- **Plain CSS** (no framework) — custom design system with CSS variables
- **Fraunces** (serif, headings) & **Work Sans** (sans-serif, body) — Google Fonts

## 📁 Project Structure

```
GLOBALLIFE-WEB/
├── .agent/skills/global_web/README.md
├── dist/                       # Production build output
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   ├── global.jpg          # School crest
│   │   ├── global1.jpg         # Hero / gallery photo
│   │   ├── global2.jpg         # Hero / gallery photo
│   │   ├── global3.jpg         # Hero / gallery photo
│   │   ├── global5.jpg         # Hero / gallery photo
│   │   ├── hero.png
│   │   ├── principal.jpg       # Principal photo
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── About.css
│   │   ├── About.jsx
│   │   ├── Academics.css
│   │   ├── Academics.jsx
│   │   ├── Contact.css
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Team.css
│   │   └── Team.jsx
│   ├── App.css
│   ├── App.jsx                 # Route definitions
│   ├── index.css                # Global styles & CSS variables
│   └── main.jsx                 # App entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## 🎨 Design System

All pages share a common set of design tokens (defined in `index.css`) for visual consistency:

| Token | Value | Usage |
|---|---|---|
| `--navy` | `#0E2A4D` | Primary dark backgrounds, headings |
| `--navy-deep` | `#081C36` | Gradient end / deepest background |
| `--blue-accent` | `#3D8BFD` | Links, highlights, buttons, icons |
| `--blue-soft` | `#DCEBFF` | Light accents, badges |
| `--bg` | `#F6F9FE` | Base page background |
| `--page-bg` | `#F9F9FA` | Section background |

Recurring UI patterns across pages:
- Navy hero sections with a subtle grid overlay + radial glow
- Breadcrumb navigation under each hero
- Uppercase "eyebrow" labels above section headings
- `Fraunces` italic emphasis on key words in headings
- Card-based content blocks with hover lift effects

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd <project-folder>

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

This starts the Vite dev server, typically at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Outputs a production-ready build to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🗺️ Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/academics` | Academics |
| `/team` | Team |
| `/contact` | Contact |

## 📌 Notes

- Team member photos currently use initials-based avatar placeholders — swap in real photos by replacing the `initials(name)` div with an `<img>` tag in `Team.jsx`.
- The contact form validates name, phone (Nepali format: 10 digits starting with 97/98), and enquiry type on the client side; no backend submission is wired up yet.
- The Google Map embed in `Contact.jsx` points to Global Life School's location in Kamalbinayak, Bhaktapur — update the `src` and directions URL if the location changes.

## 👤 Credits

Built with React by **Swikar Napit**.