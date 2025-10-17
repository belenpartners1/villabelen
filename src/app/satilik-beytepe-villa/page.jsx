// app/satilik-beytepe-villa/page.jsx
import Image from "next/image";

export const metadata = {
  title: "Satılık Beytepe Villa | Villa Belen - Ankara Lüks Villalar",
  description:
    "Satılık Beytepe villa ilanları: Ankara Beytepe’de özel mimarili, havuzlu ve bahçeli lüks villalar Villa Belen’de sizleri bekliyor.",
  keywords:
    "satılık beytepe villa, beytepe satılık villa, villa belen, ankara villa, beytepe tripleks villa, beytepe lüks villa",
  openGraph: {
    title: "Satılık Beytepe Villa | Villa Belen - Ankara Lüks Villalar",
    description:
      "Satılık Beytepe villa seçeneklerini keşfedin. Ankara Beytepe’de lüks villalar, geniş bahçeler ve modern tasarımlar.",
    url: "https://www.villabelen.com/satilik-beytepe-villa",
    siteName: "Villa Belen",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.villabelen.com/satilik-beytepe-villa",
  },
};

export default function SatilikBeytepeVillaPage() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Satılık Beytepe Villa – Villa Belen
      </h1>
      <p className="text-lg mb-6">
        Ankara Beytepe’de satılık villa arayanlar için özel olarak tasarlanan
        Villa Belen villaları; geniş bahçeler, havuz ve lüks yaşam alanlarıyla
        fark yaratıyor.
      </p>

      <Image
        src="/F.garden.webp"
        alt="Satılık Beytepe Villa - Villa Belen"
        width={1200}
        height={600}
        className="rounded-2xl shadow-lg mb-8"
      />
    </main>
  );
}
