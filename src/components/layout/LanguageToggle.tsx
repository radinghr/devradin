import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { languages } from "@/i18n";

export function LanguageToggle() {
    const { i18n } = useTranslation();
    const currentLanguage = languages.find(lang => lang.code === i18n.language)?.code || "en";
    console.log(currentLanguage, "language");

    const toggleLanguage = () => {
        const newLanguage = currentLanguage === "en" ? "de" : "en";
        i18n.changeLanguage(newLanguage);
    };

    return (
        <Button variant="outline" size="icon" onClick={toggleLanguage}>
            <span>{currentLanguage.toUpperCase()}</span>
        </Button>
    );
}
