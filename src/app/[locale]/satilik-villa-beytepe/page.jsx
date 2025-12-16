// app/satilik-villa-beytepe/page.jsx
import Image from "next/image";

export const metadata = {
  title: "Satılık Villa Beytepe | Villa Belen - Ankara Lüks Villalar",
  description:
    "Satılık villa Beytepe seçenekleri: Ankara Beytepe’de modern, bahçeli, havuzlu lüks villalar Villa Belen’de satışta.",
  keywords:
    "satılık villa beytepe, beytepe satılık villa, beytepe villa, villa belen, ankara villa, beytepe lüks villa",
  openGraph: {
    title: "Satılık Villa Beytepe | Villa Belen - Ankara Lüks Villalar",
    description:
      "Satılık villa Beytepe arıyorsanız, Villa Belen size özel lüks yaşam alanları, havuzlu bahçeler ve prestijli bir çevre sunuyor.",
    url: "https://www.villabelen.com/satilik-villa-beytepe",
    siteName: "Villa Belen",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.villabelen.com/satilik-villa-beytepe",
  },
};

export default function SatilikVillaBeytepePage() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Satılık Villa Beytepe – Villa Belen
      </h1>
      <p className="text-lg mb-6">
        Satılık villa Beytepe bölgesinde arıyorsanız, Villa Belen’in eşsiz
        mimarisi ve lüks detaylarıyla tanışın. Ankara’nın en prestijli
        bölgelerinden birinde yaşam fırsatı sizi bekliyor.
      </p>

      <Image
        src="/F.garden.webp"
        alt="Satılık Villa Beytepe - Villa Belen"
        width={1200}
        height={600}
        className="rounded-2xl shadow-lg mb-8"
      />
    </main>
  );
}
