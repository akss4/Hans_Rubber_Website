import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import AboutManufacturing from "@/components/sections/AboutManufacturing";
import BestSellerAndSolutions from "@/components/sections/BestSellerAndSolutions";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#020617]">
      <Navbar />
      <HeroSection />
      <ProductShowcase />
      <AboutManufacturing />
      <BestSellerAndSolutions />
      
      {/* Other sections would go here */}
    </main>
  );
}
