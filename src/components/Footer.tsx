import { Building2, Mail, MapPin, Phone } from "lucide-react";
const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/lovable-uploads/732bdfe2-ef82-4065-a908-3222b6f1142f.png" alt="Dafen Health Logo" className="h-6 w-auto brightness-0 invert" />
              <span className="text-xl font-bold">Dafen Health Co., Ltd.</span>
            </div>
            <p className="text-muted mb-6 leading-relaxed">
              Dedicated to applying cutting-edge biotechnology with strong growth potential. 
              With "Biotech Innovation × Regenerative Medicine × Health Future" as our core, 
              committed to integrating clinical needs with R&D capabilities.
            </p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Building2 className="w-4 h-4" />
                <span>Industry: Biochemical Technology R&D</span>
              </div>
              
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button onClick={() => scrollToSection("home")} className="block text-muted hover:text-background transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="block text-muted hover:text-background transition-colors">
                About Us
              </button>
              <button onClick={() => scrollToSection("technology")} className="block text-muted hover:text-background transition-colors">
                Technology
              </button>
              <button onClick={() => scrollToSection("partnerships")} className="block text-muted hover:text-background transition-colors">
                Partnerships
              </button>
              <button onClick={() => scrollToSection("news")} className="block text-muted hover:text-background transition-colors">
                News
              </button>
              <button onClick={() => scrollToSection("contact")} className="block text-muted hover:text-background transition-colors">
                Contact
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Core Services</h3>
            <div className="space-y-2 text-muted">
              <div>Stem Cell Drug Development</div>
              <div>Exosome Drug Development</div>
              <div>Regenerative Medicine Technology</div>
              <div>Medical Consulting Services</div>
              <div>Industry-Academia Collaboration</div>
            </div>
            
            <div className="mt-6">
              <div className="text-sm text-muted">
                <div className="flex items-center space-x-2 mb-2">
                  
                  
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Taichung Industrial Park, Taiwan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted mb-4 md:mb-0">
              © 2024 Dafen Health Co., Ltd. All rights reserved
            </div>
            <div className="text-sm text-muted text-center md:text-right">
              Focused on Stem Cell & Exosome Drug Development | Leading Innovation in Regenerative Medicine
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;