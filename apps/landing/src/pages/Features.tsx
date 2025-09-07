import { Header, Footer, Card } from "@machine/design";
import { Link, useLocation } from "react-router-dom";
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
    description: "Advanced security controls, end-to-end encryption, and comprehensive audit logging.",
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
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-background">
      <Header currentPath={location.pathname} LinkComponent={Link} />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-accent text-accent-foreground relative overflow-hidden">
          {/* Geometric shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 border-4 border-accent-foreground/15 transform rotate-45" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent-foreground/5 transform rotate-12 translate-x-20 translate-y-20" />
          <div className="absolute top-1/2 left-10 w-16 h-16 border-4 border-accent-foreground/20" />
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-foreground text-accent font-mono text-sm font-bold uppercase border-2 border-accent-foreground">
                <Zap className="w-4 h-4" />
                Advanced Computing Features
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold font-mono uppercase tracking-tight">
                Compute Power
                <br />
                <span className="text-accent-foreground/80">Without Limits</span>
              </h1>
              <p className="text-xl lg:text-2xl max-w-3xl mx-auto font-mono leading-relaxed opacity-90">
                Every feature engineered for the frontier. Every capability designed to push boundaries.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-surface relative overflow-hidden">
          {/* Geometric shapes */}
          <div className="absolute top-10 right-10 w-24 h-24 bg-text-primary/5 transform rotate-45" />
          <div className="absolute bottom-20 left-20 w-20 h-20 border-4 border-accent/15 transform -rotate-12" />
          <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-accent/10" />
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
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
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-text-tertiary font-mono leading-relaxed">
                        {feature.details}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Performance Metrics */}
            <div className="bg-background border-4 border-text-primary p-12">
              <h3 className="text-3xl font-bold text-text-primary font-mono uppercase text-center mb-12">
                Frontier Performance Metrics
              </h3>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="space-y-3">
                  <div className="text-4xl font-bold text-text-primary font-mono">&lt;60s</div>
                  <div className="text-sm text-text-secondary font-mono uppercase">Provisioning Time</div>
                  <div className="text-xs text-text-tertiary font-mono">From request to ready</div>
                </div>
                <div className="space-y-3">
                  <div className="text-4xl font-bold text-text-primary font-mono">99.9%</div>
                  <div className="text-sm text-text-secondary font-mono uppercase">Uptime SLA</div>
                  <div className="text-xs text-text-tertiary font-mono">Enterprise-grade reliability</div>
                </div>
                <div className="space-y-3">
                  <div className="text-4xl font-bold text-text-primary font-mono">15+</div>
                  <div className="text-sm text-text-secondary font-mono uppercase">Global Regions</div>
                  <div className="text-xs text-text-tertiary font-mono">Multi-cloud deployment</div>
                </div>
                <div className="space-y-3">
                  <div className="text-4xl font-bold text-text-primary font-mono">24/7</div>
                  <div className="text-sm text-text-secondary font-mono uppercase">Monitoring</div>
                  <div className="text-xs text-text-tertiary font-mono">Continuous health checks</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;