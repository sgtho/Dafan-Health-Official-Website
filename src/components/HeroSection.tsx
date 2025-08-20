import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, Shield, Award } from "lucide-react";
import heroImage from "@/assets/stem-cell-background.jpg";
const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Stem Cell and Exosome Research Background" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-800/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Microscope className="w-4 h-4" />
            <span>Leading Regenerative Medicine Innovation</span>
          </div>

          {/* Main Heading */}
          <h1 className="md:text-6xl font-bold text-white mb-6 animate-fade-in py-[20px] text-5xl">
            Advancing
            <span className="text-primary"> Stem Cell </span>
            &
            <span className="text-secondary"> Exosome </span>
            <br />
            Drug Development
          </h1>

          {/* Subtitle */}
          <p className="md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in-right text-slate-50 text-sm">
            Dafen Health is an innovative biotechnology company focused on cutting-edge regenerative medicine research and development, creating safe, effective, and high-quality therapeutic solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
            <Button size="lg" className="text-lg px-8 py-6 shadow-medical" onClick={() => scrollToSection("technology")}>
              Our Technology
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={() => scrollToSection("contact")}>
              Partner With Us
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Advanced R&D</h3>
              <p className="text-muted-foreground">Cutting-edge biotechnology research capabilities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">GMP Standards</h3>
              <p className="text-muted-foreground">International quality and safety compliance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Academic Excellence</h3>
              <p className="text-muted-foreground">Partnerships with leading medical institutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center animate-float">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;