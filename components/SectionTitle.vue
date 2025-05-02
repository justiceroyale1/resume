<script setup lang="ts">
// SectionTitle component for blue header and divider

const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="mt-6 mb-2">
        <div style="color:#2196F3;font-weight:bold;letter-spacing:1px;font-size:1.1rem;">{{ title }}</div>
        <v-divider class="mb-2" />
    </div>
</template>