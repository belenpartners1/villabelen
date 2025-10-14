// components/TourPageClient.jsx
"use client";
import { useRouter } from "next/navigation";
import { TourButtons } from "@/components/TourButtons";

const TourPageClient = ({ tourData }) => {
  const router = useRouter();

  const handleTourOpen = (item) => {
    router.push(`/tour?tour=${item.uri.replace("/", "")}`, { scroll: false });
  };

  return (
    <div className="absolute z-10 bottom-12 grid grid-cols-1 sm:grid-cols-3 md:gap-4 gap-3 w-11/12 max-w-4xl px-4">
      {tourData.map((item, index) => (
        <TourButtons
          key={index}
          label={item.label}
          uri={item.uri}
          img={item.img}
          onOpen={() => handleTourOpen(item)}
        />
      ))}
    </div>
  );
};

export default TourPageClient;
