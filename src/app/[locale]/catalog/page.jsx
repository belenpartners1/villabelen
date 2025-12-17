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

  return (
    <div className="w-full min-h-screen flex justify-center items-center relative">
      <BackButton />
      <FlipBook pages={catalogData.pages} isRTL={locale === "ar"} />
    </div>
  );
}

export default CatalogPage;
