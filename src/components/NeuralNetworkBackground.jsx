import React, { useRef, useEffect, useState } from "react";

// Animation réseau neuronal stable et propre
export default function NeuralNetworkBackground() {
  const canvasRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const pointsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Met à jour la taille du canvas selon le parent
  useEffect(() => {
    function updateSize() {
      const canvas = canvasRef.current;
      if (canvas && canvas.parentElement) {
        setSize({
          width: canvas.parentElement.offsetWidth,
          height: canvas.parentElement.offsetHeight
        });
      }
    }
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Génère les points une seule fois
  useEffect(() => {
    if (size.width > 0 && size.height > 0 && pointsRef.current.length === 0) {
      const POINTS = (() => {
        // Breakpoints (px) — ajustez si besoin
        const bp = { xs: 480, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1600 };
        const w = size.width;
        if (w <= bp.xs) return 12;    // extra-small
        if (w <= bp.sm) return 20;    // small
        if (w <= bp.md) return 32;    // medium
        if (w <= bp.lg) return 48;    // large
        if (w <= bp.xl) return 64;    // extra-large
        return 96;                    // ultra / very large screens
      })();
      
      pointsRef.current = Array.from({ length: POINTS }, () => ({
        x: Math.random() * size.width,
        y: Math.random() * size.height,
        vx: (Math.random() - 0.5),
        vy: (Math.random() - 0.5)
      }));
      mouseRef.current = { x: size.width / 2, y: size.height / 2 };
    }
  }, [size.width, size.height]);

  // Animation et interaction
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    }
    window.addEventListener('mousemove', handleMouseMove);

    function draw() {
      const width = size.width;
      const height = size.height;
      ctx.clearRect(0, 0, width, height);
      // Fond dégradé bleu foncé -> bleu clair
      ctx.save();
      ctx.globalAlpha = 1;
      const gradient = ctx.createRadialGradient(width / 2, height / 2, 200, width / 2, height / 2, 1.5 * height);
      gradient.addColorStop(0, "#000725ff");
      gradient.addColorStop(0.5, "#050d33ff");
      gradient.addColorStop(1, "#0a1338ff");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
      // Lignes entre points proches (points)
      const points = pointsRef.current;
      const mouse = mouseRef.current;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(37, 99, 235, ${1 - dist / 120})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
        // Lignes entre chaque point et la souris
        const dxm = points[i].x - mouse.x;
        const dym = points[i].y - mouse.y;
        const distm = Math.sqrt(dxm * dxm + dym * dym);
        if (distm < 140) {
          ctx.strokeStyle = `rgba(255,255,255,${1 - distm / 140})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
      // Points
      for (let p of points) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = "#2563eb"; // bleu-700
        ctx.shadowColor = "#60a5fa"; // bleu-400
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      // Neurone souris (point blanc)
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 4, 0, 2 * Math.PI);
      ctx.fillStyle = "#fff";
      ctx.shadowColor = "#60a5fa";
      ctx.shadowBlur = 16;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    function animate() {
      const width = size.width;
      const height = size.height;
      const points = pointsRef.current;
      for (let p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }
      draw();
      animationId = requestAnimationFrame(animate);
    }

    if (size.width > 0 && size.height > 0) animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [size.width, size.height]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none"
      }}
      width={size.width}
      height={size.height}
      aria-hidden="true"
    />
  );
}
