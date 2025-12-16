// app/beytepe-satilik-villa/page.jsx
import Image from "next/image";

export const metadata = {
  title: "Beytepe Satılık Villa | Villa Belen - Ankara Lüks Villalar",
  description:
    "Beytepe’de satılık lüks villa arayanlar için özel mimarili, havuzlu ve geniş bahçeli Villa Belen villaları. Ankara Beytepe’nin en prestijli villalarını keşfedin.",
  keywords:
    "beytepe satılık villa, ankara satılık villa, beytepe villa, beytepe lüks villa, villa belen, beytepe tripleks villa, beytepe bahçeli villa, beytepe havuzlu villa",
  openGraph: {
    title: "Beytepe Satılık Villa | Villa Belen - Ankara Lüks Villalar",
    description:
      "Ankara Beytepe’de satılık lüks villa arıyorsanız Villa Belen’e göz atın. Geniş bahçeli, havuzlu ve modern tasarımlı villalar sizi bekliyor.",
    url: "https://www.villabelen.com/beytepe-satilik-villa",
    siteName: "Villa Belen",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.villabelen.com/beytepe-satilik-villa",
  },
};

export default function BeytepeSatilikVillaPage() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Beytepe Satılık Lüks Villa – Villa Belen
      </h1>
      <p className="text-lg mb-6">
        Ankara Beytepe’de satılık villa arıyorsanız, Villa Belen’in özel
        mimarisiyle tasarlanmış lüks villasına göz atın. Geniş bahçeler, havuz,
        modern iç mekanlar ve prestijli bir yaşam alanı sizi bekliyor.
      </p>

      <Image
        src="/F.garden.webp"
        alt="Beytepe Satılık Villa - Villa Belen"
        width={1200}
        height={600}
        className="rounded-2xl shadow-lg mb-8"
      />

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Neden Beytepe’de Villa Almalısınız?
        </h2>
        <p className="mb-4">
          Beytepe, Ankara’nın en prestijli bölgelerinden biridir. Modern
          mimarili villalar, doğayla iç içe yaşam alanları ve güvenli site
          yaşamı ile hem yatırım hem de yaşam için idealdir.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Villa Belen Özellikleri</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Geniş bahçeler ve özel havuzlar</li>
          <li>Modern iç mimari ve kaliteli malzemeler</li>
          <li>Prestijli lokasyon: Beytepe / Çankaya / Ankara</li>
          <li>Güvenlikli site yaşamı</li>
          <li>Manzaralı ve ferah yaşam alanları</li>
        </ul>
      </section>
    </main>
  );
}
