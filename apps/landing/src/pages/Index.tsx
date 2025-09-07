import { Header, Footer } from "@machine/design";
import { Link, useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ROICalculator from "@/components/ROICalculator";
import Compliance from "@/components/Compliance";
import Pricing from "@/components/Pricing";
import heroImage from "@/assets/hero-cloud-machines.jpg";

const Index = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-background">
      <Header currentPath={location.pathname} LinkComponent={Link} />
      <main>
        <Hero heroImage={heroImage} />
        <Features />
        <ROICalculator />
        <Compliance />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;