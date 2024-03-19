import { sidebar } from "vuepress-theme-hope";

export const ruSidebar = sidebar({
  "/":  [
    "",
    "guide/how-to",
    {
      text: "Гайды",
      prefix: "/guide/",
      children: [
        {
          text: "JPDB",
          icon: "/ico/jpdb.png",
          link: "jpdb-guide",
        },
        {
          text: "Как фокусироваться",
          icon: "/ico/focus.svg",
          link: "focus",
        },
        {
          text: "Учет времени 🚧",
          icon: "/ico/timer.svg",
          link: "timetracking",
        },
        {
          text: "Письмо 🚧",
          icon: "/ico/writing.svg",
          link: "handwriting",
        },
        {
          text: "MEXT 🚧",
          icon: "/ico/school.svg",
          link: "mext",
        },
      ],
    },
    {
      text: "Софт",
      collapsible: true,
      prefix: "/guide/",
      children: [
        {
          text: "JPDB",
          icon: "/ico/jpdb.png",
          link: "README.md",
        },
        {
          text: "Yomitan",
          icon: "/ico/yomitan.svg",
          link: "yomitan",
        },
        {
          text: "Anki",
          icon: "/ico/anki.svg",
          link: "anki",
        },
        {
          text: "JL",
          icon: "/ico/jl.ico",
          link: "jl",
        },
        {
          text: "MPV",
          icon: "/ico/mpv-icon.png",
          link: "mpv",
        },
        {
          text: "asbplayer",
          icon: "/ico/asb.png",
          link: "asbplayer",
        },
        {
          text: "Субтитры",
          icon: "/ico/subtitles.svg",
          link: "subtitles",
        },
        {
          text: "Видеоигры",
          icon: "/ico/videogame.svg",
          link: "vn",
        },
        {
          text: "jidoujisho",
          icon: "/ico/jidoujisho.png",
          link: "jidoujisho",
        },
        {
          text: "OCR Инструменты",
          icon: "/ico/ocr.svg",
          link: "ocr-tools",
        },
        {
          text: "Прочее",
          icon: "/ico/random.svg",
          link: "other",
        },
  
      ],
    },

  ], 
  "/software/": "structure",
  
});
