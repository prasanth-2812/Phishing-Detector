"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SmileStories() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = ("touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX) - container.left;
    const position = Math.max(0, Math.min(100, (x / container.width) * 100));
    setSliderPos(position);
  };

  const safeSliderPos = Math.max(1, sliderPos);

  return (
    <section id="stories" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-brand tracking-widest uppercase mb-4">Patient Transformations</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-montserrat mb-8 leading-tight">
              Real Stories. <br />
              <span className="text-gradient">Life-Changing Results.</span>
            </h3>
            <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
              Nothing speaks louder than the smiles of our patients. Witness the incredible transformations achieved through our personalized treatment plans and advanced cosmetic dentistry.
            </p>

            <div className="p-8 rounded-3xl bg-dental-soft border border-brand/10 italic text-foreground/80 mb-8">
              "The team at SmileCraft completely changed how I feel about my smile. The process was painless, and the results were beyond my expectations. I can't stop smiling!"
              <div className="mt-4 not-italic font-bold text-foreground">— Sarah Jenkins, Smile Transformation Patient</div>
            </div>
          </motion.div>

          <div className="relative group select-none">
             <div
              className="relative aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden cursor-ew-resize shadow-2xl"
              onMouseMove={handleMove}
              onTouchMove={handleMove}
            >
              {/* After Image */}
              <Image
                src="https://images.unsplash.com/photo-1599839619722-39751411883e?auto=format&fit=crop&q=80&w=800"
                alt="After treatment"
                fill
                className="object-cover"
              />

              {/* Before Image */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <div
                  className="absolute inset-0 h-full"
                  style={{ width: `${100 * 100 / safeSliderPos}%` }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1571772996211-2f02c97da19d?auto=format&fit=crop&q=80&w=800"
                    alt="Before treatment"
                    fill
                    className="object-cover grayscale brightness-90"
                  />
                </div>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] z-10"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-brand">
                  <div className="flex gap-1">
                    <div className="w-1 h-3 bg-brand/30 rounded-full" />
                    <div className="w-1 h-3 bg-brand rounded-full" />
                    <div className="w-1 h-3 bg-brand/30 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 glass px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider z-20">Before</div>
              <div className="absolute bottom-6 right-6 glass px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider z-20">After</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
