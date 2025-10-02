import { useTranslation } from "react-i18next";

const languages = [
  {
    code: "en",
    name: "English",
    alt: "English",
  },
  {
    code: "ar",
    name: "العربية",
    alt: "Arabic",
  },
  {
    code: "ur",
    name: "اردو",
    alt: "Urdu",
  },
];

function LanguageToggler() {
  const { i18n } = useTranslation();

  return (
    <div className="w-full grid grid-cols-3 border border-neutral-300 rounded-md overflow-hidden">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`flex items-center justify-center py-1 cursor-pointer hoverEffect ${
            i18n.resolvedLanguage === lang.code
              ? "bg-primary text-white"
              : "text-neutral-600"
          } text-sm font-medium text-black not-last:border-r border-neutral-300`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
}

export default LanguageToggler;
