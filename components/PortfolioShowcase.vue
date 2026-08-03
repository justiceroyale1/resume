<script setup lang="ts">
import { useAtsHelpers } from "../composables/atsHelpers";
import { usePortfolioContent } from "../composables/usePortfolioContent";

const {
  name,
  email,
  address,
  availability,
  linkedinUrl,
  githubUrl,
  resumeUrl,
  certificationList,
} = useAtsHelpers();

const {
  proofPoints,
  featuredProjects,
  skillGroups,
  additionalExperience,
  workPrinciples,
  currentFocus,
} = usePortfolioContent();

const certification = certificationList[0];

const withBaseUrl = (path: string) => {
  const baseUrl = useRuntimeConfig().app.baseURL;

  return `${baseUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
};
</script>

<template>
  <main class="portfolio-page">
    <div class="portfolio-shell">
      <header class="portfolio-hero">
        <div class="hero-copy">
          <p class="eyebrow">Senior product engineering</p>
          <h1>{{ name }}</h1>
          <p class="position">Senior Backend and Full-Stack Software Engineer</p>
          <p class="hero-statement">
            I build reliable web platforms for businesses with complex
            operational, financial and marketplace workflows.
          </p>
          <p class="hero-context">
            Seven years of experience across backend engineering, frontend
            development, APIs, databases, testing, deployment and production
            support.
          </p>
          <p class="availability">
            {{ address }} <span aria-hidden="true">·</span> {{ availability }}
          </p>

          <nav class="link-row hero-links" aria-label="Primary links">
            <a class="primary-link" :href="resumeUrl">View my résumé</a>
            <a :href="githubUrl" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a :href="`mailto:${email}`">Email me</a>
          </nav>
        </div>

        <picture class="portrait-frame">
          <source
            :srcset="withBaseUrl('images/headshot.webp')"
            type="image/webp"
          >
          <img
            :src="withBaseUrl('images/headshot.jpg')"
            :alt="`${name}, senior backend and full-stack software engineer`"
            width="1122"
            height="1402"
            loading="eager"
            fetchpriority="high"
          >
        </picture>
      </header>

      <section class="proof-section" aria-labelledby="proof-title">
        <h2 id="proof-title" class="sr-only">Experience highlights</h2>
        <ul class="proof-grid">
          <li v-for="point in proofPoints" :key="point">{{ point }}</li>
        </ul>
      </section>

      <section class="page-section" aria-labelledby="selected-work-title">
        <div class="section-heading">
          <p class="eyebrow">Selected work</p>
          <h2 id="selected-work-title">Systems, workflows and engineering decisions</h2>
          <p>
            Four projects that show current ownership, work in complex domains
            and experience improving products with real operational constraints.
          </p>
        </div>

        <div class="featured-projects">
          <article
            v-for="(project, index) in featuredProjects"
            :key="project.slug"
            class="project-preview"
          >
            <div class="project-number" aria-hidden="true">
              {{ String(index + 1).padStart(2, "0") }}
            </div>

            <div class="project-body">
              <p class="project-category">{{ project.category }}</p>
              <h3>{{ project.name }}</h3>
              <p class="project-meta">
                {{ project.role }} <span aria-hidden="true">·</span>
                {{ project.dates }}
              </p>
              <p class="project-summary">{{ project.summary }}</p>

              <ul class="project-highlights">
                <li v-for="highlight in project.previewHighlights" :key="highlight">
                  {{ highlight }}
                </li>
              </ul>

              <ul class="technology-list" :aria-label="`${project.name} technologies`">
                <li v-for="technology in project.technologies" :key="technology">
                  {{ technology }}
                </li>
              </ul>

              <div class="link-row project-links">
                <NuxtLink :to="`/portfolio/${project.slug}`">
                  Read the {{ project.name }} case study
                </NuxtLink>
                <a
                  v-if="project.externalUrl"
                  :href="project.externalUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ project.externalLabel }}
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="page-section" aria-labelledby="strengths-title">
        <div class="section-heading">
          <p class="eyebrow">Engineering strengths</p>
          <h2 id="strengths-title">Useful across the complete workflow</h2>
          <p>
            My strongest tools are PHP, Laravel, TypeScript, Node.js, Vue and
            React, but the larger value is connecting product, backend,
            frontend, data and delivery concerns.
          </p>
        </div>

        <div class="strength-grid">
          <article v-for="group in skillGroups" :key="group.name" class="strength-card">
            <h3>{{ group.name }}</h3>
            <ul>
              <li v-for="skill in group.skills" :key="skill">{{ skill }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="page-section" aria-labelledby="additional-experience-title">
        <div class="section-heading">
          <p class="eyebrow">Additional experience</p>
          <h2 id="additional-experience-title">Earlier product and platform work</h2>
        </div>

        <div class="experience-list">
          <article
            v-for="experience in additionalExperience"
            :key="experience.company"
            class="experience-entry"
          >
            <div class="experience-heading">
              <div>
                <h3>{{ experience.company }}</h3>
                <p>{{ experience.role }}</p>
              </div>
              <p class="experience-dates">{{ experience.dates }}</p>
            </div>
            <p class="experience-description">{{ experience.description }}</p>
            <ul>
              <li v-for="highlight in experience.highlights" :key="highlight">
                {{ highlight }}
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section
        v-if="certification"
        class="page-section certification-section"
        aria-labelledby="certification-title"
      >
        <div class="certification-copy">
          <p class="eyebrow">Certification</p>
          <h2 id="certification-title">
            micro1 Senior Full-Stack Software Engineering Certification
          </h2>
          <p class="certification-meta">
            {{ certification.date }} <span aria-hidden="true">·</span>
            {{ certification.issuer }}
          </p>
          <p>{{ certification.details }}</p>
          <ul class="technology-list" aria-label="Certification assessment areas">
            <li v-for="topic in certification.topics" :key="topic">{{ topic }}</li>
          </ul>
        </div>

        <picture class="certificate-frame">
          <source
            :srcset="withBaseUrl('images/certificates/micro1-certification.webp')"
            type="image/webp"
          >
          <img
            :src="withBaseUrl(certification.image)"
            alt="micro1 Senior Full-Stack Software Engineering certificate awarded to Justice Abutu"
            width="2040"
            height="1440"
            loading="lazy"
          >
        </picture>
      </section>

      <section class="page-section work-style-section" aria-labelledby="work-style-title">
        <div class="section-heading">
          <p class="eyebrow">How I work</p>
          <h2 id="work-style-title">Ownership across product boundaries</h2>
          <p>
            I am comfortable joining an existing codebase, understanding the
            surrounding business process and taking responsibility for changes
            that cross several parts of the system. On smaller teams in
            particular, feature quality depends on understanding how backend,
            frontend, infrastructure and product decisions affect one another.
          </p>
        </div>

        <ul class="principle-list">
          <li v-for="principle in workPrinciples" :key="principle">
            {{ principle }}
          </li>
        </ul>
      </section>

      <section class="contact-section" aria-labelledby="contact-title">
        <div class="contact-copy">
          <p class="eyebrow">Current focus</p>
          <h2 id="contact-title">Ready to contribute to a serious production system</h2>
          <p>
            I am looking for a remote senior backend, full-stack or
            product-engineering role. I am based in Abuja, Nigeria and can work
            with distributed teams across African, European and North American
            time zones.
          </p>

          <ul class="focus-list" aria-label="Industries and product areas of interest">
            <li v-for="focus in currentFocus" :key="focus">{{ focus }}</li>
          </ul>
        </div>

        <nav class="link-row contact-links" aria-label="Contact and profile links">
          <a class="primary-link" :href="`mailto:${email}`">Start a conversation</a>
          <a :href="resumeUrl">View my résumé</a>
          <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a :href="githubUrl" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </section>
    </div>
  </main>
</template>

<style scoped>
:global(*) {
  box-sizing: border-box;
}

.portfolio-page {
  min-height: 100vh;
  color: #172033;
  background: #f7f8fa;
}

.portfolio-shell {
  width: min(100% - 48px, 1120px);
  margin: 0 auto;
  padding: 72px 0 56px;
}

.portfolio-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 260px;
  align-items: center;
  gap: clamp(40px, 7vw, 88px);
}

.eyebrow,
.project-category {
  margin: 0 0 12px;
  color: #1d4ed8;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1,
h2,
h3,
p,
ul {
  margin-top: 0;
}

h1 {
  margin-bottom: 12px;
  color: #101827;
  font-size: clamp(3rem, 8vw, 6.25rem);
  font-weight: 900;
  line-height: 0.92;
  letter-spacing: -0.055em;
}

.position {
  margin-bottom: 24px;
  color: #27364d;
  font-size: clamp(1.15rem, 2.5vw, 1.55rem);
  font-weight: 800;
  line-height: 1.25;
}

.hero-statement {
  max-width: 720px;
  margin-bottom: 16px;
  color: #1f2937;
  font-size: clamp(1.25rem, 2.4vw, 1.65rem);
  line-height: 1.45;
}

.hero-context,
.section-heading > p:last-child,
.contact-copy > p,
.certification-copy > p {
  max-width: 760px;
  color: #4b5563;
  font-size: 1.03rem;
  line-height: 1.72;
}

.hero-context {
  margin-bottom: 12px;
}

.availability {
  margin-bottom: 28px;
  color: #374151;
  font-weight: 700;
}

.portrait-frame {
  display: block;
  overflow: hidden;
  border: 1px solid #d7dce3;
  border-radius: 14px;
  background: #e5e7eb;
  box-shadow: 0 18px 48px rgba(23, 32, 51, 0.12);
}

.portrait-frame img,
.certificate-frame img {
  display: block;
  width: 100%;
  height: auto;
}

.link-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 22px;
}

.link-row a,
.project-links a {
  color: #174f89;
  font-weight: 800;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}

.link-row a:hover,
.link-row a:focus-visible,
.project-links a:hover,
.project-links a:focus-visible {
  color: #123b66;
  text-decoration-thickness: 2px;
}

.primary-link {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  padding: 10px 17px;
  border: 2px solid #174f89;
  border-radius: 6px;
  color: #ffffff !important;
  background: #174f89;
  text-decoration: none !important;
}

.primary-link:hover,
.primary-link:focus-visible {
  color: #ffffff !important;
  background: #123b66;
  border-color: #123b66;
}

a:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 4px;
}

.proof-section {
  margin-top: 64px;
}

.proof-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 0;
  padding: 0;
  border-block: 1px solid #cfd6df;
  list-style: none;
}

.proof-grid li {
  padding: 22px;
  color: #27364d;
  font-size: 0.98rem;
  font-weight: 800;
  line-height: 1.45;
}

.proof-grid li + li {
  border-left: 1px solid #cfd6df;
}

.page-section {
  padding-top: 92px;
}

.section-heading {
  max-width: 820px;
  margin-bottom: 36px;
}

.section-heading h2,
.certification-copy h2,
.contact-copy h2 {
  margin-bottom: 14px;
  color: #101827;
  font-size: clamp(2rem, 4vw, 3.35rem);
  font-weight: 900;
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.section-heading > p:last-child,
.contact-copy > p,
.certification-copy > p {
  margin-bottom: 0;
}

.featured-projects {
  border-top: 1px solid #cfd6df;
}

.project-preview {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 28px;
  padding: 42px 0;
  border-bottom: 1px solid #cfd6df;
}

.project-number {
  color: #1d4ed8;
  font-size: 0.9rem;
  font-weight: 900;
  letter-spacing: 0.08em;
}

.project-category {
  margin-bottom: 8px;
}

.project-body h3 {
  margin-bottom: 8px;
  color: #101827;
  font-size: clamp(1.65rem, 3vw, 2.35rem);
  line-height: 1.1;
}

.project-meta {
  margin-bottom: 20px;
  color: #4b5563;
  font-weight: 800;
}

.project-summary {
  max-width: 820px;
  margin-bottom: 22px;
  color: #374151;
  font-size: 1.08rem;
  line-height: 1.7;
}

.project-highlights,
.experience-entry > ul,
.strength-card ul {
  margin-bottom: 24px;
  padding-left: 1.2rem;
  color: #27364d;
  line-height: 1.65;
}

.project-highlights {
  max-width: 900px;
}

.project-highlights li + li,
.experience-entry li + li,
.strength-card li + li {
  margin-top: 8px;
}

.technology-list,
.focus-list,
.principle-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  padding: 0;
  list-style: none;
}

.technology-list li,
.focus-list li,
.principle-list li {
  padding: 7px 10px;
  border: 1px solid #c9d3e1;
  border-radius: 4px;
  color: #374151;
  background: #ffffff;
  font-size: 0.84rem;
  font-weight: 700;
  line-height: 1.3;
}

.strength-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.strength-card {
  padding: 28px;
  border: 1px solid #d7dce3;
  border-radius: 8px;
  background: #ffffff;
}

.strength-card h3 {
  margin-bottom: 18px;
  color: #101827;
  font-size: 1.22rem;
}

.strength-card ul {
  margin-bottom: 0;
}

.experience-list {
  border-top: 1px solid #cfd6df;
}

.experience-entry {
  padding: 32px 0;
  border-bottom: 1px solid #cfd6df;
}

.experience-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
}

.experience-heading h3 {
  margin-bottom: 4px;
  color: #101827;
  font-size: 1.3rem;
}

.experience-heading p,
.experience-dates {
  margin-bottom: 0;
  color: #4b5563;
  font-weight: 700;
}

.experience-dates {
  flex: 0 0 auto;
}

.experience-description {
  max-width: 820px;
  margin: 18px 0 12px;
  color: #374151;
  line-height: 1.65;
}

.experience-entry > ul {
  margin-bottom: 0;
}

.certification-section {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(360px, 1.05fr);
  align-items: center;
  gap: 44px;
}

.certification-meta {
  color: #374151 !important;
  font-weight: 800;
}

.certification-copy .technology-list {
  margin-top: 22px;
  margin-bottom: 0;
}

.certificate-frame {
  display: block;
  overflow: hidden;
  border: 1px solid #d7dce3;
  border-radius: 8px;
  background: #101827;
}

.work-style-section {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.75fr);
  gap: 64px;
}

.work-style-section .section-heading {
  margin-bottom: 0;
}

.principle-list {
  align-content: flex-start;
  margin: 0;
}

.contact-section {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
  gap: 48px;
  margin-top: 92px;
  padding: 48px;
  border-radius: 12px;
  color: #ffffff;
  background: #101827;
}

.contact-copy h2,
.contact-copy > p {
  color: #ffffff;
}

.contact-section .eyebrow {
  color: #93c5fd;
}

.focus-list {
  margin-top: 24px;
  margin-bottom: 0;
}

.focus-list li {
  color: #e5e7eb;
  border-color: #43506a;
  background: #172033;
}

.contact-links {
  min-width: 190px;
  align-items: stretch;
  flex-direction: column;
}

.contact-links a:not(.primary-link) {
  color: #bfdbfe;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 900px) {
  .portfolio-shell {
    padding-top: 48px;
  }

  .portfolio-hero {
    grid-template-columns: minmax(0, 1fr) 210px;
    align-items: start;
    gap: 36px;
  }

  .proof-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .proof-grid li + li {
    border-left: 0;
  }

  .proof-grid li:nth-child(even) {
    border-left: 1px solid #cfd6df;
  }

  .proof-grid li:nth-child(n + 3) {
    border-top: 1px solid #cfd6df;
  }

  .certification-section,
  .work-style-section,
  .contact-section {
    grid-template-columns: 1fr;
  }

  .certificate-frame {
    max-width: 680px;
  }

  .contact-links {
    min-width: 0;
    align-items: flex-start;
    flex-direction: row;
  }
}

@media (max-width: 640px) {
  .portfolio-shell {
    width: min(100% - 32px, 1120px);
    padding-top: 32px;
  }

  .portfolio-hero {
    grid-template-columns: 1fr;
  }

  .portrait-frame {
    order: -1;
    width: 156px;
  }

  .hero-links,
  .contact-links {
    align-items: stretch;
    flex-direction: column;
  }

  .hero-links a,
  .contact-links a {
    width: 100%;
    min-height: 44px;
  }

  .hero-links a:not(.primary-link),
  .contact-links a:not(.primary-link) {
    display: inline-flex;
    align-items: center;
  }

  .proof-grid,
  .strength-grid {
    grid-template-columns: 1fr;
  }

  .proof-grid li:nth-child(even) {
    border-left: 0;
  }

  .proof-grid li + li {
    border-top: 1px solid #cfd6df;
  }

  .page-section {
    padding-top: 72px;
  }

  .project-preview {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 34px 0;
  }

  .project-links {
    align-items: flex-start;
    flex-direction: column;
  }

  .experience-heading {
    flex-direction: column;
    gap: 8px;
  }

  .certification-section {
    gap: 28px;
  }

  .contact-section {
    gap: 32px;
    margin-inline: -16px;
    padding: 36px 20px;
    border-radius: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
  }
}
</style>
