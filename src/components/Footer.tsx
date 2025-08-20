import { MapPin, Building, Users, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full opacity-90"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">大凡健康股份有限公司</h3>
                <p className="text-sm opacity-80">Dafen Health Co., Ltd.</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              {t("footer_company_desc")}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">{t("contact_address")} {t("contact_address_note")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm">{t("footer_contact_person")}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t("footer_quick_links")}</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-background/80 hover:text-primary transition-colors">{t("nav_home")}</a></li>
              <li><a href="#products" className="text-background/80 hover:text-primary transition-colors">{t("nav_products")}</a></li>
              <li><a href="#research" className="text-background/80 hover:text-primary transition-colors">{t("nav_research")}</a></li>
              <li><a href="#about" className="text-background/80 hover:text-primary transition-colors">{t("nav_about")}</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-primary transition-colors">{t("nav_contact")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">{t("footer_services")}</h4>
            <ul className="space-y-3">
              <li><span className="text-background/80">{t("footer_service_1")}</span></li>
              <li><span className="text-background/80">{t("footer_service_2")}</span></li>
              <li><span className="text-background/80">{t("footer_service_3")}</span></li>
              <li><span className="text-background/80">{t("footer_service_4")}</span></li>
              <li><span className="text-background/80">{t("footer_service_5")}</span></li>
            </ul>
          </div>
        </div>

        {/* Company Details */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center space-x-3">
              <Building className="w-4 h-4 text-primary" />
              <div>
                <span className="text-background/60">{t("footer_industry_label")}</span>
                <span className="text-background/80">{t("footer_industry_value")}</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Building className="w-4 h-4 text-primary" />
              <div>
                <span className="text-background/60">{t("footer_capital_label")}</span>
                <span className="text-background/80">{t("footer_capital_value")}</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-4 h-4 text-primary" />
              <div>
                <span className="text-background/60">{t("footer_employees_label")}</span>
                <span className="text-background/80">{t("footer_employees_value")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4">{t("values_title")}</h4>
          <div className="grid md:grid-cols-5 gap-4 text-sm">
            <div className="text-center">
              <div className="text-primary font-medium">{t("value_1_title")}</div>
              <div className="text-background/60 text-xs mt-1">Professional, Safe</div>
            </div>
            <div className="text-center">
              <div className="text-primary font-medium">{t("value_2_title")}</div>
              <div className="text-background/60 text-xs mt-1">Teamwork, Trust</div>
            </div>
            <div className="text-center">
              <div className="text-primary font-medium">{t("value_3_title")}</div>
              <div className="text-background/60 text-xs mt-1">Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-primary font-medium">{t("value_4_title")}</div>
              <div className="text-background/60 text-xs mt-1">Shared Growth</div>
            </div>
            <div className="text-center">
              <div className="text-primary font-medium">{t("value_5_title")}</div>
              <div className="text-background/60 text-xs mt-1">Transparency</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center">
          <div className="text-sm text-background/60">
            <p className="mb-2">{t("footer_copyright")}</p>
            <p>{t("footer_tagline")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;