"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles, Heart, Microscope } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Safety First",
    description: "Highest standards of sterilization and hygiene protocols for your peace of mind.",
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: "Advanced Tech",
    description: "Equipped with state-of-the-art diagnostic and treatment technology.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Gentle Care",
    description: "A patient-centric approach focused on comfort and anxiety-free treatments.",
  },
];

export default function TrustIntro() {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video md:aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                alt="Modern Clinic"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand/10 rounded-full blur-3xl -z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl z-20 max-w-[200px]"
            >
              <Sparkles className="text-brand mb-2" />
              <p className="font-bold text-lg">10+ Years</p>
              <p className="text-sm text-foreground/60">of clinical excellence in dentistry</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-brand tracking-widest uppercase mb-4">Our Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-montserrat mb-8 leading-tight">
              A Modern Approach to <span className="text-brand">Timeless Smiles.</span>
            </h3>
            <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
              At SmileCraft, we believe dentistry is an art backed by science. We don't just fix teeth; we transform lives by restoring confidence. Our studio is designed to feel like a sanctuary—calm, welcoming, and technologically superior.
            </p>

            <div className="grid gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-dental-soft transition-colors"
                >
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                    <p className="text-foreground/60">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
