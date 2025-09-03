import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield, FileCheck, Users, Database, Lock, Globe, CheckCircle, AlertCircle } from "lucide-react";

const complianceAreas = [
  {
    icon: Shield,
    title: "GDPR Compliance",
    description: "Full compliance with EU General Data Protection Regulation requirements for data protection and privacy.",
    details: [
      "Data subject rights management",
      "Privacy by design implementation",
      "Data protection impact assessments",
      "Breach notification procedures",
      "Data processing agreements"
    ]
  },
  {
    icon: FileCheck,
    title: "ISO 27001 Certification",
    description: "Certified Information Security Management System with comprehensive security controls.",
    details: [
      "Risk assessment and treatment",
      "Security policy framework",
      "Access control management",
      "Cryptography and key management",
      "Physical security measures"
    ]
  },
  {
    icon: Users,
    title: "LDAP Integration",
    description: "Seamless integration with existing LDAP directories for enterprise authentication and authorization.",
    details: [
      "Active Directory integration",
      "User provisioning automation",
      "Group-based access control",
      "Single sign-on capabilities",
      "Directory synchronization"
    ]
  },
  {
    icon: Database,
    title: "Data Residency",
    description: "Flexible data residency options to meet regional compliance and sovereignty requirements.",
    details: [
      "Multi-region deployment",
      "Data localization controls",
      "Cross-border data transfer",
      "Sovereign cloud options",
      "Compliance reporting"
    ]
  },
  {
    icon: Lock,
    title: "Audit & Logging",
    description: "Comprehensive audit logging and monitoring for compliance verification and forensic analysis.",
    details: [
      "Detailed audit trails",
      "Log retention policies",
      "Real-time monitoring",
      "Compliance reporting",
      "Third-party audit access"
    ]
  },
  {
    icon: Globe,
    title: "Industry Standards",
    description: "Compliance with industry-specific standards and regulatory frameworks.",
    details: [
      "HIPAA for healthcare",
      "PCI DSS for payments",
      "SOX for financial reporting",
      "FedRAMP for government",
      "Custom compliance frameworks"
    ]
  }
];

const Compliance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-20 space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-text-primary font-mono uppercase tracking-tight">
                COMPLIANCE FRAMEWORK
              </h1>
              <p className="text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto font-mono leading-relaxed">
                Enterprise-grade compliance built into every aspect of our platform, ensuring regulatory adherence and data protection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {complianceAreas.map((area, index) => (
                <Card key={index} className="p-8 border-2 border-border bg-background hover:shadow-lg transition-shadow">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-accent flex items-center justify-center">
                      <area.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary font-mono uppercase tracking-wide">
                      {area.title}
                    </h3>
                    <p className="text-lg text-text-secondary font-mono leading-relaxed">
                      {area.description}
                    </p>
                    <ul className="space-y-2">
                      {area.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-text-tertiary font-mono">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center space-y-8">
              <h3 className="text-2xl font-bold text-text-primary font-mono uppercase">
                Compliance Assurance
              </h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="p-6 border-2 border-border bg-background">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                    <div className="text-left">
                      <h4 className="text-lg font-bold text-text-primary font-mono uppercase mb-2">Regular Audits</h4>
                      <p className="text-sm text-text-secondary font-mono">
                        Annual third-party audits and continuous internal assessments ensure ongoing compliance with all applicable standards.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 border-2 border-border bg-background">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                    <div className="text-left">
                      <h4 className="text-lg font-bold text-text-primary font-mono uppercase mb-2">Incident Response</h4>
                      <p className="text-sm text-text-secondary font-mono">
                        Structured incident response procedures with regulatory reporting and notification requirements built-in.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Compliance;