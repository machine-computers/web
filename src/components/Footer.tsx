const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="font-semibold text-xl">machine</div>
            <p className="text-text-secondary text-sm">
              Cloud computing solutions designed for modern businesses.
            </p>
            <p className="text-text-tertiary text-xs">
              Founded in Europe
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-text-primary">Product</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Compliance</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-text-primary">Company</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-text-primary">Legal</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">GDPR</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">ISO Certification</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-text-tertiary">
          © 2024 machine. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;