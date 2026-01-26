"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Data project yang lebih lengkap untuk modal
const allProjects = [
  {
    title: "Ourtala Community Web",
    desc: "Web profile community case study using Next.js & Supabase.",
    fullDesc: "Proyek ini adalah studi kasus untuk membangun web profil komunitas Ourtala. Fokus utama adalah integrasi database real-time dan manajemen konten menggunakan Supabase.",
    tech: ["Next.js", "Supabase", "Tailwind", "Prisma"],
    link: "https://www.ourtala.id/",
    color: "bg-blue-500",
    features: ["Auth System", "Content Management", "Responsive Design"]
  },
  {
    title: "QR Code Scanner App",
    desc: "Flutter mobile app for QR validation with server-side checking.",
    fullDesc: "Aplikasi mobile yang dikembangkan dengan Flutter untuk memvalidasi kode QR. Proyek ini melibatkan pemindaian kamera dan pencocokan data ke server secara real-time.",
    tech: ["Flutter", "Dart", "Firebase", "QR API"],
    link: "#",
    color: "bg-orange-500",
    features: ["QR Scanner", "Server Validation", "Offline Storage"]
  },
  {
    title: "Plastic Reduction App",
    desc: "School project platform for eco-friendly movement at IDN.",
    fullDesc: "Inisiatif sekolah di IDN Boarding School untuk mengurangi penggunaan plastik. Platform ini membantu siswa melacak penggunaan plastik harian mereka.",
    tech: ["React", "Prisma", "PostgreSQL"],
    link: "#",
    color: "bg-green-500",
    features: ["Plastic Tracker", "Leaderboard", "Educational Content"]
  },
  {
    title: "Rappelling Narrative",
    desc: "Interactive article project based on Klapanunggal activity.",
    fullDesc: "Sebuah artikel naratif interaktif yang menceritakan pengalaman rappelling di Klapanunggal bersama tim Petualang Muslim.",
    tech: ["Next.js", "Framer Motion", "GSAP"],
    link: "#",
    color: "bg-yellow-500",
    features: ["Parallax Scrolling", "Interactive Storytelling"]
  }
];

export default function ProjectPage() {
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);

  return (
    <main className="min-h-screen bg-[#e5e5e5] text-black p-6 md:p-12 font-sans relative">
      
      {/* Header & Back Button */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div>
          <Link href="/" className="text-xs font-black uppercase tracking-widest border-b-2 border-black mb-8 inline-block hover:opacity-50 transition-opacity">
            ← Back to Home
          </Link>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-9xl font-black italic tracking-tighter leading-none"
          >
            ALL WORKS.
          </motion.h1>
        </div>
        <p className="max-w-xs text-xs font-bold uppercase tracking-widest leading-relaxed">
          Koleksi proyek rekayasa perangkat lunak yang dikembangkan selama studi di IDN Boarding School.
        </p>
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {allProjects.map((project, idx) => (
          <motion.div
            key={idx}
            layoutId={project.title}
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white border-4 border-black p-8 flex flex-col justify-between min-h-[400px] hover:shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <span className="text-4xl font-black italic opacity-20">0{idx + 1}</span>
              <div className="flex gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-black border-2 border-black px-2 py-1 uppercase">{t}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-4xl md:text-5xl font-black italic uppercase mb-4 group-hover:tracking-widest transition-all">
                {project.title}
              </h3>
              <p className="text-sm font-bold uppercase tracking-wide opacity-70 mb-8 max-w-sm">
                {project.desc}
              </p>
              <span className="bg-black text-white px-6 py-3 font-black italic uppercase text-sm inline-block">
                View Details ↘
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL POP-UP */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div 
              layoutId={selectedProject.title}
              className="relative bg-[#e5e5e5] border-4 border-black w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 md:p-12 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-2xl font-black"
              >
                ✕
              </button>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map(t => (
                  <span key={t} className="bg-white border-2 border-black px-3 py-1 text-xs font-black uppercase italic">{t}</span>
                ))}
              </div>

              <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-6 leading-none">
                {selectedProject.title}
              </h2>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-black italic underline mb-2">DESCRIPTION</h4>
                  <p className="font-bold uppercase text-sm leading-relaxed tracking-wide">
                    {selectedProject.fullDesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-black italic underline mb-2">KEY FEATURES</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.features.map(f => (
                      <li key={f} className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 bg-black rounded-full" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t-4 border-black flex gap-4">
                  <Link href={selectedProject.link} className="bg-black text-white px-8 py-4 font-black italic uppercase hover:bg-white hover:text-black border-2 border-black transition-all">
                    Live Demo ↗
                  </Link>
                  <button onClick={() => setSelectedProject(null)} className="border-4 border-black px-8 py-4 font-black italic uppercase hover:bg-black hover:text-white transition-all">
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Internship CTA */}
      <div className="max-w-7xl mx-auto mt-24 py-16 border-t-4 border-black flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-black italic uppercase mb-6">Tertarik berkolaborasi?</h2>
        <p className="text-sm font-bold uppercase tracking-[0.3em] mb-10">Tersedia untuk PKL 2026</p>
        <Link href="/#contact" className="border-4 border-black px-12 py-5 text-2xl font-black italic uppercase hover:bg-black hover:text-white transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          Let's Talk
        </Link>
      </div>

    </main>
  );
}