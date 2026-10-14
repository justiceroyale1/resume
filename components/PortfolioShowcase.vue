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
          <h1>{{ name }}</h1>
          <p class="position">Senior Backend and Full-Stack Software Engineer</p>
          <p class="hero-statement">
            I build reliable web platforms for businesses with complex
            operational, financial and marketplace workflows.
          </p>
          <p class="availability">
            {{ address }} <span aria-hidden="true">·</span> {{ availability }}
          </p>

          <nav class="link-row hero-links" aria-label="Primary links">
            <a class="primary-link" href="#selected-work-title">Explore selected work</a>
            <a :href="resumeUrl">View my résumé</a>
            <a :href="`mailto:${email}`">Email me</a>
          </nav>
        </div>

        <aside class="featured-system" aria-labelledby="featured-system-title">
          <div class="system-heading">
            <span class="system-label">Featured project</span>
            <h2 id="featured-system-title">ManagedCo</h2>
            <p>One system for the operational work behind a small business.</p>
          </div>
          <div class="system-map" role="img" aria-label="ManagedCo system map: storefronts and business operations connect to a tenant-aware Laravel application, with MySQL data, Redis-backed workers, and S3-compatible storage.">
            <div class="system-inputs">
              <span>Storefronts</span>
              <span>Business operations</span>
            </div>
            <div class="system-connector" aria-hidden="true"></div>
            <div class="system-core">Tenant-aware Laravel application</div>
            <div class="system-connector" aria-hidden="true"></div>
            <div class="system-services">
              <span>MySQL data</span>
              <span>Redis + workers</span>
              <span>S3 storage</span>
            </div>
          </div>
          <NuxtLink class="system-link" to="/portfolio/managedco">See the ManagedCo case study</NuxtLink>
        </aside>
      </header>

      <section class="proof-section" aria-labelledby="proof-title">
        <h2 id="proof-title" class="sr-only">Experience highlights</h2>
        <ul class="proof-grid">
          <li v-for="point in proofPoints" :key="point">{{ point }}</li>
        </ul>
      </section>

      <section class="page-section" aria-labelledby="selected-work-title">
        <div class="section-heading">
          <h2 id="selected-work-title">Selected work</h2>
          <p>Systems, workflows and engineering decisions across four complex products.</p>
        </div>

        <div class="featured-projects">
          <article
            v-for="project in featuredProjects"
            :key="project.slug"
            class="project-preview"
          >
            <div class="project-body">
              <p class="project-category">{{ project.category }}</p>
              <h3>{{ project.name }}</h3>
              <p class="project-meta">
                {{ project.role }} <span aria-hidden="true">·</span>
                {{ project.dates }}
              </p>
              <p class="project-summary">{{ project.summary }}</p>

              <p class="project-highlight">{{ project.previewHighlight }}</p>

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
              <li v-for="skill in group.skills.slice(0, 4)" :key="skill">{{ skill }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="page-section" aria-labelledby="additional-experience-title">
        <div class="section-heading">
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
          </article>
        </div>
      </section>

      <section
        v-if="certification"
        class="page-section certification-section"
        aria-labelledby="certification-title"
      >
        <div class="certification-copy">
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
          <li v-for="principle in workPrinciples.slice(0, 4)" :key="principle">
            {{ principle }}
          </li>
        </ul>
      </section>

      <section class="contact-section" aria-labelledby="contact-title">
        <div class="contact-copy">
          <picture class="contact-portrait">
            <source :srcset="withBaseUrl('images/headshot.webp')" type="image/webp">
            <img :src="withBaseUrl('images/headshot.jpg')" :alt="`${name}, senior backend and full-stack software engineer`" width="1122" height="1402" loading="lazy">
          </picture>
          <h2 id="contact-title">Ready to contribute to a serious production system</h2>
          <p>
            I am looking for a remote senior backend, full-stack or
            product-engineering role. I am based in Abuja, Nigeria and can work
            with distributed teams across African, European and North American
            time zones.
          </p>

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

.portfolio-page ::selection {
  color: #fff;
  background: #174f89;
}

.portfolio-shell {
  width: min(100% - 48px, 1120px);
  margin: 0 auto;
  padding: 64px 0 56px;
}

.portfolio-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(330px, 0.78fr);
  align-items: center;
  gap: clamp(36px, 5vw, 72px);
}

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
  font-size: clamp(3rem, 7vw, 5.8rem);
  font-weight: 900;
  line-height: 0.92;
  letter-spacing: -0.04em;
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

.section-heading > p:last-child,
.contact-copy > p,
.certification-copy > p {
  max-width: 760px;
  color: #4b5563;
  font-size: 1.03rem;
  line-height: 1.72;
}

.availability {
  margin-bottom: 28px;
  color: #374151;
  font-weight: 700;
}

.contact-portrait img,
.certificate-frame img {
  display: block;
  width: 100%;
  height: auto;
}

.featured-system {
  padding: 28px;
  border-radius: 14px;
  color: #e5edfc;
  background: #101827;
  box-shadow: 0 20px 48px rgba(23, 32, 51, 0.16);
}

.system-label {
  color: #93c5fd;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.system-heading h2 {
  margin: 12px 0 8px;
  color: #fff;
  font-size: 2rem;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.system-heading p {
  margin-bottom: 24px;
  color: #cbd5e1;
  line-height: 1.5;
}

.system-map {
  padding: 20px;
  border: 1px solid #40506c;
  border-radius: 10px;
  background: #18243a;
}

.system-inputs,
.system-services {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.system-inputs {
  padding-bottom: 16px;
}

.system-services {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding-top: 16px;
}

.system-inputs::before,
.system-services::before {
  position: absolute;
  right: 16.666%;
  left: 16.666%;
  height: 2px;
  background: #93c5fd;
  content: "";
}

.system-inputs::before {
  bottom: 8px;
  right: 25%;
  left: 25%;
}

.system-services::before {
  top: 8px;
}

.system-inputs::after,
.system-services::after {
  position: absolute;
  left: calc(50% - 1px);
  width: 2px;
  height: 8px;
  background: #93c5fd;
  content: "";
}

.system-inputs::after {
  bottom: 0;
}

.system-services::after {
  top: 0;
}

.system-inputs span,
.system-services span,
.system-core {
  position: relative;
  display: grid;
  min-height: 50px;
  place-items: center;
  padding: 9px;
  border: 1px solid #53657f;
  border-radius: 6px;
  color: #eef5ff;
  font-size: 0.81rem;
  font-weight: 700;
  line-height: 1.25;
  text-align: center;
}

.system-inputs span::after,
.system-services span::before {
  position: absolute;
  left: calc(50% - 1px);
  width: 2px;
  height: 8px;
  background: #93c5fd;
  content: "";
}

.system-inputs span::after {
  bottom: -9px;
}

.system-services span::before {
  top: -9px;
}

.system-core {
  min-height: 58px;
  border-color: #93c5fd;
  color: #fff;
  background: #174f89;
  font-size: 0.93rem;
}

.system-connector {
  position: relative;
  width: 2px;
  height: 22px;
  margin: 0 auto;
  background: #93c5fd;
}

.system-connector::after {
  position: absolute;
  bottom: -1px;
  left: -4px;
  width: 0;
  height: 0;
  border-top: 6px solid #93c5fd;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  content: "";
}

.system-link {
  display: inline-block;
  margin-top: 20px;
  color: #bfdbfe;
  font-weight: 800;
  text-underline-offset: 4px;
}

.system-link:hover,
.system-link:focus-visible {
  color: #fff;
}

#selected-work-title {
  scroll-margin-top: 32px;
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
  padding: 36px 0;
  border-bottom: 1px solid #cfd6df;
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
  margin-bottom: 16px;
  color: #374151;
  font-size: 1.08rem;
  line-height: 1.7;
}

.strength-card ul {
  margin-bottom: 24px;
  padding-left: 1.2rem;
  color: #27364d;
  line-height: 1.65;
}

.strength-card li + li {
  margin-top: 8px;
}

.project-highlight {
  max-width: 820px;
  margin-bottom: 18px;
  color: #27364d;
  font-weight: 800;
  line-height: 1.55;
}

.technology-list,
.principle-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  padding: 0;
  list-style: none;
}

.technology-list li,
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

.contact-portrait {
  display: block;
  overflow: hidden;
  width: 80px;
  margin-bottom: 22px;
  border-radius: 8px;
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
    grid-template-columns: 1fr;
    align-items: start;
    gap: 32px;
  }

  .featured-system {
    max-width: 560px;
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

  .featured-system {
    padding: 20px;
  }

  .hero-links,
  .contact-links {
    align-items: stretch;
    flex-direction: column;
  }

  .hero-links {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px 16px;
  }

  .hero-links .primary-link {
    grid-column: 1 / -1;
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
    padding: 30px 0;
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
