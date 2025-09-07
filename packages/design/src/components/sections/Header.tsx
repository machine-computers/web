import { Button } from "../ui/button";
import { Cloud, Server, Shield, Settings, Monitor, Zap } from "lucide-react";

interface HeaderProps {
  currentPath?: string;
  LinkComponent?: React.ComponentType<{ to: string; className?: string; children: React.ReactNode }>;
}

const Header = ({ currentPath = "/", LinkComponent = "a" as any }: HeaderProps) => {
  const isHome = currentPath === "/";

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
          <LinkComponent to="/" className="font-bold text-xl tracking-tight font-mono uppercase">
            MACHINE
          </LinkComponent>
          <nav className="hidden md:flex items-center space-x-8">
            <LinkComponent to="/features" className="text-text-primary hover:bg-text-primary hover:text-background transition-none font-mono font-bold uppercase px-2 py-1 border border-transparent hover:border-text-primary">
              FEATURES
            </LinkComponent>
            <LinkComponent to="/compliance" className="text-text-primary hover:bg-text-primary hover:text-background transition-none font-mono font-bold uppercase px-2 py-1 border border-transparent hover:border-text-primary">
              COMPLIANCE
            </LinkComponent>
            <LinkComponent to="/pricing" className="text-text-primary hover:bg-text-primary hover:text-background transition-none font-mono font-bold uppercase px-2 py-1 border border-transparent hover:border-text-primary">
              PRICING
            </LinkComponent>
            <LinkComponent to="/about" className="text-text-primary hover:bg-text-primary hover:text-background transition-none font-mono font-bold uppercase px-2 py-1 border border-transparent hover:border-text-primary">
              ABOUT
            </LinkComponent>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="accent" size="sm" className="font-bold">
              GET STARTED
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
export default Header;