import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Award, Users, Building2, Microscope } from "lucide-react";

const NewsSection = () => {
  const newsItems = [
    {
      date: "March 2025",
      title: "Strategic Visit to National Defense Medical Center",
      content: "Dafen Health conducted a strategic visit to the National Defense Medical University's Precious Instrument Center, fostering professional exchanges and advancing our collaborative research initiatives.",
      category: "Partnership",
      icon: Building2,
      color: "primary"
    },
    {
      date: "November 2024", 
      title: "Academic Exchange with Leading Universities",
      content: "Representatives from National Defense Medical Center and National Yang Ming Chiao Tung University visited Dafen Health for academic exchanges, strengthening industry-academia partnerships.",
      category: "Collaboration",
      icon: Users,
      color: "secondary"
    },
    {
      date: "July 2024",
      title: "Siyuan Foundation Research Partnership",
      content: "The Siyuan Foundation visited Dafen Health to explore collaborative opportunities in biotechnology research and academic knowledge sharing initiatives.",
      category: "Research",
      icon: Microscope,
      color: "success"
    },
    {
      date: "January 2022",
      title: "GTP Facility Development Initiative",
      content: "Signed guidance agreement with Industrial Technology Research Institute to initiate planning and construction of our GTP (Good Tissue Practice) manufacturing facility.",
      category: "Infrastructure",
      icon: Award,
      color: "warning"
    }
  ];

  const milestones = [
    { year: "2020", event: "Company Establishment", description: "Dafen Health Co., Ltd. officially established with focus on regenerative medicine development" },
    { year: "2021", event: "Facility Planning", description: "Site selection completed and manufacturing facility project officially launched" },
    { year: "2022", event: "Research Partnerships", description: "Strategic collaborations established with leading academic and research institutions" },
    { year: "2024", event: "Expansion Phase", description: "Academic exchange programs expanded and research capabilities enhanced" },
    { year: "2025", event: "GTP Certification Goal", description: "Targeting GTP certification and collaboration with regional major hospitals" }
  ];

  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Latest News & Updates
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Latest News & Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our latest research breakthroughs, partnerships, 
            and milestones in regenerative medicine development.
          </p>
        </div>

        {/* Recent News */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Recent Developments
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {newsItems.map((item, index) => (
              <Card key={index} className="border-0 shadow-card-soft hover:shadow-medical transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-${item.color}/10 rounded-full flex items-center justify-center`}>
                      <item.icon className={`w-6 h-6 text-${item.color}`} />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Company Timeline
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="border-0 shadow-card-soft">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h4 className="text-lg font-semibold mb-2">{milestone.event}</h4>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Goals */}
        <div className="text-center bg-gradient-subtle rounded-lg p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Looking Ahead
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our commitment to advancing regenerative medicine continues with ambitious goals 
            for GTP certification and expanded hospital collaborations by 2025-2026.
          </p>
          <Button size="lg" className="shadow-medical">
            Learn About Our Vision
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;