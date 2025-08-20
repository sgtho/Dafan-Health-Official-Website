import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button"; // Adjust path if needed

const languages = [
  { code: "en", label: "English" },
  { code: "zh-TW", label: "繁體中文" },
  { code: "th", label: "ไทย" },
  { code: "ja", label: "日本語" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" }
];

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-2 my-2">
      <span className="mr-2">{t("switch_language")}:</span>
      {languages.map(lang => (
        <Button
          key={lang.code}
          variant={i18n.language === lang.code ? "default" : "outline"}
          onClick={() => i18n.changeLanguage(lang.code)}
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
}