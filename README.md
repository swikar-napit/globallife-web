# 🏫 Global Life School — Official Website
> 🌐 *A Modern, Responsive Website for Global Life School — Boarding & Day School, Bhaktapur*

![GitHub repo size](https://img.shields.io/github/repo-size/swikar-napit/globallife-web)
![GitHub stars](https://img.shields.io/github/stars/swikar-napit/globallife-web?style=social)
![GitHub forks](https://img.shields.io/github/forks/swikar-napit/globallife-web?style=social)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Made with Love](https://img.shields.io/badge/Made%20with-%E2%9D%A4-red)
![Nepal](https://img.shields.io/badge/Made%20in-Nepal%20🇳🇵-blue)

---

## 🌐 Live Demo
👉 [Visit the website]

---

## 📌 Table of Contents
- [Introduction](#-introduction)
- [Features](#-features)
- [Why This Website?](#-why-this-website)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Pages](#-pages)
- [Roadmap](#-roadmap)
- [License](#-license)
- [Author](#-author)

---

## 📖 Introduction

**Global Life School Website** is the official web presence for **Global Life School**, a boarding and day school located in **Kamalbinayak-10, Bhaktapur, Nepal**.

The site gives prospective and current families everything they need — academic programs, the school's story, faculty profiles, and a direct way to get in touch — in a fast, modern, mobile-friendly experience built with React.

> Boarding & Day School | Established **2009** | 500+ Students | 40+ Teachers

---

## ✨ Features

- 🎞️ Animated hero slideshow with auto-play, pause-on-hover & manual navigation
- 🧭 Scroll-aware sticky navbar that hides on scroll-down, reveals on scroll-up
- 🔗 Deep-linkable About page — footer links jump straight to the Principal's Message or Our Story section with smooth scrolling
- 📈 Animated stat counters that count up when scrolled into view
- 🕰️ Interactive horizontal timeline of the school's history (2009 → today)
- 👩‍🏫 Tabbed faculty directory (Administration, Lower Secondary & Secondary, Primary, Pre-Primary)
- 📱 Fully responsive across every page, card, and grid
- ⚡ Client-side routing with automatic scroll-to-top between pages (hash-anchor aware)
- 🎨 Component-scoped CSS — no bloated global stylesheet

---

## 🌟 Why This Website?

Parents and students often need quick answers about:
- What academic programs are offered, and for which grades?
- Who's on the faculty and leadership team?
- How to get in touch or apply for admission?

This site solves that instantly:
- Clear, organized program breakdowns 📚
- A real look at the people behind the school 👨‍🏫
- One-click paths to contact or apply 📩
- Fast and mobile-friendly, wherever families are browsing 🌍

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://react.dev) | UI library |
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [React Router](https://reactrouter.com) | Client-side routing |
| CSS3 (component-scoped) | Styling & responsive design |
| [ESLint](https://eslint.org) | Code linting |
| Google Fonts (Fraunces & Work Sans) | Typography |

---

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/swikar-napit/globallife-web.git
cd globallife-web

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be running at `http://localhost:5173` 🎉

---

## 💡 Usage

1. Run the dev server locally, or open the live deployment
2. Browse **Home** for an overview, stats, and featured programs
3. Visit **Academics** for a full breakdown of each academic phase
4. Check **Team** to meet the faculty, filterable by department
5. Head to **About** to read the school's story and the Principal's message
6. Use **Contact** to send an inquiry or find the school's address & phone numbers

---

## 📁 Project Structure

```text
globallife-web/
│
├── dist/ 
├── node_modules/  
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
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
│   │
│   ├── components/
│   │   ├── Footer.css
│   │   ├── Footer.jsx           # Site footer — quick links, resources, contact info
│   │   ├── Navbar.css
│   │   ├── Navbar.jsx           # Sticky, scroll-aware navigation bar
│   │   └── ScrollToTop.jsx      # Resets scroll position on route change
│   │
│   ├── pages/
│   │   ├── About.css
│   │   ├── About.jsx             # Mission, vision, story timeline, principal's message
│   │   ├── Academics.css
│   │   ├── Academics.jsx         # Curriculum phases (Lower Secondary → SEE)
│   │   ├── Contact.css
│   │   ├── Contact.jsx           # Contact form and school details
│   │   ├── Home.css
│   │   ├── Home.jsx              # Landing page — hero, stats, programs, CTA
│   │   ├── Team.css
│   │   └── Team.jsx              # Faculty & staff directory with tabs
│   │
│   ├── App.css
│   ├── App.jsx                    # Route definitions
│   ├── index.css                  # Global styles: fonts, CSS variables, reset
│   └── main.jsx                    # App entry point
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero slideshow, stats, programs overview, "Why Choose Us," and enrollment CTA |
| `/about` | Mission & vision, core values, school history timeline, and a message from the Principal |
| `/academics` | Detailed breakdown of academic phases from Lower Secondary through the SEE board exams |
| `/team` | Faculty and staff directory, filterable by department |
| `/contact` | Contact information and inquiry form |

---

## 🗺 Roadmap

- [x] Responsive homepage with hero slideshow
- [x] Academics page with program breakdowns
- [x] About page with story timeline & principal's message
- [x] Team page with tabbed faculty directory
- [x] Component-scoped CSS refactor
- [x] Deep-linkable footer (Principal's Message / Our Story anchors)
- [ ] Contact form backend integration
- [ ] Live deployment
- [ ] Gallery / media page

---

## 👨‍💻 Author
**Swikar Napit**
- 🌐 Website: [swikarnapit.com.np](https://swikarnapit.com.np)
- 💻 GitHub: [@swikar-napit](https://github.com/swikar-napit)
- 🔗 LinkedIn: [swikar-napit](https://www.linkedin.com/in/swikar-napit-819b9b414/)
- 📧 Email: napit.swikar1@gmail.com
---

<sub>Built by Swikar Napit using React, for Global Life School</sub>