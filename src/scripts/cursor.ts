/**
 * cursor.ts — Mouse-reactive parallax for near trees.
 *
 * Desktop only. Shifts the near-tree SVGs subtly based on mouse position
 * to create a depth effect. Uses requestAnimationFrame for smooth updates.
 */

let active = false;
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;
let frameId = 0;

const STRENGTH = 15; // max pixel shift
const EASE = 0.08; // lerp factor

let treeLeft: HTMLElement | null = null;
let treeRight: HTMLElement | null = null;
let foreground: HTMLElement | null = null;

function onMouseMove(e: MouseEvent) {
  // Normalize mouse position to -1..1
  targetX = (e.clientX / window.innerWidth - 0.5) * 2;
  targetY = (e.clientY / window.innerHeight - 0.5) * 2;
}

function tick() {
  if (!active) return;

  // Lerp toward target
  currentX += (targetX - currentX) * EASE;
  currentY += (targetY - currentY) * EASE;

  // Apply transforms to near trees
  if (treeLeft) {
    const tx = currentX * STRENGTH * 0.7;
    const ty = currentY * STRENGTH * 0.3;
    treeLeft.style.transform = `translate(${tx}px, ${ty}px)`;
  }

  if (treeRight) {
    const tx = currentX * STRENGTH * -0.7;
    const ty = currentY * STRENGTH * 0.3;
    treeRight.style.transform = `translate(${tx}px, ${ty}px)`;
  }

  // Subtle foreground leaf shift
  if (foreground) {
    const tx = currentX * STRENGTH * 0.4;
    const ty = currentY * STRENGTH * 0.2;
    foreground.style.transform = `translate(${tx}px, ${ty}px)`;
  }

  frameId = requestAnimationFrame(tick);
}

export function initCursor() {
  if (window.innerWidth < 768) return;

  treeLeft = document.getElementById('near-tree-left');
  treeRight = document.getElementById('near-tree-right');
  foreground = document.getElementById('layer-foreground');

  if (!treeLeft && !treeRight) return;

  active = true;
  window.addEventListener('mousemove', onMouseMove, { passive: true });
  frameId = requestAnimationFrame(tick);
}

export function destroyCursor() {
  active = false;
  window.removeEventListener('mousemove', onMouseMove);
  if (frameId) {
    cancelAnimationFrame(frameId);
    frameId = 0;
  }
  treeLeft = null;
  treeRight = null;
  foreground = null;
}
