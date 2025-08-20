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

const AboutSection = () => {
  const stats = [
    { icon: Building2, label: "資本額", value: "1.97億元", color: "text-primary" },
    { icon: Users, label: "專業團隊", value: "15人", color: "text-secondary" },
    { icon: MapPin, label: "營運據點", value: "台中工業區", color: "text-success" },
    { icon: TrendingUp, label: "成長潛力", value: "快速發展", color: "text-warning" },
  ];

  const values = [
    {
      icon: Award,
      title: "品質至上",
      description: "專業、安全、穩定、有效",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Handshake,
      title: "忠誠信任",
      description: "團隊合作、核心價值、彼此信賴",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: Zap,
      title: "高效簡化",
      description: "精實管理、扁平組織、資源優化",
      color: "bg-success/10 text-success"
    },
    {
      icon: Users2,
      title: "共享共榮",
      description: "互利共贏、尊重包容、團隊共好",
      color: "bg-warning/10 text-warning"
    },
    {
      icon: Eye,
      title: "透明公開",
      description: "資訊公開、信任溝通、公平機制",
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
            <span>關於大凡健康</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            積極推動再生醫療發展的創新企業
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            以「生技創新 × 再生醫療 × 健康未來」為核心，致力於結合臨床需求與研發能量
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
                <h3 className="text-2xl font-bold text-foreground">企業使命</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                提供專業的健康與醫療諮詢服務，持續深耕尖端生物科技研發，
                為民眾帶來更優質、更精準的健康解決方案。
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card-soft">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Handshake className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">核心合作</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                長期與國家級教學醫院及知名大學建立計畫性產學合作與專業交流，
                掌握全球最新醫學資訊與技術趨勢，並將成果轉化為臨床可用的高端醫療產品。
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">經營理念</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              我們堅持五大核心價值，打造卓越的生技醫療企業文化
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
            <Badge variant="secondary" className="px-4 py-2">生化科技研發業</Badge>
            <Badge variant="outline" className="px-4 py-2">再生醫療</Badge>
            <Badge variant="outline" className="px-4 py-2">幹細胞研發</Badge>
            <Badge variant="outline" className="px-4 py-2">外泌體技術</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;