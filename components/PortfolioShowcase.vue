<script setup lang="ts">
import { computed } from "vue";
import { useAtsHelpers } from "../composables/atsHelpers";

const {
  email,
  name,
  position,
  skills,
  certificationList,
  experienceList,
  linkedinUrl,
  githubUrl,
  resumeUrl,
} = useAtsHelpers();

const withBaseUrl = (path: string) => {
  const baseUrl = useRuntimeConfig().app.baseURL;

  return `${baseUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
};

const portfolioSummary =
  "I am a backend and full-stack software engineer with seven years of experience building practical, scalable software across marketplaces, enterprise tools, education systems, housing operations, and API-driven platforms. I have worked remotely with clients and teams in the UK, the US, Kenya, and Nigeria, and I bring a steady, driven approach to solving hard product and engineering problems.";

const projectDefinitions = [
  {
    match: "KadMap",
    title: "KadMap",
    image: "images/portfolio/kadmap.png",
    category: "Offline-first enterprise office platform",
    accent: "#2563eb",
  },
  {
    match: "Coamana",
    title: "Amana Market / Coamana",
    image: "images/portfolio/amana-market.png",
    category: "Marketplace and assisted trade platform",
    accent: "#0f766e",
  },
  {
    match: "New Avenue",
    title: "New Avenue Homes",
    image: "images/portfolio/newavenuehomes.png",
    category: "ADU management and operations platform",
    accent: "#7c3aed",
  },
  {
    match: "SchoolShell",
    title: "SchoolShell",
    image: "images/portfolio/schoolshell.png",
    category: "Education management system",
    accent: "#b45309",
  },
];

const monthOrder: Record<string, number> = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

const getStartTimestamp = (duration: string) => {
  const [startDate] = duration.split(/\s+[–-]\s+/);
  const [month, year] = startDate.split(" ");

  return new Date(Number(year), monthOrder[month] ?? 0).getTime();
};

const portfolioProjects = computed(() => {
  return projectDefinitions
    .map((project) => {
      const experience = experienceList.find((item) =>
        item.company.includes(project.match)
      );

      if (!experience) {
        return null;
      }

      return {
        ...project,
        image: withBaseUrl(project.image),
        role: experience.position,
        company: experience.company,
        duration: experience.duration,
        description: experience.description,
        website: experience.website,
        highlights: experience.tasks.slice(0, 4),
      };
    })
    .filter(Boolean)
    .sort((a, b) => getStartTimestamp(b.duration) - getStartTimestamp(a.duration));
});

const featuredSkills = computed(() => {
  const preferredSkills = [
    "PHP",
    "Laravel",
    "Node.js",
    "TypeScript",
    "REST APIs",
    "Vue 3",
    "React",
    "Redis",
  ];

  return preferredSkills.filter((skill) => skills.includes(skill));
});

const portfolioCertification = computed(() => {
  const certification = certificationList[0];

  if (!certification) {
    return null;
  }

  return {
    ...certification,
    image: withBaseUrl(certification.image),
  };
});
</script>

<template>
  <div class="portfolio-page">
    <v-container class="portfolio-shell">
      <header class="portfolio-hero">
        <div class="hero-copy">
          <div>
            <h1>{{ name }}</h1>
            <p class="position">{{ position }}</p>
          </div>

          <div class="hero-actions">
            <v-btn
              color="#111827"
              variant="flat"
              rounded="0"
              :href="`mailto:${email}`"
            >
              Contact
            </v-btn>
            <v-btn
              color="#111827"
              variant="flat"
              rounded="0"
              :href="resumeUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </v-btn>
            <v-btn
              variant="outlined"
              rounded="0"
              :href="githubUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-icon start icon="mdi-github" />
              GitHub
            </v-btn>
            <v-btn
              variant="outlined"
              rounded="0"
              :href="linkedinUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-icon start icon="mdi-linkedin" />
              LinkedIn
            </v-btn>
          </div>
        </div>

        <v-img
          :src="withBaseUrl('images/headshot.jpg')"
          :alt="`${name} profile photo`"
          class="profile-image"
          cover
        />
      </header>

      <p class="summary">
        {{ portfolioSummary }}
      </p>

      <section class="skills-row" aria-label="Featured skills">
        <v-chip
          v-for="skill in featuredSkills"
          :key="skill"
          size="small"
          variant="outlined"
          class="skill-chip"
        >
          {{ skill }}
        </v-chip>
      </section>

      <section
        v-if="portfolioCertification"
        class="certification-section"
        aria-labelledby="certification-title"
      >
        <div class="certification-copy">
          <p class="certification-kicker">Certification</p>
          <h2 id="certification-title">{{ portfolioCertification.title }}</h2>
          <p class="certification-meta">
            {{ portfolioCertification.issuer }} / {{ portfolioCertification.date }}
          </p>
          <p class="certification-description">
            {{ portfolioCertification.description }}
          </p>
          <p class="certification-description">
            {{ portfolioCertification.details }}
          </p>

          <div class="certification-topics" aria-label="Assessment topics">
            <v-chip
              v-for="topic in portfolioCertification.topics"
              :key="topic"
              size="small"
              variant="outlined"
            >
              {{ topic }}
            </v-chip>
          </div>
        </div>

        <v-img
          :src="portfolioCertification.image"
          alt="micro1 certificate awarded to Justice Abutu"
          class="certification-image"
        />
      </section>

      <v-divider class="section-divider" />

      <section class="work-intro" aria-labelledby="previous-work-title">
        <h2 id="previous-work-title">Some of my previous works</h2>
        <p>
          A selection of products and platforms I have helped build across
          different teams, industries, and markets.
        </p>
      </section>

      <section class="projects-grid" aria-label="Portfolio projects">
        <article
          v-for="project in portfolioProjects"
          :key="project.title"
          class="project-card"
        >
          <div
            class="project-accent"
            :style="{ backgroundColor: project.accent }"
          />

          <v-img
            :src="project.image"
            :alt="`${project.title} screenshot`"
            class="project-image"
            cover
            height="250"
          />

          <div class="project-content">
            <div class="project-kicker">
              <span>{{ project.category }}</span>
              <span>{{ project.duration }}</span>
            </div>

            <div class="project-heading">
              <h2>{{ project.title }}</h2>
              <a
                v-if="project.website"
                :href="project.website"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`Visit ${project.title}`"
              >
                <v-icon icon="mdi-open-in-new" />
              </a>
            </div>

            <p class="project-role">{{ project.role }}</p>
            <p class="project-description">{{ project.description }}</p>

            <ul class="project-highlights">
              <li v-for="highlight in project.highlights" :key="highlight">
                {{ highlight }}
              </li>
            </ul>
          </div>
        </article>
      </section>

      <footer class="portfolio-footer">
        <div>
          <p class="footer-title">Available for senior full stack roles</p>
          <p>
            Focused on scalable product engineering, reliable APIs, and teams
            that value strong execution.
          </p>
        </div>
        <v-btn color="#111827" variant="flat" rounded="0" :href="`mailto:${email}`">
          Start a conversation
        </v-btn>
      </footer>
    </v-container>
  </div>
</template>

<style scoped>
.portfolio-page {
  min-height: 100vh;
  background: #f6f6f3;
  color: #111827;
}

.portfolio-shell {
  max-width: 1160px;
  padding: 56px 24px;
}

.portfolio-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 220px;
  align-items: end;
  gap: 36px;
}

.hero-copy {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
}

h1 {
  margin: 0;
  font-size: clamp(2.25rem, 6vw, 5rem);
  font-weight: 900;
  line-height: 0.98;
  letter-spacing: 0;
}

.position {
  margin-top: 14px;
  color: #374151;
  font-size: clamp(1rem, 2vw, 1.25rem);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
}

.profile-image {
  width: 220px;
  height: 250px;
  border: 1px solid rgba(17, 24, 39, 0.12);
  border-radius: 8px;
  background: #e5e7eb;
}

.summary {
  max-width: 860px;
  margin: 38px 0 0;
  color: #374151;
  font-size: 1.08rem;
  line-height: 1.75;
}

.skills-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.skill-chip {
  background: #ffffff;
}

.certification-section {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(360px, 1.1fr);
  align-items: center;
  gap: 28px;
  margin-top: 40px;
  padding: 24px;
  border: 1px solid rgba(17, 24, 39, 0.12);
  border-radius: 8px;
  background: #ffffff;
}

.certification-kicker {
  margin: 0 0 10px;
  color: #6b7280;
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
}

.certification-copy h2 {
  margin: 0;
  font-size: clamp(1.45rem, 3vw, 2.15rem);
  font-weight: 900;
  line-height: 1.12;
  letter-spacing: 0;
}

.certification-meta {
  margin: 10px 0 0;
  color: #374151;
  font-weight: 800;
}

.certification-description {
  margin: 14px 0 0;
  color: #4b5563;
  line-height: 1.65;
}

.certification-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

.certification-image {
  width: 100%;
  aspect-ratio: 17 / 12;
  border: 1px solid rgba(17, 24, 39, 0.12);
  border-radius: 6px;
  background: #111827;
}

.certification-image :deep(.v-img__img) {
  object-fit: contain;
}

.section-divider {
  margin: 42px 0;
  border-color: rgba(17, 24, 39, 0.12);
}

.work-intro {
  max-width: 720px;
  margin-bottom: 24px;
}

.work-intro h2 {
  margin: 0;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: 0;
}

.work-intro p {
  margin: 10px 0 0;
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.6;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.project-card {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(17, 24, 39, 0.12);
  border-radius: 8px;
  background: #ffffff;
}

.project-accent {
  height: 5px;
}

.project-image {
  border-bottom: 1px solid rgba(17, 24, 39, 0.08);
  background: #e5e7eb;
}

.project-content {
  padding: 24px;
}

.project-kicker,
.project-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.project-kicker {
  color: #6b7280;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
}

.project-heading {
  margin-top: 12px;
}

.project-heading h2 {
  margin: 0;
  font-size: 1.45rem;
  line-height: 1.2;
}

.project-heading a {
  display: inline-flex;
  color: #111827;
  text-decoration: none;
}

.project-role {
  margin: 8px 0 0;
  color: #374151;
  font-weight: 700;
}

.project-description {
  margin: 14px 0 0;
  color: #4b5563;
  line-height: 1.65;
}

.project-highlights {
  display: grid;
  gap: 9px;
  margin: 18px 0 0;
  padding-left: 18px;
  color: #1f2937;
  line-height: 1.55;
}

.portfolio-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-top: 52px;
  padding-top: 28px;
  border-top: 1px solid rgba(17, 24, 39, 0.12);
  color: #4b5563;
}

.portfolio-footer p {
  margin: 0;
}

.footer-title {
  color: #111827;
  font-size: 1.15rem;
  font-weight: 800;
}

@media (max-width: 900px) {
  .portfolio-hero {
    grid-template-columns: 1fr;
  }

  .hero-copy,
  .portfolio-footer {
    align-items: flex-start;
    flex-direction: column;
  }

  .profile-image {
    order: -1;
    width: 176px;
    height: 200px;
  }

  .hero-actions {
    justify-content: flex-start;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .certification-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .portfolio-shell {
    padding: 36px 16px;
  }

  .hero-actions {
    width: 100%;
  }

  .hero-actions .v-btn,
  .portfolio-footer .v-btn {
    width: 100%;
  }

  .project-kicker,
  .project-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }

  .project-content {
    padding: 20px;
  }

  .certification-section {
    padding: 20px;
  }
}
</style>
