import { MapPin, Building, Users, Mail } from "lucide-react";

const Footer = () => {
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
              專注於前沿科技的應用，擁有強勁的成長潛力。以「生技創新 × 再生醫療 × 健康未來」為核心，
              致力於結合臨床需求與研發能量。
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">台中市西屯區工業區七路2-1號 (台中工業區)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm">聯繫人：鍾小姐</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">快速連結</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-background/80 hover:text-primary transition-colors">
                  首頁
                </a>
              </li>
              <li>
                <a href="#products" className="text-background/80 hover:text-primary transition-colors">
                  產品服務
                </a>
              </li>
              <li>
                <a href="#research" className="text-background/80 hover:text-primary transition-colors">
                  研發實力
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-primary transition-colors">
                  公司介紹
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-primary transition-colors">
                  聯繫我們
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">主要服務</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-background/80">幹細胞新藥研發</span>
              </li>
              <li>
                <span className="text-background/80">外泌體新藥研發</span>
              </li>
              <li>
                <span className="text-background/80">再生醫療技術</span>
              </li>
              <li>
                <span className="text-background/80">醫療諮詢服務</span>
              </li>
              <li>
                <span className="text-background/80">產學合作</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Company Details */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center space-x-3">
              <Building className="w-4 h-4 text-primary" />
              <div>
                <span className="text-background/60">產業類別：</span>
                <span className="text-background/80">生化科技研發業</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Building className="w-4 h-4 text-primary" />
              <div>
                <span className="text-background/60">資本額：</span>
                <span className="text-background/80">新台幣1億9660萬元</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-4 h-4 text-primary" />
              <div>
                <span className="text-background/60">員工人數：</span>
                <span className="text-background/80">15人</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4">經營理念</h4>
          <div className="grid md:grid-cols-5 gap-4 text-sm">
            <div className="text-center">
              <div className="text-primary font-medium">品質至上</div>
              <div className="text-background/60 text-xs mt-1">Professional, Safe</div>
            </div>
            <div className="text-center">
              <div className="text-primary font-medium">忠誠信任</div>
              <div className="text-background/60 text-xs mt-1">Teamwork, Trust</div>
            </div>
            <div className="text-center">
              <div className="text-primary font-medium">高效簡化</div>
              <div className="text-background/60 text-xs mt-1">Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-primary font-medium">共享共榮</div>
              <div className="text-background/60 text-xs mt-1">Shared Growth</div>
            </div>
            <div className="text-center">
              <div className="text-primary font-medium">透明公開</div>
              <div className="text-background/60 text-xs mt-1">Transparency</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center">
          <div className="text-sm text-background/60">
            <p className="mb-2">
              © 2024 大凡健康股份有限公司 Dafen Health Co., Ltd. 版權所有
            </p>
            <p>
              專注於幹細胞與外泌體新藥研發 | 再生醫療創新領導品牌
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;