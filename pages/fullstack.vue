<script setup lang="ts">
import { portfolioSiteUrl } from "../composables/usePortfolioContent";
import { useFullstackResume } from "../composables/useFullstackResume";
import { ref } from "vue";

useSeoMeta({
  title: "Justice Abutu - Senior Full-Stack / Product Engineer",
  ogTitle: "Justice Abutu - Senior Full-Stack / Product Engineer",
  description:
    "Justice Abutu is a senior full-stack and product-focused software engineer with experience building web products with Laravel, PHP, TypeScript, Node.js, Vue.js, and React.",
  ogDescription:
    "Justice Abutu is a senior full-stack and product-focused software engineer with experience building web products with Laravel, PHP, TypeScript, Node.js, Vue.js, and React.",
  ogImage: `${portfolioSiteUrl}/images/headshot.jpg`,
  twitterCard: "summary_large_image",
});

const fullstackContent = ref(useFullstackResume());
</script>

<template>
  <AtsResume :content="fullstackContent" />
</template>

<style>
html,
body {
  margin: 0;
  min-height: 100%;
  font-family: "Lato", sans-serif;
}

#__nuxt {
  min-height: 100%;
}

body {
  background: #f3f5f8;
}

@media print {

  html,
  body,
  #__nuxt {
    height: auto !important;
    min-height: 0 !important;
    overflow: visible !important;
  }

  body {
    background: #fff;
  }
}
</style>
