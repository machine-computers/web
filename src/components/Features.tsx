import { Card } from "@/components/ui/card";
import { Cloud, Users, Laptop, Shield, Settings, Zap, Monitor, Server } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Any Operating System",
    description: "Full support for MacOS, Linux distributions, and Windows environments."
  },
  {
    icon: Cloud,
    title: "Managed Solution",
    description: "Fully managed cloud infrastructure with enterprise-grade monitoring and support."
  },
  {
    icon: Server,
    title: "Self-Hosted Option", 
    description: "Deploy on your own infrastructure with complete control and customization."
  },
  {
    icon: Settings,
    title: "Custom Hardware Specs",
    description: "Configure CPU, RAM, storage, and GPU specs to match your exact requirements."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Advanced security controls and audit logs."
  },
  {
    icon: Zap,
    title: "Instant Provisioning",
    description: "Deploy new instances in seconds with automated configuration management."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-4xl lg:text-6xl font-bold text-text-primary font-mono uppercase tracking-tight">
            Enterprise-grade solutions
          </h2>
          <p className="text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto font-mono leading-relaxed">
            Everything you need to modernize your IT infrastructure and empower your teams.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
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
      </div>
    </section>
  );
};

export default Features;