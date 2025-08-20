import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Building,
  Users,
  Send
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Mail className="w-4 h-4" />
            <span>{t("contact_badge")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("contact_title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("contact_subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">{t("contact_info_title")}</h3>
              
              <div className="space-y-6">
                <Card className="shadow-card-soft hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t("contact_address_title")}</h4>
                        <p className="text-muted-foreground">{t("contact_address")}</p>
                        <p className="text-sm text-muted-foreground mt-1">{t("contact_address_note")}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card-soft hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t("contact_person_title")}</h4>
                        <p className="text-muted-foreground">{t("contact_person")}</p>
                        <p className="text-sm text-muted-foreground mt-1">{t("contact_person_note")}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card-soft hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Building className="w-6 h-6 text-success" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t("contact_industry_title")}</h4>
                        <p className="text-muted-foreground">{t("contact_industry")}</p>
                        <p className="text-sm text-muted-foreground mt-1">{t("contact_industry_note")}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Info */}
            <Card className="bg-gradient-subtle shadow-card-soft">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">{t("why_choose_title")}</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{t("why_choose_1")}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-foreground">{t("why_choose_2")}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-foreground">{t("why_choose_3")}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-warning rounded-full"></div>
                    <span className="text-foreground">{t("why_choose_4")}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-card-soft">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">{t("form_title")}</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("form_name")} *
                    </label>
                    <Input placeholder={t("form_placeholder_name")} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("form_company")}
                    </label>
                    <Input placeholder={t("form_placeholder_company")} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("form_email")} *
                    </label>
                    <Input type="email" placeholder={t("form_placeholder_email")} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("form_phone")}
                    </label>
                    <Input placeholder={t("form_placeholder_phone")} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("form_subject")}
                  </label>
                  <Input placeholder={t("form_placeholder_subject")} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("form_message")} *
                  </label>
                  <Textarea 
                    placeholder={t("form_placeholder_message")}
                    rows={5}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{t("form_response_time")}</span>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  {t("form_submit")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;