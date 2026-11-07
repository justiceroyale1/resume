<script setup lang="ts">
import { portfolioSiteUrl } from "../composables/usePortfolioContent";
import { useBackendResume } from "../composables/useBackendResume";
import { ref } from "vue";


useSeoMeta({
  title: "Justice Abutu - Senior Backend Engineer | PHP, Laravel, Node.js",
  ogTitle: "Justice Abutu - Senior Backend Engineer | PHP, Laravel, Node.js",
  description:
    "Justice Abutu is a senior backend engineer with experience building production platforms with PHP, Laravel, TypeScript, Node.js, relational databases, REST APIs, and background processing.",
  ogDescription:
    "Justice Abutu is a senior backend engineer with experience building production platforms with PHP, Laravel, TypeScript, Node.js, relational databases, REST APIs, and background processing.",
  ogImage: `${portfolioSiteUrl}/images/headshot.jpg`,
  twitterCard: "summary_large_image",
});

const backendContent = ref(useBackendResume());
</script>

<template>
  <AtsResume :content="backendContent" />
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
