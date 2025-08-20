import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  MapPin, 
  TrendingUp, 
  Award,
  Target,
  Handshake,
  Zap,
  Users2,
  Eye
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();
  
  const stats = [
    { icon: Building2, label: t("stat_capital"), value: t("stat_capital_value"), color: "text-primary" },
    { icon: Users, label: t("stat_team"), value: t("stat_team_value"), color: "text-secondary" },
    { icon: MapPin, label: t("stat_location"), value: t("stat_location_value"), color: "text-success" },
    { icon: TrendingUp, label: t("stat_growth"), value: t("stat_growth_value"), color: "text-warning" },
  ];

  const values = [
    {
      icon: Award,
      title: t("value_1_title"),
      description: t("value_1_desc"),
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Handshake,
      title: t("value_2_title"),
      description: t("value_2_desc"),
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: Zap,
      title: t("value_3_title"),
      description: t("value_3_desc"),
      color: "bg-success/10 text-success"
    },
    {
      icon: Users2,
      title: t("value_4_title"),
      description: t("value_4_desc"),
      color: "bg-warning/10 text-warning"
    },
    {
      icon: Eye,
      title: t("value_5_title"),
      description: t("value_5_desc"),
      color: "bg-destructive/10 text-destructive"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Building2 className="w-4 h-4" />
            <span>{t("about_badge")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("about_title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("about_subtitle")}
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-card-soft hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${stat.color.replace('text-', 'bg-')}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={`text-2xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="shadow-card-soft">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t("mission_title")}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t("mission_desc")}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card-soft">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Handshake className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t("partnership_title")}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t("partnership_desc")}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t("values_title")}</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("values_subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="shadow-card-soft hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-3 justify-center">
            <Badge variant="secondary" className="px-4 py-2">{t("contact_industry")}</Badge>
            <Badge variant="outline" className="px-4 py-2">{t("footer_service_3")}</Badge>
            <Badge variant="outline" className="px-4 py-2">{t("footer_service_1")}</Badge>
            <Badge variant="outline" className="px-4 py-2">{t("product_2_title")}</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;