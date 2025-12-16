"use client";

import BackButton from "@/components/BackButton";
import FlipBook from "@/components/FlipBook";
import catalogData from "@/data/catalog-fis.json";

function CatalogPage() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center relative">
      <BackButton />
      <FlipBook pages={catalogData.pages} />
    </div>
  );
}

export default CatalogPage;
