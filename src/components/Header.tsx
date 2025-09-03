import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b-4 border-text-primary bg-background sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl tracking-tight font-mono uppercase">
            MACHINE
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-text-primary hover:bg-text-primary hover:text-background transition-none font-mono font-bold uppercase px-2 py-1 border border-transparent hover:border-text-primary">
              FEATURES
            </a>
            <a href="#compliance" className="text-text-primary hover:bg-text-primary hover:text-background transition-none font-mono font-bold uppercase px-2 py-1 border border-transparent hover:border-text-primary">
              COMPLIANCE
            </a>
            <a href="#pricing" className="text-text-primary hover:bg-text-primary hover:text-background transition-none font-mono font-bold uppercase px-2 py-1 border border-transparent hover:border-text-primary">
              PRICING
            </a>
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

export default Header;