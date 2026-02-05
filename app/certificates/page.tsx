"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const allCertificates = [
  {
    title: "HTML Basic to Advanced",
    issuer: "Coursera / Meta",
    category: "Web",
    date: "2025",
    image: "/images/certificate/certiskilvul.webp", 
    desc: "Validasi keahlian dalam Next.js, Prisma, dan Supabase.",
    skills: ["Next.js", "Prisma", "Supabase"]
  },
  {
    title: "Basic Programing",
    issuer: "Google / Flutter",
    category: "Web",
    date: "2026",
    image: "/images/certificate/certidicoding.webp", 
    desc: "Kompetensi dalam membangun aplikasi mobile lintas platform.",
    skills: ["Flutter", "Dart", "QR Scanning"]
  },
  {
    title: "Participant Certificate SiteFest 2025",
    issuer: "MongoDB University",
    category: "Web",
    date: "2025",
    image: "/images/certificate/certisitefest.webp", 
    desc: "Penguasaan manajemen data dan skema database relasional.",
    skills: ["PostgreSQL", "Data Modeling"]
  },
  {
    title: "POSN Gold Medalist",
    issuer: "MongoDB University",
    category: "Others",
    date: "2025",
    image: "/images/certificate/certiposn.webp",
    desc: "Penguasaan manajemen data dan skema database relasional.",
    skills: ["PostgreSQL", "Data Modeling"]
  },
  {
    title: "University Of Undayana Bali, Web Design Competition Participant",
    issuer: "MongoDB University",
    category: "Web",
    date: "2025",
    image: "/images/certificate/certiundayana.webp",
    desc: "Penguasaan manajemen data dan skema database relasional.",
    skills: ["PostgreSQL", "Data Modeling"]
  },
  {
    title: "International Teaching At SIDH Belanda",
    issuer: "MongoDB University",
    category: "Others",
    date: "2025",
    image: "/images/certificate/certibelanda.webp",
    desc: "Penguasaan manajemen data dan skema database relasional.",
    skills: ["PostgreSQL", "Data Modeling"]
  },
  {
    title: "Certificate As Web Developer at Ourtala",
    issuer: "MongoDB University",
    category: "Others",
    date: "2025",
    image: "/images/certificate/certiourtala.webp",
    desc: "Penguasaan manajemen data dan skema database relasional.",
    skills: ["PostgreSQL", "Data Modeling"]
  },
  {
    title: "Basic JavaScript",
    issuer: "MongoDB University",
    category: "Others",
    date: "2025",
    image: "/images/certificate/certidicoding2.webp",
    desc: "Penguasaan manajemen data dan skema database relasional.",
    skills: ["PostgreSQL", "Data Modeling"]
  },
  {
    title: "Fundamental Front-End Web Development 2021",
    issuer: "MongoDB University",
    category: "Others",
    date: "2025",
    image: "/images/certificate/certikodio.webp",
    desc: "Penguasaan manajemen data dan skema database relasional.",
    skills: ["PostgreSQL", "Data Modeling"]
  },
  {
    title: "Fundamental Algoritma",
    issuer: "Others",
    category: "Others",
    date: "2025",
    image: "/images/certificate/certikodio1.webp",
    desc: "Penguasaan manajemen data dan skema database relasional.",
    skills: ["PostgreSQL", "Data Modeling"]
  },
  // Tambahkan sertifikat lainnya di sini
];

const categories = ["All", "Web", "Mobile", "Backend", "Others"];

export default function CertificatePage() {
  const [filter, setFilter] = useState("All");
  const [selectedCert, setSelectedCert] = useState<typeof allCertificates[0] | null>(null);

  const filteredCerts = filter === "All" 
    ? allCertificates 
    : allCertificates.filter(c => c.category === filter);

  return (
    <main className="min-h-screen bg-[#e5e5e5] text-black p-6 md:p-12 font-sans relative">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <Link href="/" className="text-xs font-black uppercase tracking-widest border-b-2 border-black mb-8 inline-block hover:opacity-50 transition-opacity">
          ← Back to Home
        </Link>
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-6xl md:text-9xl font-black italic tracking-tighter leading-none mb-12"
        >
          CREDENTIALS.
        </motion.h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 border-y-2 border-black py-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 text-sm font-black italic uppercase transition-all ${
                filter === cat ? "bg-black text-white" : "hover:bg-black/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Display */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode='popLayout'>
          {filteredCerts.map((cert, idx) => (
            <motion.div
              key={cert.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <div className="relative aspect-[1.414/1] w-full border-2 border-black overflow-hidden mb-6">
                <Image 
                  src={cert.image} 
                  alt={cert.title} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <span className="text-[10px] font-black uppercase opacity-40">{cert.category} / {cert.date}</span>
              <h3 className="text-2xl font-black italic uppercase leading-none mt-2 group-hover:underline">
                {cert.title}
              </h3>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pop-up Detail */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedCert(null)} 
              className="absolute inset-0 bg-black/90 backdrop-blur-md" 
            />
            <motion.div 
              layoutId={selectedCert.title} 
              className="relative bg-[#e5e5e5] border-4 border-black w-full max-w-4xl p-8 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] overflow-y-auto max-h-[90vh]"
            >
              <button onClick={() => setSelectedCert(null)} className="absolute top-6 right-6 text-3xl font-black">✕</button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
                <div className="border-4 border-black bg-white">
                  <Image src={selectedCert.image} alt={selectedCert.title} width={600} height={400} className="w-full h-auto p-2" />
                </div>
                <div className="flex flex-col gap-6">
                  <div>
                    <span className="text-[10px] font-black uppercase opacity-50">{selectedCert.issuer}</span>
                    <h2 className="text-4xl font-black italic uppercase leading-tight mb-4">{selectedCert.title}</h2>
                    <p className="font-bold uppercase text-xs leading-relaxed opacity-80">{selectedCert.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map(s => (
                      <span key={s} className="bg-black text-white text-[9px] font-black px-3 py-1 uppercase italic">{s}</span>
                    ))}
                  </div>
                  <button onClick={() => setSelectedCert(null)} className="mt-auto border-4 border-black py-4 font-black italic uppercase hover:bg-black hover:text-white transition-all">Close</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer / CTA PKL */}
      <div className="max-w-7xl mx-auto mt-32 py-16 border-t-4 border-black text-center">
        <p className="text-sm font-bold uppercase tracking-[0.4em] mb-4">Siswa Software Engineering @ IDN Boarding School</p>
        <h2 className="text-4xl font-black italic uppercase">Ready for Internship 2026.</h2>
      </div>
    </main>
  );
}