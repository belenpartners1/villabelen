"use client";

import BackButton from "@/components/BackButton";
import FlipBook from "@/components/FlipBook";
import catalogDataTr from "@/data/catalog-fis.json";
import catalogDataAr from "@/data/catalog-fis-ar.json";
import { useParams } from "next/navigation";

function CatalogPage() {
  const params = useParams();
  const locale = params.locale;

  const catalogData = locale === "ar" ? catalogDataAr : catalogDataTr;
  const pdfPath = locale === "ar" ? "/catalog_ar.pdf" : "/catalog_tr.pdf";

  const downloadText = {
    tr: "PDF İndir",
    en: "Download PDF",
    ar: "تحميل PDF",
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = `villa-belen-catalog-${locale}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center relative">
      <BackButton />
      <FlipBook pages={catalogData.pages} isRTL={locale === "ar"} />

      <button
        onClick={handleDownload}
        className="fixed bottom-6 right-6 bg-gradient-to-r bg-[#262954] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 z-[9999] cursor-pointer"
        style={{
          backdropFilter: "blur(10px)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <span className="hidden sm:inline">
          {downloadText[locale] || downloadText.tr}
        </span>
      </button>
    </div>
  );
}

export default CatalogPage;
