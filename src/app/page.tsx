import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/Hero";
import TrustIntro from "@/components/sections/TrustIntro";
import Services from "@/components/sections/Services";
import SmileStories from "@/components/sections/SmileStories";
import Technology from "@/components/sections/Technology";
import Doctors from "@/components/sections/Doctors";
import ClinicExperience from "@/components/sections/ClinicExperience";
import Testimonials from "@/components/sections/Testimonials";
import AppointmentCTA from "@/components/sections/AppointmentCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustIntro />
      <Services />
      <SmileStories />
      <Technology />
      <Doctors />
      <ClinicExperience />
      <Testimonials />
      <AppointmentCTA />
      <Footer />
    </>
  );
}
