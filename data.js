// Single source of truth for the tracker.
// To mark a design done: set status to "done" and list its image(s) in `images`
// (files live in /designs). Everything else on the page updates automatically.
// `sourceFile: true` marks designs whose Figma / Adobe file has been delivered, not just the image.
// Pending items can carry `refs` (reference/inspiration images, or `kind: "wireframe"` layout wireframes)
// shown faded until the real design arrives.

window.TRACKER = {
  updated: "2026-10-28",


  groups: [
    { id: "postcards", name: "Postcards", blurb: "Stickers, overlays and photo templates for the postcard feature." },
    { id: "recap", name: "Trip recap slides", blurb: "1080 × 1920 slide templates for the new storytelling recap. The visuals shown are references only: Regina is free to design whichever version she likes.",
      brief: {
        summary: "The recap is moving from a simple sequence of single photos and stat slides to a storytelling format. An AI pipeline groups the trip media into “memories” (e.g. a 6-hour hike) and thematic patterns (e.g. “your coffee stops”), and these slides tell that story.",
        rows: [
          ["Format", "1080 × 1920 px, portrait (the app's full-screen vertical format)."],
          ["Sample media", "Use the sample media and data already shared in the Google Drive folder."],
          ["Creative freedom", "The slide images on this site are references only, made to show the idea. Regina can create whichever version she likes and feels fits best."],
          ["Deliverable", "After approval, build a reusable Figma component / template system that engineering can translate into code, not a set of flat comps."]
        ],
        colors: [
          ["Primary · dark / gray", "#1c1c1e"],
          ["Secondary · yellowish", "#f4d65e"],
          ["Secondary · greenish", "#6aa84f"],
          ["Secondary · blueish", "#8ec5ea"],
          ["Secondary · white / bone", "#f3f0e8"]
        ],
        colorsNote: "Keep the color styles from the current TestFlight build."
      } },
    { id: "format3", name: "Format 3", blurb: "A shareable format proposal: an example plus a short text breakdown." }
  ],

  designs: [
    // ── Postcards ────────────────────────────────────────────────
    { id: "1",  group: "postcards", type: "Sticker / overlay", name: "3-line text sticker", status: "done", sourceFile: true, images: ["p01.jpg"] },
    { id: "2",  group: "postcards", type: "Sticker / overlay", name: "2-line handwritten sticker, uppercase", sourceFile: true, status: "done", images: ["p02.jpg"] },
    { id: "3",  group: "postcards", type: "Sticker / overlay", name: "3-line handwritten sticker", sourceFile: true, status: "done", images: ["p03.jpg"] },
    { id: "4",  group: "postcards", type: "Sticker / overlay", name: "2-line handwritten sticker, mixed case", sourceFile: true, status: "done", images: ["p04.jpg"] },
    { id: "5",  group: "postcards", type: "Sticker / overlay", name: "3-line handwritten sticker, mixed case", sourceFile: true, status: "done", images: ["p05.jpg"] },
    { id: "6",  group: "postcards", type: "Sticker / overlay", name: "City/Country, then highlight", sourceFile: true, status: "done", images: ["p06.jpg"] },
    { id: "7",  group: "postcards", type: "Sticker / overlay", name: "Highlight, then City/Country", sourceFile: true, status: "done", images: ["p07.jpg"] },
    { id: "8",  group: "postcards", type: "Sticker / overlay", name: "Highlight, then Season/data", sourceFile: true, status: "done", images: ["p08.jpg"] },
    { id: "9",  group: "postcards", type: "Postcard template", name: "3 columns of photos", sourceFile: true, status: "done", images: ["p09.jpg"] },
    { id: "10", group: "postcards", type: "Postcard template", name: "Single column, preset background", sourceFile: true, status: "done", images: ["p10.jpg"] },
    { id: "11", group: "postcards", type: "Postcard template", name: "2 columns, preset background", sourceFile: true, status: "done", images: ["p11.jpg"] },
    { id: "12", group: "postcards", type: "Sticker / overlay", name: "Passport stamp", sourceFile: true, status: "done", images: ["p12.jpg"] },
    { id: "13", group: "postcards", type: "Sticker / overlay", name: "Passport stamp v2", sourceFile: true, status: "done", images: ["p13.jpg"] },
    { id: "14", group: "postcards", type: "Postcard template", name: "Main image, 3 small images and data sticker", sourceFile: true, status: "done", images: ["p14.jpg"],
      notes: "The data shown (currently a date) must be able to change to country, landmark, activity, season, city, trip name or user input, so the layout adapts to different text lengths." },
    { id: "15", group: "postcards", type: "Postcard template", name: "2-image collage with a data sticker on each image", sourceFile: true, status: "done", images: ["p15.jpg"],
      notes: "The data shown must be able to change to country, landmark, activity, season, city, trip name or user input, so the layout adapts to different text lengths." },
    { id: "16", group: "postcards", type: "Postcard template", name: "Photo stamp, vintage", sourceFile: true, status: "done", images: ["p16-1.jpg", "p16-2.jpg"],
      notes: "Photo centered inside a stamp-style frame, place name in caps, then country and date as subtitle. Background color customizable, black for now." },
    { id: "17", group: "postcards", type: "Postcard template", name: "Title-over-photo template", sourceFile: true, status: "done", images: ["p17-1.jpg", "p17-2.jpg", "p17-3.jpg"],
      notes: "Photo fills the lower part; city/place/country title in caps, colored to match the photo; bone/beige background above." },
    { id: "18", group: "postcards", type: "Sticker / overlay", name: "Boarding pass with QR/barcode", sourceFile: true, status: "done", images: ["p18.jpg"],
      notes: "City/country, generic QR code and barcode, small color accent lines (color changeable), optional season/year subtitle." },
    { id: "19", group: "postcards", type: "Sticker / overlay", name: "Boarding pass sticker", sourceFile: true, status: "done", images: ["p19.jpg"],
      notes: "Boarding-pass / cinema-ticket style sticker, city or country centered, small date line." },
    { id: "20", group: "postcards", type: "Postcard template", name: "Photo stamp, modern", sourceFile: true, status: "done", images: ["p20.jpg"],
      notes: "Minimalist twin of the vintage photo stamp: photo inside a name sticker, second photo behind it as background." },
    { id: "21", group: "postcards", type: "Sticker / overlay", name: "Polaroid frame sticker", sourceFile: true, status: "done", images: ["p21-1.jpg", "p21-2.jpg"] },
    { id: "22", group: "postcards", type: "Postcard template", name: "Vintage postcard", status: "done", sourceFile: true, images: ["p22.jpg"],
      notes: "Front/back postcard layout with photo, message lines and stamp area." },
    { id: "23", group: "postcards", type: "Postcard template", name: "Cinematic 3-frame column", sourceFile: true, status: "done", images: ["p23.jpg"],
      notes: "3 stacked photo frames with 1–2 lines of info in yellow, never overlapping the photos." },
    { id: "24", group: "postcards", type: "Postcard template", name: "Split image + color block", sourceFile: true, status: "done", images: ["p24-1.jpg", "p24-2.jpg"],
      notes: "Small photo panel on top, second photo at the bottom partly covered by a color shape." },
    { id: "25", group: "postcards", type: "Postcard template", name: "Journal / notebook template", sourceFile: true, status: "done", images: ["p25.jpg"],
      notes: "Open-book layout with handwritten-style text; one photo as background, one inside the book." },
    { id: "26", group: "postcards", type: "Sticker / overlay", name: "Weather icon stickers (x8)", sourceFile: true, status: "done", images: ["p26.jpg"], refs: [{ src: "postcard-refs/W26a.jpg", kind: "wireframe", caption: "Sticker sheet idea: all 6 weather states, each with an icon and one short line. Regina is free to design whichever version she likes." }, { src: "postcard-refs/W26b.jpg", kind: "wireframe", caption: "In use: round sticker on a sunny photo. Regina is free to design whichever version she likes." }, { src: "postcard-refs/W26c.jpg", kind: "wireframe", caption: "In use: pill sticker on a cloudy photo. Regina is free to design whichever version she likes." }, { src: "references/weather.jpg", caption: "Reference from the brief (Appendix B p.3)" }],
      notes: "Delivered as 8 states (6 planned + cloudy night and partly cloudy). In Figma each state is its own component. Sunny, partly cloudy, cloudy, rainy, snowing, night — each with a short text for season, temperature or weather." },
    { id: "27", group: "postcards", type: "Sticker / overlay", name: "Passport stamp v3", sourceFile: true, status: "done", images: ["p27.jpg"], refs: [{ src: "postcard-refs/P27a.jpg", kind: "wireframe", caption: "Round ink stamp with an arrival date, slightly see-through. Regina is free to design whichever version she likes." }, { src: "postcard-refs/P27b.jpg", kind: "wireframe", caption: "Octagonal entry stamp in a second ink color. Regina is free to design whichever version she likes." }, { src: "p12.jpg", caption: "Previous version: Passport stamp (#12)" }, { src: "p13.jpg", caption: "Previous version: Passport stamp v2 (#13)" }],
      notes: "Delivered as 8 individual stamps (each a Figma component) plus an in-use example. A third passport-stamp variant." },
    { id: "28", group: "postcards", type: "Sticker / overlay", name: "Location sticker", sourceFile: true, status: "done", images: ["p28.jpg"], refs: [{ src: "postcard-refs/L28a.jpg", kind: "wireframe", caption: "Pill sticker with a pin icon, close to the Instagram location sticker. Regina is free to design whichever version she likes." }, { src: "postcard-refs/L28b.jpg", kind: "wireframe", caption: "Speech-bubble pin: “You were here” + place, altitude and country. Regina is free to design whichever version she likes." }, { src: "postcard-refs/L28c.jpg", kind: "wireframe", caption: "Bordered tag sticker: place name + town and country. Regina is free to design whichever version she likes." }],
      notes: "Shows location. Loosely inspired by the Instagram Stories location sticker, with its own look." },
    { id: "29", group: "postcards", type: "Sticker / overlay", name: "Date sticker", sourceFile: true, status: "done", images: ["p29.jpg"],
      notes: "Shows the date, styled as its own small block rather than plain text." },
    { id: "30", group: "postcards", type: "Extended template", name: "Expanded template (base #9)", sourceFile: true, status: "done", images: ["p30.jpg"], refs: [{ src: "postcard-refs/E30.jpg", kind: "wireframe", caption: "Expanded #9: data row and barcode on top, footer title, photos stay as in #9. Regina is free to design whichever version she likes." }, { src: "p09.jpg", caption: "Base design #9 (delivered)" }, { src: "references/expanded-sublime.jpg", caption: "Inspiration: “Sublime” poster, margin/border concept" }, { src: "references/expanded-summit.jpg", caption: "Inspiration: “Summit” poster, margin/border concept" }, { src: "references/expanded-forests.jpg", caption: "Inspiration: vintage poster, framed border with side info" }, { src: "references/expanded-postcard.jpg", caption: "Inspiration: vintage postcard, message + stamp area" }],
      notes: "Delivered built on #10 (single column), not #9. Expanded version of #9 (3 columns of photos): same design with margins added so more info can sit around the photos." },
    { id: "31", group: "postcards", type: "Extended template", name: "Expanded template (base #15)", sourceFile: true, status: "done", images: ["p31.jpg"], refs: [{ src: "postcard-refs/E31.jpg", kind: "wireframe", caption: "Expanded #15: vertical place/date strip, header and a From / To / Weather footer. Regina is free to design whichever version she likes." }, { src: "p15.jpg", caption: "Base design #15 (delivered)" }, { src: "references/expanded-sublime.jpg", caption: "Inspiration: “Sublime” poster, margin/border concept" }, { src: "references/expanded-summit.jpg", caption: "Inspiration: “Summit” poster, margin/border concept" }, { src: "references/expanded-forests.jpg", caption: "Inspiration: vintage poster, framed border with side info" }, { src: "references/expanded-postcard.jpg", caption: "Inspiration: vintage postcard, message + stamp area" }],
      notes: "Delivered built on the route map design (#35), not #15. Expanded version of #15 (2-image collage with data): same design with margins added so more info can sit around the photos." },
    { id: "32", group: "postcards", type: "Extended template", name: "Expanded template (base #17)", sourceFile: true, status: "done", images: ["p32.jpg"], refs: [{ src: "postcard-refs/E32.jpg", kind: "wireframe", caption: "Expanded #17: poster-style info row (inspired by “Sublime” / “Summit”) above the title. Regina is free to design whichever version she likes." }, { src: "p17-1.jpg", caption: "Base design #17 (delivered)" }, { src: "references/expanded-sublime.jpg", caption: "Inspiration: “Sublime” poster, margin/border concept" }, { src: "references/expanded-summit.jpg", caption: "Inspiration: “Summit” poster, margin/border concept" }, { src: "references/expanded-forests.jpg", caption: "Inspiration: vintage poster, framed border with side info" }, { src: "references/expanded-postcard.jpg", caption: "Inspiration: vintage postcard, message + stamp area" }],
      notes: "Expanded version of #17 (title-over-photo): same design with margins added so more info can sit around the photos." },
    { id: "33", group: "postcards", type: "Extended template", name: "Expanded template (base #24)", sourceFile: true, status: "done", images: ["p33.jpg"], refs: [{ src: "postcard-refs/E33.jpg", kind: "wireframe", caption: "Expanded #24: margin with “Posted from” info next to the stamp photo. Regina is free to design whichever version she likes." }, { src: "p24-1.jpg", caption: "Base design #24 (delivered)" }, { src: "references/expanded-sublime.jpg", caption: "Inspiration: “Sublime” poster, margin/border concept" }, { src: "references/expanded-summit.jpg", caption: "Inspiration: “Summit” poster, margin/border concept" }, { src: "references/expanded-forests.jpg", caption: "Inspiration: vintage poster, framed border with side info" }, { src: "references/expanded-postcard.jpg", caption: "Inspiration: vintage postcard, message + stamp area" }],
      notes: "Expanded version of #24 (split image + color block): same design with margins added so more info can sit around the photos." },

    // ── Trip recap slides ────────────────────────────────────────
    // `spec` rows come from the Trip Recap slide spec (Appendix C of the brief).
    { id: "R1",  group: "recap", type: "Cover", name: "Cover v1: trip photo as full background", sourceFile: true, status: "done", images: ["r01.jpg"], refs: [{ src: "wireframes/R1.jpg", kind: "wireframe", caption: "Made with a sample trip (Zurich 2026) to show the idea. Regina is free to create whichever version she likes: layout, type, shapes and styling are her call." }],
      spec: [
        ["Purpose", "The opening slide of the recap. Sets the trip title and dates before the story starts."],
        ["Layout", "A real trip photo fills the whole 1080 × 1920 slide as the background."],
        ["Content", "Trip title and trip dates."],
        ["Appears", "Once per trip."],
        ["Extra", "This is a starting idea. A third Cover direction is welcome if Regina sees a better one."]
      ],
      notes: "Delivered with a View-Master reel of trip photos over a full photo background, with the dates, title and a \"let's go\" prompt." },
    { id: "R2",  group: "recap", type: "Cover", name: "Cover v2: gradient / abstract color background", sourceFile: true, status: "done", images: ["r02.jpg"], refs: [{ src: "wireframes/R2.jpg", kind: "wireframe", caption: "Made with a sample trip (Zurich 2026) to show the idea. Regina is free to create whichever version she likes: layout, type, shapes and styling are her call." }],
      spec: [
        ["Purpose", "The opening slide of the recap. Sets the trip title and dates before the story starts."],
        ["Layout", "A gradient or abstract color background instead of a photo."],
        ["When used", "For trips with little photo material yet."],
        ["Content", "Trip title and trip dates."],
        ["Appears", "Once per trip."],
        ["Extra", "This is a starting idea. A third Cover direction is welcome if Regina sees a better one."]
      ],
      notes: "Delivered with a blurred trip photo as the background instead of a gradient, so this version still needs at least one photo." },
    { id: "R3",  group: "recap", type: "Memory Chapter", name: "Memory Chapter v1: 1 photo full-bleed, text overlaid", sourceFile: true, status: "done", images: ["r03.jpg"], refs: [{ src: "wireframes/R3.jpg", kind: "wireframe", caption: "Made with a sample trip (Zurich 2026) to show the idea. Regina is free to create whichever version she likes: layout, type, shapes and styling are her call." }],
      spec: [
        ["Purpose", "The core, repeating slide. Tells the mini-story of one grouped experience the AI found in the trip media (e.g. “your 6-hour hike”)."],
        ["Layout", "One photo, full-bleed, with the text overlaid on top of it."],
        ["Content", "A short title, a one-line caption and the photo."],
        ["Appears", "Many times per trip. How many depends on how many “memories” the app finds in the user's media."],
        ["Set", "The most minimal of 5 Memory Chapter versions, which scale from minimal to media-rich."]
      ],
      notes: "Yellow frame over a full-bleed photo; the title and date sit in a tab in the frame's top corner, with a Journey Onward footer." },
    { id: "R4",  group: "recap", type: "Memory Chapter", name: "Memory Chapter v2: 1 photo inset, text beside or below", sourceFile: true, status: "done", images: ["r04.jpg"], refs: [{ src: "wireframes/R4.jpg", kind: "wireframe", caption: "Made with a sample trip (Zurich 2026) to show the idea. Regina is free to create whichever version she likes: layout, type, shapes and styling are her call." }],
      spec: [
        ["Purpose", "The core, repeating slide. Tells the mini-story of one grouped experience the AI found in the trip media (e.g. “your 6-hour hike”)."],
        ["Layout", "One photo, smaller / inset. The text sits in the empty space beside or below it."],
        ["Content", "A short title, a one-line caption and the photo."],
        ["Appears", "Many times per trip. How many depends on how many “memories” the app finds in the user's media."],
        ["Set", "Version 2 of 5. The versions scale from minimal to media-rich."]
      ],
      notes: "Photo on the top half and a color block below, with a MEMORY label (date and time) and the title. Circle cut-outs connect the two halves." },
    { id: "R5",  group: "recap", type: "Memory Chapter", name: "Memory Chapter v3: 2 photos side by side, text below", sourceFile: true, status: "done", images: ["r05.jpg"], refs: [{ src: "wireframes/R5.jpg", kind: "wireframe", caption: "Made with a sample trip (Zurich 2026) to show the idea. Regina is free to create whichever version she likes: layout, type, shapes and styling are her call." }],
      spec: [
        ["Purpose", "The core, repeating slide. Tells the mini-story of one grouped experience the AI found in the trip media (e.g. “your 6-hour hike”)."],
        ["Layout", "Two photos side by side, with the text below them."],
        ["Content", "A short title, a one-line caption and 2 photos."],
        ["Appears", "Many times per trip. How many depends on how many “memories” the app finds in the user's media."],
        ["Set", "Version 3 of 5. The versions scale from minimal to media-rich."]
      ],
      notes: "Two tilted framed photos over a background photo, with the duration, place and date below." },
    { id: "R6",  group: "recap", type: "Memory Chapter", name: "Memory Chapter v4: 3 photos (1 large + 2 small), text above", sourceFile: true, status: "done", images: ["r06.jpg"], refs: [{ src: "wireframes/R6.jpg", kind: "wireframe", caption: "Made with a sample trip (Zurich 2026) to show the idea. Regina is free to create whichever version she likes: layout, type, shapes and styling are her call." }],
      spec: [
        ["Purpose", "The core, repeating slide. Tells the mini-story of one grouped experience the AI found in the trip media (e.g. “your 6-hour hike”)."],
        ["Layout", "Three photos: one large and two small, with the text above them."],
        ["Content", "A short title, a one-line caption and 3 photos."],
        ["Appears", "Many times per trip. How many depends on how many “memories” the app finds in the user's media."],
        ["Set", "Version 4 of 5. The versions scale from minimal to media-rich."]
      ],
      notes: "Large quoted title above three tilted photos (one large, two small), with the country at the bottom." },
    { id: "R7",  group: "recap", type: "Memory Chapter", name: "Memory Chapter v5: 4+ photos grid/collage, caption bar", status: "pending", refs: [{ src: "wireframes/R7.jpg", kind: "wireframe", caption: "Made with a sample trip (Zurich 2026) to show the idea. Regina is free to create whichever version she likes: layout, type, shapes and styling are her call." }],
      spec: [
        ["Purpose", "The core, repeating slide. Tells the mini-story of one grouped experience the AI found in the trip media (e.g. “your 6-hour hike”)."],
        ["Layout", "Four or more photos in a grid or collage, with the text as a caption bar."],
        ["Content", "A short title, a one-line caption and 4+ photos."],
        ["Appears", "Many times per trip. How many depends on how many “memories” the app finds in the user's media."],
        ["Set", "The most media-rich of the 5 Memory Chapter versions."]
      ] },
    { id: "R8",  group: "recap", type: "Thematic", name: "Thematic v1: 2 photos side by side, text below", sourceFile: true, status: "done", images: ["r08.jpg"], refs: [{ src: "wireframes/R8.jpg", kind: "wireframe", caption: "Made with a sample trip (Zurich 2026) to show the idea. Regina is free to create whichever version she likes: layout, type, shapes and styling are her call." }],
      spec: [
        ["Purpose", "Groups photos by what they have in common: a place, an activity, an object or a picture style (e.g. “your coffee stops”, “your days at the beach”)."],
        ["Layout", "Two photos side by side, with the text below them."],
        ["Content", "A short title, a one-line caption and 2 photos."],
        ["Appears", "Can repeat several times per trip, depending on how many patterns the trip produces."],
        ["Set", "Uses the same image-count and text-position logic as the matching Memory Chapter layout."]
      ],
      notes: "Two photos stacked, with the title, a landmark name and the area in color bands between them." },
    { id: "R9",  group: "recap", type: "Thematic", name: "Thematic v2: 3 photos (1 large + 2 small), text above", sourceFile: true, status: "done", images: ["r09.jpg"], refs: [{ src: "wireframes/R9.jpg", kind: "wireframe", caption: "Made with a sample trip (Zurich 2026) to show the idea. Regina is free to create whichever version she likes: layout, type, shapes and styling are her call." }],
      spec: [
        ["Purpose", "Groups photos by what they have in common: a place, an activity, an object or a picture style (e.g. “your coffee stops”, “your days at the beach”)."],
        ["Layout", "Three photos: one large and two small, with the text above them."],
        ["Content", "A short title, a one-line caption and 3 photos."],
        ["Appears", "Can repeat several times per trip, depending on how many patterns the trip produces."],
        ["Set", "Uses the same image-count and text-position logic as the matching Memory Chapter layout."]
      ],
      notes: "2 × 2 grid: three photos plus one color block holding the dates and title." },
    { id: "R10", group: "recap", type: "Thematic", name: "Thematic v3: 4+ photos grid/collage, caption bar", status: "pending", refs: [{ src: "wireframes/R10.jpg", kind: "wireframe", caption: "Made with a sample trip (Zurich 2026) to show the idea. Regina is free to create whichever version she likes: layout, type, shapes and styling are her call." }],
      spec: [
        ["Purpose", "Groups photos by what they have in common: a place, an activity, an object or a picture style (e.g. “your coffee stops”, “your days at the beach”)."],
        ["Layout", "Four or more photos in a grid or collage, with the text as a caption bar."],
        ["Content", "A short title, a one-line caption and 4+ photos."],
        ["Appears", "Can repeat several times per trip, depending on how many patterns the trip produces."],
        ["Set", "Uses the same image-count and text-position logic as the matching Memory Chapter layout."]
      ] },
    { id: "R11", group: "recap", type: "Data Visualization", name: "Data Visualization v1: with supporting photo", status: "pending", refs: [{ src: "wireframes/R11.jpg", kind: "wireframe", caption: "Made with a sample trip (Zurich 2026) to show the idea. Regina is free to create whichever version she likes: layout, type, shapes and styling are her call." }],
      spec: [
        ["Purpose", "Short stat, chart or list slides that break up the story rhythm between chapters."],
        ["Layout", "Master layout with a supporting photo next to the data."],
        ["Data it must hold", "Weather, temperature, altitude, and number / list of places visited. One layout has to flexibly hold any of these, not one design per data type."],
        ["Scope", "Design the container the data sits in. The data itself (e.g. a map or chart) is built in code."],
        ["Set", "1 of 2 Data Visualization designs in total."]
      ] },
    { id: "R12", group: "recap", type: "Data Visualization", name: "Data Visualization v2: no photo (text / number / chart)", status: "pending", refs: [{ src: "wireframes/R12.jpg", kind: "wireframe", caption: "Made with a sample trip (Zurich 2026) to show the idea. Regina is free to create whichever version she likes: layout, type, shapes and styling are her call." }],
      spec: [
        ["Purpose", "Short stat, chart or list slides that break up the story rhythm between chapters."],
        ["Layout", "Master layout without a photo: text, number or chart only."],
        ["Data it must hold", "Weather, temperature, altitude, and number / list of places visited. One layout has to flexibly hold any of these, not one design per data type."],
        ["Scope", "Design the container the data sits in. The data itself (e.g. a map or chart) is built in code."],
        ["Set", "2 of 2 Data Visualization designs in total."]
      ] },
    { id: "R13", group: "recap", type: "Closing / Share", name: "Closing v1: minimal branded screen", status: "pending", refs: [{ src: "wireframes/R13.jpg", kind: "wireframe", caption: "Made with a sample trip (Zurich 2026) to show the idea. Regina is free to create whichever version she likes: layout, type, shapes and styling are her call." }],
      spec: [
        ["Purpose", "The final slide. Wraps up the recap and gives the user a way to share it."],
        ["Layout", "A minimal, branded closing screen."],
        ["Appears", "Once per trip."],
        ["Extra", "This is a starting idea. A third Closing direction is welcome if Regina has a better one."]
      ] },
    { id: "R14", group: "recap", type: "Closing / Share", name: "Closing v2: photo collage background", sourceFile: true, status: "done", images: ["r14.jpg"], refs: [{ src: "wireframes/R14.jpg", kind: "wireframe", caption: "Made with a sample trip (Zurich 2026) to show the idea. Regina is free to create whichever version she likes: layout, type, shapes and styling are her call." }],
      spec: [
        ["Purpose", "The final slide. Wraps up the recap and gives the user a way to share it."],
        ["Layout", "A photo collage in the background."],
        ["Appears", "Once per trip."],
        ["Extra", "This is a starting idea. A third Closing direction is welcome if Regina has a better one."]
      ],
      notes: "Four-photo collage background with a framed photo in the center; the frame carries the place, \"5 days recap\" and the dates." },

    // ── Format 3 ─────────────────────────────────────────────────
    { id: "F3", group: "format3", type: "Proposal", name: "Shareable format 3 proposal", status: "pending",
      notes: "One example using sample images and data, plus a short text breakdown: what the format is, how it works in the app, and why it differs from postcards and the trip recap." }
  ]
};
