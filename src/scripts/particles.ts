/**
 * particles.ts — Canvas 2D gold particle trail system.
 *
 * Renders ~30-50 gold particles trailing behind the Moose as it flies.
 * Each particle fades and shrinks over its lifetime.
 * Desktop only — not initialized on mobile.
 */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  opacity: number;
}

let canvas: HTMLCanvasElement | null = null;
let ctxCanvas: CanvasRenderingContext2D | null = null;
let particles: Particle[] = [];
let originX = 0;
let originY = 0;
let animId = 0;
let lastSpawn = 0;
const SPAWN_INTERVAL = 60; // ms between spawns
const MAX_PARTICLES = 50;

export function initParticles() {
  canvas = document.getElementById('particle-canvas') as HTMLCanvasElement;
  if (!canvas) return;

  ctxCanvas = canvas.getContext('2d');
  if (!ctxCanvas) return;

  resize();
  window.addEventListener('resize', resize);
  animId = requestAnimationFrame(loop);
}

export function updateParticleOrigin(x: number, y: number) {
  originX = x;
  originY = y;
}

export function destroyParticles() {
  if (animId) {
    cancelAnimationFrame(animId);
    animId = 0;
  }
  window.removeEventListener('resize', resize);
  particles = [];
  canvas = null;
  ctxCanvas = null;
}

function resize() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function spawnParticle() {
  if (particles.length >= MAX_PARTICLES) return;

  const angle = Math.random() * Math.PI * 2;
  const speed = 0.3 + Math.random() * 0.7;

  particles.push({
    x: originX + (Math.random() - 0.5) * 10,
    y: originY + (Math.random() - 0.5) * 10,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed - 0.3, // slight upward drift
    life: 0,
    maxLife: 40 + Math.random() * 40,
    size: 1.5 + Math.random() * 2.5,
    opacity: 0.6 + Math.random() * 0.4,
  });
}

function loop(time: number) {
  if (!ctxCanvas || !canvas) return;

  // Spawn new particles at interval
  if (time - lastSpawn > SPAWN_INTERVAL && originX > 0) {
    spawnParticle();
    lastSpawn = time;
  }

  // Clear
  ctxCanvas.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw particles
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.life++;

    if (p.life >= p.maxLife) {
      particles.splice(i, 1);
      continue;
    }

    // Update position
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.005; // slight gravity

    // Calculate fade
    const progress = p.life / p.maxLife;
    const alpha = p.opacity * (1 - progress);
    const size = p.size * (1 - progress * 0.5);

    // Draw gold particle
    ctxCanvas.beginPath();
    ctxCanvas.arc(p.x, p.y, size, 0, Math.PI * 2);
    ctxCanvas.fillStyle = `rgba(212, 176, 106, ${alpha})`;
    ctxCanvas.fill();

    // Glow effect
    ctxCanvas.beginPath();
    ctxCanvas.arc(p.x, p.y, size * 2.5, 0, Math.PI * 2);
    ctxCanvas.fillStyle = `rgba(212, 176, 106, ${alpha * 0.15})`;
    ctxCanvas.fill();
  }

  animId = requestAnimationFrame(loop);
}
