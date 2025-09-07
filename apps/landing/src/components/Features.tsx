import { Card } from "@machine/design";
import { Cloud, Users, Laptop, Shield, Settings, Zap, Monitor, Server, BarChart3, Clock, Globe, Lock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "60-Second Deployments",
    description: "Provision fully configured development environments faster than your competition can schedule a meeting.",
    metric: "< 60s",
    metricLabel: "Average Deploy",
    color: "accent"
  },
  {
    icon: BarChart3,
    title: "Scale Without Limits",
    description: "Auto-scale from 1 to 1000+ instances. Handle traffic spikes and team growth seamlessly.",
    metric: "1000+",
    metricLabel: "Max Instances",
    color: "accent"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II, ISO 27001 compliant. Built for regulated industries and IPO-ready companies.",
    metric: "99.9%",
    metricLabel: "Security Score",
    color: "accent"
  },
  {
    icon: Globe,
    title: "Multi-Region Deployment",
    description: "Deploy across AWS, GCP, Azure regions globally. Reduce latency and ensure compliance.",
    metric: "15+",
    metricLabel: "Global Regions",
    color: "accent"
  },
  {
    icon: Monitor,
    title: "Any OS, Any Architecture",
    description: "macOS M-series, Linux ARM64, Windows x86. Native performance across all platforms.",
    metric: "3",
    metricLabel: "OS Platforms",
    color: "accent"
  },
  {
    icon: Clock,
    title: "99.9% Uptime SLA",
    description: "Enterprise-grade reliability with automated failover and disaster recovery built-in.",
    metric: "24/7",
    metricLabel: "Support",
    color: "accent"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 sm:py-24 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-background border-2 border-text-primary font-mono text-xs sm:text-sm font-bold uppercase">
            <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4" />
            Built for Scale
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-text-primary font-mono uppercase tracking-tight">
            Infrastructure that
            <br />
            <span className="text-accent">grows with you</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto font-mono leading-relaxed px-4 sm:px-0">
            From seed stage to IPO. Scale your engineering teams without the traditional infrastructure bottlenecks.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group p-6 sm:p-8 border-2 border-border bg-surface-elevated hover:shadow-xl hover:-translate-y-2 hover:border-accent transition-all duration-300">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent flex items-center justify-center border-2 border-accent group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" />
                  </div>
                  <div className="text-right">
                    <div className="text-xl sm:text-2xl font-bold text-text-primary font-mono">{feature.metric}</div>
                    <div className="text-xs text-text-secondary font-mono uppercase">{feature.metricLabel}</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary font-mono uppercase tracking-wide group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-text-secondary font-mono leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Progress bar visualization */}
                <div className="pt-4">
                  <div className="w-full bg-border h-2 border border-text-primary">
                    <div 
                      className="h-full bg-accent transition-all duration-1000 group-hover:w-full" 
                      style={{ width: `${Math.min(90, (index + 1) * 15)}%` }}
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export { Features };
export default Features;