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
    "Certified Chartered Accountants with proven expertise",
    "Personalized service tailored to your unique needs",
    "Up-to-date knowledge of tax laws and regulations",
    "Transparent pricing with no hidden fees",
    "Commitment to accuracy and confidentiality",
    "Strategic advice for long-term financial success",
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
              Your Trusted Partner in Financial Success
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              With over 15 years of experience in accounting and financial consulting, we've helped hundreds of businesses and individuals achieve their financial goals.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our team of certified professionals stays ahead of industry changes to provide you with the most current and effective solutions. We believe in building lasting relationships based on trust, integrity, and exceptional service.
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
