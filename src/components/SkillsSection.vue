<script setup lang="ts">
// Capability Matrix (Skills Section)
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <div class="section-label">TECH_STACK</div>
      <h2 class="section-title">Capability Matrix</h2>
      
      <div class="matrix-grid">
        
        <!-- Frontend Card -->
        <div class="window-card">
          <div class="window-header">
            <div class="window-dots">
              <div class="window-dot dot-r"></div>
              <div class="window-dot dot-y"></div>
              <div class="window-dot dot-g"></div>
            </div>
            <div class="window-title">frontend.json</div>
            <div class="window-icon ml-auto">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--accent-cyan)"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
            </div>
          </div>
          <div class="window-content">
            <div class="category-label font-mono font-bold mb-4">INTERFACE_ENGINEERING</div>
            <div class="tags-grid">
              <span class="tag">Angular</span>
              <span class="tag">React.js</span>
              <span class="tag">TypeScript</span>
              <span class="tag">TailwindCSS</span>
              <span class="tag">Next.js</span>
              <span class="tag">Vue.js</span>
              <span class="tag">Micro Frontends</span>
            </div>
          </div>
        </div>

        <!-- Backend Card -->
        <div class="window-card">
          <div class="window-header">
            <div class="window-dots">
              <div class="window-dot dot-r"></div>
              <div class="window-dot dot-y"></div>
              <div class="window-dot dot-g"></div>
            </div>
            <div class="window-title">backend.sys</div>
            <div class="window-icon ml-auto">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
          </div>
          <div class="window-content">
            <div class="category-label font-mono font-bold mb-4">DATA_PERSISTENCE</div>
            
            <div class="progress-item">
              <div class="flex justify-between font-mono text-sm mb-1">
                <span>Node.js / Express</span>
                <span class="text-muted">95%</span>
              </div>
              <div class="progress-bar"><div class="progress-fill" style="width: 95%"></div></div>
            </div>
            
            <div class="progress-item">
              <div class="flex justify-between font-mono text-sm mb-1">
                <span>Java Spring Boot</span>
                <span class="text-muted">88%</span>
              </div>
              <div class="progress-bar"><div class="progress-fill" style="width: 88%"></div></div>
            </div>
            
            <div class="progress-item">
              <div class="flex justify-between font-mono text-sm mb-1">
                <span>REST / GraphQL</span>
                <span class="text-muted">92%</span>
              </div>
              <div class="progress-bar"><div class="progress-fill" style="width: 92%"></div></div>
            </div>
            
            <div class="progress-item">
              <div class="flex justify-between font-mono text-sm mb-1">
                <span>PostgreSQL / MongoDB</span>
                <span class="text-muted">90%</span>
              </div>
              <div class="progress-bar"><div class="progress-fill" style="width: 90%"></div></div>
            </div>
          </div>
        </div>

        <!-- Deploy Card -->
        <div class="window-card">
          <div class="window-header">
            <div class="window-dots">
              <div class="window-dot dot-r"></div>
              <div class="window-dot dot-y"></div>
              <div class="window-dot dot-g"></div>
            </div>
            <div class="window-title">deploy.yml</div>
            <div class="window-icon ml-auto">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--dot-red)"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </div>
          </div>
          <div class="window-content">
            <div class="category-label font-mono font-bold mb-4">CI_CD_PIPELINES</div>
            <div class="check-grid font-mono text-sm">
              <div class="check-item"><span class="text-muted mr-2">✓</span> Docker</div>
              <div class="check-item"><span class="text-muted mr-2">✓</span> AWS</div>
              <div class="check-item"><span class="text-muted mr-2">✓</span> K8s</div>
              <div class="check-item"><span class="text-muted mr-2">✓</span> GitHub Actions</div>
              <div class="check-item"><span class="text-muted mr-2">✓</span> Jenkins</div>
              <div class="check-item"><span class="text-muted mr-2">✓</span> Nx Workspace</div>
            </div>
          </div>
        </div>

      </div>

      <!-- Developer Utilities -->
      <div class="utilities-block window-card mt-8">
        <div class="flex items-center gap-6 p-6">
          <div class="utility-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
          </div>
          <div>
            <div class="font-mono font-bold text-xs mb-2">DEVELOPER_UTILITIES</div>
            <div class="font-mono text-muted text-sm">
              Visual Studio Code &nbsp;&nbsp; Git / GitHub &nbsp;&nbsp; Postman &nbsp;&nbsp; Figma &nbsp;&nbsp; Zsh / OhMyZsh
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  position: relative;
}

.matrix-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--spacing-lg);
}

@media (min-width: 1024px) {
  .matrix-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.window-content {
  padding: var(--spacing-lg);
  flex: 1;
}

.ml-auto { margin-left: auto; }
.mb-1 { margin-bottom: 4px; }
.mb-2 { margin-bottom: 8px; }
.mb-4 { margin-bottom: 16px; }
.mr-2 { margin-right: 8px; }
.mt-8 { margin-top: var(--spacing-xl); }
.gap-6 { gap: 24px; }
.p-6 { padding: 24px; }

.category-label {
  font-size: 11px;
  letter-spacing: 1px;
}

/* Tags */
.tags-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background-color: var(--bg-primary);
  border: 1px solid var(--border-color);
  padding: 4px 12px;
  font-family: var(--font-family-mono);
  font-size: 12px;
  border-radius: 4px;
}

/* Progress Bars */
.progress-item {
  margin-bottom: 16px;
}

.progress-bar {
  height: 4px;
  background-color: var(--bg-primary);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: var(--accent-cyan);
}

/* Check Grid */
.check-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.check-item {
  display: flex;
  align-items: center;
}

/* Utilities Block */
.utilities-block {
  background-color: var(--bg-secondary);
}

.utility-icon {
  width: 48px;
  height: 48px;
  background-color: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  flex-shrink: 0;
}
</style>
