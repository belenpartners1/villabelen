"use client";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

const TourNav = ({ label, uri }) => {
  const router = useRouter();
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${uri}/`;

  const handleTourClose = () => {
    router.back();
  };

  return (
    <>
      {/* Back Button */}
      <button
        onClick={handleTourClose}
        className="absolute top-4 left-4 z-50 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg text-white hover:bg-black/10 transition font-bold flex items-center gap-2 cursor-pointer"
      >
        <FaChevronLeft />
        <span>Geri</span>
      </button>

      {/* Tour IFrame */}
      <iframe
        src={url}
        className="w-full h-full border-0"
        allowFullScreen
        title={`Sanal Tur - ${label}`}
      />
    </>
  );
};

export default TourNav;
