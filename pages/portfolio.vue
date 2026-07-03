<script setup lang="ts">
useSeoMeta({
  title: "Portfolio - Justice Abutu",
  ogTitle: "Portfolio - Justice Abutu",
  description:
    "A concise portfolio of selected full stack software engineering work by Justice Abutu, including marketplace, enterprise office, education, and housing platform projects.",
  ogDescription:
    "A concise portfolio of selected full stack software engineering work by Justice Abutu, including marketplace, enterprise office, education, and housing platform projects.",
  ogImage: "images/portfolio/amana-market.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <v-app>
    <v-main>
      <PortfolioShowcase />
    </v-main>
  </v-app>
</template>

<style>
*,
body {
  font-family: "Lato", sans-serif;
}
</style>
