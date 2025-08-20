import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dna, Zap, FlaskConical, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import cellResearchImage from "@/assets/cell-research.jpg";

const ProductsSection = () => {
  const { t } = useLanguage();
  
  const products = [
    {
      icon: Dna,
      title: t("product_1_title"),
      description: t("product_1_desc"),
      features: [
        t("product_1_feature_1"),
        t("product_1_feature_2"),
        t("product_1_feature_3"),
        t("product_1_feature_4")
      ],
      gradient: "bg-gradient-primary"
    },
    {
      icon: Zap,
      title: t("product_2_title"),
      description: t("product_2_desc"),
      features: [
        t("product_2_feature_1"),
        t("product_2_feature_2"),
        t("product_2_feature_3"),
        t("product_2_feature_4")
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
            <span>{t("products_badge")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("products_title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("products_subtitle")}
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
                    {t("learn_more")}
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
                {t("research_title")}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t("research_1_title")}</h4>
                    <p className="text-muted-foreground">{t("research_1_desc")}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t("research_2_title")}</h4>
                    <p className="text-muted-foreground">{t("research_2_desc")}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t("research_3_title")}</h4>
                    <p className="text-muted-foreground">{t("research_3_desc")}</p>
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