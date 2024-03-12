import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  "/en/demo/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/en/guide/",
    link: "https://theme-hope.vuejs.press/zh/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        link: "https://theme-hope.vuejs.press/zh/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
