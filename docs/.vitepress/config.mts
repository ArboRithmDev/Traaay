import { defineConfig } from 'vitepress'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/Traaay/' : '/',
  title: 'Traaay',
  description: 'Gestionnaire intelligent de barre des menus pour macOS',
  cleanUrls: false,
  srcExclude: ['**/_*.md'],
  locales: {
    root: {
      label: 'Français',
      lang: 'fr-FR',
      link: '/',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'Séparateur', link: '/guide/separator' },
          { text: 'Top Traaay', link: '/guide/palette' },
          { text: 'Encoche (Notch)', link: '/guide/notch' },
          { text: 'Identité Visuelle', link: '/guide/brand' },
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'Guide Utilisateur',
              items: [
                { text: 'Introduction & Vision', link: '/guide/' },
                { text: 'Prise en main & Installation', link: '/guide/getting-started' },
                { text: 'Le Séparateur intelligent', link: '/guide/separator' },
                { text: 'Palette Top Traaay', link: '/guide/palette' },
                { text: 'Gestion de l’encoche (Notch)', link: '/guide/notch' },
                { text: 'Multi-écrans & Moniteurs', link: '/guide/multi-screens' },
                { text: 'Raccourcis & Gestes', link: '/guide/shortcuts' },
                { text: 'Identité Visuelle & Logo', link: '/guide/brand' },
              ],
            },
          ],
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/' },
          { text: 'Separator', link: '/en/guide/separator' },
          { text: 'Top Traaay', link: '/en/guide/palette' },
          { text: 'MacBook Notch', link: '/en/guide/notch' },
          { text: 'Visual Identity', link: '/en/guide/brand' },
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'User Guide',
              items: [
                { text: 'Introduction & Vision', link: '/en/guide/' },
                { text: 'Getting Started & Setup', link: '/en/guide/getting-started' },
                { text: 'Smart Menu Bar Separator', link: '/en/guide/separator' },
                { text: 'Floating Top Traaay Palette', link: '/en/guide/palette' },
                { text: 'MacBook Notch Handling', link: '/en/guide/notch' },
                { text: 'Multi-Display Setup', link: '/en/guide/multi-screens' },
                { text: 'Gestures & Shortcuts', link: '/en/guide/shortcuts' },
                { text: 'Visual Identity & Logo', link: '/en/guide/brand' },
              ],
            },
          ],
        },
      },
    },
    es: {
      label: 'Español',
      lang: 'es-ES',
      link: '/es/',
      themeConfig: {
        nav: [
          { text: 'Guía', link: '/es/guide/' },
          { text: 'Separador', link: '/es/guide/separator' },
          { text: 'Top Traaay', link: '/es/guide/palette' },
          { text: 'Notch MacBook', link: '/es/guide/notch' },
          { text: 'Identidad Visual', link: '/es/guide/brand' },
        ],
        sidebar: {
          '/es/guide/': [
            {
              text: 'Guía del Usuario',
              items: [
                { text: 'Introducción y Visión', link: '/es/guide/' },
                { text: 'Primeros pasos e Instalación', link: '/es/guide/getting-started' },
                { text: 'El Separador inteligente', link: '/es/guide/separator' },
                { text: 'Paleta flotante Top Traaay', link: '/es/guide/palette' },
                { text: 'Detección inteligente del Notch', link: '/es/guide/notch' },
                { text: 'Monitores múltiples', link: '/es/guide/multi-screens' },
                { text: 'Atajos y Gestos táctiles', link: '/es/guide/shortcuts' },
                { text: 'Identidad Visual y Diseño', link: '/es/guide/brand' },
              ],
            },
          ],
        },
      },
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ArboRithmDev/Traaay' },
    ],
  },
})
