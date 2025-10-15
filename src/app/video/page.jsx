import BackButton from "@/components/BackButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const VideoPage = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden relative flex items-center justify-center pb-4 md:pb-10">
      <BackButton />
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
        className="absolute top-4 md:top-8 md:left-auto right-8 bg-white/20 backdrop-blur-md px-3 py-2 md:px-5 md:py-3 rounded-lg md:rounded-2xl flex items-center justify-center gap-2 text-white cursor-pointer hover:text-gray-400 transition-all duration-300 md:text-xl"
      >
        <Image
          src="/logo.png"
          alt="Villa Belen Logo"
          width={160}
          height={160}
          className="w-36 md:w-44"
        />
      </Link>
    </div>
  );
};

export default VideoPage;
