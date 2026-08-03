<script setup lang="ts">
import { portfolioSiteUrl } from "../../composables/usePortfolioContent";

const withBaseUrl = (path: string) => {
  const baseUrl = useRuntimeConfig().app.baseURL;

  return `${baseUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
};

useSeoMeta({
  title: "Justice Abutu | Senior Backend and Full-Stack Software Engineer",
  ogTitle: "Justice Abutu | Senior Backend and Full-Stack Software Engineer",
  description:
    "Portfolio of Justice Abutu, a senior backend and full-stack software engineer with seven years of experience building Laravel, PHP, TypeScript, Node.js, Vue and React applications.",
  ogDescription:
    "Portfolio of Justice Abutu, a senior backend and full-stack software engineer with seven years of experience building Laravel, PHP, TypeScript, Node.js, Vue and React applications.",
  ogImage: `${portfolioSiteUrl}/images/headshot.jpg`,
  ogType: "website",
  twitterCard: "summary_large_image",
});

useHead({
  link: [
    { rel: "canonical", href: `${portfolioSiteUrl}/portfolio/` },
    { rel: "icon", type: "image/png", href: withBaseUrl("favicon.png") },
  ],
});
</script>

<template>
  <PortfolioShowcase />
</template>

<style>
html,
body {
  margin: 0;
  min-height: 100%;
}

*,
body {
  font-family: "Lato", sans-serif;
}

#__nuxt {
  min-height: 100%;
}
</style>
