import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, Users, Globe, Zap, Shield, Rocket, Code2, Timer } from "lucide-react";

const coreValues = [
  {
    id: "speed",
    icon: Zap,
    title: "Speed First",
    subtitle: "Minimal & Fast",
    description: "Every design decision optimizes for speed. Minimal interfaces, instant responses, zero friction.",
    details: [
      "Sub-60 second provisioning",
      "Minimal UI with maximum function",
      "Zero unnecessary steps",
      "Instant feedback loops",
      "Performance over aesthetics"
    ]
  },
  {
    id: "dx",
    icon: Code2,
    title: "Developer Experience",
    subtitle: "Built by Engineers",
    description: "DX is our north star. We operate on utilitarian design principles that prioritize developer productivity.",
    details: [
      "CLI-first approach",
      "API-driven everything",
      "Minimal learning curve",
      "Predictable behavior",
      "Zero configuration defaults"
    ]
  },
  {
    id: "minimal",
    icon: Target,
    title: "Minimal Design",
    subtitle: "Essential Only",
    description: "We strip away everything non-essential. Pure functionality in the simplest possible form.",
    details: [
      "No feature bloat",
      "Essential functions only",
      "Clean, functional interfaces",
      "Purposeful every element",
      "Utility over decoration"
    ]
  },
  {
    id: "reliability",
    icon: Shield,
    title: "Reliable Infrastructure",
    subtitle: "Enterprise Grade",
    description: "Rock-solid reliability with enterprise-grade security. Built for production from day one.",
    details: [
      "99.9% uptime SLA",
      "Multi-region redundancy",
      "Enterprise security",
      "Automated failover",
      "24/7 monitoring"
    ]
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-accent text-accent-foreground relative overflow-hidden">
          {/* Geometric shapes */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-accent-foreground/10 transform rotate-45 translate-x-18 -translate-y-18" />
          <div className="absolute bottom-20 left-10 w-24 h-24 border-4 border-accent-foreground/15 transform -rotate-12" />
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-accent-foreground/5" />
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-foreground text-accent font-mono text-sm font-bold uppercase border-2 border-accent-foreground">
                <Rocket className="w-4 h-4" />
                Next-Generation Computing
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold font-mono uppercase tracking-tight">
                Computing for the
                <br />
                <span className="text-accent-foreground/80">Next Frontier</span>
              </h1>
              <p className="text-xl lg:text-2xl max-w-3xl mx-auto font-mono leading-relaxed opacity-90">
                We're not just a cloud company. We're the computer company for modern enterprises, 
                building infrastructure for humanity's next leap forward.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-surface relative overflow-hidden">
          {/* Geometric shapes */}
          <div className="absolute top-20 left-20 w-20 h-20 border-4 border-text-primary/10 transform rotate-45" />
          <div className="absolute bottom-10 right-20 w-28 h-28 bg-accent/5 transform rotate-12" />
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">

            <div className="max-w-4xl mx-auto space-y-12">
              <Card className="p-8 border-2 border-border bg-background">
                <h2 className="text-2xl font-bold text-text-primary font-mono uppercase mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-text-secondary font-mono leading-relaxed mb-6">
                  At Machine, we believe that computing should be as limitless as human imagination. We're not just providing cloud infrastructure. We're creating the foundation for the future of work, creativity, and innovation.
                </p>
                <p className="text-lg text-text-secondary font-mono leading-relaxed">
                  Founded in Europe with a global vision, we're committed to democratizing access to powerful computing resources. Whether you're a developer building the next breakthrough application, a researcher pushing the boundaries of science, or an enterprise modernizing your IT infrastructure, Machine provides the tools and platform you need to succeed.
                </p>
              </Card>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 border-2 border-border bg-background">
                  <h3 className="text-xl font-bold text-text-primary font-mono uppercase mb-4">
                    Our Approach
                  </h3>
                  <p className="text-text-secondary font-mono leading-relaxed">
                    We take a developer-first approach to everything we build. Our platform is designed by engineers, for engineers, with a focus on simplicity, power, and reliability. We believe that great technology should be accessible and intuitive, not complex and intimidating.
                  </p>
                </Card>
                <Card className="p-8 border-2 border-border bg-background">
                  <h3 className="text-xl font-bold text-text-primary font-mono uppercase mb-4">
                    Our Commitment
                  </h3>
                  <p className="text-text-secondary font-mono leading-relaxed">
                    We're committed to building technology that serves humanity's greatest challenges. From climate research to medical breakthroughs to educational innovation, our platform powers the work that will shape our collective future.
                  </p>
                </Card>
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-bold text-text-primary font-mono uppercase mb-12">
                  Our Values
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {coreValues.map((value, index) => (
                    <Card key={index} className="p-6 border-2 border-border bg-background hover:shadow-lg transition-shadow">
                      <div className="space-y-4">
                        <div className="w-12 h-12 bg-accent flex items-center justify-center">
                          <value.icon className="w-6 h-6 text-accent-foreground" />
                        </div>
                        <h3 className="text-lg font-bold text-text-primary font-mono uppercase tracking-wide">
                          {value.title}
                        </h3>
                        <p className="text-sm text-text-secondary font-mono leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </Card>
                  ))}
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

export default About;