import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProductShowcase from "@/components/sections/ProductShowcase";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#020617]">
      <Navbar />
      <HeroSection />
      <ProductShowcase />
      
      {/* Other sections would go here */}
    </main>
  );
}
