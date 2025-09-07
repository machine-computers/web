import { useState } from "react";
import { Card } from "@machine/design";
import { Button } from "@machine/design";
import { Input } from "@machine/design";
import { Label } from "@machine/design";
import { Calculator, DollarSign, Users, TrendingUp } from "lucide-react";

const ROICalculator = () => {
  const [developers, setDevelopers] = useState("50");
  const [laptopCost, setLaptopCost] = useState("2500");
  const [itSalary, setItSalary] = useState("120000");
  const [onboardingDays, setOnboardingDays] = useState("5");
  const [developerSalary, setDeveloperSalary] = useState("150000");
  
  // Calculate savings
  const numDevelopers = parseInt(developers) || 0;
  const costPerLaptop = parseInt(laptopCost) || 0;
  const itSalaryAnnual = parseInt(itSalary) || 0;
  const onboardingDaysNum = parseInt(onboardingDays) || 0;
  const devSalaryAnnual = parseInt(developerSalary) || 0;
  
  // Hardware savings (3-year laptop lifecycle)
  const hardwareSavings = numDevelopers * costPerLaptop;
  
  // IT overhead savings (assume 1 IT person per 50 developers)
  const itOverheadSavings = Math.floor(numDevelopers / 50) * itSalaryAnnual * 0.6; // 60% reduction
  
  // Onboarding time savings (85% faster = from 5 days to ~1 day)
  const onboardingTimeSaved = onboardingDaysNum * 0.85;
  const onboardingCostSavings = (onboardingTimeSaved * (devSalaryAnnual / 365)) * numDevelopers;
  
  // Total annual savings
  const totalSavings = hardwareSavings / 3 + itOverheadSavings + onboardingCostSavings;
  
  // ROI calculation (assume Machine costs 30% of traditional infrastructure)
  const machineCost = totalSavings * 0.3;
  const netSavings = totalSavings - machineCost;
  const roiMultiplier = totalSavings / machineCost;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-24 bg-accent text-accent-foreground relative overflow-hidden">
      {/* Geometric shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-accent-foreground/10 transform rotate-45 -translate-x-16 -translate-y-16" />
      <div className="absolute top-20 right-10 w-24 h-24 border-4 border-accent-foreground/20" />
      <div className="absolute bottom-10 left-20 w-16 h-16 bg-accent-foreground/15" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-4 border-accent-foreground/10 transform rotate-12 translate-x-20 translate-y-20" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-foreground text-accent font-mono text-sm font-bold uppercase border-2 border-accent-foreground">
            <Calculator className="w-4 h-4" />
            Interactive ROI Calculator
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold font-mono uppercase tracking-tight">
            Our impact
            <br />
            <span className="text-accent-foreground/80">on you</span>
          </h2>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto font-mono leading-relaxed opacity-90">
            See exactly how much you could save by switching to Machine's compute-on-demand infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Input Form */}
          <Card className="p-8 border-4 border-accent-foreground bg-background text-text-primary">
            <div className="space-y-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold font-mono uppercase mb-2">Your Current Setup</h3>
                <p className="text-text-secondary font-mono text-sm">Enter your team details below</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="developers" className="text-sm font-bold font-mono uppercase">
                    Number of Developers
                  </Label>
                  <Input
                    id="developers"
                    type="number"
                    value={developers}
                    onChange={(e) => setDevelopers(e.target.value)}
                    className="font-mono border-2 border-text-primary"
                    placeholder="50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="laptop-cost" className="text-sm font-bold font-mono uppercase">
                    Cost per Laptop ($)
                  </Label>
                  <Input
                    id="laptop-cost"
                    type="number"
                    value={laptopCost}
                    onChange={(e) => setLaptopCost(e.target.value)}
                    className="font-mono border-2 border-text-primary"
                    placeholder="2500"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="it-salary" className="text-sm font-bold font-mono uppercase">
                    IT Admin Salary ($)
                  </Label>
                  <Input
                    id="it-salary"
                    type="number"
                    value={itSalary}
                    onChange={(e) => setItSalary(e.target.value)}
                    className="font-mono border-2 border-text-primary"
                    placeholder="120000"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="onboarding-days" className="text-sm font-bold font-mono uppercase">
                    Onboarding Days
                  </Label>
                  <Input
                    id="onboarding-days"
                    type="number"
                    value={onboardingDays}
                    onChange={(e) => setOnboardingDays(e.target.value)}
                    className="font-mono border-2 border-text-primary"
                    placeholder="5"
                  />
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="dev-salary" className="text-sm font-bold font-mono uppercase">
                    Average Developer Salary ($)
                  </Label>
                  <Input
                    id="dev-salary"
                    type="number"
                    value={developerSalary}
                    onChange={(e) => setDeveloperSalary(e.target.value)}
                    className="font-mono border-2 border-text-primary"
                    placeholder="150000"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            <Card className="p-8 border-4 border-accent-foreground bg-accent-foreground text-accent">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-accent text-accent-foreground flex items-center justify-center mx-auto border-2 border-accent">
                  <TrendingUp className="w-10 h-10" />
                </div>
                <div>
                  <div className="text-5xl font-bold font-mono mb-2">
                    {formatCurrency(netSavings)}
                  </div>
                  <div className="text-lg font-mono uppercase opacity-80">Annual Net Savings</div>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-6 border-t-2 border-accent">
                  <div>
                    <div className="text-3xl font-bold font-mono">{roiMultiplier.toFixed(1)}x</div>
                    <div className="text-sm font-mono uppercase opacity-80">ROI Multiplier</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold font-mono">{onboardingTimeSaved.toFixed(1)}</div>
                    <div className="text-sm font-mono uppercase opacity-80">Days Saved/Hire</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Breakdown */}
            <Card className="p-6 border-4 border-accent-foreground bg-background text-text-primary">
              <h4 className="text-lg font-bold font-mono uppercase mb-4">Savings Breakdown</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 border border-border bg-surface-elevated">
                  <span className="font-mono text-sm">Hardware Savings (Annual)</span>
                  <span className="font-mono font-bold">{formatCurrency(hardwareSavings / 3)}</span>
                </div>
                <div className="flex justify-between items-center p-3 border border-border bg-surface-elevated">
                  <span className="font-mono text-sm">IT Overhead Reduction</span>
                  <span className="font-mono font-bold">{formatCurrency(itOverheadSavings)}</span>
                </div>
                <div className="flex justify-between items-center p-3 border border-border bg-surface-elevated">
                  <span className="font-mono text-sm">Onboarding Efficiency</span>
                  <span className="font-mono font-bold">{formatCurrency(onboardingCostSavings)}</span>
                </div>
                <div className="flex justify-between items-center p-3 border-2 border-accent bg-accent/10">
                  <span className="font-mono font-bold text-sm">Total Gross Savings</span>
                  <span className="font-mono font-bold text-accent">{formatCurrency(totalSavings)}</span>
                </div>
                <div className="flex justify-between items-center p-3 border border-border">
                  <span className="font-mono text-sm">Machine Infrastructure Cost</span>
                  <span className="font-mono font-bold">-{formatCurrency(machineCost)}</span>
                </div>
              </div>
            </Card>

            <div className="text-center">
              <Button variant="default" size="lg" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 font-bold px-8 py-4">
                <DollarSign className="w-5 h-5 mr-2" />
                Get Custom Implementation Plan
              </Button>
              <p className="text-sm font-mono mt-3 opacity-80">
                Based on {numDevelopers} developers • Results guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ROICalculator };
export default ROICalculator;
