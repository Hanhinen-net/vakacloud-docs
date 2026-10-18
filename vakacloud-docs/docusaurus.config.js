// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {createRequire} from 'module';
import {themes as prismThemes} from 'prism-react-renderer';

const require = createRequire(import.meta.url);
const recentPostsPlugin = require('./src/plugins/recent-posts');

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VakaCloud',
  tagline: 'Moderni toiminnanohjaus varhaiskasvatukseen',
  favicon: 'img/vaka-cloud-logo.png',

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
    defaultLocale: 'fi',
    locales: ['fi', 'en'],
    localeConfigs: {
      fi: {
        label: 'Suomi',
      },
      en: {
        label: 'English',
      },
    },
  },

  // docusaurus.config.js


  plugins: [recentPostsPlugin],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        
        docs: false, 
        
        blog: {
          showReadingTime: true,
          routeBasePath: '/blog',
          blogTitle: 'Tiedotteet',
          blogDescription:
            'VakaCloudin päivitykset, uutiset ja huoltoilmoitukset.',
          blogSidebarTitle: 'Viimeisimmät tiedotteet',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: 'json',
            copyright: `Copyright © ${new Date().getFullYear()} VakaCloud`,
          },
        },
        sitemap: {
          // Author pagination is generated as /blog/authors/<key>/authors/<n>.
          // Those paths, and any author page with no posts, stay out of the sitemap.
          ignorePatterns: [
            '/blog/authors/*/authors/**',
            '/en/blog/authors/*/authors/**',
            '/blog/authors/aleksi',
            '/blog/authors/santeri',
            '/en/blog/authors/aleksi',
            '/en/blog/authors/santeri',
          ],
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
        disableSwitch: true,
        respectPrefersColorScheme: false,
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
            label: 'Päivitykset', 
            position: 'left'
          },
          {
            to: '/blog/tags/news', 
            label: 'Uutiset', 
            position: 'left'
          },
          {
            to: '/blog/tags/maintenance', 
            label: 'Huoltoilmoitukset', 
            position: 'left'
          },
          {
            href: 'https://stats.uptimerobot.com/FRpRqrcLpZ',
            label: 'Järjestelmän tila',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://app.vakacloud.fi',
            label: 'Kirjaudu VakaCloudiin',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
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
              { label: 'Tuki', href: 'https://portal.vakacloud.fi/fi' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} VakaCloud`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;