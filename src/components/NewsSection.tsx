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
  return;
};
export default NewsSection;