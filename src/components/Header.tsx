import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Cloud, Server, Shield, Settings, Monitor, Zap } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const headerTiles = [
    { icon: Monitor, label: "Any OS", desc: "macOS, Linux, Windows", span: "col-span-2 row-span-2 lg:row-span-3 lg:col-span-2" },
    { icon: Cloud, label: "Managed", desc: "Fully managed cloud", span: "row-span-2" },
    { icon: Server, label: "Self-Hosted", desc: "Run on your infra", span: "" },
    { icon: Settings, label: "Custom Specs", desc: "CPU, RAM, GPU", span: "col-span-2" },
    { icon: Shield, label: "Security", desc: "MFA, RBAC, audits", span: "" },
    { icon: Zap, label: "Instant Provisioning", desc: "< 60s deploys", span: "row-span-2" },
  ];
  return (
    <header className="border-b-4 border-text-primary bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl tracking-tight font-mono uppercase">
            MACHINE
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-text-primary hover:bg-text-primary hover:text-background transition-none font-mono font-bold uppercase px-2 py-1 border border-transparent hover:border-text-primary">
              FEATURES
            </Link>
            <Link to="/compliance" className="text-text-primary hover:bg-text-primary hover:text-background transition-none font-mono font-bold uppercase px-2 py-1 border border-transparent hover:border-text-primary">
              COMPLIANCE
            </Link>
            <Link to="/pricing" className="text-text-primary hover:bg-text-primary hover:text-background transition-none font-mono font-bold uppercase px-2 py-1 border border-transparent hover:border-text-primary">
              PRICING
            </Link>
            <Link to="/about" className="text-text-primary hover:bg-text-primary hover:text-background transition-none font-mono font-bold uppercase px-2 py-1 border border-transparent hover:border-text-primary">
              ABOUT
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="accent" size="sm" className="font-bold">
              GET STARTED
            </Button>
          </div>
        </div>
      </div>
      {isHome && (
        <div className="border-t border-border bg-surface">
          <div className="container mx-auto px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-4 max-w-xl">
                <h1 className="text-4xl lg:text-5xl font-bold text-text-primary font-mono uppercase tracking-tight">
                  Cloud machines on your terms
                </h1>
                <p className="text-base lg:text-lg text-text-secondary font-mono leading-relaxed">
                  Provision Mac, Linux, and Windows in under 60 seconds. Run fully managed or self-hosted. Security-first, audit-ready, and built to scale.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                  <Link to="/pricing">
                    <Button variant="accent" size="lg" className="font-bold px-8">
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/features">
                    <Button variant="outline" size="lg" className="font-bold px-8">
                      Explore Features
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-3 lg:grid-cols-4 auto-rows-[92px] lg:auto-rows-[100px] gap-4">
                  {headerTiles.map((item, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center justify-center gap-2 p-4 border-2 border-border bg-background hover:shadow-md hover:-translate-y-0.5 transition-all ${item.span}`}
                    >
                      <item.icon className="w-10 h-10 text-accent" />
                      <div className="text-xs font-mono uppercase text-text-primary tracking-wide text-center">
                        {item.label}
                      </div>
                      <div className="text-xs text-text-tertiary text-center">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;