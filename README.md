# Justice Abutu - Senior Backend / Full-Stack Engineer Résumé

This Nuxt application contains my ATS-friendly résumé and portfolio. The canonical résumé is available at both `/` and `/resume`; `/portfolio` contains selected work.

## Local Development

```bash
npm run dev
```

## PDF Export

Open either résumé route in Chrome and choose **Print → Save as PDF**. Select colour mode, use A4 paper and the default scale, disable browser headers and footers, and enable background graphics. The print stylesheet is designed for a two-page, selectable-text PDF with the résumé's accent colours preserved.

## Build & Deploy

To build this resume, run the following command:

```
NUXT_APP_BASE_URL=/<repository>/ npx nuxt build --preset github_pages
```

where `<repository>` is the name of your GitHub repository.

Then deploy to GitHub Pages, using the following command:

```
npx gh-pages --dotfiles -d .output/public
```

## Credits

I want to thank the creators and contributors of the following projects for making this task much easier:

- [Nuxt 3](https://nuxt.com/docs/getting-started/introduction).
- [Vuetify](https://vuetifyjs.com/en/getting-started/installation/#installation).
