"use client";

import { useEffect, useState } from "react";

const TourNav = ({ label, uri }) => {
  const [open, setOpen] = useState(false);
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${uri}/`;

  // Component mount olduğunda open = true yap
  useEffect(() => {
    setOpen(true);
  }, []); // 🔸 boş array → sadece ilk renderda çalışır

  return (
    <div className="w-full h-full relative">
      {/* Geri Butonu */}
      {open && (
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 left-4 z-10 bg-white/20 backdrop-blur-md px-3 py-2 rounded-lg text-white hover:bg-white/30 transition"
        >
          Geri
        </button>
      )}

      {/* Iframe */}
      {open && (
        <iframe
          src={url}
          title={`Sanal Tur - ${label}`}
          className="w-full h-full border-0"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default TourNav;
