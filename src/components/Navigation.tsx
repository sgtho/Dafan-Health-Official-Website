import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 bg-slate-50">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/lovable-uploads/732bdfe2-ef82-4065-a908-3222b6f1142f.png" alt="Dafen Health Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-foreground">Dafen Health</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-muted-foreground hover:text-primary transition-colors">
              {t("nav.home")}
            </button>
            <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-primary transition-colors">
              {t("nav.about")}
            </button>
            <button onClick={() => scrollToSection("technology")} className="text-muted-foreground hover:text-primary transition-colors">
              {t("nav.technology")}
            </button>
            <button onClick={() => scrollToSection("partnerships")} className="text-muted-foreground hover:text-primary transition-colors">
              {t("nav.partnerships")}
            </button>
            <button onClick={() => scrollToSection("news")} className="text-muted-foreground hover:text-primary transition-colors">
              {t("nav.news")}
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-primary transition-colors">
              {t("nav.contact")}
            </button>
            <LanguageSwitcher />
            <Button onClick={() => scrollToSection("contact")} size="sm">
              {t("nav.getInTouch")}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection("home")} className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left">
                {t("nav.home")}
              </button>
              <button onClick={() => scrollToSection("about")} className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left">
                {t("nav.about")}
              </button>
              <button onClick={() => scrollToSection("technology")} className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left">
                {t("nav.technology")}
              </button>
              <button onClick={() => scrollToSection("partnerships")} className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left">
                {t("nav.partnerships")}
              </button>
              <button onClick={() => scrollToSection("news")} className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left">
                {t("nav.news")}
              </button>
              <button onClick={() => scrollToSection("contact")} className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left">
                {t("nav.contact")}
              </button>
              <div className="px-3 py-2 flex flex-col space-y-2">
                <LanguageSwitcher />
                <Button onClick={() => scrollToSection("contact")} size="sm" className="w-full">
                  {t("nav.getInTouch")}
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;