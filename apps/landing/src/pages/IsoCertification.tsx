import { Header, Footer } from "@machine/design";


const IsoCertification = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary font-mono uppercase tracking-tight mb-8">
              ISO Certification
            </h1>
            <div className="space-y-6 text-text-secondary font-mono leading-relaxed">
              <p className="text-lg">
                This is a demo ISO certification page. In a production environment, this would contain detailed information about our ISO 27001 certification and information security management system.
              </p>
              <div className="border-2 border-border p-6 bg-surface">
                <h2 className="text-2xl font-bold text-text-primary font-mono uppercase mb-4">
                  ISO 27001 Certification
                </h2>
                <p>
                  Our information security management system is certified to ISO 27001 standards, demonstrating our commitment to maintaining robust security controls.
                </p>
              </div>
              <div className="border-2 border-border p-6 bg-surface">
                <h2 className="text-2xl font-bold text-text-primary font-mono uppercase mb-4">
                  Security Controls
                </h2>
                <p>
                  We implement comprehensive security controls across all domains including access control, cryptography, physical security, and operations security.
                </p>
              </div>
              <div className="border-2 border-border p-6 bg-surface">
                <h2 className="text-2xl font-bold text-text-primary font-mono uppercase mb-4">
                  Continuous Improvement
                </h2>
                <p>
                  Our ISO certification includes regular audits and continuous improvement processes to ensure ongoing compliance and security enhancement.
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

export default IsoCertification;