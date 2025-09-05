import { Card } from "@/components/ui/card";
import { Shield, Lock, Users, FileCheck, Database, Key } from "lucide-react";

const complianceFeatures = [
  {
    icon: Users,
    title: "LDAP Integration",
    description: "Seamless integration with existing LDAP directories for user authentication, group management, and access control."
  },
  {
    icon: FileCheck,
    title: "Audit Logging",
    description: "Comprehensive audit logs for all system activities, user actions, and configuration changes with retention policies."
  },
  {
    icon: Database,
    title: "Data Encryption",
    description: "End-to-end encryption for data at rest and in transit, with configurable encryption standards and key management."
  },
  {
    icon: Key,
    title: "Access Control",
    description: "Granular role-based access control (RBAC) with multi-factor authentication and session management."
  }
];

const Compliance = () => {
  return (
    <section id="compliance" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-4xl lg:text-6xl font-bold text-text-primary font-mono uppercase tracking-tight">
            COMPLIANCE & SECURITY
          </h2>
          <p className="text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto font-mono leading-relaxed">
            Enterprise-grade security and compliance built into every layer of our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {complianceFeatures.map((feature, index) => (
            <Card key={index} className="p-8 border-2 border-border bg-surface-elevated hover:shadow-lg transition-shadow">
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
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-text-secondary font-mono">
            Our platform integrates seamlessly with your existing compliance frameworks and security protocols.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Compliance;