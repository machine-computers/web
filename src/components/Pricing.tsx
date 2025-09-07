import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Server, Mail, Phone, Check, Calculator, DollarSign, Zap } from "lucide-react";

const pricingTiers = [
  {
    icon: Cloud,
    title: "Managed Cloud",
    subtitle: "Compute-on-demand",
    description: "Fully managed infrastructure for teams that need instant compute without operational overhead.",
    basePrice: "Custom",
    savingsRange: "60-85%",
    savingsJustification: "vs traditional hardware procurement (3-year TCO analysis)",
    features: [
      "Instant provisioning (<60s)",
      "24/7 managed operations",
      "Auto-scaling compute resources", 
      "Multi-region deployment",
      "SOC 2 Type II + ISO 27001 certified",
      "GDPR-compliant data handling",
      "99.9% uptime SLA",
      "Integrated monitoring & alerting"
    ]
  },
  {
    icon: Server,
    title: "Private Cloud",
    subtitle: "Self-hosted control",
    description: "Deploy on your infrastructure with complete control while maintaining enterprise-grade capabilities.",
    basePrice: "Custom",
    savingsRange: "40-65%", 
    savingsJustification: "vs traditional IT overhead (includes hardware, maintenance, staffing)",
    features: [
      "On-premise deployment",
      "Full infrastructure control",
      "Air-gapped operation capability",
      "Custom compliance frameworks",
      "Flexible licensing terms",
      "No vendor lock-in",
      "Advanced security policies",
      "Direct support channel"
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-surface relative overflow-hidden">
      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-text-primary/5 transform rotate-12" />
      <div className="absolute bottom-10 right-20 w-28 h-28 border-4 border-accent/10 transform -rotate-12" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground font-mono text-sm font-bold uppercase border-2 border-accent">
            <DollarSign className="w-4 h-4" />
            Enterprise Pricing
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-text-primary font-mono uppercase tracking-tight">
            Compute Power
            <br />
            <span className="text-accent">Priced Right</span>
          </h2>
          <p className="text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto font-mono leading-relaxed">
            Pay for compute power, not hardware overhead. Transparent pricing that scales with your ambitions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className="p-10 border-4 border-text-primary bg-background hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent text-accent-foreground flex items-center justify-center mx-auto border-2 border-accent mb-4">
                    <tier.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-text-primary font-mono uppercase tracking-wide mb-2">
                    {tier.title}
                  </h3>
                  <p className="text-sm text-text-secondary font-mono uppercase mb-4">
                    {tier.subtitle}
                  </p>
                  <div className="text-4xl font-bold text-text-primary font-mono mb-2">{tier.basePrice}</div>
                  <div className="text-sm text-text-secondary font-mono">Contact for volume pricing</div>
                </div>

                <div className="bg-accent/10 p-6 border-2 border-accent/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent font-mono mb-2">{tier.savingsRange}</div>
                    <div className="text-sm text-text-secondary font-mono uppercase mb-2">Cost Reduction</div>
                    <div className="text-xs text-text-tertiary font-mono">{tier.savingsJustification}</div>
                  </div>
                </div>

                <p className="text-lg text-text-secondary font-mono leading-relaxed text-center">
                  {tier.description}
                </p>

                <ul className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary font-mono">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="accent" size="lg" className="w-full font-bold text-lg py-4">
                  Get Custom Quote
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Savings Calculator CTA */}
        <div className="bg-background border-4 border-text-primary p-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="w-20 h-20 bg-accent text-accent-foreground flex items-center justify-center mx-auto border-2 border-accent">
              <Calculator className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold text-text-primary font-mono uppercase">
              Calculate Your Cost Savings
            </h3>
            <p className="text-lg text-text-secondary font-mono leading-relaxed">
              Get a detailed breakdown of potential savings based on your current infrastructure costs and team size.
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-text-primary font-mono">Hardware</div>
                <div className="text-sm text-text-secondary font-mono">Eliminate procurement cycles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-text-primary font-mono">Maintenance</div>
                <div className="text-sm text-text-secondary font-mono">No more IT overhead</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-text-primary font-mono">Scaling</div>
                <div className="text-sm text-text-secondary font-mono">Instant team expansion</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8 mt-16">
          <h3 className="text-2xl font-bold text-text-primary font-mono uppercase">
            Ready to Pioneer Your Infrastructure?
          </h3>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto font-mono">
            Join organizations that chose modern computing over traditional infrastructure limitations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="group font-bold">
              <Mail className="w-5 h-5 mr-2" />
              Request Custom Analysis
            </Button>
            <Button variant="outline" size="lg" className="font-bold">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Technical Demo
            </Button>
          </div>
          
          <div className="pt-8">
            <div className="flex items-center justify-center gap-8 text-sm text-text-tertiary font-mono">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                &lt; 7 Days to Production
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                No Long-term Contracts
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                ROI Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;