import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Server, Mail, MapPin, Clock, DollarSign } from "lucide-react";

const positions = [
  {
    title: "Product Engineer",
    type: "Full-time",
    location: "Remote / Europe",
    salary: "Competitive",
    description: "Join our product engineering team to build the next generation of cloud computing tools and user experiences.",
    requirements: [
      "Expertise in Next.js and React ecosystem",
      "Strong experience with component design systems",
      "Proficiency in client-side VNC implementations",
      "WebSocket programming for real-time applications",
      "Relational database design and optimization",
      "Modern JavaScript/TypeScript development",
      "UI/UX best practices and accessibility",
      "Agile development methodologies"
    ],
    icon: Code
  },
  {
    title: "Platform Engineer",
    type: "Full-time",
    location: "Remote / Europe",
    salary: "Competitive",
    description: "Build and maintain the infrastructure that powers our global cloud platform and serves millions of users.",
    requirements: [
      "Deep expertise in Kubernetes orchestration",
      "Helm chart development and management",
      "Prometheus and Grafana stack (Promstack)",
      "Go programming for systems development",
      "Infrastructure as Code with Terraform",
      "Packer for image building and management",
      "VMware virtualization technologies",
      "PostgreSQL database administration",
      "CI/CD pipeline design and implementation",
      "Cloud-native architecture patterns"
    ],
    icon: Server
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-20 space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-text-primary font-mono uppercase tracking-tight">
                JOIN OUR TEAM
              </h1>
              <p className="text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto font-mono leading-relaxed">
                Help us build the future of cloud computing. We're looking for exceptional engineers to join our mission.
              </p>
            </div>

            <div className="space-y-12">
              {positions.map((position, index) => (
                <Card key={index} className="p-8 border-2 border-border bg-background">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-accent flex items-center justify-center">
                            <position.icon className="w-6 h-6 text-accent-foreground" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-text-primary font-mono uppercase">
                              {position.title}
                            </h2>
                            <div className="flex items-center gap-4 text-sm text-text-secondary font-mono">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {position.type}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {position.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="w-4 h-4" />
                                {position.salary}
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-lg text-text-secondary font-mono leading-relaxed">
                          {position.description}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-text-primary font-mono uppercase mb-4">
                        What We're Looking For
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {position.requirements.map((req, reqIndex) => (
                          <div key={reqIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-text-secondary font-mono text-sm">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <Button variant="accent" size="lg">
                        <Mail className="w-5 h-5 mr-2" />
                        Apply for this Position
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center space-y-6">
              <h3 className="text-2xl font-bold text-text-primary font-mono uppercase">
                Don't See the Perfect Role?
              </h3>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto font-mono">
                We're always interested in connecting with talented engineers. Send us your resume and let's discuss opportunities.
              </p>
              <Button variant="outline" size="lg">
                <Mail className="w-5 h-5 mr-2" />
                Send General Application
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;