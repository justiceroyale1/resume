<script setup lang="ts">
import { useAtsHelpers } from "../composables/atsHelpers";

const {
  summary,
  phoneNumber,
  phoneHref,
  address,
  availability,
  email,
  name,
  position,
  skillCategories,
  educationList,
  certificationList,
  experienceList,
  independentProjectList,
  linkedinUrl,
  githubUrl,
  managedCoUrl,
} = useAtsHelpers();
</script>

<template>
  <main class="resume-shell">
    <header class="resume-header">
      <h1>{{ name }}</h1>
      <p class="target-title">{{ position }}</p>
      <p class="location-line">{{ address }} <span aria-hidden="true">|</span> {{ availability }}</p>

      <address class="contact-list">
        <a :href="`mailto:${email}`">{{ email }}</a>
        <span aria-hidden="true">|</span>
        <a :href="`tel:${phoneHref}`">{{ phoneNumber }}</a>
        <span aria-hidden="true">|</span>
        <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span aria-hidden="true">|</span>
        <a :href="githubUrl" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span aria-hidden="true">|</span>
        <a :href="managedCoUrl" target="_blank" rel="noopener noreferrer">ManagedCo</a>
      </address>
    </header>

    <section aria-labelledby="summary-heading">
      <h2 id="summary-heading">Professional Summary</h2>
      <p class="summary">{{ summary }}</p>
    </section>

    <section aria-labelledby="skills-heading">
      <h2 id="skills-heading">Technical Skills</h2>
      <dl class="skill-list">
        <div v-for="category in skillCategories" :key="category.name">
          <dt>{{ category.name }}:</dt>
          <dd>{{ category.skills.join(", ") }}</dd>
        </div>
      </dl>
    </section>

    <section aria-labelledby="experience-heading">
      <h2 id="experience-heading">Professional Experience</h2>
      <article v-for="experience in experienceList" :key="`${experience.company}-${experience.duration}`" class="entry">
        <div class="entry-heading">
          <h3>
            <a v-if="experience.website" :href="experience.website" target="_blank" rel="noopener noreferrer">
              {{ experience.company }}
            </a>
            <span v-else>{{ experience.company }}</span>
            <span class="separator" aria-hidden="true"> | </span>{{ experience.position }}<template v-if="experience.employmentType">, {{ experience.employmentType }}</template>
          </h3>
          <p class="entry-meta">{{ experience.location }} <span aria-hidden="true">|</span> {{ experience.duration }}</p>
        </div>
        <p class="entry-description">{{ experience.description }}</p>
        <ul>
          <li v-for="task in experience.tasks" :key="task">{{ task }}</li>
        </ul>
      </article>
    </section>

    <section aria-labelledby="projects-heading">
      <h2 id="projects-heading">Selected Independent Project</h2>
      <article v-for="project in independentProjectList" :key="project.name" class="entry project-entry">
        <div class="entry-heading">
          <h3>
            <a :href="project.website" target="_blank" rel="noopener noreferrer">{{ project.name }}</a>
            <span class="separator" aria-hidden="true"> | </span>{{ project.role }}
          </h3>
          <p class="entry-meta">{{ project.duration }}</p>
        </div>
        <p class="entry-description">{{ project.description }}</p>
        <ul>
          <li v-for="task in project.tasks" :key="task">{{ task }}</li>
        </ul>
      </article>
    </section>

    <section aria-labelledby="education-heading">
      <h2 id="education-heading">Education</h2>
      <article v-for="education in educationList" :key="education.title" class="credential">
        <h3>{{ education.title }}</h3>
        <p>{{ education.institution }}, {{ education.location }} <span aria-hidden="true">|</span> {{ education.duration }}</p>
      </article>
    </section>

    <section aria-labelledby="certification-heading">
      <h2 id="certification-heading">Certification</h2>
      <article v-for="certification in certificationList" :key="certification.title" class="credential">
        <h3>{{ certification.title }}</h3>
        <p>{{ certification.issuer }} <span aria-hidden="true">|</span> {{ certification.date }}</p>
        <p>{{ certification.details }}</p>
      </article>
    </section>
  </main>
</template>

<style scoped>
.resume-shell {
  box-sizing: border-box;
  width: min(100%, 900px);
  margin: 0 auto;
  padding: 32px 42px 48px;
  color: #172033;
  background: #fff;
  font-size: 15px;
  line-height: 1.42;
}

.resume-header {
  padding-bottom: 12px;
  text-align: center;
  border-bottom: 1px solid #c9d1dc;
}

h1,
h2,
h3,
p,
dl,
dd {
  margin: 0;
}

h1 {
  color: #111827;
  font-size: 34px;
  line-height: 1.05;
  letter-spacing: 0.01em;
}

.target-title {
  margin-top: 5px;
  color: #27364d;
  font-size: 18px;
  font-weight: 700;
}

.location-line,
.contact-list {
  margin-top: 4px;
  color: #4b5563;
  font-size: 13px;
}

.contact-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0 7px;
  font-style: normal;
}

a {
  color: #174f89;
  text-decoration: none;
}

a:hover,
a:focus-visible {
  text-decoration: underline;
}

section {
  margin-top: 14px;
}

h2 {
  margin-bottom: 7px;
  padding-bottom: 3px;
  color: #174f89;
  border-bottom: 1px solid #aeb9c8;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0.065em;
  text-transform: uppercase;
}

.summary {
  text-align: left;
}

.skill-list > div {
  display: flex;
  gap: 5px;
  margin-top: 2px;
}

.skill-list dt {
  flex: 0 0 auto;
  font-weight: 700;
}

.skill-list dd {
  min-width: 0;
}

.entry {
  margin-top: 11px;
}

.entry-heading {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
}

h3 {
  color: #111827;
  font-size: 15px;
  line-height: 1.3;
}

.entry-meta {
  flex: 0 0 auto;
  color: #4b5563;
  font-size: 13px;
  white-space: nowrap;
}

.entry-description {
  margin-top: 2px;
  color: #374151;
  font-style: italic;
}

ul {
  margin: 3px 0 0;
  padding-left: 19px;
}

li {
  margin-top: 2px;
  padding-left: 2px;
}

.credential h3,
.credential p {
  display: inline;
}

.credential h3 + p {
  padding-inline-start: 0.4em;
}

.credential p + p::before {
  content: " — ";
}

@media (max-width: 680px) {
  .resume-shell {
    padding: 24px 20px 36px;
    font-size: 14px;
  }

  h1 {
    font-size: 29px;
  }

  .target-title {
    font-size: 16px;
  }

  .location-line span {
    display: none;
  }

  .location-line {
    display: grid;
    gap: 2px;
  }

  .entry-heading {
    display: block;
  }

  .entry-meta {
    margin-top: 2px;
    white-space: normal;
  }

  .skill-list > div {
    display: block;
    margin-top: 5px;
  }

  .skill-list dt,
  .skill-list dd {
    display: inline;
  }
}

@page {
  size: A4;
  margin: 14mm;
}

@media print {
  .resume-shell {
    width: auto;
    max-width: none;
    margin: 0;
    padding: 0;
    color: #000;
    font-size: 10.5pt;
    line-height: 1.23;
  }

  .resume-header {
    padding-bottom: 5pt;
    border-color: #777;
  }

  h1 {
    color: #000;
    font-size: 23pt;
  }

  .target-title {
    margin-top: 2pt;
    color: #111;
    font-size: 12.5pt;
  }

  .location-line,
  .contact-list,
  .entry-meta {
    color: #222;
    font-size: 9.5pt;
  }

  .location-line,
  .contact-list {
    margin-top: 2pt;
  }

  a {
    color: #000;
  }

  section {
    margin-top: 7pt;
  }

  h2 {
    margin-bottom: 3pt;
    padding-bottom: 1pt;
    color: #000;
    border-color: #777;
    font-size: 11.5pt;
  }

  .skill-list > div {
    margin-top: 0.5pt;
  }

  .entry {
    margin-top: 5pt;
  }

  h3 {
    font-size: 10.5pt;
  }

  .entry-description {
    margin-top: 1pt;
    color: #111;
  }

  ul {
    margin-top: 1pt;
    padding-left: 15pt;
  }

  li {
    margin-top: 0.6pt;
    padding-left: 1pt;
  }

  h2,
  .entry-heading,
  .credential {
    break-after: avoid;
    page-break-after: avoid;
  }

  .entry-heading + .entry-description,
  .entry-heading + ul,
  .entry-description + ul li:first-child {
    break-before: avoid;
    page-break-before: avoid;
  }
}
</style>
