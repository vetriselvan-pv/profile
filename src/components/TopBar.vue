<script setup lang="ts">
// Cyber TopBar component
</script>

<template>
  <header class="top-bar">
    <div class="container flex justify-between items-center">
      <div class="brand font-mono font-bold text-accent">KINETIC_SYNTAX</div>
      
      <nav class="nav-links font-mono">
        <a href="#about" class="nav-link">ABOUT</a>
        <a href="#skills" class="nav-link active">SKILLS</a>
        <a href="#projects" class="nav-link">PROJECTS</a>
        <a href="#blogs" class="nav-link">BLOGS</a>
        <a href="#contact" class="nav-link">CONTACT</a>
      </nav>
      
      <div class="actions flex items-center">
        <div class="icons flex gap-4 text-secondary mr-6">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        </div>
        <a href="#" class="btn-resume font-mono font-bold">RESUME</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.top-bar {
  display: flex;
  align-items: center;
  height: 80px;
  background-color: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 100;
}

.brand {
  letter-spacing: 1px;
  font-size: 14px;
}

.nav-links {
  display: flex;
  gap: var(--spacing-xl);
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 1px;
  transition: color var(--transition-fast);
  position: relative;
  padding-bottom: 4px;
}

.nav-link:hover, .nav-link.active {
  color: var(--text-primary);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--accent-cyan);
}

.mr-6 { margin-right: var(--spacing-lg); }

.btn-resume {
  background-color: var(--accent-cyan);
  color: var(--bg-primary);
  padding: 8px 20px;
  text-decoration: none;
  font-size: 12px;
  letter-spacing: 1px;
  transition: background-color var(--transition-fast);
}

.btn-resume:hover {
  background-color: #3bcf72;
}

@media (max-width: 900px) {
  .nav-links, .icons { display: none; }
}
</style>
