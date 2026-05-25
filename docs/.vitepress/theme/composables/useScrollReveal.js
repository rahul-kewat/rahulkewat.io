import { onMounted, onBeforeUnmount } from 'vue';

/**
 * Reveal-on-scroll utility using IntersectionObserver.
 * Adds `.is-visible` to any element with the `.rk-reveal` class
 * once it enters the viewport. Honors prefers-reduced-motion.
 */
export function useScrollReveal(rootSelector = '.rk-modern-home') {
  let observer = null;

  const setup = () => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.querySelector(rootSelector) || document;
    const targets = root.querySelectorAll('.rk-reveal');

    if (prefersReducedMotion) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay');
            if (delay) {
              entry.target.style.transitionDelay = `${delay}ms`;
            }
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );

    targets.forEach((el) => observer.observe(el));
  };

  onMounted(() => {
    requestAnimationFrame(setup);
  });

  onBeforeUnmount(() => {
    if (observer) observer.disconnect();
  });
}
