import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, MapPin, TrendingUp, Target, Handshake } from "lucide-react";
const AboutSection = () => {
  return <section id="about" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary py-0 my-[20px]">
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
        

        
      </div>
    </section>;
};
export default AboutSection;