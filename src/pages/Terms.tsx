import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary font-mono uppercase tracking-tight mb-8">
              Terms of Service
            </h1>
            <div className="space-y-6 text-text-secondary font-mono leading-relaxed">
              <p className="text-lg">
                This is a demo terms of service page. In a production environment, this would contain comprehensive legal terms governing the use of our cloud computing platform and services.
              </p>
              <div className="border-2 border-border p-6 bg-surface">
                <h2 className="text-2xl font-bold text-text-primary font-mono uppercase mb-4">
                  Service Usage
                </h2>
                <p>
                  Our platform provides cloud computing resources and infrastructure. Users agree to use the service in accordance with applicable laws and these terms.
                </p>
              </div>
              <div className="border-2 border-border p-6 bg-surface">
                <h2 className="text-2xl font-bold text-text-primary font-mono uppercase mb-4">
                  Acceptable Use
                </h2>
                <p>
                  Users must not engage in illegal activities, violate intellectual property rights, or disrupt service availability for other users.
                </p>
              </div>
              <div className="border-2 border-border p-6 bg-surface">
                <h2 className="text-2xl font-bold text-text-primary font-mono uppercase mb-4">
                  Service Levels
                </h2>
                <p>
                  We strive to provide reliable service with defined uptime guarantees. Service level agreements vary by plan and deployment model.
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

export default Terms;