---
sidebar_position: 2
---

# Translate your site

Let's translate `docs/intro.md` to Spanish.

## Configure i18n

Modify `docusaurus.config.js` to add support for the `es` locale:

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
};
```

## Translate a doc

Copy the `docs/intro.md` file to the `i18n/es` folder:

```bash
mkdir -p i18n/es/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/es/docusaurus-plugin-content-docs/current/intro.md
```

Translate `i18n/es/docusaurus-plugin-content-docs/current/intro.md` in Spanish.

## Start your localized site

Start your site on the Spanish locale:

```bash
npm run start -- --locale es
```

Your localized site is accessible at [http://localhost:3000/es/](http://localhost:3000/es/) and the `Getting Started` page is translated.

:::caution

In development, you can only use one locale at a time.

:::

## Add a Locale Dropdown

To navigate seamlessly across languages, add a locale dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The locale dropdown now appears in your navbar:

![Locale Dropdown](./img/localeDropdown.png)

## Build your localized site

Build your site for a specific locale:

```bash
npm run build -- --locale es
```

Or build your site to include all the locales at once:

```bash
npm run build
```
