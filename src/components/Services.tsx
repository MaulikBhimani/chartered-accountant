import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, FileText, TrendingUp, Building2, PiggyBank, Users } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    description: "Comprehensive accounting services to keep your financial records accurate and up-to-date.",
  },
  {
    icon: FileText,
    title: "Tax Planning & Filing",
    description: "Strategic tax planning and efficient filing to minimize liabilities and maximize returns.",
  },
  {
    icon: TrendingUp,
    title: "Financial Advisory",
    description: "Expert guidance on financial strategy, investments, and business growth opportunities.",
  },
  {
    icon: Building2,
    title: "Business Consulting",
    description: "Professional consulting services to optimize operations and drive business success.",
  },
  {
    icon: PiggyBank,
    title: "Audit & Assurance",
    description: "Thorough auditing services ensuring compliance and financial transparency.",
  },
  {
    icon: Users,
    title: "Payroll Management",
    description: "Streamlined payroll processing and employee benefits administration.",
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
            Comprehensive Financial Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide a full range of accounting and financial services designed to support your business at every stage
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
