import { Button } from "../ui/button";
import { Cloud, Server, Shield, Settings, Monitor, Zap } from "lucide-react";

interface HeaderProps {
  currentPath?: string;
  LinkComponent?: React.ComponentType<{ to: string; className?: string; children: React.ReactNode }>;
}

const Header = ({ currentPath = "/", LinkComponent }: HeaderProps) => {
  const Component = LinkComponent || (({ to, children, ...props }) => <a href={to} {...props}>{children}</a>);
  return (
    <header className="border-b-4 border-text-primary bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Component to="/" className="font-bold text-lg sm:text-xl tracking-tight font-mono uppercase">
            MACHINE
          </Component>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Component to="/features" className="text-text-primary hover:bg-text-primary hover:text-background transition-none font-mono font-bold uppercase px-2 py-1 border border-transparent hover:border-text-primary text-sm lg:text-base">
              FEATURES
            </Component>
            <Component to="/compliance" className="text-text-primary hover:bg-text-primary hover:text-background transition-none font-mono font-bold uppercase px-2 py-1 border border-transparent hover:border-text-primary text-sm lg:text-base">
              COMPLIANCE
            </Component>
            <Component to="/pricing" className="text-text-primary hover:bg-text-primary hover:text-background transition-none font-mono font-bold uppercase px-2 py-1 border border-transparent hover:border-text-primary text-sm lg:text-base">
              PRICING
            </Component>
            <Component to="/about" className="text-text-primary hover:bg-text-primary hover:text-background transition-none font-mono font-bold uppercase px-2 py-1 border border-transparent hover:border-text-primary text-sm lg:text-base">
              ABOUT
            </Component>
          </nav>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button variant="accent" size="sm" className="font-bold text-xs sm:text-sm px-2 sm:px-4">
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