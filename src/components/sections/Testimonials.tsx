"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "James Wilson",
    text: "The best dental experience I've ever had. The technology they use is mind-blowing, and Dr. Vance made me feel so comfortable throughout the process.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=james",
  },
  {
    name: "Linda Garcia",
    text: "I was always anxious about dentists, but SmileCraft changed that. The clinic feels more like a spa than a hospital. Highly recommended!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=linda",
  },
  {
    name: "Robert Fox",
    text: "Professional, efficient, and friendly. My implants look and feel completely natural. Thank you for giving me my confidence back!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=robert",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand tracking-widest uppercase mb-4"
          >
            Kind Words
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-montserrat"
          >
            What Our Patients <span className="text-brand">Are Saying.</span>
          </motion.h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden px-4 py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="p-10 md:p-16 rounded-[3rem] bg-dental-soft/50 border border-brand/10 relative text-center"
              >
                <Quote className="absolute top-10 left-10 text-brand/10 w-20 h-20" />

                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-brand text-brand" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-10 italic relative z-10">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-bold text-lg">{testimonials[currentIndex].name}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-all z-20"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-all z-20"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
