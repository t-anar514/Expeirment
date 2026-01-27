"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { projectsData } from "../../data/projects";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectDetailPage = ({ params }) => {
  const { id } = params;
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4 text-white">
          <h1 className="text-4xl font-bold">Project not found</h1>
        </div>
        <Footer />
      </main>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#050505] relative overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[140px]"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[700px] h-[700px] bg-pink-600/15 rounded-full blur-[140px]"
        />
        <div className="absolute inset-0 bg-[url('/images/dots.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>
      
      <Navbar />
      
      <motion.div 
        className="container mt-24 mx-auto px-6 md:px-12 py-8 z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Link href="/#projects" className="group text-slate-500 hover:text-white transition-all mb-12 inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:bg-white/10">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Projects
        </Link>

        {/* Premium Glassmorphic Container */}
        <motion.div 
          variants={itemVariants}
          className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_25px_100px_-20px_rgba(0,0,0,0.8)]"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            
            {/* Image Preview Section */}
            <div className="relative h-[450px] lg:h-auto min-h-[500px] overflow-hidden group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent lg:hidden"></div>
              {/* Overlay Glass Effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Content Details Section */}
            <div className="p-8 md:p-14 lg:p-20 flex flex-col justify-center">
              <motion.div variants={itemVariants} className="space-y-8">
                <div>
                  <h1 className="text-6xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-purple-300 to-pink-500 tracking-tighter">
                    {project.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light max-w-2xl">
                    {project.longDescription || project.description}
                  </p>
                </div>

                {/* Features & Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-white/5">
                  {project.features && (
                    <div className="space-y-6">
                      <h3 className="text-xs uppercase tracking-[0.3em] font-black text-purple-400/80">Key Capabilities</h3>
                      <ul className="space-y-4">
                        {project.features.map((feature, index) => (
                          <motion.li 
                            key={index} 
                            variants={itemVariants}
                            className="flex items-start gap-4 text-slate-400 group/item"
                          >
                            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-pink-500 text-xs transition-colors group-hover/item:bg-pink-500/10">
                              ✦
                            </span>
                            <span className="pt-1">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3 className="text-xs uppercase tracking-[0.3em] font-black text-purple-400/80">Current Status</h3>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <p className="text-slate-200 font-medium tracking-wide">Production Ready</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xs uppercase tracking-[0.3em] font-black text-purple-400/80">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2.5">
                        {['Next.js', 'Framer', 'Tailwind', 'Canvas'].map((tech) => (
                          <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-medium text-slate-300 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-6 pt-10">
                  <Link
                    href={project.previewUrl}
                    className="group relative px-10 py-5 rounded-[1.5rem] bg-gradient-to-br from-purple-600 to-pink-600 text-white font-bold transition-all hover:shadow-[0_20px_50px_-15px_rgba(168,85,247,0.5)] hover:-translate-y-1.5 active:scale-95 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Experience Live <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </Link>

                  <Link
                    href={project.gitUrl}
                    className="px-10 py-5 rounded-[1.5rem] bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1.5 active:scale-95 flex items-center gap-2"
                  >
                    View Source
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      <Footer />
    </main>
  );
};

export default ProjectDetailPage;
