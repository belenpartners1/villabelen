"use client";
import { useEffect } from "react";
import { TourButtons } from "@/components/TourButtons";
import { tourData } from "@/data/tourData";
import Image from "next/image";
import Link from "next/link";
import TourNav from "@/components/TourNav";
import BackButton from "@/components/BackButton";
import { useRouter, useSearchParams } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

const TourPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tourId = searchParams.get("tour");

  // Seçili turu bul
  const selectedTour = tourId
    ? tourData.find((item) => item.uri === `/${tourId}`)
    : null;

  // Geri butonu için popstate event listener
  useEffect(() => {
    const handlePopState = () => {
      // URL'den tour parametresi silindiğinde otomatik olarak kapanır
      // Ekstra bir şey yapmaya gerek yok
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleTourOpen = (item) => {
    // URL'e tour parametresi ekle
    router.push(`/tour?tour=${item.uri.replace("/", "")}`, { scroll: false });
  };

  const handleTourClose = () => {
    // Geri git (URL'den tour parametresini kaldır)
    router.back();
  };

  return (
    <div className="w-full min-h-screen overflow-hidden relative flex items-center justify-center pb-4 md:pb-10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/kapak.webp')",
          filter: "brightness(1.1) contrast(1.1) saturate(1.1)",
        }}
      ></div>

      <Link
        href="https://belenandpartners.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 md:top-8 md:left-auto right-8  bg-white/20 backdrop-blur-md px-3 py-2 md:px-5 md:py-3 rounded-lg md:rounded-2xl flex items-center justify-center gap-2 text-white cursor-pointer hover:text-gray-400 transition-all duration-300 md:text-xl"
      >
        <Image
          src="/logo.png"
          alt="Villa Belen Logo"
          width={160}
          height={160}
          className="w-36 md:w-44"
        />
      </Link>

      {/* Tour Buttons - Sayfa Ortasında */}
      {/* <div className="relative z-10 grid grid-cols-1 xs:grid-cols-4 sm:grid-cols-6 md:grid-cols-3 gap-2 md:gap-4 w-11/12 max-w-4xl mx-auto px-4 ">
        {tourData.map((item, index) => (
          <TourButtons
            key={index}
            label={item.label}
            uri={item.uri}
            img={item.img}
            onOpen={() => handleTourOpen(item)}
          />
        ))}
      </div> */}

      {/* Tour Buttons - Sayfa Ortasında */}
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

      {/* Modal */}
      {selectedTour && (
        <div className="fixed inset-0 z-50 bg-black w-screen h-screen overflow-hidden">
          <div className="relative w-full h-full bg-black overflow-hidden">
            {/* Back Button */}
            <button
              onClick={handleTourClose}
              className="absolute top-4 left-4 z-50 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg text-white hover:bg-black/10 transition font-bold flex items-center gap-2 cursor-pointer"
            >
              <FaChevronLeft />
              <span>Geri</span>
            </button>

            {/* Tour IFrame */}
            <TourNav
              label={selectedTour.label}
              uri={selectedTour.uri}
              img={selectedTour.img}
            />
          </div>
        </div>
      )}

      <BackButton />
    </div>
  );
};

export default TourPage;
