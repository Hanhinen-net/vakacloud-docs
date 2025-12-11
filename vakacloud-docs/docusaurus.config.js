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
    {
      docs: { sidebarPath: './sidebars.js' },
      blog: {
        showReadingTime: true,
        // LISÄÄ TÄMÄ OSA:
        feedOptions: {
          type: 'json', // JSON on helpoin Reactille
          copyright: `Copyright © ${new Date().getFullYear()} VakaCloud`,
        },
      },
      theme: { customCss: './src/css/custom.css' },
    },
  ],
],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Voit vaihtaa tämän kuvan myöhemmin (näkyy kun linkki jaetaan somessa)
      image: 'img/vaka-cloud-logo.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'VakaCloud', // Sivuston nimi yläkulmassa
        logo: {
          alt: 'VakaCloud Logo',
          src: 'img/vaka-cloud-logo.png', // Varmista että sinulla on logo tässä kansiossa (static/img/)
        },
        items: [
          // Vasen puoli
          {
            to: '/blog', 
            label: 'Päivitykset 🚀', // Tärkein linkki
            position: 'left'
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Käyttöohjeet',
          },
          // Oikea puoli
          {
            href: 'https://app.vakacloud.fi',
            label: 'Kirjaudu palveluun',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'VakaCloud',
            items: [
              {
                label: 'Etusivu',
                to: '/',
              },
              {
                label: 'Päivitykset',
                to: '/blog',
              },
              {
                label: 'Käyttöohjeet',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Tuki',
            items: [
              {
                label: 'Ota yhteyttä',
                href: 'mailto:info@vakacloud.fi', // Tai tukisivun osoite
              },
              {
                label: 'Tietosuoja',
                href: 'https://app.vakacloud.fi/privacy',
              },
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