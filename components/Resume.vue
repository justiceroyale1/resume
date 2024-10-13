<script setup lang="ts">
import { useDisplay } from "vuetify";
import { computed } from "vue";

const profile = "images/profile.jpg";

const {
  summary,
  phoneNumber,
  address,
  email,
  name,
  position,
  skills,
  educationList,
} = useHelpers();

const { smAndUp } = useDisplay();

const bannerHeight = computed(() => {
  if (smAndUp.value) {
    return 150;
  }

  return 100;
});

const imageSize = computed(() => {
  if (smAndUp.value) {
    return 200;
  }
  return 100;
});

const contacts = computed(() => {
  return [
    {
      text: phoneNumber,
      icon: "mdi-phone-classic",
    },
    {
      text: email,
      icon: "mdi-email",
    },
    {
      text: address,
      icon: "mdi-map-marker",
    },
  ];
});
</script>
<template>
  <v-container class="pa-0" fluid>
    <v-sheet
      class="d-print-block"
      color="grey-lighten-3"
      :height="bannerHeight"
    >
      <v-container>
        <v-row>
          <v-col cols="8">
            <h2 class="text-h6 text-sm-h2 font-weight-bold">
              <span class="text-uppercase"> {{ name }} </span>
            </h2>
            <h5 class="text-subtitle-1 text-sm-h5 font-weight-medium">
              <span class="text-uppercase"> {{ position }} </span>
            </h5>
          </v-col>
          <v-col cols="4">
            <v-img
              class="ml-auto"
              :src="profile"
              :height="imageSize"
              :width="imageSize"
              style="border-radius: 50%"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-container class="mt-15">
      <v-row>
        <v-col cols="4" class="pa-0 d-none d-md-block">
          <!-- <v-row>
            <v-col class="px-0" cols="12">
              <v-icon> mdi-phone-classic </v-icon>
              <span class="ml-3">
                <a class="text-decoration-none" :href="`tel:${email}`">
                  {{ phoneNumber }}
                </a>
              </span>
            </v-col>
            <v-col class="px-0" cols="12">
              <v-icon> mdi-email </v-icon>
              <span class="ml-3">
                <a class="text-decoration-none" :href="`mailto:${email}`">
                  {{ email }}
                </a>
              </span>
            </v-col>
            <v-col class="px-0" cols="12">
              <v-icon> mdi-map-marker </v-icon>
              <span class="ml-3">
                {{ address }}
              </span>
            </v-col>
          </v-row>
          <v-divider class="my-4"> </v-divider>
          <v-row>
            <v-col class="px-0" cols="12">
              <h5 class="text-h5 text-uppercase font-weight-bold">Skills</h5>
              <v-icon> mdi-phone-classic </v-icon>
              <span class="ml-3">
                <a class="text-decoration-none" :href="`tel:${email}`">
                  {{ phoneNumber }}
                </a>
              </span>
            </v-col>
          </v-row> -->
          <v-list slim>
            <v-list-subheader
              class="px-0 text-h5 text-uppercase font-weight-bold"
            >
              Contact
            </v-list-subheader>

            <v-list-item class="px-0" v-for="(contact, i) in contacts" :key="i">
              <template v-slot:prepend>
                <v-icon :icon="contact.icon"></v-icon>
              </template>

              <v-list-item-title v-text="contact.text"></v-list-item-title>
            </v-list-item>
          </v-list>

          <v-list slim>
            <v-list-subheader
              class="px-0 text-h5 text-uppercase font-weight-bold"
            >
              Skills
            </v-list-subheader>

            <v-list-item class="px-0" v-for="(skill, i) in skills" :key="i">
              <template v-slot:prepend>
                <v-icon icon="mdi-star"></v-icon>
              </template>

              <v-list-item-title v-text="skill"></v-list-item-title>
            </v-list-item>
          </v-list>

          <v-list lines="two" slim>
            <v-list-subheader
              class="px-0 text-h5 text-uppercase font-weight-bold"
            >
              Education
            </v-list-subheader>

            <v-list-item
              class="px-0"
              v-for="(education, i) in educationList"
              :key="i"
            >
              <v-list-item-title v-text="education.title"></v-list-item-title>
              <v-list-item-subtitle
                v-text="education.subtitle"
              ></v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-col>

        <v-divider class="ms-3 d-none d-md-flex" vertical> </v-divider>

        <v-col>
          <v-row class="d-block d-md-none mb-6">
            <v-col cols="12">
              <v-icon> mdi-phone-classic </v-icon>
              <span class="ml-3">
                <a class="text-decoration-none" :href="`tel:${email}`">
                  {{ phoneNumber }}
                </a>
              </span>
            </v-col>
            <v-col cols="12">
              <v-icon> mdi-email </v-icon>
              <span class="ml-3">
                <a class="text-decoration-none" :href="`mailto:${email}`">
                  {{ email }}
                </a>
              </span>
            </v-col>
            <v-col cols="12">
              <v-icon> mdi-map-marker </v-icon>
              <span class="ml-3">
                {{ address }}
              </span>
            </v-col>
          </v-row>
          <v-row class="mt-n3">
            <v-col cols="12">
              <h5 class="text-h5 text-uppercase font-weight-bold">Summary</h5>
              <p>
                {{ summary }}
              </p>
            </v-col>
          </v-row>
          <v-row class="d-block d-md-none">
            <v-col cols="12">
              <h5 class="text-h5 text-uppercase font-weight-bold">Skills</h5>
              <v-chip-group selected-class="text-primary" column>
                <v-chip v-for="skill in skills" :key="skill">
                  {{ skill }}
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style>
@media print {
  v-sheet {
    overflow: auto;
    height: auto;
  }
}
</style>
