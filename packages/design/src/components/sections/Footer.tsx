const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="font-semibold text-xl">machine</div>
            <p className="text-text-secondary text-sm">
              The computer company for modern enterprises.
            </p>
            <p className="text-text-tertiary text-xs">
              Founded in Europe
            </p>
            <div className="pt-2">
              <a
                href="https://github.com/machine-computers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-foreground transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.86 3.15 8.98 7.52 10.43.55.1.76-.24.76-.54 0-.27-.01-1.16-.02-2.11-3.06.67-3.71-1.3-3.71-1.3-.5-1.27-1.22-1.6-1.22-1.6-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.2.91.1-.71.38-1.19.69-1.46-2.44-.28-5-1.22-5-5.42 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.41.11-2.93 0 0 .93-.3 3.05 1.13.88-.24 1.82-.36 2.75-.36.93 0 1.87.12 2.75.36 2.12-1.43 3.05-1.13 3.05-1.13.6 1.52.22 2.65.11 2.93.7.77 1.13 1.76 1.13 2.95 0 4.21-2.56 5.14-5 5.41.39.34.73 1.01.73 2.04 0 1.47-.01 2.66-.01 3.03 0 .3.2.65.77.54 4.37-1.45 7.52-5.57 7.52-10.43C23.1 5.33 18.27.5 12 .5z" clipRule="evenodd" />
                </svg>
                GitHub: machine-computers
              </a>
            </div>
          </div>
          
           <div className="space-y-4">
             <h4 className="font-medium text-text-primary">Product</h4>
             <ul className="space-y-2 text-sm text-text-secondary">
               <li><a href="/features" className="hover:text-foreground transition-colors">Features</a></li>
               <li><a href="/pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
               <li><a href="/security" className="hover:text-foreground transition-colors">Security</a></li>
               <li><a href="/compliance" className="hover:text-foreground transition-colors">Compliance</a></li>
             </ul>
           </div>
          
           <div className="space-y-4">
             <h4 className="font-medium text-text-primary">Company</h4>
             <ul className="space-y-2 text-sm text-text-secondary">
               <li><a href="/about" className="hover:text-foreground transition-colors">About</a></li>
             </ul>
           </div>
          
           
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-text-tertiary">
          © 2025 machine. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export { Footer };
export default Footer;