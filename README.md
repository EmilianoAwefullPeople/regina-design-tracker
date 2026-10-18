# Regina's Design Tracker

Progress tracker for the Journey Onward design sprint (postcards, trip recap slides, format 3 proposal).
Plain static site, no build step. Open `index.html` directly or host it on GitHub Pages.

## Updating

Everything lives in `data.js`.

1. Drop the image(s) into `designs/` (web-sized JPG, ~800px wide).
2. In `data.js`, find the design, set `status: "done"` and add `images: ["file.jpg"]` (several files = variants).
3. When the Figma / Adobe file for a done design arrives, add `sourceFile: true` to it.
4. Bump `updated` at the top.

Progress bars, counts and sections update automatically.
