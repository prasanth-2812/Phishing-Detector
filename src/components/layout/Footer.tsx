import Link from "next/link";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dental-soft pt-20 pb-10 px-6 md:px-12 lg:px-24 border-t border-brand/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center text-white">
              <Sparkles size={24} />
            </div>
            <span className="text-xl font-bold font-montserrat tracking-tight">
              SmileCraft<span className="text-brand">Studio</span>
            </span>
          </Link>
          <p className="text-foreground/70 leading-relaxed">
            Crafting confident smiles with modern care. We combine advanced dentistry with a gentle human touch to provide an exceptional patient experience.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
            {[1, 2, 3].map((i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-brand/10 flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-all shadow-sm"
              >
                <Sparkles size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
          <ul className="space-y-4">
            {["Our Services", "About the Clinic", "Modern Technology", "Meet our Doctors", "Patient Stories"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-foreground/70 hover:text-brand transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-foreground/70">
              <MapPin className="text-brand shrink-0" size={20} />
              <span>123 Dental Excellence Way, <br />Suite 100, San Francisco, CA 94105</span>
            </li>
            <li className="flex items-center gap-3 text-foreground/70">
              <Phone className="text-brand shrink-0" size={20} />
              <span>+1 (555) 000-0000</span>
            </li>
            <li className="flex items-center gap-3 text-foreground/70">
              <Mail className="text-brand shrink-0" size={20} />
              <span>hello@smilecraft.studio</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Clinic Hours</h4>
          <ul className="space-y-3">
            {[
              { day: "Mon - Fri", hours: "9:00 AM - 7:00 PM" },
              { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
              { day: "Sunday", hours: "Closed" },
            ].map((item) => (
              <li key={item.day} className="flex justify-between text-foreground/70">
                <span className="font-medium text-foreground">{item.day}</span>
                <span>{item.hours}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-4 bg-white rounded-xl border border-brand/10 text-sm">
            <p className="font-bold text-red-500 mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Emergency Case?
            </p>
            <p className="text-foreground/70">+1 (555) 999-9999</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-brand/5 flex flex-col md:row items-center justify-between gap-4 text-sm text-foreground/50">
        <p>© 2024 SmileCraft Dental Studio. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
