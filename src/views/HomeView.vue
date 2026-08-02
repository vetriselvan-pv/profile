<script setup lang="ts">
import TopBar from '@/components/TopBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import FooterSection from '@/components/FooterSection.vue'
// import AboutSection from '@/components/AboutSection.vue'
// import ExperienceSection from '@/components/ExperienceSection.vue'
// import BlogSection from '@/components/BlogSection.vue'
</script>

<template>
  <div class="cyber-app">
    <TopBar />
    <main>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
    <FooterSection />
  </div>
</template>

<style scoped>
.cyber-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>