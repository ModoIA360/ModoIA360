import React, { useEffect, useRef, useState } from 'react';
import { LogoModoIA360 } from './LogoModoIA360';
import { ArrowRight, Sparkles } from 'lucide-react';

interface IntroAnimationProps {
  onComplete: () => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [phase, setPhase] = useState<'appear' | 'rotating' | 'ready' | 'dissipating'>('appear');
  const [rotationProgress, setRotationProgress] = useState(0); // 0 to 360
  const animationFrameRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const isDissipatingRef = useRef(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      onComplete();
    }
  }, [onComplete]);

  // Particle canvas system on crisp light canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Subtle luminous particles matching brand palette
    const colors = ['#0066FF', '#00B4D8', '#10B981', '#38BDF8'];
    const count = window.innerWidth < 768 ? 35 : 70;
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.35 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    particlesRef.current = particles;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (isDissipatingRef.current) {
          const dx = p.x - centerX;
          const dy = p.y - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          p.x += (dx / dist) * 16 + p.vx * 3;
          p.y += (dy / dist) * 16 + p.vy * 3;
          p.size = Math.max(0, p.size - 0.03);
          p.alpha = Math.max(0, p.alpha - 0.02);
        } else {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // 360-degree rotation animation
  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2200; // 2.2s for complete 360-degree spin

    const timerStart = setTimeout(() => {
      setPhase('rotating');

      const rotateStep = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth cubic easing for fluid 360 rotation
        const eased =
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        setRotationProgress(eased * 360);

        if (progress < 1) {
          requestAnimationFrame(rotateStep);
        } else {
          // Completed full 360 turn! Rest at 360 degrees facing front
          setRotationProgress(360);
          setPhase('ready');
        }
      };

      requestAnimationFrame(rotateStep);
    }, 400);

    return () => {
      clearTimeout(timerStart);
    };
  }, []);

  // Handler when user clicks the "Inicio" button
  const handleGoToHome = () => {
    if (phase === 'dissipating') return;
    setPhase('dissipating');
    isDissipatingRef.current = true;

    setTimeout(() => {
      onComplete();
    }, 600);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden transition-opacity duration-600 font-sans ${
        phase === 'dissipating' ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      role="dialog"
      aria-label="Animación de bienvenida de ModoIA360"
    >
      {/* Background canvas for light ambient particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Soft luminous radial aura */}
      <div className="absolute w-[600px] h-[600px] rounded-full radial-glow-light pointer-events-none blur-3xl opacity-80" />

      {/* Concentric subtle light rings */}
      <div
        className="absolute w-[340px] md:w-[480px] h-[340px] md:h-[480px] rounded-full border border-blue-100 pointer-events-none animate-ping"
        style={{ animationDuration: '4.5s' }}
      />
      <div className="absolute w-[280px] md:w-[400px] h-[280px] md:h-[400px] rounded-full border border-emerald-100/80 pointer-events-none" />

      {/* 3D Holographic Logo & Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center perspective-1000 p-6 max-w-xl text-center">
        {/* 3D Rotating Logo Container with Front and Back Face */}
        <div className="relative flex items-center justify-center my-4" style={{ perspective: '1200px' }}>
          <div
            className="transition-transform duration-75 flex flex-col items-center relative"
            style={{
              transformStyle: 'preserve-3d',
              WebkitTransformStyle: 'preserve-3d',
              transform: `rotateY(${rotationProgress}deg)`,
              filter: 'drop-shadow(0 16px 36px rgba(0, 102, 255, 0.16))',
            }}
          >
            {/* Front face (0deg) */}
            <div
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
              className="flex items-center justify-center p-2"
            >
              <LogoModoIA360
                variant="original"
                size="custom"
                className="h-20 sm:h-28 md:h-36 max-w-[88vw]"
              />
            </div>

            {/* Back face (180deg) so logo is never mirrored when rotating */}
            <div
              className="absolute inset-0 flex items-center justify-center p-2"
              style={{
                transform: 'rotateY(180deg)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <LogoModoIA360
                variant="original"
                size="custom"
                className="h-20 sm:h-28 md:h-36 max-w-[88vw]"
              />
            </div>
          </div>
        </div>

        {/* Natural, warm, human typography (non-robotic) */}
        <div className="mt-5 flex items-center justify-center gap-2 text-sm sm:text-base text-slate-700 font-medium tracking-normal">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-xs" />
          <span>Inteligencia Artificial · Diseño Web · Automatización</span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-xs" />
        </div>

        {/* 360 Degree Progress Indicator */}
        <div className="mt-5 w-48 sm:w-64 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
          <div
            className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 transition-all duration-75 rounded-full"
            style={{ width: `${Math.min((rotationProgress / 360) * 100, 100)}%` }}
          />
        </div>
        <div className="mt-2 text-xs font-semibold text-slate-500">
          {rotationProgress >= 360 ? 'Giro 360° completado' : `${Math.round((rotationProgress / 360) * 100)}% · Rotación 360°`}
        </div>

        {/* BOTÓN PROMINENTE DE INICIO */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <button
            onClick={handleGoToHome}
            className={`group inline-flex items-center justify-center gap-3 px-12 py-4 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 hover:from-blue-700 hover:via-cyan-700 hover:to-emerald-700 shadow-xl hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105 active:scale-95 ${
              phase === 'ready' ? 'ring-4 ring-cyan-200 ring-offset-2 animate-pulse' : ''
            }`}
            aria-label="Ir al inicio de ModoIA360"
          >
            <span>Inicio</span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1.5 transition-transform" />
          </button>

          <p className="text-xs text-slate-500 mt-1">
            {phase === 'ready'
              ? 'Haz clic en Inicio para acceder a la web'
              : 'Puedes hacer clic en Inicio en cualquier momento'}
          </p>
        </div>

        {/* Philosophy motto */}
        <div className="mt-8 text-xs text-slate-500 max-w-sm italic">
          «Probamos. Medimos. Si funciona, avanzamos. Si no aporta valor, te lo decimos».
        </div>
      </div>
    </div>
  );
};
