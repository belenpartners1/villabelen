"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { useState } from "react";

const languages = [
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  // { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const currentLocale = params.locale || "tr";
  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];

  const handleLanguageChange = (locale) => {
    router.push(pathname, { locale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg flex items-center gap-2 text-white hover:bg-white/30 transition-all duration-300"
      >
        <span className="text-xl">{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white/90 backdrop-blur-md rounded-lg shadow-lg overflow-hidden min-w-[150px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-white/50 transition-colors ${
                lang.code === currentLocale ? "bg-white/30 font-semibold" : ""
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="text-gray-800">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
