import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dna, Zap, FlaskConical, ArrowUpRight } from "lucide-react";
import cellResearchImage from "@/assets/cell-research.jpg";

const ProductsSection = () => {
  const products = [
    {
      icon: Dna,
      title: "幹細胞新藥研發",
      description: "專注於幹細胞治療技術研發，針對多種疾病開發創新治療方案",
      features: [
        "間充質幹細胞技術",
        "多潛能幹細胞應用",
        "自體幹細胞治療",
        "臨床試驗管理"
      ],
      gradient: "bg-gradient-primary"
    },
    {
      icon: Zap,
      title: "外泌體新藥研發",
      description: "開發外泌體載體技術，提供精準的細胞間通訊治療解決方案",
      features: [
        "外泌體純化技術",
        "載體工程設計",
        "靶向治療研發",
        "藥物遞送系統"
      ],
      gradient: "bg-gradient-secondary"
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FlaskConical className="w-4 h-4" />
            <span>核心產品服務</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            專業的再生醫療研發服務
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            結合臨床需求與研發能量，打造安全、有效且高品質的醫療產品與服務
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden shadow-card-soft hover:shadow-glow transition-all duration-300 border-0">
              <CardContent className="p-0">
                <div className={`h-32 ${product.gradient} flex items-center justify-center`}>
                  <product.icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{product.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="group">
                    了解更多
                    <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Showcase */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card-soft">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                尖端科技研發實力
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">國際級研發標準</h4>
                    <p className="text-muted-foreground">遵循GMP標準，確保產品品質與安全性</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">產學合作網絡</h4>
                    <p className="text-muted-foreground">與頂尖大學和醫院建立長期合作關係</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">臨床轉化應用</h4>
                    <p className="text-muted-foreground">將研發成果轉化為實際臨床應用</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={cellResearchImage} 
                alt="細胞研發" 
                className="w-full h-80 object-cover rounded-xl shadow-medical"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;