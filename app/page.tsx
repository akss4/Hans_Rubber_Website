import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import AboutManufacturing from "@/components/sections/AboutManufacturing";
import BestSellerAndSolutions from "@/components/sections/BestSellerAndSolutions";
import InnovationQuality from "@/components/sections/InnovationQuality";
import ServicesSection from "@/components/sections/ServicesSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#020617]">
      <Navbar />
      <HeroSection />
      <ProductShowcase />
      <AboutManufacturing />
      <BestSellerAndSolutions />
      <InnovationQuality />
      <ServicesSection />
      <FAQSection />
      <Footer />
      
      {/* Other sections would go here */}
    </main>
  );
}
