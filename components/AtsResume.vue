<script setup lang="ts">
import { useAtsHelpers } from "../composables/atsHelpers";

const {
  summary,
  phoneNumber,
  address,
  email,
  name,
  position,
  skills,
  educationList,
  experienceList,
} = useAtsHelpers();

// Organized skills by category for better customization per job application
const skillCategories = [
  {
    name: "Technologies & Frameworks",
    skills: ["React.js", "Vue.js", "Node.js", "Express.js", "Laravel", "PHP", "TypeScript", "JavaScript", "MongoDB", "MySQL", "GraphQL", "Redux", "Vuex", "TailwindCSS", "Bootstrap"]
  },
  {
    name: "Infrastructure & DevOps",
    skills: ["Docker", "Docker Compose", "AWS", "AWS EC2", "AWS S3", "Jenkins", "GitHub Actions", "CircleCI", "Nginx", "Git", "GitHub"]
  },
  {
    name: "Architecture & Methodology",
    skills: ["Full Stack Development", "RESTful API Design", "Microservices", "System Architecture", "Database Optimization", "API Gateway", "Redis"]
  },
  {
    name: "Testing & Quality",
    skills: ["Jest", "Mocha", "Cypress", "Unit Testing", "Integration Testing", "Test-Driven Development", "Code Quality Tools"]
  },
  {
    name: "Leadership & Technical Practices", 
    skills: ["Technical Leadership", "Agile", "Scrum", "Code Review", "Performance Optimization", "Security Implementation", "CI/CD Pipeline Design"]
  },
  {
    name: "Professional Skills",
    skills: ["Problem Solving", "Team Collaboration", "Communication", "Critical Thinking", "Mentoring", "Adaptability"]
  }
];
</script>

<template>
  <v-container class="pa-0" style="max-width:900px;margin:auto;">
    <!-- Header -->
    <div class="text-center mt-8">
      <h1 class="font-weight-bold" style="font-size:2.5rem;">{{ name }}</h1>
      <h3 class="text-subtitle-1 text-grey-darken-1 font-weight-regular mb-3">{{ position }}</h3>
      <div class="mt-2 mb-4" style="font-size:1.05rem; max-width:800px; margin:auto;">
        {{ summary }}
      </div>
      
      <!-- Professional Contact Information -->
      <div class="d-flex justify-center align-center flex-wrap mb-5" style="gap:32px; border-top:1px solid #e0e0e0; border-bottom:1px solid #e0e0e0; padding:12px 0;">
        <div class="d-flex align-center">
            <div>
            <div class="text-caption text-grey-darken-2">Email</div>
            <a :href="`mailto:${email}`" class="text-decoration-none">{{ email }}</a>
          </div>
        </div>
        
        <div class="d-flex align-center">
            <div>
            <div class="text-caption text-grey-darken-2">Phone</div>
            <a :href="`tel:${phoneNumber}`" class="text-decoration-none">{{ phoneNumber }}</a>
          </div>
        </div>
        
        <div class="d-flex align-center">
            <div>
            <div class="text-caption text-grey-darken-2">Location</div>
            <span>{{ address }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Work Experience -->
    <SectionTitle title="WORK EXPERIENCE" />
    <div v-for="exp in experienceList" :key="exp.company" class="mb-4">
      <div class="d-flex justify-space-between align-center">
        <div>
          <div class="d-flex align-center">
            <span class="font-weight-bold" style="font-size:1.1rem;">{{ exp.company }}</span>
            <a v-if="exp.website" :href="exp.website" target="_blank" class="ml-2" style="text-decoration:none;">
              <v-icon color="primary" size="small">mdi-web</v-icon>
            </a>
          </div>
          <div class="font-italic" style="font-size:1rem;">{{ exp.position }}</div>
        </div>
        <div class="text-right" style="font-size:0.95rem;">{{ exp.duration }}</div>
      </div>
      <ul class="mt-1 mb-1" style="padding-left:1.2em;">
        <li v-for="task in exp.tasks" :key="task" style="font-size:0.98rem;">{{ task }}</li>
      </ul>
    </div>

    <!-- Education -->
    <SectionTitle title="EDUCATION" />
    <div v-for="edu in educationList" :key="edu.title" class="mb-2">
      <div class="d-flex justify-space-between align-center">
        <div>
          <span class="font-weight-bold">{{ edu.title }}</span>
          <span class="ml-2">{{ edu.subtitle }}</span>
        </div>
        <!-- Add date if available -->
      </div>
    </div>

    <!-- Skills -->
    <SectionTitle title="SKILLS" />
    <div class="mb-4">
      <div v-for="category in skillCategories" :key="category.name" class="mb-2">
        <div class="font-weight-medium text-grey-darken-2" style="font-size:0.95rem;">{{ category.name }}:</div>
        <div style="font-size:1rem;">
          <span v-for="(skill, i) in category.skills" :key="skill">
            {{ skill }}<span v-if="i < category.skills.length - 1">, </span>
          </span>
        </div>
      </div>
    </div>

    <!-- Add Projects, Certificates, Awards as needed -->
  </v-container>
</template>

<style scoped>
@media print {
  .v-container {
    padding: 0 !important;
  }
  
  h1 {
    font-size: 24pt !important;
  }
  
  h3 {
    font-size: 14pt !important;
  }
  
  .text-caption {
    font-size: 6pt !important;
  }
}
</style> 