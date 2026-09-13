import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import TraaayWordmark from './TraaayWordmark.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // Le nom du produit ouvre le hero sous sa forme de marque : les trois « a »
      // y portent les couleurs des trois strates. Le frontmatter ne définit plus
      // `hero.name`, ce bloc le remplace.
      'home-hero-info-before': () =>
        h(TraaayWordmark, { class: 'traaay-wordmark--hero' }),
      // Dans la barre de navigation, le wordmark remplace le titre textuel.
      // `siteTitle: false` retire ce dernier côté configuration.
      'nav-bar-title-after': () =>
        h(TraaayWordmark, { class: 'traaay-wordmark--nav' }),
    })
  },
  enhanceApp({ app }) {
    // Rendu disponible dans les pages Markdown, pour la page Identité Visuelle.
    app.component('TraaayWordmark', TraaayWordmark)
  },
} satisfies Theme
