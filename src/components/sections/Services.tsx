"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Activity, Heart, Shield, Award } from "lucide-react";

const services = [
  {
    title: "Teeth Cleaning",
    description: "Gentle professional cleaning for a refreshed, sparkling smile.",
    icon: <Sparkles />,
    color: "bg-blue-50 text-blue-500",
  },
  {
    title: "Dental Implants",
    description: "Permanent, natural-looking solutions for missing teeth.",
    icon: <Zap />,
    color: "bg-teal-50 text-teal-500",
  },
  {
    title: "Root Canal",
    description: "Advanced painless techniques to save your natural teeth.",
    icon: <Activity />,
    color: "bg-purple-50 text-purple-500",
  },
  {
    title: "Smile Designing",
    description: "Custom aesthetic transformations tailored to your face.",
    icon: <Heart />,
    color: "bg-pink-50 text-pink-500",
  },
  {
    title: "Invisalign & Braces",
    description: "Straighten your teeth with modern, discreet options.",
    icon: <Shield />,
    color: "bg-orange-50 text-orange-500",
  },
  {
    title: "Pediatric Care",
    description: "Gentle dental experiences for our youngest patients.",
    icon: <Award />,
    color: "bg-green-50 text-green-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-dental-soft/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand tracking-widest uppercase mb-4"
          >
            Excellence in Care
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-montserrat"
          >
            Comprehensive Dentistry for Your <span className="text-brand">Whole Family.</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-foreground/70 leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="text-brand font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn More <span>→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
