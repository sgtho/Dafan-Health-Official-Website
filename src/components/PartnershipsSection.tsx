import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, GraduationCap, Hospital, Globe, Users, Award } from "lucide-react";
import partnershipsBackground from "@/assets/partnerships-background.jpg";

const PartnershipsSection = () => {
  return (
    <section id="partnerships" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={partnershipsBackground} 
          alt="Professional partnership meeting" 
          className="w-full h-full object-cover"
          width="1335"
          height="1264"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/80 to-slate-800/90"></div>
      </div>
      
      {/* Section separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent z-10"></div>
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-2 h-2 bg-cyan-400/50 rounded-full animate-pulse"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-cyan-300 border-cyan-300/50 bg-white/10 backdrop-blur-sm">
            Strategic Partnerships
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Strategic Partnerships
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Building strong partnerships with leading academic institutions and healthcare 
            organizations to accelerate innovation and clinical translation.
          </p>
        </div>

        {/* Partnership Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center border-0 bg-white/10 backdrop-blur-sm shadow-2xl hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hospital className="w-8 h-8 text-cyan-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Medical Institutions</h3>
              <p className="text-cyan-100">
                Collaborating with national teaching hospitals to ensure clinical relevance 
                and accelerate the path from research to patient care.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-white/10 backdrop-blur-sm shadow-2xl hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Academic Excellence</h3>
              <p className="text-cyan-100">
                Strategic partnerships with renowned universities to leverage cutting-edge 
                research and access top-tier scientific talent.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-white/10 backdrop-blur-sm shadow-2xl hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-teal-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-teal-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Industry Leaders</h3>
              <p className="text-cyan-100">
                Partnerships with biotechnology companies and research institutes to 
                share expertise and accelerate innovation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Partners */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
            Our Key Partners
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 bg-white/10 backdrop-blur-sm shadow-2xl hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Hospital className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">National Defense Medical Center</h4>
                    <p className="text-cyan-100 mb-4">
                      Long-term collaboration in regenerative medicine research and clinical studies, 
                      focusing on stem cell and exosome applications.
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-cyan-300">
                      <Award className="w-4 h-4" />
                      <span>Academic Exchange Program</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/10 backdrop-blur-sm shadow-2xl hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">National Yang Ming Chiao Tung University</h4>
                    <p className="text-cyan-100 mb-4">
                      Strategic research partnerships in biotechnology innovation and 
                      advanced therapeutic development.
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-blue-300">
                      <Users className="w-4 h-4" />
                      <span>Joint Research Programs</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/10 backdrop-blur-sm shadow-2xl hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-teal-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">Industrial Technology Research Institute</h4>
                    <p className="text-cyan-100 mb-4">
                      Collaboration on GTP facility planning and construction, advancing 
                      manufacturing capabilities and process optimization.
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-teal-300">
                      <Globe className="w-4 h-4" />
                      <span>Technology Transfer Program</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/10 backdrop-blur-sm shadow-2xl hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-amber-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">Siyuan Foundation</h4>
                    <p className="text-cyan-100 mb-4">
                      Academic exchange and research collaboration focusing on 
                      innovative biotechnology applications and knowledge sharing.
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-amber-300">
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