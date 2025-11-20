import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const highlights = [
    "Expert GST registration, return filing & amendments",
    "Professional Income Tax return filing with maximum refunds",
    "Complete TDS & TCS return filing solutions",
    "Comprehensive accounting and bookkeeping services",
    "PAN, TAN, and MSME registration services",
    "Transparent pricing with timely service delivery",
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              SHREE CONSULTANCY - Your Tax & Registration Expert
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Led by Nikhil Amreliya, SHREE CONSULTANCY specializes in GST registration, GST return filing, GST amendments, Income Tax return filing, TDS & TCS return filing, accounting services, and comprehensive business registration services including PAN, TAN, and MSME registration.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We provide accurate, timely, and professional services to help your business stay compliant with all tax regulations. Our expertise ensures maximum refunds and penalty-free compliance for all your tax, accounting, and registration needs.
            </p>
            <Button size="lg" className="shadow-elegant hover:scale-105 transition-all duration-300">
              Learn More About Us
            </Button>
          </div>

          <div className="space-y-4">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <p className="text-lg text-foreground font-medium">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
