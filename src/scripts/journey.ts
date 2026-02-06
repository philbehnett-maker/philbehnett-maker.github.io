/**
 * journey.ts — Main GSAP orchestrator for the scroll journey homepage.
 *
 * Drives:
 * - Moose flight along coordinate waypoints (horizontal sweeps tied to scroll)
 * - Parallax layer offsets (fixed end-values, not dynamic functions)
 * - Content panel scroll-triggered reveals
 * - Moose animation state changes per section
 * - Pinned sections (What We Believe, What We Do)
 * - Nav transparency transition
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { initParticles, updateParticleOrigin, destroyParticles } from './particles';
import { initCursor, destroyCursor } from './cursor';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

let ctx: gsap.Context | null = null;

export function initJourney() {
  destroyJourney();

  const scrollContainer = document.getElementById('journey-container');
  if (!scrollContainer) {
    initLegacyAnimations();
    return;
  }

  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      setupParallax(isMobile);
      setupMooseFlight(isMobile, vw, vh);
      setupContentReveals(isMobile);
      if (!isMobile) setupPinnedSections();
      setupMooseStates();
      setupNavTransparency();
      if (!isMobile) initParticles();
      if (!isMobile) initCursor();
    }, scrollContainer);
  });

  mm.add('(prefers-reduced-motion: reduce)', () => {
    document.querySelectorAll<HTMLElement>('.content-panel').forEach((el) => {
      el.classList.add('is-visible');
    });
  });
}

// ── Parallax: fixed end-values, not dynamic functions ──
function setupParallax(isMobile: boolean) {
  const trigger = '#journey-container';

  const layers = isMobile
    ? [
        { id: 'layer-mountains', yEnd: -40 },
        { id: 'layer-foreground', yEnd: -100 },
      ]
    : [
        { id: 'layer-mountains', yEnd: -80 },
        { id: 'layer-forest', yEnd: -180 },
        { id: 'layer-trees', yEnd: -320 },
        { id: 'layer-foreground', yEnd: -450 },
      ];

  layers.forEach(({ id, yEnd }) => {
    const el = document.getElementById(id);
    if (!el) return;

    gsap.fromTo(
      el,
      { y: 0 },
      {
        y: yEnd,
        ease: 'none',
        scrollTrigger: {
          trigger,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      }
    );
  });
}

// ── Moose: coordinate waypoints, scale (not width/height), xPercent centering ──
function setupMooseFlight(isMobile: boolean, vw: number, vh: number) {
  const moose = document.getElementById('journey-moose');
  if (!moose) return;

  // Use GSAP for centering so it doesn't conflict with motionPath transforms
  gsap.set(moose, { xPercent: -50, yPercent: -50 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#journey-container',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3,
      onUpdate: () => {
        const rect = moose.getBoundingClientRect();
        updateParticleOrigin(
          rect.left + rect.width / 2,
          rect.top + rect.height / 2
        );
      },
    },
  });

  // Phase 1 (0 → 11%): Hero — Moose stays center, large, greeting
  // Nothing to animate — it's already there.

  // Phase 2 (11% → 17%): Shrink via scale (no layout thrash)
  const targetScale = isMobile ? 0.375 : 0.5; // 160 * 0.5 = 80px, 160 * 0.375 = 60px
  tl.to(moose, { scale: targetScale, duration: 0.06, ease: 'power2.inOut' }, 0.11);

  // Phase 3 (17% → 100%): Fly along curved waypoints
  const waypoints = isMobile
    ? [
        { x: 0, y: 0 },
        { x: vw * 0.08, y: -vh * 0.02 },
        { x: -vw * 0.06, y: vh * 0.02 },
        { x: vw * 0.05, y: -vh * 0.01 },
        { x: -vw * 0.07, y: vh * 0.01 },
        { x: vw * 0.04, y: vh * 0.03 },
        { x: -vw * 0.05, y: 0 },
        { x: 0, y: -vh * 0.02 },
      ]
    : [
        { x: 0, y: 0 },                        // start center
        { x: vw * 0.25, y: -vh * 0.08 },       // sweep right → Who We Are
        { x: vw * 0.12, y: vh * 0.06 },        // loop right → Believe
        { x: -vw * 0.12, y: -vh * 0.06 },      // cross center → Believe
        { x: -vw * 0.28, y: vh * 0.04 },       // sweep left → How We Work
        { x: -vw * 0.08, y: -vh * 0.07 },      // weave up → What We Do
        { x: vw * 0.2, y: vh * 0.05 },         // weave right → What We Do
        { x: vw * 0.18, y: vh * 0.1 },         // land → Projects
        { x: -vw * 0.22, y: -vh * 0.02 },      // hover left → Founder
        { x: 0, y: -vh * 0.06 },               // return center → Get Involved
      ];

  tl.to(
    moose,
    {
      motionPath: {
        path: waypoints,
        curviness: 1.25,
        autoRotate: false,
      },
      duration: 0.83,
      ease: 'none',
    },
    0.17
  );
}

// ── Content panel reveals ──
function setupContentReveals(isMobile: boolean) {
  const panels = document.querySelectorAll<HTMLElement>('.content-panel');

  panels.forEach((panel) => {
    const isHero = panel.classList.contains('content-panel--hero');

    if (isHero) {
      panel.classList.add('is-visible');
      gsap.to(panel, {
        opacity: 0,
        scale: 0.95,
        scrollTrigger: {
          trigger: panel,
          start: '70% top',
          end: 'bottom top',
          scrub: true,
        },
      });
      return;
    }

    // Fade-up reveal for non-hero panels
    gsap.to(panel, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: panel,
        start: isMobile ? 'top 90%' : 'top 80%',
        toggleActions: 'play none none none',
        onEnter: () => panel.classList.add('is-visible'),
      },
    });

    // Stagger children
    panel.querySelectorAll('[data-animate="stagger"]').forEach((container) => {
      gsap.from(container.children, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Char-stagger headings
    panel.querySelectorAll<HTMLElement>('[data-animate="char-stagger"]').forEach((el) => {
      const text = el.textContent || '';
      el.innerHTML = '';
      text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.style.display = 'inline-block';
        span.textContent = char === ' ' ? '\u00A0' : char;
        el.appendChild(span);
      });
      gsap.from(el.children, {
        y: 30,
        opacity: 0,
        duration: 0.4,
        stagger: 0.02,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      });
    });

    // Scale-up reveals
    panel.querySelectorAll<HTMLElement>('[data-animate="scale-up"]').forEach((el) => {
      gsap.from(el, {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      });
    });

    // Slide left/right
    panel.querySelectorAll<HTMLElement>('[data-animate="slide-left"]').forEach((el) => {
      gsap.from(el, {
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      });
    });
    panel.querySelectorAll<HTMLElement>('[data-animate="slide-right"]').forEach((el) => {
      gsap.from(el, {
        x: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      });
    });

    // Fade-up
    panel.querySelectorAll<HTMLElement>('[data-animate="fade-up"]').forEach((el) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      });
    });
  });

  // Gold divider draw
  gsap.utils.toArray<HTMLElement>('.gold-divider').forEach((el) => {
    gsap.from(el, {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
    });
  });
}

// ── Pinned sections (desktop only) ──
function setupPinnedSections() {
  const believeSection = document.getElementById('believe-section');
  const believeCards = believeSection?.querySelectorAll('.believe-card');
  if (believeSection && believeCards && believeCards.length > 0) {
    ScrollTrigger.create({
      trigger: believeSection,
      start: 'top top',
      end: `+=${believeCards.length * 100}%`,
      pin: true,
      pinType: 'transform',
      scrub: 1,
    });
    believeCards.forEach((card, i) => {
      gsap.from(card, {
        x: i % 2 === 0 ? -100 : 100,
        opacity: 0,
        scale: 0.9,
        scrollTrigger: {
          trigger: believeSection,
          start: `${(i / believeCards.length) * 100}% top`,
          end: `${((i + 1) / believeCards.length) * 100}% top`,
          scrub: 1,
        },
      });
    });
  }

  const doSection = document.getElementById('do-section');
  const doCards = doSection?.querySelectorAll('.do-card');
  if (doSection && doCards && doCards.length > 0) {
    ScrollTrigger.create({
      trigger: doSection,
      start: 'top top',
      end: `+=${doCards.length * 80}%`,
      pin: true,
      pinType: 'transform',
      scrub: 1,
    });
    doCards.forEach((card, i) => {
      const directions = [
        { x: -80, rotation: -5 },
        { y: 60, rotation: 3 },
        { x: 80, rotation: 5 },
      ];
      const dir = directions[i % 3];
      gsap.from(card, {
        ...dir,
        opacity: 0,
        scale: 0.85,
        scrollTrigger: {
          trigger: doSection,
          start: `${(i / doCards.length) * 100}% top`,
          end: `${((i + 1) / doCards.length) * 100}% top`,
          scrub: 1,
        },
      });
    });
  }
}

// ── Moose state changes per section ──
function setupMooseStates() {
  const moose = document.getElementById('journey-moose');
  if (!moose) return;
  const svg = moose.querySelector('.mf-svg');
  if (!svg) return;

  const stateMap: Array<{ id: string; state: string }> = [
    { id: 'hero', state: 'greeting' },
    { id: 'who-we-are', state: 'idle' },
    { id: 'believe-section', state: 'thinking' },
    { id: 'how-we-work', state: 'talking' },
    { id: 'do-section', state: 'idle' },
    { id: 'projects', state: 'success' },
    { id: 'founder', state: 'idle' },
    { id: 'get-involved', state: 'greeting' },
  ];

  stateMap.forEach(({ id, state }) => {
    const section = document.getElementById(id);
    if (!section) return;
    ScrollTrigger.create({
      trigger: section,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => { svg.className = `mf-svg mf-${state}`; },
      onEnterBack: () => { svg.className = `mf-svg mf-${state}`; },
    });
  });

  // Nav moose mirrors the state
  const navSvg = document.querySelector('#nav-moose .mf-svg');
  if (navSvg) {
    stateMap.forEach(({ id, state }) => {
      const section = document.getElementById(id);
      if (!section) return;
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => { navSvg.className = `mf-svg mf-${state}`; },
        onLeaveBack: () => { navSvg.className = 'mf-svg mf-idle'; },
      });
    });
  }
}

// ── Nav: transparent in hero, glass after ──
function setupNavTransparency() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  nav.classList.add('nav-transparent');
  ScrollTrigger.create({
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    onLeave: () => nav.classList.add('nav-scrolled'),
    onEnterBack: () => nav.classList.remove('nav-scrolled'),
  });
}

// ── Legacy animations for sub-pages ──
function initLegacyAnimations() {
  ScrollTrigger.getAll().forEach((t) => t.kill());
  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((el) => {
      gsap.from(el, {
        y: 40, opacity: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      });
    });
    gsap.utils.toArray<HTMLElement>('[data-animate="stagger"]').forEach((container) => {
      gsap.from(container.children, {
        y: 30, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: container, start: 'top 80%', toggleActions: 'play none none none' },
      });
    });
    gsap.utils.toArray<HTMLElement>('[data-animate="scale-up"]').forEach((el) => {
      gsap.from(el, {
        scale: 0.9, opacity: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      });
    });
    gsap.utils.toArray<HTMLElement>('[data-animate="slide-left"]').forEach((el) => {
      gsap.from(el, {
        x: -60, opacity: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      });
    });
    gsap.utils.toArray<HTMLElement>('[data-animate="slide-right"]').forEach((el) => {
      gsap.from(el, {
        x: 60, opacity: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      });
    });
    gsap.utils.toArray<HTMLElement>('[data-animate="char-stagger"]').forEach((el) => {
      const text = el.textContent || '';
      el.innerHTML = '';
      text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.style.display = 'inline-block';
        span.textContent = char === ' ' ? '\u00A0' : char;
        el.appendChild(span);
      });
      gsap.from(el.children, {
        y: 30, opacity: 0, duration: 0.4, stagger: 0.02, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      });
    });
    gsap.utils.toArray<HTMLElement>('.gold-divider').forEach((el) => {
      gsap.from(el, {
        scaleX: 0, transformOrigin: 'left center', duration: 1, ease: 'power2.inOut',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      });
    });
    const navMooseSvg = document.querySelector('#nav-moose .mf-svg');
    if (navMooseSvg) {
      const sections = ['who-we-are', 'believe-section', 'how-we-work', 'do-section', 'projects', 'founder', 'get-involved'];
      const states = ['thinking', 'idle', 'talking', 'idle', 'greeting', 'idle', 'greeting'];
      sections.forEach((id, i) => {
        const section = document.getElementById(id);
        if (section) {
          ScrollTrigger.create({
            trigger: section, start: 'top center', end: 'bottom center',
            onEnter: () => { navMooseSvg.className = `mf-svg mf-${states[i]}`; },
            onLeaveBack: () => { navMooseSvg.className = 'mf-svg mf-idle'; },
          });
        }
      });
    }
  });

  mm.add('(prefers-reduced-motion: reduce)', () => {
    gsap.utils.toArray<HTMLElement>('[data-animate]').forEach((el) => {
      gsap.set(el, { opacity: 1, y: 0, x: 0, scale: 1, rotation: 0 });
    });
  });
}

export function destroyJourney() {
  if (ctx) {
    ctx.revert();
    ctx = null;
  }
  ScrollTrigger.getAll().forEach((t) => t.kill());
  destroyParticles();
  destroyCursor();
}
