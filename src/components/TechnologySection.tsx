import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Microscope, Dna, FlaskConical, Shield, CheckCircle, ArrowRight } from "lucide-react";
import technologyImage from "@/assets/technology-lab.jpg";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const TechnologySection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { containerRef: cardsRef, visibleItems: cardVisibility } = useStaggeredAnimation(2, 200);
  const { containerRef: capabilitiesRef, visibleItems: capabilityVisibility } = useStaggeredAnimation(3, 150);

  return (
    <section id="technology" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-1000 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Advanced Technology
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Cutting-Edge Research & Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our state-of-the-art facilities and innovative technologies drive breakthrough 
            discoveries in stem cell and exosome therapeutics.
          </p>
        </div>

        {/* Technology Overview */}
        <div ref={featuresRef} className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className={`transition-all duration-1000 ${featuresVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-30px]'}`}>
            <img 
              src={technologyImage} 
              alt="Advanced Biotechnology Laboratory" 
              className="w-full h-96 object-cover rounded-lg shadow-card-soft hover:shadow-glow transition-all duration-300 hover:scale-105"
            />
          </div>
          <div className={`transition-all duration-1000 ${featuresVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-[30px]'}`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              International Standards, Local Innovation
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our research facilities adhere to Good Manufacturing Practice (GMP) standards, 
              ensuring the highest quality and safety in all our research and development processes.
            </p>
            <div className="space-y-4">
              {[
                "GMP-certified manufacturing facilities",
                "Advanced cell culture and processing systems",
                "Automated quality control and monitoring",
                "Cleanroom environments and sterile processing"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Technologies */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className={`border-0 shadow-card-soft hover:shadow-medical transition-all duration-500 hover:scale-105 ${cardVisibility[0] ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'}`}>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 hover:animate-pulse-slow">
                <Dna className="w-6 h-6 text-primary animate-rotate-slow" />
              </div>
              <CardTitle className="text-xl">Stem Cell Drug Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Focused on innovative stem cell therapy development for various diseases 
                and medical conditions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Mesenchymal stem cell technology</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Pluripotent stem cell applications</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Autologous stem cell therapy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Clinical trial management</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={`border-0 shadow-card-soft hover:shadow-medical transition-all duration-500 hover:scale-105 ${cardVisibility[1] ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'}`} style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 hover:animate-pulse-slow">
                <Microscope className="w-6 h-6 text-secondary animate-float" />
              </div>
              <CardTitle className="text-xl">Exosome Drug Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Developing advanced exosome carrier technology for precise cell-to-cell 
                communication and targeted therapeutic delivery.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Exosome purification technology</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Carrier engineering design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Targeted therapy development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Drug delivery systems</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* R&D Capabilities */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Research & Development Capabilities
          </h3>
        </div>

        <div ref={capabilitiesRef} className="grid md:grid-cols-3 gap-8">
          <Card className={`text-center border-0 shadow-card-soft hover:shadow-glow transition-all duration-500 hover:scale-105 ${capabilityVisibility[0] ? 'animate-scale-in-bounce' : 'opacity-0 scale-95'}`}>
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:animate-glow">
                <Shield className="w-8 h-8 text-primary animate-float-slow" />
              </div>
              <h4 className="text-xl font-semibold mb-4">International Standards</h4>
              <p className="text-muted-foreground">
                Following GMP standards to ensure product quality and safety in all 
                research and manufacturing processes.
              </p>
            </CardContent>
          </Card>

          <Card className={`text-center border-0 shadow-card-soft hover:shadow-glow transition-all duration-500 hover:scale-105 ${capabilityVisibility[1] ? 'animate-scale-in-bounce' : 'opacity-0 scale-95'}`} style={{ animationDelay: '0.15s' }}>
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:animate-glow">
                <FlaskConical className="w-8 h-8 text-secondary animate-float" style={{ animationDelay: '0.5s' }} />
              </div>
              <h4 className="text-xl font-semibold mb-4">Clinical Translation</h4>
              <p className="text-muted-foreground">
                Translating cutting-edge research discoveries into practical clinical 
                applications and therapeutic solutions.
              </p>
            </CardContent>
          </Card>

          <Card className={`text-center border-0 shadow-card-soft hover:shadow-glow transition-all duration-500 hover:scale-105 ${capabilityVisibility[2] ? 'animate-scale-in-bounce' : 'opacity-0 scale-95'}`} style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:animate-glow">
                <Microscope className="w-8 h-8 text-success animate-float-slow" style={{ animationDelay: '1s' }} />
              </div>
              <h4 className="text-xl font-semibold mb-4">Advanced Equipment</h4>
              <p className="text-muted-foreground">
                State-of-the-art laboratory equipment and instrumentation for 
                precision research and development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;