"use client";

import { motion } from "framer-motion";
import { Calendar, Phone, Mail, MapPin } from "lucide-react";

export default function AppointmentCTA() {
  return (
    <section id="appointment" className="section-padding bg-brand overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/5 rounded-full translate-y-1/3 -translate-x-1/4 blur-2xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-montserrat mb-8 leading-tight">
              Ready to Love <br />
              Your Smile Again?
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Book your initial consultation today and take the first step towards the smile you’ve always dreamed of. Our team is ready to welcome you.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/60">Call Us Directly</p>
                  <p className="text-xl font-bold">+1 (555) 000-0000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/60">Email Support</p>
                  <p className="text-xl font-bold">hello@smilecraft.studio</p>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="rounded-3xl overflow-hidden h-64 border-4 border-white/10 shadow-xl relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.013233800642!2d-122.3999!3d37.7899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806296766723%3A0x633e08502d9f4850!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Clinic Location"
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              ></iframe>
              <div className="absolute top-4 left-4 glass px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-foreground">
                <MapPin size={14} className="text-brand" />
                Find Us in San Francisco
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-foreground">
              <Calendar className="text-brand" />
              Book Appointment
            </h3>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-foreground/70">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-foreground/70">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-foreground/70">Select Service</label>
                <select className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all">
                  <option>General Checkup</option>
                  <option>Teeth Whitening</option>
                  <option>Dental Implants</option>
                  <option>Smile Designing</option>
                  <option>Invisalign</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-foreground/70">Message (Optional)</label>
                <textarea placeholder="Tell us about your needs..." className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 h-32 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all" />
              </div>

              <button className="btn-primary w-full py-5 text-lg">Send Appointment Request</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
