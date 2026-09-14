/* =========================================================
   CONFIG.JS
   -----------------------------------------------------------
   Edit everything here. You should never need to touch
   main.js or index.html to update text, titles, or file names.

   NOTE: this is the public demo version of the project. The
   recipient ("Mira"), the creator ("Ari"), and every letter,
   nickname, memory, and timeline entry below are fictional —
   written for this portfolio build, not real people or events.

   - To swap a photo/audio/video: replace the file inside
     /assets/... with the SAME filename, or change the `file`
     value below to match your new filename.
   - Until a file exists at the given path, the site shows a
     tasteful "add this file" placeholder instead of a broken
     image/player — so you can preview everything before adding
     real media.
   ========================================================= */

const CONFIG = {

  recipientName: "Mira",

  entrance: {
    eyebrow: "Hey.",
    title: "Hello, dear.",
    sub: "Before you ask what this is... just come in.",
    button: "Come in \u2661"
  },

  birthday: {
    mainPhoto: "assets/photos/main-photo.jpg",
    heading: "Happy 18th Birthday, Mira \u2661",
    paragraphs: [
      "18.",
      "One number.\nOne very weird transition from childhood into adulthood.",
      "And somehow I decided this was the perfect excuse to put together an unreasonable amount of jokes, effort and appreciation for one of my favourite people.",
      "So...",
      "Happy birthday, idiot.",
      "I hope this year gives you more reasons to smile, more things to be proud of, and a ridiculous amount of good stories.",
      "And yes...\nI made something for you.",
      "Actually...\nI made a little too much."
    ],
    continueLabel: "There's more \u2192"
  },

  gifts: [
    {
      id: 1,
      title: "Something small...",
      teaser: "Starting easy. Don't get excited.",
      icon: "note",
      type: "image",
      modalTitle: "Something small...",
      image: "assets/notes/gift-01-shayari.jpg"
    },
    {
      id: 2,
      title: "A letter, apparently.",
      teaser: "Okay, I actually wrote this.",
      icon: "letter",
      type: "image",
      modalTitle: "A letter, apparently.",
      image: "assets/notes/gift-02-letter.jpg"
    },
    {
      id: 3,
      title: "Look carefully.",
      teaser: "Yes, I actually tried drawing you.",
      icon: "drawing",
      type: "image",
      modalTitle: "Look carefully.",
      image: "assets/drawings/gift-03-eyes.jpg",
      large: true
    },
    {
      id: 4,
      title: "I should NOT have done this.",
      teaser: "Please lower your expectations.",
      icon: "music",
      type: "audio",
      modalTitle: "I should NOT have done this.",
      leadNote: "Okay, I suck at singing.\nBut I still tried.\nAnd yes, I made this specifically for you.",
      audio: "assets/audio/gift-04-birthday-song.mp3"
    },
    {
      id: 5,
      title: "Proof of effort.",
      teaser: "Don't laugh at my face.",
      icon: "video",
      type: "video",
      modalTitle: "Proof of effort.",
      video: "assets/videos/gift-05-letter-video.mp4",
      caption: "Yes, this was embarrassing to record."
    },
    {
      id: 6,
      title: "A little piece of it.",
      teaser: "This one is small. But it means something.",
      icon: "flower",
      type: "flowerNote",
      modalTitle: "A little piece of it.",
      flowerImage: "assets/photos/gift-06-flower.jpg",
      noteImage: "assets/notes/gift-06-note.jpg"
    },
    {
      id: 7,
      title: "Another one?",
      teaser: "Apparently one video wasn't enough.",
      icon: "video",
      type: "video",
      modalTitle: "Another one?",
      video: "assets/videos/gift-07-shayari.mp4"
    },
    {
      id: 8,
      title: "Just listen.",
      teaser: "Close everything else for a minute.",
      icon: "voice",
      type: "audio",
      modalTitle: "Just listen.",
      audio: "assets/audio/gift-08-letter.mp3",
      showWave: true
    },
    {
      id: 9,
      title: "Fine. One more.",
      teaser: "I promise this is not becoming a podcast.",
      icon: "voice",
      type: "audio",
      modalTitle: "Fine. One more.",
      audio: "assets/audio/gift-09-shayari.mp3",
      showWave: true
    },
    {
      id: 10,
      title: "Some of my favourites.",
      teaser: "Yes, I have categories.",
      icon: "album",
      type: "album",
      modalTitle: "Some of my favourites."
    },
    {
      id: 11,
      title: "About you.",
      teaser: "Okay, now I'm going to be embarrassingly honest.",
      icon: "note",
      type: "image",
      modalTitle: "About you.",
      image: "assets/notes/gift-11-appreciation.jpg"
    },
    {
      id: 12,
      title: "The many names of one idiot.",
      teaser: "Because apparently one name wasn't enough.",
      icon: "tag",
      type: "nicknames",
      modalTitle: "The many names of one idiot."
    },
    {
      id: 13,
      title: "Some things.",
      teaser: "Don't worry, I know promises don't always work.",
      icon: "note",
      type: "promises",
      modalTitle: "Some things.",
      intro: [
        "I know you don't really like promises, and I know promises don't magically guarantee anything.",
        "So I'm not going to give you some dramatic speech.",
        "These are simply things I want to try to be better at, as your friend."
      ],
      image: "assets/notes/gift-13-promises.jpg"
    },
    {
      id: 14,
      title: "MIRA \u2014 USER MANUAL",
      teaser: "Read carefully. Warranty expired.",
      icon: "manual",
      type: "manual",
      modalTitle: "MIRA \u2014 USER MANUAL"
    },
    {
      id: 15,
      title: "Yes, another one.",
      teaser: "Apparently I didn't learn my lesson from the first drawing.",
      icon: "drawing",
      type: "image",
      modalTitle: "Yes, another one.",
      image: "assets/drawings/gift-15.jpg",
      large: true
    },
    {
      id: 16,
      title: "Why am I doing this?",
      teaser: "No context. Just listen.",
      icon: "music",
      type: "audio",
      modalTitle: "Why am I doing this?",
      audio: "assets/audio/gift-16-random-song.mp3"
    },
    {
      id: 17,
      title: "One last thing...",
      teaser: "Okay. Almost done.",
      icon: "note",
      type: "image",
      modalTitle: "One last thing...",
      image: "assets/notes/gift-17-personal.jpg"
    },
    {
      id: 18,
      title: "18",
      teaser: "Alright... this is the one.",
      icon: "heart",
      type: "final",
      modalTitle: "18",
      image: "assets/notes/gift-18-final-letter.jpg"
    }
  ],

  /* =========================================================
     GIFT 12 — nicknames
     Heading + one chaotic collection of fictional nicknames.
     Add/remove/edit freely — the scattered layout re-flows
     automatically. Order does not matter.
     ========================================================= */
  nicknamesHeading: ["THE", "NAMES"],
  nicknames: [
    "Mira",
    "Mimi",
    "Sunshine",
    "Star",
    "Cookie",
    "Moon",
    "Doodle",
    "Bug",
    "Champ",
    "Rockstar",
    "Shortcake",
    "Trouble",
    "Chaos Queen",
    "Legend",
    "Sunny",
    "Buttons",
    "Noodle",
    "Sparkle",
    "Giggles",
    "Firecracker",
    "Captain",
    "Wanderer",
    "Pagal"
  ],

  /* =========================================================
     GIFT 10 — photo album
     Two groups:
       - album.curatedPicks: exactly 5 curated photos with fixed
         labels. Just swap the `file` path for each.
       - album.timeline: a vertical timeline of entries. Each
         entry can have an image (optional) and a caption
         (optional, blank by default — add your own text if you
         want one). Missing images fall back to the site's usual
         placeholder automatically.
     ========================================================= */
  album: {
    curatedPicks: [
      { file: "assets/photos/album/pick-01-iconic.jpg", label: "Most Iconic" },
      { file: "assets/photos/album/pick-02-chaos.jpg", label: "Certified Chaos" },
      { file: "assets/photos/album/pick-03-laugh.jpg", label: "Best Laugh" },
      { file: "assets/photos/album/pick-04-main-character.jpg", label: "Main Character Energy" },
      { file: "assets/photos/album/pick-05-legend.jpg", label: "Absolute Legend" }
    ],
    timeline: [
      { date: "Way back when", file: "assets/photos/album/timeline-01.jpg", caption: "" },
      { date: "A little older", file: "assets/photos/album/timeline-02.jpg", caption: "" },
      { date: "The random Tuesday", file: "assets/photos/album/timeline-03.jpg", caption: "" },
      { date: "The day of unlimited snacks", file: "assets/photos/album/timeline-04.jpg", caption: "" },
      { date: "That one road trip", file: "assets/photos/album/timeline-05.jpg", caption: "" },
      { date: "The movie night disaster", file: "assets/photos/album/timeline-06.jpg", caption: "" },
      { date: "Exam season survival", file: "assets/photos/album/timeline-07.jpg", caption: "" },
      { date: "The concert we almost missed", file: "assets/photos/album/timeline-08.jpg", caption: "" },
      { date: "Rainy day, good mood", file: "assets/photos/album/timeline-09.jpg", caption: "" },
      { date: "The birthday before this one", file: "assets/photos/album/timeline-10.jpg", caption: "" },
      { date: "New year, same chaos", file: "assets/photos/album/timeline-11.jpg", caption: "" },
      { date: "The quiet catch-up", file: "assets/photos/album/timeline-12.jpg", caption: "" },
      { date: "Spontaneous adventure day", file: "assets/photos/album/timeline-13.jpg", caption: "" },
      { date: "The best worst plan", file: "assets/photos/album/timeline-14.jpg", caption: "" },
      { date: "Late-night snack run", file: "assets/photos/album/timeline-15.jpg", caption: "" },
      { date: "The photo that started it all", file: "assets/photos/album/timeline-16.jpg", caption: "" },
      { date: "Just another Tuesday", file: "assets/photos/album/timeline-17.jpg", caption: "" },
      { date: "Right before this website happened", file: "assets/photos/album/timeline-18.jpg", caption: "" }
    ],
    timelineDisclaimer: "All moments and dates on this timeline are fictional and made up for this demo \u2014 they're just placeholders showing how the timeline works, not real memories."
  },

  /* =========================================================
     GIFT 14 — Mira's user manual
     `subtitle` sits under the modal title. Each section has a
     `type`:
       - "list"            -> plain bullet list (`items`)
       - "troubleshooting" -> problem/cause/response cards (`entries`).
                               `incorrectResponse` is optional per entry.
       - "text"             -> a paragraph (`text`), with an optional
                               smaller closing line (`versionNote`).
     Edit freely.
     ========================================================= */
  userManual: {
    subtitle: "Model: 1.0 \u2014 apparently still in development",
    sections: [
      {
        title: "01 \u2014 Basic Specifications",
        type: "list",
        items: [
          "Name: Mira",
          "Known aliases: see Gift 12 for the full list",
          "Operating system: approximately 99% emotions, 1% logic",
          "Favourite things: pizza, good company, attention and pretty things",
          "General operating condition: works best when comfortable, fed and appreciated"
        ]
      },
      {
        title: "02 \u2014 Known Behaviours",
        type: "list",
        items: [
          "May randomly become extremely cute without warning.",
          "Can say \u201cnothing\u201d when there is, in fact, something.",
          "Occasionally requires extensive investigation to determine what \u201chmm\u201d means.",
          "Can switch between cute, pagal, sleepy and dangerous within minutes.",
          "Has a suspicious ability to make one person worry simply by saying \u201cokay.\u201d"
        ]
      },
      {
        title: "03 \u2014 How to Make Her Happy",
        type: "list",
        items: [
          "Give her attention.",
          "Listen when she actually wants to talk.",
          "Food is generally a strong solution.",
          "Compliment her, but mean it.",
          "Random acts of kindness are highly recommended.",
          "Let her be herself instead of trying to \u201cfix\u201d her."
        ]
      },
      {
        title: "04 \u2014 Emergency Troubleshooting",
        type: "troubleshooting",
        entries: [
          {
            problem: "\u201cI'm fine.\u201d",
            cause: "She may or may not actually be fine.",
            incorrectResponse: "\u201cOkay.\u201d",
            recommendedResponse: "\u201cOkay, but really, what's wrong?\u201d"
          },
          {
            problem: "Low happiness detected.",
            cause: "Stress / exhaustion / overthinking / life being annoying.",
            incorrectResponse: "Immediately trying to lecture or fix everything.",
            recommendedResponse: "Listen first. Comfort her. Food if necessary."
          },
          {
            problem: "\u201cI don't need anything.\u201d",
            cause: "Unknown. System requires further investigation.",
            recommendedResponse: "Offer comfort anyway."
          }
        ]
      },
      {
        title: "05 \u2014 Food Compatibility",
        type: "list",
        items: [
          "Pizza detected \u2192 happiness levels may increase.",
          "Good food \u2192 generally recommended.",
          "Being hungry \u2192 may significantly reduce system performance.",
          "Food sharing \u2192 optional but highly encouraged."
        ]
      },
      {
        title: "06 \u2014 Travel Mode",
        type: "list",
        items: [
          "Dream destination: anywhere with mountains, good food, and no wifi for a while.",
          "Travel mode requires good company.",
          "Scenic places strongly recommended.",
          "Camera usage: excessive.",
          "Random stopping to admire pretty things: expected."
        ]
      },
      {
        title: "07 \u2014 Fashion / Makeup Mode",
        type: "list",
        items: [
          "Pretty outfit detected \u2192 compliment immediately.",
          "Makeup detected \u2192 appreciation required.",
          "New hairstyle detected \u2192 notice it. THIS IS IMPORTANT.",
          "Specific compliments are significantly better."
        ]
      },
      {
        title: "08 \u2014 Important Warnings",
        type: "list",
        items: [
          "Do not underestimate the power of overthinking.",
          "\u201cNothing\u201d may contain classified information.",
          "Never assume \u201cokay\u201d means okay.",
          "Excessive stress may cause temporary system shutdown.",
          "Handle with patience.",
          "Do not make her feel like she has to earn love."
        ]
      },
      {
        title: "09 \u2014 Maintenance",
        type: "list",
        items: [
          "Food: regularly, non-negotiable",
          "Attention: daily, no substitutes",
          "Kindness: generously",
          "Random calls: encouraged, no notice required",
          "Compliments: often, and mean them",
          "Listening: whenever required",
          "Reassurance: when needed",
          "Patience: mandatory"
        ]
      },
      {
        title: "10 \u2014 Manufacturer's Disclaimer",
        type: "text",
        text: "This manual is incomplete because apparently the manufacturer forgot to document approximately 90% of you.",
        versionNote: "Version 1.0 \u2014 updates will occur whenever the manufacturer discovers another feature worth documenting."
      }
    ]
  },

  /* =========================================================
     CREDITS / ABOUT THE PROJECT
     The closing page of the site, reached from Gift 18's
     "The story behind this" link. Edit freely — every line here
     is plain text pulled straight into the page.
     ========================================================= */
  credits: {
    eyebrow: "One last thing.",
    title: "The story behind this",
    storyParagraphs: [
      "This project started as a simple idea: instead of sending an ordinary birthday text, I wanted to build an entire little experience around it.",
      "What began as one page slowly turned into eighteen — custom layouts, handwritten-style notes, animations, audio and video players, an interactive \u201cuser manual,\u201d and a lot of trial and error along the way.",
      "It was built from scratch with HTML, CSS and vanilla JavaScript, mostly as an excuse to actually finish a frontend side-project instead of just planning one.",
      "This public version has been rebuilt with a fictional recipient, fictional names, and fictional content so the original private version can stay private \u2014 but the design, the code, and the interactions are the real thing."
    ],
    creditsList: [
      { label: "Created & Designed by", value: "Ari" },
      { label: "Development", value: "HTML, CSS, JavaScript (vanilla, no frameworks)" },
      { label: "Design & Concept", value: "Ari" },
      { label: "Content & Creative Direction", value: "Ari" },
      { label: "Fonts", value: "Cormorant Garamond, Lora & Caveat (Google Fonts)" }
    ],
    closingLine: "Made from an idea, a lot of curiosity, and far too many hours of staring at code.",
    backLabel: "Back to the beginning \u21ba"
  },

  /* background music (optional). Leave file empty ("") to hide the toggle. */
  backgroundMusic: {
    file: "",
    label: "music"
  }
};
