import { Metadata } from 'next';
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Programs from "@/components/Programs";
import WhyAIE from "@/components/WhyAIE";
import { CampusLife, Testimonials, AdmissionsCTA } from "@/components/CampusLife";
import Partners from "@/components/Partners";
export const metadata = {
  title: "Atlas Institute of Education – Excellence in Higher Education",
  description: "Atlas Institute of Education offers 200+ programs across engineering, science, commerce, arts and management. NAAC A++ accredited. Apply for 2025-26 admissions.",
};
 


export default function HomePage() {
  return (
    <main className="bg-gray-50">
      <HeroSection      />
      <About />
      <WhyAIE />
      <Programs />
      <CampusLife />
      <Partners />
      <Testimonials />
      <AdmissionsCTA />

      
    </main>
  );
}