import { Header, Footer } from "@machine/design";


const GDPR = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary font-mono uppercase tracking-tight mb-8">
              GDPR Compliance
            </h1>
            <div className="space-y-6 text-text-secondary font-mono leading-relaxed">
              <p className="text-lg">
                This is a demo GDPR compliance page. In a production environment, this would contain detailed information about our compliance with the EU General Data Protection Regulation.
              </p>
              <div className="border-2 border-border p-6 bg-surface">
                <h2 className="text-2xl font-bold text-text-primary font-mono uppercase mb-4">
                  Data Subject Rights
                </h2>
                <p>
                  We respect and uphold all data subject rights under GDPR, including the right to access, rectify, erase, and port personal data.
                </p>
              </div>
              <div className="border-2 border-border p-6 bg-surface">
                <h2 className="text-2xl font-bold text-text-primary font-mono uppercase mb-4">
                  Lawful Basis
                </h2>
                <p>
                  All data processing activities have a lawful basis and are documented in our records of processing activities.
                </p>
              </div>
              <div className="border-2 border-border p-6 bg-surface">
                <h2 className="text-2xl font-bold text-text-primary font-mono uppercase mb-4">
                  Data Protection Officer
                </h2>
                <p>
                  Our Data Protection Officer oversees GDPR compliance and can be contacted for any data protection related inquiries.
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

export default GDPR;