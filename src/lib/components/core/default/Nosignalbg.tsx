"use client"
import React, { useEffect, useRef } from "react";
 
interface NoSignalScreenProps {
  className?: string;
  frameRate?: number;
}
 
const NoSignalScreen: React.FC<NoSignalScreenProps> = ({
  className = "",
  frameRate = 30,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
 
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
 
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
 
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
 
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
 
    let animationFrameId: number;
    let lastTime = 0;
    const interval = 1000 / frameRate;
 
    const drawNoise = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(drawNoise);
 
      if (currentTime - lastTime < interval) return;
      lastTime = currentTime;
 
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
 
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.floor(Math.random() * 256);
        data[i] = value; // red
        data[i + 1] = value; // green
        data[i + 2] = value; // blue
        data[i + 3] = 255; // alpha
      }
 
      ctx.putImageData(imageData, 0, 0);
    };
 
    animationFrameId = requestAnimationFrame(drawNoise);
 
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [frameRate]);
 
  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none opacity-50 absolute inset-0 ${className}`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};
 
export default NoSignalScreen;