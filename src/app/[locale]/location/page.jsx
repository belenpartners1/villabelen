"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LocationPage = () => {
  const router = useRouter();

  useEffect(() => {
    window.open("https://maps.app.goo.gl/V6HfBBRKQSSMj9uB7");
    const timer = setTimeout(() => {
      router.push("/");
    }, 200);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <p className="text-white text-lg">
        Google Haritalar'a yönlendiriliyorsunuz...
      </p>
    </div>
  );
};

export default LocationPage;
