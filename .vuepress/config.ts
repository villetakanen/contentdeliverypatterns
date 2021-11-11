import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-GB',
  title: 'Content Delivery Patterns',
  description: 'Just playing around',

  themeConfig: {
    logo: '/rocket.svg',
    navbar: [
      {
        text: 'Patterns',
        link: '/patterns/',
        children: ['/patterns/classic.md', '/patterns/headless.md']
      }
    ]
  },
})