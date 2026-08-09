<template>
  <div class="rk-modern-home">
    <div class="rk-grid-pattern" aria-hidden="true"></div>

    <HeroSection />
    <StatsSection />
    <BentoGrid />
    <TravelSection />
    <ProjectShowcase />
    <TestimonialsMarquee />
    <TechStack />
    <CallToAction />
  </div>
</template>

<script setup>
import HeroSection from './HeroSection.vue';
import StatsSection from './StatsSection.vue';
import BentoGrid from './BentoGrid.vue';
import TravelSection from './TravelSection.vue';
import ProjectShowcase from './ProjectShowcase.vue';
import TestimonialsMarquee from './TestimonialsMarquee.vue';
import TechStack from './TechStack.vue';
import CallToAction from './CallToAction.vue';
import { useScrollReveal } from '../composables/useScrollReveal.js';

useScrollReveal('.rk-modern-home');
</script>
