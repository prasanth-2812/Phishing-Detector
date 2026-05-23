"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, Users, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-dental-soft/50 -skew-x-12 translate-x-1/4 z-0 hidden lg:block" />
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-brand/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-dental-cyan/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand font-medium text-sm mb-6"
          >
            <Star size={16} className="fill-brand" />
            <span>Top Rated Dental Studio in San Francisco</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold font-montserrat leading-[1.1] mb-6 text-foreground">
            Your Smile Deserves <br />
            <span className="text-gradient">Exceptional Care.</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-xl leading-relaxed">
            Experience advanced dentistry with a gentle human touch. We combine artistic precision with modern technology to craft your perfect smile.
          </p>

          <div className="flex flex-col sm:row items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Book Appointment <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary w-full sm:w-auto"
            >
              Meet Our Doctors
            </motion.button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-brand">
                <Users size={24} />
              </div>
              <div>
                <p className="font-bold text-xl">15k+</p>
                <p className="text-sm text-foreground/60">Happy Patients</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-brand">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="font-bold text-xl">100%</p>
                <p className="text-sm text-foreground/60">Safe & Sterile</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent z-10" />
            <Image
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
              alt="Smiling Patient"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
              priority
            />
          </div>

          {/* Floating UI Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 md:-left-12 glass p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 max-w-[240px]"
          >
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <Star size={20} className="fill-current" />
            </div>
            <div>
              <p className="text-xs text-foreground/60">Average Rating</p>
              <p className="font-bold">4.9/5 Excellence</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -right-6 md:-right-10 glass p-5 rounded-2xl shadow-xl z-20"
          >
            <div className="flex -space-x-3 mb-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <Image fill src={`https://i.pravatar.cc/150?img=${i+10}`} alt="Patient" />
                </div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-white bg-brand text-white flex items-center justify-center text-[10px] font-bold">
                +2k
              </div>
            </div>
            <p className="text-sm font-medium">Joined this month</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
