import { defineConfig } from 'vitepress'
import imageFigures from 'markdown-it-image-figures';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/NeonGooRu/',
  lang: 'ru-RU',
  title: "NeonGoo.Ru",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

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
          { text: 'Гайд по JPDB', link: '/jpdb-guide' }
        ]
      }
    ],

    socialLinks: [

      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m16 .5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5c8.563 0 15.5-6.938 15.5-15.5s-6.938-15.5-15.5-15.5zm7.613 10.619-2.544 11.988c-.188.85-.694 1.056-1.4.656l-3.875-2.856-1.869 1.8c-.206.206-.381.381-.781.381l.275-3.944 7.181-6.488c.313-.275-.069-.431-.482-.156l-8.875 5.587-3.825-1.194c-.831-.262-.85-.831.175-1.231l14.944-5.763c.694-.25 1.3.169 1.075 1.219z"/></svg>'


        },
        link: 'https://t.me/kurutteiru',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'cool link'
      },
      { icon: 'github', link: 'https://github.com/NeonGooRoo/NeonGooRu' }


      
    ]

  }
  
})