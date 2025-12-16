// app/villa-beytepe-satilik/page.jsx
import Image from "next/image";

export const metadata = {
  title: "Villa Beytepe Satılık | Villa Belen - Ankara Lüks Villalar",
  description:
    "Villa Beytepe satılık seçenekleriyle lüks yaşamı keşfedin. Havuzlu, bahçeli ve modern mimarili Villa Belen villaları Ankara’nın en prestijli bölgesinde sizleri bekliyor.",
  keywords:
    "villa beytepe satılık, beytepe satılık villa, villa satılık beytepe, ankara satılık villa, beytepe villa, villa belen, beytepe lüks villa, beytepe havuzlu villa",
  openGraph: {
    title: "Villa Beytepe Satılık | Villa Belen - Ankara Lüks Villalar",
    description:
      "Ankara Beytepe bölgesinde satılık villalarla lüks yaşamı yakalayın. Villa Belen projelerinde geniş bahçeler ve havuzlu yaşam alanları sizi bekliyor.",
    url: "https://www.villabelen.com/villa-beytepe-satilik",
    siteName: "Villa Belen",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.villabelen.com/villa-beytepe-satilik",
  },
};

export default function VillaBeytepeSatilikPage() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Villa Beytepe Satılık – Villa Belen
      </h1>
      <p className="text-lg mb-6">
        Ankara Beytepe bölgesinde satılık lüks villa arayışında olanlar için,
        Villa Belen projelerinde geniş bahçeli ve havuzlu yaşam alanları sizi
        bekliyor. Modern mimari ve prestijli lokasyonun tadını çıkarın.
      </p>

      <Image
        src="/F.garden.webp"
        alt="Villa Beytepe Satılık - Villa Belen"
        width={1200}
        height={600}
        className="rounded-2xl shadow-lg mb-8"
      />

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Neden Beytepe’de Villa Tercih Etmelisiniz?
        </h2>
        <p className="mb-4">
          Beytepe, Ankara’nın yükselen yıldızıdır. Geniş yeşil alanlar, modern
          mimarili villalar ve güvenli site yaşamı ile hem yatırım hem yaşam
          açısından en çok tercih edilen bölgelerden biridir.
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
