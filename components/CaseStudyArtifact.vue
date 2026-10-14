<script setup lang="ts">
import type { PortfolioProject } from "../composables/usePortfolioContent";

const props = defineProps<{ project: PortfolioProject }>();
const isDomainOverview = props.project.artifact.layout === "hub" || props.project.artifact.layout === "matrix";
</script>

<template>
  <figure class="case-artifact" :class="`case-artifact--${project.artifact.layout}`">
    <figcaption>
      <strong>{{ project.artifact.title }}</strong>
      <span>{{ project.artifact.description }}</span>
    </figcaption>

    <div v-if="isDomainOverview" class="artifact-core">
      {{ project.artifact.coreLabel }}
    </div>

    <component :is="isDomainOverview ? 'ul' : 'ol'" class="artifact-list">
      <li v-for="item in project.artifact.items" :key="item.label">
        <strong>{{ item.label }}</strong>
        <span>{{ item.detail }}</span>
      </li>
    </component>
  </figure>
</template>

<style scoped>
.case-artifact {
  min-width: 0;
  margin: 0;
  padding: clamp(20px, 3vw, 30px);
  border-radius: 14px;
  color: #eef5ff;
  background: #101827;
}

figcaption {
  display: grid;
  gap: 8px;
  margin-bottom: 24px;
}

figcaption strong {
  color: #fff;
  font-size: clamp(1.4rem, 2.2vw, 1.85rem);
  line-height: 1.15;
  letter-spacing: -0.025em;
}

figcaption span {
  color: #cbd5e1;
  font-size: 0.94rem;
  line-height: 1.5;
}

.artifact-core {
  padding: 13px;
  border: 1px solid #93c5fd;
  border-radius: 7px;
  background: #174f89;
  font-weight: 800;
  text-align: center;
}

.artifact-list {
  position: relative;
  display: grid;
  gap: 18px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.artifact-list li {
  position: relative;
  display: grid;
  align-content: center;
  gap: 5px;
  min-width: 0;
  padding: 14px;
  border: 1px solid #53657f;
  border-radius: 7px;
  background: #18243a;
}

.artifact-list strong {
  color: #fff;
  font-size: 0.92rem;
}

.artifact-list span {
  color: #cbd5e1;
  font-size: 0.81rem;
  line-height: 1.4;
}

.case-artifact--hub .artifact-list,
.case-artifact--matrix .artifact-list {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  margin-top: 24px;
}

.case-artifact--hub .artifact-list::after,
.case-artifact--matrix .artifact-list::after {
  position: absolute;
  top: -24px;
  bottom: calc(25% - 5px);
  left: calc(50% - 1px);
  width: 2px;
  background: #93c5fd;
  content: "";
}

.case-artifact--hub .artifact-list li::after,
.case-artifact--matrix .artifact-list li::after {
  position: absolute;
  top: calc(50% - 1px);
  width: 10px;
  height: 2px;
  background: #93c5fd;
  content: "";
}

.case-artifact--hub .artifact-list li:nth-child(odd)::after,
.case-artifact--matrix .artifact-list li:nth-child(odd)::after {
  right: -10px;
}

.case-artifact--hub .artifact-list li:nth-child(even)::after,
.case-artifact--matrix .artifact-list li:nth-child(even)::after {
  left: -10px;
}

.case-artifact--sequence .artifact-list {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.case-artifact--timeline .artifact-list {
  counter-reset: stage;
  grid-template-columns: 1fr;
  gap: 0;
}

.case-artifact--sequence .artifact-list li {
  border-top-color: #93c5fd;
}

.case-artifact--sequence .artifact-list li:not(:last-child)::before {
  position: absolute;
  top: 50%;
  right: -13px;
  width: 12px;
  height: 2px;
  background: #93c5fd;
  content: "";
}

.case-artifact--sequence .artifact-list li:not(:last-child)::after {
  position: absolute;
  top: calc(50% - 4px);
  right: -19px;
  width: 6px;
  height: 10px;
  background: #93c5fd;
  clip-path: polygon(0 0, 100% 50%, 0 100%);
  content: "";
}

.case-artifact--timeline .artifact-list li {
  counter-increment: stage;
  position: relative;
  grid-template-columns: 32px minmax(0, 1fr);
  gap: 2px 10px;
  padding: 10px 0;
  border: 0;
  border-radius: 0;
  background: transparent;
}

.case-artifact--timeline .artifact-list li + li {
  border-top: 1px solid #40506c;
}

.case-artifact--timeline .artifact-list li::before {
  grid-row: 1 / 3;
  color: #93c5fd;
  content: counter(stage, decimal-leading-zero);
  font-size: 0.79rem;
  font-weight: 900;
}

.case-artifact--timeline .artifact-list li:not(:last-child)::after {
  position: absolute;
  top: 30px;
  bottom: -10px;
  left: 15px;
  width: 2px;
  background: #93c5fd;
  content: "";
}

.case-artifact--timeline .artifact-list li span {
  grid-column: 2;
}

@media (max-width: 540px) {
  .case-artifact--hub .artifact-list,
  .case-artifact--matrix .artifact-list {
    gap: 12px;
  }

  .case-artifact--hub .artifact-list li::after,
  .case-artifact--matrix .artifact-list li::after {
    width: 7px;
  }

  .case-artifact--hub .artifact-list li:nth-child(odd)::after,
  .case-artifact--matrix .artifact-list li:nth-child(odd)::after {
    right: -7px;
  }

  .case-artifact--hub .artifact-list li:nth-child(even)::after,
  .case-artifact--matrix .artifact-list li:nth-child(even)::after {
    left: -7px;
  }

  .case-artifact--hub .artifact-list::after,
  .case-artifact--matrix .artifact-list::after {
    bottom: calc(25% - 3.5px);
  }

  .case-artifact--sequence .artifact-list {
    grid-template-columns: 1fr;
  }

  .artifact-list li {
    padding: 11px;
  }

  .case-artifact--sequence .artifact-list li:not(:last-child)::before {
    top: auto;
    right: auto;
    bottom: -13px;
    left: calc(50% - 1px);
    width: 2px;
    height: 12px;
  }

  .case-artifact--sequence .artifact-list li:not(:last-child)::after {
    top: auto;
    right: auto;
    bottom: -17px;
    left: calc(50% - 3px);
    transform: rotate(90deg);
  }
}

</style>
