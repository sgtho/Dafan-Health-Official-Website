import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Award, Users, Building2, Microscope } from "lucide-react";
const NewsSection = () => {
  const newsItems = [{
    date: "March 2025",
    title: "Strategic Visit to National Defense Medical Center",
    content: "Dafen Health conducted a strategic visit to the National Defense Medical University's Precious Instrument Center, fostering professional exchanges and advancing our collaborative research initiatives.",
    category: "Partnership",
    icon: Building2,
    color: "primary"
  }, {
    date: "November 2024",
    title: "Academic Exchange with Leading Universities",
    content: "Representatives from National Defense Medical Center and National Yang Ming Chiao Tung University visited Dafen Health for academic exchanges, strengthening industry-academia partnerships.",
    category: "Collaboration",
    icon: Users,
    color: "secondary"
  }, {
    date: "July 2024",
    title: "Siyuan Foundation Research Partnership",
    content: "The Siyuan Foundation visited Dafen Health to explore collaborative opportunities in biotechnology research and academic knowledge sharing initiatives.",
    category: "Research",
    icon: Microscope,
    color: "success"
  }, {
    date: "January 2022",
    title: "GTP Facility Development Initiative",
    content: "Signed guidance agreement with Industrial Technology Research Institute to initiate planning and construction of our GTP (Good Tissue Practice) manufacturing facility.",
    category: "Infrastructure",
    icon: Award,
    color: "warning"
  }];
  const milestones = [{
    year: "2020",
    event: "Company Establishment",
    description: "Dafen Health Co., Ltd. officially established with focus on regenerative medicine development"
  }, {
    year: "2021",
    event: "Facility Planning",
    description: "Site selection completed and manufacturing facility project officially launched"
  }, {
    year: "2022",
    event: "Research Partnerships",
    description: "Strategic collaborations established with leading academic and research institutions"
  }, {
    year: "2024",
    event: "Expansion Phase",
    description: "Academic exchange programs expanded and research capabilities enhanced"
  }, {
    year: "2025",
    event: "GTP Certification Goal",
    description: "Targeting GTP certification and collaboration with regional major hospitals"
  }];
  return <section id="news" className="py-16 md:py-24 bg-gradient-to-b from-muted/50 via-slate-50/80 to-white relative">
      {/* Visual section break */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-1 h-1 bg-primary/40 rounded-full animate-pulse"></div>
        <div className="w-1 h-1 bg-secondary/40 rounded-full animate-pulse" style={{
        animationDelay: '0.5s'
      }}></div>
        <div className="w-1 h-1 bg-success/40 rounded-full animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Company <span className="text-primary">Milestones</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Key developments and partnerships shaping our journey in regenerative medicine
          </p>
        </div>

        {/* News Grid */}
        

        {/* Timeline */}
        <div className="relative">
          
          
          {/* Mobile-first timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line - hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
            {/* Mobile timeline line */}
            <div className="md:hidden absolute left-6 top-0 w-0.5 h-full bg-gradient-to-b from-primary to-secondary"></div>
            
            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => <div key={index} className="relative">
                  {/* Mobile layout */}
                  <div className="md:hidden">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 relative">
                        <div className="w-3 h-3 bg-primary rounded-full border-2 border-white shadow-lg relative z-10 ml-[18px]"></div>
                      </div>
                      <div className="ml-6 flex-1">
                        <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                          <CardContent className="p-4">
                            <div className="text-xl font-bold text-primary mb-1">{milestone.year}</div>
                            <h4 className="text-base font-semibold text-slate-900 mb-2 leading-tight">{milestone.event}</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">{milestone.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop layout */}
                  <div className="hidden md:block">
                    <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                      <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                          <CardContent className="p-6">
                            <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                            <h4 className="text-lg font-semibold text-slate-900 mb-2">{milestone.event}</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">{milestone.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default NewsSection;