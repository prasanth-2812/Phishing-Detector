"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Clock } from "lucide-react";
import Image from "next/image";

const doctors = [
  {
    name: "Dr. Elena Vance",
    role: "Lead Cosmetic Surgeon",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=600",
    experience: "15+ Years",
    edu: "Harvard School of Dental Medicine",
  },
  {
    name: "Dr. Marcus Chen",
    role: "Orthodontics Specialist",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    experience: "12+ Years",
    edu: "UPenn Dental Medicine",
  },
  {
    name: "Dr. Sarah Miller",
    role: "Pediatric Dentist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600",
    experience: "10+ Years",
    edu: "UCSF School of Dentistry",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand tracking-widest uppercase mb-4"
          >
            Our Experts
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-montserrat"
          >
            Meet the Masters of <span className="text-brand">Modern Dentistry.</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctors.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 shadow-xl">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8 z-10">
                  <button className="btn-primary w-full">View Full Profile</button>
                </div>
              </div>

              <h4 className="text-2xl font-bold mb-1">{doc.name}</h4>
              <p className="text-brand font-medium mb-4">{doc.role}</p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-foreground/60">
                  <GraduationCap size={18} className="text-brand" />
                  <span>{doc.edu}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground/60">
                  <Clock size={18} className="text-brand" />
                  <span>{doc.experience} Clinical Experience</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
