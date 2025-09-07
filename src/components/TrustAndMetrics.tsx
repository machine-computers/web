import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Users, DollarSign, Clock, Shield, Star, ArrowRight } from "lucide-react";

const companies = [
  { name: "TechCorp", stage: "Series C", employees: "500+", savings: "$2.1M" },
  { name: "DataFlow", stage: "Series B", employees: "200+", savings: "$850K" },
  { name: "CloudSync", stage: "Series A", employees: "75+", savings: "$400K" },
  { name: "DevTools Inc", stage: "IPO Ready", employees: "1000+", savings: "$5.2M" }
];

const metrics = [
  {
    value: "500+",
    label: "Enterprise Customers",
    description: "From seed to IPO",
    icon: Building2
  },
  {
    value: "$50M+",
    label: "Customer Savings",
    description: "Annual infrastructure costs eliminated",
    icon: DollarSign
  },
  {
    value: "99.9%",
    label: "Customer Satisfaction",
    description: "Based on 2024 customer survey",
    icon: Star
  },
  {
    value: "10M+",
    label: "Instances Deployed",
    description: "Across all customer environments",
    icon: TrendingUp
  }
];

const TrustAndMetrics = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Geometric shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 border-4 border-text-primary/20 transform rotate-45" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-text-primary/10" />
      <div className="absolute bottom-20 left-40 w-12 h-12 border-4 border-accent/30" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/10 transform rotate-12" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">

      </div>
    </section>
  );
};

export default TrustAndMetrics;
