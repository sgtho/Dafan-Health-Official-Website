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
  return (
    <section id="news" className="py-24 bg-gradient-to-b from-slate-50 to-white">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="hover-scale group cursor-pointer border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    <div className={`p-2 rounded-lg bg-${item.color}/10`}>
                      <IconComponent className={`w-5 h-5 text-${item.color}`} />
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-slate-500 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {item.content}
                  </p>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark p-0">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">
            Our <span className="text-primary">Journey</span>
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-2">{milestone.event}</h4>
                        <p className="text-slate-600 text-sm">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewsSection;