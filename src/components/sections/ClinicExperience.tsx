"use client";

import { motion } from "framer-motion";
import { Coffee, Wifi, Music, Sofa } from "lucide-react";
import Image from "next/image";

const amenities = [
  { icon: <Coffee />, label: "Gourmet Coffee Bar" },
  { icon: <Wifi />, label: "High-Speed Wi-Fi" },
  { icon: <Music />, label: "Curated Playlists" },
  { icon: <Sofa />, label: "Premium Lounge" },
];

export default function ClinicExperience() {
  return (
    <section id="clinic" className="section-padding bg-dental-soft/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-brand tracking-widest uppercase mb-4">Patient Comfort</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-montserrat mb-8">
              A Dental Visit That Feels Like <span className="text-brand">A Retreat.</span>
            </h3>
            <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
              We’ve redefined the dental experience. From our spa-like lounge to our private treatment suites with ceiling-mounted TVs, every detail is designed for your ultimate comfort and relaxation.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {amenities.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                  <div className="text-brand">{item.icon}</div>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <button className="btn-secondary">Take a Virtual Tour</button>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 h-[600px]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 pt-12"
            >
              <div className="h-2/3 rounded-[2rem] overflow-hidden shadow-xl relative">
                <Image
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=600"
                  alt="Clinic Lounge"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="h-1/3 rounded-[2rem] overflow-hidden shadow-xl relative">
                <Image
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600"
                  alt="Modern Equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="h-1/3 rounded-[2rem] overflow-hidden shadow-xl relative">
                <Image
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600"
                  alt="Sterilization Area"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="h-2/3 rounded-[2rem] overflow-hidden shadow-xl relative">
                <Image
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600"
                  alt="Consultation Room"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
