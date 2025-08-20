import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, MapPin, TrendingUp, Target, Handshake } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            About Dafen Health
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Pioneering the Future of Regenerative Medicine
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With "Biotech Innovation × Regenerative Medicine × Health Future" as our core, 
            we are committed to integrating clinical needs with advanced R&D capabilities.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">NT$196.6M</div>
            <div className="text-muted-foreground">Capital Investment</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-secondary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">15+</div>
            <div className="text-muted-foreground">Expert Team Members</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-success" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">Taichung</div>
            <div className="text-muted-foreground">Industrial Park Base</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-warning" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">35+</div>
            <div className="text-muted-foreground">Years of Research</div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 shadow-card-soft">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide professional health and medical consulting services while continuously 
                advancing biotechnology research, delivering superior and more precise healthcare 
                solutions to improve global health outcomes.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-card-soft">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Handshake className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Strategic Partnerships</h3>
              <p className="text-muted-foreground leading-relaxed">
                Long-term collaborations with national teaching hospitals and renowned universities 
                enable us to stay at the forefront of global medical knowledge and transform 
                research into clinically applicable solutions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our Core Values
          </h3>
          <p className="text-muted-foreground mb-8">
            Five fundamental principles that guide our pursuit of excellence in biotechnology
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {[
            {
              title: "Quality First",
              description: "Professional, Safe, Stable, and Effective"
            },
            {
              title: "Loyalty & Trust",
              description: "Teamwork, Core Values, Mutual Trust"
            },
            {
              title: "Efficiency",
              description: "Lean Management, Flat Organization, Resource Optimization"
            },
            {
              title: "Shared Growth",
              description: "Mutual Benefit, Respect & Inclusion, Team Success"
            },
            {
              title: "Transparency",
              description: "Information Transparency, Trustful Communication, Fair Mechanisms"
            }
          ].map((value, index) => (
            <Card key={index} className="text-center border-0 shadow-card-soft hover:shadow-medical transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                  {index + 1}
                </div>
                <h4 className="font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;