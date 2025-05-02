<script setup lang="ts">
useSeoMeta({
  title: "Justice Abutu - Fullstack Developer",
  ogTitle: "Justice Abutu - Fullstack Developer",
  description:
    "Justice Abutu is a fullstack developer. He is skilled in PHP, Laravel, Javascript, Typescript, Nodejs, Vue, etc. He has over 5 years of experience building web apps for various companies. Learn more about his experience here. ",
  ogDescription:
    "Justice Abutu is a fullstack developer. He is skilled in PHP, Laravel, Javascript, Typescript, Nodejs, Vue, etc. He has over 5 years of experience building web apps for various companies. Learn more about his experience here. ",
  ogImage: "images/profile.jpg",
  twitterCard: "summary_large_image",
});
</script>
<template>
  <v-app>
    <v-main>
      <AtsResume></AtsResume>
    </v-main>
  </v-app>
</template>
<style>
*,
body {
  font-family: "Lato", sans-serif;
}

/**@media print {
  body {
    overflow: auto;
    height: auto;
  }
  .scroll-y {
    height: auto;
    overflow: visible;
  }
}**/
</style>
