# ActiveArena project website

This is a dependency-free static project page for ActiveArena. It is intentionally plain HTML/CSS/JS so it can be previewed locally, copied to GitHub Pages, or served from any static host.

## Preview

From this directory run:

```bash
python -m http.server 4173
```

Open <http://localhost:4173>. A file URL is not sufficient because the browser may block local video playback; use the HTTP server above.

## Contents

- `index.html` — project page and accessible camera/split controls.
- `styles.css` — responsive visual system, reduced-motion support, and print-friendly layout. The same stylesheet is embedded in `index.html` so a file preview or a host that omits sibling assets still renders the academic layout.
- `script.js` — task-wall lazy loading, task selection, and observer/head/world video switching.
- `assets/images/` — paper-derived figures, task posters, and rollout stills.
- `assets/videos/` — faststart H.264 clips from the frozen Astribot sample, including the 35-task gallery.
- `docs/task-videos.json` / `docs/task-videos.md` — task gallery manifest, provenance, dimensions, durations, and hashes.
- `docs/rollout-videos.json` — 35 tasks × demo/randomized × observer/head/world rollout manifest.
- `docs/paper-sources.md` — verified paper facts, results, and image provenance.
- `docs/media.md` / `docs/media.json` — source paths, camera semantics, hashes, and validation metadata.

The observer and world clips are visualization cameras. They are never policy inputs; the head clip is the observation view for these samples. The page is prepared for deployment at <https://leeibo.github.io/ActiveArena>; the Paper button currently points to that project homepage until the camera-ready manuscript page is public.
