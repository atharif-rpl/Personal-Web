"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const certificates = [
  {
    title: "HTML Basic to Advanced",
    issuer: "SkilVul",
    date: "2026",
    image: "/images/certificate/certiskilvul.png", 
    description: "Memvalidasi kemampuan membangun aplikasi web modern menggunakan Next.js, React, dan Tailwind CSS.",
    skills: ["Next.js", "React", "State Management"]
  },
  {
    title: "Database Managementyyyy",
    issuer: "MongoDB / Prisma",
    date: "2025",
    image: "/images/certificate/certidicoding.png", 
    description: "Penguasaan ORM Prisma untuk integrasi database relasional seperti PostgreSQL dan Supabase.",
    skills: ["Prisma", "PostgreSQL", "Supabase"]
  }
];

const CertificateSection = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificate" className="relative min-h-screen bg-[#e5e5e5] text-black py-24 px-[5%] overflow-hidden border-t-2 border-black">
      
      {/* Background Ornaments */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
      <div className="absolute inset-0 z-0 opacity-[0.1]" 
        style={{ backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 block opacity-50">[ 04 / ACHIEVEMENTS ]</span>
            <h2 className="text-6xl md:text-[7vw] font-black italic tracking-tighter leading-[0.85] uppercase">
              Proven <br /> <span className="text-white bg-black px-4">Expertise.</span>
            </h2>
          </motion.div>
          <p className="max-w-xs text-[11px] font-bold uppercase tracking-widest leading-relaxed text-justify opacity-70">
            Sertifikasi resmi yang memvalidasi kompetensi teknis saya sebagai siswa Software Engineering di IDN Boarding School.
          </p>
        </div>

        {/* Direct Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {certificates.map((cert, idx) => (
            <motion.div 
              key={idx}
              layoutId={`cert-${idx}`}
              onClick={() => setSelectedCert(cert)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group cursor-pointer"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[1.414/1] w-full border-4 border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden mb-6">
                <Image 
                  src={cert.image} 
                  alt={cert.title} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="bg-white text-black px-6 py-2 font-black italic uppercase text-sm">View Details ↗</span>
                </div>
              </div>

              {/* Basic Info */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter">{cert.title}</h3>
                  <p className="text-[10px] font-bold uppercase opacity-60">{cert.issuer} — {cert.date}</p>
                </div>
                <span className="text-4xl font-black italic opacity-10">0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button - Direct to separate page */}
        <div className="mt-20 flex flex-col items-center">
            <p className="text-[10px] font-black tracking-[0.4em] mb-6 uppercase opacity-50">Want to see all credentials?</p>
            <Link href="/certificates">
                <motion.button 
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="border-4 border-black px-12 py-5 text-2xl font-black italic uppercase hover:bg-black hover:text-white transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                >
                  View All Certificates
                </motion.button>
            </Link>
        </div>
      </div>

      {/* POP-UP MODAL (Tetap Ada untuk Detail Mendalam) */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCert(null)} className="absolute inset-0 bg-black/90 backdrop-blur-md" />
            <motion.div layoutId={selectedCert.title} className="relative bg-[#e5e5e5] border-4 border-black w-full max-w-4xl p-8 md:p-12 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] overflow-y-auto max-h-[90vh]">
              <button onClick={() => setSelectedCert(null)} className="absolute top-6 right-6 text-3xl font-black">✕</button>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
                <div className="relative aspect-[1.414/1] w-full border-4 border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"><Image src={selectedCert.image} alt={selectedCert.title} fill className="object-contain p-2"/></div>
                <div className="flex flex-col gap-6 text-left">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-50">{selectedCert.issuer}</span>
                    <h2 className="text-4xl font-black italic uppercase leading-tight mb-4">{selectedCert.title}</h2>
                    <p className="font-bold uppercase text-xs leading-relaxed opacity-80">{selectedCert.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">{selectedCert.skills.map(s => <span key={s} className="bg-black text-white text-[9px] font-black px-3 py-1 uppercase">{s}</span>)}</div>
                  <button onClick={() => setSelectedCert(null)} className="mt-auto border-4 border-black py-4 font-black italic uppercase hover:bg-black hover:text-white transition-all">Close</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificateSection;