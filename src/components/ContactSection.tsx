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

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Mail className="w-4 h-4" />
            <span>聯繫我們</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            開啟合作可能性
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            歡迎與我們聯繫，討論再生醫療領域的合作機會與專業諮詢
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">聯繫資訊</h3>
              
              <div className="space-y-6">
                <Card className="shadow-card-soft hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">公司地址</h4>
                        <p className="text-muted-foreground">台中市西屯區工業區七路2-1號</p>
                        <p className="text-sm text-muted-foreground mt-1">(台中工業區)</p>
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
                        <h4 className="font-semibold text-foreground mb-2">聯繫人</h4>
                        <p className="text-muted-foreground">鍾小姐</p>
                        <p className="text-sm text-muted-foreground mt-1">專業諮詢服務</p>
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
                        <h4 className="font-semibold text-foreground mb-2">產業類別</h4>
                        <p className="text-muted-foreground">生化科技研發業</p>
                        <p className="text-sm text-muted-foreground mt-1">生物技術研究</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Info */}
            <Card className="bg-gradient-subtle shadow-card-soft">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">為什麼選擇大凡健康？</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">專業的再生醫療研發團隊</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-foreground">與國家級醫院產學合作</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-foreground">符合國際標準的品質管理</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-warning rounded-full"></div>
                    <span className="text-foreground">創新的幹細胞外泌體技術</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-card-soft">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">聯繫表單</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      姓名 *
                    </label>
                    <Input placeholder="請輸入您的姓名" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      公司/機構
                    </label>
                    <Input placeholder="請輸入公司或機構名稱" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      電子信箱 *
                    </label>
                    <Input type="email" placeholder="請輸入電子信箱" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      聯繫電話
                    </label>
                    <Input placeholder="請輸入聯繫電話" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    諮詢主題
                  </label>
                  <Input placeholder="請輸入諮詢主題" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    詳細訊息 *
                  </label>
                  <Textarea 
                    placeholder="請詳細描述您的需求或問題..."
                    rows={5}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>我們將在1-2個工作天內回覆您</span>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  發送訊息
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