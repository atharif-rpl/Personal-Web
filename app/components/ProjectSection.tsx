"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
    {
        title: "Ourtala Web Profile",
        category: "Web Development (Next.js)",
        year: "2025",
        tag: "CASE STUDY"
    },
    {
        title: "QR Code Scanner App",
        category: "Mobile Dev (Flutter)",
        year: "2026",
        tag: "MOBILE"
    },
    {
        title: "Plastic Reduction",
        category: "UI/UX & School Project",
        year: "2025",
        tag: "UI/UX"
    },
    {
        title: "Rappelling Narrative",
        category: "Content & Web Study",
        year: "2025",
        tag: "NARRATIVE"
    }
];

const ProjectSection = () => {
    return (
        <section id="project" className="relative min-h-screen bg-[#e5e5e5] text-black py-24 px-[5%] overflow-hidden border-t-2 border-black">
            
            {/* --- ORNAMEN BACKGROUND (Konsisten dengan Hero & Experience) --- */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
            <div className="absolute inset-0 z-0 opacity-[0.1]" 
                style={{ backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
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
                            [ 05 / SELECTED WORKS ]
                        </span>
                        <h2 className="text-6xl md:text-[8vw] font-black italic tracking-tighter leading-[0.85] uppercase">
                            Digital <br /> <span className="text-white bg-black px-4">Artifacts.</span>
                        </h2>
                    </motion.div>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="max-w-xs text-[11px] font-bold uppercase tracking-widest leading-relaxed text-justify opacity-70"
                    >
                        Koleksi karya terpilih dan studi kasus pengembangan perangkat lunak selama perjalanan saya di IDN Boarding School.
                    </motion.p>
                </div>

                {/* Project List - Table Style with Hover Effect */}
                <div className="flex flex-col border-t-2 border-black">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 md:py-16 border-b-2 border-black cursor-pointer hover:bg-white transition-all duration-500 px-6 overflow-hidden"
                        >
                            {/* Title & Index */}
                            <div className="flex items-center gap-6 md:gap-16 z-10">
                                <span className="text-xl font-black italic opacity-20 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                                <div className="flex flex-col">
                                    <h3 className="text-3xl md:text-6xl font-black tracking-tighter uppercase group-hover:italic transition-all leading-none">
                                        {project.title}
                                    </h3>
                                    <span className="text-[10px] font-black tracking-[0.3em] uppercase mt-2 opacity-50 group-hover:opacity-100">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Year & Tag */}
                            <div className="flex flex-row md:flex-col items-center md:items-end gap-4 mt-6 md:mt-0 z-10">
                                <span className="bg-black text-white text-[9px] font-black px-3 py-1.5 uppercase italic border border-black group-hover:bg-white group-hover:text-black transition-colors">
                                    {project.tag}
                                </span>
                                <span className="text-sm font-black italic opacity-30 group-hover:opacity-100 transition-opacity">
                                    EST. {project.year}
                                </span>
                            </div>

                            {/* Decorative Background Fill */}
                            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-10 opacity-5" />
                        </motion.div>
                    ))}
                </div>

                {/* Footer Section */}
                <div className="mt-32 flex flex-col items-center">
                    <p className="text-[10px] font-black tracking-[0.4em] mb-8 uppercase opacity-50">Curious about the full catalog?</p>
                    <Link href="/projects">
                        <motion.button
                            whileHover={{ scale: 1.05, x: 10 }}
                            className="border-4 border-black px-12 py-5 font-black hover:bg-black hover:text-white transition-all uppercase tracking-tighter text-2xl italic shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
                        >
                            View All Projects ↗
                        </motion.button>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default ProjectSection;