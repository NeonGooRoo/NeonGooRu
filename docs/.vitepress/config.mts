import { defineConfig } from 'vitepress'
import imageFigures from 'markdown-it-image-figures';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/NeonGooRu/',
  lang: 'ru-RU',
  title: "NeonGoo.Ru",

  description: "О том, как учить японский эффективно и с удовольствием",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Старт', link: '/' },
      { text: 'Японский с удовольствием', link: '/how-to' },
      {
        text: 'Гайды',
        items: [
          { text: 'Японский с удовольствием', link: '/how-to' },
          { text: 'JPDB гайд', link: '/jpdb-guide' },
        ]
      },
      { text: 'Config', link: '/config' },
      { text: 'Changelog', link: 'https://github.com/...' }
    ],


    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Японский с удовольствием', link: '/how-to' },
          { text: 'Гайд поJPDB', link: '/jpdb-guide' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24"<title>Telegram</title><path d="docs\public\telegram.svg"/></svg>'


        },
        link: 'https://t.me/kurutteiru',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'cool link'
      }



      
    ]

  }
  
})