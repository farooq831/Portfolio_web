/*
 * ─────────────────────────────────────────────────────────────
 *  PROJECT DATA — edit this file to add, remove or change cards.
 * ─────────────────────────────────────────────────────────────
 *  Fields
 *   name        GitHub repo name. Images and videos are found automatically at
 *               assets/images/<name>.png and assets/videos/<name>.mp4
 *   title       Display title
 *   description One or two sentences
 *   category    Used for the filter buttons
 *   tech        Tech-stack tags (also searchable)
 *   repo        "View Code" link
 *   live        "Live Demo" link — leave "" to hide the button
 *   liveLabel   Optional custom text for the live button (e.g. "Download")
 *   featured    true = shown first with a "Featured" badge
 *   image/video Optional: override the automatic file paths
 *
 *  If an image is missing, a placeholder is drawn. If a video is missing,
 *  the "Watch Demo" button is hidden automatically.
 */
const PROJECTS = [
  {
    "name": "exam-question-bank",
    "title": "Exam Question Bank & Paper Builder",
    "description": "Full-stack system where teachers write questions, admins review them, and approved questions become print-ready CAF-style question papers and answer keys as PDF. In beta use at SKANS School of Accountancy, with 127 tests and 99 security checks.",
    "category": "Full-Stack",
    "tech": ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "Prisma", "PostgreSQL", "Playwright"],
    "repo": "https://github.com/farooq831/exam-question-bank",
    "live": "",
    "featured": true,
    "impact": "Beta-ready workflow with 127 automated tests and 99 security checks."
  },
  {
    "name": "goodhand-marketplace",
    "title": "Goodhand — Local Services Marketplace",
    "description": "MERN marketplace to find, book and pay local service providers, with escrow payments, a live booking calendar, real-time chat per booking, vendor verification, disputes and an admin analytics panel.",
    "category": "Full-Stack",
    "tech": ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.io", "Stripe", "JWT", "Vitest"],
    "repo": "https://github.com/farooq831/goodhand-marketplace",
    "live": "",
    "featured": true,
    "impact": "End-to-end marketplace experience covering booking, escrow, chat and disputes."
  },
  {
    "name": "automated-malware-analysis-forensics",
    "title": "Automated Malware Analysis for Disk & Memory Forensics",
    "description": "Final Year Project (BSIT, IIUI). Upload a raw disk image or memory dump and the app extracts features, runs ML models (EMBER + CIC-MalMem-2022), explains results with LIME, maps to MITRE ATT&CK and generates a forensic report.",
    "category": "Cybersecurity",
    "tech": ["Python", "Flask", "LightGBM", "XGBoost", "scikit-learn", "LIME", "Volatility 3", "SQLAlchemy"],
    "repo": "https://github.com/farooq831/automated-malware-analysis-forensics",
    "live": "",
    "featured": true,
    "impact": "Final Year Project combining ML explainability, memory forensics and MITRE ATT&CK mapping."
  },
  {
    "name": "skans-school-website",
    "title": "SKANS School System — Website & Admin Panel",
    "description": "Multi-campus school website with a full admin panel: news, faculty, fee structure, admissions, announcements, contact inbox and automatic daily backups. One codebase serves every campus with its own database.",
    "category": "Full-Stack",
    "tech": ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    "repo": "https://github.com/farooq831/skans-school-website",
    "live": "",
    "featured": true
  },
  {
    "name": "YT_Playlist_Downloader",
    "title": "YT Playlist Downloader",
    "description": "Windows desktop app that downloads a whole YouTube playlist as MP4 with quality selection, parallel downloads, pause/resume and automatic retries. Ships as a one-click installer.",
    "category": "Python & Desktop",
    "tech": ["Python", "PySide6 (Qt)", "yt-dlp", "FFmpeg", "Inno Setup"],
    "repo": "https://github.com/farooq831/YT_Playlist_Downloader",
    "live": "https://github.com/farooq831/YT_Playlist_Downloader/releases/latest",
    "liveLabel": "Download",
    "featured": true
  },
  {
    "name": "hassan-marble-tiles",
    "title": "Hassan Marble & Tiles — Business Website",
    "description": "Bilingual (English + Urdu, RTL) website for a marble showroom in Islamabad, with a product filter, gallery lightbox, WhatsApp enquiries and full SEO (Open Graph, JSON-LD, sitemap).",
    "category": "Frontend",
    "tech": ["HTML", "CSS", "JavaScript", "i18n", "SEO"],
    "repo": "https://github.com/farooq831/hassan-marble-tiles",
    "live": "https://farooq831.github.io/hassan-marble-tiles/",
    "featured": true
  },
  {
    "name": "Online-Quran-Teaching",
    "title": "Online Quran Teaching Website",
    "description": "Responsive, SEO-optimised website for an online Quran teacher: courses, kids classes, timings, FAQ and free-trial booking, with English/Urdu switching.",
    "category": "Frontend",
    "tech": ["HTML", "CSS", "JavaScript", "SEO"],
    "repo": "https://github.com/farooq831/Online-Quran-Teaching",
    "live": "https://farooq831.github.io/Online-Quran-Teaching/",
    "featured": false
  },
  {
    "name": "Jobs_AI_Assistant",
    "title": "AI Job Application Assistant",
    "description": "Collects job preferences, scrapes listings, scores and matches jobs to your profile, suggests resume improvements, tracks application status and exports results to Excel, CSV and PDF.",
    "category": "Python & Desktop",
    "tech": ["Python", "Flask", "React", "Bootstrap", "spaCy", "Selenium", "BeautifulSoup", "pandas"],
    "repo": "https://github.com/farooq831/Jobs_AI_Assistant",
    "live": "",
    "featured": false
  },
  {
    "name": "malware-detection-system",
    "title": "Signature-Based Malware Detection System",
    "description": "Python scanner with 14 custom signatures (ransomware, trojans, spyware, cryptominers) using hash, regex-pattern and behavioural detection, with risk levels and generated scan reports.",
    "category": "Cybersecurity",
    "tech": ["Python", "Regex", "Hashing"],
    "repo": "https://github.com/farooq831/malware-detection-system",
    "live": "",
    "featured": false
  },
  {
    "name": "online-book-store",
    "title": "BookVerse — Online Book Store",
    "description": "Multi-page bookstore website with books, categories, about and contact pages, plus a serverless API endpoint that handles the contact form.",
    "category": "Frontend",
    "tech": ["HTML", "CSS", "JavaScript", "Serverless API"],
    "repo": "https://github.com/farooq831/online-book-store",
    "live": "",
    "featured": false
  },
  {
    "name": "GYM_website",
    "title": "Gym Website",
    "description": "Responsive gym landing page built from reusable React components, with smooth scroll navigation and sections for services, offers, about and contact.",
    "category": "React",
    "tech": ["React", "Vite", "CSS", "react-scroll"],
    "repo": "https://github.com/farooq831/GYM_website",
    "live": "",
    "featured": false
  },
  {
    "name": "DIGITAL-RESUME",
    "title": "Digital Resume",
    "description": "Online resume page with skills, work history, a light/dark theme switcher and a downloadable PDF resume.",
    "category": "Frontend",
    "tech": ["HTML", "CSS", "JavaScript"],
    "repo": "https://github.com/farooq831/DIGITAL-RESUME",
    "live": "https://farooq831.github.io/DIGITAL-RESUME/",
    "featured": false
  },
  {
    "name": "my-portfolio",
    "title": "Link-in-Bio Portfolio",
    "description": "Personal link page built with React that collects all social and contact links in one place, with a QR code for mobile.",
    "category": "React",
    "tech": ["React"],
    "repo": "https://github.com/farooq831/my-portfolio",
    "live": "https://farooq831.github.io/my-portfolio/",
    "featured": false
  },
  {
    "name": "react",
    "title": "React Practice Repository",
    "description": "Small React learning exercises and starter experiments from the early stage of my frontend development journey.",
    "category": "React",
    "tech": ["React", "JavaScript"],
    "repo": "https://github.com/farooq831/react",
    "live": "",
    "featured": false
  },
  {
    "name": "react-code",
    "title": "React Code Practice",
    "description": "Compact React practice repository containing early component and JavaScript experiments.",
    "category": "React",
    "tech": ["React", "JavaScript"],
    "repo": "https://github.com/farooq831/react-code",
    "live": "",
    "featured": false
  },
  {
    "name": "Ludoogame",
    "title": "Dice Game",
    "description": "React dice game: pick a number, roll the dice and score points when they match. Includes a rules panel and score reset.",
    "category": "React",
    "tech": ["React", "Vite", "styled-components"],
    "repo": "https://github.com/farooq831/Ludoogame",
    "live": "",
    "featured": false
  },
  {
    "name": "Password-gererator-react",
    "title": "Password Generator",
    "description": "Generates random passwords with adjustable length, optional numbers and symbols, and one-click copy to the clipboard.",
    "category": "React",
    "tech": ["React", "Vite", "Tailwind CSS", "Hooks"],
    "repo": "https://github.com/farooq831/Password-gererator-react",
    "live": "",
    "featured": false
  },
  {
    "name": "Todo-App",
    "title": "Todo App",
    "description": "Todo list in React for adding, editing and deleting tasks, with dark and light themes.",
    "category": "React",
    "tech": ["React", "Vite", "CSS", "Font Awesome"],
    "repo": "https://github.com/farooq831/Todo-App",
    "live": "",
    "featured": false
  },
  {
    "name": "English-Dictionary",
    "title": "English Dictionary",
    "description": "Type a word to get its meaning and pronunciation audio from a public dictionary API.",
    "category": "Frontend",
    "tech": ["HTML", "CSS", "JavaScript", "REST API"],
    "repo": "https://github.com/farooq831/English-Dictionary",
    "live": "",
    "featured": false
  },
  {
    "name": "Temperature-converter",
    "title": "Temperature Converter",
    "description": "Converts between Celsius, Fahrenheit and Kelvin as you type.",
    "category": "Frontend",
    "tech": ["HTML", "CSS", "JavaScript"],
    "repo": "https://github.com/farooq831/Temperature-converter",
    "live": "",
    "featured": false
  },
  {
    "name": "Portfolio-website",
    "title": "Portfolio Website (v1)",
    "description": "My first responsive portfolio website with about, skills, work and contact sections.",
    "category": "Frontend",
    "tech": ["HTML", "CSS", "JavaScript"],
    "repo": "https://github.com/farooq831/Portfolio-website",
    "live": "",
    "featured": false
  },
  {
    "name": "Simon-Game-Clone-",
    "title": "Simon Game",
    "description": "Memory game: repeat a growing sequence of colours to advance through the levels.",
    "category": "Frontend",
    "tech": ["HTML", "CSS", "JavaScript"],
    "repo": "https://github.com/farooq831/Simon-Game-Clone-",
    "live": "",
    "featured": false
  },
  {
    "name": "Random-Dice-Roller",
    "title": "Dice Roll Simulator",
    "description": "Rolls a six-sided die with a single click.",
    "category": "Frontend",
    "tech": ["HTML", "CSS", "JavaScript"],
    "repo": "https://github.com/farooq831/Random-Dice-Roller",
    "live": "",
    "featured": false
  },
  {
    "name": "social-media-menu",
    "title": "Social Media Selector Menu",
    "description": "Animated dropdown menu for picking a social media platform.",
    "category": "Frontend",
    "tech": ["HTML", "CSS", "JavaScript"],
    "repo": "https://github.com/farooq831/social-media-menu",
    "live": "",
    "featured": false
  },
  {
    "name": "OTPgenerator",
    "title": "Email OTP Verification",
    "description": "Generates a one-time password, emails it with SMTP.js and verifies what the user enters.",
    "category": "Frontend",
    "tech": ["HTML", "CSS", "JavaScript", "SMTP.js"],
    "repo": "https://github.com/farooq831/OTPgenerator",
    "live": "",
    "featured": false
  },
  {
    "name": "Food-Ordering-System-DSA",
    "title": "Food Ordering System (DSA)",
    "description": "Console food-ordering system in C++: arrays for the menu, a stack for the cart and a queue for processing orders.",
    "category": "C++ & DSA",
    "tech": ["C++", "Data Structures"],
    "repo": "https://github.com/farooq831/Food-Ordering-System-DSA",
    "live": "",
    "featured": false
  },
  {
    "name": "leetcode-python",
    "title": "LeetCode Python Solutions",
    "description": "Daily LeetCode practice in Python 3, organised by problem number.",
    "category": "C++ & DSA",
    "tech": ["Python", "Algorithms"],
    "repo": "https://github.com/farooq831/leetcode-python",
    "live": "",
    "featured": false
  }
];
