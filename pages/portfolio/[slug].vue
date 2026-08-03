<script setup lang="ts">
import { useAtsHelpers } from "../../composables/atsHelpers";
import {
  getPortfolioProject,
  portfolioSiteUrl,
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
          <p class="eyebrow">{{ project.category }}</p>
          <h1>{{ project.name }}</h1>
          <p class="case-meta">
            {{ project.role }} <span aria-hidden="true">·</span>
            {{ project.dates }}
          </p>
          <p class="case-intro">{{ project.summary }}</p>

          <a
            v-if="project.externalUrl"
            class="primary-link"
            :href="project.externalUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ project.externalLabel }}
          </a>
        </header>

        <div class="case-layout">
          <aside class="case-overview" aria-label="Case study overview">
            <dl>
              <div>
                <dt>Role</dt>
                <dd>{{ project.role }}</dd>
              </div>
              <div>
                <dt>Timeline</dt>
                <dd>{{ project.dates }}</dd>
              </div>
              <div>
                <dt>Technologies</dt>
                <dd>{{ project.technologies.join(", ") }}</dd>
              </div>
            </dl>
          </aside>

          <div class="case-content">
            <section aria-labelledby="problem-title">
              <p class="section-number">01</p>
              <h2 id="problem-title">The problem</h2>
              <p>{{ project.problem }}</p>
            </section>

            <section aria-labelledby="contribution-title">
              <p class="section-number">02</p>
              <h2 id="contribution-title">My contribution</h2>
              <ul>
                <li v-for="contribution in project.contributions" :key="contribution">
                  {{ contribution }}
                </li>
              </ul>
            </section>

            <section aria-labelledby="challenge-title">
              <p class="section-number">03</p>
              <h2 id="challenge-title">Engineering challenge</h2>
              <p>{{ project.engineeringChallenge }}</p>
            </section>

            <section aria-labelledby="decisions-title">
              <p class="section-number">04</p>
              <h2 id="decisions-title">Decisions and trade-offs</h2>
              <ul>
                <li v-for="decision in project.decisions" :key="decision">
                  {{ decision }}
                </li>
              </ul>
            </section>

            <section aria-labelledby="result-title">
              <p class="section-number">05</p>
              <h2 id="result-title">{{ project.resultTitle }}</h2>
              <p>{{ project.result }}</p>
            </section>

            <section v-if="project.lessons" aria-labelledby="lessons-title">
              <p class="section-number">06</p>
              <h2 id="lessons-title">What I learned and would change</h2>
              <p>{{ project.lessons }}</p>
            </section>
          </div>
        </div>
      </article>

      <section class="case-contact" aria-labelledby="case-contact-title">
        <div>
          <p class="eyebrow">Work with me</p>
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
  max-width: 900px;
  padding: 84px 0 72px;
}

.eyebrow,
.section-number {
  margin: 0 0 12px;
  color: #1d4ed8;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1,
h2,
p,
ul,
dl,
dd {
  margin-top: 0;
}

h1 {
  margin-bottom: 14px;
  color: #101827;
  font-size: clamp(3.6rem, 10vw, 7.5rem);
  font-weight: 900;
  line-height: 0.92;
  letter-spacing: -0.06em;
}

.case-meta {
  margin-bottom: 28px;
  color: #374151;
  font-size: 1.05rem;
  font-weight: 800;
}

.case-intro {
  max-width: 820px;
  margin-bottom: 28px;
  color: #27364d;
  font-size: clamp(1.25rem, 2.7vw, 1.75rem);
  line-height: 1.5;
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
  grid-template-columns: 240px minmax(0, 1fr);
  align-items: start;
  gap: clamp(48px, 8vw, 100px);
  padding-top: 52px;
  border-top: 1px solid #cfd6df;
}

.case-overview {
  position: sticky;
  top: 24px;
}

.case-overview dl,
.case-overview dd {
  margin-bottom: 0;
}

.case-overview dl > div {
  padding: 0 0 22px;
}

.case-overview dl > div + div {
  padding-top: 22px;
  border-top: 1px solid #d7dce3;
}

.case-overview dt {
  margin-bottom: 7px;
  color: #1d4ed8;
  font-size: 0.74rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.case-overview dd {
  color: #374151;
  font-size: 0.93rem;
  line-height: 1.6;
}

.case-content section {
  padding-bottom: 56px;
}

.case-content section + section {
  padding-top: 56px;
  border-top: 1px solid #d7dce3;
}

.case-content h2,
.case-contact h2 {
  margin-bottom: 18px;
  color: #101827;
  font-size: clamp(1.8rem, 3.7vw, 2.8rem);
  line-height: 1.1;
  letter-spacing: -0.035em;
}

.case-content p:not(.section-number),
.case-content li,
.case-contact p {
  color: #374151;
  font-size: 1.05rem;
  line-height: 1.75;
}

.case-content p,
.case-contact p {
  margin-bottom: 0;
}

.case-content ul {
  margin-bottom: 0;
  padding-left: 1.25rem;
}

.case-content li + li {
  margin-top: 12px;
}

.case-contact {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
  gap: 48px;
  margin-top: 48px;
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
    padding: 60px 0 52px;
  }

  .case-layout,
  .case-contact {
    grid-template-columns: 1fr;
  }

  .case-overview {
    position: static;
  }

  .case-overview dl {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  .case-overview dl > div,
  .case-overview dl > div + div {
    padding: 0;
    border-top: 0;
  }

  .case-overview dl > div:last-child {
    grid-column: 1 / -1;
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
  .case-overview dl {
    grid-template-columns: 1fr;
  }

  .case-overview dl > div:last-child {
    grid-column: auto;
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
