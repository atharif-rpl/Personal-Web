"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contact" className="relative min-h-screen bg-[#e5e5e5] text-black py-24 px-[5%] overflow-hidden border-t-2 border-black">
      
      {/* --- ORNAMEN BACKGROUND (Konsisten dengan Hero, About, & Experience) --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
      <div className="absolute inset-0 z-0 opacity-[0.1]" 
        style={{ 
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Latar Belakang Dekoratif (Large Running Text) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none z-0">
        <motion.h2 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="text-[25vw] font-black italic leading-none whitespace-nowrap uppercase"
        >
          Get In Touch — Stay Connected — Get In Touch —
        </motion.h2>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Header Section - Level 1 Hierarchy */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 block opacity-50">
            [ 07 / CONNECT WITH ME ]
          </span>
          <h2 className="text-6xl md:text-[9vw] font-black italic tracking-tighter leading-[0.8] uppercase mb-8">
            Let's Build <br /> <span className="text-white bg-black px-4 italic">Something.</span>
          </h2>
          <p className="text-sm md:text-xl font-black uppercase tracking-widest italic opacity-70">
            Open for Internship (PKL 2026) & Creative Collaborations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Kolom Kiri: Pesan Personal & Lokasi */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-black text-white p-10 md:p-14 flex flex-col justify-between border-4 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group"
          >
            <div className="relative z-10">
              <h3 className="text-4xl font-black italic uppercase mb-8 leading-none">Ready for the <br/> next step?</h3>
              <p className="text-xs md:text-sm leading-relaxed font-bold uppercase tracking-wide opacity-70 text-justify">
                Saya sedang mencari peluang magang (PKL) di perusahaan teknologi untuk menerapkan keahlian saya dalam Full-stack Web Development. 
                Jika Anda mencari developer yang berdedikasi dengan spesialisasi Next.js, mari berdiskusi!
              </p>
            </div>
            
            <div className="mt-16 relative z-10">
              <span className="block text-[10px] font-black tracking-[0.4em] mb-4 opacity-40 uppercase">Current Base</span>
              <p className="text-xl md:text-2xl font-black italic uppercase border-l-4 border-white pl-4">Jonggol, West Java, Indonesia</p>
            </div>

            {/* Dekorasi Grid Halus di Dalam Card */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
              style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '20px 20px' }} 
            />
          </motion.div>

          {/* Kolom Kanan: Social & Contact Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Utama: Email & WhatsApp */}
            <ContactLink 
              href="mailto:atha55733@gmail.com?subject=Project%20Inquiry"
              label="Email Me"
              sub="atha55733@gmail.com"
            />
            <ContactLink 
              href="https://wa.me/6285882269207?text=Hello%20Atharif,%20I%20want%20to%20discuss%20a%20project"
              label="WhatsApp"
              sub="+62 858-8226-9207"
            />
            
            {/* Socials: LinkedIn, IG, TikTok */}
            <ContactLink 
              href="https://www.linkedin.com/in/atharif-pratama-budiman-a87902245/"
              label="LinkedIn"
              sub="Atharif Pratama Budiman"
            />
            <ContactLink 
              href="https://www.instagram.com/atharif_pratama" // Ganti dengan username asli jika berbeda
              label="Instagram"
              sub="@atharif_pratama"
            />
            <ContactLink 
              href="https://www.tiktok.com/@atharif_pratama" // Ganti dengan username asli jika berbeda
              label="TikTok"
              sub="@atharif_pratama"
            />

            {/* Card Dekoratif (Kecil) */}
            <div className="bg-white border-4 border-black p-8 flex items-center justify-center italic font-black uppercase text-center text-xs tracking-tighter">
              Let's build the future together <br/> at IDN Boarding School
            </div>
          </div>
        </div>

        {/* Footer Credit - Level 3 Hierarchy */}
        <footer className="mt-32 pt-12 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-black uppercase tracking-[0.4em]">
              © 2026 ATHARIF. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
              Built with Next.js, Framer Motion & Neobrutalism UI
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-black rounded-full animate-pulse" />
            <p className="text-[10px] font-black uppercase tracking-[0.4em]">
              Made at IDN Boarding School
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

// Komponen Reusable untuk Link agar kode lebih rapi
const ContactLink = ({ href, label, sub }: { href: string; label: string; sub: string }) => (
  <motion.a 
    whileHover={{ scale: 1.02, x: 5, y: -5 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white border-4 border-black p-8 flex flex-col justify-between group hover:bg-black hover:text-white transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
  >
    <div className="flex justify-between items-start">
      <span className="text-2xl font-black italic uppercase leading-none">{label}</span>
      <span className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
    </div>
    <span className="text-[15px] font-black  tracking-widest mt-0 opacity-50 group-hover:opacity-100">{sub}</span>
  </motion.a>
);

export default ContactSection;