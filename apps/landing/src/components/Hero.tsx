import { Button } from "@machine/design";
import { ArrowRight, Cloud, Shield, Monitor, Server, TrendingUp, Globe } from "lucide-react";

interface HeroProps {
  heroImage?: string;
}

const Hero = ({ heroImage }: HeroProps) => {
  return (
    <section className="relative overflow-hidden bg-background border-b-4 border-text-primary">
      <div className="container mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground font-mono text-sm font-bold uppercase border-2 border-accent">
                <TrendingUp className="w-4 h-4" />
                Next-Generation Computing
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-8xl font-bold tracking-tight text-text-primary font-mono uppercase leading-[0.9]">
                COMPUTE
                <br />
                <span className="font-bold text-accent">ON DEMAND</span>
                <br />
                ANYWHERE
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-lg font-mono leading-relaxed">
                Modern workloads demand compute power. We supply it in <strong className="text-accent">60 seconds</strong>. 
                Any OS, any spec, any scale.
                <br />
                <span className="block mt-4">Pioneer the future of distributed computing.</span>
              </p>
            </div>
            
             <div className="flex flex-col sm:flex-row gap-6">
               <a href="https://getwaitlist.com/waitlist/31022" target="_blank" rel="noopener noreferrer">
                 <Button variant="accent" size="lg" className="group text-lg px-12 py-4 h-14 font-bold">
                   Join Waitlist
                   <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                 </Button>
               </a>
             </div>

            {/* Compliance badges - compact grid */}
            <div className="pt-6 border-t border-border">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 px-3 py-2 bg-surface border border-border text-xs font-mono uppercase">
                  <Shield className="w-3 h-3 text-accent" />
                  SOC 2 Type II
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-surface border border-border text-xs font-mono uppercase">
                  <Shield className="w-3 h-3 text-accent" />
                  ISO 27001
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-surface border border-border text-xs font-mono uppercase">
                  <Shield className="w-3 h-3 text-accent" />
                  GDPR Ready
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-surface border border-border text-xs font-mono uppercase">
                  <Globe className="w-3 h-3 text-accent" />
                  Data Residency
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 relative">
            {/* Enhanced visual with metrics overlay */}
            <div className="relative lg:ml-8">
              {heroImage && (
                <img 
                  src={heroImage} 
                  alt="Cloud computing infrastructure"
                  className="w-full h-auto border-4 border-text-primary shadow-lg"
                />
              )}
              <div className="absolute inset-0 bg-background/10" />
              
              {/* Floating metrics cards - hidden on mobile */}
              <div className="hidden md:block absolute top-4 right-4 bg-background border-2 border-text-primary p-4 shadow-lg">
                <div className="text-2xl font-bold text-text-primary font-mono">&lt; 60s</div>
                <div className="text-xs text-text-secondary font-mono uppercase">Deploy Time</div>
              </div>
              
              <div className="hidden md:block absolute bottom-4 left-4 bg-accent text-accent-foreground border-2 border-accent p-4 shadow-lg">
                <div className="text-2xl font-bold font-mono">99.9%</div>
                <div className="text-xs font-mono uppercase">Uptime</div>
              </div>
              
              <div className="hidden lg:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-background border-2 border-text-primary p-3 shadow-lg">
                <div className="text-lg font-bold text-text-primary font-mono">24/7</div>
                <div className="text-xs text-text-secondary font-mono uppercase">Support</div>
              </div>
            </div>
            
            {/* OS/Architecture and Deployment badges under image */}
            <div className="mt-6 space-y-4 lg:ml-8">
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-text-primary font-mono font-bold uppercase">
                <div className="flex items-center gap-1 sm:gap-2 border border-text-primary px-2 sm:px-3 py-1 sm:py-2">
                  <Monitor className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">MACOS M-SERIES</span>
                  <span className="sm:hidden">MACOS</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 border border-text-primary px-2 sm:px-3 py-1 sm:py-2">
                  <Monitor className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">LINUX ARM64</span>
                  <span className="sm:hidden">LINUX</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 border border-text-primary px-2 sm:px-3 py-1 sm:py-2">
                  <Monitor className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">WINDOWS x86</span>
                  <span className="sm:hidden">WINDOWS</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-text-primary font-mono font-bold uppercase">
                <div className="flex items-center gap-1 sm:gap-2 border border-accent px-2 sm:px-3 py-1 sm:py-2 bg-accent text-accent-foreground">
                  <Cloud className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">ENTERPRISE MANAGED</span>
                  <span className="sm:hidden">MANAGED</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 border border-text-primary px-2 sm:px-3 py-1 sm:py-2">
                  <Server className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">PRIVATE CLOUD</span>
                  <span className="sm:hidden">PRIVATE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export { Hero };
export default Hero;