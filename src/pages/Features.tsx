import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Cloud, Shield, Settings, Zap, Monitor, Server, Database, Lock, Globe, Cpu } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Any Operating System",
    description: "Full support for MacOS, Linux distributions, and Windows environments with seamless integration and performance optimization for each platform.",
    details: "Our platform provides native support for all major operating systems, ensuring consistent performance and user experience across different environments."
  },
  {
    icon: Cloud,
    title: "Managed Solution",
    description: "Fully managed cloud infrastructure with enterprise-grade monitoring, automated scaling, and 24/7 support from our expert team.",
    details: "Focus on your business while we handle the infrastructure. Our managed solution includes proactive monitoring, automatic updates, and dedicated support."
  },
  {
    icon: Server,
    title: "Self-Hosted Option",
    description: "Deploy on your own infrastructure with complete control and customization, maintaining full compliance with your security requirements.",
    details: "For organizations with specific compliance needs or existing infrastructure investments, our self-hosted option provides the same powerful features with complete control."
  },
  {
    icon: Settings,
    title: "Custom Hardware Specs",
    description: "Configure CPU, RAM, storage, and GPU specifications to match your exact workload requirements and performance needs.",
    details: "From lightweight development environments to high-performance computing workloads, customize every aspect of your virtual machines."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "GDPR and ISO compliant with advanced security controls, end-to-end encryption, and comprehensive audit logging.",
    details: "Built with security-first architecture including multi-factor authentication, role-based access control, and continuous security monitoring."
  },
  {
    icon: Zap,
    title: "Instant Provisioning",
    description: "Deploy new instances in seconds with automated configuration management and pre-built templates for common use cases.",
    details: "Reduce time-to-value with our instant provisioning system. New environments are ready in under 60 seconds with all required software and configurations."
  },
  {
    icon: Database,
    title: "LDAP Integration",
    description: "Seamless integration with existing LDAP directories for centralized user management and authentication.",
    details: "Connect to your existing identity providers for single sign-on, group-based access control, and automated user provisioning."
  },
  {
    icon: Lock,
    title: "Network Security",
    description: "Advanced network security features including VPN support, firewall configuration, and secure remote access.",
    details: "Protect your infrastructure with enterprise-grade network security, including encrypted connections and configurable access policies."
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Deploy across multiple regions with automatic failover and load balancing for high availability.",
    details: "Our global network ensures low-latency access and high availability with automatic failover between regions."
  },
  {
    icon: Cpu,
    title: "Performance Monitoring",
    description: "Real-time performance monitoring with detailed analytics and automated alerts for optimal system health.",
    details: "Monitor CPU usage, memory consumption, network traffic, and application performance with comprehensive dashboards and alerting."
  }
];

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-20 space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-text-primary font-mono uppercase tracking-tight">
                COMPREHENSIVE FEATURES
              </h1>
              <p className="text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto font-mono leading-relaxed">
                Everything you need to modernize your IT infrastructure and empower your teams with cutting-edge cloud computing solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;