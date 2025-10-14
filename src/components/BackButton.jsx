"use client";

import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

const BackButton = () => {
  return (
    <Link
      href="/"
      target="_self"
      rel="noopener noreferrer"
      className="absolute top-4 left-4 md:top-8 flex items-center gap-2 z-10 bg-black/50 backdrop-blur-md px-3 py-2 text-2xl rounded-lg text-white hover:bg-black/20 transition"
    >
      <FaChevronLeft />
      <p>Ana Sayfa</p>
    </Link>
  );
};

export default BackButton;
