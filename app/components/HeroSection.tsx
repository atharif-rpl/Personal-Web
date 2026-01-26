"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-[#e5e5e5] flex flex-col items-center overflow-hidden font-sans text-black p-[6.18%] md:p-[3.82%]"
    >
      {/* --- ORNAMEN BACKGROUND START --- */}
      
      {/* 1. GRAIN TEXTURE OVERLAY */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-[1] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 2. DOT GRID PATTERN */}
      <div className="absolute inset-0 z-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`, 
          backgroundSize: '30px 30px' 
        }} 
      />

      {/* 3. DECORATIVE SQUARES (ORNAMEN POJOK) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-black/20" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-black/20" />
      </div>

      {/* --- ORNAMEN BACKGROUND END --- */}

      <div className="absolute bottom-0 left-0 w-full h-[30vh] md:h-[40vh] bg-gradient-to-t from-black/20 to-transparent z-40 pointer-events-none" />

      <motion.nav 
        style={{ opacity }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="z-50 mt-4 border-2 border-black rounded-full px-6 md:px-8 py-2 md:py-3 flex gap-4 md:gap-8 bg-white/80 backdrop-blur-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-[90vw] overflow-x-auto no-scrollbar"
      >
        {['Home', 'Project', 'Certificate', 'About', 'Skills', 'Contact'].map((item) => (
          <motion.a 
            key={item} 
            whileHover={{ scale: 1.1, skewX: -10 }}
            href={`#${item.toLowerCase()}`} 
            className="text-[10px] md:text-sm font-black italic uppercase tracking-tighter whitespace-nowrap"
          >
            {item}
          </motion.a>
        ))}
      </motion.nav>

      <motion.div 
        style={{ opacity, scale, y }}
        className="relative w-full max-w-7xl flex flex-col items-center mt-[15%] md:mt-[5%] z-10"
      >
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[22vw] md:text-[18vw] font-black leading-none tracking-tighter z-10 select-none italic"
        >
          ATHARIF
        </motion.h1>

        <div className="w-full flex flex-col md:flex-row justify-between items-center px-[2%] -mt-4 md:-mt-6 z-10 gap-2 md:gap-0">
          <motion.div variants={fadeInUp} initial="initial" animate="animate" className="flex flex-col">
             <span className="text-xs md:text-3xl font-black tracking-widest border-b-2 md:border-b-4 border-black italic leading-none">FULL-STACK</span>
          </motion.div>
          <motion.div variants={fadeInUp} initial="initial" animate="animate" className="flex flex-col items-center md:items-end">
             <span className="text-xs md:text-3xl font-black tracking-widest border-b-2 md:border-b-4 border-black italic leading-none">SOFTWARE ENGINEER</span>
          </motion.div>
        </div>

        <motion.div 
          animate={{ x: mousePos.x, y: mousePos.y }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="absolute top-[45%] md:top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-[45%] z-20 pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        >
          <Image 
            src="/images/atharifff.png" 
            alt="Atharif Profile" 
            width={800} 
            height={1000}
            className="grayscale hover:grayscale-0 transition-all duration-700 brightness-110 md:brightness-100"
            priority
          />
        </motion.div>

        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mt-[60%] md:mt-[23.6%] px-4 z-30">
          <motion.div variants={fadeInUp} initial="initial" animate="animate" className="md:col-span-5 bg-[#e5e5e5]/50 backdrop-blur-sm md:bg-transparent p-2 md:p-0">
            <h3 className="text-xl md:text-3xl font-black italic mb-1 md:mb-2 border-l-4 md:border-l-8 border-black pl-3 md:pl-4">WHO?</h3>
            <p className="text-[9px] md:text-xs leading-relaxed uppercase font-bold tracking-wider">
              Siswa Kelas 11 di IDN Boarding School. Berfokus pada pengembangan perangkat lunak modern menggunakan Next.js, Prisma, dan Supabase.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} initial="initial" animate="animate" className="md:col-span-5 md:col-start-8 text-right bg-[#e5e5e5]/50 backdrop-blur-sm md:bg-transparent p-2 md:p-0">
            <h3 className="text-xl md:text-3xl font-black italic mb-1 md:mb-2 border-r-4 md:border-r-8 border-black pr-3 md:pl-4">VISION</h3>
            <p className="text-[9px] md:text-xs leading-relaxed uppercase font-bold tracking-wider">
              Berambisi membangun startup teknologi yang inovatif. Terbuka untuk kolaborasi dan peluang magang (PKL) di tahun 2026.
            </p>
          </motion.div>
        </div>
      </motion.div>
      
      <div className="h-10 md:h-20" />
    </section>
  );
};

export default HeroSection;