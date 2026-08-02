<script setup lang="ts">
// Cyber Projects Section
const projects = [
  {
    id: 'SYS-01',
    name: 'FPX Library (Fintech Framework)',
    description: 'Configuration-driven full stack framework reducing development time by 40%.',
    tech: ['Angular', 'Node.js', 'Micro Frontends']
  },
  {
    id: 'SYS-02',
    name: 'Pulse – BaaS Platform',
    description: 'Banking-as-a-Service platform supporting API monetization and billing workflows.',
    tech: ['Java Spring Boot', 'REST APIs', 'Node.js']
  },
  {
    id: 'SYS-03',
    name: 'AnalogJS Ecosystem',
    description: 'Contributing Angular architecture patterns and developer tooling.',
    tech: ['Angular', 'Open Source'],
    link: '#'
  }
]
</script>

<template>
  <section id="projects" class="projects-section bg-secondary">
    <div class="container">
      <div class="section-label">SYSTEM_ARCHITECTURE</div>
      <h2 class="section-title">Project Ships</h2>
      
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-card window-card p-6">
          <div class="flex justify-between items-start mb-4">
            <div class="font-mono text-accent text-sm">{{ project.id }}</div>
            <a v-if="project.link" :href="project.link" class="text-muted hover-accent">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
          
          <h3 class="text-xl font-bold mb-2">{{ project.name }}</h3>
          <p class="text-muted text-sm mb-6">{{ project.description }}</p>
          
          <div class="tech-tags flex flex-wrap gap-2 mt-auto">
            <span v-for="tech in project.tech" :key="tech" class="tech-tag font-mono">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  background-color: rgba(17, 24, 39, 0.5); /* slightly lighter/transparent than primary bg */
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.project-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform var(--transition-fast), border-color var(--transition-fast);
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-cyan);
}

.p-6 { padding: 24px; }
.mb-2 { margin-bottom: 8px; }
.mb-4 { margin-bottom: 16px; }
.mb-6 { margin-bottom: 24px; }
.mt-auto { margin-top: auto; }
.gap-2 { gap: 8px; }

.hover-accent:hover { color: var(--accent-cyan); }

.tech-tag {
  font-size: 11px;
  color: var(--accent-blue);
  background-color: rgba(56, 189, 248, 0.1);
  padding: 4px 8px;
  border-radius: 4px;
}
</style>
