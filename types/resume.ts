export interface ResumeSkillCategory {
  name: string;
  skills: string[];
}

export interface ResumeExperience {
  position: string;
  employmentType?: string;
  company: string;
  location: string;
  website?: string;
  duration: string;
  description?: string;
  tasks: string[];
}

export interface ResumeProject {
  name: string;
  role: string;
  duration: string;
  website: string;
  description: string;
  tasks: string[];
}

export interface ResumeEducation {
  title: string;
  institution: string;
  location: string;
  duration: string;
}

export interface ResumeCertification {
  title: string;
  issuer: string;
  date: string;
  details: string;
}

export interface ResumeContent {
  summary: string;
  phoneNumber: string;
  phoneHref: string;
  address: string;
  availability: string;
  email: string;
  name: string;
  position: string;
  skillCategories: ResumeSkillCategory[];
  educationList: ResumeEducation[];
  certificationList: ResumeCertification[];
  experienceList: ResumeExperience[];
  independentProjectList: ResumeProject[];
  linkedinUrl: string;
  githubUrl: string;
  managedCoUrl: string;
}
