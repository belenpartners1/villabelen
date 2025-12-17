"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const languages = [
  { code: "tr", name: "Türkçe", flag: "/flags/tr.svg" },
  // { code: 'en', name: 'English', flag: '/flags/gb.svg' },
  { code: "ar", name: "العربية", flag: "/flags/sa.svg" },
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
        className="bg-white/20 backdrop-blur-md px-3 md:px-4 py-2 rounded-lg flex items-center gap-2 text-white hover:bg-white/30 transition-all duration-300"
      >
        <Image
          src={currentLanguage.flag}
          alt={currentLanguage.name}
          width={24}
          height={16}
          className="rounded-sm"
        />
        <span className="hidden md:inline">{currentLanguage.name}</span>
        <svg
          className={`w-4 h-4 transition-transform hidden md:block ${
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
        <div className="absolute top-full mt-2 right-0 bg-white/90 backdrop-blur-md rounded-lg shadow-lg overflow-hidden max-w-[60px] md:min-w-[180px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-3 md:px-4 py-3 flex items-center gap-3 hover:bg-white/50 transition-colors ${
                lang.code === currentLocale ? "bg-white/30 font-semibold" : ""
              }`}
            >
              <Image
                src={lang.flag}
                alt={lang.name}
                width={24}
                height={16}
                className="rounded-sm"
              />
              <span className="text-gray-800 hidden md:inline">
                {lang.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
