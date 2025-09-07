import { Button } from "../ui/button";
import { PanelLeft, X } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  LinkComponent?: React.ComponentType<{ to: string; className?: string; children: React.ReactNode }>;
}

const Header = ({ LinkComponent }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  const Component = LinkComponent || (({ to, children, ...props }) => <a href={to} {...props}>{children}</a>);
  return (
    <header className="border-b-4 border-text-primary bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Component to="/" className="font-bold text-lg sm:text-xl tracking-tight font-mono uppercase">
            MACHINE
          </Component>

          {/* Desktop Navigation */}
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

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-2 sm:space-x-4">
            <a href="https://getwaitlist.com/waitlist/31022" target="_blank" rel="noopener noreferrer">
              <Button variant="accent" size="sm" className="font-bold text-xs sm:text-sm px-2 sm:px-4">
                JOIN WAITLIST
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-text-primary hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <PanelLeft className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-text-primary relative z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-left"
              >
                <Component
                  to="/features"
                  className="text-text-primary hover:bg-text-primary hover:text-background transition-none font-mono font-bold uppercase px-3 py-2 border border-transparent hover:border-text-primary text-base block w-full"
                >
                  FEATURES
                </Component>
              </button>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-left"
              >
                <Component
                  to="/compliance"
                  className="text-text-primary hover:bg-text-primary hover:text-background transition-none font-mono font-bold uppercase px-3 py-2 border border-transparent hover:border-text-primary text-base block w-full"
                >
                  COMPLIANCE
                </Component>
              </button>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-left"
              >
                <Component
                  to="/pricing"
                  className="text-text-primary hover:bg-text-primary hover:text-background transition-none font-mono font-bold uppercase px-3 py-2 border border-transparent hover:border-text-primary text-base block w-full"
                >
                  PRICING
                </Component>
              </button>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-left"
              >
                <Component
                  to="/about"
                  className="text-text-primary hover:bg-text-primary hover:text-background transition-none font-mono font-bold uppercase px-3 py-2 border border-transparent hover:border-text-primary text-base block w-full"
                >
                  ABOUT
                </Component>
              </button>
              <div className="pt-4 border-t border-text-primary">
                <a href="https://getwaitlist.com/waitlist/31022" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="accent" size="lg" className="w-full font-bold text-base">
                    JOIN WAITLIST
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export { Header };
export default Header;