import { navbar } from "vuepress-theme-hope";

export const ruNavbar = navbar([

  
  {
    text: "Старт",
    icon: "home",
    link: "/",
  },
  {
    text: "Для начинающих",
    link: "/guide/how-to.md",
  },
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
    prefix: "/software/",
    link: "/software/",
  },
  {
    text: "Ресурсы",
    link: "resources",
  },
  {
    text: "Лента",
    link: "/blog/",
  },
]);


/* {
  text: "Гайд",
  icon: "lightbulb",
  prefix: "/guide/",
  link: "https://theme-hope.vuejs.press/zh/",
  children: [
    {
      text: "Bar",
      icon: "lightbulb",
      prefix: "bar/",
      children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
    },
    {
      text: "Foo",
      icon: "lightbulb",
      prefix: "foo/",
      children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
    },
  ],
},
{
  text: "V2 Docs",
  icon: "book",
  link: "https://theme-hope.vuejs.press/",
}, */
