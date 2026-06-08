import { Metadata } from 'next';
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Programs from "@/components/Programs";
import { CampusLife, Testimonials, AdmissionsCTA } from "@/components/CampusLife";
export const metadata = {
  title: "SSHE – Excellence in Higher Education",
  description: "SSHE offers 200+ programs across engineering, science, commerce, arts and management. NAAC A++ accredited. Apply for 2025-26 admissions.",
};
 


export default function HomePage() {
  return (
    <main className="bg-gray-50">
      <HeroSection      />
      <About />
      <Programs />
      <CampusLife />
      <Testimonials />
      <AdmissionsCTA />

      
    </main>
  );
}