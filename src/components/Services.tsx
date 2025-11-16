import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, FileText, TrendingUp, Building2, PiggyBank, Users } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "GST Registration",
    description: "Complete GST registration services to get your business compliant with tax regulations.",
  },
  {
    icon: Calculator,
    title: "GST Return Filing",
    description: "Accurate and timely GST return filing to ensure compliance and avoid penalties.",
  },
  {
    icon: TrendingUp,
    title: "GST Amendments",
    description: "Professional GST amendment services for corrections and updates to your filings.",
  },
  {
    icon: Building2,
    title: "Income Tax Return (ITR) Filing",
    description: "Expert ITR filing services to maximize your tax savings and ensure compliance.",
  },
  {
    icon: PiggyBank,
    title: "TDS & TCS Return Filing",
    description: "Comprehensive TDS and TCS return filing services for businesses and individuals.",
  },
  {
    icon: Calculator,
    title: "Accounting",
    description: "Professional accounting services to maintain accurate financial records.",
  },
  {
    icon: Users,
    title: "PAN/TAN/MSME Registration",
    description: "Complete registration services for PAN, TAN, and MSME certifications.",
  },
  {
    icon: FileText,
    title: "Professional Tax",
    description: "Professional tax registration and compliance services for your business.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Professional Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Complete GST and Income Tax solutions with expert accounting services for your business success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
