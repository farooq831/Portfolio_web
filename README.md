# Muhammad Farooq: Portfolio

Personal portfolio website, live at **https://farooq831.github.io/**

Plain HTML, CSS and JavaScript. No build step, hosted on GitHub Pages.

## Edit projects

All project cards come from **`projects.js`**. Add or edit an entry there, and the card, filters and search update automatically.

Media is matched by repo name:

- `assets/images/<repo-name>.png`: screenshot (a placeholder is shown if missing)
- `assets/videos/<repo-name>.mp4`: demo video (the "Watch Demo" button only appears if the file exists)

See [`ASSETS-TODO.md`](ASSETS-TODO.md) for the files still to add.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000. Videos need a local server and won't play from `file://` in some browsers.

## Structure

```
index.html          Page markup, SEO and Open Graph tags
css/style.css       Styles (colours are variables at the top)
js/main.js          Theme toggle, nav, project rendering, filters, search, video modal
projects.js         Project data
assets/images/      Project screenshots
assets/videos/      Project demo videos
assets/img/         Profile photo, favicon, social preview image
```
