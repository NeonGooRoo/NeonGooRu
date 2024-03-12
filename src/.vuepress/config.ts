import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";

import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  base: "/neongooru/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "NeonGooRoo's Guide",
      description: "Japanese with fun and ease",
    },

    "/": {
      lang: "ru-RU",
      title: "NeonGoo.Ru",
      description: "Японский легко и с удовольствием",
    },

  },

  plugins: [
      googleAnalyticsPlugin({
        id: 'G-G6HDTB0VXG',
      }),
  ],

  theme,


  // Enable it with pwa
  // shouldPrefetch: false,
});




