import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Shield, Settings, Monitor, Server } from "lucide-react";
import heroImage from "@/assets/hero-cloud-machines.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background border-b-4 border-text-primary">
      <div className="container mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-8xl font-bold tracking-tight text-text-primary font-mono uppercase leading-[0.9]">
                CLOUD MACHINES
                <br />
                <span className="font-bold text-accent">YOUR SPECS</span>
              </h1>
              <p className="text-xl lg:text-2xl text-text-secondary max-w-lg font-mono leading-relaxed">
                Your OS. Your hardware specs. Your network config.
                <br />
                <span className="block mt-4">Stop leaving decommissioned laptops on shelves.</span>
                <br />
                <strong className="text-accent font-bold">Complete freedom.</strong>
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 text-sm text-text-primary font-mono font-bold uppercase">
                <div className="flex items-center gap-2 border border-text-primary px-2 py-1">
                  <Monitor className="w-4 h-4" />
                  MACOS
                </div>
                <div className="flex items-center gap-2 border border-text-primary px-2 py-1">
                  <Monitor className="w-4 h-4" />
                  LINUX
                </div>
                <div className="flex items-center gap-2 border border-text-primary px-2 py-1">
                  <Monitor className="w-4 h-4" />
                  WINDOWS
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 text-sm text-text-primary font-mono font-bold uppercase">
                <div className="flex items-center gap-2 border border-accent px-2 py-1 bg-accent text-accent-foreground">
                  <Cloud className="w-4 h-4" />
                  MANAGED
                </div>
                <div className="flex items-center gap-2 border border-text-primary px-2 py-1">
                  <Server className="w-4 h-4" />
                  SELF-HOSTED
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="accent" size="lg" className="group text-lg px-12 py-4 h-14">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-12 py-4 h-14">
                Schedule Demo
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Cloud computing infrastructure"
              className="w-full h-auto border-4 border-text-primary shadow-lg"
            />
            <div className="absolute inset-0 bg-background/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;