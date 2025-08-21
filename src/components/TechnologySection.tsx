import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Microscope, Dna, FlaskConical, Shield, CheckCircle, ArrowRight } from "lucide-react";
import technologyImage from "@/assets/technology-lab.jpg";
const TechnologySection = () => {
  return <section id="technology" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img src={technologyImage} alt="Advanced Biotechnology Laboratory" className="w-full h-96 object-cover rounded-lg shadow-card-soft" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              International Standards, Local Innovation
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">Our research facilities ensure the highest quality and safety in all our research and development processes.</p>
            <div className="space-y-4">
            {["Advanced cell culture and processing systems", "Automated quality control and monitoring", "Cleanroom environments and sterile processing"].map((feature, index) => <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>)}
            </div>
          </div>
        </div>

        {/* Core Technologies */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 shadow-card-soft hover:shadow-medical transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Dna className="w-6 h-6 text-primary" />
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

          <Card className="border-0 shadow-card-soft hover:shadow-medical transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Microscope className="w-6 h-6 text-secondary" />
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

      </div>
    </section>;
};
export default TechnologySection;