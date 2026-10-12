import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  flipAngle: number;
  flipSpeed: number;
  swayAmplitude: number;
  swaySpeed: number;
  swayOffset: number;
  type: 'lotusPetal' | 'miniLotus' | 'marigoldPetal' | 'miniJasmine' | 'rosePetal' | 'goldSparkle';
  opacity: number;
}

export const FallingPetals: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create delicate, petite little petals & miniature flowers
    const particleCount = window.innerWidth < 768 ? 40 : 65;
    const particles: Particle[] = [];
    const types: Particle['type'][] = [
      'lotusPetal', 'miniLotus', 'marigoldPetal', 'miniJasmine', 'rosePetal', 'goldSparkle', 'lotusPetal', 'marigoldPetal'
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 5 + 6, // Little little sizes: 6px to 11px
        speedY: Math.random() * 0.9 + 0.6, // Soft, slow gentle fall
        speedX: Math.random() * 0.4 - 0.2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        flipAngle: Math.random() * Math.PI * 2,
        flipSpeed: Math.random() * 0.03 + 0.01,
        swayAmplitude: Math.random() * 25 + 12,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayOffset: Math.random() * Math.PI * 2,
        type: types[Math.floor(Math.random() * types.length)],
        opacity: Math.random() * 0.35 + 0.6,
      });
    }

    let time = 0;

    // 1. Draw Little Delicate Lotus Petal
    const drawLotusPetal = (ctx: CanvasRenderingContext2D, s: number) => {
      const grad = ctx.createLinearGradient(-s / 2, -s, s / 2, s);
      grad.addColorStop(0, '#FFE4E6');
      grad.addColorStop(0.5, '#FB7185');
      grad.addColorStop(1, '#E11D48');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.bezierCurveTo(s * 0.55, -s * 0.5, s * 0.6, s * 0.5, 0, s);
      ctx.bezierCurveTo(-s * 0.6, s * 0.5, -s * 0.55, -s * 0.5, 0, -s);
      ctx.fill();
    };

    // 2. Draw Miniature Blooming Lotus Floret
    const drawMiniLotus = (ctx: CanvasRenderingContext2D, s: number) => {
      const petals = 6;
      for (let i = 0; i < petals; i++) {
        const angle = (i * Math.PI * 2) / petals;
        ctx.save();
        ctx.rotate(angle);
        ctx.fillStyle = '#FB7185';
        ctx.beginPath();
        ctx.ellipse(0, -s * 0.5, s * 0.28, s * 0.45, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      ctx.fillStyle = '#F59E0B';
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.2, 0, Math.PI * 2);
      ctx.fill();
    };

    // 3. Draw Little Marigold Petal
    const drawMarigoldPetal = (ctx: CanvasRenderingContext2D, s: number) => {
      const grad = ctx.createLinearGradient(-s / 2, -s, s / 2, s);
      grad.addColorStop(0, '#FEF08A');
      grad.addColorStop(0.6, '#F59E0B');
      grad.addColorStop(1, '#D97706');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.bezierCurveTo(s * 0.5, -s * 0.5, s * 0.55, s * 0.4, 0, s * 0.8);
      ctx.bezierCurveTo(-s * 0.55, s * 0.4, -s * 0.5, -s * 0.5, 0, -s);
      ctx.fill();
    };

    // 4. Draw Miniature White Jasmine Floret (Mullappoo)
    const drawMiniJasmine = (ctx: CanvasRenderingContext2D, s: number) => {
      const petals = 5;
      for (let i = 0; i < petals; i++) {
        const angle = (i * Math.PI * 2) / petals;
        ctx.save();
        ctx.rotate(angle);
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.ellipse(0, -s * 0.5, s * 0.22, s * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      ctx.fillStyle = '#FBBF24';
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.16, 0, Math.PI * 2);
      ctx.fill();
    };

    // 5. Draw Little Rose Petal
    const drawRosePetal = (ctx: CanvasRenderingContext2D, s: number) => {
      const grad = ctx.createRadialGradient(0, 0, 1, 0, 0, s);
      grad.addColorStop(0, '#FDA4AF');
      grad.addColorStop(0.7, '#E11D48');
      grad.addColorStop(1, '#9F1239');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.65, 0, Math.PI * 2);
      ctx.fill();
    };

    // 6. Draw Little Gold Pollen Floret
    const drawGoldSparkle = (ctx: CanvasRenderingContext2D, s: number) => {
      ctx.fillStyle = '#D4AF37';
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.3, 0, Math.PI * 2);
      ctx.fill();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 1;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotationSpeed;
        p.flipAngle += p.flipSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x < -30) p.x = width + 30;
        if (p.x > width + 30) p.x = -30;

        ctx.save();

        const swayX = Math.sin(time * p.swaySpeed + p.swayOffset) * p.swayAmplitude;
        ctx.translate(p.x + swayX, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);

        const scaleY = Math.cos(p.flipAngle) * 0.5 + 0.5;
        ctx.scale(1, scaleY);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'lotusPetal') {
          drawLotusPetal(ctx, p.size);
        } else if (p.type === 'miniLotus') {
          drawMiniLotus(ctx, p.size);
        } else if (p.type === 'marigoldPetal') {
          drawMarigoldPetal(ctx, p.size);
        } else if (p.type === 'miniJasmine') {
          drawMiniJasmine(ctx, p.size);
        } else if (p.type === 'rosePetal') {
          drawRosePetal(ctx, p.size);
        } else {
          drawGoldSparkle(ctx, p.size);
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-30"
      style={{ mixBlendMode: 'normal' }}
    />
  );
};
