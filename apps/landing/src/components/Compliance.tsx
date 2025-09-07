import { Card } from "@machine/design";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@machine/design";
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
  }
];

const securityFeatures = [
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
    title: "Global Standards",
    description: "Core compliance standards that meet international regulatory requirements.",
    details: [
      "Data residency controls",
      "Cross-border data transfer",
      "Regional compliance alignment",
      "International data protection",
      "Multi-jurisdiction support"
    ]
  }
];

const complianceMetrics = [
  {
    value: "100%",
    label: "SOC 2 Coverage",
    description: "All 64 trust service criteria"
  },
  {
    value: "24/7",
    label: "Security Monitoring",
    description: "Continuous threat detection"
  },
  {
    value: "<4hrs",
    label: "Incident Response",
    description: "GDPR breach notification"
  },
  {
    value: "99.9%",
    label: "Audit Pass Rate",
    description: "Third-party assessments"
  }
];

const Compliance = () => {
  return (
    <section id="compliance" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Geometric shapes - hidden on mobile */}
      <div className="hidden md:block absolute top-20 right-20 w-20 h-20 border-4 border-text-primary/10 transform rotate-45" />
      <div className="hidden md:block absolute bottom-20 left-10 w-28 h-28 bg-accent/5 transform -rotate-12" />
      <div className="hidden lg:block absolute top-1/2 left-1/2 w-12 h-12 border-4 border-accent/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent text-accent-foreground font-mono text-xs sm:text-sm font-bold uppercase border-2 border-accent">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
            Enterprise-Grade Security
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-text-primary font-mono uppercase tracking-tight">
            COMPLIANCE & SECURITY
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto font-mono leading-relaxed px-4 sm:px-0">
            Compliance isn't an afterthought. It's engineered into every layer of our computing platform.
          </p>
        </div>

        <Tabs defaultValue="standards" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-surface border-2 border-border h-16">
            <TabsTrigger 
              value="standards" 
              className="font-mono uppercase text-sm font-bold h-full data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:border-2 data-[state=active]:border-accent"
            >
              Regulatory Standards
            </TabsTrigger>
            <TabsTrigger 
              value="security" 
              className="font-mono uppercase text-sm font-bold h-full data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:border-2 data-[state=active]:border-accent"
            >
              Security Architecture
            </TabsTrigger>
            <TabsTrigger 
              value="metrics" 
              className="font-mono uppercase text-sm font-bold h-full data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:border-2 data-[state=active]:border-accent"
            >
              Performance Metrics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="standards" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </TabsContent>

          <TabsContent value="security" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="group p-8 border-4 border-border bg-background hover:shadow-xl hover:border-accent hover:-translate-y-1 transition-all">
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-accent text-accent-foreground flex items-center justify-center border-2 border-accent group-hover:scale-110 transition-transform">
                      <feature.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary font-mono uppercase tracking-wide group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-text-secondary font-mono leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.details.map((detail, detailIndex) => (
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
          </TabsContent>

          <TabsContent value="metrics" className="space-y-8">
            {/* Compliance Metrics */}
            <div className="bg-background border-4 border-text-primary p-12">
              <h3 className="text-3xl font-bold text-text-primary font-mono uppercase text-center mb-12">
                Compliance by the Numbers
              </h3>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {complianceMetrics.map((metric, index) => (
                  <div key={index} className="space-y-3">
                    <div className="text-4xl font-bold text-text-primary font-mono">{metric.value}</div>
                    <div className="text-sm text-text-secondary font-mono uppercase">{metric.label}</div>
                    <div className="text-xs text-text-tertiary font-mono">{metric.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assurance Section */}
            <div className="text-center space-y-12">
              <h3 className="text-3xl font-bold text-text-primary font-mono uppercase">
                Comprehensive Compliance Assurance
              </h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="p-8 border-4 border-accent bg-accent/5">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-10 h-10 text-accent flex-shrink-0 mt-1" />
                    <div className="text-left">
                      <h4 className="text-xl font-bold text-text-primary font-mono uppercase mb-4">Continuous Auditing</h4>
                      <p className="text-text-secondary font-mono leading-relaxed">
                        Automated compliance monitoring with real-time assessment of security controls. 
                        Annual third-party audits verify our enterprise-grade security posture.
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export { Compliance };
export default Compliance;