// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VakaCloud Updates',
  tagline: 'Stay updated with the latest news from VakaCloud',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://update.vakacloud.info',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Hanhinen.net Consulting Oy', // Usually your GitHub org/user name.
  projectName: 'VakaCloud', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // docusaurus.config.js


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        
        docs: false, 
        
        blog: {
          showReadingTime: true,
          routeBasePath: '/blog', 
          blogSidebarTitle: 'Viimeisimmät tiedotteet',
          blogSidebarCount: 'ALL',
          
          
          feedOptions: {
            type: 'json',
            copyright: `Copyright © ${new Date().getFullYear()} Hanhinen.net Consulting Oy`,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/vaka-cloud-logo.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'VakaCloud',
        logo: {
          alt: 'VakaCloud Logo',
          src: 'img/vaka-cloud-logo.png',
        },
        items: [

          {
            to: '/blog/tags/updates', 
            label: 'Päivitykset 🚀', 
            position: 'left'
          },
          {
            to: '/blog/tags/news', 
            label: 'Uutiset 📰', 
            position: 'left'
          },
          {
            to: '/blog/tags/maintenance', 
            label: 'Huoltoilmoitukset ⚠️', 
            position: 'left'
          },
          {
            href: 'https://app.vakacloud.fi',
            label: 'Siirry palveluun',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Kategoriat',
            items: [
              { label: 'Päivitykset', to: '/blog/tags/updates' },
              { label: 'Uutiset', to: '/blog/tags/news' },
              { label: 'Huoltoilmoitukset', to: '/blog/tags/maintenance' },
            ],
          },
          {
            title: 'VakaCloud',
            items: [
              { label: 'Etusivu', to: '/' },
              { label: 'Tuki', href: 'mailto:info@vakacloud.fi' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hanhinen.net Consulting Oy.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;