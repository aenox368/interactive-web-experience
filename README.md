# An Interactive 18th Birthday Experience

A fully custom, interactive birthday website built from scratch with
HTML, CSS, and vanilla JavaScript — no frameworks, no build step, no
backend. It's a static site that runs entirely in the browser.

This is the **public demo version** of a personal project. The recipient
("Mira"), the creator ("Ari"), and every letter, nickname, memory, and
timeline entry are fictional, written specifically for this portfolio
build. See the "Story behind this" section at the end of the site (via
the final gift) for more on why it exists.

## What it is

The site walks a visitor through a cinematic entrance, a birthday page,
and a paginated set of 18 individually designed "gifts" — each one a
different interactive format: handwritten-style notes, an audio player,
a video player, a photo gallery with a vertical timeline, a scattered
nickname collage, and a playful accordion-style "user manual," among
others. It closes with a dedicated Credits / About the Project page.

## Features

- **Custom page-transition system** — entrance → birthday → paginated
  gift grid, all driven by vanilla JS with no router or framework.
- **A modal-based "gift" system** — 18 uniquely typed gift renderers
  (image, audio, video, image pair, curated photo gallery + timeline,
  scattered nickname collage, accordion manual, and a distinct "final"
  layout) sharing one config-driven architecture.
- **Graceful media fallbacks** — every image/audio/video slot detects a
  missing file and swaps in a styled placeholder instead of a broken
  element, so the site never looks broken even without real media.
- **Custom animations** — falling petals and ambient particles, staggered
  entrance animations, an accordion system, a zoomable image, and smooth
  page/modal transitions, all hand-written in CSS + JS (no animation
  library).
- **Fully responsive** — tested down to small mobile widths.
- **Config-driven content** — every piece of text, every nickname, every
  timeline entry, and every media path lives in one `js/config.js` file,
  so the entire site's content can be rewritten without touching any
  HTML, CSS, or app logic.

## Tech stack

- HTML5
- CSS3 (custom properties, no preprocessor, no framework)
- Vanilla JavaScript (no libraries, no bundler)
- Google Fonts (Cormorant Garamond, Lora, Caveat)

## Project structure

    index.html          the whole site (one page, JS-driven navigation)
    css/style.css        all styling
    js/config.js          all content: text, titles, paths, credits
    js/main.js             app logic (rendering, navigation, modals)
    assets/...              media folders (empty placeholders in this
                             public build — see below)

## Running it locally

No build step required.

```
git clone <this-repo>
cd <this-repo>
```

Then just open `index.html` directly in a browser (Chrome recommended),
or serve it locally:

```
python3 -m http.server 8000
```

and visit `http://localhost:8000`.

## About the media

This public build ships without real photos/audio/video — every media
slot is intentionally empty so the site displays its built-in "add this
file" placeholders. Each `assets/<type>/README.txt` lists the exact
filenames the site expects if you want to drop in your own sample media
to see the full experience end to end.

## Editing content

Everything text-based — gift titles, teaser lines, nicknames, the
timeline, the user manual, the credits — lives in `js/config.js` in
plain, readable JavaScript objects. No HTML/CSS knowledge is needed to
change any of the copy.
