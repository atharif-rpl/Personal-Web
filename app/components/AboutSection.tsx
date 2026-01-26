"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutSection = () => {
  const containerRef = useRef(null);
  
  // Parallax effect untuk teks latar belakang
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section 
      id="aboutme" 
      ref={containerRef}
      className="relative min-h-screen bg-[#e5e5e5] text-black py-[12vh] overflow-hidden border-t-2 border-black"
    >
      {/* --- ORNAMEN BACKGROUND (Konsisten dengan Section Lain) --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
      <div className="absolute inset-0 z-0 opacity-[0.1]" 
        style={{ 
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Background Large Text - Decorative Layer */}
      <div className="absolute top-[25%] left-0 w-full opacity-[0.03] select-none pointer-events-none z-0">
        <motion.div style={{ x: y1 }} className="text-[22vw] font-black italic whitespace-nowrap leading-none">
          CREATIVE DEVELOPER — STARTUP FOUNDER — 
        </motion.div>
        <motion.div style={{ x: y2 }} className="text-[22vw] font-black italic whitespace-nowrap leading-none translate-x-[-15%]">
          SOFTWARE ENGINEERING — STUDENT — 
        </motion.div>
      </div>

      <div className="max-w-[1440px] mx-auto px-[6.18%] relative z-10">
        
        {/* Header - Level 1 Hierarchy */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-[8vh]"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 block opacity-50">
            [ 02 / ABOUT ME ]
          </span>
          <h2 className="text-6xl md:text-[8.5vw] font-black italic leading-[0.8] tracking-tighter uppercase">
            HII <br /> <span className="text-white bg-black px-4 italic">THERE.</span>
          </h2>
        </motion.div>

        {/* Grid System - Mengikuti Rasio Emas (5:7) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Kolom Foto - Level 2 Hierarchy */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-5 relative group"
          >
            <div className="relative aspect-[4/5] overflow-hidden border-4 border-black bg-white shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500">
              <Image 
                src="/images/atharif-pratama-budiman.jpg" 
                alt="Atharif Profile" 
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                priority
              />
            </div>
            {/* Ornamen Siku Pojok */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-black z-20" />
          </motion.div>

          {/* Kolom Informasi - Level 2 Hierarchy (Golden Ratio Balance) */}
          <div className="md:col-span-7 flex flex-col gap-[5vh]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-3xl md:text-4xl font-black italic uppercase leading-none border-b-4 border-black inline-block">
                I am Atharif 👋🏻
              </h3>
              <p className="text-xl md:text-3xl font-black leading-tight uppercase text-justify italic tracking-tighter">
                Siswa kelas 11 di IDN Boarding School yang berfokus pada software engineering. 
                Berambisi menjadi full-stack developer dengan keahlian di Next.js, Prisma, dan Supabase.
              </p>
              <p className="text-xs md:text-sm font-bold uppercase opacity-60 tracking-widest leading-relaxed text-justify max-w-2xl">
                Tujuan jangka panjang saya adalah membangun startup teknologi yang memberikan dampak nyata. 
                Di luar pemrograman, saya menyalurkan kreativitas melalui hobi dan membaca novel.
              </p>
            </motion.div>

            {/* Info Cards - Sub-Hierarchy Interaktif */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <motion.div 
                whileHover={{ y: -8, x: 8 }}
                className="p-8 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all"
              >
                <h4 className="text-xl font-black italic uppercase mb-4 underline decoration-2">Hobby list</h4>
                <ul className="text-[10px] font-black uppercase space-y-2 tracking-widest">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-black rounded-full"/> Hiking</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-black rounded-full"/> Reading Novels</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-black rounded-full"/> Traveling</li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ y: -8, x: 8 }}
                className="p-8 border-4 border-black bg-black text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none transition-all"
              >
                <h4 className="text-xl font-black italic uppercase mb-4 underline decoration-2">Focus Area</h4>
                <ul className="text-[10px] font-black uppercase space-y-2 tracking-widest">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full"/> Next.js / Prisma</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full"/> Startup Culture</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full"/> IDN Boarding School</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Marquee - Level 3 Visual Hierarchy */}
      <div className="mt-[12vh] py-8 bg-black text-white border-y-2 border-black">
        <motion.div 
          animate={{ x: [0, -1500] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 text-2xl font-black italic uppercase tracking-[0.25em]"
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              Available for internship 2026 <span className="text-sm opacity-30">●</span> Based in Bandung, Indonesia <span className="text-sm opacity-30">●</span> Let's build the future
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;