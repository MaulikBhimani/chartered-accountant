import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Shield, TrendingUp } from "lucide-react";

const Hero = () => {
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
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90 animate-gradient">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-fade-in">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm text-white/90">Certified Chartered Accountants</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Expert Financial Solutions for Your Business Growth
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Professional accounting, tax planning, and financial consulting services tailored to your success
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              variant="secondary" 
              className="group text-lg px-8 py-6 shadow-glow hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
              onClick={() => scrollToSection("services")}
            >
              Our Services
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/70">Clients Served</div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-4 mx-auto">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-white/70">Years Experience</div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-4 mx-auto">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/70">Compliance Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
