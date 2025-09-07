import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Shield, Settings, Monitor, Server, TrendingUp, Users, DollarSign, Zap, Globe } from "lucide-react";
import heroImage from "@/assets/hero-cloud-machines.jpg";

const Hero = () => {
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
              <h1 className="text-4xl lg:text-8xl font-bold tracking-tight text-text-primary font-mono uppercase leading-[0.9]">
                COMPUTE
                <br />
                <span className="font-bold text-accent">ON DEMAND</span>
                <br />
                ANYWHERE
              </h1>
              <p className="text-xl lg:text-2xl text-text-secondary max-w-lg font-mono leading-relaxed">
                Modern workloads demand compute power. We supply it in <strong className="text-accent">60 seconds</strong>. 
                Any OS, any spec, any scale.
                <br />
                <span className="block mt-4">Pioneer the future of distributed computing.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="accent" size="lg" className="group text-lg px-12 py-4 h-14 font-bold">
                Get a Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-12 py-4 h-14 font-bold">
                Book Demo
              </Button>
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
              <img 
                src={heroImage} 
                alt="Cloud computing infrastructure"
                className="w-full h-auto border-4 border-text-primary shadow-lg"
              />
              <div className="absolute inset-0 bg-background/10" />
              
              {/* Floating metrics cards */}
              <div className="absolute top-4 right-4 bg-background border-2 border-text-primary p-4 shadow-lg">
                <div className="text-2xl font-bold text-text-primary font-mono">&lt; 60s</div>
                <div className="text-xs text-text-secondary font-mono uppercase">Deploy Time</div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-accent text-accent-foreground border-2 border-accent p-4 shadow-lg">
                <div className="text-2xl font-bold font-mono">99.9%</div>
                <div className="text-xs font-mono uppercase">Uptime</div>
              </div>
              
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-background border-2 border-text-primary p-3 shadow-lg">
                <div className="text-lg font-bold text-text-primary font-mono">24/7</div>
                <div className="text-xs text-text-secondary font-mono uppercase">Support</div>
              </div>
            </div>
            
            {/* OS/Architecture and Deployment badges under image */}
            <div className="mt-6 space-y-4 lg:ml-8">
              <div className="flex flex-wrap gap-2 text-sm text-text-primary font-mono font-bold uppercase">
                <div className="flex items-center gap-2 border border-text-primary px-3 py-2">
                  <Monitor className="w-4 h-4" />
                  MACOS M-SERIES
                </div>
                <div className="flex items-center gap-2 border border-text-primary px-3 py-2">
                  <Monitor className="w-4 h-4" />
                  LINUX ARM64
                </div>
                <div className="flex items-center gap-2 border border-text-primary px-3 py-2">
                  <Monitor className="w-4 h-4" />
                  WINDOWS x86
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 text-sm text-text-primary font-mono font-bold uppercase">
                <div className="flex items-center gap-2 border border-accent px-3 py-2 bg-accent text-accent-foreground">
                  <Cloud className="w-4 h-4" />
                  ENTERPRISE MANAGED
                </div>
                <div className="flex items-center gap-2 border border-text-primary px-3 py-2">
                  <Server className="w-4 h-4" />
                  PRIVATE CLOUD
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;