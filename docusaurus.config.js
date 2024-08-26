// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aplicaciones Ofimáticas - English',
  tagline: '1º SMX',
  favicon: 'img/logobatoi.png',

  // Set the production url of your site here
  url: 'https://Jorge-Zafrilla.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/apuntes-AOIngles/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Jorge-Zafrilla', // Usually your GitHub org/user name.
  projectName: 'apuntes-AOIngles', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'img/logobatoi.png',
      navbar: {
        title: 'Aplicaciones Ofimáticas',
        logo: {
          alt: 'Logo Batoi',
          src: 'img/logobatoi.png',
          srcDark: 'img/logobatoidark.png', 
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Apuntes',
          },

          {to: '/blog', label: 'Anuncios', position: 'left'},
          {to: '/apuntes', label: 'Apuntes', position: 'left'},
          {
            type: 'localeDropdown', 
            position:'right',
          },
          {
            href: 'https://github.com/Jorge-Zafrilla',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Contacto',
            items: [
              {
                html: '<span>Email: <strong>j.zafrillamunoz@edu.gva.es</strong></span>',
              },
            ],
          },
          {
            title: 'Aules',
            items: [
              {
                label: 'Aules del módulo',
                href: 'https://aules.edu.gva.es/fp/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Aplicaciones Ofimáticas - Jorge Zafrilla Muñoz.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
