# Assets to-do list

The site looks for files by **repo name**:

- Screenshot: `assets/images/<repo-name>.png`
- Demo video: `assets/videos/<repo-name>.mp4`

If a screenshot is missing, the card shows a gradient placeholder.
If a video is missing, the **Watch Demo** button stays hidden. Nothing appears broken, so add files whenever you're ready.

File names are **case-sensitive** on GitHub Pages. Copy them exactly as written below.

---

## 1. Screenshots still needed (6)

| File name | Project | What to capture |
|---|---|---|
| `assets/images/Jobs_AI_Assistant.png` | AI Job Application Assistant | Dashboard with matched and scored jobs |
| `assets/images/malware-detection-system.png` | Signature-Based Malware Detection | Terminal output of a scan with risk levels |
| `assets/images/Todo-App.png` | Todo App | App with a few tasks, ideally in dark mode |
| `assets/images/Password-gererator-react.png` | Password Generator | Generator with a password showing |
| `assets/images/Food-Ordering-System-DSA.png` | Food Ordering System (C++) | Console menu, cart and order queue |
| `assets/images/leetcode-python.png` | LeetCode Python | Optional: a solution file, or leave the placeholder |

## 2. Screenshots worth replacing (optional)

These come from the repos' own images or were auto-captured. Swap in better ones if you have them:

| File name | Note |
|---|---|
| `assets/images/GYM_website.png` | Currently the banner artwork, not a screenshot of the site |
| `assets/images/Ludoogame.png` | Currently the dice artwork, not a screenshot of the game |
| `assets/images/automated-malware-analysis-forensics.png` | Upload page. A results/report page would look stronger |
| `assets/images/Random-Dice-Roller.png`, `Simon-Game-Clone-.png`, `OTPgenerator.png`, `social-media-menu.png` | Auto-captured and fairly plain |

## 3. Demo videos still needed (20)

Already included: `exam-question-bank.mp4`, `goodhand-marketplace.mp4`, `automated-malware-analysis-forensics.mp4`, `English-Dictionary.mp4`, `Temperature-converter.mp4`.

**Highest priority** (these projects impress recruiters most):

- [ ] `assets/videos/skans-school-website.mp4`: website, then admin panel (add a news post, edit fees)
- [ ] `assets/videos/YT_Playlist_Downloader.mp4`: paste a playlist, load it, start a download, pause/resume
- [ ] `assets/videos/hassan-marble-tiles.mp4`: scroll the site, switch EN ↔ Urdu, open the gallery lightbox
- [ ] `assets/videos/Jobs_AI_Assistant.mp4`: enter preferences, see job scores, export to Excel
- [ ] `assets/videos/Online-Quran-Teaching.mp4`
- [ ] `assets/videos/malware-detection-system.mp4`

**Nice to have:**

- [ ] `assets/videos/online-book-store.mp4`
- [ ] `assets/videos/GYM_website.mp4`
- [ ] `assets/videos/DIGITAL-RESUME.mp4`
- [ ] `assets/videos/my-portfolio.mp4`
- [ ] `assets/videos/Ludoogame.mp4`
- [ ] `assets/videos/Password-gererator-react.mp4`
- [ ] `assets/videos/Todo-App.mp4`
- [ ] `assets/videos/Portfolio-website.mp4`
- [ ] `assets/videos/Simon-Game-Clone-.mp4`
- [ ] `assets/videos/Random-Dice-Roller.mp4`
- [ ] `assets/videos/social-media-menu.mp4`
- [ ] `assets/videos/OTPgenerator.mp4`
- [ ] `assets/videos/Food-Ordering-System-DSA.mp4`
- [ ] `assets/videos/leetcode-python.mp4` (can be skipped)

## Tips

- **Screenshots:** about 1280×800 (16:10). Keep each file under about 500 KB.
- **Videos:** 30–90 seconds, MP4 (H.264), 720p. Keep each under about 15 MB, since GitHub rejects files over 100 MB.
  Record with **Win + Alt + R** (Xbox Game Bar) or OBS. Compress with:
  ```
  ffmpeg -i input.mp4 -vf scale=1280:-2 -c:v libx264 -crf 28 -c:a aac -b:a 96k -movflags +faststart output.mp4
  ```
- To use a different file name or format (e.g. `.jpg`), add `"image": "assets/images/my-file.jpg"` or `"video": "..."` to that project in `projects.js`.
- After adding files: `git add assets && git commit -m "Add project media" && git push`.
