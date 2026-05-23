"use client";

import { motion } from "framer-motion";
import { Cpu, Scan, Monitor, Zap } from "lucide-react";
import Image from "next/image";

const techs = [
  {
    title: "3D Digital Scanning",
    desc: "No more messy impressions. Our digital scanners create precise 3D models of your teeth in minutes.",
    icon: <Scan />,
  },
  {
    title: "AI-Assisted Diagnostics",
    desc: "Leveraging artificial intelligence to detect dental issues earlier and more accurately than ever before.",
    icon: <Cpu />,
  },
  {
    title: "Digital Smile Design",
    desc: "See your future smile before we even begin. We map out your transformation digitally for perfect results.",
    icon: <Monitor />,
  },
  {
    title: "Laser Dentistry",
    desc: "Painless, precise treatments using advanced laser technology for faster healing and zero discomfort.",
    icon: <Zap />,
  },
];

export default function Technology() {
  return (
    <section id="tech" className="section-padding bg-white overflow-hidden relative">
       {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-dental-cyan/5 rounded-full blur-[120px] -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand tracking-widest uppercase mb-4"
          >
            The Future of Dentistry
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold font-montserrat text-foreground"
          >
            Advanced Technology, <br />
            <span className="text-brand">Human Precision.</span>
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="grid gap-8">
            {techs.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-3xl bg-dental-soft/50 border border-brand/10 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand shrink-0 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-foreground">{tech.title}</h4>
                    <p className="text-foreground/60 leading-relaxed">{tech.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-brand/10 shadow-2xl aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                alt="Dental Technology"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
            </div>

            {/* Floating Data Panels */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-6 glass p-5 rounded-2xl shadow-2xl z-20"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand">System Active</span>
              </div>
              <p className="text-xl font-bold text-foreground">99.8% Precision</p>
              <p className="text-[10px] text-foreground/50 mt-1 uppercase">Digital Alignment Mapping</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
