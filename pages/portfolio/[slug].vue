<script setup lang="ts">
import { useAtsHelpers } from "../../composables/atsHelpers";
import {
  getPortfolioProject,
  portfolioSiteUrl,
  usePortfolioContent,
} from "../../composables/usePortfolioContent";

const route = useRoute();
const project = getPortfolioProject(String(route.params.slug));

if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: "Portfolio case study not found",
  });
}

const { email, githubUrl, linkedinUrl, resumeUrl } = useAtsHelpers();
const portfolioProjects = usePortfolioContent().featuredProjects;
const projectIndex = portfolioProjects.findIndex((item) => item.slug === project.slug);
const nextProject = portfolioProjects[(projectIndex + 1) % portfolioProjects.length];

const withBaseUrl = (path: string) => {
  const baseUrl = useRuntimeConfig().app.baseURL;

  return `${baseUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
};

const canonicalUrl = `${portfolioSiteUrl}/portfolio/${project.slug}/`;
const socialImage = `${portfolioSiteUrl}/images/headshot.jpg`;

useSeoMeta({
  title: `${project.name} Case Study | Justice Abutu`,
  ogTitle: `${project.name} Case Study | Justice Abutu`,
  description: project.seoDescription,
  ogDescription: project.seoDescription,
  ogImage: socialImage,
  ogType: "article",
  twitterCard: "summary_large_image",
});

useHead({
  link: [
    { rel: "canonical", href: canonicalUrl },
    { rel: "icon", type: "image/png", href: withBaseUrl("favicon.png") },
  ],
});
</script>

<template>
  <main class="case-page">
    <div class="case-shell">
      <nav class="top-navigation" aria-label="Case study navigation">
        <NuxtLink to="/portfolio">Back to portfolio</NuxtLink>
        <a :href="resumeUrl">Résumé</a>
      </nav>

      <article>
        <header class="case-hero">
          <h1>{{ project.name }}</h1>
          <p class="case-category">{{ project.category }}</p>
          <p class="case-meta">
            {{ project.role }} <span aria-hidden="true">·</span>
            {{ project.dates }}
          </p>

          <div class="case-hero-grid">
            <div class="case-hero-copy">
              <p class="case-intro">{{ project.summary }}</p>
              <div class="case-takeaway">
                <strong>{{ project.previewLabel || "My contribution" }}</strong>
                <p>{{ project.previewHighlight }}</p>
              </div>
              <a
                v-if="project.externalUrl"
                class="external-link"
                :href="project.externalUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ project.externalLabel }} <span>(external link)</span>
              </a>
            </div>
            <CaseStudyArtifact :project="project" />
          </div>
        </header>

        <div class="case-layout">
          <aside class="case-overview">
            <nav aria-label="In this case study">
              <a href="#problem-title">{{ project.operatingSituation ? "Context" : "The problem" }}</a>
              <a href="#contribution-title">My contribution</a>
              <a v-if="project.workflowSteps" href="#workflow-title">How it worked</a>
              <a href="#decisions-title">Decisions</a>
              <a href="#result-title">Project outcome</a>
            </nav>
          </aside>

          <div class="case-content">
            <section aria-labelledby="problem-title">
              <h2 id="problem-title">{{ project.operatingSituation ? "Context" : "The problem" }}</h2>
              <template v-if="project.operatingSituation">
                <h3>Operating situation</h3>
                <p>{{ project.operatingSituation }}</p>
                <h3>The problem</h3>
              </template>
              <p>{{ project.problem }}</p>
              <template v-if="project.operatingConstraints?.length">
                <h3>Operating constraints</h3>
                <ul>
                  <li v-for="constraint in project.operatingConstraints" :key="constraint">
                    {{ constraint }}
                  </li>
                </ul>
              </template>
            </section>

            <section aria-labelledby="contribution-title">
              <h2 id="contribution-title">My contribution</h2>
              <template v-if="project.contributionGroups">
                <div
                  v-for="group in project.contributionGroups"
                  :key="group.name"
                  class="contribution-group"
                >
                  <h3>{{ group.name }}</h3>
                  <ul>
                    <li v-for="contribution in group.items" :key="contribution">
                      {{ contribution }}
                    </li>
                  </ul>
                </div>
              </template>
              <ul v-else>
                <li v-for="contribution in project.contributions" :key="contribution">
                  {{ contribution }}
                </li>
              </ul>
              <div v-if="project.additionalWork?.length" class="contribution-group additional-work">
                <h3>Additional engineering work</h3>
                <ul>
                  <li v-for="item in project.additionalWork" :key="item">{{ item }}</li>
                </ul>
              </div>
            </section>

            <section v-if="project.workflowSteps" aria-labelledby="workflow-title">
              <h2 id="workflow-title">How the system worked</h2>
              <ol class="workflow-steps">
                <li v-for="step in project.workflowSteps" :key="step.title">
                  <h3>{{ step.title }}</h3>
                  <p>{{ step.description }}</p>
                </li>
              </ol>
            </section>

            <section aria-labelledby="challenge-title">
              <h2 id="challenge-title">Engineering challenge</h2>
              <p>{{ project.engineeringChallenge }}</p>
            </section>

            <section aria-labelledby="decisions-title">
              <h2 id="decisions-title">{{ project.workflowSteps ? "Important system decisions" : "Decisions and trade-offs" }}</h2>
              <ul>
                <li v-for="decision in project.decisions" :key="decision">
                  {{ decision }}
                </li>
              </ul>
            </section>

            <section aria-labelledby="result-title">
              <h2 id="result-title">{{ project.resultTitle }}</h2>
              <p class="result-lead">{{ project.previewHighlight }}</p>
              <p>{{ project.result }}</p>
              <p v-if="project.laterStatus" class="later-status"><strong>Later project status.</strong> {{ project.laterStatus }}</p>
            </section>

            <section v-if="project.lessons" aria-labelledby="lessons-title">
              <h2 id="lessons-title">What I learned and would change</h2>
              <p>{{ project.lessons }}</p>
            </section>

            <details class="technology-details">
              <summary>Technologies used</summary>
              <p>{{ project.technologies.join(", ") }}</p>
            </details>
          </div>
        </div>
      </article>

      <nav class="next-case" aria-label="Continue through selected work">
        <span>Continue reading</span>
        <NuxtLink :to="`/portfolio/${nextProject.slug}`">
          {{ nextProject.name }} case study
        </NuxtLink>
      </nav>

      <section class="case-contact" aria-labelledby="case-contact-title">
        <div>
          <h2 id="case-contact-title">Building a workflow-heavy production system?</h2>
          <p>
            I am open to remote senior backend, full-stack and product-engineering roles.
          </p>
        </div>
        <nav class="contact-links" aria-label="Contact and profile links">
          <a class="primary-link" :href="`mailto:${email}`">Start a conversation</a>
          <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a :href="githubUrl" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </section>
    </div>
  </main>
</template>

<style scoped>
:global(html),
:global(body) {
  margin: 0;
  min-height: 100%;
  font-family: "Lato", sans-serif;
}

:global(#__nuxt) {
  min-height: 100%;
}

:global(*) {
  box-sizing: border-box;
}

.case-page {
  min-height: 100vh;
  color: #172033;
  background: #f7f8fa;
}

.case-page ::selection {
  color: #fff;
  background: #174f89;
}

.case-shell {
  width: min(100% - 48px, 1080px);
  margin: 0 auto;
  padding: 36px 0 56px;
}

.top-navigation {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: 28px;
  border-bottom: 1px solid #cfd6df;
}

a {
  color: #174f89;
  font-weight: 800;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}

a:hover,
a:focus-visible {
  color: #123b66;
  text-decoration-thickness: 2px;
}

a:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 4px;
}

.case-hero {
  padding: 54px 0 64px;
}

h1,
h2,
h3,
p,
ul,
figure {
  margin-top: 0;
}

h1 {
  margin-bottom: 10px;
  color: #101827;
  font-size: clamp(3.3rem, 8vw, 6rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.04em;
}

.case-category {
  margin-bottom: 8px;
  color: #1d4ed8;
  font-size: 0.83rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.case-meta {
  margin-bottom: 30px;
  color: #374151;
  font-size: 0.98rem;
  font-weight: 700;
}

.case-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  align-items: start;
  gap: clamp(30px, 5vw, 64px);
}

.case-hero-copy {
  min-width: 0;
}

.case-intro {
  max-width: 42ch;
  margin-bottom: 26px;
  color: #27364d;
  font-size: clamp(1.2rem, 2.1vw, 1.55rem);
  line-height: 1.48;
}

.case-takeaway {
  max-width: 47ch;
  margin-bottom: 22px;
  padding-top: 20px;
  border-top: 1px solid #cfd6df;
}

.case-takeaway strong {
  display: block;
  margin-bottom: 7px;
  color: #174f89;
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.case-takeaway p {
  margin-bottom: 0;
  color: #27364d;
  font-size: 1.02rem;
  font-weight: 700;
  line-height: 1.55;
}

.external-link span {
  font-weight: 400;
}

.primary-link {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  padding: 10px 17px;
  border: 2px solid #174f89;
  border-radius: 6px;
  color: #ffffff;
  background: #174f89;
  text-decoration: none;
}

.primary-link:hover,
.primary-link:focus-visible {
  color: #ffffff;
  background: #123b66;
  border-color: #123b66;
}

.case-layout {
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  align-items: start;
  gap: clamp(48px, 7vw, 88px);
  padding-top: 42px;
  border-top: 1px solid #cfd6df;
}

.case-overview {
  position: sticky;
  top: 24px;
}

.case-overview nav {
  display: grid;
  gap: 14px;
}

.case-overview a {
  font-size: 0.91rem;
  line-height: 1.35;
}

.case-content section {
  padding-bottom: 48px;
}

.case-content section + section {
  padding-top: 48px;
  border-top: 1px solid #d7dce3;
}

.case-content h2 {
  scroll-margin-top: 24px;
}

.case-content h2,
.case-contact h2 {
  margin-bottom: 18px;
  color: #101827;
  font-size: clamp(1.8rem, 3.7vw, 2.8rem);
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.case-content p,
.case-content li,
.case-contact p {
  color: #374151;
  font-size: 1rem;
  line-height: 1.7;
}

.case-content h3 {
  margin: 30px 0 10px;
  color: #27364d;
  font-size: 1.12rem;
  line-height: 1.35;
}

.case-content h2 + h3 {
  margin-top: 0;
}

.case-content h3 + p {
  margin-bottom: 22px;
}

.workflow-steps {
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: workflow;
}

.workflow-steps li {
  position: relative;
  counter-increment: workflow;
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 0 18px;
  padding: 22px 0;
  border-top: 1px solid #d7dce3;
}

.workflow-steps li::before {
  grid-row: 1 / 3;
  color: #174f89;
  content: counter(workflow, decimal-leading-zero);
  font-size: 0.85rem;
  font-weight: 900;
}

.workflow-steps h3 {
  margin: 0 0 6px;
}

.workflow-steps p {
  grid-column: 2;
}

.case-content .later-status {
  margin-top: 24px;
  padding: 16px 18px;
  border: 1px solid #d7dce3;
  border-radius: 6px;
  background: #e9eef5;
}

.case-content .result-lead {
  margin-bottom: 16px;
  color: #172033;
  font-size: 1.13rem;
  font-weight: 800;
  line-height: 1.55;
}

.case-content p,
.case-contact p {
  margin-bottom: 0;
}

.case-content ul {
  margin-bottom: 0;
  padding-left: 1.25rem;
}

.contribution-group + .contribution-group {
  margin-top: 30px;
}

.contribution-group h3 {
  margin-bottom: 10px;
  color: #27364d;
  font-size: 1.1rem;
}

.technology-details {
  margin-top: 2px;
  padding: 22px 0;
  border-top: 1px solid #d7dce3;
}

.technology-details summary {
  color: #174f89;
  font-weight: 800;
  cursor: pointer;
}

.technology-details summary:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 4px;
}

.technology-details p {
  max-width: 70ch;
  margin-top: 14px;
}

.next-case {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-top: 56px;
  padding: 28px 0;
  border-top: 1px solid #cfd6df;
}

.next-case span {
  color: #4b5563;
  font-size: 0.84rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.next-case a {
  font-size: 1.22rem;
}

.case-content li + li {
  margin-top: 12px;
}

.case-contact {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
  gap: 48px;
  margin-top: 24px;
  padding: 42px;
  border-radius: 12px;
  background: #e9eef5;
}

.case-contact > div {
  max-width: 680px;
}

.contact-links {
  display: flex;
  min-width: 190px;
  align-items: flex-start;
  flex-direction: column;
  gap: 14px;
}

@media (max-width: 760px) {
  .case-shell {
    width: min(100% - 32px, 1080px);
    padding-top: 24px;
  }

  .case-hero {
    padding: 40px 0 42px;
  }

  .case-hero-grid,
  .case-layout,
  .case-contact {
    grid-template-columns: 1fr;
  }

  .case-hero-grid {
    gap: 28px;
  }

  .case-overview {
    position: static;
  }

  .case-overview nav {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px 20px;
  }

  .case-contact {
    gap: 30px;
    padding: 32px;
  }

  .contact-links {
    min-width: 0;
    flex-direction: row;
    flex-wrap: wrap;
  }
}

@media (max-width: 480px) {
  .case-meta {
    line-height: 1.45;
  }

  .next-case {
    align-items: flex-start;
    flex-direction: column;
  }

  .case-contact {
    margin-inline: -16px;
    padding: 32px 20px;
    border-radius: 0;
  }

  .contact-links {
    align-items: stretch;
    flex-direction: column;
  }

  .contact-links a {
    min-height: 44px;
  }
}
</style>
