# Portfolio Website for Vareen Aggarwal

Build a modern, full-stack Portfolio Website using React.js (frontend) and Node.js + Express (backend) with a MongoDB database for storing contact form submissions.

---

## Architecture Overview

```
Portfolio Website/
├── client/          # React.js Frontend
└── server/          # Node.js + Express Backend
```

### Tech Stack
| Layer      | Technology                             |
|------------|----------------------------------------|
| Frontend   | React.js (Vite), React Router DOM      |
| Styling    | Vanilla CSS (light theme, responsive)  |
| Backend    | Node.js + Express.js                   |
| Database   | MongoDB Atlas (via Mongoose)           |
| Email      | Nodemailer (sends email on form submit) |

---

## Pages & Components

### Frontend Pages (React Router)
1. **Home (`/`)** — Hero section with name, tagline, CTA buttons
2. **About (`/about`)** — Education (BCA, Asian School of Business), brief bio
3. **Skills (`/skills`)** — Visual skill cards (HTML, CSS, React, Node, Figma, etc.)
4. **Projects (`/projects`)** — Project cards with title, description, tech stack, links
5. **Contact (`/contact`)** — Form with name, email, message → sends to backend → stores in DB

### Shared Components
- `Navbar` — Responsive navigation with hamburger menu for mobile
- `Footer` — Social links, copyright
- `ProjectCard` — Reusable card for each project
- `SkillBadge` — Reusable skill icon + label

---

## Backend API

| Method | Route                | Description                      |
|--------|----------------------|----------------------------------|
| POST   | `/api/contact`       | Save message to MongoDB, send email notification |
| GET    | `/api/contact`       | Retrieve all messages (optional admin view) |

### Database Schema: `Contact`
```js
{
  name: String,
  email: String,
  message: String,
  createdAt: Date
}
```

---

## Proposed File Structure

### Client (React + Vite)
```
client/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── Footer.jsx        # Footer
│   │   ├── ProjectCard.jsx   # Project card component
│   │   └── SkillBadge.jsx    # Skill badge component
│   ├── pages/
│   │   ├── Home.jsx          # Landing page
│   │   ├── About.jsx         # About me page
│   │   ├── Skills.jsx        # Skills page
│   │   ├── Projects.jsx      # Projects listing page
│   │   └── Contact.jsx       # Contact form page
│   ├── data/
│   │   ├── projects.js       # Project data array
│   │   └── skills.js         # Skills data array
│   ├── styles/
│   │   ├── index.css         # Global styles + design tokens
│   │   ├── Navbar.css
│   │   ├── Home.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   └── Contact.css
│   ├── App.jsx               # Router setup
│   └── main.jsx              # Entry point
├── index.html
├── vite.config.js
└── package.json
```

### Server (Node.js + Express)
```
server/
├── models/
│   └── Contact.js            # Mongoose schema
├── routes/
│   └── contact.js            # Contact API routes
├── .env                      # MongoDB URI, email credentials
├── server.js                 # Express app entry point
└── package.json
```

---

## UI Design (Light Theme)

- **Primary Color**: `#6C63FF` (soft indigo/violet)
- **Accent**: `#FF6584` (coral pink for highlights)
- **Background**: `#FAFAFA` (off-white)
- **Text**: `#1A1A2E` (dark navy for readability)
- **Card Background**: `#FFFFFF` with subtle box shadow
- **Font**: Google Fonts — *Plus Jakarta Sans*
- **Animations**: Fade-in on scroll, hover lift for cards, smooth nav transitions

---

## Verification Plan

### Automated
- Start backend: `node server.js`
- Start frontend: `npm run dev`
- Test POST `/api/contact` via form submission

### Manual
- All 5 pages load correctly
- Navbar responsive hamburger works on mobile
- Contact form submits and data appears in MongoDB Atlas
- All pages responsive on mobile/tablet/desktop

---

## Open Questions

> [!IMPORTANT]
> **Database**: Do you have a MongoDB Atlas account? I'll set up the connection string as a `.env` variable. If not, I can use MongoDB Community (local) or SQLite as an alternative.

> [!IMPORTANT]
> **Email Notifications**: Should the contact form send you an email notification (using Gmail/SMTP)? If yes, please provide a Gmail address to use (or I can use a placeholder you update later).

> [!NOTE]
> **Projects**: You'll be able to easily add your own projects in `client/src/data/projects.js`. I'll add 3 sample placeholder projects to get you started.
