"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Data Pengalaman
const experiences = [
  {
    title: "International Teaching At SIDH Netherlands",
    company: "SIDH Netherlands",
    period: "2025 - Present",
    desc: "Membangun web profile menggunakan Next.js dan Supabase sebagai studi kasus pengembangan perangkat lunak.",
    points: ["Integrasi Database Supabase", "Manajemen konten komunitas", "Optimasi performa web"],
    images: [
      "/images/dokumentasi/netherland2.JPG", 
      "/images/dokumentasi/netherland1.JPG", 
      "/images/dokumentasi/netherland3.JPG", 
   
    ],
    details: "Sebagai bagian dari proyek studi kasus, saya mengembangkan Ourtala Community dari nol, fokus pada backend dengan Supabase dan frontend responsif menggunakan Next.js. Proyek ini mengajarkan saya tentang manajemen proyek, kolaborasi tim, dan tantangan teknis dalam skala kecil."
  },
  {
    title: "Live In program at IDN Boarding School",
    company: "IDN Boarding School",
    period: "2024 - Present",
    desc: "Fokus pada pengembangan aplikasi web dan mobile sebagai siswa kelas 11.",
    points: ["Spesialisasi Next.js & Prisma", "Pengembangan aplikasi Flutter", "Project Manager tugas kelompok"],
    images: [
      "/images/dokumentasi/livein2.jpg",
      "/images/dokumentasi/livein1.JPG",
      "/images/dokumentasi/livein3.JPG",
     
    ],
    details: "Di IDN Boarding School, saya mendalami kurikulum Software Engineering yang komprehensif, dengan fokus pada Next.js, Prisma, dan Supabase. Selain itu, saya juga aktif sebagai project manager untuk tugas-tugas kelompok, mengasah kemampuan kepemimpinan dan kolaborasi."
  },
  {
    title: "Ourtala Organization Website Development",
    company: "Ourtala Organization",
    period: "2025",
    desc: "Membangun Platform Digital Terpusat untuk Ekspansi dan Visibilitas Organisasi Ourtala.",
    points: ["Penyusunan solusi digital", "Presentasi strategi komunitas", "Koordinasi tim lapangan"],
    images: [
      "/images/dokumentasi/galeryabout3.jpg",
      "/images/dokumentasi/galeryabout6.jpg",
      "/images/dokumentasi/galeryabout7.jpg",
      
    ],
    details: "Sebagai Web Developer, saya bertanggung jawab penuh dalam mentransformasi visi Ourtala ke dalam bentuk digital. Saya merancang arsitektur website, mengembangkan fitur-fitur utama, dan memastikan platform ini siap digunakan sebagai media informasi serta interaksi publik. Fokus saya adalah menciptakan sistem yang stabil dan responsif guna mendukung pertumbuhan organisasi dalam skala yang lebih luas."
  },
  {
    title: "Assistant Software Engineer division at PT JAS (Automotive Assembly Facility Project)",
    company: "PT.Jas",
    period: "2025",
    desc: "Menulis artikel naratif tentang kegiatan outdoor seperti rappelling di Klapanunggal.",
    points: ["Penulisan konten naratif", "Dokumentasi kegiatan", "Publikasi artikel interaktif"],
    images: [
      "/images/dokumentasi/jas1.jpg",
      "/images/dokumentasi/jas2.jpg",
      "/images/dokumentasi/jas3.jpg",

    ],
    details: "Menyertai tim Petualang Muslim, saya mendokumentasikan dan menulis pengalaman petualangan, khususnya rappelling. Ini bukan hanya tentang penulisan, tetapi juga tentang menangkap esensi petualangan melalui fotografi dan menyajikannya dalam narasi yang menarik."
  }
];

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<typeof experiences[0] | null>(null);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const handleOpenModal = (exp: typeof experiences[0]) => {
    setSelectedExperience(exp);
    setCurrentImageIdx(0); // Reset carousel ke gambar pertama
  };

  const handleNextImage = () => {
    if (selectedExperience) {
      setCurrentImageIdx((prev) => (prev + 1) % selectedExperience.images.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedExperience) {
      setCurrentImageIdx((prev) => (prev - 1 + selectedExperience.images.length) % selectedExperience.images.length);
    }
  };

  return (
    <section id="experience" className="relative min-h-screen bg-[#e5e5e5] text-black py-24 px-[5%] overflow-hidden border-t-2 border-black">
      
      {/* Background Ornaments (Konsisten) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
      <div className="absolute inset-0 z-0 opacity-[0.1]" 
        style={{ backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 block opacity-50">[ 06 / MY JOURNEY ]</span>
            <h2 className="text-6xl md:text-[7vw] font-black italic tracking-tighter leading-[0.85] uppercase">
              Proven <br /> <span className="text-white bg-black px-4">Experience.</span>
            </h2>
          </motion.div>
          <p className="max-w-xs text-[11px] font-bold uppercase tracking-widest leading-relaxed text-justify opacity-70">
            Rekam jejak pengalaman profesional dan organisasional selama menempuh pendidikan di IDN Boarding School.
          </p>
        </div>

        {/* Timeline Experience with Thumbnails */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onClick={() => handleOpenModal(exp)} // Buka modal saat diklik
              className="group flex flex-col md:flex-row gap-8 p-8 border-2 border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer relative"
            >
              {/* Thumbnail Gambar */}
              <div className="relative w-full h-48 md:w-1/4 md:h-auto overflow-hidden border-2 border-black flex-shrink-0">
                <Image 
                  src={exp.images[0]} // Tampilkan gambar pertama sebagai thumbnail
                  alt={exp.title} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Period & Company */}
              <div className="md:w-1/3 border-b-2 md:border-b-0 md:border-r-2 border-black pb-4 md:pb-0 md:pr-8 flex-shrink-0">
                <span className="text-sm font-black italic opacity-40 group-hover:opacity-100 transition-opacity">{exp.period}</span>
                <h3 className="text-2xl font-black italic uppercase leading-none mt-2">{exp.company}</h3>
              </div>

              {/* Title & Description */}
              <div className="md:w-2/3 flex-grow">
                <h4 className="text-3xl font-black italic uppercase mb-4 tracking-tighter">{exp.title}</h4>
                <p className="text-xs font-bold uppercase tracking-wider mb-6 opacity-70 leading-relaxed">
                  {exp.desc}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {exp.points.map((point, pIdx) => (
                    <span key={pIdx} className="text-[10px] font-black uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-black rounded-full" /> {point}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-24 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
            Always open for new challenges and collaborative ventures in tech.
          </p>
        </div>
      </div>

      {/* MODAL POP-UP (Untuk Detail & Carousel) */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedExperience(null)} // Tutup modal saat klik backdrop
          >
            <motion.div 
              layoutId={selectedExperience.title}
              className="relative bg-[#e5e5e5] border-4 border-black w-full max-w-5xl p-8 md:p-12 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] overflow-hidden max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()} // Cegah klik di dalam modal menutupnya
            >
              <button onClick={() => setSelectedExperience(null)} className="absolute top-6 right-6 text-3xl font-black hover:scale-125 transition-transform z-20">✕</button>

              <div className="flex flex-col lg:flex-row gap-8 flex-grow">
                {/* Image Carousel */}
                <div className="relative w-full lg:w-1/2 aspect-video border-4 border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIdx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image 
                        src={selectedExperience.images[currentImageIdx]} 
                        alt={`${selectedExperience.title} image ${currentImageIdx + 1}`} 
                        fill 
                        className="object-contain p-2"
                      />
                    </motion.div>
                  </AnimatePresence>
                  
                  {selectedExperience.images.length > 1 && (
                    <>
                      <button 
                        onClick={handlePrevImage} 
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full z-10 hover:scale-110"
                      >
                        ←
                      </button>
                      <button 
                        onClick={handleNextImage} 
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full z-10 hover:scale-110"
                      >
                        →
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                        {selectedExperience.images.map((_, i) => (
                          <span key={i} className={`w-2 h-2 rounded-full ${i === currentImageIdx ? 'bg-black' : 'bg-gray-400'}`} />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Detail Information */}
                <div className="flex flex-col gap-6 text-left flex-grow max-h-[calc(90vh-100px)] lg:max-h-full overflow-y-auto">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-50">{selectedExperience.company} — {selectedExperience.period}</span>
                    <h2 className="text-4xl md:text-5xl font-black italic uppercase leading-tight mt-2 mb-4">{selectedExperience.title}</h2>
                    <p className="font-bold uppercase text-xs leading-relaxed tracking-wide opacity-80 mb-4">{selectedExperience.desc}</p>
                    <p className="font-bold text-sm leading-relaxed tracking-wide">{selectedExperience.details}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-black italic underline mb-4">KEY HIGHLIGHTS</h4>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      {selectedExperience.points.map((point, pIdx) => (
                        <span key={pIdx} className="text-[10px] font-black uppercase flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-black rounded-full" /> {point}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button onClick={() => setSelectedExperience(null)} className="mt-auto border-4 border-black px-10 py-4 text-xl font-black italic uppercase hover:bg-black hover:text-white transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceSection;