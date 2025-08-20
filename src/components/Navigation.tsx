import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
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
            <span className="text-xl font-bold text-indigo-900">Dafen Health</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            
            <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection("technology")} className="text-muted-foreground hover:text-primary transition-colors">Technology</button>
            <button onClick={() => scrollToSection("partnerships")} className="text-muted-foreground hover:text-primary transition-colors">Partnerships</button>
            <button onClick={() => scrollToSection("news")} className="text-muted-foreground hover:text-primary transition-colors">News</button>
            <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-primary transition-colors">Contact</button>
            
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
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left">
                About
              </button>
              <button onClick={() => scrollToSection("technology")} className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left">
                Technology
              </button>
              <button onClick={() => scrollToSection("partnerships")} className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left">
                Partnerships
              </button>
              <button onClick={() => scrollToSection("news")} className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left">
                News
              </button>
              <button onClick={() => scrollToSection("contact")} className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left">
                Contact
              </button>
              <div className="px-3 py-2">
                <Button onClick={() => scrollToSection("contact")} size="sm" className="w-full">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;