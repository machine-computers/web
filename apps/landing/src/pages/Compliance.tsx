import { Header, Footer } from "@machine/design";
import { Link, useLocation } from "react-router-dom";
import { Card } from "@machine/design";
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
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-background">
      <Header currentPath={location.pathname} LinkComponent={Link} />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-accent text-accent-foreground relative overflow-hidden">
          {/* Geometric shapes */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-accent-foreground/10 transform rotate-45 -translate-x-16 -translate-y-16" />
          <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-accent-foreground/15" />
          <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-accent-foreground/5 transform rotate-12" />
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-foreground text-accent font-mono text-sm font-bold uppercase border-2 border-accent-foreground">
                <Shield className="w-4 h-4" />
                Enterprise-Grade Security
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold font-mono uppercase tracking-tight">
                Built for the
                <br />
                <span className="text-accent-foreground/80">Most Demanding</span>
                <br />
                Environments
              </h1>
              <p className="text-xl lg:text-2xl max-w-3xl mx-auto font-mono leading-relaxed opacity-90">
                Compliance isn't an afterthought. It's engineered into every layer of our frontier computing platform.
              </p>
            </div>
          </div>
        </section>

        {/* Compliance Areas */}
        <section className="py-24 bg-surface relative overflow-hidden">
          {/* Geometric shapes */}
          <div className="absolute top-20 right-20 w-20 h-20 border-4 border-text-primary/10 transform rotate-45" />
          <div className="absolute bottom-20 left-10 w-28 h-28 bg-accent/5 transform -rotate-12" />
          <div className="absolute top-1/2 left-1/2 w-12 h-12 border-4 border-accent/20" />
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {complianceAreas.map((area, index) => (
                <Card key={index} className="group p-8 border-4 border-border bg-background hover:shadow-xl hover:border-accent hover:-translate-y-1 transition-all">
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-accent text-accent-foreground flex items-center justify-center border-2 border-accent group-hover:scale-110 transition-transform">
                      <area.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary font-mono uppercase tracking-wide group-hover:text-accent transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-lg text-text-secondary font-mono leading-relaxed">
                      {area.description}
                    </p>
                    <ul className="space-y-3">
                      {area.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-text-secondary font-mono">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>

            {/* Compliance Metrics */}
            <div className="bg-background border-4 border-text-primary p-12 mb-16">
              <h3 className="text-3xl font-bold text-text-primary font-mono uppercase text-center mb-12">
                Compliance by the Numbers
              </h3>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="space-y-3">
                  <div className="text-4xl font-bold text-text-primary font-mono">100%</div>
                  <div className="text-sm text-text-secondary font-mono uppercase">SOC 2 Coverage</div>
                  <div className="text-xs text-text-tertiary font-mono">All 64 trust service criteria</div>
                </div>
                <div className="space-y-3">
                  <div className="text-4xl font-bold text-text-primary font-mono">24/7</div>
                  <div className="text-sm text-text-secondary font-mono uppercase">Security Monitoring</div>
                  <div className="text-xs text-text-tertiary font-mono">Continuous threat detection</div>
                </div>
                <div className="space-y-3">
                  <div className="text-4xl font-bold text-text-primary font-mono">&lt;4hrs</div>
                  <div className="text-sm text-text-secondary font-mono uppercase">Incident Response</div>
                  <div className="text-xs text-text-tertiary font-mono">GDPR breach notification</div>
                </div>
                <div className="space-y-3">
                  <div className="text-4xl font-bold text-text-primary font-mono">99.9%</div>
                  <div className="text-sm text-text-secondary font-mono uppercase">Audit Pass Rate</div>
                  <div className="text-xs text-text-tertiary font-mono">Third-party assessments</div>
                </div>
              </div>
            </div>

            {/* Assurance Section */}
            <div className="text-center space-y-12">
              <h3 className="text-3xl font-bold text-text-primary font-mono uppercase">
                Frontier Compliance Assurance
              </h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="p-8 border-4 border-accent bg-accent/5">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-10 h-10 text-accent flex-shrink-0 mt-1" />
                    <div className="text-left">
                      <h4 className="text-xl font-bold text-text-primary font-mono uppercase mb-4">Continuous Auditing</h4>
                      <p className="text-text-secondary font-mono leading-relaxed">
                        Automated compliance monitoring with real-time assessment of security controls. 
                        Annual third-party audits verify our frontier-grade security posture.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-8 border-4 border-text-primary bg-background">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-10 h-10 text-accent flex-shrink-0 mt-1" />
                    <div className="text-left">
                      <h4 className="text-xl font-bold text-text-primary font-mono uppercase mb-4">Rapid Response</h4>
                      <p className="text-text-secondary font-mono leading-relaxed">
                        Structured incident response with automated regulatory reporting. 
                        Purpose-built for the most demanding compliance environments.
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