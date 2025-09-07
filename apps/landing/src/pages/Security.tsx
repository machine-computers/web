import { Header, Footer, Card } from "@machine/design";
import { Link, useLocation } from "react-router-dom";
import { Shield, Lock, Eye, Key, Database, Network, Users, FileCheck, AlertTriangle, Zap } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption with configurable key management.",
    details: "We implement TLS 1.3 for all network communications and use hardware security modules (HSMs) for key storage and management."
  },
  {
    icon: Lock,
    title: "Multi-Factor Authentication",
    description: "Advanced MFA options including TOTP, hardware security keys, and biometric authentication for enhanced account security.",
    details: "Support for multiple MFA methods ensures users can choose the most convenient and secure authentication method for their needs."
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    description: "Real-time security monitoring with automated threat detection, anomaly analysis, and instant alerting systems.",
    details: "Our security operations center (SOC) monitors all systems 24/7, using AI-powered analytics to detect and respond to threats."
  },
  {
    icon: Key,
    title: "Role-Based Access Control",
    description: "Granular permissions system allowing precise control over user access to resources and administrative functions.",
    details: "Implement the principle of least privilege with customizable roles, groups, and permission sets tailored to your organization."
  },
  {
    icon: Database,
    title: "Data Protection",
    description: "Comprehensive data protection including backup encryption, retention policies, and secure deletion procedures.",
    details: "Automated backups with encryption, configurable retention periods, and secure data disposal following industry standards."
  },
  {
    icon: Network,
    title: "Network Security",
    description: "Advanced network security with firewall configuration, VPN support, and secure remote access capabilities.",
    details: "Distributed denial-of-service (DDoS) protection, web application firewall (WAF), and zero-trust network architecture."
  },
  {
    icon: Users,
    title: "Identity Management",
    description: "Centralized identity management with LDAP integration and single sign-on (SSO) capabilities.",
    details: "Seamless integration with existing identity providers including Active Directory, LDAP, SAML, and OAuth protocols."
  },
  {
    icon: FileCheck,
    title: "Compliance Auditing",
    description: "Comprehensive audit logging and reporting for compliance with regulatory requirements and internal policies.",
    details: "Detailed audit trails for all user actions, system events, and configuration changes with searchable and exportable reports."
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "Structured incident response procedures with automated escalation and communication protocols.",
    details: "Pre-defined response playbooks, automated incident triage, and integration with external security tools and services."
  },
  {
    icon: Zap,
    title: "Security Automation",
    description: "Automated security processes including vulnerability scanning, patch management, and configuration compliance.",
    details: "Continuous vulnerability assessment, automated patch deployment, and configuration drift detection with self-healing capabilities."
  }
];

const Security = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-background">
      <Header currentPath={location.pathname} LinkComponent={Link} />
      <main>
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-20 space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-text-primary font-mono uppercase tracking-tight">
                ENTERPRISE SECURITY
              </h1>
              <p className="text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto font-mono leading-relaxed">
                Comprehensive security measures designed to protect your data, infrastructure, and operations at every level.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="p-8 border-2 border-border bg-background hover:shadow-lg transition-shadow">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-accent flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary font-mono uppercase tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-text-secondary font-mono leading-relaxed">
                      {feature.description}
                    </p>
                    <p className="text-sm text-text-tertiary font-mono leading-relaxed">
                      {feature.details}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center space-y-6">
              <h3 className="text-2xl font-bold text-text-primary font-mono uppercase">
                Security Certifications
              </h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card className="p-6 border-2 border-border bg-background">
                  <h4 className="text-lg font-bold text-text-primary font-mono uppercase mb-2">ISO 27001</h4>
                  <p className="text-sm text-text-secondary font-mono">Information Security Management Systems</p>
                </Card>
                <Card className="p-6 border-2 border-border bg-background">
                  <h4 className="text-lg font-bold text-text-primary font-mono uppercase mb-2">GDPR</h4>
                  <p className="text-sm text-text-secondary font-mono">General Data Protection Regulation</p>
                </Card>
                <Card className="p-6 border-2 border-border bg-background">
                  <h4 className="text-lg font-bold text-text-primary font-mono uppercase mb-2">SOC 2</h4>
                  <p className="text-sm text-text-secondary font-mono">Security, Availability, and Confidentiality</p>
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

export default Security;