import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/classes"; 

interface ParticleProps {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  ttl: number;
  speed: number;
  size: number;
  hue: number;
}

interface SwirlProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  baseTTL?: number;
  rangeTTL?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseSize?: number;
  rangeSize?: number;
  baseHue?: number;
  rangeHue?: number;
  backgroundColor?: string;
}

const Swirl: React.FC<SwirlProps> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const particleCount = props.particleCount || 700;
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const baseTTL = props.baseTTL || 100;
  const rangeTTL = props.rangeTTL || 500;
  const baseSpeed = props.baseSpeed || 0.1;
  const rangeSpeed = props.rangeSpeed || 1;
  const baseSize = props.baseSize || 2;
  const rangeSize = props.rangeSize || 10;
  const baseHue = props.baseHue || 10;
  const rangeHue = props.rangeHue || 100;
  const noiseSteps = 2;
  const xOff = 0.0025;
  const yOff = 0.005;
  const zOff = 0.0005;
  const backgroundColor = props.backgroundColor || 'hsla(60,50%,3%,1)';
  let tick = 0;
  const noise3D = createNoise3D();
  let particleProps = new Float32Array(particlePropsLength);
  let center: [number, number] = [0, 0];

  const HALF_PI: number = 0.5 * Math.PI;
  const TAU: number = 2 * Math.PI;
  const rand = (n: number): number => n * Math.random();
  const randRange = (n: number): number => n - rand(2 * n);
  const fadeInOut = (t: number, m: number): number => {
    let hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1: number, n2: number, speed: number): number =>
    (1 - speed) * n1 + speed * n2;

  const angle = (x1: number, y1: number, x2: number, y2: number): number => 
    Math.atan2(y2 - y1, x2 - x1);

  const setup = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        resize(canvas, ctx);
        initParticles();
        draw(canvas, ctx);
      }
    }
  };

  const initParticles = () => {
    tick = 0;
    particleProps = new Float32Array(particlePropsLength);

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

  const initParticle = (i: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let x, y, theta, vx, vy, life, ttl, speed, size, hue;

    x = rand(canvas.width);
    y = rand(canvas.height);
    theta = angle(x, y, center[0], center[1]);
    vx = Math.cos(theta) * 6;
    vy = Math.sin(theta) * 6;
    life = 0;
    ttl = baseTTL + rand(rangeTTL);
    speed = baseSpeed + rand(rangeSpeed);
    size = baseSize + rand(rangeSize);
    hue = baseHue + rand(rangeHue);

    particleProps.set([x, y, vx, vy, life, ttl, speed, size, hue], i);
  };

  const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    tick++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawParticles(ctx);
    renderGlow(canvas, ctx);
    render(canvas, ctx);

    window.requestAnimationFrame(() => draw(canvas, ctx));
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }
  };

  const updateParticle = (i: number, ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let i2 = 1 + i,
        i3 = 2 + i,
        i4 = 3 + i,
        i5 = 4 + i,
        i6 = 5 + i,
        i7 = 6 + i,
        i8 = 7 + i,
        i9 = 8 + i;
    let x, y, theta, vx, vy, life, ttl, speed, x2, y2, size, hue;

    x = particleProps[i];
    y = particleProps[i2];
    theta = angle(x, y, center[0], center[1]) + 0.75 * HALF_PI;
    vx = lerp(particleProps[i3], 2 * Math.cos(theta), 0.05);
    vy = lerp(particleProps[i4], 2 * Math.sin(theta), 0.05);
    life = particleProps[i5];
    ttl = particleProps[i6];
    speed = particleProps[i7];
    x2 = x + vx * speed;
    y2 = y + vy * speed;
    size = particleProps[i8];
    hue = particleProps[i9];

    drawParticle(x, y, theta, life, ttl, size, hue, ctx);

    life++;

    particleProps[i] = x2;
    particleProps[i2] = y2;
    particleProps[i3] = vx;
    particleProps[i4] = vy;
    particleProps[i5] = life;

    life > ttl && initParticle(i);
  };

  const drawParticle = (
    x: number,
    y: number,
    theta: number,
    life: number,
    ttl: number,
    size: number,
    hue: number,
    ctx: CanvasRenderingContext2D
  ) => {
    const xRel = x - 0.5 * size;
    const yRel = y - 0.5 * size;

    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = 1;
    ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.translate(xRel, yRel);
    ctx.rotate(theta);
    ctx.translate(-xRel, -yRel);
    ctx.strokeRect(xRel, yRel, size, size);
    ctx.closePath();
    ctx.restore();
  };

  const resize = (canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) => {
    const { innerWidth, innerHeight } = window;

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    center[0] = 0.5 * canvas.width;
    center[1] = 0.5 * canvas.height;
  };

  const renderGlow = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.filter = "blur(8px) brightness(200%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();

    ctx.save();
    ctx.filter = "blur(4px) brightness(200%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const render = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  useEffect(() => {
    setup();
    window.addEventListener("resize", () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (canvas && ctx) {
        resize(canvas, ctx);
      }
    });
  }, []);

  return (
    <div className={cn("relative h-full w-full", props.containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className={cn("absolute inset-0", props.className)}
      >
        <canvas ref={canvasRef} />
        {props.children}
      </motion.div>
    </div>
  );
};

export default Swirl;
