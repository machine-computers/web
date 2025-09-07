import { Header, Footer } from "@machine/design";


const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary font-mono uppercase tracking-tight mb-8">
              Privacy Policy
            </h1>
            <div className="space-y-6 text-text-secondary font-mono leading-relaxed">
              <p className="text-lg">
                This is a demo privacy policy page. In a production environment, this would contain comprehensive information about how we collect, use, and protect user data in compliance with applicable privacy laws and regulations.
              </p>
              <div className="border-2 border-border p-6 bg-surface">
                <h2 className="text-2xl font-bold text-text-primary font-mono uppercase mb-4">
                  Data Collection
                </h2>
                <p>
                  We collect information necessary to provide our cloud computing services, including account information, usage data, and system logs. All data collection is transparent and used solely for service provision and improvement.
                </p>
              </div>
              <div className="border-2 border-border p-6 bg-surface">
                <h2 className="text-2xl font-bold text-text-primary font-mono uppercase mb-4">
                  Data Protection
                </h2>
                <p>
                  Your data is protected using industry-standard encryption and security measures. We implement comprehensive security controls to ensure the confidentiality, integrity, and availability of your information.
                </p>
              </div>
              <div className="border-2 border-border p-6 bg-surface">
                <h2 className="text-2xl font-bold text-text-primary font-mono uppercase mb-4">
                  Your Rights
                </h2>
                <p>
                  You have the right to access, correct, delete, or export your personal data. We are committed to respecting your privacy rights and providing transparent data practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;