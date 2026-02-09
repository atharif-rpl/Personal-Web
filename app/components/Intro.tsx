"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';


const Intro = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Intro akan hilang setelah 3.5 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants: Variants = {
    initial: {}, // Tambahkan initial kosong jika belum ada
    exit: {
      y: "-100%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
  };
  
  const textVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  const words = [
    "你好",
    "I am Atharif",
    "Software Engineering Student",
    "IDN Boarding School",
    "Welcome to My Portfolio"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === words.length - 1) return;
    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, 600); // Kecepatan pergantian kata
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-[999] bg-black flex items-center justify-center text-white"
        >
          <motion.div
            key={index}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex items-center gap-4"
          >
            {/* Dot Indicator */}
            <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
            <h1 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">
              {words[index]}
            </h1>
          </motion.div>
          
          {/* Progress Line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "linear" }}
            className="absolute bottom-0 left-0 h-1 bg-white"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;