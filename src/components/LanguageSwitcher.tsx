import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <div className="flex rounded-md border border-border overflow-hidden">
        <Button
          variant={language === "zh" ? "default" : "ghost"}
          size="sm"
          className="rounded-none px-3 py-1 text-xs h-8"
          onClick={() => setLanguage("zh")}
        >
          中文
        </Button>
        <Button
          variant={language === "en" ? "default" : "ghost"}
          size="sm"
          className="rounded-none px-3 py-1 text-xs h-8"
          onClick={() => setLanguage("en")}
        >
          EN
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;