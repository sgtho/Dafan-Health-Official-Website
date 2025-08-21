import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, GraduationCap, Hospital, Globe, Users, Award } from "lucide-react";

const PartnershipsSection = () => {
  return (
    <section id="partnerships" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Strategic Partnerships
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Strategic Partnerships
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building strong partnerships with leading academic institutions and healthcare 
            organizations to accelerate innovation and clinical translation.
          </p>
        </div>

        {/* Partnership Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center border-0 shadow-card-soft hover:shadow-medical transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hospital className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Medical Institutions</h3>
              <p className="text-muted-foreground">
                Collaborating with national teaching hospitals to ensure clinical relevance 
                and accelerate the path from research to patient care.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-card-soft hover:shadow-medical transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Academic Excellence</h3>
              <p className="text-muted-foreground">
                Strategic partnerships with renowned universities to leverage cutting-edge 
                research and access top-tier scientific talent.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-card-soft hover:shadow-medical transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Industry Leaders</h3>
              <p className="text-muted-foreground">
                Partnerships with biotechnology companies and research institutes to 
                share expertise and accelerate innovation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Partners */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Our Key Partners
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-card-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Hospital className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">National Defense Medical Center</h4>
                    <p className="text-muted-foreground mb-4">
                      Long-term collaboration in regenerative medicine research and clinical studies, 
                      focusing on stem cell and exosome applications.
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-primary">
                      <Award className="w-4 h-4" />
                      <span>Academic Exchange Program</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">National Yang Ming Chiao Tung University</h4>
                    <p className="text-muted-foreground mb-4">
                      Strategic research partnerships in biotechnology innovation and 
                      advanced therapeutic development.
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-secondary">
                      <Users className="w-4 h-4" />
                      <span>Joint Research Programs</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Industrial Technology Research Institute</h4>
                    <p className="text-muted-foreground mb-4">
                      Collaboration on GTP facility planning and construction, advancing 
                      manufacturing capabilities and process optimization.
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-success">
                      <Globe className="w-4 h-4" />
                      <span>Technology Transfer Program</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card-soft">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-warning" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Siyuan Foundation</h4>
                    <p className="text-muted-foreground mb-4">
                      Academic exchange and research collaboration focusing on 
                      innovative biotechnology applications and knowledge sharing.
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-warning">
                      <Users className="w-4 h-4" />
                      <span>Research Exchange</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnershipsSection;