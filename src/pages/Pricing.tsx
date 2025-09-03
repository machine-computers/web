import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Server, Mail, Phone, Check } from "lucide-react";

const pricingOptions = [
  {
    icon: Building2,
    title: "Enterprise Solution",
    description: "Fully managed cloud infrastructure with enterprise-grade support, monitoring, and compliance features.",
    features: [
      "Managed cloud infrastructure",
      "24/7 enterprise support",
      "Advanced monitoring & alerting",
      "Custom integrations",
      "Dedicated account management",
      "SLA guarantees",
      "Priority feature requests",
      "Custom training sessions"
    ]
  },
  {
    icon: Server,
    title: "Self-Hosted Licensing",
    description: "Deploy on your own infrastructure with complete control and customization options.",
    features: [
      "Self-hosted deployment",
      "Full infrastructure control",
      "Custom configurations",
      "On-premise compliance",
      "Flexible licensing terms",
      "No vendor lock-in",
      "Offline operation capability",
      "Custom security policies"
    ]
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-20 space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-text-primary font-mono uppercase tracking-tight">
                PRICING OPTIONS
              </h1>
              <p className="text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto font-mono leading-relaxed">
                Choose the deployment model that best fits your organization's needs and infrastructure requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {pricingOptions.map((option, index) => (
                <Card key={index} className="p-8 border-2 border-border bg-background hover:shadow-lg transition-shadow">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-accent flex items-center justify-center">
                      <option.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary font-mono uppercase tracking-wide">
                      {option.title}
                    </h3>
                    <p className="text-lg text-text-secondary font-mono leading-relaxed">
                      {option.description}
                    </p>
                    <ul className="space-y-3">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-text-secondary font-mono">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center space-y-8">
              <h3 className="text-2xl font-bold text-text-primary font-mono uppercase">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto font-mono">
                Contact our team to discuss your specific requirements and receive a customized quote tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" className="group">
                  <Mail className="w-5 h-5 mr-2" />
                  Request Quote
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;