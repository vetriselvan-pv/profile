<script setup lang="ts">
// Cyber Hero Section
</script>

<template>
  <section id="hero" class="hero">
    <div class="container">
      <div class="hero-content flex flex-col md:flex-row items-center gap-12">
        
        <!-- Left: Image with corners -->
        <div class="hero-image-wrapper">
          <div class="corner top-left"></div>
          <div class="corner bottom-right"></div>
          
          <div class="image-container">
            <!-- Using a placeholder pattern for the cyber aesthetic -->
            <div class="image-placeholder"></div>
            <div class="id-badge font-mono">ID: 8842-VS</div>
          </div>
        </div>

        <!-- Right: Text Content -->
        <div class="hero-text">
          <div class="section-label">WHO_AM_I</div>
          <h1 class="text-4xl font-bold mb-6">
            Architecting<br />
            <span class="text-accent italic">Digital Intent.</span>
          </h1>
          
          <div class="data-block font-mono text-muted text-sm mb-8">
            {[DATA:DOCUMENT:DOCUMENT_1]}
          </div>

          <div class="info-grid font-mono text-xs mb-8">
            <div>
              <div class="text-muted mb-2">LOCATION</div>
              <div class="text-primary tracking-wide">CHENNAI // INDIA</div>
            </div>
            <div>
              <div class="text-muted mb-2">AVAILABILITY</div>
              <div class="text-accent tracking-wide">OPEN_TO_COLLAB</div>
            </div>
          </div>

          <div class="stats-row flex gap-8">
            <div class="stat">
              <div class="stat-num font-sans font-bold text-accent">07+</div>
              <div class="stat-label font-mono text-xs text-muted">YEARS EXP</div>
            </div>
            <div class="stat">
              <div class="stat-num font-sans font-bold text-accent">150</div>
              <div class="stat-label font-mono text-xs text-muted">COMMITS / WK</div>
            </div>
            <div class="stat">
              <div class="stat-num font-sans font-bold text-accent">20</div>
              <div class="stat-label font-mono text-xs text-muted">PROJECT SHIPS</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: var(--spacing-3xl);
  padding-bottom: var(--spacing-3xl);
  border-bottom: 1px solid var(--border-color);
}

.md\:flex-row { flex-direction: row; }
.gap-12 { gap: 48px; }
.mb-2 { margin-bottom: 8px; }
.mb-6 { margin-bottom: var(--spacing-lg); }
.mb-8 { margin-bottom: var(--spacing-xl); }
.italic { font-style: italic; }
.tracking-wide { letter-spacing: 1px; }
.gap-8 { gap: 32px; }

/* Image Styling */
.hero-image-wrapper {
  position: relative;
  width: 320px;
  height: 420px;
  flex-shrink: 0;
}

.corner {
  position: absolute;
  width: 40px;
  height: 40px;
  border-color: var(--accent-cyan);
  border-style: solid;
  z-index: 10;
}

.top-left {
  top: -10px;
  left: -10px;
  border-width: 2px 0 0 2px;
}

.bottom-right {
  bottom: -10px;
  right: -10px;
  border-width: 0 2px 2px 0;
}

.image-container {
  width: 100%;
  height: 100%;
  background-color: var(--bg-secondary);
  position: relative;
  border: 1px solid var(--border-color);
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
  background-size: cover;
}

/* Add a subtle scanline effect */
.image-placeholder::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  background-size: 100% 2px, 3px 100%;
  pointer-events: none;
}

.id-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: var(--border-color);
  color: var(--accent-cyan);
  padding: 4px 8px;
  font-size: 12px;
  z-index: 5;
}

/* Info Grid */
.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
}

/* Stats */
.stat-num {
  font-size: 32px;
  line-height: 1;
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  .hero-content { flex-direction: column; }
  .hero-text { order: -1; } /* Text above image on mobile */
}
</style>
