"use client";

import BackButton from "@/components/BackButton";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const VideoPage = () => {
  const t = useTranslations("video");
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
        className="absolute top-4 md:top-8 md:left-auto right-8 bg-white/20 backdrop-blur-md px-3 py-2 md:px-5 md:py-3 rounded-lg md:rounded-2xl flex items-center justify-center gap-2 text-white cursor-pointer hover:text-gray-400 transition-all duration-300 md:text-xl z-10"
      >
        <Image
          src="/logo.png"
          alt="Villa Belen Logo"
          width={160}
          height={160}
          className="w-36 md:w-44"
        />
      </Link>

      <video
        src={t("url")}
        loop
        controls
        // className="md:max-w-7xl max-w-2xl h-full object-cover z-50 rounded-2xl"
        className="max-w-4xl md:max-w-7xl px-4 md:px-0 h-auto z-50 rounded-2xl"
      ></video>
    </div>
  );
};

export default VideoPage;
