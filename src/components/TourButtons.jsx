"use client";

export const TourButtons = ({ label, uri, img, onOpen }) => {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.filter =
      "brightness(1.1) contrast(1.1) saturate(1.1) grayscale(0%)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.filter =
      "brightness(1.1) contrast(1.1) saturate(1.1) grayscale(100%)";
  };

  return (
    <button
      onClick={() => onOpen()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col items-center justify-center md:h-60 h-12 w-full md:w-60 rounded-2xl border border-white/30 backdrop-blur-md text-white shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer bg-cover bg-center overflow-hidden p-4"
      style={{
        backgroundImage: `url(${img})`,
        filter: "brightness(1.1) contrast(1.1) saturate(1.1) grayscale(100%)",
      }}
    >
      <span className="text-xl md:text-3xl font-semibold capitalize text-center px-3 py-2 text-white bg-black/50 rounded-lg backdrop-blur-sm relative z-10">
        {label}
      </span>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
    </button>
  );
};
