"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const logos = [
  "https://res.cloudinary.com/dl2adjye7/image/upload/v1716817722/Amazon_icon.svg_a4qmtg.png",
  "https://res.cloudinary.com/dl2adjye7/image/upload/v1716800282/Apple_logo_black.svg_seeetv.png",
  "https://res.cloudinary.com/dl2adjye7/image/upload/v1716800359/WISE.L-b3d3de3c_rexehe.png"
];

const lineWidth = 80; 
const lineHeight = 2; 

const LogoBeam = () => {
  return (
    <div className="flex items-center justify-center min-h-52">
      <div className="relative flex items-center">
        <div className="bg-[#000] border border-white/30  rounded-2xl flex items-center justify-center w-14 h-14 p-4">
          <img src={logos[0]} alt="Logo 1" className="filter invert brightness-0" />
        </div>
        <div className="relative" style={{ width: `${lineWidth}px`, height: `${lineHeight}px`, backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
          <motion.div
            className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
            initial={{ x: '-40px' }}
            animate={{ x: `calc(${lineWidth}px + 40px)` }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatDelay: 2.5,
              ease: 'linear',
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
        <div className="relative bg-black border-2 border-white/70 rounded-2xl flex items-center justify-center w-16 h-16 p-4 overflow-hidden shadow-[0_0_15px_5px_#dbe0e2]">
          <img src={logos[1]} alt="Logo 2" className="filter invert brightness-0" />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 2,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
        <div className="relative" style={{ width: `${lineWidth}px`, height: `${lineHeight}px`, backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
          <motion.div
            className="absolute top-0 right-0 h-full w-10 bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
            initial={{ x: '40px' }}
            animate={{ x: `calc(-${lineWidth}px - 40px)` }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatDelay: 3.5,
              ease: 'linear',
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
        <div className="bg-black border border-white/30 rounded-2xl flex items-center justify-center w-14 h-14 p-4">
          <img src={logos[2]} alt="Logo 3" className="filter invert brightness-0" />
        </div>
      </div>
    </div>
  );
};

const data = [50, 40, 300, 320, 500, 350, 200, 230, 500];
const maxData = Math.max(...data);
const chartHeight = 400;
const chartWidth = 800;

const CardWithEffect = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="relative bg-[#000] flex-1 rounded-xl border border-white/30 p-4 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ willChange: 'transform' }}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: '300px',
            height: '300px',
            top: mousePosition.y - 150,
            left: mousePosition.x - 150,
            background: '#5D2CA8',
            filter: 'blur(100px)',
            transform: 'translate(-0%, -0%)',
            zIndex: 10, // Ensure the effect is on top
            willChange: 'transform, top, left',
          }}
        />
      )}
      {children}
    </div>
  );
};

const AWSIcon = () => {
  

  return (
    <div className="flex flex-col justify-center h-full items-center relative">
         <div className="flex flex-row gap-8 justify-center h-full items-center relative">
         <div className="relative bg-black border-2 border-white/70 rounded-2xl flex items-center justify-center w-16 h-16 p-4 overflow-hidden shadow-[0_0_15px_5px_#dbe0e2]">
          <img src={logos[0]} alt="Logo 2" className="filter invert brightness-0" />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 2,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
        <div className="relative bg-black border-2 border-white/70 rounded-2xl flex items-center justify-center w-16 h-16 p-4 overflow-hidden shadow-[0_0_15px_5px_#dbe0e2]">
          <img src={logos[1]} alt="Logo 2" className="filter invert brightness-0" />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 2,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
        <div className="relative bg-black border-2 border-white/70 rounded-2xl flex items-center justify-center w-16 h-16 p-4 overflow-hidden shadow-[0_0_15px_5px_#dbe0e2]">
          <img src={logos[2]} alt="Logo 2" className="filter invert brightness-0" />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 2,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
        </div>

      
      <div className="text-left p-6 mt-4">
        <h1 className="text-white text-2xl font-bold mb-2">AWS Integration</h1>
        <p className="text-gray-400 text-lg">integrate AWS and use seamlessly with us.</p>
      </div>
    </div>
  );
};

const BentoBox1 = () => {
  const chartRef = useRef(null);
  const [isChartVisible, setIsChartVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsChartVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, [chartRef]);

  return (
    <div className="bg-[#000000] flex justify-center items-center min-h-screen p-5 rounded-lg sm:py-24 ">
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-7xl min-h-[800px] md:min-h-[800px] md:h-[800px]">
        <CardWithEffect>
          <div className="flex flex-col justify-between h-full">
            <div className="mb-4 px-6 mt-6">
              <div className="flex justify-between items-center mb-6 pb-2">
                <h2 className="text-white/70 text-xl">Sales Data</h2>
                <div className="flex items-center">
                  <div className="h-1 bg-black w-8 rounded-lg"></div>
                  <span className="ml-2 text-white/70 text-sm">Growth</span>
                </div>
              </div>
              <div ref={chartRef} className="relative w-full mt-12" style={{ height: chartHeight }}>
                <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full pl-11">
                  <defs>
                    <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#5D2CA8" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                  <polyline
                    fill="url(#gradient)"
                    stroke="none"
                    points={`${(0 / (data.length - 1)) * chartWidth},${chartHeight} ${data
                      .map(
                        (value, index) =>
                          `${(index / (data.length - 1)) * chartWidth},${chartHeight - (value / maxData) * chartHeight}`
                      )
                      .join(' ')} ${(data.length - 1) * (chartWidth / (data.length - 1))},${chartHeight}`}
                  />
                  <motion.polyline
                    fill="none"
                    stroke="#5D2CA8"
                    strokeWidth="3"
                    className=""
                    points={data
                      .map(
                        (value, index) =>
                          `${(index / (data.length - 1)) * chartWidth},${chartHeight - (value / maxData) * chartHeight}`
                      )
                      .join(' ')}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isChartVisible ? 1 : 0 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                  />
                </svg>
                <div className="absolute top-0 left-0 h-full w-full pointer-events-none">
                  {Array.from(Array(7).keys()).map((i) => (
                    <div
                      key={i}
                      className="absolute left-0 w-full flex items-center text-white/30 text-sm"
                      style={{ top: `${(100 / 6) * i}%` }}
                    >
                      <span className="mr-4">{`${10 + i * 10}%`}</span>
                      <div className="w-full border-t border-white/70"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-left p-6 mt-4">
              <h1 className="text-white text-2xl font-bold mb-2">Incredible Growth</h1>
              <p className="text-white/70 text-lg">Fly through your tasks with rapid-fire keyboard shortcuts for everything. Literally everything.</p>
            </div>
          </div>
        </CardWithEffect>
        <div className="flex flex-col w-full md:w-1/2 gap-5 h-full md:h-[800px]">
          <CardWithEffect>
            <div className="flex flex-col justify-center h-full">
              <LogoBeam />
              <div className="text-left p-6">
                <h1 className="text-white text-2xl font-bold mb-2">Multiple Technologies</h1>
                <p className="text-white/70 text-lg">Fly through your tasks with rapid-fire keyboard shortcuts for everything. Literally everything.</p>
              </div>
            </div>
          </CardWithEffect>
          <CardWithEffect>
            <AWSIcon />
          </CardWithEffect>
        </div>
      </div>
    </div>
  );
};


function Bentodemo() {
  return (
    <div className="h-screen flex items-center justify-center  ">
      <BentoBox1 />
    </div>
  );
}

export default Bentodemo;
          
