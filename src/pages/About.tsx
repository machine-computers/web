import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Users, Globe, Zap, Shield, Rocket } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We push the boundaries of what's possible in cloud computing, constantly exploring new technologies and approaches."
  },
  {
    icon: Users,
    title: "Developer Experience",
    description: "Every decision we make prioritizes the experience of developers and IT professionals using our platform."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Our infrastructure spans the globe, ensuring low-latency access and high availability for teams worldwide."
  },
  {
    icon: Zap,
    title: "Performance Driven",
    description: "We obsess over performance, ensuring that every interaction is fast, reliable, and efficient."
  },
  {
    icon: Shield,
    title: "Security by Design",
    description: "Security is not an afterthought—it's built into every layer of our platform from the ground up."
  },
  {
    icon: Rocket,
    title: "Scalability Focus",
    description: "Whether you're a startup or an enterprise, our platform scales with your ambitions and growth."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-20 space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-text-primary font-mono uppercase tracking-tight">
                ABOUT MACHINE
              </h1>
              <p className="text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto font-mono leading-relaxed">
                The computer company for the frontier. We're building the infrastructure that will power the next generation of innovation.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
              <Card className="p-8 border-2 border-border bg-background">
                <h2 className="text-2xl font-bold text-text-primary font-mono uppercase mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-text-secondary font-mono leading-relaxed mb-6">
                  At Machine, we believe that computing should be as limitless as human imagination. We're not just providing cloud infrastructure—we're creating the foundation for the future of work, creativity, and innovation.
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
                  {values.map((value, index) => (
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