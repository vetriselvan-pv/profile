<script setup lang="ts">
// Cyber Footer Section
</script>

<template>
  <footer class="footer">
    <div class="container flex flex-col md:flex-row justify-between items-center py-8">
      
      <div class="brand font-mono font-bold text-accent mb-4 md:mb-0">
        KINETIC_SYNTAX
      </div>
      
      <div class="copyright font-mono text-muted text-xs text-center mb-4 md:mb-0">
        © 2024 Kinetic Syntax // Built for the Sophisticated Engineer
      </div>
      
      <div class="social-links font-mono text-xs flex gap-6">
        <a href="https://github.com/vetriselvan-pv" target="_blank" class="hover-text-primary">Github</a>
        <a href="https://linkedin.com/in/vetriselvan-panneerselvam" target="_blank" class="hover-text-primary">LinkedIn</a>
        <a href="#" class="hover-text-primary">RSS</a>
      </div>
      
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border-color);
  background-color: var(--bg-primary);
}

.py-8 { padding-top: 32px; padding-bottom: 32px; }
.mb-4 { margin-bottom: 16px; }
.gap-6 { gap: 24px; }

@media (min-width: 768px) {
  .md\:flex-row { flex-direction: row; }
  .md\:mb-0 { margin-bottom: 0; }
}

.hover-text-primary {
  color: var(--text-muted);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.hover-text-primary:hover {
  color: var(--text-primary);
}
</style>
