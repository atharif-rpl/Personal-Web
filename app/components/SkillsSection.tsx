"use client";

import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Web Development",
    skills: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    description: "Membangun web modern dengan performa tinggi dan desain responsif."
  },
  {
    title: "Backend & Database",
    skills: ["Prisma", "Supabase", "PostgreSQL"],
    description: "Manajemen data dan integrasi server yang efisien untuk aplikasi web."
  },
  {
    title: "Mobile Development",
    skills: ["Flutter", "Dart", "QR Scanner"],
    description: "Pengembangan aplikasi mobile lintas platform dengan fitur hardware."
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Figma", "UI/UX Design"],
    description: "Alur kerja kolaboratif dan perancangan antarmuka pengguna yang intuitif."
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative min-h-screen bg-[#e5e5e5] text-black py-24 px-[5%] overflow-hidden border-t-2 border-black">
      
      {/* --- ORNAMEN BACKGROUND (Sesuai Hero) --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
      <div className="absolute inset-0 z-0 opacity-[0.1]" 
        style={{ 
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Header Section - Golden Ratio Hierarchy */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 block opacity-50">
              [ 03 / TECHNICAL STACK ]
            </span>
            <h2 className="text-6xl md:text-[7vw] font-black italic tracking-tighter leading-[0.85] uppercase">
              Skills & <br /> <span className="text-white bg-black px-4">Solutions.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-xs text-[11px] font-bold uppercase tracking-widest leading-relaxed text-justify opacity-70"
          >
            Berfokus pada pengembangan perangkat lunak modern untuk menciptakan solusi digital yang efisien dan skalabel.
          </motion.p>
        </div>

        {/* Skills Grid - Interactive Neobrutalism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-black p-8 flex flex-col h-full hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all group relative overflow-hidden"
            >
              {/* Decorative Index */}
              <span className="absolute -right-4 -top-4 text-8xl font-black italic opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                0{idx + 1}
              </span>

              <h3 className="text-2xl font-black italic mb-4 uppercase group-hover:tracking-wider transition-all">
                {category.title}
              </h3>
              <p className="text-[10px] font-bold uppercase leading-relaxed mb-10 opacity-60">
                {category.description}
              </p>
              
              <div className="mt-auto flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="bg-black text-white text-[9px] font-black px-3 py-1.5 uppercase tracking-tighter italic border border-black hover:bg-white hover:text-black transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight - Core Tech Focus */}
        <div className="mt-32 flex flex-col md:flex-row gap-12 items-center border-t-4 border-black pt-12">
          <div className="flex -space-x-6">
            {['N', 'P', 'S'].map((letter, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, zIndex: 50 }}
                className={`w-16 h-16 rounded-full border-4 border-black flex items-center justify-center font-black text-xl italic shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                  ${i % 2 === 0 ? 'bg-black text-white' : 'bg-white text-black'}`}
              >
                {letter}
              </motion.div>
            ))}
          </div>
          
          <div className="flex flex-col">
            <p className="text-lg md:text-2xl font-black italic uppercase tracking-tighter">
              Main Stack: Next.js + Prisma + Supabase.
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">
              Expertise built at IDN Boarding School.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;