<script setup lang="ts">
useSeoMeta({
  title: "Justice Abutu - Senior Backend / Full-Stack Software Engineer",
  ogTitle: "Justice Abutu - Senior Backend / Full-Stack Software Engineer",
  description:
    "Justice Abutu is a senior backend and full-stack software engineer with seven years of experience building business-critical platforms with PHP, Laravel, TypeScript, Node.js, Vue, and React.",
  ogDescription:
    "Justice Abutu is a senior backend and full-stack software engineer with seven years of experience building business-critical platforms with PHP, Laravel, TypeScript, Node.js, Vue, and React.",
  ogImage: "images/headshot.jpg",
  twitterCard: "summary_large_image",
});
</script>
<template>
  <AtsResume />
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
