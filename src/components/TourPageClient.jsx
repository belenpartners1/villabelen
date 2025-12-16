// components/TourPageClient.jsx
"use client";
import { useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';
import { TourButtons } from "@/components/TourButtons";

const TourPageClient = ({ tourData }) => {
  const router = useRouter();
  const t = useTranslations();

  const handleTourOpen = (item) => {
    router.push(`/tour?tour=${item.uri.replace("/", "")}`, { scroll: false });
  };

  return (
    <div className="absolute z-10 grid grid-cols-1 sm:grid-cols-3 md:gap-4 gap-2 w-11/12 max-w-4xl px-2 md:px-4 flex items-center justify-center">
      {tourData.map((item, index) => (
        <TourButtons
          key={index}
          label={t(item.labelKey)}
          uri={item.uri}
          img={item.img}
          onOpen={() => handleTourOpen(item)}
        />
      ))}
    </div>
  );
};

export default TourPageClient;
