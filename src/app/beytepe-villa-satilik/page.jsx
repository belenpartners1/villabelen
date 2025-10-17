// app/beytepe-villa-satilik/page.jsx
import Image from "next/image";

export const metadata = {
  title: "Beytepe Villa Satılık | Villa Belen - Ankara Lüks Villalar",
  description:
    "Beytepe villa satılık seçeneklerini keşfedin. Ankara Beytepe’de lüks, bahçeli, havuzlu ve modern villalar Villa Belen’de sizi bekliyor.",
  keywords:
    "beytepe villa satılık, beytepe satılık villa, ankara villa, lüks villa beytepe, villa belen, beytepe tripleks villa, beytepe bahçeli villa",
  openGraph: {
    title: "Beytepe Villa Satılık | Villa Belen - Ankara Lüks Villalar",
    description:
      "Beytepe villa satılık seçeneklerini keşfedin. Ankara Beytepe’de özel mimarili, havuzlu ve modern villalar Villa Belen’de.",
    url: "https://www.villabelen.com/beytepe-villa-satilik",
    siteName: "Villa Belen",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.villabelen.com/beytepe-villa-satilik",
  },
};

export default function BeytepeVillaSatilikPage() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Beytepe Villa Satılık – Villa Belen
      </h1>
      <p className="text-lg mb-6">
        Beytepe’de villa satılık arayışındaysanız, Villa Belen’in özel
        mimarisiyle tasarlanmış lüks villalarına göz atın. Modern mimari,
        havuzlu bahçeler ve prestijli yaşam alanları sizi bekliyor.
      </p>

      <Image
        src="/F.garden.webp"
        alt="Beytepe Villa Satılık - Villa Belen"
        width={1200}
        height={600}
        className="rounded-2xl shadow-lg mb-8"
      />
    </main>
  );
}
