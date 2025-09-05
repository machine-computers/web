import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const benefits = [
  "Stop hardware waste - retire those shelf laptops",
  "Scale teams instantly without procurement delays", 
  "Maintain security with your existing protocols",
  "Custom OS and software configurations",
  "Seamless integration with existing networks"
];

const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-medium text-text-primary">
                Stop managing hardware.
                <br />
                Start managing outcomes.
              </h2>
              <p className="text-lg text-text-secondary">
                Transform how your organization handles computing resources. 
                From onboarding contractors to scaling teams, machine makes it simple.
              </p>
            </div>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button size="lg" className="mt-8">
              Learn More About Our Solutions
            </Button>
          </div>
          
          <div className="bg-gradient-subtle rounded-lg p-8 border border-border">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-light text-text-primary mb-2">99.9%</div>
                <div className="text-text-secondary">Uptime SLA</div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl font-medium text-text-primary mb-1">&lt; 60s</div>
                  <div className="text-sm text-text-secondary">Deploy Time</div>
                </div>
                <div>
                  <div className="text-2xl font-medium text-text-primary mb-1">24/7</div>
                  <div className="text-sm text-text-secondary">Support</div>
                </div>
              </div>
              
              <div className="text-center pt-4 border-t border-border">
                <div className="text-sm text-text-tertiary">
                  Trusted by companies worldwide
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;