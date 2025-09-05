import Header from "@/components/Header";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Compliance from "@/components/Compliance";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Features />
        <Benefits />
        <Compliance />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;