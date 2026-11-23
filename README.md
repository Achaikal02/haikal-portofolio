# Haikal — Portfolio

Apple-style portfolio built with React, Vite and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Edit content

Everything you'd normally change lives in two files:

| File | What's in it |
|---|---|
| `src/data/profile.js` | Name, photo, CV, email, GitHub, LinkedIn, profile text, skills |
| `src/data/projects.js` | Every project on the home page, in display order |

### Add a new project

Copy one object in `src/data/projects.js`, paste it where you want it in the list, and edit the fields. The section, its number (01, 02…), the shortcut chip and the background colour are all generated automatically.

### Add a product video

1. Put the video in `public/videos/`, e.g. `public/videos/valora.mp4` (MP4, H.264, 1080p is plenty).
2. Optionally add a poster image, e.g. `public/videos/valora.jpg`.
3. In `projects.js`: `video: { src: '/videos/valora.mp4', poster: '/videos/valora.jpg' }`.

Until `src` is set, the section shows a "coming soon" placeholder.

> Videos over ~50 MB make the site slow. If yours is bigger, upload it to YouTube or Cloudflare Stream and swap `VideoFrame` for an embed.

### Photo & CV

- `public/profile.jpg` — square photo, at least 600×600.
- `public/cv.pdf` — your CV. The Résumé / Download CV buttons use it.

### Add a case study page

Give a project a `caseStudy` object (see the `churn` entry). A "Read the case study ›" link appears and the page is served at `/work/<id>`.

## Deploy (Vercel)

1. Push this folder to a GitHub repo.
2. On vercel.com → **Add New Project** → import the repo → **Deploy**. Vercel detects Vite automatically.
3. Optional: add your own domain under **Settings → Domains**.

`vercel.json` already handles routing for `/work/...` pages.
