"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: { r: number; g: number; b: number;
  };
};

export default function SmoothCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let rafId = 0;

    const mouse = { x: width / 2, y: height / 2, };
    
    const particles: Particle[] = [];
    const PARTICLE_COUNT = 100;
    const PARTICLE_COLORS = [
      { r: 155, g: 124, b: 255 },
      { r: 93, g: 228, b: 255 },  
      { r: 70, g: 130, b: 255 }, 
      { r: 177, g: 156, b: 220 },
      { r: 194, g: 163, b: 112 }, 
    ];
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticles = () => {
       particles.length = 0;
       for (let i = 0; i < PARTICLE_COUNT; i++) {
       const color = PARTICLE_COLORS[ Math.floor( Math.random() * PARTICLE_COLORS.length ) ];
       particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) *  0.12,
          size: Math.random() * 1.4 + 0.4, color, }); 
        }
        };  

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (const particle of particles) {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 240 && distance > 0) {  const force = (240 - distance) / 240;
          particle.vx -= (dx / distance) * force * 0.0015;
          particle.vy -= (dy / distance) * force * 0.0015;
        }

        particle.vx *= 0.995;
        particle.vy *= 0.995;

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = height + 10;
        if (particle.y > height + 10) particle.y = -10;

        const hoverStrength = distance < 180 ? 1 - distance / 180:0;
        const drawSize = particle.size + hoverStrength * 1.2;

        ctx.beginPath();
        ctx.arc( particle.x, particle.y, drawSize, 0, Math.PI * 2 );
        if (distance < 180)
        { 
          const strength = 1 - distance / 180;
          const normal = { r: 244, g: 241, b: 232, };
          const r = Math.round( normal.r + ( particle.color.r - normal.r ) * strength );
          const g = Math.round( normal.g + ( particle.color.g - normal.g ) * strength );
          const b = Math.round( normal.b + ( particle.color.b - normal.b ) * strength );
          const alpha = 0.32 + strength * 0.55;
           ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        } else 
        {
          ctx.fillStyle = "rgba(244, 241, 232, 0.32)";
        }
          
        ctx.fill();
     }

      rafId = requestAnimationFrame(animate);
    };

    const onResize = () => { 
      resize();
      createParticles();
    };

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove, { passive: true } );

    return () => { cancelAnimationFrame(rafId);
        window.removeEventListener( "resize", onResize );
        window.removeEventListener( "mousemove", onMouseMove );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="smooth-canvas"
      aria-hidden="true"
    />
  );
}